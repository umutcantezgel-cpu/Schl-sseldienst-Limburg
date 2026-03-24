import { ShieldCheck, MapPin, Heart, Clock, Star } from "lucide-react";
import EmergencyCTA from "@/components/EmergencyCTA";

export default function UeberUnsPage() {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero Section — White/Slate, NO dark background */}
      <section className="bg-slate-50 px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-sm font-semibold mb-6">
            <MapPin className="h-4 w-4" />
            Aus Wetzlar. Für Wetzlar.
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6">
            Nicht einfach ein Schlüsseldienst. <br />
            <span className="text-primary-600">Ihre Rettung in der Not.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 sm:text-xl leading-relaxed">
            Mehr als 15 Jahre Erfahrung, über 50 gerettete Situationen jeden Monat. Wir sind der Handwerksbetrieb von nebenan, dem Sie blind vertrauen können.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-lg prose-slate mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6 flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-primary-600" />
              Warum wir den Ruf unserer Branche reparieren
            </h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Jeder kennt die Schauergeschichten aus dem Fernsehen: Wenn die Tür ins Schloss fällt, beginnt oft nicht nur der Stress, sondern auch die Angst vor der Rechnung.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Sogenannte &quot;Schwarze Schafe&quot; und Abzock-Zentralen aus dem Internet nutzen die pure Notlage der Menschen gnadenlos aus. Versteckte Anfahrtskosten, zerstörte Schlösser und Rechnungen jenseits der 300-Euro-Marke sind leider keine Seltenheit.
            </p>
            <p className="text-slate-900 font-bold">
              Genau deshalb haben wir Schlüsseldienst Wetzlar gegründet. Wir wollten beweisen: Echtes Handwerk geht immer ehrlich.
            </p>

            <blockquote className="my-10 border-l-4 border-primary-600 bg-slate-50 p-6 rounded-r-2xl italic text-slate-900">
              &quot;Wir möchten, dass Sie aufatmen können, sobald Sie unser Auto in Ihrer Straße sehen. Keine bösen Überraschungen, sondern nur schnelle, kompetente Hilfe von Nachbarn.&quot;
            </blockquote>
          </div>

          {/* Values Grid */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-primary-300 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white mb-6 shadow-lg shadow-primary-600/20">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Unsere Philosophie</h3>
              <p className="text-slate-600 leading-relaxed">
                Wir behandeln jede Tür so vorsichtig, als wäre es unsere eigene. Zu 99% öffnen wir zerstörungsfrei. Darum vertrauen uns private Haushalte genauso wie lokale Unternehmen und Behörden in der Region.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-primary-300 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white mb-6 shadow-lg shadow-primary-600/20">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Zeit ist Empathie</h3>
              <p className="text-slate-600 leading-relaxed">
                Wir wissen: Wer vor verschlossener Tür steht (vielleicht noch im Regen oder bei Kälte), braucht keine Warteschleifen. Als echtes lokales Team garantieren wir in Wetzlar und direkter Umgebung eine Anfahrt von unter 25 Minuten.
              </p>
            </div>
          </div>

          {/* Proof Section */}
          <div className="prose prose-lg prose-slate mx-auto mt-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">
              Vom Fernseh-Experten ausgebildet
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Unser Chef-Techniker wurde von Uwe Sarfeld, einem der bekanntesten und fähigsten Schlüsseldienst-Experten Deutschlands (regelmäßig im TV zu sehen), ausgebildet. Wir bringen also nicht nur das richtige Werkzeug mit, sondern das absolute Meister-Know-how.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-slate-200 pt-12">
              <div className="flex items-center gap-1 text-primary-600 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 fill-current" />)}
              </div>
              <p className="text-slate-900 font-bold text-xl">
                Lassen Sie sich überzeugen, wenn Sie uns am meisten brauchen.
              </p>
              <p className="text-slate-500 text-base">
                Speichern Sie unsere Nummer am besten gleich in Ihrem Handy ein.
              </p>
            </div>
          </div>
        </div>
      </section>

      <EmergencyCTA />
    </div>
  );
}
