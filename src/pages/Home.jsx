import React, { useState } from 'react'
import { motion } from 'framer-motion'

// Icons
const I = {
  Chip: (p) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <rect x="7" y="7" width="14" height="14" />
      <rect x="10" y="10" width="8" height="8" />
      <line x1="4" y1="10" x2="7" y2="10" /><line x1="4" y1="14" x2="7" y2="14" /><line x1="4" y1="18" x2="7" y2="18" />
      <line x1="21" y1="10" x2="24" y2="10" /><line x1="21" y1="14" x2="24" y2="14" /><line x1="21" y1="18" x2="24" y2="18" />
      <line x1="10" y1="4" x2="10" y2="7" /><line x1="14" y1="4" x2="14" y2="7" /><line x1="18" y1="4" x2="18" y2="7" />
      <line x1="10" y1="21" x2="10" y2="24" /><line x1="14" y1="21" x2="14" y2="24" /><line x1="18" y1="21" x2="18" y2="24" />
    </svg>
  ),
  Server: (p) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <rect x="4" y="5" width="20" height="6" /><rect x="4" y="13" width="20" height="6" /><rect x="4" y="21" width="20" height="2" />
      <circle cx="8" cy="8" r="0.8" fill="currentColor" /><circle cx="11" cy="8" r="0.8" fill="currentColor" />
      <circle cx="8" cy="16" r="0.8" fill="currentColor" /><circle cx="11" cy="16" r="0.8" fill="currentColor" />
      <line x1="17" y1="8" x2="21" y2="8" /><line x1="17" y1="16" x2="21" y2="16" />
    </svg>
  ),
  Plant: (p) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M3 24 V12 L8 14 V9 L13 12 V7 L18 11 V14 H25 V24 Z" />
      <line x1="6" y1="20" x2="6" y2="22" /><line x1="11" y1="18" x2="11" y2="22" /><line x1="16" y1="18" x2="16" y2="22" /><line x1="21" y1="18" x2="21" y2="22" />
      <line x1="2" y1="24" x2="26" y2="24" />
    </svg>
  ),
  H2: (p) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <circle cx="14" cy="14" r="10" />
      <text x="14" y="18" fontSize="11" fontWeight="700" fontFamily="Archivo" textAnchor="middle" fill="currentColor" stroke="none">H₂</text>
    </svg>
  ),
  Wrench: (p) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M20 4 L24 8 L20 12 L18 10 L14 14 L18 18 L22 14 L24 16 L20 20 L24 24" />
      <path d="M14 14 L4 24" /><circle cx="4.5" cy="23.5" r="1.2" />
    </svg>
  ),
  Gauge: (p) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M4 18 A10 10 0 0 1 24 18" /><line x1="4" y1="18" x2="24" y2="18" />
      <line x1="14" y1="18" x2="20" y2="11" strokeWidth="2.5" />
      <circle cx="14" cy="18" r="1.5" fill="currentColor" />
      <line x1="7" y1="14" x2="8.5" y2="15" /><line x1="14" y1="9" x2="14" y2="11" /><line x1="21" y1="14" x2="19.5" y2="15" />
    </svg>
  ),
  Trailer: (p) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <rect x="2" y="10" width="18" height="8" rx="0" />
      <circle cx="20" cy="22" r="2.5" /><circle cx="7" cy="22" r="2.5" />
      <line x1="2" y1="20" x2="4.5" y2="20" /><line x1="9.5" y1="20" x2="17.5" y2="20" /><line x1="22.5" y1="20" x2="26" y2="20" />
      <line x1="6" y1="13" x2="6" y2="15" /><line x1="10" y1="13" x2="10" y2="15" /><line x1="14" y1="13" x2="14" y2="15" />
    </svg>
  ),
  Snow: (p) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <line x1="14" y1="3" x2="14" y2="25" /><line x1="3" y1="14" x2="25" y2="14" />
      <line x1="6" y1="6" x2="22" y2="22" /><line x1="22" y1="6" x2="6" y2="22" />
      <circle cx="14" cy="14" r="2" />
    </svg>
  ),
  Arrow: (p) => (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <line x1="0" y1="5" x2="13" y2="5" /><polyline points="9,1 13,5 9,9" />
    </svg>
  ),
  Check: (p) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" {...p}>
      <polyline points="3,11 8,16 17,4" />
    </svg>
  ),
  Shield: (p) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M12 2 L21 5 V12 C21 17 17 21 12 22 C7 21 3 17 3 12 V5 Z" />
      <polyline points="8,12 11,15 16,9" />
    </svg>
  ),
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

export default function Home() {
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '', scope: '', message: ''
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value })
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name required'
    if (!formData.company.trim()) newErrors.company = 'Company required'
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid email required'
    if (!formData.scope) newErrors.scope = 'Please select a scope'
    if (!formData.message.trim()) newErrors.message = 'Project notes required'
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setSubmitted(true)
  }

  return (
    <div>
      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-bg">
          <div className="hero-image"></div>
        </div>
        <div className="hero-content">
          <div className="wrap">
            <div className="hero-grid">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="hero-tag mono">
                  <span className="dot"></span>
                  <span>EST. 2003 — SINGAPORE</span>
                </div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Trusted Mechanical Engineering for{" "}
                  <span className="underline">Singapore's Gas</span>{" "}
                  &amp; <span className="accent">Process Industries</span>.
                </motion.h1>
                <motion.p 
                  className="hero-sub"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  From semiconductor gas plants to hydrogen trailer servicing — LS Lee Engineering
                  delivers safety-critical mechanical solutions backed by 20+ years of frontline
                  experience across South-East Asia.
                </motion.p>
                <motion.div 
                  className="hero-ctas"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <a href="#industries" className="btn btn-primary">
                    Explore Our Industries <I.Arrow className="arrow" />
                  </a>
                  <a href="#projects" className="btn btn-outline">View Projects</a>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="hero-meta">
                  <div><div className="k">20+</div><div className="l">Years Operating</div></div>
                  <div><div className="k">450+</div><div className="l">Projects Delivered</div></div>
                  <div><div className="k">3,200+</div><div className="l">Trailers Certified</div></div>
                  <div><div className="k">2.4M</div><div className="l">Safe Manhours</div></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="ticker">
          <div className="wrap">
            <div className="ticker-row">
              <div><span className="live"></span> LIVE / SITES ACTIVE: 14</div>
              <div>ISO 9001:2015 · ISO 45001 · bizSAFE STAR</div>
              <div>SINGAPORE · JURONG ISLAND · TUAS</div>
              <div>SCROLL ↓</div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
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
          <div className="sec-head">
            <div>
              <div className="sec-eyebrow"><span className="bar"></span><span className="num">SECTION / 02 — VERTICALS</span></div>
              <h2>Industries <span className="accent">We Serve</span></h2>
            </div>
            <p className="sec-intro">
              Four high-stakes verticals where uptime, purity, and pressure integrity are non-negotiable.
              We engineer for the operators that keep them running.
            </p>
          </div>
          <motion.div 
            className="ind-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { num: "01", icon: <I.Chip />, title: "Semiconductor", desc: "Gas plant construction, integration, and maintenance for wafer fabrication facilities and tool hook-ups.", tags: ["UHP GAS", "FAB BUILD", "HOOK-UP"] },
              { num: "02", icon: <I.Server />, title: "Data Center", desc: "Hydrogen pipeline infrastructure for next-generation power systems and resilient backup architectures.", tags: ["H₂ PIPING", "BACKUP PWR"] },
              { num: "03", icon: <I.Plant />, title: "Industrial Gas & Process Plants", desc: "Turnkey project engineering and long-term plant maintenance across air separation, specialty gas and chemical sites.", tags: ["TURNKEY", "ASU", "MAINTENANCE"] },
              { num: "04", icon: <I.H2 />, title: "New Energy / Hydrogen", desc: "Hydrogen infrastructure engineering, tube trailer testing and certification for the regional clean-energy transition.", tags: ["H₂", "CERTIFICATION", "TUBE TRAILER"] },
            ].map((it) => (
              <motion.div 
                className="ind-card" 
                key={it.num}
                variants={cardVariant}
                transition={{ duration: 0.5 }}
              >
                <div className="ind-top">
                  <div className="ind-icon">{it.icon}</div>
                  <div className="ind-num">[ {it.num} / 04 ]</div>
                </div>
                <h3>{it.title}</h3>
                <p>{it.desc}</p>
                <div className="ind-tags">{it.tags.map(t => <span key={t} className="ind-tag">{t}</span>)}</div>
                <div className="ind-more">Learn More <I.Arrow /></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* SERVICES */}
      <motion.section 
        id="services" 
        className="section gray"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="sec-eyebrow"><span className="bar"></span><span className="num">SECTION / 03 — CAPABILITIES</span></div>
              <h2>Our Engineering <span className="accent">Capabilities</span></h2>
            </div>
            <p className="sec-intro">
              Four integrated practices, one accountable contractor. End-to-end execution from design office to plant floor.
            </p>
          </div>
          <motion.div 
            className="svc-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { num: "01", tag: "PROJECT ENGINEERING", icon: <I.Wrench />, title: "Project Engineering Services", bullets: ["Detailed design & 3D modelling", "Skid & module fabrication", "Site installation & hook-up", "Commissioning & start-up"] },
              { num: "02", tag: "OPERATIONS", icon: <I.Gauge />, title: "Plant Maintenance & Servicing", bullets: ["Preventive & predictive PM", "Shutdown & turnaround support", "Rotating equipment overhaul", "24/7 on-call response"] },
              { num: "03", tag: "CERTIFICATION", icon: <I.Trailer />, title: "Hydrogen & Tube Trailer Testing", bullets: ["Hydrostatic & pneumatic testing", "DOT / ISO recertification", "Valve & manifold servicing", "Composite cylinder inspection"] },
              { num: "04", tag: "FABRICATION", icon: <I.Snow />, title: "Cryogenic Hose Fabrication", bullets: ["LIN / LOX / LAR / LNG service", "Vacuum-insulated assemblies", "Custom lengths & end fittings", "PED & ASME compliant"] },
            ].map((it) => (
              <motion.div 
                className="svc-row" 
                key={it.num}
                variants={cardVariant}
                transition={{ duration: 0.5 }}
              >
                <div className="svc-num">{it.num}</div>
                <div className="svc-title-cell">
                  <div className="svc-tag mono">{it.tag}</div>
                  <h3>{it.title}</h3>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 8, opacity: 0.7 }}>{it.icon}</div>
                </div>
                <div className="svc-detail">
                  <ul className="svc-bullets">
                    {it.bullets.map(b => <li key={b}>{b}</li>)}
                  </ul>
                </div>
                <div className="svc-cta"><a>Detail <I.Arrow /></a></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* GROUP */}
      <motion.section 
        id="group" 
        className="section dark"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <div className="wrap">
          <div className="grp-intro">
            <div>
              <div className="sec-eyebrow" style={{ color: 'rgba(255,255,255,0.6)' }}>
                <span className="bar"></span><span className="num">SECTION / 04 — GROUP</span>
              </div>
              <h2>Complete Engineering Solutions Through <span className="accent">Group Integration</span></h2>
            </div>
            <p className="sec-intro" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Three specialized companies under shared ownership. Mechanical, electrical, and gas supply capability deployed as one integrated team across every project phase.
            </p>
          </div>
          <motion.div 
            className="grp-cards"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { abbr: "LS", color: "#FF5722", name: "LS Lee", role: "Mechanical Engineering", desc: "Mechanical project execution, plant maintenance, fabrication and testing for gas and process sites.", caps: ["MECHANICAL CONTRACTING", "FABRICATION", "TESTING & CERT"] },
              { abbr: "CN", color: "#00BCD4", name: "CONSEN", role: "Electrical & Instrumentation", desc: "E&I design, installation, control systems and instrumentation calibration across plant operations.", caps: ["ELECTRICAL INSTALL", "INSTRUMENTATION", "CONTROL SYSTEMS"] },
              { abbr: "GP", color: "#F4F5F7", txt: "#0A1628", name: "GASPL", role: "Industrial Gas Supply", desc: "Industrial gas supply, distribution logistics and on-site gas system management for industrial clients.", caps: ["GAS SUPPLY", "LOGISTICS", "SITE OPERATIONS"] },
            ].map((co, i) => (
              <motion.div 
                className="grp-card" 
                key={i} 
                style={{ color: co.txt || '#FFF' }}
                variants={cardVariant}
                transition={{ duration: 0.5 }}
              >
                <div className="grp-card-head">
                  <div className="grp-abbr" style={{ borderColor: co.color, color: co.color }}>{co.abbr}</div>
                </div>
                <h4>{co.name}</h4>
                <div className="grp-role">{co.role}</div>
                <p>{co.desc}</p>
                <div className="grp-caps">
                  {co.caps.map(c => <span key={c}>{c}</span>)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* PROJECTS */}
      <motion.section 
        id="projects" 
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="sec-eyebrow"><span className="bar"></span><span className="num">SECTION / 05 — TRACK RECORD</span></div>
              <h2>Selected <span className="accent">Project Portfolio</span></h2>
            </div>
            <p className="sec-intro">
              Representative mechanical projects across semiconductor, industrial gas, and energy infrastructure since 2003.
            </p>
          </div>
          <motion.div 
            className="prj-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { title: "Fab-14 UHP Gas Distribution", scope: "PROJECT ENGINEERING", desc: "Design, fabrication, and installation of ultra-high-purity gas distribution network for new wafer fab expansion.", loc: "Woodlands" },
              { title: "ASU Plant Turnaround", scope: "MAINTENANCE", desc: "Major shutdown coordination and equipment overhaul across air separation unit cold box and compressor systems.", loc: "Jurong Island" },
              { title: "H₂ Tube Trailer Recertification", scope: "TESTING & CERTIFICATION", desc: "DOT recertification program for fleet of 40+ hydrogen tube trailers serving regional industrial customers.", loc: "Tuas" },
              { title: "LNG Terminal Hose Assemblies", scope: "FABRICATION", desc: "Custom cryogenic hose fabrication for liquefied natural gas loading and offloading operations.", loc: "Jurong Island" },
              { title: "Process Gas Metering Skid", scope: "PROJECT ENGINEERING", desc: "Turnkey design-build of gas metering and flow control skid package for chemical process application.", loc: "Jurong Island" },
              { title: "Data Center H₂ Backup System", scope: "PROJECT ENGINEERING", desc: "Hydrogen fuel cell backup power infrastructure including piping, safety systems, and leak detection.", loc: "One-North" },
            ].map((prj, i) => (
              <motion.div 
                className="prj-card" 
                key={i}
                variants={cardVariant}
                transition={{ duration: 0.5 }}
              >
                <div className="prj-img">[ PROJECT IMAGE ]</div>
                <div className="prj-body">
                  <h3>{prj.title}</h3>
                  <div className="prj-scope">{prj.scope}</div>
                  <p className="prj-desc">{prj.desc}</p>
                  <div className="prj-meta">
                    <div className="loc mono" style={{ fontSize: 10, letterSpacing: '0.15em', color: 'var(--muted)' }}>{prj.loc.toUpperCase()}</div>
                    <div className="more">View <I.Arrow /></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* SAFETY */}
      <motion.section 
        id="safety" 
        className="section gray"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="sec-eyebrow"><span className="bar"></span><span className="num">SECTION / 06 — SAFETY</span></div>
              <h2>Safety First, <span className="accent">Always</span></h2>
            </div>
            <p className="sec-intro">
              Zero compromise on safety. Certifications, training, and a track record that speaks for itself.
            </p>
          </div>
          <div className="sft-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="sft-stmt">
                <div className="lg">2.4 Million Safe Manhours Without Lost-Time Incident</div>
                <p>
                  Our safety culture is built on accountability, training, and frontline ownership. Every technician, every engineer, every supervisor — empowered to stop work if conditions aren't right.
                </p>
                <p>
                  From daily toolbox talks to advanced HAZOP reviews, safety is integrated into project planning, execution, and closeout.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="cert-grid">
                {[
                  { mark: "Q", issuer: "SAC-SINGLAS", title: "ISO 9001:2015", sub: "Quality Management" },
                  { mark: "O", issuer: "SAC-SINGLAS", title: "ISO 45001", sub: "OH&S Management" },
                  { mark: "★", issuer: "WSH COUNCIL", title: "bizSAFE STAR", sub: "Workplace Safety" },
                  { mark: "P", issuer: "BCA", title: "CoreTrade", sub: "Plumbing & Piping" },
                  { mark: "E", issuer: "EMA", title: "LEW Licence", sub: "Electrical Works" },
                  { mark: "G", issuer: "SP", title: "Gas Service", sub: "Gas Installation" },
                ].map((cert, i) => (
                  <div className="cert" key={i}>
                    <div className="cert-top">
                      <div className="cert-mark">{cert.mark}</div>
                      <div className="cert-issuer">{cert.issuer}</div>
                    </div>
                    <div>
                      <h4>{cert.title}</h4>
                      <div className="sub">{cert.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section 
        id="contact" 
        className="section" 
        style={{ paddingTop: 120, paddingBottom: 120 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <div className="wrap">
          <div className="ct-split">
            <div className="ct-left">
              <div className="sec-eyebrow" style={{ color: "rgba(255,255,255,0.7)" }}>
                <span className="bar"></span><span className="num">SECTION / 07 — CONTACT</span>
              </div>
              <h2>Ready to Discuss <span className="accent">Your Project?</span></h2>
              <p className="sub">
                Whether you're scoping a new plant, planning a turnaround, or recertifying a fleet —
                talk to a project engineer, not a sales rep.
              </p>
              <div className="ct-details">
                <div className="ct-detail"><span className="l">Office</span><span className="v">LS Lee Engineering Pte. Ltd.<br/>Singapore</span></div>
                <div className="ct-detail"><span className="l">Phone</span><span className="v mono">+65 6XXX XXXX</span></div>
                <div className="ct-detail"><span className="l">Email</span><span className="v mono">projects@lslee.com.sg</span></div>
                <div className="ct-detail"><span className="l">Hours</span><span className="v">Mon–Fri · 08:30 – 18:00 SGT<br/>24/7 plant-response on contract</span></div>
                <div className="ct-detail" style={{ borderBottom: "none" }}><span className="l">Response</span><span className="v">Within 1 business day</span></div>
              </div>
            </div>
            <div className="ct-right">
              {!submitted ? (
                <>
                  <h3>Start a project enquiry</h3>
                  <div className="form-sub">[ FORM / SECURE TRANSMISSION ]</div>
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="form-row two">
                      <div className={`form-field ${errors.name ? "error" : ""}`}>
                        <label>Full Name *</label>
                        <input type="text" value={formData.name} onChange={handleChange("name")} placeholder="Jane Tan" />
                        {errors.name && <div className="err">⚠ {errors.name}</div>}
                      </div>
                      <div className={`form-field ${errors.company ? "error" : ""}`}>
                        <label>Company *</label>
                        <input type="text" value={formData.company} onChange={handleChange("company")} placeholder="Operator name" />
                        {errors.company && <div className="err">⚠ {errors.company}</div>}
                      </div>
                    </div>
                    <div className="form-row two">
                      <div className={`form-field ${errors.email ? "error" : ""}`}>
                        <label>Work Email *</label>
                        <input type="email" value={formData.email} onChange={handleChange("email")} placeholder="jane@operator.com" />
                        {errors.email && <div className="err">⚠ {errors.email}</div>}
                      </div>
                      <div className="form-field">
                        <label>Phone</label>
                        <input type="tel" value={formData.phone} onChange={handleChange("phone")} placeholder="+65 …" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className={`form-field ${errors.scope ? "error" : ""}`}>
                        <label>Scope of Enquiry *</label>
                        <select value={formData.scope} onChange={handleChange("scope")}>
                          <option value="">Select a scope</option>
                          <option value="project-engineering">Project Engineering Services</option>
                          <option value="plant-maintenance">Plant Maintenance &amp; Servicing</option>
                          <option value="hydrogen-trailer">Hydrogen / Tube Trailer Testing</option>
                          <option value="cryogenic-hose">Cryogenic Hose Fabrication</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.scope && <div className="err">⚠ {errors.scope}</div>}
                      </div>
                    </div>
                    <div className="form-row">
                      <div className={`form-field ${errors.message ? "error" : ""}`}>
                        <label>Project Notes *</label>
                        <textarea value={formData.message} onChange={handleChange("message")} placeholder="Site, timeline, scope, constraints…" />
                        {errors.message && <div className="err">⚠ {errors.message}</div>}
                      </div>
                    </div>
                    <button type="submit" className="form-submit">
                      Send Enquiry <I.Arrow style={{ stroke: "currentColor" }} />
                    </button>
                  </form>
                </>
              ) : (
                <div className="form-success">
                  <div className="check"><I.Check /></div>
                  <h3 style={{ marginBottom: 8 }}>Enquiry received.</h3>
                  <p className="mono" style={{ fontSize: 12, letterSpacing: "0.1em", marginBottom: 16, opacity: 0.7 }}>REF · LSL-{Date.now().toString().slice(-6)}</p>
                  <p style={{ fontSize: 14, opacity: 0.9 }}>
                    A project engineer will respond within one business day.
                  </p>
                  <button onClick={() => { setSubmitted(false); setFormData({ name: "", company: "", email: "", phone: "", scope: "", message: "" }); }} style={{ marginTop: 24, background: "transparent", color: "white", border: "2px solid white", padding: "10px 18px", fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer" }}>
                    Send Another
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
