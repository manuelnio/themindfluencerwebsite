'use client'

import Link from 'next/link'
import { Mail } from 'lucide-react'
import ParticleBackground from '@/components/ParticleBackground'
import { useEffect } from 'react'

export default function AboutPage() {
  console.log("About page loaded")

  useEffect(() => {
    console.log("About page useEffect mounted")
    
    // Add global error handler for this page
    const handleError = (event: ErrorEvent) => {
      console.error("About page error caught:", event.error, event.message, event.filename, event.lineno)
    }

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error("About page unhandled promise rejection:", event.reason)
    }

    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)

    return () => {
      window.removeEventListener('error', handleError)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
    }
  }, [])

  return (
    <main className="relative min-h-screen bg-black text-white" data-macaly="about-page">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-16 px-6" data-macaly="about-hero">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 
            className="text-4xl md:text-6xl font-bold mb-8 text-white"
            data-macaly="about-title"
          >
            ÜBER MICH
          </h1>
          
          <div className="text-xl text-white/80 max-w-2xl mx-auto">
            Meine Geschichte ohne Filter
          </div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="relative z-10 py-12 px-6" data-macaly="about-story">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                Hey, Ich bin Manuel. Ich bin nur ein random Typ, geboren in einem kleinen Ort in Vorarlberg – ein klassischer Daydreamer, aber Nightthinker mit der Überzeugung, dass ich ein Teil dazu beitragen will die Welt zu verändern.
              </p>
              
              <p>
                Früher dachte ich, ich muss Architekt werden, um diese Welt mit zu gestalten. Also habe ich Mauern gebaut, wortwörtlich – meine Maurerlehre war mein Fundament. Weil ich dachte: Ein guter Architekt muss erst wissen, wie man mit den Händen arbeitet.
              </p>
              
              <p>
                Aber dann habe ich gemerkt: Die Welt braucht nicht noch mehr Gebäude. Noch mehr Oberflächlichkeit in dieser Welt aus Plastik. Sie braucht Menschen, die Seelen aufrichten, keine Fassaden.<br />
                Ich wollte nicht die Oberfläche gestalten – sondern das, was Menschen im Innersten zerreißt, wieder zusammensetzen.  
              </p>
              
              <p className="text-white font-medium">
                Und ich weiß ganz genau, wie sich das anfühlt.
              </p>
              
              <p>
                Ich weiß, wie es ist, wenn dir der Boden unter den Füßen weggezogen wird, wenn du mit dem Rücken zur Wand stehst. Ich hatte Panikattacken, so heftig, dass ich dachte, ich werde diese Nacht nicht überleben. Manchmal sogar, dass ich es mir gewünscht habe.
              </p>
              
              <p>
                Ich bin durch die fucking Hölle gegangen.<br />
                Gedanklich gejagt von Schatten, mit dem Rücken zur Wand und die Kälte einer geladenen Waffe an der Schläfe. Keine Metapher – sondern die Realität in meinem Kopf.
              </p>
              
              <p className="text-white font-medium">
                Und genau deshalb stehe ich heute hier.
              </p>
              
              <p>
                Ich hab die Ausbildung zum Mental Coach gemacht.<br />
                Aber mein Diplom wurde mir verweigert – weil ich zwei Tage „Lebens- und Sozialberatung" verpasst hab.
              </p>
              
              <p>
                Weißt du warum? Weil ich in genau diesen zwei Tagen am Boden lag – mitten in einem meiner dunkelsten Abstürze.<br />
                Und weißt du was? Es ist mir scheissegal.<br />
                I don't fucking care! Weil mich nicht das ausmacht, was auf einem Stück Papier steht. Ich bin nicht Theorie. Ich bin Praxis. Erfahrung. Kampf. Blut. Tränen. Rückschläge. Und Wiederaufstehen.
              </p>
              
              <p>
                Ich rede nicht aus Büchern. Ich rede aus Schmerz. Aus Überleben. Aus der Wahrheit.
              </p>
              
              <p className="text-white font-medium">
                Und aus einer Vision:
              </p>
              
              <p>
                Wir leben in einer Welt, aufgebaut um zu funktionieren, nicht um zu Leben. Eine Welt erfüllt von Gewalt, Betrug und Verrat.<br />
                Aber dass KEINER. Kein Mensch sich von diesem System brechen lassen soll.<br />
                Und dass jeder seinen eigenen Weg finden kann – wenn er den Mut hat, hinzusehen.
              </p>
              
              <p className="text-lg font-semibold text-white">
                Ich bin The Mindfluencer.<br />
                Nicht perfekt. Aber echt.<br />
                Und ich bin hier, um dir zu zeigen, was in dir steckt – wenn du aufhörst, dich selbst zu belügen und weg zu sehen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-20 px-6 text-center" data-macaly="about-cta">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Bereit, deine eigene Geschichte zu schreiben?
            </h2>
            
            <p className="text-white/80 mb-8 text-lg">
              Wenn du dich in meiner Geschichte erkennst, dann lass uns reden.
            </p>
            
            <Link href="/coaching">
              <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 mx-auto">
                <Mail size={16} />
                Lass uns sprechen
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}