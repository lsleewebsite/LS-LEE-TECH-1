import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLocation, Link } from 'react-router-dom'

// Icon Components
const Icon = {
  Chip: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  ),
  Server: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  Plant: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  ),
  H2: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  ),
  Check: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="3,10 8,15 17,4" />
    </svg>
  )
}

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

export default function Industries() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          const yOffset = -180
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      }, 100)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  const industries = [
    {
      id: 'semiconductor',
      icon: <Icon.Chip />,
      title: 'Semiconductor',
      tagline: 'Ultra-High-Purity Gas Systems for Wafer Fabrication',
      description: 'Construction, Integration and Maintenance of gas process plant for semiconductor manufacturing facilities.',
      capabilities: [
        'Process plant installation',
        'Equipment testing & comissioning',
        'UHP gas distribution piping',
        'Piping certification & Qualification',
        'Structural & Insulation works',
        'Preventive Maintenance'
      ]
    },
    {
      id: 'datacenter',
      icon: <Icon.Server />,
      title: 'Data Centres',
      tagline: 'Hydrogen Infrastructure for Next-Gen Power Systems',
      description: 'Hydrogen infrastructure and gas distribution network for fuel cell systems.',
      capabilities: [
        'Design & Installation of hydrogen pipeline network',
        'Fuel cell integration support',
        'Gas detection and monitoring systems',
        'Flow & Pressure monitoring system',
        'Compliance & certification'
      ]
    },
    {
      id: 'industrial-gas',
      icon: <Icon.Plant />,
      title: 'Industrial Gas',
      tagline: 'Turnkey Engineering for Gas and Process Plants',
      description: 'Turnkey project engineering, plant integration and maintenance for gas and process plants. From air separation units to specialty gas production, we handle the full project lifecycle.',
      capabilities: [
        'HP tube testing & Certification',
        'Shutdown and turnaround support',
        'Preventive Maintenance',
        'Design & Fabrication of metering skids',
        'ISO tube trailer fabrication'
      ]
    },
    {
      id: 'new-energy',
      icon: <Icon.H2 />,
      title: 'New Energy',
      tagline: 'Tube Trailer Testing and Hydrogen Infrastructure',
      description: 'Hydrogen trailer testing, servicing, refurbishment and certification support. As the hydrogen economy scales, we provide the testing, certification, and maintenance services to keep tube trailers and transport systems operational.',
      capabilities: [
        'Hydrostatic and pneumatic testing',
        'DOT and ISO recertification',
        'Valve and manifold servicing',
        'Tube bundle refurbishment',
        'Leak testing and repair',
        'Fleet management support'
      ]
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        padding: '100px 32px 80px',
        background: '#0F172A',
        color: '#FFF',
        borderBottom: '2px solid #DC2626'
      }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto', textAlign: 'center' }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: '56px',
              fontWeight: 900,
              marginBottom: '24px',
              lineHeight: 1.1
            }}
          >
            Industries We Serve
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: '18px',
              color: '#94A3B8',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: 1.6
            }}
          >
            Four high-stakes verticals where uptime, purity, and pressure integrity are non-negotiable.
            We engineer the mechanical infrastructure that keeps them running.
          </motion.p>
        </div>
      </section>

      {/* Sticky Sub-Navigation */}
      <div style={{
        position: 'sticky',
        top: '110px',
        zIndex: 40,
        background: '#FFF',
        borderBottom: '2px solid #0F172A',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
      }}>
        <div style={{
          maxWidth: '1360px',
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          justifyContent: 'center',
          gap: '12px'
        }}>
          {industries.map((industry) => (
            <a
              key={industry.id}
              href={`#${industry.id}`}
              style={{
                padding: '24px 40px',
                fontSize: '16px',
                fontWeight: 600,
                color: '#0F172A',
                textDecoration: 'none',
                borderBottom: '3px solid transparent',
                transition: 'all 0.2s',
                fontFamily: 'IBM Plex Sans, system-ui, sans-serif',
                letterSpacing: '0.08em'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#DC2626'
                e.target.style.borderBottomColor = '#DC2626'
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#0F172A'
                e.target.style.borderBottomColor = 'transparent'
              }}
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById(industry.id)
                if (element) {
                  const yOffset = -180
                  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
                  window.scrollTo({ top: y, behavior: 'smooth' })
                }
              }}
            >
              {industry.title}
            </a>
          ))}
        </div>
      </div>

      {/* Industries Detail Sections */}
      {industries.map((industry, index) => (
        <motion.section
          key={industry.id}
          id={industry.id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          style={{
            padding: '100px 32px',
            background: index % 2 === 0 ? '#FFF' : '#F8F9FA',
            borderBottom: '2px solid #0F172A'
          }}
        >
          <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: '80px',
              alignItems: 'start'
            }}>
              {/* Left Column - Icon & Title */}
              <div>
                <div style={{
                  width: '120px',
                  height: '120px',
                  border: '3px solid #0F172A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '32px',
                  color: '#0F172A'
                }}>
                  {industry.icon}
                </div>
                <h2 style={{
                  fontSize: '42px',
                  fontWeight: 900,
                  marginBottom: '16px',
                  lineHeight: 1.1
                }}>
                  {industry.title}
                </h2>
                <p style={{
                  fontSize: '16px',
                  color: '#DC2626',
                  fontWeight: 600,
                  marginBottom: '24px'
                }}>
                  {industry.tagline}
                </p>
                <p style={{
                  fontSize: '15px',
                  color: '#64748B',
                  lineHeight: 1.7
                }}>
                  {industry.description}
                </p>
              </div>

              {/* Right Column - Capabilities */}
              <div style={{
                display: 'grid',
                gap: '32px'
              }}>
                <div style={{
                  padding: '48px',
                  background: '#0F172A',
                  color: '#FFF'
                }}>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: 900,
                    marginBottom: '32px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: '#FFF'
                  }}>
                    Our Capabilities
                  </h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '24px'
                  }}>
                    {industry.capabilities.map((cap, i) => (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'start',
                          gap: '14px',
                          fontSize: '17px',
                          color: '#FFF',
                          lineHeight: 1.5
                        }}
                      >
                        <div style={{ color: '#DC2626', marginTop: '2px', flexShrink: 0 }}>
                          <Icon.Check />
                        </div>
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* View Projects Button */}
                <Link
                  to={`/Projects?category=${encodeURIComponent(industry.title)}`}
                  style={{
                    display: 'inline-block',
                    padding: '16px 28px',
                    background: 'transparent',
                    color: '#0F172A',
                    border: '2px solid #0F172A',
                    fontWeight: 700,
                    fontSize: '14px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                    textAlign: 'center',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#DC2626'
                    e.target.style.color = '#FFF'
                    e.target.style.borderColor = '#DC2626'
                    e.target.style.transform = 'translateX(4px)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent'
                    e.target.style.color = '#0F172A'
                    e.target.style.borderColor = '#0F172A'
                    e.target.style.transform = 'translateX(0)'
                  }}
                >
                  View {industry.title} Projects →
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      ))}

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        style={{
          padding: '80px 32px',
          background: '#DC2626',
          color: '#FFF',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 800,
            marginBottom: '24px'
          }}>
            Ready to Discuss Your Needs?
          </h2>
          <p style={{
            fontSize: '16px',
            marginBottom: '32px',
            opacity: 0.9
          }}>
          </p>
          <Link
            to="/Contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px 36px',
              background: '#FFF',
              color: '#DC2626',
              border: '2px solid #FFF',
              fontWeight: 700,
              fontSize: '15px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#0F172A'
              e.currentTarget.style.color = '#FFF'
              e.currentTarget.style.borderColor = '#0F172A'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#FFF'
              e.currentTarget.style.color = '#DC2626'
              e.currentTarget.style.borderColor = '#FFF'
            }}
          >
            Contact Our Team
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="0" y1="5" x2="13" y2="5" /><polyline points="9,1 13,5 9,9" />
            </svg>
          </Link>
        </div>
      </motion.section>
    </div>
  )
}
