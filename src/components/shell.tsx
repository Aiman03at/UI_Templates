import { useState } from "react";
import { templates } from "../data/templates";

import SaaS_Dashboard from "./SaaS_Dashboard";
import Products from "./Products";
import ECommerce_Card from "./ECommerce_Card";
import Login from "./Login";
import Profile from "./Profile";
import Pricing from "./Pricing";

const templateComponents = {
  saas: SaaS_Dashboard,
  landing: Products,
  ecommerce: ECommerce_Card,
  auth: Login,
  profile: Profile,
  pricing: Pricing,
};

export default function Shell() {
  const [active, setActive] = useState("saas");
  const [animating, setAnimating] = useState(false);

  const ActiveTemplate = templateComponents[active as keyof typeof templateComponents];

  const switchTo = (id: keyof typeof templateComponents) => {
    if (id === active) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(id);
      setAnimating(false);
    }, 180);
  };

  return (
    <div style={{
      fontFamily: "'DM Sans', sans-serif",
      background: "#06060f",
      minHeight: "100vh",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Top Bar */}
      <div style={{
        background: "rgba(10,10,20,0.95)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid #1e1e30",
        padding: "0 20px",
        display: "flex",
        alignItems: "center",
        gap: "16px",
        height: "56px",
        flexShrink: 0,
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginRight: 8 }}>
          <div style={{
            width: 28,
            height: 28,
            background: "linear-gradient(135deg,#7c6ef7,#c084fc)",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
          }}>
            ⬡
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: "-0.3px", lineHeight: 1 }}>
              UI Showcase
            </div>
            <div style={{ fontSize: 9, color: "#666680", letterSpacing: "0.5px", textTransform: "uppercase" }}>
              Frontend Templates
            </div>
          </div>
        </div>

        {/* Tab Nav */}
        <div style={{ display: "flex", gap: 4, overflowX: "auto", flex: 1 }}>
          {templates.map(t => (
            <button
              key={t.id}
              onClick={() => switchTo(t.id as keyof typeof templateComponents)}
              style={{
                background: active === t.id ? "rgba(124,110,247,0.2)" : "transparent",
                border: active === t.id ? "1px solid rgba(124,110,247,0.5)" : "1px solid transparent",
                color: active === t.id ? "#a99df5" : "#666680",
                padding: "5px 12px",
                borderRadius: "8px",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.15s",
              }}
            >
              {t.label}
              <span style={{
                marginLeft: 6,
                fontSize: 9,
                background: active === t.id ? "#7c6ef730" : "#1e1e30",
                color: active === t.id ? "#c084fc" : "#444466",
                padding: "2px 6px",
                borderRadius: "4px",
              }}>
                {t.tag}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Template Frame */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        minHeight: 0,
      }}>
        {/* Browser Chrome */}
        <div style={{
          background: "#111120",
          borderRadius: "16px 16px 0 0",
          padding: "10px 16px",
          border: "1px solid #1e1e30",
          borderBottom: "none",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}>
          <div style={{ display: "flex", gap: 5 }}>
            {["#ff5f57", "#ffbd2e", "#28c840"].map(c => (
              <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
            ))}
          </div>
          <div style={{
            flex: 1,
            background: "#0a0a1a",
            border: "1px solid #1e1e30",
            borderRadius: "6px",
            padding: "4px 10px",
            fontSize: 11,
            color: "#444466",
            maxWidth: 260,
            margin: "0 auto",
          }}>
            🔒 ui-showcase.vercel.app/{active}
          </div>
        </div>

        {/* Template Content */}
        <div style={{
          flex: 1,
          border: "1px solid #1e1e30",
          borderTop: "none",
          borderRadius: "0 0 16px 16px",
          overflow: "hidden",
          minHeight: "500px",
          opacity: animating ? 0 : 1,
          transform: animating ? "translateY(8px)" : "translateY(0)",
          transition: "opacity 0.18s, transform 0.18s",
        }}>
          <ActiveTemplate />
        </div>
      </div>

      {/* Footer */}
      <div style={{
        textAlign: "center",
        padding: "12px",
        fontSize: 11,
        color: "#333350",
        borderTop: "1px solid #1e1e30",
      }}>
        Built with React · TypeScript · Tailwind — 6 templates, 0 UI libraries
      </div>
    </div>
  );
}