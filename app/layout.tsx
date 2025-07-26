'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { ArrowLeft, ChevronDown } from 'lucide-react'
import ParticleBackground from '@/components/ParticleBackground'
import SocialLinks from '@/components/SocialLinks'

const inter = Inter({ subsets: ['latin'] })

const topics = [
  { name: 'Angst', href: '/angst' },
  { name: 'Selbstwahrnehmung', href: '/selbstwahrnehmung' },
  { name: 'Gewohnheiten', href: '/gewohnheiten' },
  { name: 'Gesellschaft', href: '/gesellschaft' },
  { name: 'Mindset', href: '/mindset' },
  { name: 'Skillset', href: '/skillset' },
  { name: 'Erfolg', href: '/erfolg' }
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showTopics, setShowTopics] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <html lang="de" className={inter.className}>
      <body className="bg-black text-white overflow-x-hidden">
        {/* Particle Background */}
        <ParticleBackground />
        
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo and Back Button - Left aligned */}
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://assets.macaly-user-data.dev/z1egykotl11h6cu32jilz0n7/frovfe30klatu2owg3cvjni8/2BH9I6gbg_Ca_4Ex1DaTl/design-ohne-titel.zip-1.png"
                    alt="Mindfluencer Logo"
                    className="w-10 h-10 rounded-full object-cover"
                    data-macaly="logo"
                  />
                  <div className="flex flex-col">
                    <div className="text-lg font-bold text-white" style={{ fontFamily: 'Times New Roman, serif' }}>MINDFLUENCER</div>
                    <div className="text-xs text-white/70 uppercase tracking-wide">HOPE | FREEDOM | ATTITUDE</div>
                  </div>
                </div>
                
                {/* Back to Main Page - Only on subpages */}
                {!isHomePage && (
                  <Link href="/" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                    <ArrowLeft size={16} />
                    <span>Zurück zur Main Page</span>
                  </Link>
                )}
              </div>

              {/* Desktop Navigation - Right aligned */}
              <div className="hidden md:flex items-center gap-6 text-sm">
                <Link href="/coaching" className="text-white hover:text-cyan-400 transition-colors">
                  Coaching
                </Link>
                
                <div className="relative">
                  <button
                    onClick={() => setShowTopics(!showTopics)}
                    className="flex items-center gap-1 text-white hover:text-cyan-400 transition-colors"
                  >
                    <span>Themen</span>
                    <ChevronDown size={16} className={`transition-transform ${showTopics ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {showTopics && (
                    <div className="absolute top-full mt-2 right-0 bg-black/90 backdrop-blur-sm rounded-lg border border-white/20 py-2 min-w-48">
                      {topics.map((topic) => (
                        <Link
                          key={topic.href}
                          href={topic.href}
                          className="block px-4 py-2 text-white/80 hover:text-cyan-400 hover:bg-white/10 transition-colors"
                          onClick={() => setShowTopics(false)}
                        >
                          {topic.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                
                <Link href="/about" className="text-white hover:text-cyan-400 transition-colors">
                  Über mich
                </Link>
                
                <Link href="/faq" className="text-white hover:text-cyan-400 transition-colors">
                  FAQ
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-white p-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-sm border-b border-white/10">
                <div className="px-4 py-4 space-y-3">
                  {!isHomePage && (
                    <Link 
                      href="/" 
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <ArrowLeft size={16} />
                      <span>← Zurück zur Main Page</span>
                    </Link>
                  )}
                  
                  <Link 
                    href="/coaching" 
                    className="block text-white hover:text-cyan-400 transition-colors font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Coaching
                  </Link>
                  
                  <div className="py-2">
                    <div className="text-white/60 text-sm mb-2">Themen:</div>
                    {topics.map((topic) => (
                      <Link
                        key={topic.href}
                        href={topic.href}
                        className="block text-white/80 hover:text-cyan-400 transition-colors py-1 pl-4"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {topic.name}
                      </Link>
                    ))}
                  </div>
                  
                  <Link 
                    href="/about" 
                    className="block text-white hover:text-cyan-400 transition-colors font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Über mich
                  </Link>
                  <Link 
                    href="/faq" 
                    className="block text-white hover:text-cyan-400 transition-colors font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Main Content */}
        <main className="relative">
          {children}
        </main>

        {/* Social Links */}
        <SocialLinks />
      </body>
    </html>
  )
}