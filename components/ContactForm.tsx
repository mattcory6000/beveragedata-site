"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "sent" | "error";

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      topic: String(data.get("topic") || ""),
      message: String(data.get("message") || ""),
      website: String(data.get("website") || ""),
      source: typeof window !== "undefined" ? window.location.pathname : ""
    };

    setStatus("submitting");
    setErrorMsg("");
    setFieldErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        fields?: FieldErrors;
      };

      if (!res.ok || !json.ok) {
        if (json.fields) setFieldErrors(json.fields);
        setErrorMsg(json.error || "Could not send message. Please try again.");
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        style={{
          marginTop: "var(--s-7)",
          padding: 24,
          border: "1px solid var(--rule)",
          borderLeft: "2px solid var(--accent)",
          background: "var(--paper-2)",
          borderRadius: 4,
          maxWidth: 520
        }}
      >
        <div className="eyebrow">Sent</div>
        <div
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 22,
            color: "var(--ink)",
            marginTop: 8,
            letterSpacing: "-0.01em"
          }}
        >
          Thanks. I&apos;ll reply within two working days.
        </div>
      </div>
    );
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      style={{ marginTop: "var(--s-7)" }}
      noValidate
    >
      <div className="field">
        <label htmlFor="cf-name">Name</label>
        <input
          id="cf-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-invalid={Boolean(fieldErrors.name) || undefined}
        />
        {fieldErrors.name && <span className="field-hint">{fieldErrors.name}</span>}
      </div>

      <div className="field">
        <label htmlFor="cf-email">Email</label>
        <input
          id="cf-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={Boolean(fieldErrors.email) || undefined}
        />
        {fieldErrors.email && <span className="field-hint">{fieldErrors.email}</span>}
      </div>

      <div className="field">
        <label htmlFor="cf-topic">Topic</label>
        <select id="cf-topic" name="topic" defaultValue="Architecture engagement">
          <option>Architecture engagement</option>
          <option>Advisory / fractional</option>
          <option>Speaking</option>
          <option>Other</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message"
          name="message"
          rows={6}
          required
          placeholder="A brief outline of the system or problem you're working on."
          aria-invalid={Boolean(fieldErrors.message) || undefined}
        />
        <span className="field-hint">
          {fieldErrors.message || "A paragraph is plenty. Confidential is fine."}
        </span>
      </div>

      {/* Honeypot — visually hidden, ignored by humans */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label htmlFor="cf-website">Website</label>
        <input id="cf-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <button
          className="btn btn-primary"
          type="submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending…" : "Send message"}
          <span style={{ fontFamily: "var(--font-mono)", marginLeft: 6 }}>→</span>
        </button>
      </div>

      {status === "error" && errorMsg && (
        <div
          role="alert"
          style={{
            marginTop: "var(--s-3)",
            fontFamily: "var(--font-sans)",
            fontSize: "var(--fs-14)",
            color: "var(--ink-2)"
          }}
        >
          {errorMsg}
        </div>
      )}
    </form>
  );
}
