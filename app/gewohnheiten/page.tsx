'use client'

import Link from 'next/link'
import ParticleBackground from '@/components/ParticleBackground'

export default function GewohnheitenPage() {
  console.log("Gewohnheiten page loaded")

  return (
    <main className="relative min-h-screen bg-black text-white" data-macaly="gewohnheiten-page">
      <ParticleBackground />
      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6" data-macaly="gewohnheiten-hero">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" data-macaly="hero-title">
              Du wirst nicht, was du willst. Du wirst, was du wiederholst.
            </h1>
            <p className="text-xl md:text-2xl text-white/80 italic font-light">
              "Motivation is what gets you started. Habit is what keeps you going."
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
                Ich war mal süchtig – nicht nur nach Drogen, sondern nach etwas viel subtilerem.<br />
                Nach Verdrängen. Nach Wegschauen. Nach Chaos.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Meine Tage waren voll mit Ablenkung.<br />
                Ich bin morgens aufgewacht und hab direkt aufs Handy geschaut. Ich war bei der Arbeit und habe permanent aufs Handy geschaut, ich war unter Freunden, aber mein Fokus war auf Social Media. Ich habe nachts im Bett solange gescrollt bis mir das Handy in meine scheiss Fresse fiel. Ich habe mich von Fertigprodukten ernährt, morgens, mittags und Abends. Gekifft, geraucht, mich am Wochenende Freitag, Samstags im Club so hart auf die Seite gestellt, dass ich bis zum nächsten Wochenende gebraucht habe, um wieder klar zu kommen, nur um dann die selbe Scheiße wieder abzuziehen.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Ich habe mich mit Leuten umgeben, die das Gleiche taten und mich immer wieder tiefer da reingezogen haben.<br />
                Ich hab Dinge getan, die mir geschadet haben – und trotzdem jeden fucking Tag wiederholt.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                <strong>Irgendwann hab ich's gecheckt:</strong><br />
                Dein Leben ist das Ergebnis deiner täglichen Entscheidungen.<br />
                Nicht das, was du dir vornimmst. Sondern das, was du tust – immer und immer wieder.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Understanding Habits */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Gewohnheiten sind wie unsichtbare Fesseln – oder geheime Superkräfte.
          </h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Dein Gehirn liebt Gewohnheiten.<br />
                Warum? Weil sie Energie sparen. Automatismen machen 95 % deines Tages aus.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Ob du morgens aufstehst und trainierst – oder snoozt.<br />
                Ob du deinen Gedanken glaubst – oder sie hinterfragst.<br />
                Ob du dich selbst sabotierst – oder systematisch stärkst:<br />
                Alles beginnt mit Gewohnheiten.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                Aber die wenigsten wissen, wie man sie wirklich verändert.<br />
                Weil sie versuchen, gegen ihren eigenen Code zu kämpfen – statt ihn umzuschreiben.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Coaching Approach */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Wenn du deine Gewohnheiten nicht steuerst, steuern sie dich.
          </h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Ich zeig dir, wie du deine alten Muster aufdeckst – und durch neue ersetzt, die dich tragen.
            </p>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Gemeinsam gehen wir's an:</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Deine Trigger erkennen & kontrollieren
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Mikroschritte statt Motivation: Systeme statt Ziele
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Neue Routinen, die sich nach dir anfühlen – nicht nach Zwang
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Wie du langfristig dranbleibst, ohne dich zu zwingen
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Wie du mit Rückfällen umgehst, ohne alles hinzuwerfen
                </li>
              </ul>
            </div>
            <p className="text-lg md:text-xl leading-relaxed">
              Keine disziplinierte Selbstquälerei.<br />
              Sondern smarte Selbstführung.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Willst du dich verändern? Dann fang bei dem an, was du täglich tust.<br />
            Ich zeige dir, wie du das System in deinem Kopf umschreibst.
          </h2>
          <Link 
            href="/coaching"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
          >
            Erstgespräch buchen
          </Link>
        </div>
      </div>
    </main>
  )
}