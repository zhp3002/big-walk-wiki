// 按语言取 topics/categories/SEO meta 的本地化文案;键缺失或语言为 en 时回退英文原值
import { categories } from '../topics';
import type { Locale } from '../../locale-config/routing';
import * as en from './en';
import * as ja from './ja';
import * as de from './de';
import * as es from './es';

type Pack = typeof en;

const packs: Record<Locale, Pack> = { en, ja, de, es };

export function localTopic<T extends { slug: string; name: string; summary: string }>(topic: T, locale: Locale): T {
  if (locale === 'en') return topic;
  const p = packs[locale];
  return {
    ...topic,
    name: p.topicName[topic.slug] ?? topic.name,
    summary: p.topicSummary[topic.slug] ?? topic.summary,
  };
}

export function localCategory<T extends { slug: string; name: string; lead: string }>(cat: T, locale: Locale): T {
  if (locale === 'en') return cat;
  const p = packs[locale];
  return {
    ...cat,
    name: p.categoryName[cat.slug] ?? cat.name,
    lead: p.categoryLead[cat.slug] ?? cat.lead,
  };
}

export function localCategoryName(slug: string, locale: Locale): string {
  const p = packs[locale];
  return p.categoryName[slug] ?? categories.find((c) => c.slug === slug)?.name ?? slug;
}

export function localMeta(slug: string, locale: Locale): { title?: string; description?: string } {
  if (locale === 'en') return {};
  const p = packs[locale];
  return { title: p.metaTitle[slug], description: p.metaDescription[slug] };
}
