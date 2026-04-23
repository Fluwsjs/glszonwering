# GLS Zonwering & Rolluiken

Een moderne, conversiegerichte website voor GLS Zonwering & Rolluiken, gebouwd met Next.js 14, TypeScript en TailwindCSS.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Taal:** TypeScript
- **Styling:** TailwindCSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React

## Features

- 🏠 Responsive design (mobile-first)
- 🎨 Donkere premium look met oranje accenten
- 📱 Sticky header met mobiel menu
- 📝 Offerte formulier met validatie en spam-bescherming
- 🖼️ Optimized images met Next.js Image
- 🔍 SEO-geoptimaliseerd met metadata
- ♿ Toegankelijk (ARIA labels, focus states)

## Pagina's

- `/` - Home (hero, producten, solar, werkwijze, projecten, reviews, contact)
- `/producten` - Overzicht van alle producten
- `/producten/[slug]` - Product detail pagina's
- `/projecten` - Projecten met filters
- `/contact` - Contact pagina met formulier

## Installatie

```bash
# Clone de repository
git clone <repository-url>
cd gls-zonwering

# Installeer dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

## Placeholder Images

Voeg afbeeldingen toe aan `/public/placeholders/`:

- `hero.jpg` - Hero achtergrond
- `rolluiken.jpg`, `screens.jpg`, `zonneschermen.jpg`, `solar-motor.jpg` - Product afbeeldingen
- `project-1.jpg` t/m `project-8.jpg` - Project afbeeldingen
- Gallery afbeeldingen per product (bijv. `rolluiken-1.jpg`, `rolluiken-2.jpg`, etc.)

## Data Structuur

Alle content staat in `/lib/data.ts` en is CMS-ready:

- `products` - Producten met features en benefits
- `projects` - Projecten met locatie en categorie
- `reviews` - Klantbeoordelingen
- `steps` - Werkwijze stappen
- `companyInfo` - Bedrijfsgegevens
- `navigation` - Navigatie items

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build voor productie
npm run start    # Start productie server
npm run lint     # Lint code
```

## Customization

### Kleuren

Pas de kleuren aan in `tailwind.config.ts` en `app/globals.css`:

- `--bg`: Achtergrondkleur (#0B0B0D)
- `--panel`: Panel kleur (#141417)
- `--accent`: Oranje accent (#F47C20)

### Content

Wijzig de content in `/lib/data.ts` voor producten, projecten, reviews, etc.

## License

Private - All rights reserved
