'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="py-24 bg-accent-pale text-center relative overflow-hidden">
      {/* Animated lines */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="container-xl px-6 relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-[-1px] mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to <span className="text-accent">Partner</span> With Us?
        </motion.h2>
        <motion.p
          className="text-lg text-slate-500 max-w-[500px] mx-auto mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Get a customized quote for your bulk sodium hypochlorite needs.
          We&apos;ll respond within 24 hours.
        </motion.p>
        <motion.button
          onClick={() => scrollTo('contact')}
          className="px-10 py-4 text-lg font-semibold bg-gradient-to-br from-accent to-accent-light text-white rounded-lg inline-flex items-center gap-2 group"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Request Your Quote
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight size={20} />
          </motion.span>
        </motion.button>
      </div>
    </section>
  );
}
