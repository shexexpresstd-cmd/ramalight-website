'use client';

import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', msg: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will respond within 24 hours.');
    setForm({ name: '', email: '', phone: '', msg: '' });
  };

  const contacts = [
    { icon: Mail, title: 'Email', detail: 'info@ramalight.co.ke' },
    { icon: Phone, title: 'Phone', detail: '+254 724 806 736' },
    { icon: MapPin, title: 'Location', detail: 'Kenya, East Africa' },
    { icon: Clock, title: 'Business Hours', detail: 'Mon–Fri · 8AM–5PM' },
  ];

  return (
    <section id="contact" className="section-pad">
      <div className="container-xl">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-5 h-0.5 bg-accent" />
          <span className="text-xs font-bold tracking-[2px] uppercase text-accent">
            Contact
          </span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-black tracking-[-1px] mb-4">
          Get In <span className="text-accent">Touch</span>
        </h2>
        <p className="text-lg text-slate-500 max-w-[600px] mb-12">
          Ready to partner? Our team responds within 24 hours.
        </p>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-slate-200 rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
          >
            {[
              ['Full Name', 'name', 'text'],
              ['Email Address', 'email', 'email'],
              ['Phone Number', 'phone', 'tel'],
            ].map(([label, key, type]) => (
              <div key={key} className="mb-4">
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-[0.5px] mb-1.5">
                  {label}
                </label>
                <input
                  type={type}
                  value={form[key as keyof typeof form]}
                  onChange={(e) =>
                    setForm({ ...form, [key]: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)] transition-all"
                  required
                />
              </div>
            ))}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-slate-600 uppercase tracking-[0.5px] mb-1.5">
                Message
              </label>
              <textarea
                value={form.msg}
                onChange={(e) => setForm({ ...form, msg: e.target.value })}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)] transition-all resize-y h-32"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-4 text-base font-semibold bg-gradient-to-br from-accent to-accent-light text-white rounded-lg hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(59,130,246,0.35)] transition-all inline-flex items-center justify-center gap-2"
            >
              <Send size={18} /> Send Inquiry
            </button>
          </form>

          {/* Info cards */}
          <div className="flex flex-col gap-4">
            {contacts.map((c) => (
              <div
                key={c.title}
                className="flex items-center gap-4 bg-white border border-slate-200 rounded-lg p-5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all"
              >
                <div className="w-11 h-11 rounded-lg bg-slate-50 flex items-center justify-center">
                  <c.icon size={18} className="text-brand/50" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-800">
                    {c.title}
                  </h4>
                  <p className="text-sm text-slate-500">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
