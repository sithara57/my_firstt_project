import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen star-field">
      <Header />

      <section className="py-12 md:py-20 cosmic-gradient">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">About Worlds Beyond</h1>
            <p className="text-xl text-foreground/80 text-pretty leading-relaxed">
              An educational platform bridging real astronomy with science fiction to inspire the next generation of
              space explorers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container max-w-4xl space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Worlds Beyond was created for the NASA Space Apps Challenge to make exoplanet science accessible and
                engaging for middle and high school students. By combining real NASA data with beloved fictional planets
                from science fiction, we help students understand complex astronomical concepts through familiar
                storytelling.
              </p>
              <p>
                Our platform demonstrates that the universe is more diverse and fascinating than any fiction, while
                showing how science fiction can inspire real scientific curiosity and understanding.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="font-semibold">Planet Explorer</h3>
                  <p className="text-sm text-foreground/80">
                    Browse and filter real exoplanets and fictional worlds with detailed information and visualizations.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">NASA Data Integration</h3>
                  <p className="text-sm text-foreground/80">
                    Live data from NASA Exoplanet Archive with daily updates of confirmed exoplanets.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Comparison Tool</h3>
                  <p className="text-sm text-foreground/80">
                    Side-by-side comparison of planets to understand similarities and differences.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Build-a-Planet</h3>
                  <p className="text-sm text-foreground/80">
                    Interactive sandbox to design planets and learn about habitability requirements.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Lesson Plans</h3>
                  <p className="text-sm text-foreground/80">
                    NGSS-aligned curriculum materials for classroom use with activities and assessments.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Educational Content</h3>
                  <p className="text-sm text-foreground/80">
                    Detailed explanations of detection methods, habitability, and planetary science.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Sources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">NASA Exoplanet Archive</h3>
                <p className="text-sm text-foreground/80 mb-2">
                  Operated by Caltech under contract with NASA, providing confirmed exoplanet data from peer-reviewed
                  publications and NASA missions including Kepler, TESS, and ground-based observations.
                </p>
                <a
                  href="https://exoplanetarchive.ipac.caltech.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  Visit NASA Exoplanet Archive →
                </a>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Fictional Planet Sources</h3>
                <p className="text-sm text-foreground/80">
                  Fictional planets are sourced from well-known science fiction franchises including Star Wars, Dune,
                  Avatar, and others, with specifications based on canonical source material.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>NASA Space Apps Challenge 2024</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                This project was developed for the NASA Space Apps Challenge, an international hackathon focused on
                space exploration and Earth science. Our goal is to inspire students to pursue STEM careers and
                understand the incredible diversity of planetary systems in our galaxy.
              </p>
              <Button asChild>
                <Link href="/">Explore Planets</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
