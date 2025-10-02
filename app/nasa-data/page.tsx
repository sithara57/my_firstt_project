import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { fetchNASAExoplanets } from "@/lib/nasa-api"
import Link from "next/link"
import { PlanetCard } from "@/components/planet-card"

export const revalidate = 86400 // Revalidate every 24 hours

export default async function NASADataPage() {
  const nasaPlanets = await fetchNASAExoplanets(30)

  return (
    <div className="min-h-screen star-field">
      <Header />

      <section className="py-12 md:py-20 cosmic-gradient">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">Live NASA Exoplanet Data</h1>
            <p className="text-xl text-foreground/80 text-pretty leading-relaxed">
              Explore real exoplanets discovered by NASA missions including Kepler, TESS, and ground-based telescopes.
              Data is updated daily from the NASA Exoplanet Archive.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>About This Data</CardTitle>
              <CardDescription>Source: NASA Exoplanet Archive</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                The NASA Exoplanet Archive is operated by Caltech under contract with NASA. It provides confirmed
                exoplanet data from peer-reviewed publications and NASA missions.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://exoplanetarchive.ipac.caltech.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Visit NASA Exoplanet Archive →
                </a>
                <a
                  href="https://eyes.nasa.gov/apps/exo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  NASA Eyes on Exoplanets →
                </a>
              </div>
            </CardContent>
          </Card>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Recently Discovered Exoplanets</h2>
            <p className="text-muted-foreground">
              Showing {nasaPlanets.length} exoplanets with complete data, sorted by discovery year
            </p>
          </div>

          {nasaPlanets.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nasaPlanets.map((planet) => (
                <PlanetCard key={planet.id} {...planet} />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">Unable to load NASA data at this time. Please try again later.</p>
                <Button asChild className="mt-4">
                  <Link href="/">View Sample Planets</Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  )
}
