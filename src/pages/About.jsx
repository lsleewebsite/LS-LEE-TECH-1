{/* People Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        style={{
          padding: "100px 32px",
          background: "#0F172A",
          color: "#FFF"
        }}
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
              35 years of work built by the same people showing up every day. Our team average tenure is over 10 years — in an industry where that's rare.
            </p>
          </div>

          {/* Photo Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateRows: "auto",
            gap: "12px"
          }}>
            {/* Large photo - spans 6 cols, 2 rows */}
            <div style={{
              gridColumn: "span 6",
              gridRow: "span 2",
              height: "460px",
              background: "#1E293B",
              border: "2px solid #334155",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              transition: "all 0.3s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = "#DC2626"}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = "#334155"}
            >
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ opacity: 0.2, marginBottom: "12px" }}>
                <rect x="4" y="4" width="40" height="40" rx="2" stroke="white" strokeWidth="2" />
                <circle cx="18" cy="18" r="5" stroke="white" strokeWidth="2" />
                <path d="M4 32 L14 22 L22 30 L30 20 L44 36" stroke="white" strokeWidth="2" />
              </svg>
              <div style={{
                fontFamily: "IBM Plex Mono",
                fontSize: "11px",
                color: "#475569",
                letterSpacing: "0.1em"
              }}>
                [ TEAM PHOTO ]
              </div>
            </div>

            {/* Top right - spans 3 cols */}
            <div style={{
              gridColumn: "span 3",
              height: "220px",
              background: "#1E293B",
              border: "2px solid #334155",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              transition: "all 0.3s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = "#DC2626"}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = "#334155"}
            >
              <svg width="32" height="32" viewBox="0 0 48 48" fill="none" style={{ opacity: 0.2, marginBottom: "8px" }}>
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
                [ PHOTO ]
              </div>
            </div>

            {/* Top right - spans 3 cols */}
            <div style={{
              gridColumn: "span 3",
              height: "220px",
              background: "#DC2626",
              border: "2px solid #DC2626",
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

            {/* Bottom right 1 - spans 3 cols */}
            <div style={{
              gridColumn: "span 3",
              height: "228px",
              background: "#1E293B",
              border: "2px solid #334155",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              transition: "all 0.3s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = "#DC2626"}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = "#334155"}
            >
              <svg width="32" height="32" viewBox="0 0 48 48" fill="none" style={{ opacity: 0.2, marginBottom: "8px" }}>
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
                [ PHOTO ]
              </div>
            </div>

            {/* Bottom right 2 - spans 3 cols */}
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

            {/* Bottom wide - spans 12 cols */}
            <div style={{
              gridColumn: "span 12",
              height: "280px",
              background: "#1E293B",
              border: "2px solid #334155",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              transition: "all 0.3s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = "#DC2626"}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = "#334155"}
            >
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ opacity: 0.2, marginBottom: "12px" }}>
                <rect x="4" y="4" width="40" height="40" rx="2" stroke="white" strokeWidth="2" />
                <circle cx="18" cy="18" r="5" stroke="white" strokeWidth="2" />
                <path d="M4 32 L14 22 L22 30 L30 20 L44 36" stroke="white" strokeWidth="2" />
              </svg>
              <div style={{
                fontFamily: "IBM Plex Mono",
                fontSize: "11px",
                color: "#475569",
                letterSpacing: "0.1em"
              }}>
                [ WIDE EVENT / TEAM PHOTO ]
              </div>
            </div>
          </div>
        </div>
      </motion.section>
