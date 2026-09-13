import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Yagona Vatan — yagona xalq',
  description: 'Bir Vatan. Bir xalq. Bir kelajak.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="uz"><body>{children}</body></html>;
}
