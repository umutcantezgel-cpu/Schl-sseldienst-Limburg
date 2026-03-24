export default function DatenschutzPage() {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="bg-slate-50 px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Datenschutzerklärung
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-lg prose-slate mx-auto">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              1. Allgemeines zur Datenverarbeitung
            </h2>
            <p className="mt-4 text-slate-600">
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Datenschutzerklärung informiert Sie über die Art, den Umfang und Zweck der Verarbeitung Ihrer personenbezogenen Daten.
            </p>

            <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900">
              2. Verantwortliche Stelle
            </h2>
            <p className="mt-4 text-slate-600">
              Mina Saad<br />
              Schlüsseldienst Wetzlar<br />
              Gloelstraße 11<br />
              35576 Wetzlar<br />
              Telefon: 01782471037<br />
              E-Mail: notfall-schluessel@proton.me
            </p>

            <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900">
              3. Erhebung und Speicherung personenbezogener Daten
            </h2>
            <p className="mt-4 text-slate-600">
              Wir erheben personenbezogene Daten, wenn Sie mit uns über unsere Webseite in Kontakt treten (z. B. per Kontaktformular oder E-Mail). Diese Daten umfassen:
            </p>
            <ul className="mt-4 text-slate-600 list-disc pl-6">
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>Telefonnummer</li>
              <li>Andere freiwillig angegebene Daten</li>
            </ul>

            <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900">
              4. Zweck der Verarbeitung
            </h2>
            <p className="mt-4 text-slate-600">
              Die erhobenen Daten werden ausschließlich für die Bearbeitung Ihrer Anfrage, die Vertragsabwicklung und die Kommunikation mit Ihnen verwendet.
            </p>

            <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900">
              5. Weitergabe von Daten
            </h2>
            <p className="mt-4 text-slate-600">
              Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt nur, wenn dies für die Vertragsabwicklung notwendig ist, Sie ausdrücklich eingewilligt haben oder wir gesetzlich dazu verpflichtet sind.
            </p>

            <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900">
              6. Dauer der Speicherung
            </h2>
            <p className="mt-4 text-slate-600">
              Ihre Daten werden nur so lange gespeichert gemäß DSGVO, wie es für die Erfüllung der genannten Zwecke erforderlich ist, oder solange gesetzliche Aufbewahrungspflichten bestehen.
            </p>

            <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900">
              7. Rechte der betroffenen Personen
            </h2>
            <p className="mt-4 text-slate-600">
              Sie haben das Recht, jederzeit Auskunft über die bei uns gespeicherten Daten zu erhalten. Darüber hinaus können Sie die Berichtigung, Löschung oder Einschränkung der Verarbeitung verlangen.
            </p>

            <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900">
              8. Cookies
            </h2>
            <p className="mt-4 text-slate-600">
              Unsere Webseite verwendet Cookies. Sie können die Speicherung von Cookies in den Einstellungen Ihres Browsers deaktivieren.
            </p>

            <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900">
              9. Sicherheit der Daten
            </h2>
            <p className="mt-4 text-slate-600">
              Wir treffen alle erforderlichen technischen und organisatorischen Maßnahmen, um Ihre Daten vor unbefugtem Zugriff zu schützen.
            </p>

            <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900">
              10. Kontakt
            </h2>
            <p className="mt-4 text-slate-600">
              Wenn Sie Fragen zu dieser Datenschutzerklärung haben, können Sie uns jederzeit unter den oben angegebenen Kontaktdaten erreichen.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
