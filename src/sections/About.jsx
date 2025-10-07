import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { aboutCards } from '../components/constants';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Card data for cleaner mapping
  
  return (
    <section id="about" className="relative py-20 px-6 bg-white">
      {/* Section Header */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-brandColorOne via-brandColorTwo to-brandColorThree bg-clip-text text-transparent">
          Who is Lenka Sir?
        </h2>
        <p className="mt-2 max-w-3xl mx-auto text-gray-500">
          The viral teacher with millions of views, a unique style that blends education + entertainment, and a proven record of helping students crack exams with confidence.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-8 md:grid-cols-3 mt-12">
        {aboutCards.map((card, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="text-center transform transition duration-500 hover:scale-110 hover:translate-y-2"
          >
            <img
              src={card.img}
              className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-brandColorTwo shadow-lg"
              alt={card.title}
            />
            <h3 className="mt-4 text-xl font-semibold text-brandColorTwo">
              {card.title}
            </h3>
            <p className="text-gray-800">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
