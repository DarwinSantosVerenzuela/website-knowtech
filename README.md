This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Docker

Este proyecto está preparado para ejecutarse en contenedores Docker mediante una construcción optimizada de múltiples etapas.

### Construir la imagen
```bash
docker build -t knowtech-app .
```

### Ejecutar el contenedor
```bash
docker run -p 3000:3000 knowtech-app
```

La aplicación estará disponible en `http://localhost:3000`.

## Troubleshooting: Hydration Errors

If you see errors in the console like `Hydration failed because the server rendered HTML didn't match the client`, and notice attributes like `bis_size`, `bis_id`, or `bis_skin_checked`, these are usually injected by browser extensions (e.g., Bitwarden or other password managers).

### How to Fix
To prevent these warnings from cluttering the console, the project uses `suppressHydrationWarning` on the affected elements. If you add new components and experience this, add the property to the parent tag:

```tsx
<div suppressHydrationWarning>
  {/* Content */}
</div>
```

Note: This only suppresses the warning; it doesn't prevent the extension from injecting the attributes. This is a common practice in Next.js applications to maintain a clean console when dealing with extension-injected metadata.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
