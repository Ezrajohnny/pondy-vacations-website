import Image from "next/image"
import { Camera as Instagram } from "lucide-react"
import { CONTACT } from "@/lib/site"

const images = [
  { src: "/images/gallery-1.png", alt: "Beach cottage interior with ocean view" },
  { src: "/images/gallery-2.png", alt: "Scooter on a colourful White Town street" },
  { src: "/images/gallery-3.png", alt: "Home-cooked South Indian meal on a banana leaf" },
  { src: "/images/gallery-4.png", alt: "Couple watching the sunset on a Pondicherry beach" },
  { src: "/images/gallery-5.png", alt: "Private villa with a swimming pool" },
  { src: "/images/gallery-6.png", alt: "Kayaking in the backwaters near Paradise Beach" },
]

export function InstagramGallery() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            From our feed
          </span>
          <h2 className="mt-2 text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Follow the journey
          </h2>
          <a
            href={CONTACT.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            <Instagram className="size-4" aria-hidden="true" />
            {CONTACT.instagram}
          </a>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {images.map((img) => (
            <li key={img.src}>
              <a
                href={CONTACT.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-xl"
              >
                <Image
                  src={img.src || "/placeholder.svg"}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-ocean-deep/0 transition-colors group-hover:bg-ocean-deep/40">
                  <Instagram
                    className="size-7 text-white opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
