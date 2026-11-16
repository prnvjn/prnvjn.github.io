import type { Metadata } from 'next';
import Script from 'next/script';
import type { ReactNode } from 'react';
import './certificate.css';

export const metadata: Metadata = {
  title: 'AI Literacy Lab — Pranav Jain',
  description: 'A four-stage learning exercise on language models, hallucinations, privacy, and verification.',
  alternates: { canonical: 'https://prnvjn.github.io/artifacts/ai-literacy/' },
  icons: '/assets/favicon.svg',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Both stylesheets belong to the existing portfolio at the site root. */}
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/assets/style.css" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/assets/artifact.css" />
        <meta name="color-scheme" content="dark light" />
        <meta name="theme-color" content="#101713" />
      </head>
      <body>
        {children}
        <Script src="/assets/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
