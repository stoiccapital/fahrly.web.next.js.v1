import { fahrlyCopy } from '../fahrlyCopy'

export default function ValueProps() {
  return (
    <section id="trust">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">
            {fahrlyCopy.trust.title}
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            {fahrlyCopy.trust.body}
          </p>
        </div>
      </div>
    </section>
  )
}

