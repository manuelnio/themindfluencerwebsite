'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

interface Neuron {
  id: string
  x: number
  y: number
  region: string
  active: boolean
  connections: string[]
}

interface BrainRegion {
  name: string
  displayName: string
  route: string
  color: string
  neurons: string[]
  tooltip: string
}

const brainRegions: BrainRegion[] = [
  {
    name: 'Amygdala',
    displayName: 'ANGST',
    route: '/angst',
    color: '#FF0066',
    neurons: ['n12', 'n13', 'n14'],
    tooltip: 'Angstverarbeitung & Emotionen'
  },
  {
    name: 'Präfrontaler Cortex',
    displayName: 'MINDSET',
    route: '/mindset',
    color: '#0088FF',
    neurons: ['n1', 'n2', 'n3', 'n4'],
    tooltip: 'Denkmuster & Überzeugungen'
  },
  {
    name: 'Motorischer Cortex',
    displayName: 'SKILLSET',
    route: '/skillset',
    color: '#00FFAA',
    neurons: ['n5', 'n6', 'n7'],
    tooltip: 'Fähigkeiten & Fertigkeiten'
  },
  {
    name: 'Basalganglien',
    displayName: 'GEWOHNHEITEN',
    route: '/gewohnheiten',
    color: '#44FF00',
    neurons: ['n15', 'n16', 'n17'],
    tooltip: 'Automatische Prozesse'
  },
  {
    name: 'Temporallappen',
    displayName: 'GESELLSCHAFT',
    route: '/gesellschaft',
    color: '#AA00FF',
    neurons: ['n8', 'n9', 'n10', 'n11'],
    tooltip: 'Soziale Interaktionen'
  },
  {
    name: 'Parietallappen',
    displayName: 'SELBSTWAHRNEHMUNG',
    route: '/selbstwahrnehmung',
    color: '#FFD700',
    neurons: ['n18', 'n19', 'n20'],
    tooltip: 'Selbstreflektion & Bewusstsein'
  },
  {
    name: 'Belohnungssystem',
    displayName: 'ERFOLG',
    route: '/erfolg',
    color: '#FF6600',
    neurons: ['n21', 'n22', 'n23'],
    tooltip: 'Motivation & Zielerreichung'
  }
]

// Anatomisch korrekte Neuronen-Positionierung
const neurons: Neuron[] = [
  // Frontaler Cortex (Mindset) - vorne links
  { id: 'n1', x: 120, y: 80, region: 'Präfrontaler Cortex', active: false, connections: ['n2', 'n5', 'n15'] },
  { id: 'n2', x: 140, y: 60, region: 'Präfrontaler Cortex', active: false, connections: ['n3', 'n6', 'n18'] },
  { id: 'n3', x: 160, y: 70, region: 'Präfrontaler Cortex', active: false, connections: ['n4', 'n7', 'n21'] },
  { id: 'n4', x: 180, y: 50, region: 'Präfrontaler Cortex', active: false, connections: ['n1', 'n8', 'n22'] },
  
  // Motorischer Cortex (Skillset) - oben mitte
  { id: 'n5', x: 220, y: 40, region: 'Motorischer Cortex', active: false, connections: ['n6', 'n1', 'n18'] },
  { id: 'n6', x: 250, y: 35, region: 'Motorischer Cortex', active: false, connections: ['n7', 'n2', 'n19'] },
  { id: 'n7', x: 280, y: 40, region: 'Motorischer Cortex', active: false, connections: ['n5', 'n3', 'n20'] },
  
  // Temporallappen (Gesellschaft) - seitlich mitte
  { id: 'n8', x: 90, y: 120, region: 'Temporallappen', active: false, connections: ['n9', 'n12', 'n4'] },
  { id: 'n9', x: 110, y: 140, region: 'Temporallappen', active: false, connections: ['n10', 'n13', 'n15'] },
  { id: 'n10', x: 130, y: 160, region: 'Temporallappen', active: false, connections: ['n11', 'n14', 'n16'] },
  { id: 'n11', x: 150, y: 150, region: 'Temporallappen', active: false, connections: ['n8', 'n12', 'n17'] },
  
  // Amygdala (Angst) - tief innen
  { id: 'n12', x: 140, y: 120, region: 'Amygdala', active: false, connections: ['n13', 'n8', 'n15'] },
  { id: 'n13', x: 160, y: 130, region: 'Amygdala', active: false, connections: ['n14', 'n9', 'n16'] },
  { id: 'n14', x: 180, y: 125, region: 'Amygdala', active: false, connections: ['n12', 'n10', 'n17'] },
  
  // Basalganglien (Gewohnheiten) - zentral
  { id: 'n15', x: 200, y: 100, region: 'Basalganglien', active: false, connections: ['n16', 'n1', 'n12'] },
  { id: 'n16', x: 220, y: 110, region: 'Basalganglien', active: false, connections: ['n17', 'n2', 'n13'] },
  { id: 'n17', x: 240, y: 100, region: 'Basalganglien', active: false, connections: ['n15', 'n3', 'n14'] },
  
  // Parietallappen (Selbstwahrnehmung) - hinten oben
  { id: 'n18', x: 320, y: 60, region: 'Parietallappen', active: false, connections: ['n19', 'n5', 'n21'] },
  { id: 'n19', x: 350, y: 70, region: 'Parietallappen', active: false, connections: ['n20', 'n6', 'n22'] },
  { id: 'n20', x: 380, y: 80, region: 'Parietallappen', active: false, connections: ['n18', 'n7', 'n23'] },
  
  // Belohnungssystem (Erfolg) - mittleres Gehirn
  { id: 'n21', x: 260, y: 80, region: 'Belohnungssystem', active: false, connections: ['n22', 'n18', 'n3'] },
  { id: 'n22', x: 280, y: 90, region: 'Belohnungssystem', active: false, connections: ['n23', 'n19', 'n4'] },
  { id: 'n23', x: 300, y: 85, region: 'Belohnungssystem', active: false, connections: ['n21', 'n20', 'n11'] },
]

export default function Brain3D() {
  const [hoveredRegion, setHoveredRegion] = useState<BrainRegion | null>(null)
  const [activeNeurons, setActiveNeurons] = useState<string[]>([])
  const [signals, setSignals] = useState<Array<{ id: string, from: string, to: string, progress: number, color: string }>>([])
  const router = useRouter()
  const svgRef = useRef<SVGSVGElement>(null)

  // Kontinuierliche neuronale Aktivität
  useEffect(() => {
    const interval = setInterval(() => {
      const randomNeurons = neurons
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.floor(Math.random() * 8) + 4)
        .map(n => n.id)
      
      setActiveNeurons(randomNeurons)
      
      const newSignals: Array<{ id: string, from: string, to: string, progress: number, color: string }> = []
      randomNeurons.forEach(neuronId => {
        const neuron = neurons.find(n => n.id === neuronId)
        if (neuron && neuron.connections.length > 0) {
          const targetId = neuron.connections[Math.floor(Math.random() * neuron.connections.length)]
          if (randomNeurons.includes(targetId)) {
            newSignals.push({
              id: `signal-${Date.now()}-${Math.random()}`,
              from: neuronId,
              to: targetId,
              progress: 0,
              color: '#00DDFF'
            })
          }
        }
      })
      
      setSignals(newSignals)
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  // Signal-Animation
  useEffect(() => {
    if (signals.length === 0) return

    const animationInterval = setInterval(() => {
      setSignals(prevSignals => 
        prevSignals
          .map(signal => ({ ...signal, progress: signal.progress + 0.04 }))
          .filter(signal => signal.progress <= 1)
      )
    }, 40)

    return () => clearInterval(animationInterval)
  }, [signals])

  const handleRegionClick = (region: BrainRegion) => {
    console.log(`Brain3D: Navigating to ${region.displayName} - ${region.route}`)
    
    setActiveNeurons(region.neurons)
    
    const flash = document.createElement('div')
    flash.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: radial-gradient(circle at center, ${region.color}40, transparent 60%);
      pointer-events: none;
      z-index: 9999;
      opacity: 0;
      transition: opacity 0.5s ease-out;
    `
    
    document.body.appendChild(flash)
    
    requestAnimationFrame(() => {
      flash.style.opacity = '1'
    })
    
    setTimeout(() => {
      flash.style.opacity = '0'
      setTimeout(() => document.body.removeChild(flash), 500)
    }, 600)
    
    setTimeout(() => router.push(region.route), 800)
  }

  const getSignalPosition = (signal: { from: string, to: string, progress: number }) => {
    const fromNeuron = neurons.find(n => n.id === signal.from)
    const toNeuron = neurons.find(n => n.id === signal.to)
    
    if (!fromNeuron || !toNeuron) return { x: 0, y: 0 }
    
    return {
      x: fromNeuron.x + (toNeuron.x - fromNeuron.x) * signal.progress,
      y: fromNeuron.y + (toNeuron.y - fromNeuron.y) * signal.progress
    }
  }

  return (
    <div className="relative w-full h-96 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-xl shadow-2xl" data-macaly="brain-3d-container">
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 500 250"
        className="absolute inset-0"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="strongGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* ANATOMISCH KORREKTES GEHIRN - Seitenansicht */}
        {/* Hauptgehirn - Großhirn */}
        <path
          d="M 80 100 
             C 70 70, 90 40, 130 35
             C 170 25, 220 30, 270 35
             C 320 30, 370 40, 400 60
             C 420 80, 415 100, 405 120
             C 400 140, 390 155, 370 165
             C 350 175, 320 170, 300 165
             
             C 290 170, 280 175, 270 178
             C 250 180, 230 178, 210 175
             C 190 172, 170 168, 150 160
             C 130 152, 110 140, 95 125
             C 85 115, 80 100"
          fill="none"
          stroke="#00CCFF"
          strokeWidth="2"
          opacity="0.8"
          filter="url(#glow)"
        />

        {/* Stirnlappen - Frontal Lobe */}
        <path
          d="M 80 100 
             C 85 90, 95 85, 110 80
             C 130 75, 150 70, 170 68
             C 185 65, 200 65, 210 70
             C 205 85, 195 95, 180 105
             C 160 115, 140 120, 120 115
             C 105 110, 90 105, 80 100"
          fill="none"
          stroke="#00AAFF"
          strokeWidth="1.5"
          opacity="0.6"
          filter="url(#glow)"
        />

        {/* Scheitellappen - Parietal Lobe */}
        <path
          d="M 280 35
             C 300 32, 320 35, 340 40
             C 360 45, 380 55, 395 70
             C 405 85, 400 100, 390 115
             C 380 105, 365 98, 350 95
             C 330 90, 310 88, 290 90
             C 285 70, 282 50, 280 35"
          fill="none"
          stroke="#00AAFF"
          strokeWidth="1.5"
          opacity="0.6"
          filter="url(#glow)"
        />

        {/* Schläfenlappen - Temporal Lobe */}
        <path
          d="M 90 125
             C 100 135, 115 145, 135 152
             C 155 158, 175 160, 190 158
             C 205 155, 215 148, 220 140
             C 210 150, 195 158, 175 163
             C 155 167, 135 165, 115 160
             C 100 155, 90 140, 90 125"
          fill="none"
          stroke="#00AAFF"
          strokeWidth="1.5"
          opacity="0.6"
          filter="url(#glow)"
        />

        {/* Kleinhirn - Cerebellum */}
        <ellipse
          cx="320"
          cy="160"
          rx="45"
          ry="25"
          fill="none"
          stroke="#0088CC"
          strokeWidth="2"
          opacity="0.7"
          filter="url(#glow)"
        />
        
        {/* Kleinhirn Falten */}
        <path
          d="M 280 150 Q 300 145, 320 150 Q 340 155, 360 150
             M 285 160 Q 305 155, 325 160 Q 345 165, 365 160
             M 290 170 Q 310 165, 330 170 Q 350 175, 370 170"
          fill="none"
          stroke="#0088CC"
          strokeWidth="1"
          opacity="0.5"
        />

        {/* Hirnstamm */}
        <rect
          x="295"
          y="175"
          width="20"
          height="35"
          fill="none"
          stroke="#0088CC"
          strokeWidth="2"
          opacity="0.7"
          filter="url(#glow)"
          rx="10"
        />

        {/* Neuronale Verbindungen */}
        {neurons.map(neuron => 
          neuron.connections.map(connId => {
            const targetNeuron = neurons.find(n => n.id === connId)
            if (!targetNeuron) return null
            
            const isActive = activeNeurons.includes(neuron.id) && activeNeurons.includes(connId)
            
            return (
              <line
                key={`${neuron.id}-${connId}`}
                x1={neuron.x}
                y1={neuron.y}
                x2={targetNeuron.x}
                y2={targetNeuron.y}
                stroke={isActive ? '#00FFFF' : '#0099DD'}
                strokeWidth={isActive ? '2' : '1'}
                opacity={isActive ? '0.9' : '0.4'}
                filter={isActive ? 'url(#strongGlow)' : 'url(#glow)'}
              />
            )
          })
        )}

        {/* Signal-Partikel */}
        {signals.map(signal => {
          const pos = getSignalPosition(signal)
          return (
            <circle
              key={signal.id}
              cx={pos.x}
              cy={pos.y}
              r="2.5"
              fill={signal.color}
              opacity="1"
              filter="url(#strongGlow)"
            >
              <animate
                attributeName="r"
                values="2;4;2"
                dur="0.8s"
                repeatCount="indefinite"
              />
            </circle>
          )
        })}

        {/* Neuronen */}
        {neurons.map(neuron => {
          const region = brainRegions.find(r => r.name === neuron.region)
          const isActive = activeNeurons.includes(neuron.id)
          const isHovered = hoveredRegion?.neurons.includes(neuron.id)
          
          return (
            <g key={neuron.id}>
              <circle
                cx={neuron.x}
                cy={neuron.y}
                r={isActive || isHovered ? '5' : '3'}
                fill={isHovered ? hoveredRegion?.color : (isActive ? '#00FFFF' : '#FFFFFF')}
                opacity={isActive || isHovered ? '1' : '0.8'}
                filter="url(#strongGlow)"
                className="cursor-pointer transition-all duration-300"
                onClick={() => region && handleRegionClick(region)}
                onMouseEnter={() => region && setHoveredRegion(region)}
                onMouseLeave={() => setHoveredRegion(null)}
              />
              {(isActive || isHovered) && (
                <circle
                  cx={neuron.x}
                  cy={neuron.y}
                  r="8"
                  fill="none"
                  stroke={isHovered ? hoveredRegion?.color : '#00FFFF'}
                  strokeWidth="1"
                  opacity="0.6"
                  className="animate-ping"
                />
              )}
            </g>
          )
        })}

        {/* Region Labels nur bei Hover */}
        {brainRegions.map(region => {
          if (hoveredRegion?.name !== region.name) return null
          
          const regionNeurons = neurons.filter(n => region.neurons.includes(n.id))
          if (regionNeurons.length === 0) return null
          
          const centerX = regionNeurons.reduce((sum, n) => sum + n.x, 0) / regionNeurons.length
          const centerY = regionNeurons.reduce((sum, n) => sum + n.y, 0) / regionNeurons.length
          
          return (
            <g key={`label-${region.name}`}>
              <circle
                cx={centerX}
                cy={centerY}
                r="15"
                fill={region.color}
                opacity="0.2"
                className="animate-pulse"
              />
              <text
                x={centerX}
                y={centerY - 20}
                textAnchor="middle"
                fill={region.color}
                fontSize="11"
                fontWeight="bold"
                className="font-['Orbitron'] select-none"
                filter="url(#glow)"
              >
                {region.displayName}
              </text>
            </g>
          )
        })}
      </svg>

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 text-white/90 text-sm bg-black/80 px-5 py-3 rounded-xl backdrop-blur-sm border border-cyan-400/50 font-['Rajdhani'] shadow-lg">
        <div className="flex items-center gap-3">
          <span className="text-cyan-400 text-xl animate-pulse">🧠</span>
          <span className="font-medium">Hover über Gehirn-Regionen • Klicken zum Erkunden</span>
        </div>
      </div>
      
      {/* Hover Tooltip */}
      {hoveredRegion && (
        <div 
          className="absolute top-6 right-6 bg-black/95 backdrop-blur-sm border-2 rounded-2xl p-6 font-['Orbitron'] max-w-sm z-30 shadow-2xl animate-slideIn" 
          style={{ 
            borderColor: hoveredRegion.color,
            boxShadow: `0 0 40px ${hoveredRegion.color}60, inset 0 0 20px ${hoveredRegion.color}20`
          }}
        >
          <div className="text-2xl font-bold mb-3" style={{ color: hoveredRegion.color }}>
            {hoveredRegion.displayName}
          </div>
          <div className="text-white/90 text-base mb-2 font-['Rajdhani'] font-semibold">
            {hoveredRegion.name}
          </div>
          <div className="text-white/70 text-sm font-['Rajdhani'] leading-relaxed">
            {hoveredRegion.tooltip}
          </div>
          <div className="mt-4 text-xs text-cyan-300 font-['Rajdhani'] font-bold uppercase tracking-wider">
            → Klicken zum Erkunden
          </div>
          
          <div 
            className="absolute inset-0 rounded-2xl animate-pulse opacity-50"
            style={{
              background: `linear-gradient(45deg, transparent 30%, ${hoveredRegion.color}20 50%, transparent 70%)`,
              animation: 'borderGlow 2s ease-in-out infinite'
            }}
          />
        </div>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(15px) translateX(15px); }
          to { opacity: 1; transform: translateY(0) translateX(0); }
        }
        
        .animate-slideIn {
          animation: slideIn 0.4s ease-out;
        }
        
        @keyframes borderGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  )
}