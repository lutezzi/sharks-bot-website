import { notFound } from "next/navigation";
import { commandGroups } from "@/lib/commands";
import { isValidLocale, type Locale } from "@/lib/config";
import { getDictionary } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const categoryAnchors = {
  admin: "moderation",
  general: "general",
  voice: "voice",
} as const;

export default async function CommandsPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const dict = getDictionary(locale);

  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">{dict.commandsPage.title}</h1>
          <p className="mt-4 text-lg text-zinc-400">{dict.commandsPage.subtitle}</p>
        </div>

        <div className="mt-14 space-y-12">
          {commandGroups.map((group) => (
            <section key={group.id} id={categoryAnchors[group.id]}>
              <h2 className="text-2xl font-semibold text-[#c9b6e4]">
                {dict.commandsPage.categories[group.id === "admin" ? "admin" : group.id === "voice" ? "voice" : "general"]}
              </h2>
              <div className="mt-6 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10">
                {group.commands.map((command) => (
                  <div
                    key={command.name}
                    className="flex flex-col gap-1 bg-white/[0.02] px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <code className="text-sm font-semibold text-white">/{command.name}</code>
                    <p className="text-sm text-zinc-400">{command.description[locale]}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
