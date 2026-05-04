import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Available for architecture, systems design, and advisory work on AI-enabled enterprise systems and ERP delivery."
};

export default function ContactPage() {
  return (
    <article className="container">
      <header className="cs-hero">
        <div className="eyebrow" style={{ marginBottom: 24 }}>
          Contact
        </div>
        <h1 className="cs-title">
          For architecture engagements, advisory work, or speaking.
        </h1>
        <p className="cs-lede">
          I take on a small number of clients each year. The best fit is usually an organization
          that has tried something and learned what doesn&apos;t hold up. If the work involves
          AI-enabled enterprise systems, ERP architecture, documentation infrastructure, or
          migration strategy, include a short note about the operating context and timeline.
        </p>
      </header>

      <section style={{ padding: "var(--s-7) 0 var(--s-9)" }}>
        <ContactForm />
        <div className="contact-meta">
          <div className="contact-meta-row">
            <span className="lbl">Email</span>
            <ObfuscatedEmail
              className="link"
              user="matt.cory"
              domain="beveragedata.ai"
            />
          </div>
          <div className="contact-meta-row">
            <span className="lbl">Elsewhere</span>
            <a
              className="link"
              href="https://www.linkedin.com/in/matt-cory-ph-d/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span style={{ fontFamily: "var(--font-mono)" }}>↗</span>
            </a>
            <a
              className="link"
              href="https://github.com/mattcory6000"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span style={{ fontFamily: "var(--font-mono)" }}>↗</span>
            </a>
          </div>
          <div className="contact-meta-row">
            <span className="lbl">Located</span>
            <span>Remote · United States</span>
          </div>
        </div>
      </section>
    </article>
  );
}
