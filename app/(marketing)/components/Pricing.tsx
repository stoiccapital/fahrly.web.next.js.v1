export default function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small teams getting started.',
      features: [
        'Feature one included',
        'Feature two included',
        'Feature three included',
        'Feature four included',
      ],
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing teams that need advanced features.',
      features: [
        'Everything in Starter',
        'Advanced feature one',
        'Advanced feature two',
        'Priority support',
        'Advanced feature three',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with specific requirements.',
      features: [
        'Everything in Professional',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantee',
        'Custom features',
      ],
    },
  ]

  return (
    <section id="pricing">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Choose the plan that works best for your team.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl border ${
                tier.popular
                  ? 'border-white/10 bg-slate-900/40'
                  : 'border-white/5 bg-slate-900/20'
              }`}
            >
              {tier.popular && (
                <div className="text-xs font-semibold text-slate-100 bg-white/5 inline-block px-3 py-1 rounded-full mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-slate-100 mb-2">{tier.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-slate-100">{tier.price}</span>
                {tier.period && (
                  <span className="text-slate-400 ml-2">{tier.period}</span>
                )}
              </div>
              <p className="text-slate-300 mb-6">{tier.description}</p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-slate-400 mt-1">✓</span>
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  tier.popular
                    ? 'bg-slate-100 text-[#050509] hover:bg-slate-200'
                    : 'border border-white/5 text-slate-100 hover:bg-white/5'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

