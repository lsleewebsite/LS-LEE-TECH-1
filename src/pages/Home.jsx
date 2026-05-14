{/* Stats Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
        style={{
          padding: '80px 32px',
          background: '#0F172A',
          borderBottom: '2px solid #DC2626'
        }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          <motion.div
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '40px'
            }}
          >
            {[
              { value: '20+', label: 'Years Experience' },
              { value: '450+', label: 'Projects Delivered' },
              { value: '3,200+', label: 'Trailers Tested' },
              { value: '2.4M', label: 'Safe Manhours' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                style={{ textAlign: 'center' }}
              >
                <div style={{
                  fontSize: '48px',
                  fontWeight: 900,
                  color: '#DC2626',
                  marginBottom: '8px'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#94A3B8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  fontWeight: 600
                }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
