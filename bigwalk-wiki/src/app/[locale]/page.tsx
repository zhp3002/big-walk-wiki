import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('Home');
  const locale = useLocale();
  const href = (p: string) => `/${locale}${p}`;

  const startCards = [
    { n: '1', title: t('startCard1Title'), desc: t('startCard1Desc'), to: '/guide' },
    { n: '2', title: t('startCard2Title'), desc: t('startCard2Desc'), to: '/topics/all-puzzles' },
    { n: '3', title: t('startCard3Title'), desc: t('startCard3Desc'), to: '/topics/map' },
    { n: '4', title: t('startCard4Title'), desc: t('startCard4Desc'), to: '/topics/crossplay' },
  ];

  const specs = [
    { label: t('specDeveloper'), value: 'House House' },
    { label: t('specPublisher'), value: 'Panic' },
    { label: t('specPlatforms'), value: 'PC, Mac, PS5, Nintendo Switch 2' },
    { label: t('specGenre'), value: 'Co-op Adventure' },
    { label: t('specPlayers'), value: '2–12' },
    { label: t('specMultiplayer'), value: 'Online Co-op & Crossplay' },
    { label: t('specAchievements'), value: '12' },
  ];

  const heroStats = [
    { value: t('statReleasedValue'), label: t('statReleased') },
    { value: t('statPlayersValue'), label: t('statPlayers') },
    { value: t('statCrossplayValue'), label: t('statCrossplay') },
    { value: t('statAchievementsValue'), label: t('statAchievements') },
  ];

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="section" style={{ paddingTop: '56px' }}>
        <div className="container">
          <div className="kicker">{t('heroEyebrow')}</div>
          <h1 style={{ maxWidth: '16ch' }}>{t('heroTitle')}</h1>
          <p className="lead" style={{ marginTop: '1em' }}>{t('heroLead')}</p>
          <div style={{ display: 'flex', gap: 12, marginTop: '24px', flexWrap: 'wrap' }}>
            <Link href={href('/guide')} className="btn btn-primary">{t('ctaPrimary')}</Link>
            <Link href={href('/topics/all-puzzles')} className="btn">{t('ctaSecondary')}</Link>
            <Link href={href('/topics/map')} className="btn">{t('ctaTertiary')}</Link>
          </div>
          <div style={{ marginTop: 14, fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-mute)' }}>
            {t('heroVideo')} · URL TBC
          </div>

          {/* 调研提供的四个真实数据 */}
          <div className="stat-row">
            {heroStats.map((s) => (
              <div key={s.label}>
                <div className="stat-num">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ START HERE(新手引导)============ */}
      <section className="section">
        <div className="container">
          <div className="kicker kicker-dim">{t('startEyebrow')}</div>
          <h2>{t('startTitle')}</h2>
          <div className="grid grid-4" style={{ marginTop: 24 }}>
            {startCards.map((c) => (
              <Link key={c.n} href={href(c.to)} className="card">
                <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--accent)', lineHeight: 1 }}>{c.n}</div>
                <h3 className="card-title" style={{ marginTop: 10 }}>{c.title}</h3>
                <p className="card-summary">{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHAT IS BIG WALK(游戏介绍)============ */}
      <section className="section">
        <div className="container">
          <h2>{t('aboutTitle')}</h2>
          <p className="lead" style={{ marginTop: '1em' }}>{t('aboutP1')}</p>
          <p className="lead">{t('aboutP2')}</p>

          <div className="card" style={{ marginTop: 28 }}>
            <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px 32px', margin: 0 }}>
              {specs.map((s) => (
                <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', gap: 12, fontSize: '0.88rem', borderBottom: '1px solid var(--line-soft)', paddingBottom: 10 }}>
                  <dt style={{ color: 'var(--text-mute)', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.72rem', paddingTop: 2 }}>{s.label}</dt>
                  <dd style={{ margin: 0, color: 'var(--cream)', fontWeight: 600, textAlign: 'right' }}>{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div style={{ marginTop: 20 }}>
            <Link href={href('/topics')} className="btn btn-primary">{t('aboutCta')}</Link>
          </div>
        </div>
      </section>

      {/* ============ REDEMPTION CODES(兑换码 —— 调研无码,如实标注)============ */}
      <section className="section">
        <div className="container-narrow">
          <div className="card">
            <div className="kicker">{t('codesTitle')}</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--cream)', margin: '6px 0' }}>{t('codesNone')}</div>
            <p style={{ color: 'var(--text-dim)', margin: 0, fontSize: '0.92rem' }}>{t('codesNote')}</p>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="section">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2 style={{ maxWidth: '24ch', margin: '0 auto' }}>{t('finalTitle')}</h2>
          <p className="lead" style={{ margin: '1em auto' }}>{t('finalDesc')}</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href={href('/guide')} className="btn btn-primary">{t('finalPrimary')}</Link>
            <Link href={href('/topics/steam')} className="btn">{t('finalSecondary')}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
