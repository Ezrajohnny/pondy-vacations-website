import { Phone, Mail, Camera as Instagram, MapPin } from "lucide-react"
import { CONTACT } from "@/lib/site"
import { CallBackButton, WhatsAppButton } from "@/components/cta-buttons"

const items = [
  {
    icon: Phone,
    label: "Call us",
    value: CONTACT.phone,
    href: CONTACT.phoneHref,
  },
  {
    icon: Mail,
    label: "Email us",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: CONTACT.instagram,
    href: CONTACT.instagramHref,
  },
]

export function Contact() {
  return (
    <section id="contact" className="bg-secondary/50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-ocean-deep p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="text-white">
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent">
                <MapPin className="size-4" aria-hidden="true" />
                Get in touch
              </span>
              <h2 className="mt-2 text-balance font-heading text-3xl font-bold sm:text-4xl">
                Ready to plan your Pondicherry trip?
              </h2>
              <p className="mt-4 max-w-md text-pretty leading-relaxed text-white/80">
                Reach out any way you like — call, email, WhatsApp or DM us on
                Instagram. Our local team is always happy to help.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CallBackButton />
                <WhatsAppButton />
              </div>
            </div>

            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {items.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur transition-colors hover:bg-white/20"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-wide text-white/70">
                        {label}
                      </span>
                      <span className="block truncate font-medium text-white">
                        {value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
