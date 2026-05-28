import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carine Sanadina | Healthcare Professional, Author & Artist",
  description:
    "Carine Sanadina is a Congolese-born healthcare professional, author, survivor advocate, and artist creating healing through faith, words, and sound.",
  authors: [{ name: "Carine Sanadina" }],
  robots: "index, follow",
  alternates: { canonical: "https://omoluabi1003.github.io/Carine-Sanadina/" },
  openGraph: {
    type: "website",
    title: "Carine Sanadina | Healing Through Faith, Words & Sound",
    description:
      "Step into the faith-filled creative world of Carine Sanadina: music, books, survival, restoration, and elegant storytelling.",
    url: "https://omoluabi1003.github.io/Carine-Sanadina/",
    images: [
      {
        url: "https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/Carine%20Sanadina.png",
        width: 1200,
        height: 630,
        alt: "Carine Sanadina official portrait"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Carine Sanadina | Healthcare Professional, Author & Artist",
    description: "From hidden pain to restored purpose — healing through faith, words, and sound.",
    images: ["https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/Carine%20Sanadina.png"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A1428"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
