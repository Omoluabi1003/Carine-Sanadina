"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type Track = {
  id: string;
  title: string;
  description: string;
  mood: string;
  duration: string;
  cover: string;
  audio: string;
};

type Book = {
  title: string;
  kicker: string;
  description: string;
  href: string;
  tone: string;
};

const portraitSrc =
  "https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/Carine%20Sanadina.png";

const tracks: Track[] = [
  {
    id: "la-gentillesse",
    title: "La Gentillesse",
    description: "Faith-filled kindness anthem",
    mood: "Gentle, prayerful, restorative",
    duration: "Available in player",
    cover:
      "https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/La%20Gentillesse.png",
    audio:
      "https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/La%20Gentillesse.mp3",
  },
  {
    id: "wonderful",
    title: "Wonderful",
    description: "Joyful praise and gratitude",
    mood: "Radiant, thankful, uplifting",
    duration: "Available in player",
    cover:
      "https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/Wonderful%20cover.png",
    audio:
      "https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/Wonderful.mp3",
  },
];

const books: Book[] = [
  {
    title: "The Pain Nobody Saw: A Hidden Story of Abuse and Survival",
    kicker: "Memoir",
    description:
      "A raw memoir exposing the hidden reality of domestic abuse, cultural pressure, silent suffering, and the courageous path toward freedom, faith, and reclaimed self-worth.",
    href: "https://www.amazon.com/Pain-Nobody-Saw-Hidden-Survival/dp/B0GPDL1BN3",
    tone: "midnight",
  },
  {
    title: "If It’s Red, It’s Toxic",
    kicker: "Guide",
    description:
      "A bold guide to recognizing warning signs, emotional manipulation, spiritual danger, unhealthy attachments, and patterns that slowly drain peace, clarity, and purpose.",
    href: "https://www.amazon.com/If-Its-Red-Toxic/dp/B0GPDLJNH9",
    tone: "ruby",
  },
  {
    title: "The Road to Sunshine: A Journey of Struggles, Faith and Hope",
    kicker: "Faith & Hope",
    description:
      "A hope-filled reflection on enduring struggle, holding onto faith, and continuing the journey toward brighter days even when the road feels uncertain.",
    href: "https://www.amazon.co.uk/Road-Sunshine-journey-struggles-faith-ebook/dp/B071FSC8K6",
    tone: "sunrise",
  },
  {
    title: "After The Storm",
    kicker: "Restoration",
    description:
      "A restoration-centered work honoring the quiet strength that follows hardship, helping readers look beyond survival toward healing, peace, and renewed possibility.",
    href: "https://www.amazon.com/s?k=After+The+Storm+Carine+Sanadina",
    tone: "storm",
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
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const formatTime = (value: number) => {
  if (!Number.isFinite(value) || value < 0) {
    return "0:00";
  }

  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${seconds}`;
};

function SectionIntro({ eyebrow, title, children, center = false }: Readonly<{
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  center?: boolean;
}>) {
  return (
    <motion.div
      className={`section-intro${center ? " section-intro-center" : ""}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children ? <div className="intro-copy">{children}</div> : null}
    </motion.div>
  );
}

function PlayGlyph({ isPlaying }: Readonly<{ isPlaying: boolean }>) {
  return (
    <span className="play-glyph" aria-hidden="true">
      {isPlaying ? <span className="pause-bars" /> : <span className="play-triangle" />}
    </span>
  );
}

export default function CarineExperience() {
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});
  const [activeId, setActiveId] = useState<string | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [durationLabels, setDurationLabels] = useState<Record<string, string>>({});
  const [miniDismissed, setMiniDismissed] = useState(false);

  const activeTrack = useMemo(
    () => tracks.find((track) => track.id === activeId) ?? null,
    [activeId],
  );

  const pauseAllExcept = (id: string) => {
    Object.entries(audioRefs.current).forEach(([trackId, audio]) => {
      if (trackId !== id && audio && !audio.paused) {
        audio.pause();
      }
    });
  };

  const toggleTrack = async (track: Track) => {
    const audio = audioRefs.current[track.id];
    if (!audio) {
      return;
    }

    setActiveId(track.id);
    setMiniDismissed(false);

    if (audio.paused) {
      pauseAllExcept(track.id);
      try {
        await audio.play();
      } catch {
        setPlayingId(null);
      }
    } else {
      audio.pause();
    }
  };

  const handleProgressChange = (value: number) => {
    if (!activeTrack) {
      return;
    }

    const audio = audioRefs.current[activeTrack.id];
    if (!audio) {
      return;
    }

    audio.currentTime = value;
    setProgress(value);
  };

  useEffect(() => {
    const listeners = tracks.map((track) => {
      const audio = audioRefs.current[track.id];
      if (!audio) {
        return () => undefined;
      }

      const syncMetadata = () => {
        if (Number.isFinite(audio.duration)) {
          setDurationLabels((current) => ({ ...current, [track.id]: formatTime(audio.duration) }));
          if (activeId === track.id) {
            setDuration(audio.duration);
          }
        }
      };

      const syncTime = () => {
        if (activeId === track.id) {
          setProgress(audio.currentTime);
          if (Number.isFinite(audio.duration)) {
            setDuration(audio.duration);
          }
        }
      };

      const onPlay = () => {
        setActiveId(track.id);
        setPlayingId(track.id);
        setMiniDismissed(false);
      };

      const onPause = () => {
        setPlayingId((current) => (current === track.id ? null : current));
      };

      const onEnded = () => {
        setPlayingId(null);
        setProgress(0);
      };

      audio.addEventListener("loadedmetadata", syncMetadata);
      audio.addEventListener("durationchange", syncMetadata);
      audio.addEventListener("timeupdate", syncTime);
      audio.addEventListener("play", onPlay);
      audio.addEventListener("pause", onPause);
      audio.addEventListener("ended", onEnded);

      return () => {
        audio.removeEventListener("loadedmetadata", syncMetadata);
        audio.removeEventListener("durationchange", syncMetadata);
        audio.removeEventListener("timeupdate", syncTime);
        audio.removeEventListener("play", onPlay);
        audio.removeEventListener("pause", onPause);
        audio.removeEventListener("ended", onEnded);
      };
    });

    return () => {
      listeners.forEach((cleanup) => cleanup());
    };
  }, [activeId]);

  const miniVisible = Boolean(activeTrack && !miniDismissed);

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>

      <header className="site-header" aria-label="Primary navigation">
        <nav className="container nav-shell">
          <a className="brand-mark" href="#hero" aria-label="Carine Sanadina home">CS</a>
          <div className="nav-links" aria-label="Page sections">
            <a href="#music">Music</a>
            <a href="#author">Books</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main id="main">
        <section className="hero section" id="hero" aria-labelledby="hero-title">
          <div className="ambient ambient-one" aria-hidden="true" />
          <div className="ambient ambient-two" aria-hidden="true" />
          <div className="grain" aria-hidden="true" />

          <div className="container hero-grid">
            <motion.div
              className="hero-copy"
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="eyebrow">Jacksonville, Florida · Faith-filled restoration</p>
              <h1 id="hero-title">Carine Sanadina</h1>
              <p className="hero-subhead">
                From hidden pain to restored purpose — Congolese-born survivor, healthcare
                professional, author, and artist creating healing through faith, words, and sound.
              </p>
              <p className="hero-support">
                Step into a world of gentle strength, faith-filled restoration, and elegant storytelling.
              </p>
              <div className="hero-actions" aria-label="Primary calls to action">
                <a className="button button-primary" href="#featured-track">Listen Now</a>
                <a className="button button-secondary" href="#music">Explore Music</a>
                <a className="button button-ghost" href="#about">Meet Carine</a>
              </div>
              <div className="hero-proof" aria-label="Carine Sanadina disciplines">
                <span>Healthcare Professional</span>
                <span>Author</span>
                <span>Survivor Advocate</span>
                <span>Artist</span>
              </div>
            </motion.div>

            <motion.figure
              className="portrait-card"
              aria-label="Carine Sanadina official portrait feature"
              initial={{ opacity: 0, scale: 0.96, y: 26 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.12 }}
            >
              <div className="portrait-halo" aria-hidden="true" />
              <div className="portrait-frame">
                <Image
                  src={portraitSrc}
                  alt="Carine Sanadina official portrait"
                  fill
                  className="portrait-image"
                  priority
                  sizes="(max-width: 768px) 86vw, 42vw"
                />
              </div>
              <figcaption>
                Healing-centered stories with courage, faith, and restoration.
              </figcaption>
            </motion.figure>
          </div>

          <a className="scroll-indicator" href="#featured-track" aria-label="Scroll to featured track">
            <span />
          </a>
        </section>

        <section className="section featured-track" id="featured-track" aria-labelledby="featured-heading">
          <div className="container featured-grid">
            <motion.div
              className="featured-art glass-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={fadeUp}
              transition={{ duration: 0.65 }}
            >
              <Image
                src={tracks[0].cover}
                alt="La Gentillesse cover art"
                fill
                className="cover-image"
                sizes="(max-width: 768px) 84vw, 360px"
              />
            </motion.div>
            <motion.div
              className="featured-copy"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={fadeUp}
              transition={{ duration: 0.65, delay: 0.08 }}
            >
              <p className="eyebrow">Featured Track</p>
              <h2 id="featured-heading">La Gentillesse</h2>
              <p>
                A tender invitation into kindness as strength, praise as breath, and healing as a daily act of faith.
              </p>
              <button
                className="button button-primary inline-player-button"
                type="button"
                onClick={() => toggleTrack(tracks[0])}
                aria-label={`${playingId === tracks[0].id ? "Pause" : "Play"} La Gentillesse`}
              >
                <PlayGlyph isPlaying={playingId === tracks[0].id} />
                {playingId === tracks[0].id ? "Pause Track" : "Play Featured Track"}
              </button>
            </motion.div>
          </div>
        </section>

        <section className="section music-showcase" id="music" aria-labelledby="music-heading">
          <div className="container">
            <SectionIntro eyebrow="Music Showcase" title="Apple Music-inspired moments of praise and restoration" center>
              <p>
                Compact, cinematic track rows with in-browser audio for songs shaped by faith, tenderness,
                gratitude, and gentle strength.
              </p>
            </SectionIntro>

            <motion.div
              className="playlist-panel glass-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              aria-label="Carine Sanadina music playlist"
            >
              <div className="playlist-header" aria-hidden="true">
                <span>Track</span>
                <span>Mood</span>
                <span>Time</span>
              </div>

              {tracks.map((track, index) => {
                const isPlaying = playingId === track.id;
                const isActive = activeId === track.id;

                return (
                  <article
                    className={`playlist-track${isActive ? " is-active" : ""}${isPlaying ? " is-playing" : ""}`}
                    key={track.id}
                    aria-labelledby={`${track.id}-title`}
                  >
                    <audio
                      ref={(node) => {
                        audioRefs.current[track.id] = node;
                      }}
                      src={track.audio}
                      preload="metadata"
                      aria-label={`${track.title} by Carine Sanadina`}
                    />
                    <div className="track-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>
                    <div className="track-cover-wrap">
                      <Image
                        src={track.cover}
                        alt={`${track.title} cover art`}
                        width={68}
                        height={68}
                        className="track-cover"
                        sizes="68px"
                      />
                    </div>
                    <div className="track-meta">
                      <h3 id={`${track.id}-title`}>{track.title}</h3>
                      <p>{track.description}</p>
                    </div>
                    <p className="track-mood">{track.mood}</p>
                    <div className="equalizer" aria-hidden="true">
                      <span /><span /><span /><span />
                    </div>
                    <p className="track-duration">
                      <span className="sr-only">Duration: </span>
                      {durationLabels[track.id] ?? track.duration}
                    </p>
                    <button
                      className="track-play-toggle"
                      type="button"
                      onClick={() => toggleTrack(track)}
                      aria-label={`${isPlaying ? "Pause" : "Play"} ${track.title}`}
                    >
                      <PlayGlyph isPlaying={isPlaying} />
                    </button>
                  </article>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="section author-spotlight" id="author" aria-labelledby="author-heading">
          <div className="container">
            <SectionIntro eyebrow="Author Spotlight" title="Books that turn testimony into light" center>
              <p>
                Elegant, intimate, and brave reflections for readers seeking language for survival,
                recovery, faith, and renewed self-worth.
              </p>
            </SectionIntro>
            <div className="book-grid">
              {books.map((book, index) => (
                <motion.article
                  className="book-card glass-card"
                  key={book.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeUp}
                  transition={{ duration: 0.6, delay: index * 0.04 }}
                >
                  <div className={`book-cover book-cover-${book.tone}`} aria-hidden="true">
                    <span>{book.kicker}</span>
                    <strong>{book.title}</strong>
                    <em>Carine Sanadina</em>
                  </div>
                  <div className="book-body">
                    <p className="eyebrow">{book.kicker}</p>
                    <h3>{book.title}</h3>
                    <p>{book.description}</p>
                    <a className="text-link" href={book.href} target="_blank" rel="noopener noreferrer">
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
            <SectionIntro eyebrow="About Carine" title="A voice of resilience, restoration, and human-centered healing" />
            <motion.div
              className="about-panel glass-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.65, delay: 0.08 }}
            >
              <h3 id="about-heading">Congolese-born. Jacksonville-based. Purpose-restored.</h3>
              <p>
                Carine Sanadina is a Congolese-born, Jacksonville-based healthcare professional, author,
                artist, and survivor advocate whose work transforms lived pain into healing-centered literature
                and inspiration.
              </p>
              <p>
                Her work explores domestic violence survival, toxic relationships, emotional wounds, faith,
                resilience, motherhood, immigrant experience, and the journey from brokenness to restoration.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section faith" id="focus" aria-labelledby="faith-heading">
          <div className="container">
            <SectionIntro eyebrow="Faith, Healing & Creativity" title="The themes at the heart of Carine’s work" center>
              <p>
                A calm creative world for survivors, readers, listeners, and communities seeking dignity,
                spiritual courage, and emotionally safe restoration.
              </p>
            </SectionIntro>
            <div className="focus-grid" aria-label="Core focus areas">
              {focusAreas.map((area, index) => (
                <motion.span
                  className="focus-pill"
                  key={area}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.025 }}
                >
                  {area}
                </motion.span>
              ))}
            </div>

            <div className="positioning-grid">
              <motion.article className="position-card glass-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <span className="card-number">01</span>
                <h3>Healthcare Professional</h3>
                <p>
                  Provides compassionate, patient-centered support in a healthcare environment, bringing empathy,
                  professionalism, and human understanding to daily service.
                </p>
              </motion.article>
              <motion.article className="position-card glass-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.08 }}>
                <span className="card-number">02</span>
                <h3>Author and Inspirational Voice</h3>
                <p>
                  Writes books and reflective content centered on survival, healing, faith, toxic relationship
                  awareness, emotional restoration, and personal transformation.
                </p>
              </motion.article>
            </div>
          </div>
        </section>

        <section className="quote-banner" aria-label="Featured quote">
          <div className="container">
            <motion.blockquote initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              “Pain may shape the story, but it does not get to own the ending.”
            </motion.blockquote>
          </div>
        </section>

        <section className="section final-cta" id="contact" aria-labelledby="contact-heading">
          <div className="container cta-panel glass-card">
            <p className="eyebrow">Contact / Booking</p>
            <h2 id="contact-heading">Read the books. Hear the story. Begin healing.</h2>
            <p>
              For speaking invitations, reader messages, collaborations, media inquiries, and future book updates,
              connect with Carine’s platform.
            </p>
            <div className="cta-actions">
              <a className="button button-primary" href="#author">Explore Books</a>
              <a className="button button-secondary" href="mailto:hello@example.com">Invite Carine to Speak</a>
              <a className="button button-ghost" href="mailto:hello@example.com">Contact</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© 2026 Carine Sanadina. All Rights Reserved.</p>
          <p>Website concept by Omoluabi Productions.</p>
        </div>
      </footer>

      <AnimatePresence>
        {miniVisible && activeTrack ? (
          <motion.aside
            className="mini-player"
            aria-label="Current track mini player"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 36, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="mini-player-shell glass-card">
              <Image
                src={activeTrack.cover}
                alt={`${activeTrack.title} cover art`}
                width={52}
                height={52}
                className="mini-cover"
                sizes="52px"
              />
              <div className="mini-meta">
                <p>{activeTrack.title}</p>
                <span>Carine Sanadina</span>
              </div>
              <button
                className="track-play-toggle mini-toggle"
                type="button"
                onClick={() => toggleTrack(activeTrack)}
                aria-label={`${playingId === activeTrack.id ? "Pause" : "Play"} ${activeTrack.title}`}
              >
                <PlayGlyph isPlaying={playingId === activeTrack.id} />
              </button>
              <div className="mini-progress">
                <span>{formatTime(progress)}</span>
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  step="0.1"
                  value={progress}
                  onChange={(event) => handleProgressChange(Number(event.target.value))}
                  aria-label={`${activeTrack.title} progress`}
                  style={{
                    background: `linear-gradient(90deg, #60A5FA ${duration ? (progress / duration) * 100 : 0}%, rgba(255,255,255,0.16) 0%)`,
                  }}
                />
                <span>{duration ? formatTime(duration) : "0:00"}</span>
              </div>
              <button
                className="mini-dismiss"
                type="button"
                onClick={() => setMiniDismissed(true)}
                aria-label="Dismiss mini player"
              >
                ×
              </button>
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </>
  );
}
