'use client';

import { motion } from 'framer-motion';

const industries = [
  { icon: '/icons/icon_9.svg', title: 'Water Treatment', desc: 'Municipal &amp; industrial water disinfection, wastewater treatment, and pipeline sanitation.' },
  { icon: '/icons/icon_10.svg', title: 'Industrial Cleaning', desc: 'Heavy-duty degreasing, equipment sterilization, and production line sanitation.' },
  { icon: '/icons/icon_11.svg', title: 'Food Processing', desc: 'Contact surface sanitization, CIP systems, and facility hygiene protocols.' },
  { icon: '/icons/icon_12.svg', title: 'Commercial Use', desc: 'Hotels, hospitals, schools, and large-scale institutional cleaning programs.' },
  { icon: '/icons/icon_13.svg', title: 'Agriculture', desc: 'Irrigation system treatment, livestock area disinfection, and crop protection.' },
  { icon: '/icons/icon_14.svg', title: 'Healthcare', desc: 'Surface disinfection, waste decontamination, and infection control protocols.' },
];

export default function Features() {
  return (
    <section className="section section-gray" id="features">
      <div className="container-xl px-10">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="section-tag justify-center">Applications</div>
          <h2 className="font-syne text-[46px] font-extrabold tracking-[-1.2px] leading-[1.1] mb-4">Industries <span className="text-gradient-accent">We Serve</span></h2>
          <p className="text-[17px] text-muted-500 leading-relaxed max-w-[580px] mx-auto">
            Our high-grade sodium hypochlorite powers critical operations across multiple sectors throughout East Africa.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {industries.map((item, i) => (
            <motion.div key={item.title} className="group bg-white p-8 rounded-xl border border-surface-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:border-accent/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <img src={item.icon} alt={item.title} className="w-64 h-64 object-contain mb-5 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-[17px] font-bold text-muted-900 mb-2">{item.title}</h4>
              <p className="text-[14px] text-muted-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
