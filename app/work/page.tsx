import type { Route } from "next";
import type { Metadata } from "next";

import { WorkRow } from "@/components/WorkRow";
import { getAllCaseStudies } from "@/lib/caseStudies";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from AI systems, ERP delivery, and enterprise data work — practical architecture designed to hold up in production."
};

export default function WorkPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <article className="container">
      <header className="cs-hero">
        <div className="eyebrow" style={{ marginBottom: 24 }}>
          Work
        </div>
        <h1 className="cs-title">
          Case studies from AI systems, ERP delivery, and enterprise data work.
        </h1>
        <p className="cs-lede">
          These projects reflect the operating pattern behind my work — practical architecture,
          structured delivery, and systems designed to hold up in production environments.
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