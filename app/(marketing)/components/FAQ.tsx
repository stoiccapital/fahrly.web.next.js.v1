export default function FAQ() {
  const faqs = [
    {
      question: 'What is this product?',
      answer: 'This is a comprehensive solution designed to solve specific problems and improve workflow efficiency for teams of all sizes.',
    },
    {
      question: 'How does it work?',
      answer: 'Our product integrates seamlessly with your existing tools and provides a unified interface for managing your workflow and processes.',
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes, we offer a 14-day free trial with full access to all features. No credit card required to get started.',
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Absolutely. You can cancel your subscription at any time with no penalties or fees. Your access continues until the end of your billing period.',
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We provide email support for all plans, with priority support available on higher tiers. Enterprise customers get dedicated support channels.',
    },
    {
      question: 'Do you offer integrations?',
      answer: 'Yes, we integrate with popular tools and platforms. Check our integrations page for the full list of supported services.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Security is our top priority. We use industry-standard encryption and follow best practices to protect your data at all times.',
    },
    {
      question: 'Can I change plans later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any charges.',
    },
  ]

  return (
    <section id="faq">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-white/5 bg-slate-900/20"
            >
              <h3 className="text-lg font-semibold text-slate-100 mb-3">
                {faq.question}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

