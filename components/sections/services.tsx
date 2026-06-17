import {
  Heart,
  TreePalm,
  Home,
  House,
  Bike,
  Truck,
  Car,
  UtensilsCrossed,
  Compass,
} from "lucide-react"

const services = [
  { icon: Heart, title: "Couple Rooms", desc: "Cozy, private rooms perfect for romantic coastal escapes." },
  { icon: TreePalm, title: "Beach Cottages", desc: "Wake up to the waves in charming cottages by the sea." },
  { icon: Home, title: "Villas", desc: "Spacious private villas with pools for families and groups." },
  { icon: House, title: "Homestays", desc: "Comfortable, professionally managed stays with warm hospitality." },
  { icon: Bike, title: "Bike Rentals", desc: "Reliable motorbikes to explore the coast at your pace." },
  { icon: Truck, title: "Scooter Rentals", desc: "Easy, breezy scooters for zipping around White Town." },
  { icon: Car, title: "Car Rentals", desc: "Comfortable cars with or without a driver for day trips." },
  { icon: UtensilsCrossed, title: "Home-Cooked Food", desc: "Fresh, homely South Indian meals delivered to your stay." },
  { icon: Compass, title: "Tourist Guidance", desc: "Professional assistance to plan routes, spots and hidden gems." },
]

export function Services() {
  return (
    <section id="services" className="relative isolate overflow-hidden py-20 sm:py-28">
      {/* Parallax coastal background */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-fixed bg-center"
        style={{ backgroundImage: "url('/images/serenity-beach.png')" }}
        aria-hidden="true"
      />
      {/* Dark + ocean gradient overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ocean-deep/92 via-ocean-deep/80 to-ocean-deep/92" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(100%_60%_at_50%_0%,oklch(0.55_0.13_235/0.35),transparent)]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md">
            What we offer
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
            A full-service vacation, handled end to end
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-white/80">
            From where you sleep to how you ride and what you eat — our travel
            professionals put it all together so your Pondicherry holiday is effortless.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <li
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-6 shadow-xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-white/30 hover:bg-white/15 hover:shadow-2xl"
            >
              {/* Sheen on hover */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-sunset text-accent-foreground shadow-lg shadow-accent/30 transition-transform duration-300 group-hover:scale-110">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
