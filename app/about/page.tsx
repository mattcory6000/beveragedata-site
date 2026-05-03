import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Matt Cory — Principal Architect for AI-enabled enterprise applications. Twenty years inside beverage alcohol technology and the Microsoft Dynamics ecosystem."
};

export default function AboutPage() {
  return (
    <article className="container">
      <header className="cs-hero">
        <div className="eyebrow" style={{ marginBottom: 24 }}>
          About
        </div>
        <h1 className="cs-title">
          Enterprise architecture with a delivery bias.
        </h1>
        <p className="cs-lede">
          I work at the intersection of AI systems, ERP platforms, and operational workflows. My
          background spans enterprise application architecture, data migration, document systems,
          and software used directly by beverage alcohol distributors and suppliers.
        </p>
      </header>

      <section className="cs-block">
        <span className="eyebrow cs-block-eyebrow">§ 01 · Current focus</span>
        <div>
          <h3>Practical AI systems that can be governed and adopted.</h3>
          <p>
            Much of my recent work centers on Dynamics 365 Business Central implementations,
            documentation infrastructure, and AI-assisted project delivery. The emphasis is usually
            less about prototypes and more about building systems that project teams can actually
            use under deadline pressure.
          </p>
          <p>
            That includes knowledge retrieval, document generation workflows, integration patterns,
            and operational analytics that make enterprise software programs more scalable and less
            fragile.
          </p>
        </div>
      </section>

      <section className="cs-block">
        <span className="eyebrow cs-block-eyebrow">§ 02 · Background</span>
        <div>
          <h3>Twenty years inside beverage alcohol technology.</h3>
          <p>
            Solutions Architect at Western Computer, focused on the Microsoft Dynamics 365 Business
            Central ecosystem. The work spans architecture, migration, and operational tooling — most
            of it for organizations where the previous attempt at the same problem didn&apos;t hold
            up.
          </p>
          <p>
            I take on a small number of engagements at a time. The fit I look for is an organization
            that has tried something and learned what doesn&apos;t hold up — that&apos;s usually
            where durable architecture earns its keep.
          </p>
        </div>
      </section>

      <section className="cs-block">
        <span className="eyebrow cs-block-eyebrow">§ 03 · Areas</span>
        <div>
          <h3>Architectural focus.</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              "AI systems for enterprise software",
              "Copilot and agent architectures grounded in operational data",
              "ERP integrations and migration systems",
              "Documentation infrastructure and knowledge systems",
              "Data pipelines and operational analytics"
            ].map((item) => (
              <li
                key={item}
                style={{
                  fontSize: "var(--fs-17)",
                  lineHeight: 1.65,
                  color: "var(--ink-2)",
                  padding: "var(--s-3) 0",
                  borderBottom: "1px solid var(--rule)",
                  maxWidth: "64ch"
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div style={{ padding: "var(--s-9) 0" }} />
    </article>
  );
}
