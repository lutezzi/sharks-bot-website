# sharks-bot-website

Official website for the **sharks** Discord bot. Built with Next.js (App Router) and optimized for [Vercel](https://vercel.com) deployment.

## Pages

| URL | Description |
|---|---|
| `/tr` | Turkish homepage |
| `/en` | English homepage |
| `/tr/commands` | Command list by category |
| `/tr/terms-of-use` | Terms of Use (Discord verification) |
| `/tr/privacy-policy` | Privacy Policy (Discord verification) |

English versions use `/en/...` instead of `/tr/...`.

## Local development

```bash
npm install
cp .env.example .env.local
# Edit .env.local and set NEXT_PUBLIC_DISCORD_CLIENT_ID
npm run dev
```

Open [http://localhost:3000/tr](http://localhost:3000/tr).

## Deploy to Vercel

1. Push this folder to a **separate GitHub repository** (e.g. `sharks-bot-website`).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Next.js** (auto-detected).
4. Add environment variable:
   - `NEXT_PUBLIC_DISCORD_CLIENT_ID` = your bot's Application ID
5. Deploy.

After deployment, Vercel gives you a URL like `sharks-bot-website.vercel.app`.

## Custom domain (sharksbot.xyz)

1. Buy the domain from your registrar.
2. In Vercel: Project → **Settings** → **Domains** → add `sharksbot.xyz` and `www.sharksbot.xyz`.
3. Add the DNS records Vercel shows at your registrar.
4. Wait for propagation (usually minutes, sometimes up to 48h).

## Discord Developer Portal

For bot verification, set these URLs in your application:

- **Terms of Service:** `https://sharksbot.xyz/tr/terms-of-use`
- **Privacy Policy:** `https://sharksbot.xyz/tr/privacy-policy`

Use `/en/...` URLs if you prefer English as the primary legal language.

## Project structure

```
app/
  [locale]/           # tr / en routes
    page.tsx          # Homepage
    commands/         # Command reference
    terms-of-use/
    privacy-policy/
components/           # Navbar, Footer, Hero, etc.
lib/                  # i18n, commands data, config
middleware.ts         # Redirect / → /tr
```

## Related repo

The bot itself lives in a separate project: `sharks-bot` (Node.js + discord.js on Oracle Cloud VPS).
