import { notFound } from 'next/navigation';
import { locales, type Locale } from '../../locale-config/routing';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
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
