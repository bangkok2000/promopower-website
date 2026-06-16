import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "PromoPower — Professional Staffing Solutions Singapore";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1a1a1a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* Warm glow top-left */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -80,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,140,0,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Top: logo mark + name */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              border: "3px solid #FF8C00",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#1a1a1a",
            }}
          >
            <span
              style={{
                color: "#FF8C00",
                fontSize: 44,
                fontWeight: 800,
                fontFamily: "serif",
                lineHeight: 1,
                marginBottom: -4,
              }}
            >
              P
            </span>
          </div>
          <span
            style={{
              color: "white",
              fontSize: 32,
              fontWeight: 700,
              fontFamily: "sans-serif",
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            PromoPower
          </span>
        </div>

        {/* Centre: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              color: "#FF8C00",
              fontSize: 18,
              fontFamily: "sans-serif",
              letterSpacing: 4,
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Singapore&rsquo;s Trusted Staffing Partner Since 2002
          </div>
          <div
            style={{
              color: "white",
              fontSize: 64,
              fontWeight: 700,
              fontFamily: "serif",
              lineHeight: 1.1,
              maxWidth: 800,
            }}
          >
            Professional Staffing Solutions
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: 26,
              fontFamily: "sans-serif",
              lineHeight: 1.5,
              maxWidth: 760,
            }}
          >
            Brand ambassadors, product promoters, event personnel and retail
            activation teams across Singapore.
          </div>
        </div>

        {/* Bottom: trust strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 40,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 28,
          }}
        >
          {["MOM Licensed EA · 20C0109", "Est. 2002", "promopower.com.sg"].map(
            (item) => (
              <span
                key={item}
                style={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: 18,
                  fontFamily: "sans-serif",
                  letterSpacing: 1,
                }}
              >
                {item}
              </span>
            ),
          )}
        </div>
      </div>
    ),
    { ...size },
  );
}
