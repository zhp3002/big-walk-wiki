import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '../../locale-config/routing';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// metadataBase 放在 layout;hreflang/canonical 由各页面自己声明
// (此前在这里声明 languages 会被所有子页继承,导致内页 hreflang 错误指向各语言首页)
export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const base = 'https://www.bigwalkguide.xyz';
  return { metadataBase: new URL(base) };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as Locale)) notFound();
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
