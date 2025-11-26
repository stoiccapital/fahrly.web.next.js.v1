import { fahrlyCopy } from '../fahrlyCopy'
import { PrimaryCTA } from './PrimaryCTA'

export default function FinalCTA() {
  return (
    <section id="final-cta">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <div className="text-center py-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 mb-6">
            {fahrlyCopy.finalCta.title}
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            {fahrlyCopy.finalCta.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PrimaryCTA />
          </div>
        </div>
      </div>
    </section>
  )
}

