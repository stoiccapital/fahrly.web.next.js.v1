export default function DeepDive() {
  const steps = [
    {
      number: '01',
      title: 'Step One',
      description: 'Detailed explanation of the first step in the workflow or process.',
    },
    {
      number: '02',
      title: 'Step Two',
      description: 'Detailed explanation of the second step in the workflow or process.',
    },
    {
      number: '03',
      title: 'Step Three',
      description: 'Detailed explanation of the third step in the workflow or process.',
    },
    {
      number: '04',
      title: 'Step Four',
      description: 'Detailed explanation of the fourth step in the workflow or process.',
    },
  ]

  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A deep dive into the workflow and process that makes our solution effective.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-px bg-white/5" />
                )}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/5 bg-slate-900/20 flex items-center justify-center text-slate-300 font-semibold">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-100 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Placeholder */}
          <div>
            <div className="h-96 rounded-3xl border border-white/5 bg-gradient-to-b from-slate-900/80 to-black/80" />
          </div>
        </div>
      </div>
    </section>
  )
}

