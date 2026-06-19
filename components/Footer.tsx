import type { Route } from "next";
import Link from "next/link";

import { Owl } from "@/components/Owl";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Owl aria-hidden="true" className="footer-owl" />
      <div className="container footer-inner">
        <div>
          <div className="footer-wordmark">Matt Cory</div>
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
