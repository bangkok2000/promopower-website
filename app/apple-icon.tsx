import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          borderRadius: "22%",
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            border: "5px solid #FF8C00",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              color: "#FF8C00",
              fontSize: 84,
              fontWeight: 800,
              fontFamily: "serif",
              lineHeight: 1,
              marginBottom: -4,
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
