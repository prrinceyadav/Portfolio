import { useEffect, useRef, useState } from 'react'

export default function CursorGlow() {
  const glowRef = useRef(null)
  const [trails, setTrails] = useState([])

  useEffect(() => {
    const colors = [
      'rgba(66, 133, 244, 0.2)',
      'rgba(139, 92, 246, 0.18)',
      'rgba(6, 182, 160, 0.15)',
      'rgba(236, 72, 153, 0.15)',
      'rgba(245, 158, 11, 0.12)',
    ]
    let trailIndex = 0
    let lastTrailTime = 0

    const handleMouseMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`
        glowRef.current.style.top = `${e.clientY}px`
      }

      const now = Date.now()
      if (now - lastTrailTime > 40) {
        lastTrailTime = now
        const trailId = now
        const color = colors[trailIndex % colors.length]
        trailIndex++

        setTrails((prev) => {
          const next = [...prev, { id: trailId, x: e.clientX, y: e.clientY, color }]
          return next.length > 12 ? next.slice(-12) : next
        })

        setTimeout(() => {
          setTrails((prev) => prev.filter((t) => t.id !== trailId))
        }, 600)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* Main Glow */}
      <div
        ref={glowRef}
        style={{
          position: 'fixed',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(66,133,244,0.06) 0%, rgba(139,92,246,0.04) 30%, rgba(236,72,153,0.02) 50%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'left 0.12s ease-out, top 0.12s ease-out',
        }}
      />

      {/* Trailing particles */}
      {trails.map((trail) => (
        <div
          key={trail.id}
          style={{
            position: 'fixed',
            left: trail.x,
            top: trail.y,
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: trail.color,
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 9997,
            animation: 'cursor-trail-fade 0.6s ease-out forwards',
            boxShadow: `0 0 12px ${trail.color}`,
          }}
        />
      ))}

      <style>{`
        @keyframes cursor-trail-fade {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(3);
          }
        }
      `}</style>
    </>
  )
}
