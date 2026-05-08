export default function Specifications() {
  const specs = [
    ['Chemical Formula', 'NaOCl'],
    ['Concentration', '10% Available Chlorine ± 0.5%'],
    ['Grade', 'Industrial'],
    ['Appearance', 'Clear, pale yellow-green liquid'],
    ['Packaging', '20L · 50L · 200L Drums · 1000L IBC'],
    ['Shelf Life', '6 Months (proper storage conditions)'],
    ['Standards', 'KS / EAS Compliant'],
  ];

  return (
    <section id="specs" className="section-pad bg-gray-50">
      <div className="container-xl">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-5 h-0.5 bg-gold" />
          <span className="text-xs font-bold tracking-[2px] uppercase text-gold">
            Product
          </span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-black tracking-[-1px] mb-4">
          Technical <span className="text-gold">Specifications</span>
        </h2>
        <p className="text-lg text-gray-500 max-w-[600px] mb-12">
          Premium industrial-grade sodium hypochlorite manufactured to
          international standards.
        </p>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Tank illustration */}
          <div className="text-center shrink-0">
            <div className="w-40 h-60 mx-auto relative rounded-[20px_20px_8px_8px] border-2 border-[#b0c0d8] bg-gradient-to-b from-[#e0e8f4] via-[#c0d0e8] to-[#a0b8d8] overflow-hidden">
              <div className="absolute bottom-2.5 left-1.5 right-1.5 h-[72%] rounded-b bg-gradient-to-b from-gold/10 to-gold/40 flex items-center justify-center">
                <span className="text-2xl font-black text-navy/35">NaOCl</span>
              </div>
            </div>
            <div className="text-sm font-semibold text-gray-700 mt-4">
              Sodium Hypochlorite
            </div>
            <div className="text-xs text-gray-400">10% Industrial Grade</div>
          </div>

          {/* Specs list */}
          <div className="flex-1 w-full">
            {specs.map(([key, val], i) => (
              <div
                key={key}
                className={`flex items-center gap-4 py-3.5 ${
                  i < specs.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
                <span className="w-44 text-sm font-semibold text-gray-700 shrink-0">
                  {key}
                </span>
                <span className="text-sm text-gray-500">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
