import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import type { CSSProperties } from 'react';

/* 真实 Big Walk 游戏截图(用户提供于 /images,已复制到 public/images) */
const IMG = {
  playground: '/images/shot-playground.jpg',   // 草坪上的三名玩家与彩色游乐场
  chairlift: '/images/shot-b.jpg',             // 缆车俯瞰山谷
  group: '/images/shot-group-bridge.jpg',      // 六人小队在高桥上
  maproom: '/images/shot-d.jpg',               // 地图室内的全岛立体模型
};

/* 官方 Press Kit 截图(bigwalk.panicfiles.com,3840x2160 原图已转 2560x1440 JPG) */
const PK = {
  beach: '/images/shot-presskit-01.jpg',       // 夕阳沙滩上的两名玩家
  cliff: '/images/shot-presskit-02.jpg',       // 海岸悬崖上携带装备的三名玩家
  grassland: '/images/shot-presskit-03.jpg',   // 草原上同行的四名玩家
  walkway: '/images/shot-presskit-05.jpg',     // 通往圆顶绿屋的高架步道
  platform: '/images/shot-presskit-06.jpg',    // 红色滑道旁的落日观景台
  tower: '/images/shot-presskit-07.jpg',       // 黄塔下垂挂的七人小队
};

/* 信息条小图标(纯描边 SVG,继承分类色) */
const stroke = { fill: 'none', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
const IconCal = ({ c }: { c: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" stroke={c} {...stroke}><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M8 3v4M16 3v4M3 10h18" /></svg>
);
const IconUsers = ({ c }: { c: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" stroke={c} {...stroke}><circle cx="9" cy="8" r="3.2" /><path d="M3.5 19c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5" /><path d="M15.5 5.6a3.2 3.2 0 0 1 0 5.8M17.5 14.4c1.7.7 2.7 2.3 3 4.6" /></svg>
);
const IconGlobe = ({ c }: { c: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" stroke={c} {...stroke}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.8 2.6 2.8 15.4 0 18M12 3c-2.8 2.6-2.8 15.4 0 18" /></svg>
);
const IconTrophy = ({ c }: { c: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" stroke={c} {...stroke}><path d="M7 4h10v5a5 5 0 0 1-10 0V4z" /><path d="M7 5H4v2a3 3 0 0 0 3 3M17 5h3v2a3 3 0 0 1-3 3" /><path d="M12 14v3M8.5 21h7M10 21c0-1.7.7-2.6 2-4 1.3 1.4 2 2.3 2 4" /></svg>
);

export default function HomePage() {
  const t = useTranslations('Home');
  const locale = useLocale();
  const href = (p: string) => `/${locale}${p}`;

  /* 信息条:调研核实的真实数据 */
  const infoStrip = [
    { icon: <IconCal c="var(--red)" />, label: t('statReleased'), value: t('statReleasedValue') },
    { icon: <IconUsers c="var(--blue)" />, label: t('statPlayers'), value: t('statPlayersValue') },
    { icon: <IconGlobe c="var(--green)" />, label: t('statCrossplay'), value: t('statCrossplayValue') },
    { icon: <IconTrophy c="var(--orange)" />, label: t('statAchievements'), value: t('statAchievementsValue') },
  ];

  /* Start Your Journey:5 张分类卡(分类色 red/yellow/green/blue/orange) */
  const journeyCards = [
    { tag: 'journeyC1Tag', title: 'journeyC1Title', desc: 'journeyC1Desc', to: '/guide',
      img: IMG.group, pos: 'center', badge: 'badge-red', color: 'var(--red)',
      alt: 'A group of Big Walk players standing together on a high bridge' },
    { tag: 'journeyC2Tag', title: 'journeyC2Title', desc: 'journeyC2Desc', to: '/topics/all-puzzles',
      img: PK.tower, pos: 'center', badge: 'badge-yellow', color: 'var(--yellow)',
      alt: 'A chain of seven Big Walk players hanging from a tall yellow tower' },
    { tag: 'journeyC3Tag', title: 'journeyC3Title', desc: 'journeyC3Desc', to: '/topics/map',
      img: IMG.maproom, pos: 'center', badge: 'badge-green', color: 'var(--green)',
      alt: 'The Big Walk map room with its full island diorama on the floor' },
    { tag: 'journeyC4Tag', title: 'journeyC4Title', desc: 'journeyC4Desc', to: '/topics/tools',
      img: PK.cliff, pos: 'center', badge: 'badge-blue', color: 'var(--blue)',
      alt: 'Three Big Walk players on a coastal cliff carrying tools and gear' },
    { tag: 'journeyC5Tag', title: 'journeyC5Title', desc: 'journeyC5Desc', to: '/topics/crossplay',
      img: PK.grassland, pos: 'center', badge: 'badge-orange', color: 'var(--orange)',
      alt: 'Four Big Walk players walking together across an open grassland' },
  ];

  /* Latest Guides:重点攻略(URL 不变) */
  const latestCards = [
    { tag: 'latestC1Tag', title: 'latestC1Title', desc: 'latestC1Desc', to: '/topics/red-tower-puzzle',
      img: PK.platform, pos: 'center', badge: 'badge-yellow',
      alt: 'Two Big Walk players on a platform beside a red track at sunset' },
    { tag: 'latestC2Tag', title: 'latestC2Title', desc: 'latestC2Desc', to: '/topics/4166-1899-puzzle',
      img: IMG.chairlift, pos: '30% 30%', badge: 'badge-red',
      alt: 'A wide view over Big Walk island terrain while hunting coordinates' },
    { tag: 'latestC3Tag', title: 'latestC3Title', desc: 'latestC3Desc', to: '/topics/map',
      img: PK.walkway, pos: 'center', badge: 'badge-green',
      alt: 'Five Big Walk players on an elevated walkway to a round green structure' },
    { tag: 'latestC4Tag', title: 'latestC4Title', desc: 'latestC4Desc', to: '/topics/all-puzzles',
      img: PK.beach, pos: 'center', badge: 'badge-blue',
      alt: 'Two Big Walk players meeting on a beach at sunset' },
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

  return (
    <>
      {/* ============ HERO:宽幅真实游戏截图 + 左侧内容 ============ */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-card">
            <div className="hero-media">
              <Image
                src={IMG.playground}
                alt="Big Walk gameplay — three players crossing a colorful island playground"
                fill
                priority
                quality={82}
                sizes="100vw"
                style={{ objectFit: 'cover' }}
              />
              <div className="hero-shade" />
              <div className="hero-content">
                <div className="hand" style={{ color: 'var(--yellow-bright)', fontSize: '1.32rem', textShadow: '0 1px 6px rgba(20,15,10,.45)' }}>
                  ✷ {t('heroEyebrow')}
                </div>
                <h1 className="hero-title">
                  {t('heroLine1')}
                  <br />
                  <span className="hw-red">{t('heroWordWalk')}</span>{' '}
                  <span className="hw-blue">{t('heroWordTogether')}</span><span className="hw-yellow">.</span>
                </h1>
                <p className="hero-lead">{t('heroLead')}</p>
                <div className="hero-ctas">
                  <Link href={href('/guide')} className="btn btn-red">{t('ctaHero1')}</Link>
                  <Link href={href('/topics/all-puzzles')} className="btn btn-yellow">{t('ctaHero2')}</Link>
                  <Link href={href('/topics/map')} className="btn btn-blue">{t('ctaHero3')}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 游戏信息条:贴在 Hero 下缘的纸条 ============ */}
      <div className="info-strip-wrap">
        <div className="info-strip taped">
          {infoStrip.map((s) => (
            <div key={s.label} className="info-item">
              {s.icon}
              <div>
                <div className="info-label">{s.label}</div>
                <div className="info-value">{s.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ============ START YOUR JOURNEY(分类入口,5 张纸卡)============ */}
      <section className="section" style={{ paddingTop: 72 }}>
        <div className="container">
          <div className="kicker">{t('journeyEyebrow')}</div>
          <h2><span className="h2-doodle">{t('journeyTitle')}</span></h2>
          <p className="lead">{t('journeyDesc')}</p>
          <div className="journey-grid">
            {journeyCards.map((c) => (
              <Link key={c.title} href={href(c.to)} className="journey-card" style={{ '--jc': c.color } as CSSProperties}>
                <div className="journey-thumb">
                  <span className={`journey-badge ${c.badge}`}>{t(c.tag)}</span>
                  <Image
                    src={c.img}
                    alt={c.alt}
                    fill
                    quality={72}
                    sizes="(max-width: 520px) 92vw, (max-width: 700px) 46vw, (max-width: 1080px) 30vw, 19vw"
                    style={{ objectFit: 'cover', objectPosition: c.pos }}
                  />
                </div>
                <div className="journey-body">
                  <h3 className="journey-name">{t(c.title)}</h3>
                  <p className="journey-desc">{t(c.desc)}</p>
                  <span className="journey-cta">{t('readGuide')} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LATEST GUIDES(重点攻略,URL 不变)============ */}
      <section className="section">
        <div className="container">
          <div className="kicker kicker-blue">{t('latestEyebrow')}</div>
          <h2><span className="h2-doodle uw-blue">{t('latestTitle')}</span></h2>
          <p className="lead">{t('latestDesc')}</p>
          <div className="latest-grid">
            {latestCards.map((c) => (
              <Link key={c.title} href={href(c.to)} className="journey-card">
                <div className="journey-thumb">
                  <span className={`journey-badge ${c.badge}`}>{t(c.tag)}</span>
                  <Image
                    src={c.img}
                    alt={c.alt}
                    fill
                    quality={72}
                    sizes="(max-width: 560px) 92vw, (max-width: 1000px) 46vw, 23vw"
                    style={{ objectFit: 'cover', objectPosition: c.pos }}
                  />
                </div>
                <div className="journey-body">
                  <h3 className="journey-name">{t(c.title)}</h3>
                  <p className="journey-desc">{t(c.desc)}</p>
                  <span className="journey-cta">{t('readGuide')} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHAT IS BIG WALK(游戏介绍)============ */}
      <section className="section">
        <div className="container">
          <div className="kicker kicker-green">{t('aboutEyebrow')}</div>
          <h2><span className="h2-doodle uw-green">{t('aboutTitle')}</span></h2>
          <p className="lead" style={{ marginTop: '1em' }}>{t('aboutP1')}</p>
          <p className="lead">{t('aboutP2')}</p>

          <div className="paper-note taped" style={{ marginTop: 34 }}>
            <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px 32px', margin: 0 }}>
              {specs.map((s) => (
                <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', gap: 12, fontSize: '0.88rem', borderBottom: '1px dashed var(--line)', paddingBottom: 10 }}>
                  <dt style={{ color: 'var(--text-mute)', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.72rem', paddingTop: 2 }}>{s.label}</dt>
                  <dd style={{ margin: 0, color: 'var(--cream)', fontWeight: 700, textAlign: 'right' }}>{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div style={{ marginTop: 22 }}>
            <Link href={href('/topics')} className="btn btn-primary">{t('aboutCta')}</Link>
          </div>
        </div>
      </section>

      {/* ============ REDEMPTION CODES(兑换码 —— 调研无码,如实标注)============ */}
      <section className="section">
        <div className="container-narrow">
          <div className="paper-note">
            <div className="kicker kicker-orange">{t('codesTitle')}</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--cream)', margin: '6px 0', fontFamily: 'var(--font-display)' }}>{t('codesNone')}</div>
            <p style={{ color: 'var(--text-dim)', margin: 0, fontSize: '0.92rem' }}>{t('codesNote')}</p>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="section">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <div className="hand" style={{ fontSize: '1.4rem', color: 'var(--blue)' }}>☞</div>
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
