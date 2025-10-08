import React from "react";
import { whatsapp } from "../assets/icons";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/916303616940?text=Hi!%20I%20would%20like%20to%20know%20more%20about%20Lenka%20Academy."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center bg-[#25D366] text-white px-4 h-14 rounded-full shadow-lg group 
        transition-all duration-300 ease-in-out hover:scale-105 animate-fade-in-bounce"
    >
      <div
        className="flex items-center justify-center animate-pulse-bounce transition-transform duration-300"
      >
        <img
          src={whatsapp}
          alt="WhatsApp"
          className="w-7 h-7"
        />
      </div>
      <span
        className="overflow-hidden max-w-0 group-hover:max-w-[200px] group-hover:ml-3 whitespace-nowrap transition-all duration-300 text-white font-medium"
      >
        WhatsApp Us
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
