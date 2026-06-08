import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'JF Performance | Assessoria Esportiva & Personal Trainer',
  description: 'Eleve sua corrida e performance física com o Método GPS (8 Semanas) de Jonathas Figueiredo. Treinamento Presencial no Leblon e Assessoria Online.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="bg-zinc-950 text-zinc-100 min-h-screen antialiased selection:bg-orange-500 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
