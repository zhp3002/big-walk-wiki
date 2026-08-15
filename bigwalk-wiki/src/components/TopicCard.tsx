import Link from 'next/link';
import { useLocale } from 'next-intl';
import type { Topic } from '../data/topics';

export default function TopicCard({ topic }: { topic: Topic }) {
  const locale = useLocale();
  return (
    <Link href={`/${locale}/topics/${topic.slug}`} className="card">
      <span className="card-code">{topic.code}</span>
      <h3 className="card-title">{topic.name}</h3>
      <p className="card-summary">{topic.summary}</p>
      <div className="card-tags">
        {topic.tags.map((tg) => <span key={tg} className="card-tag">{tg}</span>)}
      </div>
    </Link>
  );
}
