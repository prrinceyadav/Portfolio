import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUpRight } from 'react-icons/fi'

const socials = [
  {
    icon: FiGithub,
    label: 'GitHub',
    href: 'https://github.com/Princeyadav774623',
    handle: '@Princeyadav774623',
    color: '#c084fc',
    bg: 'rgba(192, 132, 252, 0.08)',
    borderColor: 'rgba(192, 132, 252, 0.2)',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/prince-yadav-6b37471b0',
    handle: 'Prince Yadav',
    color: '#00b4ff',
    bg: 'rgba(0, 180, 255, 0.08)',
    borderColor: 'rgba(0, 180, 255, 0.2)',
  },
  {
    icon: FiMail,
    label: 'Email',
    href: 'mailto:prince.yadav774623@icloud.com',
    handle: 'prince.yadav774623@icloud.com',
    color: '#06d6a0',
    bg: 'rgba(6, 214, 160, 0.08)',
    borderColor: 'rgba(6, 214, 160, 0.2)',
  },
]

export default function Footer() {
  return (
    <footer
      id="connect"
      style={{
        position: 'relative',
        padding: '100px 0 40px',
        overflow: 'hidden',
      }}
    >
      {/* Ambient Blobs */}
      <div
        className="ambient-glow glow-purple"
        style={{ width: 500, height: 500, bottom: '-20%', left: '20%', opacity: 0.15 }}
      />
      <div
        className="ambient-glow glow-blue"
        style={{ width: 400, height: 400, top: '-10%', right: '10%', opacity: 0.1 }}
      />

      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              background: 'linear-gradient(135deg, var(--accent-blue), #c084fc, var(--accent-cyan))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '200% 200%',
              animation: 'gradient-shift 4s ease infinite',
              marginBottom: 12,
            }}
          >
            Let's Connect
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            Find me on these platforms — let's build something amazing together.
          </p>
        </motion.div>

        {/* Direct Link Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
            maxWidth: 900,
            margin: '0 auto 48px',
          }}
        >
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="glass-card"
              style={{
                padding: '28px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                textDecoration: 'none',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top accent */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: `linear-gradient(90deg, transparent, ${s.color}, transparent)`,
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: s.bg,
                  border: `1px solid ${s.borderColor}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.3rem',
                  color: s.color,
                  flexShrink: 0,
                }}
              >
                <s.icon />
              </div>

              {/* Text */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontWeight: 600,
                    marginBottom: 4,
                  }}
                >
                  {s.label}
                </div>
                <div
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: s.color,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {s.handle}
                </div>
              </div>

              {/* Arrow */}
              <FiArrowUpRight
                style={{
                  fontSize: '1.2rem',
                  color: 'var(--text-secondary)',
                  flexShrink: 0,
                  transition: 'all 0.3s ease',
                }}
                className="link-arrow"
              />
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            width: '100%',
            height: 1,
            background: 'linear-gradient(90deg, transparent 0%, var(--glass-border) 50%, transparent 100%)',
            marginBottom: 32,
          }}
        />

        {/* Copyright */}
        <div style={{ textAlign: 'center' }}>
          <p
            style={{
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
            }}
          >
            © {new Date().getFullYear()} Prince Yadav. Built with{' '}
            <FiHeart style={{ color: 'var(--accent-purple)', fontSize: '0.9rem' }} />
          </p>
        </div>
      </div>
    </footer>
  )
}
