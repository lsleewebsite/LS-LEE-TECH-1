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

      {/* Services Sections */}
      {services.map((service, index) => (
        <motion.section
          key={service.id}
          id={service.id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          style={{
            background: index % 2 === 0 ? '#FFF' : '#F8F9FA',
            borderBottom: '2px solid #0F172A'
          }}
        >
          <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 0
            }}>
              
              {/* Image Section */}
              <div 
                style={{
                  background: '#E5E7EB',
                  minHeight: '400px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRight: '2px solid #0F172A',
                  padding: '40px',
                  order: index % 2 === 0 ? 1 : 2
                }}
              >
                <div style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#DC2626',
                  marginBottom: '60px',
                  textTransform: 'uppercase',
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
                    1000 × 750px
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div style={{
                padding: '50px 45px',
                order: index % 2 === 0 ? 2 : 1
              }}>
                
                {/* Number Badge */}
                <div style={{
                  display: 'inline-block',
                  padding: '10px 24px',
                  background: '#0F172A',
                  color: '#FFF',
                  fontSize: '15px',
                  fontWeight: 900,
                  letterSpacing: '0.1em',
                  marginBottom: '24px'
                }}>
                  {service.num}
                </div>

                {/* Title */}
                <h2 style={{
                  fontSize: '44px',
                  fontWeight: 900,
                  marginBottom: '14px',
                  lineHeight: 1.1,
                  color: '#0F172A'
                }}>
                  {service.title}
                </h2>

                {/* Tagline */}
                <div style={{
                  fontSize: '16px',
                  color: '#DC2626',
                  fontWeight: 700,
                  marginBottom: '24px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {service.tagline}
                </div>

                {/* Description */}
                <p style={{
                  fontSize: '16px',
                  color: '#64748B',
                  lineHeight: 1.7,
                  marginBottom: '32px'
                }}>
                  {service.description}
                </p>

                {/* Capabilities */}
                <div style={{
                  marginBottom: '36px'
                }}>
                  <h3 style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#0F172A',
                    marginBottom: '18px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em'
                  }}>
                    Key Capabilities
                  </h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '12px'
                  }}>
                    {service.capabilities.map((cap, i) => (
                      <div
                        key={i}
                        style={{
                          fontSize: '14px',
                          color: '#0F172A',
                          paddingLeft: '18px',
                          position: 'relative',
                          lineHeight: 1.6
                        }}
                      >
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          color: '#DC2626',
                          fontWeight: 700
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
                    display: 'inline-block',
                    padding: '16px 32px',
                    background: 'transparent',
                    color: '#0F172A',
                    border: '2px solid #0F172A',
                    fontWeight: 700,
                    fontSize: '14px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
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
                  View Related Projects →
                </a>
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
