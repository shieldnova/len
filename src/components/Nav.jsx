import React from 'react'
import { useState, useEffect } from "react";
const Nav = () => {
    const [isLight, setIsLight] = useState(false);

  // Sync with <html> class
  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [isLight]);
  return (
    <section>
  <nav class="max-w-8xl mx-auto flex items-center justify-between px-12 pt-6">
    <button onClick={() => setIsLight(!isLight)} class="text-xl leading-tight font-bold text-[var(--color-text)] ">Lenka Academy</button>
    <ul class="flex justify-center space-x-8 max-md:hidden">
      <li><a href="#" class="text-[var(--color-text)] py-1 font-medium hover:rounded-full hover:border-2 hover:border-[#F837C4] hover:px-3">Home</a></li>
      <li><a href="#" class="text-[var(--color-text)] py-1 font-medium hover:rounded-full hover:border-2 hover:border-[#F837C4] hover:px-3">Modules</a></li>
      <li><a href="#" class="text-[var(--color-text)] py-1 font-medium hover:rounded-full hover:border-2 hover:border-[#F837C4] hover:px-3">Schedules</a></li>
      <li><a href="#" class="text-[var(--color-text)] py-1 font-medium hover:rounded-full hover:border-2 hover:border-[#F837C4] hover:px-3">Contact</a></li>
      <li><a href="#" class="text-[var(--color-text)] py-1 font-medium hover:rounded-full hover:border-2 hover:border-[#F837C4] hover:px-3">FAQ</a></li>
    </ul>
    <a class="rounded-full border-2 text-[#f837c4] border-[#f837c4] px-6 py-2 text-sm font-medium hover:bg-[#f837c4] hover:text-white max-md:hidden"> Join Now </a>
    <button id="menu-btn" class="flex flex-col gap-1.5 sm:hidden">
      <span class="h-0.5 w-6 bg-[#f837c4]"></span>
      <span class="h-0.5 w-6 bg-[#f837c4]"></span>
      <span class="h-0.5 w-6 bg-[#f837c4]"></span>
    </button>
  </nav>
</section>
  )
}

export default Nav