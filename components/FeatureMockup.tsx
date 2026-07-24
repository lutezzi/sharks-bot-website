import Image from "next/image";
import type { FeatureMockupType } from "@/lib/i18n";

type FeatureMockupProps = {
  type: FeatureMockupType;
};

function Sparkle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
    </svg>
  );
}

function BotAvatar({ size = 40 }: { size?: number }) {
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-full"
      style={{ width: size, height: size }}
    >
      <Image
        src="/assets/logo.png"
        alt="sharks"
        fill
        className="object-cover"
        sizes={`${size}px`}
      />
    </div>
  );
}

function MockupShell({
  children,
  sparkleClassName,
}: {
  children: React.ReactNode;
  sparkleClassName: string;
}) {
  return (
    <div className="relative">
      <Sparkle
        className={`absolute -right-2 -top-2 z-10 h-6 w-6 ${sparkleClassName} drop-shadow-[0_0_12px_currentColor]`}
      />
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1a1625]/80 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
}

function VerifiedBotBadge() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#5865F2"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 14.5-4-4 1.41-1.41L10.5 13.67l6.09-6.09 1.41 1.41L10.5 16.5z"
      />
    </svg>
  );
}

function AppTag() {
  return (
    <span className="rounded-[3px] bg-[#5865F2] px-1 py-px text-[10px] font-semibold uppercase leading-none text-white">
      APP
    </span>
  );
}

function BotMessageHeader({ timestamp }: { timestamp?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <span className="text-sm font-semibold text-white">sharks</span>
      <VerifiedBotBadge />
      <AppTag />
      {timestamp ? <span className="text-xs text-zinc-500">{timestamp}</span> : null}
    </div>
  );
}

function SharkEmbed({
  borderColor,
  kicker,
  title,
  body,
  footer = "𝘴𝘩𝘢𝘳𝘬𝘴",
  children,
}: {
  borderColor: string;
  kicker: string;
  title?: string;
  body?: string;
  footer?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mt-3 overflow-hidden rounded-lg border-l-4 bg-[#2b2d31] p-4" style={{ borderLeftColor: borderColor }}>
      <div className="text-[10px] font-semibold uppercase tracking-wider text-[#c9b6e4]">✦ {kicker}</div>
      <div className="my-2 text-[9px] tracking-[0.2em] text-zinc-500">▰▱▰▱▰▱▰▰▰▱▰▱▰▱▱</div>
      {title ? <div className="text-sm font-semibold text-white">{title}</div> : null}
      {body ? <p className="mt-1 text-xs text-zinc-300">{body}</p> : null}
      {children}
      <div className="mt-3 border-t border-white/5 pt-2 text-[10px] italic text-zinc-500">{footer}</div>
    </div>
  );
}

function EmbedMockup() {
  return (
    <MockupShell sparkleClassName="text-emerald-400">
      <div className="flex gap-3">
        <BotAvatar />
        <div className="min-w-0 flex-1">
          <BotMessageHeader timestamp="Bugün 16:20" />
          <SharkEmbed
            borderColor="#8fcca8"
            kicker="Tamam"
            body="Dil **Türkçe** olarak ayarlandı. Bundan sonraki bot mesajların bu dilde olacak."
          />
        </div>
      </div>
    </MockupShell>
  );
}

function WelcomeMockup() {
  return (
    <MockupShell sparkleClassName="text-[#c9b6e4]">
      <div className="flex gap-3">
        <BotAvatar />
        <div className="min-w-0 flex-1">
          <BotMessageHeader />
          <SharkEmbed
            borderColor="#8fcca8"
            kicker="Yeni üye"
            title="┊ 👋 Hoş Geldin ┊"
            body="@YeniUye sunucuya dalış yaptı — selam ver, renklerini seç!"
          >
            <div className="mt-3 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#5865F2] to-[#c9b6e4]" />
              <div className="text-[10px] text-zinc-400">
                ▸ Güncel üye
                <div className="mt-1 font-mono text-zinc-300">128</div>
              </div>
            </div>
          </SharkEmbed>
        </div>
      </div>
    </MockupShell>
  );
}

function RolesMockup() {
  return (
    <MockupShell sparkleClassName="text-pink-400">
      <div className="flex gap-3">
        <BotAvatar />
        <div className="min-w-0 flex-1">
          <BotMessageHeader />
          <SharkEmbed
            borderColor="#a8c69f"
            kicker="Roller"
            title="┊ 🎨 Renk Seçimi ┊"
            body="İsim rengin için menüden bir ton seç."
          >
            <div className="mt-3 space-y-2">
              {["matcha", "lavender", "peach"].map((color) => (
                <div
                  key={color}
                  className="flex items-center justify-between rounded-lg border border-white/10 bg-[#1e1f22] px-3 py-2"
                >
                  <span className="text-sm text-zinc-300">{color}</span>
                  <span className="text-zinc-500">▾</span>
                </div>
              ))}
            </div>
          </SharkEmbed>
        </div>
      </div>
    </MockupShell>
  );
}

function ModerationMockup() {
  return (
    <MockupShell sparkleClassName="text-red-400">
      <div className="flex gap-3">
        <BotAvatar />
        <div className="min-w-0 flex-1">
          <BotMessageHeader />
          <SharkEmbed
            borderColor="#e8c896"
            kicker="Moderasyon"
            title="┊ 🔨 Ban ┊"
            body="Kanal moderasyon logu"
          >
            <div className="mt-3 space-y-2 text-[11px] text-zinc-300">
              <div>
                <span className="text-zinc-500">▸ </span>Kullanıcı · @ToxicUser
              </div>
              <div>
                <span className="text-zinc-500">▸ </span>Moderatör · @Mod
              </div>
              <div>
                <span className="text-zinc-500">▸ </span>Sebep · Spam
              </div>
            </div>
          </SharkEmbed>
        </div>
      </div>
    </MockupShell>
  );
}

function SetupMockup() {
  return (
    <MockupShell sparkleClassName="text-blue-400">
      <div className="rounded-xl bg-[#1e1f22] p-4 font-mono text-sm">
        <div className="text-zinc-500"># Renk rolü ekle</div>
        <div className="mt-2 text-[#c9b6e4]">/setup color-menu add</div>
        <div className="mt-1 text-zinc-400">role: @matcha · hex: #A8C69F</div>
        <div className="mt-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-emerald-400">
          ✦ KURULUM · Renk rolü eklendi
        </div>
        <div className="mt-3 text-zinc-500"># Hoş geldin kanalı</div>
        <div className="mt-2 text-[#c9b6e4]">/setup welcome-channel</div>
        <div className="mt-1 text-zinc-400">channel: #hosgeldin</div>
      </div>
    </MockupShell>
  );
}

function VoiceMockup() {
  return (
    <MockupShell sparkleClassName="text-violet-400">
      <div className="flex flex-col items-center py-4">
        <div className="relative">
          <BotAvatar size={80} />
          <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#313338] ring-2 ring-[#1a1625]">
            <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden>
              <path
                fill="#5865F2"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 14.5-4-4 1.41-1.41L10.5 13.67l6.09-6.09 1.41 1.41L10.5 16.5z"
              />
            </svg>
          </span>
        </div>
        <div className="mt-4 flex items-center gap-1.5">
          <span className="text-sm font-semibold text-white">sharks</span>
          <VerifiedBotBadge />
          <AppTag />
        </div>
        <p className="mt-1 text-xs text-zinc-400">/lofi · soft-lofi çalıyor</p>
        <div className="mt-6 flex gap-2">
          {[1, 2, 3, 4, 5].map((bar) => (
            <div
              key={bar}
              className="w-1.5 rounded-full bg-[#5865F2]"
              style={{ height: `${12 + bar * 6}px` }}
            />
          ))}
        </div>
      </div>
    </MockupShell>
  );
}

const mockupMap = {
  embed: EmbedMockup,
  welcome: WelcomeMockup,
  roles: RolesMockup,
  moderation: ModerationMockup,
  setup: SetupMockup,
  voice: VoiceMockup,
  music: VoiceMockup,
};

export function FeatureMockup({ type }: FeatureMockupProps) {
  const Mockup = mockupMap[type];
  return <Mockup />;
}
