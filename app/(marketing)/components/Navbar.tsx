export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050509]/80 backdrop-blur-sm border-b border-white/5">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-slate-100 font-semibold text-lg">Logo</div>

          {/* Links - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-300 hover:text-slate-100 text-sm">
              Features
            </a>
            <a href="#pricing" className="text-slate-300 hover:text-slate-100 text-sm">
              Pricing
            </a>
            <a href="#faq" className="text-slate-300 hover:text-slate-100 text-sm">
              FAQ
            </a>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <button className="text-slate-300 hover:text-slate-100 text-sm">
              Sign In
            </button>
            <button className="px-4 py-2 bg-slate-100 text-[#050509] rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

