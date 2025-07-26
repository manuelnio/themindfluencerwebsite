'use client'

import Link from 'next/link'
import ParticleBackground from '@/components/ParticleBackground'

export default function GesellschaftPage() {
  console.log("Gesellschaft page loaded")

  return (
    <main className="relative min-h-screen bg-black text-white" data-macaly="gesellschaft-page">
      <ParticleBackground />
      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6" data-macaly="gesellschaft-hero">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" data-macaly="hero-title">
              Anpassen ist kein Zeichen von Gesundheit.
            </h1>
            <p className="text-xl md:text-2xl text-white/80 italic font-light">
              "It's not a sign of mental health being well adapted to a sick society."
            </p>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Meine Geschichte</h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Ich hab mich angepasst.<br />
                An ein System, das mir gesagt hat, wie ich zu leben habe.<br />
                Früh aufstehen. Schulbank drücken. Arbeiten gehen. Funktionieren. Fresse halten.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Ich hab funktioniert – so gut, dass ich fast draufgegangen wäre.<br />
                Denn niemand fragt dich, wie es dir wirklich geht.<br />
                Solange du leistest, bist du gut. Und wenn du nicht mehr kannst? Dann bist du defekt.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                <strong>Aber Ich war nie defekt.</strong><br />
                Die Gesellschaft ist es.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Understanding Society */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Du bist nicht falsch. Dieses System ist es.
          </h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Wir wachsen in einer Welt auf, die uns beibringt, zu gehorchen – nicht zu hinterfragen.<br />
                In der du nur dann „wertvoll" bist, wenn du funktionierst. Karriere machst. Schlank bist. Still bist.<br />
                Aber was ist mit Menschlichkeit? Was ist mit Tiefe? Was ist mit Seele?
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Dieses System erzeugt Angst, Druck, Burnout, Depression.<br />
                Und verkauft dir dann Pillen und Perfektion als Lösung.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                <strong>Das ist keine Gesellschaft – das ist ein Käfig mit WLAN.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Coaching Approach */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Du musst nicht in ein krankes System passen. Du darfst ausbrechen.
          </h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Ich helfe dir nicht, dich besser anzupassen.<br />
              Ich helfe dir, dich zu befreien.
            </p>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">In meinem Coaching geht's um:</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Deine eigene Wahrheit erkennen – nicht die, die man dir eingetrichtert hat
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Deine Konditionierungen zu entlarven
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Systemische Denkfehler zu durchbrechen
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Deine Stimme wiederzufinden
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Den Mut zu entwickeln, dein Leben nach deinen Regeln zu leben
                </li>
              </ul>
            </div>
            <p className="text-lg md:text-xl leading-relaxed">
              Das hier ist kein Selbsthilfe-Kuschelkurs.<br />
              Das ist Rebellion. Innen. Und außen.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Willst du wirklich weiter in einem System funktionieren, das dich kaputt macht?<br />
            Oder willst du endlich DU sein – echt, frei, radikal ehrlich?
          </h2>
          <Link 
            href="/coaching"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
          >
            Coaching buchen
          </Link>
        </div>
      </div>
    </main>
  )
}