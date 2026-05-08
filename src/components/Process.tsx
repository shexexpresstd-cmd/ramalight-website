'use client';

import { motion } from 'framer-motion';
import AnimateIn from './AnimateIn';

const steps = [
  'Submit your order request through our website or contact team.',
  'Receive a detailed quote within 24 hours. Approve to proceed.',
  'Your order enters production with full quality assurance testing.',
  'Safe, scheduled delivery to your location across East Africa.',
];

export default function Process() {
  return (
    <section className="section-pad">
      <div className="container-xl">
        <AnimateIn>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-5 h-0.5 bg-accent" />
            <span className="text-xs font-bold tracking-[2px] uppercase text-accent">
              Process
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-[-1px] mb-4">
            How <span className="text-accent">It Works</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-[600px] mb-12">
            From inquiry to delivery — a seamless process for industrial buyers.
          </p>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Inquiry', 'Quote & Confirm', 'Production', 'Delivery'].map((title, i) => (
            <AnimateIn key={title} delay={i * 0.2}>
              <div className="relative text-center">
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-100 to-brand-200 text-white flex items-center justify-center font-extrabold text-base mx-auto mb-4 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {i + 1}
                </motion.div>
                <h4 className="text-base font-bold text-slate-900 mb-1.5">{title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{steps[i]}</p>
                {i < 3 && (
                  <motion.span
                    className="hidden lg:block absolute -right-3 top-[14px] text-slate-300 text-xl"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                  >
                    →
                  </motion.span>
                )}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
