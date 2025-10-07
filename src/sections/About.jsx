import React from 'react'
import { nit,concept,edutainment,lenka,stat } from '../assets/images'

const About = () => {
  return (
    <section className='relative py-20 px-6'>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-brandColorOne via-brandColorTwo to-brandColorThree bg-clip-text text-transparent">
              Who is Lenka Sir?
            </h2>
            <p className="mt-2 max-w-3xl mx-auto text-gray-500">
              The viral teacher with millions of views, a unique style that blends education + entertainment, and a proven record of helping students crack exams with confidence.
            </p>
            <div className="grid gap-8 md:grid-cols-3 mt-12">
          <div className="text-center transform transition duration-500 hover:scale-110 hover:translate-y-2">
            <img
              src={lenka}
              className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-brandColorTwo shadow-lg"
              alt="Arjun Mehta"
            />
            <h3 className="mt-4 text-xl font-semibold text-brandColorTwo">Viral Educator</h3>
            <p className="text-gray-800">Makes tough JEE & Board topics easy and memorable.</p>
          </div>

          <div className="text-center transform transition duration-500 hover:scale-110 hover:translate-y-2">
            <img
              src={stat}
              className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-brandColorTwo shadow-lg"
              alt="Neha Sharma"
            />
            <h3 className="mt-4 text-xl font-semibold text-brandColorTwo">Millions of Views</h3>
            <p className="text-gray-800">Learners across India follow his high-energy concept explainers.</p>
          </div>

          <div className="text-center transform transition duration-500 hover:scale-110 hover:translate-y-2">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1122&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-brandColorTwo shadow-lg"
              alt="Ravi Singh"
            />
            <h3 className="mt-4 text-xl font-semibold text-brandColorTwo">Ex-Aakash EM Faculty</h3>
            <p className="text-gray-800">Trained thousands at a top coaching institute.</p>
          </div>
          <div className="text-center transform transition duration-500 hover:scale-110 hover:translate-y-2">
            <img
              src={nit}
              className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-brandColorTwo shadow-lg"
              alt="Ravi Singh"
            />
            <h3 className="mt-4 text-xl font-semibold text-brandColorTwo">NIT Bhopal Graduate</h3>
            <p className="text-gray-800">Strong foundation + classroom expertise = outcomes.</p>
          </div>
          <div className="text-center transform transition duration-500 hover:scale-110 hover:translate-y-2">
            <img
              src={concept}
              className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-brandColorTwo shadow-lg"
              alt="Ravi Singh"
            />
            <h3 className="mt-4 text-xl font-semibold text-brandColorTwo">Concept-First</h3>
            <p className="text-gray-800">Analogies, shortcuts & problem frameworks that stick.</p>
          </div>
          <div className="text-center transform transition duration-500 hover:scale-110 hover:translate-y-2">
            <img
              src={edutainment}
              className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-brandColorTwo shadow-lg"
              alt="Ravi Singh"
            />
            <h3 className="mt-4 text-xl font-semibold text-brandColorTwo"> Edutainment</h3>
            <p className="text-gray-800">You won’t want to skip class.</p>
          </div>                    
        </div>
        </div>
    </section>

  )
}

export default About