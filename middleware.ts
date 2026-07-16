import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, locales } from "@/lib/config";

function isDocsHost(host: string) {
  return host.startsWith("docs.") || host.startsWith("docs.localhost");
}

function stripPort(host: string) {
  return host.split(":")[0];
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const host = request.headers.get("host") ?? "";
  const hostname = stripPort(host);

  // www.sharksbot.site → sharksbot.site
  if (hostname.startsWith("www.")) {
    const url = request.nextUrl.clone();
    url.hostname = hostname.slice(4);
    return NextResponse.redirect(url, 308);
  }

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

    const localeMatch = locales.find(
      (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
    );

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

  // /tr/* → clean URL without /tr (canonical Turkish URLs)
  if (pathname === "/tr" || pathname === "/tr/") {
    return NextResponse.redirect(new URL("/", request.url), 308);
  }

  if (pathname.startsWith("/tr/")) {
    return NextResponse.redirect(new URL(pathname.replace(/^\/tr/, "") || "/", request.url), 308);
  }

  const isEnglishPath = pathname === "/en" || pathname.startsWith("/en/");

  // Homepage: sharksbot.site/ (rewrite, URL stays /)
  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}`;
    return NextResponse.rewrite(url);
  }

  // English paths pass through
  if (isEnglishPath) {
    return NextResponse.next();
  }

  // Other Turkish pages without /tr prefix: /commands → /tr/commands (rewrite)
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|icon.png|.*\\..*).*)"],
};
