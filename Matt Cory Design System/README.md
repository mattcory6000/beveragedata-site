# Matt Cory — Design System

A design system for the personal professional website of **Matt Cory**, Principal Architect for AI-enabled enterprise applications. The system is editorial, restrained, and durable — built to communicate technical depth and architectural thinking without resorting to startup-style hype.

## Sources

No codebase, Figma, or existing brand assets were attached. The system was built from the brief and the answers to the kickoff questionnaire. All visual decisions are open for iteration.

## Index

| Path | What's there |
|---|---|
| `colors_and_type.css` | Foundations — color tokens, type families, scale, semantic element styles |
| `fonts/` | _(empty — fonts loaded from Google Fonts; see "Font substitutions" below)_ |
| `assets/` | Logos (monogram, wordmark), icons, illustration assets |
| `preview/` | Specimen cards rendered in the Design System tab |
| `ui_kits/website/` | High-fidelity website kit — homepage, about, case study, writing index, contact |
| `SKILL.md` | Cross-compatible skill manifest for Agent Skills / Claude Code |

### UI kits

- `ui_kits/website/` — the personal site. Open `index.html`; click the nav to move through Work, Writing, Now, About, Contact. Click any work row to see the full case-study layout with hand-drawn diagram.

## Font substitutions

The brief named no specific typefaces. Selected from Google Fonts to match the editorial/architectural feel:

- **Headings — Source Serif 4** (substituting the Tiempos/Charter family these sites tend to use). Variable, well-hinted, free.
- **Body & UI — Inter** (substituting Söhne / Founders Grotesk). Workhorse grotesque.
- **Code — JetBrains Mono.** Technical, calm, appropriate for an architect.

> **Ask:** if you'd prefer Tiempos, Söhne, GT America, or another licensed pairing, drop the `.woff2`/`.ttf` files in `fonts/` and I'll wire them into `colors_and_type.css`.

---

## Content fundamentals

Copy on this site does the heavy lifting. Visuals are scaffolding for it.

**Tone.** Calm, precise, confident. Declarative, not promotional. The voice of someone who has seen enterprise software fail in expensive ways and learned what holds up. Avoid hedging; avoid hype.

**Person & address.** First-person where appropriate ("I architect…"), second-person sparingly ("your team"), never "we" — this is a personal site, not a firm. Bios in third person are fine on About / Speaking pages.

**Casing.** Sentence case for headings ("Case studies," not "Case Studies"). Title case only for proper nouns and product names. Eyebrow labels are UPPERCASE with letter-spacing.

**Punctuation.** Em dashes — used sparingly — for parenthetical thoughts. Oxford commas. Numerals as digits from 10 up; spelled-out below. ISO dates in metadata (2024-08-12), prose dates spelled out (August 2024).

**Length.** Headlines short and load-bearing. Ledes 1–2 sentences. Body paragraphs 2–4 sentences; break for breathing room.

**Emoji.** None. Not in body, not in headings, not in iconography.

**Examples — good copy:**

> _Hero:_ "I design AI-enabled systems inside enterprise software."
> _Lede:_ "Architecture, integration patterns, and operational tooling for organizations running on Dynamics 365 Business Central and the wider Microsoft platform."
> _Case study eyebrow:_ "DOCUMENTATION INFRASTRUCTURE · 2024"
> _Section heading:_ "What broke, and why it kept breaking."
> _Footnote:_ "Names withheld at the client's request."

**Examples — what to avoid:**

> ❌ "🚀 Supercharging your enterprise with AI!"
> ❌ "We're a passionate team helping you unlock value."
> ❌ "Game-changing solutions for the modern enterprise."

---

## Visual foundations

**Color.** Warm neutrals (paper-and-ink). A single editorial accent — deep oxblood `#7A2E2A` — used like a pull-quote: links, focus, the occasional rule. The palette intentionally has no rainbow of semantic colors; success and warn are quiet earth tones, never primary.

**Type.** Source Serif 4 for headings (light weight, tight tracking) and Inter for body. Headings stay serif even at small sizes (h4, h5). Eyebrows are the one place we go uppercase + tracked — they do a lot of structural work.

**Spacing.** 4-px base, generous editorial scale. The site breathes. Section breaks are 96–128px, not 48px. One idea per screen at the top of pages; density allowed inside indexes and case studies.

**Backgrounds.** Solid paper (`#FAF7F2`). No gradients. No textures. No full-bleed photography unless explicitly added later. Sections delineate via `--paper-2` (sunken) and hairline rules (`--rule`), never via bright color blocks.

**Animation.** Whisper-quiet. 200ms `cubic-bezier(0.2, 0, 0, 1)` is the default. Hover = color transition + an animated underline that grows from left. Scroll reveals are short opacity+4px-translate fades, never staggered or theatrical. No bounces. No looped motion.

**Hover & press.**
- Links — color shifts ink → oxblood; underline appears (1px, accent).
- Quiet links — underline appears in ink.
- Buttons — bg darkens 8%, no scale. Pressed state nudges down 1px.
- Cards — hairline border darkens to `--rule-strong`; no shadow lift.

**Borders & rules.** Hairline 1px is the default everywhere. `--rule` for ambient division, `--rule-strong` for emphasis. Rules do most of the work shadows do elsewhere.

**Shadows.** Three levels, all subtle and downward. `--shadow-3` is the heaviest and is reserved for floating elements (popovers). Cards do not float — they sit.

**Capsules vs. protection gradients.** Neither, mostly. We rely on rules and sunken surfaces. The exception: focus rings and the active-link mark.

**Layout.** 12-column grid with a `1240px` max content width and `clamp(20px, 5vw, 64px)` padding. Prose constrained to `64ch`. Asymmetry is welcome — figure margin notes, eyebrow gutter labels.

**Transparency / blur.** None by default. No frosted glass. Solid surfaces.

**Imagery vibe.** When images appear: warm, slightly desaturated, never high-key. Black-and-white is preferred for portraits. No stock illustration. Architecture diagrams are hand-drawn (Excalidraw-style — wobbly stroke, monospace labels).

**Corner radii.** `4px` default. `2px` for inline code chips. `10px` cap — never go larger. No fully-rounded pills except very small status dots.

**Cards.** Flat. 1px hairline border. 4px radius. No shadow at rest. Hover: border darkens. That's it.

---

## Iconography

**Approach.** Restrained. Icons are not decoration — they are wayfinding. Most "icon" work is done by typography (eyebrow labels, em dashes as separators, the monogram).

**Icon system.** **Lucide Icons** (CDN) — chosen for its 1.5px stroke weight that pairs well with thin serif headings, its broad coverage, and its calm geometric feel. Loaded from `https://unpkg.com/lucide@latest/dist/lucide.min.js`. _Substituted because no codebase icons were provided — flagging this for review._

**Stroke weight.** 1.5px (Lucide default). Never fill. Color matches text color via `currentColor`.

**Sizes.** 16px for inline UI, 20px for nav, 24px for case-study chrome. Never bigger than 32px.

**Emoji.** Not used. Anywhere.

**Unicode.** A small set is sanctioned: `→` (next/external), `↗` (external link, preferred), `·` (separator in metadata), `—` (em dash, prose), `§` (section reference, optional). These appear inline at body weight; never sized up or colored.

**Personal mark.** `MC` monogram in nav (top-left), wordmark "Matt Cory" in footer. The monogram is set in Source Serif 4 Light at the same scale as nav links. See `assets/monogram.svg` and `assets/wordmark.svg`.

**Diagrams.** Architecture diagrams render in an Excalidraw-style hand-drawn aesthetic — wobbly strokes, monospace labels, ink-on-paper feel. Rendered inline via SVG; no diagram library wired in yet (open to `roughjs` or `excalidraw` integration).
