# NYC-MEHSJ Research Capacity Core (RCC) Website

Official website for the Research Capacity Core at City College of New York, part of CUNY's initiative to enhance research on health disparities in underserved communities.

Built with Astro, Tailwind CSS v4, and modern web technologies.

## About RCC

The NYC-MEHSJ Research Capacity Core (RCC) at City College of New York enhances research on health disparities by supporting faculty with advanced resources in:

- 🔬 Research Technology & Analytics
- 🤖 Artificial Intelligence & Machine Learning
- 🧬 Bioinformatics
- 📊 Data Analysis & Computational Programming
- 📝 Research Planning & Publication Support

The RCC provides support for researchers from any CUNY program at any stage:
- Master's students
- Doctoral students
- Post-docs
- Faculty

## Website Features

- ✅ Modern, responsive design with Astro SSG
- ✅ Tailwind CSS v4 theming system
- ✅ Research team profiles and project portfolio
- ✅ Blog with Markdown & MDX support for research updates
- ✅ Service pages detailing RCC offerings
- ✅ Resources and publication listings
- ✅ Contact forms for research consultation requests
- ✅ SEO optimized with OpenGraph, sitemap, and RSS feeds

## 🔧 Requirements

- Node.js 18+ (or 20+ recommended)
- npm (or pnpm/yarn)

## 🚀 Quick Start

```bash
# 1) Install deps
npm install

# 2) Start dev server
npm run dev
# open http://localhost:4321
```

Build and preview:

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```text
src/
├── pages/
│   ├── index.astro           # Homepage
│   ├── about.astro           # About RCC
│   ├── team.astro            # Research team profiles
│   ├── portfolio.astro       # Research projects
│   ├── resources.astro       # Resource listings
│   ├── publication.astro     # Publications
│   ├── contact.astro         # Contact/intake forms
│   ├── skills/[slug].astro   # Individual service pages
│   └── blog/                 # Blog system
├── components/
│   ├── sections/             # Page sections (Header, Footer, Hero, etc.)
│   └── ui/                   # Reusable UI components
├── content/
│   └── blog/                 # Blog posts (Markdown & MDX)
├── data/                     # Structured data (team, projects, services)
├── layouts/                  # Page layouts
└── styles/                   # Tailwind CSS theming
```

## 📝 Editing Content

### Blog Posts
Add Markdown or MDX files under `src/content/blog/` with frontmatter:
```yaml
---
title: "Your post title"
description: "Summary"
pubDate: 2025-01-15
tags: [research, bioinformatics]
category: News
---
```

### Team Members
Edit `src/data/team.ts` to add or update research team profiles.

### Services/Skills
Edit `src/data/skills.ts` to modify the services offered by RCC.

### Projects
Edit `src/data/projects.ts` to add or update research projects in the portfolio.

### Resources & Publications
Update `src/data/resources.ts` and publication data files to maintain listings.

## 🎨 Customization

The site uses Tailwind CSS v4 with a custom theming system:
- Theme tokens: `src/styles/tokens.css`
- Dark mode: `src/styles/themes/dark.css`
- Custom utilities: `src/styles/utilities.css`

The site defaults to light mode. Theme variables can be customized to match CUNY branding.

## 🧞 Development Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start dev server at `http://localhost:4321` |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview your build locally                  |

## 📚 Technical Stack

- **Framework**: [Astro](https://astro.build) - Static Site Generator
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Icons**: [Tabler Icons](https://tabler.io/icons)
- **Content**: Markdown & MDX with content collections
- **Forms**: Tailwind Forms plugin

## 🔗 Site Features

- **Blog System**: Full-featured blog with tags, categories, and RSS feeds
- **SEO Optimized**: Open Graph tags, Twitter cards, JSON-LD schema
- **Responsive Design**: Mobile-first, accessible components
- **Contact Forms**: Research consultation intake forms
- **Team Profiles**: Dynamic team member pages
- **Project Portfolio**: Showcase research projects and collaborations

## 🚀 Deployment

The site is built as a static site (output in `dist/`) and can be deployed to any static hosting service:
- Netlify
- Vercel
- Cloudflare Pages
- GitHub Pages

Ensure `site` is configured in `astro.config.mjs` for correct absolute URLs in feeds and metadata.

## 👥 Leadership

The RCC is led by:

- **Core Director**: Ashiwel Undieh, PhD
- **Associate Directors**:
  - Jie Wei, PhD
  - Mark Hauber, PhD
  - Mitchell Schaffler, PhD
  - Nancy Sohler, PhD

## 🤝 Contributing

This website is maintained by the RCC team. For content updates or technical improvements:

1. Create a feature branch from `main`
2. Make your changes
3. Test locally with `npm run dev`
4. Build to verify: `npm run build`
5. Submit a pull request

## 📞 Contact

For research support inquiries or to request consultation, visit the Contact page on the website or reach out to the RCC directly at City College of New York.

## 📄 License

MIT License - see `LICENSE` for details.

---

**NYC-MEHSJ Research Capacity Core** | City College of New York | CUNY
