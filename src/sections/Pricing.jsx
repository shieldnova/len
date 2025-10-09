import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { plans } from '../components/constants';

const Pricing = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="pricing" className="flex items-center justify-center bg-gray-50 px-6 py-16">
      <div className="max-w-6xl w-full">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-brandColorOne via-brandColorTwo to-brandColorThree bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="mt-2 text-gray-500">
            Pick the style that suits you. Every plan includes Recordings, Weekly Tests & DPP.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map(({ id, title, price, priceSuffix, description, enrollLink, features, badge }, idx) => (
            <div
              key={id}
              className={`bg-white rounded-2xl shadow-xl p-6 flex flex-col border border-gray-300 hover:scale-105 duration-500 transition hover:shadow-pink-200 relative`}
              data-aos="fade-up"
              data-aos-delay={100 * (idx + 1)}
            >
              {badge && (
                <span className="absolute -top-3 right-6 bg-pink-100 text-brandColorTwo text-xs font-medium px-3 py-1 rounded-full">
                  {badge}
                </span>
              )}

              <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col border border-gray-300">
                <h3 className="text-lg font-semibold text-gray-900">{id}. {title}</h3>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold bg-gradient-to-r from-brandColorOne via-brandColorTwo to-brandColorThree bg-clip-text text-transparent">
                    {price}
                  </span>
                  <span className="text-gray-500">{priceSuffix}</span>
                </p>
                <p className="mt-2 text-gray-500">{description}</p>
                <button
                  onClick={() => (window.location.href = enrollLink)}
                  className="mt-6 w-full rounded-full border border-gray-300 px-6 py-3 text-gray-700 font-medium shadow-sm hover:bg-gradient-to-r from-brandColorOne via-brandColorTwo to-brandColorThree hover:text-white"
                >
                  Enroll
                </button>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-gray-800 mb-4">Core features:</h4>
                <ul className="space-y-3 text-gray-600">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckIcon /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-pink-600 drop-shadow-sm"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default Pricing;
