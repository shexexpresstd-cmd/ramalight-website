export default function Footer() {
  const links = [
    ['Quick Links', ['Home', 'Products', 'Specifications', 'Contact']],
    ['Products', ['Commercial Cleaner (10%)', 'Industrial Hypo (12–15%)', 'Household Bleach (3–5%)', 'Water Guard (5%)']],
    ['Contact', ['info@ramalight.co.ke', '+254 724 806 736', 'Kenya, East Africa', 'Mon–Fri: 8AM–5PM']],
  ];

  return (
    <footer className="bg-white pt-16 pb-8 border-t border-slate-100">
      <div className="container-xl px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <img src="/logo.png" alt="RAMALIGHT CO. LIMITED" className="h-14 w-auto mb-4 " />
            <p className="text-sm text-muted-500 leading-relaxed mb-4">
              RAMALIGHT CO. LIMITED — East Africa&apos;s premier manufacturer
              of industrial-grade sodium hypochlorite. Quality. Consistency. Trust.
            </p>
            <p className="text-xs text-muted-400">ramalight.co.ke</p>
          </div>

          {links.map(([title, items]) => (
            <div key={title as string}>
              <h4 className="text-sm font-bold text-muted-800 mb-5 tracking-[0.3px]">{title}</h4>
              <ul className="space-y-3">
                {(items as string[]).map(l => (
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-500 hover:text-accent-light transition-colors duration-200">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-200 pt-6 text-center">
          <p className="text-xs text-muted-400">© {new Date().getFullYear()} RAMALIGHT CO. LIMITED. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
