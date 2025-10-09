import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { scheduleData } from '../components/constants';

const Schedule = () => {
  const [activeTab, setActiveTab] = useState('SSC 11th');
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const tracks = Object.keys(scheduleData);
  const currentSchedule = scheduleData[activeTab];

  return (
    <section
      id="schedule"
      className="min-h-screen bg-white flex flex-col items-center px-6 py-20"
    >
      {/* Title */}
      <h2
        className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-brandColorOne via-brandColorTwo to-brandColorThree bg-clip-text text-transparent"
        data-aos="fade-up"
      >
        Weekly Schedule
      </h2>
      <p
        className="text-gray-600 text-center max-w-2xl mb-12"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Here’s your learning roadmap! Follow the weekly plan to keep your concepts sharp and your confidence high.
      </p>

      {/* Tabs */}
      <div
        className="flex justify-center space-x-4 mb-10 w-full max-w-lg"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {tracks.map((track) => (
          <button
            key={track}
            onClick={() => {
              setActiveTab(track);
              setOpenAccordion(null);
            }}
            className={`py-3 px-6 rounded-lg text-lg font-semibold transition-all duration-300 shadow-md ${
              activeTab === track
                ? 'bg-brandColorTwo text-white shadow-lg transform scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {track}
          </button>
        ))}
      </div>

      {/* Accordion */}
      <div className="w-full max-w-3xl space-y-3">
        {currentSchedule.map((item, index) => {
          const isOpen = openAccordion === index;

          return (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-md"
            >
              {/* Accordion Header With Toggling */}
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full flex justify-between items-center p-4 text-left transition-colors ${
                  isOpen
                    ? 'bg-brandColorOne text-white hover:bg-brandColorOne/90'
                    : 'bg-white hover:bg-gray-50 text-gray-800'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span
                    className={`font-bold w-32 min-w-[8rem] text-sm sm:text-base border-r sm:pr-4 sm:mr-4 ${
                      isOpen
                        ? 'text-white border-white/50'
                        : 'text-gray-600 border-gray-300'
                    }`}
                  >
                    {item.dateRange}
                  </span>
                  <span className="font-semibold text-base sm:text-lg">
                    {item.topic}
                  </span>
                </div>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Accordion Body Without Animation */}
              {isOpen && (
                <div className="p-4 bg-white text-gray-700">
                  <p className="border-l-4 border-brandColorTwo pl-3 font-bold">
                    Topic Description
                  </p>
                  <ul className="list-disc list-inside mt-3 text-sm space-y-1 pl-3">
                    <li>
                      <span className="font-semibold">Timings:</span> Monday,
                      Wednesday, Friday | 4:00 PM - 5:30 PM
                    </li>
                    <li>
                      <span className="font-semibold">Homework/Assignment:</span>{' '}
                      Problem Set 3 due Sunday night.
                    </li>
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Schedule;
