import Image from "next/image"
import { Ban, MapPin, MessageCircle, Star, ShieldCheck, Sparkles } from "lucide-react"
import { CallBackButton, WhatsAppButton } from "@/components/cta-buttons"

const trustItems = [
  { icon: Ban, label: "No Booking Charges" },
  { icon: ShieldCheck, label: "Professional Travel Experts" },
  { icon: MessageCircle, label: "WhatsApp Support" },
]

const subPoints = ["Professional Travel Planning", "Premium Stays", "Trusted Experiences"]

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Background image with slow cinematic zoom */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-beach.png"
          alt="Golden-hour aerial view of a Pondicherry beach with turquoise water"
          fill
          priority
          sizes="100vw"
          className="pv-hero-zoom object-cover"
        />
      </div>

      {/* Layered overlays for depth + readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ocean-deep/85 via-ocean-deep/55 to-ocean-deep/90" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_50%_-10%,transparent,oklch(0.2_0.06_245/0.45))]" />

      {/* Soft floating accent glows */}
      <div className="pv-float absolute -left-16 top-24 -z-10 hidden size-72 rounded-full bg-sunset/25 blur-3xl sm:block" />
      <div className="pv-float pv-delay-3 absolute -right-10 bottom-10 -z-10 hidden size-80 rounded-full bg-ocean/30 blur-3xl sm:block" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6 sm:pt-32">
        {/* Eyebrow / alt CTA badge */}
        <div className="pv-rise flex flex-wrap items-center gap-3">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-white shadow-lg shadow-black/10 backdrop-blur-md">
            <Sparkles className="size-3.5 text-accent" aria-hidden="true" />
            Curated by Travel Professionals
          </span>
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md">
            <Star className="size-3.5 fill-accent text-accent" aria-hidden="true" />
            4.9 / 5 from happy travellers
          </span>
        </div>

        {/* Headline */}
        <h1 className="pv-rise pv-delay-1 mt-6 max-w-3xl text-balance font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
          Your Pondicherry Vacation,{" "}
          <span className="bg-gradient-to-r from-accent via-sunset to-accent bg-clip-text text-transparent">
            Perfectly Planned
          </span>
        </h1>

        {/* Subheadline */}
        <p className="pv-rise pv-delay-2 mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 font-heading text-sm font-semibold uppercase tracking-wider text-white/90 sm:text-base">
          {subPoints.map((point, i) => (
            <span key={point} className="inline-flex items-center gap-3">
              {i > 0 && <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />}
              {point}
            </span>
          ))}
        </p>

        {/* Description */}
        <p className="pv-rise pv-delay-3 mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
          Discover the best of Pondicherry with professionally managed stays, beach
          cottages, villas, vehicle rentals, home-cooked food, and personalized travel
          assistance. We handle every detail so you can focus on enjoying your vacation.
        </p>

        {/* CTAs */}
        <div className="pv-rise pv-delay-4 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <CallBackButton className="px-6 py-3.5 text-base shadow-lg shadow-accent/30" />
          <WhatsAppButton className="px-6 py-3.5 text-base shadow-lg shadow-[#25D366]/30" />
        </div>

        {/* Glass trust card */}
        <div className="pv-rise pv-delay-5 mt-12 w-full max-w-2xl rounded-3xl border border-white/20 bg-white/10 p-2 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            {trustItems.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2.5 rounded-2xl px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/90 text-accent-foreground shadow-sm">
                  <Icon className="size-4.5" aria-hidden="true" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
