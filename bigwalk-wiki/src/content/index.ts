// 汇总所有 MDX,以 "slug.locale" 为键,供 loader 索引
// Release
import releaseDateEn from './release-date.en.mdx';
import releaseTimeEn from './release-time.en.mdx';
import ps5ReleaseDateEn from './ps5-release-date.en.mdx';
// Platforms
import steamEn from './steam.en.mdx';
import ps5En from './ps5.en.mdx';
import switchEn from './switch.en.mdx';
import xboxEn from './xbox.en.mdx';
import psPlusEn from './ps-plus.en.mdx';
// Multiplayer
import crossplayEn from './crossplay.en.mdx';
import maxPlayersEn from './max-players.en.mdx';
import soloEn from './solo.en.mdx';
import splitScreenEn from './split-screen.en.mdx';
import playerCountEn from './player-count.en.mdx';
// Price / Review
import priceEn from './price.en.mdx';
import reviewEn from './review.en.mdx';
import metacriticEn from './metacritic.en.mdx';
// Guide
import howLongToBeatEn from './how-long-to-beat.en.mdx';
import allPuzzlesEn from './all-puzzles.en.mdx';
import mapEn from './map.en.mdx';
import trophyGuideEn from './trophy-guide.en.mdx';
import puzzle4166En from './4166-1899-puzzle.en.mdx';
// Mods
import modsEn from './mods.en.mdx';
import onlineFixEn from './online-fix.en.mdx';
// Community
import communityEn from './community.en.mdx';
import trailerEn from './trailer.en.mdx';
import steamChartsEn from './steam-charts.en.mdx';
import wikiEn from './wiki.en.mdx';
import houseHouseEn from './house-house.en.mdx';
// Fallback
import defaultEn from './default.en.mdx';

export const mdxIndex: Record<string, { default: any }> = {
  // Release
  'release-date.en': { default: releaseDateEn },
  'release-time.en': { default: releaseTimeEn },
  'ps5-release-date.en': { default: ps5ReleaseDateEn },
  // Platforms
  'steam.en': { default: steamEn },
  'ps5.en': { default: ps5En },
  'switch.en': { default: switchEn },
  'xbox.en': { default: xboxEn },
  'ps-plus.en': { default: psPlusEn },
  // Multiplayer
  'crossplay.en': { default: crossplayEn },
  'max-players.en': { default: maxPlayersEn },
  'solo.en': { default: soloEn },
  'split-screen.en': { default: splitScreenEn },
  'player-count.en': { default: playerCountEn },
  // Price / Review
  'price.en': { default: priceEn },
  'review.en': { default: reviewEn },
  'metacritic.en': { default: metacriticEn },
  // Guide
  'how-long-to-beat.en': { default: howLongToBeatEn },
  'all-puzzles.en': { default: allPuzzlesEn },
  'map.en': { default: mapEn },
  'trophy-guide.en': { default: trophyGuideEn },
  '4166-1899-puzzle.en': { default: puzzle4166En },
  // Mods
  'mods.en': { default: modsEn },
  'online-fix.en': { default: onlineFixEn },
  // Community
  'community.en': { default: communityEn },
  'trailer.en': { default: trailerEn },
  'steam-charts.en': { default: steamChartsEn },
  'wiki.en': { default: wikiEn },
  'house-house.en': { default: houseHouseEn },
  // Fallback
  'default.en': { default: defaultEn },
};
