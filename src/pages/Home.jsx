import React, { useState } from 'react'
import { motion } from 'framer-motion'

// Icons
const I = {
  Chip: (p) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <rect x="7" y="7" width="14" height="14" />
      <rect x="10" y="10" width="8" height="8" />
      <line x1="4" y1="10" x2="7" y2="10" /><line x1="4" y1="14" x2="7" y2="14" /><line x1="4" y1="18" x2="7" y2="18" />
      <line x1="21" y1="10" x2="24" y2="10" /><line x1="21" y1="14" x2="24" y2="14" /><line x1="21" y1="18" x2="24" y2="18" />
      <line x1="10" y1="4" x2="10" y2="7" /><line x1="14" y1="4" x2="14" y2="7" /><line x1="18" y1="4" x2="18" y2="7" />
      <line x1="10" y1="21" x2="10" y2="24" /><line x1="14" y1="21" x2="14" y2="24" /><line x1="18" y1="21" x2="18" y2="24" />
    </svg>
  ),
  Server: (p) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <rect x="4" y="5" width="20" height="6" /><rect x="4" y="13" width="20" height="6" /><rect x="4" y="21" width="20" height="2" />
      <circle cx="8" cy="8" r="0.8" fill="currentColor" /><circle cx="11" cy="8" r="0.8" fill="currentColor" />
      <circle cx="8" cy="16" r="0.8" fill="currentColor" /><circle cx="11" cy="16" r="0.8" fill="currentColor" />
      <line x1="17" y1="8" x2="21" y2="8" /><line x1="17" y1="16" x2="21" y2="16" />
    </svg>
  ),
  Plant: (p) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M3 24 V12 L8 14 V9 L13 12 V7 L18 11 V14 H25 V24 Z" />
      <line x1="6" y1="20" x2="6" y2="22" /><line x1="11" y1="18" x2="11" y2="22" /><line x1="16" y1="18" x2="16" y2="22" /><line x1="21" y1="18" x2="21" y2="22" />
      <line x1="2" y1="24" x2="26" y2="24" />
    </svg>
  ),
  H2: (p) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <circle cx="14" cy="14" r="10" />
      <text x="14" y="18" fontSize="11" fontWeight="700" fontFamily="Archivo" textAnchor="middle" fill="currentColor" stroke="none">H₂</text>
    </svg>
  ),
  Wrench: (p) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M20 4 L24 8 L20 12 L18 10 L14 14 L18 18 L22 14 L24 16 L20 20 L24 24" />
      <path d="M14 14 L4 24" /><circle cx="4.5" cy="23.5" r="1.2" />
    </svg>
  ),
  Gauge: (p) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M4 18 A10 10 0 0 1 24 18" /><line x1="4" y1="18" x2="24" y2="18" />
      <line x1="14" y1="18" x2="20" y2="11" strokeWidth="2.5" />
      <circle cx="14" cy="18" r="1.5" fill="currentColor" />
      <line x1="7" y1="14" x2="8.5" y2="15" /><line x1="14" y1="9" x2="14" y2="11" /><line x1="21" y1="14" x2="19.5" y2="15" />
    </svg>
  ),
  Trailer: (p) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <rect x="2" y="10" width="18" height="8" rx="0" />
      <circle cx="20" cy="22" r="2.5" /><circle cx="7" cy="22" r="2.5" />
      <line x1="2" y1="20" x2="4.5" y2="20" /><line x1="9.5" y1="20" x2="17.5" y2="20" /><line x1="22.5" y1="20" x2="26" y2="20" />
      <line x1="6" y1="13" x2="6" y2="15" /><line x1="10" y1="13" x2="10" y2="15" /><line x1="14" y1="13" x2="14" y2="15" />
    </svg>
  ),
  Snow: (p) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <line x1="14" y1="3" x2="14" y2="25" /><line x1="3" y1="14" x2="25" y2="14" />
      <line x1="6" y1="6" x2="22" y2="22" /><line x1="22" y1="6" x2="6" y2="22" />
      <circle cx="14" cy="14" r="2" />
    </svg>
  ),
  Arrow: (p) => (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <line x1="0" y1="5" x2="13" y2="5" /><polyline points="9,1 13,5 9,9" />
    </svg>
  ),
  Check: (p) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" {...p}>
      <polyline points="3,11 8,16 17,4" />
    </svg>
  ),
  Shield: (p) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M12 2 L21 5 V12 C21 17 17 21 12 22 C7 21 3 17 3 12 V5 Z" />
      <polyline points="8,12 11,15 16,9" />
    </svg>
  ),
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

export default function Home() {
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '', scope: '', message: ''
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value })
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name required'
    if (!formData.company.trim()) newErrors.company = 'Company required'
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid email required'
    if (!formData.scope) newErrors.scope = 'Please select a scope'
    if (!formData.message.trim()) newErrors.message = 'Project notes required'
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setSubmitted(true)
  }

  return (
    <div>
      {/* HERO - Dark Background */}
      <section id="home" className="hero">
        <div className="hero-bg">
          <div className="hero-image"></div>
        </div>
        <div className="hero-content">
          <div className="wrap">
            <motion.div
              style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="hero-tag mono" style={{ justifyContent: 'center' }}>
                <span className="dot"></span>
                <span>EST. 1989 — SINGAPORE</span>
              </div>
              
              <motion.h1
                style={{ margin: '0 auto 32px' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                37+ Years Delivering Safety-Critical Mechanical Solutions to Singapore's Gas and Process Industries
              </motion.h1>
              
              <motion.p 
                className="hero-sub"
                style={{ margin: '0 auto 48px', maxWidth: '700px' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                From semiconductor gas plants to hydrogen trailer servicing, L.S. Lee Technology Pte Ltd
                delivers safety-critical mechanical solutions backed by decades of frontline
                experience.
              </motion.p>
              
              <motion.div 
                className="hero-ctas"
                style={{ justifyContent: 'center' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <a href="#industries" className="btn btn-primary">
                  Explore Our Industries <I.Arrow className="arrow" />
                </a>
                <a href="/projects" className="btn btn-outline">View Projects</a>
              </motion.div>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '20px',
                marginTop: '80px',
                maxWidth: '1100px',
                margin: '80px auto 0'
              }}
            >
              {[
                { value: '37+', label: 'Years Of Experience' },
                { value: 'XX', label: 'Sit amet consectetur' },
                { value: 'XX', label: 'Adipiscing elit sed' },
                { value: 'XX', label: 'Do eiusmod tempor' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + (i * 0.1) }}
                  style={{
                    padding: '28px 20px',
                    background: 'rgba(255,255,255,0.08)',
                    border: '2px solid rgba(255,255,255,0.2)',
                    textAlign: 'center',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.12)'
                    e.currentTarget.style.borderColor = '#DC2626'
                    e.currentTarget.style.transform = 'translateY(-4px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <div style={{
                    fontFamily: 'Archivo, sans-serif',
                    fontSize: '42px',
                    fontWeight: 900,
                    color: '#DC2626',
                    lineHeight: 1,
                    marginBottom: '10px'
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontSize: '11px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.65)',
                    fontWeight: 600
                  }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES - White Background */}
      <motion.section 
        id="industries" 
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
        style={{ background: '#FFF' }}
      >
        <div className="wrap">
          <div className="sec-head" style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '48px', marginBottom: '16px' }}>
              Four Critical <span style={{ color: '#DC2626' }}>Infrastructure Sectors</span>
            </h2>
            <p style={{ fontSize: '18px', color: '#64748B', maxWidth: '700px', margin: '0 auto' }}>
              Where safety meets precision engineering
            </p>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '32px'
            }}
          >
            {[
              { icon: <I.Chip style={{ width: 80, height: 80 }} />, title: "Semiconductor", tag: "UHP Gas Systems" },
              { icon: <I.Server style={{ width: 80, height: 80 }} />, title: "Data Center", tag: "H₂ Infrastructure" },
              { icon: <I.Plant style={{ width: 80, height: 80 }} />, title: "Industrial Gas", tag: "Process Plants" },
              { icon: <I.H2 style={{ width: 80, height: 80 }} />, title: "New Energy", tag: "Trailer Testing" },
            ].map((it, i) => (
              <motion.a
                href="/industries"
                key={i}
                variants={cardVariant}
                transition={{ duration: 0.5 }}
                style={{
                  padding: '60px 32px',
                  background: '#FFF',
                  border: '2px solid #E5E7EB',
                  textAlign: 'center',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '24px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#DC2626'
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.querySelector('.ind-icon-large').style.color = '#DC2626'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.querySelector('.ind-icon-large').style.color = '#0F172A'
                }}
              >
                <div className="ind-icon-large" style={{ 
                  color: '#0F172A',
                  transition: 'color 0.3s'
                }}>
                  {it.icon}
                </div>
                <div>
                  <h3 style={{
                    fontFamily: 'Archivo, sans-serif',
                    fontSize: '24px',
                    fontWeight: 900,
                    marginBottom: '8px',
                    color: '#0F172A'
                  }}>
                    {it.title}
                  </h3>
                  <div style={{
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#64748B',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}>
                    {it.tag}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ textAlign: 'center', marginTop: '64px' }}
          >
            <a href="/industries" className="btn btn-primary">
              Explore All Industries <I.Arrow className="arrow" />
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* SERVICES - Dark Background */}
      <motion.section 
        id="services" 
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
        style={{ background: '#0F172A', color: '#FFF' }}
      >
        <div className="wrap">
          <div className="sec-head" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '48px', marginBottom: '16px', color: '#FFF' }}>
              Integrated <span style={{ color: '#DC2626' }}>Engineering Services</span>
            </h2>
            <p style={{ fontSize: '18px', color: '#94A3B8', maxWidth: '700px', margin: '0 auto' }}>
              Four core capabilities delivering turnkey mechanical solutions
            </p>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '32px'
            }}
          >
            {[
              { 
                num: "01", 
                icon: <I.Wrench />, 
                title: "Project Engineering", 
                tag: "Turnkey Mechanical Construction",
                desc: "Complete project lifecycle from engineering through commissioning for gas plants and process facilities."
              },
              { 
                num: "02", 
                icon: <I.Gauge />, 
                title: "Plant Maintenance", 
                tag: "24/7 Operations Support",
                desc: "Comprehensive maintenance programs to maximize uptime and asset life across critical infrastructure."
              },
              { 
                num: "03", 
                icon: <I.Trailer />, 
                title: "Hydrogen Trailer Testing", 
                tag: "DOT/ISO Certification",
                desc: "Specialized testing and certification for hydrogen tube trailers with full fleet management support."
              },
              { 
                num: "04", 
                icon: <I.Snow />, 
                title: "Cryogenic Systems", 
                tag: "Vacuum-Insulated Equipment",
                desc: "Custom fabrication and maintenance for cryogenic transfer systems and industrial gas applications."
              },
            ].map((it, i) => (
              <motion.a
                href="/services"
                key={i}
                variants={cardVariant}
                transition={{ duration: 0.5 }}
                style={{
                  padding: '48px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '2px solid rgba(255,255,255,0.1)',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#DC2626'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.querySelector('.svc-icon').style.color = '#DC2626'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.querySelector('.svc-icon').style.color = '#FFF'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{
                    fontFamily: 'Archivo, sans-serif',
                    fontSize: '48px',
                    fontWeight: 900,
                    color: 'rgba(255,255,255,0.1)',
                    lineHeight: 1
                  }}>
                    {it.num}
                  </div>
                  <div className="svc-icon" style={{ 
                    color: '#FFF',
                    transition: 'color 0.3s'
                  }}>
                    {it.icon}
                  </div>
                </div>

                <div>
                  <h3 style={{
                    fontFamily: 'Archivo, sans-serif',
                    fontSize: '28px',
                    fontWeight: 900,
                    marginBottom: '8px',
                    lineHeight: 1.2,
                    color: '#FFF'
                  }}>
                    {it.title}
                  </h3>
                  <div style={{
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#DC2626',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}>
                    {it.tag}
                  </div>
                </div>

                <p style={{
                  fontSize: '15px',
                  color: '#94A3B8',
                  lineHeight: 1.7,
                  margin: 0
                }}>
                  {it.desc}
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginTop: 'auto',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#FFF',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Learn More <I.Arrow />
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ textAlign: 'center', marginTop: '48px' }}
          >
            <a href="/services" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '18px 40px',
              background: '#DC2626',
              color: '#FFF',
              border: '2px solid #DC2626',
              fontFamily: 'Archivo, sans-serif',
              fontWeight: 700,
              fontSize: '15px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#FFF'
              e.target.style.color = '#DC2626'
              e.target.style.borderColor = '#FFF'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#DC2626'
              e.target.style.color = '#FFF'
              e.target.style.borderColor = '#DC2626'
            }}>
              View All Services <I.Arrow />
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* PROJECTS - Asymmetric Masonry Grid - White Background */}
      <motion.section 
        id="projects" 
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
        style={{ background: '#FFF', padding: '100px 32px' }}
      >
        <div className="wrap">
          <div className="sec-head" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '48px', marginBottom: '16px' }}>
              Engineering That <span style={{ color: '#DC2626' }}>Delivers</span>
            </h2>
            <p style={{ fontSize: '18px', color: '#64748B', maxWidth: '700px', margin: '0 auto' }}>
              From concept to commissioning across Singapore's critical infrastructure
            </p>
          </div>

          {/* Asymmetric Masonry Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '24px',
              marginBottom: '60px'
            }}
          >
            {/* Large Featured Project - Spans 8 columns */}
            <motion.div
              variants={cardVariant}
              transition={{ duration: 0.5 }}
              style={{
                gridColumn: 'span 8',
                background: '#FFF',
                border: '2px solid #E5E7EB',
                overflow: 'hidden',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#DC2626'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E5E7EB'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{
                height: '400px',
                background: '#E5E7EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: '2px solid #E5E7EB'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#64748B',
                    letterSpacing: '0.1em',
                    marginBottom: '8px'
                  }}>
                    [ FEATURED PROJECT ]
                  </div>
                  <div style={{
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontSize: '10px',
                    color: '#94A3B8',
                    letterSpacing: '0.1em'
                  }}>
                    1600 × 900px
                  </div>
                </div>
              </div>
              <div style={{ padding: '40px' }}>
                <div style={{
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#DC2626',
                  letterSpacing: '0.12em',
                  marginBottom: '12px'
                }}>
                  PROJECT ENGINEERING
                </div>
                <h3 style={{
                  fontFamily: 'Archivo, sans-serif',
                  fontSize: '32px',
                  fontWeight: 900,
                  marginBottom: '12px',
                  lineHeight: 1.2,
                  color: '#0F172A'
                }}>
                  Fab-14 UHP Gas Distribution
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#64748B',
                  lineHeight: 1.7,
                  marginBottom: '24px'
                }}>
                  Design, fabrication, and installation of ultra-high-purity gas distribution network for new wafer fab expansion.
                </p>
                <div style={{
                  display: 'flex',
                  gap: '24px',
                  paddingTop: '16px',
                  borderTop: '1px solid #E5E7EB'
                }}>
                  <div>
                    <div style={{
                      fontFamily: 'IBM Plex Mono, monospace',
                      fontSize: '10px',
                      fontWeight: 600,
                      color: '#94A3B8',
                      letterSpacing: '0.1em',
                      marginBottom: '4px'
                    }}>
                      LOCATION
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: '#0F172A' }}>
                      Woodlands
                    </div>
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'IBM Plex Mono, monospace',
                      fontSize: '10px',
                      fontWeight: 600,
                      color: '#94A3B8',
                      letterSpacing: '0.1em',
                      marginBottom: '4px'
                    }}>
                      YEAR
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: '#0F172A' }}>
                      2024
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Small Project 1 - Spans 4 columns */}
            <motion.div
              variants={cardVariant}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                gridColumn: 'span 4',
                background: '#FFF',
                border: '2px solid #E5E7EB',
                overflow: 'hidden',
                transition: 'all 0.3s',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#DC2626'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E5E7EB'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{
                height: '240px',
                background: '#E5E7EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: '2px solid #E5E7EB'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#64748B',
                    letterSpacing: '0.1em'
                  }}>
                    [ PROJECT ]
                  </div>
                </div>
              </div>
              <div style={{ padding: '28px', flex: 1 }}>
                <div style={{
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontSize: '10px',
                  fontWeight: 700,
                  color: '#DC2626',
                  letterSpacing: '0.12em',
                  marginBottom: '10px'
                }}>
                  MAINTENANCE
                </div>
                <h3 style={{
                  fontFamily: 'Archivo, sans-serif',
                  fontSize: '20px',
                  fontWeight: 900,
                  marginBottom: '10px',
                  lineHeight: 1.2,
                  color: '#0F172A'
                }}>
                  ASU Plant Turnaround
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#64748B',
                  lineHeight: 1.6
                }}>
                  Major shutdown coordination and equipment overhaul across air separation unit.
                </p>
              </div>
            </motion.div>

            {/* Medium Project - Spans 5 columns */}
            <motion.div
              variants={cardVariant}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                gridColumn: 'span 5',
                background: '#FFF',
                border: '2px solid #E5E7EB',
                overflow: 'hidden',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#DC2626'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E5E7EB'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{
                height: '280px',
                background: '#E5E7EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: '2px solid #E5E7EB'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#64748B',
                    letterSpacing: '0.1em'
                  }}>
                    [ PROJECT ]
                  </div>
                </div>
              </div>
              <div style={{ padding: '32px' }}>
                <div style={{
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontSize: '10px',
                  fontWeight: 700,
                  color: '#DC2626',
                  letterSpacing: '0.12em',
                  marginBottom: '10px'
                }}>
                  TESTING & CERTIFICATION
                </div>
                <h3 style={{
                  fontFamily: 'Archivo, sans-serif',
                  fontSize: '24px',
                  fontWeight: 900,
                  marginBottom: '10px',
                  lineHeight: 1.2,
                  color: '#0F172A'
                }}>
                  H₂ Tube Trailer Recertification
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: '#64748B',
                  lineHeight: 1.6,
                  marginBottom: '16px'
                }}>
                  DOT recertification program for fleet of 40+ hydrogen tube trailers.
                </p>
                <div style={{
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#0F172A'
                }}>
                  Tuas · 2024
                </div>
              </div>
            </motion.div>

            {/* Small Project 2 - Stats Card - Spans 3 columns */}
            <motion.div
              variants={cardVariant}
              transition={{ duration: 0.5, delay: 0.25 }}
              style={{
                gridColumn: 'span 3',
                background: '#0F172A',
                border: '2px solid #0F172A',
                color: '#FFF',
                padding: '40px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#DC2626'
                e.currentTarget.style.borderColor = '#DC2626'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#0F172A'
                e.currentTarget.style.borderColor = '#0F172A'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{
                fontSize: '64px',
                fontFamily: 'Archivo, sans-serif',
                fontWeight: 900,
                marginBottom: '16px',
                lineHeight: 1
              }}>
                XX
              </div>
              <div style={{
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                opacity: 0.8
              }}>
                COMPLETED PROJECTS
              </div>
            </motion.div>

            {/* Wide Project - Spans 4 columns */}
            <motion.div
              variants={cardVariant}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                gridColumn: 'span 4',
                background: '#FFF',
                border: '2px solid #E5E7EB',
                overflow: 'hidden',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#DC2626'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E5E7EB'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{
                height: '200px',
                background: '#E5E7EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: '2px solid #E5E7EB'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#64748B',
                    letterSpacing: '0.1em'
                  }}>
                    [ PROJECT ]
                  </div>
                </div>
              </div>
              <div style={{ padding: '28px' }}>
                <div style={{
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontSize: '10px',
                  fontWeight: 700,
                  color: '#DC2626',
                  letterSpacing: '0.12em',
                  marginBottom: '10px'
                }}>
                  CRYOGENIC SYSTEMS
                </div>
                <h3 style={{
                  fontFamily: 'Archivo, sans-serif',
                  fontSize: '20px',
                  fontWeight: 900,
                  marginBottom: '10px',
                  lineHeight: 1.2,
                  color: '#0F172A'
                }}>
                  LNG Transfer Line Fabrication
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#64748B',
                  lineHeight: 1.6
                }}>
                  Custom vacuum-insulated transfer lines for LNG terminal operations.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ textAlign: 'center' }}
          >
            <a href="/projects" className="btn btn-primary">
              View Full Portfolio <I.Arrow className="arrow" />
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* SAFETY - Dark Background */}
      <motion.section 
        id="safety" 
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
        style={{ background: '#0F172A', color: '#FFF' }}
      >
        <div className="wrap">
          <div className="sec-head">
            <div>
              <h2 style={{ color: '#FFF' }}>Safety First, <span style={{ color: '#DC2626' }}>Always</span></h2>
            </div>
            <p className="sec-intro" style={{ color: '#94A3B8' }}>
              Zero compromise on safety. Certifications, training, and a track record that speaks for itself.
            </p>
          </div>
          <div className="sft-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="sft-stmt">
                <div className="lg" style={{ color: '#FFF' }}>2.4 Million Safe Manhours Without Lost-Time Incident</div>
                <p style={{ color: '#94A3B8' }}>
                  Our safety culture is built on accountability, training, and frontline ownership. Every technician, every engineer, every supervisor — empowered to stop work if conditions aren't right.
                </p>
                <p style={{ color: '#94A3B8' }}>
                  From daily toolbox talks to advanced HAZOP reviews, safety is integrated into project planning, execution, and closeout.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="cert-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                {[
                  { mark: "Q", issuer: "SAC-SINGLAS", title: "ISO 9001:2015", sub: "Quality Management" },
                  { mark: "O", issuer: "SAC-SINGLAS", title: "ISO 45001", sub: "OH&S Management" },
                  { mark: "★", issuer: "WSH COUNCIL", title: "bizSAFE STAR", sub: "Workplace Safety" },
                ].map((cert, i) => (
                  <div className="cert" key={i} style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '2px solid rgba(255,255,255,0.1)'
                  }}>
                    <div className="cert-top">
                      <div className="cert-mark" style={{ color: '#DC2626' }}>{cert.mark}</div>
                      <div className="cert-issuer" style={{ color: '#94A3B8' }}>{cert.issuer}</div>
                    </div>
                    <div>
                      <h4 style={{ color: '#FFF' }}>{cert.title}</h4>
                      <div className="sub" style={{ color: '#94A3B8' }}>{cert.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ textAlign: 'center', marginTop: '24px' }}
              >
                <a href="/safety" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '18px 40px',
                  background: '#DC2626',
                  color: '#FFF',
                  border: '2px solid #DC2626',
                  fontFamily: 'Archivo, sans-serif',
                  fontWeight: 700,
                  fontSize: '15px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#FFF'
                  e.target.style.color = '#DC2626'
                  e.target.style.borderColor = '#FFF'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#DC2626'
                  e.target.style.color = '#FFF'
                  e.target.style.borderColor = '#DC2626'
                }}>
                  See More <I.Arrow />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CONTACT - White Background */}
      <motion.section 
        id="contact" 
        className="section" 
        style={{ paddingTop: 120, paddingBottom: 120, background: '#FFF' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <div className="wrap">
          <div className="ct-split">
            <div className="ct-left">
              <h2>Ready to Discuss <span style={{ color: '#DC2626' }}>Your Project?</span></h2>
              <p className="sub">
                Whether you're scoping a new plant, planning a turnaround, or recertifying a fleet —
                talk to a project engineer, not a sales rep.
              </p>
              <div className="ct-details">
                <div className="ct-detail"><span className="l">Office</span><span className="v">LS Lee Engineering Pte. Ltd.<br/>Singapore</span></div>
                <div className="ct-detail"><span className="l">Phone</span><span className="v mono">+65 6XXX XXXX</span></div>
                <div className="ct-detail"><span className="l">Email</span><span className="v mono">projects@lslee.com.sg</span></div>
                <div className="ct-detail"><span className="l">Hours</span><span className="v">Mon–Fri · 08:30 – 18:00 SGT<br/>24/7 plant-response on contract</span></div>
                <div className="ct-detail" style={{ borderBottom: "none" }}><span className="l">Response</span><span className="v">Within 1 business day</span></div>
              </div>
            </div>
            <div className="ct-right">
              {!submitted ? (
                <>
                  <h3>Start a project enquiry</h3>
                  <div className="form-sub">[ FORM / SECURE TRANSMISSION ]</div>
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="form-row two">
                      <div className={`form-field ${errors.name ? "error" : ""}`}>
                        <label>Full Name *</label>
                        <input type="text" value={formData.name} onChange={handleChange("name")} placeholder="Jane Tan" />
                        {errors.name && <div className="err">⚠ {errors.name}</div>}
                      </div>
                      <div className={`form-field ${errors.company ? "error" : ""}`}>
                        <label>Company *</label>
                        <input type="text" value={formData.company} onChange={handleChange("company")} placeholder="Operator name" />
                        {errors.company && <div className="err">⚠ {errors.company}</div>}
                      </div>
                    </div>
                    <div className="form-row two">
                      <div className={`form-field ${errors.email ? "error" : ""}`}>
                        <label>Work Email *</label>
                        <input type="email" value={formData.email} onChange={handleChange("email")} placeholder="jane@operator.com" />
                        {errors.email && <div className="err">⚠ {errors.email}</div>}
                      </div>
                      <div className="form-field">
                        <label>Phone</label>
                        <input type="tel" value={formData.phone} onChange={handleChange("phone")} placeholder="+65 …" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className={`form-field ${errors.scope ? "error" : ""}`}>
                        <label>Scope of Enquiry *</label>
                        <select value={formData.scope} onChange={handleChange("scope")}>
                          <option value="">Select a scope</option>
                          <option value="project-engineering">Project Engineering Services</option>
                          <option value="plant-maintenance">Plant Maintenance &amp; Servicing</option>
                          <option value="hydrogen-trailer">Hydrogen / Tube Trailer Testing</option>
                          <option value="cryogenic-hose">Cryogenic Hose Fabrication</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.scope && <div className="err">⚠ {errors.scope}</div>}
                      </div>
                    </div>
                    <div className="form-row">
                      <div className={`form-field ${errors.message ? "error" : ""}`}>
                        <label>Project Notes *</label>
                        <textarea value={formData.message} onChange={handleChange("message")} placeholder="Site, timeline, scope, constraints…" />
                        {errors.message && <div className="err">⚠ {errors.message}</div>}
                      </div>
                    </div>
                    <button type="submit" className="form-submit">
                      Send Enquiry <I.Arrow style={{ stroke: "currentColor" }} />
                    </button>
                  </form>
                </>
              ) : (
                <div className="form-success">
                  <div className="check"><I.Check /></div>
                  <h3 style={{ marginBottom: 8 }}>Enquiry received.</h3>
                  <p className="mono" style={{ fontSize: 12, letterSpacing: "0.1em", marginBottom: 16, opacity: 0.7 }}>REF · LSL-{Date.now().toString().slice(-6)}</p>
                  <p style={{ fontSize: 14, opacity: 0.9 }}>
                    A project engineer will respond within one business day.
                  </p>
                  <button onClick={() => { setSubmitted(false); setFormData({ name: "", company: "", email: "", phone: "", scope: "", message: "" }); }} style={{ marginTop: 24, background: "transparent", color: "white", border: "2px solid white", padding: "10px 18px", fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer" }}>
                    Send Another
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
