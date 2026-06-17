import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Destinations } from "@/components/sections/destinations"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { EnquiryForm } from "@/components/sections/enquiry-form"
import { Testimonials } from "@/components/sections/testimonials"
import { InstagramGallery } from "@/components/sections/instagram-gallery"
import { Contact } from "@/components/sections/contact"
import { SiteFooter } from "@/components/site-footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Destinations />
        <WhyChooseUs />
        <EnquiryForm />
        <Testimonials />
        <InstagramGallery />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  )
}
