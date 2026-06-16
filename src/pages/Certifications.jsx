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
        issuedBy: p.IssuedBy?.rich_text?.[0]?.text?.content || '',
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
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)',
          zIndex: 1000, display: 'flex', alignItems: 'center',
          justifyContent: 'center', padding: '32px'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: '#FFF', width: '100%', maxWidth: '800px',
            maxHeight: '90vh', overflow: 'auto', position: 'relative',
            border: '2px solid #0F172A'
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: '16px', right: '16px',
              width: '40px', height: '40px', background: '#DC2626',
              color: '#FFF', border: 'none', fontSize: '20px', cursor: 'pointer',
              zIndex: 10, display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontWeight: 700, transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#0F172A'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#DC2626'}
          >
            x
          </button>

          <div style={{
            height: '500px', background: '#F1F5F9', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            borderBottom: '2px solid #E5E7EB', position: 'relative', overflow: 'hidden'
          }}>
            {cert.certificate ? (
              <React.Fragment>
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
                    position: 'absolute', top: '16px', right: '64px',
                    padding: '8px 16px', background: '#DC2626', color: '#FFF',
                    fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em',
                    fontFamily: 'IBM Plex Mono', textDecoration: 'none', transition: 'background 0.2s',
                    display: 'flex', alignItems: 'center', gap: '6px'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#0F172A'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#DC2626'}
                >
                  OPEN FULL IMAGE
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2.5">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15,3 21,3 21,9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </React.Fragment>
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

          <div style={{ padding: '40px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 900, marginBottom: '8px', fontFamily: 'Archivo, sans-serif', color: '#0F172A' }}>
              {cert.name}
            </h2>

            {cert.issuedBy && (
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#DC2626', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'IBM Plex Mono', marginBottom: '24px' }}>
                ISSUED BY {cert.issuedBy}
              </div>
            )}

            {cert.body && (
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.7, marginBottom: '20px' }}>
                {cert.body}
              </p>
            )}

            {cert.scope && (
              <div style={{ padding: '16px 20px', background: '#F8F9FA', border: '2px solid #E5E7EB', marginBottom: '20px' }}>
                <div style={{ fontFamily: 'IBM Plex Mono', fontSize: '10px', fontWeight: 700, color: '#94A3B8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Certification Scope
                </div>
                <div style={{ fontSize: '14px', color: '#0F172A', lineHeight: 1.6 }}>
                  {cert.scope}
                </div>
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {cert.certNumber && (
                <div style={{ padding: '16px 20px', background: '#F8F9FA', border: '2px solid #E5E7EB' }}>
                  <div style={{ fontFamily: 'IBM Plex Mono', fontSize: '10px', fontWeight: 700, color: '#94A3B8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Certificate Number
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A', fontFamily: 'IBM Plex Mono' }}>
                    {cert.certNumber}
                  </div>
                </div>
              )}

              {(cert.validFrom || cert.validTo) && (
                <div style={{ padding: '16px 20px', background: '#F8F9FA', border: '2px solid #E5E7EB' }}>
                  <div style={{ fontFamily: 'IBM Plex Mono', fontSize: '10px', fontWeight: 700, color: '#94A3B8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Validity Period
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A', fontFamily: 'IBM Plex Mono' }}>
                    {formatDate(cert.validFrom)} - {formatDate(cert.validTo)}
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

      {/* Three Pillars Strip */}
      <section style={{ padding: '80px 32px', background: '#0F172A', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            borderLeft: '1px solid rgba(255,255,255,0.1)'
          }}>
            {[
              {
                icon: (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#DC2626" strokeWidth="1.5">
                    <circle cx="20" cy="20" r="16" />
                    <polyline points="20,10 20,20 27,24" />
                  </svg>
                ),
                pillar: 'Experience',
                guarantee: 'Over two decades of continuous certification renewal, not first-time compliance.'
              },
              {
                icon: (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#DC2626" strokeWidth="1.5">
                    <polyline points="4,20 16,32 36,8" />
                  </svg>
                ),
                pillar: 'Quality',
                guarantee: 'ISO 9001 means every process is documented, audited, and built to deliver consistent results.'
              },
              {
                icon: (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#DC2626" strokeWidth="1.5">
                    <path d="M20 4 L34 9 V20 C34 28 28 34 20 36 C12 34 6 28 6 20 V9 Z" />
                    <polyline points="14,20 18,24 26,16" />
                  </svg>
                ),
                pillar: 'Safety',
                guarantee: 'bizSAFE STAR and ISO 45001 certified, your project is protected by independently verified safety systems.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                style={{
                  padding: '56px 48px',
                  borderRight: '1px solid rgba(255,255,255,0.1)',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <div style={{ marginBottom: '24px' }}>{item.icon}</div>
                <div style={{
                  fontFamily: 'IBM Plex Mono',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#DC2626',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  marginBottom: '16px'
                }}>
                  {item.pillar}
                </div>
                <p style={{ fontSize: '16px', color: '#94A3B8', lineHeight: 1.7, margin: 0 }}>
                  {item.guarantee}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section style={{ padding: '100px 32px', background: '#F1F5F9' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
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
              <div style={{ width: '48px', height: '48px', border: '4px solid #E5E7EB', borderTopColor: '#DC2626', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto 24px' }}></div>
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
              <div style={{ fontFamily: 'IBM Plex Mono', fontSize: '13px', color: '#64748B', letterSpacing: '0.1em', marginBottom: '8px' }}>
                NO CERTIFICATIONS AVAILABLE
              </div>
              <div style={{ fontSize: '14px', color: '#94A3B8' }}>Check back soon</div>
            </div>
          )}

          {!loading && !error && certs.length > 0 && (
            <React.Fragment>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '32px', padding: '40px 0' }}>

                <button
                  onClick={prev}
                  style={{ width: '56px', height: '56px', background: '#0F172A', color: '#FFF', border: 'none', fontSize: '20px', cursor: 'pointer', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#DC2626'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#0F172A'}
                >
                  &larr;
                </button>

                {/* Fixed-height stage so layout never jumps */}
                <div style={{ position: 'relative', width: '100%', maxWidth: '1100px', height: '560px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {certs.map((cert, i) => {
                    const offset = i - activeIndex
                    const isActive = offset === 0
                    const isVisible = Math.abs(offset) <= 1
                    if (!isVisible) return null

                    return (
                      <motion.div
                        key={cert.id}
                        onClick={() => isActive ? setSelectedCert(cert) : setActiveIndex(i)}
                        animate={{
                          scale: isActive ? 1 : 0.75,
                          opacity: isActive ? 1 : 0.4,
                          x: offset * 280,
                          rotateY: offset * -15,
                          zIndex: isActive ? 2 : 1
                        }}
                        transition={{ duration: 0.4 }}
                        style={{
                          width: '420px',
                          height: '560px',
                          background: '#F8F9FA',
                          border: `2px solid ${isActive ? '#0F172A' : '#E5E7EB'}`,
                          cursor: 'pointer',
                          position: 'absolute',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '0',
                          overflow: 'hidden',
                          boxShadow: isActive ? '0 24px 80px rgba(0,0,0,0.18)' : 'none'
                        }}
                      >
                        {isActive && (
                          <div style={{
                            position: 'absolute', top: '16px', right: '16px',
                            width: '32px', height: '32px',
                            background: 'rgba(15,23,42,0.7)',
                            borderRadius: '50%',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            zIndex: 2, pointerEvents: 'none'
                          }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2.5">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                              <polyline points="15,3 21,3 21,9" />
                              <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                          </div>
                        )}

                        {cert.certificate ? (
                          <img
                            src={cert.certificate}
                            alt={cert.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            onError={(e) => { e.target.style.display = 'none' }}
                          />
                        ) : (
                          <div style={{ textAlign: 'center', padding: '40px' }}>
                            <div style={{ fontSize: '96px', fontWeight: 900, color: '#E2E8F0', fontFamily: 'Archivo', lineHeight: 1, marginBottom: '20px' }}>
                              {String(i + 1).padStart(2, '0')}
                            </div>
                            <div style={{ fontFamily: 'IBM Plex Mono', fontSize: '10px', color: '#94A3B8', letterSpacing: '0.1em' }}>
                              [ CERTIFICATE PREVIEW ]
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )
                  })}
                </div>

                <button
                  onClick={next}
                  style={{ width: '56px', height: '56px', background: '#0F172A', color: '#FFF', border: 'none', fontSize: '20px', cursor: 'pointer', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#DC2626'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#0F172A'}
                >
                  &rarr;
                </button>
              </div>

              {certs[activeIndex] && (
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ textAlign: 'center', marginTop: '20px' }}
                >
                  <h3 style={{ fontSize: '28px', fontWeight: 900, marginBottom: '8px', fontFamily: 'Archivo', color: '#0F172A' }}>
                    {certs[activeIndex].name}
                  </h3>
                  {certs[activeIndex].issuedBy && (
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#DC2626', fontFamily: 'IBM Plex Mono', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      {certs[activeIndex].issuedBy}
                    </div>
                  )}
                </motion.div>
              )}

              <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
                {certs.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    style={{ width: activeIndex === i ? '24px' : '8px', height: '8px', background: activeIndex === i ? '#DC2626' : '#CBD5E1', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }}
                  />
                ))}
              </div>
            </React.Fragment>
          )}
        </div>
      </section>

      {selectedCert && (
        <Modal cert={selectedCert} onClose={() => setSelectedCert(null)} />
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
          <a
            href="/Contact"
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
