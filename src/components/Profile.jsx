export default function Profile() {
  const skills = ["React", "TypeScript", "Node.js", "PostgreSQL", "Python", "Docker", "AWS", "Redis"];

  const projects = [
    { name: "SupplySync", desc: "Real-time supply chain with AI insights", stars: 142, lang: "TypeScript" },
    { name: "DevQuiz", desc: "Social quiz platform for developers", stars: 89, lang: "JavaScript" },
    { name: "Switchie", desc: "AI-driven career transition app", stars: 67, lang: "TypeScript" },
  ];

  return (
    <div style={{
      fontFamily: "'DM Sans', sans-serif",
      background: "#0d1117",
      color: "#e6edf3",
      height: "100%",
      overflowY: "auto",
      padding: "24px",
    }}>
      {/* Profile Header */}
      <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", marginBottom: "24px" }}>
        <div style={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          flexShrink: 0,
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          fontWeight: 800,
          color: "#fff",
          border: "3px solid #30363d",
        }}>
          AK
        </div>

        <div>
          <div style={{ fontSize: 18, fontWeight: 700 }}>Aiman K.</div>
          <div style={{ fontSize: 12, color: "#8b949e", margin: "2px 0" }}>
            Full-Stack Developer · Ottawa, CA
          </div>
          <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
            {["Follow", "Sponsor"].map((label, i) => (
              <button key={label} style={{
                background: i === 0 ? "#238636" : "transparent",
                border: i === 0 ? "none" : "1px solid #30363d",
                color: i === 0 ? "#fff" : "#e6edf3",
                padding: "4px 12px",
                borderRadius: "6px",
                fontSize: 11,
                fontWeight: 600,
                cursor: "pointer",
              }}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div style={{ marginBottom: "20px" }}>
        <div style={{
          fontSize: 12,
          color: "#8b949e",
          fontWeight: 600,
          marginBottom: 10,
          textTransform: "uppercase",
          letterSpacing: "0.5px",
        }}>
          Tech Stack
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {skills.map(s => (
            <span key={s} style={{
              background: "#161b22",
              border: "1px solid #30363d",
              color: "#79c0ff",
              padding: "3px 10px",
              borderRadius: "999px",
              fontSize: 11,
              fontWeight: 500,
            }}>
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Pinned Repos */}
      <div>
        <div style={{
          fontSize: 12,
          color: "#8b949e",
          fontWeight: 600,
          marginBottom: 10,
          textTransform: "uppercase",
          letterSpacing: "0.5px",
        }}>
          Pinned Repos
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {projects.map(p => (
            <div key={p.name} style={{
              background: "#161b22",
              border: "1px solid #30363d",
              borderRadius: "10px",
              padding: "14px",
            }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 4,
              }}>
                <span style={{ fontWeight: 600, fontSize: 13, color: "#58a6ff" }}>📁 {p.name}</span>
                <span style={{ fontSize: 11, color: "#8b949e" }}>⭐ {p.stars}</span>
              </div>
              <div style={{ fontSize: 11, color: "#8b949e", lineHeight: 1.5 }}>{p.desc}</div>
              <div style={{ marginTop: 8, fontSize: 10, color: "#e3b341" }}>● {p.lang}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}