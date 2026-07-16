import type { Locale } from "@/lib/config";
import type { Dictionary } from "@/lib/i18n";
import { FeaturesShowcase } from "@/components/FeaturesShowcase";

type FeaturesSectionProps = {
  dict: Dictionary;
  locale: Locale;
};

export function FeaturesSection({ dict, locale }: FeaturesSectionProps) {
  return <FeaturesShowcase sections={dict.features.sections} locale={locale} />;
}
