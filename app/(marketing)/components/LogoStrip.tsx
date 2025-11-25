export default function LogoStrip() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <p className="text-center text-sm text-slate-400 mb-8">Trusted by leading companies</p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="h-8 w-24 rounded border border-white/5 bg-gradient-to-b from-slate-900/80 to-black/80 opacity-60"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

