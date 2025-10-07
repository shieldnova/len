import React, { useState } from 'react';

// --- Schedule Data Structure ---
// Using an array of objects is much cleaner and allows for easy mapping.
const scheduleData = {
  'SSC 11th': [
    { dateRange: 'Aug 18–23', topic: 'Trigonometry — Compound Angles' },
    { dateRange: 'Aug 25–30', topic: 'Trigonometry — up to Transformations' },
    { dateRange: 'Sep 1–6', topic: 'Trigonometry — Equations & Inverse Functions' },
    { dateRange: 'Sep 8–13', topic: 'Sets — Relations' },
    { dateRange: 'Sep 15–20', topic: 'Functions — Domain & Range' },
    { dateRange: 'Sep 22–27', topic: 'Functions — One-One, Onto, Periodic' },
    { dateRange: 'Sep 29–Oct 4', topic: 'Functions — Composite & Inverse' },
    { dateRange: 'Oct 6–11', topic: 'Functions — Miscellaneous' },
    { dateRange: 'Oct 13–18', topic: 'Matrices — Basics & Operations' },
    { dateRange: 'Oct 20–25', topic: 'Determinants — Properties & Applications' },
    { dateRange: 'Oct 27–Nov 1', topic: 'Locus, Transformation of Axes' },
    { dateRange: 'Nov 3–8', topic: 'Straight Line — Basic Forms' },
    { dateRange: 'Nov 10–15', topic: 'Straight Line — Part 2' },
    { dateRange: 'Nov 17–22', topic: 'Limits — Standard Limits & Techniques' },
    { dateRange: 'Nov 24–29', topic: 'Continuity & Differentiability' },
    { dateRange: 'Dec 1–6', 'topic': 'Differentiation — Basics & Formulas' },
    { dateRange: 'Dec 8–13', 'topic': 'Differentiation — Advanced Techniques' },
    { dateRange: 'Dec 15–20', 'topic': 'Applications of Derivatives — Increasing/Decreasing' },
    { dateRange: 'Dec 22–27', 'topic': 'Applications of Derivatives — Maxima & Minima' },
    { dateRange: 'Dec 29–Jan 3', 'topic': 'Vectors — Basics & Operations' },
    { dateRange: 'Jan 5–10', 'topic': 'Vectors — Scalar & Vector Product' },
    { dateRange: 'Jan 12–17', 'topic': '3D Geometry — Introduction' },
    { dateRange: 'Jan 19–24', 'topic': '3D Geometry — Lines' },
  ],
  'SSC 12th': [
    { dateRange: 'Aug 18–23', topic: 'Quadratic Equations' },
    { dateRange: 'Aug 25–30', topic: 'Sequence & Series' },
    { dateRange: 'Sep 1–6', topic: 'Circles' },
    { dateRange: 'Sep 8–13', topic: 'Permutations & Combinations — Part 1' },
    { dateRange: 'Sep 15–20', topic: 'Permutations & Combinations — Part 2' },
    { dateRange: 'Sep 22–27', topic: 'Probability — Part 1' },
    { dateRange: 'Sep 29–Oct 4', topic: 'Probability — Part 2' },
    { dateRange: 'Oct 6–11', topic: 'Indefinite Integrals — Part 1' },
    { dateRange: 'Oct 13–18', topic: 'Indefinite Integrals — Part 2' },
    { dateRange: 'Oct 20–25', topic: 'Definite Integrals — Part 1' },
    { dateRange: 'Oct 27–Nov 1', topic: 'Definite Integrals — Part 2' },
    { dateRange: 'Nov 3–8', topic: 'Area Under the Curve' },
    { dateRange: 'Nov 10–15', topic: 'Differential Equations' },
    { dateRange: 'Nov 17–22', topic: 'Conics — Parabola' },
    { dateRange: 'Nov 24–29', topic: 'Conics — Ellipse & Hyperbola' },
    { dateRange: 'Dec 1–6', 'topic': 'Complex Numbers' },
    { dateRange: 'Dec 8–13', 'topic': 'Revision' },
    { dateRange: 'Dec 15–20', 'topic': 'Revision' },
    { dateRange: 'Dec 22–27', 'topic': 'Revision' },
    { dateRange: 'Dec 29–Jan 3', 'topic': 'Revision' },
    { dateRange: 'Jan 5–10', 'topic': 'Revision' },
    { dateRange: 'Jan 12–17', 'topic': 'Revision' },
    { dateRange: 'Jan 19–24', 'topic': 'Revision' },
  ],
};

const Schedule = () => {
  const [activeTab, setActiveTab] = useState('SSC 11th');
  const [openAccordion, setOpenAccordion] = useState(null); // Tracks the index of the open item

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const tracks = Object.keys(scheduleData);
  const currentSchedule = scheduleData[activeTab];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-brandColorOne via-brandColorTwo to-brandColorThree bg-clip-text text-transparent">
        Weekly Schedule
      </h2>
      <p className="text-gray-600 text-center max-w-2xl mb-12">
        Here’s your learning roadmap! Follow the weekly plan to keep your concepts sharp and your confidence high.
      </p>

      {/* --- 1. TABS (for Track Selection) --- */}
      <div className="flex justify-center space-x-4 mb-10 w-full max-w-lg">
        {tracks.map((track) => (
          <button
            key={track}
            onClick={() => {
              setActiveTab(track);
              setOpenAccordion(null); // Close any open accordion when switching tabs
            }}
            className={`
              py-3 px-6 rounded-lg text-lg font-semibold transition-all duration-300 shadow-md
              ${activeTab === track
                ? 'bg-brandColorTwo text-white shadow-lg transform scale-105' // Active style
                : 'bg-white text-gray-700 hover:bg-gray-100' // Inactive style
              }
            `}
          >
            {track}
          </button>
        ))}
      </div>

      {/* --- 2. ACCORDION (for Weekly Details) --- */}
      <div className="w-full max-w-3xl space-y-3">
        {currentSchedule.map((item, index) => {
          const isOpen = openAccordion === index;
          return (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden shadow-md">
              
              {/* ACCORDION HEADER (Clickable) */}
              <button
                onClick={() => toggleAccordion(index)}
                className={`
                  w-full flex justify-between items-center p-4 text-left transition-all duration-300
                  ${isOpen 
                    ? 'bg-brandColorOne text-white hover:bg-brandColorOne/90' 
                    : 'bg-white hover:bg-gray-50 text-gray-800'
                  }
                `}
              >
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className={`font-bold w-32 min-w-[8rem] text-sm sm:text-base border-r sm:pr-4 sm:mr-4 border-white/30 sm:border-gray-300 ${isOpen?'text-white border-white/50':'text-gray-600 border-gray-300'}`}>
                    {item.dateRange}
                  </span>
                  <span className="font-semibold text-base sm:text-lg">
                    {item.topic}
                  </span>
                </div>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {/* ACCORDION BODY (Collapsible Content) */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100 p-4' : 'grid-rows-[0fr] opacity-0 p-0'
                }`}
              >
                <div className="overflow-hidden text-gray-700">
                  {/* Placeholder for detailed info that was in the original schedule's row */}
                  <p className="border-l-4 border-brandColorTwo pl-3 font-bold">
                    Topic Description
                  </p>
                  <ul className="list-disc list-inside mt-3 text-sm space-y-1 pl-3">
                    <li><span className='font-semi-bold'>Timings:</span> Monday, Wednesday, Friday | 4:00 PM - 5:30 PM</li>
                    <li><span className='font-semi-bold'>Homework/Assignment:</span> Problem Set 3 due Sunday night.</li>
                  </ul>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Schedule;