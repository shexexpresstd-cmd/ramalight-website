'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = ['Home', 'Products', 'Specifications', 'About', 'Contact'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand/95 backdrop-blur-xl py-2.5 shadow-[0_1px_0_rgba(255,255,255,0.06)]'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-xl flex items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-md bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-white font-black text-sm">
            RL
          </div>
          <span className="text-lg font-extrabold text-white tracking-[-0.4px]">
            RAMALIGHT<span className="text-accent-light">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-9 text-sm font-medium">
          {navLinks.map((l) => (
            <li key={l}>
              <a
                href="#"
                className={`transition-colors duration-200 ${
                  l === 'Home'
                    ? 'text-white'
                    : 'text-white/55 hover:text-white'
                }`}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+254724806736"
            className="flex items-center gap-1.5 text-sm text-white/55 hover:text-white transition-colors"
          >
            <Phone size={14} /> 0724 806 736
          </a>
          <button className="px-5 py-2.5 text-sm font-semibold bg-gradient-to-br from-accent to-accent-light text-white rounded-md hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(59,130,246,0.35)] transition-all">
            Get a Quote
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-brand/98 backdrop-blur-xl border-t border-white/5 px-6 py-6">
          <ul className="flex flex-col gap-4 text-sm font-medium mb-6">
            {navLinks.map((l) => (
              <li key={l}>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-2">
            <a
              href="tel:+254724806736"
              className="flex-1 px-4 py-2.5 text-sm font-semibold text-white border border-white/15 rounded-md text-center"
            >
              Call 0724 806 736
            </a>
            <button className="flex-1 px-4 py-2.5 text-sm font-semibold bg-accent text-white rounded-md">
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
