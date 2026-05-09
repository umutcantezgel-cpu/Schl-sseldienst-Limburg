import { ShieldCheck } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { generateSharedMetadata } from "@/lib/metadata";

export const metadata = generateSharedMetadata({
  title: "Datenschutzerklärung | MS Schlüsseldienst Limburg",
  description: "Datenschutzerklärung von MS Schlüsseldienst Limburg. Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO.",
  path: "/datenschutz",
});

export default function DatenschutzPage() {
  return (
    <div className="bg-[var(--color-surface-base)] text-[var(--color-text-main)] min-h-screen relative overflow-hidden">
      {/* Background ambient blurs */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-[var(--color-blue-light)] blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[30%] rounded-full bg-blue-50/60 blur-[120px] pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-[var(--color-border-glass)]">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center gap-2 mb-6 glass-tinted px-4 py-2 rounded-full">
            <ShieldCheck className="w-5 h-5 text-[var(--color-blue-primary)]" />
            <span className="text-sm font-bold tracking-widest text-[var(--color-blue-primary)] uppercase">
              Datenschutz & Sicherheit
            </span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-text-main)] sm:text-5xl lg:text-6xl mb-6">
            Datenschutzerklärung
          </h1>
          <p className="mt-4 text-lg text-[var(--color-text-body)] leading-relaxed max-w-2xl mx-auto">
            Ihre Daten sind bei uns sicher. Erfahren Sie hier, wie {BUSINESS.shortName} Ihre personenbezogenen Daten schützt und verarbeitet.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="mx-auto max-w-3xl glass-card p-8 md:p-12">
          <div className="prose prose-lg prose-slate mx-auto text-[var(--color-text-body)] prose-headings:text-[var(--color-text-main)] prose-a:text-[var(--color-blue-primary)] hover:prose-a:text-blue-700">
            <h2>1. Datenschutz auf einen Blick</h2>
            <p>
              Wir nehmen den Schutz Ihrer persönlichen Daten als lokaler Handwerksbetrieb in {BUSINESS.address.cityFull} sehr ernst. Diese Datenschutzerklärung informiert Sie über die Art, den Umfang und Zweck der Verarbeitung Ihrer personenbezogenen Daten bei der Nutzung unserer Website. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h2>2. Verantwortliche Stelle</h2>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              <br /><br />
              <strong>{BUSINESS.name}</strong><br />
              {BUSINESS.ownerTitle} {BUSINESS.owner}<br />
              {BUSINESS.address.street}<br />
              {BUSINESS.address.zip} {BUSINESS.address.cityFull}<br />
              {BUSINESS.address.country}<br /><br />
              Telefon: <strong>{BUSINESS.phone.display}</strong><br />
              E-Mail: <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
            </p>

            <h2>3. Datenerfassung auf unserer Website</h2>
            <h3>Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul>
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
            </p>

            <h3>Kontaktformular & E-Mail-Anfragen</h3>
            <p>
              Wenn Sie uns per Kontaktformular oder E-Mail Anfragen (z.B. für eine Türöffnung in {BUSINESS.address.city}) zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
            </p>

            <h2>4. Weitergabe von Daten</h2>
            <p>
              Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt ausschließlich dann, wenn dies für die Vertragsabwicklung notwendig ist, Sie ausdrücklich eingewilligt haben oder wir gesetzlich dazu verpflichtet sind. Da wir unsere Einsätze im Raum {BUSINESS.address.city} selbst durchführen, erfolgt keine Weitergabe an externe Subunternehmer ohne Ihre explizite Zustimmung.
            </p>

            <h2>5. Speicherdauer</h2>
            <p>
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
            </p>

            <h2>6. Ihre Rechte</h2>
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Des Weiteren haben Sie das Recht auf Datenübertragbarkeit und das Recht, die Einschränkung der Verarbeitung zu verlangen.
              Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an die oben angegebene Adresse wenden.
            </p>

            <h2>7. Cookies &amp; Consent-Management</h2>
            <p>
              Unsere Website verwendet ein Cookie-Consent-Management-Tool (vanilla-cookieconsent), um Ihnen die transparente Kontrolle über Cookies und ähnliche Technologien zu ermöglichen. Beim ersten Besuch werden Sie über ein Banner über die Cookie-Nutzung informiert und können Ihre Einwilligung granular erteilen oder verweigern.
            </p>

            <h3>Cookie-Kategorien</h3>
            <p>Wir unterscheiden folgende Kategorien:</p>
            <ul>
              <li><strong>Technisch notwendig</strong> (immer aktiv): Für den Betrieb der Website erforderliche Cookies, z.B. zur Speicherung Ihrer Cookie-Einstellungen. Rechtsgrundlage: § 25 Abs. 2 Nr. 2 TTDSG / Art. 6 Abs. 1 lit. f DSGVO.</li>
              <li><strong>Statistik &amp; Analyse</strong> (Opt-in): Helfen uns zu verstehen, wie Besucher mit der Website interagieren. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).</li>
              <li><strong>Marketing &amp; Werbung</strong> (Opt-in): Werden verwendet, um Werbung relevanter zu gestalten. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).</li>
              <li><strong>Externe Medien</strong> (Opt-in): Ermöglicht das Laden externer Inhalte wie Google Maps. Beim Laden werden Daten (z.B. Ihre IP-Adresse) an den jeweiligen Anbieter übertragen. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).</li>
            </ul>

            <h3>Google Maps</h3>
            <p>
              Auf unserer Kontaktseite können wir eine Karte von Google Maps einbetten. Die Einbettung erfolgt erst nach Ihrer ausdrücklichen Einwilligung in die Kategorie &quot;Externe Medien&quot;. Vor der Einwilligung wird ein Platzhalter mit unserer Geschäftsadresse angezeigt. Beim Laden der Karte werden Daten (insbesondere Ihre IP-Adresse) an Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA, übertragen. Bitte beachten Sie die <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Datenschutzerklärung von Google</a>.
            </p>

            <h3>Widerruf &amp; Änderung der Einwilligung</h3>
            <p>
              Sie können Ihre Cookie-Einstellungen jederzeit über den Link &quot;Cookie-Einstellungen&quot; in unserem Footer anpassen oder Ihre Einwilligung vollständig widerrufen. Bereits gesetzte Cookies nicht-notwendiger Kategorien werden bei Widerruf nach Möglichkeit automatisch gelöscht.
            </p>

            <h2>8. Datensicherheit</h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen, die Sie an uns senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wir weisen jedoch darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
