import { fahrlyCopy } from '../fahrlyCopy'
import { HeroDashboardMock } from './HeroDashboardMock'
import { PrimaryCTA } from './PrimaryCTA'

export default function Hero() {
  return (
    <section id="hero" className="scroll-mt-24 pt-32 pb-16">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="text-sm text-slate-400 uppercase tracking-wider">
              {fahrlyCopy.hero.eyebrow}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 leading-tight">
              {fahrlyCopy.hero.title}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              {fahrlyCopy.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <PrimaryCTA />
            </div>
            <p className="text-sm text-slate-400">
              {fahrlyCopy.hero.microCopy}
            </p>
          </div>

          {/* Right Dashboard Mock */}
          <div>
            <HeroDashboardMock />
          </div>
        </div>
      </div>
    </section>
  )
}

