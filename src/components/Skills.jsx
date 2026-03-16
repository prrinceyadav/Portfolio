import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import VanillaTilt from 'vanilla-tilt'
import {
  SiPython, SiCplusplus, SiJavascript, SiTensorflow, SiPytorch,
  SiMongodb, SiReact, SiNodedotjs, SiGit, SiDocker,
  SiNumpy, SiPandas, SiScikitlearn, SiGooglecolab
} from 'react-icons/si'
import { TbSql, TbBrain } from 'react-icons/tb'

const categories = {
  Programming: [
    { name: 'Python', icon: SiPython, color: '#3776ab' },
    { name: 'C++', icon: SiCplusplus, color: '#00599c' },
    { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
    { name: 'SQL', icon: TbSql, color: '#e38c00' },
  ],
  'AI / ML': [
    { name: 'TensorFlow', icon: SiTensorflow, color: '#ff6f00' },
    { name: 'PyTorch', icon: SiPytorch, color: '#ee4c2c' },
    { name: 'Scikit-learn', icon: SiScikitlearn, color: '#f7931e' },
    { name: 'NumPy', icon: SiNumpy, color: '#4d77cf' },
    { name: 'Pandas', icon: SiPandas, color: '#150458' },
    { name: 'LLMs', icon: TbBrain, color: '#a855f7' },
  ],
  'Web Dev': [
    { name: 'React', icon: SiReact, color: '#61dafb' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
  ],
  Tools: [
    { name: 'Git & GitHub', icon: SiGit, color: '#f05032' },
    { name: 'Google Colab', icon: SiGooglecolab, color: '#f9ab00' },
    { name: 'Docker', icon: SiDocker, color: '#2496ed' },
  ],
}

function SkillCard({ skill, index }) {
  const tiltRef = useRef(null)

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.15,
        perspective: 1000,
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="glass-card"
      style={{
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12,
        cursor: 'default',
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 16,
          background: `${skill.color}15`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.6rem',
          color: skill.color,
          border: `1px solid ${skill.color}30`,
          transform: 'translateZ(20px)',
        }}
      >
        <skill.icon />
      </div>
      <span
        style={{
          fontSize: '0.85rem',
          fontWeight: 600,
          color: 'var(--text-primary)',
          transform: 'translateZ(10px)',
        }}
      >
        {skill.name}
      </span>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState('Programming')

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        position: 'relative',
        padding: 'clamp(80px, 12vw, 160px) 0',
        overflow: 'hidden',
      }}
    >
      <div
        className="ambient-glow glow-cyan"
        style={{ width: 500, height: 500, top: '20%', right: '-10%', opacity: 0.2 }}
      />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading">Skills & Technologies</h2>
          <p className="section-subheading">
            Tools and technologies I use to build intelligent systems.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            display: 'flex',
            gap: 8,
            marginBottom: 40,
            flexWrap: 'wrap',
          }}
        >
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '10px 24px',
                borderRadius: 12,
                border: '1px solid',
                borderColor:
                  activeCategory === cat
                    ? 'var(--accent-blue)'
                    : 'var(--glass-border)',
                background:
                  activeCategory === cat
                    ? 'rgba(0, 180, 255, 0.1)'
                    : 'var(--glass-bg)',
                color:
                  activeCategory === cat
                    ? 'var(--accent-blue)'
                    : 'var(--text-secondary)',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'var(--font-body)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skill Cards Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: 16,
          }}
        >
          {categories[activeCategory].map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
