import Link from "next/link";
import type { Locale } from "@/lib/config";
import { siteConfig } from "@/lib/config";
import { docNavGroups, getDocHref } from "@/lib/docs-content";

type DocsSidebarProps = {
  locale: Locale;
  currentSlug: string;
};

export function DocsSidebar({ locale, currentSlug }: DocsSidebarProps) {
  return (
    <aside className="w-full shrink-0 lg:w-64">
      <nav className="sticky top-24 space-y-8">
        {docNavGroups.map((group) => (
          <div key={group.title.en}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              {group.title[locale]}
            </p>
            <ul className="space-y-1">
              {group.items.map((item) => {
                const href = getDocHref(locale, item.slug);
                const isActive = item.slug === currentSlug;
                return (
                  <li key={item.slug || "index"}>
                    <Link
                      href={href}
                      className={`block rounded-lg px-3 py-2 text-sm transition ${
                        isActive
                          ? "bg-[#c9b6e4]/15 font-medium text-[#e8dcf5]"
                          : "text-zinc-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {item.title[locale]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}

export function DocsHeader({ locale }: { locale: Locale }) {
  const mainSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${siteConfig.domain}`;

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0c0a12]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <Link href={getDocHref(locale, "")} className="text-sm font-semibold text-white">
            📖 Docs
          </Link>
          <span className="hidden text-zinc-600 sm:inline">/</span>
          <Link
            href={`${mainSiteUrl}${locale === "tr" ? "" : "/en"}`}
            className="hidden text-sm text-zinc-400 transition hover:text-white sm:inline"
          >
            {siteConfig.domain}
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={locale === "tr" ? getDocHref("en", "") : getDocHref("tr", "")}
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            {locale === "tr" ? "EN" : "TR"}
          </Link>
        </div>
      </div>
    </header>
  );
}
