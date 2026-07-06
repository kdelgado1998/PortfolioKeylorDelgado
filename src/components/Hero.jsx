const TECH = ['React', 'Vue.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Vite']

export const Hero = () => {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true"></div>
      <div className="hero-grid" aria-hidden="true"></div>
      <div className="container">
        <div className="hero-inner">
          <span className="eyebrow">Front-End Developer</span>
          <h1 className="hero-name">
            Keylor <span className="accent">Delgado</span>
          </h1>
          <p className="hero-role">I build clean, responsive web interfaces.</p>
          <p className="hero-lead">
            Software engineer focused on front-end development with React and Vue.
            I turn ideas into fast, accessible, and visually polished products.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#work">View my work →</a>
            <a className="btn btn-ghost" href="#contact">Get in touch</a>
          </div>
          <div className="tech-row">
            {TECH.map((t) => (
              <span className="tech-chip" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
