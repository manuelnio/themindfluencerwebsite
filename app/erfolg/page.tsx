'use client'

import Link from 'next/link'
import ParticleBackground from '@/components/ParticleBackground'

export default function ErfolgPage() {
  console.log("Erfolg page loaded")

  return (
    <main className="relative min-h-screen bg-black text-white" data-macaly="erfolg-page">
      <ParticleBackground />
      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6" data-macaly="erfolg-hero">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" data-macaly="hero-title">
              Erfolg beginnt nicht im Außen – er beginnt in dir.
            </h1>
            <p className="text-xl md:text-2xl text-white/80 italic font-light">
              "The key to success is to focus on goals, not obstacles."
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
                Ich dachte lange, Erfolg heißt Geld, Status, Applaus.<br />
                Aber ich hatte Momente, da lag ich komplett am Boden –<br />
                und hätte jeden Preis gezahlt, nur um wieder durchatmen zu können.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                <strong>Ich weiß heute:</strong><br />
                Erfolg ist nicht, was du erreichst.<br />
                Erfolg ist, wer du wirst – auf dem Weg dorthin.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                Und wenn du dabei kaputtgehst, war's kein Erfolg. Es war nur Ego.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Understanding Success */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Erfolg ist das, was bleibt – wenn der Lärm aufhört.
          </h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Was ist meine Definition von Erfolg? Auf das zu hören, was dein Herz sagt.<br />
                Für das einzustehen, was man für richtig hält, während alle anderen<br />
                ihren Schwanz zwischen ihre Beine klemmen<br />
                Etwas zu erschaffen, das niemand sonst kann.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Mutig genug zu sein, um große Träume zu verwirklichen und zu kämpfen, wenn einem gesagt wird, man solle aufgeben.<br />
                Mehr zu geben, wenn man nichts mehr hat.<br />
                Es ist eine Person, die etwas wagt, von dem ihr gesagt wurde, dass es nie passieren könnte.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Es ist eine Person, die in den dunklen Zeiten die helle Seite sehen kann, wenn es keine gibt.<br />
                Es ist, wenn jemand, der nie etwas hatte, keine Angst hat auf Geld zu verzichten, weil er lieber etwas tut, das er wirklich liebt, und dafür eine Gehaltskürzung in Kauf nimmt.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Es ist eine Person, die niemals wanken oder ändern würde, wer sie ist, nur um zu versuchen, etwas Glaubwürdigkeit zu erlangen, damit sie sich von einem Fremden akzeptiert fühlen kann.<br />
                Es ist eine Person, die die Misserfolge in ihrem Leben in Motivation umwandeln kann<br />
                Es ist der Glaube an sich selbst, wenn es sonst niemand tut.<br />
                Stolz auf den Menschen zu sein, der du geworden bist
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                <strong>Erfolg ist nicht das Endziel.</strong><br />
                Erfolg ist die Summe deiner inneren Arbeit – sichtbar gemacht im Außen.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Coaching Approach */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Ich zeig dir nicht, wie du schneller wirst – sondern wie du bei dir ankommst.
          </h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Mein Coaching bringt dich nicht einfach „weiter".<br />
              Es bringt dich tiefer. Und genau deshalb auch höher.
            </p>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Wir arbeiten an:</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Deiner persönlichen Definition von Erfolg
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Der inneren Stabilität, die du brauchst, um Druck zu tragen
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Zielsystemen, die dich führen – ohne dich zu zerstören
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Fokus und Klarheit auf deinem Weg
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Dem Mut, dich selbst größer zu denken – ohne dich zu verlieren
                </li>
              </ul>
            </div>
            <p className="text-lg md:text-xl leading-relaxed">
              Ich bring dich nicht zum Erfolg,<br />
              ich bring dich zu dir – und dann kommt der Rest.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Willst du echten Erfolg – oder nur Applaus?<br />
            Willst du dich selbst feiern – oder nur gemocht werden?
          </h2>
          <Link 
            href="/coaching"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
          >
            Mein Weg zum Erfolg starten
          </Link>
        </div>
      </div>
    </main>
  )
}