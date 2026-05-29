"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MusicExperience, { type Track } from "@/components/MusicExperience";

const assetBase = "https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main";

const tracks: Track[] = [
  {
    id: "la-gentillesse",
    title: "La Gentillesse",
    description: "Faith-filled kindness anthem with a tender, healing glow.",
    duration: "3:45",
    cover: `${assetBase}/La%20Gentillesse.png`,
    audio: `${assetBase}/La%20Gentillesse.mp3`,
  },
  {
    id: "wonderful",
    title: "Wonderful",
    description: "Joyful praise and gratitude carried with elegant warmth.",
    duration: "3:29",
    cover: `${assetBase}/Wonderful%20cover.png`,
    audio: `${assetBase}/Wonderful.mp3`,
  },
];

const books = [
  {
    title: "The Pain Nobody Saw: A Hidden Story of Abuse and Survival",
    eyebrow: "Memoir",
    description:
      "A raw memoir exposing the hidden reality of domestic abuse, cultural pressure, silent suffering, and the courageous path toward freedom, faith, and reclaimed self-worth.",
    href: "https://www.amazon.com/Pain-Nobody-Saw-Hidden-Survival/dp/B0GPDL1BN3",
  },
  {
    title: "If It’s Red, It’s Toxic",
    eyebrow: "Guide",
    description:
      "A bold guide to recognizing warning signs, emotional manipulation, spiritual danger, unhealthy attachments, and patterns that slowly drain peace, clarity, and purpose.",
    href: "https://www.amazon.com/If-Its-Red-Toxic/dp/B0GPDLJNH9",
  },
  {
    title: "The Road to Sunshine: A Journey of Struggles, Faith and Hope",
    eyebrow: "Faith & Hope",
    description:
      "A hope-filled reflection on enduring struggle, holding onto faith, and continuing the journey toward brighter days even when the road feels uncertain.",
    href: "https://www.amazon.co.uk/Road-Sunshine-journey-struggles-faith-ebook/dp/B071FSC8K6",
  },
  {
    title: "After The Storm",
    eyebrow: "Restoration",
    description:
      "A restoration-centered work honoring the quiet strength that follows hardship, helping readers look beyond survival toward healing, peace, and renewed possibility.",
    href: "https://www.amazon.com/s?k=After+The+Storm+Carine+Sanadina",
  },
];

const focusAreas = [
  "Domestic Violence Awareness",
  "Emotional Healing",
  "Toxic Relationship Recovery",
  "Faith and Resilience",
  "Women’s Empowerment",
  "Self-Worth and Identity",
  "Immigrant and Refugee Experience",
  "Motherhood and Survival",
  "Inspirational Writing",
  "Human-Centered Care",
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.28 },
  transition: { duration: 0.62, ease: "easeOut" as const },
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>

      <header className="site-header" aria-label="Primary navigation">
        <nav className="nav container">
          <a className="brand-mark" href="#hero" aria-label="Carine Sanadina home">CS</a>
          <div className="nav-links" aria-label="Page sections">
            <a href="#featured">Featured Track</a>
            <a href="#music">Music</a>
            <a href="#author">Author</a>
            <a href="#about">About</a>
            <a href="#contact">Booking</a>
          </div>
        </nav>
      </header>

      <main id="main" className="site-main">
        <section className="hero section" id="hero" aria-labelledby="hero-title">
          <div className="hero-depth" aria-hidden="true" />
          <div className="container hero-grid">
            <motion.div
              className="hero-copy"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              <p className="eyebrow">Congolese-born • Jacksonville, Florida • Faith-filled restoration</p>
              <h1 id="hero-title">Carine Sanadina</h1>
              <p className="hero-subheadline">
                From hidden pain to restored purpose — Congolese-born survivor, healthcare professional, author, and artist creating healing through faith, words, and sound.
              </p>
              <p className="hero-support">
                Step into a world of gentle strength, faith-filled restoration, and elegant storytelling.
              </p>
              <div className="hero-actions" aria-label="Primary calls to action">
                <a className="button button-primary" href="#featured">Listen Now</a>
                <a className="button button-secondary" href="#music">Explore Music</a>
                <a className="button button-ghost" href="#about">Meet Carine</a>
              </div>
            </motion.div>

            <motion.figure
              className="portrait-card glass-card"
              aria-label="Carine Sanadina official portrait feature"
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.08 }}
            >
              <div className="portrait-orbit" aria-hidden="true" />
              <Image
                src={`${assetBase}/Carine%20Sanadina.png`}
                alt="Carine Sanadina official portrait"
                width={920}
                height={1220}
                priority
                sizes="(max-width: 768px) 88vw, 40vw"
                className="portrait-image"
              />
              <figcaption>
                Survivor advocate, healthcare professional, author, and artist creating a safe emotional world of faith and healing.
              </figcaption>
            </motion.figure>
          </div>
          <a className="scroll-indicator" href="#featured" aria-label="Scroll to featured track">
            <span />
          </a>
        </section>

        <MusicExperience tracks={tracks} />

        <section className="section author-spotlight" id="author" aria-labelledby="author-heading">
          <div className="container">
            <motion.div className="section-heading center" {...fadeUp}>
              <p className="eyebrow">Author Spotlight</p>
              <h2 id="author-heading">Books that turn testimony into light.</h2>
              <p>
                Elegant, intimate, and brave reflections for readers seeking language for survival, recovery, faith, and renewed self-worth.
              </p>
            </motion.div>
            <div className="book-grid">
              {books.map((book, index) => (
                <motion.article className="book-card glass-card" key={book.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.05 }}>
                  <div className="book-cover" aria-hidden="true">
                    <span className="book-kicker">{book.eyebrow}</span>
                    <strong>{book.title}</strong>
                    <span>Carine Sanadina</span>
                  </div>
                  <div className="book-body">
                    <h3>{book.title}</h3>
                    <p>{book.description}</p>
                    <a className="button book-button" href={book.href} target="_blank" rel="noopener noreferrer">
                      Buy on Amazon
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about" id="about" aria-labelledby="about-heading">
          <div className="container split-layout">
            <motion.div className="section-kicker" {...fadeUp}>About Carine</motion.div>
            <motion.div className="about-content glass-card" {...fadeUp}>
              <h2 id="about-heading">A voice of resilience, restoration, and human-centered healing.</h2>
              <p>
                Carine Sanadina is a Congolese-born, Jacksonville-based healthcare professional, author, artist, and survivor advocate whose work transforms lived pain into healing-centered literature and inspiration.
              </p>
              <p>
                Her work explores domestic violence survival, toxic relationships, emotional wounds, faith, resilience, motherhood, immigrant experience, and the journey from brokenness to restoration.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section focus" id="focus" aria-labelledby="focus-heading">
          <div className="container focus-shell glass-card">
            <motion.div className="section-heading compact" {...fadeUp}>
              <p className="eyebrow">Faith, Healing & Creativity</p>
              <h2 id="focus-heading">The themes at the heart of Carine’s work.</h2>
              <p>
                Her platform blends compassionate care, creative storytelling, faith, music, and advocacy into one emotionally safe destination.
              </p>
            </motion.div>
            <div className="focus-grid" aria-label="Core focus areas">
              {focusAreas.map((area) => (
                <span className="focus-pill" key={area}>{area}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="quote-banner" aria-label="Featured quote">
          <div className="container">
            <motion.blockquote {...fadeUp}>“Pain may shape the story, but it does not get to own the ending.”</motion.blockquote>
          </div>
        </section>

        <section className="section contact" id="contact" aria-labelledby="contact-heading">
          <div className="container cta-panel glass-card">
            <motion.div {...fadeUp}>
              <p className="eyebrow">Contact / Booking</p>
              <h2 id="contact-heading">Read the books. Hear the story. Begin healing.</h2>
              <p>
                For speaking invitations, reader messages, collaborations, media inquiries, and future book updates, connect with Carine’s platform.
              </p>
              <div className="cta-actions">
                <a className="button button-primary" href="#author">Explore Books</a>
                <a className="button button-secondary" href="mailto:hello@example.com">Invite Carine to Speak</a>
                <a className="button button-ghost" href="mailto:hello@example.com">Contact</a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© 2026 Carine Sanadina. All Rights Reserved.</p>
          <p>Website concept by Omoluabi Productions.</p>
        </div>
      </footer>
    </>
  );
}
