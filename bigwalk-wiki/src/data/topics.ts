// Big Walk 专题数据 —— 全部字段基于 关键词素材.md 核实的真实信息
// 不确定的一律标 "TBD"(待确认),绝不编造数值/链接/兑换码
// 类型与机制事实来源:IGN / Kotaku / GameSpot / Polygon 评测 + 官方 Features + SteamDB/PS Store 发售时间

export interface Topic {
  slug: string;
  code: string;            // 编号(站内索引用)
  name: string;            // 标题
  category: string;        // 分类 slug
  keywords: string;        // 承载关键词(主词 + 同义)
  tags: string[];          // 标签(仅描述性,非数值)
  summary: string;         // 卡片摘要(真实信息)
  hasMdx: boolean;         // 是否有专属 MDX(否则用通用模板)
  pairsWith: string[];     // 搭配阅读的 slug(真实相关页)
}

export interface Category {
  slug: string;
  name: string;
  lead: string;
}

export const categories: Category[] = [
  { slug: 'release', name: 'Release', lead: 'Dates and per-platform unlock times. Big Walk launches August 4, 2026.' },
  { slug: 'platforms', name: 'Platforms', lead: 'Platform support — PC, Mac, PS5 and Nintendo Switch 2. No Xbox version.' },
  { slug: 'crossplay', name: 'Crossplay', lead: 'Cross-platform play. Big Walk supports crossplay, so friends on different platforms can join the same session.' },
  { slug: 'multiplayer', name: 'Multiplayer', lead: 'How the co-op works — 2-12 players, online only, no solo mode.' },
  { slug: 'price', name: 'Price', lead: 'What it costs on each platform. PS Plus members claim it free at launch.' },
  { slug: 'review', name: 'Review', lead: 'Critical reception — IGN, Kotaku, GameSpot and Polygon are all strongly positive.' },
  { slug: 'guide', name: 'Guide', lead: 'Puzzle mechanics, completion time, the island map and trophies. Roughly 20 hours to beat.' },
  { slug: 'mods', name: 'Mods', lead: 'Mods and fixes — unconfirmed. Big Walk is an online co-op adventure with no announced mod support.' },
  { slug: 'community', name: 'Community', lead: 'Community and resources — official links, trailers and SteamDB player-count tracking.' },
];

export const topics: Topic[] = [
  // ---- Release ----
  { slug: 'release-date', code: 'REL-01', name: 'Release Date', category: 'release',
    keywords: 'big walk release date / big walk the big walk release date',
    tags: ['RELEASE', 'DATE', '2026'], hasMdx: true,
    summary: 'Big Walk launches August 4, 2026 worldwide on PC, Mac, PS5 and Nintendo Switch 2.',
    pairsWith: ['release-time', 'ps5-release-date', 'steam'] },
  { slug: 'release-time', code: 'REL-02', name: 'Release Time', category: 'release',
    keywords: 'big walk release time',
    tags: ['RELEASE', 'TIME', 'TIMEZONE'], hasMdx: true,
    summary: 'Unlock times vary by platform: PS5 in EU/AU/NZ goes first, then PS5 US and Steam worldwide about five hours later.',
    pairsWith: ['release-date', 'ps5-release-date'] },
  { slug: 'ps5-release-date', code: 'REL-03', name: 'PS5 Release Date', category: 'release',
    keywords: 'big walk ps5 release date',
    tags: ['PS5', 'RELEASE', 'PLAYSTATION'], hasMdx: true,
    summary: 'The PS5 version launches August 4, 2026 — EU/AU/NZ stores unlock about five hours ahead of the US store.',
    pairsWith: ['release-date', 'release-time', 'ps5'] },

  // ---- Platforms ----
  { slug: 'steam', code: 'PLT-01', name: 'PC / Steam', category: 'platforms',
    keywords: 'big walk steam / big walk pc / big walk steam price / big walk steam key',
    tags: ['PC', 'STEAM', 'MAC'], hasMdx: true,
    summary: 'Big Walk is on Steam for PC and Mac, unlocking worldwide alongside the US PS5 release.',
    pairsWith: ['price', 'release-time', 'crossplay'] },
  { slug: 'ps5', code: 'PLT-02', name: 'PS5', category: 'platforms',
    keywords: 'big walk ps5 / big walk playstation / big walk psn',
    tags: ['PS5', 'PLAYSTATION', 'CONSOLE'], hasMdx: true,
    summary: 'Big Walk is on PlayStation 5, and PS Plus members can claim it free during the launch window.',
    pairsWith: ['ps5-release-date', 'price', 'crossplay'] },
  { slug: 'switch', code: 'PLT-03', name: 'Nintendo Switch 2', category: 'platforms',
    keywords: 'big walk switch / big walk nintendo switch / big walk switch 2',
    tags: ['SWITCH 2', 'NINTENDO', 'CONSOLE'], hasMdx: true,
    summary: 'Big Walk comes to Nintendo Switch 2 — not the original Switch. Exact unlock time is unconfirmed.',
    pairsWith: ['release-date', 'crossplay'] },
  { slug: 'xbox', code: 'PLT-04', name: 'Xbox', category: 'platforms',
    keywords: 'big walk xbox',
    tags: ['XBOX', 'STATUS', 'NONE'], hasMdx: true,
    summary: 'There is no Xbox version. The announced platforms are PC, Mac, PS5 and Nintendo Switch 2.',
    pairsWith: ['release-date', 'crossplay'] },
  { slug: 'ps-plus', code: 'PLT-05', name: 'PS Plus', category: 'platforms',
    keywords: 'big walk ps plus',
    tags: ['PS PLUS', 'FREE', 'MEMBERSHIP'], hasMdx: true,
    summary: 'PS Plus members get Big Walk free at launch on PS5 — the confirmed best-value way to play.',
    pairsWith: ['ps5', 'price'] },

  // ---- Crossplay ----
  { slug: 'crossplay', code: 'CRO-01', name: 'Crossplay', category: 'crossplay',
    keywords: 'big walk crossplay / big walk cross platform / big walk the big walk crossplay',
    tags: ['CROSSPLAY', 'CO OP', 'MULTIPLATFORM'], hasMdx: true,
    summary: 'Yes — Big Walk supports crossplay across PC, Mac, PS5 and Switch 2, confirmed in the official feature list.',
    pairsWith: ['max-players', 'steam', 'ps5'] },

  // ---- Multiplayer ----
  { slug: 'max-players', code: 'MUL-01', name: 'Max Players', category: 'multiplayer',
    keywords: 'big walk max players / big walk how many players / big walk how many people can play',
    tags: ['CO OP', '2-12', 'PARTY SIZE'], hasMdx: true,
    summary: 'Big Walk supports 2-12 players online. Two is focused co-op; twelve is "an absolute mess" per House House.',
    pairsWith: ['crossplay', 'solo'] },
  { slug: 'solo', code: 'MUL-02', name: 'Solo / Single Player', category: 'multiplayer',
    keywords: 'big walk solo / big walk replayable',
    tags: ['SOLO', 'CO OP ONLY', 'NO SINGLE PLAYER'], hasMdx: true,
    summary: 'No — Big Walk is co-op only. You need at least one friend online; there is no single-player mode.',
    pairsWith: ['max-players', 'crossplay'] },
  { slug: 'split-screen', code: 'MUL-03', name: 'Split Screen / Local Co-op', category: 'multiplayer',
    keywords: 'big walk split screen / big walk local coop',
    tags: ['SPLIT SCREEN', 'LOCAL', 'TBD'], hasMdx: true,
    summary: 'Split screen and local couch co-op are unconfirmed. Big Walk is built around online play with proximity voice chat.',
    pairsWith: ['max-players', 'crossplay'] },
  { slug: 'player-count', code: 'MUL-04', name: 'Player Count', category: 'multiplayer',
    keywords: 'big walk player count',
    tags: ['CONCURRENT', 'STEAMDB', 'TBD'], hasMdx: true,
    summary: 'Live Big Walk player counts appear on SteamDB and Steam Charts once the game launches. Exact numbers are TBC.',
    pairsWith: ['steam', 'review'] },

  // ---- Price ----
  { slug: 'price', code: 'PRI-01', name: 'Price', category: 'price',
    keywords: 'big walk price / big walk cost / big walk game price / big walk how much will big walk cost',
    tags: ['PRICE', 'COMPARE', 'TBD'], hasMdx: true,
    summary: 'Per-platform pricing is to be confirmed. The confirmed best value: PS Plus members get it free at launch.',
    pairsWith: ['steam', 'ps-plus', 'ps5'] },

  // ---- Review ----
  { slug: 'review', code: 'REV-01', name: 'Review', category: 'review',
    keywords: 'big walk review / big walk reviews / big walk impressions',
    tags: ['REVIEW', 'CRITIC', '2026'], hasMdx: true,
    summary: 'IGN, Kotaku, GameSpot and Polygon all praise Big Walk — several call it one of the best games of 2026.',
    pairsWith: ['how-long-to-beat', 'price'] },
  { slug: 'metacritic', code: 'REV-02', name: 'Metacritic', category: 'review',
    keywords: 'big walk metacritic',
    tags: ['METACRITIC', 'SCORE', 'TBD'], hasMdx: true,
    summary: 'The Metacritic aggregate is to be confirmed at launch. Individual reviews from major outlets are strongly positive.',
    pairsWith: ['review'] },

  // ---- Guide ----
  { slug: 'how-long-to-beat', code: 'GID-01', name: 'How Long To Beat', category: 'guide',
    keywords: 'big walk how long to beat / big walk length',
    tags: ['LENGTH', '20 HOURS', 'COMPLETION'], hasMdx: true,
    summary: 'Roughly 20 hours — a reviewer reached that mark with puzzles still remaining, plus an ending and post-game content.',
    pairsWith: ['all-puzzles', 'review'] },
  { slug: 'all-puzzles', code: 'GID-02', name: 'All Puzzles', category: 'guide',
    keywords: 'big walk all puzzles',
    tags: ['PUZZLE', 'BEAN', 'TOWER'], hasMdx: true,
    summary: 'Solve puzzles for red beans and gourds, deposit them in towers for keys, and unlock new areas like the train and chair lift.',
    pairsWith: ['how-long-to-beat', 'map', '4166-1899-puzzle'] },
  { slug: 'map', code: 'GID-03', name: 'Map', category: 'guide',
    keywords: 'big walk map',
    tags: ['MAP', 'OPEN WORLD', 'ISLAND'], hasMdx: true,
    summary: 'An open-world island of brightly colored monuments, puzzle structures and towers — no map screen or quest markers.',
    pairsWith: ['all-puzzles', '4166-1899-puzzle'] },
  { slug: 'trophy-guide', code: 'GID-04', name: 'Trophy / Achievement Guide', category: 'guide',
    keywords: 'big walk trophy guide',
    tags: ['TROPHY', 'ACHIEVEMENT', 'TBD'], hasMdx: true,
    summary: 'The full trophy and achievement list is to be confirmed — no official roster is published before launch.',
    pairsWith: ['how-long-to-beat', 'all-puzzles'] },
  { slug: '4166-1899-puzzle', code: 'GID-05', name: '4166 1899 Puzzle', category: 'guide',
    keywords: 'big walk 4166 1899 / big walk number puzzle / big walk coordinates puzzle',
    tags: ['PUZZLE', 'COORDINATES', 'MAP / GPS'], hasMdx: true,
    summary: '4166 and 1899 are not a code — they are coordinates pointing to a hidden button. Solve it with the map or the GPS.',
    pairsWith: ['all-puzzles', 'map', 'how-long-to-beat'] },

  // ---- Mods ----
  { slug: 'mods', code: 'MOD-01', name: 'Mods', category: 'mods',
    keywords: 'big walk mods',
    tags: ['MOD', 'TBD', 'CO OP'], hasMdx: true,
    summary: 'No official mod support. The always-online co-op design makes traditional mods impractical for normal play.',
    pairsWith: ['online-fix'] },
  { slug: 'online-fix', code: 'MOD-02', name: 'Online Fix', category: 'mods',
    keywords: 'big walk online fix / big walk freetp',
    tags: ['NETWORK', 'TROUBLESHOOT', 'CROSSPLAY'], hasMdx: true,
    summary: 'Legitimate copies need no online fix — crossplay works out of the box. Real troubleshooting for connection issues.',
    pairsWith: ['crossplay', 'mods'] },

  // ---- Community ----
  { slug: 'community', code: 'COM-01', name: 'Community & Discord', category: 'community',
    keywords: 'big walk discord / big walk reddit',
    tags: ['COMMUNITY', 'DISCORD', 'CO OP'], hasMdx: true,
    summary: 'The community lives on the official Discord, the Steam forums and House House\'s channels — the place to find a co-op group.',
    pairsWith: ['trailer', 'house-house'] },
  { slug: 'trailer', code: 'COM-02', name: 'Trailer', category: 'community',
    keywords: 'big walk trailer',
    tags: ['TRAILER', 'GAMEPLAY', 'VIDEO'], hasMdx: true,
    summary: 'Official trailers live on House House\'s YouTube channel and the Steam page, including the Day of the Devs gameplay trailer.',
    pairsWith: ['community', 'review'] },
  { slug: 'steam-charts', code: 'COM-03', name: 'Steam Charts / SteamDB', category: 'community',
    keywords: 'big walk steam charts / big walk steamdb',
    tags: ['STEAMDB', 'CHARTS', 'TBD'], hasMdx: true,
    summary: 'Steam Charts and SteamDB track Big Walk\'s live Steam player count. Crossplay console players are not counted.',
    pairsWith: ['steam', 'player-count'] },
  { slug: 'wiki', code: 'COM-04', name: 'Wiki', category: 'community',
    keywords: 'big walk wiki / big walk game wiki',
    tags: ['WIKI', 'IGN', 'GUIDE'], hasMdx: true,
    summary: 'No dedicated fan wiki yet — the Steam page, major reviews and this site cover the puzzles, tools and progression.',
    pairsWith: ['all-puzzles', 'community'] },
  { slug: 'house-house', code: 'COM-05', name: 'House House', category: 'community',
    keywords: 'big walk house house',
    tags: ['DEVELOPER', 'HOUSE HOUSE', 'GOOSE GAME'], hasMdx: true,
    summary: 'Big Walk is by House House, the Melbourne studio behind Untitled Goose Game, published by Panic.',
    pairsWith: ['community', 'review'] },
];

// 工具
export const topicsByCategory = (cat: string) => topics.filter((t) => t.category === cat);
export const topicBySlug = (slug: string) => topics.find((t) => t.slug === slug);
