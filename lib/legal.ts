import type { Locale } from "@/lib/config";

export type LegalSection = {
  title: string;
  paragraphs: string[];
};

export type LegalContent = {
  intro: string;
  sections: LegalSection[];
};

export const termsContent: Record<Locale, LegalContent> = {
  tr: {
    intro:
      "sharks Discord botunu (“Bot”) kullanarak aşağıdaki kullanım şartlarını kabul etmiş olursunuz. Bot, Discord sunucularında moderasyon ve topluluk yönetimi amacıyla sunulmaktadır.",
    sections: [
      {
        title: "1. Hizmetin Kullanımı",
        paragraphs: [
          "Botu yalnızca Discord'un Hizmet Şartları ve Topluluk Kuralları ile uyumlu şekilde kullanmalısınız.",
          "Botu kötüye kullanmak, spam yapmak veya yetkisiz otomasyon amacıyla kullanmak yasaktır.",
        ],
      },
      {
        title: "2. Sorumluluk",
        paragraphs: [
          "Bot “olduğu gibi” sunulur. Geliştirici, botun kullanımından doğabilecek dolaylı zararlardan sorumlu tutulamaz.",
          "Sunucu yöneticileri, botun verdiği moderasyon yetkilerini ve ayarlarını yönetmekten sorumludur.",
        ],
      },
      {
        title: "3. Değişiklikler",
        paragraphs: [
          "Bu şartlar önceden haber verilmeksizin güncellenebilir. Güncel sürüm her zaman bu sayfada yayınlanır.",
        ],
      },
      {
        title: "4. İletişim",
        paragraphs: [
          "Sorularınız için GitHub deposu üzerinden iletişime geçebilirsiniz.",
        ],
      },
    ],
  },
  en: {
    intro:
      "By using the sharks Discord bot (“Bot”), you agree to the following terms. The Bot is provided for moderation and community management on Discord servers.",
    sections: [
      {
        title: "1. Use of Service",
        paragraphs: [
          "You must use the Bot in compliance with Discord's Terms of Service and Community Guidelines.",
          "Misuse, spam, or unauthorized automation using the Bot is prohibited.",
        ],
      },
      {
        title: "2. Liability",
        paragraphs: [
          "The Bot is provided “as is.” The developer is not liable for indirect damages arising from use of the Bot.",
          "Server administrators are responsible for managing the Bot's permissions and configuration.",
        ],
      },
      {
        title: "3. Changes",
        paragraphs: [
          "These terms may be updated without prior notice. The current version is always published on this page.",
        ],
      },
      {
        title: "4. Contact",
        paragraphs: [
          "For questions, you may reach out via the GitHub repository.",
        ],
      },
    ],
  },
};

export const privacyContent: Record<Locale, LegalContent> = {
  tr: {
    intro:
      "sharks botu, Discord sunucularında hizmet vermek için Discord API'sini kullanır. Gizliliğinize saygı duyuyoruz ve yalnızca botun çalışması için gerekli verileri işleriz.",
    sections: [
      {
        title: "1. Toplanan Veriler",
        paragraphs: [
          "Bot, Discord tarafından sağlanan kullanıcı ID'leri, sunucu ID'leri, kanal ID'leri ve mesaj içeriklerine (ör. moderasyon komutları sırasında) erişebilir.",
          "Hoş geldin/ayrılma kanalı gibi sunucu ayarları yerel bir yapılandırma dosyasında saklanabilir.",
        ],
      },
      {
        title: "2. Verilerin Kullanımı",
        paragraphs: [
          "Veriler yalnızca bot komutlarını çalıştırmak, moderasyon işlemlerini gerçekleştirmek ve sunucu ayarlarını uygulamak için kullanılır.",
          "Veriler üçüncü taraflara satılmaz veya pazarlama amacıyla paylaşılmaz.",
        ],
      },
      {
        title: "3. Veri Saklama",
        paragraphs: [
          "Sunucu ayarları, bot sunucudan çıkarılana veya veriler silinene kadar saklanabilir.",
          "Discord'un kendi gizlilik politikası da geçerlidir: https://discord.com/privacy",
        ],
      },
      {
        title: "4. Haklarınız",
        paragraphs: [
          "Verilerinizin silinmesini talep etmek için sunucu yöneticinizle iletişime geçebilir veya botu sunucunuzdan kaldırabilirsiniz.",
        ],
      },
    ],
  },
  en: {
    intro:
      "The sharks bot uses the Discord API to operate on Discord servers. We respect your privacy and only process data necessary for the Bot to function.",
    sections: [
      {
        title: "1. Data Collected",
        paragraphs: [
          "The Bot may access user IDs, server IDs, channel IDs, and message content (e.g. during moderation commands) as provided by Discord.",
          "Server settings such as welcome/leave channels may be stored in a local configuration file.",
        ],
      },
      {
        title: "2. Use of Data",
        paragraphs: [
          "Data is used solely to run bot commands, perform moderation actions, and apply server settings.",
          "Data is not sold or shared for marketing purposes.",
        ],
      },
      {
        title: "3. Data Retention",
        paragraphs: [
          "Server settings may be retained until the bot is removed from the server or data is deleted.",
          "Discord's own privacy policy also applies: https://discord.com/privacy",
        ],
      },
      {
        title: "4. Your Rights",
        paragraphs: [
          "To request deletion of your data, contact your server administrator or remove the bot from your server.",
        ],
      },
    ],
  },
};
