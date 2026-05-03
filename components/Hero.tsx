import type { Route } from "next";
import Link from "next/link";

export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="eyebrow" style={{ marginBottom: 32 }}>
          Principal Architect · AI-enabled enterprise systems
        </div>
        <h1 className="hero-statement">
          I design AI-enabled systems inside enterprise software.
        </h1>
        <p className="hero-lede">
          Architecture, integration patterns, and operational tooling for organizations running on
          Dynamics 365 Business Central and the wider Microsoft platform. I build durable systems —
          the kind that outlast a single feature cycle.
        </p>
        <div className="hero-cta">
          <Link className="btn btn-primary" href={"/work" as Route}>
            Selected work <span style={{ fontFamily: "var(--font-mono)", marginLeft: 6 }}>→</span>
          </Link>
          <Link className="btn btn-secondary" href={"/contact" as Route}>
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
