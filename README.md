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
| `/docs/tr` | Documentation (also via subdomain) |

English versions use `/en/...` instead of `/tr/...`.

Documentation is also available at **`https://docs.sharksbot.site`** (subdomain).

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
4. Add environment variables:
   - `NEXT_PUBLIC_DISCORD_CLIENT_ID` = your bot's Application ID
   - `NEXT_PUBLIC_SITE_URL` = `https://sharksbot.site`
   - `NEXT_PUBLIC_SITE_DOMAIN` = `sharksbot.site`
   - `NEXT_PUBLIC_DOCS_URL` = `https://docs.sharksbot.site`
5. Deploy.

After deployment, Vercel gives you a URL like `sharks-bot-website.vercel.app`.

## Custom domain (sharksbot.site) — Hostinger + Vercel

### 1. Vercel'de domain ekle

1. [vercel.com](https://vercel.com) → projen → **Settings** → **Domains**
2. Şu domainleri ekle:
   - `sharksbot.site`
   - `www.sharksbot.site`
   - `docs.sharksbot.site`
3. Vercel her domain için hangi DNS kaydını girmen gerektiğini gösterecek.

### 2. Hostinger DNS ayarları

1. [Hostinger](https://www.hostinger.com) → **Domains** → `sharksbot.site` → **DNS / DNS Zone**
2. Vercel'in verdiği kayıtları ekle:

**Ana domain (`sharksbot.site`):**

| Type | Name | Value |
|---|---|---|
| `A` | `@` | `76.76.21.21` |

**www:**

| Type | Name | Value |
|---|---|---|
| `CNAME` | `www` | `cname.vercel-dns.com` |

**Docs subdomain:**

| Type | Name | Value |
|---|---|---|
| `CNAME` | `docs` | `cname.vercel-dns.com` |

> Hostinger'da eski `@` A kaydı veya çakışan kayıtlar varsa sil; sadece Vercel'in istediği kayıtlar kalsın.

### 3. Vercel'de yönlendirme (önerilen)

Domains sayfasında:
- `www.sharksbot.site` → **Redirect** to `sharksbot.site` (307)
- `sharksbot.site` → Production

### 4. SSL bekle

DNS yayıldıktan sonra Vercel otomatik HTTPS sertifikası verir (genelde 5–30 dk, bazen birkaç saat).

### 5. Discord Developer Portal

Bot doğrulama için:

- **Terms of Service:** `https://sharksbot.site/tr/terms-of-use`
- **Privacy Policy:** `https://sharksbot.site/tr/privacy-policy`

## Docs subdomain (docs.sharksbot.site)

The documentation lives in the same Vercel project. Middleware routes the `docs.` subdomain to `/docs/...` internally.

Until DNS propagates, docs also work at `/docs/tr` on the main domain.

## Project structure

```
app/
  [locale]/           # tr / en routes
  docs/[locale]/      # documentation
components/
lib/
middleware.ts
```

## Related repo

The bot itself lives in a separate project: `sharks-bot` (Node.js + discord.js on Oracle Cloud VPS).
