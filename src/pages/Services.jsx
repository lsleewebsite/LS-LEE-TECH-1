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
      scope: [
        'Detailed Engineering & 3D Modeling',
        'Certified Welding & Fabrication Shop',
        'Underground Piping Installation',
        'Steel Structure Design & Erection',
        'Gas Metering Skid Fabrication',
        'Equipment Installation & Commissioning'
      ],
      standards: 'ASME B31.3 • ASME B31.8 • AWS D1.1 • ISO 9001',
      color: '#DC2626'
    },
    {
      id: 'plant-maintenance',
      num: '02',
      title: 'Plant Maintenance',
      tagline: '24/7 Operations Support',
      description: 'Comprehensive maintenance programs to maximize uptime and asset life. Routine servicing, shutdown coordination, emergency response, and long-term maintenance contracts.',
      scope: [
        'Preventive Maintenance Programs',
        'Shutdown & Turnaround Planning',
        'Emergency Repair Response',
        'Rotating Equipment Overhaul',
        'Pipeline Inspection & Repair',
        'Valve Testing & Certification'
      ],
      standards: 'ISO 55000 • API 570 • NFPA 70E • bizSAFE Program',
      color: '#2563EB'
    },
    {
      id: 'hydrogen-testing',
      num: '03',
      title: 'Hydrogen Trailer Testing',
      tagline: 'DOT/ISO Certification & Fleet Management',
      description: 'Specialized testing and certification for hydrogen tube trailers. Hydrostatic testing, DOT/ISO recertification, valve servicing, and comprehensive fleet management programs.',
      scope: [
        'Hydrostatic Pressure Testing',
        'DOT and ISO Recertification',
        'Valve & Manifold Servicing',
        'Tube Bundle Inspection',
        'Leak Testing (Helium & Pressure)',
        'Fleet Management Programs'
      ],
      standards: 'DOT CFR 49 Part 180 • ISO 11120 • CGA H2 • SS 559',
      color: '#059669'
    },
    {
      id: 'cryogenic-systems',
      num: '04',
      title: 'Cryogenic Systems',
      tagline: 'Vacuum-Insulated Transfer Equipment',
      description: 'Custom fabrication and maintenance for cryogenic applications. Vacuum-insulated hose assemblies and transfer lines for LIN, LOX, LAR, and LNG service with full certification.',
      scope: [
        'Custom Hose Assembly Fabrication',
        'Vacuum-Insulated Transfer Lines',
        'End Fitting Installation & Testing',
        'Hose Repair & Recertification',
        'Leak Detection & Repair',
        'Emergency Replacement Service'
      ],
      standards: 'CGA Pamphlets • ASME B31.3 • PED 2014/68/EU • ISO 21013',
      color: '#7C3AED'
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
                  border: '3px solid #0F172A',
                  overflow: 'hidden'
                }}
              >
                {/* Service Header */}
                <div style={{
                  padding: '40px',
                  background: '#0F172A',
                  color: '#FFF',
                  borderBottom: `4px solid ${service.color}`
                }}>
                  <div style={{
                    fontSize: '72px',
                    fontWeight: 900,
                    lineHeight: 0.8,
                    marginBottom: '20px',
                    color: service.color
                  }}>
                    {service.num}
                  </div>
                  <h2 style={{
                    fontSize: '32px',
                    fontWeight: 900,
                    marginBottom: '12px',
                    lineHeight: 1.1
                  }}>
                    {service.title}
                  </h2>
                  <div style={{
                    fontSize: '13px',
                    color: '#94A3B8',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {service.tagline}
                  </div>
                </div>

                {/* Service Body */}
                <div style={{ padding: '32px' }}>
                  <p style={{
                    fontSize: '14px',
                    color: '#64748B',
                    lineHeight: 1.6,
                    marginBottom: '28px'
                  }}>
                    {service.description}
                  </p>

                  {/* Scope of Work */}
                  <div style={{
                    marginBottom: '28px'
                  }}>
                    <h3 style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      color: '#0F172A',
                      marginBottom: '16px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em'
                    }}>
                      Scope of Work
                    </h3>
                    <div style={{
                      display: 'grid',
                      gap: '8px'
                    }}>
                      {service.scope.map((item, i) => (
                        <div
                          key={i}
                          style={{
                            fontSize: '13px',
                            color: '#0F172A',
                            paddingLeft: '20px',
                            position: 'relative',
                            lineHeight: 1.5
                          }}
                        >
                          <span style={{
                            position: 'absolute',
                            left: 0,
                            color: service.color,
                            fontWeight: 900
                          }}>→</span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Standards */}
                  <div style={{
                    padding: '16px',
                    background: '#F8F9FA',
                    border: `2px solid ${service.color}`,
                    marginBottom: '24px'
                  }}>
                    <div style={{
                      fontSize: '10px',
                      fontWeight: 700,
                      color: '#64748B',
                      marginBottom: '6px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em'
                    }}>
                      Standards & Compliance
                    </div>
                    <div style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      color: '#0F172A',
                      fontFamily: 'IBM Plex Mono, monospace',
                      letterSpacing: '0.01em',
                      lineHeight: 1.5
                    }}>
                      {service.standards}
                    </div>
                  </div>

                  {/* View Projects Button */}
                  <a 
                    href={`/Projects#${service.id}`}
                    style={{
                      display: 'block',
                      padding: '14px 24px',
                      background: service.color,
                      color: '#FFF',
                      border: `2px solid ${service.color}`,
                      fontWeight: 700,
                      fontSize: '13px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      textDecoration: 'none',
                      transition: 'all 0.3s',
                      textAlign: 'center',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#0F172A'
                      e.target.style.borderColor = '#0F172A'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = service.color
                      e.target.style.borderColor = service.color
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
