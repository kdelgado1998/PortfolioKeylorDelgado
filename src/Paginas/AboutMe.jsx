const TAGS = ['React', 'Vue.js', 'TypeScript', 'Azure (AZ-104)', 'UI Design']

export const AboutMe = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <span className="eyebrow reveal">About</span>
        <h2 className="section-title reveal" style={{ marginBottom: '2.5rem' }}>
          A bit about me
        </h2>

        <div className="about-grid">
          <div className="about-photo reveal">
            <img src="/img/aboutme1.jpg" alt="Keylor Delgado" loading="lazy" />
          </div>

          <div className="about-copy reveal">
            <p>
              Hi! I'm <strong>Keylor Delgado Castro</strong>, a software engineer with a strong
              eye for user-interface design. I enjoy building both front-end and back-end
              solutions and thrive in collaborative teams where the best results come from
              working together.
            </p>
            <p>
              I currently work at <strong>Envista (Spark)</strong> as a Set-Up Designer, and I'm
              channeling my design background into web development to craft user-friendly,
              aesthetically refined products.
            </p>
            <p>
              Outside of code, music is my main hobby — rock is my favorite genre and the
              electric guitar my instrument of choice, though I'll happily play anything.
            </p>
            <div className="about-tags">
              {TAGS.map((t) => (
                <span className="about-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
