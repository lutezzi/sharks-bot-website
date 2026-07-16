import type { Locale } from "@/lib/config";

export type DocSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
  code?: string;
};

export type DocPage = {
  slug: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  content: Record<Locale, DocSection[]>;
};

export type DocNavGroup = {
  title: Record<Locale, string>;
  items: { slug: string; title: Record<Locale, string> }[];
};

export const docNavGroups: DocNavGroup[] = [
  {
    title: { tr: "Başlangıç", en: "Getting Started" },
    items: [
      { slug: "", title: { tr: "Giriş", en: "Introduction" } },
      { slug: "getting-started", title: { tr: "Hızlı Başlangıç", en: "Quick Start" } },
      { slug: "setup", title: { tr: "Bot Kurulumu", en: "Bot Setup" } },
    ],
  },
  {
    title: { tr: "Özellikler", en: "Features" },
    items: [
      { slug: "commands", title: { tr: "Komutlar", en: "Commands" } },
      { slug: "moderation", title: { tr: "Moderasyon", en: "Moderation" } },
      { slug: "role-menus", title: { tr: "Rol Menüleri", en: "Role Menus" } },
      { slug: "welcome", title: { tr: "Hoş Geldin Mesajları", en: "Welcome Messages" } },
    ],
  },
  {
    title: { tr: "Yapılandırma", en: "Configuration" },
    items: [
      { slug: "configuration", title: { tr: "Config Dosyaları", en: "Config Files" } },
    ],
  },
];

export const docPages: DocPage[] = [
  {
    slug: "",
    title: { tr: "sharks Dokümantasyonu", en: "sharks Documentation" },
    description: {
      tr: "sharks Discord botunu kurmak, yapılandırmak ve kullanmak için resmi kılavuz.",
      en: "Official guide to install, configure, and use the sharks Discord bot.",
    },
    content: {
      tr: [
        {
          paragraphs: [
            "sharks, Discord sunucuları için hoş geldin mesajları, rol menüleri, moderasyon araçları ve slash komutları sunan bir moderasyon botudur.",
            "Bu dokümantasyon botu sunucunuza eklemenizden komutları kullanmaya kadar tüm adımları kapsar.",
          ],
        },
        {
          heading: "Neler yapabilirsiniz?",
          list: [
            "Yeni üyeler için hoş geldin ve ayrılma mesajları göndermek",
            "Renk, cinsiyet ve ilgi alanı rolleri için dropdown menüler oluşturmak",
            "Ban, kick, mute ve mesaj temizleme ile moderasyon yapmak",
            "Kurallar, userinfo, serverinfo gibi bilgi komutlarını kullanmak",
          ],
        },
        {
          heading: "Hızlı linkler",
          list: [
            "Botu davet etmek için ana sitedeki «Discord'a Ekle» butonunu kullanın",
            "İlk kurulum için Hızlı Başlangıç sayfasına gidin",
            "Tüm komutlar için Komutlar sayfasına bakın",
          ],
        },
      ],
      en: [
        {
          paragraphs: [
            "sharks is a moderation bot for Discord servers offering welcome messages, role menus, moderation tools, and slash commands.",
            "This documentation covers everything from adding the bot to your server to using its commands.",
          ],
        },
        {
          heading: "What can you do?",
          list: [
            "Send welcome and leave messages for new members",
            "Create dropdown menus for color, gender, and interest roles",
            "Moderate with ban, kick, mute, and message clearing",
            "Use info commands like rules, userinfo, and serverinfo",
          ],
        },
        {
          heading: "Quick links",
          list: [
            "Use the «Add to Discord» button on the main site to invite the bot",
            "Go to Quick Start for initial setup",
            "See the Commands page for the full command list",
          ],
        },
      ],
    },
  },
  {
    slug: "getting-started",
    title: { tr: "Hızlı Başlangıç", en: "Quick Start" },
    description: {
      tr: "sharks botunu sunucunuza 5 dakikada ekleyin ve yapılandırın.",
      en: "Add and configure the sharks bot on your server in 5 minutes.",
    },
    content: {
      tr: [
        {
          heading: "1. Botu davet edin",
          paragraphs: [
            "Ana sitedeki «Discord'a Ekle» butonuna tıklayın ve botu sunucunuza ekleyin. «Sunucuyu Yönet» ve «Uygulama Komutları» izinlerinin açık olduğundan emin olun.",
          ],
        },
        {
          heading: "2. Rol sıralamasını ayarlayın",
          paragraphs: [
            "Discord → Sunucu Ayarları → Roller bölümünde sharks bot rolünü, botun yönetmesi gereken rollerin ÜSTÜNE taşıyın. Aksi halde ban/kick/mute ve rol verme işlemleri çalışmaz.",
          ],
        },
        {
          heading: "3. Hoş geldin kanalını ayarlayın",
          paragraphs: ["Sunucunuzda aşağıdaki slash komutunu çalıştırın:"],
          code: "/setup welcome-channel channel:#hosgeldin",
        },
        {
          heading: "4. Kuralları gönderin",
          paragraphs: [
            "Kurallar kanalında `/rules` komutunu kullanarak sunucu kurallarını embed olarak paylaşabilirsiniz. Kurallar metnini `src/config/rules.js` dosyasından özelleştirebilirsiniz.",
          ],
        },
      ],
      en: [
        {
          heading: "1. Invite the bot",
          paragraphs: [
            "Click «Add to Discord» on the main site and add the bot to your server. Make sure «Manage Server» and «Use Application Commands» permissions are enabled.",
          ],
        },
        {
          heading: "2. Set role hierarchy",
          paragraphs: [
            "In Discord → Server Settings → Roles, move the sharks bot role ABOVE any roles it needs to manage. Otherwise ban/kick/mute and role assignment won't work.",
          ],
        },
        {
          heading: "3. Set welcome channel",
          paragraphs: ["Run this slash command in your server:"],
          code: "/setup welcome-channel channel:#welcome",
        },
        {
          heading: "4. Post the rules",
          paragraphs: [
            "Use `/rules` in your rules channel to share server rules as an embed. Customize the rules text in `src/config/rules.js`.",
          ],
        },
      ],
    },
  },
  {
    slug: "setup",
    title: { tr: "Bot Kurulumu", en: "Bot Setup" },
    description: {
      tr: "Hoş geldin, ayrılma kanalları ve temel bot ayarları.",
      en: "Welcome, leave channels, and basic bot settings.",
    },
    content: {
      tr: [
        {
          heading: "/setup komutu",
          paragraphs: ["Yetkili kullanıcılar sunucu ayarlarını `/setup` komutu ile yapılandırabilir:"],
          list: [
            "/setup welcome-channel — Hoş geldin mesajlarının gönderileceği kanal",
            "/setup leave-channel — Ayrılma mesajlarının gönderileceği kanal",
          ],
        },
        {
          heading: "Gerekli izinler",
          list: [
            "Mesaj Gönder / Embed Bağlantı — hoş geldin ve kurallar embed'leri için",
            "Mesajları Yönet — /clear komutu için",
            "Üyeleri Yasakla / At / Sustur — moderasyon komutları için",
            "Rolleri Yönet — rol menüleri için",
            "Bağlan — /join ses komutu için",
          ],
        },
      ],
      en: [
        {
          heading: "/setup command",
          paragraphs: ["Staff can configure server settings with the `/setup` command:"],
          list: [
            "/setup welcome-channel — Channel for welcome messages",
            "/setup leave-channel — Channel for leave messages",
          ],
        },
        {
          heading: "Required permissions",
          list: [
            "Send Messages / Embed Links — for welcome and rules embeds",
            "Manage Messages — for /clear command",
            "Ban / Kick / Moderate Members — for moderation commands",
            "Manage Roles — for role menus",
            "Connect — for /join voice command",
          ],
        },
      ],
    },
  },
  {
    slug: "commands",
    title: { tr: "Komutlar", en: "Commands" },
    description: {
      tr: "Tüm slash komutlarının özeti ve kategorileri.",
      en: "Overview of all slash commands and categories.",
    },
    content: {
      tr: [
        {
          paragraphs: ["sharks 17 slash komutu sunar. Komutlar üç kategoriye ayrılır:"],
        },
        {
          heading: "Moderasyon",
          list: ["/ban", "/unban", "/kick", "/mute", "/unmute", "/clear"],
        },
        {
          heading: "Genel",
          list: [
            "/rules",
            "/help",
            "/setup",
            "/color-menu",
            "/gender-menu",
            "/role-menu",
            "/userinfo",
            "/serverinfo",
            "/avatar",
          ],
        },
        {
          heading: "Ses",
          list: ["/join", "/leave"],
        },
        {
          paragraphs: ["Detaylı komut listesi için ana sitedeki Komutlar sayfasına bakabilirsiniz."],
        },
      ],
      en: [
        {
          paragraphs: ["sharks offers 17 slash commands divided into three categories:"],
        },
        {
          heading: "Moderation",
          list: ["/ban", "/unban", "/kick", "/mute", "/unmute", "/clear"],
        },
        {
          heading: "General",
          list: [
            "/rules",
            "/help",
            "/setup",
            "/color-menu",
            "/gender-menu",
            "/role-menu",
            "/userinfo",
            "/serverinfo",
            "/avatar",
          ],
        },
        {
          heading: "Voice",
          list: ["/join", "/leave"],
        },
        {
          paragraphs: ["See the Commands page on the main site for the full command reference."],
        },
      ],
    },
  },
  {
    slug: "moderation",
    title: { tr: "Moderasyon", en: "Moderation" },
    description: {
      tr: "Ban, kick, mute ve mesaj silme komutlarının kullanımı.",
      en: "Using ban, kick, mute, and message clearing commands.",
    },
    content: {
      tr: [
        {
          heading: "Ban / Unban",
          paragraphs: [
            "/ban user:@kullanıcı reason:sebep — Kullanıcıyı sunucudan yasaklar.",
            "/unban user-id:123456789 — Kullanıcının yasağını kaldırır (kullanıcı ID gerekir).",
          ],
        },
        {
          heading: "Kick",
          paragraphs: ["/kick user:@kullanıcı reason:sebep — Kullanıcıyı sunucudan atar."],
        },
        {
          heading: "Mute / Unmute",
          paragraphs: [
            "/mute user:@kullanıcı duration:10m reason:sebep — Belirtilen süre boyunca susturur (örn. 10m, 2h, 1d).",
            "/unmute user:@kullanıcı — Susturmayı kaldırır.",
          ],
        },
        {
          heading: "Clear",
          paragraphs: [
            "/clear amount:50 — Kanaldaki son 50 mesajı siler (1–100 arası). 14 günden eski mesajlar silinemez.",
          ],
        },
      ],
      en: [
        {
          heading: "Ban / Unban",
          paragraphs: [
            "/ban user:@user reason:reason — Bans a user from the server.",
            "/unban user-id:123456789 — Removes a ban (requires user ID).",
          ],
        },
        {
          heading: "Kick",
          paragraphs: ["/kick user:@user reason:reason — Kicks a user from the server."],
        },
        {
          heading: "Mute / Unmute",
          paragraphs: [
            "/mute user:@user duration:10m reason:reason — Timeouts a user (e.g. 10m, 2h, 1d).",
            "/unmute user:@user — Removes the timeout.",
          ],
        },
        {
          heading: "Clear",
          paragraphs: [
            "/clear amount:50 — Deletes the last 50 messages in the channel (1–100). Messages older than 14 days cannot be deleted.",
          ],
        },
      ],
    },
  },
  {
    slug: "role-menus",
    title: { tr: "Rol Menüleri", en: "Role Menus" },
    description: {
      tr: "Renk, cinsiyet ve ilgi alanı rol menülerinin kurulumu.",
      en: "Setting up color, gender, and interest role menus.",
    },
    content: {
      tr: [
        {
          paragraphs: [
            "sharks üç tür rol menüsü sunar. Her biri için önce Discord'da rolleri oluşturup config dosyalarına rol ID'lerini yazmanız gerekir.",
          ],
        },
        {
          heading: "Renk menüsü",
          paragraphs: [
            "1. Sunucuda renk rolleri oluşturun",
            "2. `src/config/colorRoles.js` dosyasına rol ID ve hex renk kodlarını girin",
            "3. `/color-menu` komutunu menüyü göndermek istediğiniz kanalda çalıştırın",
          ],
        },
        {
          heading: "Cinsiyet menüsü",
          paragraphs: [
            "1. Cinsiyet rolleri oluşturun",
            "2. `src/config/genderRoles.js` dosyasını düzenleyin",
            "3. `/gender-menu` komutunu çalıştırın",
          ],
        },
        {
          heading: "Rol menüsü (buton)",
          paragraphs: [
            "1. Bildirim/ilgi alanı rolleri oluşturun",
            "2. `src/config/reactionRoles.js` dosyasını düzenleyin",
            "3. `/role-menu` komutunu çalıştırın — kullanıcılar birden fazla rol seçebilir",
          ],
        },
      ],
      en: [
        {
          paragraphs: [
            "sharks offers three types of role menus. For each, create roles in Discord first and add role IDs to the config files.",
          ],
        },
        {
          heading: "Color menu",
          paragraphs: [
            "1. Create color roles in your server",
            "2. Add role IDs and hex colors to `src/config/colorRoles.js`",
            "3. Run `/color-menu` in the channel where you want the menu",
          ],
        },
        {
          heading: "Gender menu",
          paragraphs: [
            "1. Create gender roles",
            "2. Edit `src/config/genderRoles.js`",
            "3. Run `/gender-menu`",
          ],
        },
        {
          heading: "Role menu (buttons)",
          paragraphs: [
            "1. Create notification/interest roles",
            "2. Edit `src/config/reactionRoles.js`",
            "3. Run `/role-menu` — users can select multiple roles",
          ],
        },
      ],
    },
  },
  {
    slug: "welcome",
    title: { tr: "Hoş Geldin Mesajları", en: "Welcome Messages" },
    description: {
      tr: "Hoş geldin ve ayrılma mesajlarını yapılandırma.",
      en: "Configuring welcome and leave messages.",
    },
    content: {
      tr: [
        {
          paragraphs: [
            "Bir üye sunucuya katıldığında veya ayrıldığında sharks otomatik embed mesaj gönderir.",
          ],
        },
        {
          heading: "Kanal ayarlama",
          list: [
            "/setup welcome-channel channel:#kanal",
            "/setup leave-channel channel:#kanal",
          ],
        },
        {
          heading: "Metinleri özelleştirme",
          paragraphs: [
            "Hoş geldin ve ayrılma mesaj metinleri `src/locales/en.json` (veya `tr.json`) dosyasındaki `embeds.welcome` ve `embeds.leave` bölümlerinden düzenlenir.",
          ],
        },
      ],
      en: [
        {
          paragraphs: [
            "When a member joins or leaves your server, sharks sends an automatic embed message.",
          ],
        },
        {
          heading: "Channel setup",
          list: [
            "/setup welcome-channel channel:#channel",
            "/setup leave-channel channel:#channel",
          ],
        },
        {
          heading: "Customizing text",
          paragraphs: [
            "Welcome and leave message text is edited in `src/locales/en.json` (or `tr.json`) under `embeds.welcome` and `embeds.leave`.",
          ],
        },
      ],
    },
  },
  {
    slug: "configuration",
    title: { tr: "Config Dosyaları", en: "Config Files" },
    description: {
      tr: "Bot yapılandırma dosyalarının açıklaması.",
      en: "Overview of bot configuration files.",
    },
    content: {
      tr: [
        {
          paragraphs: ["Self-host ediyorsanız aşağıdaki dosyaları düzenleyebilirsiniz:"],
        },
        {
          heading: "Dosyalar",
          list: [
            "src/config/rules.js — Sunucu kuralları",
            "src/config/colorRoles.js — Renk rolleri ve hex kodları",
            "src/config/genderRoles.js — Cinsiyet rolleri",
            "src/config/reactionRoles.js — İlgi alanı/bildirim rolleri",
            "src/config/activities.js — Bot durum çubuğu yazıları",
            "src/locales/*.json — Tüm bot metinleri (i18n)",
            ".env — Token, CLIENT_ID ve LOCALE ayarları",
          ],
        },
      ],
      en: [
        {
          paragraphs: ["If self-hosting, you can edit the following files:"],
        },
        {
          heading: "Files",
          list: [
            "src/config/rules.js — Server rules",
            "src/config/colorRoles.js — Color roles and hex codes",
            "src/config/genderRoles.js — Gender roles",
            "src/config/reactionRoles.js — Interest/notification roles",
            "src/config/activities.js — Bot status rotation text",
            "src/locales/*.json — All bot strings (i18n)",
            ".env — Token, CLIENT_ID, and LOCALE settings",
          ],
        },
      ],
    },
  },
];

export function getDocPage(slug: string): DocPage | undefined {
  return docPages.find((page) => page.slug === slug);
}

export function getDocHref(locale: Locale, slug: string) {
  return slug ? `/docs/${locale}/${slug}` : `/docs/${locale}`;
}

export function getDocsBaseUrl() {
  if (process.env.NEXT_PUBLIC_DOCS_URL) {
    return process.env.NEXT_PUBLIC_DOCS_URL.replace(/\/$/, "");
  }
  const domain = process.env.NEXT_PUBLIC_SITE_DOMAIN ?? "sharksbot.site";
  return `https://docs.${domain}`;
}

export function getExternalDocsUrl(locale: Locale, slug = "") {
  const base = getDocsBaseUrl();
  return slug ? `${base}/${locale}/${slug}` : `${base}/${locale}`;
}
