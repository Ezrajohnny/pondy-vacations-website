import { BadgeIndianRupee, Users, Clock, ShieldCheck } from "lucide-react"
import { CallBackButton, WhatsAppButton } from "@/components/cta-buttons"

const reasons = [
  {
    icon: BadgeIndianRupee,
    title: "No Booking Charges",
    desc: "The price we quote is the price you pay — zero hidden fees or commissions.",
  },
  {
    icon: Users,
    title: "Local Pondicherry Experts",
    desc: "Born-and-raised locals who know the best stays, routes and timings.",
  },
  {
    icon: Clock,
    title: "Quick WhatsApp Support",
    desc: "Message us anytime and get fast, friendly answers before and during your trip.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted & Transparent",
    desc: "Verified stays, fair pricing and honest guidance for a worry-free holiday.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-background py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Why choose us
          </span>
          <h2 className="mt-2 text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Local know-how, no booking charges
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Pondy Vacations is run by locals who genuinely love this town. We
            connect you directly with the right stays and rides — so you get the
            real Pondicherry without the markups or the guesswork.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallBackButton />
            <WhatsAppButton />
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <li
              key={title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-heading text-base font-semibold text-card-foreground">
                {title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
