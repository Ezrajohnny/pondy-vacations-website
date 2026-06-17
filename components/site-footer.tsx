import Link from "next/link"
import { Phone, Mail, Camera as Instagram } from "lucide-react"
import { CONTACT, NAV_LINKS } from "@/lib/site"
import { Logo } from "@/components/cta-buttons"

const services = [
  "Couple Rooms",
  "Beach Cottages",
  "Villas",
  "Homestays",
  "Bike & Scooter Rentals",
  "Car Rentals",
  "Home-Cooked Food",
  "Tourist Guidance",
]

export function SiteFooter() {
  return (
    <footer className="bg-ocean-deep text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo light />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Your local partner for stays, rides and tours across Pondicherry.
              No booking charges, just honest help.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s} className="text-sm text-white/70">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-accent"
                >
                  <Phone className="size-4 shrink-0" aria-hidden="true" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-accent"
                >
                  <Mail className="size-4 shrink-0" aria-hidden="true" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-accent"
                >
                  <Instagram className="size-4 shrink-0" aria-hidden="true" />
                  {CONTACT.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} Pondy Vacations. All rights reserved.
          </p>
          <p className="text-sm text-white/60">Made with love in Pondicherry.</p>
        </div>
      </div>
    </footer>
  )
}
