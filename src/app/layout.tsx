import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RAMALIGHT CO. LIMITED – Sodium Hypochlorite Manufacturing',
  description:
    'Kenya\'s trusted producer of 10% industrial-grade sodium hypochlorite for water treatment, sanitation, agriculture, and commercial cleaning across East Africa.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
