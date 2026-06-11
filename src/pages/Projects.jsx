import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NOTION_KEY = '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'
const DATABASE_ID = '37c7a921a23080cfa710e56c146ae5a1'
const PROXY = 'https://corsproxy.io/?'

const PLACEHOLDER_IMAGES = [
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
  'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&q=80',
  'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80',
  'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&q=80',
]

function getPlaceholder(id) {
  const index = id.charCodeAt(0) % PLACEHOLDER_IMAGES.length
  return PLACEHOLDER_IMAGES[index]
}

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
}

function parseProjects(results) {
  return results
    .filter(page => page.properties?.Published?.checkbox === true)
    .map(page => {
      const p = page.properties
      const imagesRaw = p.Images?.rich_text?.[0]?.text?.content || ''
      const images = imagesRaw
        .split(',')
        .map(url => url.trim())
        .filter(url => url.length > 0)

      return {
        id: page.id,
        title: p.Title?.title?.[0]?.text?.content || 'Untitled',
        category: p.Category?.multi_select?.[0]?.name || 'General',
        year: p.Year?.number || '',
        image: p.Image?.url || null,
        images: images,
        description: p.Description?.rich_text?.[0]?.text?.content || '',
      }
    })
}

function Modal({ project, onClose }) {
  const [currentImage, setCurrentImage] = useState(0)

  const allImages = project.images.length > 0
    ? project.images
    : [project.image || getPlaceholder(project.id)]

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
          background: 'rgba(0,0,0,0.8)',
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
            maxWidth: '900px',
            maxHeight: '90vh',
            overflow: 'auto',
            position: 'relative'
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
              background: '#0F172A',
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
            onMouseEnter={(e) => e.target.style.background = '#DC2626'}
            onMouseLeave={(e) => e.target.style.background = '#0F172A'}
          >
            ×
          </button>

          {/* Image Carousel */}
          <div style={{ position: 'relative', height: '420px', background: '#E5E7EB', overflow: 'hidden' }}>
            <img
              src={allImages[currentImage]}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              onError={(e) => { e.target.src = getPlaceholder(project.id) }}
            />

            {/* Gradient overlay */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '120px',
              background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)'
            }}></div>

            {/* Carousel Controls */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentImage(prev => prev === 0 ? allImages.length - 1 : prev - 1)}
                  style={{
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '44px',
                    height: '44px',
                    background: 'rgba(0,0,0,0.5)',
                    color: '#FFF',
                    border: 'none',
                    fontSize: '20px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.2s',
                    zIndex: 5
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#DC2626'}
                  onMouseLeave={(e) => e.target.style.background = 'rgba(0,0,0,0.5)'}
                >
                  ‹
                </button>
                <button
                  onClick={() => setCurrentImage(prev => prev === allImages.length - 1 ? 0 : prev + 1)}
                  style={{
                    position: 'absolute',
                    right: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '44px',
                    height: '44px',
                    background: 'rgba(0,0,0,0.5)',
                    color: '#FFF',
                    border: 'none',
                    fontSize: '20px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.2s',
                    zIndex: 5
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#DC2626'}
                  onMouseLeave={(e) => e.target.style.background = 'rgba(0,0,0,0.5)'}
                >
                  ›
                </button>

                {/* Dots */}
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: '8px',
                  zIndex: 5
                }}>
                  {allImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      style={{
                        width: currentImage === i ? '24px' : '8px',
                        height: '8px',
                        background: currentImage === i ? '#DC2626' : 'rgba(255,255,255,0.6)',
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

          {/* Project Details */}
          <div style={{ padding: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{
                  padding: '6px 14px',
                  background: '#0F172A',
                  color: '#FFF',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  fontFamily: 'IBM Plex Mono'
                }}>
                  {project.category.toUpperCase()}
                </div>
                {project.year && (
                  <div style={{
                    padding: '6px 14px',
                    background: '#F8F9FA',
                    border: '2px solid #E5E7EB',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#64748B',
                    fontFamily: 'IBM Plex Mono'
                  }}>
                    {project.year}
                  </div>
                )}
              </div>
            </div>

            <h2 style={{
              fontSize: '32px',
              fontWeight: 900,
              marginBottom: '20px',
              lineHeight: 1.2,
              fontFamily: 'Archivo, sans-serif',
              color: '#0F172A'
            }}>
              {project.title}
            </h2>

            {project.description && (
              <p style={{
                fontSize: '16px',
                color: '#475569',
                lineHeight: 1.8,
                borderTop: '2px solid #E5E7EB',
                paddingTop: '20px'
              }}>
                {project.description}
              </p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    async function fetchProjects() {
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
            body: JSON.stringify({
              sorts: [{ property: 'Year', direction: 'descending' }]
            })
          }
        )
        if (!res.ok) throw new Error(`Notion API error: ${res.status}`)
        const data = await res.json()
        setProjects(parseProjects(data.results))
      } catch (err) {
        console.error(err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  const categories = ['All', ...new Set(projects.map(p => p.category))]
  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <div>
      {/* Hero */}
      <section style={{ padding: '100px 32px 80px', background: '#0F172A', color: '#FFF', borderBottom: '2px solid #DC2626' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 style={{ fontSize: '56px', fontWeight: 900, marginBottom: '28px', lineHeight: 1.1, fontFamily: 'Archivo, sans-serif' }}>
              Our <span style={{ color: '#DC2626' }}>Projects</span>
            </h1>
            <p style={{ fontSize: '20px', color: '#94A3B8', maxWidth: '800px', lineHeight: 1.7 }}>
              A selection of mechanical engineering projects across Singapore's critical industrial sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section style={{ padding: '32px', background: '#FFF', borderBottom: '2px solid #E5E7EB', position: 'sticky', top: '110px', zIndex: 30 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {categories.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  padding: '12px 28px',
                  background: activeFilter === filter ? '#DC2626' : '#FFF',
                  color: activeFilter === filter ? '#FFF' : '#0F172A',
                  border: `2px solid ${activeFilter === filter ? '#DC2626' : '#0F172A'}`,
                  fontWeight: 700,
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  fontFamily: 'IBM Plex Sans, sans-serif'
                }}
                onMouseEnter={(e) => {
                  if (activeFilter !== filter) {
                    e.target.style.background = '#0F172A'
                    e.target.style.color = '#FFF'
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== filter) {
                    e.target.style.background = '#FFF'
                    e.target.style.color = '#0F172A'
                  }
                }}
              >
                {filter}
              </button>
            ))}
          </div>
          {!loading && (
            <div style={{ textAlign: 'center', marginTop: '12px', fontSize: '13px', color: '#64748B', fontFamily: 'IBM Plex Mono' }}>
              {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '80px 32px', background: '#F8F9FA', minHeight: '400px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {loading && (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <div style={{ width: '48px', height: '48px', border: '4px solid #E5E7EB', borderTopColor: '#DC2626', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto 24px' }}></div>
              <div style={{ fontFamily: 'IBM Plex Mono', fontSize: '13px', color: '#64748B', letterSpacing: '0.1em' }}>Loading projects...</div>
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
          )}

          {error && (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <div style={{ fontFamily: 'IBM Plex Mono', fontSize: '13px', color: '#DC2626', marginBottom: '8px' }}>Failed to load projects</div>
              <div style={{ fontSize: '13px', color: '#64748B' }}>{error}</div>
            </div>
          )}

          {!loading && !error && filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <div style={{ fontFamily: 'IBM Plex Mono', fontSize: '13px', color: '#64748B', letterSpacing: '0.1em' }}>No projects found</div>
            </div>
          )}

          {!loading && !error && filtered.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '32px' }}>
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  onClick={() => setSelectedProject(project)}
                  style={{ background: '#FFF', border: '2px solid #0F172A', overflow: 'hidden', transition: 'all 0.3s', cursor: 'pointer' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#DC2626'
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#0F172A'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div style={{ height: '220px', overflow: 'hidden', borderBottom: '2px solid #0F172A', position: 'relative' }}>
                    <img
                      src={project.image || getPlaceholder(project.id)}
                      alt={project.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', transition: 'transform 0.4s' }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                      onError={(e) => { e.target.src = getPlaceholder(project.id) }}
                    />
                    {/* View overlay on hover */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(220,38,38,0.7)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                    >
                      <div style={{ color: '#FFF', fontFamily: 'IBM Plex Mono', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em' }}>
                        VIEW PROJECT
                      </div>
                    </div>
                  </div>

                  <div style={{ padding: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <div style={{ padding: '4px 10px', background: '#0F172A', color: '#FFF', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', fontFamily: 'IBM Plex Mono' }}>
                        {project.category.toUpperCase()}
                      </div>
                      {project.year && (
                        <div style={{ fontSize: '13px', color: '#64748B', fontFamily: 'IBM Plex Mono' }}>
                          {project.year}
                        </div>
                      )}
                    </div>
                    <h3 style={{ fontSize: '20px', fontWeight: 900, lineHeight: 1.2, fontFamily: 'Archivo, sans-serif', color: '#0F172A' }}>
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <Modal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* CTA */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeInUp}
        style={{ padding: '100px 32px', background: '#DC2626', color: '#FFF', textAlign: 'center' }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: 900, marginBottom: '24px', lineHeight: 1.2, fontFamily: 'Archivo' }}>
            Ready to Start Your Project?
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '40px', opacity: 0.95, lineHeight: 1.7 }}>
            Whether you are planning a new facility or need support with an existing system, we are here to help.
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
