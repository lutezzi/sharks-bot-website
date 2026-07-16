export type CommandCategory = "admin" | "general" | "voice";

export type Command = {
  name: string;
  description: Record<"tr" | "en", string>;
};

export type CommandGroup = {
  id: CommandCategory;
  commands: Command[];
};

export const commandGroups: CommandGroup[] = [
  {
    id: "admin",
    commands: [
      { name: "ban", description: { tr: "Bir kullanıcıyı sunucudan yasaklar.", en: "Ban a user from the server." } },
      { name: "unban", description: { tr: "Bir kullanıcının yasağını kaldırır.", en: "Remove a user's ban." } },
      { name: "kick", description: { tr: "Bir kullanıcıyı sunucudan atar.", en: "Kick a user from the server." } },
      { name: "mute", description: { tr: "Belirtilen süre boyunca susturur.", en: "Timeout a user for the specified duration." } },
      { name: "unmute", description: { tr: "Susturmayı kaldırır.", en: "Remove a user's timeout." } },
      { name: "clear", description: { tr: "Son X mesajı toplu siler.", en: "Bulk delete the last X messages." } },
    ],
  },
  {
    id: "general",
    commands: [
      { name: "rules", description: { tr: "Sunucu kurallarını gösterir.", en: "Show the server rules." } },
      { name: "help", description: { tr: "Tüm komutları listeler.", en: "List all commands by category." } },
      { name: "setup", description: { tr: "Hoş geldin/ayrılma kanallarını ayarlar.", en: "Configure welcome and leave channels." } },
      { name: "color-menu", description: { tr: "Renk seçim menüsünü gönderir.", en: "Send the color selection menu." } },
      { name: "gender-menu", description: { tr: "Cinsiyet seçim menüsünü gönderir.", en: "Send the gender selection menu." } },
      { name: "role-menu", description: { tr: "Rol seçim menüsünü gönderir.", en: "Send the role selection menu." } },
      { name: "userinfo", description: { tr: "Kullanıcı bilgilerini gösterir.", en: "Show information about a user." } },
      { name: "serverinfo", description: { tr: "Sunucu bilgilerini gösterir.", en: "Show information about the server." } },
      { name: "avatar", description: { tr: "Profil fotoğrafını gösterir.", en: "Show a user's avatar." } },
    ],
  },
  {
    id: "voice",
    commands: [
      { name: "join", description: { tr: "Botu sesli kanala davet eder.", en: "Invite the bot to your voice channel." } },
      { name: "leave", description: { tr: "Botu sesli kanaldan çıkarır.", en: "Disconnect the bot from voice." } },
    ],
  },
];
