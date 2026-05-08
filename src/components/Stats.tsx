export default function Stats() {
  const items = [
    { num: '10', accent: '%', desc: 'Active Chlorine Concentration' },
    { num: '10', accent: '+', desc: 'Tons Produced Daily' },
    { num: '91', accent: ' KES', desc: 'Price Per Unit (Retail)' },
    { num: '72.5', accent: '%', desc: 'Profit Margin' },
  ];

  return (
    <section className="section-pad bg-slate-50">
      <div className="container-xl">
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item) => (
            <div
              key={item.desc}
              className="group relative bg-white border border-slate-200 rounded-xl p-7 text-center cursor-default
                         before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-accent before:to-accent-light before:opacity-0 before:transition-opacity
                         hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:before:opacity-100 transition-all duration-300"
            >
              <div className="text-4xl font-black text-brand tracking-[-1px]">
                {item.num}
                {item.accent && <span className="text-accent">{item.accent}</span>}
              </div>
              <div className="text-sm text-slate-400 font-medium mt-1">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
