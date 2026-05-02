import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks } from '../data'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl"
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-semibold tracking-wide text-white">
          Mohamed<span className="text-cyan-300">.</span>
        </a>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-lg border border-white/20 px-3 py-1 text-sm text-slate-200 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          Menu
        </button>
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-300 transition hover:text-cyan-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <AnimatePresence>
        {isOpen ? (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-3 border-t border-white/10 px-6 py-4 md:hidden"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm text-slate-200 transition hover:text-cyan-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
