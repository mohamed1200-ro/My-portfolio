import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-[#05070f]">
      <div className="flex flex-col items-center gap-4">
        <motion.div
          className="h-16 w-16 rounded-full border-4 border-cyan-300/25 border-t-cyan-300"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.1, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
        />
        <p className="text-sm tracking-[0.3em] text-cyan-200/70">LOADING PORTFOLIO</p>
      </div>
    </div>
  )
}
