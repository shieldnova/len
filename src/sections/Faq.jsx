import React from 'react'

const Faq = () => {
  return (
    <div>
  
<div className="bg-pink-50 flex items-center justify-center px-6 py-20">
  <div className="max-w-3xl w-full">
  
    <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-brandColorOne via-brandColorTwo to-brandColorThree bg-clip-text text-transparent">
      FAQ
    </h2>
    <p className="mt-2 max-w-3xl mx-auto text-gray-500 text-center mb-12">
              Frequently Asked Questions
    </p>

    <div className="space-y-4">


      <details className="group bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-sm p-6 cursor-pointer hover:bg-white/50 transition">
        <summary className="flex justify-between items-center font-semibold text-gray-800 text-lg select-none">
          <span>Are these classes 100% online?</span>
          <span className="ml-2 transition-transform group-open:rotate-180 text-brandColorTwo">
            ▼
          </span>
        </summary>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Yes—Zoom Live, App Live, or Recorded videos. Pick what suits you.
        </p>
      </details>

      <details className="group bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-sm p-6 cursor-pointer hover:bg-white/50 transition">
        <summary className="flex justify-between items-center font-semibold text-gray-800 text-lg select-none">
          <span>Do all plans include recordings, tests & DPP?</span>
          <span className="ml-2 transition-transform group-open:rotate-180 text-brandColorTwo">
            ▼
          </span>
        </summary>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Yes. Every plan includes recordings, weekly tests, and DPP. Access duration depends on the plan/platform policy.
        </p>
      </details>


      <details className="group bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-sm p-6 cursor-pointer hover:bg-white/50 transition">
        <summary className="flex justify-between items-center font-semibold text-gray-800 text-lg select-none">
          <span>How do I get started?</span>
          <span className="ml-2 transition-transform group-open:rotate-180 text-brandColorTwo">
            ▼
          </span>
        </summary>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Tap any <span className="font-medium text-gray-800">Enroll</span> or <span className="font-medium text-gray-800">Join Now</span> button and we’ll help you on WhatsApp instantly.
        </p>
      </details>

    </div>
  </div>
</div>

    </div>
  )
}

export default Faq