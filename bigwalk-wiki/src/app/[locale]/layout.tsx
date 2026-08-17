import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '../../locale-config/routing';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// hreflang alternates: 每个语言版本的首页互指
export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const base = 'https://www.bigwalkguide.xyz';
  const languages = Object.fromEntries(
    locales.map((l) => [l, `${base}/${l}`])
  );
  languages['x-default'] = `${base}/en`;
  return { metadataBase: new URL(base), alternates: { languages } };
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
