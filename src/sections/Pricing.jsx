import React from 'react'

const Pricing = () => {
  return (
    <div className="flex items-center justify-center bg-gray-50 px-6 py-16">
      <div className="max-w-6xl w-full">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-brandColorOne via-brandColorTwo to-brandColorThree bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="mt-2 text-gray-500">
            Pick the style that suits you. Every plan includes Recordings, Weekly Tests & DPP.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col border border-gray-300 hover:scale-105 duration-500 transition hover:shadow-pink-200">
            <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col border border-gray-300">
              <h3 className="text-lg font-semibold text-gray-900">1. Zoom Blitz Live</h3>
              <p className="mt-4">
                <span className="text-4xl font-extrabold bg-gradient-to-r from-brandColorOne via-brandColorTwo to-brandColorThree bg-clip-text text-transparent">₹1,999</span>
                <span className="text-gray-500">/ per month</span>
              </p>
              <p className="mt-2 text-gray-500">Be there, ask live, learn fast</p>
              <button className="mt-6 w-full rounded-full border border-gray-300 px-6 py-3 text-gray-700 font-medium shadow-sm hover:bg-gradient-to-r from-brandColorOne via-brandColorTwo to-brandColorThree hover:text-white">
                Enroll
              </button>
            </div>
            <div className="mt-8">
              <h4 className="font-semibold text-gray-800 mb-4">Core features:</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckIcon /> High-energy live sessions on Zoom
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon /> Recording after class
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon /> Weekly Tests + DPP
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon /> Weekly schedule & guidance
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col relative border border-gray-300 hover:scale-105 duration-500 transition hover:shadow-pink-200">
            <span className="absolute -top-3 right-6 bg-pink-100 text-brandColorTwo text-xs font-medium px-3 py-1 rounded-full">
              Most Popular
            </span>
            <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col border border-gray-300">
              <h3 className="text-lg font-semibold text-gray-900">2. App Stream Live</h3>
              <p className="mt-4">
                <span className="text-4xl font-extrabold bg-gradient-to-r from-brandColorOne via-brandColorTwo to-brandColorThree bg-clip-text text-transparent">₹249</span>
                <span className="text-gray-500">/ per month</span>
              </p>
              <p className="mt-2 text-gray-500">Learn live inside the Lenka app.</p>
              <button className="mt-6 w-full rounded-full border border-gray-300 px-6 py-3 text-gray-700 font-medium shadow-sm hover:bg-gradient-to-r from-brandColorOne via-brandColorTwo to-brandColorThree hover:text-white">
                Enroll
              </button>
            </div>
            <div className="mt-8">
              <h4 className="font-semibold text-gray-800 mb-4">Core features:</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2"><CheckIcon /> Live classes in the app</li>
                <li className="flex items-center gap-2"><CheckIcon /> In-app recordings & notes</li>
                <li className="flex items-center gap-2"><CheckIcon /> Weekly Tests + DPP</li>
                <li className="flex items-center gap-2"><CheckIcon /> Instant notifications</li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col border border-gray-300 hover:scale-105 duration-500 transition hover:shadow-pink-200">
            <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col border border-gray-300">
              <h3 className="text-lg font-semibold text-gray-900">3. Concept Vault (Recorded)</h3>
              <p className="mt-4">
                <span className="text-4xl font-extrabold bg-gradient-to-r from-brandColorOne via-brandColorTwo to-brandColorThree bg-clip-text text-transparent">₹99</span>
                <span className="text-gray-500">/ per month</span>
              </p>
              <p className="mt-2 text-gray-500">For large-scale operations</p>
              <button className="mt-6 w-full rounded-full border border-gray-300 px-6 py-3 text-gray-700 font-medium shadow-sm hover:bg-gradient-to-r from-brandColorOne via-brandColorTwo to-brandColorThree hover:text-white">
                Enroll
              </button>
            </div>
            <div className="mt-8">
              <h4 className="font-semibold text-gray-800 mb-4">Core features:</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2"><CheckIcon /> Structured chapter playlists</li>
                <li className="flex items-center gap-2"><CheckIcon /> Weekly Tests + DPP mapped to videos</li>
                <li className="flex items-center gap-2"><CheckIcon /> Regular content updates</li>
                <li className="flex items-center gap-2"><CheckIcon /> Perfect for revision & fast catch-up</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

// ✅ Pink 3D Check Icon
const CheckIcon = () => (
  <svg className="w-5 h-5 text-pink-600 drop-shadow-sm" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

export default Pricing
