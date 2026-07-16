"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/config";
import type { Dictionary } from "@/lib/i18n";

type MenuItem = {
  label: string;
  href: string;
  external?: boolean;
};

type NavDropdownProps = {
  label: string;
  items: MenuItem[];
  locale: Locale;
};

function NavDropdown({ label, items, locale }: NavDropdownProps) {
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
        <div className="absolute left-0 top-full z-50 mt-2 min-w-[220px] rounded-xl border border-white/10 bg-[#14121c] p-2 shadow-xl">
          {items.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg px-3 py-2 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                className="block rounded-lg px-3 py-2 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
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

export function Navbar({ locale, dict, inviteUrl, githubUrl }: NavbarProps) {
  const otherLocale = locale === "tr" ? "en" : "tr";

  const featureItems: MenuItem[] = Object.values(dict.featuresMenu).map((item) => ({
    label: item.label,
    href: item.href,
  }));

  const resourceItems: MenuItem[] = [
    { label: dict.resourcesMenu.commandsModeration.label, href: dict.resourcesMenu.commandsModeration.href },
    { label: dict.resourcesMenu.commandsGeneral.label, href: dict.resourcesMenu.commandsGeneral.href },
    { label: dict.resourcesMenu.commandsVoice.label, href: dict.resourcesMenu.commandsVoice.href },
    { label: dict.resourcesMenu.github.label, href: githubUrl, external: true },
  ];

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
          <NavDropdown label={dict.nav.features} items={featureItems} locale={locale} />
          <NavDropdown label={dict.nav.resources} items={resourceItems} locale={locale} />
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
