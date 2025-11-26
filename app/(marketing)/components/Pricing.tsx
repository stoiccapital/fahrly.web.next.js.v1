import { fahrlyCopy } from '../fahrlyCopy'
import { PrimaryCTA } from './PrimaryCTA'

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 section-bg--muted">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="text-sm text-slate-400 uppercase tracking-wider mb-4">
            {fahrlyCopy.pricingIntro.eyebrow}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            {fahrlyCopy.pricingIntro.title}
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            {fahrlyCopy.pricingIntro.body}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Standard Plan */}
          <div className="p-8 rounded-xl border border-white/5 bg-slate-900/20">
            <p className="text-sm text-slate-400 uppercase tracking-wider mb-2">
              {fahrlyCopy.pricing.standard.label}
            </p>
            <h3 className="text-2xl font-bold text-slate-100 mb-2">
              {fahrlyCopy.pricing.standard.title}
            </h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-slate-100">
                {fahrlyCopy.pricing.standard.price}
              </span>
              <span className="text-slate-400 ml-2">{fahrlyCopy.pricing.standard.unit}</span>
            </div>
            <p className="text-slate-300 mb-6 text-sm">{fahrlyCopy.pricing.standard.hint}</p>
            <ul className="space-y-3 mb-8">
              {fahrlyCopy.pricing.standard.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1">✓</span>
                  <span className="text-slate-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <PrimaryCTA className="w-full" />
            <p className="text-xs text-slate-400 mt-4">
              {fahrlyCopy.pricing.standard.valueNote}
            </p>
          </div>

          {/* Team Plan */}
          <div className="p-8 rounded-xl border border-white/10 bg-slate-900/40 relative">
            <div className="text-xs font-semibold text-slate-100 bg-white/5 inline-block px-3 py-1 rounded-full mb-4">
              {fahrlyCopy.pricing.team.badge}
            </div>
            <p className="text-sm text-slate-400 uppercase tracking-wider mb-2">
              {fahrlyCopy.pricing.team.label}
            </p>
            <h3 className="text-2xl font-bold text-slate-100 mb-2">
              {fahrlyCopy.pricing.team.title}
            </h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-slate-100">
                {fahrlyCopy.pricing.team.price}
              </span>
              <span className="text-slate-400">{fahrlyCopy.pricing.team.priceUnit}</span>
              <span className="text-slate-400 ml-2">{fahrlyCopy.pricing.team.unit}</span>
            </div>
            <p className="text-slate-300 mb-6 text-sm">{fahrlyCopy.pricing.team.hint}</p>
            <ul className="space-y-3 mb-8">
              {fahrlyCopy.pricing.team.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1">✓</span>
                  <span className="text-slate-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <PrimaryCTA className="w-full" />
            <p className="text-xs text-slate-400 mt-4">
              {fahrlyCopy.pricing.team.valueNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

