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
        padding: '120px 32px 80px',
        background: '#0F172A',
        color: '#FFF',
        borderBottom: '2px solid #0F172A'
      }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          <div style={{ maxWidth: '900px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                display: 'inline-block',
                padding: '8px 16px',
                background: 'rgba(220, 38, 38, 0.1)',
                border: '1px solid #DC2626',
                marginBottom: '24px',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: '#DC2626',
                textTransform: 'uppercase'
              }}
            >
              Established 2003
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                fontSize: 'clamp(40px, 6vw, 72px)',
                fontWeight: 800,
                marginBottom: '28px',
                lineHeight: 1.1
              }}
            >
              20+ Years Delivering Safety-Critical Mechanical Solutions to Singapore's Gas and Process Industries
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                fontSize: '18px',
                color: 'rgba(255,255,255,0.8)',
                marginBottom: '40px',
                lineHeight: 1.6,
                maxWidth: '600px'
              }}
            >
              LS Lee Technologies brings proven expertise where precision and safety are non-negotiable.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
            >
              <button style={{
                padding: '16px 32px',
                background: '#DC2626',
                color: '#FFF',
                border: '2px solid #DC2626',
                fontWeight: 700,
                fontSize: '14px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}>
                Our Industries →
              </button>
              <button style={{
                padding: '16px 32px',
                background: 'transparent',
                color: '#FFF',
                border: '2px solid #2563EB',
                fontWeight: 700,
                fontSize: '14px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
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
              { value: '20+', label: 'Years Experience' },
              { value: '450+', label: 'Projects Delivered' },
              { value: '3,200+', label: 'Trailers Tested' },
              { value: '2.4M', label: 'Safe Manhours' }
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
                  transition: 'all 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translate(4px, -4px)'
                  e.currentTarget.style.boxShadow = '-6px 6px 0 #0F172A'
                  const title = e.currentTarget.querySelector('h3')
                  const learnMore = e.currentTarget.querySelector('.learn-more')
                  if (title) title.style.color = '#2563EB'
                  if (learnMore) learnMore.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translate(0, 0)'
                  e.currentTarget.style.boxShadow = 'none'
                  const title = e.currentTarget.querySelector('h3')
                  const learnMore = e.currentTarget.querySelector('.learn-more')
                  if (title) title.style.color = '#0F172A'
                  if (learnMore) learnMore.style.transform = 'translateX(0)'
                }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  border: '2px solid #0F172A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  color: '#0F172A'
                }}>
                  {industry.icon}
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  marginBottom: '12px',
                  color: '#0F172A',
                  transition: 'color 0.3s'
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
                    transition: 'transform 0.3s'
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
                desc: 'Gas plant erection, piping systems, metering skids, turnkey delivery'
              },
              {
                num: '02',
                title: 'Plant Maintenance',
                image: '[Maintenance Work]',
                desc: 'Routine & shutdown maintenance, emergency response, long-term contracts'
              },
              {
                num: '03',
                title: 'Hydrogen Trailer Testing',
                image: '[Testing Equipment]',
                desc: 'Acoustic testing, certification, refurbishment, regulatory compliance'
              },
              {
                num: '04',
                title: 'Cryogenic Systems',
                image: '[Cryogenic Hose]',
                desc: 'Hose fabrication, repair, maintenance for ultra-low temperature applications'
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
            letterSpacing: '0.05em'
          }}>
            Contact Us →
          </button>
        </div>
      </motion.section>
    </div>
  )
}
