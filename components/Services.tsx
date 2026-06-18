type Tier = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  anchor?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Advisory",
    price: "$2,500/mo",
    cadence: "About half a day a week",
    description:
      "Build-vs-buy input, vendor questions, roadmap check-ins, judgment on call."
  },
  {
    name: "Fractional CTO",
    price: "$5,000/mo",
    cadence: "One to one and a half days a week",
    description:
      "Active technology strategy, vendor management, AI oversight, and roadmap ownership. The right fit for most distributors who want a technology lead without a full-time hire.",
    anchor: true
  },
  {
    name: "Embedded",
    price: "$8,500/mo",
    cadence: "Around two days a week, time-boxed",
    description:
      "For a migration or an AI rollout. Steps back to the Fractional CTO tier once things are stable."
  }
];

export function Services() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Services</div>
          <div>
            <h2 className="section-title">How I work</h2>
            <p className="lede" style={{ marginTop: 24 }}>
              Most engagements start with a short paid audit, then move to a monthly retainer sized
              to how much you need.
            </p>
          </div>
        </div>

        <div className="cs-block">
          <div className="eyebrow">Start here</div>
          <div>
            <div style={{ marginBottom: 4 }}>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "var(--fs-22)",
                  fontWeight: "var(--w-reg)",
                  letterSpacing: "-0.01em",
                  color: "var(--ink)"
                }}
              >
                AI + Systems Readiness Audit
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--fs-14)",
                  color: "var(--ink-3)",
                  marginLeft: "var(--s-4)"
                }}
              >
                $8,500
              </span>
            </div>
            <div
              className="meta"
              style={{ marginBottom: "var(--s-4)" }}
            >
              Two to three weeks
            </div>
            <p>
              A clear read on where your systems and AI spend should go, delivered as a
              decision-ready roadmap. The lowest-risk way to start, and it stands on its own if
              that is all you need.
            </p>
          </div>
        </div>

        <div className="cs-block">
          <div className="eyebrow">Ongoing</div>
          <div style={{ display: "grid", gap: "var(--s-5)" }}>
            {tiers.map((tier) => (
              <div
                key={tier.name}
                style={{
                  padding: "var(--s-5)",
                  borderRadius: "var(--radius-md)",
                  border: tier.anchor
                    ? "var(--border-strong)"
                    : "var(--border)",
                  background: tier.anchor ? "var(--paper-2)" : undefined
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: "var(--s-4)",
                    flexWrap: "wrap",
                    marginBottom: 4
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "var(--fs-19)",
                      fontWeight: "var(--w-reg)",
                      letterSpacing: "-0.01em",
                      color: "var(--ink)"
                    }}
                  >
                    {tier.name}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--fs-14)",
                      color: "var(--ink-3)"
                    }}
                  >
                    {tier.price}
                  </span>
                </div>
                <div className="meta" style={{ marginBottom: "var(--s-3)" }}>
                  {tier.cadence}
                </div>
                <p style={{ maxWidth: "none" }}>{tier.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cs-block">
          <div className="eyebrow">Builds</div>
          <div>
            <div style={{ marginBottom: 4 }}>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "var(--fs-22)",
                  fontWeight: "var(--w-reg)",
                  letterSpacing: "-0.01em",
                  color: "var(--ink)"
                }}
              >
                Custom tools and applications
              </span>
            </div>
            <p style={{ marginTop: "var(--s-4)" }}>
              Scoped after a short paid discovery and priced to the outcome, not the hour. Examples
              below.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
