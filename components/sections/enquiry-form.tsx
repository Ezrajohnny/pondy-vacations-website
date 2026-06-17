"use client"

import type React from "react"
import { useState } from "react"
import { Send, CheckCircle2 } from "lucide-react"
import { WhatsAppButton } from "@/components/cta-buttons"
import { supabase } from "@/lib/supabase"

const services = [
  "Couple Rooms",
  "Beach Cottages",
  "Villas",
  "Homestays",
  "Bike Rentals",
  "Scooter Rentals",
  "Car Rentals",
  "Home-Cooked Food",
  "Tourist Guidance",
]

export function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()

  const formData = new FormData(e.currentTarget)

  const { error } = await supabase
    .from("enquiries")
    .insert([
      {
        name: formData.get("name"),
        phone: formData.get("phone"),
        services: formData.get("service"),
        travel_dates: formData.get("dates"),
        message: formData.get("message"),
        status: "new"
      }
    ])

  if (error) {
    alert("Failed to submit enquiry")
    console.error(error)
    return
  }

  setSubmitted(true)
  e.currentTarget.reset()
}

  return (
    <section id="enquiry" className="bg-ocean-deep py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div className="text-white">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Plan your trip
          </span>
          <h2 className="mt-2 text-balance font-heading text-3xl font-bold sm:text-4xl">
            Send us a quick trip enquiry
          </h2>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-white/80">
            Tell us your dates and what you&apos;re looking for. Our local team
            will get back to you with options and pricing — with no booking
            charges, ever.
          </p>
          <div className="mt-8">
            <p className="mb-3 text-sm text-white/70">Prefer to chat instantly?</p>
            <WhatsAppButton />
          </div>
        </div>

        <div className="rounded-2xl bg-card p-6 shadow-xl sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <CheckCircle2 className="size-14 text-[#25D366]" aria-hidden="true" />
              <h3 className="mt-4 font-heading text-xl font-bold text-card-foreground">
                Thank you!
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Your enquiry has been received. Our team will reach out shortly.
                For a faster response, message us on WhatsApp.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Full name" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className={inputClass}
                  />
                </Field>
                <Field label="Phone / WhatsApp" htmlFor="phone">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 ..."
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Service needed" htmlFor="service">
                  <select id="service" name="service" className={inputClass} defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Travel dates" htmlFor="dates">
                  <input
                    id="dates"
                    name="dates"
                    type="text"
                    placeholder="e.g. 12–15 Mar"
                    className={inputClass}
                  />
                </Field>
              </div>

              <Field label="Message" htmlFor="message">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Number of guests, preferences, questions..."
                  className={inputClass}
                />
              </Field>

              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <Send className="size-4" aria-hidden="true" />
                Submit Enquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

const inputClass =
  "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-card-foreground">
        {label}
      </label>
      {children}
    </div>
  )
}
