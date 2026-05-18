import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
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

export default function Safety() {
  const location = useLocation()
  const [[currentIndex, direction], setPage] = useState([0, 0])
  const [showModal, setShowModal] = useState(false)

  const certificates = [
    {
      id: 1,
      title: 'ISO 45001:2018',
      issuer: 'EQA IMS',
      description: 'Occupational Health & Safety Management System',
      date: '27 March 2020 - 26 March 2023',
      certNumber: 'OSH-20-2239',
      image: '/path-to-cert-1.jpg',
      scope: 'Fabrication & Installation of Pipeworks and Related Plant Installation',
      why: 'Independent verification that our safety management systems meet international standards. Reduces your project risk and insurance liability.'
    },
    {
      id: 2,
      title: 'ISO 9001:2015',
      issuer: 'EQA IMS',
      description: 'Quality Management System',
      date: '27 March 2020 - 26 March 2023',
      certNumber: 'QS-20-2238',
      image: '/path-to-cert-2.jpg',
      scope: 'Fabrication & Installation of Pipeworks and Related Plant Installation',
      why: 'Ensures consistent quality across every phase of your project. Third-party audited processes, not just promises.'
    },
    {
      id: 3,
      title: 'bizSAFE STAR',
      issuer: 'WSH Council Singapore',
      description: 'Workplace Safety and Health Excellence',
      date: 'Valid till 26/03/2023',
      certNumber: 'E04940',
      image: '/path-to-cert-3.jpg',
      scope: 'Highest level of bizSAFE certification demonstrating exemplary WSH performance',
      why: 'The highest level of workplace safety certification in Singapore. Demonstrates proven safety culture and performance.'
    },
    {
      id: 4,
      title: 'BS OHSAS 18001:2007',
      issuer: 'Certification International Singapore',
      description: 'Occupational Health & Safety Management',
      date: '16 March 2016 - 15 March 2019',
      certNumber: 'CIS/200610',
      image: '/path-to-cert-4.jpg',
      scope: 'Fabrication and installation of pipeworks and related plants installations',
      why: 'International standard for occupational health and safety. Predecessor to ISO 45001, demonstrating long-term safety commitment.'
    },
    {
      id: 5,
      title: 'SS 506 Part 1:2009',
      issuer: 'Certification International Singapore',
      description: 'Singapore Standard for Occupational H&S Management',
      date: '22 April 2016 - 15 March 2019',
      certNumber: 'CIS/200610',
      image: '/path-to-cert-5.jpg',
      scope: 'Fabrication and installation of pipeworks and related plants installations',
      why: 'Singapore national standard for workplace safety. Demonstrates compliance with local regulatory requirements.'
    }
  ]

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location])

  const paginate = (newDirection) => {
    const newIndex = currentIndex + newDirection
    if (newIndex >= 0 && newIndex < certificates.length) {
      setPage([newIndex, newDirection])
    }
  }

  const currentCert = certificates[currentIndex]

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
                Every certification below represents an independent audit of our safety procedures, quality controls, and management systems. When you hire us, you are hiring a contractor with verified processes, not just promises.
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

      {/* Carousel Section */}
      <section style={{
        padding: '80px 0',
        background: '#F8F9FA',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 32px' }}>
          
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
            Click any certificate to view full documentation
          </p>

          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            disabled={currentIndex === 0}
            style={{
              position: 'absolute',
              left: '32px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '60px',
              height: '60px',
              background: '#0F172A',
              border: '2px solid #0F172A',
              color: '#FFF',
              fontSize: '24px',
              cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
              opacity: currentIndex === 0 ? 0.3 : 1,
              transition: 'all 0.3s',
              zIndex: 10
            }}
            onMouseEnter={(e) => {
              if (currentIndex !== 0) {
                e.target.style.background = '#DC2626'
                e.target.style.borderColor = '#DC2626'
              }
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#0F172A'
              e.target.style.borderColor = '#0F172A'
            }}
          >
            ←
          </button>

          <button
            onClick={() => paginate(1)}
            disabled={currentIndex === certificates.length - 1}
            style={{
              position: 'absolute',
              right: '32px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '60px',
              height: '60px',
              background: '#0F172A',
              border: '2px solid #0F172A',
              color: '#FFF',
              fontSize: '24px',
              cursor: currentIndex === certificates.length - 1 ? 'not-allowed' : 'pointer',
              opacity: currentIndex === certificates.length - 1 ? 0.3 : 1,
              transition: 'all 0.3s',
              zIndex: 10
            }}
            onMouseEnter={(e) => {
              if (currentIndex !== certificates.length - 1) {
                e.target.style.background = '#DC2626'
                e.target.style.borderColor = '#DC2626'
              }
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#0F172A'
              e.target.style.borderColor = '#0F172A'
            }}
          >
            →
          </button>

          {/* Carousel Content */}
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 }
              }}
              style={{
                background: '#FFF',
                border: '3px solid #0F172A',
                cursor: 'pointer'
              }}
              onClick={() => setShowModal(true)}
            >
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                minHeight: '550px'
              }}>
                
                {/* Certificate Preview */}
                <div style={{
                  background: '#E5E7EB',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRight: '2px solid #0F172A',
                  padding: '60px',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '24px',
                    right: '24px',
                    padding: '8px 20px',
                    background: '#DC2626',
                    color: '#FFF',
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em'
                  }}>
                    Click to View Full
                  </div>

                  <div style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#DC2626',
                    marginBottom: '60px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>
                    {String(currentCert.id).padStart(2, '0')} / {String(certificates.length).padStart(2, '0')}
                  </div>
                  <div style={{
                    textAlign: 'center',
                    color: '#94A3B8'
                  }}>
                    <div style={{
                      fontSize: '16px',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      marginBottom: '12px'
                    }}>
                      [ Certificate Preview ]
                    </div>
                    <div style={{
                      fontSize: '13px',
                      opacity: 0.6
                    }}>
                      800 × 1000px
                    </div>
                  </div>
                </div>

                {/* Certificate Info */}
                <div style={{
                  padding: '60px 70px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  
                  {/* Issuer Badge */}
                  <div style={{
                    display: 'inline-block',
                    padding: '8px 24px',
                    background: '#0F172A',
                    color: '#FFF',
                    fontSize: '13px',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    marginBottom: '24px',
                    alignSelf: 'flex-start',
                    textTransform: 'uppercase'
                  }}>
                    {currentCert.issuer}
                  </div>

                  {/* Title */}
                  <h2 style={{
                    fontSize: '42px',
                    fontWeight: 900,
                    marginBottom: '16px',
                    lineHeight: 1.1,
                    color: '#0F172A'
                  }}>
                    {currentCert.title}
                  </h2>

                  {/* Description */}
                  <div style={{
                    fontSize: '15px',
                    color: '#DC2626',
                    fontWeight: 700,
                    marginBottom: '24px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {currentCert.description}
                  </div>

                  {/* Why This Matters */}
                  <p style={{
                    fontSize: '15px',
                    color: '#64748B',
                    lineHeight: 1.7,
                    marginBottom: '28px'
                  }}>
                    {currentCert.why}
                  </p>

                  {/* Details Grid */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '20px',
                    marginBottom: '32px'
                  }}>
                    <div>
                      <div style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        color: '#94A3B8',
                        marginBottom: '6px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em'
                      }}>
                        Certificate Number
                      </div>
                      <div style={{
                        fontSize: '14px',
                        color: '#0F172A',
                        fontWeight: 600,
                        fontFamily: 'monospace'
                      }}>
                        {currentCert.certNumber}
                      </div>
                    </div>
                    <div>
                      <div style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        color: '#94A3B8',
                        marginBottom: '6px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em'
                      }}>
                        Validity Period
                      </div>
                      <div style={{
                        fontSize: '14px',
                        color: '#0F172A',
                        fontWeight: 600
                      }}>
                        {currentCert.date}
                      </div>
                    </div>
                  </div>

                  {/* View Full Button */}
                  <div style={{
                    padding: '14px 28px',
                    background: '#DC2626',
                    color: '#FFF',
                    border: '2px solid #DC2626',
                    fontWeight: 700,
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    textAlign: 'center',
                    transition: 'all 0.3s'
                  }}>
                    View Full Certificate →
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginTop: '40px'
          }}>
            {certificates.map((cert, index) => (
              <button
                key={cert.id}
                onClick={() => setPage([index, index > currentIndex ? 1 : -1])}
                style={{
                  width: currentIndex === index ? '40px' : '12px',
                  height: '12px',
                  background: currentIndex === index ? '#DC2626' : '#D1D5DB',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  borderRadius: '6px'
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
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
              onClick={() => setShowModal(false)}
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
              minHeight: '700px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '80px'
            }}>
              <div style={{
                textAlign: 'center',
                color: '#94A3B8'
              }}>
                <div style={{
                  fontSize: '140px',
                  fontWeight: 900,
                  marginBottom: '24px',
                  color: '#D1D5DB',
                  lineHeight: 1
                }}>
                  {String(currentCert.id).padStart(2, '0')}
                </div>
                <div style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '16px'
                }}>
                  [ Full Certificate Scan ]
                </div>
                <div style={{
                  fontSize: '16px',
                  opacity: 0.7
                }}>
                  {currentCert.title}
                </div>
              </div>
            </div>

            {/* Certificate Details */}
            <div style={{
              padding: '50px',
              borderTop: '2px solid #0F172A'
            }}>
              <h3 style={{
                fontSize: '32px',
                fontWeight: 900,
                marginBottom: '16px',
                color: '#0F172A'
              }}>
                {currentCert.title}
              </h3>
              <div style={{
                fontSize: '15px',
                color: '#DC2626',
                fontWeight: 700,
                marginBottom: '24px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Issued by {currentCert.issuer}
              </div>
              <p style={{
                fontSize: '16px',
                color: '#64748B',
                lineHeight: 1.7,
                marginBottom: '24px'
              }}>
                {currentCert.why}
              </p>
              <div style={{
                padding: '20px',
                background: '#F8F9FA',
                border: '1px solid #E5E7EB',
                marginBottom: '20px'
              }}>
                <div style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#64748B',
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em'
                }}>
                  Certification Scope
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#0F172A',
                  lineHeight: 1.6
                }}>
                  {currentCert.scope}
                </div>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px'
              }}>
                <div>
                  <div style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#64748B',
                    marginBottom: '6px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em'
                  }}>
                    Certificate Number
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: '#0F172A',
                    fontWeight: 600,
                    fontFamily: 'monospace'
                  }}>
                    {currentCert.certNumber}
                  </div>
                </div>
                <div>
                  <div style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#64748B',
                    marginBottom: '6px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em'
                  }}>
                    Validity Period
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: '#0F172A',
                    fontWeight: 600
                  }}>
                    {currentCert.date}
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
