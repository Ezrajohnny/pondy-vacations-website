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
  { icon: House, title: "Homestays", desc: "Warm local hospitality and authentic Pondicherry living." },
  { icon: Bike, title: "Bike Rentals", desc: "Reliable motorbikes to explore the coast at your pace." },
  { icon: Truck, title: "Scooter Rentals", desc: "Easy, breezy scooters for zipping around White Town." },
  { icon: Car, title: "Car Rentals", desc: "Comfortable cars with or without a driver for day trips." },
  { icon: UtensilsCrossed, title: "Home-Cooked Food", desc: "Fresh, homely South Indian meals delivered to your stay." },
  { icon: Compass, title: "Tourist Guidance", desc: "Local experts to plan routes, spots and hidden gems." },
]

export function Services() {
  return (
    <section id="services" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            What we offer
          </span>
          <h2 className="mt-2 text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Everything you need for a smooth trip
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            From where you sleep to how you ride and what you eat — we put it all
            together so your Pondicherry holiday is effortless.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <li
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold text-card-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
