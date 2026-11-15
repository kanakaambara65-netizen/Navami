import { NextResponse } from "next/server";
import fs from "fs";

export async function GET() {
  const p =
    "C:/Users/preet/.gemini/antigravity/brain/10a85106-9c20-4d4b-a599-817e9b7ed657/scratch/blankimage.jpg";

  if (fs.existsSync(p)) {
    const buffer = fs.readFileSync(p);
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  }

  return new NextResponse("Not Found", { status: 404 });
}
