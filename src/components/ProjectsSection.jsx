import { motion } from 'framer-motion'
import { projects } from '../data'
import AnimatedText from './AnimatedText'
import TiltCard from './TiltCard'

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-24">
      <div className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-300/90">Projects</p>
        <AnimatedText as="h3" text="Featured Work" className="text-3xl font-semibold text-white md:text-4xl" />
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: i * 0.12, duration: 0.55 }}
            className="relative"
          >
            <TiltCard className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 backdrop-blur-xl">
              <div className="mb-5 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-200">
                Case Study
              </div>
              <h4 className="text-xl font-semibold text-white">{project.title}</h4>
              <p className="mt-3 text-sm text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-violet-300/30 bg-violet-300/10 px-3 py-1 text-xs text-violet-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </TiltCard>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
