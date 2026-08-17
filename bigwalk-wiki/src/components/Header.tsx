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
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', borderBottom: '1px dashed var(--line)' }}>
        <Link href={`/${locale}`} className="brand-mark" style={{ fontSize: '1.18rem', color: 'var(--cream)', display: 'inline-flex', alignItems: 'center' }}>
          BIG WALK<span className="brand-chip">WIKI</span>
        </Link>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Link href={`/${locale}/topics`} className="nav-pill">{t('topics')}</Link>
          <Link href={`/${locale}/guide`} className="nav-pill">{t('guide')}</Link>
          <button className="btn btn-yellow" style={{ padding: '0.5em 1.1em', fontSize: '0.72rem' }} onClick={() => setOpen(!open)}>{t('menu')}</button>
        </div>
      </div>

      {open && (
        <div className="container" style={{ padding: '16px 24px', borderBottom: '1px dashed var(--line)', display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          <Link href={`/${locale}`}>{t('home')}</Link>
          <Link href={`/${locale}/topics`}>{t('topics')}</Link>
          <Link href={`/${locale}/guide`}>{t('guide')}</Link>
          <Link href={`/${locale}/topics/release-date`}>{t('mRelease')}</Link>
          <Link href={`/${locale}/topics/steam`}>{t('mSteam')}</Link>
          <Link href={`/${locale}/topics/crossplay`}>{t('mCrossplay')}</Link>
          <Link href={`/${locale}/topics/trophy-guide`}>{t('mTrophy')}</Link>
        </div>
      )}
    </header>
  );
}
