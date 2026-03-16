import { useRef, useEffect, useCallback } from 'react'

export default function MagneticButton({ children, className = '', style = {}, onClick, ...props }) {
  const btnRef = useRef(null)

  const handleMouseMove = useCallback((e) => {
    const btn = btnRef.current
    if (!btn) return
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (btnRef.current) {
      btnRef.current.style.transform = 'translate(0, 0)'
    }
  }, [])

  useEffect(() => {
    const btn = btnRef.current
    if (!btn) return
    btn.addEventListener('mousemove', handleMouseMove)
    btn.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      btn.removeEventListener('mousemove', handleMouseMove)
      btn.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseLeave])

  return (
    <button
      ref={btnRef}
      className={className}
      style={{ transition: 'transform 0.2s ease-out', ...style }}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
