import { useState, useEffect, useRef } from "react";

const templates = [
  { id: "saas", label: "SaaS Dashboard", tag: "Dashboard" },
  { id: "landing", label: "Product Landing", tag: "Marketing" },
  { id: "ecommerce", label: "E-Commerce Card", tag: "Commerce" },
  { id: "auth", label: "Auth Flow", tag: "Auth" },
  { id: "profile", label: "Dev Profile", tag: "Profile" },
  { id: "pricing", label: "Pricing Table", tag: "Pricing" },
];

/* ─────────────── TEMPLATE: SaaS Dashboard ─────────────── */
function SaaSDashboard() {
  const [active, setActive] = useState("overview");
  const stats = [
    { label: "Total Revenue", value: "$84,231", delta: "+12.4%", up: true },
    { label: "Active Users", value: "24,891", delta: "+3.2%", up: true },
    { label: "Churn Rate", value: "1.8%", delta: "-0.4%", up: false },
    { label: "Avg Session", value: "4m 32s", delta: "+0.7%", up: true },
  ];
  const bars = [40, 65, 50, 80, 60, 90, 75, 85, 70, 95, 60, 78];
  const nav = ["overview", "analytics", "users", "settings"];

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
        width: "180px", background: "#0f0f1a", borderRight: "1px solid #1e1e30",
        padding: "24px 0", display: "flex", flexDirection: "column", gap: "4px", flexShrink: 0,
      }}>
        <div style={{ padding: "0 16px 20px", fontSize: "15px", fontWeight: 700, color: "#7c6ef7", letterSpacing: "-0.5px" }}>
          ◆ Pulsar
        </div>
        {nav.map(n => (
          <button key={n} onClick={() => setActive(n)} style={{
            background: active === n ? "#7c6ef720" : "transparent",
            border: "none", borderLeft: active === n ? "2px solid #7c6ef7" : "2px solid transparent",
            color: active === n ? "#a99df5" : "#666680",
            padding: "9px 16px", textAlign: "left", cursor: "pointer",
            fontSize: "12px", fontWeight: 500, textTransform: "capitalize", letterSpacing: "0.2px",
            transition: "all 0.15s",
          }}>{n}</button>
        ))}
        <div style={{ marginTop: "auto", padding: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg,#7c6ef7,#c084fc)" }} />
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#e8e8f0" }}>Aiman K.</div>
              <div style={{ fontSize: 10, color: "#666680" }}>Admin</div>
            </div>
          </div>
        </div>
      </div>
      {/* Main */}
      <div style={{ flex: 1, padding: "24px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#fff" }}>Good morning 👋</div>
            <div style={{ fontSize: 12, color: "#666680" }}>Here's what's happening today</div>
          </div>
          <button style={{
            background: "linear-gradient(135deg,#7c6ef7,#c084fc)", border: "none", color: "#fff",
            padding: "8px 14px", borderRadius: "8px", fontSize: 12, fontWeight: 600, cursor: "pointer",
          }}>+ New Report</button>
        </div>
        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "12px" }}>
          {stats.map(s => (
            <div key={s.label} style={{
              background: "#0f0f1a", border: "1px solid #1e1e30", borderRadius: "12px", padding: "16px",
            }}>
              <div style={{ fontSize: 11, color: "#666680", marginBottom: 6 }}>{s.label}</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{s.value}</div>
              <div style={{ fontSize: 11, color: s.up ? "#4ade80" : "#f87171" }}>{s.delta} vs last month</div>
            </div>
          ))}
        </div>
        {/* Chart */}
        <div style={{
          background: "#0f0f1a", border: "1px solid #1e1e30", borderRadius: "12px", padding: "20px",
        }}>
          <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 16 }}>Monthly Revenue</div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "6px", height: "80px" }}>
            {bars.map((h, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                <div style={{
                  width: "100%", height: `${h}%`, borderRadius: "4px 4px 0 0",
                  background: i === 11 ? "linear-gradient(180deg,#7c6ef7,#c084fc)" : "#1e1e30",
                  transition: "height 0.3s",
                }} />
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: "6px", marginTop: 6 }}>
            {["J","F","M","A","M","J","J","A","S","O","N","D"].map(m => (
              <div key={m} style={{ flex: 1, textAlign: "center", fontSize: 10, color: "#666680" }}>{m}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── TEMPLATE: Product Landing ─────────────── */
function ProductLanding() {
  const [hovered, setHovered] = useState(null);
  const features = [
    { icon: "⚡", title: "Blazing Fast", desc: "Edge-rendered at 100+ locations globally" },
    { icon: "🔒", title: "Zero Trust", desc: "End-to-end encryption by default" },
    { icon: "🎯", title: "AI Native", desc: "Intelligent routing and auto-scaling" },
  ];
  return (
    <div style={{
      fontFamily: "'Clash Display', 'DM Sans', sans-serif",
      background: "linear-gradient(160deg, #fdfcfb 0%, #f0f4ff 100%)",
      color: "#0a0a1a", height: "100%", overflowY: "auto",
    }}>
      {/* Nav */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "16px 32px", borderBottom: "1px solid #e8e8f0",
        background: "rgba(255,255,255,0.8)", backdropFilter: "blur(12px)",
        position: "sticky", top: 0, zIndex: 10,
      }}>
        <span style={{ fontWeight: 800, fontSize: 16, letterSpacing: "-0.5px" }}>◈ Nova</span>
        <div style={{ display: "flex", gap: 20 }}>
          {["Docs","Pricing","Blog"].map(n => (
            <span key={n} style={{ fontSize: 12, color: "#666", cursor: "pointer", fontWeight: 500 }}>{n}</span>
          ))}
        </div>
        <button style={{
          background: "#0a0a1a", color: "#fff", border: "none",
          padding: "7px 14px", borderRadius: "8px", fontSize: 12, fontWeight: 600, cursor: "pointer",
        }}>Get Started →</button>
      </div>
      {/* Hero */}
      <div style={{ textAlign: "center", padding: "60px 32px 40px", position: "relative" }}>
        <div style={{
          display: "inline-block", background: "#eef0ff", color: "#5b57e8",
          padding: "4px 12px", borderRadius: "999px", fontSize: 11, fontWeight: 600, marginBottom: 20,
          border: "1px solid #c7c9f5",
        }}>🚀 Now in Public Beta</div>
        <h1 style={{
          fontSize: 42, fontWeight: 900, lineHeight: 1.05, letterSpacing: "-2px",
          margin: "0 0 16px", color: "#0a0a1a",
        }}>
          Ship products<br />
          <span style={{ color: "#5b57e8" }}>10× faster.</span>
        </h1>
        <p style={{ color: "#666", fontSize: 14, maxWidth: 340, margin: "0 auto 28px", lineHeight: 1.6 }}>
          The modern infrastructure platform for teams who move fast and don't break things.
        </p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
          <button style={{
            background: "#0a0a1a", color: "#fff", border: "none",
            padding: "11px 22px", borderRadius: "10px", fontSize: 13, fontWeight: 700, cursor: "pointer",
          }}>Start for free</button>
          <button style={{
            background: "transparent", color: "#0a0a1a", border: "1px solid #e0e0e8",
            padding: "11px 22px", borderRadius: "10px", fontSize: 13, fontWeight: 600, cursor: "pointer",
          }}>Watch demo ▶</button>
        </div>
      </div>
      {/* Features */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "12px", padding: "0 32px 40px" }}>
        {features.map((f, i) => (
          <div key={i} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)} style={{
            background: hovered === i ? "#0a0a1a" : "#fff",
            color: hovered === i ? "#fff" : "#0a0a1a",
            border: "1px solid #e8e8f0", borderRadius: "16px", padding: "20px",
            transition: "all 0.2s", cursor: "default",
          }}>
            <div style={{ fontSize: 24, marginBottom: 10 }}>{f.icon}</div>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{f.title}</div>
            <div style={{ fontSize: 12, opacity: 0.6, lineHeight: 1.5 }}>{f.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────── TEMPLATE: E-Commerce ─────────────── */
function ECommerceCard() {
  const [selected, setSelected] = useState("M");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const sizes = ["XS","S","M","L","XL"];
  const colors = ["#1a1a1a","#4a6fa5","#c84b31","#d4a843"];

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div style={{
      fontFamily: "'DM Sans', sans-serif", background: "#fafaf8",
      height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px",
    }}>
      <div style={{
        background: "#fff", borderRadius: "20px", overflow: "hidden",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        boxShadow: "0 8px 40px rgba(0,0,0,0.08)", maxWidth: "560px", width: "100%",
      }}>
        {/* Image */}
        <div style={{
          background: "linear-gradient(135deg, #f5f0eb, #e8e0d8)",
          display: "flex", alignItems: "center", justifyContent: "center",
          minHeight: "280px", position: "relative",
        }}>
          <div style={{ fontSize: "80px", filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.12))" }}>👟</div>
          <div style={{
            position: "absolute", top: 12, left: 12, background: "#c84b31", color: "#fff",
            fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: "999px",
          }}>SALE</div>
        </div>
        {/* Info */}
        <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "14px" }}>
          <div>
            <div style={{ fontSize: 10, color: "#999", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", marginBottom: 4 }}>STRIDE CO.</div>
            <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.5px", lineHeight: 1.2 }}>Air Phantom<br />Pro '24</div>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <span style={{ fontSize: 22, fontWeight: 800, color: "#1a1a1a" }}>$89</span>
            <span style={{ fontSize: 13, color: "#bbb", textDecoration: "line-through" }}>$129</span>
          </div>
          {/* Colors */}
          <div>
            <div style={{ fontSize: 11, color: "#666", marginBottom: 8 }}>Color</div>
            <div style={{ display: "flex", gap: 6 }}>
              {colors.map(c => (
                <div key={c} style={{
                  width: 20, height: 20, borderRadius: "50%", background: c, cursor: "pointer",
                  boxShadow: "inset 0 0 0 2px rgba(255,255,255,0.3)",
                  border: "2px solid transparent", outline: c === "#1a1a1a" ? "2px solid #1a1a1a" : "none",
                  outlineOffset: 2,
                }} />
              ))}
            </div>
          </div>
          {/* Sizes */}
          <div>
            <div style={{ fontSize: 11, color: "#666", marginBottom: 8 }}>Size</div>
            <div style={{ display: "flex", gap: 5 }}>
              {sizes.map(s => (
                <button key={s} onClick={() => setSelected(s)} style={{
                  width: 32, height: 32, borderRadius: "6px", fontSize: 11, fontWeight: 600, cursor: "pointer",
                  border: selected === s ? "2px solid #1a1a1a" : "1px solid #e8e8e8",
                  background: selected === s ? "#1a1a1a" : "#fff",
                  color: selected === s ? "#fff" : "#333",
                  transition: "all 0.15s",
                }}>{s}</button>
              ))}
            </div>
          </div>
          {/* Qty + Add */}
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", border: "1px solid #e8e8e8", borderRadius: "8px", overflow: "hidden" }}>
              <button onClick={() => setQty(q => Math.max(1, q-1))} style={{ background: "none", border: "none", width: 28, height: 32, cursor: "pointer", fontSize: 14 }}>−</button>
              <span style={{ width: 24, textAlign: "center", fontSize: 13, fontWeight: 600 }}>{qty}</span>
              <button onClick={() => setQty(q => q+1)} style={{ background: "none", border: "none", width: 28, height: 32, cursor: "pointer", fontSize: 14 }}>+</button>
            </div>
            <button onClick={handleAdd} style={{
              flex: 1, background: added ? "#22c55e" : "#1a1a1a", color: "#fff",
              border: "none", borderRadius: "8px", padding: "9px", fontSize: 12, fontWeight: 700, cursor: "pointer",
              transition: "background 0.2s",
            }}>{added ? "✓ Added!" : "Add to Cart"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── TEMPLATE: Auth Flow ─────────────── */
function AuthFlow() {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handle = () => {
    setLoading(true);
    setTimeout(() => { setLoading(false); setDone(true); setTimeout(() => setDone(false), 2500); }, 1200);
  };

  return (
    <div style={{
      fontFamily: "'DM Sans', sans-serif",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px",
    }}>
      <div style={{ width: "100%", maxWidth: 340 }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>✦</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#fff", letterSpacing: "-0.5px" }}>
            {mode === "login" ? "Welcome back" : "Create account"}
          </div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", marginTop: 4 }}>
            {mode === "login" ? "Sign in to continue" : "Start your free trial"}
          </div>
        </div>
        <div style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(20px)", borderRadius: "20px", padding: "28px", border: "1px solid rgba(255,255,255,0.2)" }}>
          {["Email","Password"].map((label, i) => (
            <div key={label} style={{ marginBottom: 14 }}>
              <label style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.8)", display: "block", marginBottom: 6, letterSpacing: "0.5px" }}>{label.toUpperCase()}</label>
              <input
                type={i === 1 ? "password" : "email"}
                value={i === 0 ? email : pass}
                onChange={e => i === 0 ? setEmail(e.target.value) : setPass(e.target.value)}
                placeholder={i === 0 ? "you@example.com" : "••••••••"}
                style={{
                  width: "100%", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)",
                  borderRadius: "10px", padding: "10px 12px", color: "#fff", fontSize: 13,
                  outline: "none", boxSizing: "border-box",
                }}
              />
            </div>
          ))}
          <button onClick={handle} style={{
            width: "100%", background: done ? "#22c55e" : "rgba(255,255,255,0.95)",
            color: done ? "#fff" : "#5b21b6", border: "none", borderRadius: "10px",
            padding: "12px", fontSize: 13, fontWeight: 800, cursor: "pointer", marginTop: 6,
            transition: "all 0.2s", letterSpacing: "0.2px",
          }}>
            {loading ? "..." : done ? "✓ Success!" : mode === "login" ? "Sign In →" : "Create Account →"}
          </button>
          <div style={{ textAlign: "center", marginTop: 16, fontSize: 12, color: "rgba(255,255,255,0.6)" }}>
            {mode === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
            <span onClick={() => setMode(m => m === "login" ? "signup" : "login")} style={{ color: "#fff", fontWeight: 600, cursor: "pointer" }}>
              {mode === "login" ? "Sign up" : "Sign in"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── TEMPLATE: Dev Profile ─────────────── */
function DevProfile() {
  const skills = ["React","TypeScript","Node.js","PostgreSQL","Python","Docker","AWS","Redis"];
  const projects = [
    { name: "SupplySync", desc: "Real-time supply chain with AI insights", stars: 142, lang: "TypeScript" },
    { name: "DevQuiz", desc: "Social quiz platform for developers", stars: 89, lang: "JavaScript" },
    { name: "Switchie", desc: "AI-driven career transition app", stars: 67, lang: "TypeScript" },
  ];
  return (
    <div style={{
      fontFamily: "'DM Sans', sans-serif", background: "#0d1117", color: "#e6edf3",
      height: "100%", overflowY: "auto", padding: "24px",
    }}>
      {/* Header */}
      <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", marginBottom: "24px" }}>
        <div style={{
          width: 60, height: 60, borderRadius: "50%", flexShrink: 0,
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 24, fontWeight: 800, color: "#fff", border: "3px solid #30363d",
        }}>AK</div>
        <div>
          <div style={{ fontSize: 18, fontWeight: 700 }}>Aiman K.</div>
          <div style={{ fontSize: 12, color: "#8b949e", margin: "2px 0" }}>Full-Stack Developer · Ottawa, CA</div>
          <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
            {["Follow","Sponsor"].map((b, i) => (
              <button key={b} style={{
                background: i === 0 ? "#238636" : "transparent",
                border: i === 0 ? "none" : "1px solid #30363d",
                color: i === 0 ? "#fff" : "#e6edf3",
                padding: "4px 12px", borderRadius: "6px", fontSize: 11, fontWeight: 600, cursor: "pointer",
              }}>{b}</button>
            ))}
          </div>
        </div>
      </div>
      {/* Skills */}
      <div style={{ marginBottom: "20px" }}>
        <div style={{ fontSize: 12, color: "#8b949e", fontWeight: 600, marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.5px" }}>Tech Stack</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {skills.map(s => (
            <span key={s} style={{
              background: "#161b22", border: "1px solid #30363d", color: "#79c0ff",
              padding: "3px 10px", borderRadius: "999px", fontSize: 11, fontWeight: 500,
            }}>{s}</span>
          ))}
        </div>
      </div>
      {/* Repos */}
      <div>
        <div style={{ fontSize: 12, color: "#8b949e", fontWeight: 600, marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.5px" }}>Pinned Repos</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {projects.map(p => (
            <div key={p.name} style={{
              background: "#161b22", border: "1px solid #30363d", borderRadius: "10px", padding: "14px",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
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

/* ─────────────── TEMPLATE: Pricing ─────────────── */
function PricingTable() {
  const [annual, setAnnual] = useState(true);
  const plans = [
    { name: "Starter", price: annual ? 9 : 12, color: "#f0f4ff", accent: "#5b57e8", features: ["5 projects","10GB storage","Community support","Basic analytics"] },
    { name: "Pro", price: annual ? 29 : 39, color: "#1a1a2e", accent: "#a78bfa", features: ["Unlimited projects","100GB storage","Priority support","Advanced analytics","Team collaboration"], popular: true },
    { name: "Scale", price: annual ? 79 : 99, color: "#0f2027", accent: "#34d399", features: ["Everything in Pro","1TB storage","Dedicated support","Custom integrations","SLA guarantee"] },
  ];
  return (
    <div style={{
      fontFamily: "'DM Sans', sans-serif",
      background: "linear-gradient(180deg, #fafafa 0%, #f0f0ff 100%)",
      height: "100%", overflowY: "auto", padding: "28px 20px",
    }}>
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.5px", color: "#0a0a1a" }}>Simple pricing</div>
        <div style={{ fontSize: 12, color: "#666", marginTop: 4 }}>No hidden fees. Cancel anytime.</div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginTop: 14, background: "#fff", borderRadius: "999px", padding: "4px", border: "1px solid #e0e0f0" }}>
          {["Monthly","Annual"].map(t => (
            <button key={t} onClick={() => setAnnual(t === "Annual")} style={{
              background: (t === "Annual") === annual ? "#0a0a1a" : "transparent",
              color: (t === "Annual") === annual ? "#fff" : "#666",
              border: "none", borderRadius: "999px", padding: "5px 14px", fontSize: 11, fontWeight: 600, cursor: "pointer",
              transition: "all 0.15s",
            }}>{t} {t === "Annual" && <span style={{ color: "#22c55e", fontSize: 9 }}>-25%</span>}</button>
          ))}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
        {plans.map(p => (
          <div key={p.name} style={{
            background: p.popular ? "#0a0a1a" : "#fff",
            color: p.popular ? "#fff" : "#0a0a1a",
            border: p.popular ? "2px solid #a78bfa" : "1px solid #e8e8f0",
            borderRadius: "16px", padding: "20px",
            transform: p.popular ? "scale(1.03)" : "scale(1)",
            position: "relative", transition: "transform 0.2s",
          }}>
            {p.popular && (
              <div style={{ position: "absolute", top: -10, left: "50%", transform: "translateX(-50%)", background: "#a78bfa", color: "#fff", fontSize: 9, fontWeight: 700, padding: "3px 10px", borderRadius: "999px", letterSpacing: "0.5px" }}>MOST POPULAR</div>
            )}
            <div style={{ fontSize: 12, fontWeight: 700, color: p.accent, marginBottom: 8 }}>{p.name}</div>
            <div style={{ fontSize: 28, fontWeight: 900, letterSpacing: "-1px" }}>
              ${p.price}<span style={{ fontSize: 12, fontWeight: 400, opacity: 0.6 }}>/mo</span>
            </div>
            <div style={{ margin: "16px 0", borderTop: `1px solid ${p.popular ? "#ffffff20" : "#f0f0f0"}` }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 18 }}>
              {p.features.map(f => (
                <div key={f} style={{ fontSize: 11, display: "flex", alignItems: "center", gap: 6, opacity: 0.85 }}>
                  <span style={{ color: p.accent }}>✓</span> {f}
                </div>
              ))}
            </div>
            <button style={{
              width: "100%", background: p.popular ? p.accent : "#0a0a1a",
              color: "#fff", border: "none", borderRadius: "8px",
              padding: "9px", fontSize: 12, fontWeight: 700, cursor: "pointer",
            }}>Get {p.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────── SHELL ─────────────── */
const templateComponents = {
  saas: SaaSDashboard,
  landing: ProductLanding,
  ecommerce: ECommerceCard,
  auth: AuthFlow,
  profile: DevProfile,
  pricing: PricingTable,
};

export default function UIShowcase() {
  const [active, setActive] = useState("saas");
  const [animating, setAnimating] = useState(false);
  const ActiveTemplate = templateComponents[active];

  const switchTo = (id) => {
    if (id === active) return;
    setAnimating(true);
    setTimeout(() => { setActive(id); setAnimating(false); }, 180);
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
      {/* Top bar */}
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
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginRight: 8 }}>
          <div style={{ width: 28, height: 28, background: "linear-gradient(135deg,#7c6ef7,#c084fc)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>⬡</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: "-0.3px", lineHeight: 1 }}>UI Showcase</div>
            <div style={{ fontSize: 9, color: "#666680", letterSpacing: "0.5px", textTransform: "uppercase" }}>Frontend Templates</div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 4, overflowX: "auto", flex: 1 }}>
          {templates.map(t => (
            <button key={t.id} onClick={() => switchTo(t.id)} style={{
              background: active === t.id ? "rgba(124,110,247,0.2)" : "transparent",
              border: active === t.id ? "1px solid rgba(124,110,247,0.5)" : "1px solid transparent",
              color: active === t.id ? "#a99df5" : "#666680",
              padding: "5px 12px", borderRadius: "8px",
              fontSize: 12, fontWeight: 600, cursor: "pointer",
              whiteSpace: "nowrap", transition: "all 0.15s",
            }}>
              {t.label}
              <span style={{
                marginLeft: 6, fontSize: 9, background: active === t.id ? "#7c6ef730" : "#1e1e30",
                color: active === t.id ? "#c084fc" : "#444466",
                padding: "2px 6px", borderRadius: "4px",
              }}>{t.tag}</span>
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
        {/* Browser chrome */}
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
            {["#ff5f57","#ffbd2e","#28c840"].map(c => (
              <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
            ))}
          </div>
          <div style={{
            flex: 1, background: "#0a0a1a", border: "1px solid #1e1e30", borderRadius: "6px",
            padding: "4px 10px", fontSize: 11, color: "#444466", maxWidth: 260, margin: "0 auto",
          }}>
            🔒 ui-showcase.vercel.app/{active}
          </div>
        </div>

        {/* Template content */}
        <div style={{
          flex: 1, border: "1px solid #1e1e30", borderTop: "none",
          borderRadius: "0 0 16px 16px", overflow: "hidden",
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
        textAlign: "center", padding: "12px", fontSize: 11, color: "#333350",
        borderTop: "1px solid #1e1e30",
      }}>
        Built with React · TypeScript · Tailwind — 6 templates, 0 UI libraries
      </div>
    </div>
  );
}
