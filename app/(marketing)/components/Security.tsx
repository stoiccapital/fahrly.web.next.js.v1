import { fahrlyCopy } from '../fahrlyCopy'

export default function Security() {
  return (
    <section id="security" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="text-sm text-slate-400 uppercase tracking-wider mb-4">
            {fahrlyCopy.securityIntro.eyebrow}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            {fahrlyCopy.securityIntro.title}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {fahrlyCopy.securityCards.map((card, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-white/5 bg-slate-900/20"
            >
              <h3 className="text-xl font-semibold text-slate-100 mb-3">
                {card.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

