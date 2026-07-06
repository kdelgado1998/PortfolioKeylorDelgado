import { db } from '../data/db'

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const Projects = () => {
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Selected Work</span>
            <h2 className="section-title">Projects</h2>
          </div>
          <span className="count-pill">{db.length} projects</span>
        </div>

        <div className="projects-grid">
          {db.map((project) => (
            <article className="card reveal" key={project.id}>
              <div className="card-media">
                <img
                  src={`/img/${project.imagen}.jpg`}
                  alt={`${project.nombre} preview`}
                  loading="lazy"
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">{project.nombre}</h3>
                <p className="card-desc">{project.descripcion}</p>
                <a
                  className="card-link"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to project <Arrow />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
