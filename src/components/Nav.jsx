import React, { useState } from "react";

const Nav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav className="max-w-8xl mx-auto flex items-center justify-between px-6 sm:px-12 pt-6 relative z-20">
        <button className="text-xl leading-tight font-bold text-[var(--color-text)]">
          Lenka Academy
        </button>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex justify-center space-x-8">
          <li>
            <a
              href="#home"
              className="text-[var(--color-text)] py-1 font-medium hover:rounded-full hover:border-2 hover:border-[#F837C4] hover:px-3"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="text-[var(--color-text)] py-1 font-medium hover:rounded-full hover:border-2 hover:border-[#F837C4] hover:px-3"
            >
              Modules
            </a>
          </li>
          <li>
            <a
              href="#schedule"
              className="text-[var(--color-text)] py-1 font-medium hover:rounded-full hover:border-2 hover:border-[#F837C4] hover:px-3"
            >
              Schedules
            </a>
          </li>
             <li>
            <a
              href="https://lenkaacademy.com/j6.html"
              className="text-[var(--color-text)] py-1 font-medium hover:rounded-full hover:border-2 hover:border-[#F837C4] hover:px-3"
            >
              Jee Topics
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-[var(--color-text)] py-1 font-medium hover:rounded-full hover:border-2 hover:border-[#F837C4] hover:px-3"
            >
              Contact
            </a>
          </li>
          
          <li>
            <a
              href="#faq"
              className="text-[var(--color-text)] py-1 font-medium hover:rounded-full hover:border-2 hover:border-[#F837C4] hover:px-3"
            >
              FAQ
            </a>
          </li>
        </ul>

        {/* Desktop WhatsApp Join Now */}
        <a
          href="https://wa.me/916303616940"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block rounded-full border-2 text-[#f837c4] border-[#f837c4] px-6 py-2 text-sm font-medium hover:bg-[#f837c4] hover:text-white"
        >
          Join Now
        </a>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="flex flex-col gap-1.5 md:hidden focus:outline-none z-30"
          aria-label="Open Menu"
        >
          <span className="h-0.5 w-6 bg-[#f837c4]"></span>
          <span className="h-0.5 w-6 bg-[#f837c4]"></span>
          <span className="h-0.5 w-6 bg-[#f837c4]"></span>
        </button>
      </nav>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
        ></div>
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-30 transform transition-transform duration-300 md:hidden ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-xl font-bold text-[var(--color-text)]">
            Lenka Academy
          </h2>
          <button
            onClick={() => setSidebarOpen(false)}
            aria-label="Close Menu"
            className="text-gray-600 hover:text-gray-900 text-2xl font-bold"
          >
            &times;
          </button>
        </div>

        <nav className="flex flex-col px-6 py-4 space-y-4">
          {[
            { label: "Home", id: "home" },
            { label: "Modules", id: "pricing" },
            { label: "Schedules", id: "schedule" },
            { label: "Contact", id: "contact" },
            { label: "FAQ", id: "faq" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-gray-700 font-medium hover:text-[#f837c4] transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              {item.label}
            </a>
          ))}
           <a
              href="https://lenkaacademy.com/j6.html"
              className="text-gray-700 font-medium hover:text-[#f837c4] transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              Jee Topics
            </a>

          {/* Mobile WhatsApp Join Now */}
          <a
            href="https://wa.me/916303616940"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-center rounded-full border-2 border-[#f837c4] text-[#f837c4] py-2 font-semibold hover:bg-[#f837c4] hover:text-white transition-colors"
            onClick={() => setSidebarOpen(false)}
          >
            Join Now
          </a>
        </nav>
      </aside>
    </>
  );
};

export default Nav;
