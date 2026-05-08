'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  { name: 'JK', role: 'Operations Director, Nairobi Water Co.', text: 'Ramalight has been our sole supplier for 3 years. Their consistency and delivery reliability are unmatched in the region.' },
  { name: 'AL', role: 'Procurement Manager, Chem-Plus Uganda', text: 'We switched from imported bleach to Ramalight — saved 30% on costs with the same quality. Local delivery is a game changer.' },
  { name: 'MD', role: 'CEO, Fresh Fields Agriculture', text: 'Their 200L drums keep our irrigation systems running. Quick response times and always in stock. Highly recommended.' },
];

export default function Testimonials() {
  return (
    <section className="section section-gray">
      <div className="container-xl px-10">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="section-tag justify-center">Testimonials</div>
          <h2 className="font-syne text-[46px] font-extrabold tracking-[-1.2px] leading-[1.1] mb-4">Trusted By <span className="text-gradient-gold">Industry Leaders</span></h2>
          <p className="text-[17px] text-muted-500 leading-relaxed max-w-[580px] mx-auto">
            Hear from the businesses that rely on Ramalight for their chemical supply needs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 max-w-[900px] mx-auto">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} className="bg-white p-8 rounded-xl border border-surface-200 relative hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
              <Quote size={32} className="text-gold/20 mb-4" />
              <p className="text-[15px] text-muted-600 leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center text-xs font-bold text-navy">{t.name}</div>
                <div>
                  <div className="text-sm font-semibold text-muted-900">{t.name}</div>
                  <div className="text-xs text-muted-400">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
