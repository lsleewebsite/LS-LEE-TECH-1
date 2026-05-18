import React, { useState, useEffect } from 'react'
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

export default function Safety() {
  const location = useLocation()
  const [selectedCert, setSelectedCert] = useState(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location])

  const certificates = [
    {
      id: 1,
      title: 'ISO 45001:2018',
      issuer: 'EQA IMS',
      description: 'Occupational Health & Safety Management System',
      date: '27 March 2020 - 26 March 2023',
      image: '/path-to-cert-1.jpg', // Replace with actual path
      scope: 'Fabrication & Installation of Pipeworks and Related Plant Installation'
    },
    {
      id: 2,
      title: 'ISO 9001:2015',
      issuer: 'EQA IMS',
      description: 'Quality Management System',
      date: '27 March 2020 - 26 March 2023',
      image: '/path-to-cert-2.jpg',
      scope: 'Fabrication & Installation of Pipeworks and Related Plant Installation'
    },
    {
      id: 3,
      title: 'bizSAFE STAR',
      issuer: 'WSH Council',
      description: 'Workplace Safety and Health',
      date: 'Valid till 26/03/2023',
      image: '/path-to-cert-3.jpg',
      scope: 'Highest level of bizSAFE certification'
    },
    {
      id: 4,
      title: 'BS OHSAS 18001:2007',
      issuer: 'Certification International',
      description: 'Occupational Health & Safety Management',
      date: '16 March 2016 - 15 March 2019',
      image: '/path-to-cert-4.jpg',
      scope: 'Fabrication and installation of pipeworks and related plants installations'
    },
    {
      id: 5,
      title: 'SS 506 Part 1:2009',
      issuer: 'Certification International',
      description: 'Occupational Health & Safety Management System',
      date: '22 April 2016 - 15 March 2019',
      image: '/path-to-cert-5.jpg',
      scope: 'Fabrication and installation of pipeworks and related plants installations'
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
            Safety & Certifications
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
            Safety isn't just a priority—it's the foundation of everything we do. Our certifications demonstrate our commitment to the highest standards in workplace safety and quality management.
          </motion.p>
        </div>
      </section>

      {/* Safety Statement Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        style={{
          padding: '80px 32px',
          background: '#FFF',
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
                fontSize: '42px',
                fontWeight: 900,
                marginBottom: '24px',
                lineHeight: 1.2,
                color: '#0F172A'
              }}>
                2.4 Million Safe Manhours Without Lost-Time Incident
              </h2>
              <p style={{
                fontSize: '16px',
                color: '#64748B',
                lineHeight: 1.7,
                marginBottom: '20px'
              }}>
                Our safety culture is built on accountability, training, and frontline ownership. Every technician, every engineer, every supervisor—empowered to stop work if conditions aren't right.
              </p>
              <p style={{
                fontSize: '16px',
                color: '#64748B',
                lineHeight: 1.7
              }}>
                From daily toolbox talks to advanced HAZOP reviews, safety is integrated into project planning, execution, and closeout. Our track record speaks for itself.
              </p>
            </div>

            {/* Right - Key Stats */}
            <div style={{
              background: '#F8F9FA',
              border: '2px solid #0F172A',
              padding: '50px'
            }}>
              <div style={{
                fontSize: '14px',
                fontWeight: 700,
                color: '#DC2626',
                marginBottom: '32px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em'
              }}>
                Safety by the Numbers
              </div>
              
              <div style={{
                display: 'grid',
                gap: '28px'
              }}>
                {[
                  { value: '2.4M+', label: 'Safe Manhours' },
                  { value: '0', label: 'Lost-Time Incidents' },
                  { value: '100%', label: 'Safety Training Compliance' },
                  { value: '5', label: 'Major Certifications' }
                ].map((stat, i) => (
                  <div key={i}>
                    <div style={{
                      fontSize: '36px',
                      fontWeight: 900,
                      color: '#0F172A',
                      marginBottom: '6px',
                      lineHeight: 1
                    }}>
                      {stat.value}
                    </div>
                    <div style={{
                      fontSize: '13px',
                      color: '#64748B',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      fontWeight: 600
                    }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Certifications Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        style={{
          padding: '80px 32px',
          background: '#F8F9FA'
        }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 800,
            marginBottom: '48px',
            textAlign: 'center',
            color: '#0F172A'
          }}>
            Our Certifications
          </h2>

          <motion.div
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}
          >
            {certificates.map((cert) => (
              <motion.div
                key={cert.id}
                variants={cardVariant}
                onClick={() => setSelectedCert(cert)}
                style={{
                  background: '#FFF',
                  border: '2px solid #0F172A',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)'
                  e.currentTarget.style.borderColor = '#DC2626'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = '#0F172A'
                }}
              >
                {/* Certificate Preview Image */}
                <div style={{
                  height: '320px',
                  background: '#E5E7EB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '2px solid #0F172A',
                  position: 'relative'
                }}>
                  <div style={{
                    textAlign: 'center',
                    color: '#94A3B8'
                  }}>
                    <div style={{
                      fontSize: '48px',
                      fontWeight: 900,
                      marginBottom: '12px',
                      color: '#D1D5DB'
                    }}>
                      {cert.id}
                    </div>
                    <div style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase'
                    }}>
                      [ Certificate Preview ]
                    </div>
                  </div>
                  
                  {/* Click to View Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    padding: '8px 16px',
                    background: '#DC2626',
                    color: '#FFF',
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em'
                  }}>
                    Click to View
                  </div>
                </div>

                {/* Certificate Info */}
                <div style={{ padding: '24px' }}>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    marginBottom: '8px',
                    color: '#0F172A'
                  }}>
                    {cert.title}
                  </h3>
                  <div style={{
                    fontSize: '12px',
                    color: '#DC2626',
                    fontWeight: 700,
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {cert.issuer}
                  </div>
                  <p style={{
                    fontSize: '13px',
                    color: '#64748B',
                    lineHeight: 1.6,
                    marginBottom: '12px'
                  }}>
                    {cert.description}
                  </p>
                  <div style={{
                    fontSize: '12px',
                    color: '#94A3B8',
                    fontWeight: 600
                  }}>
                    {cert.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Modal */}
      {selectedCert && (
        <div
          onClick={() => setSelectedCert(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(15, 23, 42, 0.95)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            cursor: 'pointer'
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#FFF',
              border: '3px solid #DC2626',
              maxWidth: '900px',
              maxHeight: '90vh',
              overflow: 'auto',
              cursor: 'default',
              position: 'relative'
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '40px',
                height: '40px',
                background: '#DC2626',
                border: 'none',
                color: '#FFF',
                fontSize: '24px',
                cursor: 'pointer',
                zIndex: 10,
                fontWeight: 700
              }}
            >
              ×
            </button>

            {/* Certificate Image Full Size */}
            <div style={{
              background: '#E5E7EB',
              minHeight: '600px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '60px'
            }}>
              <div style={{
                textAlign: 'center',
                color: '#94A3B8'
              }}>
                <div style={{
                  fontSize: '120px',
                  fontWeight: 900,
                  marginBottom: '20px',
                  color: '#D1D5DB',
                  lineHeight: 1
                }}>
                  {selectedCert.id}
                </div>
                <div style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '12px'
                }}>
                  [ Full Certificate Image ]
                </div>
                <div style={{
                  fontSize: '14px',
                  opacity: 0.7
                }}>
                  {selectedCert.title}
                </div>
              </div>
            </div>

            {/* Certificate Details */}
            <div style={{
              padding: '40px',
              borderTop: '2px solid #0F172A'
            }}>
              <h3 style={{
                fontSize: '28px',
                fontWeight: 900,
                marginBottom: '12px',
                color: '#0F172A'
              }}>
                {selectedCert.title}
              </h3>
              <div style={{
                fontSize: '14px',
                color: '#DC2626',
                fontWeight: 700,
                marginBottom: '20px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Issued by {selectedCert.issuer}
              </div>
              <p style={{
                fontSize: '15px',
                color: '#64748B',
                lineHeight: 1.7,
                marginBottom: '16px'
              }}>
                {selectedCert.description}
              </p>
              <div style={{
                padding: '16px',
                background: '#F8F9FA',
                border: '1px solid #E5E7EB',
                marginBottom: '12px'
              }}>
                <div style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#64748B',
                  marginBottom: '6px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em'
                }}>
                  Scope
                </div>
                <div style={{
                  fontSize: '13px',
                  color: '#0F172A'
                }}>
                  {selectedCert.scope}
                </div>
              </div>
              <div style={{
                fontSize: '13px',
                color: '#94A3B8',
                fontWeight: 600
              }}>
                Valid: {selectedCert.date}
              </div>
            </div>
          </motion.div>
        </div>
      )}

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
            Safety Questions or Compliance Requirements?
          </h2>
          <p style={{
            fontSize: '16px',
            marginBottom: '32px',
            opacity: 0.9
          }}>
            Our safety team is here to answer questions about our certifications, safety procedures, or site-specific requirements.
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
            Contact Safety Team →
          </button>
        </div>
      </motion.section>
    </div>
  )
}
