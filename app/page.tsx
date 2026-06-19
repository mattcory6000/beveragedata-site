import type { Route } from "next";
import Link from "next/link";

import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WorkRow } from "@/components/WorkRow";
import { getFeaturedCaseStudies } from "@/lib/caseStudies";

const pillars = [
  {
    number: "01",
    title: "I have sat in your chair.",
    body: "I co-founded a wine distributorship and built the operating system that ran it: order entry, inventory, landed cost, depletion allowances, supplier billbacks. It ran the business for a decade and still runs today. I understand distributor operations from the inside."
  },
  {
    number: "02",
    title: "Judgment, not hype.",
    body: "The hard technology questions for a distributor are usually build-vs-buy, vendor strategy, and where AI is worth the spend. I give you a straight read, including when the answer is to do nothing or to stop paying for something."
  },
  {
    number: "03",
    title: "I build, not just advise.",
    body: "When something needs to be built — a report, an integration, an agent, a tool — I can architect and ship it, or scope and supervise it. The case studies below are systems I designed and shipped."
  }
];

export default function HomePage() {
  const featuredCaseStudies = getFeaturedCaseStudies();

  return (
    <>
      <Hero />

      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "var(--s-7)"
            }}
          >
            {pillars.map((pillar) => (
              <div key={pillar.number}>
                <div
                  className="eyebrow"
                  style={{
                    paddingTop: "var(--s-5)",
                    borderTop: "1px solid var(--rule)",
                    marginBottom: "var(--s-4)"
                  }}
                >
                  {pillar.number}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "var(--fs-22)",
                    fontWeight: "var(--w-reg)",
                    letterSpacing: "-0.01em",
                    lineHeight: "var(--lh-snug)",
                    color: "var(--ink)",
                    marginBottom: "var(--s-4)"
                  }}
                >
                  {pillar.title}
                </div>
                <p style={{ maxWidth: "none" }}>{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Services />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Selected work</div>
            <div>
              <h2 className="section-title">Selected work</h2>
              <p className="lede" style={{ marginTop: 24 }}>
                These are systems I designed and shipped. The advice I give comes from building
                things like these.
              </p>
            </div>
          </div>
          <div className="work-list">
            {featuredCaseStudies.map((caseStudy) => (
              <WorkRow
                key={caseStudy.slug}
                meta={caseStudy.meta}
                title={caseStudy.title}
                summary={caseStudy.summary}
                href={`/work/${caseStudy.slug}` as Route}
              />
            ))}
          </div>
          <div style={{ marginTop: "var(--s-6)" }}>
            <Link href={"/work" as Route} className="link">
              See more work →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
