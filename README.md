# Codex Starter Next.js Blog

A polished, battery-included Next.js + TypeScript blog starter that is ready for your first post. It ships with a landing hero, statically generated article pages powered by markdown, and Tailwind CSS styling so you can focus on writing instead of wiring things up.

## Tech stack

- **Next.js 13** with the Pages Router for predictable static generation
- **TypeScript** for type-safe components and utilities
- **Tailwind CSS** for rapid, utility-first styling
- **React Markdown** to render rich post content

## Getting started

1. Install dependencies
   
   ```bash
   npm install
   ```

2. Start the development server
   
   ```bash
   npm run dev
   ```
   
   The site will be available at [http://localhost:3000](http://localhost:3000).

3. Create production build
   
   ```bash
   npm run build
   npm start
   ```

## Adding posts

Post data lives in [`lib/posts.ts`](lib/posts.ts). Each entry includes metadata plus markdown content that is rendered on the detail page. To add a new post:

1. Duplicate one of the existing entries and update the fields.
2. Keep the `slug` unique—this becomes the route for the post.
3. Use markdown syntax inside the `content` string for headings, lists, or emphasis.

Because posts are statically generated, rerun `npm run dev` (or rebuild) to see new entries.

## Customizing the design

- Update the hero copy in [`pages/index.tsx`](pages/index.tsx) to match your voice.
- Tweak typography or colors in [`styles/globals.css`](styles/globals.css) or extend Tailwind in [`tailwind.config.js`](tailwind.config.js).
- Add new components in the `components/` directory and import them where needed.

Happy publishing! 🚀
