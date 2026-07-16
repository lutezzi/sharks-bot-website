import type { Dictionary } from "@/lib/i18n";

type HeroProps = {
  dict: Dictionary;
  inviteUrl: string;
};

export function Hero({ dict, inviteUrl }: HeroProps) {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-16 md:pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,182,228,0.18),_transparent_55%)]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <span className="inline-flex rounded-full border border-[#c9b6e4]/30 bg-[#c9b6e4]/10 px-4 py-1 text-sm font-medium text-[#e8dcf5]">
          {dict.hero.badge}
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
          {dict.hero.title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">{dict.hero.subtitle}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={inviteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 min-w-[200px] items-center justify-center rounded-full bg-[#5865F2] px-8 text-base font-semibold text-white transition hover:bg-[#4752c4]"
          >
            {dict.hero.addBot}
          </a>
          <a
            href="#features"
            className="inline-flex h-12 min-w-[200px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 text-base font-semibold text-white transition hover:bg-white/10"
          >
            {dict.hero.browseFeatures}
          </a>
        </div>
      </div>
    </section>
  );
}
