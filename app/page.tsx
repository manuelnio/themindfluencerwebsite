'use client'

import Link from 'next/link'
import Brain3D from '@/components/Brain3D'
import ParticleBackground from '@/components/ParticleBackground'

export default function Home() {
  console.log("Home page rendering")

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      <ParticleBackground />
      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6" data-macaly="hero-section">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Headline - 50% smaller */}
          <h1 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent font-['Times_New_Roman']" data-macaly="hero-title">
            Verändere dein Denken.<br />
            Verändere dein Leben.
          </h1>
          
          {/* Interactive 3D Brain */}
          <div className="mb-12" data-macaly="brain-section" key={`brain-${Date.now()}`}>
            <Brain3D />
          </div>
          
          {/* CTA Section */}
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white font-['Times_New_Roman']" data-macaly="cta-title">
            Bereit für echte Veränderung?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/coaching"
              className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              data-macaly="coaching-cta-button"
            >
              1:1 Coaching starten
            </a>
            <a
              href="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-colors duration-300"
              data-macaly="about-cta-button"
            >
              Meine Geschichte
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}