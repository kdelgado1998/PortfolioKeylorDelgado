const year = new Date().getFullYear()

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <a className="brand" href="#top">Keylor Delgado<span className="dot">.</span></a>
          <nav className="footer-nav">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <span className="copyright">© {year} — All rights reserved</span>
        </div>
      </div>
    </footer>
  )
}
