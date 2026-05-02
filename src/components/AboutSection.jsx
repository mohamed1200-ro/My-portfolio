import { motion } from 'framer-motion'
import { skills } from '../data'
import AnimatedText from './AnimatedText'
import TiltCard from './TiltCard'

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-6 py-24">
      <TiltCard className="rounded-3xl">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg md:p-10"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-300/90">About</p>
          <AnimatedText as="h3" text="Who I am" className="text-3xl font-semibold text-white md:text-4xl" />
          <AnimatedText
            className="mt-5 max-w-3xl text-slate-300"
            text="I am a frontend developer focused on building modern web experiences with clean UI, strong usability, and scalable React architecture. My work combines visual quality with technical precision to deliver products recruiters and users remember."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ y: 16, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </TiltCard>
    </section>
  )
}
