import React from 'react'
import { Hero, About, Pricing, Schedule, Classes, Contact, Faq, Footer ,Testimonial} from './sections'
import FloatingWhatsApp from './components/FloatingWhatsApp'

const App = () => {
  return (
    <section>
      <Hero />
      <About />
      <Pricing />
      <Schedule />
      <Classes />
      <Contact />
      <Testimonial/>
      <Faq />
      <Footer />
      <FloatingWhatsApp phone="919812345678" message="Hi! I'm interested in joining your classes." />
    </section>
  )
}

export default App
