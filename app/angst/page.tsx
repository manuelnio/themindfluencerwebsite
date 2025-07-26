'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ParticleBackground from '@/components/ParticleBackground'

export default function AngstPage() {
  console.log("Angst page loaded")

  return (
    <main className="relative min-h-screen bg-black text-white" data-macaly="angst-page">
      <ParticleBackground />
      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6 overflow-hidden" data-macaly="angst-hero">
        {/* Komplett schwarzer Hintergrund */}
        <div className="absolute inset-0 bg-black" />
        
        <div className="max-w-6xl mx-auto text-center relative z-20">
          <div className="mb-8">
            
            {/* Titel mit intelligenter Textfarbe - bleibt gleich */}
            <div className="relative mb-6">
              <h1 
                className="text-4xl md:text-6xl font-bold leading-tight relative z-10"
                data-macaly="hero-title"
                style={{
                  background: `
                    linear-gradient(
                      45deg,
                      #ffffff 0%,    /* Weiß für dunkle Bereiche */
                      #ffffff 20%,
                      #67e8f9 25%,   /* Hellblau für mittlere Bereiche */
                      #22d3ee 35%,   /* Cyan für helle Bereiche */
                      #ffffff 45%,
                      #ffffff 55%,
                      #22d3ee 65%,
                      #67e8f9 75%,
                      #ffffff 85%,
                      #ffffff 100%
                    )
                  `,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: 'none',
                  filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.9)) drop-shadow(0 0 20px rgba(255,255,255,0.3))'
                }}
              >
                Angst beginnt im Kopf – und genau dort besiegen wir sie auch.
              </h1>
              
              {/* Zusätzlicher Schatten für bessere Lesbarkeit */}
              <h1 
                className="absolute inset-0 text-4xl md:text-6xl font-bold leading-tight text-black/20 blur-sm"
                aria-hidden="true"
              >
                Angst beginnt im Kopf – und genau dort besiegen wir sie auch.
              </h1>
            </div>
            
            {/* Quote mit ähnlicher Behandlung - bleibt gleich */}
            <div className="relative">
              <p 
                className="text-xl md:text-2xl italic font-light relative z-10"
                style={{
                  background: `
                    linear-gradient(
                      90deg,
                      #ffffff 0%,
                      #ffffff 30%,
                      #a5f3fc 40%,
                      #22d3ee 50%,
                      #a5f3fc 60%,
                      #ffffff 70%,
                      #ffffff 100%
                    )
                  `,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(1px 1px 3px rgba(0,0,0,0.8))'
                }}
              >
                "Everything you want is on the other side of fear."
              </p>
              
              <p 
                className="absolute inset-0 text-xl md:text-2xl italic font-light text-black/15 blur-sm"
                aria-hidden="true"
              >
                "Everything you want is on the other side of fear."
              </p>
            </div>
          </div>
        </div>
        
        {/* Blaue Partikel bleiben über dem schwarzen Hintergrund */}
        <div className="absolute inset-0 z-5">
          <div className="absolute inset-0 opacity-40">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            <div className="particle particle-5"></div>
          </div>
        </div>
      </section>

      {/* Der Schrei Bild Section */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className="w-full max-w-md mx-auto h-80 rounded-2xl shadow-2xl"
            style={{
              backgroundImage: `url('https://assets.macaly-user-data.dev/z1egykotl11h6cu32jilz0n7/frovfe30klatu2owg3cvjni8/wpsC59QP5FSe8xK5zH4KV/img-0557.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'grayscale(20%) contrast(1.2) brightness(0.9)',
            }}
          />
          <p className="text-sm text-white/60 mt-4 italic">
            "Der Schrei" - Ein universelles Symbol menschlicher Angst
          </p>
        </div>
      </div>

      {/* Personal Story */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Meine Geschichte</h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                <strong>Ich weiß, wie sich Angst anfühlt.</strong><br />
                Nicht als Wort. Nicht als Idee.<br />
                Sondern als alles verschlingende Macht, die dir den Atem nimmt.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Ich hatte Panikattacken – so heftig, dass ich dachte, mein Herz explodiert.<br />
                Ich lag stundenlang auf dem Boden. Und dachte: Ich werde diese Nacht nicht überleben.<br />
                Oder schlimmer: Ich will es vielleicht gar nicht.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                Kein Arzt konnte mir helfen. Kein Test zeigte etwas an.<br />
                Aber mein Kopf? Der war ein verdammter Kriegsplatz.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Understanding Fear */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Angst ist nicht dein Feind. Sie ist ein verdammter Wächter.
          </h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Angst will dich schützen. Sie ist eine uralte Alarmanlage.<br />
                Aber manchmal reagiert sie wie ein Rauchmelder bei Kerzenlicht.<br />
                Plötzlich schreit alles in dir, obwohl nichts passiert ist.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                Deine Amygdala feuert – dein Herz rast – dein Kopf dreht sich.<br />
                Doch es gibt einen Weg, diese Schleife zu durchbrechen.<br />
                Nicht durch Mut. Sondern durch Verstehen, Entschärfen und Umprogrammieren.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Coaching Approach */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Du musst keine Angst vor der Angst haben.
          </h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Ich zeige dir keinen Theoriekram.<br />
              Ich zeige dir, wie du deine Angst kennenlernst – und kontrollierst.
            </p>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Wir erarbeiten:</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Was dein Körper dir wirklich sagen will
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Wie du Panikattacken entschärfen kannst
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Wie du im Ernstfall handlungsfähig bleibst
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Wie du langfristig dein Nervensystem beruhigst
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Und wie du der Mensch wirst, der der Angst nicht mehr ausweicht
                </li>
              </ul>
            </div>
            <p className="text-lg md:text-xl leading-relaxed">
              Keine Schnelllösung. Aber echte Kontrolle. Von innen nach außen.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Bereit, die Kontrolle zurückzuholen?<br />
            Bereit, dich nicht länger von deiner Angst steuern zu lassen?
          </h2>
          <Link 
            href="/coaching"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
          >
            Überwinde deine Angst
          </Link>
        </div>
      </div>
    </main>
  )
}