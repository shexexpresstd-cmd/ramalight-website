'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="py-24 bg-surface-50 text-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/10 to-transparent" />
      </div>
      <div className="container-xl px-10 relative z-10">
        <motion.h2 className="font-syne text-4xl lg:text-5xl font-black text-muted-900 tracking-[-1px] mb-3"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Ready to <span className="text-gradient-accent">Partner</span> With Us?
        </motion.h2>
        <motion.p className="text-lg text-muted-500 max-w-[500px] mx-auto mb-8"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          Get a customized quote for your bulk sodium hypochlorite needs. We&apos;ll respond within 24 hours.
        </motion.p>
        <motion.button onClick={() => scrollTo('contact')}
          className="px-10 py-4 text-lg font-semibold bg-brand text-white rounded-lg inline-flex items-center gap-2 group hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(16,24,32,0.35)] transition-all"
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          Request Your Quote
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </section>
  );
}
