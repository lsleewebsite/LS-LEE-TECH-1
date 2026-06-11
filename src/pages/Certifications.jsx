import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NOTION_KEY = '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'
const DATABASE_ID = '37c7a921a230808d9e92d444f1b62d44'
const PROXY = 'https://corsproxy.io/?'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
}

function parseCerts(results) {
  return results
    .filter(page => page.properties?.Published?.checkbox === true)
    .map(page => {
      const p = page.properties
      return {
        id: page.id,
        name: p.Name?.title?.[0]?.text?.content || 'Untitled',
        body: p.Body?.rich_text?.[0]?.text?.content || '',
        scope: p.Scope?.rich_text?.[0]?.text?.content || '',
        certNumber: p.CertNumber?.rich_text?.[0]?.text?.content || '',
        validFrom: p.ValidFrom?.date?.start || '',
        validTo: p.ValidTo?.date?.start || '',
        certificate: p.Certificate?.url || null,
      }
    })
}

function formatDate(dateStr) {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

function Modal({ cert, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = 'unset' }
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.85)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '32px'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: '#FFF',
            width: '100%',
            maxWidth: '680px',
            maxHeight: '90vh',
            overflow: 'auto',
            position: 'relative',
            border: '2px solid #0F172A'
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              width: '40px',
              height: '40px',
              background: '#DC2626',
              color: '#FFF',
              border: 'none',
              fontSize: '20px',
              cursor: 'pointer',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.background = '#0F172A'}
            onMouseLeave={(e) => e.target.style.background = '#DC2626'}
          >
            x
          </button>

          {/* Certificate Image/Preview */}
          <div style={{
            height: '320px',
            background: '#F1F5F9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottom: '2px solid #E5E7EB',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {cert.certificate ? (
              <>
                <img
                  src={cert.certificate}
                  alt={cert.name}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                  onError={(e) => { e.target.style.display = 'none' }}
                />
                <a
                  href={cert.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '64px',
                    padding: '8px 16px',
                    background: '#DC2626',
                    color: '#FFF',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    fontFamily: 'IBM Plex Mono',
                    textDecoration: 'none',
                    transition: 'background 0.2s'
                   }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#0F172A'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#DC2626'}
              >
                CLICK TO VIEW
              </a>
            </>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '64px', fontWeight: 900, color: '#CBD5E1', fontFamily: 'Archivo', marginBottom: '12px' }}>
                {String(1).padStart(2, '0')}
              </div>
              <div style={{ fontFamily: 'IBM Plex Mono', fontSize: '11px', color: '#94A3B8', letterSpacing: '0.1em' }}>
                [ CERTIFICATE PREVIEW ]
              </div>
            </div>
          )}
          </div>

          {/* Details */}
          <div style={{ padding: '40px' }}>
            <h2 style={{
              fontSize: '28px',
              fontWeight: 900,
              marginBottom: '8px',
              fontFamily: 'Archivo, sans-serif',
              color: '#0F172A'
            }}>
              {cert.name}
            </h2>

            {cert.body && (
              <div style={{
                fontSize: '13px',
                fontWeight: 700,
                color: '#DC2626',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontFamily: 'IBM Plex Mono',
                marginBottom: '24px'
              }}>
                ISSUED BY {cert.body}
              </div>
            )}

            {cert.scope && (
              <p style={{
                fontSize: '15px',
                color: '#475569',
                lineHeight: 1.7,
                marginBottom: '28px'
              }}>
                {cert.scope}
              </p>
            )}

            {/* Cert Number + Validity */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {cert.certNumber && (
                <div style={{
                  padding: '16px 20px',
                  background: '#F8F9FA',
                  border: '2px solid #E5E7EB'
                }}>
                  <div style={{
                    fontFamily: 'IBM Plex Mono',
                    fontSize: '10px',
                    fontWeight: 700,
                    color: '#94A3B8',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '8px'
                  }}>
                    Certificate Number
                  </div>
                  <div style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#0F172A',
                    fontFamily: 'IBM Plex Mono'
                  }}>
                    {cert.certNumber}
                  </div>
                </div>
              )}

              {(cert.validFrom || cert.validTo) && (
                <div style={{
                  padding: '16px 20px',
                  background: '#F8F9FA',
                  border: '2px solid #E5E7EB'
                }}>
                  <div style={{
                    fontFamily: 'IBM Plex Mono',
                    fontSize: '10px',
                    fontWeight: 700,
                    color: '#94A3B8',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '8px'
                  }}>
                    Validity Period
                  </div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#0F172A',
                    fontFamily: 'IBM Plex Mono'
                  }}>
                    {formatDate(cert.validFrom)} — {formatDate(cert.validTo)}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Certifications() {
  const [certs, setCerts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedCert, setSelectedCert] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    async function fetchCerts() {
      try {
        const res = await fetch(
          `${PROXY}https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${NOTION_KEY}`,
              'Notion-Version': '2022-06-28',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({})
          }
        )
        if (!res.ok) throw new Error(`Notion API error: ${res.status}`)
        const data = await res.json()
        setCerts(parseCerts(data.results))
      } catch (err) {
        console.error(err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchCerts()
  }, [])

  const prev = () => setActiveIndex(i => i === 0 ? certs.length - 1 : i - 1)
  const next = () => setActiveIndex(i => i === certs.length - 1 ? 0 : i + 1)

  return (
    <div>
      {/* Hero */}
      <section style={{ padding: '100px 32px 80px', background: '#0F172A', color: '#FFF', borderBottom: '2px solid #DC2626' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 style={{ fontSize: '56px', fontWeight: 900, marginBottom: '28px', lineHeight: 1.1, fontFamily: 'Archivo, sans-serif' }}>
              Our <span style={{ color: '#DC2626' }}>Certifications</span>
            </h1>
            <p style={{ fontSize: '20px', color: '#94A3B8', maxWidth: '800px', lineHeight: 1.7 }}>
              Industry-recognised certifications demonstrating our commitment to quality, safety, and technical excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Carousel Section */}
      <section style={{ padding: '100px 32px', background: '#F1F5F9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '42px', fontWeight: 900, marginBottom: '12px', fontFamily: 'Archivo, sans-serif', color: '#0F172A' }}>
              Certified Safety & Quality Systems
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', fontFamily: 'IBM Plex Sans' }}>
              Click any certificate to view full documentation
            </p>
          </div>

          {loading && (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <div style={{
                width: '48px', height: '48px', border: '4px solid #E5E7EB',
                borderTopColor: '#DC2626', borderRadius: '50%',
                animation: 'spin 0.8s linear infinite', margin: '0 auto 24px'
              }}></div>
              <div style={{ fontFamily: 'IBM Plex Mono', fontSize: '13px', color: '#64748B' }}>Loading certifications...</div>
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
          )}

          {error && (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <div style={{ fontFamily: 'IBM Plex Mono', fontSize: '13px', color: '#DC2626', marginBottom: '8px' }}>Failed to load certifications</div>
              <div style={{ fontSize: '13px', color: '#64748B' }}>{error}</div>
            </div>
          )}

          {!loading && !error && certs.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <div style={{
                fontFamily: 'IBM Plex Mono',
                fontSize: '13px',
                color: '#64748B',
                letterSpacing: '0.1em',
                marginBottom: '8px'
              }}>
                NO CERTIFICATIONS AVAILABLE
              </div>
              <div style={{ fontSize: '14px', color: '#94A3B8' }}>
                Check back soon
              </div>
            </div>
          )}
                  onMouseEnter={(e) => e.target.style.background = '#DC2626'}
                  onMouseLeave={(e) => e.target.style.background = '#0F172A'}
                >
                  &larr;
                </button>

                {/* Cards */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', overflow: 'hidden', width: '100%', maxWidth: '900px', justifyContent: 'center' }}>
                  {certs.map((cert, i) => {
                    const offset = i - activeIndex
                    const isActive = offset === 0
                    const isAdjacent = Math.abs(offset) === 1
                    const isVisible = Math.abs(offset) <= 1

                    if (!isVisible) return null

                    return (
                      <motion.div
                        key={cert.id}
                        onClick={() => isActive ? setSelectedCert(cert) : setActiveIndex(i)}
                        animate={{
                          scale: isActive ? 1 : 0.8,
                          opacity: isActive ? 1 : 0.5,
                          rotateY: offset * -15
                        }}
                        transition={{ duration: 0.4 }}
                        style={{
                          width: isActive ? '340px' : '240px',
                          minWidth: isActive ? '340px' : '240px',
                          height: isActive ? '460px' : '380px',
                          background: '#FFF',
                          border: `2px solid ${isActive ? '#0F172A' : '#E5E7EB'}`,
                          cursor: 'pointer',
                          position: 'relative',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '32px',
                          transition: 'all 0.4s',
                          boxShadow: isActive ? '0 20px 60px rgba(0,0,0,0.15)' : 'none',
                          flexShrink: 0
                        }}
                      >
                        {/* Click to view badge - active only */}
                        {isActive && (
                          <div style={{
                            position: 'absolute',
                            top: '16px',
                            right: '16px',
                            padding: '6px 12px',
                            background: '#DC2626',
                            color: '#FFF',
                            fontSize: '10px',
                            fontWeight: 700,
                            letterSpacing: '0.1em',
                            fontFamily: 'IBM Plex Mono'
                          }}>
                            CLICK TO VIEW
                          </div>
                        )}

                        {/* Number */}
                        <div style={{
                          fontSize: isActive ? '80px' : '60px',
                          fontWeight: 900,
                          color: '#E2E8F0',
                          fontFamily: 'Archivo',
                          lineHeight: 1,
                          marginBottom: '16px'
                        }}>
                          {String(i + 1).padStart(2, '0')}
                        </div>

                        {/* Preview placeholder */}
                        <div style={{
                          fontFamily: 'IBM Plex Mono',
                          fontSize: '10px',
                          color: '#94A3B8',
                          letterSpacing: '0.1em',
                          marginBottom: '24px'
                        }}>
                          [ CERTIFICATE PREVIEW ]
                        </div>

                        {/* Name */}
                        <div style={{
                          fontSize: isActive ? '18px' : '14px',
                          fontWeight: 900,
                          color: '#0F172A',
                          fontFamily: 'Archivo',
                          textAlign: 'center',
                          marginBottom: '8px'
                        }}>
                          {cert.name}
                        </div>

                        {/* Body */}
                        {cert.body && (
                          <div style={{
                            fontSize: '12px',
                            fontWeight: 700,
                            color: '#DC2626',
                            fontFamily: 'IBM Plex Mono',
                            letterSpacing: '0.05em',
                            textAlign: 'center',
                            textTransform: 'uppercase'
                          }}>
                            {cert.body}
                          </div>
                        )}
                      </motion.div>
                    )
                  })}
                </div>

                {/* Next Button */}
                <button
                  onClick={next}
                  style={{
                    width: '56px', height: '56px', background: '#0F172A', color: '#FFF',
                    border: 'none', fontSize: '20px', cursor: 'pointer', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#DC2626'}
                  onMouseLeave={(e) => e.target.style.background = '#0F172A'}
                >
                  &rarr;
                </button>
              </div>

              {/* Active Cert Info Below */}
              {certs[activeIndex] && (
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ textAlign: 'center', marginTop: '40px' }}
                >
                  <h3 style={{ fontSize: '28px', fontWeight: 900, marginBottom: '8px', fontFamily: 'Archivo', color: '#0F172A' }}>
                    {certs[activeIndex].name}
                  </h3>
                  {certs[activeIndex].body && (
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#DC2626', fontFamily: 'IBM Plex Mono', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
                      {certs[activeIndex].body}
                    </div>
                  )}
                </motion.div>
              )}

              {/* Dots */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
                {certs.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    style={{
                      width: activeIndex === i ? '24px' : '8px',
                      height: '8px',
                      background: activeIndex === i ? '#DC2626' : '#CBD5E1',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      padding: 0
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedCert && (
        <Modal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}

      {/* CTA */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeInUp}
        style={{ padding: '100px 32px', background: '#DC2626', color: '#FFF', textAlign: 'center' }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: 900, marginBottom: '24px', lineHeight: 1.2, fontFamily: 'Archivo' }}>
            Questions About Our Certifications?
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '40px', opacity: 0.95, lineHeight: 1.7 }}>
            Need detailed certification documentation or have questions about our compliance standards? Contact us.
          </p>
          <a href="/Contact"
            style={{ display: 'inline-block', padding: '18px 40px', background: '#FFF', color: '#DC2626', border: '2px solid #FFF', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.05em', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.3s', fontFamily: 'IBM Plex Sans' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#0F172A'; e.currentTarget.style.color = '#FFF'; e.currentTarget.style.borderColor = '#0F172A' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#FFF'; e.currentTarget.style.color = '#DC2626'; e.currentTarget.style.borderColor = '#FFF' }}
          >
            Get in Touch
          </a>
        </div>
      </motion.section>
    </div>
  )
}
