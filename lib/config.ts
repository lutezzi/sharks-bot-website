export const locales = ["tr", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "tr";

export const siteConfig = {
  name: "sharks",
  domain: "sharksbot.site",
  author: "lutezzi",
  githubUrl: "https://github.com/lutezzi/",
};

export function getDiscordInviteUrl(clientId: string) {
  const permissions = "1099781121374";
  const params = new URLSearchParams({
    client_id: clientId,
    permissions,
    scope: "bot applications.commands",
  });
  return `https://discord.com/api/oauth2/authorize?${params.toString()}`;
}

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
