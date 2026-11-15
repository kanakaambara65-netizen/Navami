import { NextRequest, NextResponse } from "next/server";

// Static mapping compatible with Cloudflare Pages & V8 Edge runtime
const MAPPING: Record<string, string> = {
  structural: "/images/services/structural.jpg",
  architect: "/images/services/architect.jpg",
  construction: "/images/services/construction.jpg",
  interior: "/images/services/interior.jpg",
  renovation: "/images/services/Renovation.jpg",
  "3d": "/images/services/3d-elevation.jpg",
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id") || "";
  const target = MAPPING[id];

  if (!target) {
    return new NextResponse("Invalid service image ID", { status: 400 });
  }

  // Redirect directly to edge-cached static asset
  return NextResponse.redirect(new URL(target, req.url), { status: 307 });
}
