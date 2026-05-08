'use client';

import { motion } from 'framer-motion';

const specs = [
  { label: 'Active Chlorine', value: '10–15%', note: 'Commercial 10% / Industrial 12–15%' },
  { label: 'Chemical Formula', value: 'NaOCl', note: 'Sodium Hypochlorite in aqueous solution' },
  { label: 'Physical State', value: 'Liquid', note: 'Clear, pale yellow solution' },
  { label: 'pH Value', value: '11–13', note: 'Alkaline solution for stability' },
  { label: 'Free Alkali', value: '≤ 1.0%', note: 'As NaOH, ensuring minimal residue' },
  { label: 'Standard', value: 'KS/KEBS', note: 'Kenya Bureau of Standards certified' },
  { label: 'Packaging', value: '5L–1000L', note: 'Consumer to industrial bulk solutions' },
  { label: 'Shelf Life', value: '6 Months', note: 'Stable when stored below 25°C' },
];

export default function Specifications() {
  return (
    <section className="section section-gray" id="specs">
      <div className="container-xl px-10">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="section-tag justify-center">Product</div>
          <h2 className="font-syne text-[46px] font-extrabold tracking-[-1.2px] leading-[1.1] mb-4">Technical <span className="text-gradient-accent">Specifications</span></h2>
          <p className="text-[17px] text-muted-500 leading-relaxed max-w-[580px] mx-auto">
            Premium industrial-grade sodium hypochlorite manufactured to international standards.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {specs.map((s, i) => (
            <motion.div key={s.label} className="bg-white p-6 rounded-xl border border-surface-200 hover:border-accent/20 transition-colors"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
              <div className="text-[11px] font-bold tracking-[2px] uppercase text-accent mb-2">{s.label}</div>
              <div className="text-[22px] font-black text-brand tracking-[-0.5px] mb-1 font-syne">{s.value}</div>
              <div className="text-[13px] text-muted-400">{s.note}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
