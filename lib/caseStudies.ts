import fs from "node:fs";
import path from "node:path";

export type CaseStudy = {
  slug: string;
  title: string;
  problem: string;
  myRole: string;
  approach: string;
  technology: string;
  architecture: string;
  outcome: string;
  strategicValue: string;
  meta: string;
  summary: string;
};

const caseStudiesDirectory = path.join(process.cwd(), "content", "case-studies");

const caseStudyOrder = [
  "distributor-erp",
  "supplier-price-normalization",
  "artifact-engine",
  "fdd-knowledge-base",
  "plume-ridge-migration"
];

const featuredSlugs = ["distributor-erp", "supplier-price-normalization", "artifact-engine"];

const caseStudyMeta: Record<string, { meta: string; summary: string }> = {
  "fdd-knowledge-base": {
    meta: "KNOWLEDGE INFRASTRUCTURE",
    summary:
      "A cross-project knowledge base built from 500+ Functional Design Documents, powering internal Copilot agents over years of ERP implementation history."
  },
  "artifact-engine": {
    meta: "AI DELIVERY TOOLING",
    summary:
      "An AI-assisted pipeline that turns transcripts and project documentation into structured ERP design artifacts — built for repeat delivery, not one-off generation."
  },
  "plume-ridge-migration": {
    meta: "ENTERPRISE MIGRATION",
    summary:
      "Python ETL pipelines moving a heavily customized Dynamics NAV environment to Business Central, with discrete stages for safe iteration and lower cutover risk."
  },
  "distributor-erp": {
    meta: "DOMAIN ARCHITECTURE",
    summary:
      "A custom ERP built around a wine distributor's actual operations. Still in production more than a decade later — the durability case study."
  },
  "supplier-price-normalization": {
    meta: "DATA PIPELINE",
    summary:
      "A normalization pipeline converting heterogeneous supplier price sheets into searchable, ERP-ready records — canonical fields, validation, structured export."
  }
};

const sectionHeadings = [
  "Problem",
  "My Role",
  "Approach",
  "Technology",
  "Architecture",
  "Outcome",
  "Strategic Value"
] as const;

type SectionHeading = (typeof sectionHeadings)[number];

function parseCaseStudy(fileContents: string, slug: string): CaseStudy {
  const lines = fileContents.split("\n");
  const sections = new Map<SectionHeading, string>();
  let title = slug;
  let currentKey: SectionHeading | null = null;
  let buffer: string[] = [];

  const flush = () => {
    if (!currentKey) {
      return;
    }

    sections.set(currentKey, buffer.join("\n").trim());
    buffer = [];
  };

  for (const line of lines) {
    const trimmedLine = line.trim();

    if (trimmedLine.startsWith("# ")) {
      title = trimmedLine.replace(/^#\s+/, "").trim();
      continue;
    }

    const matchedKey = sectionHeadings.find((key) => trimmedLine === `## ${key}`);

    if (matchedKey) {
      flush();
      currentKey = matchedKey;
      continue;
    }

    if (currentKey) {
      buffer.push(line);
    }
  }

  flush();

  const meta = caseStudyMeta[slug];

  return {
    slug,
    title,
    problem: sections.get("Problem") ?? "",
    myRole: sections.get("My Role") ?? "",
    approach: sections.get("Approach") ?? "",
    technology: sections.get("Technology") ?? "",
    architecture: sections.get("Architecture") ?? "",
    outcome: sections.get("Outcome") ?? "",
    strategicValue: sections.get("Strategic Value") ?? "",
    meta: meta?.meta ?? "CASE STUDY",
    summary: meta?.summary ?? sections.get("Problem") ?? ""
  };
}

export function getAllCaseStudies(): CaseStudy[] {
  const fileNames = fs.readdirSync(caseStudiesDirectory);

  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const filePath = path.join(caseStudiesDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      return parseCaseStudy(fileContents, slug);
    })
    .sort((left, right) => {
      return caseStudyOrder.indexOf(left.slug) - caseStudyOrder.indexOf(right.slug);
    });
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return featuredSlugs
    .map((slug) => getCaseStudy(slug))
    .filter((cs): cs is CaseStudy => cs !== null);
}

export function getCaseStudy(slug: string): CaseStudy | null {
  const filePath = path.join(caseStudiesDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  return parseCaseStudy(fileContents, slug);
}
