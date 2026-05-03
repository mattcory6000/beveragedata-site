function Nav({ current, go }) {
  const items = [
    { id: 'home', label: 'Work' },
    { id: 'writing', label: 'Writing' },
    { id: 'now', label: 'Now' },
    { id: 'about', label: 'About' },
  ];
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#" className="nav-mark" onClick={(e) => { e.preventDefault(); go('home'); }} aria-label="Matt Cory — home">MC</a>
        <nav className="nav-links">
          {items.map((it) => (
            <button
              key={it.id}
              className={"nav-link" + (current === it.id || (it.id === 'home' && current === 'case-study') ? ' active' : '')}
              onClick={() => go(it.id)}
            >{it.label}</button>
          ))}
          <button className="nav-link accent" onClick={() => go('contact')}>Contact</button>
        </nav>
      </div>
    </header>
  );
}

window.Nav = Nav;
