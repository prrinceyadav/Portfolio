import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiExternalLink, FiGithub, FiZap, FiBookOpen, FiCpu, FiTarget } from 'react-icons/fi'

export default function Startup() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="startup"
      ref={ref}
      className="section-blue-tint"
      style={{
        position: 'relative',
        padding: 'clamp(80px, 12vw, 160px) 0',
        overflow: 'hidden',
      }}
    >
      {/* Ambient Blobs */}
      <div
        className="ambient-glow glow-purple"
        style={{ width: 700, height: 700, top: '-15%', left: '-10%', opacity: 0.3 }}
      />
      <div
        className="ambient-glow glow-cyan"
        style={{ width: 500, height: 500, bottom: '-10%', right: '-10%', opacity: 0.25 }}
      />
      <div
        className="ambient-glow glow-blue"
        style={{ width: 400, height: 400, top: '40%', right: '20%', opacity: 0.15 }}
      />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '6px 16px',
                borderRadius: 100,
                fontSize: '0.8rem',
                fontWeight: 700,
                background: 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(0,180,255,0.15))',
                border: '1px solid rgba(168,85,247,0.3)',
                color: '#c084fc',
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}
            >
              🚀 Startup
            </span>
          </div>
          <h2 className="section-heading" style={{
            background: 'linear-gradient(135deg, #c084fc 0%, var(--accent-blue) 50%, var(--accent-cyan) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            NextAIQ Labs
          </h2>
          <p className="section-subheading" style={{ maxWidth: 700 }}>
            Building the future of AI-powered industrial automation & education.
            Making schools future-ready with AI training environments.
          </p>
        </motion.div>

        {/* Main Startup Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="glass-card"
          style={{
            padding: 0,
            overflow: 'hidden',
            marginBottom: 32,
            position: 'relative',
          }}
        >
          {/* Hero Banner */}
          <div
            style={{
              position: 'relative',
              height: 280,
              overflow: 'hidden',
              borderRadius: '24px 24px 0 0',
            }}
          >
            <img
              src="/nextaiq-industrial.png"
              alt="NextAIQ Labs Industrial Automation"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 24,
                left: 32,
                right: 32,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <FiCpu style={{ color: 'var(--accent-blue)', fontSize: '1.2rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }} />
                <span style={{ color: 'var(--accent-blue)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                  Industrial Automation
                </span>
              </div>
              <h3
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                  color: '#fff',
                  textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)',
                }}
              >
                AI-Powered Industrial Automation
              </h3>
            </div>
          </div>

          <div style={{ padding: 'clamp(24px, 4vw, 40px)' }}>
            <p
              style={{
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                fontSize: '1rem',
                marginBottom: 24,
              }}
            >
              NextAIQ Labs is a startup focused on building intelligent automation solutions
              for industries. We leverage cutting-edge AI, Computer Vision, and IoT to transform
              manufacturing, supply chain, and operational workflows — making businesses
              smarter, faster, and more efficient.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 24 }}>
              {['AI Automation', 'Computer Vision', 'IoT', 'Digital Twins', 'Predictive Analytics'].map((tag) => (
                <span key={tag} className="glow-badge purple">{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* NextAIQ-Edu Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="glass-card"
          style={{
            padding: 0,
            overflow: 'hidden',
            marginBottom: 32,
            position: 'relative',
            border: '1px solid rgba(168, 85, 247, 0.15)',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {/* Image Side */}
            <div style={{ position: 'relative', minHeight: 300, overflow: 'hidden' }}>
              <img
                src="/nextaiq-edu.png"
                alt="NextAIQ-Edu AI Training for Schools"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              {/* Overlay removed to maintain original sharper image */}
            </div>

            {/* Content Side */}
            <div style={{ padding: 'clamp(24px, 4vw, 40px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <FiBookOpen style={{ color: '#c084fc', fontSize: '1.2rem' }} />
                <span style={{ color: '#c084fc', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  Education Initiative
                </span>
              </div>

              <h3
                style={{
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                  fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                  marginBottom: 16,
                  background: 'linear-gradient(135deg, #c084fc, var(--accent-cyan))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                NextAIQ-Edu
              </h3>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  fontSize: '0.95rem',
                  marginBottom: 20,
                }}
              >
                Our flagship education program designed to bring AI training directly into schools.
                We create immersive AI environments where students learn machine learning,
                computer vision, and data science — preparing them to be future-ready.
                Building the next generation of AI-native thinkers.
              </p>

              {/* Key Features */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
                {[
                  { icon: FiZap, text: 'AI Training Environment for School Students', color: 'var(--accent-blue)' },
                  { icon: FiTarget, text: 'Future-Ready AI School Programs', color: '#c084fc' },
                  { icon: FiCpu, text: 'Hands-on ML & Computer Vision Labs', color: 'var(--accent-cyan)' },
                ].map((feature) => (
                  <div
                    key={feature.text}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                    }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: `${feature.color}15`,
                        border: `1px solid ${feature.color}30`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: feature.color,
                        fontSize: '0.9rem',
                        flexShrink: 0,
                      }}
                    >
                      <feature.icon />
                    </div>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {['School AI Training', 'Curriculum Design', 'Student Labs', 'Teacher Workshops'].map((tag) => (
                  <span key={tag} className="glow-badge cyan">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 16,
          }}
        >
          {[
            { value: 'AI-First', label: 'School Approach', color: 'var(--accent-blue)' },
            { value: 'K-12', label: 'Student Programs', color: '#c084fc' },
            { value: '360°', label: 'AI Environment', color: 'var(--accent-cyan)' },
            { value: 'Future', label: 'Ready Schools', color: 'var(--accent-blue)' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-card"
              style={{ padding: 24, textAlign: 'center' }}
            >
              <div
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                  background: `linear-gradient(135deg, ${stat.color}, #fff)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: 4 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
