# Aradhana Natural Oils

Deployment-ready Next.js website for Aradhana Natural Oils.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## WhatsApp orders

Set the backend WhatsApp number in `.env.local`:

```bash
WHATSAPP_PHONE_NUMBER=917829504543
```

Order buttons call `/api/orders`, which creates the WhatsApp message and returns the final `wa.me` URL.

## Build

```bash
npm run build
npm run start
```

## Structure

- `app/` - Next.js app router pages and global styles
- `components/` - reusable website sections
- `data/products.json` - admin-ready product catalog data
- `public/assets/logo.jpeg` - uploaded brand logo
