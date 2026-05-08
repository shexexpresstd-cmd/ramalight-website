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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-visible h-[90px] ${
        scrolled
          ? 'bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] py-1'
          : 'bg-white/95 backdrop-blur py-2'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <div className="container-xl flex items-center justify-between px-6 lg:px-12 overflow-visible">
        {/* Logo */}
        <a href="#" className="flex items-center group -my-3">
          <motion.img
            src="/logo.png"
            alt="RAMALIGHT"
            className="h-[200px] w-auto -my-8"
            whileHover={{ scale: 1.03 }}
            style={{ filter: 'brightness(1.05) saturate(1.1)' }}
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-9 text-sm font-medium">
          {navLinks.map((l) => (
            <li key={l}>
              <a
                href="#"
                className={`transition-colors duration-200 ${
                  l === 'Home'
                    ? 'text-accent'
                    : 'text-slate-600 hover:text-accent'
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
            className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-accent transition-colors"
          >
            <Phone size={14} /> +254 724 806 736
          </a>
          <motion.button
            className="px-5 py-2.5 text-sm font-semibold bg-gradient-to-br from-accent to-accent-light text-white rounded-md"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            Get a Quote
          </motion.button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-brand"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden bg-white border-t border-slate-100 px-6 py-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col gap-4 text-sm font-medium mb-6">
              {navLinks.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-slate-600 hover:text-accent transition-colors"
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
                className="flex-1 px-4 py-2.5 text-sm font-semibold text-slate-700 border border-slate-200 rounded-md text-center"
              >
                Call +254 724 806 736
              </a>
              <button className="flex-1 px-4 py-2.5 text-sm font-semibold bg-accent text-white rounded-md">
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
