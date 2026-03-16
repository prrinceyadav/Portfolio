import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiSend, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import MagneticButton from './MagneticButton'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    const { name, email, message } = formState

    // mailto fallback
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
    window.location.href = `mailto:prince.yadav774623@icloud.com?subject=${subject}&body=${body}`

    setTimeout(() => {
      setSending(false)
      setFormState({ name: '', email: '', message: '' })
    }, 1500)
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    borderRadius: 14,
    border: '1px solid var(--glass-border)',
    background: 'rgba(255,255,255,0.03)',
    color: 'var(--text-primary)',
    fontSize: '0.95rem',
    fontFamily: 'var(--font-body)',
    outline: 'none',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
  }

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        position: 'relative',
        padding: 'clamp(80px, 12vw, 160px) 0',
        overflow: 'hidden',
      }}
    >
      <div
        className="ambient-glow glow-blue"
        style={{ width: 500, height: 500, bottom: '0%', right: '-10%', opacity: 0.2 }}
      />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading">Get In Touch</h2>
          <p className="section-subheading">
            Have a project in mind or want to collaborate? Let's talk.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 32,
            alignItems: 'start',
          }}
        >
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
          >
            {[
              { icon: FiMail, label: 'Email', value: 'prince.yadav774623@icloud.com' },
              { icon: FiPhone, label: 'Phone', value: '+91-8630401284' },
              { icon: FiMapPin, label: 'Location', value: 'Dehradun, Uttarakhand' },
            ].map((item) => (
              <div
                key={item.label}
                className="glass-card"
                style={{
                  padding: 20,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: 'rgba(0, 180, 255, 0.1)',
                    border: '1px solid rgba(0, 180, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-blue)',
                    fontSize: '1.1rem',
                    flexShrink: 0,
                  }}
                >
                  <item.icon />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--text-secondary)',
                      marginBottom: 2,
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      wordBreak: 'break-all',
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass-card"
            style={{
              padding: 32,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
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
                  'linear-gradient(180deg, rgba(255,255,255,0.02), transparent)',
                borderRadius: '24px 24px 0 0',
                pointerEvents: 'none',
              }}
            />

            <input
              type="text"
              placeholder="Your Name"
              required
              value={formState.name}
              onChange={(e) =>
                setFormState((s) => ({ ...s, name: e.target.value }))
              }
              style={inputStyle}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--accent-blue)'
                e.target.style.boxShadow = '0 0 20px rgba(0, 180, 255, 0.1)'
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'var(--glass-border)'
                e.target.style.boxShadow = 'none'
              }}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={formState.email}
              onChange={(e) =>
                setFormState((s) => ({ ...s, email: e.target.value }))
              }
              style={inputStyle}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--accent-blue)'
                e.target.style.boxShadow = '0 0 20px rgba(0, 180, 255, 0.1)'
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'var(--glass-border)'
                e.target.style.boxShadow = 'none'
              }}
            />
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={formState.message}
              onChange={(e) =>
                setFormState((s) => ({ ...s, message: e.target.value }))
              }
              style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--accent-blue)'
                e.target.style.boxShadow = '0 0 20px rgba(0, 180, 255, 0.1)'
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'var(--glass-border)'
                e.target.style.boxShadow = 'none'
              }}
            />

            <MagneticButton
              type="submit"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {sending ? 'Sending...' : 'Send Message'} <FiSend />
              </span>
            </MagneticButton>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
