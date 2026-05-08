'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AnimateIn from './AnimateIn';

function AnimatedCounter({ target, suffix = '', decimals = 0 }: { target: number; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.5 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = target * eased;
      setCount(start);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const items = [
  { target: 10, suffix: '%', desc: 'Active Chlorine Concentration' },
  { target: 10, suffix: '+', desc: 'Tons Produced Daily' },
  { target: 91, suffix: ' KES', desc: 'Price Per Unit (Retail)' },
  { target: 72.5, suffix: '%', desc: 'Profit Margin', decimals: 1 },
];

export default function Stats() {
  return (
    <section className="section-pad bg-slate-50">
      <div className="container-xl">
        <AnimateIn>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-5 h-0.5 bg-accent" />
            <span className="text-xs font-bold tracking-[2px] uppercase text-accent">
              By The Numbers
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-[-1px] mb-4">
            Manufacturing <span className="text-accent">Excellence</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-[600px] mb-12">
            RAMALIGHT CO. LIMITED delivers consistent, high-quality chemical
            solutions at industrial scale.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <AnimateIn key={item.desc} delay={i * 0.1}>
              <motion.div
                className="group relative bg-white border border-slate-200 rounded-xl p-7 text-center cursor-default
                           before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-accent before:to-accent-light before:opacity-0 before:transition-opacity
                           hover:before:opacity-100"
                whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.06)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl font-black text-brand tracking-[-1px]">
                  <AnimatedCounter target={item.target} suffix={item.suffix} decimals={item.decimals} />
                </div>
                <div className="text-sm text-slate-400 font-medium mt-1">
                  {item.desc}
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
