import type { Route } from "next";
import Link from "next/link";

import { Owl } from "@/components/Owl";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          {/*
            Owl-as-M dial-in levers — adjust these three values to tune the M:
              --owl-m-size:    owl height/width relative to font-size (cap height ≈ 0.72em)
              --owl-m-nudge:   vertical shift in em; positive moves owl down toward baseline
              --owl-m-bearing: right margin between owl and "att"
          */}
          <div
            className="footer-wordmark"
            style={
              {
                "--owl-m-size": "0.9em",
                "--owl-m-nudge": "0.08em",
                "--owl-m-bearing": "0.04em"
              } as React.CSSProperties
            }
          >
            <span className="sr-only">M</span>
            <span
              aria-hidden="true"
              style={{
                display: "inline-block",
                width: "var(--owl-m-size)",
                height: "var(--owl-m-size)",
                verticalAlign: "baseline",
                transform: "translateY(var(--owl-m-nudge))",
                marginRight: "var(--owl-m-bearing)"
              }}
            >
              <Owl aria-hidden="true" />
            </span>
            att Cory
          </div>
          <div className="footer-meta">Principal Architect — AI-enabled enterprise systems</div>
          <div className="footer-meta" style={{ marginTop: 4 }}>
            &copy; {year}. Set in Source Serif 4 &amp; Inter.
          </div>
        </div>
        <nav className="footer-links">
          <Link className="footer-link" href={"/work" as Route}>
            Work
          </Link>
          <Link className="footer-link" href={"/about" as Route}>
            About
          </Link>
          <Link className="footer-link" href={"/contact" as Route}>
            Contact
          </Link>
          <a
            className="footer-link"
            href="https://github.com/mattcory6000"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span style={{ fontFamily: "var(--font-mono)" }}>↗</span>
          </a>
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/matt-cory-ph-d/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span style={{ fontFamily: "var(--font-mono)" }}>↗</span>
          </a>
        </nav>
      </div>
    </footer>
  );
}
