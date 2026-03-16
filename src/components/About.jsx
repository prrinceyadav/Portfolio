import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import profileImg from '../assets/profile.jpg'

const skills = [
  { name: 'Machine Learning', color: 'blue' },
  { name: 'Deep Learning', color: 'purple' },
  { name: 'LLMs', color: 'cyan' },
  { name: 'Computer Vision', color: 'blue' },
  { name: 'Explainable AI', color: 'purple' },
  { name: 'Data Mining', color: 'cyan' },
  { name: 'C++', color: 'blue' },
  { name: 'Python', color: 'purple' },
  { name: 'React', color: 'cyan' },
  { name: 'SQL', color: 'blue' },
  { name: 'Full-Stack', color: 'purple' },
  { name: 'DSA', color: 'cyan' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className="section-blue-tint"
      style={{
        position: 'relative',
        padding: 'clamp(80px, 12vw, 160px) 0',
        overflow: 'hidden',
      }}
    >
      <div
        className="ambient-glow glow-purple"
        style={{ width: 500, height: 500, top: '10%', left: '-10%', opacity: 0.2 }}
      />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading">About Me</h2>
          <p className="section-subheading">
            Passionate about building intelligent systems that make a difference.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr)',
            gap: 32,
          }}
        >
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="glass-card"
            style={{ padding: 'clamp(24px, 4vw, 48px)', position: 'relative', overflow: 'hidden' }}
          >
            {/* Glass Reflection */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '40%',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.02), transparent)',
                borderRadius: '24px 24px 0 0',
                pointerEvents: 'none',
              }}
            />

            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap' }}>
              {/* Profile Photo */}
              <div
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 24,
                  background:
                    'linear-gradient(135deg, var(--accent-blue), var(--accent-purple), var(--accent-pink))',
                  padding: 3,
                  flexShrink: 0,
                  boxShadow: '0 8px 32px var(--glow-blue), 0 0 40px var(--glow-purple)',
                }}
              >
                <img
                  src={profileImg}
                  alt="Prince Yadav"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 21,
                    objectFit: 'cover',
                    border: '2px solid var(--bg-secondary)',
                  }}
                />
              </div>

              <div style={{ flex: 1, minWidth: 260 }}>
                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    marginBottom: 8,
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  Prince Yadav
                </h3>
                <p
                  style={{
                    color: 'var(--accent-blue)',
                    fontSize: '0.95rem',
                    marginBottom: 16,
                    fontWeight: 600,
                  }}
                >
                  AI/ML Engineer | Healthcare & Finance AI
                </p>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    fontSize: '0.95rem',
                  }}
                >
                  I'm an AI/ML Engineer with experience building end-to-end AI systems
                  in Healthcare, Finance, and Nutrition domains. Proficient in C++,
                  Python, SQL, AI, LLM, and Deep Learning with front-end capabilities.
                  I focus on data-driven, scalable, and interpretable AI solutions —
                  building user-friendly interfaces that integrate ML models with web
                  applications for high-performance experiences.
                </p>
              </div>
            </div>

            {/* Skill Badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 10,
                marginTop: 32,
              }}
            >
              {skills.map((skill, i) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.05, duration: 0.4 }}
                  className={`glow-badge ${skill.color === 'purple' ? 'purple' : skill.color === 'cyan' ? 'cyan' : ''}`}
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: 16,
            }}
          >
            {[
              { label: 'AI Projects', value: '5+' },
              { label: 'Technologies', value: '15+' },
              { label: 'Students Taught', value: '100+' },
              { label: 'Research Areas', value: '4+' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="glass-card"
                style={{
                  padding: 24,
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: '2rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-heading)',
                    background:
                      'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    marginTop: 4,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
