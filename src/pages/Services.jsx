import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

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

export default function Services() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          const yOffset = -120
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      }, 100)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  const services = [
    {
      id: 'project-engineering',
      num: '01',
      title: 'Project Engineering',
      tagline: 'Turnkey Mechanical Construction',
      description: 'Complete project lifecycle management from engineering through commissioning. Gas plant equipment erection, underground piping, steel structure fabrication, and metering skid station construction.',
      capabilities: [
        'Detailed Engineering & 3D Modeling',
        'Certified Welding & Fabrication Shop',
        'Underground Piping Installation',
        'Steel Structure Design & Erection',
        'Gas Metering Skid Fabrication',
        'Equipment Installation & Commissioning'
      ]
    },
    {
      id: 'plant-maintenance',
      num: '02',
      title: 'Plant Maintenance',
      tagline: '24/7 Operations Support',
      description: 'Comprehensive maintenance programs to maximize uptime and asset life. Routine servicing, shutdown coordination, emergency response, and long-term maintenance contracts.',
      capabilities: [
        'Preventive Maintenance Programs',
        'Shutdown & Turnaround Planning',
        'Emergency Repair Response',
        'Rotating Equipment Overhaul',
        'Pipeline Inspection & Repair',
        'Valve Testing & Certification'
      ]
    },
    {
      id: 'hydrogen-testing',
      num: '03',
      title: 'Hydrogen Trailer Testing',
      tagline: 'DOT/ISO Certification & Fleet Management',
      description: 'Specialized testing and certification for hydrogen tube trailers. Hydrostatic testing, DOT/ISO recertification, valve servicing, and comprehensive fleet management programs.',
      capabilities: [
        'Hydrostatic Pressure Testing',
        'DOT and ISO Recertification',
        'Valve & Manifold Servicing',
        'Tube Bundle Inspection',
        'Leak Testing (Helium & Pressure)',
        'Fleet Management Programs'
      ]
    },
    {
      id: 'cryogenic-systems',
      num: '04',
      title: 'Cryogenic Systems',
      tagline: 'Vacuum-Insulated Transfer Equipment',
      description: 'Custom fabrication and maintenance for cryogenic applications. Vacuum-insulated hose assemblies and transfer lines for LIN, LOX, LAR, and LNG service with full certification.',
      capabilities: [
        'Custom Hose Assembly Fabrication',
        'Vacuum-Insulated Transfer Lines',
        'End Fitting Installation & Testing',
        'Hose Repair & Recertification',
        'Leak Detection & Repair',
        'Emergency Replacement Service'
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
            Engineering Services
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
            Four integrated service lines delivering end-to-end mechanical solutions for Singapore's critical infrastructure.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{
        padding: '80px 32px',
        background: '#F8F9FA'
      }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '32px'
          }}>
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                style={{
                  background: '#FFF',
                  border: '2px solid #0F172A',
                  overflow: 'hidden'
                }}
              >
                {/* Image - Fixed Height */}
                <div style={{
                  height: '280px',
                  background: '#E5E7EB',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '2px solid #0F172A',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    padding: '6px 16px',
                    background: '#DC2626',
                    color: '#FFF',
                    fontSize: '13px',
                    fontWeight: 900,
                    letterSpacing: '0.1em'
                  }}>
                    {service.num}
                  </div>
                  <div style={{
                    textAlign: 'center',
                    color: '#94A3B8'
                  }}>
                    <div style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      marginBottom: '8px'
                    }}>
                      [ Service Image ]
                    </div>
                    <div style={{
                      fontSize: '12px',
                      opacity: 0.6
                    }}>
                      1200 × 800px
                    </div>
                  </div>
                </div>

                {/* Content - Fixed Height */}
                <div style={{
                  height: '380px',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  
                  {/* Title */}
                  <h2 style={{
                    fontSize: '32px',
                    fontWeight: 900,
                    marginBottom: '8px',
                    lineHeight: 1.1,
                    color: '#0F172A'
                  }}>
                    {service.title}
                  </h2>

                  {/* Tagline */}
                  <div style={{
                    fontSize: '13px',
                    color: '#DC2626',
                    fontWeight: 700,
                    marginBottom: '16px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {service.tagline}
                  </div>

                  {/* Description */}
                  <p style={{
                    fontSize: '13px',
                    color: '#64748B',
                    lineHeight: 1.6,
                    marginBottom: '20px'
                  }}>
                    {service.description}
                  </p>

                  {/* Capabilities */}
                  <div style={{
                    marginBottom: '24px',
                    flex: 1
                  }}>
                    <h3 style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#0F172A',
                      marginBottom: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em'
                    }}>
                      Key Capabilities
                    </h3>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '8px'
                    }}>
                      {service.capabilities.map((cap, i) => (
                        <div
                          key={i}
                          style={{
                            fontSize: '11px',
                            color: '#0F172A',
                            paddingLeft: '12px',
                            position: 'relative',
                            lineHeight: 1.5
                          }}
                        >
                          <span style={{
                            position: 'absolute',
                            left: 0,
                            color: '#DC2626',
                            fontWeight: 700,
                            fontSize: '14px'
                          }}>•</span>
                          {cap}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* View Projects Button */}
                  <a 
                    href={`/Projects#${service.id}`}
                    style={{
                      display: 'block',
                      padding: '12px 24px',
                      background: 'transparent',
                      color: '#0F172A',
                      border: '2px solid #0F172A',
                      fontWeight: 700,
                      fontSize: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      textDecoration: 'none',
                      transition: 'all 0.3s',
                      cursor: 'pointer',
                      textAlign: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#DC2626'
                      e.target.style.color = '#FFF'
                      e.target.style.borderColor = '#DC2626'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent'
                      e.target.style.color = '#0F172A'
                      e.target.style.borderColor = '#0F172A'
                    }}
                  >
                    View Related Projects →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
            Need a Scope of Work or Technical Proposal?
          </h2>
          <p style={{
            fontSize: '16px',
            marginBottom: '32px',
            opacity: 0.9
          }}>
            Tell us about your project. We'll put together a detailed scope, schedule, and budget.
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
            Request Proposal →
          </button>
        </div>
      </motion.section>
    </div>
  )
}
