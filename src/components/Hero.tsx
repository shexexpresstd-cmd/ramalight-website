'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Beaker, Check } from 'lucide-react';

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const r = heroRef.current.getBoundingClientRect();
      setMouse({ x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 });
    };
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section ref={heroRef} className="bg-navy min-h-screen flex items-center relative overflow-hidden py-[130px]">
      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)', backgroundSize: '72px 72px' }} />

      {/* Orbs */}
      <div className="absolute top-[-15%] right-[-8%] w-[800px] h-[800px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(200,150,12,0.06) 0%, transparent 65%)', animation: 'orbFloat 8s ease-in-out infinite' }} />
      <div className="absolute bottom-[-20%] left-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(22,99,52,0.08) 0%, transparent 65%)', animation: 'orbFloat 10s ease-in-out infinite reverse' }} />
      <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(42,74,127,0.12) 0%, transparent 65%)', animation: 'orbFloat 12s ease-in-out infinite 2s' }} />

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute w-0.5 h-0.5 bg-gold-light rounded-full opacity-0"
            style={{ left: `${Math.random()*100}%`, bottom: 0, animation: `particleRise ${8+Math.random()*10}s ease-in infinite ${Math.random()*8}s` }} />
        ))}
      </div>

      <div className="container-xl relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-28 px-10">
        {/* Left - Text */}
        <div className="flex-1 text-center lg:text-left" style={{ opacity: 1, transform: 'none' }}>
          <motion.div className="inline-flex items-center gap-2 border border-gold/30 text-gold-light px-5 py-1.5 rounded-full text-xs font-semibold mb-6 bg-gold-pale/5"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <span className="w-2 h-2 bg-gold-light rounded-full" style={{ animation: 'pulse 2s infinite' }} /> RAMALIGHT CO. LIMITED — Now Accepting Bulk Orders
          </motion.div>

          <motion.h1 className="font-syne text-[58px] sm:text-[72px] lg:text-[84px] font-extrabold text-white leading-[1.04] tracking-[-2px] mb-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            Industrial Grade<br />
            <span className="text-gradient-gold">Sodium Hypochlorite</span><br />
            Manufacturing
          </motion.h1>

          <motion.p className="text-[17px] text-white/40 leading-relaxed max-w-[540px] mx-auto lg:mx-0 mb-8"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            Kenya&apos;s trusted producer of 10%–15% concentrated bleach solutions
            for water treatment, industrial sanitation, agriculture, and commercial
            cleaning — serving all of East Africa.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
            <button onClick={() => scrollTo('contact')} className="w-full sm:w-auto px-8 py-4 text-base font-semibold bg-gradient-to-br from-gold to-gold-light text-navy rounded-lg shadow-[0_4px_20px_rgba(200,150,12,0.2)] inline-flex items-center justify-center gap-2 group hover:-translate-y-0.5 transition-transform">
              Request a Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => scrollTo('specs')} className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white/50 border border-white/10 rounded-lg hover:border-gold-light/40 hover:text-gold-light transition-all">
              View Specifications
            </button>
          </motion.div>

          {/* Mini stats */}
          <motion.div className="flex flex-wrap gap-10 mt-12 pt-8 border-t border-white/[0.04] justify-center lg:justify-start"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
            {[{n:'10+',l:'Tons Daily'},{n:'3,600',l:'Annual Tonnage'},{n:'6 Mo',l:'Shelf Life'}].map(s => (
              <div key={s.l} className="cursor-default hover:scale-105 transition-transform">
                <div className="text-3xl font-extrabold text-white tracking-[-0.5px]">{s.n}</div>
                <div className="text-sm text-white/25 mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right - Visual Card */}
        <motion.div className="relative shrink-0"
          initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.7 }}
          style={{ transform: `translate(${mouse.x * -15}px, ${mouse.y * -15}px)` }}>
          <div className="absolute -top-2 -right-2 bg-gradient-to-br from-gold to-gold-light text-navy px-4 py-2 rounded-full text-xs font-bold shadow-[0_4px_20px_rgba(200,150,12,0.3)] z-10 flex items-center gap-1.5"
            style={{ animation: 'orbFloat 3s ease-in-out infinite' }}>
            <Beaker size={12} /> 10–15% NaOCl
          </div>
          <div className="w-[340px] sm:w-[440px] bg-navy-50/80 backdrop-blur-sm rounded-2xl border border-white/[0.04] p-8 text-center">
            <div className="w-full h-48 bg-gradient-to-br from-gold/10 to-gold-pale/5 rounded-xl flex items-center justify-center mb-4 border border-white/[0.03]">
              <span className="text-6xl font-black text-gold/15 tracking-[-3px]">NaOCl</span>
            </div>
            <div className="text-2xl font-extrabold text-gold tracking-[-0.5px] font-syne">NaOCl</div>
            <div className="text-sm text-white/30 mt-1">Sodium Hypochlorite · Commercial &amp; Industrial Grade</div>
            <div className="grid grid-cols-4 gap-2 mt-5">
              {[['10–15%','Conc.'],['KS/KEBS','Std.'],['6 Mo.','Shelf'],['Bulk','Supply']].map(([v,k]) => (
                <div key={k} className="bg-navy/50 rounded-lg py-3 border border-white/[0.03] hover:bg-gold-pale/5 hover:scale-105 transition-all">
                  <div className="text-sm font-bold text-white">{v}</div>
                  <div className="text-[10px] text-white/20 mt-0.5">{k}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 text-[11px] tracking-[2px] uppercase"
        style={{ animation: 'fadeSlideUp 1s ease 1.5s both' }}>
        Scroll
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent relative overflow-hidden">
          <div className="absolute top-[-100%] w-full h-full bg-gold-light" style={{ animation: 'scrollDown 2s ease-in-out infinite' }} />
        </div>
      </div>
    </section>
  );
}
