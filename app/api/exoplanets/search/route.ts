import { searchExoplanet } from "@/lib/nasa-api"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const name = searchParams.get("name")

    if (!name) {
      return NextResponse.json(
        {
          success: false,
          error: "Planet name is required",
        },
        { status: 400 },
      )
    }

    const exoplanet = await searchExoplanet(name)

    if (!exoplanet) {
      return NextResponse.json(
        {
          success: false,
          error: "Exoplanet not found",
        },
        { status: 404 },
      )
    }

    return NextResponse.json({
      success: true,
      data: exoplanet,
    })
  } catch (error) {
    console.error("[v0] API search error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to search exoplanet",
      },
      { status: 500 },
    )
  }
}
