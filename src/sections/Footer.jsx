import React from 'react';
import { whatsapp } from '../assets/icons';
import { sn } from '../assets/images';


const Footer = () => {
  return (
    <footer id="footer" className="bg-white border-t border-gray-200 backdrop-blur-sm py-10 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-6">

        {/* Brand Name */}
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-brandColorOne via-brandColorTwo to-brandColorThree bg-clip-text text-transparent">
          Lenka Academy
        </h2>

        {/* Tagline */}
        <p className="text-gray-600 text-sm md:text-base">
          Zoom Blitz Live • App Stream Live • Concept Vault (Recorded)
        </p>

        {/* Contact Info */}
        <div className="text-gray-700 text-sm md:text-base">
          <p className="font-medium text-gray-800">Contact</p>
          <p className="mt-1">+91 6303 616 940 • contact@lenkaacademy.com</p>
        </div>

        {/* WhatsApp Button */}
        <div>
          <a
            href="https://wa.me/916303616940"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-transform hover:scale-105"
          >
            <img
              src={whatsapp}
              alt="WhatsApp Icon"
              className="w-5 h-5"
            />
            WhatsApp Us
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm pt-4">© 2025 Lenka Academy</p>

        {/* Developed by ShieldNova */}
        <div className="flex items-center justify-center gap-2 pt-2 text-gray-400 text-sm">
          <span>Developed by Team</span>
          <img
            src={sn}
            alt="ShieldNova Logo"
            className="w-5 h-7 rounded-full"
          />
          <span className="font-semibold text-gray-600">ShieldNova</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
