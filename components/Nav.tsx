"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-[#F7F3EE]/95 backdrop-blur-md border-b border-[#1B4332]/10 py-4 shadow-sm" 
        : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* PURE WORDMARK LOGO */}
        <Link href="/" className="group">
          <span className={`font-serif text-2xl tracking-wide transition-colors duration-300 ${
            isScrolled ? "text-[#1B4332]" : "text-[#F7F3EE]"
          }`}>
            Zingvera
          </span>
        </Link>

        {/* NAVIGATION LINKS */}
        <div className={`hidden md:flex gap-8 font-sans text-xs uppercase tracking-widest font-medium transition-colors duration-300 ${
          isScrolled ? "text-[#111111]" : "text-[#F7F3EE]/90"
        }`}>
          <a href="#hibiscus" className="hover:opacity-70 transition-opacity">Hibiscus</a>
          <a href="#ginger" className="hover:opacity-70 transition-opacity">Ginger</a>
          <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
        </div>

        {/* CTA BUTTON */}
        <div>
          <button className={`font-sans text-xs uppercase tracking-wider px-5 py-2.5 rounded-sm transition-all duration-300 ${
            isScrolled 
              ? "bg-[#1B4332] text-[#F7F3EE] hover:bg-[#1B4332]/90" 
              : "bg-[#C8A882] text-[#111111] hover:opacity-90"
          }`}>
            Request a Sample
          </button>
        </div>

      </div>
    </nav>
  );
}
