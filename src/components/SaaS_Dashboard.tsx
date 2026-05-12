import { useState } from "react";

export default function SaaS_Dashboard() {
  const [active, setActive] = useState("overview");

  const stats = [
    { label: "Total Revenue", value: "$84,231", delta: "+12.4%", up: true },
    { label: "Active Users", value: "24,891", delta: "+3.2%", up: true },
    { label: "Churn Rate", value: "1.8%", delta: "-0.4%", up: false },
    { label: "Avg Session", value: "4m 32s", delta: "+0.7%", up: true },
  ];

  const bars = [40, 65, 50, 80, 60, 90, 75, 85, 70, 95, 60, 78];
  const nav = ["overview", "analytics", "users", "settings"];
  const months = ["J","F","M","A","M","J","J","A","S","O","N","D"];

  return (
    <div style={{
      fontFamily: "'DM Sans', sans-serif",
      background: "#0a0a0f",
      color: "#e8e8f0",
      height: "100%",
      display: "flex",
      fontSize: "13px",
      overflow: "hidden",
    }}>
      {/* Sidebar */}
      <div style={{
        width: "180px",
        background: "#0f0f1a",
        borderRight: "1px solid #1e1e30",
        padding: "24px 0",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        flexShrink: 0,
      }}>
        <div style={{
          padding: "0 16px 20px",
          fontSize: "15px",
          fontWeight: 700,
          color: "#7c6ef7",
          letterSpacing: "-0.5px",
        }}>
          ◆ Pulsar
        </div>

        {nav.map(n => (
          <button
            key={n}
            onClick={() => setActive(n)}
            style={{
              background: active === n ? "#7c6ef720" : "transparent",
              border: "none",
              borderLeft: active === n ? "2px solid #7c6ef7" : "2px solid transparent",
              color: active === n ? "#a99df5" : "#666680",
              padding: "9px 16px",
              textAlign: "left",
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: 500,
              textTransform: "capitalize",
              letterSpacing: "0.2px",
              transition: "all 0.15s",
            }}
          >
            {n}
          </button>
        ))}

        <div style={{ marginTop: "auto", padding: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: "linear-gradient(135deg,#7c6ef7,#c084fc)",
            }} />
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#e8e8f0" }}>Aiman K.</div>
              <div style={{ fontSize: 10, color: "#666680" }}>Admin</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        flex: 1,
        padding: "24px",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#fff" }}>Good morning 👋</div>
            <div style={{ fontSize: 12, color: "#666680" }}>Here's what's happening today</div>
          </div>
          <button style={{
            background: "linear-gradient(135deg,#7c6ef7,#c084fc)",
            border: "none",
            color: "#fff",
            padding: "8px 14px",
            borderRadius: "8px",
            fontSize: 12,
            fontWeight: 600,
            cursor: "pointer",
          }}>
            + New Report
          </button>
        </div>

        {/* Stats Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "12px" }}>
          {stats.map(s => (
            <div key={s.label} style={{
              background: "#0f0f1a",
              border: "1px solid #1e1e30",
              borderRadius: "12px",
              padding: "16px",
            }}>
              <div style={{ fontSize: 11, color: "#666680", marginBottom: 6 }}>{s.label}</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{s.value}</div>
              <div style={{ fontSize: 11, color: s.up ? "#4ade80" : "#f87171" }}>
                {s.delta} vs last month
              </div>
            </div>
          ))}
        </div>

        {/* Bar Chart */}
        <div style={{
          background: "#0f0f1a",
          border: "1px solid #1e1e30",
          borderRadius: "12px",
          padding: "20px",
        }}>
          <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 16 }}>Monthly Revenue</div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "6px", height: "80px" }}>
            {bars.map((h, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{
                  width: "100%",
                  height: `${h}%`,
                  borderRadius: "4px 4px 0 0",
                  background: i === 11
                    ? "linear-gradient(180deg,#7c6ef7,#c084fc)"
                    : "#1e1e30",
                  transition: "height 0.3s",
                }} />
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: "6px", marginTop: 6 }}>
            {months.map(m => (
              <div key={m} style={{
                flex: 1,
                textAlign: "center",
                fontSize: 10,
                color: "#666680",
              }}>
                {m}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
