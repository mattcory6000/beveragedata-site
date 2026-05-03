function Contact() {
  const [sent, setSent] = React.useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); };
  return (
    <section>
      <div className="container">
        <div className="contact-grid">
          <div className="eyebrow">Contact</div>
          <div>
            <h2 className="section-title" style={{ maxWidth: '20ch', textWrap: 'balance' }}>For architecture engagements, advisory work, or speaking.</h2>
            <p className="lede" style={{ marginTop: 24 }}>
              I take on a small number of clients each year. The best fit is usually an organization that has tried something and learned what doesn't hold up.
            </p>

            {sent ? (
              <div style={{ marginTop: 48, padding: 24, border: '1px solid var(--rule)', borderLeft: '2px solid var(--accent)', background: 'var(--paper-2)', borderRadius: 4, maxWidth: 520 }}>
                <div className="eyebrow">Sent</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, color: 'var(--ink)', marginTop: 8, letterSpacing: '-0.01em' }}>Thanks. I'll reply within two working days.</div>
              </div>
            ) : (
              <form className="contact-form" onSubmit={submit} style={{ marginTop: 48 }}>
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" defaultValue="" />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" defaultValue="" />
                </div>
                <div className="field">
                  <label htmlFor="topic">Topic</label>
                  <select id="topic" defaultValue="Architecture engagement">
                    <option>Architecture engagement</option>
                    <option>Advisory / fractional</option>
                    <option>Speaking</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="msg">Message</label>
                  <textarea id="msg" placeholder="A brief outline of the system or problem you're working on." />
                  <span className="field-hint">A paragraph is plenty. Confidential is fine.</span>
                </div>
                <div>
                  <button className="btn btn-primary" type="submit">
                    Send message <span style={{ fontFamily: 'var(--font-mono)', marginLeft: 6 }}>→</span>
                  </button>
                </div>
              </form>
            )}

            <div className="contact-meta">
              <div className="contact-meta-row"><span className="lbl">Email</span><a className="link" href="mailto:hello@mattcory.dev">hello@mattcory.dev</a></div>
              <div className="contact-meta-row"><span className="lbl">Elsewhere</span><a className="link" href="https://www.linkedin.com/in/matt-cory-ph-d/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a className="link" href="#">GitHub ↗</a></div>
              <div className="contact-meta-row"><span className="lbl">Located</span><span>Remote · UTC±0</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Contact = Contact;
