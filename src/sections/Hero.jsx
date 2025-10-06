import React from 'react'
import Nav from '../components/Nav'
import { waves } from '../assets/images'

const Hero = () => {
  return (
    <section className=" bg-[url('/hero.png')] bg-cover bg-center bg-no-repeat overflow-hidden">
      <Nav />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="items-center mt-10">
          <p className="text-gray-600 font-semibold uppercase tracking-wide text-sm">
            Admissions open • 100% online
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Lenka Sir's
            <br />
            <span className="bg-gradient-to-r from-brandColorOne via-brandColorTwo to-brandColorThree bg-clip-text text-transparent">
              Lenka Academy
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-lg">
            Live & recorded learning for Class 9–12 & JEE Dropper. Choose your
            mode. Recordings + Weekly Tests + DPP included in every plan.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <a
              href="#"
              className="px-6 py-3 rounded-full bg-[#f837c4] text-white font-medium hover:bg-[#b40184]"
            >
              Book a Free Demo
            </a>
            <a
              href="#"
              className="px-6 py-3 rounded-full border border-[#f837c4] text-[#f837c4] font-medium hover:bg-[#f837c4] hover:text-white"
            >
              See Modules
            </a>
          </div>

          {/* Features */}
          <div className="mt-18 flex gap-8  items-center text-center">
            <div className="bg-gray-100 rounded-xl shadow-md p-4">
              <h3 className="font-medium text-xl">Online</h3>
              <p className="text-gray-600 text-sm">Learn Anywhere</p>
            </div>
            <div className="bg-gray-100 rounded-xl shadow-md p-4">
              <h3 className="font-medium text-xl">Clarity</h3>
              <p className="text-gray-600 text-sm">Concept-first Teaching</p>
            </div>
            <div className="bg-gray-100 rounded-xl shadow-md p-4">
              <h3 className="font-medium text-xl">Support</h3>
              <p className="text-gray-600 text-sm">Recordings + DPP</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero
