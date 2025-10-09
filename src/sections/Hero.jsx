import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { lenkacard } from "../assets/images";
import { whatsapp } from "../assets/icons"; // Only if you want to include the icon later

const Hero = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showSub, setShowSub] = useState(false);
  const [showDesc, setShowDesc] = useState(false);
  const [showCTA, setShowCTA] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowSub(true), 100);
    setTimeout(() => setShowTitle(true), 300);
    setTimeout(() => setShowDesc(true), 500);
    setTimeout(() => setShowCTA(true), 700);
    setTimeout(() => setShowFeatures(true), 900);
    setTimeout(() => setShowCard(true), 1000);
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden bg-white">
      <div className="relative z-10">
        <Nav />
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left mt-10">
            <p
              className={`text-gray-600 font-semibold uppercase tracking-wide text-sm transition-all duration-700 ease-out ${
                showSub ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Admissions open • 100% online
            </p>

            <h1
              className={`mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight transition-all duration-700 ease-out ${
                showTitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Lenka Sir's
              <br />
              <span className="bg-gradient-to-r from-brandColorOne via-brandColorTwo to-brandColorThree bg-clip-text text-transparent">
                Lenka Academy
              </span>
            </h1>

            <p
              className={`mt-6 text-lg text-gray-700 max-w-lg transition-all duration-700 ease-out ${
                showDesc ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Live & recorded learning for Class 9–12 & JEE Dropper. Choose your mode. Recordings + Weekly Tests + DPP included in every plan.
            </p>

            <div
              className={`mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start transition-all duration-700 ease-out ${
                showCTA ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <a
                href="https://wa.me/916303616940"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#f837c4] text-white font-medium hover:bg-[#b40184]  text-center transition-all"
              >
                Book a Free Demo
              </a>
              <a
                href="#pricing"
                className="px-6 py-3 rounded-full border border-[#f837c4] text-[#f837c4] font-medium hover:bg-[#f837c4] hover:text-white text-center transition-all"
              >
                See Modules
              </a>
            </div>

            <div
              className={`hidden md:flex flex-row mt-12 gap-6 justify-center md:justify-start transition-all duration-700 ease-out ${
                showFeatures ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
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

          {/* RIGHT CARD */}
          <div className="relative flex justify-center md:justify-end mt-10 md:mt-0">
            {/* Background Blob */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <div className="w-64 md:w-80 h-64 md:h-80 bg-pink-300 opacity-50 blur-3xl rounded-full"></div>
            </div>

            {/* Card */}
            <div
              className={`relative bg-white rounded-2xl shadow-xl max-w-sm w-full overflow-hidden z-10 transform transition-all duration-700 ease-out ${
                showCard ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <img
                src={lenkacard}
                alt="Lenka Academy Promo Card"
                className="w-full"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">
                  Lenka Academy Online Classes
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Class 9th to 12th — Live & Recorded Sessions with Tests and DPPs.
                </p>
                <a
                  href="https://wa.me/916303616940"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-2 text-white font-semibold bg-gradient-to-r from-brandColorOne via-brandColorTwo to-brandColorThree hover:bg-pink-700 rounded-full transition-all"
                >
                  Join Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
