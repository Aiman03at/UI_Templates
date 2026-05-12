import { useState } from "react";

export default function Product() {
  const [hovered, setHovered] = useState(null);

  const features = [
    { icon: "⚡", title: "Blazing Fast", desc: "Edge-rendered at 100+ locations globally" },
    { icon: "🔒", title: "Zero Trust", desc: "End-to-end encryption by default" },
    { icon: "🎯", title: "AI Native", desc: "Intelligent routing and auto-scaling" },
  ];

  const navLinks = ["Docs", "Pricing", "Blog"];

  return (
    <div style={{
      fontFamily: "'DM Sans', sans-serif",
      background: "linear-gradient(160deg, #fdfcfb 0%, #f0f4ff 100%)",
      color: "#0a0a1a",
      height: "100%",
      overflowY: "auto",
    }}>
      {/* Sticky Nav */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 32px",
        borderBottom: "1px solid #e8e8f0",
        background: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(12px)",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}>
        <span style={{ fontWeight: 800, fontSize: 16, letterSpacing: "-0.5px" }}>◈ Nova</span>

        <div style={{ display: "flex", gap: 20 }}>
          {navLinks.map(n => (
            <span key={n} style={{ fontSize: 12, color: "#666", cursor: "pointer", fontWeight: 500 }}>
              {n}
            </span>
          ))}
        </div>

        <button style={{
          background: "#0a0a1a",
          color: "#fff",
          border: "none",
          padding: "7px 14px",
          borderRadius: "8px",
          fontSize: 12,
          fontWeight: 600,
          cursor: "pointer",
        }}>
          Get Started →
        </button>
      </div>

      {/* Hero */}
      <div style={{ textAlign: "center", padding: "60px 32px 40px" }}>
        <div style={{
          display: "inline-block",
          background: "#eef0ff",
          color: "#5b57e8",
          padding: "4px 12px",
          borderRadius: "999px",
          fontSize: 11,
          fontWeight: 600,
          marginBottom: 20,
          border: "1px solid #c7c9f5",
        }}>
          🚀 Now in Public Beta
        </div>

        <h1 style={{
          fontSize: 42,
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: "-2px",
          margin: "0 0 16px",
          color: "#0a0a1a",
        }}>
          Ship products<br />
          <span style={{ color: "#5b57e8" }}>10× faster.</span>
        </h1>

        <p style={{
          color: "#666",
          fontSize: 14,
          maxWidth: 340,
          margin: "0 auto 28px",
          lineHeight: 1.6,
        }}>
          The modern infrastructure platform for teams who move fast and don't break things.
        </p>

        <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
          <button style={{
            background: "#0a0a1a",
            color: "#fff",
            border: "none",
            padding: "11px 22px",
            borderRadius: "10px",
            fontSize: 13,
            fontWeight: 700,
            cursor: "pointer",
          }}>
            Start for free
          </button>
          <button style={{
            background: "transparent",
            color: "#0a0a1a",
            border: "1px solid #e0e0e8",
            padding: "11px 22px",
            borderRadius: "10px",
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer",
          }}>
            Watch demo ▶
          </button>
        </div>
      </div>

      {/* Feature Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "12px",
        padding: "0 32px 40px",
      }}>
        {features.map((f, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: hovered === i ? "#0a0a1a" : "#fff",
              color: hovered === i ? "#fff" : "#0a0a1a",
              border: "1px solid #e8e8f0",
              borderRadius: "16px",
              padding: "20px",
              transition: "all 0.2s",
              cursor: "default",
            }}
          >
            <div style={{ fontSize: 24, marginBottom: 10 }}>{f.icon}</div>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{f.title}</div>
            <div style={{ fontSize: 12, opacity: 0.6, lineHeight: 1.5 }}>{f.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}