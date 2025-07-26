'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface BrainRegion {
  id: string
  name: string
  position: { x: number; y: number }
  color: string
  path: string
  quote: string
  description: string
}

const brainRegions: BrainRegion[] = [
  {
    id: 'angst',
    name: 'ANGST',
    position: { x: 45, y: 65 },
    color: '#8B5CF6', // Violet
    path: '/angst',
    quote: 'Everything you want is on the other side of fear.',
    description: 'Amygdala - Zentrum der Angstverarbeitung'
  },
  {
    id: 'selbstwahrnehmung',
    name: 'SELBSTWAHRNEHMUNG',
    position: { x: 50, y: 25 },
    color: '#00D4FF', // Electric Blue
    path: '/selbstwahrnehmung',
    quote: 'I am what I think you think I am.',
    description: 'Präfrontaler Cortex - Selbstreflexion & Bewusstsein'
  },
  {
    id: 'gewohnheiten',
    name: 'GEWOHNHEITEN',
    position: { x: 55, y: 50 },
    color: '#F97316', // Orange
    path: '/gewohnheiten',
    quote: 'Habit is what keeps you going.',
    description: 'Basalganglien - Automatisierte Prozesse'
  },
  {
    id: 'gesellschaft',
    name: 'GESELLSCHAFT',
    position: { x: 25, y: 45 },
    color: '#EF4444', // Red
    path: '/gesellschaft',
    quote: 'Not a sign of mental health being well adapted.',
    description: 'Temporallappen - Sozialverhalten & Normen'
  },
  {
    id: 'mindset',
    name: 'MINDSET',
    position: { x: 60, y: 35 },
    color: '#40E0D0', // Turquoise
    path: '/mindset',
    quote: 'Once your mindset changes, everything changes.',
    description: 'Anteriorer Cingulärer Cortex - Perspektivwechsel'
  },
  {
    id: 'skillset',
    name: 'SKILLSET',
    position: { x: 70, y: 60 },
    color: '#10B981', // Emerald
    path: '/skillset',
    quote: 'Skill is experience, intellect and passion unified.',
    description: 'Parietallappen - Handlung & Koordination'
  },
  {
    id: 'erfolg',
    name: 'ERFOLG',
    position: { x: 50, y: 75 },
    color: '#F59E0B', // Gold
    path: '/erfolg',
    quote: 'Focus on goals, not obstacles.',
    description: 'Nucleus Accumbens - Belohnungssystem'
  }
]

export default function InteractiveBrain() {
  const [hoveredRegion, setHoveredRegion] = useState<BrainRegion | null>(null)
  const [selectedRegion, setSelectedRegion] = useState<BrainRegion | null>(null)

  console.log("Interactive brain component loaded", { hoveredRegion, selectedRegion })

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden" data-macaly="interactive-brain-container">
      {/* Brain SVG Container */}
      <div className="relative w-96 h-96 md:w-[500px] md:h-[500px]">
        {/* Brain Background */}
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://assets.macaly-user-data.dev/z1egykotl11h6cu32jilz0n7/new-chat/7FHTX1n5UbkU0dKf7_mhG/img-0468.jpg"
            alt="Neural Network Background"
            className="w-full h-full object-cover rounded-full filter blur-sm"
            data-macaly="brain-background-image"
          />
        </div>
        
        {/* Brain Regions */}
        {brainRegions.map((region) => (
          <motion.div
            key={region.id}
            className="absolute w-16 h-16 rounded-full border-2 cursor-pointer brain-region flex items-center justify-center"
            style={{
              left: `${region.position.x}%`,
              top: `${region.position.y}%`,
              transform: 'translate(-50%, -50%)',
              borderColor: region.color,
              backgroundColor: `${region.color}15`,
              boxShadow: hoveredRegion?.id === region.id ? `0 0 30px ${region.color}80` : `0 0 10px ${region.color}40`
            }}
            whileHover={{ 
              scale: 1.2,
              boxShadow: `0 0 40px ${region.color}`,
            }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => {
              console.log("Hovering brain region:", region.name)
              setHoveredRegion(region)
            }}
            onHoverEnd={() => setHoveredRegion(null)}
            onClick={() => {
              console.log("Clicked brain region:", region.name)
              setSelectedRegion(region)
            }}
            data-macaly={`brain-region-${region.id}`}
          >
            <div 
              className="w-8 h-8 rounded-full animate-pulse"
              style={{ backgroundColor: region.color }}
            />
          </motion.div>
        ))}
        
        {/* Central Neural Core */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div 
            className="w-20 h-20 rounded-full neural-pulse border-2"
            style={{ borderColor: '#00D4FF', backgroundColor: '#00D4FF15' }}
            data-macaly="neural-core"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-400 to-purple-600 opacity-50 animate-spin" 
                 style={{ animationDuration: '8s' }} />
          </div>
        </div>
      </div>

      {/* Region Info Display */}
      {hoveredRegion && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="absolute bottom-32 bg-black/80 backdrop-blur-sm border border-gray-700 rounded-lg p-6 max-w-md mx-4"
          data-macaly="region-info-display"
        >
          <h3 
            className="text-xl font-bold mb-2 font-['Orbitron']"
            style={{ color: hoveredRegion.color }}
          >
            {hoveredRegion.name}
          </h3>
          <p className="text-gray-300 text-sm mb-3">{hoveredRegion.description}</p>
          <blockquote className="text-gray-100 italic border-l-2 pl-4" style={{ borderColor: hoveredRegion.color }}>
            "{hoveredRegion.quote}"
          </blockquote>
        </motion.div>
      )}

      {/* Region Selection Modal */}
      {selectedRegion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedRegion(null)}
          data-macaly="region-selection-modal"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-900 border border-gray-700 rounded-xl p-8 max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <h2 
                className="text-3xl font-bold mb-4 font-['Orbitron'] glitch-text"
                style={{ color: selectedRegion.color }}
                data-text={selectedRegion.name}
              >
                {selectedRegion.name}
              </h2>
              
              <p className="text-gray-300 mb-6">{selectedRegion.description}</p>
              
              <blockquote 
                className="text-xl italic mb-8 border-l-4 pl-4"
                style={{ borderColor: selectedRegion.color }}
              >
                "{selectedRegion.quote}"
              </blockquote>
              
              <div className="flex gap-4 justify-center">
                <Link href={selectedRegion.path}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300"
                    style={{ 
                      backgroundColor: selectedRegion.color,
                      boxShadow: `0 0 20px ${selectedRegion.color}40`
                    }}
                  >
                    Bereich erkunden
                  </motion.button>
                </Link>
                
                <button
                  onClick={() => setSelectedRegion(null)}
                  className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Schließen
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}