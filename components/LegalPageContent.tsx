import type { Locale } from "@/lib/config";
import type { LegalContent } from "@/lib/legal";

type LegalPageContentProps = {
  locale: Locale;
  title: string;
  lastUpdatedLabel: string;
  content: LegalContent;
};

export function LegalPageContent({ locale, title, lastUpdatedLabel, content }: LegalPageContentProps) {
  const date = new Intl.DateTimeFormat(locale === "tr" ? "tr-TR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date("2026-07-16"));

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold text-white">{title}</h1>
      <p className="mt-3 text-sm text-zinc-500">
        {lastUpdatedLabel}: {date}
      </p>
      <p className="mt-8 text-base leading-8 text-zinc-300">{content.intro}</p>
      <div className="mt-10 space-y-8">
        {content.sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-semibold text-white">{section.title}</h2>
            <div className="mt-3 space-y-3">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-zinc-400">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
