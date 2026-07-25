# João Jorge — Personal Portfolio

Bilingual personal portfolio created to present my professional, academic and personal projects, technical skills, certifications and contact details.

The website is statically generated, responsive and accessible, with light and dark themes and content available in Portuguese and English.

## Technologies

- Astro 7
- TypeScript
- Tailwind CSS 4
- Semantic HTML
- Small amounts of vanilla JavaScript for navigation, theme controls and animations

## Project structure

```text
public/              Static files such as the CV, favicon and robots.txt
src/assets/          Images processed by Astro
src/components/      Reusable interface and section components
src/data/            Project information, shared types and external links
src/i18n/            Portuguese and English content and route helpers
src/layouts/         Shared page layout
src/pages/           Portuguese, English and 404 routes
src/styles/          Global styles and visual tokens
```

## Requirements

- Node.js 22.12 or newer
- npm

## Local development

```sh
npm install
npm run dev
```

The development server is available at `http://localhost:4321`.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the local development server |
| `npm run build` | Generates the production website in `dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run astro -- --help` | Displays the available Astro CLI commands |

## Content management

- Projects: `src/data/projects.ts`
- Personal links and CV settings: `src/data/site.ts`
- Translations, skills and certifications: `src/i18n/content.ts`
- Certification images: `src/assets/certifications/`

## Deployment

Create the production build with:

```sh
npm run build
```

The generated `dist/` directory can be deployed to any static hosting provider. When the final domain is available, it should be added to `astro.config.mjs` so Astro can generate canonical URLs correctly.

## Repository

[github.com/joaojj-dev/Portfolio](https://github.com/joaojj-dev/Portfolio)
