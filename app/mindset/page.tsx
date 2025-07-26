'use client'

import Link from 'next/link'
import ParticleBackground from '@/components/ParticleBackground'

export default function MindsetPage() {
  console.log("Mindset page loaded")

  return (
    <main className="relative min-h-screen bg-black text-white" data-macaly="mindset-page">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6" data-macaly="mindset-hero">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" data-macaly="hero-title">
              Du bist kein Gefangener deiner Realität – du bist der Architekt deiner Gedanken.
            </h1>
            <p className="text-xl md:text-2xl text-white/80 italic font-light">
              "Once your mindset changes, everything on the outside will change along with it."
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
                Ich dachte früher, die Welt ist einfach so, wie sie ist.<br />
                Hart. Ungerecht. Kalt. Und ich mittendrin – klein, machtlos, kaputt.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Aber irgendwann hab ich gemerkt:<br />
                Die Welt verändert sich nicht zuerst da draußen. Sondern in deinem Kopf.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                <strong>Ich hab mein Mindset geändert,</strong><br />
                weil ich keine andere Wahl hatte –<br />
                und genau deshalb hab ich überlebt.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Understanding Mindset */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Mindset ist nicht, wie du denkst – es ist, wer du wirst.
          </h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Mindset ist nicht „positiv denken" oder motivierende Sprüche an der Wand.<br />
                Mindset ist der Filter, durch den du alles siehst.<br />
                Und was du siehst, bestimmt, wie du fühlst.<br />
                Wie du entscheidest.<br />
                Wie du lebst.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Es ist die Wurzel deiner Identität.<br />
                Die Stimme in deinem Kopf.<br />
                Der Unterschied zwischen Opferdenken und Eigenmacht.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                <strong>Und die gute Nachricht?</strong><br />
                Du kannst es verändern.<br />
                Nicht über Nacht. Aber Schritt für Schritt.<br />
                Wie ein Muskel – durch Wiederholung, Bewusstsein und Klarheit.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Coaching Approach */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Dein Mindset ist der Code, der dein ganzes System steuert.
          </h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Ich zeige dir, wie du den Autopiloten in deinem Kopf umprogrammierst.<br />
              Kein esoterischer Scheiß. Kein toxisches Positivdenken.<br />
              Sondern Klarheit. Fokus. Ownership.
            </p>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Im Coaching lernst du:</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Wie du limitierende Glaubenssätze erkennst – und ersetzt
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Wie du den inneren Kritiker entlarvst
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Wie du deinen Fokus zurückholst
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Wie du Denkspiralen stoppst
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Wie du dein Denken mit deinem Fühlen verbindest – und ins Handeln kommst
                </li>
              </ul>
            </div>
            <p className="text-lg md:text-xl leading-relaxed">
              Du kannst deinen Kopf nicht kontrollieren, wenn du ihn nicht kennst.<br />
              Ich zeig dir, wie du ihn neu baust.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Du willst dein Leben verändern?<br />
            Dann fang bei dem an, was du jeden Tag denkst.
          </h2>
          <Link 
            href="/coaching"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
          >
            Mindset resetten
          </Link>
        </div>
      </div>
    </main>
  )
}