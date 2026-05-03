type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export function Section({ eyebrow, title, description, children }: SectionProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          {eyebrow ? <div className="eyebrow">{eyebrow}</div> : <div />}
          <div>
            <h2 className="section-title">{title}</h2>
            {description ? (
              <p className="lede" style={{ marginTop: 24 }}>
                {description}
              </p>
            ) : null}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
