'use client'

import { useEffect, useState } from 'react'

export default function ParticleBackground() {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number }>>([])

  useEffect(() => {
    console.log("Initializing particle background")
    const particleCount = 30
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 20
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="particles fixed inset-0 pointer-events-none z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
          }}
          data-macaly="particle-effect"
        />
      ))}
    </div>
  )
}