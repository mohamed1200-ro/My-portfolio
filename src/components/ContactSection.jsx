import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-24">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10"
      >
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-300/90">Contact</p>
        <h3 className="text-3xl font-semibold text-white md:text-4xl">Let’s Work Together</h3>
        <form className="mt-8 grid gap-4 md:grid-cols-2">
          <input
            type="text"
            placeholder="Your name"
            className="rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-cyan-300"
          />
          <input
            type="email"
            placeholder="Your email"
            className="rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-cyan-300"
          />
          <textarea
            rows="4"
            placeholder="Your message"
            className="rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-cyan-300 md:col-span-2"
          />
          <button
            type="button"
            className="rounded-full border border-cyan-300/60 bg-cyan-300/10 px-6 py-3 text-sm font-medium text-cyan-200 transition hover:bg-cyan-300/20 md:col-span-2 md:w-fit"
          >
            Send Message
          </button>
        </form>
        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          <a
            href="https://www.linkedin.com/in/mohamed-elsaid-01a81534b/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-violet-300/40 bg-violet-300/10 px-4 py-2 text-violet-200 transition hover:bg-violet-300/20"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/mohamed1200-ro"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-300/40 bg-slate-300/10 px-4 py-2 text-slate-100 transition hover:bg-slate-300/20"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  )
}
