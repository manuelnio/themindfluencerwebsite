'use client'

import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import ParticleBackground from '@/components/ParticleBackground'

interface FAQItem {
  id: string
  question: string
  answer: string
  category: 'general' | 'process' | 'concerns'
}

// Sorted by category: general, process, concerns
const faqItems: FAQItem[] = [
  // ALLGEMEIN
  {
    id: 'q1',
    question: 'Was ist, wenn ich nicht weiß, was mit mir los ist?',
    answer: 'Perfekt. Dann bist du hier genau richtig. Du musst keine Diagnose haben, kein klares Ziel, keine fancy Sprache. Nur den Mut, ehrlich zu sagen: „So geht\'s nicht weiter."',
    category: 'general'
  },
  {
    id: 'q4',
    question: 'Bin ich überhaupt \'kaputt genug\', um Coaching zu brauchen?',
    answer: 'Wenn du dich das fragst, dann JA. Coaching ist nicht nur für Leute mit Burnout. Es ist für alle, die merken: „Ich funktioniere – aber ich lebe nicht."',
    category: 'general'
  },
  {
    id: 'q8',
    question: 'Wie unterscheidet sich das hier von Therapie?',
    answer: 'Ich bin kein Therapeut. Ich diagnostiziere nichts, ich verschreibe nichts. Ich bin der, der dich in den Spiegel zwingt – und dich nicht gehen lässt, bis du dich selbst erkennst. Therapie heilt. Coaching richtet auf. Beides kann wichtig sein – und manchmal gehören sie zusammen.',
    category: 'general'
  },
  
  // PROZESS
  {
    id: 'q2',
    question: 'Ich hatte noch nie ein Coaching. Was passiert da überhaupt?',
    answer: 'Wir reden. Tief. Roh. Echt. Ich stell dir Fragen, auf die du keine Ausreden mehr hast. Wir graben – und bauen. Kein Bullshit, keine PowerPoint, keine Schönrederei. Nur du. Und was in dir los ist.',
    category: 'process'
  },
  {
    id: 'q6',
    question: 'Wie schnell verändert sich was?',
    answer: 'Kommt drauf an, wie ehrlich du bereit bist zu werden. Manche brauchen eine Session, um ihre Welt zu kippen. Andere brauchen drei Monate, um sich selbst wieder zu finden. Ich verspreche dir nur eins: Wenn du alles gibst, geb ich alles zurück.',
    category: 'process'
  },
  {
    id: 'q9',
    question: 'Was passiert zwischen den Sessions?',
    answer: 'Du bekommst Aufgaben. Fragen. Gedanken. Und wenn du willst: Chat-Support, Audio-Impulse, Reality-Checks. Veränderung passiert nicht im Gespräch – sie passiert dazwischen.',
    category: 'process'
  },
  
  // BEDENKEN
  {
    id: 'q3',
    question: 'Was ist, wenn ich während der Session emotional werde?',
    answer: 'Dann bist du auf dem richtigen Weg. Hier musst du dich nicht zusammenreißen. Hier darfst du ehrlich sein – auch wenn\'s hässlich wird.',
    category: 'concerns'
  },
  {
    id: 'q5',
    question: 'Ich hab Angst, dass du mir Dinge sagst, die ich nicht hören will.',
    answer: 'Gute Nachricht: Genau das ist mein Job. Ich sag dir nicht, was du hören willst. Ich sag dir, was dich weiterbringt.',
    category: 'concerns'
  },
  {
    id: 'q7',
    question: 'Was ist, wenn ich abspringe, nichts durchziehe, mich wieder selbst sabotiere?',
    answer: 'Dann reden wir genau darüber. Coaching ist nicht linear. Es ist kein Sprint. Es ist ein Kampf mit deinen eigenen Schatten – und genau darin begleite ich dich.',
    category: 'concerns'
  },
  {
    id: 'q10',
    question: 'Kann ich dir wirklich vertrauen?',
    answer: 'Ich hab nichts davon, dir was vorzumachen. Ich will nicht dein Held sein – ich will dein Spiegel sein. Und wenn du dich in diesem Text wiedererkennst, dann hast du deine Antwort schon längst.',
    category: 'concerns'
  }
]

const categoryNames = {
  general: 'Allgemein',
  process: 'Prozess', 
  concerns: 'Bedenken'
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([])
  
  console.log("FAQ page loaded", { openItems })

  const toggleItem = (id: string) => {
    console.log("Toggling FAQ item:", id)
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  // Group items by category
  const groupedItems = {
    general: faqItems.filter(item => item.category === 'general'),
    process: faqItems.filter(item => item.category === 'process'),
    concerns: faqItems.filter(item => item.category === 'concerns')
  }

  return (
    <main className="relative min-h-screen bg-black text-white" data-macaly="faq-page">
      <ParticleBackground />

      {/* Hero Section - Cleaner */}
      <section className="relative z-10 pt-32 pb-20 px-6" data-macaly="faq-hero">
        <div className="container mx-auto max-w-4xl text-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white" data-macaly="faq-title">
              FAQ
            </h1>
            <p className="text-xl text-white/70 mb-12">
              Was du dich vielleicht nicht zu fragen traust (aber solltest)
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Items by Category */}
      <section className="relative z-10 py-20 px-6" data-macaly="faq-items">
        <div className="container mx-auto max-w-6xl">
          {/* Render each category */}
          {(Object.keys(groupedItems) as Array<keyof typeof groupedItems>).map((category) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-1 h-8 bg-white/20 rounded"></div>
                {categoryNames[category]}
              </h2>
              
              <div className="space-y-4">
                {groupedItems[category].map((item) => (
                  <div
                    key={item.id}
                    className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
                    data-macaly={`faq-item-${item.id}`}
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-white pr-4">
                        {item.question}
                      </h3>
                      
                      <div className="flex-shrink-0">
                        {openItems.includes(item.id) ? (
                          <ChevronUp size={24} className="text-white/60" />
                        ) : (
                          <ChevronDown size={24} className="text-white/60" />
                        )}
                      </div>
                    </button>
                    
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: openItems.includes(item.id) ? 'auto' : 0,
                        opacity: openItems.includes(item.id) ? 1 : 0
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="h-px w-full bg-white/10 mb-4" />
                        <p className="text-white/80 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions - Without Coaching Button */}
      <section className="relative z-10 py-20 px-6 text-center" data-macaly="faq-contact">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Noch Fragen?
            </h2>
            <p className="text-white/80 mb-6">
              Wenn deine Frage hier nicht beantwortet wurde, oder du bereit bist, den nächsten Schritt zu gehen.
            </p>
            
            <a 
              href="mailto:themindfluencer@icloud.com?subject=Frage zu deinem Coaching"
              className="inline-block px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300"
            >
              Direkt schreiben
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}