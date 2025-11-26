import { fahrlyCopy } from '../fahrlyCopy'
import LogoCarousel from './LogoCarousel'

export default function LogoStrip() {
  return (
    <section id="trusted-by" className="py-12">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <p className="text-center text-sm text-slate-400 mb-8">{fahrlyCopy.trustedBy.label}</p>
        <LogoCarousel companies={fahrlyCopy.trustedBy.companies} />
        <p className="text-center text-sm text-slate-400 mt-8">{fahrlyCopy.trustedBy.note}</p>
      </div>
    </section>
  )
}

