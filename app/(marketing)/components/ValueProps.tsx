export default function ValueProps() {
  const valueProps = [
    {
      icon: '🔧',
      title: 'Value Proposition One',
      description: 'Detailed explanation of how this value proposition helps solve customer problems and delivers real benefits.',
    },
    {
      icon: '⚡',
      title: 'Value Proposition Two',
      description: 'Detailed explanation of how this value proposition helps solve customer problems and delivers real benefits.',
    },
    {
      icon: '🎯',
      title: 'Value Proposition Three',
      description: 'Detailed explanation of how this value proposition helps solve customer problems and delivers real benefits.',
    },
    {
      icon: '🚀',
      title: 'Value Proposition Four',
      description: 'Detailed explanation of how this value proposition helps solve customer problems and delivers real benefits.',
    },
    {
      icon: '✨',
      title: 'Value Proposition Five',
      description: 'Detailed explanation of how this value proposition helps solve customer problems and delivers real benefits.',
    },
  ]

  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-white/5 bg-slate-900/20"
            >
              <div className="text-4xl mb-4">{prop.icon}</div>
              <h3 className="text-xl font-semibold text-slate-100 mb-3">
                {prop.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

