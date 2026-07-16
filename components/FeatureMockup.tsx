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

function EmbedMockup() {
  return (
    <MockupShell sparkleClassName="text-emerald-400">
      <div className="flex gap-3">
        <BotAvatar />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-white">sharks</span>
            <span className="rounded bg-[#5865F2] px-1 py-0.5 text-[10px] font-bold uppercase text-white">
              BOT
            </span>
            <span className="text-xs text-zinc-500">Bugün 16:20</span>
          </div>
          <div className="mt-3 rounded-lg border-l-4 border-[#5865F2] bg-[#2b2d31] p-4">
            <div className="h-3 w-32 rounded bg-zinc-500/40" />
            <div className="mt-2 h-2.5 w-full rounded bg-zinc-600/30" />
            <div className="mt-1.5 h-2.5 w-4/5 rounded bg-zinc-600/30" />
            <div className="mt-4 h-24 w-full rounded-lg bg-zinc-700/40" />
          </div>
        </div>
      </div>
    </MockupShell>
  );
}

function WelcomeMockup() {
  return (
    <MockupShell sparkleClassName="text-[#c9b6e4]">
      <div className="space-y-4">
        <div className="flex gap-3">
          <BotAvatar />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-white">sharks</span>
              <span className="rounded bg-[#5865F2] px-1 py-0.5 text-[10px] font-bold uppercase text-white">
                BOT
              </span>
            </div>
            <p className="mt-1 text-sm text-zinc-300">
              Hadi hep birlikte <span className="rounded bg-[#5865F2]/30 px-1 text-[#c9b6e4]">@YeniUye</span>{" "}
              karşılayalım!
            </p>
            <div className="mt-3 overflow-hidden rounded-xl border border-white/5 bg-[#111827] p-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#5865F2] to-[#c9b6e4]" />
                <div className="space-y-2">
                  <div className="h-2.5 w-24 rounded bg-zinc-500/50" />
                  <div className="h-2 w-16 rounded bg-zinc-600/40" />
                </div>
              </div>
              <div className="mt-4 h-2 w-full rounded bg-zinc-700/40" />
              <div className="mt-2 h-2 w-3/4 rounded bg-zinc-700/30" />
            </div>
          </div>
        </div>
        <div className="flex gap-3 pl-2">
          <div className="h-8 w-8 shrink-0 rounded-full bg-zinc-600" />
          <p className="text-sm text-zinc-400">
            Sunucuya hoş geldin, <span className="text-[#c9b6e4]">@YeniUye</span>!
          </p>
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
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-white">sharks</span>
            <span className="rounded bg-[#5865F2] px-1 py-0.5 text-[10px] font-bold uppercase text-white">
              BOT
            </span>
          </div>
          <div className="mt-3 rounded-lg border-l-4 border-pink-400 bg-[#2b2d31] p-4">
            <div className="text-sm font-semibold text-white">Rol Seçim Menüsü</div>
            <p className="mt-1 text-xs text-zinc-400">Aşağıdaki menüden rolünü seç.</p>
            <div className="mt-4 space-y-2">
              {["Kırmızı", "Mavi", "Yeşil"].map((color) => (
                <div
                  key={color}
                  className="flex items-center justify-between rounded-lg border border-white/10 bg-[#1e1f22] px-3 py-2"
                >
                  <span className="text-sm text-zinc-300">{color}</span>
                  <span className="text-zinc-500">▾</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MockupShell>
  );
}

function ModerationMockup() {
  return (
    <MockupShell sparkleClassName="text-red-400">
      <div className="space-y-3">
        <div className="flex items-center justify-between rounded-lg bg-[#2b2d31] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">🔨</span>
            <span className="text-sm font-medium text-white">Moderasyon Logu</span>
          </div>
          <span className="text-xs text-zinc-500">Az önce</span>
        </div>
        {[
          { action: "Mute", user: "@User123", color: "text-yellow-400" },
          { action: "Kick", user: "@Spammer", color: "text-orange-400" },
          { action: "Ban", user: "@ToxicUser", color: "text-red-400" },
        ].map((entry) => (
          <div
            key={entry.user}
            className="flex items-center gap-3 rounded-lg border border-white/5 bg-[#1e1f22] px-4 py-3"
          >
            <div className="h-8 w-8 rounded-full bg-zinc-700" />
            <div>
              <p className="text-sm text-white">
                <span className={`font-semibold ${entry.color}`}>{entry.action}</span> · {entry.user}
              </p>
              <p className="text-xs text-zinc-500">Moderator tarafından uygulandı</p>
            </div>
          </div>
        ))}
      </div>
    </MockupShell>
  );
}

function SetupMockup() {
  return (
    <MockupShell sparkleClassName="text-blue-400">
      <div className="rounded-xl bg-[#1e1f22] p-4 font-mono text-sm">
        <div className="text-zinc-500"># Hoş geldin kanalını ayarla</div>
        <div className="mt-2 text-[#c9b6e4]">/setup welcome-channel</div>
        <div className="mt-1 text-zinc-400">channel: #hosgeldin</div>
        <div className="mt-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-emerald-400">
          ✓ Hoş geldin kanalı ayarlandı!
        </div>
        <div className="mt-3 text-zinc-500"># Ayrılma kanalını ayarla</div>
        <div className="mt-2 text-[#c9b6e4]">/setup leave-channel</div>
        <div className="mt-1 text-zinc-400">channel: #ayrilanlar</div>
      </div>
    </MockupShell>
  );
}

function VoiceMockup() {
  return (
    <MockupShell sparkleClassName="text-violet-400">
      <div className="flex flex-col items-center py-4">
        <BotAvatar size={80} />
        <p className="mt-4 text-sm font-semibold text-white">Genel Ses</p>
        <p className="mt-1 text-xs text-zinc-400">sharks bağlandı</p>
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
};

export function FeatureMockup({ type }: FeatureMockupProps) {
  const Mockup = mockupMap[type];
  return <Mockup />;
}
