{/* INDUSTRIES - Icon-First Grid */}
      <motion.section 
        id="industries" 
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <div className="wrap">
          <div className="sec-head" style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '48px', marginBottom: '16px' }}>
              Four Critical <span className="accent">Infrastructure Sectors</span>
            </h2>
            <p style={{ fontSize: '18px', color: '#64748B', maxWidth: '700px', margin: '0 auto' }}>
              Where safety meets precision engineering
            </p>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '32px'
            }}
          >
            {[
              { icon: <I.Chip style={{ width: 80, height: 80 }} />, title: "Semiconductor", tag: "UHP Gas Systems" },
              { icon: <I.Server style={{ width: 80, height: 80 }} />, title: "Data Center", tag: "H₂ Infrastructure" },
              { icon: <I.Plant style={{ width: 80, height: 80 }} />, title: "Industrial Gas", tag: "Process Plants" },
              { icon: <I.H2 style={{ width: 80, height: 80 }} />, title: "New Energy", tag: "Trailer Testing" },
            ].map((it, i) => (
              <motion.a
                href="/industries"
                key={i}
                variants={cardVariant}
                transition={{ duration: 0.5 }}
                style={{
                  padding: '60px 32px',
                  background: '#FFF',
                  border: '2px solid #E5E7EB',
                  textAlign: 'center',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '24px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#DC2626'
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.querySelector('.ind-icon-large').style.color = '#DC2626'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.querySelector('.ind-icon-large').style.color = '#0F172A'
                }}
              >
                <div className="ind-icon-large" style={{ 
                  color: '#0F172A',
                  transition: 'color 0.3s'
                }}>
                  {it.icon}
                </div>
                <div>
                  <h3 style={{
                    fontFamily: 'Archivo, sans-serif',
                    fontSize: '24px',
                    fontWeight: 900,
                    marginBottom: '8px',
                    color: '#0F172A'
                  }}>
                    {it.title}
                  </h3>
                  <div style={{
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#64748B',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}>
                    {it.tag}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* See More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ textAlign: 'center', marginTop: '64px' }}
          >
            <a href="/industries" className="btn btn-primary">
              Explore All Industries <I.Arrow className="arrow" />
            </a>
          </motion.div>
        </div>
      </motion.section>
