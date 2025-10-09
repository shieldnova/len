import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { icon1, icon2, icon3 } from '../assets/icons';

const Classes = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="classes" className="bg-[url('/bgDoodle.png')] bg-cover bg-fixed py-20 px-6 flex flex-col items-center">
      <div className="max-w-6xl w-full text-center">

        {/* Heading */}
        <h2
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-brandColorOne via-brandColorTwo to-brandColorThree bg-clip-text text-transparent"
          data-aos="fade-up"
        >
          Lenka Academy — Quick Access
        </h2>

        {/* Subtext */}
        <p
          className="text-gray-600 mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Open your class in one click • All links open in a new tab
        </p>

        {/* Grid of Class Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Class 11 & 12 */}
          <div
            className="bg-white/60 backdrop-blur-md border border-gray-200 shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-brandColorOne via-brandColorTwo to-brandColorThree bg-clip-text text-transparent">
              Class-11 & 12
            </h3>
            <p className="text-gray-600 mb-6">class 11 & 12</p>
            <div className="flex flex-col space-y-3">
              <a href="https://live.lenkaacademy.com/courses/716066" target="_blank" className="flex items-center justify-center gap-2 bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition">
                <img src={icon1} className="w-5 h-5" alt="Zoom Icon" />
                Zoom Live
              </a>
              <a href="https://live.lenkaacademy.com/courses/716050" target="_blank" className="flex items-center justify-center gap-2 bg-[#3DDC84] text-white font-semibold py-2 rounded-lg hover:bg-pink-600 transition">
                <img src={icon3} className="w-5 h-5" alt="App Icon" />
                App Live
              </a>
              <a href="https://live.lenkaacademy.com/courses/716074" target="_blank" className="flex items-center justify-center gap-2 bg-[#FF0000] text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition">
                <img src={icon2} className="w-5 h-5" alt="Record Icon" />
                Recordings
              </a>
            </div>
          </div>

          {/* Class 10 */}
          <div
            className="bg-white/60 backdrop-blur-md border border-gray-200 shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-brandColorOne via-brandColorTwo to-brandColorThree bg-clip-text text-transparent">
              Class-10
            </h3>
            <p className="text-gray-600 mb-6">class-10</p>
            <div className="flex flex-col space-y-3">
              <a href="https://live.lenkaacademy.com/courses/716066" target="_blank" className="flex items-center justify-center gap-2 bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition">
                <img src={icon1} className="w-5 h-5" alt="Zoom Icon" />
                Zoom Live
              </a>
              <a href="https://live.lenkaacademy.com/courses/716050" target="_blank" className="flex items-center justify-center gap-2 bg-[#3DDC84] text-white font-semibold py-2 rounded-lg hover:bg-pink-600 transition">
                <img src={icon3} className="w-5 h-5" alt="App Icon" />
                App Live
              </a>
              <a href="https://live.lenkaacademy.com/courses/716074" target="_blank" className="flex items-center justify-center gap-2 bg-[#FF0000] text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition">
                <img src={icon2} className="w-5 h-5" alt="Record Icon" />
                Recordings
              </a>
            </div>
          </div>

          {/* Class 9 */}
          <div
            className="bg-white/60 backdrop-blur-md border border-gray-200 shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-brandColorOne via-brandColorTwo to-brandColorThree bg-clip-text text-transparent">
              Class-9
            </h3>
            <p className="text-gray-600 mb-6">class 9</p>
            <div className="flex flex-col space-y-3">
              <a href="https://live.lenkaacademy.com/courses/716066" target="_blank" className="flex items-center justify-center gap-2 bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition">
                <img src={icon1} className="w-5 h-5" alt="Zoom Icon" />
                Zoom Live
              </a>
              <a href="https://live.lenkaacademy.com/courses/716050" target="_blank" className="flex items-center justify-center gap-2 bg-[#3DDC84] text-white font-semibold py-2 rounded-lg hover:bg-pink-600 transition">
                <img src={icon3} className="w-5 h-5" alt="App Icon" />
                App Live
              </a>
              <a href="https://live.lenkaacademy.com/courses/716074" target="_blank" className="flex items-center justify-center gap-2 bg-[#FF0000] text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition">
                <img src={icon2} className="w-5 h-5" alt="Record Icon" />
                Recordings
              </a>
            </div>
          </div>
        </div>

        {/* Tip */}
        <p
          className="text-gray-500 mt-10 text-sm"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          💡 Tip: Bookmark this section for faster access.
        </p>
      </div>
    </section>
  );
};

export default Classes;
