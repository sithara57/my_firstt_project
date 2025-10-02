import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary" />
            <span className="text-xl font-bold text-balance">Worlds Beyond</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Explore
          </Link>
          <Link
            href="/nasa-data"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            NASA Data
          </Link>
          <Link
            href="/compare"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Compare
          </Link>
          <Link
            href="/build"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Build-a-Planet
          </Link>
          <Link
            href="/lessons"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Lessons
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/about">About</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/explore">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
