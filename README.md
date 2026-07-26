# João Jorge Personal Portfolio

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
public/              Static files such as the CV, favicon, robots.txt and sitemap
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

The website is published as a GitHub Pages User Site at:

[joaojj-dev.github.io](https://joaojj-dev.github.io/)

Pushes to the `main` branch trigger the GitHub Actions workflow in `.github/workflows/deploy.yml`. The workflow installs the locked dependencies, builds the Astro website and deploys the generated `dist/` directory to GitHub Pages.

To create the production build locally:

```sh
npm run build
```

## Repository

[github.com/joaojj-dev/joaojj-dev.github.io](https://github.com/joaojj-dev/joaojj-dev.github.io)
