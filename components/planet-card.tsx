import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface PlanetCardProps {
  id: string
  name: string
  type: "real" | "fictional"
  category: string
  description: string
  image: string
  distance?: string
  mass?: string
  discoveryYear?: string
  source?: string
}

export function PlanetCard({
  id,
  name,
  type,
  category,
  description,
  image,
  distance,
  mass,
  discoveryYear,
  source,
}: PlanetCardProps) {
  return (
    <Link href={`/planet/${id}`}>
      <Card className="group overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50 cursor-pointer h-full">
        <div className="aspect-video relative overflow-hidden bg-muted">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="object-cover w-full h-full transition-transform group-hover:scale-105"
          />
          <Badge className="absolute top-3 right-3" variant={type === "real" ? "default" : "secondary"}>
            {type === "real" ? "Real" : "Fictional"}
          </Badge>
        </div>

        <CardHeader>
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-xl text-balance">{name}</CardTitle>
            <Badge variant="outline" className="shrink-0">
              {category}
            </Badge>
          </div>
          <CardDescription className="text-pretty line-clamp-2">{description}</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {distance && (
              <div>
                <span className="text-muted-foreground">Distance:</span>
                <p className="font-medium">{distance}</p>
              </div>
            )}
            {mass && (
              <div>
                <span className="text-muted-foreground">Mass:</span>
                <p className="font-medium">{mass}</p>
              </div>
            )}
            {discoveryYear && (
              <div>
                <span className="text-muted-foreground">Discovered:</span>
                <p className="font-medium">{discoveryYear}</p>
              </div>
            )}
            {source && (
              <div>
                <span className="text-muted-foreground">Source:</span>
                <p className="font-medium">{source}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
