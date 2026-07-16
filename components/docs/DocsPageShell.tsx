"use client";

import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/config";
import { DocsSidebar } from "@/components/docs/DocsShell";

export function DocsPageShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const pathname = usePathname();
  const prefix = `/docs/${locale}`;
  const currentSlug = pathname === prefix ? "" : pathname.replace(`${prefix}/`, "");

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-10 lg:flex-row lg:gap-16">
      <DocsSidebar locale={locale} currentSlug={currentSlug} />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
