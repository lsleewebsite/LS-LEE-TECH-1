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
      description: 'From initial concept to final handover. Gas plant equipment erection, installation and integration, underground gas piping, steel structure fabrication and metering skid station fabrication.',
      highlights: [
        'Detailed Engineering & 3D Modeling',
        'Certified Welding & Fabrication Shop',
        'Underground Piping Installation',
        'Steel Structure Design & Erection',
        'Gas Metering Skid Fabrication',
        'Equipment Installation & Tie-in'
      ],
      outcomes: [
        'As-built drawings and documentation',
        'Material test reports (MTRs)',
        'Weld procedure specifications (WPS)',
        'Pressure test certificates',
        'Commissioning reports',
        'O&M manuals'
      ],
      compliance: 'ASME B31.3 • ASME B31.8 • AWS D1.1 • ISO 9001'
    },
    {
      id: 'plant-maintenance',
      num: '02',
      title: 'Plant Maintenance',
      tagline: '24/7 Operations Support',
      description: 'Keep your operations running at peak performance. Process plant routine and shutdown maintenance, including metering skid and underground pipeline servicing.',
      highlights: [
        'Preventive Maintenance Programs',
        'Shutdown & Turnaround Planning',
        'Emergency Repair Response',
        'Rotating Equipment Overhaul',
        'Pipeline Inspection & Repair',
        'Valve Testing & Certification'
      ],
      outcomes: [
        'Maintenance schedules and checklists',
        'Equipment condition reports',
        'Repair documentation',
        'Parts inventory management',
        'Safety work permits',
        'Incident response reports'
      ],
      compliance: 'ISO 55000 • API 570 • NFPA 70E • bizSAFE Program'
    },
    {
      id: 'hydrogen-testing',
      num: '03',
      title: 'Hydrogen Trailer Testing',
      tagline: 'DOT/ISO Certification & Fleet Management',
      description: 'Complete testing, certification, and refurbishment for hydrogen tube trailers. HP tube testing, certification, servicing and refurbishment support for tube trailers and related skids.',
      highlights: [
        'Hydrostatic Pressure Testing',
        'DOT and ISO Recertification',
        'Valve & Manifold Servicing',
        'Tube Bundle Inspection',
        'Leak Testing (Helium & Pressure Decay)',
        'Fleet Management Programs'
      ],
      outcomes: [
        'DOT/ISO certification documents',
        'Hydrostatic test reports',
        'Valve test certificates',
        'Inspection reports with photos',
        'Repair and replacement records',
        'Fleet tracking database'
      ],
      compliance: 'DOT CFR 49 Part 180 • ISO 11120 • CGA H2 • SS 559'
    },
    {
      id: 'cryogenic-systems',
      num: '04',
      title: 'Cryogenic Systems',
      tagline: 'Vacuum-Insulated Transfer Equipment',
      description: 'Custom fabrication and maintenance for cryogenic applications. Cryogenic hose fabrication, repair and maintenance for LIN, LOX, LAR, and LNG service.',
      highlights: [
        'Custom Hose Assembly Fabrication',
        'Vacuum-Insulated Transfer Lines',
        'End Fitting Installation & Testing',
        'Hose Repair & Recertification',
        'Leak Detection & Repair',
        'Emergency Replacement Service'
      ],
      outcomes: [
        'Pressure test certificates',
        'Vacuum hold test reports',
        'Material certificates',
        'As-built drawings',
        'Installation guidelines',
        'Maintenance schedules'
      ],
      compliance: 'CGA Pamphlets • ASME B31.3 • PED 2014/68/EU • ISO 21013'
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

      {/* Services Sections - Alternating Layout */}
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
              gridTemplateColumns: index % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr',
              minHeight: '600px'
            }}>
              
              {/* Image Placeholder - Alternates left/right */}
              <div 
                style={{
                  background: '#E5E7EB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRight: index % 2 === 0 ? '2px solid #0F172A' : 'none',
                  borderLeft: index % 2 === 1 ? '2px solid #0F172A' : 'none',
                  order: index % 2 === 0 ? 1 : 2
                }}
              >
                <div style={{
                  textAlign: 'center',
                  color: '#94A3B8'
                }}>
                  <div style={{
                    fontSize: '120px',
                    fontWeight: 900,
                    lineHeight: 1,
                    marginBottom: '16px',
                    color: '#D1D5DB'
                  }}>
                    {service.num}
                  </div>
                  <div style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}>
                    [ Service Image ]
                  </div>
                  <div style={{
                    fontSize: '11px',
                    opacity: 0.6,
                    marginTop: '4px'
                  }}>
                    1200 × 800px
                  </div>
                </div>
              </div>

              {/* Content - Alternates right/left */}
              <div style={{
                padding: '80px 60px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                order: index % 2 === 0 ? 2 : 1
              }}>
                
                {/* Number Badge */}
                <div style={{
                  display: 'inline-block',
                  padding: '8px 20px',
                  background: '#DC2626',
                  color: '#FFF',
                  fontSize: '14px',
                  fontWeight: 900,
                  letterSpacing: '0.1em',
                  marginBottom: '24px',
                  alignSelf: 'flex-start'
                }}>
                  {service.num}
                </div>

                {/* Title */}
                <h2 style={{
                  fontSize: '48px',
                  fontWeight: 900,
                  marginBottom: '12px',
                  lineHeight: 1.1,
                  color: '#0F172A'
                }}>
                  {service.title}
                </h2>

                {/* Tagline */}
                <div style={{
                  fontSize: '16px',
                  color: '#2563EB',
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

                {/* Highlights - Compact List */}
                <div style={{
                  background: index % 2 === 0 ? '#F8F9FA' : '#FFF',
                  padding: '24px 28px',
                  border: '2px solid #E5E7EB',
                  marginBottom: '32px'
                }}>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#64748B',
                    marginBottom: '16px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em'
                  }}>
                    Key Capabilities
                  </div>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '8px'
                  }}>
                    {service.highlights.map((highlight, i) => (
                      <div
                        key={i}
                        style={{
                          fontSize: '13px',
                          color: '#0F172A',
                          fontWeight: 500,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}
                      >
                        <div style={{
                          width: '4px',
                          height: '4px',
                          background: '#DC2626',
                          flexShrink: 0
                        }}></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compliance Badge */}
                <div style={{
                  padding: '16px 20px',
                  background: '#0F172A',
                  color: '#FFF',
                  fontSize: '11px',
                  fontWeight: 600,
                  fontFamily: 'IBM Plex Mono, monospace',
                  letterSpacing: '0.03em',
                  marginBottom: '32px'
                }}>
                  {service.compliance}
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
                    textAlign: 'center',
                    cursor: 'pointer',
                    alignSelf: 'flex-start'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#DC2626'
                    e.target.style.color = '#FFF'
                    e.target.style.borderColor = '#DC2626'
                    e.target.style.transform = 'translateX(8px)'
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
