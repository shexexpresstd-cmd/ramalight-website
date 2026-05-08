'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Beaker } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section ref={heroRef} className="bg-white min-h-screen flex items-center relative overflow-hidden pt-36 pb-20">
      <div className="container-xl relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-28 px-10">
        {/* Left - Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div className="inline-flex items-center gap-2 border border-accent/30 text-accent px-5 py-1.5 rounded-full text-xs font-semibold mb-6 bg-accent-pale"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" /> RAMALIGHT CO. LIMITED — Now Accepting Bulk Orders
          </motion.div>

          <motion.h1 className="font-syne text-[58px] sm:text-[72px] lg:text-[84px] font-extrabold text-muted-900 leading-[1.04] tracking-[-2px] mb-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            Industrial Grade<br />
            <span className="text-gradient-accent">Sodium Hypochlorite</span><br />
            Manufacturing
          </motion.h1>

          <motion.p className="text-[17px] text-muted-500 leading-relaxed max-w-[540px] mx-auto lg:mx-0 mb-8"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            Kenya&apos;s trusted producer of 10%–15% concentrated bleach solutions
            for water treatment, industrial sanitation, agriculture, and commercial
            cleaning — serving all of East Africa.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
            <button onClick={() => scrollTo('contact')} className="w-full sm:w-auto px-8 py-4 text-base font-semibold bg-brand text-white rounded-lg hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(16,24,32,0.25)] transition-all inline-flex items-center justify-center gap-2 group">
              Request a Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => scrollTo('specs')} className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-muted-500 border border-slate-200 rounded-lg hover:border-brand hover:text-brand transition-all">
              View Specifications
            </button>
          </motion.div>

          <motion.div className="flex flex-wrap gap-10 mt-12 pt-8 border-t border-slate-100 justify-center lg:justify-start"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
            {[{n:'10+',l:'Tons Daily'},{n:'3,600',l:'Annual Tonnage'},{n:'6 Mo',l:'Shelf Life'}].map(s => (
              <div key={s.l} className="cursor-default">
                <div className="text-3xl font-extrabold text-muted-900 tracking-[-0.5px]">{s.n}</div>
                <div className="text-sm text-muted-400 mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right - Visual Card */}
        <motion.div className="relative shrink-0"
          initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.7 }}>
          <div className="absolute -top-2 -right-2 bg-brand text-white px-4 py-2 rounded-full text-xs font-bold shadow-[0_4px_20px_rgba(16,24,32,0.3)] z-10 flex items-center gap-1.5"
            style={{ animation: 'orbFloat 3s ease-in-out infinite' }}>
            <Beaker size={12} /> 10–15% NaOCl
          </div>
          <div className="w-[340px] sm:w-[440px] bg-surface-50 rounded-2xl border border-slate-100 p-8 text-center">
            <div className="w-full h-48 bg-gradient-to-br from-accent/10 to-accent-pale/5 rounded-xl flex items-center justify-center mb-4 border border-slate-100">
              <span className="text-6xl font-black text-accent/15 tracking-[-3px]">NaOCl</span>
            </div>
            <div className="text-2xl font-extrabold text-accent tracking-[-0.5px] font-syne">NaOCl</div>
            <div className="text-sm text-muted-400 mt-1">Sodium Hypochlorite · Commercial &amp; Industrial Grade</div>
            <div className="grid grid-cols-4 gap-2 mt-5">
              {[['10–15%','Conc.'],['KS/KEBS','Std.'],['6 Mo.','Shelf'],['Bulk','Supply']].map(([v,k]) => (
                <div key={k} className="bg-white rounded-lg py-3 border border-slate-100 hover:border-accent/20 hover:scale-105 transition-all">
                  <div className="text-sm font-bold text-muted-800">{v}</div>
                  <div className="text-[10px] text-muted-400 mt-0.5">{k}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
