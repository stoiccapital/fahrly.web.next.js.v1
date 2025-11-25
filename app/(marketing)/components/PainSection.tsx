export default function PainSection() {
  const painPoints = [
    {
      title: 'Pain Point One',
      description: 'Description of the first major pain point that your product solves.',
    },
    {
      title: 'Pain Point Two',
      description: 'Description of the second major pain point that your product solves.',
    },
    {
      title: 'Pain Point Three',
      description: 'Description of the third major pain point that your product solves.',
    },
    {
      title: 'Pain Point Four',
      description: 'Description of the fourth major pain point that your product solves.',
    },
  ]

  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 text-center">
          The Problems You Face
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((pain, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-white/5 bg-slate-900/20"
            >
              <h3 className="text-xl font-semibold text-slate-100 mb-3">
                {pain.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {pain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

