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
            maxWidth: '1000px',
            maxHeight: '90vh',
            overflow: 'hidden',
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr'
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
              fontSize: '24px',
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

          {/* Left — Image */}
          <div style={{ position: 'relative', height: '560px', background: '#E5E7EB', overflow: 'hidden' }}>
            <img
              src={allImages[currentImage]}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              onError={(e) => { e.target.src = getPlaceholder(project.id) }}
            />

            {/* Carousel Controls */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentImage(prev => prev === 0 ? allImages.length - 1 : prev - 1)}
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '40px',
                    height: '40px',
                    background: 'rgba(0,0,0,0.5)',
                    color: '#FFF',
                    border: 'none',
                    fontSize: '22px',
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
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '40px',
                    height: '40px',
                    background: 'rgba(0,0,0,0.5)',
                    color: '#FFF',
                    border: 'none',
                    fontSize: '22px',
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

          {/* Right — Details */}
          <div style={{
            padding: '48px 40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            overflowY: 'auto',
            maxHeight: '560px',
            background: '#FFF'
          }}>
            {/* Category & Year */}
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap' }}>
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

            {/* Title */}
            <h2 style={{
              fontSize: '28px',
              fontWeight: 900,
              marginBottom: '20px',
              lineHeight: 1.2,
              fontFamily: 'Archivo, sans-serif',
              color: '#0F172A'
            }}>
              {project.title}
            </h2>

            {/* Divider */}
            <div style={{ width: '60px', height: '4px', background: '#DC2626', marginBottom: '24px' }}></div>

            {/* Description */}
            {project.description && (
              <p style={{
                fontSize: '15px',
                color: '#475569',
                lineHeight: 1.8
              }}>
                {project.description}
              </p>
            )}

            {/* Image count indicator */}
            {allImages.length > 1 && (
              <div style={{
                marginTop: '32px',
                fontFamily: 'IBM Plex Mono',
                fontSize: '11px',
                color: '#94A3B8',
                letterSpacing: '0.05em'
              }}>
                {currentImage + 1} / {allImages.length} images
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
