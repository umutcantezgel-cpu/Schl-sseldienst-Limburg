export default function ImpressumPage() {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="bg-slate-50 px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Impressum
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-lg prose-slate mx-auto">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="mt-4 text-slate-600">
              Schlüsseldienst Wetzlar<br />
              Gloelstraße 11<br />
              35576 Wetzlar<br />
              Deutschland
            </p>

            <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900">
              Vertreten durch
            </h2>
            <p className="mt-4 text-slate-600">Mina Saad</p>

            <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900">
              Kontakt
            </h2>
            <p className="mt-4 text-slate-600">
              Telefon: 0178 2471037<br />
              E-Mail: notfall-schluessel@proton.me
            </p>

            <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900">
              Steuernummer
            </h2>
            <p className="mt-4 text-slate-600">03986300160</p>

            <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900">
              Umsatzsteuer-ID
            </h2>
            <p className="mt-4 text-slate-600">
              Wird nicht erteilt (Kleinunternehmen gemäß § 19 UStG)
            </p>

            <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900">
              Haftungsausschluss
            </h2>
            <p className="mt-4 text-slate-600">
              Unsere Webseite enthält Links zu anderen Seiten im Internet. Für all diese Links gilt: Wir haben keinerlei Einfluss auf die Gestaltung und die Inhalte der verlinkten Seiten. Daher distanzieren wir uns von allen Inhalten aller verlinkten Seiten.
            </p>

            <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900">
              Urheberrecht
            </h2>
            <p className="mt-4 text-slate-600">
              Alle verwendeten Marken, Logos und Firmennamen auf dieser Webseite sind Eigentum der jeweiligen Inhaber und dienen nur zu Informationszwecken.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
