'use client';

import AnimateIn from './AnimateIn';
import NaOClMolecule from './NaOClMolecule';

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
  ['Contact', 'info@ramalight.co.ke · +254 724 806 736'],
];

export default function Specifications() {
  return (
    <section id="specs" className="section-pad bg-slate-50">
      <div className="container-xl">
        <AnimateIn>
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
        </AnimateIn>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Molecule Visual */}
          <AnimateIn delay={0.2}>
            <div className="text-center shrink-0">
              <NaOClMolecule className="w-64 h-56" />
              <div className="text-sm font-semibold text-slate-700 mt-2">
                Sodium Hypochlorite
              </div>
              <div className="text-xs text-slate-400">10%–15% Commercial &amp; Industrial Grade</div>
            </div>
          </AnimateIn>

          {/* Specs list */}
          <div className="flex-1 w-full">
            {specs.map(([key, val], i) => (
              <AnimateIn key={key} delay={i * 0.05}>
                <div
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
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
