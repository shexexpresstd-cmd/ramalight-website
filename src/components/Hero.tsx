'use client';

import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative bg-brand min-h-screen flex items-center overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />

      <div className="container-xl relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-20 px-6 lg:px-12">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-accent/20 text-accent-light px-5 py-1.5 rounded-full text-xs font-semibold mb-6">
            <span className="w-2 h-2 bg-accent-light rounded-full animate-pulse-accent" />
            RAMALIGHT CO. LIMITED — Now Accepting Bulk Orders
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.06] tracking-[-1.8px] mb-5">
            Industrial Grade<br />
            <span className="text-gradient-accent">Sodium Hypochlorite</span>
            <br />
            Manufacturing
          </h1>

          <p className="text-lg text-white/45 leading-relaxed max-w-[540px] mx-auto lg:mx-0 mb-10">
            Kenya&apos;s trusted producer of 10%–15% concentrated bleach solutions for water
            treatment, industrial sanitation, agriculture, and commercial cleaning
            — serving all of East Africa.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
            <button
              onClick={() => scrollTo('contact')}
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold bg-gradient-to-br from-accent to-accent-light text-white rounded-lg shadow-[0_4px_20px_rgba(59,130,246,0.25)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(59,130,246,0.4)] transition-all inline-flex items-center justify-center gap-2"
            >
              Request a Quote <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollTo('specs')}
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white border-[1.5px] border-white/12 rounded-lg hover:border-accent hover:text-accent-light transition-all"
            >
              View Specifications
            </button>
          </div>

          <div className="flex flex-wrap gap-10 mt-12 pt-8 border-t border-white/[0.06] justify-center lg:justify-start">
            {[
              { num: '10+', label: 'Tons Daily Capacity', accent: true },
              { num: '91 KES', label: 'Price Per Unit', accent: false },
              { num: '3,600', label: 'Annual Tonnage', accent: false },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold text-white tracking-[-0.5px]">
                  {s.accent ? <span className="text-accent-light">{s.num}</span> : s.num}
                </div>
                <div className="text-sm text-white/30 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual card */}
        <div className="relative">
          <div className="absolute -top-2 -right-2 bg-gradient-to-br from-accent to-accent-light text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-[0_4px_15px_rgba(59,130,246,0.35)] z-10">
            ✦ 10–15% NaOCl
          </div>
          <div className="w-[340px] sm:w-[400px] bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/[0.06] p-10 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-3xl bg-[radial-gradient(circle,rgba(59,130,246,0.15),transparent_70%)]">
              ⚛
            </div>
            <div className="text-2xl font-extrabold text-accent-light tracking-[-0.5px] mb-1">
              NaOCl
            </div>
            <div className="text-sm text-white/40 mb-6">
              Sodium Hypochlorite · Commercial &amp; Industrial Grade
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                ['10–15%', 'Concentration'],
                ['KS / KEBS', 'Standards'],
                ['6 Months', 'Shelf Life'],
                ['Bulk Supply', '5L–1000L'],
              ].map(([val, key]) => (
                <div key={key} className="bg-white/[0.03] rounded-lg py-3.5">
                  <div className="text-lg font-bold text-white">{val}</div>
                  <div className="text-[11px] text-white/25 mt-0.5">{key}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
