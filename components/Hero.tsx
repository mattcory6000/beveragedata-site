import type { Route } from "next";
import Link from "next/link";

import { Owl } from "@/components/Owl";

export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-layout">
          <div className="hero-copy">
            <div className="eyebrow" style={{ marginBottom: 32 }}>
              For wine and spirits distributors
            </div>
            <h1 className="hero-statement">
              AI and technology strategy for wine and spirits distributors.
            </h1>
            <p className="hero-tagline">{/* tagline */}</p>
            <p className="hero-lede">
              Most distributors do not have a CTO and do not need a full-time one. They need someone who knows the business and can make the calls, on AI and everything around it, without a full-time hire.
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
          <div className="hero-owl-col">
            <div className="hero-owl-wrap">
              <Owl className="hero-owl" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
