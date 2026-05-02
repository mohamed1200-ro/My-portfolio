import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { skills } from '../data'
import AnimatedText from './AnimatedText'
import TiltCard from './TiltCard'

const SkillIcon3D = lazy(() => import('./three/SkillIcon3D'))

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-6 py-24">
      <div className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-300/90">Skills</p>
        <AnimatedText
          as="h3"
          text="Interactive Skill Stack"
          className="text-3xl font-semibold text-white md:text-4xl"
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.08 }}
          >
            <TiltCard className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">
              <div className="h-36 w-full">
                <Suspense fallback={null}>
                  <SkillIcon3D index={index} />
                </Suspense>
              </div>
              <p className="mt-5 text-lg font-medium text-white">{skill}</p>
              <p className="mt-2 text-sm text-slate-300">
                Building responsive and polished interfaces with best practices.
              </p>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-cyan-300/0 via-cyan-300/0 to-cyan-300/10 opacity-0 transition group-hover:opacity-100" />
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
