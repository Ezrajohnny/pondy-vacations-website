import Link from "next/link"
import { Phone, MessageCircle, Waves } from "lucide-react"
import { CONTACT, WHATSAPP_HREF } from "@/lib/site"

export function WhatsAppButton({
  className = "",
  label = "Chat on WhatsApp",
}: {
  className?: string
  label?: string
}) {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] ${className}`}
    >
      <MessageCircle className="size-4" aria-hidden="true" />
      {label}
    </a>
  )
}

export function CallBackButton({
  className = "",
  label = "Request a Call Back",
}: {
  className?: string
  label?: string
}) {
  return (
    <a
      href={CONTACT.phoneHref}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${className}`}
    >
      <Phone className="size-4" aria-hidden="true" />
      {label}
    </a>
  )
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="#top"
      className="flex items-center gap-2 font-heading text-lg font-extrabold tracking-tight"
    >
      <span
        className={`flex size-9 items-center justify-center rounded-full ${
          light ? "bg-white/20 text-white" : "bg-primary text-primary-foreground"
        }`}
      >
        <Waves className="size-5" aria-hidden="true" />
      </span>
      <span className={light ? "text-white" : "text-foreground"}>
        Pondy <span className="text-accent">Vacations</span>
      </span>
    </Link>
  )
}
