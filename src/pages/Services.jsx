import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

// Icon Components
const Icon = {
  Wrench: () => (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
  Gauge: () => (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2v4"/>
      <path d="m6.8 15-3.5 2"/>
      <path d="m20.7 7-3.5 2"/>
      <path d="M6.8 9 3.3 7"/>
      <path d="m20.7 17-3.5-2"/>
      <path d="m9 22 3-8 3 8"/>
      <path d="M8 22h8"/>
      <path d="M18 18.7a9 9 0 1 0-12 0"/>
    </svg>
  ),
  Trailer: () => (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 17h4V5H2v12h3"/>
      <circle cx="6" cy="17" r="2"/>
      <path d="M14 17h5l4-8V6h-8v11z"/>
      <circle cx="18" cy="17" r="2"/>
    </svg>
  ),
  Snow: () => (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 12h20"/>
      <path d="M12 2v20"/>
      <path d="m4.93 4.93 14.14 14.14"/>
      <path d="m4.93 19.07 14.14-14.14"/>
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
      icon: <Icon.Wrench />,
      title: 'Project Engineering',
      tagline: 'Turnkey Mechanical Construction from Design to Commissioning',
      description: 'From initial concept to final handover, we manage the complete project lifecycle. Our integrated approach combines engineering, fabrication, installation, and commissioning under one accountable contractor.',
      capabilities: [
        'Detailed engineering and 3D modeling',
        'Fabrication shop with certified welders',
        'Underground piping installation',
        'Steel structure design and erection',
        'Gas metering skid fabrication',
        'Equipment installation and tie-in',
        'Pre-commissioning and startup'
      ],
      deliverables: [
        'As-built drawings',
        'Material test reports (MTRs)',
        'Weld procedure specifications',
        'Pressure test certificates',
        'Commissioning reports',
        'O&M manuals'
      ],
      standards: 'ASME B31.3 • ASME B31.8 • AWS D1.1 • ISO 9001'
    },
    {
      id: 'plant-maintenance',
      num: '02',
      icon: <Icon.Gauge />,
      title: 'Plant Maintenance',
      tagline: 'Keeping Your Operations Running 24/7',
      description: 'Preventive maintenance programs, shutdown support, and emergency response. We keep your plant running at peak performance while minimizing unplanned downtime and safety incidents.',
      capabilities: [
        'Preventive maintenance programs',
        'Shutdown and turnaround planning',
        'Emergency repair response',
        'Rotating equipment overhaul',
        'Pipeline inspection and repair',
        'Valve testing and certification',
        'Leak detection and repair (LDAR)'
      ],
      deliverables: [
        'Maintenance schedules',
        'Equipment condition reports',
        'Repair documentation',
        'Parts inventory management',
        'Safety work permits',
        'Incident reports'
      ],
      standards: 'ISO 55000 • API 570 • NFPA 70E • bizSAFE Program'
    },
    {
      id: 'hydrogen-testing',
      num: '03',
      icon: <Icon.Trailer />,
      title: 'Hydrogen Trailer Testing',
      tagline: 'Certification and Recertification of Tube Trailers',
      description: 'Complete testing, certification, and fleet management for hydrogen tube trailers. Our facility handles hydrostatic testing, DOT/ISO recertification, and refurbishment for transport fleets.',
      capabilities: [
        'Hydrostatic pressure testing',
        'DOT and ISO recertification',
        'Valve and manifold servicing',
        'Tube bundle inspection',
        'Leak testing (helium and pressure decay)',
        'Trailer refurbishment',
        'Fleet management programs'
      ],
      deliverables: [
        'DOT/ISO certification documents',
        'Hydrostatic test reports',
        'Valve test certificates',
        'Inspection reports with photos',
        'Repair records',
        'Fleet tracking database'
      ],
      standards: 'DOT CFR 49 Part 180 • ISO 11120 • CGA H2 Standards • SS 559'
    },
    {
      id: 'cryogenic-systems',
      num: '04',
      icon: <Icon.Snow />,
      title: 'Cryogenic Systems',
      tagline: 'Fabrication and Maintenance of Cryogenic Transfer Equipment',
      description: 'Custom vacuum-insulated hose assemblies and transfer lines for LIN, LOX, LAR, and LNG service. From fabrication to field repair, we handle the specialized requirements of cryogenic systems.',
      capabilities: [
        'Custom hose assembly fabrication',
        'Vacuum-insulated transfer lines',
        'End fitting installation and testing',
        'Hose repair and recertification',
        'Leak detection and repair',
        'Emergency replacement service',
        'Preventive maintenance programs'
      ],
      deliverables: [
        'Pressure test certificates',
        'Vacuum hold test reports',
        'Material certificates',
        'As-built drawings',
        'Installation guidelines',
        'Maintenance schedules'
      ],
      standards: 'CGA Pamphlets • ASME B31.3 Cold Service • PED 2014/68/EU • ISO 21013'
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
            Four integrated service lines. One accountable contractor. End-to-end execution from design office to plant floor.
          </motion.p>
        </div>
      </section>

      {/* Services Cards */}
      <div style={{ background: '#F8F9FA' }}>
        {services.map((service, index) => (
          <motion.section
            key={service.id}
            id={service.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            style={{
              padding: '80px 32px',
              borderBottom: '2px solid #0F172A'
            }}
          >
            <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
              {/* Service Card */}
              <div style={{
                background: '#FFF',
                border: '3px solid #0F172A',
                padding: '60px',
                display: 'grid',
                gridTemplateColumns: '380px 1fr',
                gap: '60px'
              }}>
                
                {/* Left Side - Header */}
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    marginBottom: '32px'
                  }}>
                    <div style={{
                      fontSize: '96px',
                      fontWeight: 900,
                      color: '#DC2626',
                      lineHeight: 0.8
                    }}>
                      {service.num}
                    </div>
                    <div style={{ color: '#0F172A' }}>
                      {service.icon}
                    </div>
                  </div>

                  <h2 style={{
                    fontSize: '36px',
                    fontWeight: 900,
                    marginBottom: '16px',
                    lineHeight: 1.1,
                    color: '#0F172A'
                  }}>
                    {service.title}
                  </h2>

                  <p style={{
                    fontSize: '15px',
                    color: '#DC2626',
                    fontWeight: 700,
                    marginBottom: '24px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.03em'
                  }}>
                    {service.tagline}
                  </p>

                  <p style={{
                    fontSize: '15px',
                    color: '#64748B',
                    lineHeight: 1.7
                  }}>
                    {service.description}
                  </p>

                  {/* Standards Badge */}
                  <div style={{
                    marginTop: '32px',
                    padding: '20px',
                    background: '#F8F9FA',
                    border: '2px solid #E5E7EB'
                  }}>
                    <div style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#64748B',
                      marginBottom: '8px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em'
                    }}>
                      Standards & Compliance
                    </div>
                    <div style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#0F172A',
                      lineHeight: 1.6,
                      fontFamily: 'IBM Plex Mono, monospace'
                    }}>
                      {service.standards}
                    </div>
                  </div>
                </div>

                {/* Right Side - Details Grid */}
                <div style={{
                  display: 'grid',
                  gap: '40px'
                }}>
                  
                  {/* Capabilities List */}
                  <div>
                    <h3 style={{
                      fontSize: '14px',
                      fontWeight: 700,
                      color: '#0F172A',
                      marginBottom: '20px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      borderBottom: '2px solid #DC2626',
                      paddingBottom: '12px'
                    }}>
                      Service Capabilities
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
                            paddingLeft: '20px',
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

                  {/* Deliverables List */}
                  <div>
                    <h3 style={{
                      fontSize: '14px',
                      fontWeight: 700,
                      color: '#0F172A',
                      marginBottom: '20px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      borderBottom: '2px solid #2563EB',
                      paddingBottom: '12px'
                    }}>
                      Typical Deliverables
                    </h3>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px'
                    }}>
                      {service.deliverables.map((del, i) => (
                        <div
                          key={i}
                          style={{
                            padding: '8px 16px',
                            background: '#F8F9FA',
                            border: '1px solid #E5E7EB',
                            fontSize: '13px',
                            fontWeight: 600,
                            color: '#0F172A',
                            borderRadius: '2px'
                          }}
                        >
                          {del}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </motion.section>
        ))}
      </div>

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
