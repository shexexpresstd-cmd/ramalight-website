'use client';

import { motion } from 'framer-motion';
import AnimateIn from './AnimateIn';

const reasons = [
  { num: '01', title: 'Consistent Quality', desc: 'Every batch tested to ensure 10% active chlorine — no variance, no surprises.' },
  { num: '02', title: 'Reliable Supply', desc: '10-ton daily capacity ensures your orders are fulfilled on time, every time.' },
  { num: '03', title: 'Competitive Pricing', desc: 'Local manufacturing means better prices for East African businesses.' },
  { num: '04', title: 'Fast Delivery', desc: 'Strategic location enables quick dispatch to Kenya, Uganda, Tanzania, and beyond.' },
];

export default function WhyUs() {
  return (
    <section className="section-pad bg-slate-50 relative overflow-hidden">
      <div className="container-xl relative z-10">
        <AnimateIn>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-5 h-0.5 bg-accent" />
            <span className="text-xs font-bold tracking-[2px] uppercase text-accent">
              Why Ramalight
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-[-1px] mb-4 text-slate-900">
            Why Choose <span className="text-accent">Our Bleach</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-[600px] mb-12">
            We don&apos;t just manufacture chemicals — we deliver quality,
            consistency, and partnership.
          </p>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <AnimateIn key={r.num} delay={i * 0.15}>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-5xl font-black text-accent tracking-[-1px] mb-3"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                >
                  {r.num}
                </motion.div>
                <h4 className="text-base font-bold text-slate-800 mb-2">{r.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{r.desc}</p>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
