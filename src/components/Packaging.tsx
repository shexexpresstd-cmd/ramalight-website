const sizes = [
  { label: 'Small', size: '20 Liters', sub: 'Drum · Retail ready', icon: '🪣' },
  { label: 'Medium', size: '50 Liters', sub: 'Drum · Wholesale', icon: '🛢️' },
  { label: 'Large', size: '200 Liters', sub: 'Drum · Industrial', icon: '⚗️' },
  { label: 'Bulk', size: '1000 Liters', sub: 'IBC Tote · Distributor', icon: '🏭' },
];

export default function Packaging() {
  return (
    <section className="section-pad">
      <div className="container-xl">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-5 h-0.5 bg-gold" />
          <span className="text-xs font-bold tracking-[2px] uppercase text-gold">
            Packaging Options
          </span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-black tracking-[-1px] mb-4">
          Available <span className="text-gold">Sizes</span>
        </h2>
        <p className="text-lg text-gray-500 max-w-[600px] mb-12">
          Flexible packaging to meet any order size — from small businesses to
          industrial bulk buyers.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {sizes.map((s) => (
            <div
              key={s.label}
              className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl mb-3">{s.icon}</div>
              <h4 className="text-sm font-bold text-gray-900 mb-1">
                {s.label}
              </h4>
              <div className="text-2xl font-extrabold text-navy mb-1">
                {s.size}
              </div>
              <div className="text-xs text-gray-400">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
