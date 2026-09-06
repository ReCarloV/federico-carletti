import type { Metadata } from 'next';
import './globals.css';

const title = 'Federico Carletti | Personal Trainer a Milano e Buccinasco';
const description = 'Personal training a Milano e Buccinasco e coaching online per forza, ipertrofia, running e performance. Federico Carletti, laureato in Scienze Motorie e studente di Fisioterapia. Richiedi un appuntamento.';

export const metadata: Metadata = {
  metadataBase: new URL('https://federico-carletti.recarlo5.chatgpt.site'),
  title, description,
  alternates: { canonical: '/' },
  openGraph: { title, description, type: 'website', locale: 'it_IT', siteName: 'Federico Carletti — Physio & Personal Training', url: '/' },
  twitter: { card: 'summary', title, description },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="it"><body>{children}</body></html>;
}
