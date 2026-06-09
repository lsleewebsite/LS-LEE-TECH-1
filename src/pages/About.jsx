import React from "react"
import { motion } from "framer-motion"

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

export default function About() {
  const timeline = [
    {
      year: "1989",
      event: "Founded",
      detail: "Established as a mechanical contractor serving Singapore's emerging industrial gas sector",
    },
    {
      year: "1995",
      event: "First Major Fab Project",
      detail: "Secured first semiconductor gas distribution project, launching our UHP expertise",
    },
    {
      year: "2003",
      event: "ISO Certification",
      detail: "Achieved ISO 9001:2000 certification, formalising quality management systems",
    },
    {
      year: "2010",
      event: "Hydrogen Testing Facility",
      detail: "Commissioned dedicated tube trailer testing facility in Tuas, first of its kind in Singapore",
    },
    {
      year: "2018",
      event: "Safety Milestone",
      detail: "Reached 2 million safe manhours without lost-time incident across active projects",
    },
    {
      year: "2024",
      event: "New Energy Expansion",
      detail: "Expanded capabilities into hydrogen infrastructure for data centre fuel cells and clean energy",
    },
  ]

  const PhotoPlaceholder = ({ height, wide }) => (
    <div style={{
      width: "100%",
      height: height || "100%",
      background: "#1E293B",
      border: "2px solid #334155",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s",
      cursor: "pointer",
      overflow: "hidden"
    }}
    onMouseEnter={(e) => e.currentTarget.style.borderColor = "#DC2626"}
    onMouseLeave={(e) => e.currentTarget.style.borderColor = "#334155"}
    >
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" style={{ opacity: 0.2, marginBottom: "10px" }}>
        <rect x="4" y="4" width="40" height="40" rx="2" stroke="white" strokeWidth="2" />
        <circle cx="18" cy="18" r="5" stroke="white" strokeWidth="2" />
        <path d="M4 32 L14 22 L22 30 L30 20 L44 36" stroke="white" strokeWidth="2" />
      </svg>
      <div style={{
        fontFamily: "IBM Plex Mono",
        fontSize: "10px",
        color: "#475569",
        letterSpacing: "0.1em"
      }}>
        {wide ? "[ TEAM PHOTO ]" : "[ PHOTO ]"}
      </div>
    </div>
  )

  return (
    <div>
      {/* Hero */}
      <section style={{
        padding: "120px 32px 100px",
        background: "#0F172A",
        color: "#FFF",
        borderBottom: "2px solid #DC2626",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{
              fontFamily: "IBM Plex Mono",
              fontSize: "12px",
              fontWeight: 700,
              color: "#DC2626",
              letterSpacing: "0.15em",
              marginBottom: "24px",
              textTransform: "uppercase",
            }}>
              About Us
            </div>

            <h1 style={{
              fontSize: "56px",
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: "32px",
              maxWidth: "900px",
            }}>
              We Have Been Building Critical Gas Infrastructure Since Most Fabs in Singapore Were Just Blueprints
            </h1>

            <p style={{
              fontSize: "20px",
              color: "#94A3B8",
              lineHeight: 1.7,
              maxWidth: "800px",
            }}>
              35 years of mechanical engineering for industries where a single leak, wrong fitting, or missed inspection
              can cost millions in downtime or worse. We are still here because we do not cut corners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        style={{ padding: "100px 32px", background: "#FFF" }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: "80px",
            alignItems: "start",
          }}>
            <div>
              <h2 style={{
                fontSize: "42px",
                fontWeight: 900,
                marginBottom: "24px",
                lineHeight: 1.1,
              }}>
                How We Got Here
              </h2>
              <p style={{
                fontSize: "16px",
                color: "#DC2626",
                fontWeight: 600,
                fontFamily: "IBM Plex Mono",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}>
                1989 to Present
              </p>
            </div>

            <div style={{ fontSize: "16px", color: "#64748B", lineHeight: 1.8 }}>
              <p style={{ marginBottom: "24px" }}>
                L.S. Lee started in 1989 as a three-person mechanical contractor doing piping work for industrial gas
                plants. The semiconductor boom had not hit Singapore yet. Data centres were not burning gigawatts.
                Hydrogen was something you learned about in chemistry class, not something you moved around in 40-foot
                tube trailers at 250 bar.
              </p>
              <p style={{ marginBottom: "24px" }}>
                We grew by doing one thing well and then doing it again. UHP gas distribution for one fab became UHP for
                twelve fabs. Plant turnarounds became long-term maintenance contracts. One-off tube trailer testing
                became Singapore's first dedicated hydrogen testing facility.
              </p>
              <p style={{ marginBottom: "24px" }}>
                Today we are a 50-person team with in-house design capability, fabrication shop, testing facility, and
                maintenance crews running 24/7 support contracts. We have worked on projects you have heard of and plenty
                you have not, because our clients care more about uptime than press releases.
              </p>
              <p>
                The industry changed. We changed with it. What did not change: if your name goes on the drawing, you own
                the outcome.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Milestones */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        style={{
          padding: "100px 32px",
          background: "#F8F9FA",
          borderTop: "2px solid #0F172A",
          borderBottom: "2px solid #0F172A",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "42px",
            fontWeight: 900,
            marginBottom: "60px",
            textAlign: "center",
          }}>
            Key Milestones
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "40px",
          }}>
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{
                  padding: "32px",
                  background: "#FFF",
                  border: "2px solid #0F172A",
                  position: "relative",
                }}
              >
                <div style={{
                  position: "absolute",
                  top: "-12px",
                  left: "32px",
                  background: "#DC2626",
                  color: "#FFF",
                  padding: "4px 12px",
                  fontFamily: "IBM Plex Mono",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                }}>
                  {item.year}
                </div>
                <h3 style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  marginBottom: "12px",
                  marginTop: "8px",
                }}>
                  {item.event}
                </h3>
                <p style={{ fontSize: "14px", color: "#64748B", lineHeight: 1.6 }}>
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* People / Photo Wall */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        style={{ padding: "100px 32px", background: "#0F172A", color: "#FFF" }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ marginBottom: "60px" }}>
            <h2 style={{
              fontSize: "42px",
              fontWeight: 900,
              marginBottom: "16px",
              fontFamily: "Archivo"
            }}>
              Our People
            </h2>
            <div style={{ width: "60px", height: "4px", background: "#DC2626" }}></div>
            <p style={{
              fontSize: "17px",
              color: "#94A3B8",
              lineHeight: 1.7,
              marginTop: "24px",
              maxWidth: "700px"
            }}>
              35 years of work built by the same people showing up every day. Our team average tenure is over 10 years — in an industry where that is rare.
            </p>
          </div>

          {/* Photo Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "12px"
          }}>

            {/* Large left - 6 cols, tall */}
            <div style={{ gridColumn: "span 6", gridRow: "span 2", height: "460px" }}>
              <PhotoPlaceholder wide />
            </div>

            {/* Top right 1 - 3 cols */}
            <div style={{ gridColumn: "span 3", height: "220px" }}>
              <PhotoPlaceholder />
            </div>

            {/* Top right stat - 3 cols red */}
            <div style={{
              gridColumn: "span 3",
              height: "220px",
              background: "#DC2626",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "32px"
            }}>
              <div style={{
                fontSize: "48px",
                fontWeight: 900,
                fontFamily: "Archivo",
                color: "#FFF",
                lineHeight: 1,
                marginBottom: "8px"
              }}>
                55
              </div>
              <div style={{
                fontFamily: "IBM Plex Mono",
                fontSize: "11px",
                color: "rgba(255,255,255,0.8)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textAlign: "center"
              }}>
                People Strong
              </div>
            </div>

            {/* Bottom right 1 - 3 cols */}
            <div style={{ gridColumn: "span 3", height: "228px" }}>
              <PhotoPlaceholder />
            </div>

            {/* Bottom right stat - 3 cols dark */}
            <div style={{
              gridColumn: "span 3",
              height: "228px",
              background: "#0F172A",
              border: "2px solid #334155",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "32px"
            }}>
              <div style={{
                fontSize: "48px",
                fontWeight: 900,
                fontFamily: "Archivo",
                color: "#DC2626",
                lineHeight: 1,
                marginBottom: "8px"
              }}>
                10+
              </div>
              <div style={{
                fontFamily: "IBM Plex Mono",
                fontSize: "11px",
                color: "#64748B",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textAlign: "center"
              }}>
                Avg. Years Tenure
              </div>
            </div>

            {/* Bottom wide - full width */}
            <div style={{ gridColumn: "span 12", height: "280px" }}>
              <PhotoPlaceholder wide />
            </div>

          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        style={{
          padding: "100px 32px",
          background: "#DC2626",
          color: "#FFF",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "42px",
            fontWeight: 900,
            marginBottom: "24px",
            lineHeight: 1.2,
          }}>
            Talk to Someone Who Has Actually Done This Before
          </h2>

          <p style={{
            fontSize: "18px",
            marginBottom: "40px",
            opacity: 0.95,
            lineHeight: 1.7,
          }}>
            Whether you are scoping a new plant, planning a turnaround, or troubleshooting a system nobody else wants to
            touch, we have probably seen it.
          </p>

          
            href="/Contact"
            style={{
              display: "inline-block",
              padding: "18px 40px",
              background: "#FFF",
              color: "#DC2626",
              border: "2px solid #FFF",
              fontWeight: 700,
              fontSize: "15px",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              textDecoration: "none",
              cursor: "pointer",
              transition: "all 0.3s",
              fontFamily: "Archivo",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#0F172A"
              e.currentTarget.style.color = "#FFF"
              e.currentTarget.style.borderColor = "#0F172A"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#FFF"
              e.currentTarget.style.color = "#DC2626"
              e.currentTarget.style.borderColor = "#FFF"
            }}
          >
            Get in Touch
          </a>
        </div>
      </motion.section>
    </div>
  )
}
