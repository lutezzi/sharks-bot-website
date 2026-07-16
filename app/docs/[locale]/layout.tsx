import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocsHeader } from "@/components/docs/DocsShell";
import { DocsPageShell } from "@/components/docs/DocsPageShell";
import { isValidLocale, type Locale } from "@/lib/config";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return [{ locale: "tr" }, { locale: "en" }];
}

export default async function DocsLayout({ children, params }: LayoutProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();

  const locale = localeParam as Locale;

  return (
    <div className="min-h-screen bg-[#0c0a12]">
      <DocsHeader locale={locale} />
      <DocsPageShell locale={locale}>{children}</DocsPageShell>
    </div>
  );
}

export const metadata: Metadata = {
  title: "sharks Docs",
};
