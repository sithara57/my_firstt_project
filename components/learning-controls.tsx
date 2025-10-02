"use client"

import { useLearning } from "@/lib/learning-context"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { GraduationCap, Languages } from "lucide-react"

export function LearningControls() {
  const { level, setLevel, language, setLanguage } = useLearning()

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <GraduationCap className="h-4 w-4" />
            <span className="hidden sm:inline">{level === "middle-school" ? "Middle School" : "High School"}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Learning Level</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setLevel("middle-school")}>
            <div className="flex flex-col gap-1">
              <div className="font-medium">Middle School</div>
              <div className="text-xs text-muted-foreground">Grades 6-8</div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setLevel("high-school")}>
            <div className="flex flex-col gap-1">
              <div className="font-medium">High School</div>
              <div className="text-xs text-muted-foreground">Grades 9-12</div>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Languages className="h-4 w-4" />
            <span className="hidden sm:inline">{language === "en" ? "English" : "Español"}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Language</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setLanguage("en")}>English</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setLanguage("es")}>Español</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
