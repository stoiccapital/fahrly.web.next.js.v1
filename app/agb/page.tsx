import Navbar from '@/app/(marketing)/components/Navbar'
import Footer from '@/app/(marketing)/components/Footer'

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-[#050509]">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-6 md:px-8 lg:px-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Allgemeine Geschäftsbedingungen (AGB)
          </h1>
          <p className="text-slate-400 mb-12">Stand: November 2025</p>

          <div className="space-y-8 text-slate-300">
            <section>
              <h2 className="text-xl font-semibold text-slate-100 mb-4">
                § 1 Geltungsbereich
              </h2>
              <p className="mb-2">
                Diese AGB gelten für alle Verträge zwischen der Fahrly Solutions LLC, Dover,
                Delaware, USA (nachfolgend „Fahrly"), und ihren Geschäftskunden über die Nutzung
                der Fahrly-Software und damit verbundenen Dienstleistungen.
              </p>
              <p>Fahrly richtet sich ausschließlich an Unternehmen (B2B).</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-100 mb-4">§ 2 Vertragsschluss</h2>
              <p className="mb-2">Der Vertrag kommt zustande durch:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Ihre Registrierung auf unserer Plattform (Angebot)</li>
                <li>Unsere Bestätigung per E-Mail oder in der App (Annahme)</li>
                <li>Die Aktivierung des Kundenkontos</li>
              </ul>
              <p className="mt-2">
                Mit der Registrierung bestätigen Sie, dass Sie im Namen Ihres Unternehmens handeln
                dürfen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-100 mb-4">§ 3 Leistungsumfang</h2>
              <p className="mb-2">Fahrly bietet u. a. folgende Dienste:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 mb-2">
                <li>
                  <strong className="text-slate-100">Fahrly GO:</strong> Nachrichtenvermittlung,
                  Push-Routen, digitale Stundenzettel, Ausgabenerfassung, Community-Bewertung
                </li>
                <li>
                  <strong className="text-slate-100">Fahrly Fleet:</strong> Digitales Onboarding,
                  E-Signaturen, KI-gestützte Dokumentverarbeitung, Behördenkommunikation,
                  Wartungserinnerungen
                </li>
              </ul>
              <p>Der genaue Leistungsumfang ergibt sich aus der jeweils gebuchten Produktversion.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-100 mb-4">
                § 4 Preise und Zahlungsbedingungen
              </h2>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>
                  <strong className="text-slate-100">Self Driver (Einzelfahrer):</strong> 30 €/Monat
                </li>
                <li>
                  <strong className="text-slate-100">Fleets (Unternehmen):</strong> 50 €/Monat
                </li>
                <li>Alle Preise sind Nettopreise.</li>
                <li>Für EU-Kunden mit gültiger USt-ID gilt Reverse Charge (0 % VAT).</li>
                <li>Abrechnung monatlich im Voraus.</li>
                <li>Zulässige Zahlungsarten: SEPA-Lastschrift, Kreditkarte, Überweisung.</li>
                <li>Bei Zahlungsverzug kann der Zugang gesperrt werden.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-100 mb-4">§ 5 Kostenlose Testphase</h2>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>2 Tage kostenloser, vollumfänglicher Test</li>
                <li>Keine Zahlungsdaten erforderlich</li>
                <li>Automatisches Ende nach 2 Tagen</li>
                <li>Optionaler Übergang in ein kostenpflichtiges Abo</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-100 mb-4">
                § 6 Vertragslaufzeit und Kündigung
              </h2>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Keine Mindestvertragslaufzeit</li>
                <li>Monatlich kündbar mit 30 Tagen Frist zum Monatsende</li>
                <li>
                  Kündigung per E-Mail an{' '}
                  <a
                    href="mailto:support@fahrly.de"
                    className="text-slate-100 hover:text-slate-200 underline"
                  >
                    support@fahrly.de
                  </a>
                </li>
                <li>Auf Wunsch stellen wir vor Vertragsende einen Datenexport bereit</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-100 mb-4">
                § 7 Datenschutz und Datensicherheit
              </h2>
              <p className="mb-2">
                Fahrly verarbeitet Daten ausschließlich nach den Vorgaben der DSGVO.
              </p>
              <p className="mb-2 font-semibold text-slate-100">Hauptmaßnahmen:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Hosting auf EU-Servern</li>
                <li>SSL-Verschlüsselung</li>
                <li>Zugriff nur für berechtigte Mitarbeiter</li>
                <li>Regelmäßige Sicherheitsupdates</li>
              </ul>
              <p className="mt-2">Details in unserer Datenschutzerklärung.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-100 mb-4">
                § 8 Verfügbarkeit und Support
              </h2>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Zielverfügbarkeit: 99,9 % im Jahresmittel</li>
                <li>Support: Mo–Fr, 9–18 Uhr per WhatsApp</li>
                <li>Priority-Support für Fleet-Kunden</li>
                <li>Wartungsarbeiten erfolgen mit Vorankündigung</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-100 mb-4">§ 9 Haftung</h2>
              <p className="mb-2">Fahrly haftet unbeschränkt bei:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 mb-2">
                <li>Vorsatz und grober Fahrlässigkeit</li>
                <li>Verletzung von Leben, Körper oder Gesundheit</li>
                <li>Verletzung wesentlicher Vertragspflichten</li>
              </ul>
              <p className="mb-2">
                Im Übrigen ist die Haftung auf den vorhersehbaren, vertragstypischen Schaden
                begrenzt.
              </p>
              <p>Eine Haftung für entgangenen Gewinn besteht nicht.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-100 mb-4">§ 10 Änderungen der AGB</h2>
              <p className="mb-2">Fahrly kann diese AGB anpassen.</p>
              <p className="mb-2">
                Änderungen werden mindestens 4 Wochen vor Inkrafttreten mitgeteilt.
              </p>
              <p>Widersprechen Sie nicht innerhalb dieser Frist, gelten die neuen AGB als angenommen.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-100 mb-4">
                § 11 Anwendbares Recht & Gerichtsstand
              </h2>
              <p className="mb-2">Es gilt das Recht des Bundesstaates Delaware, USA.</p>
              <p className="mb-2">
                Für B2B-Kunden ist ausschließlicher Gerichtsstand Delaware, USA.
              </p>
              <p>
                Zwingende EU-Verbraucherschutzvorschriften finden keine Anwendung, da Fahrly
                ausschließlich B2B anbietet.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-100 mb-4">§ 12 Kontakt</h2>
              <div className="space-y-2">
                <p className="font-semibold text-slate-100">Fahrly Solutions LLC</p>
                <p>1111b South Governors Avenue, STE 40935</p>
                <p>Dover, DE 19904, United States</p>
                <p className="mt-4">
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
                <p>
                  Web:{' '}
                  <a
                    href="https://www.fahrly.de"
                    className="text-slate-100 hover:text-slate-200 underline"
                  >
                    www.fahrly.de
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

