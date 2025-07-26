'use client'

import Link from 'next/link'
import ParticleBackground from '@/components/ParticleBackground'

export default function SelbstwahrnehmungPage() {
  console.log("Selbstwahrnehmung page loaded")

  return (
    <main className="relative min-h-screen bg-black text-white" data-macaly="selbstwahrnehmung-page">
      <ParticleBackground />
      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6" data-macaly="selbstwahrnehmung-hero">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" data-macaly="hero-title">
              Wer bist du – wenn niemand hinsieht?
            </h1>
            <p className="text-xl md:text-2xl text-white/80 italic font-light">
              "I'm not what I think I am. I'm not what you think I am. I am what I think you think I am."
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
                Ich hab lange nicht gewusst, wer ich wirklich bin.<br />
                Ich dachte, ich bin das, was andere in mir sehen.<br />
                Der fleißige. Der ruhige. Der starke. Der, der funktioniert.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Ich hab meine Identität aus Blicken gebaut.<br />
                Aus Reaktionen. Aus Erwartungen.<br />
                Und ich hab nicht gemerkt, wie ich mich dabei selbst verloren habe.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                <strong>Heute weiß ich:</strong><br />
                Du kannst dich nicht selbst finden, wenn du dich die ganze Zeit selbst belügst.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Understanding Self-Awareness */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Du kannst nichts verändern, was du nicht siehst.
          </h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Selbstwahrnehmung ist der Schlüssel zu allem – aber die meisten leben komplett getrennt von sich selbst.<br />
                Ich laufe durch die Straßen und sehe Menschen aufhören welche zu sein. Nur noch Kälte, Gleichgültigkeit und Ignoranz in ihren Augen. Sie rennen durch die Welt, aber wissen nicht, warum sie sich leer fühlen.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Weil sie nicht spüren, wer sie sind. Was sie brauchen. Was sie wirklich wollen.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                <strong>Und weißt du warum?</strong><br />
                Weil sie gelernt haben, sich selbst zu ignorieren – um zu gefallen, zu überleben, zu funktionieren.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                Aber wenn du dich selbst nicht kennst,<br />
                wie willst du dein Leben lenken?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Coaching Approach */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Du kannst kein echtes Leben führen, wenn du eine Rolle spielst.
          </h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Ich zeige dir keine oberflächlichen Spiegelübungen.<br />
              Ich helfe dir, dich selbst wieder zu sehen – roh, ehrlich, ohne Maske.
            </p>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Wir arbeiten daran:</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Wie du deine wahren Gedanken von den anerzogenen trennst
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Wie du lernst, dein inneres Gefühl wieder zu spüren
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Wie du mit dir selbst sprichst – und wie du das änderst
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Wie du rauskommst aus den Rollen, die dir nicht mehr gehören
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Wie du dir selbst endlich vertraust
                </li>
              </ul>
            </div>
            <p className="text-lg md:text-xl leading-relaxed">
              Kein Bullshit. Keine Instagram-Mindset-Parolen.<br />
              Sondern echte Klarheit über dich selbst.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Wer bist du wirklich – wenn alles andere still wird?<br />
            Lass es uns gemeinsam herausfinden.
          </h2>
          <Link 
            href="/coaching"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
          >
            1:1 Coaching anfragen
          </Link>
        </div>
      </div>
    </main>
  )
}