import React, { useEffect, useState } from "react";

const FloatingTopicNavigator = () => {
  const [hideButton, setHideButton] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const footer = document.getElementById("footer");

    if (!hero || !footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const isHeroVisible = entries.find(entry => entry.target.id === "hero")?.isIntersecting;
        const isFooterVisible = entries.find(entry => entry.target.id === "footer")?.isIntersecting;

        setHideButton(isHeroVisible || isFooterVisible);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    observer.observe(hero);
    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);

  if (hideButton) return null;

  return (
    <a
      href="https://lenkaacademy.com/j6.html"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="JEE Topic Navigator"
      className="fixed bottom-6 left-6 z-50 flex items-center bg-brandColorTwo backdrop-blur-md border border-pink-400/40
                 text-white px-4 h-14 rounded-full shadow-lg group
                 transition-all duration-300 ease-in-out hover:scale-105 animate-fade-in-bounce"
    >
      <div className="flex items-center justify-center animate-pulse-bounce transition-transform duration-300 text-white text-xl">
        🧭
      </div>
      <span className="overflow-hidden max-w-0 group-hover:max-w-[200px] group-hover:ml-3 whitespace-nowrap
                       transition-all duration-300 font-medium">
        JEE Topic Navigator
      </span>
    </a>
  );
};

export default FloatingTopicNavigator;
