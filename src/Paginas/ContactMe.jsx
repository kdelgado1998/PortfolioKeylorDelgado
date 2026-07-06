const EMAIL = 'keylordelgado@gmail.com'

const IconGitHub = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
  </svg>
)
const IconLinkedIn = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34v-7.2H6.06v7.2h2.28zM7.2 9.9a1.32 1.32 0 1 0 0-2.64 1.32 1.32 0 0 0 0 2.64zm11.14 8.44v-3.94c0-2.11-.45-3.73-2.91-3.73-1.19 0-1.98.65-2.31 1.27h-.03v-1.07h-2.19v7.2h2.28v-3.56c0-.94.18-1.85 1.34-1.85 1.15 0 1.16 1.07 1.16 1.91v3.5h2.27z" />
  </svg>
)
const IconInstagram = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)
const IconFacebook = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
  </svg>
)

export const ContactMe = () => {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="reveal">
            <span className="eyebrow">Contact</span>
            <h2 className="section-title">Let&apos;s build something</h2>
            <p className="contact-lead">
              Open to front-end and software roles, freelance work, and good conversations.
              Feel free to reach out.
            </p>

            <div className="contact-list">
              <div className="contact-item">
                <div className="label">Email</div>
                <a className="value" href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
              <div className="contact-item">
                <div className="label">Location</div>
                <div className="value">Cartago, Costa Rica</div>
              </div>
              <div className="contact-item">
                <div className="label">Phone</div>
                <a className="value" href="tel:+50684922400">+506 8492-2400</a>
              </div>
            </div>

            <div className="socials">
              <a className="social-btn" href="https://github.com/kdelgado1998" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><IconGitHub /></a>
              <a className="social-btn" href="https://www.linkedin.com/in/keylor-delgado-castro-006222186/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><IconLinkedIn /></a>
              <a className="social-btn" href="https://www.instagram.com/kdelgado__/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><IconInstagram /></a>
              <a className="social-btn" href="https://www.facebook.com/keylor.delgadocastro" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><IconFacebook /></a>
            </div>
          </div>

          <div className="contact-card reveal">
            <h3>Prefer email?</h3>
            <p>The fastest way to reach me is a direct message. I usually reply within a day.</p>
            <a className="btn btn-primary" href={`mailto:${EMAIL}`} style={{ alignSelf: 'flex-start' }}>
              Send an email →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
