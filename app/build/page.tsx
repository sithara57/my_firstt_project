"use client"

import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"

interface PlanetConfig {
  name: string
  type: string
  mass: number // Earth masses
  radius: number // Earth radii
  distance: number // AU from star
  starType: string
  atmosphere: string
}

export default function BuildAPlanetPage() {
  const [config, setConfig] = useState<PlanetConfig>({
    name: "My Planet",
    type: "terrestrial",
    mass: 1.0,
    radius: 1.0,
    distance: 1.0,
    starType: "sun-like",
    atmosphere: "nitrogen-oxygen",
  })

  const [habitability, setHabitability] = useState<{
    score: number
    factors: string[]
    verdict: string
  }>({
    score: 0,
    factors: [],
    verdict: "",
  })

  useEffect(() => {
    calculateHabitability()
  }, [config])

  const calculateHabitability = () => {
    let score = 0
    const factors: string[] = []

    // Check planet type
    if (config.type === "terrestrial") {
      score += 25
      factors.push("✓ Rocky planet can support solid surface")
    } else {
      factors.push("✗ Gas giants cannot support surface life")
    }

    // Check mass (0.5 to 2 Earth masses is ideal)
    if (config.mass >= 0.5 && config.mass <= 2.0) {
      score += 20
      factors.push("✓ Mass allows for atmosphere retention")
    } else if (config.mass < 0.5) {
      factors.push("✗ Too small to retain atmosphere")
    } else {
      factors.push("✗ Too massive, likely a gas giant")
    }

    // Check radius (0.8 to 1.5 Earth radii is ideal)
    if (config.radius >= 0.8 && config.radius <= 1.5) {
      score += 15
      factors.push("✓ Size supports Earth-like gravity")
    } else {
      factors.push("⚠ Size may affect surface gravity")
    }

    // Check distance (habitable zone calculation)
    const habitableZone = getHabitableZone(config.starType)
    if (config.distance >= habitableZone.inner && config.distance <= habitableZone.outer) {
      score += 30
      factors.push("✓ Located in habitable zone")
    } else if (config.distance < habitableZone.inner) {
      factors.push("✗ Too close to star - too hot")
    } else {
      factors.push("✗ Too far from star - too cold")
    }

    // Check atmosphere
    if (config.atmosphere === "nitrogen-oxygen") {
      score += 10
      factors.push("✓ Breathable atmosphere")
    } else if (config.atmosphere === "carbon-dioxide") {
      factors.push("⚠ Greenhouse effect may cause extreme heat")
    } else if (config.atmosphere === "none") {
      factors.push("✗ No atmosphere - no protection from radiation")
    }

    // Determine verdict
    let verdict = ""
    if (score >= 80) {
      verdict = "Highly Habitable - Excellent conditions for life!"
    } else if (score >= 60) {
      verdict = "Potentially Habitable - Some challenges but life is possible"
    } else if (score >= 40) {
      verdict = "Marginally Habitable - Extreme conditions"
    } else {
      verdict = "Not Habitable - Too many unfavorable conditions"
    }

    setHabitability({ score, factors, verdict })
  }

  const getHabitableZone = (starType: string) => {
    const zones: Record<string, { inner: number; outer: number }> = {
      "sun-like": { inner: 0.95, outer: 1.37 },
      "red-dwarf": { inner: 0.1, outer: 0.3 },
      "blue-giant": { inner: 5.0, outer: 10.0 },
    }
    return zones[starType] || zones["sun-like"]
  }

  const getPlanetColor = () => {
    if (config.type === "gas-giant") return "#f4a460"
    if (config.atmosphere === "none") return "#808080"
    if (config.atmosphere === "carbon-dioxide") return "#cd853f"
    return "#4682b4"
  }

  return (
    <div className="min-h-screen star-field">
      <Header />

      <section className="py-12 md:py-20 cosmic-gradient">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">Build-a-Planet Sandbox</h1>
            <p className="text-xl text-foreground/80 text-pretty leading-relaxed">
              Design your own planet and discover what conditions are needed for life. Experiment with different
              parameters and see how they affect habitability.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Configuration Panel */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Planet Configuration</CardTitle>
                  <CardDescription>Adjust parameters to design your planet</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="planet-name">Planet Name</Label>
                    <Input
                      id="planet-name"
                      value={config.name}
                      onChange={(e) => setConfig({ ...config, name: e.target.value })}
                      placeholder="Enter planet name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="planet-type">Planet Type</Label>
                    <Select value={config.type} onValueChange={(value) => setConfig({ ...config, type: value })}>
                      <SelectTrigger id="planet-type">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="terrestrial">Terrestrial (Rocky)</SelectItem>
                        <SelectItem value="gas-giant">Gas Giant</SelectItem>
                        <SelectItem value="ice-giant">Ice Giant</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Mass: {config.mass.toFixed(2)} Earth masses</Label>
                    <Slider
                      value={[config.mass]}
                      onValueChange={([value]) => setConfig({ ...config, mass: value })}
                      min={0.1}
                      max={10}
                      step={0.1}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Radius: {config.radius.toFixed(2)} Earth radii</Label>
                    <Slider
                      value={[config.radius]}
                      onValueChange={([value]) => setConfig({ ...config, radius: value })}
                      min={0.3}
                      max={5}
                      step={0.1}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Distance from Star: {config.distance.toFixed(2)} AU</Label>
                    <Slider
                      value={[config.distance]}
                      onValueChange={([value]) => setConfig({ ...config, distance: value })}
                      min={0.1}
                      max={15}
                      step={0.1}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="star-type">Host Star Type</Label>
                    <Select
                      value={config.starType}
                      onValueChange={(value) => setConfig({ ...config, starType: value })}
                    >
                      <SelectTrigger id="star-type">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sun-like">Sun-like (G-type)</SelectItem>
                        <SelectItem value="red-dwarf">Red Dwarf (M-type)</SelectItem>
                        <SelectItem value="blue-giant">Blue Giant (O-type)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="atmosphere">Atmosphere</Label>
                    <Select
                      value={config.atmosphere}
                      onValueChange={(value) => setConfig({ ...config, atmosphere: value })}
                    >
                      <SelectTrigger id="atmosphere">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nitrogen-oxygen">Nitrogen-Oxygen (Earth-like)</SelectItem>
                        <SelectItem value="carbon-dioxide">Carbon Dioxide (Venus-like)</SelectItem>
                        <SelectItem value="hydrogen-helium">Hydrogen-Helium (Gas Giant)</SelectItem>
                        <SelectItem value="none">No Atmosphere</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results Panel */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Planet: {config.name}</CardTitle>
                  <CardDescription>Visual representation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-square flex items-center justify-center bg-muted/50 rounded-lg">
                    <div
                      className="rounded-full shadow-2xl transition-all duration-300"
                      style={{
                        width: `${Math.min(config.radius * 80, 200)}px`,
                        height: `${Math.min(config.radius * 80, 200)}px`,
                        backgroundColor: getPlanetColor(),
                        boxShadow: `0 0 ${config.radius * 20}px ${getPlanetColor()}40`,
                      }}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Habitability Assessment</CardTitle>
                  <CardDescription>Can this planet support life?</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Habitability Score</span>
                      <Badge variant={habitability.score >= 60 ? "default" : "secondary"}>
                        {habitability.score}/100
                      </Badge>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-300"
                        style={{ width: `${habitability.score}%` }}
                      />
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-muted/50">
                    <p className="font-semibold mb-2">{habitability.verdict}</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Factors:</h4>
                    <ul className="space-y-1 text-sm">
                      {habitability.factors.map((factor, index) => (
                        <li key={index} className="text-foreground/80">
                          {factor}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Learn More</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-foreground/80">
                  <p>
                    <strong>Habitable Zone:</strong> The region around a star where liquid water could exist on a
                    planet's surface.
                  </p>
                  <p>
                    <strong>Planet Mass:</strong> Affects gravity and ability to retain an atmosphere. Too small = no
                    atmosphere, too large = gas giant.
                  </p>
                  <p>
                    <strong>Atmosphere:</strong> Protects from radiation, regulates temperature, and provides breathable
                    air for life.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
