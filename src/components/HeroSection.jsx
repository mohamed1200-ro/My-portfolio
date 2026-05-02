import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'

const HeroScene = lazy(() => import('./three/HeroScene'))

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 opacity-80">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#03071199] via-[#030712dd] to-[#030712]" />
      <div className="relative mx-auto grid min-h-screen w-full max-w-6xl items-center gap-10 px-6 py-20 lg:grid-cols-[1fr_380px]">
        <div>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-cyan-300"
          >
            Frontend Developer
          </motion.p>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="max-w-3xl text-5xl font-bold leading-tight text-white md:text-7xl"
          >
            Mohamed Elsaid
          </motion.h1>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-xl text-violet-200 md:text-2xl"
          >
            Frontend Developer (React.js)
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 max-w-2xl text-slate-300"
          >
            I craft elegant, high-performance interfaces with immersive experiences and
            user-first interactions that bring products to life.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-full border border-cyan-300/60 bg-cyan-300/10 px-6 py-3 text-sm font-medium text-cyan-200 transition hover:-translate-y-0.5 hover:bg-cyan-300/20"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-violet-300/50 bg-violet-300/10 px-6 py-3 text-sm font-medium text-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-300/20"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mx-auto w-full max-w-[320px] rounded-[2rem] border border-cyan-300/30 bg-white/10 p-2 shadow-[0_0_60px_-20px_rgba(34,211,238,0.55)] backdrop-blur-xl"
        >
          <img
            src="/images/mohamed-photo.png"
            alt="Mohamed Elsaid portrait"
            className="h-[430px] w-full rounded-[1.6rem] object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  )
}
