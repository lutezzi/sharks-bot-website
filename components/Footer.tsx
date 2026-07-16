import Link from "next/link";
import type { Locale } from "@/lib/config";
import { siteConfig } from "@/lib/config";
import type { Dictionary } from "@/lib/i18n";

type FooterProps = {
  locale: Locale;
  dict: Dictionary;
};

export function Footer({ locale, dict }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/10 bg-[#0c0a12]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-white">🦈 sharks</p>
          <p className="mt-1 text-sm text-zinc-500">{dict.footer.tagline}</p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm">
          <Link href={`/${locale}/terms-of-use`} className="text-zinc-400 transition hover:text-white">
            {dict.footer.terms}
          </Link>
          <Link href={`/${locale}/privacy-policy`} className="text-zinc-400 transition hover:text-white">
            {dict.footer.privacy}
          </Link>
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 transition hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="border-t border-white/5 px-6 py-4 text-center text-xs text-zinc-600">
        © {year} {siteConfig.name}. {dict.footer.rights}
      </div>
    </footer>
  );
}
