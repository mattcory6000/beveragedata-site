import type { Route } from "next";
import Link from "next/link";

export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="eyebrow" style={{ marginBottom: 32 }}>
          For wine and spirits distributors
        </div>
        <h1 className="hero-statement">
          Technology strategy and systems for wine and spirits distributors.
        </h1>
        <p className="hero-lede">
          Most distributors do not have a technology team, and do not need a full-time one. They
          need someone who knows the business and can make the calls: which systems to run, what to
          build, where AI actually helps, and what to stop paying for. I co-founded a fine wine
          distributorship and built the system that ran it for over a decade, led national sales at
          the industry&apos;s leading B2B marketplace, and architected a Business Central ERP for
          wine and spirits distributors. I bring that to your operation as needed, not as another
          full-time hire.
        </p>
        <div className="hero-cta">
          <Link className="btn btn-primary" href={"/contact" as Route}>
            Get started
          </Link>
          <Link className="btn btn-secondary" href={"/work" as Route}>
            See the work
          </Link>
        </div>
      </div>
    </section>
  );
}
