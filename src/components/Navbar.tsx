'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Home', 'Products', 'Specifications', 'About', 'Contact'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] py-0 transition-all duration-[400ms] overflow-visible ${
      scrolled ? 'bg-white/95 backdrop-blur-2xl border-b border-slate-100 shadow-sm' : 'bg-surface-50'
    }`}>
      <div className="container-xl flex items-center justify-between px-10 h-[110px] relative">
        <a href="#" className="flex items-center no-underline -my-[45px]">
          <img src="/logo.png" alt="RAMALIGHT" className="h-[200px] w-auto" />
        </a>

        <ul className="hidden lg:flex gap-8 items-center">
          {links.map((l, i) => (
            <li key={l}>
              <a href="#" className={`text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:bg-accent after:transition-all after:duration-300 ${
                i === 0 ? 'text-muted-900 after:w-full' : 'text-muted-500 hover:text-muted-900 after:w-0 hover:after:w-full'
              }`}>
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-2.5">
          <a href="https://wa.me/254724806736" className="px-5 py-2.5 rounded-md text-[13px] font-semibold bg-[#25D366] text-white hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition-all duration-200 mr-1">
            <span className="flex items-center gap-1.5">+254 724 806 736</span>
          </a>
          <a href="#contact" className="px-5 py-2.5 rounded-md text-[13px] font-semibold bg-brand text-white hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(16,24,32,0.35)] transition-all duration-200">
            Get a Quote
          </a>
        </div>

        <button className="lg:hidden text-muted-700" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="lg:hidden bg-white border-t border-slate-100 px-10 py-6" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
            <ul className="flex flex-col gap-4 mb-5">
              {links.map(l => (
                <li key={l}><a href="#" className="text-muted-600 hover:text-accent text-sm font-medium" onClick={() => setMenuOpen(false)}>{l}</a></li>
              ))}
            </ul>
            <a href="https://wa.me/254724806736" className="block w-full text-center px-4 py-2.5 text-sm font-semibold bg-[#25D366] text-white rounded-md mb-2">+254 724 806 736</a>
            <a href="#contact" className="block w-full text-center px-4 py-2.5 text-sm font-semibold bg-brand text-white rounded-md">Get a Quote</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
