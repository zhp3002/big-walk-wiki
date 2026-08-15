// 路由层共享常量 —— 纯数据,无副作用 import,middleware 和 request 都能安全引入
// 多语言按调研优先级:1. English → 2. Japanese → 3. German → 4. Spanish
// 注意:ja/de/es 目前无翻译内容,界面与正文均回退英文(不编造翻译),待后续翻译
export const locales = ['en', 'ja', 'de', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';
