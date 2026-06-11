import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

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
      return {
        id: page.id,
        title: p.Title?.title?.[0]?.text?.content || 'Untitled',
        category: p.Category?.multi_select?.[0]?.name || 'General',
        year: p.Year?.number || '',
        image: p.Image?.url || null,
      }
    })
}

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeFilter, setActiveFilter] = useState('All')

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

          {/* Loading */}
          {loading && (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <div style={{
                width: '48px', height: '48px',
                border: '4px solid #E5E7EB',
                borderTopColor: '#DC2626',
                borderRadius: '50%',
                animation: 'spin 0.8s linear infinite',
                margin: '0 auto 24px'
              }}></div>
              <div style={{ fontFamily: 'IBM Plex Mono', fontSize: '13px', color: '#64748B', letterSpacing: '0.1em' }}>
                Loading projects...
              </div>
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
          )}

          {/* Error */}
          {error && (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <div style={{ fontFamily: 'IBM Plex Mono', fontSize: '13px', color: '#DC2626', marginBottom: '8px' }}>
                Failed to load projects
              </div>
              <div style={{ fontSize: '13px', color: '#64748B' }}>{error}</div>
            </div>
          )}

          {/* Empty */}
          {!loading && !error && filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <div style={{ fontFamily: 'IBM Plex Mono', fontSize: '13px', color: '#64748B', letterSpacing: '0.1em' }}>
                No projects found
              </div>
            </div>
          )}

          {/* Grid */}
          {!loading && !error && filtered.length > 0 && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '32px'
            }}>
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  style={{
                    background: '#FFF',
                    border: '2px solid #0F172A',
                    overflow: 'hidden',
                    transition: 'all 0.3s',
                    cursor: 'pointer'
                  }}
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
                  {/* Image */}
                  <div style={{ height: '220px', overflow: 'hidden', borderBottom: '2px solid #0F172A' }}>
                    <img
                      src={project.image || getPlaceholder(project.id)}
                      alt={project.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', transition: 'transform 0.4s' }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                      onError={(e) => { e.target.src = getPlaceholder(project.id) }}
                    />
                  </div>

                  {/* Info */}
                  <div style={{ padding: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <div style={{
                        padding: '4px 10px',
                        background: '#0F172A',
                        color: '#FFF',
                        fontSize: '10px',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        fontFamily: 'IBM Plex Mono'
                      }}>
                        {project.category.toUpperCase()}
                      </div>
                      {project.year && (
                        <div style={{ fontSize: '13px', color: '#64748B', fontFamily: 'IBM Plex Mono' }}>
                          {project.year}
                        </div>
                      )}
                    </div>

                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: 900,
                      lineHeight: 1.2,
                      fontFamily: 'Archivo, sans-serif',
                      color: '#0F172A'
                    }}>
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

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
