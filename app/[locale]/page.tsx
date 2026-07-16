import { notFound } from "next/navigation";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Hero } from "@/components/Hero";
import { getDiscordInviteUrl, isValidLocale, type Locale } from "@/lib/config";
import { getDictionary } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const dict = getDictionary(locale);
  const clientId = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID ?? "";
  const inviteUrl = clientId ? getDiscordInviteUrl(clientId) : "#";

  return (
    <>
      <Hero dict={dict} inviteUrl={inviteUrl} />
      <FeaturesSection dict={dict} locale={locale} />
    </>
  );
}
