'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';
import { locales } from '../locale-config/routing';

export default function Header() {
  const t = useTranslations('Nav');
  const locale = useLocale();
  const [open, setOpen] = useState(false);

  const switchTo = (l: string) => `/${l}`;

  return (
    <header>
      {/* 状态条 */}
      <div className="statusbar">
        <div className="container">
          <span className="live">{t('statusLive')}</span>
          <span className="sep">//</span>
          <span>{t('statusGame')}</span>
          <span className="sep">//</span>
          <span>{t('statusWiki')}</span>
          {/* 多语言按调研优先级:EN → JA → DE → ES(未翻译语言回退英文内容) */}
          <span style={{ marginLeft: 'auto' }} className="lang-switch">
            {locales.map((l) => (
              <Link key={l} href={switchTo(l)} className={locale === l ? 'active' : ''}>{l.toUpperCase()}</Link>
            ))}
          </span>
        </div>
      </div>

      {/* 主导航 */}
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 24px', borderBottom: '1px solid var(--line)' }}>
        <Link href={`/${locale}`} style={{ fontWeight: 700, letterSpacing: '0.12em', color: 'var(--cream)' }}>
          {t('brand')}
        </Link>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          <Link href={`/${locale}/topics`} className="nav-link" style={{ fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{t('topics')}</Link>
          <Link href={`/${locale}/guide`} className="nav-link" style={{ fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{t('guide')}</Link>
          <button className="btn" style={{ padding: '0.4em 0.9em' }} onClick={() => setOpen(!open)}>{t('menu')}</button>
        </div>
      </div>

      {open && (
        <div className="container" style={{ padding: '16px 24px', borderBottom: '1px solid var(--line)', display: 'flex', flexWrap: 'wrap', gap: 20 }}>
          <Link href={`/${locale}`}>{t('home')}</Link>
          <Link href={`/${locale}/topics`}>{t('topics')}</Link>
          <Link href={`/${locale}/guide`}>{t('guide')}</Link>
          <Link href={`/${locale}/topics/release-date`}>Release Date</Link>
          <Link href={`/${locale}/topics/steam`}>Steam</Link>
          <Link href={`/${locale}/topics/crossplay`}>Crossplay</Link>
          <Link href={`/${locale}/topics/trophy-guide`}>Trophy Guide</Link>
        </div>
      )}
    </header>
  );
}
