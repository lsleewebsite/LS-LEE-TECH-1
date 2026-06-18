import React, { useState } from 'react'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
}

// PLACEHOLDER — replace with your Formspree endpoint once email is set up
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xdavvrpg'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  const handlePhoneChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 8)
    setFormData({ ...formData, phone: digitsOnly })
    if (digitsOnly.length > 0 && digitsOnly.length < 8) {
      setErrors({ ...errors, phone: 'Phone number must be 8 digits' })
    } else {
      setErrors({ ...errors, phone: '' })
    }
  }
  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(e.target)
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', company: '', email: '', phone: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div>
      {/* Hero */}
      <section style={{ padding: '100px 32px 80px', background: '#0F172A', color: '#FFF', borderBottom: '2px solid #DC2626' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 style={{ fontSize: '56px', fontWeight: 900, marginBottom: '28px', lineHeight: 1.1, fontFamily: 'Archivo, sans-serif' }}>
              Get In <span style={{ color: '#DC2626' }}>Touch</span>
            </h1>
            <p style={{ fontSize: '20px', color: '#94A3B8', maxWidth: '800px', lineHeight: 1.7 }}>
              Have a project in mind or need to discuss a maintenance contract? Reach out and our team will get back to you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '100px 32px', background: '#FFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>

            {/* Left - Contact Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp}>
              <h2 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '24px', fontFamily: 'Archivo, sans-serif', color: '#0F172A' }}>
                Contact Information
              </h2>
              <div style={{ width: '60px', height: '4px', background: '#DC2626', marginBottom: '32px' }}></div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
              
                {/* Address */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'start' }}>
                  <div style={{ width: '44px', height: '44px', background: '#F8F9FA', border: '2px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#94A3B8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px', fontFamily: 'IBM Plex Mono' }}>
                      Address
                    </div>
                    <div style={{ fontSize: '15px', color: '#0F172A', lineHeight: 1.6 }}>
                      12 Tech Park Crescent<br />Singapore 638120
                    </div>
                  </div>
                </div>

              {/* Map */}
              <div style={{ border: '2px solid #0F172A', overflow: 'hidden', height: '320px' }}>
                <iframe
                  title="LS Lee Technology Office Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=12+Tech+Park+Crescent+Singapore+638120&output=embed"
                ></iframe>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp}>
              <h2 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '24px', fontFamily: 'Archivo, sans-serif', color: '#0F172A' }}>
                Send Us a Message
              </h2>
              <div style={{ width: '60px', height: '4px', background: '#DC2626', marginBottom: '32px' }}></div>

              {status === 'success' ? (
                <div style={{ padding: '40px', background: '#F0FDF4', border: '2px solid #16A34A', textAlign: 'center' }}>
                  <div style={{ fontSize: '20px', fontWeight: 900, color: '#16A34A', marginBottom: '8px', fontFamily: 'Archivo' }}>
                    Message Sent
                  </div>
                  <p style={{ fontSize: '14px', color: '#475569' }}>
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#0F172A', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange('name')}
                        style={{ width: '100%', padding: '14px 16px', border: '2px solid #E5E7EB', fontSize: '14px', fontFamily: 'IBM Plex Sans' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#0F172A', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange('company')}
                        style={{ width: '100%', padding: '14px 16px', border: '2px solid #E5E7EB', fontSize: '14px', fontFamily: 'IBM Plex Sans' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#0F172A', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange('email')}
                        style={{ width: '100%', padding: '14px 16px', border: '2px solid #E5E7EB', fontSize: '14px', fontFamily: 'IBM Plex Sans' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#0F172A', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        placeholder="8 digit number"
                        maxLength={8}
                        style={{ width: '100%', padding: '14px 16px', border: `2px solid ${errors.phone ? '#DC2626' : '#E5E7EB'}`, fontSize: '14px', fontFamily: 'IBM Plex Sans' }}
                      />
                      {errors.phone && (
                        <div style={{ color: '#DC2626', fontSize: '12px', marginTop: '6px' }}>{errors.phone}</div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#0F172A', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange('message')}
                      style={{ width: '100%', padding: '14px 16px', border: '2px solid #E5E7EB', fontSize: '14px', fontFamily: 'IBM Plex Sans', resize: 'vertical' }}
                    />
                  </div>

                  {status === 'error' && (
                    <div style={{ padding: '12px 16px', background: '#FEF2F2', border: '2px solid #DC2626', fontSize: '13px', color: '#DC2626' }}>
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    style={{
                      padding: '16px 32px',
                      background: '#DC2626',
                      color: '#FFF',
                      border: '2px solid #DC2626',
                      fontWeight: 700,
                      fontSize: '15px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s',
                      opacity: status === 'sending' ? 0.7 : 1
                    }}
                    onMouseEnter={(e) => { if (status !== 'sending') { e.currentTarget.style.background = '#0F172A'; e.currentTarget.style.borderColor = '#0F172A' } }}
                    onMouseLeave={(e) => { if (status !== 'sending') { e.currentTarget.style.background = '#DC2626'; e.currentTarget.style.borderColor = '#DC2626' } }}
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
