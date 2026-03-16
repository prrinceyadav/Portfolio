import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBriefcase, FiBook, FiAward, FiUsers } from 'react-icons/fi'

const timelineItems = [
  {
    icon: FiBriefcase,
    title: 'AI / Machine Learning Intern — IBM',
    subtitle: 'ExpensExchange-AI: AI-Powered Expense Tracker',
    date: 'Jun 2025 – Jul 2025',
    description:
      'Built AI-based stock portfolio analyzer predicting trends with buy/hold/sell signals. Trained GRU-based time-series models on 5+ years of data across 20+ tickers. Achieved ~76% directional accuracy and ~0.82 R² score.',
    color: 'var(--accent-blue)',
  },
  {
    icon: FiUsers,
    title: 'Freelance — Data Structures Educator',
    subtitle: 'Exam Preparation Guide',
    date: 'Jan 2024 – Present',
    description:
      'Conducted mock tests and weekly quizzes, improving JEE/NEET scores by 20%+ for 200+ students. Delivered 50+ interactive lectures, simplifying complex topics.',
    color: 'var(--accent-purple)',
  },
  {
    icon: FiBook,
    title: 'B.Tech Computer Science & Engineering — UPES',
    subtitle: 'University of Petroleum and Energy Studies',
    date: 'Aug 2022 – Present',
    description:
      'Focused on DSA, Machine Learning, AI, Large Language Models, Full-Stack Development, and building real-life AI projects. Active in hackathons and research.',
    color: 'var(--accent-cyan)',
  },
  {
    icon: FiAward,
    title: 'IBM Certification',
    subtitle: 'Advanced Machine Learning Techniques',
    date: '2025',
    description:
      '2nd Runner-up in IBM Advanced ML certification program. UPES DSW Ambassador facilitating student welfare initiatives.',
    color: 'var(--accent-blue)',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="experience"
      ref={ref}
      className="section-purple-tint"
      style={{
        position: 'relative',
        padding: 'clamp(80px, 12vw, 160px) 0',
        overflow: 'hidden',
      }}
    >
      <div
        className="ambient-glow glow-purple"
        style={{ width: 500, height: 500, top: '0%', right: '-10%', opacity: 0.2 }}
      />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading">Experience & Education</h2>
          <p className="section-subheading">
            My journey in AI, education, and software engineering.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: 40 }}>
          {/* Vertical Line */}
          <div
            style={{
              position: 'absolute',
              left: 15,
              top: 0,
              bottom: 0,
              width: 2,
              background:
                'linear-gradient(180deg, var(--accent-blue), var(--accent-purple), var(--accent-cyan), transparent)',
              opacity: 0.3,
            }}
          />

          {timelineItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              style={{
                position: 'relative',
                marginBottom: 32,
              }}
            >
              {/* Glowing Node */}
              <div
                style={{
                  position: 'absolute',
                  left: -33,
                  top: 28,
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  background: `${item.color}20`,
                  border: `2px solid ${item.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  color: item.color,
                  boxShadow: `0 0 20px ${item.color}40`,
                  zIndex: 2,
                }}
              >
                <item.icon />
              </div>

              <div
                className="glass-card"
                style={{
                  padding: 28,
                  marginLeft: 16,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Glass Reflection */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '30%',
                    background:
                      'linear-gradient(180deg, rgba(255,255,255,0.3), transparent)',
                    borderRadius: '24px 24px 0 0',
                    pointerEvents: 'none',
                  }}
                />

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: 8,
                    marginBottom: 8,
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        fontFamily: 'var(--font-heading)',
                        color: item.color,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        fontWeight: 500,
                        marginTop: 2,
                      }}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                  <span
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--text-secondary)',
                      background: 'var(--bg-tertiary)',
                      padding: '4px 12px',
                      borderRadius: 8,
                      fontWeight: 500,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {item.date}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginTop: 12,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
