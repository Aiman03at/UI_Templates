import { useState } from "react";

export default function ECommerce_Card() {
  const [selected, setSelected] = useState("M");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = ["#1a1a1a", "#4a6fa5", "#c84b31", "#d4a843"];

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div style={{
      fontFamily: "'DM Sans', sans-serif",
      background: "#fafaf8",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    }}>
      <div style={{
        background: "#fff",
        borderRadius: "20px",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
        maxWidth: "560px",
        width: "100%",
      }}>
        {/* Product Image */}
        <div style={{
          background: "linear-gradient(135deg, #f5f0eb, #e8e0d8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "280px",
          position: "relative",
        }}>
          <div style={{ fontSize: "80px", filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.12))" }}>
            👟
          </div>
          <div style={{
            position: "absolute",
            top: 12,
            left: 12,
            background: "#c84b31",
            color: "#fff",
            fontSize: 10,
            fontWeight: 700,
            padding: "3px 8px",
            borderRadius: "999px",
          }}>
            SALE
          </div>
        </div>

        {/* Product Info */}
        <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "14px" }}>
          <div>
            <div style={{
              fontSize: 10,
              color: "#999",
              fontWeight: 600,
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginBottom: 4,
            }}>
              STRIDE CO.
            </div>
            <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.5px", lineHeight: 1.2 }}>
              Air Phantom<br />Pro '24
            </div>
          </div>

          {/* Price */}
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <span style={{ fontSize: 22, fontWeight: 800, color: "#1a1a1a" }}>$89</span>
            <span style={{ fontSize: 13, color: "#bbb", textDecoration: "line-through" }}>$129</span>
          </div>

          {/* Color Picker */}
          <div>
            <div style={{ fontSize: 11, color: "#666", marginBottom: 8 }}>Color</div>
            <div style={{ display: "flex", gap: 6 }}>
              {colors.map((c, i) => (
                <div
                  key={c}
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: c,
                    cursor: "pointer",
                    border: "2px solid transparent",
                    outline: i === 0 ? "2px solid #1a1a1a" : "none",
                    outlineOffset: 2,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Size Picker */}
          <div>
            <div style={{ fontSize: 11, color: "#666", marginBottom: 8 }}>Size</div>
            <div style={{ display: "flex", gap: 5 }}>
              {sizes.map(s => (
                <button
                  key={s}
                  onClick={() => setSelected(s)}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "6px",
                    fontSize: 11,
                    fontWeight: 600,
                    cursor: "pointer",
                    border: selected === s ? "2px solid #1a1a1a" : "1px solid #e8e8e8",
                    background: selected === s ? "#1a1a1a" : "#fff",
                    color: selected === s ? "#fff" : "#333",
                    transition: "all 0.15s",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Qty + Add to Cart */}
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #e8e8e8",
              borderRadius: "8px",
              overflow: "hidden",
            }}>
              <button
                onClick={() => setQty(q => Math.max(1, q - 1))}
                style={{
                  background: "none",
                  border: "none",
                  width: 28,
                  height: 32,
                  cursor: "pointer",
                  fontSize: 14,
                }}
              >
                −
              </button>
              <span style={{ width: 24, textAlign: "center", fontSize: 13, fontWeight: 600 }}>
                {qty}
              </span>
              <button
                onClick={() => setQty(q => q + 1)}
                style={{
                  background: "none",
                  border: "none",
                  width: 28,
                  height: 32,
                  cursor: "pointer",
                  fontSize: 14,
                }}
              >
                +
              </button>
            </div>

            <button
              onClick={handleAdd}
              style={{
                flex: 1,
                background: added ? "#22c55e" : "#1a1a1a",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "9px",
                fontSize: 12,
                fontWeight: 700,
                cursor: "pointer",
                transition: "background 0.2s",
              }}
            >
              {added ? "✓ Added!" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
