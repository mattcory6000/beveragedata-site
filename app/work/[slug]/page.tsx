import type { Metadata } from "next";
import type { Route } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getAllCaseStudies, getCaseStudy } from "@/lib/caseStudies";

type CaseStudyPageProps = {
  params: {
    slug: string;
  };
};

const blocks = [
  { key: "problem", label: "§ 01 · Problem", heading: "What broke, and why it mattered." },
  { key: "myRole", label: "§ 02 · My Role", heading: "What I owned." },
  { key: "approach", label: "§ 03 · Approach", heading: "How I framed the work." },
  { key: "technology", label: "§ 04 · Technology", heading: "The toolchain." },
  {
    key: "architecture",
    label: "§ 05 · Architecture",
    heading: "How the system was put together."
  },
  { key: "outcome", label: "§ 06 · Outcome", heading: "What changed." },
  {
    key: "strategicValue",
    label: "§ 07 · Strategic Value",
    heading: "Why it mattered beyond the build."
  }
] as const;

function MarkdownLite({ content }: { content: string }) {
  const blocks = content
    .trim()
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  return (
    <div className="cs-copy">
      {blocks.map((block, index) => {
        if (block.startsWith("### ")) {
          return (
            <h4 className="cs-subhead" key={index}>
              {block.replace(/^###\s+/, "")}
            </h4>
          );
        }

        if (block.startsWith("- ")) {
          const items = block
            .split("\n")
            .map((line) => line.trim())
            .filter((line) => line.startsWith("- "))
            .map((line) => line.replace(/^-\s+/, ""));

          return (
            <ul className="cs-list" key={index}>
              {items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          );
        }

        if (/^\d+\.\s/.test(block)) {
          const items = block
            .split("\n")
            .map((line) => line.trim())
            .filter((line) => /^\d+\.\s/.test(line))
            .map((line) => line.replace(/^\d+\.\s+/, ""));

          return (
            <ol className="cs-list" key={index}>
              {items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ol>
          );
        }

        return <p key={index}>{block}</p>;
      })}
    </div>
  );
}

export function generateStaticParams() {
  return getAllCaseStudies().map((caseStudy) => ({
    slug: caseStudy.slug
  }));
}

export function generateMetadata({ params }: CaseStudyPageProps): Metadata {
  const caseStudy = getCaseStudy(params.slug);

  if (!caseStudy) {
    return {};
  }

  return {
    title: caseStudy.title,
    description: caseStudy.summary || caseStudy.problem
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = getCaseStudy(params.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <article>
      <section className="cs-hero">
        <div className="container">
          <div className="cs-eyebrow-row">
            <span className="eyebrow">{caseStudy.meta}</span>
            <span
              style={{
                color: "var(--ink-3)",
                fontFamily: "var(--font-sans)",
                fontSize: 13
              }}
            >
              ·
            </span>
            <Link
              href={"/work" as Route}
              className="link-quiet"
              style={{ fontSize: 13, color: "var(--ink-3)" }}
            >
              ← Back to work
            </Link>
          </div>
          <h1 className="cs-title">{caseStudy.title}</h1>
          <p className="cs-lede">{caseStudy.summary || caseStudy.problem}</p>
        </div>
      </section>

      <div className="container">
        {blocks.map((block) => {
          const body = caseStudy[block.key];
          if (!body) {
            return null;
          }
          return (
            <div className="cs-block" key={block.key}>
              <span className="eyebrow cs-block-eyebrow">{block.label}</span>
              <div>
                <h3>{block.heading}</h3>
                <MarkdownLite content={body} />
              </div>
            </div>
          );
        })}

        <div style={{ padding: "var(--s-9) 0", borderTop: "1px solid var(--rule)" }}>
          <Link href={"/work" as Route} className="link-quiet">
            ← All case studies
          </Link>
        </div>
      </div>
    </article>
  );
}
