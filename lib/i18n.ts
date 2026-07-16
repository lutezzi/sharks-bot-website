import type { Locale } from "@/lib/config";

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
      href: "#features",
      icon: "welcome" as const,
    },
    roles: {
      title: "Rol Menüleri",
      description: "Renk, cinsiyet ve ilgi alanı rolleri için dropdown menüler.",
      href: "#features",
      icon: "roles" as const,
    },
    moderation: {
      title: "Moderasyon",
      description: "Ban, kick, mute ve toplu mesaj silme araçları.",
      href: "#features",
      icon: "moderation" as const,
    },
    utility: {
      title: "Gömülü Mesajlar",
      description: "Kurallar, bilgi komutları ve şık embed mesajları.",
      href: "#features",
      icon: "embed" as const,
    },
    setup: {
      title: "Kolay Kurulum",
      description: "/setup ile hoş geldin kanallarını saniyeler içinde ayarlayın.",
      href: "#features",
      icon: "setup" as const,
    },
    voice: {
      title: "Ses Kanalı",
      description: "/join ve /leave ile botu sesli kanala davet edin.",
      href: "#features",
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
      href: "external:github",
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
    title: "Sunucunu sharks ile yönet",
    subtitle:
      "Hoş geldin mesajları, rol seçim menüleri, moderasyon araçları ve kullanışlı slash komutları — hepsi tek botta.",
    addBot: "Discord'a Ekle",
    browseFeatures: "Özelliklere Göz At",
  },
  features: {
    title: "Özellikler",
    subtitle: "Sunucunu büyütürken topluluğunu düzenli tut.",
    items: [
      {
        icon: "👋",
        title: "Hoş Geldin & Ayrılma",
        description: "Yeni üyeleri karşıla, ayrılanları özel kanallarda bildir.",
      },
      {
        icon: "🎨",
        title: "Rol Menüleri",
        description: "Renk, cinsiyet ve ilgi alanı rolleri için dropdown menüler.",
      },
      {
        icon: "🔨",
        title: "Moderasyon",
        description: "Ban, kick, mute, unban, unmute ve toplu mesaj silme.",
      },
      {
        icon: "📜",
        title: "Kurallar & Bilgi",
        description: "Kurallar embed'i, userinfo, serverinfo ve avatar komutları.",
      },
      {
        icon: "⚙️",
        title: "Kolay Kurulum",
        description: "/setup ile hoş geldin ve ayrılma kanallarını saniyeler içinde ayarla.",
      },
      {
        icon: "🎧",
        title: "Ses Kanalı",
        description: "/join ve /leave ile botu sesli kanala davet et veya çıkar.",
      },
    ],
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
      href: "#features",
      icon: "welcome" as const,
    },
    roles: {
      title: "Role Menus",
      description: "Dropdown menus for color, gender, and interest roles.",
      href: "#features",
      icon: "roles" as const,
    },
    moderation: {
      title: "Moderation",
      description: "Ban, kick, mute, and bulk message deletion tools.",
      href: "#features",
      icon: "moderation" as const,
    },
    utility: {
      title: "Embedded Messages",
      description: "Rules, info commands, and polished embed messages.",
      href: "#features",
      icon: "embed" as const,
    },
    setup: {
      title: "Easy Setup",
      description: "Configure welcome channels in seconds with /setup.",
      href: "#features",
      icon: "setup" as const,
    },
    voice: {
      title: "Voice Channel",
      description: "Invite the bot to voice with /join and /leave.",
      href: "#features",
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
      href: "external:github",
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
    title: "Manage your server with sharks",
    subtitle:
      "Welcome messages, role selection menus, moderation tools, and useful slash commands — all in one bot.",
    addBot: "Add to Discord",
    browseFeatures: "Browse Features",
  },
  features: {
    title: "Features",
    subtitle: "Keep your community organized as your server grows.",
    items: [
      {
        icon: "👋",
        title: "Welcome & Leave",
        description: "Greet new members and announce departures in dedicated channels.",
      },
      {
        icon: "🎨",
        title: "Role Menus",
        description: "Dropdown menus for color, gender, and interest-based roles.",
      },
      {
        icon: "🔨",
        title: "Moderation",
        description: "Ban, kick, mute, unban, unmute, and bulk message deletion.",
      },
      {
        icon: "📜",
        title: "Rules & Info",
        description: "Rules embed, userinfo, serverinfo, and avatar commands.",
      },
      {
        icon: "⚙️",
        title: "Easy Setup",
        description: "Configure welcome and leave channels in seconds with /setup.",
      },
      {
        icon: "🎧",
        title: "Voice Channel",
        description: "Invite or disconnect the bot from voice with /join and /leave.",
      },
    ],
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
