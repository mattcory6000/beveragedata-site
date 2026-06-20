"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Owl } from "@/components/Owl";

const navLinks = [
  { href: "/", label: "Home", match: (p: string) => p === "/" },
  { href: "/work", label: "Work", match: (p: string) => p === "/work" || p.startsWith("/work/") },
  { href: "/about", label: "About", match: (p: string) => p === "/about" }
] as const satisfies ReadonlyArray<{ href: Route; label: string; match: (path: string) => boolean }>;

export function Navbar() {
  const pathname = usePathname() ?? "/";

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="nav-mark" aria-label="Home">
          <Owl aria-hidden="true" />
        </Link>
        <nav className="nav-links">
          {navLinks.map((link) => {
            const isActive = link.match(pathname);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={"nav-link" + (isActive ? " active" : "")}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href={"/contact" as Route}
            className={"nav-link accent" + (pathname === "/contact" ? " active" : "")}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
