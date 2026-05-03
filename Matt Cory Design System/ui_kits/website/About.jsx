function About() {
  const roles = [
    { when: '2023 — present', role: 'Principal Architect, Independent', org: 'AI-enabled enterprise systems', detail: 'Architecture, integration, and operational tooling for organizations on Dynamics 365 Business Central and the wider Microsoft platform.' },
    { when: '2019 — 2023', role: 'Principal Consultant', org: 'Microsoft Partner — Dynamics practice', detail: 'Led architecture for mid-market BC implementations across distribution, manufacturing, and professional services.' },
    { when: '2014 — 2019', role: 'Senior Developer → Architect', org: 'Microsoft Partner', detail: 'AL/C/AL development, ISV product work, and the slow education of becoming an architect rather than a senior developer.' },
    { when: '2010 — 2014', role: 'Software Developer', org: 'Mid-market manufacturing, internal IT', detail: 'First exposure to Dynamics NAV. Learned what enterprise software looks like from the inside.' },
  ];
  return (
    <section>
      <div className="container">
        <div className="about-grid">
          <div>
            <div className="about-portrait"><span className="about-portrait-cap">portrait</span></div>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 24 }}>About</div>
            <h2 className="section-title" style={{ maxWidth: '22ch', textWrap: 'balance' }}>I've spent fifteen years inside enterprise software — mostly inside Dynamics.</h2>
            <p className="lede" style={{ marginTop: 32 }}>
              Most of what I do now lives at the seam between the platforms organizations already run and the AI tooling everyone is asking them to adopt. I think the durable wins there are architectural, not feature-level.
            </p>
            <p style={{ marginTop: 24 }}>
              I work with a small number of clients each year — typically Microsoft partners, mid-market organizations on Business Central, and ISVs building on the Microsoft cloud. The engagements I take on are the ones where the architecture has to outlast me.
            </p>
          </div>
        </div>

        <div className="timeline">
          <div className="eyebrow" style={{ marginBottom: 32 }}>Experience</div>
          {roles.map((r, i) => (
            <div className="timeline-row" key={i}>
              <div className="timeline-when">{r.when}</div>
              <div>
                <div className="timeline-role">{r.role}</div>
                <div className="timeline-org">{r.org}</div>
                <div className="timeline-detail">{r.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.About = About;
