import { motion } from 'framer-motion'
import SkillIcon3D from './three/SkillIcon3D'
import { skills } from '../data'

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-6 py-24">
      <div className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-300/90">Skills</p>
        <h3 className="text-3xl font-semibold text-white md:text-4xl">Interactive Skill Stack</h3>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <motion.article
            key={skill}
            whileHover={{ y: -10, rotateX: 6, rotateY: -6 }}
            transition={{ type: 'spring', stiffness: 280, damping: 18 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg"
          >
            <div className="h-36 w-full">
              <SkillIcon3D index={index} />
            </div>
            <p className="mt-5 text-lg font-medium text-white">{skill}</p>
            <p className="mt-2 text-sm text-slate-300">
              Building responsive and polished interfaces with best practices.
            </p>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-cyan-300/0 via-cyan-300/0 to-cyan-300/10 opacity-0 transition group-hover:opacity-100" />
          </motion.article>
        ))}
      </div>
    </section>
  )
}
