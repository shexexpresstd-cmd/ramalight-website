export default function Specifications() {
  const specs = [
    ['Chemical Formula', 'NaOCl'],
    ['Concentration', '10% Available Chlorine ± 0.5% (Commercial)'],
    ['Also Available', '12–15% Industrial Grade'],
    ['Grade', 'Commercial / Industrial'],
    ['Appearance', 'Clear, pale yellow-green liquid'],
    ['Packaging', '5L · 20L jerrycans · 200L drums · 1000L IBC'],
    ['Shelf Life', '6 Months (proper storage conditions)'],
    ['Standards', 'KS / EAS / KEBS Compliant'],
    ['Manufacturer', 'RAMALIGHT CO. LIMITED, Kenya'],
    ['Contact', 'info@ramalight.co.ke · 0724 806 736'],
  ];

  return (
    <section id="specs" className="section-pad bg-slate-50">
      <div className="container-xl">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-5 h-0.5 bg-accent" />
          <span className="text-xs font-bold tracking-[2px] uppercase text-accent">
            Product
          </span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-black tracking-[-1px] mb-4">
          Technical <span className="text-accent">Specifications</span>
        </h2>
        <p className="text-lg text-slate-500 max-w-[600px] mb-12">
          Premium industrial-grade sodium hypochlorite manufactured to
          international standards.
        </p>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Tank illustration */}
          <div className="text-center shrink-0">
            <div className="w-40 h-60 mx-auto relative rounded-[20px_20px_8px_8px] border-2 border-slate-300 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 overflow-hidden">
              <div className="absolute bottom-2.5 left-1.5 right-1.5 h-[72%] rounded-b bg-gradient-to-b from-accent/10 to-accent/40 flex items-center justify-center">
                <span className="text-2xl font-black text-brand/35">NaOCl</span>
              </div>
            </div>
            <div className="text-sm font-semibold text-slate-700 mt-4">
              Sodium Hypochlorite
            </div>
            <div className="text-xs text-slate-400">10%–15% Commercial &amp; Industrial Grade</div>
          </div>

          {/* Specs list */}
          <div className="flex-1 w-full">
            {specs.map(([key, val], i) => (
              <div
                key={key}
                className={`flex items-center gap-4 py-3.5 ${
                  i < specs.length - 1 ? 'border-b border-slate-100' : ''
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                <span className="w-44 text-sm font-semibold text-slate-700 shrink-0">
                  {key}
                </span>
                <span className="text-sm text-slate-500">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
