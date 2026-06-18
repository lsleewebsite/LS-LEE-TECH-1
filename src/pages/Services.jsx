import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation, Link } from 'react-router-dom'

const Icon = {
  Wrench: (p) => (
    <svg width="40" height="40" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M20 4 L24 8 L20 12 L18 10 L14 14 L18 18 L22 14 L24 16 L20 20 L24 24" />
      <path d="M14 14 L4 24" /><circle cx="4.5" cy="23.5" r="1.2" />
    </svg>
  ),
  Gauge: (p) => (
    <svg width="40" height="40" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M4 18 A10 10 0 0 1 24 18" /><line x1="4" y1="18" x2="24" y2="18" />
      <line x1="14" y1="18" x2="20" y2="11" strokeWidth="2.5" />
      <circle cx="14" cy="18" r="1.5" fill="currentColor" />
      <line x1="7" y1="14" x2="8.5" y2="15" /><line x1="14" y1="9" x2="14" y2="11" /><line x1="21" y1="14" x2="19.5" y2="15" />
    </svg>
  ),
  Trailer: (p) => (
    <svg width="40" height="40" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <rect x="2" y="10" width="18" height="8" rx="0" />
      <circle cx="20" cy="22" r="2.5" /><circle cx="7" cy="22" r="2.5" />
      <line x1="2" y1="20" x2="4.5" y2="20" /><line x1="9.5" y1="20" x2="17.5" y2="20" /><line x1="22.5" y1="20" x2="26" y2="20" />
      <line x1="6" y1="13" x2="6" y2="15" /><line x1="10" y1="13" x2="10" y2="15" /><line x1="14" y1="13" x2="14" y2="15" />
    </svg>
  ),
  Snow: (p) => (
    <svg width="40" height="40" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <line x1="14" y1="3" x2="14" y2="25" /><line x1="3" y1="14" x2="25" y2="14" />
      <line x1="6" y1="6" x2="22" y2="22" /><line x1="22" y1="6" x2="6" y2="22" />
      <circle cx="14" cy="14" r="2" />
    </svg>
  ),
  Bolt: (p) => (
    <svg width="40" height="40" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <polygon points="16,3 7,16 13,16 11,25 21,12 15,12" strokeLinejoin="round" />
    </svg>
  ),
  Check: (p) => (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" {...p}>
      <polyline points="3,11 8,16 17,4" />
    </svg>
  ),
  Arrow: (p) => (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <line x1="0" y1="5" x2="13" y2="5" /><polyline points="9,1 13,5 9,9" />
    </svg>
  )
}

const services = [
  {
    id: 'project-engineering',
    num: '01',
    icon: <Icon.Wrench />,
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
    icon: <Icon.Gauge />,
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
    id: 'servicing-testing',
    num: '03',
    icon: <Icon.Trailer />,
    title: 'Servicing & Testing',
    tagline: 'Destructive & Non-Destructive Testing',
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
    id: 'cryogenic-storage',
    num: '04',
    icon: <Icon.Snow />,
    title: 'Cryogenic Storage & Hoses',
    tagline: 'Vacuum-Insulated Equipment',
    description: 'Custom fabrication and maintenance for cryogenic applications. Vacuum-insulated hose assemblies and transfer lines for LIN, LOX, LAR, and LNG service with full certification.',
    capabilities: [
      'Custom Hose Assembly Fabrication',
      'Vacuum-Insulated Transfer Lines',
      'End Fitting Installation & Testing',
      'Hose Repair & Recertification',
      'Leak Detection & Repair',
      'Emergency Replacement Service'
    ]
  },
  {
    id: 'electrical-instrumentation',
    num: '05',
    icon: <Icon.Bolt />,
    title: 'Electrical & Instrumentation',
    tagline: 'Controls & Automation',
    description: 'Electrical installation and instrumentation support for gas plant and process facilities. Panel wiring, control system integration, and calibration services to keep automated systems running accurately and safely.',
    capabilities: [
      'Control Panel Wiring & Installation',
      'Instrumentation Calibration',
      'PLC & SCADA Integration',
      'Loop Testing & Commissioning',
      'Cable Tray & Conduit Installation',
      'Hazardous Area (Ex) Equipment Installation'
    ]
  }
]

export default function Services() {
  const location = useLocation()
  const [featuredId, setFeaturedId] = useState('project-engineering')

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const serviceParam = params.get('service')
    if (serviceParam && services.some(s => s.id === serviceParam)) {
      setFeaturedId(serviceParam)
    } else if (location.hash) {
      const hashId = location.hash.replace('#', '')
      if (services.some(s => s.id === hashId)) {
        setFeaturedId(hashId)
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location])

  const featured = services.find(s => s.id === featuredId)
  const sidebarServices = services.filter(s => s.id !== featuredId)

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
            style={{ fontSize: '56px', fontWeight: 900, marginBottom: '24px', lineHeight: 1.1 }}
          >
            Engineering Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: '18px', color: '#94A3B8', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}
          >
            Five integrated service lines delivering end-to-end mechanical and electrical solutions for Singapore's critical infrastructure.
          </motion.p>
        </div>
      </section>

      {/* Magazine Layout */}
      <section style={{ padding: '80px 32px', background: '#F8F9FA' }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '32px', alignItems: 'start' }}>

            {/* Feature Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={featured.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                style={{
                  background: '#FFF',
                  border: '3px solid #0F172A',
                  padding: '56px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
                  <div style={{ color: '#0F172A' }}>{featured.icon}</div>
                  <div style={{
                    fontFamily: 'Archivo, sans-serif',
                    fontSize: '48px',
                    fontWeight: 900,
                    color: '#E5E7EB',
                    lineHeight: 1
                  }}>
                    {featured.num}
                  </div>
                </div>

                <h2 style={{
                  fontSize: '38px',
                  fontWeight: 900,
                  marginBottom: '12px',
                  lineHeight: 1.1,
                  color: '#0F172A',
                  fontFamily: 'Archivo, sans-serif'
                }}>
                  {featured.title}
                </h2>

                <div style={{
                  fontSize: '14px',
                  color: '#DC2626',
                  fontWeight: 700,
                  marginBottom: '24px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  fontFamily: 'IBM Plex Mono, monospace'
                }}>
                  {featured.tagline}
                </div>

                <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.7, marginBottom: '32px' }}>
                  {featured.description}
                </p>

                <div style={{
                  padding: '28px 32px',
                  background: '#0F172A',
                  marginBottom: '32px'
                }}>
                  <h3 style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#FFF',
                    marginBottom: '18px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontFamily: 'IBM Plex Mono, monospace'
                  }}>
                    Key Capabilities
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
                    {featured.capabilities.map((cap, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'start', gap: '10px', fontSize: '14px', color: '#FFF', lineHeight: 1.5 }}>
                        <div style={{ color: '#DC2626', marginTop: '2px', flexShrink: 0 }}>
                          <Icon.Check />
                        </div>
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/Projects?category=${encodeURIComponent(featured.title)}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
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
                    e.currentTarget.style.background = '#DC2626'
                    e.currentTarget.style.color = '#FFF'
                    e.currentTarget.style.borderColor = '#DC2626'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = '#0F172A'
                    e.currentTarget.style.borderColor = '#0F172A'
                  }}
                >
                  View Related Projects
                  <Icon.Arrow />
                </Link>
              </motion.div>
            </AnimatePresence>

            {/* Sidebar List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {sidebarServices.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setFeaturedId(s.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '20px 24px',
                    background: '#FFF',
                    border: '2px solid #E5E7EB',
                    cursor: 'pointer',
                    transition: 'all 0.25s',
                    textAlign: 'left',
                    width: '100%'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#DC2626'
                    e.currentTarget.style.transform = 'translateX(4px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E5E7EB'
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                >
                  <div style={{ color: '#0F172A', flexShrink: 0 }}>
                    {React.cloneElement(s.icon, { width: 28, height: 28 })}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: '16px',
                      fontWeight: 900,
                      color: '#0F172A',
                      fontFamily: 'Archivo, sans-serif',
                      lineHeight: 1.2
                    }}>
                      {s.title}
                    </div>
                    <div style={{
                      fontSize: '11px',
                      color: '#94A3B8',
                      fontFamily: 'IBM Plex Mono, monospace',
                      letterSpacing: '0.04em',
                      marginTop: '4px',
                      textTransform: 'uppercase'
                    }}>
                      {s.tagline}
                    </div>
                  </div>
                  <div style={{
                    fontFamily: 'Archivo, sans-serif',
                    fontSize: '24px',
                    fontWeight: 900,
                    color: '#E5E7EB',
                    flexShrink: 0
                  }}>
                    {s.num}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        style={{ padding: '80px 32px', background: '#DC2626', color: '#FFF', textAlign: 'center' }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '24px' }}>
            Tell us about your project. We'll put together a detailed scope
          </h2>
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
            Request Proposal
            <Icon.Arrow />
          </Link>
        </div>
      </motion.section>
    </div>
  )
}
