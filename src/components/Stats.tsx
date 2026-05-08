'use client';

import { motion } from 'framer-motion';
import { Factory, Shield, Truck, Clock } from 'lucide-react';

const stats = [
  { icon: Factory, value: '10+', label: 'Tons Daily Production', sub: 'Continuous operation at our Kenya facility' },
  { icon: Shield, value: '10–15%', label: 'Active Chlorine', sub: 'Consistent concentration, batch-tested' },
  { icon: Truck, value: '3,600', label: 'Annual Tonnage', sub: 'Serving East Africa at scale' },
  { icon: Clock, value: '6 Mo.', label: 'Shelf Life', sub: 'Properly stored, no degradation' },
];

export default function Stats() {
  return (
    <section className="section section-gray">
      <div className="container-xl px-10">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="section-tag justify-center">By The Numbers</div>
          <h2 className="font-syne text-[46px] font-extrabold tracking-[-1.2px] leading-[1.1] mb-4">Manufacturing <span className="text-gradient-gold">Excellence</span></h2>
          <p className="text-[17px] text-muted-500 leading-relaxed max-w-[580px] mx-auto">
            Ramalight Industries delivers consistent, high-quality chemical solutions at industrial scale across East Africa.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {stats.map((s, i) => (
            <motion.div key={s.label} className="bg-white p-8 rounded-xl border border-surface-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:border-gold/20 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <s.icon size={22} className="text-gold-light" />
              </div>
              <div className="text-[36px] font-black text-navy tracking-[-1px] mb-1 font-syne">{s.value}</div>
              <div className="text-[15px] font-semibold text-muted-800 mb-2">{s.label}</div>
              <div className="text-[13px] text-muted-400 leading-relaxed">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
