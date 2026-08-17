import { useTranslations } from 'next-intl';
import { topicsByCategory } from '../../../data/topics';
import TopicCard from '../../../components/TopicCard';

export default function GuidePage() {
  const t = useTranslations('Guide');
  const guides = [...topicsByCategory('guide')];
  return (
    <>
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="kicker kicker-dim">{t('kicker')}</div>
          <h1>{t('title')}</h1>
          <p className="lead">{t('lead')}</p>
          <div style={{ fontSize: '0.8rem', letterSpacing: '0.16em', color: 'var(--text-mute)', textTransform: 'uppercase', marginTop: 12 }}>
            <span style={{ color: 'var(--cream)', fontWeight: 700 }}>{guides.length}</span> ENTRIES
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {guides.map((g) => <TopicCard key={g.slug} topic={g} />)}
          </div>
        </div>
      </section>
    </>
  );
}
