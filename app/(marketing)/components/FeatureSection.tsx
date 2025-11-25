interface FeatureSectionProps {
  variant: 'left' | 'right'
  title: string
  description: string
}

export default function FeatureSection({ variant, title, description }: FeatureSectionProps) {
  const isRight = variant === 'right'

  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${isRight ? 'md:grid-flow-dense' : ''}`}>
          {/* Text Content */}
          <div className={isRight ? 'md:col-start-2' : ''}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">
              {title}
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              {description}
            </p>
            <ul className="space-y-4">
              {[1, 2, 3].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1">✓</span>
                  <span className="text-slate-300">
                    Feature benefit point {i} that highlights key functionality
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Placeholder Screenshot */}
          <div className={isRight ? 'md:col-start-1 md:row-start-1' : ''}>
            <div className="h-64 md:h-80 rounded-3xl border border-white/5 bg-gradient-to-b from-slate-900/80 to-black/80" />
          </div>
        </div>
      </div>
    </section>
  )
}

