import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DocContentRenderer } from "@/components/docs/DocContentRenderer";
import { isValidLocale, type Locale } from "@/lib/config";
import { docPages, getDocPage } from "@/lib/docs-content";

type PageProps = {
  params: Promise<{ locale: string; slug?: string[] }>;
};

export async function generateStaticParams() {
  const locales: Locale[] = ["tr", "en"];
  const params: { locale: Locale; slug?: string[] }[] = [];

  for (const locale of locales) {
    params.push({ locale });
    for (const page of docPages) {
      if (page.slug) {
        params.push({ locale, slug: [page.slug] });
      }
    }
  }

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isValidLocale(localeParam)) return {};

  const pageSlug = slug?.[0] ?? "";
  const page = getDocPage(pageSlug);
  if (!page) return {};

  const locale = localeParam as Locale;
  return {
    title: `${page.title[locale]} | sharks Docs`,
    description: page.description[locale],
  };
}

export default async function DocsCatchAllPage({ params }: PageProps) {
  const { locale: localeParam, slug } = await params;
  if (!isValidLocale(localeParam)) notFound();

  const pageSlug = slug?.[0] ?? "";
  if (slug && slug.length > 1) notFound();

  const page = getDocPage(pageSlug);
  if (!page) notFound();

  const locale = localeParam as Locale;

  return (
    <article>
      <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{page.title[locale]}</h1>
      <p className="mt-4 text-lg text-zinc-400">{page.description[locale]}</p>
      <div className="mt-10 border-t border-white/10 pt-10">
        <DocContentRenderer sections={page.content[locale]} />
      </div>
    </article>
  );
}
