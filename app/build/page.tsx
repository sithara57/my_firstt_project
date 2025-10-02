"use client"

import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Info, Download, RotateCcw } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface PlanetConfig {
  name: string
  type: string
  mass: number // Earth masses
  radius: number // Earth radii
  distance: number // AU from star
  starType: string
  atmosphere: string
  waterCoverage: number // percentage
  magneticField: boolean
  tectonicActivity: boolean
  axialTilt: number // degrees
}

export default function BuildAPlanetPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [rotation, setRotation] = useState(0)

  const [config, setConfig] = useState<PlanetConfig>({
    name: "My Planet",
    type: "terrestrial",
    mass: 1.0,
    radius: 1.0,
    distance: 1.0,
    starType: "sun-like",
    atmosphere: "nitrogen-oxygen",
    waterCoverage: 70,
    magneticField: true,
    tectonicActivity: true,
    axialTilt: 23.5,
  })

  const [habitability, setHabitability] = useState<{
    score: number
    factors: { text: string; points: number; category: string }[]
    verdict: string
    temperature: number
    surfaceGravity: number
  }>({
    score: 0,
    factors: [],
    verdict: "",
    temperature: 0,
    surfaceGravity: 0,
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const animate = () => {
      setRotation((prev) => (prev + 0.5) % 360)
    }

    const interval = setInterval(animate, 50)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const planetRadius = Math.min(config.radius * 60, 120)

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw atmosphere glow
    if (config.atmosphere !== "none") {
      const gradient = ctx.createRadialGradient(centerX, centerY, planetRadius, centerX, centerY, planetRadius + 20)
      gradient.addColorStop(0, `${getAtmosphereColor()}00`)
      gradient.addColorStop(1, `${getAtmosphereColor()}60`)
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(centerX, centerY, planetRadius + 20, 0, Math.PI * 2)
      ctx.fill()
    }

    // Draw planet body
    const planetGradient = ctx.createRadialGradient(
      centerX - planetRadius / 3,
      centerY - planetRadius / 3,
      planetRadius / 4,
      centerX,
      centerY,
      planetRadius,
    )
    planetGradient.addColorStop(0, getPlanetColor())
    planetGradient.addColorStop(1, adjustBrightness(getPlanetColor(), -40))
    ctx.fillStyle = planetGradient
    ctx.beginPath()
    ctx.arc(centerX, centerY, planetRadius, 0, Math.PI * 2)
    ctx.fill()

    // Draw water if applicable
    if (config.waterCoverage > 0 && config.type === "terrestrial") {
      ctx.fillStyle = `rgba(30, 144, 255, ${config.waterCoverage / 100})`
      for (let i = 0; i < 5; i++) {
        const angle = (rotation + i * 72) * (Math.PI / 180)
        const x = centerX + Math.cos(angle) * (planetRadius * 0.6)
        const y = centerY + Math.sin(angle) * (planetRadius * 0.6)
        ctx.beginPath()
        ctx.arc(x, y, planetRadius * 0.3, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Draw clouds if atmosphere exists
    if (config.atmosphere !== "none") {
      ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
      for (let i = 0; i < 3; i++) {
        const angle = (rotation * 1.5 + i * 120) * (Math.PI / 180)
        const x = centerX + Math.cos(angle) * (planetRadius * 0.5)
        const y = centerY + Math.sin(angle) * (planetRadius * 0.5)
        ctx.beginPath()
        ctx.ellipse(x, y, planetRadius * 0.4, planetRadius * 0.2, angle, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Draw shadow
    ctx.fillStyle = "rgba(0, 0, 0, 0.3)"
    ctx.beginPath()
    ctx.arc(centerX + planetRadius / 4, centerY + planetRadius / 4, planetRadius, 0, Math.PI * 2)
    ctx.fill()
  }, [config, rotation])

  useEffect(() => {
    calculateHabitability()
  }, [config])

  const calculateHabitability = () => {
    let score = 0
    const factors: { text: string; points: number; category: string }[] = []

    // Planet type (25 points max)
    if (config.type === "terrestrial") {
      score += 25
      factors.push({ text: "Rocky planet can support solid surface", points: 25, category: "structure" })
    } else {
      factors.push({ text: "Gas giants cannot support surface life", points: 0, category: "structure" })
    }

    // Mass (15 points max)
    if (config.mass >= 0.5 && config.mass <= 2.0) {
      const massScore = 15
      score += massScore
      factors.push({ text: "Optimal mass for atmosphere retention", points: massScore, category: "physical" })
    } else if (config.mass < 0.5) {
      factors.push({ text: "Too small to retain substantial atmosphere", points: 0, category: "physical" })
    } else {
      factors.push({ text: "Too massive, likely a gas giant", points: 0, category: "physical" })
    }

    // Radius (10 points max)
    if (config.radius >= 0.8 && config.radius <= 1.5) {
      score += 10
      factors.push({ text: "Size supports Earth-like surface gravity", points: 10, category: "physical" })
    } else {
      const penalty = Math.abs(config.radius - 1.15) * 5
      factors.push({
        text: "Size affects surface gravity significantly",
        points: Math.max(0, 10 - penalty),
        category: "physical",
      })
    }

    // Distance/Temperature (20 points max)
    const habitableZone = getHabitableZone(config.starType)
    const temp = calculateTemperature()
    if (config.distance >= habitableZone.inner && config.distance <= habitableZone.outer) {
      score += 20
      factors.push({ text: "Located in habitable zone (liquid water possible)", points: 20, category: "location" })
    } else if (config.distance < habitableZone.inner) {
      const proximity = habitableZone.inner - config.distance
      factors.push({ text: `Too close to star (${temp.toFixed(0)}°C - too hot)`, points: 0, category: "location" })
    } else {
      factors.push({ text: `Too far from star (${temp.toFixed(0)}°C - too cold)`, points: 0, category: "location" })
    }

    // Atmosphere (15 points max)
    if (config.atmosphere === "nitrogen-oxygen") {
      score += 15
      factors.push({ text: "Breathable atmosphere with greenhouse effect", points: 15, category: "atmosphere" })
    } else if (config.atmosphere === "carbon-dioxide") {
      score += 5
      factors.push({ text: "Greenhouse gases present but not breathable", points: 5, category: "atmosphere" })
    } else if (config.atmosphere === "hydrogen-helium") {
      factors.push({ text: "Gas giant atmosphere, unsuitable for life", points: 0, category: "atmosphere" })
    } else {
      factors.push({ text: "No atmosphere - no protection from radiation", points: 0, category: "atmosphere" })
    }

    // Water coverage (10 points max)
    if (config.waterCoverage >= 30 && config.waterCoverage <= 90) {
      const waterScore = 10
      score += waterScore
      factors.push({
        text: `Optimal water coverage (${config.waterCoverage}%)`,
        points: waterScore,
        category: "surface",
      })
    } else if (config.waterCoverage > 0) {
      const waterScore = 5
      score += waterScore
      factors.push({ text: `Some water present (${config.waterCoverage}%)`, points: waterScore, category: "surface" })
    } else {
      factors.push({ text: "No liquid water detected", points: 0, category: "surface" })
    }

    // Magnetic field (5 points max)
    if (config.magneticField) {
      score += 5
      factors.push({ text: "Magnetic field protects from solar radiation", points: 5, category: "protection" })
    } else {
      factors.push({ text: "No magnetic field - vulnerable to radiation", points: 0, category: "protection" })
    }

    // Tectonic activity (5 points max)
    if (config.tectonicActivity) {
      score += 5
      factors.push({ text: "Tectonic activity recycles nutrients", points: 5, category: "geology" })
    } else {
      factors.push({ text: "No tectonic activity - limited nutrient cycling", points: 0, category: "geology" })
    }

    // Axial tilt (5 points max)
    if (config.axialTilt >= 15 && config.axialTilt <= 35) {
      score += 5
      factors.push({ text: "Moderate axial tilt creates stable seasons", points: 5, category: "climate" })
    } else if (config.axialTilt < 15) {
      score += 2
      factors.push({ text: "Low axial tilt - minimal seasonal variation", points: 2, category: "climate" })
    } else {
      factors.push({ text: "Extreme axial tilt - harsh seasonal extremes", points: 0, category: "climate" })
    }

    // Calculate surface gravity
    const surfaceGravity = config.mass / (config.radius * config.radius)

    // Determine verdict
    let verdict = ""
    if (score >= 85) {
      verdict = "Highly Habitable - Excellent conditions for complex life!"
    } else if (score >= 70) {
      verdict = "Very Habitable - Strong potential for life as we know it"
    } else if (score >= 50) {
      verdict = "Potentially Habitable - Some challenges but life is possible"
    } else if (score >= 30) {
      verdict = "Marginally Habitable - Extreme conditions, only extremophiles"
    } else {
      verdict = "Not Habitable - Too many unfavorable conditions"
    }

    setHabitability({ score, factors, verdict, temperature: temp, surfaceGravity })
  }

  const calculateTemperature = () => {
    const starLuminosity: Record<string, number> = {
      "sun-like": 1.0,
      "red-dwarf": 0.05,
      "blue-giant": 10000,
    }
    const L = starLuminosity[config.starType] || 1.0
    const baseTemp = 278 * Math.pow(L / (config.distance * config.distance), 0.25)

    // Atmosphere greenhouse effect
    let greenhouse = 1.0
    if (config.atmosphere === "carbon-dioxide") greenhouse = 1.5
    else if (config.atmosphere === "nitrogen-oxygen") greenhouse = 1.1
    else if (config.atmosphere === "none") greenhouse = 0.7

    return baseTemp * greenhouse - 273 // Convert to Celsius
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
    if (config.type === "ice-giant") return "#b0e0e6"
    if (config.atmosphere === "none") return "#808080"
    if (config.atmosphere === "carbon-dioxide") return "#cd853f"
    if (config.waterCoverage > 50) return "#4682b4"
    return "#8b7355"
  }

  const getAtmosphereColor = () => {
    if (config.atmosphere === "nitrogen-oxygen") return "#87ceeb"
    if (config.atmosphere === "carbon-dioxide") return "#ffa500"
    if (config.atmosphere === "hydrogen-helium") return "#dda0dd"
    return "#ffffff"
  }

  const adjustBrightness = (color: string, amount: number) => {
    const num = Number.parseInt(color.replace("#", ""), 16)
    const r = Math.max(0, Math.min(255, (num >> 16) + amount))
    const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00ff) + amount))
    const b = Math.max(0, Math.min(255, (num & 0x0000ff) + amount))
    return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`
  }

  const resetPlanet = () => {
    setConfig({
      name: "My Planet",
      type: "terrestrial",
      mass: 1.0,
      radius: 1.0,
      distance: 1.0,
      starType: "sun-like",
      atmosphere: "nitrogen-oxygen",
      waterCoverage: 70,
      magneticField: true,
      tectonicActivity: true,
      axialTilt: 23.5,
    })
  }

  const exportPlanet = () => {
    const data = {
      ...config,
      habitability: habitability.score,
      temperature: habitability.temperature,
      surfaceGravity: habitability.surfaceGravity,
      verdict: habitability.verdict,
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${config.name.replace(/\s+/g, "-").toLowerCase()}.json`
    a.click()
    URL.revokeObjectURL(url)
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
              parameters and see real-time habitability calculations based on actual planetary science.
            </p>
            <div className="flex gap-3 justify-center">
              <Button onClick={resetPlanet} variant="outline" className="gap-2 bg-transparent">
                <RotateCcw className="w-4 h-4" />
                Reset to Earth-like
              </Button>
              <Button onClick={exportPlanet} variant="outline" className="gap-2 bg-transparent">
                <Download className="w-4 h-4" />
                Export Design
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Configuration Panel */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Planet Configuration</CardTitle>
                  <CardDescription>Adjust parameters to design your planet</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="basic" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="basic">Basic</TabsTrigger>
                      <TabsTrigger value="environment">Environment</TabsTrigger>
                      <TabsTrigger value="advanced">Advanced</TabsTrigger>
                    </TabsList>

                    <TabsContent value="basic" className="space-y-6 mt-6">
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
                        <div className="flex items-center gap-2">
                          <Label htmlFor="planet-type">Planet Type</Label>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="w-4 h-4 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="max-w-xs">
                                  Terrestrial planets have solid surfaces. Gas and ice giants are mostly atmosphere.
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
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
                        <div className="flex items-center gap-2">
                          <Label>Mass: {config.mass.toFixed(2)} Earth masses</Label>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="w-4 h-4 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="max-w-xs">
                                  Mass affects gravity and ability to hold an atmosphere. Earth = 1.0
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <Slider
                          value={[config.mass]}
                          onValueChange={([value]) => setConfig({ ...config, mass: value })}
                          min={0.1}
                          max={10}
                          step={0.1}
                        />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Label>Radius: {config.radius.toFixed(2)} Earth radii</Label>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="w-4 h-4 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="max-w-xs">Size affects surface gravity. Earth = 1.0</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <Slider
                          value={[config.radius]}
                          onValueChange={([value]) => setConfig({ ...config, radius: value })}
                          min={0.3}
                          max={5}
                          step={0.1}
                        />
                      </div>
                    </TabsContent>

                    <TabsContent value="environment" className="space-y-6 mt-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Label>Distance from Star: {config.distance.toFixed(2)} AU</Label>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="w-4 h-4 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="max-w-xs">1 AU = Earth's distance from Sun. Affects temperature.</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <Slider
                          value={[config.distance]}
                          onValueChange={([value]) => setConfig({ ...config, distance: value })}
                          min={0.1}
                          max={15}
                          step={0.1}
                        />
                        <div className="text-xs text-muted-foreground">
                          Habitable zone: {getHabitableZone(config.starType).inner.toFixed(2)} -{" "}
                          {getHabitableZone(config.starType).outer.toFixed(2)} AU
                        </div>
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
                            <SelectItem value="sun-like">Sun-like (G-type) - Medium temp</SelectItem>
                            <SelectItem value="red-dwarf">Red Dwarf (M-type) - Cool</SelectItem>
                            <SelectItem value="blue-giant">Blue Giant (O-type) - Very hot</SelectItem>
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

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Label>Water Coverage: {config.waterCoverage}%</Label>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="w-4 h-4 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="max-w-xs">
                                  Earth is about 71% water. Water is essential for life as we know it.
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <Slider
                          value={[config.waterCoverage]}
                          onValueChange={([value]) => setConfig({ ...config, waterCoverage: value })}
                          min={0}
                          max={100}
                          step={5}
                        />
                      </div>
                    </TabsContent>

                    <TabsContent value="advanced" className="space-y-6 mt-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <Label>Magnetic Field</Label>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger>
                                    <Info className="w-4 h-4 text-muted-foreground" />
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className="max-w-xs">
                                      Protects atmosphere from solar wind and harmful radiation
                                    </p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                            <p className="text-xs text-muted-foreground">Shields from solar radiation</p>
                          </div>
                          <Button
                            variant={config.magneticField ? "default" : "outline"}
                            size="sm"
                            onClick={() => setConfig({ ...config, magneticField: !config.magneticField })}
                          >
                            {config.magneticField ? "Active" : "Inactive"}
                          </Button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <Label>Tectonic Activity</Label>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger>
                                    <Info className="w-4 h-4 text-muted-foreground" />
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className="max-w-xs">
                                      Recycles nutrients and regulates climate over geological time
                                    </p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                            <p className="text-xs text-muted-foreground">Nutrient cycling and climate regulation</p>
                          </div>
                          <Button
                            variant={config.tectonicActivity ? "default" : "outline"}
                            size="sm"
                            onClick={() => setConfig({ ...config, tectonicActivity: !config.tectonicActivity })}
                          >
                            {config.tectonicActivity ? "Active" : "Inactive"}
                          </Button>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Label>Axial Tilt: {config.axialTilt.toFixed(1)}°</Label>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <Info className="w-4 h-4 text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="max-w-xs">Determines seasonal variation. Earth's tilt is 23.5°</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                          <Slider
                            value={[config.axialTilt]}
                            onValueChange={([value]) => setConfig({ ...config, axialTilt: value })}
                            min={0}
                            max={90}
                            step={0.5}
                          />
                          <p className="text-xs text-muted-foreground">
                            {config.axialTilt < 15 && "Minimal seasons"}
                            {config.axialTilt >= 15 && config.axialTilt <= 35 && "Moderate seasons (ideal)"}
                            {config.axialTilt > 35 && "Extreme seasonal variation"}
                          </p>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Results Panel */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Planet: {config.name}</CardTitle>
                  <CardDescription>Real-time visualization</CardDescription>
                </CardHeader>
                <CardContent>
                  <canvas
                    ref={canvasRef}
                    width={400}
                    height={400}
                    className="w-full h-auto rounded-lg bg-gradient-to-b from-background to-muted/50"
                  />
                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Surface Temp</p>
                      <p className="font-semibold">{habitability.temperature.toFixed(1)}°C</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Surface Gravity</p>
                      <p className="font-semibold">{habitability.surfaceGravity.toFixed(2)}g</p>
                    </div>
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
                      <Badge
                        variant={
                          habitability.score >= 70 ? "default" : habitability.score >= 50 ? "secondary" : "outline"
                        }
                      >
                        {habitability.score}/100
                      </Badge>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-500"
                        style={{ width: `${habitability.score}%` }}
                      />
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-muted/50 border">
                    <p className="font-semibold">{habitability.verdict}</p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm flex items-center gap-2">
                      Detailed Analysis
                      <Badge variant="outline" className="text-xs">
                        {habitability.factors.length} factors
                      </Badge>
                    </h4>
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {habitability.factors.map((factor, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm p-2 rounded bg-muted/30">
                          <Badge variant="outline" className="text-xs shrink-0">
                            +{factor.points}
                          </Badge>
                          <span className="text-foreground/80">{factor.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Educational Notes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-foreground/80">
                  <div>
                    <strong className="text-foreground">Habitable Zone:</strong> The region around a star where liquid
                    water could exist on a planet's surface. Also called the "Goldilocks zone" - not too hot, not too
                    cold.
                  </div>
                  <div>
                    <strong className="text-foreground">Surface Gravity:</strong> Calculated from mass and radius.
                    Affects atmosphere retention and what life forms could evolve. Earth = 1.0g.
                  </div>
                  <div>
                    <strong className="text-foreground">Magnetic Field:</strong> Generated by a planet's molten core.
                    Earth's magnetic field deflects harmful solar wind and cosmic radiation.
                  </div>
                  <div>
                    <strong className="text-foreground">Tectonic Activity:</strong> Movement of crustal plates recycles
                    carbon and nutrients, essential for long-term habitability.
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
