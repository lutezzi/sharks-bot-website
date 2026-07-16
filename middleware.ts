import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, locales } from "@/lib/config";

function isDocsHost(host: string) {
  return host.startsWith("docs.") || host.startsWith("docs.localhost");
}

function isLocalePath(pathname: string, locale: string) {
  return pathname === `/${locale}` || pathname.startsWith(`/${locale}/`);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const host = request.headers.get("host") ?? "";
  // docs.sharksbot.site → internal /docs/... routes
  if (isDocsHost(host)) {
    if (pathname.startsWith("/docs")) {
      return NextResponse.next();
    }

    if (pathname === "/") {
      const url = request.nextUrl.clone();
      url.pathname = `/docs/${defaultLocale}`;
      return NextResponse.rewrite(url);
    }

    const localeMatch = locales.find((locale) => isLocalePath(pathname, locale));

    if (localeMatch) {
      const url = request.nextUrl.clone();
      url.pathname = `/docs${pathname}`;
      return NextResponse.rewrite(url);
    }

    const url = request.nextUrl.clone();
    url.pathname = `/docs/${defaultLocale}${pathname}`;
    return NextResponse.rewrite(url);
  }

  // Main site docs routes (sharksbot.site/docs/...)
  if (pathname === "/docs" || pathname === "/docs/") {
    const url = request.nextUrl.clone();
    url.pathname = `/docs/${defaultLocale}`;
    return NextResponse.rewrite(url);
  }

  if (pathname.startsWith("/docs/")) {
    return NextResponse.next();
  }

  // Internal /tr routes (direct access or after rewrite — do NOT redirect)
  if (isLocalePath(pathname, defaultLocale)) {
    return NextResponse.next();
  }

  // English routes
  if (isLocalePath(pathname, "en")) {
    return NextResponse.next();
  }

  // Homepage: sharksbot.site/ → serve /tr, URL stays /
  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}`;
    return NextResponse.rewrite(url);
  }

  // Turkish pages without /tr prefix: /commands → /tr/commands (rewrite)
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
