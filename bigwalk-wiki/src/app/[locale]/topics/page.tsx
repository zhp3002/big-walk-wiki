import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { categories, topics, topicsByCategory } from '../../../data/topics';
import TopicCard from '../../../components/TopicCard';

export default function TopicsPage() {
  const t = useTranslations('List');
  const locale = useLocale();
  const href = (p: string) => `/${locale}${p}`;


  return (
    <>
      {/* HERO */}
      <section className="section" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="kicker kicker-dim">{t('kicker')}</div>
          <h1>{t('title')}</h1>
          <p className="lead">{t('lead')}</p>
          <div style={{ marginTop: 16, fontSize: '0.8rem', letterSpacing: '0.16em', color: 'var(--text-mute)', textTransform: 'uppercase' }}>
            <span style={{ color: 'var(--cream)', fontWeight: 700 }}>{topics.length}</span> {t('entries')} · {categories.length} {t('systems')}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <div className="container">
          <div className="kicker">{t('aboutKicker')}</div>
          <p className="lead">{t('aboutBody')}</p>

          <h2 className="section-h2" style={{ marginTop: 32 }}>{t('orderTitle')}</h2>
          <p style={{ color: 'var(--text-dim)' }}><strong style={{ color: 'var(--cream)' }}>Stage 1:</strong> Release date, platform support and crossplay — figure out where to play and how to connect first.</p>
          <p style={{ color: 'var(--text-dim)' }}><strong style={{ color: 'var(--cream)' }}>Stage 2:</strong> Price and reviews — decide whether to buy, and which version.</p>
          <p style={{ color: 'var(--text-dim)' }}><strong style={{ color: 'var(--cream)' }}>Stage 3:</strong> Guides, puzzles and trophies — the deep-dive content once you are playing.</p>

          {/* JUMP */}
          <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {categories.map((c) => (
              <Link key={c.slug} href={href(`/topics#${c.slug}`)} className="btn" style={{ padding: '0.4em 0.9em', fontSize: '0.72rem' }}>{c.name}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* 分区卡片网格 */}
      {categories.map((cat) => {
        const items = [...topicsByCategory(cat.slug)].sort((a, b) => a.code.localeCompare(b.code));
        if (items.length === 0) return null;
        return (
          <section key={cat.slug} id={cat.slug} className="section">
            <div className="container">
              <div className="kicker kicker-dim">{cat.name}</div>
              <h2 className="section-h2">BIG WALK {cat.name.toUpperCase()}</h2>
              <div style={{ fontSize: '0.78rem', letterSpacing: '0.14em', color: 'var(--text-mute)', textTransform: 'uppercase', marginBottom: 4 }}>
                <span style={{ color: 'var(--cream)' }}>{items.length}</span> {t('entries')}
              </div>
              <p className="lead" style={{ fontSize: '0.95rem' }}>{cat.lead}</p>
              <div className="grid grid-3" style={{ marginTop: 20 }}>
                {items.map((tp) => <TopicCard key={tp.slug} topic={tp} />)}
              </div>
            </div>
          </section>
        );
      })}

      {/* USE WITH */}
      <section className="section">
        <div className="container">
          <h2 className="section-h2">{t('useWith')}</h2>
          <div className="grid grid-3">
            <Link href={href('/guide')} className="card">
              <div style={{ color: 'var(--accent)', letterSpacing: '0.14em' }}>GUIDE</div>
              <div style={{ color: 'var(--text-dim)', fontSize: '0.86rem', marginTop: 6 }}>{t('pairGuide')}</div>
            </Link>
            <Link href={href('/topics')} className="card">
              <div style={{ color: 'var(--accent)', letterSpacing: '0.14em' }}>FAQ</div>
              <div style={{ color: 'var(--text-dim)', fontSize: '0.86rem', marginTop: 6 }}>{t('pairFaq')}</div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
