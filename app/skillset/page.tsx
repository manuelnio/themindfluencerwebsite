'use client'

import Link from 'next/link'
import ParticleBackground from '@/components/ParticleBackground'

export default function SkillsetPage() {
  console.log("Skillset page loaded")

  return (
    <main className="relative min-h-screen bg-black text-white" data-macaly="skillset-page">
      <ParticleBackground />
      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6" data-macaly="skillset-hero">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" data-macaly="hero-title">
              Träume ohne Skills sind Fantasien. Skills ohne Anwendung sind verschwendet.
            </h1>
            <p className="text-xl md:text-2xl text-white/80 italic font-light">
              "Skill is the unified force of experience, intellect and passion in their doing."
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
                Ich dachte lange: „Wenn ich nur genug will, wird's schon klappen."<br />
                Falsch gedacht.<br />
                Wille ohne Werkzeug ist wie ein Krieger ohne Klinge.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Ich hab mir Skills aufgebaut – weil ich wusste:<br />
                Niemand wird mir irgendwas schenken.<br />
                Wenn ich was verändern will, muss ich lernen, wie man kämpft.<br />
                Systematisch. Klar. Effektiv.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                <strong>Und genau das geb ich heute weiter.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Understanding Skillset */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Dein Skillset ist dein Arsenal. Nicht dein Schmuck.
          </h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Viele reden von „Selbstverwirklichung" – aber haben keinen Plan, wie.<br />
                Weil sie nie gelernt haben, was es braucht:<br />
                🛠 Fähigkeiten. Systeme. Handlungskompetenz.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Dein Skillset ist das, was du kannst, selbst wenn du gerade nichts fühlst.<br />
                Es ist das, was dich trägt, wenn Motivation dich verlässt.<br />
                Es ist das Werkzeug, mit dem du dein Mindset in Realität meißelst.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                <strong>Willst du etwas verändern?</strong><br />
                Dann brauchst du mehr als Erkenntnis. Du brauchst Execution.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Coaching Approach */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Ich zeige dir nicht, was du fühlen sollst – ich zeige dir, was du tun kannst.
          </h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              In meinem Coaching geht's nicht um Blabla.<br />
              Sondern um Handlung. Klarheit. Momentum.
            </p>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Wir arbeiten gemeinsam daran:</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Deine persönlichen Stärken & Schwächen sichtbar zu machen
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Konkrete Skills aufzubauen (z. B. Disziplin, Fokus, emotionale Resilienz)
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Systeme zu bauen, die dich jeden Tag tragen
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Routinen, die dich nicht ausbrennen, sondern aufbauen
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Dranbleiben – auch wenn's schwer wird
                </li>
              </ul>
            </div>
            <p className="text-lg md:text-xl leading-relaxed">
              Jeder kann reden.<br />
              Aber was dich unterscheidet, ist das, was du machst, wenn keiner zuschaut.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Willst du dein Potenzial leben – oder nur davon träumen?<br />
            Lass uns deine Werkzeuge bauen.
          </h2>
          <Link 
            href="/coaching"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
          >
            Skillset stärken
          </Link>
        </div>
      </div>
    </main>
  )
}