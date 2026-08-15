import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  const locale = useLocale();
  const href = (p: string) => `/${locale}${p}`;

  // 官方链接:调研只给了名称没给 URL —— 不编造,统一标 URL TBC
  const officialLinks = [
    { label: t('officialSite') },
    { label: t('officialFaq') },
    { label: t('officialSteam') },
    { label: t('officialPlaystation') },
    { label: t('officialYoutube') },
  ];

  return (
    <footer style={{ borderTop: '1px solid var(--line)', marginTop: '64px', background: 'var(--bg-soft)' }}>
      <div className="container" style={{ padding: '48px 24px' }}>
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontWeight: 700, color: 'var(--cream)', letterSpacing: '0.14em' }}>{t('aboutTitle')}</div>
          <p style={{ color: 'var(--text-dim)', maxWidth: '56ch', fontSize: '0.9rem', marginTop: 10 }}>
            {t('about')}
          </p>
          <p style={{ color: 'var(--text-mute)', fontSize: '0.66rem', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: 12 }}>
            {t('disclaimer')}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
          {/* 站内导航 */}
          <div>
            <h4 style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--accent)' }}>{t('guidesTitle')}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 10 }}>
              <Link href={href('/topics')}>All Topics</Link>
              <Link href={href('/guide')}>Beginner Guide</Link>
              <Link href={href('/topics/release-date')}>Release Date</Link>
              <Link href={href('/topics/all-puzzles')}>Puzzles</Link>
              <Link href={href('/topics/crossplay')}>Crossplay</Link>
              <Link href={href('/topics/price')}>Price</Link>
            </div>
          </div>

          {/* 官方链接(调研列出的入口;URL 未提供,标 TBC) */}
          <div>
            <h4 style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--accent)' }}>{t('officialTitle')}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 10 }}>
              {officialLinks.map((l) => (
                <span key={l.label} style={{ color: 'var(--text-dim)' }}>
                  {l.label} <span style={{ color: 'var(--text-mute)', fontSize: '0.66rem', letterSpacing: '0.1em' }}>[{t('urlTbc')}]</span>
                </span>
              ))}
            </div>
          </div>

          {/* 社区(调研:无官方 Discord;Reddit 是玩家自建;IGN wiki 是素材中唯一真实 URL) */}
          <div>
            <h4 style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--accent)' }}>{t('communityTitle')}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 10 }}>
              <span style={{ color: 'var(--text-dim)' }}>{t('officialDiscord')}</span>
              <span style={{ color: 'var(--text-dim)' }}>{t('communityReddit')} <span style={{ color: 'var(--text-mute)', fontSize: '0.66rem', letterSpacing: '0.1em' }}>[{t('urlTbc')}]</span></span>
              <a href="https://www.ign.com/wikis/big-walk" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dim)' }}>
                {t('communityIgn')} ↗
              </a>
              <span style={{ color: 'var(--text-dim)' }}>{t('communityTool')}</span>
              <span style={{ color: 'var(--text-dim)' }}>{t('codesLink')}</span>
            </div>
          </div>
        </div>

        {/* 法律页入口 */}
        <div style={{ marginTop: 28, display: 'flex', gap: 20, flexWrap: 'wrap', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          <Link href={href('/privacy')} className="nav-link">{t('privacyPolicy')}</Link>
          <Link href={href('/terms')} className="nav-link">{t('termsOfService')}</Link>
        </div>

        <div style={{ marginTop: 24, fontSize: '0.66rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-mute)' }}>
          © 2026 {t('copy')} · {t('built')}
        </div>
      </div>
    </footer>
  );
}
