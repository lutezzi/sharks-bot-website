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
    welcome: { label: "Hoş Geldin / Ayrılma", href: "#features" },
    roles: { label: "Rol Menüleri", href: "#features" },
    moderation: { label: "Moderasyon", href: "#features" },
    utility: { label: "Bilgi Komutları", href: "#features" },
    voice: { label: "Ses Kanalı", href: "#features" },
  },
  resourcesMenu: {
    commandsModeration: { label: "Moderasyon Komutları", href: "/commands#moderation" },
    commandsGeneral: { label: "Genel Komutlar", href: "/commands#general" },
    commandsVoice: { label: "Ses Komutları", href: "/commands#voice" },
    github: { label: "Kaynak Kod", href: "external:github" },
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
    welcome: { label: "Welcome / Leave", href: "#features" },
    roles: { label: "Role Menus", href: "#features" },
    moderation: { label: "Moderation", href: "#features" },
    utility: { label: "Info Commands", href: "#features" },
    voice: { label: "Voice Channel", href: "#features" },
  },
  resourcesMenu: {
    commandsModeration: { label: "Moderation Commands", href: "/commands#moderation" },
    commandsGeneral: { label: "General Commands", href: "/commands#general" },
    commandsVoice: { label: "Voice Commands", href: "/commands#voice" },
    github: { label: "Source Code", href: "external:github" },
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
