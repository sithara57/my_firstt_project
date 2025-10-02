import { fetchNASAExoplanets } from "@/lib/nasa-api"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = Number.parseInt(searchParams.get("limit") || "50")

    const exoplanets = await fetchNASAExoplanets(limit)

    return NextResponse.json({
      success: true,
      count: exoplanets.length,
      data: exoplanets,
    })
  } catch (error) {
    console.error("[v0] API error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch exoplanets",
      },
      { status: 500 },
    )
  }
}
