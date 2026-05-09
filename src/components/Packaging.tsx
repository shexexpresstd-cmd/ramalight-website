'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Package, Drum, Container } from 'lucide-react';

const sizes = [
  { icon: ShoppingBag, size: '5 Liters', label: 'Consumer', desc: 'Ready-to-use household and small business applications', color: 'border-accent/20 hover:border-accent/50' },
  { icon: Package, size: '20 Liters', label: 'Commercial', desc: 'Medium-scale operations, cleaning services, restaurants', color: 'border-accent/20 hover:border-accent/50' },
  { icon: Drum, size: '200 Liters', label: 'Industrial', desc: 'Bulk supply for manufacturing and processing plants', color: 'border-accent/20 hover:border-accent/50' },
  { icon: Container, size: '1000 L IBC', label: 'Bulk Tank', desc: 'Maximum volume for high-consumption industrial users', color: 'border-accent/30 hover:border-accent/60' },
];

export default function Packaging() {
  return (
    <section className="section section-gray">
      <div className="container-xl px-10">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="section-tag justify-center">Packaging Options</div>
          <h2 className="font-syne text-[46px] font-extrabold tracking-[-1.2px] leading-[1.1] mb-4">Available <span className="text-gradient-accent">Sizes</span></h2>
          <p className="text-[17px] text-muted-500 leading-relaxed max-w-[580px] mx-auto">
            Flexible packaging to meet any order size — from small businesses to industrial bulk buyers.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {sizes.map((s, i) => (
            <motion.div key={s.size} className={`bg-white rounded-xl border p-8 text-center ${s.color} hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300 group`}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="w-24 h-24 mx-auto rounded-2xl bg-surface-50 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-accent-pale transition-all">
                <s.icon size={48} strokeWidth={1.5} className="text-brand group-hover:text-accent transition-colors" />
              </div>
              <div className="text-[28px] font-black text-brand tracking-[-0.5px] mb-1 font-syne">{s.size}</div>
              <div className="text-[13px] font-semibold text-accent mb-3 tracking-[1px] uppercase">{s.label}</div>
              <div className="text-[13px] text-muted-400 leading-relaxed">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
