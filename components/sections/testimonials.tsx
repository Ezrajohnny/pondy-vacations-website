import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Ananya & Rohit",
    location: "Bengaluru",
    quote:
      "Booked a beach cottage and a scooter through Pondy Vacations. Zero hassle, no extra charges, and they replied on WhatsApp within minutes. Our anniversary trip was perfect!",
  },
  {
    name: "Sarah M.",
    location: "London",
    quote:
      "As a solo traveller I felt completely looked after. They suggested the best time for Paradise Beach and arranged home-cooked meals. Truly local experts.",
  },
  {
    name: "The Menon Family",
    location: "Chennai",
    quote:
      "We rented a villa and a car for our family of six. Everything was exactly as promised. Will definitely book with them again on our next visit.",
  },
]

export function Testimonials() {
  return (
    <section className="bg-secondary/50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Happy guests
          </span>
          <h2 className="mt-2 text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
            What travellers say about us
          </h2>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <Quote className="size-8 text-accent/40" aria-hidden="true" />
              <div className="mt-3 flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-accent text-accent"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="mt-4 flex-1 text-pretty leading-relaxed text-card-foreground">
                {t.quote}
              </p>
              <div className="mt-5 border-t border-border pt-4">
                <p className="font-heading font-semibold text-card-foreground">
                  {t.name}
                </p>
                <p className="text-sm text-muted-foreground">{t.location}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
