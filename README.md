# Dale Alerta — Portfolio

Personal portfolio site for Dale Alerta — front-end developer and Computer Science student based in Dubai, UAE.

Built with [Next.js](https://nextjs.org) (App Router) and [Tailwind CSS](https://tailwindcss.com).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Environment Variables

The contact form uses [EmailJS](https://www.emailjs.com/) to send messages without a backend. Copy `.env.local.example` to `.env.local` and fill in your own EmailJS Service ID, Template ID, and Public Key from the [EmailJS dashboard](https://dashboard.emailjs.com/admin).

```bash
cp .env.local.example .env.local
```

## Deployment

Deployed on [Vercel](https://vercel.com). When importing the project there, add the same three `NEXT_PUBLIC_EMAILJS_*` environment variables from `.env.local` in the project's settings so the contact form works on the live site.
