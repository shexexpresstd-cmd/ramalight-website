'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest('a,button,input,textarea,[role="button"]') || el.tagName === 'BUTTON' || el.tagName === 'A') setHover(true);
      else setHover(false);
    };
    const out = () => { setVisible(false); setTimeout(() => setVisible(true), 100); };
    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);
    return () => { window.removeEventListener('mousemove', move); document.removeEventListener('mouseover', over); document.removeEventListener('mouseout', out); };
  }, []);

  if (typeof window === 'undefined') return null;

  return (
    <>
      <div className="cursor" style={{ left: pos.x, top: pos.y, width: hover ? 28 : 12, height: hover ? 28 : 12, opacity: visible ? 1 : 0 }} />
      <div className="cursor-ring" style={{ left: pos.x, top: pos.y, width: hover ? 52 : 36, height: hover ? 52 : 36 }} />
    </>
  );
}
