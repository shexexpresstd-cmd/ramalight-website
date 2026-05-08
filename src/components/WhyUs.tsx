'use client';

import { motion } from 'framer-motion';

const reasons = [
  { num: '01', title: 'Consistent Quality', desc: 'Every batch tested to ensure 10% active chlorine — no variance, no surprises.' },
  { num: '02', title: 'Reliable Supply', desc: '10-ton daily capacity ensures your orders are fulfilled on time, every time.' },
  { num: '03', title: 'Competitive Pricing', desc: 'Local manufacturing means better prices for East African businesses.' },
  { num: '04', title: 'Fast Delivery', desc: 'Strategic location enables quick dispatch to Kenya, Uganda, Tanzania, and beyond.' },
];

export default function WhyUs() {
  return (
    <section className="section section-gray" id="why">
      <div className="container-xl px-10">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="section-tag justify-center text-accent-light">Why Ramalight</div>
          <h2 className="font-syne text-[46px] font-extrabold tracking-[-1.2px] leading-[1.1] mb-4 text-muted-900">Why Choose <span className="text-gradient-accent">Our Bleach</span></h2>
          <p className="text-[17px] text-muted-500 leading-relaxed max-w-[580px] mx-auto">
            We don&apos;t just manufacture chemicals — we deliver quality, consistency, and true partnership.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <motion.div key={r.num} className="text-center group cursor-default"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
              <div className="text-5xl font-black text-accent-light tracking-[-1px] mb-3 font-syne">{r.num}</div>
              <h4 className="text-base font-bold text-muted-800 mb-2">{r.title}</h4>
              <p className="text-sm text-muted-400 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
