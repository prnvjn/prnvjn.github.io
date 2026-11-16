# AI Literacy Lab certificate

Artifact 03 is a Next.js app with TypeScript, Tailwind CSS, and Framer Motion. The main portfolio serves its static export at `/artifacts/ai-literacy/`.

From this directory, use Node.js 22 or later.

```sh
npm ci
npm run build
cd ..
python3 -m http.server 8000
```

Visit `http://localhost:8000/artifacts/ai-literacy/`. Serve the portfolio root so the certificate can load the shared styles, navigation, and theme preference.

Edit `app/certificate-data.ts` for the recipient, completion details, learning highlights, or key reflection. The app generates the print-ready PDF and the PNG card in the browser. The four stage labels summarize the supplied learning highlights.

The build regenerates `artifacts/ai-literacy/` from this app. Commit the source and static export together to publish through the portfolio’s existing GitHub Pages branch.
