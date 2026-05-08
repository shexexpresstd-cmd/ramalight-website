'use client';

import { ArrowRight } from 'lucide-react';

export default function CTA() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="py-20 bg-gradient-to-br from-navy to-navy-50 text-center">
      <div className="container-xl px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-[-1px] mb-3">
          Ready to <span className="text-gold-light">Partner</span> With Us?
        </h2>
        <p className="text-lg text-white/40 max-w-[500px] mx-auto mb-8">
          Get a customized quote for your bulk sodium hypochlorite needs.
          We&apos;ll respond within 24 hours.
        </p>
        <button
          onClick={() => scrollTo('contact')}
          className="px-10 py-4 text-lg font-semibold bg-gradient-to-br from-gold to-gold-light text-navy rounded-lg hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(200,150,12,0.35)] transition-all inline-flex items-center gap-2"
        >
          Request Your Quote <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}
