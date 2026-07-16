import { defaultLocale, type Locale } from "@/lib/config";

/** Default locale (tr) uses clean URLs without /tr prefix. */
export function localeHome(locale: Locale) {
  return locale === defaultLocale ? "/" : `/${locale}`;
}

export function localePath(locale: Locale, path: string) {
  if (path.startsWith("#")) {
    const base = localeHome(locale);
    return `${base}${path}`;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;

  if (locale === defaultLocale) {
    return normalized;
  }

  return `/${locale}${normalized}`;
}

/** Switch locale while preserving the current page path. */
export function switchLocalePath(pathname: string, from: Locale, to: Locale) {
  let path = pathname;

  for (const locale of [from, to, defaultLocale, "en"] as Locale[]) {
    if (path === `/${locale}`) {
      path = "/";
      break;
    }
    if (path.startsWith(`/${locale}/`)) {
      path = path.slice(locale.length + 1);
      break;
    }
  }

  if (path === "") path = "/";

  if (to === defaultLocale) {
    return path;
  }

  return path === "/" ? `/${to}` : `/${to}${path}`;
}

export function docsPath(locale: Locale, slug = "") {
  return slug ? `/docs/${locale}/${slug}` : `/docs/${locale}`;
}
