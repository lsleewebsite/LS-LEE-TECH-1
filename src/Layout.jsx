import React from 'react'
import { Link } from 'react-router-dom'

export default function Layout({ currentPageName, children }) {
  const navItems = ['Home', 'Industries', 'Services', 'Projects', 'Safety', 'Contact']

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: '#FFFFFF',
        borderBottom: '2px solid #0F172A'
      }}>
        <div style={{
          maxWidth: '1360px',
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '80px'
        }}>
          {/* Logo */}
          <Link to="/Home" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
              <img 
                src="/src/assets/logo.jpg" 
                alt="LS Lee Technology"
                style={{ height: '40px', objectFit: 'contain' }}
              />
            </div>
          </Link>

          {/* Nav Links */}
          <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
            {navItems.map((item) => (
              <Link
                key={item}
                to={`/${item}`}
                style={{
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: currentPageName === item ? '#DC2626' : '#0F172A',
                  borderBottom: currentPageName === item ? '2px solid #DC2626' : 'none',
                  paddingBottom: '4px',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.color = '#DC2626'}
                onMouseLeave={(e) => e.target.style.color = currentPageName === item ? '#DC2626' : '#0F172A'}
              >
                {item}
              </Link>
            ))}
            
            <Link to="/Contact">
              <button style={{
                padding: '12px 24px',
                backgroundColor: '#DC2626',
                color: '#FFFFFF',
                border: '2px solid #DC2626',
                fontWeight: 700,
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                START PROJECT
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main style={{ flex: 1 }}>
        {children}
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#0F172A',
        color: '#FFFFFF',
        padding: '60px 32px 24px',
        borderTop: '2px solid #0F172A'
      }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            marginBottom: '40px'
          }}>
            {/* Company Info */}
            <div>
              <img 
                src="/src/assets/logo.jpg" 
                alt="LS Lee Technology"
                style={{ height: '36px', objectFit: 'contain', marginBottom: '16px' }}
              />
              <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: 1.6 }}>
                Mechanical engineering contractor serving Singapore's gas and process industries since 2003.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Quick Links
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {navItems.map((item) => (
                  <Link
                    key={item}
                    to={`/${item}`}
                    style={{ fontSize: '13px', color: '#94A3B8', textDecoration: 'none' }}
                    onMouseEnter={(e) => e.target.style.color = '#DC2626'}
                    onMouseLeave={(e) => e.target.style.color = '#94A3B8'}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Contact
              </h3>
              <div style={{ fontSize: '13px', color: '#94A3B8', lineHeight: 1.8 }}>
                <p>L.S.Lee Technology Pte Ltd</p>
                <p>[Address]</p>
                <p>T: +65 XXXX XXXX</p>
                <p>E: info@lslee.com.sg</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{
            paddingTop: '24px',
            borderTop: '1px solid #334155',
            textAlign: 'center',
            fontSize: '12px',
            color: '#64748B'
          }}>
            © 2024 L.S.Lee Technology Pte Ltd · Part of Group · Privacy Policy
          </div>
        </div>
      </footer>
    </div>
  )
}
