import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './locale-config/routing';

const intlMiddleware = createMiddleware({
  locales: [...locales],
  defaultLocale,
  localePrefix: 'always',
});

// 纯英文站:旧 /zh/* 链接 301 到对应英文页,其余交给 next-intl
export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname === '/zh' || pathname.startsWith('/zh/')) {
    const url = req.nextUrl.clone();
    url.pathname = pathname.replace(/^\/zh(?=\/|$)/, '/en');
    return NextResponse.redirect(url, 308);
  }
  return intlMiddleware(req);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
