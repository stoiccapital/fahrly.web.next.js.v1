export default function FinalCTA() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <div className="text-center py-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of teams already using our product to improve their workflow and achieve better results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-slate-100 text-[#050509] rounded-lg font-medium hover:bg-slate-200 transition-colors">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border border-white/5 text-slate-100 rounded-lg font-medium hover:bg-white/5 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

