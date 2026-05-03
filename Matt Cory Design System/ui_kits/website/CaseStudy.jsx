function Diagram() {
  // Hand-drawn pipeline: D365 BC → ingest → vector index → copilot → audit log
  return (
    <svg viewBox="0 0 800 240" width="100%" preserveAspectRatio="xMidYMid meet" style={{ display: 'block' }}>
      <defs>
        <filter id="rough-cs" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="7" />
          <feDisplacementMap in="SourceGraphic" scale="1.6" />
        </filter>
      </defs>
      <g filter="url(#rough-cs)" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" fill="none">
        <rect x="20" y="80" width="120" height="60" rx="3" />
        <rect x="200" y="80" width="120" height="60" rx="3" />
        <rect x="380" y="40" width="160" height="140" rx="3" />
        <rect x="600" y="80" width="120" height="60" rx="3" />
        <line x1="140" y1="110" x2="200" y2="110" />
        <path d="M192 104 L200 110 L192 116" />
        <line x1="320" y1="110" x2="380" y2="110" />
        <path d="M372 104 L380 110 L372 116" />
        <line x1="540" y1="110" x2="600" y2="110" />
        <path d="M592 104 L600 110 L592 116" />
        <line x1="460" y1="180" x2="460" y2="210" />
        <path d="M454 202 L460 210 L466 202" />
      </g>
      <g fontFamily="JetBrains Mono, monospace" fontSize="13" fill="#1A1A1A">
        <text x="80" y="115" textAnchor="middle">D365 BC</text>
        <text x="260" y="115" textAnchor="middle">ingest</text>
        <text x="460" y="100" textAnchor="middle">retrieval +</text>
        <text x="460" y="120" textAnchor="middle">grounded</text>
        <text x="460" y="140" textAnchor="middle">copilot</text>
        <text x="660" y="115" textAnchor="middle">audit log</text>
      </g>
      <g fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#6B665E">
        <text x="170" y="100" textAnchor="middle">events</text>
        <text x="350" y="100" textAnchor="middle">chunks</text>
        <text x="570" y="100" textAnchor="middle">writes</text>
        <text x="478" y="225">provenance</text>
      </g>
    </svg>
  );
}

function CaseStudy({ id, go }) {
  const work = (window.SAMPLE_WORK || []).find((w) => w.id === id) || (window.SAMPLE_WORK || [])[0];
  return (
    <article>
      <section className="cs-hero">
        <div className="container">
          <div className="cs-eyebrow-row">
            <span className="eyebrow">{work.meta}</span>
            <span style={{ color: 'var(--ink-3)', fontFamily: 'var(--font-sans)', fontSize: 13 }}>·</span>
            <button className="link-quiet" onClick={() => go('home')} style={{ fontSize: 13, color: 'var(--ink-3)', cursor: 'pointer', background: 'none', border: 0, padding: 0 }}>← Back to work</button>
          </div>
          <h1 className="cs-title">{work.title}</h1>
          <p className="cs-lede">{work.summary}</p>
        </div>
      </section>

      <div className="container">
        <div className="cs-block">
          <span className="eyebrow cs-block-eyebrow">§ 01 · Problem</span>
          <div>
            <h3>What broke, and why it kept breaking.</h3>
            <p>The team had inherited six years of manual documentation work spread across Confluence, a SharePoint library, three Word templates, and the heads of two senior consultants. Every release cycle ended with the same scramble — and every scramble produced a slightly different artifact.</p>
            <p>Three previous attempts at a "documentation system" had stalled because each tried to centralize the format before fixing the pipeline. The format was not the issue. The pipeline was.</p>
          </div>
        </div>

        <div className="cs-block">
          <span className="eyebrow cs-block-eyebrow">§ 02 · Approach</span>
          <div>
            <h3>Treat documentation as a load-bearing system.</h3>
            <p>I treated docs the way I'd treat a production service: a versioned source of truth, an ingestion pipeline, a few generators, and an oncall rotation for when things break. The format negotiations could wait until that pipeline was reliable.</p>
            <p>This meant accepting that the first six months would produce no new "documentation" the executive sponsor could point at. It meant a flat database table behind a thin API, not a content-management product.</p>
          </div>
        </div>

        <div className="cs-block">
          <span className="eyebrow cs-block-eyebrow">§ 03 · Architecture</span>
          <div>
            <h3>One pipeline, observable end-to-end.</h3>
            <p>Events from Business Central drive the ingest. A small worker process normalizes them, hands them to the embedding step, and writes both raw and embedded forms into the index. Retrieval lives behind a single internal endpoint with provenance baked into every response — no answer escapes without a citation back to a BC record.</p>
            <div className="cs-diagram">
              <Diagram />
              <div className="cs-diagram-caption">FIG. 01 — Ingest, retrieval, audit. Every span emits provenance.</div>
            </div>
          </div>
        </div>

        <div className="cs-block">
          <span className="eyebrow cs-block-eyebrow">§ 04 · Outcome</span>
          <div>
            <h3>What it looks like a year on.</h3>
            <ul className="cs-outcome-list">
              <li>
                <div className="cs-outcome-stat">38 → 4</div>
                <div className="cs-outcome-label">manual handoffs per release cycle</div>
              </li>
              <li>
                <div className="cs-outcome-stat">100%</div>
                <div className="cs-outcome-label">audit-traceable AI responses</div>
              </li>
              <li>
                <div className="cs-outcome-stat">~½ day</div>
                <div className="cs-outcome-label">average time to surface a documentation defect</div>
              </li>
              <li>
                <div className="cs-outcome-stat">2</div>
                <div className="cs-outcome-label">production incidents in 11 months — both recovered without rollback</div>
              </li>
            </ul>
            <blockquote style={{ marginTop: 48 }}>
              The pipeline outlasted two leadership changes and one acquisition. That was always the real test.
            </blockquote>
          </div>
        </div>
      </div>
    </article>
  );
}

window.CaseStudy = CaseStudy;
