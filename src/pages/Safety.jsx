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
      certNumber: 'OSH-20-2239',
      image: '/path-to-cert-1.jpg',
      scope: 'Fabrication & Installation of Pipeworks and Related Plant Installation'
    },
    {
      id: 2,
      title: 'ISO 9001:2015',
      issuer: 'EQA IMS',
      description: 'Quality Management System',
      date: '27 March 2020 - 26 March 2023',
      certNumber: 'QS-20-2238',
      image: '/path-to-cert-2.jpg',
      scope: 'Fabrication & Installation of Pipeworks and Related Plant Installation'
    },
    {
      id: 3,
      title: 'bizSAFE STAR',
      issuer: 'WSH Council Singapore',
      description: 'Workplace Safety and Health Excellence',
      date: 'Valid till 26/03/2023',
      certNumber: 'E04940',
      image: '/path-to-cert-3.jpg',
      scope: 'Highest level of bizSAFE certification demonstrating exemplary WSH performance'
    },
    {
      id: 4,
      title: 'BS OHSAS 18001:2007',
      issuer: 'Certification International Singapore',
      description: 'Occupational Health & Safety Management',
      date: '16 March 2016 - 15 March 2019',
      certNumber: 'CIS/200610',
      image: '/path-to-cert-4.jpg',
      scope: 'Fabrication and installation of pipeworks and related plants installations'
    },
    {
      id: 5,
      title: 'SS 506 Part 1:2009',
      issuer: 'Certification International Singapore',
      description: 'Singapore Standard for Occupational H&S Management',
      date: '22 April 2016 - 15 March 2019',
      certNumber: 'CIS/200610',
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
            Third-party verified safety systems and quality controls. Our certifications prove we can execute your project safely and to specification.
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
                Why Our Safety Record Matters to Your Project
              </h2>
              <p style={{
                fontSize: '16px',
                color: '#64748B',
                lineHeight: 1.7,
                marginBottom: '20px'
              }}>
                Every certification on this page represents an independent audit of our safety procedures, quality controls, and management systems. When you hire us, you are hiring a contractor with verified processes, not just promises.
              </p>
              <p style={{
                fontSize: '16px',
                color: '#64748B',
                lineHeight: 1.7,
                marginBottom: '20px'
              }}>
                Our ISO 45001 and bizSAFE STAR certifications mean fewer incidents on your site, lower insurance risk, and faster regulatory approvals. Our ISO 9001 certification means consistent quality across every phase of the project.
              </p>
              <p style={{
                fontSize: '16px',
                color: '#64748B',
                lineHeight: 1.7
              }}>
                Over 2.4 million manhours without a lost-time incident. That is not luck. That is a documented, audited safety management system doing exactly what it was designed to do.
              </p>
            </div>

            {/* Right - Key Facts */}
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
                Track Record
              </div>
              
              <div style={{
                display: 'grid',
                gap: '28px'
              }}>
                {[
                  { value: '2.4M+', label: 'Safe Manhours Worked' },
                  { value: '0', label: 'Lost-Time Incidents' },
                  { value: '5', label: 'Active Safety Certifications' },
                  { value: '100%', label: 'Project Safety Compliance' }
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

      {/* Stacked Certificates Section */}
      <section style={{
        padding: '80px 32px',
        background: '#F8F9FA'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 800,
            marginBottom: '16px',
            textAlign: 'center',
            color: '#0F172A'
          }}>
            Certified Safety & Quality Systems
          </h2>
          <p style={{
            fontSize: '15px',
            color: '#64748B',
            textAlign: 'center',
            marginBottom: '60px',
            lineHeight: 1.6
          }}>
            Click any certificate to view the full documentation
          </p>

          {/* Stacked Cards */}
          <div style={{
            display: 'grid',
            gap: '24px'
          }}>
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1
                }}
                onClick={() => setSelectedCert(cert)}
                style={{
                  background: '#FFF',
                  border: '3px solid #0F172A',
                  cursor: 'pointer',
                  transition: 'all 0.4s',
                  position: 'relative',
                  transform: `translateY(${index * -8}px)`,
                  zIndex: certificates.length - index
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = `translateY(${index * -8 - 12}px) scale(1.02)`
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)'
                  e.currentTarget.style.borderColor = '#DC2626'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `translateY(${index * -8}px) scale(1)`
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = '#0F172A'
                }}
              >
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '140px 1fr auto',
                  gap: '32px',
                  alignItems: 'center',
                  padding: '32px'
                }}>
                  
                  {/* Number Badge */}
                  <div style={{
                    width: '140px',
                    height: '140px',
                    border: '3px solid #0F172A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#F8F9FA'
                  }}>
                    <div style={{
                      fontSize: '64px',
                      fontWeight: 900,
                      color: '#DC2626',
                      lineHeight: 1
                    }}>
                      {String(cert.id).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Certificate Info */}
                  <div>
                    <h3 style={{
                      fontSize: '28px',
                      fontWeight: 900,
                      marginBottom: '8px',
                      color: '#0F172A',
                      lineHeight: 1.2
                    }}>
                      {cert.title}
                    </h3>
                    <div style={{
                      fontSize: '13px',
                      color: '#DC2626',
                      fontWeight: 700,
                      marginBottom: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      {cert.issuer}
                    </div>
                    <p style={{
                      fontSize: '14px',
                      color: '#64748B',
                      lineHeight: 1.6,
                      marginBottom: '10px'
                    }}>
                      {cert.description}
                    </p>
                    <div style={{
                      fontSize: '12px',
                      color: '#94A3B8',
                      fontWeight: 600
                    }}>
                      Valid: {cert.date}
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <div style={{
                    fontSize: '32px',
                    color: '#DC2626',
                    fontWeight: 700
                  }}>
                    →
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
                  {String(selectedCert.id).padStart(2, '0')}
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
                  Certification Scope
                </div>
                <div style={{
                  fontSize: '13px',
                  color: '#0F172A'
                }}>
                  {selectedCert.scope}
                </div>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                marginTop: '16px'
              }}>
                <div>
                  <div style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#64748B',
                    marginBottom: '4px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em'
                  }}>
                    Certificate Number
                  </div>
                  <div style={{
                    fontSize: '13px',
                    color: '#0F172A',
                    fontWeight: 600,
                    fontFamily: 'monospace'
                  }}>
                    {selectedCert.certNumber}
                  </div>
                </div>
                <div>
                  <div style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#64748B',
                    marginBottom: '4px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em'
                  }}>
                    Validity Period
                  </div>
                  <div style={{
                    fontSize: '13px',
                    color: '#0F172A',
                    fontWeight: 600
                  }}>
                    {selectedCert.date}
                  </div>
                </div>
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
            Need Copies of Our Certifications for Your Tender?
          </h2>
          <p style={{
            fontSize: '16px',
            marginBottom: '32px',
            opacity: 0.9
          }}>
            We can provide certified copies of all our safety and quality certifications for your procurement or compliance team.
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
            Request Certification Package →
          </button>
        </div>
      </motion.section>
    </div>
  )
}
