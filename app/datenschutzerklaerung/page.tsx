import Navbar from '@/app/(marketing)/components/Navbar'
import Footer from '@/app/(marketing)/components/Footer'

export default function DatenschutzerklaerungPage() {
  return (
    <div className="min-h-screen bg-[#050509]">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-6 md:px-8 lg:px-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Datenschutzerklärung
          </h1>
          <p className="text-slate-400 mb-12">Stand: November 2025</p>

          <div className="space-y-8 text-slate-300">
            <section>
              <h2 className="text-xl font-semibold text-slate-100 mb-4">1. Verantwortlicher</h2>
              <div className="space-y-2">
                <p className="font-semibold text-slate-100">Fahrly Solutions LLC</p>
                <p>1111b South Governors Avenue, STE 40935</p>
                <p>Dover, DE 19904, United States</p>
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
                2. Verarbeitung personenbezogener Daten
              </h2>
              <p className="mb-2">
                Wir verarbeiten personenbezogene Daten ausschließlich gemäß der DSGVO.
              </p>
              <p>
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 DSGVO zur Bereitstellung
                unserer Dienste, zur Kommunikation sowie zur Erfüllung gesetzlicher Pflichten.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-100 mb-4">3. Hosting & Speicherung</h2>
              <div className="space-y-2">
                <p>Unsere Systeme werden auf Servern innerhalb der EU betrieben.</p>
                <p>Alle Übertragungen erfolgen SSL-verschlüsselt.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-100 mb-4">4. Weitergabe an Dritte</h2>
              <p className="mb-2">Daten werden nur weitergegeben an:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>technische Dienstleister (z. B. Hosting)</li>
                <li>wenn gesetzlich vorgeschrieben</li>
                <li>oder mit Ihrer Einwilligung</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-100 mb-4">5. Ihre Rechte</h2>
              <p className="mb-2">
                Sie haben folgende Rechte nach DSGVO:
              </p>
              <p className="mb-2">
                Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch.
              </p>
              <p>
                Anfragen bitte an:{' '}
                <a
                  href="mailto:support@fahrly.de"
                  className="text-slate-100 hover:text-slate-200 underline"
                >
                  support@fahrly.de
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-100 mb-4">6. Cookies</h2>
              <p>
                Wir verwenden nur technisch notwendige Cookies für die Funktion der Website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-100 mb-4">7. Speicherdauer</h2>
              <p>
                Wir speichern personenbezogene Daten nur so lange, wie es für die genannten Zwecke
                erforderlich ist oder gesetzliche Vorgaben bestehen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-100 mb-4">
                8. Kontakt Datenschutz
              </h2>
              <div className="space-y-2">
                <p className="font-semibold text-slate-100">Fahrly Solutions LLC</p>
                <p>
                  E-Mail:{' '}
                  <a
                    href="mailto:support@fahrly.de"
                    className="text-slate-100 hover:text-slate-200 underline"
                  >
                    support@fahrly.de
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

