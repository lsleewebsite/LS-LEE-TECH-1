import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const NOTION_KEY = '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'
const DATABASE_ID = '37c7a921a23080cfa710e56c146ae5a1'
const PROXY = 'https://corsproxy.io/?'

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
        category: p.Category?.select?.name || 'General',
        client: p.Client?.rich_text?.[0]?.text?.content || '',
        year: p.Year?.number || '',
        scope: p.Scope?.rich_text?.[0]?.text?.content || '',
        image: p.Image?.url || null,
        tags: p.Tags?.multi_select?.map(t => t.name) || [],
        featured: p.Featured?.checkbox || false,
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
      <section style={{ padding: '40px 32px', background: '#FFF', borderBottom: '2px solid #E5E7EB', position: 'sticky', top: '110px', zIndex: 30 }}>
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
            <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '13px', color: '#64748B', fontFamily: 'IBM Plex Mono' }}>
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
                width: '48px', height: '48px', border: '4px solid #E5E7EB',
                borderTopColor: '#DC2626', borderRadius: '50%',
                animation: 'spin 0.8s linear infinite', margin: '0 auto 24px'
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

          {/* Projects Grid */}
          {!loading && !error && filtered.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '32px' }}>
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
                    cursor: 'pointer',
                    gridColumn: project.featured ? 'span 2' : 'span 1'
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
                  <div style={{
                    height: project.featured ? '320px' : '220px',
                    background: '#E5E7EB',
                    overflow: 'hidden',
                    borderBottom: '2px solid #0F172A',
                    position: 'relative'
                  }}>
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                        onError={(e) => { e.target.style.display = 'none' }}
                      />
                    ) : (
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ fontFamily: 'IBM Plex Mono', fontSize: '11px', color: '#94A3B8', letterSpacing: '0.1em' }}>[ PROJECT IMAGE ]</div>
                      </div>
                    )}
                    {project.featured && (
                      <div style={{ position: 'absolute', top: '16px', right: '16px', padding: '6px 14px', background: '#DC2626', color: '#FFF', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', fontFamily: 'IBM Plex Mono' }}>
                        FEATURED
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div style={{ padding: '28px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '14px' }}>
                      <div style={{ padding: '4px 10px', background: '#0F172A', color: '#FFF', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', fontFamily: 'IBM Plex Mono' }}>
                        {project.category.toUpperCase()}
                      </div>
                      {project.year && (
                        <div style={{ fontSize: '13px', color: '#64748B', fontFamily: 'IBM Plex Mono' }}>
                          {project.year}
                        </div>
                      )}
                    </div>

                    <h3 style={{ fontSize: '22px', fontWeight: 900, marginBottom: '10px', lineHeight: 1.2, fontFamily: 'Archivo, sans-serif', color: '#0F172A' }}>
                      {project.title}
                    </h3>

                    {project.client && (
                      <div style={{ fontSize: '13px', color: '#DC2626', fontWeight: 600, marginBottom: '12px', fontFamily: 'IBM Plex Sans' }}>
                        {project.client}
                      </div>
                    )}

                    {project.scope && (
                      <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.7, marginBottom: '20px' }}>
                        {project.scope}
                      </p>
                    )}

                    {project.tags.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {project.tags.map((tag, j) => (
                          <span key={j} style={{ padding: '4px 10px', background: '#F8F9FA', border: '1px solid #E5E7EB', fontSize: '11px', color: '#475569', fontFamily: 'IBM Plex Mono', letterSpacing: '0.02em' }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
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
          <a href="/Contact" style={{ display: 'inline-block', padding: '18px 40px', background: '#FFF', color: '#DC2626', border: '2px solid #FFF', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.05em', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.3s', fontFamily: 'IBM Plex Sans' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#0F172A'; e.currentTarget.style.color = '#FFF'; e.currentTarget.style.borderColor = '#0F172A' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#FFF'; e.currentTarget.style.color = '#DC2626'; e.currentTarget.style.borderColor = '#FFF' }}>
            Get in Touch
          </a>
        </div>
      </motion.section>
    </div>
  )
}
