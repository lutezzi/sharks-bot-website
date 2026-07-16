import type { Dictionary } from "@/lib/i18n";

type HeroProps = {
  dict: Dictionary;
  inviteUrl: string;
};

export function Hero({ dict, inviteUrl }: HeroProps) {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden px-6 pb-24 pt-12 md:pt-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(88,101,242,0.22),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,182,228,0.14),transparent_50%)]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <span className="inline-flex rounded-full border border-[#5865F2]/30 bg-[#5865F2]/10 px-4 py-1.5 text-sm font-medium text-[#e8dcf5]">
          {dict.hero.badge}
        </span>
        <h1 className="mt-8 text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
          {dict.hero.title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
          {dict.hero.subtitle}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={inviteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 min-w-[220px] items-center justify-center rounded-full bg-[#5865F2] px-8 text-base font-semibold text-white transition hover:bg-[#4752c4]"
          >
            {dict.hero.addBot}
          </a>
          <a
            href="#features"
            className="inline-flex h-12 min-w-[220px] items-center justify-center rounded-full border border-white/15 bg-transparent px-8 text-base font-semibold text-white transition hover:border-white/25 hover:bg-white/5"
          >
            {dict.hero.browseFeatures}
          </a>
        </div>
      </div>
    </section>
  );
}
