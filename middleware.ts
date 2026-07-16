import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, locales } from "@/lib/config";

function isDocsHost(host: string) {
  return host.startsWith("docs.") || host.startsWith("docs.localhost");
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const host = request.headers.get("host") ?? "";

  // docs.sharksbot.xyz → internal /docs/... routes
  if (isDocsHost(host)) {
    if (pathname === "/") {
      return NextResponse.rewrite(new URL(`/docs/${defaultLocale}`, request.url));
    }

    const localeMatch = locales.find(
      (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
    );

    if (localeMatch) {
      return NextResponse.rewrite(new URL(`/docs${pathname}`, request.url));
    }

    return NextResponse.rewrite(new URL(`/docs/${defaultLocale}${pathname}`, request.url));
  }

  // Main site: /docs → /docs/tr
  if (pathname === "/docs" || pathname === "/docs/") {
    return NextResponse.redirect(new URL(`/docs/${defaultLocale}`, request.url));
  }

  if (pathname.startsWith("/docs/")) {
    return NextResponse.next();
  }

  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (!hasLocale) {
    return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|icon.png|.*\\..*).*)"],
};
