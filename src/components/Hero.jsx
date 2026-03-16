import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi'
import MagneticButton from './MagneticButton'

export default function Hero() {
  const cardRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height
      cardRef.current.style.transform = `perspective(1000px) rotateY(${x * 3}deg) rotateX(${-y * 3}deg)`
    }
    const handleMouseLeave = () => {
      if (cardRef.current) {
        cardRef.current.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)'
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Ambient Blobs */}
      <div
        className="ambient-glow glow-blue"
        style={{ width: 600, height: 600, top: '-10%', right: '-10%', opacity: 0.3 }}
      />
      <div
        className="ambient-glow glow-purple"
        style={{ width: 500, height: 500, bottom: '-10%', left: '-5%', opacity: 0.25 }}
      />
      <div className="grid-bg" />

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 24px' }}>
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="glass-card"
          style={{
            padding: 'clamp(32px, 6vw, 64px)',
            maxWidth: 750,
            margin: '0 auto',
            transition: 'transform 0.15s ease-out',
            position: 'relative',
            overflow: 'hidden',
          }}
        >


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Profile Photo */}
            <div
              style={{
                width: 120,
                height: 120,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple), var(--accent-pink))',
                padding: 3,
                marginBottom: 20,
                display: 'inline-block',
                boxShadow: '0 8px 32px var(--glow-blue), 0 0 60px var(--glow-purple)',
              }}
            >
              <img
                src="/profile.jpg"
                alt="Prince Yadav"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '3px solid var(--bg-secondary)',
                }}
              />
            </div>

            <span
              className="glow-badge"
              style={{ marginBottom: 24, display: 'inline-flex' }}
            >
              ✦ Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{
              fontSize: 'clamp(2.2rem, 6vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 16,
              background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--accent-blue) 50%, var(--accent-purple) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Prince Yadav
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
              color: 'var(--text-secondary)',
              marginBottom: 32,
              minHeight: '2em',
            }}
          >
            <TypeAnimation
              sequence={[
                'AI / ML Engineer',
                2000,
                'LLM & Computer Vision Developer',
                2000,
                'Healthcare & Finance AI',
                2000,
                'Full-Stack Developer',
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              style={{ color: 'var(--accent-blue)' }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              maxWidth: 520,
              margin: '0 auto 40px',
            }}
          >
            Building end-to-end AI systems in Healthcare, Finance, and Nutrition.
            Proficient in C++, Python, SQL, and Deep Learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <MagneticButton
              className="btn-primary"
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                View Projects <FiArrowRight />
              </span>
            </MagneticButton>
            <MagneticButton
              className="btn-secondary"
              onClick={() => window.open('https://github.com/Princeyadav774623', '_blank')}
            >
              <FiGithub /> GitHub
            </MagneticButton>
            <MagneticButton
              className="btn-secondary"
              onClick={() => window.open('https://www.linkedin.com/in/prince-yadav-6b37471b0', '_blank')}
            >
              <FiLinkedin /> LinkedIn
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          style={{
            marginTop: 60,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              width: 20,
              height: 32,
              borderRadius: 10,
              border: '1.5px solid rgba(0,0,0,0.1)',
              display: 'flex',
              justifyContent: 'center',
              paddingTop: 6,
            }}
          >
            <div
              style={{
                width: 3,
                height: 8,
                borderRadius: 2,
                background: 'var(--accent-blue)',
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
