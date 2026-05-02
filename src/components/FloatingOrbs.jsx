import { motion, useScroll, useTransform } from 'framer-motion'

const orbs = [
  { size: 'h-52 w-52', color: 'bg-fuchsia-500/30', left: 'left-[8%]', top: 'top-[10%]' },
  { size: 'h-40 w-40', color: 'bg-cyan-400/30', left: 'left-[72%]', top: 'top-[18%]' },
  { size: 'h-64 w-64', color: 'bg-violet-500/30', left: 'left-[58%]', top: 'top-[70%]' },
  { size: 'h-44 w-44', color: 'bg-emerald-400/20', left: 'left-[18%]', top: 'top-[74%]' },
]

export default function FloatingOrbs() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -180])

  return (
    <motion.div aria-hidden className="pointer-events-none fixed inset-0 z-0" style={{ y }}>
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute ${orb.left} ${orb.top} ${orb.size} ${orb.color} rounded-full blur-3xl`}
          animate={{ y: [0, -24, 0], x: [0, 10, 0], opacity: [0.3, 0.55, 0.35] }}
          transition={{ duration: 8 + index * 1.7, repeat: Number.POSITIVE_INFINITY }}
        />
      ))}
    </motion.div>
  )
}
