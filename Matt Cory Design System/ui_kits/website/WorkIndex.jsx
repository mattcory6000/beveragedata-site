const SAMPLE_WORK = [
  {
    id: 'doc-infra',
    meta: 'DOCUMENTATION INFRASTRUCTURE · 2024',
    title: 'A documentation pipeline for a 6,000-user D365 BC tenant',
    summary: 'Replacing six years of accumulated manual processes with a single durable pipeline that survives schema migrations, vendor changes, and personnel turnover.',
  },
  {
    id: 'ai-copilot',
    meta: 'AI INTEGRATION · 2024',
    title: 'A grounded copilot for a finance operations team',
    summary: 'Retrieval over a heterogeneous document corpus — invoices, contracts, ERP records — with strict provenance and a refusal model the auditors signed off on.',
  },
  {
    id: 'workflow',
    meta: 'WORKFLOW AUTOMATION · 2023',
    title: 'Order-to-cash automation across three legacy systems',
    summary: 'Replacing a brittle nightly batch with event-driven choreography. Half the latency, a tenth of the support volume, and a clear story when something fails.',
  },
  {
    id: 'platform',
    meta: 'PLATFORM ARCHITECTURE · 2023',
    title: 'Multi-tenant extension architecture for a Microsoft partner',
    summary: 'A reference architecture and shared libraries that lets a 40-person consulting firm ship to fifty tenants without forking codebases.',
  },
];

function WorkIndex({ go }) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Selected work</div>
          <h2 className="section-title">A handful of systems I've built or rebuilt — usually in places where the previous attempt didn't hold up.</h2>
        </div>
        <div className="work-list">
          {SAMPLE_WORK.map((w) => (
            <a
              key={w.id}
              className="work-row"
              onClick={(e) => { e.preventDefault(); go('case-study', w.id); }}
              href="#"
            >
              <div className="work-meta">{w.meta}</div>
              <div>
                <div className="work-title">{w.title}</div>
                <p className="work-summary">{w.summary}</p>
              </div>
              <div className="work-arrow">→</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

window.WorkIndex = WorkIndex;
window.SAMPLE_WORK = SAMPLE_WORK;
