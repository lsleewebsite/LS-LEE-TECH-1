import React, { useState } from 'react'
import { motion } from 'framer-motion'

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

const Icon = {
  Blueprint: () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  ),
  Wrench: () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  Check: () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Settings: () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v6m0 6v6m9.22-9.22l-4.24 4.24m-5.96 0L6.78 9.78m12.44 0l-4.24 4.24m-5.96 0L6.78 14.22" />
    </svg>
  ),
  Tool: () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  Book: () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  )
}

export default function Services() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'Engineering', 'Fabrication', 'Installation', 'Testing', 'Maintenance', 'Consulting']

  const services = [
    {
      id: 1,
      title: 'Process Design & Engineering',
      category: 'Engineering',
      icon: <Icon.Blueprint />,
      description: 'Complete engineering scope from concept to detailed design for gas and process systems.',
      offerings: [
        'P&ID development',
        'Equipment specifications',
        'Piping design and routing',
        'Stress analysis',
        'HAZOP studies',
        '3D modeling and clash detection'
      ],
      industries: ['Semiconductor', 'Industrial Gas', 'Hydrogen']
    },
    {
      id: 2,
      title: 'Gas Panel & VMB Fabrication',
      category: 'Fabrication',
      icon: <Icon.Tool />,
      description: 'Custom fabrication of gas panels, valve manifold boxes, and specialty equipment in our workshop.',
      offerings: [
        'UHP gas panels',
        'VMB assemblies',
        'Custom manifolds',
        'Pressure vessels',
        'Specialty brackets and supports',
        'Clean room compatible fabrication'
      ],
      industries: ['Semiconductor', 'Data Center']
    },
    {
      id: 3,
      title: 'Mechanical Installation',
      category: 'Installation',
      icon: <Icon.Wrench />,
      description: 'Full-scope mechanical installation services including piping, equipment, and system integration.',
      offerings: [
        'Process piping installation',
        'Equipment setting and alignment',
        'Tool hook-up',
        'Utility connections',
        'Clean room installations',
        'Cryogenic systems'
      ],
      industries: ['Semiconductor', 'Industrial Gas', 'Data Center']
    },
    {
      id: 4,
      title: 'Pressure Testing & Qualification',
      category: 'Testing',
      icon: <Icon.Check />,
      description: 'Comprehensive testing services to verify system integrity and performance.',
      offerings: [
        'Hydrostatic testing',
        'Pneumatic testing',
        'Leak testing',
        'Helium leak detection',
        'Particle count testing',
        'Flow verification'
      ],
      industries: ['Semiconductor', 'Industrial Gas', 'Hydrogen']
    },
    {
      id: 5,
      title: 'Tube Trailer & Cylinder Testing',
      category: 'Testing',
      icon: <Icon.Check />,
      description: 'DOT and ISO certification services for hydrogen and gas storage equipment.',
      offerings: [
        'DOT tube trailer recertification',
        'ISO cylinder testing',
        'Hydrostatic testing',
        'Ultrasonic inspection',
        'Visual inspection',
        'Documentation and certification'
      ],
      industries: ['Hydrogen']
    },
    {
      id: 6,
      title: 'Preventive Maintenance Programs',
      category: 'Maintenance',
      icon: <Icon.Settings />,
      description: 'Scheduled maintenance services to maximize uptime and system reliability.',
      offerings: [
        'Equipment inspection',
        'Filter replacement',
        'Valve maintenance',
        'System performance checks',
        'Preventive parts replacement',
        'Maintenance documentation'
      ],
      industries: ['Semiconductor', 'Industrial Gas', 'Data Center']
    },
    {
      id: 7,
      title: 'Emergency Repair & Troubleshooting',
      category: 'Maintenance',
      icon: <Icon.Wrench />,
      description: '24/7 emergency response for critical system failures and urgent repairs.',
      offerings: [
        'Emergency leak repair',
        'Component replacement',
        'System troubleshooting',
        'Temporary bypass solutions',
        'Rapid mobilization',
        'Root cause analysis'
      ],
      industries: ['Semiconductor', 'Industrial Gas']
    },
    {
      id: 8,
      title: 'Commissioning & Startup',
      category: 'Testing',
      icon: <Icon.Check />,
      description: 'Complete commissioning services from initial startup through performance verification.',
      offerings: [
        'Pre-commissioning activities',
        'System startup',
        'Performance testing',
        'Process qualification',
        'Documentation package',
        'Training and handover'
      ],
      industries: ['Semiconductor', 'Industrial Gas', 'Data Center']
    },
    {
      id: 9,
      title: 'Technical Consulting',
      category: 'Consulting',
      icon: <Icon.Book />,
      description: 'Expert consulting services for gas system planning, optimization, and troubleshooting.',
      offerings: [
        'System audits',
        'Upgrade planning',
        'Code compliance review',
        'Safety assessments',
        'Capacity studies',
        'Technology selection'
      ],
      industries: ['Semiconductor', 'Industrial Gas', 'Hydrogen']
    },
    {
      id: 10,
      title: 'Welding & Orbital Welding',
      category: 'Fabrication',
      icon: <Icon.Tool />,
      description: 'ASME-certified welding services including specialty alloys and orbital welding.',
      offerings: [
        'Orbital tube welding',
        'TIG welding',
        'Specialty alloy welding (316L, Inconel)',
        'Weld inspection and documentation',
        'Certified welders',
        'Clean room welding procedures'
      ],
      industries: ['Semiconductor', 'Industrial Gas']
    },
    {
      id: 11,
      title: 'Pipeline Design & Installation',
      category: 'Installation',
      icon: <Icon.Wrench />,
      description: 'Complete pipeline engineering and installation for high-pressure gas distribution.',
      offerings: [
        'Route surveys',
        'Pipeline design',
        'High-pressure installation',
        'Cathodic protection',
        'Tie-ins and modifications',
        'As-built documentation'
      ],
      industries: ['Hydrogen', 'Data Center', 'Industrial Gas']
    },
    {
      id: 12,
      title: 'Training & Documentation',
      category: 'Consulting',
      icon: <Icon.Book />,
      description: 'Comprehensive training programs and documentation services.',
      offerings: [
        'Operator training',
        'Maintenance training',
        'Safety training',
        'O&M manual development',
        'As-built drawings',
        'Compliance documentation'
      ],
      industries: ['Semiconductor', 'Industrial Gas', 'Hydrogen']
    }
  ]

  const filteredServices = activeFilter === 'All' 
    ? services 
    : services.filter(s => s.category === activeFilter)

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
              Our <span style={{ color: '#DC2626' }}>Services</span>
            </h1>
            <p style={{
              fontSize: '20px',
              color: '#94A3B8',
              maxWidth: '800px',
              lineHeight: 1.7
            }}>
              Comprehensive mechanical engineering services from design through maintenance for critical gas and process systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section style={{
        padding: '60px 32px',
        background: '#FFF',
        borderBottom: '2px solid #E5E7EB',
        position: 'sticky',
        top: '110px',
        zIndex: 30
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  padding: '14px 32px',
                  background: activeFilter === filter ? '#DC2626' : '#FFF',
                  color: activeFilter === filter ? '#FFF' : '#0F172A',
                  border: `2px solid ${activeFilter === filter ? '#DC2626' : '#0F172A'}`,
                  fontWeight: 700,
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  fontFamily: 'IBM Plex Sans, sans-serif'
                }}
                onMouseEnter={(e) => {
                  if (activeFilter !== filter) {
                    e.target.style.background = '#0F172A'
                    e.target.style.color = '#FFF'
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== filter) {
                    e.target.style.background = '#FFF'
                    e.target.style.color = '#0F172A'
                  }
                }}
              >
                {filter}
              </button>
            ))}
          </div>
          
          <div style={{
            textAlign: 'center',
            marginTop: '24px',
            fontSize: '14px',
            color: '#64748B',
            fontFamily: 'IBM Plex Mono',
            letterSpacing: '0.05em'
          }}>
            Showing {filteredServices.length} {filteredServices.length === 1 ? 'service' : 'services'}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        style={{
          padding: '100px 32px',
          background: '#F8F9FA'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '32px'
          }}>
            {filteredServices.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{
                  background: '#FFF',
                  border: '2px solid #0F172A',
                  padding: '40px',
                  transition: 'all 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#DC2626'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#0F172A'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Icon & Category */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'start',
                  marginBottom: '24px'
                }}>
                  <div style={{ color: '#DC2626' }}>
                    {service.icon}
                  </div>
                  <div style={{
                    padding: '4px 12px',
                    background: '#0F172A',
                    color: '#FFF',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    fontFamily: 'IBM Plex Mono'
                  }}>
                    {service.category.toUpperCase()}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: 900,
                  marginBottom: '12px',
                  lineHeight: 1.2,
                  fontFamily: 'Archivo',
                  color: '#0F172A'
                }}>
                  {service.title}
                </h3>

                <p style={{
                  fontSize: '15px',
                  color: '#64748B',
                  lineHeight: 1.7,
                  marginBottom: '24px'
                }}>
                  {service.description}
                </p>

                {/* Offerings */}
                <div style={{
                  borderTop: '2px solid #E5E7EB',
                  paddingTop: '20px',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#0F172A',
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontFamily: 'IBM Plex Sans'
                  }}>
                    Key Offerings
                  </div>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'grid',
                    gap: '8px'
                  }}>
                    {service.offerings.slice(0, 4).map((offering, j) => (
                      <li key={j} style={{
                        fontSize: '13px',
                        color: '#475569',
                        paddingLeft: '16px',
                        position: 'relative',
                        lineHeight: 1.5
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '0',
                          color: '#DC2626',
                          fontWeight: 900
                        }}>•</span>
                        {offering}
                      </li>
                    ))}
                    {service.offerings.length > 4 && (
                      <li style={{
                        fontSize: '12px',
                        color: '#94A3B8',
                        paddingLeft: '16px',
                        fontStyle: 'italic'
                      }}>
                        +{service.offerings.length - 4} more...
                      </li>
                    )}
                  </ul>
                </div>

                {/* Industries Tags */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px'
                }}>
                  {service.industries.map((industry, j) => (
                    <span
                      key={j}
                      style={{
                        padding: '4px 10px',
                        background: '#F8F9FA',
                        border: '1px solid #E5E7EB',
                        fontSize: '10px',
                        color: '#64748B',
                        fontFamily: 'IBM Plex Mono',
                        letterSpacing: '0.02em'
                      }}
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

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
            fontFamily: 'Archivo'
          }}>
            Need a Custom Solution?
          </h2>
          <p style={{
            fontSize: '18px',
            marginBottom: '40px',
            opacity: 0.95,
            lineHeight: 1.7
          }}>
            Every project is different. Let's discuss your specific requirements and how we can help.
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
            fontFamily: 'IBM Plex Sans'
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
