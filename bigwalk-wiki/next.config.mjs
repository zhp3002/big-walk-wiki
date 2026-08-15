import createNextIntlPlugin from 'next-intl/plugin';
import mdx from '@next/mdx';
import remarkGfm from 'remark-gfm';

const withNextIntl = createNextIntlPlugin('./src/locale-config/request.ts');

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

export default withMDX(withNextIntl(nextConfig));
