import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
    return new NextResponse("8c207a90ba33495bb14d97c9624ea1cd", {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=86400, s-maxage=86400",
        },
    });
}
