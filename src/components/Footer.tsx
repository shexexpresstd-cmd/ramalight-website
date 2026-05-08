export default function Footer() {
  const links = [
    ['Quick Links', ['Home', 'About', 'Products', 'Contact']],
    [
      'Products',
      ['10% Bleach (20L)', '10% Bleach (50L)', '10% Bleach (200L)', 'Bulk IBC (1000L)'],
    ],
    [
      'Contact',
      ['info@safecargo.so', 'Kenya, East Africa', 'Mon–Fri: 8AM–5PM'],
    ],
  ];

  return (
    <footer className="bg-navy pt-16 pb-8">
      <div className="container-xl px-6 lg:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="text-xl font-extrabold text-white tracking-[-0.4px] mb-3">
              RAMALIGHT<span className="text-gold-light">.</span>
            </div>
            <p className="text-sm text-white/30 leading-relaxed">
              East Africa&apos;s premier manufacturer of industrial-grade sodium
              hypochlorite. Quality. Consistency. Trust.
            </p>
          </div>

          {links.map(([title, items]) => (
            <div key={title as string}>
              <h4 className="text-sm font-bold text-white mb-5 tracking-[0.3px]">
                {title}
              </h4>
              <ul className="space-y-3">
                {(items as string[]).map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-white/30 hover:text-gold-light transition-colors duration-200"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.04] pt-6 text-center">
          <p className="text-xs text-white/15">
            © {new Date().getFullYear()} Ramalight Industries Ltd. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
