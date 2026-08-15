import { topics, topicsByCategory } from '../../../data/topics';
import TopicCard from '../../../components/TopicCard';

export default function GuidePage() {
  const guides = [...topicsByCategory('guide')];
  return (
    <>
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="kicker kicker-dim">FIELD MANUAL · GUIDES</div>
          <h1>BIG WALK GUIDES</h1>
          <p className="lead">Long-form playbooks for every phase of a Big Walk session — from your first objective to a full trophy sweep. The guides that actually get your squad across the map.</p>
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
