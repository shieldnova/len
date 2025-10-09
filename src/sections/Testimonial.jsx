import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const mathSymbols = ["+", "-", "%", "√", "×","="];

const testimonials = [
  {
    name: "Student-1",
    role: "Class 10 Student",
    feedback:
      "The review will appear here, highlighting the student's or parent's experience with our program.",
    avatar: "https://i.pravatar.cc/100?img=12",
    rating: 5,
  },
  {
    name: "Student-2",
    role: "Parent of Class 11 Student",
    feedback:
      "The review will appear here, highlighting the student's or parent's experience with our program.",
    avatar: "https://i.pravatar.cc/100?img=31",
    rating: 4,
  },
  {
    name: "Student-3",
    role: "JEE Dropper",
    feedback:
      "The review will appear here, highlighting the student's or parent's experience with our program.",
    avatar: "https://i.pravatar.cc/100?img=25",
    rating: 5,
  },
];

const Stars = ({ count }) => {
  const totalStars = 5;
  return (
    <div className="flex justify-center mt-3 space-x-1 text-yellow-400">
      {[...Array(totalStars)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < count ? "fill-current" : "fill-gray-300"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.037 9.402c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.975z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section
      id="testimonials"
      className="relative bg-gradient-to-r from-[#9C0072] via-[#ad017f] to-[#9C0072] py-20 px-6 overflow-hidden"
      data-aos="fade-up"
    >
      {/* Math symbols background */}
      <div className="math-bg">
        {Array.from({ length: 35 }).map((_, index) => {
          const symbol = mathSymbols[Math.floor(Math.random() * mathSymbols.length)];
          const size = Math.random() * 2 + 1; // 1x to 3x
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const duration = Math.random() * 20 + 10; // 10s to 30s
          const delay = Math.random() * 20;

          return (
            <div
              key={index}
              className="math-symbol"
              style={{
                fontSize: `${size}rem`,
                top: `${top}%`,
                left: `${left}%`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
              }}
            >
              {symbol}
            </div>
          );
        })}
      </div>

      {/* Heading and Subheading */}
      <h2 className="text-center text-4xl font-extrabold text-white relative z-10">
        What Our Students Say
      </h2>
      <p className="text-center text-gray-200 mt-2 max-w-xl mx-auto relative z-10">
        Real feedback from students and parents who found success with us.
      </p>

      {/* Testimonials */}
      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-white text-center px-6"
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="w-28 h-28 rounded-full object-cover border-4 border-white"
            />
            <h4 className="mt-6 text-xl font-semibold">{t.name}</h4>
            <p className="text-sm opacity-80">{t.role}</p>
            <p className="mt-6 italic text-lg leading-relaxed">“{t.feedback}”</p>
            <Stars count={t.rating} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
