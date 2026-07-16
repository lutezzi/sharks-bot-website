import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, locales } from "@/lib/config";

function isDocsHost(host: string) {
  return host.startsWith("docs.") || host.startsWith("docs.localhost");
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const host = request.headers.get("host") ?? "";

  // docs.sharksbot.site → internal /docs/... routes
  if (isDocsHost(host)) {
    // Rewrite sonrası middleware tekrar calisir; /docs/... yolunu oldugu gibi birak
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
