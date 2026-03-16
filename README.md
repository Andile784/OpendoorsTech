# OpendoorsTech Marketing Website

Production-ready marketing site for **OpendoorsTech** built with **Next.js App Router + TypeScript + Tailwind CSS**.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- API route for lead qualification submissions
- Resend email delivery for lead notifications

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
npm run start
```

## Lead form behavior

- Qualification form is available on `/contact`.
- Form POSTs to `/api/contact`.
- Validation logic: `lib/validation.ts`.
- Submissions are emailed via Resend from `lib/email.ts`.
- In development, if email env vars are missing, submissions are logged as a warning instead of being sent.

## Environment variables

Create a local `.env.local` and set:

```bash
RESEND_API_KEY=your_resend_api_key
LEAD_NOTIFICATION_TO=hello@yourdomain.com
LEAD_NOTIFICATION_FROM=OpendoorsTech <noreply@yourdomain.com>
```

Add the same variables in the Vercel project settings before production deployment.

## Deploy to Vercel

1. Import the project into Vercel.
2. Add the environment variables above.
3. Update your DNS so the current domain points to Vercel.
4. Verify that `/contact` submits successfully in production.

## Where to add booking calendar link

Update `app/book/page.tsx`:

- Replace the placeholder block with your Calendly/Cal.com iframe.
- Or link the primary booking button to your external scheduling URL.

## Where to add analytics (GA / Pixel)

Update `app/layout.tsx`:

- Add GA4 script and/or Meta Pixel in the marked analytics placeholder area.
- Optionally use `next/script` for controlled loading strategy.

## SEO included

- Per-page metadata in each route file
- OpenGraph defaults in `app/layout.tsx`
- `app/sitemap.ts`
- `app/robots.ts`

## Brand identity

- Site logo used globally: `public/cropped-logoOpen1-2.png`
- Favicon and metadata icons are configured in `app/layout.tsx`
- To swap logos later, replace the file in `public/` and keep the same path or update references in `Navbar`, `Footer`, and `layout`.
