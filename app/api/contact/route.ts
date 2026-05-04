import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TO_ADDRESS = "matt.cory@gmail.com";
const FROM_ADDRESS =
  process.env.CONTACT_FROM_ADDRESS || "Website Contact <onboarding@resend.dev>";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  topic?: unknown;
  message?: unknown;
  source?: unknown;
  // honeypot — bots will fill it; humans won't see it
  website?: unknown;
};

function asTrimmedString(value: unknown, max = 5000): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  let payload: ContactPayload;
  try {
    payload = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON." },
      { status: 400 }
    );
  }

  // Honeypot: silently accept to avoid signaling bots.
  const honeypot = asTrimmedString(payload.website, 200);
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  const name = asTrimmedString(payload.name, 200);
  const email = asTrimmedString(payload.email, 200);
  const subject = asTrimmedString(payload.subject ?? payload.topic, 200);
  const message = asTrimmedString(payload.message, 10000);
  const source = asTrimmedString(payload.source, 500);

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Name is required.";
  if (!email) errors.email = "Email is required.";
  else if (!EMAIL_RE.test(email)) errors.email = "Enter a valid email.";
  if (!message) errors.message = "Message is required.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, error: "Validation failed.", fields: errors },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set.");
    return NextResponse.json(
      { ok: false, error: "Email service is not configured." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const referer = req.headers.get("referer") || "";
  const userAgent = req.headers.get("user-agent") || "";

  const subjectLine = subject
    ? `Contact form — ${subject} — ${name}`
    : `Contact form — ${name}`;

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    subject ? `Topic/Subject: ${subject}` : null,
    source ? `Source: ${source}` : null,
    referer ? `Referer: ${referer}` : null,
    userAgent ? `User-Agent: ${userAgent}` : null,
    "",
    "Message:",
    message
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <div style="font-family:ui-sans-serif,system-ui,sans-serif;font-size:14px;line-height:1.6;color:#111;">
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      ${subject ? `<p><strong>Topic/Subject:</strong> ${escapeHtml(subject)}</p>` : ""}
      ${source ? `<p><strong>Source:</strong> ${escapeHtml(source)}</p>` : ""}
      ${referer ? `<p><strong>Referer:</strong> ${escapeHtml(referer)}</p>` : ""}
      <hr style="border:none;border-top:1px solid #e5e5e5;margin:16px 0;" />
      <p style="white-space:pre-wrap;">${escapeHtml(message)}</p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [TO_ADDRESS],
      replyTo: email,
      subject: subjectLine,
      text,
      html
    });

    if (error) {
      console.error("Contact form: Resend error", error);
      return NextResponse.json(
        { ok: false, error: "Could not send message." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form: unexpected error", err);
    return NextResponse.json(
      { ok: false, error: "Could not send message." },
      { status: 500 }
    );
  }
}
