import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import VanillaTilt from 'vanilla-tilt'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
  {
    title: 'NutricareHub',
    subtitle: 'Personalized Diet Recommendation System',
    description:
      'Designed a system using ML to predict optimal diets based on BMI, symptoms, allergies, and hereditary diseases. Built search functionality to map symptoms to diseases and display corresponding diet plans.',
    tech: ['Python', 'ML', 'C++', 'DSA', 'Web'],
    color: 'var(--accent-cyan)',
    glowColor: 'var(--glow-cyan)',
    github: 'https://github.com/princeyadav',
  },
  {
    title: 'Neolytics',
    subtitle: 'Deep Learning Cancer Detection with Explainable AI',
    description:
      'AI-powered cancer detection system analyzing 1,000+ medical images for early diagnosis. CNN-based transfer learning achieving ~72% classification accuracy with GRAD-CAM for explainability.',
    tech: ['Python', 'TensorFlow', 'CNN', 'GRAD-CAM'],
    color: 'var(--accent-purple)',
    glowColor: 'var(--glow-purple)',
    github: 'https://github.com/princeyadav',
  },
  {
    title: 'Echo-D',
    subtitle: 'AI-Powered Ultrasound Preprocessing & Diagnostic Support',
    description:
      'AI-based system for enhanced ultrasound analysis and diagnostic support. Uses SLIC, SAM, BLIP-2, GRAD-CAM++ with CLAHE & OTSU preprocessing for medical imaging.',
    tech: ['Python', 'SAM', 'BLIP-2', 'CLAHE'],
    color: 'var(--accent-blue)',
    glowColor: 'var(--glow-blue)',
    github: 'https://github.com/princeyadav',
  },
  {
    title: 'ExpensExchange-AI',
    subtitle: 'AI-Powered Expense Tracker & Portfolio Analyzer',
    description:
      'AI-based stock portfolio analyzer predicting short-term trends with buy/hold/sell signals. Trained GRU-based time-series models on 5+ years of historical stock data across 20+ tickers.',
    tech: ['Python', 'GRU', 'LSTM', 'Optuna', 'Finance'],
    color: '#f97316',
    glowColor: 'rgba(249, 115, 22, 0.3)',
    github: 'https://github.com/princeyadav',
  },
  {
    title: 'Human Emotion Detection',
    subtitle: 'Multimodal Emotion Recognition System',
    description:
      'Currently building a real-time human emotion detection system using multimodal data — combining facial expressions, voice tones, and text sentiment for accurate emotion classification.',
    tech: ['Python', 'Deep Learning', 'Computer Vision', 'NLP', 'Audio'],
    color: '#f472b6',
    glowColor: 'rgba(244, 114, 182, 0.3)',
    github: 'https://github.com/princeyadav',
    inProgress: true,
  },
]

function ProjectCard({ project, index }) {
  const tiltRef = useRef(null)

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 8,
        speed: 400,
        glare: true,
        'max-glare': 0.1,
        perspective: 1200,
      })
    }
    return () => {
      if (tiltRef.current?.vanillaTilt) {
        tiltRef.current.vanillaTilt.destroy()
      }
    }
  }, [])

  return (
    <motion.div
      ref={tiltRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="glass-card"
      style={{
        padding: 32,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Top Accent Line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
        }}
      />

      {/* Glass Reflection */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '35%',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.4), transparent)',
          borderRadius: '24px 24px 0 0',
          pointerEvents: 'none',
        }}
      />

      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
          <h3
            style={{
              fontSize: '1.3rem',
              fontWeight: 700,
              fontFamily: 'var(--font-heading)',
              color: project.color,
              transform: 'translateZ(15px)',
            }}
          >
            {project.title}
          </h3>
          {project.inProgress && (
            <span
              style={{
                padding: '2px 10px',
                borderRadius: 8,
                fontSize: '0.7rem',
                fontWeight: 700,
                background: 'rgba(244, 114, 182, 0.15)',
                border: '1px solid rgba(244, 114, 182, 0.3)',
                color: '#f472b6',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                animation: 'pulse-glow 2s infinite',
              }}
            >
              In Progress
            </span>
          )}
        </div>
        <p
          style={{
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            fontWeight: 500,
          }}
        >
          {project.subtitle}
        </p>
      </div>

      <p
        style={{
          fontSize: '0.9rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          flex: 1,
        }}
      >
        {project.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {project.tech.map((t) => (
          <span
            key={t}
            style={{
              padding: '4px 12px',
              borderRadius: 8,
              fontSize: '0.75rem',
              fontWeight: 600,
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--glass-border)',
              color: 'var(--text-secondary)',
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '8px 16px',
            borderRadius: 10,
            fontSize: '0.85rem',
            fontWeight: 600,
            background: `${project.color}15`,
            border: `1px solid ${project.color}30`,
            color: project.color,
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}
        >
          <FiGithub /> GitHub
        </a>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="projects"
      ref={ref}
      className="section-purple-tint"
      style={{
        position: 'relative',
        padding: 'clamp(80px, 12vw, 160px) 0',
        overflow: 'hidden',
      }}
    >
      <div
        className="ambient-glow glow-blue"
        style={{ width: 600, height: 600, bottom: '10%', left: '-10%', opacity: 0.2 }}
      />
      <div
        className="ambient-glow glow-purple"
        style={{ width: 400, height: 400, top: '5%', right: '-5%', opacity: 0.15 }}
      />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-subheading">
            AI-powered solutions for real-world problems in healthcare, finance, and beyond.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 24,
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
