'use client'

interface LogoCarouselProps {
  companies: readonly string[]
}

export default function LogoCarousel({ companies }: LogoCarouselProps) {
  // Duplicate the array to create seamless infinite loop
  const duplicatedCompanies = [...companies, ...companies]

  return (
    <div className="overflow-hidden">
      <div className="flex gap-8 md:gap-12 animate-logoScroll hover:[animation-play-state:paused]">
        {duplicatedCompanies.map((company, i) => (
          <div
            key={`${company}-${i}`}
            className="flex-shrink-0 h-8 px-4 rounded border border-white/5 bg-gradient-to-b from-slate-900/80 to-black/80 opacity-60 hover:opacity-80 transition-opacity flex items-center justify-center text-xs text-slate-400"
          >
            {company}
          </div>
        ))}
      </div>
    </div>
  )
}

