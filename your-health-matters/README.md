# Your Health Matters — by Erica Ehiwe

A Next.js web application presenting ten evidence-based healing guides with an AI-powered Dr. Vera Holloway chat assistant on every page.

## What's Inside

- **10 healing guide pages** — each with full web content, key facts, and a PDF download button
- **Dr. Vera chat** — scoped to each guide's topics + full holistic health knowledge
- **Global floating chat** — available on every page for any health question
- **Animated landing page** — particle canvas, scroll-reveal cards, floating elements
- **Fully mobile responsive** — designed for phones first
- **PDF downloads** — every guide links to its printable PDF

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| AI | Anthropic Claude API (claude-opus-4-5) |
| Hosting | Vercel (recommended) |
| Fonts | Inter + Playfair Display (Google Fonts) |

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Copy env file
cp .env.local.example .env.local

# 3. Add your Anthropic API key to .env.local
ANTHROPIC_API_KEY=your_key_here

# 4. Add your PDF files to /public/pdfs/
# (see PDF Files section below)

# 5. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## PDF Files

Place your PDF files in `public/pdfs/` with these exact filenames:

```
public/pdfs/
├── holistic_health_cheatsheet.pdf
├── insulin_activity.pdf
├── complete_vegetable_guide.pdf
├── complete_fruit_guide.pdf
├── complete_herb_guide.pdf
├── juice_recipe_guide.pdf
├── healing_salad_guide2.pdf
├── overnight_body_visual.pdf
├── daytime_body_visual.pdf
└── healing_foods_guide.pdf
```

## Adding New Guides

1. Open `lib/guides.ts`
2. Add a new object to the `guides` array following the existing pattern
3. Add your PDF to `public/pdfs/`
4. That's it — the guide card and page are generated automatically

## Deploy to Vercel

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial deploy"
git remote add origin https://github.com/yourusername/your-health-matters.git
git push -u origin main

# 2. Go to vercel.com
# Import your GitHub repo
# Add environment variable: ANTHROPIC_API_KEY

# 3. Deploy — live in ~90 seconds
```

## Project Structure

```
your-health-matters/
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata
│   ├── page.tsx                # Landing page
│   ├── globals.css             # Global styles + animations
│   ├── not-found.tsx           # 404 page
│   ├── api/chat/route.ts       # Dr. Vera API endpoint
│   └── guides/[slug]/page.tsx  # Dynamic guide pages
├── components/
│   ├── chat/DrVeraChat.tsx     # Chat component (compact + floating)
│   ├── layout/Nav.tsx          # Navigation
│   ├── sections/Hero.tsx       # Animated hero section
│   └── ui/GuideCard.tsx        # Guide card with scroll-reveal
├── lib/
│   └── guides.ts               # All guide data and content
├── public/
│   └── pdfs/                   # PDF files go here
└── .env.local.example          # Environment variable template
```

---

Created by Erica Ehiwe · Holistic Health Research & Education
