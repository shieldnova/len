import React from 'react'
import { Hero, About, Pricing, Schedule, Classes, Contact, Faq, Footer, Testimonial } from './sections'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import FloatingTopicNavigator from './components/FloatingTopicNavigator'

const App = () => {
  return (
    <section>
      <Hero />
      <About />
      <Pricing />
      <Schedule />
      <Classes />
      <Contact />
      <Testimonial />
      <Faq />
      <Footer />
      <FloatingTopicNavigator />
      <FloatingWhatsApp 
        phone="919812345678" 
        message="Hi! I'm interested in joining your classes." 
      />
    </section>
  )
}

export default App
