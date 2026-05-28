import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://omoluabi1003.github.io/Carine-Sanadina/";
const portraitUrl =
  "https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/Carine%20Sanadina.png";

export const metadata: Metadata = {
  title: "Carine Sanadina | Healing Through Faith, Words & Sound",
  description:
    "Carine Sanadina is a Congolese-born survivor, healthcare professional, author, and artist creating healing through faith, words, and sound.",
  authors: [{ name: "Carine Sanadina" }],
  robots: "index, follow",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Carine Sanadina | Cinematic Artist & Healing-Centered Author",
    description:
      "Step into a world of gentle strength, faith-filled restoration, elegant storytelling, and music by Carine Sanadina.",
    images: [{ url: portraitUrl, alt: "Carine Sanadina official portrait" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carine Sanadina | Healing Through Faith, Words & Sound",
    description:
      "Turning pain into healing, survival into purpose, and stories into restoration.",
    images: [portraitUrl],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
