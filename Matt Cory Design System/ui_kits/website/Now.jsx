function Now() {
  const items = [
    { eyebrow: 'CURRENT ENGAGEMENT', title: 'Documentation infrastructure for a 6,000-user BC tenant', body: 'A multi-quarter engagement replacing six years of accumulated manual processes with a single durable pipeline.' },
    { eyebrow: 'WRITING', title: 'A small book on architecture for AI-enabled enterprise software', body: 'Drafting in public on the writing index. Aiming for short, durable, opinionated.' },
    { eyebrow: 'READING', title: 'Designing Data-Intensive Applications, again', body: 'Re-reading Kleppmann with a decade more context. Different book the second time through.' },
    { eyebrow: 'ELSEWHERE', title: 'Speaking at Directions EMEA, Vienna', body: 'A talk on grounding AI features in enterprise data without losing the audit trail.' },
  ];
  return (
    <section>
      <div className="container">
        <div className="section-head" style={{ paddingTop: 96 }}>
          <div className="eyebrow">Now</div>
          <h2 className="section-title">What I'm working on, reading, and thinking about — updated when it changes meaningfully.</h2>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-3)', marginBottom: 24 }}>Last updated April 2026</div>
        <div className="now-grid">
          {items.map((it, i) => (
            <div className="now-card" key={i}>
              <div className="eyebrow">{it.eyebrow}</div>
              <div className="now-card-title">{it.title}</div>
              <p className="now-card-body">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Now = Now;
