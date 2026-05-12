import { useState } from "react";

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      price: annual ? 9 : 12,
      accent: "#5b57e8",
      features: ["5 projects", "10GB storage", "Community support", "Basic analytics"],
    },
    {
      name: "Pro",
      price: annual ? 29 : 39,
      accent: "#a78bfa",
      popular: true,
      features: ["Unlimited projects", "100GB storage", "Priority support", "Advanced analytics", "Team collaboration"],
    },
    {
      name: "Scale",
      price: annual ? 79 : 99,
      accent: "#34d399",
      features: ["Everything in Pro", "1TB storage", "Dedicated support", "Custom integrations", "SLA guarantee"],
    },
  ];

  return (
    <div style={{
      fontFamily: "'DM Sans', sans-serif",
      background: "linear-gradient(180deg, #fafafa 0%, #f0f0ff 100%)",
      height: "100%",
      overflowY: "auto",
      padding: "28px 20px",
    }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.5px", color: "#0a0a1a" }}>
          Simple pricing
        </div>
        <div style={{ fontSize: 12, color: "#666", marginTop: 4 }}>
          No hidden fees. Cancel anytime.
        </div>

        {/* Billing Toggle */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          marginTop: 14,
          background: "#fff",
          borderRadius: "999px",
          padding: "4px",
          border: "1px solid #e0e0f0",
        }}>
          {["Monthly", "Annual"].map(t => (
            <button
              key={t}
              onClick={() => setAnnual(t === "Annual")}
              style={{
                background: (t === "Annual") === annual ? "#0a0a1a" : "transparent",
                color: (t === "Annual") === annual ? "#fff" : "#666",
                border: "none",
                borderRadius: "999px",
                padding: "5px 14px",
                fontSize: 11,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {t}{" "}
              {t === "Annual" && (
                <span style={{ color: "#22c55e", fontSize: 9 }}>-25%</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Plans */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
        {plans.map(p => (
          <div
            key={p.name}
            style={{
              background: p.popular ? "#0a0a1a" : "#fff",
              color: p.popular ? "#fff" : "#0a0a1a",
              border: p.popular ? "2px solid #a78bfa" : "1px solid #e8e8f0",
              borderRadius: "16px",
              padding: "20px",
              transform: p.popular ? "scale(1.03)" : "scale(1)",
              position: "relative",
              transition: "transform 0.2s",
            }}
          >
            {p.popular && (
              <div style={{
                position: "absolute",
                top: -10,
                left: "50%",
                transform: "translateX(-50%)",
                background: "#a78bfa",
                color: "#fff",
                fontSize: 9,
                fontWeight: 700,
                padding: "3px 10px",
                borderRadius: "999px",
                letterSpacing: "0.5px",
                whiteSpace: "nowrap",
              }}>
                MOST POPULAR
              </div>
            )}

            <div style={{ fontSize: 12, fontWeight: 700, color: p.accent, marginBottom: 8 }}>
              {p.name}
            </div>
            <div style={{ fontSize: 28, fontWeight: 900, letterSpacing: "-1px" }}>
              ${p.price}
              <span style={{ fontSize: 12, fontWeight: 400, opacity: 0.6 }}>/mo</span>
            </div>

            <div style={{
              margin: "16px 0",
              borderTop: `1px solid ${p.popular ? "#ffffff20" : "#f0f0f0"}`,
            }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 18 }}>
              {p.features.map(f => (
                <div key={f} style={{ fontSize: 11, display: "flex", alignItems: "center", gap: 6, opacity: 0.85 }}>
                  <span style={{ color: p.accent }}>✓</span> {f}
                </div>
              ))}
            </div>

            <button style={{
              width: "100%",
              background: p.popular ? p.accent : "#0a0a1a",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "9px",
              fontSize: 12,
              fontWeight: 700,
              cursor: "pointer",
            }}>
              Get {p.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
