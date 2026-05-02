import { useState } from 'react'
import { motion } from 'framer-motion'

export default function TiltCard({ children, className = '' }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  const onMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height
    setRotate({ x: (0.5 - py) * 12, y: (px - 0.5) * 16 })
  }

  return (
    <motion.div
      className={className}
      onMouseMove={onMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
      style={{ transformStyle: 'preserve-3d' }}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
    >
      {children}
    </motion.div>
  )
}
