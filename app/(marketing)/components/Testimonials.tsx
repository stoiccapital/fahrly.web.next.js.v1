import { fahrlyCopy } from '../fahrlyCopy'

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="text-sm text-slate-400 uppercase tracking-wider mb-4">
            {fahrlyCopy.testimonialsIntro.eyebrow}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            {fahrlyCopy.testimonialsIntro.title}
          </h2>
        </div>

        {/* Google Rating */}
        <div className="text-center mb-12">
          <a
            href="https://share.google/UcqhCmlb2RntZvowk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-slate-100"
          >
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-sm">{fahrlyCopy.testimonialsGoogle.ratingText}</span>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {fahrlyCopy.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-white/5 bg-slate-900/20 relative"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-slate-100/20 rounded-l-xl" />
              <p className="text-slate-300 mb-4 leading-relaxed">
                {testimonial.quote}
              </p>
              <p className="text-sm text-slate-400 mb-6">{testimonial.metric}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 text-sm font-semibold">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-slate-100 text-sm">{testimonial.name}</div>
                  <div className="text-xs text-slate-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

