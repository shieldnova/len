import React from "react";
import Nav from "../components/Nav";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* 🌊 Animated Wave Background */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FA28CB" />
              <stop offset="50%" stopColor="#D715A8" />
              <stop offset="100%" stopColor="#b40184" />
            </linearGradient>
          </defs>

          <path
            fill="url(#waveGradient)"
            fillOpacity="0.6"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,160 C320,240 480,80 800,160 C1120,240 1360,80 1600,160 L1600,320 L0,320 Z;
                M0,180 C320,100 480,260 800,140 C1120,20 1360,200 1600,140 L1600,320 L0,320 Z;
                M0,160 C320,240 480,80 800,160 C1120,240 1360,80 1600,160 L1600,320 L0,320 Z
              "
            />
          </path>
        </svg>
      </div>

      {/* Overlay to soften contrast */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] z-0"></div>

      {/* 🌟 Hero Content */}
      <div className="relative z-10">
        <Nav />
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left mt-10">
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

            <p className="mt-6 text-lg text-gray-700 max-w-lg">
              Live & recorded learning for Class 9–12 & JEE Dropper. Choose your
              mode. Recordings + Weekly Tests + DPP included in every plan.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#"
                className="px-6 py-3 rounded-full bg-[#f837c4] text-white font-medium hover:bg-[#b40184] text-center transition-all"
              >
                Book a Free Demo
              </a>
              <a
                href="#"
                className="px-6 py-3 rounded-full border border-[#f837c4] text-[#f837c4] font-medium hover:bg-[#f837c4] hover:text-white text-center transition-all"
              >
                See Modules
              </a>
            </div>

            {/* Features */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
              <div className="bg-gray-100 rounded-xl shadow-md p-4 w-36">
                <h3 className="font-medium text-xl">Online</h3>
                <p className="text-gray-600 text-sm">Learn Anywhere</p>
              </div>
              <div className="bg-gray-100 rounded-xl shadow-md p-4 w-36">
                <h3 className="font-medium text-xl">Clarity</h3>
                <p className="text-gray-600 text-sm">Concept-first Teaching</p>
              </div>
              <div className="bg-gray-100 rounded-xl shadow-md p-4 w-36">
                <h3 className="font-medium text-xl">Support</h3>
                <p className="text-gray-600 text-sm">Recordings + DPP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
