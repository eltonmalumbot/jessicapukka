# Harmony e-Solution Website

![Harmony e-Solution — Precision in Every Cut](public/og.png)

Corporate website and machine catalogue for **Harmony e-Solution**, an industrial machinery brand focused on fabric spreading, automatic cutting, single-layer cutting, and supporting cutting-room equipment.

The website presents Harmony as an independent global brand while directing Indonesian visitors to local representation, installation, training, technical support, and after-sales service from **Pukka Indonusa**.

## Main Features

- Premium industrial homepage
- Machine category overview
- Individual machine detail pages
- Industry and application pages
- About Harmony and company timeline
- Global presence section
- Dedicated Indonesia contact path through Pukka Indonusa
- Responsive desktop, tablet, and mobile layouts
- Open Graph social preview
- SEO metadata, sitemap, and robots configuration
- Static generation for machine detail pages

## Pages

| Route | Description |
| --- | --- |
| `/` | Company introduction, machine portfolio, industries, global presence, and Indonesia support |
| `/machines` | Machine catalogue and category overview |
| `/machines/[slug]` | Individual machine information, features, and technical profile |
| `/industries` | Applications for garment, bags, footwear, upholstery, and automotive production |
| `/about` | Harmony profile, expertise, and company timeline |
| `/contact` | Global inquiry path and Indonesian support through Pukka Indonusa |
| `/sitemap.xml` | Search-engine sitemap |
| `/robots.txt` | Search-engine crawling rules |

## Technology

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Vercel

## Getting Started

### Requirements

- Node.js 22
- npm

### Installation

```bash
git clone https://github.com/eltonmalumbot/jessicapukka.git
cd jessicapukka
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Deployment on Vercel

Connect this repository to Vercel and use the repository root as the project directory. The included `vercel.json` identifies the project as Next.js and uses the standard production build.

Every push to `main` triggers a new production deployment when Git integration is enabled.

## Project Structure

```text
app/                 Next.js routes, layout, metadata, sitemap, and styles
components/          Shared header, footer, and machine card components
data/machines.ts     Structured machine catalogue data
public/              Social preview and public assets
vercel.json          Vercel project configuration
next.config.ts       Next.js configuration
```

## Content Status

The current machine names, images, descriptions, and technical profiles are **representative prototype content**. They must be replaced or verified against the official Harmony product catalogue before the website is treated as the final corporate source.

The following company information should also receive final stakeholder approval:

- `33+` years of accumulated industry experience
- `200+` machines installed
- `5+` countries with Harmony systems
- Countries listed under Global Presence
- Official Harmony and Pukka contact details

## Indonesia Representation

Harmony machines are presented as represented, installed, and supported in Indonesia by **Pukka Indonusa**. Indonesian inquiries are directed to the local contact path on the website.

## Repository

Maintained at [eltonmalumbot/jessicapukka](https://github.com/eltonmalumbot/jessicapukka).
