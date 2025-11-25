export default function Testimonials() {
  const testimonials = [
    {
      quote: 'This product has transformed how we work. The impact has been incredible and our team productivity has increased significantly.',
      name: 'John Doe',
      role: 'CEO, Company One',
    },
    {
      quote: 'We were struggling with our workflow until we found this solution. It\'s been a game-changer for our entire organization.',
      name: 'Jane Smith',
      role: 'CTO, Company Two',
    },
    {
      quote: 'The best investment we\'ve made this year. The ROI has been outstanding and our team loves using it every day.',
      name: 'Mike Johnson',
      role: 'Founder, Company Three',
    },
    {
      quote: 'Simple, powerful, and exactly what we needed. This product has exceeded all our expectations.',
      name: 'Sarah Williams',
      role: 'VP of Product, Company Four',
    },
    {
      quote: 'We\'ve tried many solutions, but nothing comes close to this. It\'s become essential to our daily operations.',
      name: 'David Brown',
      role: 'Director, Company Five',
    },
    {
      quote: 'The support team is amazing and the product just works. Highly recommend to anyone looking for a solution.',
      name: 'Emily Davis',
      role: 'Head of Operations, Company Six',
    },
  ]

  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            What Our Customers Say
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-white/5 bg-slate-900/20"
            >
              <p className="text-slate-300 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="font-semibold text-slate-100">{testimonial.name}</div>
                <div className="text-sm text-slate-400">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

