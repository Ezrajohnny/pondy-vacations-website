import Image from "next/image"
import { Ban, MapPin, MessageCircle } from "lucide-react"
import { CallBackButton, WhatsAppButton } from "@/components/cta-buttons"

const trustItems = [
  { icon: Ban, label: "No Booking Charges" },
  { icon: MapPin, label: "Local Pondicherry Experts" },
  { icon: MessageCircle, label: "WhatsApp Support" },
]

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <Image
        src="/images/hero-beach.png"
        alt="Golden-hour aerial view of a Pondicherry beach with turquoise water"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/80 via-ocean-deep/55 to-ocean-deep/85" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pb-12 pt-28 sm:px-6 sm:pt-32">
        <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
          <MapPin className="size-3.5" aria-hidden="true" />
          Pondicherry, India
        </span>

        <h1 className="max-w-3xl text-balance font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          Your perfect Pondicherry getaway, planned by locals
        </h1>

        <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
          Beachside stays, easy rides, home-cooked meals and the best of White
          Town & Auroville. We handle the details so you just enjoy the coast.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <CallBackButton />
          <WhatsAppButton />
        </div>

        <ul className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
          {trustItems.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium text-white backdrop-blur"
            >
              <Icon className="size-5 shrink-0 text-accent" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
