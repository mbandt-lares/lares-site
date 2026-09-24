import React from "react";
import { readFile, mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Rebuild with: npx tsx scripts/generate-social-image.tsx
async function main() {
  const root = process.cwd();
  const [bold, regular, lar, wordmark] = await Promise.all([
    readFile(join(root, "public/fonts/Urbanist-Bold.ttf")),
    readFile(join(root, "public/fonts/Urbanist-Regular.ttf")),
    readFile(join(root, "public/landing/home/lar-conversation.png")),
    readFile(join(root, "public/landing/shared/wordmark.svg")),
  ]);
  const response = new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", background: "#fbf7f1", color: "#0f2d5b", fontFamily: "Urbanist", position: "relative" }}>
      {/* ImageResponse embeds the original brand assets directly. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img alt="LaresCare" src={`data:image/svg+xml;base64,${wordmark.toString("base64")}`} width={252} height={40} style={{ position: "absolute", left: 72, top: 64 }} />
      <div style={{ display: "flex", flexDirection: "column", position: "absolute", left: 72, top: 210, fontSize: 74, fontWeight: 700, lineHeight: 1.12, letterSpacing: -2 }}>
        <span>A little company.</span>
        <span style={{ color: "#e85f5f" }}>A brighter day.</span>
      </div>
      <div style={{ display: "flex", position: "absolute", left: 74, top: 412, fontSize: 29, color: "#4d5f75" }}>Your everyday AI companion.</div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img alt="Lar" src={`data:image/png;base64,${lar.toString("base64")}`} width={800} height={533} style={{ position: "absolute", left: 510, top: 76 }} />
      <div style={{ display: "flex", position: "absolute", left: 74, bottom: 54, fontSize: 24, color: "#4d5f75" }}>larescare.io</div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Urbanist", data: bold, weight: 700 },
        { name: "Urbanist", data: regular, weight: 400 },
      ],
    },
  );
  await mkdir(join(root, "public/social"), { recursive: true });
  await writeFile(join(root, "public/social/larescare-lar.png"), Buffer.from(await response.arrayBuffer()));
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
