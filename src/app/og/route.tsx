import { ImageResponse } from "next/og";
import { SITE } from "@/constants/site";

const size = { width: 1200, height: 630 } as const;

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0B1220",
          color: "#EEF2FF",
          fontSize: 64,
          fontWeight: 700,
          letterSpacing: -1.2,
        }}
      >
        <div style={{ fontSize: 56, opacity: 0.9 }}>{SITE.name}</div>
        <div
          style={{
            fontSize: 28,
            marginTop: 16,
            opacity: 0.8,
            textAlign: "center",
            maxWidth: 960,
          }}
        >
          {SITE.description}
        </div>
      </div>
    ),
    { ...size }
  );
}
