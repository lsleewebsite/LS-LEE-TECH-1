// In the Services Section, replace the services mapping with this:

<motion.div
  variants={staggerContainer}
  className="services-grid"
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '24px'
  }}
>
  {services.map((service, i) => (
    <motion.div
      key={i}
      variants={cardVariant}
      transition={{ duration: 0.5 }}
    >
      <Link
        to={`/Services?slide=${i}`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          border: '2px solid #0F172A',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'all 0.4s',
          textDecoration: 'none',
          color: 'inherit',
          height: '520px'  // Fixed height for all cards
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)'
          e.currentTarget.style.borderColor = '#DC2626'
          const numBadge = e.currentTarget.querySelector('.num-badge')
          const learnMore = e.currentTarget.querySelector('.service-learn-more')
          if (numBadge) {
            numBadge.style.background = '#2563EB'
            numBadge.style.transform = 'rotate(360deg)'
          }
          if (learnMore) learnMore.style.transform = 'translateX(4px)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)'
          e.currentTarget.style.borderColor = '#0F172A'
          const numBadge = e.currentTarget.querySelector('.num-badge')
          const learnMore = e.currentTarget.querySelector('.service-learn-more')
          if (numBadge) {
            numBadge.style.background = '#DC2626'
            numBadge.style.transform = 'rotate(0deg)'
          }
          if (learnMore) learnMore.style.transform = 'translateX(0)'
        }}
      >
        <div style={{
          height: '200px',
          background: '#E5E7EB',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '12px',
          color: '#64748B',
          fontWeight: 600,
          borderBottom: '2px solid #0F172A',
          flexShrink: 0
        }}>
          {service.image}
        </div>
        <div style={{ 
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          flex: 1
        }}>
          <div 
            className="num-badge"
            style={{
              width: '40px',
              height: '40px',
              background: '#DC2626',
              color: '#FFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              fontSize: '18px',
              marginBottom: '16px',
              transition: 'all 0.4s',
              flexShrink: 0
            }}
          >
            {service.num}
          </div>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 700,
            marginBottom: '12px',
            flexShrink: 0
          }}>
            {service.title}
          </h3>
          <p style={{
            fontSize: '13px',
            color: '#64748B',
            lineHeight: 1.6,
            marginBottom: '16px',
            flex: 1
          }}>
            {service.desc}
          </p>
          <div 
            className="service-learn-more"
            style={{
              fontSize: '13px',
              fontWeight: 700,
              color: '#2563EB',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              transition: 'transform 0.4s',
              cursor: 'pointer',
              flexShrink: 0
            }}
          >
            Learn More →
          </div>
        </div>
      </Link>
    </motion.div>
  ))}
</motion.div>
