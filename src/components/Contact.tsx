'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const info = [
  { icon: Phone, label: 'Phone', value: '+254 724 806 736', href: 'tel:+254724806736' },
  { icon: Mail, label: 'Email', value: 'info@ramalight.co.ke', href: 'mailto:info@ramalight.co.ke' },
  { icon: MapPin, label: 'Location', value: 'Kenya, East Africa', href: '#' },
  { icon: Clock, label: 'Hours', value: 'Mon–Fri: 8AM–5PM', href: '#' },
];

export default function Contact() {
  return (
    <section className="section section-gray" id="contact">
      <div className="container-xl px-10">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="section-tag justify-center">Contact</div>
          <h2 className="font-syne text-[46px] font-extrabold tracking-[-1.2px] leading-[1.1] mb-4">Get In <span className="text-gradient-accent">Touch</span></h2>
          <p className="text-[17px] text-muted-500 leading-relaxed max-w-[580px] mx-auto">
            Ready to partner? Our team responds within 24 hours for all inquiries.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-[1000px] mx-auto">
          {/* Contact info */}
          <div className="space-y-6">
            {info.map((item, i) => (
              <motion.a key={item.label} href={item.href} className="flex items-start gap-4 p-5 rounded-xl bg-surface-50 border border-surface-200 hover:border-accent/20 hover:bg-white transition-all group"
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0 border border-surface-200 group-hover:scale-110 transition-transform">
                  <item.icon size={18} className="text-muted-500 group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-muted-400 uppercase tracking-[0.5px] mb-0.5">{item.label}</div>
                  <div className="text-sm font-semibold text-muted-800">{item.value}</div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Form */}
          <motion.div className="bg-white p-8 rounded-xl border border-surface-200"
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="font-syne text-xl font-extrabold text-muted-900 mb-6">Send Us a Message</h3>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border border-surface-200 rounded-lg text-sm focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(48,120,80,0.08)] transition-all" />
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-surface-200 rounded-lg text-sm focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(48,120,80,0.08)] transition-all" />
              </div>
              <input type="text" placeholder="Company / Organization" className="w-full px-4 py-3 border border-surface-200 rounded-lg text-sm focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(48,120,80,0.08)] transition-all" />
              <textarea rows={4} placeholder="Tell us about your requirements..." className="w-full px-4 py-3 border border-surface-200 rounded-lg text-sm focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(48,120,80,0.08)] transition-all resize-y" />
              <button type="submit" className="w-full px-6 py-4 text-base font-semibold bg-gradient-to-br from-accent to-accent-light text-white rounded-lg hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(48,120,80,0.35)] transition-all inline-flex items-center justify-center gap-2">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
