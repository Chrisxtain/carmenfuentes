# Carmen Fuentes — Personal Brand Platform

A world-class digital personal brand website for **Carmen Fuentes**, a Business Intelligence Professional, Data Analytics Specialist, and Data Storyteller. This platform is designed to position Carmen as a trusted authority in data analytics, business intelligence, data visualization, and strategic decision-making.

The experience is premium, editorial, and minimal — inspired by the craft of Apple, Stripe, Linear, Vercel, Arc Browser, Notion, and Bloomberg. It is built to feel like a high-end SaaS landing page combined with an executive consulting presence.

---

## ✨ Purpose

This is **not** a portfolio website. It is a long-term personal brand platform that:

- Positions Carmen as an industry expert.
- Helps recruiters immediately understand her value.
- Attracts freelance consulting opportunities.
- Builds trust through thoughtful storytelling.
- Demonstrates professionalism and executive presence.
- Showcases technical expertise through business outcomes, not tool lists.

The central message is:

> **“Carmen transforms complex data into confident business decisions.”**

---

## 🎨 Design Philosophy

- **Minimal.** No clutter. Every pixel is intentional.
- **Elegant.** Sophisticated typography, whitespace, and motion.
- **Executive.** Professional, confident, consultative.
- **Editorial.** Story-first, publication-quality reading experience.
- **Modern.** Premium SaaS aesthetic with restrained glassmorphism and soft glow.
- **Timeless.** Avoids trends, templates, and excessive gradients.

### Visual Identity

- **Background:** `#F8FAFC`
- **Cards:** `#FFFFFF`
- **Primary:** `#0F172A`
- **Accent:** `#2563EB`
- **Success:** `#10B981`
- **Typography:** Space Grotesk (headings) + Inter (body)
- **Elevation:** Soft shadows, subtle glass panels, calm floating elements.

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [TanStack Start v1](https://tanstack.com/start) — full-stack React 19 framework |
| Build Tool | Vite 7 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 with native CSS `@theme` variables |
| Animation | Framer Motion |
| Icons | Lucide React |
| Backend / Database | Lovable Cloud (Supabase) |
| Form Validation | Zod |
| Components | shadcn/ui primitives |

---

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── site/           # Site-level components (Nav, Footer, Hero, etc.)
│   │   └── ui/             # shadcn/ui primitives
│   ├── hooks/              # Custom React hooks
│   ├── integrations/       # Supabase client and auth middleware
│   ├── lib/                # Site data, utilities, error helpers
│   ├── routes/             # TanStack file-based routes
│   ├── router.tsx          # Router configuration
│   ├── server.ts           # Server entry
│   ├── start.ts            # Middleware and start configuration
│   └── styles.css          # Global tokens, theme, glassmorphism
├── supabase/               # Migrations, config
├── public/                 # Static assets, robots.txt
├── package.json
├── tsconfig.json
└── vite.config.ts
```

### Route Map

| File | URL | Purpose |
|---|---|---|
| `src/routes/index.tsx` | `/` | Home — hero, philosophy, expertise |
| `src/routes/about.tsx` | `/about` | Story-first narrative about Carmen |
| `src/routes/experience.tsx` | `/experience` | Consulting-style vertical timeline |
| `src/routes/case-studies.tsx` | `/case-studies` | Case study index |
| `src/routes/case-studies.$slug.tsx` | `/case-studies/:slug` | Individual case study |
| `src/routes/insights.tsx` | `/insights` | Thought leadership index |
| `src/routes/insights.$slug.tsx` | `/insights/:slug` | Individual editorial article |
| `src/routes/contact.tsx` | `/contact` | Functional contact form |
| `src/routes/sitemap[.]xml.ts` | `/sitemap.xml` | SEO sitemap |
| `public/robots.txt` | `/robots.txt` | Crawler directives |

---

## 🧩 Key Features

### Home
- Large editorial hero with professional portrait.
- Animated KPI cards, glass UI panels, subtle charts, and soft glow.
- Headline: *“Turning Complex Data Into Confident Business Decisions.”*
- Primary CTA: **Explore Case Studies**.
- Secondary CTA: **Download Resume**.

### About
- Story-first narrative focused on Carmen’s analytical mindset, problem-solving approach, and philosophy of driving business value through data.
- Does not repeat the resume.

### Experience
- Consulting-style vertical timeline.
- Each role is framed as a business story:
  - Business challenge
  - Approach
  - Technologies
  - Business outcome

### Case Studies
- Five premium portfolio case studies based on public datasets:
  - Housing Market Intelligence Dashboard
  - Executive KPI Dashboard
  - Sales Performance Intelligence
  - Customer Segmentation Analysis
  - Retail Analytics Dashboard
- Each case study includes:
  - Overview
  - Business Problem
  - Methodology
  - Data Cleaning Process
  - Tools Used
  - Dashboard Preview
  - Key Insights
  - Business Impact
  - Lessons Learned

### Core Expertise
- Elegant capability cards instead of skill bars.
- Covers: Business Intelligence, Data Storytelling, Executive Reporting, Forecasting, Data Visualization, SQL, Python, Power BI, Tableau, Snowflake, Excel, Market Analysis, Interactive Dashboards.

### Insights
- Premium editorial publication layout.
- Featured article + six evergreen articles.
- Drop-cap typography, reading time, and elegant hover interactions.
- SEO-focused educational content.

### Contact
- Zod-validated executive contact form.
- Stores submissions in the backend via `contact_submissions` table with Row Level Security (RLS).
- Displays email, LinkedIn, and location.

---

## 🧑‍💻 Data & Content Layer

All structured content lives in `src/lib/site-data.ts`:

- `siteConfig` — global metadata, navigation, brand strings.
- `expertise` — capability cards for the Core Expertise section.
- `experience` — narrative-driven career entries.
- `caseStudies` — detailed case studies with mock dashboard previews.
- `insights` — editorial articles with excerpts, categories, and reading time.

This centralized data layer makes the site easy to update and keeps content consistent across routes.

---

## 🔒 Backend & Contact Form

The contact form is fully functional. Submissions are stored in Lovable Cloud (Supabase) in the `public.contact_submissions` table.

### Table Schema

| Column | Type | Notes |
|---|---|---|
| `id` | `uuid` | Primary key, auto-generated |
| `name` | `text` | Required |
| `email` | `text` | Required |
| `company` | `text` | Optional |
| `message` | `text` | Required |
| `created_at` | `timestamptz` | Auto-generated |

### Security

- Row Level Security (RLS) is enabled.
- Anonymous (`anon`) and authenticated users can **insert** only.
- A policy validates:
  - Non-empty name and message.
  - Email contains `@` and has minimum length.
- `SELECT`, `UPDATE`, and `DELETE` are denied publicly to protect submissions.

The form in `src/routes/contact.tsx` uses the Supabase client for insertion, includes loading and error states, and provides clear feedback to the user.

---

## 🎬 Motion & Micro-interactions

- **Framer Motion** for scroll reveals, hover elevation, and page transitions.
- **Reveal** component for viewport-based animations.
- **Scroll progress** indicator at the top of the page.
- **Floating dashboard cards** with subtle parallax and glow.
- **Subtle cursor glow** and glassmorphism panels.
- **Animated counters** only for truthful, factual metrics.

All motion is purposeful and restrained — never excessive.

---

## 🔍 SEO Strategy

The site is optimized around keywords such as:

- Business Intelligence
- Data Analytics
- Power BI
- SQL
- Python
- Dashboard Development
- Data Visualization
- Forecasting
- Executive Reporting
- Analytics Consultant

### SEO Implementation

- Unique `title` and `description` metadata for every route.
- Open Graph tags (`og:title`, `og:description`, `og:image` on leaf routes).
- Twitter Card metadata.
- JSON-LD `Person` schema in `src/routes/__root.tsx`.
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Accessible markup and alt text on images.
- Lazy loading for images.
- `/sitemap.xml` and `/robots.txt`.
- Canonical tags and responsive viewport.

---

## 📱 Responsiveness

The layout is fully responsive across:

- Desktop
- Laptop
- Tablet
- Mobile

Premium spacing, typography, and visual hierarchy are maintained at every breakpoint.

---

## ⚡ Performance

- Fast loading with Vite and code splitting.
- Optimized image assets.
- Lazy loading for non-critical content.
- Strong Lighthouse targets for performance, accessibility, best practices, and SEO.

---

## 🚀 Development

### Install dependencies

```bash
bun install
```

### Run the development server

```bash
bun dev
```

### Build for production

```bash
bun run build
```

### Type check

```bash
bunx tsc --noEmit
```

---

## 🌐 Deployment

This project is designed to be deployed on Lovable Cloud.

- **Preview URL:** `https://id-preview--edfbd220-cbd4-4351-b9c6-704031e43cf5.lovable.app`
- **Published URL:** `https://carmenfuentes.lovable.app`

---

## 📝 Content Style

All copy is written to be:

- Professional
- Executive
- Confident
- Consultative
- Insightful

It avoids generic, robotic, or overly promotional language. Every sentence reinforces expertise and trust.

---

## 🎯 Goal

The visitor should leave the site believing:

> **“I want Carmen solving my business problems.”**

This is a timeless digital experience built to grow with Carmen’s career and to compete with the best personal brand websites on the web.

---

## 📬 Contact

For consulting inquiries or opportunities, the contact form on the site is the fastest way to reach Carmen.

---

Built with precision, restraint, and purpose.
