import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getPlanetById, planetsData } from "@/lib/planets-data"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PlanetVisualization } from "@/components/planet-visualization"
import { PlanetStats } from "@/components/planet-stats"
import { RelatedPlanets } from "@/components/related-planets"

export function generateStaticParams() {
  return planetsData.map((planet) => ({
    id: planet.id,
  }))
}

export default function PlanetDetailPage({ params }: { params: { id: string } }) {
  const planet = getPlanetById(params.id)

  if (!planet) {
    notFound()
  }

  return (
    <div className="min-h-screen star-field">
      <Header />

      {/* Hero Section with Planet Image */}
      <section className="relative py-12 md:py-20 cosmic-gradient">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Badge variant={planet.type === "real" ? "default" : "secondary"} className="text-sm">
                  {planet.type === "real" ? "Real Exoplanet" : "Fictional World"}
                </Badge>
                <Badge variant="outline">{planet.category}</Badge>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-balance">{planet.name}</h1>

              <p className="text-lg text-foreground/80 text-pretty leading-relaxed">{planet.description}</p>

              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/compare">Compare Planets</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/">Back to Explorer</Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-square rounded-2xl overflow-hidden border border-border/40 shadow-2xl shadow-primary/20">
              <img src={planet.image || "/placeholder.svg"} alt={planet.name} className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="data">Scientific Data</TabsTrigger>
              <TabsTrigger value="story">{planet.type === "real" ? "Discovery" : "Story"}</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Key Statistics</CardTitle>
                    <CardDescription>Essential planetary characteristics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PlanetStats planet={planet} />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Visualization</CardTitle>
                    <CardDescription>Interactive planet model</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PlanetVisualization planet={planet} />
                  </CardContent>
                </Card>
              </div>

              {planet.habitability && (
                <Card>
                  <CardHeader>
                    <CardTitle>Habitability Assessment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 leading-relaxed">{planet.habitability}</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Scientific Data Tab */}
            <TabsContent value="data" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Planetary Parameters</CardTitle>
                  <CardDescription>
                    {planet.type === "real"
                      ? "Data from NASA Exoplanet Archive"
                      : "Fictional specifications based on source material"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {planet.distance && (
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-muted-foreground">Distance from Earth</div>
                        <div className="text-2xl font-bold text-primary">{planet.distance}</div>
                      </div>
                    )}

                    {planet.mass && (
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-muted-foreground">Mass</div>
                        <div className="text-2xl font-bold text-primary">{planet.mass}</div>
                      </div>
                    )}

                    {planet.radius && (
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-muted-foreground">Radius</div>
                        <div className="text-2xl font-bold text-primary">{planet.radius}</div>
                      </div>
                    )}

                    {planet.orbitalPeriod && (
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-muted-foreground">Orbital Period</div>
                        <div className="text-2xl font-bold text-primary">{planet.orbitalPeriod}</div>
                      </div>
                    )}

                    {planet.temperature && (
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-muted-foreground">Temperature</div>
                        <div className="text-2xl font-bold text-primary">{planet.temperature}</div>
                      </div>
                    )}

                    {planet.hostStar && (
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-muted-foreground">Host Star</div>
                        <div className="text-2xl font-bold text-primary">{planet.hostStar}</div>
                      </div>
                    )}

                    {planet.discoveryMethod && (
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-muted-foreground">Discovery Method</div>
                        <div className="text-2xl font-bold text-primary">{planet.discoveryMethod}</div>
                      </div>
                    )}

                    {planet.discoveryYear && (
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-muted-foreground">Discovery Year</div>
                        <div className="text-2xl font-bold text-primary">{planet.discoveryYear}</div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {planet.type === "real" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Learn More</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <a
                      href="https://exoplanetarchive.ipac.caltech.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                    >
                      <div>
                        <div className="font-medium">NASA Exoplanet Archive</div>
                        <div className="text-sm text-muted-foreground">Official data and research</div>
                      </div>
                      <span className="text-primary">→</span>
                    </a>
                    <a
                      href="https://eyes.nasa.gov/apps/exo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                    >
                      <div>
                        <div className="font-medium">NASA Eyes on Exoplanets</div>
                        <div className="text-sm text-muted-foreground">Interactive 3D visualization</div>
                      </div>
                      <span className="text-primary">→</span>
                    </a>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Story/Discovery Tab */}
            <TabsContent value="story" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{planet.type === "real" ? "Discovery Story" : "Fictional Context"}</CardTitle>
                  {planet.source && <CardDescription>Source: {planet.source}</CardDescription>}
                </CardHeader>
                <CardContent className="space-y-4">
                  {planet.story && <p className="text-foreground/80 leading-relaxed text-pretty">{planet.story}</p>}

                  {planet.type === "real" && planet.discoveryMethod && (
                    <div className="mt-6 p-4 rounded-lg bg-muted/50">
                      <h4 className="font-semibold mb-2">Detection Method: {planet.discoveryMethod}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {planet.discoveryMethod === "Transit" &&
                          "Detected by observing the slight dimming of the host star as the planet passes in front of it."}
                        {planet.discoveryMethod === "Radial Velocity" &&
                          "Detected by measuring the wobble of the host star caused by the planet's gravitational pull."}
                      </p>
                    </div>
                  )}

                  {planet.type === "fictional" && planet.source && (
                    <div className="mt-6 p-4 rounded-lg bg-muted/50">
                      <h4 className="font-semibold mb-2">Educational Value</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Fictional planets help us understand real astronomical concepts by providing relatable examples
                        of planetary science in storytelling.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Related Planets */}
          <div className="mt-16">
            <RelatedPlanets currentPlanet={planet} />
          </div>
        </div>
      </section>
    </div>
  )
}
