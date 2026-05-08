const sizes = [
  { label: 'Jerrycan', size: '5 Liters', sub: 'Household / Small business', icon: '🪣' },
  { label: 'Jerrycan', size: '20 Liters', sub: 'Commercial / Wholesale', icon: '🛢️' },
  { label: 'Drum', size: '200 Liters', sub: 'Industrial bulk', icon: '⚗️' },
  { label: 'IBC Tote', size: '1000 Liters', sub: 'Factory supply / Distributor', icon: '🏭' },
];

const productLines = [
  { name: 'Commercial Cleaner', conc: '10%', pkg: '5L, 20L jerrycans', market: 'Hotels, hospitals, offices' },
  { name: 'Industrial Hypo', conc: '12–15%', pkg: '200L drums, IBC totes', market: 'Water companies, factories' },
  { name: 'Household Bleach', conc: '3–5%', pkg: '500ml, 1L bottles', market: 'Homes, supermarkets' },
  { name: 'Water Guard', conc: '5%', pkg: '250ml bottles, sachets', market: 'Household water treatment' },
];

export default function Packaging() {
  return (
    <section className="section-pad">
      <div className="container-xl">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-5 h-0.5 bg-accent" />
          <span className="text-xs font-bold tracking-[2px] uppercase text-accent">
            Products & Packaging
          </span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-black tracking-[-1px] mb-4">
          Product <span className="text-accent">Lineup</span>
        </h2>
        <p className="text-lg text-slate-500 max-w-[600px] mb-12">
          Commercial and industrial-grade sodium hypochlorite for every customer
          — from small businesses to large factories.
        </p>

        {/* Product lines */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {productLines.map((p) => (
            <div
              key={p.name}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
                {p.conc}
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-1">
                {p.name}
              </h4>
              <div className="text-sm text-slate-500 mb-2">{p.pkg}</div>
              <div className="text-xs text-slate-400">{p.market}</div>
            </div>
          ))}
        </div>

        {/* Packaging options */}
        <div className="flex items-center gap-3 mb-3 pt-4">
          <span className="w-5 h-0.5 bg-accent" />
          <span className="text-xs font-bold tracking-[2px] uppercase text-accent">
            Available Sizes
          </span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {sizes.map((s) => (
            <div
              key={s.label + s.size}
              className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl mb-3">{s.icon}</div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">
                {s.label}
              </h4>
              <div className="text-2xl font-extrabold text-brand mb-1">
                {s.size}
              </div>
              <div className="text-xs text-slate-400">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
