import { fahrlyCopy } from '../fahrlyCopy'

export default function Footer() {
  // Split links into product and legal groups
  const productLinks = fahrlyCopy.footer.links.filter((link) =>
    ['Funktionen', 'Preise', 'Sicherheit', 'FAQ'].includes(link.label)
  )
  const legalLinks = fahrlyCopy.footer.links.filter((link) =>
    ['Impressum', 'Datenschutz', 'AGB'].includes(link.label)
  )

  return (
    <footer className="border-t border-white/10 mt-16 pt-10 pb-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          {/* Left: Brand, Tagline, Support */}
          <div className="max-w-md space-y-3">
            <div className="text-slate-100 font-semibold text-lg">
              {fahrlyCopy.footer.brand}
            </div>
            <p className="text-sm text-slate-400">
              {fahrlyCopy.footer.tagline}
            </p>
            <p className="text-xs text-slate-500">
              Support:{' '}
              <a
                href="mailto:support@fahrly.de"
                className="text-slate-400 hover:text-slate-100 transition-colors"
              >
                support@fahrly.de
              </a>{' '}
              – Antwort in der Regel innerhalb von 24 Stunden.
            </p>
          </div>

          {/* Right: Link Groups */}
          <div className="flex flex-col sm:flex-row gap-8">
            {/* Product Links */}
            <nav>
              <div className="text-xs font-semibold text-slate-300 tracking-wide uppercase">
                Produkt
              </div>
              <ul className="mt-3 space-y-2">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-slate-100 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Legal Links */}
            <nav>
              <div className="text-xs font-semibold text-slate-300 tracking-wide uppercase">
                Rechtliches
              </div>
              <ul className="mt-3 space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-slate-100 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-sm text-slate-400">
          {fahrlyCopy.footer.copyright}
        </div>
      </div>
    </footer>
  )
}

