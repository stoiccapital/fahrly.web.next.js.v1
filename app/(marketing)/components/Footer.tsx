export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-slate-100 font-semibold text-lg mb-4">Logo</div>
            <p className="text-slate-400 text-sm">
              Building the future of workflow management.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-slate-100 font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-slate-100 text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-slate-100 text-sm">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-slate-100 text-sm">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-slate-100 font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-slate-100 text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-slate-100 text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-slate-100 text-sm">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h4 className="text-slate-100 font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-slate-100 text-sm">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-slate-100 text-sm">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-slate-100 text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-sm text-slate-400">
          © 2024 Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

