import type { Planet } from "@/lib/planets-data"
import { planetsData } from "@/lib/planets-data"
import { PlanetCard } from "./planet-card"

interface RelatedPlanetsProps {
  currentPlanet: Planet
}

export function RelatedPlanets({ currentPlanet }: RelatedPlanetsProps) {
  // Get related planets - same type or similar category
  const relatedPlanets = planetsData
    .filter((p) => p.id !== currentPlanet.id)
    .filter((p) => p.type === currentPlanet.type || p.category === currentPlanet.category)
    .slice(0, 3)

  if (relatedPlanets.length === 0) return null

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Related Planets</h2>
        <p className="text-muted-foreground">
          Explore similar {currentPlanet.type === "real" ? "exoplanets" : "fictional worlds"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPlanets.map((planet) => (
          <PlanetCard key={planet.id} {...planet} />
        ))}
      </div>
    </div>
  )
}
