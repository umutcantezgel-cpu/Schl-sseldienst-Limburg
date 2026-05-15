import { ShieldCheck } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { generateSharedMetadata } from "@/lib/metadata";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LegalCard } from "@/components/legal/LegalCard";

export const metadata = generateSharedMetadata({
  title: "Datenschutzerklärung | MS Schlüsseldienst Limburg",
  description: "Datenschutzerklärung von MS Schlüsseldienst Limburg. Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO.",
  path: "/datenschutz",
});

const tocItems = [
  { id: "ueberblick", label: "1. Datenschutz auf einen Blick" },
  { id: "verantwortlicher", label: "2. Verantwortliche Stelle" },
  { id: "datenerfassung", label: "3. Datenerfassung" },
  { id: "weitergabe", label: "4. Weitergabe von Daten" },
  { id: "speicherdauer", label: "5. Speicherdauer" },
  { id: "rechte", label: "6. Ihre Rechte" },
  { id: "cookies", label: "7. Cookies & Consent" },
  { id: "sicherheit", label: "8. Datensicherheit" },
];

export default function DatenschutzPage() {
  return (
    <LegalPageLayout
      title="Datenschutzerklärung"
      subtitle="Ihre Daten sind bei uns sicher. Erfahren Sie hier, wie MS Schlüsseldienst Limburg Ihre personenbezogenen Daten schützt und verarbeitet."
      lastUpdated="November 2023"
      tocItems={tocItems}
    >
      <section id="ueberblick" className="scroll-mt-32">
        <h2>1. Datenschutz auf einen Blick</h2>
        <p>
          Wir nehmen den Schutz Ihrer persönlichen Daten als lokaler Handwerksbetrieb in {BUSINESS.address.cityFull} sehr ernst. Diese Datenschutzerklärung informiert Sie über die Art, den Umfang und Zweck der Verarbeitung Ihrer personenbezogenen Daten bei der Nutzung unserer Website. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>
      </section>

      <section id="verantwortlicher" className="scroll-mt-32">
        <h2>2. Verantwortliche Stelle</h2>
        <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
        
        <div className="my-6 not-prose">
          <LegalCard title="Verantwortlicher für Datenschutz">
            <p className="font-semibold text-white mb-2">{BUSINESS.name}</p>
            <p className="mb-4 text-slate-300">
              {BUSINESS.ownerTitle} {BUSINESS.owner}<br />
              {BUSINESS.address.street}<br />
              {BUSINESS.address.zip} {BUSINESS.address.cityFull}<br />
              {BUSINESS.address.country}
            </p>
            <p className="text-slate-300">
              Telefon: <strong className="text-white">{BUSINESS.phone.display}</strong><br />
              E-Mail: <a href={`mailto:${BUSINESS.email}`} className="text-amber-500 hover:underline">{BUSINESS.email}</a>
            </p>
          </LegalCard>
        </div>
      </section>

      <section id="datenerfassung" className="scroll-mt-32">
        <h2>3. Datenerfassung auf unserer Website</h2>
        
        <h3>Server-Log-Dateien</h3>
        <p>
          Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
        </p>
        <ul className="list-disc pl-6 mb-6">
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
        </p>
        <p>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
        </p>
      </section>

      <section id="weitergabe" className="scroll-mt-32">
        <h2>4. Weitergabe von Daten</h2>
        <p>
          Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt ausschließlich dann, wenn dies für die Vertragsabwicklung notwendig ist, Sie ausdrücklich eingewilligt haben oder wir gesetzlich dazu verpflichtet sind. Da wir unsere Einsätze im Raum {BUSINESS.address.city} selbst durchführen, erfolgt keine Weitergabe an externe Subunternehmer ohne Ihre explizite Zustimmung.
        </p>
      </section>

      <section id="speicherdauer" className="scroll-mt-32">
        <h2>5. Speicherdauer</h2>
        <p>
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
        </p>
      </section>

      <section id="rechte" className="scroll-mt-32">
        <h2>6. Ihre Rechte</h2>
        
        <div className="p-6 bg-amber-500/10 border border-amber-500/20 rounded-2xl mb-8 not-prose">
          <div className="flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Auskunft, Löschung und Berichtigung</h3>
              <p className="text-slate-300 leading-relaxed">
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Des Weiteren haben Sie das Recht auf Datenübertragbarkeit und das Recht, die Einschränkung der Verarbeitung zu verlangen.
              </p>
              <p className="mt-4 text-slate-300">
                Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an unseren Datenschutzbeauftragten wenden.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="cookies" className="scroll-mt-32">
        <h2>7. Cookies & Consent-Management</h2>
        <p>
          Unsere Website verwendet ein Cookie-Consent-Management-Tool (vanilla-cookieconsent), um Ihnen die transparente Kontrolle über Cookies und ähnliche Technologien zu ermöglichen. Beim ersten Besuch werden Sie über ein Banner über die Cookie-Nutzung informiert und können Ihre Einwilligung granular erteilen oder verweigern.
        </p>

        <h3>Cookie-Kategorien</h3>
        <p>Wir unterscheiden folgende Kategorien:</p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Technisch notwendig</strong> (immer aktiv): Für den Betrieb der Website erforderliche Cookies. Rechtsgrundlage: § 25 Abs. 2 Nr. 2 TTDSG / Art. 6 Abs. 1 lit. f DSGVO.</li>
          <li><strong>Statistik & Analyse</strong> (Opt-in): Helfen uns zu verstehen, wie Besucher mit der Website interagieren. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.</li>
          <li><strong>Marketing & Werbung</strong> (Opt-in): Werden verwendet, um Werbung relevanter zu gestalten. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.</li>
          <li><strong>Externe Medien</strong> (Opt-in): Ermöglicht das Laden externer Inhalte wie Google Maps. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.</li>
        </ul>

        <h3>Google Maps</h3>
        <p>
          Auf unserer Kontaktseite können wir eine Karte von Google Maps einbetten. Die Einbettung erfolgt erst nach Ihrer ausdrücklichen Einwilligung in die Kategorie "Externe Medien". Vor der Einwilligung wird ein Platzhalter mit unserer Geschäftsadresse angezeigt. Beim Laden der Karte werden Daten (insbesondere Ihre IP-Adresse) an Google LLC in die USA übertragen. Bitte beachten Sie die Datenschutzerklärung von Google.
        </p>

        <h3>Widerruf & Änderung der Einwilligung</h3>
        <p>
          Sie können Ihre Cookie-Einstellungen jederzeit über den Link "Cookie-Einstellungen" in unserem Footer anpassen oder Ihre Einwilligung vollständig widerrufen. Bereits gesetzte Cookies nicht-notwendiger Kategorien werden bei Widerruf nach Möglichkeit automatisch gelöscht.
        </p>
      </section>

      <section id="sicherheit" className="scroll-mt-32">
        <h2>8. Datensicherheit</h2>
        <p>
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen, die Sie an uns senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. 
        </p>
        <p>
          Wir weisen jedoch darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
        </p>
      </section>
    </LegalPageLayout>
  );
}
