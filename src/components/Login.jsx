import { useState } from "react";

export default function Login() {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
      setTimeout(() => setDone(false), 2500);
    }, 1200);
  };

  const toggleMode = () => {
    setMode(m => m === "login" ? "signup" : "login");
    setEmail("");
    setPass("");
  };

  return (
    <div style={{
      fontFamily: "'DM Sans', sans-serif",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    }}>
      <div style={{ width: "100%", maxWidth: 340 }}>
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>✦</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#fff", letterSpacing: "-0.5px" }}>
            {mode === "login" ? "Welcome back" : "Create account"}
          </div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", marginTop: 4 }}>
            {mode === "login" ? "Sign in to continue" : "Start your free trial"}
          </div>
        </div>

        {/* Glass Card */}
        <div style={{
          background: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(20px)",
          borderRadius: "20px",
          padding: "28px",
          border: "1px solid rgba(255,255,255,0.2)",
        }}>
          {/* Email */}
          <div style={{ marginBottom: 14 }}>
            <label style={{
              fontSize: 11,
              fontWeight: 600,
              color: "rgba(255,255,255,0.8)",
              display: "block",
              marginBottom: 6,
              letterSpacing: "0.5px",
            }}>
              EMAIL
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              style={{
                width: "100%",
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: "10px",
                padding: "10px 12px",
                color: "#fff",
                fontSize: 13,
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: 14 }}>
            <label style={{
              fontSize: 11,
              fontWeight: 600,
              color: "rgba(255,255,255,0.8)",
              display: "block",
              marginBottom: 6,
              letterSpacing: "0.5px",
            }}>
              PASSWORD
            </label>
            <input
              type="password"
              value={pass}
              onChange={e => setPass(e.target.value)}
              placeholder="••••••••"
              style={{
                width: "100%",
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: "10px",
                padding: "10px 12px",
                color: "#fff",
                fontSize: 13,
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            style={{
              width: "100%",
              background: done ? "#22c55e" : "rgba(255,255,255,0.95)",
              color: done ? "#fff" : "#5b21b6",
              border: "none",
              borderRadius: "10px",
              padding: "12px",
              fontSize: 13,
              fontWeight: 800,
              cursor: "pointer",
              marginTop: 6,
              transition: "all 0.2s",
              letterSpacing: "0.2px",
            }}
          >
            {loading ? "..." : done ? "✓ Success!" : mode === "login" ? "Sign In →" : "Create Account →"}
          </button>

          {/* Toggle */}
          <div style={{ textAlign: "center", marginTop: 16, fontSize: 12, color: "rgba(255,255,255,0.6)" }}>
            {mode === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
            <span
              onClick={toggleMode}
              style={{ color: "#fff", fontWeight: 600, cursor: "pointer" }}
            >
              {mode === "login" ? "Sign up" : "Sign in"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
