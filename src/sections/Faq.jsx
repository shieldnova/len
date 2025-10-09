import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { faqs } from '../components/constants';

const AccordionItem = ({ question, answer, isHtml, delay }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <div
      className="group bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-sm p-6 cursor-pointer hover:bg-white/50 transition-all duration-300"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {/* Summary */}
      <div
        onClick={toggle}
        className="flex justify-between items-center font-semibold text-gray-800 text-lg select-none"
      >
        <span>{question}</span>
        <span
          className={`ml-2 transform transition-transform duration-300 text-brandColorTwo ${
            open ? 'rotate-180' : ''
          }`}
        >
          ▼
        </span>
      </div>

      {/* Answer */}
      <div
        ref={contentRef}
        className="transition-all duration-500 overflow-hidden"
        style={{
          maxHeight: open ? `${contentRef.current?.scrollHeight}px` : '0px',
        }}
      >
        <div className="mt-4 text-gray-600 leading-relaxed">
          {isHtml ? (
            <div dangerouslySetInnerHTML={{ __html: answer }} />
          ) : (
            answer
          )}
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="faq">
      <div className="bg-gray-50 flex items-center justify-center px-6 py-20">
        <div className="max-w-3xl w-full">
          {/* Heading */}
          <h2
            className="text-4xl font-bold text-center bg-gradient-to-r from-brandColorOne via-brandColorTwo to-brandColorThree bg-clip-text text-transparent"
            data-aos="fade-up"
          >
            FAQ
          </h2>

          {/* Subheading */}
          <p
            className="mt-2 max-w-3xl mx-auto text-gray-500 text-center mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Frequently Asked Questions
          </p>

          {/* Accordion Items */}
          <div className="space-y-4">
            {faqs.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                isHtml={item.isHtml}
                delay={200 + index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
