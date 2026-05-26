import React, { useState } from 'react'
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

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'Semiconductor', 'Data Center', 'Industrial Gas', 'Hydrogen']

  const projects = [
    {
      id: 1,
      title: 'Advanced Node Fab Gas Distribution',
      category: 'Semiconductor',
      client: 'Major Foundry',
      year: '2024',
      scope: 'Complete UHP gas distribution system for 300mm fab',
      tags: ['UHP Piping', 'VMB Installation', 'Gas Panels'],
      featured: true
    },
    {
      id: 2,
      title: 'Data Center Hydrogen Infrastructure',
      category: 'Data Center',
      client: 'Singapore Data Center',
      year: '2024',
      scope: 'High-pressure hydrogen pipeline and fuel cell integration',
      tags: ['H2 Pipeline', 'Fuel Cells', 'Safety Systems']
    },
    {
      id: 3,
      title: 'ASU Plant Expansion',
      category: 'Industrial Gas',
      client: 'Industrial Gas Producer',
      year: '2023',
      scope: 'Mechanical scope for air separation unit capacity upgrade',
      tags: ['Cryogenic', 'Process Piping', 'Plant Expansion']
    },
    {
      id: 4,
      title: 'Tube Trailer Testing Facility',
      category: 'Hydrogen',
      client: 'LS Lee Technology',
      year: '2010',
      scope: 'Singapore\'s first dedicated hydrogen tube trailer testing facility',
      tags: ['DOT Testing', 'ISO Certification', 'Hydrostatic Testing'],
      featured: true
    },
    {
      id: 5,
      title: 'Specialty Gas Plant Construction',
      category: 'Industrial Gas',
      client: 'Specialty Gas Manufacturer',
      year: '2023',
      scope: 'Full mechanical installation for specialty gas production facility',
      tags: ['Gas Production', 'Process Equipment', 'Piping Systems']
    },
    {
      id: 6,
      title: 'Fab Tool Hook-Up Package',
      category: 'Semiconductor',
      client: 'Semiconductor Manufacturer',
      year: '2024',
      scope: 'Gas and utility connections for new process tool installation',
      tags: ['Tool Hook-Up', 'Gas Integration', 'Commissioning']
    },
    {
      id: 7,
      title: 'Hydrogen Refueling Infrastructure',
      category: 'Hydrogen',
      client: 'Industrial Client',
      year: '2024',
      scope: 'High-pressure hydrogen distribution and storage system',
      tags: ['H2 Storage', 'Distribution', 'Safety']
    },
    {
      id: 8,
      title: 'Clean Room Gas System Retrofit',
      category: 'Semiconductor',
      client: 'Semiconductor Fab',
      year: '2023',
      scope: 'Upgrade of existing gas delivery system to meet new process requirements',
      tags: ['Retrofit', 'UHP Systems', 'Cleanroom Work']
    }
  ]

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        padding: '100px 32px 80px',
        background: '#0F172A',
        color: '#FFF',
        borderBottom: '2px solid #DC2626'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={{
              fontSize: '56px',
              fontWeight: 900,
              marginBottom: '28px',
              lineHeight: 1.1,
              fontFamily: 'Archivo, sans-serif'
            }}>
              Our <span style={{ color: '#DC2626' }}>Projects</span>
            </h1>
            <p style={{
              fontSize: '20px',
              color: '#94A3B8',
              maxWidth: '800px',
              lineHeight: 1.7
            }}>
              A selection of mechanical engineering projects across semiconductor, data center, industrial gas, and hydrogen sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section style={{
        padding: '60px 32px',
        background: '#FFF',
        borderBottom: '2px solid #E5E7EB',
        position: 'sticky',
        top: '110px',
        zIndex: 30
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  padding: '14px 32px',
                  background: activeFilter === filter ? '#DC2626' : '#FFF',
                  color: activeFilter === filter ? '#FFF' : '#0F172A',
                  border: `2px solid ${activeFilter === filter ? '#DC2626' : '#0F172A'}`,
                  fontWeight: 700,
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
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
          
          <div style={{
            textAlign: 'center',
            marginTop: '24px',
            fontSize: '14px',
            color: '#64748B',
            fontFamily: 'IBM Plex Mono',
            letterSpacing: '0.05em'
          }}>
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        style={{
          padding: '100px 32px',
          background: '#F8F9FA'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
            gap: '32px'
          }}>
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
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
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#0F172A'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Project Image Placeholder */}
                <div style={{
                  height: project.featured ? '320px' : '220px',
                  background: '#E5E7EB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '2px solid #0F172A',
                  position: 'relative'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      fontFamily: 'IBM Plex Mono',
                      fontSize: '12px',
                      color: '#64748B',
                      letterSpacing: '0.1em',
                      marginBottom: '8px'
                    }}>
                      [ PROJECT IMAGE ]
                    </div>
                    <div style={{
                      fontFamily: 'IBM Plex Mono',
                      fontSize: '10px',
                      color: '#94A3B8'
                    }}>
                      {project.category}
                    </div>
                  </div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      padding: '8px 16px',
                      background: '#DC2626',
                      color: '#FFF',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      fontFamily: 'IBM Plex Mono'
                    }}>
                      FEATURED
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div style={{ padding: '32px' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    marginBottom: '16px'
                  }}>
                    <div style={{
                      display: 'inline-block',
                      padding: '4px 12px',
                      background: '#0F172A',
                      color: '#FFF',
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      fontFamily: 'IBM Plex Mono'
                    }}>
                      {project.category.toUpperCase()}
                    </div>
                    <div style={{
                      fontSize: '14px',
                      color: '#64748B',
                      fontFamily: 'IBM Plex Mono'
                    }}>
                      {project.year}
                    </div>
                  </div>

                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: 900,
                    marginBottom: '12px',
                    lineHeight: 1.2,
                    fontFamily: 'Archivo',
                    color: '#0F172A'
                  }}>
                    {project.title}
                  </h3>

                  <div style={{
                    fontSize: '13px',
                    color: '#DC2626',
                    fontWeight: 600,
                    marginBottom: '16px',
                    fontFamily: 'IBM Plex Sans'
                  }}>
                    {project.client}
                  </div>

                  <p style={{
                    fontSize: '15px',
                    color: '#64748B',
                    lineHeight: 1.7,
                    marginBottom: '20px'
                  }}>
                    {project.scope}
                  </p>

                  {/* Tags */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px'
                  }}>
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        style={{
                          padding: '6px 12px',
                          background: '#F8F9FA',
                          border: '1px solid #E5E7EB',
                          fontSize: '11px',
                          color: '#475569',
                          fontFamily: 'IBM Plex Mono',
                          letterSpacing: '0.02em'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
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
            lineHeight: 1.2,
            fontFamily: 'Archivo'
          }}>
            Ready to Start Your Project?
          </h2>
          <p style={{
            fontSize: '18px',
            marginBottom: '40px',
            opacity: 0.95,
            lineHeight: 1.7
          }}>
            Whether you're planning a new facility or need support with an existing system, we're here to help.
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
            fontFamily: 'IBM Plex Sans'
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
