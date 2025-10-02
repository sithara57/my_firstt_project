import { Header } from "@/components/header"
import { PlanetCard } from "@/components/planet-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { planetsData } from "@/lib/planets-data"
import Link from "next/link"

export default function HomePage() {
  const realPlanets = planetsData.filter((p) => p.type === "real")
  const fictionalPlanets = planetsData.filter((p) => p.type === "fictional")

  return (
    <div className="min-h-screen star-field">
      <Header />

      {/* Hero Section */}
      <section className="cosmic-gradient py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">Explore Worlds Beyond Our Own</h1>
            <p className="text-xl text-foreground/80 text-pretty leading-relaxed">
              Discover real exoplanets from NASA data alongside fictional worlds from science fiction. Learn astronomy
              through the lens of imagination.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button size="lg" asChild>
                <Link href="#explore">Start Exploring</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/lessons">View Lessons</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b border-border/40">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">5,500+</div>
              <div className="text-sm text-muted-foreground mt-1">Confirmed Exoplanets</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary">4,000+</div>
              <div className="text-sm text-muted-foreground mt-1">Candidate Planets</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Potentially Habitable</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">∞</div>
              <div className="text-sm text-muted-foreground mt-1">Possibilities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Planet Explorer */}
      <section id="explore" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Planet Explorer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Browse real exoplanets discovered by NASA missions and compare them with fictional worlds from beloved
              science fiction stories.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="all">All Planets</TabsTrigger>
              <TabsTrigger value="real">Real</TabsTrigger>
              <TabsTrigger value="fictional">Fictional</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {planetsData.map((planet) => (
                  <PlanetCard key={planet.id} {...planet} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="real" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {realPlanets.map((planet) => (
                  <PlanetCard key={planet.id} {...planet} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="fictional" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {fictionalPlanets.map((planet) => (
                  <PlanetCard key={planet.id} {...planet} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Learn Through Exploration</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Interactive tools designed for middle and high school students to understand astronomy concepts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                <div className="w-8 h-8 rounded-full bg-primary" />
              </div>
              <h3 className="text-xl font-semibold">Compare Worlds</h3>
              <p className="text-muted-foreground text-pretty">
                Side-by-side comparison of real and fictional planets to understand what makes worlds habitable.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto">
                <div className="w-8 h-8 rounded-full bg-secondary" />
              </div>
              <h3 className="text-xl font-semibold">Build-a-Planet</h3>
              <p className="text-muted-foreground text-pretty">
                Design your own planet with scientific constraints and see if it could support life.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                <div className="w-8 h-8 rounded-full bg-accent" />
              </div>
              <h3 className="text-xl font-semibold">Classroom Ready</h3>
              <p className="text-muted-foreground text-pretty">
                Lesson plans, quizzes, and activities aligned with NGSS standards for teachers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/40">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">Built for NASA Space Apps Challenge 2024</div>
            <div className="flex items-center gap-6">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link
                href="/data-sources"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Data Sources
              </Link>
              <a
                href="https://exoplanetarchive.ipac.caltech.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                NASA Exoplanet Archive
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
