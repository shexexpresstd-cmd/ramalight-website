const steps = [
  'Submit your order request through our website or contact team.',
  'Receive a detailed quote within 24 hours. Approve to proceed.',
  'Your order enters production with full quality assurance testing.',
  'Safe, scheduled delivery to your location across East Africa.',
];

export default function Process() {
  return (
    <section className="section-pad">
      <div className="container-xl">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-5 h-0.5 bg-accent" />
          <span className="text-xs font-bold tracking-[2px] uppercase text-accent">
            Process
          </span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-black tracking-[-1px] mb-4">
          How <span className="text-accent">It Works</span>
        </h2>
        <p className="text-lg text-slate-500 max-w-[600px] mb-12">
          From inquiry to delivery — a seamless process for industrial buyers.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Inquiry', 'Quote & Confirm', 'Production', 'Delivery'].map(
            (title, i) => (
              <div key={title} className="relative text-center">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-100 to-brand-200 text-white flex items-center justify-center font-extrabold text-base mx-auto mb-4">
                  {i + 1}
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1.5">
                  {title}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {steps[i]}
                </p>
                {i < 3 && (
                  <span className="hidden lg:block absolute -right-3 top-[14px] text-slate-300 text-xl">
                    →
                  </span>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
