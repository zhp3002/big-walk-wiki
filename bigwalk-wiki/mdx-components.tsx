import type { MDXComponents } from 'mdx/types';

// MDX 默认组件映射 —— 让 .mdx 里的 h2/h3/p 等用站内的军事风样式
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => <h2 className="section-h2" {...props} />,
    h3: (props) => <h3 className="section-h3" {...props} />,
    p: (props) => <p className="prose-p" {...props} />,
    ul: (props) => <ul className="prose-ul" {...props} />,
    li: (props) => <li className="prose-li" {...props} />,
    strong: (props) => <strong className="prose-strong" {...props} />,
    ...components,
  };
}
