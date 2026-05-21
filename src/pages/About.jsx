import React from 'react'
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
  Check: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="3,10 8,15 17,4" />
    </svg>
  ),
  Shield: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2 L21 5 V12 C21 17 17 21 12 22 C7 21 3 17 3 12 V5 Z" />
      <polyline points="8,12 11,15 16,9" />
    </svg>
  )
}

export default function About() {
  const timeline = [
    { year: "1989", event: "Founded", detail: "Established as a mechanical contractor serving Singapore's emerging industrial gas sector" },
    { year: "1995", event: "First Major Fab Project", detail: "Secured first semiconductor gas distribution project, launching our UHP expertise" },
    { year: "2003", event: "ISO Certification", detail: "Achieved ISO 9001:2000 certification, formalizing quality management systems" },
    { year: "2010", event: "Hydrogen Testing Facility", detail: "Commissioned dedicated tube trailer testing facility in Tuas, first of its kind in Singapore" },
    { year: "2018", event: "Safety Milestone", detail: "Reached 2 million safe manhours without lost-time incident across active projects" },
    { year: "2024", event: "New Energy Expansion", detail: "Expanded capabilities into hydrogen infrastructure for data center fuel cells and clean energy" }
  ]

  const values = [
    {
      title: 'Safety Without Compromise',
      description: 'Every technician empowered to stop work. Every procedure written in blood — meaning we learned it the hard way so you don't have to.'
    },
    {
      title: 'Engineers, Not Salespeople',
      description: 'When you call, you talk to someone who has actually built what you're asking about. No handoffs, no translations, no lost context.'
    },
    {
      title: 'Institutional Memory',
      description: 'We've been doing this since 1989. Our senior engineers have seen failure modes you'll never find in a textbook.'
    },
    {
      title: 'Vertical Integration',
      description: 'From engineering to installation to maintenance. We own the entire lifecycle because finger-pointing wastes your money and our reputation.'
    }
  ]

  const certifications = [
    { name: 'ISO 9001:2015', issuer: 'SAC-SINGLAS', scope: 'Quality Management Systems' },
    { name: 'ISO 45001:2018', issuer: 'SAC-SINGLAS', scope: 'Occupational Health & Safety' },
    { name: 'bizSAFE STAR', issuer: 'WSH Council', scope: 'Workplace Safety & Health' },
    { name: 'ASME U-Stamp', issuer: 'ASME', scope: 'Pressure Vessel Fabrication' }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        padding: '120px 32px 100px',
        background: '#0F172A',
        color: '#FFF',
        borderBottom: '2px solid #DC2626'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{
              fontFamily: 'IBM Plex Mono',
              fontSize: '12px',
              fontWeight: 700,
              color: '#DC2626',
              letterSpacing: '0.15em',
              marginBottom: '24px',
              textTransform: 'uppercase'
            }}>
              About Us
            </div>
            <h1 style={{
              fontSize: '56px',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: '32px',
              maxWidth: '900px'
            }}>
              We've Been Building Critical Gas Infrastructure Since Most Fabs in Singapore Were Just Blueprints
            </h1>
            <p style={{
              fontSize: '20px',
              color: '#94A3B8',
              lineHeight: 1.7,
              maxWidth: '800px'
            }}>
              37 years of mechanical engineering for industries where a single leak, wrong fitting, or missed inspection can cost millions in downtime or worse. We're still here because we don't cut corners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        style={{
          padding: '100px 32px',
          background: '#FFF'
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: '80px',
            alignItems: 'start'
          }}>
            <div>
              <h2 style={{
                fontSize: '42px',
                fontWeight: 900,
                marginBottom: '24px',
                lineHeight: 1.1
              }}>
                How We Got Here
              </h2>
              <p style={{
                fontSize: '16px',
                color: '#DC2626',
                fontWeight: 600,
                fontFamily: 'IBM Plex Mono',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}>
                1989 → Present
              </p>
            </div>
            <div style={{
              fontSize: '16px',
              color: '#64748B',
              lineHeight: 1.8
            }}>
              <p style={{ marginBottom: '24px' }}>
                L.S. Lee started in 1989 as a three-person mechanical contractor doing piping work for industrial gas plants. The semiconductor boom hadn't hit Singapore yet. Data centers weren't burning gigawatts. Hydrogen was something you learned about in chemistry class, not something you moved around in 40-foot tube trailers at 250 bar.
              </p>
              <p style={{ marginBottom: '24px' }}>
                We grew by doing one thing well and then doing it again. UHP gas distribution for one fab became UHP for twelve fabs. Plant turnarounds became long-term maintenance contracts. One-off tube trailer testing became Singapore's first dedicated hydrogen testing facility.
              </p>
              <p style={{ marginBottom: '24px' }}>
                Today we're a 50-person team with in-house design capability, fabrication shop, testing facility, and maintenance crews running 24/7 support contracts. We've worked on projects you've heard of and plenty you haven't — because our clients care more about uptime than press releases.
              </p>
              <p>
                The industry changed. We changed with it. What didn't change: if your name goes on the drawing, you own the outcome.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        style={{
          padding: '100px 32px',
          background: '#F8F9FA',
          borderTop: '2px solid #0F172A',
          borderBottom: '2px solid #0F172A'
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: 900,
            marginBottom: '60px',
            textAlign: 'center'
          }}>
            Key Milestones
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px'
          }}>
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{
                  padding: '32px',
                  background: '#FFF',
                  border: '2px solid #0F172A',
                  position: 'relative'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '32px',
                  background: '#DC2626',
                  color: '#FFF',
                  padding: '4px 12px',
                  fontFamily: 'IBM Plex Mono',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.1em'
                }}>
                  {item.year}
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  marginBottom: '12px',
                  marginTop: '8px'
                }}>
                  {item.event}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#64748B',
                  lineHeight: 1.6
                }}>
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        style={{
          padding: '100px 32px',
          background: '#0F172A',
          color: '#FFF'
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: 900,
            marginBottom: '16px',
            textAlign: 'center'
          }}>
            How We <span style={{ color: '#DC2626' }}>Actually</span> Work
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#94A3B8',
            textAlign: 'center',
            marginBottom: '60px',
            maxWidth: '700px',
            margin: '0 auto 60px'
          }}>
            Not corporate values from a branding deck. Real operating principles.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '32px'
          }}>
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{
                  padding: '40px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '2px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#DC2626'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                }}
              >
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: 900,
                  marginBottom: '16px',
                  color: '#DC2626'
                }}>
                  {value.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: '#94A3B8',
                  lineHeight: 1.7
                }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Structure */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        style={{
          padding: '100px 32px',
          background: '#FFF'
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: 900,
            marginBottom: '60px',
            textAlign: 'center'
          }}>
            Who You'll Work With
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px'
          }}>
            {[
              { dept: 'Engineering', count: '12', role: 'Project engineers, designers, HAZOP specialists' },
              { dept: 'Project Management', count: '6', role: 'Site supervisors, QA/QC, commissioning leads' },
              { dept: 'Field Operations', count: '28', role: 'Certified welders, pipefitters, maintenance techs' },
              { dept: 'Testing & Certification', count: '4', role: 'NDT technicians, hydrostatic test operators' },
              { dept: 'Safety & Compliance', count: '2', role: 'Safety officers, documentation specialists' },
              { dept: 'Administration', count: '3', role: 'Procurement, HR, accounts' }
            ].map((team, i) => (
              <div
                key={i}
                style={{
                  padding: '32px',
                  background: '#FFF',
                  border: '2px solid #E5E7EB',
                  textAlign: 'center',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#DC2626'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div style={{
                  fontSize: '48px',
                  fontWeight: 900,
                  color: '#DC2626',
                  marginBottom: '12px',
                  fontFamily: 'Archivo'
                }}>
                  {team.count}
                </div>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {team.dept}
                </h3>
                <p style={{
                  fontSize: '13px',
                  color: '#64748B',
                  lineHeight: 1.5
                }}>
                  {team.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Certifications */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        style={{
          padding: '100px 32px',
          background: '#F8F9FA',
          borderTop: '2px solid #0F172A'
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '60px',
            alignItems: 'start'
          }}>
            <div>
              <div style={{ marginBottom: '24px', color: '#DC2626' }}>
                <Icon.Shield />
              </div>
              <h2 style={{
                fontSize: '42px',
                fontWeight: 900,
                marginBottom: '24px',
                lineHeight: 1.1
              }}>
                Certifications That Actually Matter
              </h2>
              <p style={{
                fontSize: '15px',
                color: '#64748B',
                lineHeight: 1.7
              }}>
                We maintain the certifications our clients require and auditors verify. No wall-of-logos marketing theater.
              </p>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '24px'
            }}>
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  style={{
                    padding: '28px',
                    background: '#FFF',
                    border: '2px solid #0F172A'
                  }}
                >
                  <div style={{
                    fontFamily: 'IBM Plex Mono',
                    fontSize: '10px',
                    fontWeight: 700,
                    color: '#64748B',
                    letterSpacing: '0.1em',
                    marginBottom: '8px',
                    textTransform: 'uppercase'
                  }}>
                    {cert.issuer}
                  </div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 900,
                    marginBottom: '8px',
                    color: '#DC2626'
                  }}>
                    {cert.name}
                  </h3>
                  <p style={{
                    fontSize: '13px',
                    color: '#64748B'
                  }}>
                    {cert.scope}
                  </p>
                </div>
              ))}
            </div>
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
            lineHeight: 1.2
          }}>
            Talk to Someone Who's Actually Done This Before
          </h2>
          <p style={{
            fontSize: '18px',
            marginBottom: '40px',
            opacity: 0.95,
            lineHeight: 1.7
          }}>
            Whether you're scoping a new plant, planning a turnaround, or troubleshooting a system nobody else wants to touch — we've probably seen it.
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
            fontFamily: 'Archivo'
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
