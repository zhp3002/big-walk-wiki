import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { topics, topicBySlug, topicsByCategory, type Topic } from '../../../../data/topics';
import { type Locale } from '../../../../locale-config/routing';
import TopicCard from '../../../../components/TopicCard';
import { loadTopicMdx, topicMeta } from '../../../../content/loader';

export function generateStaticParams() {
  return topics.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string; locale?: string } }) {
  const meta = topicMeta[params.slug];
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
  };
}

export default function TopicDetailPage({ params: { slug } }: { params: { slug: string } }) {
  const t = useTranslations('Detail');
  const locale = useLocale() as Locale;
  const topic = topicBySlug(slug);
  if (!topic) notFound();

  const Mdx = loadTopicMdx(slug, locale);
  const href = (p: string) => `/${locale}${p}`;

  const pairs = topic.pairsWith.map(topicBySlug).filter(Boolean) as Topic[];
  const related = [...topicsByCategory(topic.category)]
    .filter((x) => x.slug !== topic.slug)
    .slice(0, 4);

  const allIdx = topics.findIndex((x) => x.slug === topic.slug);
  const prev = allIdx > 0 ? topics[allIdx - 1] : null;
  const next = allIdx < topics.length - 1 ? topics[allIdx + 1] : null;

  const meta = topicMeta[slug];

  return (
    <article>
      <div className="container" style={{ paddingTop: 32, paddingBottom: 24 }}>
        <Link href={href('/topics')} className="btn" style={{ padding: '0.4em 0.9em', marginBottom: 24 }}>
          ← {t('back')}
        </Link>

        {/* HERO */}
        <div style={{ marginBottom: 8 }}>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.16em', color: 'var(--text-mute)', textTransform: 'uppercase' }}>
            {topic.code} · {topic.category.toUpperCase()}
          </span>
        </div>
        <h1 style={{ marginBottom: 12 }}>{topic.name}</h1>
        <p className="lead">{topic.summary}</p>
        <div className="card-tags" style={{ marginTop: 12 }}>
          {topic.tags.map((tg) => <span key={tg} className="card-tag">{tg}</span>)}
        </div>
      </div>

      {/* 双栏:正文 + 侧边 */}
      <div className="container detail-layout" style={{ paddingBottom: 32 }}>
        <div>
          {/* MDX 正文(真实内容) */}
          <section id="overview">
            <Mdx />
          </section>

          {/* PAIRS WITH */}
          {pairs.length > 0 && (
            <section id="pairings" style={{ marginTop: 40 }}>
              <div className="kicker">{t('pairKicker')}</div>
              <h2 className="section-h2">RELATED BIG WALK TOPICS</h2>
              <p style={{ color: 'var(--text-dim)' }}>These related pages complete the picture:</p>
              <div className="grid grid-3" style={{ marginTop: 16 }}>
                {pairs.map((p) => <TopicCard key={p.slug} topic={p} />)}
              </div>
            </section>
          )}

          {/* RELATED(同分类) */}
          {related.length > 0 && (
            <section id="related" style={{ marginTop: 40 }}>
              <div className="kicker">{t('relatedKicker')}</div>
              <h2 className="section-h2">OTHER BIG WALK {topic.category.toUpperCase()} TOPICS</h2>
              <div className="grid grid-4" style={{ marginTop: 16 }}>
                {related.map((r) => <TopicCard key={r.slug} topic={r} />)}
              </div>
            </section>
          )}

          {/* PREV / NEXT */}
          <nav className="prevnext">
            {prev ? (
              <Link href={href(`/topics/${prev.slug}`)} className="card">
                <div className="dir">← {t('prev')}</div>
                <div style={{ color: 'var(--cream)', marginTop: 6, textTransform: 'uppercase' }}>{prev.name}</div>
              </Link>
            ) : <span />}
            {next ? (
              <Link href={href(`/topics/${next.slug}`)} className="card next-wrap">
                <div className="dir">{t('next')} →</div>
                <div style={{ color: 'var(--cream)', marginTop: 6, textTransform: 'uppercase' }}>{next.name}</div>
              </Link>
            ) : <span />}
          </nav>
        </div>

        {/* 侧边栏 */}
        <aside className="detail-aside" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* AT A GLANCE */}
          <div className="card">
            <div className="kicker">{t('glanceKicker')}</div>
            <dl style={{ display: 'grid', gap: 8, margin: '12px 0 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                <dt style={{ color: 'var(--text-mute)', letterSpacing: '0.1em' }}>CATEGORY</dt><dd style={{ margin: 0, color: 'var(--cream)' }}>{topic.category}</dd>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                <dt style={{ color: 'var(--text-mute)', letterSpacing: '0.1em' }}>DEVELOPER</dt><dd style={{ margin: 0, color: 'var(--cream)' }}>House House</dd>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                <dt style={{ color: 'var(--text-mute)', letterSpacing: '0.1em' }}>PUBLISHER</dt><dd style={{ margin: 0, color: 'var(--cream)' }}>Panic</dd>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                <dt style={{ color: 'var(--text-mute)', letterSpacing: '0.1em' }}>RELEASE</dt><dd style={{ margin: 0, color: 'var(--cream)' }}>Aug 4, 2026</dd>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                <dt style={{ color: 'var(--text-mute)', letterSpacing: '0.1em' }}>PLATFORMS</dt><dd style={{ margin: 0, color: 'var(--cream)', textAlign: 'right' }}>PC, Mac, PS5, Switch 2</dd>
              </div>
            </dl>
          </div>

          {/* KEYWORDS */}
          <div className="card">
            <div className="kicker">{t('specs')}</div>
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--text-mute)', marginTop: 8 }}>TARGET KEYWORDS</div>
            <div style={{ marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {topic.keywords.split(' / ').map((k) => (
                <span key={k} style={{ fontSize: '0.72rem', color: 'var(--accent)', border: '1px solid var(--line)', padding: '3px 8px' }}>{k}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
