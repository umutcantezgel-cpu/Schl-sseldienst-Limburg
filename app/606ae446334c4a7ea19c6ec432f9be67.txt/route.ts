import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
    return new NextResponse("606ae446334c4a7ea19c6ec432f9be67", {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=86400, s-maxage=86400",
        },
    });
}
