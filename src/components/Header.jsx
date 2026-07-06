import { useEffect, useState } from 'react'

export const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-inner">
          <a className="brand" href="#top" onClick={close}>
            Keylor Delgado<span className="dot">.</span>
          </a>

          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>

          <nav className={`nav-links ${open ? 'open' : ''}`}>
            <a href="#work" onClick={close}>Work</a>
            <a href="#about" onClick={close}>About</a>
            <a href="#contact" onClick={close}>Contact</a>
            <a className="nav-cta" href="https://github.com/kdelgado1998" target="_blank" rel="noopener noreferrer" onClick={close}>
              GitHub ↗
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
