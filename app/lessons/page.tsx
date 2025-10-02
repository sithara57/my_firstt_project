import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const lessons = [
  {
    id: 1,
    title: "What is an Exoplanet?",
    description: "Learn the basics of planets outside our solar system and how we discover them.",
    grade: "6-8",
    duration: "45 min",
    topics: ["Exoplanets", "Detection Methods", "Solar Systems"],
  },
  {
    id: 2,
    title: "The Habitable Zone",
    description: "Explore what makes a planet potentially habitable and the Goldilocks zone concept.",
    grade: "6-10",
    duration: "60 min",
    topics: ["Habitability", "Liquid Water", "Temperature"],
  },
  {
    id: 3,
    title: "Planet Types and Classification",
    description: "Understand different types of planets from terrestrial to gas giants.",
    grade: "7-10",
    duration: "50 min",
    topics: ["Planet Types", "Composition", "Size"],
  },
  {
    id: 4,
    title: "Science Fiction vs. Science Fact",
    description: "Compare fictional planets with real exoplanets to understand scientific accuracy.",
    grade: "8-12",
    duration: "90 min",
    topics: ["Critical Thinking", "Media Literacy", "Astronomy"],
  },
  {
    id: 5,
    title: "Detection Methods",
    description: "Learn how astronomers find exoplanets using transit, radial velocity, and other methods.",
    grade: "9-12",
    duration: "75 min",
    topics: ["Transit Method", "Radial Velocity", "Direct Imaging"],
  },
  {
    id: 6,
    title: "Design Your Own Planet",
    description: "Use scientific principles to create a habitable planet in the Build-a-Planet sandbox.",
    grade: "6-12",
    duration: "60 min",
    topics: ["Planetary Science", "Habitability", "Design Thinking"],
  },
]

export default function LessonsPage() {
  return (
    <div className="min-h-screen star-field">
      <Header />

      <section className="py-12 md:py-20 cosmic-gradient">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">Classroom Lessons</h1>
            <p className="text-xl text-foreground/80 text-pretty leading-relaxed">
              Standards-aligned lesson plans for middle and high school students. Each lesson includes activities,
              assessments, and connections to real NASA data.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container max-w-5xl">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>For Teachers</CardTitle>
              <CardDescription>NGSS-aligned curriculum materials</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                These lessons align with Next Generation Science Standards (NGSS) for middle and high school astronomy
                and Earth science. Each lesson includes learning objectives, materials needed, step-by-step activities,
                and assessment rubrics.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge>MS-ESS1-3</Badge>
                <Badge>HS-ESS1-4</Badge>
                <Badge>HS-ESS1-6</Badge>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {lessons.map((lesson) => (
              <Card key={lesson.id} className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-xl">{lesson.title}</CardTitle>
                      <CardDescription>{lesson.description}</CardDescription>
                    </div>
                    <Badge variant="outline" className="shrink-0">
                      Lesson {lesson.id}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-medium">Grade:</span>
                      <span>{lesson.grade}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-medium">Duration:</span>
                      <span>{lesson.duration}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {lesson.topics.map((topic) => (
                      <Badge key={topic} variant="secondary">
                        {topic}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="outline" size="sm">
                    View Lesson Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Teacher Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <a
                href="https://exoplanets.nasa.gov/alien-worlds/ways-to-find-a-planet/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <div>
                  <div className="font-medium">NASA Exoplanet Exploration</div>
                  <div className="text-sm text-muted-foreground">Educational resources and activities</div>
                </div>
                <span className="text-primary">→</span>
              </a>
              <a
                href="https://www.nextgenscience.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <div>
                  <div className="font-medium">NGSS Standards</div>
                  <div className="text-sm text-muted-foreground">Next Generation Science Standards</div>
                </div>
                <span className="text-primary">→</span>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
