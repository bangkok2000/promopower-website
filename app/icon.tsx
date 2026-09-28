import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1a1a1a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "20%",
        }}
      >
        {/* Outer ring */}
        <div
          style={{
            width: 340,
            height: 340,
            borderRadius: "50%",
            border: "14px solid #0057A8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              color: "#0057A8",
              fontSize: 240,
              fontWeight: 800,
              fontFamily: "serif",
              lineHeight: 1,
              marginBottom: -12,
            }}
          >
            P
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
