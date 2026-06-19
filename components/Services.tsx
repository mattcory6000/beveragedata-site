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
        <div className="section-body-grid">
          {/* Left rail */}
          <div className="eyebrow">Services</div>

          {/* Content column — all children share this left edge */}
          <div>
            <h2 className="section-title">How I work</h2>
            <p className="lede" style={{ marginTop: 24 }}>
              Most engagements start with a short paid audit, then move to a monthly retainer sized
              to how much you need.
            </p>

            {/* Bracketed child group: left rule ties all three to "How I work" */}
            <div
              style={{
                marginTop: "var(--s-7)",
                borderLeft: "1px solid var(--rule)",
                paddingLeft: "var(--s-6)"
              }}
            >
              {/* Start here — lead block, heaviest weight */}
              <div
                style={{
                  border: "var(--border)",
                  borderRadius: "var(--radius-md)",
                  padding: "var(--s-6)",
                  marginBottom: "var(--s-6)"
                }}
              >
                <div className="eyebrow" style={{ marginBottom: "var(--s-4)" }}>Start here</div>
                <div style={{ marginBottom: "var(--s-2)" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "var(--fs-26)",
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
                <div className="meta" style={{ marginBottom: "var(--s-4)" }}>
                  Two to three weeks
                </div>
                <p>
                  A clear read on where your systems and AI spend should go, delivered as a
                  decision-ready roadmap. The lowest-risk way to start, and it stands on its own if
                  that is all you need.
                </p>
              </div>

              {/* Ongoing — three-column tier row, medium weight */}
              <div style={{ marginBottom: "var(--s-6)" }}>
                <div className="eyebrow" style={{ marginBottom: "var(--s-5)" }}>Ongoing</div>
                <div className="services-tiers">
                  {tiers.map((tier) => (
                    <div
                      key={tier.name}
                      style={{
                        padding: "var(--s-5)",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid var(--rule)"
                      }}
                    >
                      {tier.anchor && (
                        <div
                          className="eyebrow"
                          style={{ color: "var(--accent)", marginBottom: "var(--s-3)" }}
                        >
                          Most distributors
                        </div>
                      )}
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

              {/* Builds — quiet bridge, lightest weight, no border */}
              <div>
                <div className="eyebrow" style={{ marginBottom: "var(--s-3)" }}>Builds</div>
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "var(--fs-22)",
                    fontWeight: "var(--w-reg)",
                    letterSpacing: "-0.01em",
                    color: "var(--ink)",
                    marginBottom: "var(--s-3)"
                  }}
                >
                  Custom tools and applications
                </div>
                <p style={{ color: "var(--ink-3)" }}>
                  Scoped after a short paid discovery and priced to the outcome, not the hour.
                  Examples below.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
