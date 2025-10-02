// NASA Exoplanet Archive API integration
// API Documentation: https://exoplanetarchive.ipac.caltech.edu/docs/TAP/usingTAP.html

export interface NASAExoplanet {
  pl_name: string // Planet name
  hostname: string // Host star name
  sy_dist: number // Distance in parsecs
  pl_bmasse: number // Planet mass in Earth masses
  pl_rade: number // Planet radius in Earth radii
  pl_orbper: number // Orbital period in days
  pl_eqt: number // Equilibrium temperature in Kelvin
  disc_year: number // Discovery year
  discoverymethod: string // Discovery method
  pl_letter: string // Planet letter
}

export interface ExoplanetData {
  id: string
  name: string
  type: "real"
  category: string
  description: string
  image: string
  distance: string
  mass: string
  radius: string
  discoveryYear: string
  discoveryMethod: string
  hostStar: string
  orbitalPeriod: string
  temperature: string
  habitability?: string
}

// NASA Exoplanet Archive TAP API endpoint
const NASA_API_BASE = "https://exoplanetarchive.ipac.caltech.edu/TAP/sync"

/**
 * Fetch exoplanets from NASA Exoplanet Archive
 * Uses the TAP (Table Access Protocol) service
 */
export async function fetchNASAExoplanets(limit = 50): Promise<ExoplanetData[]> {
  try {
    // Query for confirmed exoplanets with key parameters
    const query = `
      SELECT 
        pl_name, hostname, sy_dist, pl_bmasse, pl_rade, 
        pl_orbper, pl_eqt, disc_year, discoverymethod
      FROM ps 
      WHERE 
        pl_bmasse IS NOT NULL 
        AND pl_rade IS NOT NULL 
        AND sy_dist IS NOT NULL
        AND pl_eqt IS NOT NULL
      ORDER BY disc_year DESC
      LIMIT ${limit}
    `

    const params = new URLSearchParams({
      query: query.trim(),
      format: "json",
    })

    const response = await fetch(`${NASA_API_BASE}?${params}`, {
      next: { revalidate: 86400 }, // Cache for 24 hours
    })

    if (!response.ok) {
      throw new Error(`NASA API error: ${response.status}`)
    }

    const data = await response.json()

    // Transform NASA data to our format
    return data.map((planet: NASAExoplanet) => transformNASAData(planet))
  } catch (error) {
    console.error("[v0] Error fetching NASA exoplanets:", error)
    return []
  }
}

/**
 * Transform NASA API data to our internal format
 */
function transformNASAData(nasaPlanet: NASAExoplanet): ExoplanetData {
  const id = nasaPlanet.pl_name.toLowerCase().replace(/\s+/g, "-")

  // Determine planet category based on radius
  const category = categorizePlanet(nasaPlanet.pl_rade)

  // Calculate distance in light-years (1 parsec = 3.26 light-years)
  const distanceLY = Math.round(nasaPlanet.sy_dist * 3.26)

  // Generate description based on characteristics
  const description = generateDescription(nasaPlanet, category)

  // Assess habitability
  const habitability = assessHabitability(nasaPlanet)

  // Generate appropriate image query
  const imageQuery = getImageQuery(category)

  return {
    id,
    name: nasaPlanet.pl_name,
    type: "real",
    category,
    description,
    image: `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(imageQuery)}`,
    distance: `${distanceLY.toLocaleString()} light-years`,
    mass: `${nasaPlanet.pl_bmasse.toFixed(2)} Earth masses`,
    radius: `${nasaPlanet.pl_rade.toFixed(2)} Earth radii`,
    discoveryYear: nasaPlanet.disc_year.toString(),
    discoveryMethod: nasaPlanet.discoverymethod,
    hostStar: nasaPlanet.hostname,
    orbitalPeriod: `${nasaPlanet.pl_orbper.toFixed(1)} days`,
    temperature: `${Math.round(nasaPlanet.pl_eqt)} K (${Math.round(nasaPlanet.pl_eqt - 273.15)}°C)`,
    habitability,
  }
}

/**
 * Categorize planet based on radius
 */
function categorizePlanet(radius: number): string {
  if (radius < 1.25) return "Terrestrial"
  if (radius < 2.0) return "Super-Earth"
  if (radius < 6.0) return "Neptune-like"
  return "Gas Giant"
}

/**
 * Generate description based on planet characteristics
 */
function generateDescription(planet: NASAExoplanet, category: string): string {
  const tempC = Math.round(planet.pl_eqt - 273.15)
  const isHot = tempC > 100
  const isCold = tempC < -50

  let desc = `A ${category.toLowerCase()} exoplanet orbiting ${planet.hostname}. `

  if (isHot) {
    desc += "Its close orbit results in extremely high temperatures. "
  } else if (isCold) {
    desc += "Located far from its star, this world experiences frigid temperatures. "
  } else {
    desc += "This planet orbits within a moderate temperature range. "
  }

  if (planet.pl_orbper < 10) {
    desc += "It completes an orbit in just days, racing around its host star."
  } else if (planet.pl_orbper > 365) {
    desc += "Its year is longer than Earth's, taking over a year to complete one orbit."
  }

  return desc
}

/**
 * Assess habitability based on temperature and size
 */
function assessHabitability(planet: NASAExoplanet): string {
  const tempC = Math.round(planet.pl_eqt - 273.15)
  const isRocky = planet.pl_rade < 2.0

  if (!isRocky) {
    return "Not habitable - Gas giant planets cannot support life as we know it."
  }

  if (tempC >= 0 && tempC <= 50) {
    return "Potentially habitable - Temperature range could allow liquid water on the surface."
  }

  if (tempC > 50 && tempC < 150) {
    return "Marginally habitable - Too hot for Earth-like life, but extremophiles might survive."
  }

  if (tempC < 0 && tempC > -50) {
    return "Marginally habitable - Cold temperatures, but subsurface oceans might exist."
  }

  return "Not habitable - Extreme temperatures make life as we know it impossible."
}

/**
 * Get appropriate image query for planet category
 */
function getImageQuery(category: string): string {
  const queries: Record<string, string> = {
    Terrestrial: "rocky terrestrial exoplanet in space",
    "Super-Earth": "super earth exoplanet larger than earth",
    "Neptune-like": "neptune-like ice giant exoplanet blue atmosphere",
    "Gas Giant": "gas giant exoplanet jupiter-like planet",
  }

  return queries[category] || "exoplanet in space"
}

/**
 * Search for specific exoplanet by name
 */
export async function searchExoplanet(name: string): Promise<ExoplanetData | null> {
  try {
    const query = `
      SELECT 
        pl_name, hostname, sy_dist, pl_bmasse, pl_rade, 
        pl_orbper, pl_eqt, disc_year, discoverymethod
      FROM ps 
      WHERE pl_name LIKE '%${name}%'
      LIMIT 1
    `

    const params = new URLSearchParams({
      query: query.trim(),
      format: "json",
    })

    const response = await fetch(`${NASA_API_BASE}?${params}`)

    if (!response.ok) return null

    const data = await response.json()

    if (data.length === 0) return null

    return transformNASAData(data[0])
  } catch (error) {
    console.error("[v0] Error searching exoplanet:", error)
    return null
  }
}
