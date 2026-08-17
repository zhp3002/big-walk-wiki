import type { Metadata } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { locales, type Locale } from '../../../locale-config/routing';

export async function generateMetadata({ params }: { params: { locale?: string } }): Promise<Metadata> {
  const locale = (locales.includes(params.locale as Locale) ? params.locale : 'en') as Locale;
  const t = await getTranslations({ locale, namespace: 'Legal' });
  return {
    title: t('termsMetaTitle'),
    description: t('termsMetaDesc'),
  };
}

export default function TermsPage() {
  const t = useTranslations('Legal');
  useLocale();
  return (
    <section className="section" style={{ paddingTop: 48 }}>
      <div className="container-narrow">
        <div className="kicker kicker-dim">{t('kicker')}</div>
        <h1>{t('termsTitle')}</h1>
        <p className="lead" style={{ marginTop: '1em' }}>
          {t('termsLead')}
        </p>

        <h2 className="section-h2" style={{ marginTop: 32 }}>{t('termsFanTitle')}</h2>
        <p style={{ color: 'var(--text-dim)' }}>{t('termsFanBody')}</p>

        <h2 className="section-h2" style={{ marginTop: 32 }}>{t('termsAccuracyTitle')}</h2>
        <p style={{ color: 'var(--text-dim)' }}>{t('termsAccuracyBody')}</p>

        <h2 className="section-h2" style={{ marginTop: 32 }}>{t('termsLiabilityTitle')}</h2>
        <p style={{ color: 'var(--text-dim)' }}>{t('termsLiabilityBody')}</p>

        <h2 className="section-h2" style={{ marginTop: 32 }}>{t('termsLinksTitle')}</h2>
        <p style={{ color: 'var(--text-dim)' }}>{t('termsLinksBody')}</p>
      </div>
    </section>
  );
}
