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
          ? 'bg-brand/98 backdrop-blur-xl shadow-[0_2px_30px_rgba(0,0,0,0.3)]'
          : 'bg-brand'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12 h-[72px]">
        <a href="#" className="flex items-center shrink-0">
          <img
            src="/logo.png"
            alt="RAMALIGHT CO. LIMITED"
            className="h-12 w-auto"
          />
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l}>
              <a
                href="#"
                className={`text-sm font-medium transition-colors ${
                  l === 'Home'
                    ? 'text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+254724806736"
            className="flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
          >
            <Phone size={14} /> +254 724 806 736
          </a>
          <motion.button
            className="px-5 py-2.5 text-sm font-semibold bg-accent text-white rounded-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Get a Quote
          </motion.button>
        </div>

        <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden bg-brand border-t border-white/10 px-6 py-5"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <ul className="flex flex-col gap-4 mb-5">
              {navLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-white/70 hover:text-white text-sm font-medium" onClick={() => setMenuOpen(false)}>{l}</a>
                </li>
              ))}
            </ul>
            <a href="tel:+254724806736" className="block w-full text-center px-4 py-2.5 text-sm font-semibold text-white border border-white/15 rounded-lg mb-2">
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
