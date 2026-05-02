import { motion } from 'framer-motion'

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.045,
      delayChildren: 0.05,
    },
  },
}

const child = {
  hidden: { opacity: 0, y: 26, rotateX: -40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function AnimatedText({ text, className = '', as = 'p' }) {
  const words = text.split(' ')
  const Tag = motion[as]

  return (
    <Tag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {words.map((word, index) => (
        <motion.span key={`${word}-${index}`} variants={child} className="mr-[0.3em] inline-block">
          {word}
        </motion.span>
      ))}
    </Tag>
  )
}
