"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MenuIcon, type MenuIconName } from "@/components/NavIcons";
import type { Locale } from "@/lib/config";
import type { Dictionary } from "@/lib/i18n";

type RichMenuItem = {
  title: string;
  description: string;
  href: string;
  icon: MenuIconName;
  external?: boolean;
};

function resolveHref(href: string, locale: Locale, githubUrl: string): { url: string; external: boolean } {
  if (href === "external:github") {
    return { url: githubUrl, external: true };
  }
  if (href === "external:support") {
    return { url: `${githubUrl}/issues`, external: true };
  }
  if (href.startsWith("#")) {
    return { url: `/${locale}${href}`, external: false };
  }
  return { url: `/${locale}${href}`, external: false };
}

function MegaMenuItem({ item, onNavigate }: { item: RichMenuItem; onNavigate: () => void }) {
  const content = (
    <>
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-zinc-300">
        <MenuIcon name={item.icon} className="h-5 w-5" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-white">{item.title}</span>
        <span className="mt-0.5 block text-xs leading-5 text-zinc-500">{item.description}</span>
      </span>
    </>
  );

  const className =
    "flex gap-3 rounded-xl px-3 py-3 transition hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c9b6e4]/50";

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onNavigate}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={item.href} className={className} onClick={onNavigate}>
      {content}
    </Link>
  );
}

type MegaMenuDropdownProps = {
  label: string;
  items: RichMenuItem[];
  columns?: 1 | 2;
};

function MegaMenuDropdown({ label, items, columns = 1 }: MegaMenuDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const close = () => setOpen(false);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/5 hover:text-white"
        aria-expanded={open}
      >
        {label}
        <svg
          className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          className={`absolute left-0 top-full z-50 mt-3 rounded-2xl border border-white/10 bg-[#16141f] p-3 shadow-2xl shadow-black/40 ${
            columns === 2 ? "w-[640px] max-w-[calc(100vw-2rem)]" : "w-[340px] max-w-[calc(100vw-2rem)]"
          }`}
        >
          <div className={columns === 2 ? "grid grid-cols-1 gap-1 sm:grid-cols-2" : "flex flex-col gap-1"}>
            {items.map((item) => (
              <MegaMenuItem key={item.title} item={item} onNavigate={close} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

type NavbarProps = {
  locale: Locale;
  dict: Dictionary;
  inviteUrl: string;
  githubUrl: string;
};

function buildMenuItems(
  entries: Dictionary["featuresMenu"] | Dictionary["resourcesMenu"],
  locale: Locale,
  githubUrl: string
): RichMenuItem[] {
  return Object.values(entries).map((entry) => {
    const resolved = resolveHref(entry.href, locale, githubUrl);
    return {
      title: entry.title,
      description: entry.description,
      href: resolved.url,
      icon: entry.icon,
      external: resolved.external,
    };
  });
}

export function Navbar({ locale, dict, inviteUrl, githubUrl }: NavbarProps) {
  const otherLocale = locale === "tr" ? "en" : "tr";
  const featureItems = buildMenuItems(dict.featuresMenu, locale, githubUrl);
  const resourceItems = buildMenuItems(dict.resourcesMenu, locale, githubUrl);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0c0a12]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href={`/${locale}`} className="flex items-center gap-2.5 text-lg font-semibold text-white">
          <Image
            src="/assets/logo.png"
            alt="sharks"
            width={32}
            height={32}
            className="h-8 w-8 rounded-lg object-cover"
            priority
          />
          <span>sharks</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          <MegaMenuDropdown label={dict.nav.features} items={featureItems} columns={2} />
          <MegaMenuDropdown label={dict.nav.resources} items={resourceItems} columns={1} />
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`/${otherLocale}`}
            className="hidden rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition hover:text-white sm:inline-flex"
          >
            {otherLocale.toUpperCase()}
          </Link>
          <a
            href={inviteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#5865F2] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4752c4]"
          >
            {dict.nav.addBot}
          </a>
        </div>
      </nav>
    </header>
  );
}
