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
      { slug: "music", title: { tr: "Soft-Lofi Müzik", en: "Soft-Lofi Music" } },
    ],
  },
  {
    title: { tr: "Yapılandırma", en: "Configuration" },
    items: [
      { slug: "configuration", title: { tr: "Sunucu Ayarları", en: "Server Settings" } },
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
            "sharks, Discord sunucuları için hoş geldin mesajları, rol menüleri, moderasyon, soft-lofi müzik ve slash komutları sunan bir topluluk botudur.",
            "Botu davet ettikten sonra tüm ayarları Discord içinden `/setup` komutu ile yapabilirsiniz — dosya düzenlemenize gerek yok.",
          ],
        },
        {
          heading: "Neler yapabilirsiniz?",
          list: [
            "Yeni üyeler için hoş geldin ve ayrılma mesajları göndermek",
            "Renk, cinsiyet ve ilgi alanı rolleri için dropdown/buton menüler oluşturmak",
            "Ban, kick, mute ve mesaj temizleme ile moderasyon yapmak",
            "Ses kanalında `/lofi` ile soft-lofi müzik dinlemek",
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
            "sharks is a community bot for Discord servers offering welcome messages, role menus, moderation, soft-lofi music, and slash commands.",
            "After inviting the bot, configure everything from Discord with `/setup` — no file editing required.",
          ],
        },
        {
          heading: "What can you do?",
          list: [
            "Send welcome and leave messages for new members",
            "Create dropdown/button menus for color, gender, and interest roles",
            "Moderate with ban, kick, mute, and message clearing",
            "Listen to soft lofi in voice with `/lofi`",
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
          heading: "4. Rol menülerini yapılandırın",
          paragraphs: [
            "Discord'da renk/cinsiyet/ilgi alanı rollerini oluşturduktan sonra `/setup` ile menülere ekleyin. Örnek:",
          ],
          code: "/setup color-menu add role:@matcha label:matcha hex:#A8C69F",
        },
        {
          heading: "5. Kuralları ayarlayın ve paylaşın",
          paragraphs: [
            "`/setup rules add` ile kurallarınızı ekleyin, ardından kurallar kanalında `/rules` komutunu çalıştırın.",
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
          heading: "4. Configure role menus",
          paragraphs: [
            "After creating roles in Discord, add them with `/setup`. Example:",
          ],
          code: "/setup color-menu add role:@matcha label:matcha hex:#A8C69F",
        },
        {
          heading: "5. Set rules and post them",
          paragraphs: [
            "Add rules with `/setup rules add`, then run `/rules` in your rules channel.",
          ],
        },
      ],
    },
  },
  {
    slug: "setup",
    title: { tr: "Bot Kurulumu", en: "Bot Setup" },
    description: {
      tr: "Hoş geldin, ayrılma kanalları, rol menüleri, kurallar ve diğer sunucu ayarları.",
      en: "Welcome/leave channels, role menus, rules, and other server settings.",
    },
    content: {
      tr: [
        {
          heading: "/setup komutu",
          paragraphs: ["Yetkili kullanıcılar sunucu ayarlarını `/setup` komutu ile yapılandırabilir:"],
          list: [
            "/setup welcome-channel — Hoş geldin mesaj kanalı",
            "/setup leave-channel — Ayrılma mesaj kanalı",
            "/setup color-menu add|remove|list — Renk menüsü rolleri",
            "/setup gender-menu add|remove|list — Cinsiyet menüsü rolleri",
            "/setup role-menu add|remove|list — Buton menüsü rolleri",
            "/setup rules set-title|set-description|add|remove|list|reset — Sunucu kuralları",
          ],
        },
        {
          heading: "Gerekli izinler",
          list: [
            "Mesaj Gönder / Embed Bağlantı — hoş geldin ve kurallar embed'leri için",
            "Mesajları Yönet — /clear komutu için",
            "Üyeleri Yasakla / At / Sustur — moderasyon komutları için",
            "Rolleri Yönet — rol menüleri için",
            "Bağlan / Konuş — /lofi müzik komutu için",
          ],
        },
      ],
      en: [
        {
          heading: "/setup command",
          paragraphs: ["Staff can configure server settings with the `/setup` command:"],
          list: [
            "/setup welcome-channel — Welcome message channel",
            "/setup leave-channel — Leave message channel",
            "/setup color-menu add|remove|list — Color menu roles",
            "/setup gender-menu add|remove|list — Gender menu roles",
            "/setup role-menu add|remove|list — Button menu roles",
            "/setup rules set-title|set-description|add|remove|list|reset — Server rules",
          ],
        },
        {
          heading: "Required permissions",
          list: [
            "Send Messages / Embed Links — for welcome and rules embeds",
            "Manage Messages — for /clear command",
            "Ban / Kick / Moderate Members — for moderation commands",
            "Manage Roles — for role menus",
            "Connect / Speak — for /lofi music",
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
          paragraphs: ["sharks 20 slash komutu sunar. Komutlar üç kategoriye ayrılır:"],
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
          list: ["/lofi", "/music stop", "/music volume", "/music now-playing", "/join", "/leave"],
        },
        {
          paragraphs: ["Detaylı komut listesi için ana sitedeki Komutlar sayfasına bakabilirsiniz."],
        },
      ],
      en: [
        {
          paragraphs: ["sharks offers 20 slash commands divided into three categories:"],
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
          list: ["/lofi", "/music stop", "/music volume", "/music now-playing", "/join", "/leave"],
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
            "sharks üç tür rol menüsü sunar. Önce Discord'da rolleri oluşturun, ardından `/setup` ile menülere ekleyin ve ilgili kanalda menü komutunu çalıştırın.",
          ],
        },
        {
          heading: "Renk menüsü",
          paragraphs: [
            "1. Sunucuda renk rolleri oluşturun",
            "2. `/setup color-menu add role:@rol label:etiket hex:#RRGGBB` ile ekleyin",
            "3. `/color-menu` komutunu menüyü göndermek istediğiniz kanalda çalıştırın",
          ],
          code: "/setup color-menu add role:@matcha label:matcha hex:#A8C69F emoji:🍈",
        },
        {
          heading: "Cinsiyet menüsü",
          paragraphs: [
            "1. Cinsiyet rolleri oluşturun",
            "2. `/setup gender-menu add` ile ekleyin",
            "3. `/gender-menu` komutunu çalıştırın",
          ],
        },
        {
          heading: "Rol menüsü (buton)",
          paragraphs: [
            "1. Bildirim/ilgi alanı rolleri oluşturun",
            "2. `/setup role-menu add` ile ekleyin (isteğe bağlı style: Primary/Secondary/Success/Danger)",
            "3. `/role-menu` komutunu çalıştırın — kullanıcılar birden fazla rol seçebilir",
          ],
        },
      ],
      en: [
        {
          paragraphs: [
            "sharks offers three types of role menus. Create roles in Discord, add them with `/setup`, then post the menu in a channel.",
          ],
        },
        {
          heading: "Color menu",
          paragraphs: [
            "1. Create color roles in your server",
            "2. Add with `/setup color-menu add role:@role label:label hex:#RRGGBB`",
            "3. Run `/color-menu` in the channel where you want the menu",
          ],
          code: "/setup color-menu add role:@matcha label:matcha hex:#A8C69F emoji:🍈",
        },
        {
          heading: "Gender menu",
          paragraphs: [
            "1. Create gender roles",
            "2. Add with `/setup gender-menu add`",
            "3. Run `/gender-menu`",
          ],
        },
        {
          heading: "Role menu (buttons)",
          paragraphs: [
            "1. Create notification/interest roles",
            "2. Add with `/setup role-menu add` (optional style: Primary/Secondary/Success/Danger)",
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
            "Hoş geldin ve ayrılma mesaj metinleri bot geliştiricisi tarafından yönetilir. Sunucu kuralları ise `/setup rules` komutları ile sunucunuza özel ayarlanır.",
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
            "Welcome and leave message text is managed by the bot developer. Server rules are configured per server with `/setup rules` commands.",
          ],
        },
      ],
    },
  },
  {
    slug: "configuration",
    title: { tr: "Sunucu Ayarları", en: "Server Settings" },
    description: {
      tr: "Ayarların nerede saklandığı ve nasıl yönetildiği.",
      en: "Where settings are stored and how they are managed.",
    },
    content: {
      tr: [
        {
          paragraphs: [
            "sharks bir topluluk botudur — sunucu adminleri ayarları Discord içinden `/setup` komutu ile yapar. Dosya düzenlemenize gerek yoktur.",
          ],
        },
        {
          heading: "Neler /setup ile yapılandırılır?",
          list: [
            "Hoş geldin ve ayrılma kanalları",
            "Renk, cinsiyet ve buton menüsü rolleri",
            "Sunucu kuralları (/rules embed'i)",
          ],
        },
        {
          heading: "Veri saklama",
          paragraphs: [
            "Sunucu bazlı ayarlar bot sunucusunda `data/settings.json` dosyasında saklanır. Her sunucunun ayarları birbirinden bağımsızdır.",
          ],
        },
        {
          heading: "Müzik",
          paragraphs: [
            "Soft-lofi yayın kaynakları bot geliştiricisi tarafından yönetilir; sunucu adminlerinin ayrıca yapılandırması gerekmez.",
          ],
        },
      ],
      en: [
        {
          paragraphs: [
            "sharks is a community bot — server admins configure everything from Discord with `/setup`. No file editing required.",
          ],
        },
        {
          heading: "What can you configure with /setup?",
          list: [
            "Welcome and leave channels",
            "Color, gender, and button menu roles",
            "Server rules (shown by /rules)",
          ],
        },
        {
          heading: "Data storage",
          paragraphs: [
            "Per-server settings are stored in `data/settings.json` on the bot host. Each guild's settings are independent.",
          ],
        },
        {
          heading: "Music",
          paragraphs: [
            "Soft-lofi stream sources are managed by the bot developer; server admins do not need separate music configuration.",
          ],
        },
      ],
    },
  },
  {
    slug: "music",
    title: { tr: "Soft-Lofi Müzik", en: "Soft-Lofi Music" },
    description: {
      tr: "Ses kanalında soft-lofi dinleme.",
      en: "Listening to soft lofi in voice channels.",
    },
    content: {
      tr: [
        {
          paragraphs: [
            "sharks, ses kanallarında soft-lofi temalı müzik çalmanızı sağlar. Study/chill odaları için idealdir.",
          ],
        },
        {
          heading: "/lofi",
          paragraphs: [
            "Bir ses kanalına katılın ve `/lofi` yazın. Bot kanala bağlanır ve soft-lofi yayını başlatır. Akış kesilirse bot otomatik olarak yeniden dener.",
          ],
          code: "/lofi",
        },
        {
          heading: "/music komutları",
          list: [
            "/music stop — Müziği durdurur ve ses kanalından ayrılır",
            "/music volume level:50 — Ses seviyesini ayarlar (1–100)",
            "/music now-playing — Çalıp çalmadığını kontrol eder",
            "/leave — Müziği durdurup kanaldan ayrılır (alternatif)",
          ],
        },
        {
          heading: "Gerekli izinler",
          list: ["Bağlan", "Konuş (Speak)"],
        },
      ],
      en: [
        {
          paragraphs: [
            "sharks lets you play soft-lofi themed music in voice channels — great for study and chill rooms.",
          ],
        },
        {
          heading: "/lofi",
          paragraphs: [
            "Join a voice channel and run `/lofi`. The bot connects and starts a soft-lofi stream. If a stream drops, the bot retries automatically.",
          ],
          code: "/lofi",
        },
        {
          heading: "/music commands",
          list: [
            "/music stop — Stop playback and disconnect from voice",
            "/music volume level:50 — Set volume (1–100)",
            "/music now-playing — Check if music is playing",
            "/leave — Stop and disconnect (alternative)",
          ],
        },
        {
          heading: "Required permissions",
          list: ["Connect", "Speak"],
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
