import { Droplets, Factory, Sprout, ArrowRight } from 'lucide-react';

const apps = [
  {
    icon: Droplets,
    title: 'Water Treatment',
    desc: 'Municipal water purification, wastewater treatment plants, and swimming pool sanitation — ensuring clean, safe water across communities.',
  },
  {
    icon: Factory,
    title: 'Industrial Sanitation',
    desc: 'Food processing facilities, beverage manufacturing, hospitality, and healthcare institutions requiring strict hygiene compliance.',
  },
  {
    icon: Sprout,
    title: 'Agriculture',
    desc: 'Livestock farm disinfection, irrigation system cleaning, crop protection, and post-harvest treatment for maximum yield.',
  },
];

export default function Applications() {
  return (
    <section className="section-pad">
      <div className="container-xl">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-5 h-0.5 bg-gold" />
          <span className="text-xs font-bold tracking-[2px] uppercase text-gold">
            Applications
          </span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-black tracking-[-1px] mb-4">
          Industries <span className="text-gold">We Serve</span>
        </h2>
        <p className="text-lg text-gray-500 max-w-[600px] mb-12">
          Our high-grade sodium hypochlorite powers critical operations across
          multiple sectors.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {apps.map((a) => (
            <div
              key={a.title}
              className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 hover:border-transparent transition-all duration-300"
            >
              <div className="w-13 h-13 rounded-[10px] bg-gray-50 flex items-center justify-center mb-5 group-hover:bg-gold-pale transition-colors">
                <a.icon
                  size={24}
                  className="text-navy/60 group-hover:text-gold transition-colors"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{a.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                {a.desc}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold cursor-pointer group-hover:gap-2.5 transition-all">
                Learn more <ArrowRight size={14} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
