// Sample planet data combining real NASA exoplanets and fictional planets
export interface Planet {
  id: string
  name: string
  type: "real" | "fictional"
  category: string
  description: string
  image: string
  distance?: string
  mass?: string
  radius?: string
  discoveryYear?: string
  discoveryMethod?: string
  hostStar?: string
  orbitalPeriod?: string
  temperature?: string
  source?: string
  story?: string
  habitability?: string
}

export const planetsData: Planet[] = [
  // Real Exoplanets from NASA data
  {
    id: "kepler-452b",
    name: "Kepler-452b",
    type: "real",
    category: "Super-Earth",
    description: 'Often called "Earth\'s cousin," this exoplanet orbits in the habitable zone of a Sun-like star.',
    image: "/exoplanet-kepler-452b-earth-like-planet-in-space.jpg",
    distance: "1,400 light-years",
    mass: "5 Earth masses",
    radius: "1.6 Earth radii",
    discoveryYear: "2015",
    discoveryMethod: "Transit",
    hostStar: "Kepler-452",
    orbitalPeriod: "385 days",
    temperature: "265 K (-8°C)",
    habitability: "Potentially habitable zone",
  },
  {
    id: "proxima-centauri-b",
    name: "Proxima Centauri b",
    type: "real",
    category: "Terrestrial",
    description: "The closest known exoplanet to Earth, orbiting our nearest stellar neighbor.",
    image: "/proxima-centauri-b-red-dwarf-exoplanet.jpg",
    distance: "4.24 light-years",
    mass: "1.27 Earth masses",
    radius: "1.1 Earth radii",
    discoveryYear: "2016",
    discoveryMethod: "Radial Velocity",
    hostStar: "Proxima Centauri",
    orbitalPeriod: "11.2 days",
    temperature: "234 K (-39°C)",
    habitability: "Potentially habitable, but stellar flares are a concern",
  },
  {
    id: "trappist-1e",
    name: "TRAPPIST-1e",
    type: "real",
    category: "Terrestrial",
    description:
      "One of seven Earth-sized planets orbiting an ultra-cool dwarf star, likely rocky with potential for water.",
    image: "/trappist-1e-earth-sized-exoplanet-system.jpg",
    distance: "40 light-years",
    mass: "0.69 Earth masses",
    radius: "0.92 Earth radii",
    discoveryYear: "2017",
    discoveryMethod: "Transit",
    hostStar: "TRAPPIST-1",
    orbitalPeriod: "6.1 days",
    temperature: "251 K (-22°C)",
    habitability: "Most likely to be habitable in the TRAPPIST-1 system",
  },
  {
    id: "hd-209458-b",
    name: "HD 209458 b (Osiris)",
    type: "real",
    category: "Hot Jupiter",
    description: "The first exoplanet detected transiting its star, a gas giant losing its atmosphere.",
    image: "/hot-jupiter-exoplanet-gas-giant-close-to-star.jpg",
    distance: "159 light-years",
    mass: "0.69 Jupiter masses",
    radius: "1.38 Jupiter radii",
    discoveryYear: "1999",
    discoveryMethod: "Transit",
    hostStar: "HD 209458",
    orbitalPeriod: "3.5 days",
    temperature: "1,130 K (857°C)",
    habitability: "Not habitable - extreme heat",
  },

  // Fictional Planets
  {
    id: "tatooine",
    name: "Tatooine",
    type: "fictional",
    category: "Desert World",
    description: "A harsh desert planet orbiting twin suns, home to moisture farmers and hidden Jedi.",
    image: "/desert-planet-twin-suns-tatooine-style.jpg",
    distance: "Outer Rim Territories",
    orbitalPeriod: "304 days",
    temperature: "316 K (43°C)",
    source: "Star Wars",
    story:
      "Famous as the homeworld of Anakin and Luke Skywalker. Its binary star system creates extreme heat and arid conditions.",
  },
  {
    id: "arrakis",
    name: "Arrakis (Dune)",
    type: "fictional",
    category: "Desert World",
    description: "The desert planet and only source of the spice melange, the most valuable substance in the universe.",
    image: "/desert-planet-sand-dunes-arrakis-style.jpg",
    distance: "Canopus System",
    temperature: "340 K (67°C)",
    source: "Dune",
    story: "Home to the Fremen people and giant sandworms. The spice extends life and enables space travel.",
  },
  {
    id: "pandora",
    name: "Pandora",
    type: "fictional",
    category: "Moon (Habitable)",
    description: "A lush moon with bioluminescent forests, floating mountains, and indigenous Na'vi people.",
    image: "/bioluminescent-alien-forest-floating-mountains-pan.jpg",
    distance: "Alpha Centauri A System",
    mass: "0.72 Earth masses",
    orbitalPeriod: "26 hours (around Polyphemus)",
    temperature: "293 K (20°C)",
    source: "Avatar",
    story: "A moon of the gas giant Polyphemus, rich in the valuable mineral unobtanium.",
  },
  {
    id: "coruscant",
    name: "Coruscant",
    type: "fictional",
    category: "Ecumenopolis",
    description: "An entire planet covered in cityscape, serving as the galactic capital.",
    image: "/planet-wide-city-futuristic-metropolis-coruscant.jpg",
    distance: "Core Worlds",
    orbitalPeriod: "368 days",
    temperature: "288 K (15°C)",
    source: "Star Wars",
    story: "The political center of the galaxy for millennia, home to trillions of beings across thousands of levels.",
  },
]

export function getPlanetById(id: string): Planet | undefined {
  return planetsData.find((planet) => planet.id === id)
}

export function getPlanetsByType(type: "real" | "fictional"): Planet[] {
  return planetsData.filter((planet) => planet.type === type)
}
