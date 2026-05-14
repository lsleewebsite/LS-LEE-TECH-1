import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Layout({ currentPageName, children }) {
  const [showIndustriesDropdown, setShowIndustriesDropdown] = useState(false)

  const navItems = ['Home', 'Services', 'Projects', 'Safety', 'Contact']
  
  const industries = [
    { id: 'semiconductor', name: 'Semiconductor' },
    { id: 'datacenter', name: 'Data Center' },
    { id: 'industrial-gas', name: 'Industrial Gas & Process' },
    { id: 'hydrogen', name: 'New Energy / Hydrogen' }
  ]

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: '#FFFFFF',
        borderBottom: '2px solid #0A1628'
      }}>
        <div style={{
          maxWidth: '1360px',
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '96px'
        }}>
          {/* Logo */}
          <Link to="/Home" style={{ textDecoration: 'none' }}>
            <div style={{ 
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontFamily: 'Archivo, sans-serif',
              fontWeight: 900,
              fontSize: '18px',
              letterSpacing: '0.04em',
              color: '#0A1628'
            }}>
              <div style={{
                width: '42px',
                height: '42px',
                background: '#0A1628',
                color: '#FFFFFF',
                display: 'grid',
                placeItems: 'center',
                fontFamily: 'Archivo',
                fontWeight: 900,
                fontSize: '18px',
                position: 'relative'
              }}>
                LS
                <div style={{
                  position: 'absolute',
                  right: '-4px',
                  top: '-4px',
                  width: '10px',
                  height: '10px',
                  background: '#FF5722'
                }}></div>
              </div>
              <span>LS LEE ENGINEERING</span>
            </div>
          </Link>

          {/* Nav Links */}
          <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            {/* Industries FIRST - with Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setShowIndustriesDropdown(true)}
              onMouseLeave={() => setShowIndustriesDropdown(false)}
            >
              <Link
                to="/Industries"
                style={{
                  textDecoration: 'none',
                  padding: '12px 18px',
                  fontSize: '14px',
                  fontWeight: 600,
                  position: 'relative',
                  color: currentPageName === 'Industries' ? '#FF5722' : '#0A1628',
                  transition: 'color 0.15s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FF5722'}
                onMouseLeave={(e) => e.currentTarget.style.color = currentPageName === 'Industries' ? '#FF5722' : '#0A1628'}
              >
                Industries
                <span style={{ fontSize: '10px' }}>▼</span>
                {currentPageName === 'Industries' && (
                  <div style={{
                    position: 'absolute',
                    left: '18px',
                    right: '18px',
                    bottom: '-35px',
                    height: '2px',
                    background: '#FF5722'
                  }}></div>
                )}
              </Link>
              
              {/* Dropdown - CONNECTED */}
              {showIndustriesDropdown && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  background: '#FFFFFF',
                  border: '2px solid #0A1628',
                  borderTop: 'none',
                  minWidth: '260px',
                  zIndex: 100
                }}>
                  {industries.map((industry, index) => (
                    <Link
                      key={industry.id}
                      to={`/Industries#${industry.id}`}
                      style={{
                        display: 'block',
                        padding: '16px 20px',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#0A1628',
                        textDecoration: 'none',
                        borderBottom: index < industries.length - 1 ? '1px solid #E6E8EB' : 'none',
                        transition: 'all 0.15s'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#F4F5F7'
                        e.target.style.color = '#FF5722'
                        e.target.style.paddingLeft = '28px'
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = '#FFFFFF'
                        e.target.style.color = '#0A1628'
                        e.target.style.paddingLeft = '20px'
                      }}
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other nav items */}
            {navItems.map((item) => (
              <Link
                key={item}
                to={`/${item}`}
                style={{
                  textDecoration: 'none',
                  padding: '12px 18px',
                  fontSize: '14px',
                  fontWeight: 600,
                  position: 'relative',
                  color: currentPageName === item ? '#FF5722' : '#0A1628',
                  transition: 'color 0.15s'
                }}
                onMouseEnter={(e) => e.target.style.color = '#FF5722'}
                onMouseLeave={(e) => e.target.style.color = currentPageName === item ? '#FF5722' : '#0A1628'}
              >
                {item}
                {currentPageName === item && (
                  <div style={{
                    position: 'absolute',
                    left: '18px',
                    right: '18px',
                    bottom: '-35px',
                    height: '2px',
                    background: '#FF5722'
                  }}></div>
                )}
              </Link>
            ))}
            
            <Link to="/Contact">
              <button style={{
                padding: '14px 24px',
                background: '#0A1628',
                color: '#FFFFFF',
                border: '2px solid #0A1628',
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '0.04em',
                transition: 'all 0.15s',
                cursor: 'pointer',
                marginLeft: '8px'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#FF5722'
                e.target.style.borderColor = '#FF5722'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#0A1628'
                e.target.style.borderColor = '#0A1628'
              }}>
                START PROJECT →
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
        backgroundColor: '#FFFFFF',
        borderTop: '10px solid #0A1628'
      }}>
        <div style={{
          maxWidth: '1360px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1fr',
          gap: 0,
          borderBottom: '2px solid #0A1628'
        }}>
          <div style={{ padding: '48px 32px', borderRight: '2px solid #0A1628' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontFamily: 'Archivo, sans-serif',
              fontWeight: 900,
              fontSize: '18px',
              marginBottom: '16px'
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                background: '#0A1628',
                color: '#FFFFFF',
                display: 'grid',
                placeItems: 'center',
                position: 'relative'
              }}>
                LS
                <div style={{
                  position: 'absolute',
                  right: '-4px',
                  top: '-4px',
                  width: '8px',
                  height: '8px',
                  background: '#FF5722'
                }}></div>
              </div>
              <span>LS LEE ENGINEERING</span>
            </div>
            <p style={{ fontSize: '13px', color: '#5B6573', lineHeight: 1.6, margin: '16px 0 24px' }}>
              Mechanical engineering contractor serving Singapore's gas and process industries since 2003.
            </p>
            <div style={{ fontFamily: 'IBM Plex Mono', fontSize: '11px', letterSpacing: '0.08em', color: '#5B6573', lineHeight: 1.7 }}>
              [ HQ ] SINGAPORE<br/>
              +65 6XXX XXXX<br/>
              projects@lslee.com.sg
            </div>
          </div>
          
          <div style={{ padding: '48px 32px', borderRight: '2px solid #0A1628' }}>
            <h5 style={{ fontFamily: 'IBM Plex Mono', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#5B6573', marginBottom: '24px' }}>
              Industries
            </h5>
            {industries.map((industry) => (
              <Link
                key={industry.id}
                to={`/Industries#${industry.id}`}
                style={{ display: 'block', padding: '8px 0', fontSize: '14px', fontWeight: 500, textDecoration: 'none', color: '#0A1628', transition: 'color 0.15s' }}
                onMouseEnter={(e) => e.target.style.color = '#FF5722'}
                onMouseLeave={(e) => e.target.style.color = '#0A1628'}
              >
                {industry.name}
              </Link>
            ))}
          </div>

          <div style={{ padding: '48px 32px', borderRight: '2px solid #0A1628' }}>
            <h5 style={{ fontFamily: 'IBM Plex Mono', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#5B6573', marginBottom: '24px' }}>
              Services
            </h5>
            {['Project Engineering', 'Plant Maintenance', 'Trailer Testing', 'Cryogenic Hose'].map((service) => (
              <a key={service} href="#services" style={{ display: 'block', padding: '8px 0', fontSize: '14px', fontWeight: 500, textDecoration: 'none', color: '#0A1628', transition: 'color 0.15s' }}
                onMouseEnter={(e) => e.target.style.color = '#FF5722'}
                onMouseLeave={(e) => e.target.style.color = '#0A1628'}>
                {service}
              </a>
            ))}
          </div>

          <div style={{ padding: '48px 32px', borderRight: '2px solid #0A1628' }}>
            <h5 style={{ fontFamily: 'IBM Plex Mono', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#5B6573', marginBottom: '24px' }}>
              Company
            </h5>
            {[{ name: 'Projects', link: '/Projects' }, { name: 'Safety', link: '/Safety' }, { name: 'Careers', link: '#' }].map((item) => (
              <Link key={item.name} to={item.link} style={{ display: 'block', padding: '8px 0', fontSize: '14px', fontWeight: 500, textDecoration: 'none', color: '#0A1628', transition: 'color 0.15s' }}
                onMouseEnter={(e) => e.target.style.color = '#FF5722'}
                onMouseLeave={(e) => e.target.style.color = '#0A1628'}>
                {item.name}
              </Link>
            ))}
          </div>

          <div style={{ padding: '48px 32px' }}>
            <h5 style={{ fontFamily: 'IBM Plex Mono', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#5B6573', marginBottom: '24px' }}>
              Contact
            </h5>
            <Link to="/Contact" style={{ display: 'block', padding: '8px 0', fontSize: '14px', fontWeight: 500, textDecoration: 'none', color: '#0A1628', transition: 'color 0.15s' }}
              onMouseEnter={(e) => e.target.style.color = '#FF5722'}
              onMouseLeave={(e) => e.target.style.color = '#0A1628'}>
              Start Enquiry
            </Link>
          </div>
        </div>

        <div style={{
          background: '#0A1628',
          color: 'rgba(255,255,255,0.6)',
          padding: '18px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: 'IBM Plex Mono',
          fontSize: '11px',
          letterSpacing: '0.1em'
        }}>
          <span>© 2026 LS LEE ENGINEERING PTE. LTD. — UEN 200300000X</span>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.6)', transition: 'color 0.15s' }}
              onMouseEnter={(e) => e.target.style.color = '#FF5722'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}>PRIVACY</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.6)', transition: 'color 0.15s' }}
              onMouseEnter={(e) => e.target.style.color = '#FF5722'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}>TERMS</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
