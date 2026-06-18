import type { Route } from "next";
import type { Metadata } from "next";

import { WorkRow } from "@/components/WorkRow";
import { getAllCaseStudies } from "@/lib/caseStudies";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Distributor operations, ERP and data work, and AI tooling — systems designed and shipped for wine and spirits distributors and enterprise clients."
};

export default function WorkPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <article className="container">
      <header className="cs-hero">
        <div className="eyebrow" style={{ marginBottom: 24 }}>
          Selected work
        </div>
        <h1 className="cs-title">Systems I have designed and shipped.</h1>
        <p className="cs-lede">
          Distributor operations, ERP and data work, and AI tooling, built to hold up in
          production. The judgment behind a retainer comes from work like this.
        </p>
      </header>

      <div className="work-list" style={{ paddingBottom: "var(--s-9)" }}>
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
    </article>
  );
}
