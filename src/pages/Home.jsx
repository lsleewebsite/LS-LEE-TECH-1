import React from 'react'
import { motion } from 'framer-motion'

// Icon Components (simple SVG icons)
const Icon = {
  Chip: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  Plant: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  ),
  H2: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  )
}

// Animation variants
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

export default function Home() {
  return (
    <div>
      
      {/* Hero Section */}
      <section style={{
        padding: '70px 32px 60px',
        background: '#0F172A',
        color: '#FFF',
        borderBottom: '2px solid #0F172A',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '450px'
      }}>
        {/* Hero Image - Right side with curve */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '45%',
          background: '#374151',
          clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 0
        }}>
          <div style={{
            textAlign: 'center',
            color: '#9CA3AF',
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.1em'
          }}>
            [ HERO IMAGE ]<br/>
            <span style={{ fontSize: '11px', opacity: 0.7 }}>1920 × 1080px</span>
          </div>
        </div>

        {/* Content Container */}
        <div style={{ 
          maxWidth: '1360px', 
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            maxWidth: '650px'
          }}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                display: 'inline-block',
                padding: '8px 16px',
                background: 'rgba(220, 38, 38, 0.15)',
                border: '1px solid #DC2626',
                marginBottom: '24px',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: '#DC2626'
              }}
            >
              EST. 2003
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                fontSize: '48px',
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: '20px'
              }}
            >
              20+ Years Delivering Safety-Critical Mechanical Solutions to Singapore's Gas and Process Industries
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                fontSize: '16px',
                color: '#94A3B8',
                lineHeight: 1.6,
                marginBottom: '32px'
              }}
            >
              From semiconductor gas plants to hydrogen trailer servicing — LS Lee Engineering delivers mechanical solutions backed by decades of experience.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{ display: 'flex', gap: '16px' }}
            >
              <button style={{
                padding: '14px 28px',
                background: '#DC2626',
                color: '#FFF',
                border: '2px solid #DC2626',
                fontWeight: 700,
                fontSize: '13px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                cursor: 'pointer'
              }}>
                Our Industries
              </button>
              <button style={{
                padding: '14px 28px',
                background: 'transparent',
                color: '#FFF',
                border: '2px solid #FFF',
                fontWeight: 700,
                fontSize: '13px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                cursor: 'pointer'
              }}>
                View Projects
              </button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
        style={{
          padding: '80px 32px',
          background: '#0F172A',
          borderBottom: '2px solid #DC2626'
        }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          <motion.div
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '40px'
            }}
          >
            {[
              { value: '37+', label: 'Years Of Experience' },
              { value: 'XX', label: 'Lorem ipsum dolor' },
              { value: 'XX', label: 'Sit amet consectetur' },
              { value: 'XX', label: 'Adipiscing elit sed' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                style={{ textAlign: 'center' }}
              >
                <div style={{
                  fontSize: '48px',
                  fontWeight: 900,
                  color: '#DC2626',
                  marginBottom: '8px'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#94A3B8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  fontWeight: 600
                }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Industries Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
        style={{ padding: '80px 32px', background: '#F8F9FA' }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 800,
            marginBottom: '48px',
            textAlign: 'center'
          }}>
            Industries We Serve
          </h2>

          <motion.div
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}
          >
            {[
              { icon: <Icon.Chip />, title: 'Semiconductor', desc: 'Gas process plant construction, integration and maintenance for semiconductor manufacturing.' },
              { icon: <Icon.Server />, title: 'Data Center', desc: 'Hydrogen pipeline infrastructure and gas systems support for data centre energy requirements.' },
              { icon: <Icon.Plant />, title: 'Industrial Gas & Process', desc: 'Turnkey project engineering, plant integration and maintenance for gas and process plants.' },
              { icon: <Icon.H2 />, title: 'New Energy / Hydrogen', desc: 'Hydrogen trailer testing, servicing, refurbishment and certification support.' }
            ].map((industry, i) => (
              <motion.div
                key={i}
                variants={cardVariant}
                transition={{ duration: 0.5 }}
                className="ind-card"
                style={{
                  padding: '32px',
                  background: '#FFF',
                  border: '2px solid #0F172A',
                  transition: 'all 0.4s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)'
                  e.currentTarget.style.borderColor = '#DC2626'
                  const icon = e.currentTarget.querySelector('.ind-icon')
                  const learnMore = e.currentTarget.querySelector('.learn-more')
                  if (icon) {
                    icon.style.borderColor = '#2563EB'
                    icon.style.transform = 'rotate(15deg)'
                  }
                  if (learnMore) learnMore.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.borderColor = '#0F172A'
                  const icon = e.currentTarget.querySelector('.ind-icon')
                  const learnMore = e.currentTarget.querySelector('.learn-more')
                  if (icon) {
                    icon.style.borderColor = '#0F172A'
                    icon.style.transform = 'rotate(0deg)'
                  }
                  if (learnMore) learnMore.style.transform = 'translateX(0)'
                }}
              >
                <div 
                  className="ind-icon"
                  style={{
                    width: '64px',
                    height: '64px',
                    border: '2px solid #0F172A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    color: '#0F172A',
                    transition: 'all 0.4s'
                  }}
                >
                  {industry.icon}
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  marginBottom: '12px',
                  color: '#0F172A'
                }}>
                  {industry.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#64748B',
                  lineHeight: 1.6
                }}>
                  {industry.desc}
                </p>
                <div 
                  className="learn-more"
                  style={{
                    marginTop: '16px',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#2563EB',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    transition: 'transform 0.4s'
                  }}
                >
                  Learn More →
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    
      {/* Services Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
        style={{ padding: '80px 32px', background: '#FFF' }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 800,
            marginBottom: '48px',
            textAlign: 'center'
          }}>
            Our Services
          </h2>

          <motion.div
            variants={staggerContainer}
            className="services-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px'
            }}
          >
            {[
              {
                num: '01',
                title: 'Project Engineering',
                image: '[Plant Construction]',
                desc: 'Gas plant equipment erection, installation and integration, underground gas piping, steel structure fabrication and metering skid station fabrication.'
              },
              {
                num: '02',
                title: 'Plant Maintenance',
                image: '[Maintenance Work]',
                desc: 'Process plant routine and shutdown maintenance, including metering skid and underground pipeline servicing.'
              },
              {
                num: '03',
                title: 'Hydrogen Trailer Testing',
                image: '[Testing Equipment]',
                desc: 'HP tube testing, certification, servicing and refurbishment support for tube trailers and related skids.'
              },
              {
                num: '04',
                title: 'Cryogenic Systems',
                image: '[Cryogenic Hose]',
                desc: 'Cryogenic hose fabrication, repair and maintenance for industrial gas applications.'
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={cardVariant}
                transition={{ duration: 0.5 }}
                style={{
                  border: '2px solid #0F172A',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.4s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)'
                  e.currentTarget.style.borderColor = '#DC2626'
                  const numBadge = e.currentTarget.querySelector('.num-badge')
                  if (numBadge) {
                    numBadge.style.background = '#2563EB'
                    numBadge.style.transform = 'rotate(360deg)'
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.borderColor = '#0F172A'
                  const numBadge = e.currentTarget.querySelector('.num-badge')
                  if (numBadge) {
                    numBadge.style.background = '#DC2626'
                    numBadge.style.transform = 'rotate(0deg)'
                  }
                }}
              >
                <div style={{
                  height: '200px',
                  background: '#E5E7EB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  color: '#64748B',
                  fontWeight: 600,
                  borderBottom: '2px solid #0F172A'
                }}>
                  {service.image}
                </div>
                <div style={{ padding: '24px' }}>
                  <div 
                    className="num-badge"
                    style={{
                      width: '40px',
                      height: '40px',
                      background: '#DC2626',
                      color: '#FFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 900,
                      fontSize: '18px',
                      marginBottom: '16px',
                      transition: 'all 0.4s'
                    }}
                  >
                    {service.num}
                  </div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    marginBottom: '12px'
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    fontSize: '13px',
                    color: '#64748B',
                    lineHeight: 1.6
                  }}>
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Project Portfolio Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
        style={{ padding: '80px 32px', background: '#F8F9FA' }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 800,
            marginBottom: '48px',
            textAlign: 'center'
          }}>
            Selected Project Portfolio
          </h2>

          <motion.div
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              marginBottom: '48px'
            }}
          >
            {[
              { title: 'Fab-14 UHP Gas Distribution', scope: 'PROJECT ENGINEERING', desc: 'Design, fabrication, and installation of ultra-high-purity gas distribution network for new wafer fab expansion.', loc: 'Woodlands' },
              { title: 'ASU Plant Turnaround', scope: 'MAINTENANCE', desc: 'Major shutdown coordination and equipment overhaul across air separation unit cold box and compressor systems.', loc: 'Jurong Island' },
              { title: 'H₂ Tube Trailer Recertification', scope: 'TESTING & CERTIFICATION', desc: 'DOT recertification program for fleet of 40+ hydrogen tube trailers serving regional industrial customers.', loc: 'Tuas' }
            ].map((project, i) => (
              <motion.div
                key={i}
                variants={cardVariant}
                transition={{ duration: 0.5 }}
                style={{
                  border: '2px solid #0F172A',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.4s',
                  background: '#FFF'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)'
                  e.currentTarget.style.borderColor = '#DC2626'
                  const scope = e.currentTarget.querySelector('.project-scope')
                  const loc = e.currentTarget.querySelector('.project-loc')
                  if (scope) scope.style.color = '#2563EB'
                  if (loc) loc.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.borderColor = '#0F172A'
                  const scope = e.currentTarget.querySelector('.project-scope')
                  const loc = e.currentTarget.querySelector('.project-loc')
                  if (scope) scope.style.color = '#DC2626'
                  if (loc) loc.style.transform = 'translateX(0)'
                }}
              >
                <div style={{
                  height: '180px',
                  background: '#E5E7EB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  color: '#64748B',
                  fontWeight: 600,
                  borderBottom: '2px solid #0F172A'
                }}>
                  [ PROJECT IMAGE ]
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    marginBottom: '8px'
                  }}>
                    {project.title}
                  </h3>
                  <div 
                    className="project-scope"
                    style={{
                      fontSize: '10px',
                      fontWeight: 700,
                      color: '#DC2626',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: '12px',
                      transition: 'color 0.4s'
                    }}
                  >
                    {project.scope}
                  </div>
                  <p style={{
                    fontSize: '13px',
                    color: '#64748B',
                    lineHeight: 1.6,
                    marginBottom: '12px'
                  }}>
                    {project.desc}
                  </p>
                  <div 
                    className="project-loc"
                    style={{
                      fontSize: '10px',
                      color: '#94A3B8',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      fontWeight: 600,
                      transition: 'transform 0.4s'
                    }}
                  >
                    📍 {project.loc}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* See More Button */}
          <div style={{ textAlign: 'center' }}>
            <button style={{
              padding: '16px 32px',
              background: '#DC2626',
              color: '#FFF',
              border: '2px solid #DC2626',
              fontWeight: 700,
              fontSize: '14px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#B91C1C'
              e.target.style.borderColor = '#B91C1C'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#DC2626'
              e.target.style.borderColor = '#DC2626'
            }}
            >
              See More Projects →
            </button>
          </div>
        </div>
      </motion.section>

      {/* Safety Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
        style={{ padding: '80px 32px', background: '#FFF' }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 800,
            marginBottom: '48px',
            textAlign: 'center'
          }}>
            Safety First, Always
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            marginBottom: '48px'
          }}>
            {/* Left - Statement */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                padding: '40px',
                background: '#F8F9FA',
                border: '2px solid #0F172A'
              }}
            >
              <div style={{
                fontSize: '28px',
                fontWeight: 800,
                marginBottom: '20px',
                lineHeight: 1.2
              }}>
                2.4 Million Safe Manhours Without Lost-Time Incident
              </div>
              <p style={{
                fontSize: '14px',
                color: '#64748B',
                lineHeight: 1.6,
                marginBottom: '16px'
              }}>
                Our safety culture is built on accountability, training, and frontline ownership. Every technician, every engineer, every supervisor — empowered to stop work if conditions aren't right.
              </p>
              <p style={{
                fontSize: '14px',
                color: '#64748B',
                lineHeight: 1.6
              }}>
                From daily toolbox talks to advanced HAZOP reviews, safety is integrated into project planning, execution, and closeout.
              </p>
            </motion.div>

            {/* Right - Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '16px'
              }}>
                {[
                  { mark: 'Q', issuer: 'SAC-SINGLAS', title: 'ISO 9001:2015', sub: 'Quality Management' },
                  { mark: 'O', issuer: 'SAC-SINGLAS', title: 'ISO 45001', sub: 'OH&S Management' },
                  { mark: '★', issuer: 'WSH COUNCIL', title: 'bizSAFE STAR', sub: 'Workplace Safety' },
                  { mark: 'P', issuer: 'BCA', title: 'CoreTrade', sub: 'Plumbing & Piping' }
                ].map((cert, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '24px',
                      background: '#FFF',
                      border: '2px solid #0F172A',
                      transition: 'all 0.4s',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)'
                      e.currentTarget.style.borderColor = '#2563EB'
                      const mark = e.currentTarget.querySelector('.cert-mark')
                      if (mark) {
                        mark.style.transform = 'rotate(15deg)'
                        mark.style.borderColor = '#DC2626'
                        mark.style.color = '#DC2626'
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)'
                      e.currentTarget.style.borderColor = '#0F172A'
                      const mark = e.currentTarget.querySelector('.cert-mark')
                      if (mark) {
                        mark.style.transform = 'rotate(0deg)'
                        mark.style.borderColor = '#0F172A'
                        mark.style.color = '#0F172A'
                      }
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '16px'
                    }}>
                      <div 
                        className="cert-mark"
                        style={{
                          width: '36px',
                          height: '36px',
                          border: '2px solid #0F172A',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 800,
                          fontSize: '14px',
                          transition: 'all 0.4s',
                          color: '#0F172A'
                        }}
                      >
                        {cert.mark}
                      </div>
                      <div style={{
                        fontSize: '9px',
                        opacity: 0.6,
                        textAlign: 'right',
                        fontWeight: 600,
                        letterSpacing: '0.1em'
                      }}>
                        {cert.issuer}
                      </div>
                    </div>
                    <h4 style={{
                      fontSize: '14px',
                      fontWeight: 700,
                      marginBottom: '4px'
                    }}>
                      {cert.title}
                    </h4>
                    <div style={{
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      opacity: 0.6
                    }}>
                      {cert.sub}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* See More Button */}
          <div style={{ textAlign: 'center' }}>
            <button style={{
              padding: '16px 32px',
              background: '#DC2626',
              color: '#FFF',
              border: '2px solid #DC2626',
              fontWeight: 700,
              fontSize: '14px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#B91C1C'
              e.target.style.borderColor = '#B91C1C'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#DC2626'
              e.target.style.borderColor = '#DC2626'
            }}
            >
              See More →
            </button>
          </div>
        </div>
      </motion.section>

      {/* Contact CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
        }}
      >
        <div style={{
          padding: '60px 32px',
          background: '#0F172A',
          color: '#FFF',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 800,
            marginBottom: '16px'
          }}>
            Ready to Discuss Your Project?
          </h2>
          <p style={{ fontSize: '16px', color: '#94A3B8' }}>
            Get in touch with our engineering team
          </p>
        </div>
        <div style={{
          padding: '60px 32px',
          background: '#DC2626',
          color: '#FFF',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '16px'
        }}>
          <div>
            <div style={{ fontSize: '12px', fontWeight: 700, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone</div>
            <div style={{ fontSize: '20px', fontWeight: 700 }}>+65 XXXX XXXX</div>
          </div>
          <div>
            <div style={{ fontSize: '12px', fontWeight: 700, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</div>
            <div style={{ fontSize: '20px', fontWeight: 700 }}>info@lslee.com.sg</div>
          </div>
          <button style={{
            marginTop: '16px',
            padding: '14px 28px',
            background: '#FFF',
            color: '#DC2626',
            border: '2px solid #FFF',
            fontWeight: 700,
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            cursor: 'pointer'
          }}>
            Contact Us →
          </button>
        </div>
      </motion.section>
    </div>
  )
}
