function Footer({ go }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="footer-wordmark">Matt Cory</div>
          <div className="footer-meta">Principal Architect — AI-enabled enterprise systems</div>
          <div className="footer-meta" style={{ marginTop: 4 }}>© {new Date().getFullYear()}. Set in Source Serif 4 & Inter.</div>
        </div>
        <nav className="footer-links">
          <button className="footer-link" onClick={() => go('writing')}>Writing</button>
          <button className="footer-link" onClick={() => go('now')}>Now</button>
          <button className="footer-link" onClick={() => go('contact')}>Contact</button>
          <a className="footer-link" href="#">RSS ↗</a>
        </nav>
      </div>
    </footer>
  );
}

window.Footer = Footer;
