export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-slate-400 md:flex-row">
        <p>© {new Date().getFullYear()} Mohamed Elsayed. All rights reserved.</p>
        <p className="text-slate-500">Frontend Developer (React.js)</p>
      </div>
    </footer>
  )
}
