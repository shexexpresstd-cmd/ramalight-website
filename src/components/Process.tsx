'use client';

import { motion } from 'framer-motion';

const steps = [
  { step: '01', title: 'Submit Inquiry', desc: 'Fill out our contact form or call us directly. We respond within 24 hours.' },
  { step: '02', title: 'Get Quote', desc: 'Receive a customized quote based on your volume, concentration, and delivery needs.' },
  { step: '03', title: 'Confirm Order', desc: 'Approve the quote — we begin production and prepare your shipment.' },
  { step: '04', title: 'Receive Delivery', desc: 'Your sodium hypochlorite arrives on schedule, ready for immediate use.' },
];

export default function Process() {
  return (
    <section className="section section-gray">
      <div className="container-xl px-10">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="section-tag justify-center">Process</div>
          <h2 className="font-syne text-[46px] font-extrabold tracking-[-1.2px] leading-[1.1] mb-4">How It <span className="text-gradient-gold">Works</span></h2>
          <p className="text-[17px] text-muted-500 leading-relaxed max-w-[580px] mx-auto">
            From inquiry to delivery — a seamless process designed for industrial buyers.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div key={s.step} className="text-center group"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-light text-navy flex items-center justify-center font-extrabold text-sm mx-auto mb-4 shadow-[0_4px_16px_rgba(200,150,12,0.25)] group-hover:scale-110 transition-transform font-syne">
                {s.step}
              </div>
              <h4 className="text-base font-bold text-muted-900 mb-2">{s.title}</h4>
              <p className="text-sm text-muted-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
