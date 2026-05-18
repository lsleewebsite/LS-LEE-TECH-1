import React from 'react'
import { motion } from 'framer-motion'

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
  hidden: { opacity: 0, y: 40 },
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

export default function Industries() {
  const industries = [
    {
      id: 'semiconductor',
      icon: <Icon.Chip />,
      title: 'Semiconductor',
      tagline: 'Ultra-High-Purity Gas Systems for Wafer Fabrication',
      description: 'Gas process plant construction, integration and maintenance for semiconductor manufacturing facilities. We design, build, and maintain the critical gas delivery infrastructure that keeps your fab running.',
      capabilities: [
        'UHP gas distribution piping',
        'Tool hook-up and integration',
        'Gas panel fabrication and installation',
        'VMB and gas cabinet systems',
        'Leak testing and qualification',
        'Preventive maintenance programs'
      ],
      applications: [
        'New fab construction',
        'Capacity expansion projects',
        'Process tool installations',
        'Gas system upgrades',
        'Preventive maintenance'
      ]
    },
    {
      id: 'datacenter',
      icon: <Icon.Server />,
      title: 'Data Center',
      tagline: 'Hydrogen Infrastructure for Next-Gen Power Systems',
      description: 'Hydrogen pipeline infrastructure and gas systems support for data centre energy requirements. As data centers transition to hydrogen fuel cells for backup power, we deliver the mechanical infrastructure to make it work.',
      capabilities: [
        'Hydrogen pipeline design and installation',
        'Fuel cell integration support',
        'Safety system installation',
        'Leak detection systems',
        'Emergency shutdown integration',
        'Compliance and certification'
      ],
      applications: [
        'Hydrogen fuel cell backup systems',
        'Pipeline infrastructure',
        'Storage system integration',
        'Safety system installation',
        'Regulatory compliance support'
      ]
    },
    {
      id: 'industrial-gas',
      icon: <Icon.Plant />,
      title: 'Industrial Gas & Process',
      tagline: 'Turnkey Engineering for Gas and Process Plants',
      description: 'Turnkey project engineering, plant integration and maintenance for gas and process plants. From air separation units to specialty gas production, we handle the full project lifecycle.',
      capabilities: [
        'Turnkey plant construction',
        'Process piping installation',
        'Equipment installation and tie-in',
        'Shutdown and turnaround support',
        'Plant maintenance contracts',
        'Emergency response services'
      ],
      applications: [
        'Air separation units (ASU)',
        'Specialty gas production',
        'Chemical process plants',
        'Plant expansions',
        'Turnaround projects',
        'Long-term maintenance'
      ]
    },
    {
      id: 'hydrogen',
      icon: <Icon.H2 />,
      title: 'New Energy / Hydrogen',
      tagline: 'Tube Trailer Testing and Hydrogen Infrastructure',
      description: 'Hydrogen trailer testing, servicing, refurbishment and certification support. As the hydrogen economy scales, we provide the testing, certification, and maintenance services to keep tube trailers and transport systems operational.',
      capabilities: [
        'Hydrostatic and pneumatic testing',
        'DOT and ISO recertification',
        'Valve and manifold servicing',
        'Tube bundle refurbishment',
        'Leak testing and repair',
        'Fleet management support'
      ],
      applications: [
        'Tube trailer certification',
        'Fleet testing programs',
        'Emergency repairs',
        'Refurbishment projects',
        'Hydrogen infrastructure support',
        'Transport system maintenance'
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

      {/* Industries Detail Sections */}
      {industries.map((industry, index) => (
        <motion.section
          key={industry.id}
          id={industry.id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
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
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
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
              </motion.div>

              {/* Right Column - Details */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  display: 'grid',
                  gap: '32px'
                }}
              >
                {/* Capabilities */}
                <div style={{
                  padding: '40px',
                  background: '#FFF',
                  border: '2px solid #0F172A'
                }}>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    marginBottom: '24px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Our Capabilities
                  </h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '16px'
                  }}>
                    {industry.capabilities.map((cap, i) => (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'start',
                          gap: '12px',
                          fontSize: '14px',
                          color: '#0F172A'
                        }}
                      >
                        <div style={{ color: '#DC2626', marginTop: '2px' }}>
                          <Icon.Check />
                        </div>
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div style={{
                  padding: '40px',
                  background: '#0F172A',
                  color: '#FFF'
                }}>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    marginBottom: '24px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Typical Applications
                  </h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '16px'
                  }}>
                    {industry.applications.map((app, i) => (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'start',
                          gap: '12px',
                          fontSize: '14px'
                        }}
                      >
                        <div style={{ color: '#DC2626', marginTop: '2px' }}>
                          <Icon.Check />
                        </div>
                        <span>{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      ))}

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
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
            Ready to Discuss Your Industry-Specific Requirements?
          </h2>
          <p style={{
            fontSize: '16px',
            marginBottom: '32px',
            opacity: 0.9
          }}>
            Talk to an engineer who understands your vertical. No sales pitch — just technical expertise.
          </p>
          <button style={{
            padding: '16px 36px',
            background: '#FFF',
            color: '#DC2626',
            border: '2px solid #FFF',
            fontWeight: 700,
            fontSize: '15px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#0F172A'
            e.target.style.color = '#FFF'
            e.target.style.borderColor = '#0F172A'
          }}
          onMouseLeave={(e) => {
            e.target.style.background = '#FFF'
            e.target.style.color = '#DC2626'
            e.target.style.borderColor = '#FFF'
          }}>
            Contact Our Team →
          </button>
        </div>
      </motion.section>
    </div>
  )
}
