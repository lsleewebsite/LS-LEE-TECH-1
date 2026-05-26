import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

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
  const [activeSection, setActiveSection] = useState('semiconductor')

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
        'Fab upgrades and expansions',
        'Tool installations',
        'Process gas system retrofits',
        'Emergency repairs and troubleshooting'
      ],
      projects: [
        'Multiple 300mm fabs across Singapore',
        'Gas distribution for advanced node processes',
        'VMB installations for specialty gases',
        'Ongoing maintenance contracts with major foundries'
      ]
    },
    {
      id: 'datacenter',
      icon: <Icon.Server />,
      title: 'Data Center',
      tagline: 'High-Pressure Gas Infrastructure for Next-Gen Power',
      description: 'Hydrogen and specialty gas infrastructure for data center fuel cells and emergency power systems. As data centers transition to hydrogen-based backup power, we provide the mechanical systems to make it happen safely.',
      capabilities: [
        'Hydrogen pipeline design and installation',
        'High-pressure gas storage systems',
        'Fuel cell integration',
        'Safety systems and gas detection',
        'Pressure regulation and control',
        'Emergency shutdown systems'
      ],
      applications: [
        'Backup power fuel cell systems',
        'Primary power hydrogen infrastructure',
        'Hybrid power system integration',
        'Emergency power redundancy',
        'Grid-independent installations'
      ],
      projects: [
        'Hydrogen infrastructure for Singapore data centers',
        'Fuel cell integration projects',
        'High-pressure storage installations',
        'Safety system upgrades'
      ]
    },
    {
      id: 'industrial-gas',
      icon: <Icon.Plant />,
      title: 'Industrial Gas & Process',
      tagline: 'Complete Mechanical Scope for Process Plants',
      description: 'Full-scope mechanical work for air separation units, specialty gas production facilities, and process plants. From new construction to turnarounds, we handle the piping, equipment, and systems that make industrial gas plants run.',
      capabilities: [
        'Cryogenic piping systems',
        'ASU mechanical installations',
        'Process equipment installation',
        'Plant turnarounds and shutdowns',
        'Piping stress analysis and design',
        'Pressure vessel installation'
      ],
      applications: [
        'Air separation plants',
        'Specialty gas production',
        'Cryogenic storage facilities',
        'Gas filling plants',
        'Process plant expansions'
      ],
      projects: [
        'Major ASU installations in Jurong Island',
        'Specialty gas plant construction',
        'Plant turnaround projects',
        'Cryogenic system retrofits'
      ]
    },
    {
      id: 'hydrogen',
      icon: <Icon.H2 />,
      title: 'New Energy / Hydrogen',
      tagline: 'Testing, Certification & Infrastructure for H₂ Economy',
      description: 'Hydrogen tube trailer testing, DOT/ISO recertification, and emerging hydrogen infrastructure. We operate Singapore\'s dedicated hydrogen testing facility and are expanding into hydrogen production and distribution systems.',
      capabilities: [
        'DOT/ISO tube trailer testing',
        'Cylinder recertification',
        'Hydrostatic and pneumatic testing',
        'NDT and ultrasonic inspection',
        'Hydrogen pipeline construction',
        'Production facility integration'
      ],
      applications: [
        'Tube trailer fleet management',
        'Cylinder testing and certification',
        'Hydrogen refueling infrastructure',
        'Green hydrogen production facilities',
        'Industrial hydrogen distribution'
      ],
      projects: [
        'Singapore\'s first dedicated H₂ testing facility',
        'Ongoing tube trailer recertification',
        'Hydrogen infrastructure for industrial clients',
        'Fleet testing and management services'
      ]
    }
  ]

  // Scroll tracking for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = industries.map(ind => ({
        id: ind.id,
        element: document.getElementById(ind.id)
      })).filter(s => s.element)

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        const rect = section.element.getBoundingClientRect()
        if (rect.top <= 300) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll to section on load if hash is present
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

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        padding: '100px 32px 80px',
        background: '#0F172A',
        color: '#FFF',
        borderBottom: '2px solid #DC2626'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={{
              fontSize: '56px',
              fontWeight: 900,
              marginBottom: '28px',
              lineHeight: 1.1,
              fontFamily: 'Archivo, sans-serif'
            }}>
              Industries We <span style={{ color: '#DC2626' }}>Serve</span>
            </h1>
            <p style={{
              fontSize: '20px',
              color: '#94A3B8',
              maxWidth: '800px',
              lineHeight: 1.7
            }}>
              Specialized mechanical engineering for critical gas and process systems across semiconductor, data center, industrial, and hydrogen sectors.
            </p>
          </motion.div>
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
          gap: '12px',
          position: 'relative'
        }}>
          {industries.map((industry) => (
            <a
              key={industry.id}
              href={`#${industry.id}`}
              style={{
                padding: '24px 40px',
                fontSize: '16px',
                fontWeight: 600,
                color: activeSection === industry.id ? '#DC2626' : '#0F172A',
                textDecoration: 'none',
                transition: 'all 0.2s',
                fontFamily: 'IBM Plex Sans, system-ui, sans-serif',
                letterSpacing: '0.08em',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#DC2626'
              }}
              onMouseLeave={(e) => {
                e.target.style.color = activeSection === industry.id ? '#DC2626' : '#0F172A'
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
              
              {/* Active Indicator Bar */}
              {activeSection === industry.id && (
                <motion.div
                  layoutId="activeIndicator"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: '#DC2626'
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30
                  }}
                />
              )}
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
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          style={{
            padding: '100px 32px',
            background: index % 2 === 0 ? '#FFF' : '#F8F9FA'
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {/* Rest of the industry section content remains the same */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '120px 1fr',
              gap: '40px',
              marginBottom: '48px',
              alignItems: 'start'
            }}>
              <div style={{ color: '#DC2626' }}>
                {industry.icon}
              </div>
              <div>
                <div style={{
                  display: 'inline-block',
                  padding: '6px 16px',
                  background: '#DC2626',
                  color: '#FFF',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  marginBottom: '20px',
                  fontFamily: 'IBM Plex Mono, monospace'
                }}>
                  {industry.title.toUpperCase()}
                </div>
                <h2 style={{
                  fontSize: '42px',
                  fontWeight: 900,
                  marginBottom: '16px',
                  lineHeight: 1.1,
                  fontFamily: 'Archivo, sans-serif'
                }}>
                  {industry.tagline}
                </h2>
                <p style={{
                  fontSize: '18px',
                  color: '#475569',
                  lineHeight: 1.7,
                  maxWidth: '900px'
                }}>
                  {industry.description}
                </p>
              </div>
            </div>

            {/* Content Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '32px'
            }}>
              {/* Capabilities */}
              <div style={{
                padding: '40px',
                background: index % 2 === 0 ? '#F8F9FA' : '#FFF',
                border: '2px solid #E5E7EB'
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 900,
                  marginBottom: '24px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  fontFamily: 'Archivo, sans-serif'
                }}>
                  Core Capabilities
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {industry.capabilities.map((cap, i) => (
                    <li key={i} style={{
                      display: 'flex',
                      gap: '12px',
                      marginBottom: '12px',
                      fontSize: '14px',
                      color: '#475569',
                      lineHeight: 1.6
                    }}>
                      <span style={{ color: '#DC2626', flexShrink: 0, marginTop: '2px' }}>
                        <Icon.Check />
                      </span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div style={{
                padding: '40px',
                background: index % 2 === 0 ? '#F8F9FA' : '#FFF',
                border: '2px solid #E5E7EB'
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 900,
                  marginBottom: '24px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  fontFamily: 'Archivo, sans-serif'
                }}>
                  Applications
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {industry.applications.map((app, i) => (
                    <li key={i} style={{
                      display: 'flex',
                      gap: '12px',
                      marginBottom: '12px',
                      fontSize: '14px',
                      color: '#475569',
                      lineHeight: 1.6
                    }}>
                      <span style={{ color: '#DC2626', flexShrink: 0, marginTop: '2px' }}>
                        <Icon.Check />
                      </span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Projects */}
              <div style={{
                padding: '40px',
                background: index % 2 === 0 ? '#F8F9FA' : '#FFF',
                border: '2px solid #E5E7EB'
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 900,
                  marginBottom: '24px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  fontFamily: 'Archivo, sans-serif'
                }}>
                  Representative Projects
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {industry.projects.map((proj, i) => (
                    <li key={i} style={{
                      display: 'flex',
                      gap: '12px',
                      marginBottom: '12px',
                      fontSize: '14px',
                      color: '#475569',
                      lineHeight: 1.6
                    }}>
                      <span style={{ color: '#DC2626', flexShrink: 0, marginTop: '2px' }}>
                        <Icon.Check />
                      </span>
                      <span>{proj}</span>
                    </li>
                  ))}
                </ul>
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
          padding: '100px 32px',
          background: '#DC2626',
          color: '#FFF',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: 900,
            marginBottom: '24px',
            lineHeight: 1.2,
            fontFamily: 'Archivo, sans-serif'
          }}>
            Ready to Discuss Your Project?
          </h2>
          <p style={{
            fontSize: '18px',
            marginBottom: '40px',
            opacity: 0.95,
            lineHeight: 1.7
          }}>
            Whether you're planning a new installation, expansion, or need ongoing support, we're here to help.
          </p>
          <a href="/Contact" style={{
            display: 'inline-block',
            padding: '18px 40px',
            background: '#FFF',
            color: '#DC2626',
            border: '2px solid #FFF',
            fontWeight: 700,
            fontSize: '15px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s',
            fontFamily: 'IBM Plex Sans, sans-serif'
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
            Get in Touch →
          </a>
        </div>
      </motion.section>
    </div>
  )
}
