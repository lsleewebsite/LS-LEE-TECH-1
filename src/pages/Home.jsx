import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

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
  const industries = [
    {
      id: 'semiconductor',
      icon: '⚡',
      title: 'Semiconductor',
      description: 'Ultra-high purity gas systems, process piping, and cleanroom installations for wafer fabs',
      link: '/Industries#semiconductor'
    },
    {
      id: 'data-center',
      icon: '🖥️',
      title: 'Data Center',
      description: 'Mission-critical cooling infrastructure, chilled water systems, and precision environmental controls',
      link: '/Industries#data-center'
    },
    {
      id: 'industrial-gas',
      icon: '🏭',
      title: 'Industrial Gas & Process',
      description: 'Gas distribution networks, cryogenic equipment, and plant automation systems',
      link: '/Industries#industrial-gas'
    },
    {
      id: 'new-energy',
      icon: '🔋',
      title: 'New Energy / Hydrogen',
      description: 'Hydrogen compression, storage systems, and renewable energy infrastructure',
      link: '/Industries#new-energy'
    }
  ]

  const services = [
    {
      id: 'project-engineering',
      icon: '🔧',
      title: 'Project Engineering',
      description: 'End-to-end mechanical construction from design through commissioning',
      link: '/Services'
    },
    {
      id: 'plant-maintenance',
      icon: '⚙️',
      title: 'Plant Maintenance',
      description: '24/7 operations support, turnarounds, and preventive maintenance programs',
      link: '/Services'
    },
    {
      id: 'hydrogen-testing',
      icon: '🧪',
      title: 'Hydrogen Trailer Testing',
      description: 'DOT/ISO certification, hydrostatic testing, and fleet management',
      link: '/Services'
    },
    {
      id: 'cryogenic-systems',
      icon: '❄️',
      title: 'Cryogenic Systems',
      description: 'Vacuum-insulated hose assemblies and transfer lines for LIN, LOX, LAR, LNG',
      link: '/Services'
    }
  ]

  const projects = [
    {
      title: 'Fab-14 UHP Gas Distribution',
      industry: 'Semiconductor',
      scope: 'Design, fabrication, and installation of ultra-high purity gas systems',
      location: 'Singapore'
    },
    {
      title: 'ASU Cryogenic Plant Expansion',
      industry: 'Industrial Gas',
      scope: 'Cold box installation, process piping, and control systems integration',
      location: 'Jurong Island'
    },
    {
      title: 'H₂ Tube Trailer Certification Fleet',
      industry: 'New Energy',
      scope: 'Hydrostatic testing and DOT recertification of 50+ hydrogen trailers',
      location: 'Singapore'
    }
  ]

  const certifications = [
    { name: 'ISO 45001:2018', issuer: 'EQA IMS' },
    { name: 'ISO 9001:2015', issuer: 'EQA IMS' },
    { name: 'bizSAFE STAR', issuer: 'WSH Council' },
    { name: 'BS OHSAS 18001', issuer: 'Cert Intl' }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        height: '100vh',
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        color: '#FFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #FFF 2px, #FFF 4px)',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'bottom'
        }} />
        
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 32px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              fontSize: '72px',
              fontWeight: 900,
              marginBottom: '24px',
              lineHeight: 1.1,
              letterSpacing: '-0.02em'
            }}
          >
            Precision Engineering for<br />
            <span style={{ color: '#DC2626' }}>Critical Infrastructure</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{
              fontSize: '20px',
              maxWidth: '800px',
              margin: '0 auto 40px',
              color: '#94A3B8',
              lineHeight: 1.6
            }}
          >
            Mechanical contractor specializing in semiconductor, data center, and industrial gas systems across Singapore.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center'
            }}
          >
            <Link
              to="/Services"
              style={{
                padding: '16px 36px',
                background: '#DC2626',
                color: '#FFF',
                border: '2px solid #DC2626',
                fontWeight: 700,
                fontSize: '16px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                textDecoration: 'none',
                transition: 'all 0.3s',
                display: 'inline-block'
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
              Our Services
            </Link>
            <Link
              to="/Industries"
              style={{
                padding: '16px 36px',
                background: 'transparent',
                color: '#FFF',
                border: '2px solid #FFF',
                fontWeight: 700,
                fontSize: '16px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                textDecoration: 'none',
                transition: 'all 0.3s',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#FFF'
                e.target.style.color = '#0F172A'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent'
                e.target.style.color = '#FFF'
              }}
            >
              Industries We Serve
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        style={{
          padding: '100px 32px',
          background: '#FFF',
          borderBottom: '2px solid #0F172A'
        }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 900,
              marginBottom: '16px',
              color: '#0F172A'
            }}>
              Industries We Serve
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#64748B',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Specialized mechanical contracting across Singapore's most demanding sectors
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px'
            }}
          >
            {industries.map((industry) => (
              <motion.div
                key={industry.id}
                variants={cardVariant}
              >
                <Link
                  to={industry.link}
                  style={{
                    display: 'block',
                    padding: '40px',
                    background: '#F8F9FA',
                    border: '2px solid #0F172A',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                    height: '100%'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)'
                    e.currentTarget.style.borderColor = '#DC2626'
                    e.currentTarget.querySelector('.ind-icon').style.transform = 'scale(1.1) rotate(5deg)'
                    e.currentTarget.querySelector('.ind-title').style.color = '#DC2626'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.borderColor = '#0F172A'
                    e.currentTarget.querySelector('.ind-icon').style.transform = 'scale(1) rotate(0deg)'
                    e.currentTarget.querySelector('.ind-title').style.color = '#0F172A'
                  }}
                >
                  <div
                    className="ind-icon"
                    style={{
                      fontSize: '48px',
                      marginBottom: '20px',
                      transition: 'all 0.3s'
                    }}
                  >
                    {industry.icon}
                  </div>
                  <h3
                    className="ind-title"
                    style={{
                      fontSize: '24px',
                      fontWeight: 700,
                      marginBottom: '12px',
                      color: '#0F172A',
                      transition: 'color 0.3s'
                    }}
                  >
                    {industry.title}
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#64748B',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {industry.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        style={{
          padding: '100px 32px',
          background: '#F8F9FA',
          borderBottom: '2px solid #0F172A'
        }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 900,
              marginBottom: '16px',
              color: '#0F172A'
            }}>
              Engineering Services
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#64748B',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Four integrated service lines for end-to-end mechanical solutions
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px'
            }}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={cardVariant}
              >
                <Link
                  to={service.link}
                  style={{
                    display: 'block',
                    padding: '40px',
                    background: '#FFF',
                    border: '2px solid #0F172A',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                    height: '100%'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)'
                    e.currentTarget.style.borderColor = '#DC2626'
                    e.currentTarget.querySelector('.svc-icon').style.transform = 'scale(1.1) rotate(-5deg)'
                    e.currentTarget.querySelector('.svc-title').style.color = '#DC2626'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.borderColor = '#0F172A'
                    e.currentTarget.querySelector('.svc-icon').style.transform = 'scale(1) rotate(0deg)'
                    e.currentTarget.querySelector('.svc-title').style.color = '#0F172A'
                  }}
                >
                  <div
                    className="svc-icon"
                    style={{
                      fontSize: '48px',
                      marginBottom: '20px',
                      transition: 'all 0.3s'
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3
                    className="svc-title"
                    style={{
                      fontSize: '24px',
                      fontWeight: 700,
                      marginBottom: '12px',
                      color: '#0F172A',
                      transition: 'color 0.3s'
                    }}
                  >
                    {service.title}
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#64748B',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {service.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        style={{
          padding: '100px 32px',
          background: '#FFF',
          borderBottom: '2px solid #0F172A'
        }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 900,
              marginBottom: '16px',
              color: '#0F172A'
            }}>
              Project Portfolio
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#64748B',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Recent work across semiconductor, industrial gas, and new energy sectors
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '24px'
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariant}
                style={{
                  padding: '40px',
                  background: '#F8F9FA',
                  border: '2px solid #0F172A',
                  transition: 'all 0.3s',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)'
                  e.currentTarget.style.borderColor = '#DC2626'
                  e.currentTarget.querySelector('.proj-industry').style.color = '#2563EB'
                  e.currentTarget.querySelector('.proj-location').style.transform = 'translateX(4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.borderColor = '#0F172A'
                  e.currentTarget.querySelector('.proj-industry').style.color = '#DC2626'
                  e.currentTarget.querySelector('.proj-location').style.transform = 'translateX(0)'
                }}
              >
                <div
                  className="proj-industry"
                  style={{
                    fontSize: '12px',
                    color: '#DC2626',
                    fontWeight: 700,
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    transition: 'color 0.3s'
                  }}
                >
                  {project.industry}
                </div>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  marginBottom: '16px',
                  color: '#0F172A'
                }}>
                  {project.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#64748B',
                  lineHeight: 1.6,
                  marginBottom: '16px'
                }}>
                  {project.scope}
                </p>
                <div
                  className="proj-location"
                  style={{
                    fontSize: '13px',
                    color: '#94A3B8',
                    fontWeight: 600,
                    transition: 'transform 0.3s'
                  }}
                >
                  📍 {project.location}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div style={{
            textAlign: 'center',
            marginTop: '48px'
          }}>
            <div
              style={{
                display: 'inline-block',
                padding: '14px 32px',
                background: '#D1D5DB',
                color: '#6B7280',
                border: '2px solid #D1D5DB',
                fontWeight: 700,
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                cursor: 'not-allowed',
                opacity: 0.6
              }}
            >
              See More Projects (Coming Soon)
            </div>
          </div>
        </div>
      </motion.section>

      {/* Safety Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        style={{
          padding: '100px 32px',
          background: '#F8F9FA',
          borderBottom: '2px solid #0F172A'
        }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center'
          }}>
            {/* Left - Statement */}
            <div>
              <h2 style={{
                fontSize: '48px',
                fontWeight: 900,
                marginBottom: '24px',
                lineHeight: 1.1,
                color: '#0F172A'
              }}>
                Safety & Certifications
              </h2>
              <p style={{
                fontSize: '16px',
                color: '#64748B',
                lineHeight: 1.7,
                marginBottom: '20px'
              }}>
                Over 2.4 million safe manhours without a lost-time incident. Our ISO 45001 and bizSAFE STAR certifications demonstrate independently verified safety management systems.
              </p>
              <p style={{
                fontSize: '16px',
                color: '#64748B',
                lineHeight: 1.7,
                marginBottom: '32px'
              }}>
                When you hire us, you are hiring a contractor with audited processes and proven safety performance, not just promises.
              </p>
              <Link
                to="/Safety"
                style={{
                  display: 'inline-block',
                  padding: '14px 28px',
                  background: 'transparent',
                  color: '#0F172A',
                  border: '2px solid #0F172A',
                  fontWeight: 700,
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  textDecoration: 'none',
                  transition: 'all 0.3s'
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
                See More →
              </Link>
            </div>

            {/* Right - Certifications */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px'
            }}>
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  style={{
                    padding: '24px',
                    background: '#FFF',
                    border: '2px solid #0F172A',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)'
                    e.currentTarget.style.borderColor = '#2563EB'
                    e.currentTarget.querySelector('.cert-mark').style.transform = 'rotate(15deg)'
                    e.currentTarget.querySelector('.cert-mark').style.color = '#DC2626'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                    e.currentTarget.style.borderColor = '#0F172A'
                    e.currentTarget.querySelector('.cert-mark').style.transform = 'rotate(0deg)'
                    e.currentTarget.querySelector('.cert-mark').style.color = '#2563EB'
                  }}
                >
                  <div
                    className="cert-mark"
                    style={{
                      fontSize: '32px',
                      marginBottom: '12px',
                      color: '#2563EB',
                      transition: 'all 0.3s'
                    }}
                  >
                    ✓
                  </div>
                  <h4 style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    marginBottom: '6px',
                    color: '#0F172A'
                  }}>
                    {cert.name}
                  </h4>
                  <p style={{
                    fontSize: '12px',
                    color: '#64748B',
                    margin: 0
                  }}>
                    {cert.issuer}
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
            fontSize: '48px',
            fontWeight: 800,
            marginBottom: '24px'
          }}>
            Start Your Next Project
          </h2>
          <p style={{
            fontSize: '18px',
            marginBottom: '40px',
            opacity: 0.9
          }}>
            Talk to our engineering team about your upcoming mechanical project. We will put together a detailed scope, schedule, and proposal.
          </p>
          <div
            style={{
              display: 'inline-block',
              padding: '16px 40px',
              background: '#FFF',
              color: '#DC2626',
              border: '2px solid #FFF',
              fontWeight: 700,
              fontSize: '16px',
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
            }}
          >
            Contact Us →
          </div>
        </div>
      </motion.section>
    </div>
  )
}
