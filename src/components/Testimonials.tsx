const testimonials = [
  {
    stars: 5,
    quote:
      'Consistent quality and reliable delivery. Ramalight has been our sole bleach supplier for water treatment operations across three counties.',
    name: 'John Kamau',
    company: 'Water Treatment Co. Ltd',
    bg: 'bg-brand-100',
  },
  {
    stars: 5,
    quote:
      'Their 10% sodium hypochlorite is exactly what we need for our food processing facility. Never had a quality issue in 2 years.',
    name: 'Peter Otieno',
    company: 'Kisumu Municipal',
    bg: 'bg-accent',
  },
  {
    stars: 5,
    quote:
      'As a bulk buyer for agricultural use, the pricing and packaging options are perfect. Great partnership.',
    name: 'Mary Wanjiku',
    company: 'Green Farms Kenya',
    bg: 'bg-emerald-600',
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad bg-slate-50">
      <div className="container-xl">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-5 h-0.5 bg-accent" />
          <span className="text-xs font-bold tracking-[2px] uppercase text-accent">
            Testimonials
          </span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-black tracking-[-1px] mb-4">
          Trusted By <span className="text-accent">Industry Leaders</span>
        </h2>
        <p className="text-lg text-slate-500 max-w-[600px] mb-12">
          Hear from the businesses that rely on Ramalight for their chemical
          supply needs.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-slate-200 rounded-xl p-7"
            >
              <div className="text-accent text-sm mb-3">
                {'★'.repeat(t.stars)}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed italic mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full ${t.bg} flex items-center justify-center text-xs font-bold text-white`}
                >
                  {t.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-400">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
