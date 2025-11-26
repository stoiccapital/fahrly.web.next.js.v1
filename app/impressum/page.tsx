import Navbar from '@/app/(marketing)/components/Navbar'
import Footer from '@/app/(marketing)/components/Footer'

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[#050509]">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-6 md:px-8 lg:px-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-12">
            Impressum
          </h1>

          <div className="space-y-8 text-slate-300">
            <section>
              <h2 className="text-xl font-semibold text-slate-100 mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="space-y-2">
                <p className="font-semibold text-slate-100">Fahrly Solutions LLC</p>
                <p>1111b South Governors Avenue, STE 40935</p>
                <p>Dover, DE 19904</p>
                <p>United States</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-100 mb-4">Kontakt</h2>
              <div className="space-y-2">
                <p>
                  E-Mail:{' '}
                  <a
                    href="mailto:support@fahrly.de"
                    className="text-slate-100 hover:text-slate-200 underline"
                  >
                    support@fahrly.de
                  </a>
                </p>
                <p>
                  WhatsApp:{' '}
                  <a
                    href="https://wa.me/491718411868"
                    className="text-slate-100 hover:text-slate-200 underline"
                  >
                    +49 171 841 1868
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-100 mb-4">
                Vertretungsberechtigte Person
              </h2>
              <p>Adam Belamri (verantwortlich für den Inhalt nach § 55 Abs. 2 RStV)</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-100 mb-4">
                EU-Streitschlichtung
              </h2>
              <p className="mb-2">
                Plattform der EU-Kommission zur Online-Streitbeilegung:
              </p>
              <p>
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-100 hover:text-slate-200 underline break-all"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Unsere E-Mail-Adresse finden Sie oben.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-100 mb-4">
                Verbraucherstreitbeilegung
              </h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

