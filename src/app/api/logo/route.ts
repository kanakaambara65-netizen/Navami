import { NextResponse } from "next/server";
import fs from "fs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  const emblemPath =
    "C:/Users/preet/.gemini/antigravity/brain/10a85106-9c20-4d4b-a599-817e9b7ed657/scratch/logo_emblem_circle.png";
  const lockupPath =
    "C:/Users/preet/.gemini/antigravity/brain/10a85106-9c20-4d4b-a599-817e9b7ed657/scratch/logo_lockup.jpg";

  const targetPath = type === "full" ? lockupPath : emblemPath;
  const contentType = type === "full" ? "image/jpeg" : "image/png";

  if (fs.existsSync(targetPath)) {
    const buffer = fs.readFileSync(targetPath);
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  }

  return new NextResponse("Not Found", { status: 404 });
}
