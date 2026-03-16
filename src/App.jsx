import ParticleField from './components/ParticleField'
import CursorGlow from './components/CursorGlow'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Startup from './components/Startup'
import Experience from './components/Experience'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      {/* Fixed Background Layer */}
      <ParticleField />

      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* Cursor Glow */}
      <CursorGlow />

      {/* Navigation */}
      <Navbar />

      {/* Content */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Startup />
        <Experience />
        <Footer />
      </main>
    </>
  )
}
