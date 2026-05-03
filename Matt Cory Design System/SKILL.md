---
name: matt-cory-design
description: Use this skill to generate well-branded interfaces and assets for Matt Cory — a personal professional site for a Principal Architect specializing in AI-enabled enterprise systems. Editorial, restrained, type-led. Use for production code or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation

- **Voice**: calm, precise, declarative. First-person. No emoji. Sentence case.
- **Type**: Source Serif 4 (headings, light weight) · Inter (body, UI) · JetBrains Mono (code, diagram labels). All from Google Fonts.
- **Color**: warm-neutral paper-and-ink (`#FAF7F2` paper, `#1A1A1A` ink) with a single oxblood accent (`#7A2E2A`) used sparingly for links and focus.
- **Foundations**: `colors_and_type.css` is the source of truth. Import it.
- **UI Kit**: `ui_kits/website/` — Nav, Hero, WorkIndex, WritingIndex, CaseStudy, About, Now, Contact, Footer.
- **Assets**: monogram + wordmark in `assets/`. Hand-drawn diagrams done inline via SVG fractal-noise displacement; see `preview/diagram-style.html` and `ui_kits/website/CaseStudy.jsx`.
- **Iconography**: Lucide (1.5px stroke), inline SVG. Sanctioned unicode marks: → ↗ · — §
- **Motion**: 200ms `cubic-bezier(0.2, 0, 0, 1)`. Subtle. Never bouncy.

## What to avoid

- Emoji, gradients, frosted glass, shadow-heavy cards, rainbow semantic colors, startup-style hype copy, scale-on-hover, theatrical animation.
