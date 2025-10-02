import type { Planet } from "@/lib/planets-data"

interface PlanetStatsProps {
  planet: Planet
}

export function PlanetStats({ planet }: PlanetStatsProps) {
  const stats = [
    { label: "Type", value: planet.category },
    { label: "Distance", value: planet.distance },
    { label: "Mass", value: planet.mass },
    { label: "Radius", value: planet.radius },
    { label: "Orbital Period", value: planet.orbitalPeriod },
    { label: "Temperature", value: planet.temperature },
    { label: "Host Star", value: planet.hostStar },
    { label: "Discovery Year", value: planet.discoveryYear },
  ].filter((stat) => stat.value)

  return (
    <div className="space-y-4">
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center justify-between py-2 border-b border-border/40 last:border-0">
          <span className="text-sm text-muted-foreground">{stat.label}</span>
          <span className="font-medium text-foreground">{stat.value}</span>
        </div>
      ))}
    </div>
  )
}
