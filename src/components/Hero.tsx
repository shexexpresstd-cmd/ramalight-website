'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Beaker } from 'lucide-react';
import NaOClMolecule from './NaOClMolecule';

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const stats = [
    { num: '10+', label: 'Tons Daily Capacity', accent: true },
    { num: '91 KES', label: 'Price Per Unit', accent: false },
    { num: '3,600', label: 'Annual Tonnage', accent: false },
  ];

  return (
    <section ref={heroRef} className="relative bg-brand min-h-screen flex items-center overflow-hidden pt-24 pb-20">
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-accent/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Parallax glow */}
      <motion.div
        className="hero-glow-1"
        animate={{ x: mousePos.x * -30, y: mousePos.y * -30 }}
        transition={{ type: 'spring', stiffness: 50, damping: 30 }}
      />
      <motion.div
        className="hero-glow-2"
        animate={{ x: mousePos.x * 20, y: mousePos.y * 20 }}
        transition={{ type: 'spring', stiffness: 50, damping: 30 }}
      />

      <div className="container-xl relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 px-6 lg:px-12">
        {/* Text */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/[0.04] border border-accent/20 text-accent-light px-5 py-1.5 rounded-full text-xs font-semibold mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2 h-2 bg-accent-light rounded-full animate-pulse-accent" />
            RAMALIGHT CO. LIMITED — Now Accepting Bulk Orders
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.06] tracking-[-1.8px] mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Industrial Grade<br />
            <span className="text-gradient-accent">Sodium Hypochlorite</span>
            <br />
            Manufacturing
          </motion.h1>

          <motion.p
            className="text-lg text-white/45 leading-relaxed max-w-[540px] mx-auto lg:mx-0 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Kenya&apos;s trusted producer of 10%–15% concentrated bleach solutions for water
            treatment, industrial sanitation, agriculture, and commercial cleaning
            — serving all of East Africa.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              onClick={() => scrollTo('contact')}
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold bg-gradient-to-br from-accent to-accent-light text-white rounded-lg shadow-[0_4px_20px_rgba(59,130,246,0.25)] inline-flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Request a Quote
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </motion.button>
            <motion.button
              onClick={() => scrollTo('specs')}
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white border-[1.5px] border-white/12 rounded-lg hover:border-accent hover:text-accent-light transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              View Specifications
            </motion.button>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-10 mt-12 pt-8 border-t border-white/[0.06] justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                whileHover={{ scale: 1.05 }}
                className="cursor-default"
              >
                <div className="text-3xl font-extrabold text-white tracking-[-0.5px]">
                  {s.accent ? <span className="text-accent-light">{s.num}</span> : s.num}
                </div>
                <div className="text-sm text-white/30 mt-1">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Visual - Molecule */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
        >
          {/* Floating badge */}
          <motion.div
            className="absolute -top-3 -right-3 bg-gradient-to-br from-accent to-accent-light text-white px-5 py-2 rounded-full text-xs font-bold shadow-[0_4px_20px_rgba(59,130,246,0.4)] z-10 flex items-center gap-1.5"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Beaker size={12} /> 10–15% NaOCl
          </motion.div>

          {/* Card with molecule */}
          <motion.div
            className="w-[340px] sm:w-[420px] bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/[0.06] p-8 text-center"
            animate={{
              y: mousePos.y * -15,
              rotateY: mousePos.x * 5,
            }}
            transition={{ type: 'spring', stiffness: 60, damping: 25 }}
            style={{ perspective: 1000 }}
          >
            {/* Molecule SVG */}
            <NaOClMolecule className="w-72 h-64 mx-auto mb-2" />

            <motion.div
              className="text-2xl font-extrabold text-accent-light tracking-[-0.5px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              NaOCl
            </motion.div>
            <div className="text-sm text-white/40">
              Sodium Hypochlorite · Commercial &amp; Industrial Grade
            </div>

            <div className="grid grid-cols-4 gap-2 mt-5">
              {[
                ['10–15%', 'Conc.'],
                ['KS/KEBS', 'Std.'],
                ['6 Mo.', 'Shelf'],
                ['Bulk', 'Supply'],
              ].map(([val, key]) => (
                <motion.div
                  key={key}
                  className="bg-white/[0.03] rounded-lg py-3"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(59,130,246,0.08)' }}
                >
                  <div className="text-sm font-bold text-white">{val}</div>
                  <div className="text-[10px] text-white/25 mt-0.5">{key}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
