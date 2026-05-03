import type { Route } from "next";

import { Hero } from "@/components/Hero";
import { WorkRow } from "@/components/WorkRow";
import { getAllCaseStudies } from "@/lib/caseStudies";

export default function HomePage() {
  const caseStudies = getAllCaseStudies();

  return (
    <>
      <Hero />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Selected work</div>
            <h2 className="section-title">
              A handful of systems I&apos;ve built or rebuilt — usually inside organizations where the
              previous attempt didn&apos;t hold up.
            </h2>
          </div>
          <div className="work-list">
            {caseStudies.map((caseStudy) => (
              <WorkRow
                key={caseStudy.slug}
                meta={caseStudy.meta}
                title={caseStudy.title}
                summary={caseStudy.summary}
                href={`/work/${caseStudy.slug}` as Route}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Focus</div>
            <div>
              <h2 className="section-title">
                Architecture for AI-enabled enterprise systems.
              </h2>
              <p className="lede" style={{ marginTop: 24 }}>
                Twenty years inside beverage alcohol technology, ERP delivery, and Microsoft platform
                work. The engagements I take on are the ones where the architecture has to outlast
                me.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
