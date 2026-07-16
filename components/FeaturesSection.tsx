import type { Dictionary } from "@/lib/i18n";

type FeaturesSectionProps = {
  dict: Dictionary;
};

export function FeaturesSection({ dict }: FeaturesSectionProps) {
  return (
    <section id="features" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">{dict.features.title}</h2>
          <p className="mt-4 text-lg text-zinc-400">{dict.features.subtitle}</p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dict.features.items.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#c9b6e4]/30 hover:bg-white/[0.05]"
            >
              <div className="text-3xl">{feature.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-400">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
