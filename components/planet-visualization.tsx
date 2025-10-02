"use client"

import type { Planet } from "@/lib/planets-data"
import { useEffect, useRef } from "react"

interface PlanetVisualizationProps {
  planet: Planet
}

export function PlanetVisualization({ planet }: PlanetVisualizationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const size = 300
    canvas.width = size
    canvas.height = size

    // Animation variables
    let rotation = 0

    // Color based on planet type
    const getPlanetColor = () => {
      if (planet.category.includes("Jupiter")) return "#f4a460"
      if (planet.category.includes("Desert")) return "#daa520"
      if (planet.category.includes("Earth") || planet.category.includes("Terrestrial")) return "#4682b4"
      if (planet.category.includes("Moon")) return "#32cd32"
      return "#9370db"
    }

    const planetColor = getPlanetColor()

    const animate = () => {
      ctx.clearRect(0, 0, size, size)

      // Draw planet
      const centerX = size / 2
      const centerY = size / 2
      const radius = 80

      // Create gradient for 3D effect
      const gradient = ctx.createRadialGradient(centerX - 20, centerY - 20, 10, centerX, centerY, radius)
      gradient.addColorStop(0, planetColor)
      gradient.addColorStop(1, "#000")

      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()

      // Draw atmospheric glow
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius + 5, 0, Math.PI * 2)
      ctx.strokeStyle = `${planetColor}40`
      ctx.lineWidth = 10
      ctx.stroke()

      // Draw rotation lines for effect
      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(rotation)

      ctx.strokeStyle = `${planetColor}30`
      ctx.lineWidth = 2

      for (let i = 0; i < 5; i++) {
        ctx.beginPath()
        ctx.ellipse(0, 0, radius * 0.8, radius * 0.3, 0, 0, Math.PI * 2)
        ctx.stroke()
        ctx.rotate(Math.PI / 5)
      }

      ctx.restore()

      rotation += 0.005

      requestAnimationFrame(animate)
    }

    animate()
  }, [planet])

  return (
    <div className="flex items-center justify-center">
      <canvas ref={canvasRef} className="max-w-full" />
    </div>
  )
}
