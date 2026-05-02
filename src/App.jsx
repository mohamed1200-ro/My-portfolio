import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import Loader from './components/Loader'
import FloatingOrbs from './components/FloatingOrbs'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1700)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const onMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#030712] text-slate-200">
      <AnimatePresence>{isLoading ? <Loader /> : null}</AnimatePresence>
      <FloatingOrbs />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-50 hidden h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/20 blur-3xl md:block"
        animate={{ x: cursor.x, y: cursor.y }}
        transition={{ type: 'spring', mass: 0.12, stiffness: 120, damping: 12 }}
      />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
