// 构建前生成各页面真实 lastmod(git 最后提交时间)→ src/data/lastmod.json
// sitemap.ts 读取;git 不可用或查询失败时该路径不写入,sitemap 回退当前时间
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const locales = ['en', 'ja', 'de', 'es'];

// Vercel 等环境是浅克隆(depth~10):窗口外的文件 git log 会塌缩到边界提交,
// 时间戳失真。浅克隆时只补缺失键,不覆盖已提交的准确值(由本地全量仓库生成)。
function isShallow() {
  try {
    return execFileSync('git', ['rev-parse', '--is-shallow-repository'], {
      cwd: root, stdio: ['ignore', 'pipe', 'ignore'],
    }).toString().trim() === 'true';
  } catch {
    return true; // git 都不可用时同样只读已有文件
  }
}
const shallow = isShallow();
const outPath = path.join(root, 'src/data/lastmod.json');
const map = shallow && existsSync(outPath)
  ? JSON.parse(readFileSync(outPath, 'utf8'))
  : {};

function gitDate(file) {
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', file], {
      cwd: root, stdio: ['ignore', 'pipe', 'ignore'],
    });
    return out.toString().trim() || null;
  } catch {
    return null;
  }
}

function latest(files) {
  let max = null;
  for (const f of files) {
    const d = gitDate(f);
    if (d && (!max || d > max)) max = d;
  }
  return max;
}

// 浅克隆:只补缺失,保留已提交的准确值;本地全量:始终刷新
const set = (p, d) => {
  if (d && !(shallow && p in map)) map[p] = d;
};

// 固定页:取各自页面源文件的最后提交时间
const fixed = {
  '': ['src/app/[locale]/page.tsx', 'src/components/Header.tsx', 'src/components/Footer.tsx'],
  '/topics': ['src/app/[locale]/topics/page.tsx', 'src/components/TopicCard.tsx'],
  '/guide': ['src/app/[locale]/guide/page.tsx'],
  '/privacy': ['src/app/[locale]/privacy/page.tsx'],
  '/terms': ['src/app/[locale]/terms/page.tsx'],
};
for (const [p, files] of Object.entries(fixed)) {
  const d = latest(files) ?? gitDate('src/app/[locale]/layout.tsx');
  set(p, d);
}

// topic 页:取该 slug 所有语言 mdx 的最新提交时间
// (各语言同属一个页面实体,sitemap 同 path 四语共用一个时间戳)
const topicsSrc = readFileSync(path.join(root, 'src/data/topics.ts'), 'utf8');
const topics = [...topicsSrc.slice(topicsSrc.indexOf('export const topics'))
  .matchAll(/slug: '([^']+)'/g)].map((m) => m[1]);

for (const slug of topics) {
  const files = locales.map((l) => `src/content/${slug}.${l}.mdx`);
  files.push(`src/content/${slug}.en.mdx`); // 未翻译语言回退 EN 正文,EN 的时间也算数
  let d = latest(files);
  if (!d) d = gitDate('src/data/topics.ts'); // 无专属 mdx 的 slug 兜底
  set(`/topics/${slug}`, d);
}

writeFileSync(outPath, JSON.stringify(map, null, 2) + '\n');
console.log(`lastmod.json ${shallow ? 'merged(shallow)' : 'generated'}: ${Object.keys(map).length} paths`);
