import type { Locale } from "@/lib/config";
import type { MenuIconName } from "@/components/NavIcons";

export type FeatureMockupType =
  | "embed"
  | "welcome"
  | "roles"
  | "moderation"
  | "setup"
  | "voice"
  | "music";

export type FeatureSection = {
  icon: MenuIconName;
  label: string;
  title: string;
  description: string;
  cta: string;
  ctaSlug: string;
  mockup: FeatureMockupType;
};

export type Dictionary = typeof tr;

export const tr = {
  meta: {
    title: "sharks — Discord Topluluk Botu",
    description: "Hoş geldin mesajları, rol menüleri, moderasyon, soft-lofi müzik, özgün embed'ler ve /language ile kişisel dil tercihi.",
  },
  nav: {
    features: "Özellikler",
    resources: "Kaynaklar",
    addBot: "Discord'a Ekle",
    commands: "Komutlar",
    github: "GitHub",
    language: "Dil",
  },
  featuresMenu: {
    welcome: {
      title: "Karşılama Mesajları",
      description: "Yeni üyeleri tarzla karşılayın, ayrılmaları bildirin.",
      href: "#welcome",
      icon: "welcome" as const,
    },
    roles: {
      title: "Rol Menüleri",
      description: "Renk, cinsiyet ve ilgi alanı rolleri için dropdown menüler.",
      href: "#roles",
      icon: "roles" as const,
    },
    moderation: {
      title: "Moderasyon",
      description: "Ban, kick, mute ve toplu mesaj silme araçları.",
      href: "#moderation",
      icon: "moderation" as const,
    },
    utility: {
      title: "sharks Embed'leri",
      description: "Kicker, divider ve pastel paletle özgün embed tasarımı.",
      href: "#embed",
      icon: "embed" as const,
    },
    setup: {
      title: "Kolay Kurulum",
      description: "/setup ile kanalları, rol menülerini ve kuralları Discord'dan ayarlayın.",
      href: "#setup",
      icon: "setup" as const,
    },
    voice: {
      title: "Soft-Lofi Müzik",
      description: "/lofi ile ses kanalında 7/24 soft-lofi dinleyin.",
      href: "#music",
      icon: "voice" as const,
    },
  },
  resourcesMenu: {
    commands: {
      title: "Komutlar",
      description: "Güçlü slash komutlarıyla sunucunuzu yönetin.",
      href: "/commands",
      icon: "commands" as const,
    },
    docs: {
      title: "Dökümanlar",
      description: "Yararlı kılavuzlar ve kurulum bilgileri.",
      href: "external:docs",
      icon: "docs" as const,
    },
    support: {
      title: "Destek",
      description: "Sorularınız için GitHub üzerinden bize ulaşın.",
      href: "external:support",
      icon: "support" as const,
    },
  },
  hero: {
    badge: "Discord Botu",
    title: "Profesyonel bir Discord Sunucusu Oluşturun!",
    subtitle:
      "Hoş geldin mesajları, rol menüleri, moderasyon, soft-lofi müzik, özgün sharks embed'leri ve `/language` ile kişisel dil — hepsi tek botta.",
    addBot: "Discord'a Ekle",
    browseFeatures: "Özelliklere Göz Atın",
  },
  features: {
    sections: [
      {
        icon: "welcome",
        label: "KARŞILAMA MESAJLARI",
        title: "Yeni üyeleri tarzla karşılayın",
        description:
          "Kullanıcı adını ve avatarını içeren hoş geldin embed'leri oluşturun. Ayrılan üyeler için otomatik bildirimler gönderin.",
        cta: "Karşılama hakkında daha fazla bilgi edinin",
        ctaSlug: "welcome",
        mockup: "welcome",
      },
      {
        icon: "roles",
        label: "ROL MENÜLERİ",
        title: "Üyeleriniz kendi rollerini seçsin",
        description:
          "Renk, cinsiyet ve ilgi alanı rolleri için dropdown menüler oluşturun. Tek tıkla rol verme ve alma.",
        cta: "Rol menüleri hakkında daha fazla bilgi edinin",
        ctaSlug: "role-menus",
        mockup: "roles",
      },
      {
        icon: "moderation",
        label: "MODERASYON",
        title: "Sunucunuzu güvende tutun",
        description:
          "Ban, kick, mute, unban, unmute ve toplu mesaj silme araçlarıyla moderasyon ekibinize güç katın.",
        cta: "Moderasyon hakkında daha fazla bilgi edinin",
        ctaSlug: "moderation",
        mockup: "moderation",
      },
      {
        icon: "embed",
        label: "SHARKS EMBED'LERİ",
        title: "Her yanıt özgün bir sharks imzası taşır",
        description:
          "Kicker etiketleri, imza divider çizgisi, pastel renk paleti ve `𝘴𝘩𝘢𝘳𝘬𝘴` footer'ı — hoş geldin, moderasyon, kurulum ve komut yanıtlarında tutarlı bir görünüm.",
        cta: "Embed tasarımı hakkında daha fazla bilgi edinin",
        ctaSlug: "embeds",
        mockup: "embed",
      },
      {
        icon: "setup",
        label: "KOLAY KURULUM",
        title: "Dosya düzenlemeden kurulum",
        description:
          "/setup komutu ile hoş geldin kanallarını, renk/cinsiyet/rol menülerini ve sunucu kurallarını doğrudan Discord'dan yapılandırın.",
        cta: "Kurulum hakkında daha fazla bilgi edinin",
        ctaSlug: "setup",
        mockup: "setup",
      },
      {
        icon: "voice",
        label: "SOFT-LOFI MÜZİK",
        title: "Ses kanalında soft-lofi dinleyin",
        description:
          "/lofi komutuyla bulunduğunuz ses kanalında soft-lofi çalar. /music stop veya /leave ile durdurabilirsiniz.",
        cta: "Müzik hakkında daha fazla bilgi edinin",
        ctaSlug: "music",
        mockup: "music",
      },
    ] satisfies FeatureSection[],
  },
  commandsPage: {
    title: "Komutlar",
    subtitle: "Tüm slash komutları kategorilere göre listelenmiştir.",
    categories: {
      admin: "Moderasyon",
      general: "Genel",
      voice: "Ses",
    },
  },
  footer: {
    tagline: "Discord moderasyon botu — made by lutezzi",
    terms: "Kullanım Şartları",
    privacy: "Gizlilik Politikası",
    rights: "Tüm hakları saklıdır.",
  },
  legal: {
    termsTitle: "Kullanım Şartları",
    privacyTitle: "Gizlilik Politikası",
    lastUpdated: "Son güncelleme",
  },
};

export const en: Dictionary = {
  meta: {
    title: "sharks — Discord Community Bot",
    description: "Welcome messages, role menus, moderation, soft-lofi music, signature embeds, and personal language via /language.",
  },
  nav: {
    features: "Features",
    resources: "Resources",
    addBot: "Add to Discord",
    commands: "Commands",
    github: "GitHub",
    language: "Language",
  },
  featuresMenu: {
    welcome: {
      title: "Welcome Messages",
      description: "Greet new members in style and announce departures.",
      href: "#welcome",
      icon: "welcome" as const,
    },
    roles: {
      title: "Role Menus",
      description: "Dropdown menus for color, gender, and interest roles.",
      href: "#roles",
      icon: "roles" as const,
    },
    moderation: {
      title: "Moderation",
      description: "Ban, kick, mute, and bulk message deletion tools.",
      href: "#moderation",
      icon: "moderation" as const,
    },
    utility: {
      title: "sharks Embeds",
      description: "Signature embed design with kickers, dividers, and a soft pastel palette.",
      href: "#embed",
      icon: "embed" as const,
    },
    setup: {
      title: "Easy Setup",
      description: "Configure channels, role menus, and rules from Discord with /setup.",
      href: "#setup",
      icon: "setup" as const,
    },
    voice: {
      title: "Soft-Lofi Music",
      description: "Listen to soft lofi 24/7 in voice with /lofi.",
      href: "#music",
      icon: "voice" as const,
    },
  },
  resourcesMenu: {
    commands: {
      title: "Commands",
      description: "Manage your server with powerful slash commands.",
      href: "/commands",
      icon: "commands" as const,
    },
    docs: {
      title: "Documentation",
      description: "Helpful guides and setup instructions.",
      href: "external:docs",
      icon: "docs" as const,
    },
    support: {
      title: "Support",
      description: "Reach out to us on GitHub for help.",
      href: "external:support",
      icon: "support" as const,
    },
  },
  hero: {
    badge: "Discord Bot",
    title: "Build a Professional Discord Server!",
    subtitle:
      "Welcome messages, role menus, moderation, soft-lofi music, signature sharks embeds, and personal language with `/language` — all in one bot.",
    addBot: "Add to Discord",
    browseFeatures: "Browse Features",
  },
  features: {
    sections: [
      {
        icon: "welcome",
        label: "WELCOME MESSAGES",
        title: "Welcome new members in style",
        description:
          "Create welcome embeds with usernames and avatars. Send automatic notifications when members leave.",
        cta: "Learn more about welcome messages",
        ctaSlug: "welcome",
        mockup: "welcome",
      },
      {
        icon: "roles",
        label: "ROLE MENUS",
        title: "Let members pick their own roles",
        description:
          "Create dropdown menus for color, gender, and interest roles. One-click role assignment and removal.",
        cta: "Learn more about role menus",
        ctaSlug: "role-menus",
        mockup: "roles",
      },
      {
        icon: "moderation",
        label: "MODERATION",
        title: "Keep your server safe",
        description:
          "Empower your moderation team with ban, kick, mute, unban, unmute, and bulk message deletion tools.",
        cta: "Learn more about moderation",
        ctaSlug: "moderation",
        mockup: "moderation",
      },
      {
        icon: "embed",
        label: "SHARKS EMBEDS",
        title: "Every reply carries a signature sharks look",
        description:
          "Kicker labels, signature divider bars, a soft pastel palette, and the `𝘴𝘩𝘢𝘳𝘬𝘴` footer — consistent styling across welcome, moderation, setup, and command replies.",
        cta: "Learn more about embed design",
        ctaSlug: "embeds",
        mockup: "embed",
      },
      {
        icon: "setup",
        label: "EASY SETUP",
        title: "Setup without editing files",
        description:
          "Use /setup to configure welcome channels, color/gender/role menus, and server rules directly from Discord.",
        cta: "Learn more about setup",
        ctaSlug: "setup",
        mockup: "setup",
      },
      {
        icon: "voice",
        label: "SOFT-LOFI MUSIC",
        title: "Listen to soft lofi in voice",
        description:
          "Run /lofi in a voice channel to start soft-lofi playback. Stop with /music stop or /leave.",
        cta: "Learn more about music",
        ctaSlug: "music",
        mockup: "music",
      },
    ] satisfies FeatureSection[],
  },
  commandsPage: {
    title: "Commands",
    subtitle: "All slash commands listed by category.",
    categories: {
      admin: "Moderation",
      general: "General",
      voice: "Voice",
    },
  },
  footer: {
    tagline: "Discord moderation bot — made by lutezzi",
    terms: "Terms of Use",
    privacy: "Privacy Policy",
    rights: "All rights reserved.",
  },
  legal: {
    termsTitle: "Terms of Use",
    privacyTitle: "Privacy Policy",
    lastUpdated: "Last updated",
  },
};

const dictionaries = { tr, en } as const;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
