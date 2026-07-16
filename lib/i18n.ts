import type { Locale } from "@/lib/config";
import type { MenuIconName } from "@/components/NavIcons";

export type FeatureMockupType =
  | "embed"
  | "welcome"
  | "roles"
  | "moderation"
  | "setup"
  | "voice";

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
    title: "sharks — Discord Moderasyon Botu",
    description: "Hoş geldin mesajları, rol menüleri, moderasyon ve daha fazlası.",
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
      title: "Gömülü Mesajlar",
      description: "Kurallar, bilgi komutları ve şık embed mesajları.",
      href: "#embed",
      icon: "embed" as const,
    },
    setup: {
      title: "Kolay Kurulum",
      description: "/setup ile hoş geldin kanallarını saniyeler içinde ayarlayın.",
      href: "#setup",
      icon: "setup" as const,
    },
    voice: {
      title: "Ses Kanalı",
      description: "/join ve /leave ile botu sesli kanala davet edin.",
      href: "#voice",
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
      "Hoş geldin mesajları, rol menüleri, moderasyon araçları, gömülü mesajlar ve kullanışlı slash komutları — hepsi tek botta.",
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
        label: "GÖMÜLÜ MESAJLAR",
        title: "Sunucunuz için kolayca gömülü mesajlar oluşturun!",
        description:
          "sharks'ın basit özelleştirmesini kullanarak kurallar, duyurular ve bilgi mesajlarını tercih ettiğiniz kanala gönderin.",
        cta: "Gömülü mesajlar hakkında daha fazla bilgi edinin",
        ctaSlug: "commands",
        mockup: "embed",
      },
      {
        icon: "setup",
        label: "KOLAY KURULUM",
        title: "Saniyeler içinde kurulum yapın",
        description:
          "/setup komutu ile hoş geldin ve ayrılma kanallarını, log kanallarını ve diğer ayarları hızlıca yapılandırın.",
        cta: "Kurulum hakkında daha fazla bilgi edinin",
        ctaSlug: "setup",
        mockup: "setup",
      },
      {
        icon: "voice",
        label: "SES KANALI",
        title: "Botu sesli kanala davet edin",
        description:
          "/join ve /leave komutlarıyla sharks'ı ses kanalına bağlayın veya çıkarın.",
        cta: "Komutlar hakkında daha fazla bilgi edinin",
        ctaSlug: "commands",
        mockup: "voice",
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
    title: "sharks — Discord Moderation Bot",
    description: "Welcome messages, role menus, moderation tools, and more.",
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
      title: "Embedded Messages",
      description: "Rules, info commands, and polished embed messages.",
      href: "#embed",
      icon: "embed" as const,
    },
    setup: {
      title: "Easy Setup",
      description: "Configure welcome channels in seconds with /setup.",
      href: "#setup",
      icon: "setup" as const,
    },
    voice: {
      title: "Voice Channel",
      description: "Invite the bot to voice with /join and /leave.",
      href: "#voice",
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
      "Welcome messages, role menus, moderation tools, embedded messages, and useful slash commands — all in one bot.",
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
        label: "EMBEDDED MESSAGES",
        title: "Easily create embedded messages for your server!",
        description:
          "Use sharks' simple customization to send rules, announcements, and info messages to any channel you choose.",
        cta: "Learn more about embedded messages",
        ctaSlug: "commands",
        mockup: "embed",
      },
      {
        icon: "setup",
        label: "EASY SETUP",
        title: "Get set up in seconds",
        description:
          "Configure welcome and leave channels, log channels, and other settings quickly with /setup.",
        cta: "Learn more about setup",
        ctaSlug: "setup",
        mockup: "setup",
      },
      {
        icon: "voice",
        label: "VOICE CHANNEL",
        title: "Invite the bot to voice",
        description:
          "Connect or disconnect sharks from a voice channel with /join and /leave.",
        cta: "Learn more about commands",
        ctaSlug: "commands",
        mockup: "voice",
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
