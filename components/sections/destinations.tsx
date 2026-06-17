import Image from "next/image"
import { MapPin } from "lucide-react"

const destinations = [
  {
    name: "Paradise Beach",
    img: "/images/paradise-beach.png",
    desc: "Reached by a short boat ride — soft white sand and calm turquoise water.",
  },
  {
    name: "Rock Beach",
    img: "/images/rock-beach.png",
    desc: "The iconic seafront promenade, best enjoyed at sunrise.",
  },
  {
    name: "Serenity Beach",
    img: "/images/serenity-beach.png",
    desc: "A laid-back surf spot with golden sand and gentle waves.",
  },
  {
    name: "White Town",
    img: "/images/white-town.png",
    desc: "French colonial streets, cafés and colourful heritage villas.",
  },
  {
    name: "Auroville",
    img: "/images/auroville.png",
    desc: "The peaceful experimental township and the golden Matrimandir.",
  },
]

export function Destinations() {
  return (
    <section id="destinations" className="bg-secondary/50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Where to go
          </span>
          <h2 className="mt-2 text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Popular destinations
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            The spots our guests love most — we&apos;ll help you reach every one.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d, i) => (
            <article
              key={d.name}
              className={`group relative overflow-hidden rounded-2xl ${
                i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={d.img || "/placeholder.svg"}
                  alt={`${d.name} in Pondicherry`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/85 via-ocean-deep/20 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="flex items-center gap-1.5 font-heading text-xl font-bold text-white">
                  <MapPin className="size-4 text-accent" aria-hidden="true" />
                  {d.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/85">
                  {d.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
