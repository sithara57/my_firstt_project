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
  detailedDescription?: string
  atmosphere?: string
  composition?: string
  surfaceFeatures?: string
  discoveryStory?: string
  scientificSignificance?: string
  comparisonToEarth?: string
  funFacts?: string[]
  educationalNotes?: string
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
    detailedDescription: `Kepler-452b represents one of the most Earth-like exoplanets ever discovered. Located 1,400 light-years away in the constellation Cygnus, this super-Earth orbits a G-type star remarkably similar to our Sun. What makes Kepler-452b extraordinary is not just its size or location, but the fact that it has been orbiting in its star's habitable zone for approximately 6 billion years—1.5 billion years longer than Earth has existed. This extended time in the "Goldilocks zone" means that if life exists there, it has had even more time to develop than life on Earth.

The planet completes one orbit every 385 days, giving it a year length very close to Earth's 365 days. Its host star, Kepler-452, is about 1.5 billion years older than our Sun and 20% brighter, which means Kepler-452b receives about 10% more energy than Earth does from the Sun. Despite this, scientists believe the planet's temperature could still support liquid water on its surface—a key ingredient for life as we know it.`,

    atmosphere: `While we cannot directly observe Kepler-452b's atmosphere with current technology, scientists can make educated predictions based on the planet's characteristics. With a radius 60% larger than Earth's and an estimated mass about 5 times greater, Kepler-452b likely has a thicker atmosphere than Earth. The increased gravity (about twice Earth's surface gravity) would help the planet retain atmospheric gases more effectively.

If Kepler-452b is rocky like Earth, its atmosphere might contain nitrogen, oxygen, carbon dioxide, and water vapor—similar to Earth's composition. However, the higher gravity and increased stellar radiation could lead to a denser atmosphere with more greenhouse gases, potentially making it warmer than Earth despite being in the habitable zone. Some models suggest it could have a thick, steamy atmosphere similar to what Earth might have had billions of years ago.

The planet's age (6 billion years in the habitable zone) is particularly intriguing for atmospheric evolution. If photosynthetic life developed there, it would have had 1.5 billion more years than Earth's life to modify the atmosphere through processes like oxygen production.`,

    composition: `Kepler-452b is classified as a "super-Earth," a category of planets larger than Earth but smaller than Neptune. Based on its mass and radius, scientists estimate it has about a 50% chance of being rocky like Earth, with the other possibility being that it's a smaller Neptune-like planet with a thick gaseous envelope.

If rocky, Kepler-452b likely has a composition similar to Earth's: an iron-nickel core surrounded by a silicate mantle and crust. However, the planet's larger size means it would have more internal heat from gravitational compression and radioactive decay. This could drive more vigorous plate tectonics than Earth experiences, leading to more volcanic activity and mountain building.

The higher mass also means stronger gravity at the surface—approximately 2g (twice Earth's gravity). This would affect everything from the height of mountains (which would be shorter and broader than Earth's) to the behavior of water and weather patterns. Any hypothetical life forms would need to be adapted to this higher gravity environment.`,

    surfaceFeatures: `Though we cannot directly image Kepler-452b's surface, we can make scientific predictions based on planetary science principles. If the planet is rocky and has liquid water, its surface might feature:

**Oceans and Continents**: With potentially more water than Earth due to its size and age, Kepler-452b might be a "water world" with deeper oceans and smaller continents. The higher gravity would create flatter terrain with broader, lower mountain ranges.

**Volcanic Activity**: The planet's larger size means more internal heat, potentially driving extensive volcanic activity. Volcanic islands and mountain chains could be common features, constantly reshaping the surface.

**Weather Patterns**: The combination of more stellar energy (10% more than Earth receives), larger size, and potentially thicker atmosphere could create dramatic weather systems. Storms might be more intense but also more stable due to the higher gravity.

**Erosion Patterns**: The stronger gravity would make water flow faster and erosion more aggressive, creating deeper river valleys and canyons. However, mountains would erode more quickly, leading to a generally flatter landscape over geological time.

If Kepler-452b has life, its surface might show signs of biological activity—perhaps vast forests, grasslands, or even structures built by intelligent beings, though we have no way to detect such features at this distance.`,

    discoveryStory: `Kepler-452b was discovered on July 23, 2015, by NASA's Kepler Space Telescope, and the announcement created worldwide excitement in the scientific community and media. The discovery was the result of analyzing data from Kepler's primary mission, which monitored over 150,000 stars simultaneously, looking for the tiny dips in brightness that occur when a planet passes in front of its star.

The Kepler team had to observe three complete transits of Kepler-452b across its star to confirm the discovery—a process that took nearly three years because of the planet's 385-day orbital period. Each transit caused the star's brightness to dim by less than 0.01%, requiring extremely precise measurements and careful analysis to distinguish from other phenomena like starspots or instrumental noise.

What made this discovery particularly special was the combination of factors: an Earth-sized planet, orbiting in the habitable zone, around a Sun-like star, with a year-length similar to Earth's. Dr. Jon Jenkins, Kepler data analysis lead, called it "the closest twin to Earth, or the Earth 2.0" that had been found at the time.

The discovery demonstrated the power of the transit method and showed that Earth-like planets orbiting Sun-like stars are not rare in our galaxy. It gave scientists hope that truly habitable worlds might be common throughout the universe.`,

    scientificSignificance: `Kepler-452b holds immense scientific significance for several reasons:

**1. Earth-Sun Analog**: It's the first near-Earth-size planet discovered in the habitable zone of a G-type star (like our Sun). Most previous habitable zone planets orbited smaller, cooler M-dwarf stars, making Kepler-452b a better analog for Earth's situation.

**2. Extended Habitability**: Having spent 6 billion years in the habitable zone, Kepler-452b represents a "future Earth" scenario. Studying this system helps scientists understand what Earth might become as our Sun ages and brightens over the next billion years.

**3. Super-Earth Characteristics**: As a super-Earth, Kepler-452b helps scientists understand how planets transition from Earth-like rocky worlds to Neptune-like gas planets. This "radius gap" is crucial for understanding planetary formation and evolution.

**4. Biosignature Potential**: If we develop technology to analyze its atmosphere (like the proposed LUVOIR or HabEx space telescopes), Kepler-452b would be a prime target for searching for biosignatures—chemical signs of life like oxygen, methane, or industrial pollutants.

**5. Statistical Implications**: The discovery of Kepler-452b, combined with other Kepler findings, suggests there could be billions of Earth-like planets in habitable zones throughout our galaxy. This has profound implications for the search for extraterrestrial life and humanity's place in the universe.`,

    comparisonToEarth: `**Size**: Kepler-452b is about 60% larger in diameter than Earth, making it a "super-Earth." If you could stand on its surface, the horizon would appear farther away than on Earth.

**Mass & Gravity**: With approximately 5 times Earth's mass, surface gravity would be about twice as strong. A 150-pound person on Earth would weigh about 300 pounds on Kepler-452b. This would make jumping, climbing, and even walking significantly more difficult.

**Year Length**: At 385 days, a year on Kepler-452b is remarkably similar to Earth's 365 days. The seasons would follow a familiar pattern, though they might be more extreme due to the planet's larger size and different axial tilt.

**Temperature**: Receiving about 10% more energy from its star than Earth gets from the Sun, Kepler-452b might be slightly warmer. However, this depends heavily on its atmosphere and cloud cover. It could range from Earth-like to more like a warmer, steamier version of our planet.

**Age**: The Kepler-452 system is about 6 billion years old, compared to our Solar System's 4.6 billion years. This means Kepler-452b has had 1.5 billion more years for life to potentially develop and evolve.

**Star**: Kepler-452 is a G2-type star like our Sun, but 20% brighter and 1.5 billion years older. This makes it one of the most Sun-like stars known to host a potentially habitable planet.`,

    funFacts: [
      "If you could travel at the speed of light, it would still take 1,400 years to reach Kepler-452b—meaning a message sent there today wouldn't arrive until the year 3425!",
      "Kepler-452b has been in its star's habitable zone for 6 billion years, giving life 1.5 billion more years to develop than on Earth. If intelligent life exists there, it could be far more advanced than humanity.",
      "The planet's stronger gravity means that mountains on Kepler-452b would be shorter and broader than Earth's mountains. Mount Everest-sized peaks would be impossible due to the increased gravitational stress on rock.",
      "A day on Kepler-452b might be similar in length to Earth's 24-hour day, though we haven't measured it yet. The planet's rotation rate depends on its formation history and tidal interactions with its star.",
      "Kepler-452b was discovered by detecting a brightness dip of less than 0.01% when it passed in front of its star—equivalent to detecting a flea crawling across a car headlight from several miles away!",
      "If Kepler-452b has oceans, they would likely be deeper than Earth's due to the stronger gravity pulling water down and the planet's potentially greater water content.",
      "The discovery of Kepler-452b made headlines worldwide and was featured on the cover of major newspapers. NASA's announcement press conference was watched by millions of people around the globe.",
    ],

    educationalNotes: `**For Teachers**: Kepler-452b is an excellent case study for discussing the habitable zone concept, the transit method of planet detection, and the characteristics that make a planet potentially habitable. Students can calculate how much they would weigh on Kepler-452b, discuss how the stronger gravity would affect daily life, and debate whether humans could ever colonize such a world.

**Discussion Questions**: 
- How would life adapt to twice Earth's gravity? What would plants and animals look like?
- If we could send a message to Kepler-452b, what would you say to any potential inhabitants?
- How does Kepler-452b's extra 1.5 billion years in the habitable zone change the possibility of finding advanced life there?
- What technologies would we need to develop to actually visit Kepler-452b?

**NGSS Alignment**: This planet connects to MS-ESS1-3 (scale properties of solar system objects), HS-ESS1-4 (orbital motion), and HS-ESS1-6 (evidence about the universe's origin and evolution).`,
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
    detailedDescription: `Proxima Centauri b holds a special place in exoplanet science as the closest known exoplanet to Earth, orbiting our nearest stellar neighbor at just 4.24 light-years away. This proximity makes it humanity's most likely first target for interstellar exploration—if we ever develop the technology to travel between stars.

Discovered in 2016 after years of careful observation, Proxima Centauri b orbits a red dwarf star much smaller and cooler than our Sun. The planet completes one orbit every 11.2 days, meaning a "year" there lasts less than two Earth weeks. Despite this close orbit, the planet receives about the same amount of energy from its dim red star as Earth receives from the Sun, placing it squarely in the habitable zone where liquid water could exist.

However, life on Proxima Centauri b would face unique challenges. Red dwarf stars are known for violent stellar flares—massive eruptions of radiation and charged particles that could strip away a planet's atmosphere and bombard its surface with harmful radiation. Proxima Centauri is particularly active, producing flares that increase its brightness by up to 68% and could make the planet's surface inhospitable to life as we know it.

Despite these challenges, Proxima Centauri b remains one of the most intriguing targets in the search for extraterrestrial life, and its proximity means we might be able to study it in unprecedented detail with future telescopes.`,

    atmosphere: `The question of whether Proxima Centauri b has an atmosphere is one of the most important and debated topics in exoplanet science. The planet's close proximity to its host star and the star's frequent, powerful flares create a hostile environment that could have stripped away any atmosphere billions of years ago.

**The Challenge**: Red dwarf stars like Proxima Centauri are extremely active when young, producing intense X-ray and ultraviolet radiation along with powerful stellar flares. These flares can be 10-100 times more energetic than the largest solar flares from our Sun. Over billions of years, this radiation could have eroded any primordial atmosphere the planet once had, leaving behind a barren, Mars-like world.

**Possible Scenarios**:

1. **No Atmosphere**: The planet could be airless, with its atmosphere completely stripped away by stellar activity. In this case, the surface would be exposed to harsh radiation and extreme temperature swings.

2. **Thin Atmosphere**: The planet might retain a thin atmosphere of heavier gases like carbon dioxide or nitrogen, similar to Mars. This would provide some protection but not enough for Earth-like conditions.

3. **Thick Atmosphere**: If the planet has strong volcanic activity or started with a massive atmosphere, it might have retained a thick, protective atmosphere despite the stellar bombardment. This atmosphere could be rich in carbon dioxide, creating a greenhouse effect that keeps the surface warm.

4. **Magnetic Field Protection**: If Proxima Centauri b has a strong magnetic field (generated by a molten iron core), it could deflect much of the stellar wind and radiation, protecting its atmosphere like Earth's magnetic field protects us.

Recent studies suggest that if the planet has a magnetic field and ongoing volcanic activity to replenish atmospheric gases, it could maintain a habitable atmosphere despite the stellar flares.`,

    composition: `Proxima Centauri b is classified as a terrestrial (rocky) planet with a mass about 1.27 times that of Earth. Based on its mass and estimated radius, scientists believe it has a composition similar to Earth's, with an iron-nickel core, a silicate mantle, and a rocky crust.

**Internal Structure**: The planet's slightly higher mass suggests it might have a larger iron core than Earth, which could generate a stronger magnetic field—crucial for protecting against stellar radiation. The mantle would be composed of silicate rocks rich in iron and magnesium, similar to Earth's mantle.

**Surface Composition**: If the planet has been geologically active, its surface might feature volcanic rocks like basalt, similar to Earth's oceanic crust. The intense stellar radiation could have altered surface minerals over billions of years, potentially creating unique chemical compounds not found on Earth.

**Water Content**: One of the biggest questions is whether Proxima Centauri b has water. If it formed farther from its star and migrated inward, it could have retained significant water ice that later melted. Alternatively, water could have been delivered by comets and asteroids. If liquid water exists, it would likely be in the form of subsurface oceans or polar ice caps, protected from the harsh stellar radiation.

**Tidal Locking**: Due to its close orbit, Proxima Centauri b is almost certainly tidally locked, meaning one side always faces the star (like the Moon always shows the same face to Earth). This creates extreme temperature differences between the day side (potentially hot enough to vaporize water) and the night side (cold enough to freeze carbon dioxide). The most habitable region would be the "terminator zone"—the twilight band between eternal day and eternal night.`,

    surfaceFeatures: `The surface of Proxima Centauri b would be unlike anything on Earth, shaped by its unique orbital characteristics and the harsh radiation environment of its red dwarf star.

**Tidal Locking Effects**: With one side permanently facing the star and the other in eternal darkness, the planet would have three distinct regions:

1. **The Day Side**: Bathed in constant red light from Proxima Centauri, this hemisphere would experience extreme heat. If the planet has an atmosphere, powerful winds would blow from the hot day side toward the cold night side. The landscape might feature vast deserts of red-tinted sand and rock, baked by the unrelenting stellar radiation.

2. **The Night Side**: In perpetual darkness, this hemisphere would be frozen, with temperatures potentially dropping to -100°C or lower. Ice sheets and frozen carbon dioxide (dry ice) could cover the surface. However, if the planet has a thick atmosphere, heat transfer might keep even the night side above freezing.

3. **The Terminator Zone**: The most interesting region would be the twilight band between day and night. Here, the star would hang perpetually on the horizon, creating a ring of potentially habitable conditions around the planet. This is where liquid water could exist, and where life—if it exists—would most likely be found.

**Geological Features**: If Proxima Centauri b is geologically active, it might have:
- Volcanic regions, possibly concentrated on the day side where tidal heating is strongest
- Impact craters from asteroid and comet collisions, preserved on the cold night side
- Possible cryovolcanoes on the night side, erupting water and ammonia instead of molten rock
- Tidal bulges—permanent deformations caused by the star's gravity

**Red Sky**: If you could stand on Proxima Centauri b's surface, the sky would appear deep red or orange due to the star's cool temperature. The star itself would appear about three times larger than the Sun appears from Earth, dominating the day side sky.`,

    discoveryStory: `The discovery of Proxima Centauri b in 2016 was the culmination of years of patient observation and represented a major milestone in exoplanet science—finding a potentially habitable planet around our nearest stellar neighbor.

**The Search**: Astronomers had long suspected that Proxima Centauri might host planets, but detecting them was extremely challenging. The star is small and dim, and any planets would be too faint to see directly. The team, led by Guillem Anglada-Escudé at Queen Mary University of London, used the radial velocity method, which detects planets by measuring the tiny wobble they cause in their star's motion.

**The Pale Red Dot Campaign**: In 2016, astronomers launched a focused observing campaign called "Pale Red Dot" (a reference to Carl Sagan's "Pale Blue Dot"). Using the HARPS spectrograph at the European Southern Observatory in Chile, they observed Proxima Centauri nearly every night for several months, looking for the telltale wobble of a planet.

**The Detection**: The data revealed a subtle pattern—Proxima Centauri was moving toward and away from Earth by about 5 kilometers per hour (walking speed) every 11.2 days. This wobble indicated a planet with at least 1.27 Earth masses orbiting in the habitable zone.

**The Announcement**: The discovery was announced on August 24, 2016, and made headlines worldwide. Scientists and the public were thrilled by the possibility of a potentially habitable world so close to Earth. The discovery sparked immediate discussions about future missions to study the planet and even speculative plans for interstellar probes.

**Confirmation**: Since the initial discovery, additional observations have confirmed the planet's existence and refined its properties. In 2020, astronomers announced possible evidence of a second planet in the system, though this remains unconfirmed.`,

    scientificSignificance: `Proxima Centauri b is scientifically significant for numerous reasons:

**1. Closest Exoplanet**: At just 4.24 light-years away, it's the closest known exoplanet to Earth. This proximity makes it the most accessible target for detailed study and potential future exploration.

**2. Interstellar Mission Target**: The Breakthrough Starshot initiative has proposed sending tiny laser-propelled spacecraft to Proxima Centauri at 20% the speed of light, which could reach the system in about 20 years. Proxima Centauri b would be the primary target for such a mission.

**3. Red Dwarf Habitability**: About 75% of stars in our galaxy are red dwarfs like Proxima Centauri. Understanding whether planets around these stars can be habitable is crucial for assessing how common life might be in the universe.

**4. Atmospheric Studies**: Future telescopes like the Extremely Large Telescope (ELT) and space-based observatories might be able to directly image Proxima Centauri b and analyze its atmosphere for biosignatures. Its proximity makes this more feasible than for any other potentially habitable exoplanet.

**5. Tidal Locking Research**: The planet provides a natural laboratory for studying tidally locked worlds, which are common around red dwarfs. Understanding how atmospheres and climates work on such worlds is important for exoplanet science.

**6. Stellar Activity Impact**: Proxima Centauri b helps scientists understand how stellar flares and radiation affect planetary habitability—knowledge that applies to billions of planets throughout the galaxy.`,

    comparisonToEarth: `**Distance**: At 4.24 light-years, Proxima Centauri b is our closest exoplanet neighbor. However, this is still incredibly far—about 40 trillion kilometers. With current technology, it would take tens of thousands of years to reach it.

**Size & Mass**: Proxima Centauri b is slightly larger and more massive than Earth (1.27 Earth masses, ~1.1 Earth radii). Surface gravity would be about 10-15% stronger than Earth's—noticeable but not dramatically different.

**Orbit**: The planet orbits its star every 11.2 days compared to Earth's 365 days. However, because Proxima Centauri is much dimmer than the Sun, the planet must orbit much closer to receive similar amounts of energy.

**Temperature**: Despite being in the habitable zone, Proxima Centauri b's temperature distribution would be completely different from Earth's due to tidal locking. Instead of day-night cycles and seasons, it would have permanent day and night sides with extreme temperature differences.

**Star**: Proxima Centauri is a red dwarf—much smaller (1/7 the diameter), cooler (3,000K vs 5,800K), and dimmer (0.17% the luminosity) than our Sun. The star's red light would make photosynthesis work differently than on Earth.

**Radiation Environment**: Proxima Centauri produces powerful flares that could increase its brightness by 68% and bombard the planet with harmful X-rays and ultraviolet radiation—far more extreme than anything Earth experiences.

**Day-Night Cycle**: Earth has a 24-hour day-night cycle. Proxima Centauri b is tidally locked, so one side experiences eternal day and the other eternal night—no sunrises or sunsets.`,

    funFacts: [
      "Proxima Centauri b is so close that if you could travel at 1% the speed of light (still far beyond our current capabilities), you could reach it in about 424 years—within the span of a few human generations!",
      "The Breakthrough Starshot project proposes sending tiny spacecraft to Proxima Centauri at 20% light speed using powerful lasers. These probes could reach the system in about 20 years and send back pictures of the planet!",
      "If you stood on Proxima Centauri b's day side, the star would appear about 3 times larger than the Sun appears from Earth, but it would glow deep red instead of yellow-white.",
      "A 'year' on Proxima Centauri b lasts just 11.2 days. You would celebrate your birthday every week and a half!",
      "The planet is tidally locked, meaning if you lived on the day side, you would never see the star set. If you lived on the night side, you would never see it rise. Only on the terminator zone would you see the star perpetually on the horizon.",
      "Proxima Centauri's flares are so powerful that they could increase the star's brightness by 68% in just minutes—imagine the Sun suddenly becoming almost twice as bright!",
      "If Proxima Centauri b has plant life, it would likely be black or dark red instead of green, optimized to absorb the red light from its star rather than Earth's yellow sunlight.",
      "The discovery of Proxima Centauri b was announced exactly 24 years after the discovery of the first exoplanet around a Sun-like star (51 Pegasi b in 1995).",
    ],

    educationalNotes: `**For Teachers**: Proxima Centauri b is perfect for discussing tidal locking, stellar activity, and the challenges of habitability around red dwarf stars. Students can explore how life might adapt to eternal day or night, calculate travel times at different speeds, and debate whether humans should attempt to send probes to the system.

**Discussion Questions**:
- How would life adapt to a tidally locked world with one side always facing the star?
- What color would plants be on Proxima Centauri b, and why?
- If we sent a probe to Proxima Centauri b traveling at 1% the speed of light, how long would it take to arrive? What about at 10% or 20% light speed?
- Should humanity invest in sending probes to Proxima Centauri b, even if it takes decades to get there and decades more to receive the data?
- How would you design a habitat to protect humans from the intense stellar flares?

**NGSS Alignment**: Connects to MS-ESS1-3 (scale and properties), HS-ESS1-4 (orbital motion and gravity), and HS-ESS1-2 (Earth's place in the universe). Also excellent for discussing the nature of scientific evidence and the challenges of studying distant worlds.

**Activities**: Students can calculate distances in light-years, model tidal locking with a ball and lamp, research the Breakthrough Starshot project, or design a mission to study Proxima Centauri b's atmosphere.`,
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
    detailedDescription: `Arrakis, also known as Dune, is perhaps the most famous fictional planet in science fiction literature. Created by Frank Herbert for his 1965 novel "Dune," Arrakis is a harsh desert world that serves as the sole source of melange, or "the spice"—the most valuable substance in the universe. The planet's extreme environment, unique ecology, and the adaptations of its native Fremen people make it a fascinating case study in planetary science, ecology, and human adaptation.

Located in the Canopus system, Arrakis is the third planet orbiting the bright star Canopus. The planet's surface is almost entirely covered in sand dunes, with no visible bodies of water. Daytime temperatures can exceed 70°C (158°F), while nights can drop below freezing. The planet's lack of precipitation and extreme aridity make it one of the most hostile environments imaginable—yet it supports a complex ecosystem centered around the giant sandworms that produce the spice.

What makes Arrakis scientifically interesting is how Herbert grounded his fictional world in real ecological and geological principles. The planet's water scarcity drives every aspect of its ecology and human culture, from the water-recycling stillsuits worn by the Fremen to the complex relationship between sandworms, sand plankton, and spice production. The novel explores themes of resource scarcity, environmental adaptation, and the consequences of exploiting a planet's natural resources—themes that remain relevant to Earth's environmental challenges today.`,

    atmosphere: `Arrakis has a thin, dry atmosphere composed primarily of nitrogen and oxygen, similar to Earth's composition but with virtually no water vapor. The atmospheric pressure is lower than Earth's, roughly equivalent to being at high altitude on Earth (around 3,000-4,000 meters elevation).

**Key Atmospheric Characteristics**:

**Extreme Dryness**: The most defining feature of Arrakis's atmosphere is its extreme aridity. The relative humidity is nearly zero, and precipitation is virtually nonexistent. Any moisture in the atmosphere is quickly absorbed by the sand or consumed by the planet's unique ecology.

**Dust and Sand**: The atmosphere frequently carries fine sand particles, creating dust storms that can last for days or weeks. These storms, called "Coriolis storms" in the novels, can be powerful enough to scour flesh from bone and are one of the planet's greatest dangers. The suspended sand gives the sky a yellowish or orange tint.

**Temperature Extremes**: Without water vapor to moderate temperatures, Arrakis experiences extreme temperature swings between day and night. The thin atmosphere provides little insulation, causing rapid heat loss after sunset.

**Oxygen Content**: Despite the harsh conditions, the atmosphere contains sufficient oxygen for humans to breathe without assistance. This oxygen is produced by the planet's unique ecosystem, particularly by sand plankton and other microscopic organisms in the sand.

**Spice in the Air**: In regions with active spice production, melange particles can be suspended in the atmosphere, giving the air a cinnamon-like scent and causing the eyes of long-term inhabitants to turn blue (the "Eyes of Ibad").`,

    composition: `Arrakis is a rocky terrestrial planet with a composition similar to Earth's, but with crucial differences that explain its extreme aridity:

**Geological Structure**: The planet has an iron-nickel core, a silicate mantle, and a crust composed primarily of silicon-based minerals and sand. However, unlike Earth, Arrakis has very little water locked in its crust or mantle. The planet's water was either lost early in its history or is trapped deep underground, inaccessible to surface life.

**The Deep Desert**: Beneath the sand dunes lies bedrock and, in some regions, ancient rock formations and caves. The Fremen have discovered and inhabited many of these caves, creating hidden communities called "sietches." Some deep caverns contain traces of ancient water, suggesting Arrakis was once wetter.

**Sand Composition**: The sand covering Arrakis is primarily silicon dioxide (quartz), similar to Earth's desert sand, but also contains traces of spice and the remains of countless generations of sand plankton and other microscopic organisms. The sand is extremely fine and can penetrate almost any seal or barrier.

**Spice Deposits**: Melange is produced through a complex biological process involving sandworms and their lifecycle. The spice is found in "spice blows"—explosive releases of spice from deep underground when a sandworm dies or when pre-spice mass is exposed to water. These deposits are the focus of intense mining operations.

**Polar Regions**: Arrakis has polar ice caps, but they are composed primarily of frozen carbon dioxide (dry ice) rather than water ice. Any water ice present is buried deep beneath the dry ice and sand.`,

    surfaceFeatures: `The surface of Arrakis is dominated by vast sand dunes, but the planet has more geological diversity than initially apparent:

**The Great Erg**: Most of Arrakis's surface is covered by enormous sand seas called ergs. These dunes can reach heights of several hundred meters and shift constantly due to wind patterns. The largest dunes are home to the biggest sandworms, which can grow to over 400 meters in length.

**Rock Outcroppings**: Scattered across the desert are exposed rock formations—remnants of ancient mountains worn down by eons of wind erosion. These "shield walls" and rock formations provide shelter from storms and are often sites of Fremen settlements.

**The Polar Regions**: The north and south poles of Arrakis are covered in ice caps, though these are primarily frozen carbon dioxide. The polar regions are slightly more hospitable than the equatorial deserts, with lower temperatures and occasional frost.

**Spice Fields**: Areas where spice has been exposed by natural processes or mining operations appear as orange or cinnamon-colored patches on the sand. These regions attract sandworms and are extremely dangerous.

**Ancient Structures**: Scattered across Arrakis are ruins of ancient civilizations that inhabited the planet before it became a desert. These include the remains of cities, water processing facilities, and mysterious structures whose purpose has been lost to time.

**Wind Traps**: The Fremen have constructed ingenious devices called wind traps that extract moisture from the air through temperature differential. These structures are vital for survival and are carefully hidden from off-world exploiters.

**The False Horizon**: Due to heat shimmer and atmospheric distortion, the horizon on Arrakis often appears wavy and indistinct, making navigation difficult without specialized equipment or Fremen training.`,

    story: `The story of Arrakis is central to Frank Herbert's "Dune" saga and explores themes of ecology, politics, religion, and human adaptation:

**The Spice Melange**: Arrakis is the only known source of melange, a substance that extends life, enhances mental abilities, and is essential for space travel (it allows Navigators to fold space). This makes Arrakis the most strategically important planet in the universe, and control of the spice trade means control of civilization itself.

**The Fremen**: The native inhabitants of Arrakis are the Fremen, a desert people who have adapted to the planet's harsh conditions over thousands of years. They wear stillsuits—full-body garments that recycle all body moisture, allowing them to survive in the deep desert. Fremen culture revolves around water conservation; spitting is a sign of respect (wasting water for another), and the water in a dead person's body is extracted and added to the tribe's reserves.

**The Sandworms**: The giant sandworms (Shai-Hulud to the Fremen) are the apex predators and ecosystem engineers of Arrakis. They can grow to over 400 meters long and live for thousands of years. The sandworms are attracted to rhythmic vibrations and will attack anything that produces them. The Fremen have learned to ride sandworms, using them for transportation across the desert.

**Ecological Transformation**: A central plot point in the Dune series is the Fremen's secret plan to terraform Arrakis, gradually introducing water and plant life to transform it into a green world. However, this transformation would destroy the sandworms and end spice production, creating a profound ecological and economic dilemma.

**Paul Atreides**: The protagonist of the first novel, Paul Atreides, comes to Arrakis when his family is given control of the planet. After his family is betrayed, Paul joins the Fremen and eventually leads them in a rebellion that changes the fate of the entire universe. His deep understanding of ecology and his ability to see the future make him a messianic figure.

**Political Intrigue**: Control of Arrakis shifts between noble houses, with the Emperor, the Spacing Guild, and various factions all vying for influence. The planet becomes a focal point for political machinations that span the galaxy.`,

    scientificSignificance: `While Arrakis is fictional, it offers valuable insights for real planetary science and ecology:

**1. Extreme Environment Adaptation**: Arrakis demonstrates how life might adapt to extreme water scarcity. The Fremen's stillsuits and water discipline, while fictional, are based on real principles of water conservation and could inspire technologies for Earth's deserts or future Mars colonies.

**2. Ecosystem Interdependence**: Herbert created a complex, believable ecosystem where every element depends on others—sandworms, sand plankton, spice, and even the Fremen are all interconnected. This illustrates ecological principles that apply to real-world ecosystems.

**3. Terraforming Ethics**: The Fremen's plan to terraform Arrakis raises important questions about planetary engineering: Should we transform other worlds to suit our needs? What are the consequences of destroying an existing ecosystem, even a harsh one? These questions are relevant to real discussions about terraforming Mars.

**4. Resource Economics**: The spice melange serves as a metaphor for oil and other valuable resources. Arrakis's story explores how control of a single critical resource can shape politics, economics, and warfare—lessons applicable to Earth's resource conflicts.

**5. Desert Planet Plausibility**: While Arrakis is extreme, desert planets are plausible. Scientists have identified several exoplanets that might be desert worlds, and understanding how such planets form and evolve is an active area of research.

**6. Cultural Adaptation**: The Fremen culture shows how human societies might adapt to extreme environments, developing technologies, social structures, and belief systems suited to their world. This has implications for future human colonization of harsh environments.`,

    comparisonToEarth: `**Water**: Earth's surface is 71% water; Arrakis has virtually no surface water. All of Earth's life depends on abundant water; Arrakis's life has evolved to survive with almost none.

**Climate**: Earth has diverse climates from tropical to polar; Arrakis is uniformly hot and dry, with only the poles offering any relief from the heat.

**Atmosphere**: Both planets have breathable nitrogen-oxygen atmospheres, but Earth's contains significant water vapor while Arrakis's is bone-dry.

**Ecosystem Complexity**: Earth has millions of species in complex food webs; Arrakis has a simpler ecosystem dominated by sandworms and microscopic organisms, though it's still remarkably complex for such a harsh world.

**Human Habitation**: Earth naturally supports human life; Arrakis requires extensive technology (stillsuits, wind traps, underground shelters) for humans to survive.

**Geological Activity**: Earth has active plate tectonics, volcanoes, and mountain building; Arrakis appears geologically quiet, with ancient, eroded landscapes.

**Day Length**: Arrakis has a 23.3-hour day, very similar to Earth's 24-hour day, making adaptation easier for human colonists.

**Gravity**: Arrakis has slightly lower gravity than Earth (about 0.9g), making it easier to move and carry loads—an advantage for the Fremen in their desert travels.`,

    funFacts: [
      "Frank Herbert spent six years researching desert ecology, religion, and politics before writing 'Dune.' He was inspired by a trip to study sand dunes in Oregon.",
      "The Fremen language includes over 200 words for different types of sand and sand formations—similar to how Inuit languages have many words for snow.",
      "A Fremen stillsuit can recycle 99% of body moisture, losing only a thimbleful of water per day. In the deep desert, your body's water is literally worth its weight in gold.",
      "The largest sandworms on Arrakis can grow to over 400 meters (1,300 feet) long—longer than the Empire State Building is tall!",
      "Spice melange is described as tasting like cinnamon and having a geriatric effect—it can extend human life to 200 years or more.",
      "The Fremen practice of extracting water from the dead is called 'giving water to the tribe' and is considered a sacred duty. A human body contains about 40 liters of water.",
      "Arrakis's two moons, Krelln and Arvon, create complex tidal effects on the sand, influencing sandworm behavior and spice formation.",
      "'Dune' has been called the 'Lord of the Rings of science fiction' and has sold over 20 million copies worldwide, making it the best-selling science fiction novel of all time.",
      "The ecology of Arrakis is so detailed that Herbert created a 'Terminology of the Imperium' appendix explaining terms like 'spice,' 'stillsuit,' and 'sandworm.'",
      "Real-world scientists have used Dune as a teaching tool for ecology, discussing how Herbert's fictional ecosystem demonstrates real ecological principles.",
    ],

    educationalNotes: `**For Teachers**: Arrakis is an excellent tool for teaching ecology, resource management, and adaptation to extreme environments. Students can compare Arrakis's ecosystem to Earth's deserts, discuss the ethics of terraforming, and explore how scarcity shapes culture and technology.

**Discussion Questions**:
- How would you design a stillsuit using real-world technology? What materials and mechanisms would you use?
- Is it ethical to terraform Arrakis if it means destroying the sandworms and ending spice production? Who should make that decision?
- How does control of a single critical resource (spice) shape politics and conflict? Can you think of real-world examples?
- What adaptations would humans need to survive on a desert planet like Arrakis? Consider physical, technological, and cultural adaptations.
- Could a planet like Arrakis actually exist? What conditions would be necessary for a world to become so dry?

**NGSS Alignment**: Connects to MS-LS2-1 (ecosystem interactions), MS-ESS3-3 (human impacts on Earth systems), HS-LS2-7 (ecosystem stability), and HS-ESS3-1 (resource availability and human activity).

**Activities**: 
- Design a water-recycling system for a desert environment
- Create an ecosystem diagram showing the relationships between sandworms, sand plankton, and spice
- Calculate how much water a human needs per day and how a stillsuit would need to function
- Compare Arrakis's ecology to real Earth deserts (Sahara, Atacama, etc.)
- Debate: Should the Fremen terraform Arrakis?
- Research real-world desert adaptations in plants, animals, and human cultures

**Cross-Curricular Connections**: Dune connects to literature (analyzing themes and characters), social studies (resource conflicts, colonialism), and ethics (environmental responsibility, cultural preservation).`,
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
