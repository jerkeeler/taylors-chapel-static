# Taylor's Chapel

A website for Taylor's Chapel, an historic 1853 Greek Revival chapel located in Baltimore, Maryland. Listed on the National Register of Historic Places since 1983.

**Live site:** [https://taylorschapel.org](https://taylorschapel.org)

## Features

- **Responsive Design** - Mobile-first design with elegant serif typography
- **Light/Dark Mode** - Theme toggle with system preference detection and localStorage persistence
- **Image Gallery** - Lightbox with keyboard navigation (Arrow keys, Escape)
- **Virtual Tour** - Embedded Matterport 3D tour
- **Contact Form** - Netlify Forms integration with honeypot spam protection
- **SEO Optimized** - Meta tags, sitemap, and robots.txt

## Tech Stack

- [Astro](https://astro.build) - Static site generator
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Netlify](https://netlify.com) - Hosting and form handling

## Project Structure

```
/
├── public/
│   ├── favicon.png
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── images/          # Chapel photos and announcements
│   ├── components/
│   │   ├── ContactForm.astro
│   │   ├── Footer.astro
│   │   ├── Gallery.astro
│   │   ├── Hero.astro
│   │   ├── Navbar.astro
│   │   ├── ScrollArrow.astro
│   │   ├── Section.astro
│   │   └── ThemeToggle.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro      # Homepage
│   │   ├── tour.astro       # Virtual tour
│   │   ├── donate.astro     # Donation info
│   │   ├── special.astro    # Special events
│   │   ├── 404.astro
│   │   └── contact/
│   │       └── success.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── netlify.toml
└── package.json
```

## Commands

All commands are run from the root of the project:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start local dev server at `localhost:4321`   |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview build locally before deploying       |

## Deployment

The site is configured for Netlify deployment. Simply connect your repository to Netlify and it will automatically build and deploy on push.

The `netlify.toml` file includes:
- Build configuration
- Security headers
- Asset caching rules

## Contact Form

The contact form uses Netlify Forms with Google reCAPTCHA v2 for spam protection.

### Setup

1. Get your reCAPTCHA v2 keys from [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. In Netlify, go to **Site settings > Build & deploy > Environment variables**
3. Add `PUBLIC_RECAPTCHA_SITE_KEY` with your site key

The form will work without reCAPTCHA during development, but you can add a `.env` file locally:

```
PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
```

## License

MIT
