import React from 'react'
import { Hero, About, Pricing, Schedule, Classes, Contact, Faq, Footer } from './sections'
import FloatingWhatsApp from './components/FloatingWhatsApp' // 👈 import it

const App = () => {
  return (
    <section>
      <Hero />
      <About />
      <Pricing />
      <Schedule />
      <Classes />
      <Contact />
      <Faq />
      <Footer />

      {/* ✅ Floating WhatsApp button */}
      <FloatingWhatsApp phone="919812345678" message="Hi! I'm interested in joining your classes." />
    </section>
  )
}

export default App
