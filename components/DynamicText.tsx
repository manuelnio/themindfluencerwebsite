'use client'

import React, { useEffect, useRef, useState } from 'react'

interface DynamicTextProps {
  children: React.ReactNode
  backgroundImage: string
  className?: string
  lightColor?: string
  darkColor?: string
  'data-macaly'?: string
}

export default function DynamicText({ 
  children, 
  backgroundImage, 
  className = '', 
  lightColor = 'text-cyan-300',
  darkColor = 'text-white',
  'data-macaly': dataMacaly
}: DynamicTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [textParts, setTextParts] = useState<Array<{ text: string, isLight: boolean }>>([])

  useEffect(() => {
    const analyzeBackground = async () => {
      try {
        // Lade das Bild
        const img = new Image()
        img.crossOrigin = 'anonymous'
        img.onload = () => {
          // Erstelle Canvas um Pixel-Daten zu analysieren
          const canvas = document.createElement('canvas')
          const ctx = canvas.getContext('2d')
          if (!ctx) return

          canvas.width = img.width
          canvas.height = img.height
          ctx.drawImage(img, 0, 0)

          // Analysiere Helligkeit verschiedener Bereiche
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
          const data = imageData.data

          // Teile Text in Segmente basierend auf Hintergrund-Helligkeit
          const text = typeof children === 'string' ? children : ''
          const segments: Array<{ text: string, isLight: boolean }> = []
          
          // Vereinfachte Segmentierung - analysiere verschiedene horizontale Bereiche
          const numSegments = Math.min(text.length, 20)
          const segmentLength = Math.ceil(text.length / numSegments)
          
          for (let i = 0; i < numSegments; i++) {
            const startIndex = i * segmentLength
            const endIndex = Math.min((i + 1) * segmentLength, text.length)
            const segmentText = text.slice(startIndex, endIndex)
            
            // Analysiere entsprechenden Bildbereich
            const x = Math.floor((i / numSegments) * canvas.width)
            const y = Math.floor(canvas.height * 0.4) // Mittlerer Bereich
            const pixelIndex = (y * canvas.width + x) * 4
            
            const r = data[pixelIndex]
            const g = data[pixelIndex + 1]
            const b = data[pixelIndex + 2]
            
            // Berechne Helligkeit (Luminanz)
            const brightness = (r * 0.299 + g * 0.587 + b * 0.114)
            const isLight = brightness > 140 // Schwellenwert für "hell"
            
            segments.push({ text: segmentText, isLight })
          }
          
          setTextParts(segments)
        }
        
        img.src = backgroundImage
      } catch (error) {
        console.log('Error analyzing background:', error)
        // Fallback: verwende nur dunkle Farbe
        const text = typeof children === 'string' ? children : ''
        setTextParts([{ text, isLight: false }])
      }
    }

    analyzeBackground()
  }, [children, backgroundImage])

  // Fallback während der Analyse
  if (textParts.length === 0) {
    return (
      <div ref={containerRef} className={`${className} ${darkColor}`} data-macaly={dataMacaly}>
        {children}
      </div>
    )
  }

  return (
    <div ref={containerRef} className={className} data-macaly={dataMacaly}>
      {textParts.map((part, index) => (
        <span 
          key={index}
          className={`${part.isLight ? lightColor : darkColor} drop-shadow-2xl transition-colors duration-300`}
          style={{
            textShadow: part.isLight 
              ? '2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(0,200,255,0.5)' 
              : '2px 2px 4px rgba(0,0,0,0.8)'
          }}
        >
          {part.text}
        </span>
      ))}
    </div>
  )
}