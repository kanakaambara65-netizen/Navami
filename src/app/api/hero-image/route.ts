import { NextResponse } from "next/server";
import fs from "fs";

export async function GET() {
  const imagePath =
    "C:/Users/preet/.gemini/antigravity/brain/10a85106-9c20-4d4b-a599-817e9b7ed657/scratch/clean_background.jpg";

  if (fs.existsSync(imagePath)) {
    const buffer = fs.readFileSync(imagePath);
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
        "Expires": "0",
      },
    });
  }

  return new NextResponse("Not Found", { status: 404 });
}
