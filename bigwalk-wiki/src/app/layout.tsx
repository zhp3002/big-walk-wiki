import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import './globals.css';

// SEO meta —— 按首页素材.md 调研结果逐字配置
export const metadata: Metadata = {
  title: 'Big Walk Wiki — Guides, Puzzles, Maps & Multiplayer',
  description: 'Explore Big Walk guides for beginners, puzzles, maps, items, multiplayer, crossplay, achievements, and key mechanics across PC, Mac, PS5, and Switch 2.',
  keywords: 'Big Walk, Big Walk wiki, Big Walk guide, puzzles, map, multiplayer, crossplay, achievements',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
