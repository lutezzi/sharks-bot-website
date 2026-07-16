import { notFound } from "next/navigation";
import { LegalPageContent } from "@/components/LegalPageContent";
import { isValidLocale, type Locale } from "@/lib/config";
import { getDictionary } from "@/lib/i18n";
import { termsContent } from "@/lib/legal";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function TermsPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const dict = getDictionary(locale);

  return (
    <LegalPageContent
      locale={locale}
      title={dict.legal.termsTitle}
      lastUpdatedLabel={dict.legal.lastUpdated}
      content={termsContent[locale]}
    />
  );
}
