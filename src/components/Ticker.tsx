export default function Ticker() {
  const items = [
    'Premium 10% NaOCl Concentration', 'Industrial Grade Guaranteed', 'KS/KEBS Certified',
    'Bulk Supply Available', 'East Africa Delivery', '24hr Response Time',
  ];
  const doubled = [...items, ...items];

  return (
    <div className="bg-gradient-to-r from-accent to-accent-light py-3 overflow-hidden relative">
      <div className="flex gap-0 w-max" style={{ animation: 'tickerScroll 25s linear infinite' }}>
        {doubled.map((t, i) => (
          <div key={i} className="flex items-center gap-3 px-8 text-[13px] font-bold text-brand whitespace-nowrap font-syne tracking-[0.5px]">
            {t}
            <div className="w-1 h-1 bg-brand rounded-full opacity-40" />
          </div>
        ))}
      </div>
      <style>{`.ticker-band:hover .flex { animation-play-state: paused; }`}</style>
    </div>
  );
}
