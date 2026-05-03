import type { Route } from "next";
import Link from "next/link";

type WorkRowProps = {
  meta: string;
  title: string;
  summary: string;
  href: Route;
};

export function WorkRow({ meta, title, summary, href }: WorkRowProps) {
  return (
    <Link href={href} className="work-row">
      <div className="work-meta">{meta}</div>
      <div>
        <div className="work-title">{title}</div>
        <p className="work-summary">{summary}</p>
      </div>
      <div className="work-arrow">→</div>
    </Link>
  );
}
