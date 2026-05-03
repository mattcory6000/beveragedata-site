const SAMPLE_WRITING = [
  { id: 'durable-ai', date: '2025-03-14', title: 'On durable AI integrations', summary: 'Why most AI features fail in enterprise software, and what holds up.' },
  { id: 'doc-debt', date: '2025-01-22', title: 'Documentation as a load-bearing system', summary: 'Treating docs like code: pipelines, tests, and an oncall rotation.' },
  { id: 'bc-llm', date: '2024-11-09', title: 'Grounding LLMs in Business Central data', summary: 'A workable retrieval pattern across companies, dimensions, and security filters.' },
  { id: 'event-choreo', date: '2024-08-02', title: 'Choreography over orchestration', summary: 'Notes from rebuilding an order-to-cash flow without a central coordinator.' },
  { id: 'al-ts', date: '2024-05-18', title: 'AL is a TypeScript problem now', summary: 'Where the developer experience is going, and why it matters for partners.' },
];

function WritingIndex({ go }) {
  const fmt = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
  };
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Writing</div>
          <h2 className="section-title">Essays on architecture, AI integration, and what holds up over time.</h2>
        </div>
        <div>
          {SAMPLE_WRITING.map((w) => (
            <a
              key={w.id}
              className="writing-row"
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              <div className="writing-date">{fmt(w.date)}</div>
              <div>
                <div className="writing-title">{w.title}</div>
                <div className="writing-summary">{w.summary}</div>
              </div>
              <div className="writing-arrow">→</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

window.WritingIndex = WritingIndex;
