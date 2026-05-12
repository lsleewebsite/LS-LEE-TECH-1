import React from 'react'

export default function Contact() {
  return (
    <div style={{ padding: '120px 32px 80px', minHeight: '80vh' }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '24px' }}>
          Contact Us
        </h1>
        <p style={{ fontSize: '18px', color: '#64748B', marginBottom: '40px' }}>
          Contact form coming soon...
        </p>
        
        <div style={{ marginTop: '40px' }}>
          <div style={{ marginBottom: '20px' }}>
            <strong>Phone:</strong> +65 XXXX XXXX
          </div>
          <div style={{ marginBottom: '20px' }}>
            <strong>Email:</strong> info@lslee.com.sg
          </div>
          <div>
            <strong>Address:</strong> [Company Address], Singapore
          </div>
        </div>
      </div>
    </div>
  )
}
