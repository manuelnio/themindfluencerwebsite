'use client'

import { motion } from 'framer-motion'
import { CheckCircle, X, Mail } from 'lucide-react'
import SocialLinks from '@/components/SocialLinks'
import ParticleBackground from '@/components/ParticleBackground'
import { useState, useEffect } from 'react'

const packages = [
  {
    name: 'CHAINBREAKER',
    price: '77 €',
    duration: '1 intensive 90-Minuten-Session',
    description: 'Für alle, die endlich ihre Muster, Ängste & Selbstsabotage verstehen wollen.',
    target: 'Für alle, die sagen: „Ich kann so nicht weitermachen."',
    features: [
      '1× Deep Session (90 Minuten)',
      'Vorab-Fragebogen zur Vorbereitung',
      'Nachbereitung per PDF mit konkreten Aufgaben',
      '3 Tage Chat-Support danach'
    ],
    color: 'from-red-600 to-red-700',
    borderColor: 'border-red-500'
  },
  {
    name: 'ARISE FROM SHADOWS',
    price: '290 €',
    duration: '4 Sessions à 90 Minuten (in 4 Wochen)',
    description: 'Steh auf. Nicht perfekt. Sondern echt. Für alle, die mitten im Chaos stehen – und sich Schritt für Schritt aus der Dunkelheit herausarbeiten wollen.',
    target: 'Für die, die sich selbst nicht mehr aus dem Weg gehen wollen.',
    features: [
      '4× Deep Coaching Sessions',
      'Vorab-Fragebogen zur Vorbereitung',
      'Persönlicher Fahrplan für deine Entwicklung',
      'Übungen für zwischen den Sessions',
      'Wöchentliche Reflexionen',
      '4 Wochen Chat-Support bei Bedarf',
      'Persönlicher Reality-Check'
    ],
    color: 'from-purple-600 to-purple-700',
    borderColor: 'border-purple-500'
  },
  {
    name: 'DREAMWALKER',
    price: '555 €',
    duration: '8 Sessions + täglicher Support über 8 Wochen',
    description: 'Du träumst nicht mehr. Du gehst. Für alle, die ihr Leben nicht länger fantasieren, sondern erschaffen wollen – radikal ehrlich, kompromisslos bewusst.',
    target: 'Für die, die bereit sind, nicht nur zu überleben – sondern sich selbst zu erschaffen.',
    features: [
      '8× Deep Coaching Sessions (90 Minuten)',
      'Vorab-Fragebogen zur Vorbereitung',
      'Persönlicher Reality-Check',
      'Individueller 8 Wochen-Plan',
      'Wöchentliche Reflexionen',
      'Täglicher Chat-Support bei Bedarf',
      'Finales Mentoring-Call mit Langzeitstrategie'
    ],
    color: 'from-amber-600 to-amber-700',
    borderColor: 'border-amber-500'
  }
]

const notForYou = [
  'Du eigentlich nur jemanden brauchst, der dir zuhört, während du dich weiter im Kreis drehst.',
  'Du nicht bereit bist, radikal ehrlich mit dir selbst zu werden.',
  'Du Ausreden verteidigst statt Entscheidungen zu treffen.',
  'Du lieber Bücher liest als ins Handeln kommst.',
  'Du glaubst, dass sich dein Leben von außen verändern muss, damit es dir innen besser geht.'
]

export default function CoachingPage() {
  const [isClient, setIsClient] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    try {
      console.log("Coaching page loaded successfully")
      
      const timer = setTimeout(() => {
        setIsClient(true)
        setIsInitialized(true)
        console.log("Coaching page initialized")
      }, 100)
      
      return () => clearTimeout(timer)
    } catch (error) {
      console.error("Error in useEffect:", error)
      setIsClient(true)
      setIsInitialized(true)
    }
  }, [])

  const handleBooking = (packageName: string) => {
    try {
      if (!packageName || typeof packageName !== 'string') {
        console.error('Invalid package name')
        return
      }
      
      console.log("Booking package:", packageName)
      const subject = encodeURIComponent(`Coaching Anfrage: ${packageName}`)
      const body = encodeURIComponent(`Hallo Manuel,

ich interessiere mich für das ${packageName} Paket.

Meine Kontaktdaten:
Name: 
E-Mail: 
Telefon: 

Kurze Beschreibung meiner Situation:


Beste Grüße`)
      
      if (typeof window !== 'undefined' && window.location) {
        window.location.href = `mailto:themindfluencer@icloud.com?subject=${subject}&body=${body}`
      } else {
        console.error('Window object not available')
      }
    } catch (error) {
      console.error("Error in handleBooking:", error)
    }
  }

  const handleConsultation = () => {
    try {
      console.log("Consultation booking")
      const subject = encodeURIComponent(`Kostenloses Beratungsgespräch`)
      const body = encodeURIComponent(`Hallo Manuel,

ich interessiere mich für ein kostenloses Beratungsgespräch.

Meine Kontaktdaten:
Name: 
E-Mail: 
Telefon: 

Kurze Beschreibung meiner Situation:


Beste Grüße`)
      
      if (typeof window !== 'undefined' && window.location) {
        window.location.href = `mailto:themindfluencer@icloud.com?subject=${subject}&body=${body}`
      } else {
        console.error('Window object not available')
      }
    } catch (error) {
      console.error("Error in handleConsultation:", error)
    }
  }

  if (!isInitialized) {
    return (
      <main className="relative min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/60">Lädt...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="relative min-h-screen bg-black text-white" data-macaly="coaching-page">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-16 px-6" data-macaly="coaching-hero">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 
              className="text-4xl md:text-6xl font-bold mb-8 text-white"
              data-macaly="coaching-title"
            >
              1:1 COACHING
            </h1>
            
            <div className="text-xl text-white/80 max-w-2xl mx-auto">
              Kein Gelaber. Keine Affirmationen. Kein „Lieb dich selbst"-Bullshit.<br />
              Sondern Klarheit. Konfrontation. Und echte Veränderung – von innen nach außen.
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who I Am Section */}
      <section className="relative z-10 py-12 px-6" data-macaly="coaching-who-i-am">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h2 className="text-2xl font-bold mb-6 text-white">
              Wer ich bin – und warum ich überhaupt rede
            </h2>
            
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                Ich bin kein Coach, der dir lächelnd gegenüber sitzt, dir ins Gesicht sagt, dass alles gut wird – und dann deine Angst in PowerPoint-Folien packt.
              </p>
              
              <p>
                Ich bin der, der genau da war, wo du gerade stehst:<br />
                Verwirrt. Gebrochen. Überfordert.<br />
                Mit dem Rücken zur Wand und dem Gefühl, dass es so einfach nicht mehr weitergeht.
              </p>
              
              <p>
                Ich bin nicht aus einem Lehrbuch gefallen. Ich bin durch's Feuer gegangen.<br />
                Ich hatte Panikattacken, hab mein Leben in Frage gestellt, meine Ausbildung als Mental Coach nicht abschließen dürfen, weil ich selbst kurz davor war, alles zu verlieren.
              </p>
              
              <p className="text-white font-medium">
                Und genau deshalb bin ich heute hier.<br />
                Nicht weil ich perfekt bin. Sondern weil ich weiß, wie es sich anfühlt, am Abgrund zu stehen – und wie man sich da selbst rausholt.
              </p>
              
              <p>
                Ich bin kein klassischer Mental Coach.<br />
                Ich bin The Mindfluencer.<br />
                Kein Therapeut. Kein Guru. Kein Instagram-Glitzercoach.
              </p>
              
              <p className="text-lg font-semibold text-white">
                Ich bin dein Spiegel.<br />
                Ich halte dir alles vor, was du nicht sehen willst – damit du endlich erkennst, was wirklich in dir steckt.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="relative z-10 py-20 px-6" data-macaly="coaching-packages">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">
              Wähle deinen Weg
            </h2>
            <p className="text-lg text-white/80">
              Drei Intensitätsstufen. Ein Ziel: Du kommst bei dir an.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:scale-105 transition-transform duration-300 flex flex-col"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {pkg.name}
                  </h3>
                  <div className="text-3xl font-bold mb-2 text-white">
                    {pkg.price}
                  </div>
                  <div className="text-sm text-white/60 mb-4">
                    {pkg.duration}
                  </div>
                </div>
                
                <p className="text-sm text-white/80 mb-4">
                  {pkg.description}
                </p>
                
                <div className="space-y-3 mb-6 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-sm text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-xs text-white/60 mb-6 italic">
                  {pkg.target}
                </div>
                
                <button
                  onClick={() => handleBooking(pkg.name)}
                  className="w-full bg-white text-black py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 mt-auto"
                >
                  <Mail size={16} />
                  Jetzt buchen
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Not For You Section */}
      <section className="relative z-10 py-20 px-6" data-macaly="coaching-not-for-you">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-red-600/30 backdrop-blur-sm rounded-2xl p-8 border border-red-500"
          >
            <h2 className="text-2xl font-bold mb-6 text-red-400 flex items-center gap-3">
              <X size={32} className="text-red-500" />
              Für wen mein Coaching NICHTS ist
            </h2>
            
            <p className="text-red-200 mb-6 font-semibold">
              Mein Coaching ist NICHTS für dich, wenn:
            </p>
            
            <div className="space-y-4 mb-8">
              {notForYou.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X size={20} className="text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-red-100">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-red-800/50 rounded-lg p-4 border border-red-400">
              <p className="text-red-100 font-medium text-center">
                Wenn du jemanden suchst, der dir sagt, was du hören willst – dann bin ich nicht der Richtige.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-20 px-6 text-center" data-macaly="coaching-final-cta">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <p className="text-lg text-white/80 mb-8">
              Wenn du jemanden suchst, der dir zeigt, wer du wirklich bist – dann bist du hier genau richtig.
            </p>
            
            <button
              onClick={handleConsultation}
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300"
            >
              Erstes Gespräch vereinbaren
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}