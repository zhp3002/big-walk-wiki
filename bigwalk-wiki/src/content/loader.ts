// MDX 加载器 + SEO meta 集中管理
// 每个 topic 一个 MDX 文件:<slug>.en.mdx / <slug>.zh.mdx
// 没有专属 MDX 的用 default 模板

import type { ComponentType } from 'react';
import type { Locale } from '../locale-config/routing';

// 静态导入所有 MDX(让 webpack 打包)
import { mdxIndex } from './index';

export interface TopicMeta {
  title: string;          // 40-60 字符
  description: string;    // 140-160 字符
  keywords: string;       // meta keywords
}

// 每个 topic 的 SEO meta —— 真实信息,含主关键词;时态按已发售(2026-08-04)校准
export const topicMeta: Record<string, TopicMeta> = {
  'release-date': {
    title: 'Big Walk Release Date: When Big Walk Launched in 2026',
    description: 'The Big Walk release date was August 4, 2026 on PC, Mac, PS5 and Nintendo Switch 2. Here is exactly when House House\'s co-op adventure came out on every platform.',
    keywords: 'big walk release date, big walk launch, when does big walk come out',
  },
  'release-time': {
    title: 'Big Walk Release Time: Unlock Times by Platform & Region',
    description: 'Big Walk release time varied by platform: PS5 in EU and AU unlocked first, then 5 hours later PS5 US and Steam went live worldwide. The full unlock schedule.',
    keywords: 'big walk release time, big walk unlock time, big walk launch time',
  },
  'ps5-release-date': {
    title: 'Big Walk PS5 Release Date & Unlock Time (August 2026)',
    description: 'The Big Walk PS5 release date was August 4, 2026. EU and AU stores unlocked first, the US store 5 hours later. PS Plus members could claim it free at launch.',
    keywords: 'big walk ps5 release date, big walk playstation, big walk psn',
  },
  steam: {
    title: 'Big Walk on Steam: $19.99 Price, PC & Mac, Crossplay',
    description: 'Big Walk is on Steam for PC and Mac at $19.99, released August 4, 2026. It supports crossplay with PS5 and Switch 2, 2-12 player co-op, and proximity voice chat.',
    keywords: 'big walk steam, big walk pc, big walk mac, big walk steam price, big walk $19.99',
  },
  ps5: {
    title: 'Big Walk on PS5: Release, PS Plus Free Offer, Crossplay',
    description: 'Big Walk launched on PS5 on August 4, 2026, and PS Plus members could claim it free at launch. It supports crossplay and 2-12 player online co-op with friends.',
    keywords: 'big walk ps5, big walk playstation, big walk psn, big walk ps plus',
  },
  switch: {
    title: 'Big Walk on Nintendo Switch 2: Release & Crossplay Details',
    description: 'Big Walk launched on Nintendo Switch 2 on August 4, 2026 — not the original Switch. It supports crossplay with PC and PS5. What Switch 2 players need to know.',
    keywords: 'big walk switch, big walk nintendo switch, big walk switch 2',
  },
  xbox: {
    title: 'Is Big Walk on Xbox? Platform Status & Alternatives (2026)',
    description: 'Big Walk is not on Xbox. House House released the game only on PC, Mac, PlayStation 5 and Nintendo Switch 2. The full platform breakdown and what it means.',
    keywords: 'big walk xbox, is big walk on xbox, big walk platforms',
  },
  'ps-plus': {
    title: 'Big Walk on PS Plus: Free at Launch for Members (2026)',
    description: 'Big Walk was free for PlayStation Plus members at launch in August 2026. How it was claimed, which PS Plus tier was needed, and what the offer included.',
    keywords: 'big walk ps plus, big walk free, big walk playstation plus',
  },
  crossplay: {
    title: 'Big Walk Crossplay Explained: Cross-Platform Co-op Guide',
    description: 'Yes, Big Walk supports crossplay. Friends on PC, Mac, PS5 and Nintendo Switch 2 can play together online. Here is how cross-platform co-op works in Big Walk.',
    keywords: 'big walk crossplay, big walk cross platform, is big walk crossplay',
  },
  'max-players': {
    title: 'Big Walk Max Players: How Many People Can Play (2-12)',
    description: 'Big Walk max players is 12, with a minimum of 2 for co-op. Two is a focused experience, twelve is "an absolute mess" per House House. How party size changes it.',
    keywords: 'big walk max players, big walk how many players, how many people can play big walk',
  },
  solo: {
    title: 'Can You Play Big Walk Solo? Single Player Explained',
    description: 'No, you cannot play Big Walk solo. It is a co-op-only game that requires at least one friend online (up to 12). Why House House made Big Walk multiplayer-only.',
    keywords: 'big walk solo, can you play big walk single player, big walk replayable',
  },
  'split-screen': {
    title: 'Big Walk Split Screen & Couch Co-op: Not Supported (PS5 Too)',
    description: 'No — Big Walk has no split screen or local couch co-op on PC, PS5 or Switch 2, per the official FAQ. How to play with someone in the same room via crossplay.',
    keywords: 'big walk split screen, big walk local coop, big walk couch co op, big walk ps5 split screen',
  },
  'player-count': {
    title: 'Big Walk Player Count: Peak 46,409 & Live Numbers',
    description: 'Big Walk hit an all-time peak of 46,409 concurrent Steam players on August 5, 2026, with ~1 million copies sold in week one. Where to check the live Big Walk player count.',
    keywords: 'big walk player count, big walk concurrent players, how many people playing big walk, big walk peak players',
  },
  'join-codes': {
    title: 'Big Walk Join Codes on PS5: How to Get & Enter Codes',
    description: 'How to use Big Walk join codes on PS5 — where to find your code, how to enter a friend\'s code, cross-play with PC, and fixes for timed-out connection errors.',
    keywords: 'big walk join codes ps5, big walk join code, big walk session code, big walk code not working',
  },
  price: {
    title: 'Big Walk Price: $19.99 on Steam, Free on PS Plus at Launch',
    description: 'Big Walk costs $19.99 on Steam (PC/Mac). It was free at launch for PS Plus members on PS5, and the Switch 2 eShop carries a paid listing. Full cost breakdown.',
    keywords: 'big walk price, big walk cost, big walk game price, how much does big walk cost, big walk steam price',
  },
  review: {
    title: 'Big Walk Review Roundup: IGN, Kotaku, GameSpot, Polygon',
    description: 'Big Walk reviews are strongly positive — critics call it one of the best games of 2026. IGN, Kotaku, GameSpot and Polygon praise its co-op puzzles.',
    keywords: 'big walk review, big walk reviews, big walk impressions, is big walk good',
  },
  metacritic: {
    title: 'Big Walk Metacritic Score: 93-94 on PC — 2026 Best Rated',
    description: 'Big Walk\'s Metacritic score is 93-94 on PC (~25 reviews) — the highest-rated new release of 2026 — with PS5 in the mid-80s and OpenCritic at 89. Full reception breakdown.',
    keywords: 'big walk metacritic, big walk score, big walk rating, big walk critic score, big walk review score',
  },
  'how-long-to-beat': {
    title: 'How Long to Beat Big Walk: Main Story & 100% Times',
    description: 'How long is Big Walk? About 11 hours for the main story and 20 hours for 100% completion, per HowLongToBeat player data and reviewer pace. Full time breakdown.',
    keywords: 'big walk how long to beat, big walk length, how long is big walk, big walk completion time',
  },
  'all-puzzles': {
    title: 'Big Walk All Puzzles: Mechanics, Beans, Towers & Solutions',
    description: 'The Big Walk all puzzles guide: solve challenge structures for red beans and gourds, deposit them in towers, and earn keys that unlock new areas.',
    keywords: 'big walk all puzzles, big walk puzzle guide, big walk beans, big walk towers',
  },
  map: {
    title: 'Big Walk Map: Island Layout, Towers & Key Locations',
    description: 'The Big Walk map is an open-world island of brightly colored monuments, puzzle structures and towers. How the island is laid out and how to navigate it.',
    keywords: 'big walk map, big walk island, big walk locations, big walk world',
  },
  'trophy-guide': {
    title: 'Big Walk Trophy Guide: All 13 Achievements & Easy Platinum',
    description: 'Big Walk has 13 trophies (1 platinum, 10 gold, 2 silver) — all simple co-op milestones. The full list, every unlock condition, and how long the platinum takes.',
    keywords: 'big walk trophy guide, big walk achievements, big walk trophies, big walk platinum, big walk all trophies',
  },
  '4166-1899-puzzle': {
    title: 'Big Walk 4166 1899 Puzzle Solution & Coordinates Guide',
    description: '4166 and 1899 in Big Walk are not a code. They are coordinates that point to a hidden button. Here is how to solve the number puzzle with the map or the GPS.',
    keywords: 'big walk 4166 1899, big walk number puzzle, big walk coordinates puzzle, big walk map coordinates, big walk gps puzzle',
  },
  'red-tower-puzzle': {
    title: 'Big Walk Red Tower Puzzle: All 5 Puzzles & Map Room Unlock',
    description: 'How to unlock the Map Room in Big Walk: solve the 5 Red Tower puzzles (Yellow Maze, Button Room, Timer Cannon, Basketball, Gestures), file the key, get the map.',
    keywords: 'big walk red tower puzzle, big walk red tower, big walk red tower solution, big walk map room, big walk map room puzzle, big walk how to unlock map, big walk how to get map, big walk red tower collectibles',
  },
  tools: {
    title: 'Big Walk Tools & Items Guide: Map, GPS, Walkie-Talkie',
    description: 'Big Walk tools and items guide: where to find the map, compass, GPS, walkie-talkies and binoculars, how each gadget works, and what to grab first.',
    keywords: 'big walk tools, big walk items, big walk map, big walk gps, big walk compass, big walk walkie talkie, big walk binoculars, big walk tools and gadgets',
  },
  mods: {
    title: 'Big Walk Mods: Mod Support Status & Custom Content',
    description: 'Big Walk mod support is unconfirmed. As an online co-op adventure with crossplay, it is not a traditional mod-friendly game. What we know about Big Walk mods.',
    keywords: 'big walk mods, big walk mod support, big walk custom content',
  },
  'online-fix': {
    title: 'Big Walk Online Fix: Connection & Multiplayer Troubleshoot',
    description: 'Big Walk online fix and connection troubleshooting — what to do when you cannot join friends or crossplay fails. It uses crossplay across PC, PS5 and Switch 2.',
    keywords: 'big walk online fix, big walk connection fix, big walk freetp, big walk cant connect',
  },
  community: {
    title: 'Big Walk Community: Official Discord, Reddit & Links',
    description: 'Big Walk community links — where to find other players for co-op sessions, and why there is no official Discord yet. House House runs the official channels.',
    keywords: 'big walk discord, big walk reddit, big walk community',
  },
  trailer: {
    title: 'Big Walk Trailer: Official Gameplay Videos & Reveals',
    description: 'Big Walk trailer and official gameplay videos, including the Release Date Announcement Trailer and the Gameplay Overview. Where to watch Big Walk in action.',
    keywords: 'big walk trailer, big walk gameplay trailer, big walk reveal',
  },
  'steam-charts': {
    title: 'Big Walk Steam Charts & SteamDB: Peak 46,409 Tracked',
    description: 'Big Walk on Steam Charts and SteamDB: an all-time peak of 46,409 concurrent players on August 5, 2026, and how to read the live tracker data for the co-op campaign.',
    keywords: 'big walk steam charts, big walk steamdb, big walk concurrent players steam, big walk steam peak',
  },
  wiki: {
    title: 'Big Walk Wiki: Best Guide & Walkthrough Sites',
    description: 'Big Walk wiki and walkthrough sites — IGN hosts a full Big Walk guide covering puzzles, tips and the ending. Which Big Walk wiki to bookmark for co-op sessions.',
    keywords: 'big walk wiki, big walk game wiki, big walk walkthrough, big walk guide site',
  },
  'house-house': {
    title: 'Big Walk Developer: House House (Untitled Goose Game)',
    description: 'Big Walk is developed by House House, the Australian studio behind Untitled Goose Game, and published by Panic. The studio\'s story and how Big Walk came to be.',
    keywords: 'big walk house house, big walk developer, who made big walk',
  },
};

// 加载 MDX 回退链:<slug>.<locale> → <slug>.en → default.<locale> → default.en
// (未翻译语言显示英文正文,而不是落到通用模板)
export function loadTopicMdx(slug: string, locale: Locale): ComponentType {
  return (
    mdxIndex[`${slug}.${locale}`]?.default ??
    mdxIndex[`${slug}.en`]?.default ??
    mdxIndex[`default.${locale}`]?.default ??
    mdxIndex['default.en']?.default
  );
}
