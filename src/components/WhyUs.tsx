const reasons = [
  {
    num: '01',
    title: 'Consistent Quality',
    desc: 'Every batch tested to ensure 10% active chlorine — no variance, no surprises.',
  },
  {
    num: '02',
    title: 'Reliable Supply',
    desc: '10-ton daily capacity ensures your orders are fulfilled on time, every time.',
  },
  {
    num: '03',
    title: 'Competitive Pricing',
    desc: 'Local manufacturing means better prices for East African businesses.',
  },
  {
    num: '04',
    title: 'Fast Delivery',
    desc: 'Strategic location enables quick dispatch to Kenya, Uganda, Tanzania, and beyond.',
  },
];

export default function WhyUs() {
  return (
    <section className="section-pad bg-brand-50">
      <div className="container-xl">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-5 h-0.5 bg-accent-light" />
          <span className="text-xs font-bold tracking-[2px] uppercase text-accent-light">
            Why Ramalight
          </span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-black tracking-[-1px] mb-4 text-white">
          Why Choose <span className="text-accent-light">Our Bleach</span>
        </h2>
        <p className="text-lg text-white/40 max-w-[600px] mb-12">
          We don&apos;t just manufacture chemicals — we deliver quality,
          consistency, and partnership.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r) => (
            <div key={r.num} className="text-center">
              <div className="text-5xl font-black text-accent-light tracking-[-1px] mb-3">
                {r.num}
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                {r.title}
              </h4>
              <p className="text-sm text-white/35 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
