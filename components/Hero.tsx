"use client";

import { useEffect, useRef } from "react";
import type { Route } from "next";
import Link from "next/link";

import { Owl } from "@/components/Owl";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const owlWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId: number | null = null;

    function onScroll() {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        if (!heroRef.current || !owlWrapRef.current) return;
        const rect = heroRef.current.getBoundingClientRect();
        const progress = Math.min(1, Math.max(0, -rect.top / (rect.height * 0.35)));
        owlWrapRef.current.style.setProperty("--owl-scroll", String(progress));
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
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
            <div className="hero-owl-wrap" ref={owlWrapRef}>
              <Owl className="hero-owl" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
