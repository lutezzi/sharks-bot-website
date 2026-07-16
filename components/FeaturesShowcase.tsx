"use client";

import { useEffect } from "react";
import { FeatureMockup } from "@/components/FeatureMockup";
import { MenuIcon } from "@/components/NavIcons";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { Locale } from "@/lib/config";
import { getExternalDocsUrl } from "@/lib/docs-content";
import type { FeatureSection } from "@/lib/i18n";

type FeaturesShowcaseProps = {
  sections: FeatureSection[];
  locale: Locale;
};

function getCtaHref(locale: Locale, slug: string) {
  const base = getExternalDocsUrl(locale);
  return slug ? `${base}/${slug}` : base;
}

export function FeaturesShowcase({ sections, locale }: FeaturesShowcaseProps) {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const element = document.getElementById(hash);
    if (!element) return;

    requestAnimationFrame(() => {
      element.scrollIntoView({ behavior: "smooth" });
    });
  }, []);

  return (
    <section id="features" className="px-6 py-8 md:py-12">
      <div className="mx-auto max-w-6xl space-y-28 md:space-y-36">
        {sections.map((section, index) => {
          const reversed = index % 2 === 1;
          const textDirection = reversed ? "right" : "left";
          const visualDirection = reversed ? "left" : "right";

          return (
            <div
              key={section.mockup}
              id={section.mockup}
              className="scroll-mt-24 grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
            >
              <ScrollReveal direction={textDirection} className={reversed ? "lg:order-2" : ""}>
                <div className="max-w-lg">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-zinc-400">
                      <MenuIcon name={section.icon} className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-semibold tracking-[0.2em] text-zinc-500">
                      {section.label}
                    </span>
                  </div>
                  <h2 className="mt-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-[2.5rem]">
                    {section.title}
                  </h2>
                  <p className="mt-5 text-base leading-8 text-zinc-400 md:text-lg">
                    {section.description}
                  </p>
                  <a
                    href={getCtaHref(locale, section.ctaSlug)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:border-[#c9b6e4]/40 hover:bg-white/[0.06]"
                  >
                    {section.cta}
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal
                direction={visualDirection}
                delay={120}
                className={reversed ? "lg:order-1" : ""}
              >
                <FeatureMockup type={section.mockup} />
              </ScrollReveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
