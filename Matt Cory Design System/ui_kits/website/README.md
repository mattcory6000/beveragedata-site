# Matt Cory — Website UI Kit

A high-fidelity recreation of Matt Cory's personal professional site. Editorial, restrained, type-led.

## Files

- `index.html` — interactive shell. Click the nav to move between sections; the homepage hero links into a sample case study and writing index.
- `Nav.jsx` — top bar with MC monogram, primary nav, contact accent.
- `Footer.jsx` — wordmark, secondary links, copyright.
- `Hero.jsx` — homepage hero (statement + lede + primary CTA).
- `WorkIndex.jsx` — list of case studies, structured rows with eyebrow + title + summary.
- `WritingIndex.jsx` — list of essays, two-column meta + title.
- `CaseStudy.jsx` — full case study layout: hero, structured Problem / Approach / Architecture / Outcome blocks with hand-drawn diagram.
- `About.jsx` — bio + experience timeline.
- `Now.jsx` — current focus page.
- `Contact.jsx` — minimal form.

## Section coverage

Maps to the kickoff answer for `site_sections`:

- Homepage / hero ✓
- About / bio ✓
- Now / current focus ✓
- Writing / essays index ✓
- Case studies index ✓ (plus one full case study)
- Contact ✓

## Notes

- All copy is sample. Replace freely.
- Diagrams use the hand-drawn SVG style described in the parent README.
- Icons are inline Lucide SVGs. Substitute with the lucide-react package when porting to production.
