# Jayanth Kethineni - Portfolio Website

An elite personal portfolio website for a Backend/Full-Stack Engineer, built with Next.js, TypeScript, and Tailwind CSS. Designed to convert visitors into interviews in under 10 seconds with a proof-first, metrics-driven approach.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Content:** MDX for case studies and blog posts
- **Icons:** Lucide React
- **Package Manager:** pnpm

## Features

- **Production-Grade Design:** Clean, professional design with dark mode support
- **SEO Optimized:** Complete metadata, Open Graph tags, JSON-LD structured data, sitemap, and robots.txt
- **Performance First:** Optimized for 90+ Lighthouse scores
- **Mobile Responsive:** Mobile-first design approach
- **Case Studies:** Detailed technical case studies showcasing system design depth
- **Technical Writing:** Blog posts on backend engineering patterns and best practices

## Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm installed (or use `npm install -g pnpm`)

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Quality Checks

```bash
# Run linting
pnpm lint

# Run type checking
pnpm typecheck

# Build for production
pnpm build
```

### Production Build

```bash
# Build the project
pnpm build

# Start production server
pnpm start
```

## Deployment to Vercel

### Quick Deploy

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and configure the build settings
5. Click "Deploy"

### Manual Configuration

If needed, use these build settings:

- **Framework Preset:** Next.js
- **Build Command:** `pnpm build`
- **Output Directory:** `.next`
- **Install Command:** `pnpm install`

## Customization

### Personal Information

Update the following files with your information:

1. **app/layout.tsx** - Update metadata and structured data
2. **app/page.tsx** - Update hero section and project details
3. **app/about/page.tsx** - Update bio and experience
4. **app/contact/page.tsx** - Update contact information
5. **app/resume/page.tsx** - Update resume content
6. **components/Navigation.tsx** - Already configured

### LinkedIn

Add your LinkedIn URL in:
- `app/about/page.tsx` (add a new link in the contact section)
- `app/layout.tsx` (add to the `sameAs` array in structured data)

### Resume PDF

Place your resume PDF at:
```
public/Jayanth_Kethineni_Resume.pdf
```

### Headshot

Add your headshot image to:
```
public/headshot.jpg
```

Then update references in the About page.

### Domain

Update the domain in:
- `app/layout.tsx` - metadataBase URL
- `app/sitemap.ts` - baseUrl
- `app/robots.ts` - sitemap URL

### Projects & Case Studies

1. Update project data in `app/page.tsx` and `app/work/page.tsx`
2. Add/edit case study MDX files in `case-studies/` directory
3. Each case study should follow the existing template structure

### Blog Posts

1. Add new MDX files to `writing/` directory
2. Update the posts array in `app/writing/page.tsx`
3. Follow the existing blog post structure

## Project Structure

```
jayanthkethineni-portfolio/
├── app/                      # Next.js app directory
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── resume/              # Resume page
│   ├── work/                # Work/projects listing
│   │   └── [slug]/          # Dynamic case study pages
│   ├── writing/             # Blog listing
│   │   └── [slug]/          # Dynamic blog post pages
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── robots.ts            # Robots.txt configuration
│   └── sitemap.ts           # Sitemap configuration
├── case-studies/            # MDX case study files
├── components/              # React components
│   ├── BlogPostLayout.tsx
│   ├── CaseStudyLayout.tsx
│   └── Navigation.tsx
├── lib/                     # Utility functions
│   └── utils.ts
├── public/                  # Static assets
│   ├── og-image.png         # Open Graph image
│   └── favicon.ico          # Favicon
├── writing/                 # MDX blog post files
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies
├── tailwind.config.ts       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

## Analytics

To add analytics:

1. **Plausible:** Add script to `app/layout.tsx`
2. **Google Analytics:** Add GA4 script to `app/layout.tsx`

Example for Plausible:

```tsx
<script defer data-domain="jayanthkethineni.com" src="https://plausible.io/js/script.js"></script>
```

## SEO Checklist

- ✅ Unique title and description for each page
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ JSON-LD structured data
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Favicon and OG image
- ✅ Semantic HTML
- ✅ Mobile responsive
- ✅ Fast loading times

## Quality Bar

This portfolio is built to staff engineer standards:

- Zero build errors
- Zero linting errors
- Zero TypeScript errors
- Production-grade code quality
- Clear, proof-driven content
- No filler or fluff

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please open an issue on GitHub.
