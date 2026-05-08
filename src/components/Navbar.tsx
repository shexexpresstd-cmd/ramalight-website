'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)]'
          : 'bg-white'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12 h-[66px] relative">
        {/* Logo — absolutely positioned, extends beyond header */}
        <a href="#" className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-50">
          <img
            src="/logo.png"
            alt="RAMALIGHT CO. LIMITED"
            className="h-[200px] w-auto"
            style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.08))' }}
          />
        </a>

        {/* Nav links — centered in the slim bar */}
        <ul className="hidden lg:flex items-center gap-8 ml-auto mr-4">
          {navLinks.map((l) => (
            <li key={l}>
              <a
                href="#"
                className={`text-xs font-semibold tracking-wide uppercase transition-colors ${
                  l === 'Home'
                    ? 'text-brand'
                    : 'text-slate-500 hover:text-brand'
                }`}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Phone + CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+254724806736"
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-brand transition-colors"
          >
            <Phone size={12} /> +254 724 806 736
          </a>
          <motion.button
            className="px-4 py-1.5 text-xs font-semibold bg-accent text-white rounded"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Get a Quote
          </motion.button>
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden text-slate-700 ml-auto" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden bg-white border-t border-slate-100 px-6 py-5"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <ul className="flex flex-col gap-4 mb-5">
              {navLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-slate-600 hover:text-brand text-sm font-medium" onClick={() => setMenuOpen(false)}>{l}</a>
                </li>
              ))}
            </ul>
            <a href="tel:+254724806736" className="block w-full text-center px-4 py-2.5 text-sm font-semibold text-slate-700 border border-slate-200 rounded-lg mb-2">
              +254 724 806 736
            </a>
            <button className="w-full px-4 py-2.5 text-sm font-semibold bg-accent text-white rounded-lg">
              Get a Quote
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
