import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './Paginas/Projects'
import { AboutMe } from './Paginas/AboutMe'
import { ContactMe } from './Paginas/ContactMe'
import { Footer } from './components/Footer'
import { useReveal } from './hooks/useReveal'

function App() {
  useReveal()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <AboutMe />
        <ContactMe />
      </main>
      <Footer />
    </>
  )
}

export default App
