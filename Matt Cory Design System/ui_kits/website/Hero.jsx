function Hero({ go }) {
  return (
    <section className="hero">
      <div className="container">
        <div className="eyebrow reveal in" style={{ marginBottom: 32 }}>Principal Architect · Available for engagements</div>
        <h1 className="hero-statement reveal in">I design AI-enabled systems inside enterprise software.</h1>
        <p className="hero-lede reveal in">
          Architecture, integration patterns, and operational tooling for organizations
          running on Dynamics 365 Business Central and the wider Microsoft platform.
          I build durable systems — the kind that outlast a single feature cycle.
        </p>
        <div className="hero-cta reveal in">
          <button className="btn btn-primary" onClick={() => go('home')}>
            Selected work <span style={{ fontFamily: 'var(--font-mono)', marginLeft: 6 }}>→</span>
          </button>
          <button className="btn btn-secondary" onClick={() => go('contact')}>Get in touch</button>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
