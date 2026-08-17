import Link from 'next/link';
import { useLocale } from 'next-intl';
import type { Topic } from '../data/topics';
import { localTopic } from '../data/i18n';
import type { Locale } from '../locale-config/routing';

export default function TopicCard({ topic }: { topic: Topic }) {
  const locale = useLocale() as Locale;
  const t = localTopic(topic, locale);
  return (
    <Link href={`/${locale}/topics/${t.slug}`} className="card">
      <span className="card-code">{t.code}</span>
      <h3 className="card-title">{t.name}</h3>
      <p className="card-summary">{t.summary}</p>
      <div className="card-tags">
        {t.tags.map((tg) => <span key={tg} className="card-tag">{tg}</span>)}
      </div>
    </Link>
  );
}
