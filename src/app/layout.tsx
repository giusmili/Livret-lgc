import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "LGC - Livret électronique",
  description:
    "Livret électronique - suivi des étudiants, livrables et événements.",
  openGraph: {
    type: "website",
    siteName: "LGC - Livret",
    title: "LGC - Livret électronique",
    description:
      "Accès sécurisé au dashboard : suivi, livrables et événements.",
    images: [
      {
        url: "/assets/preview.png",
        alt: "Aperçu LGC Livret",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LGC - Livret électronique",
    description:
      "Accès sécurisé au dashboard : suivi, livrables et événements.",
    images: ["/assets/cover-lgc-logo.png"],
  },
  themeColor: "#0B315E",
  manifest: "/favicon/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: ["/favicon/favicon.ico"],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/favicon/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/favicon/android-chrome-512x512.png",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
