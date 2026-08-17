import type { Metadata } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { locales, type Locale } from '../../../locale-config/routing';

export async function generateMetadata({ params }: { params: { locale?: string } }): Promise<Metadata> {
  const locale = (locales.includes(params.locale as Locale) ? params.locale : 'en') as Locale;
  const t = await getTranslations({ locale, namespace: 'Legal' });
  return {
    title: t('privacyMetaTitle'),
    description: t('privacyMetaDesc'),
  };
}

export default function PrivacyPage() {
  const t = useTranslations('Legal');
  useLocale();
  return (
    <section className="section" style={{ paddingTop: 48 }}>
      <div className="container-narrow">
        <div className="kicker kicker-dim">{t('kicker')}</div>
        <h1>{t('privacyTitle')}</h1>
        <p className="lead" style={{ marginTop: '1em' }}>
          {t('privacyLead')}
        </p>

        <h2 className="section-h2" style={{ marginTop: 32 }}>{t('privacyCollectTitle')}</h2>
        <p style={{ color: 'var(--text-dim)' }}>{t('privacyCollectBody')}</p>

        <h2 className="section-h2" style={{ marginTop: 32 }}>{t('privacyThirdTitle')}</h2>
        <p style={{ color: 'var(--text-dim)' }}>{t('privacyThirdBody')}</p>

        <h2 className="section-h2" style={{ marginTop: 32 }}>{t('privacyContactTitle')}</h2>
        <p style={{ color: 'var(--text-dim)' }}>{t('privacyContactBody')}</p>

        <h2 className="section-h2" style={{ marginTop: 32 }}>{t('privacyChangesTitle')}</h2>
        <p style={{ color: 'var(--text-dim)' }}>{t('privacyChangesBody')}</p>
      </div>
    </section>
  );
}
