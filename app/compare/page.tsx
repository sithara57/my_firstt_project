"use client"

import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { planetsData, type Planet } from "@/lib/planets-data"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"

export default function ComparePage() {
  const [planet1, setPlanet1] = useState<Planet | null>(planetsData[0])
  const [planet2, setPlanet2] = useState<Planet | null>(planetsData[4])

  const handlePlanet1Change = (id: string) => {
    const planet = planetsData.find((p) => p.id === id)
    setPlanet1(planet || null)
  }

  const handlePlanet2Change = (id: string) => {
    const planet = planetsData.find((p) => p.id === id)
    setPlanet2(planet || null)
  }

  return (
    <div className="min-h-screen star-field">
      <Header />

      <section className="py-12 md:py-20 cosmic-gradient">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">Compare Planets</h1>
            <p className="text-xl text-foreground/80 text-pretty leading-relaxed">
              Compare real exoplanets with fictional worlds to understand what makes planets unique and potentially
              habitable.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container max-w-6xl">
          {/* Planet Selectors */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Select First Planet</CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={planet1?.id} onValueChange={handlePlanet1Change}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a planet" />
                  </SelectTrigger>
                  <SelectContent>
                    {planetsData.map((planet) => (
                      <SelectItem key={planet.id} value={planet.id}>
                        {planet.name} ({planet.type})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Select Second Planet</CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={planet2?.id} onValueChange={handlePlanet2Change}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a planet" />
                  </SelectTrigger>
                  <SelectContent>
                    {planetsData.map((planet) => (
                      <SelectItem key={planet.id} value={planet.id}>
                        {planet.name} ({planet.type})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
          </div>

          {/* Comparison View */}
          {planet1 && planet2 && (
            <div className="space-y-6">
              {/* Images */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <img
                      src={planet1.image || "/placeholder.svg"}
                      alt={planet1.name}
                      className="object-cover w-full h-full"
                    />
                    <Badge
                      className="absolute top-3 right-3"
                      variant={planet1.type === "real" ? "default" : "secondary"}
                    >
                      {planet1.type === "real" ? "Real" : "Fictional"}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>{planet1.name}</CardTitle>
                    <CardDescription>{planet1.category}</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <img
                      src={planet2.image || "/placeholder.svg"}
                      alt={planet2.name}
                      className="object-cover w-full h-full"
                    />
                    <Badge
                      className="absolute top-3 right-3"
                      variant={planet2.type === "real" ? "default" : "secondary"}
                    >
                      {planet2.type === "real" ? "Real" : "Fictional"}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>{planet2.name}</CardTitle>
                    <CardDescription>{planet2.category}</CardDescription>
                  </CardHeader>
                </Card>
              </div>

              {/* Comparison Table */}
              <Card>
                <CardHeader>
                  <CardTitle>Side-by-Side Comparison</CardTitle>
                  <CardDescription>Key characteristics and differences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <ComparisonRow label="Type" value1={planet1.type} value2={planet2.type} />
                    <ComparisonRow label="Category" value1={planet1.category} value2={planet2.category} />
                    <ComparisonRow label="Distance" value1={planet1.distance} value2={planet2.distance} />
                    <ComparisonRow label="Mass" value1={planet1.mass} value2={planet2.mass} />
                    <ComparisonRow label="Radius" value1={planet1.radius} value2={planet2.radius} />
                    <ComparisonRow
                      label="Orbital Period"
                      value1={planet1.orbitalPeriod}
                      value2={planet2.orbitalPeriod}
                    />
                    <ComparisonRow label="Temperature" value1={planet1.temperature} value2={planet2.temperature} />
                    <ComparisonRow
                      label="Discovery/Source"
                      value1={planet1.discoveryYear || planet1.source}
                      value2={planet2.discoveryYear || planet2.source}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Educational Insights */}
              <Card>
                <CardHeader>
                  <CardTitle>Educational Insights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">What We Learn From This Comparison:</h4>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80">
                      {planet1.type !== planet2.type && (
                        <li>
                          Comparing real and fictional planets helps us understand how science fiction is inspired by
                          real astronomy
                        </li>
                      )}
                      {planet1.category === planet2.category && (
                        <li>Both planets share the same category, showing similar planetary characteristics</li>
                      )}
                      {planet1.type === "real" && planet2.type === "real" && (
                        <li>
                          Both are confirmed exoplanets, demonstrating the diversity of planetary systems in our galaxy
                        </li>
                      )}
                      <li>
                        Temperature and distance from the host star are key factors in determining a planet's
                        habitability
                      </li>
                      <li>Planet size and mass help scientists determine composition (rocky vs. gaseous)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

function ComparisonRow({
  label,
  value1,
  value2,
}: {
  label: string
  value1: string | undefined
  value2: string | undefined
}) {
  if (!value1 && !value2) return null

  return (
    <div className="grid grid-cols-[200px_1fr_1fr] gap-4 py-3 border-b border-border/40 last:border-0">
      <div className="font-medium text-muted-foreground">{label}</div>
      <div className="text-foreground">{value1 || "—"}</div>
      <div className="text-foreground">{value2 || "—"}</div>
    </div>
  )
}
