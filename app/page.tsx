"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type Track = {
  id: string;
  title: string;
  mood: string;
  description: string;
  cover: string;
  audio: string;
  duration: string;
};

const portraitSrc = "https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/Carine%20Sanadina.png";

const tracks: Track[] = [
  {
    id: "la-gentillesse",
    title: "La Gentillesse",
    mood: "Faith-filled kindness anthem",
    description: "A tender invitation into mercy, patience, and gentle strength.",
    cover: "https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/La%20Gentillesse.png",
    audio: "https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/La%20Gentillesse.mp3",
    duration: "Available in player"
  },
  {
    id: "wonderful",
    title: "Wonderful",
    mood: "Joyful praise and gratitude",
    description: "Bright, worshipful energy for renewed hope and everyday courage.",
    cover: "https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/Wonderful%20cover.png",
    audio: "https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/Wonderful.mp3",
    duration: "Available in player"
  }
];

const books = [
  {
    title: "If It’s Red, It’s Toxic",
    eyebrow: "Guide",
    tone: "red",
    body:
      "A bold guide to recognizing warning signs, emotional manipulation, spiritual danger, unhealthy attachments, and patterns that slowly drain peace, clarity, and purpose.",
    href: "https://www.amazon.com/If-Its-Red-Toxic/dp/B0GPDLJNH9"
  },
  {
    title: "The Road to Sunshine: A Journey of Struggles, Faith and Hope",
    eyebrow: "Faith & Hope",
    tone: "sunshine",
    body:
      "A hope-filled reflection on enduring struggle, holding onto faith, and continuing the journey toward brighter days even when the road feels uncertain.",
    href: "https://www.amazon.co.uk/Road-Sunshine-journey-struggles-faith-ebook/dp/B071FSC8K6"
  },
  {
    title: "After The Storm",
    eyebrow: "Restoration",
    tone: "storm",
    body:
      "A restoration-centered work honoring the quiet strength that follows hardship, helping readers look beyond survival toward healing, peace, and renewed possibility.",
    href: "https://www.amazon.com/s?k=After+The+Storm+Carine+Sanadina"
  }
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
  "Human-Centered Care"
];

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
} as const;

function formatTime(value: number) {
  if (!Number.isFinite(value) || value < 0) return "0:00";
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

export default function Home() {
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});
  const [activeTrackId, setActiveTrackId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [miniVisible, setMiniVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeSource, setActiveSource] = useState<string | null>(null);
  const [durations, setDurations] = useState<Record<string, number>>({});
  const [menuOpen, setMenuOpen] = useState(false);

  const activeTrack = useMemo(
    () => tracks.find((track) => track.id === activeTrackId) ?? null,
    [activeTrackId]
  );

  useEffect(() => {
    const activeAudio = activeTrackId ? audioRefs.current[activeTrackId] : null;
    if (!activeAudio) return;

    const sync = () => setProgress(activeAudio.currentTime);
    const ended = () => setIsPlaying(false);
    activeAudio.addEventListener("timeupdate", sync);
    activeAudio.addEventListener("ended", ended);
    return () => {
      activeAudio.removeEventListener("timeupdate", sync);
      activeAudio.removeEventListener("ended", ended);
    };
  }, [activeTrackId]);

  const playTrack = async (track: Track) => {
    const requestedAudio = audioRefs.current[track.id];
    if (!requestedAudio) return;

    Object.entries(audioRefs.current).forEach(([id, audio]) => {
      if (id !== track.id) audio?.pause();
    });

    setMiniVisible(true);
    setActiveTrackId(track.id);
    setActiveSource(track.audio);

    if (activeTrackId === track.id && !requestedAudio.paused) {
      requestedAudio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await requestedAudio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const toggleActive = async () => {
    if (!activeTrack) return;
    await playTrack(activeTrack);
  };

  const seek = (value: number) => {
    if (!activeTrackId) return;
    const audio = audioRefs.current[activeTrackId];
    if (!audio) return;
    audio.currentTime = value;
    setProgress(value);
  };

  const closeMiniPlayer = () => {
    if (activeTrackId) audioRefs.current[activeTrackId]?.pause();
    setActiveSource(null);
    setIsPlaying(false);
    setMiniVisible(false);
  };

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <header className="site-header" aria-label="Primary navigation">
        <nav className="nav container">
          <a className="brand-mark" href="#hero" aria-label="Carine Sanadina home">CS</a>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span /><span /><span />
          </button>
          <ul className={menuOpen ? "nav-links is-open" : "nav-links"} id="site-menu">
            <li><a href="#featured">Featured Track</a></li>
            <li><a href="#music">Music</a></li>
            <li><a href="#author">Author</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#healing">Healing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main id="main" className="page-shell">
        <section className="hero section" id="hero" aria-labelledby="hero-heading">
          <div className="ambient ambient-one" aria-hidden="true" />
          <div className="ambient ambient-two" aria-hidden="true" />
          <div className="container hero-grid">
            <motion.div className="hero-copy" {...fadeUp}>
              <p className="eyebrow">Congolese-born • Jacksonville, Florida • Faith-filled restoration</p>
              <h1 id="hero-heading">Carine Sanadina</h1>
              <p className="hero-subheadline">
                From hidden pain to restored purpose — Congolese-born survivor, healthcare professional, author, and artist creating healing through faith, words, and sound.
              </p>
              <p className="hero-support">Step into a world of gentle strength, faith-filled restoration, and elegant storytelling.</p>
              <div className="hero-actions" aria-label="Primary calls to action">
                <a className="button button-primary" href="#featured">Listen Now</a>
                <a className="button button-secondary" href="#music">Explore Music</a>
                <a className="button button-ghost" href="#about">Meet Carine</a>
              </div>
            </motion.div>

            <motion.figure className="portrait-card" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <div className="portrait-frame">
                <Image
                  src={portraitSrc}
                  alt="Carine Sanadina official portrait"
                  fill
                  priority
                  sizes="(max-width: 900px) 86vw, 42vw"
                  className="portrait-image"
                />
              </div>
              <figcaption>Official portrait — courage, faith, and restoration in one healing-centered story.</figcaption>
            </motion.figure>
          </div>
          <a className="scroll-indicator" href="#featured" aria-label="Scroll to featured track"><span />Scroll</a>
        </section>

        <section className="section featured-track" id="featured" aria-labelledby="featured-heading">
          <div className="container featured-grid">
            <motion.div className="section-heading" {...fadeUp}>
              <p className="eyebrow">Featured Track</p>
              <h2 id="featured-heading">A first listen into kindness, courage, and calm.</h2>
              <p>Begin with “La Gentillesse,” a gentle anthem that frames Carine Sanadina’s musical world with compassion and faith-filled tenderness.</p>
            </motion.div>
            <TrackRow track={tracks[0]} activeTrackId={activeTrackId} isPlaying={isPlaying} durations={durations} onPlay={playTrack} setAudioRef={(node) => { audioRefs.current[tracks[0].id] = node; }} setDurations={setDurations} featured />
          </div>
        </section>

        <section className="section music-showcase" id="music" aria-labelledby="music-heading">
          <div className="container">
            <motion.div className="section-heading center" {...fadeUp}>
              <p className="eyebrow">Music Showcase</p>
              <h2 id="music-heading">Apple Music-inspired songs for restoration.</h2>
              <p>Compact, elegant rows keep the focus on cover art, emotion, and native in-browser playback.</p>
            </motion.div>
            <div className="playlist-panel" aria-label="Carine Sanadina music playlist">
              <div className="playlist-header" aria-hidden="true"><span>Song</span><span>Mood</span><span>Time</span></div>
              {tracks.map((track) => (
                <TrackRow
                  key={track.id}
                  track={track}
                  activeTrackId={activeTrackId}
                  isPlaying={isPlaying}
                  durations={durations}
                  onPlay={playTrack}
                  setAudioRef={(node) => { audioRefs.current[track.id] = node; }}
                  setDurations={setDurations}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section author-spotlight" id="author" aria-labelledby="author-heading">
          <div className="container">
            <motion.div className="section-heading center" {...fadeUp}>
              <p className="eyebrow">Author Spotlight</p>
              <h2 id="author-heading">Books that name pain without letting pain own the ending.</h2>
            </motion.div>
            <div className="book-grid">
              {books.map((book) => <BookCard key={book.title} {...book} />)}
            </div>
          </div>
        </section>

        <section className="section about" id="about" aria-labelledby="about-heading">
          <div className="container split-layout">
            <motion.div className="section-heading" {...fadeUp}>
              <p className="eyebrow">About Carine</p>
              <h2 id="about-heading">A voice of resilience, restoration, and human-centered healing.</h2>
            </motion.div>
            <motion.div className="glass-card prose-card" {...fadeUp}>
              <p>Carine Sanadina is a Congolese-born, Jacksonville-based healthcare professional, author, artist, and survivor advocate whose work transforms lived pain into healing-centered literature and inspiration.</p>
              <p>Her work explores domestic violence survival, toxic relationships, emotional wounds, faith, resilience, motherhood, immigrant experience, and the journey from brokenness to restoration.</p>
              <p>In every format — patient-centered service, books, music, and reflective storytelling — Carine offers a calm, elegant space for people rebuilding their sense of worth and purpose.</p>
            </motion.div>
          </div>
        </section>

        <section className="section healing" id="healing" aria-labelledby="healing-heading">
          <div className="container">
            <motion.div className="section-heading compact" {...fadeUp}>
              <p className="eyebrow">Faith, Healing & Creativity</p>
              <h2 id="healing-heading">The themes at the heart of Carine’s work.</h2>
            </motion.div>
            <div className="focus-grid" aria-label="Core focus areas">
              {focusAreas.map((area) => <motion.span className="focus-pill" key={area} {...fadeUp}>{area}</motion.span>)}
            </div>
            <div className="positioning-grid">
              <motion.article className="position-card" {...fadeUp}>
                <span className="card-number">01</span>
                <h3>Healthcare Professional</h3>
                <p>Provides compassionate, patient-centered support in a healthcare environment, bringing empathy, professionalism, and human understanding to daily service.</p>
              </motion.article>
              <motion.article className="position-card" {...fadeUp}>
                <span className="card-number">02</span>
                <h3>Author and Inspirational Voice</h3>
                <p>Writes books and reflective content centered on survival, healing, faith, toxic relationship awareness, emotional restoration, and personal transformation.</p>
              </motion.article>
            </div>
          </div>
        </section>

        <section className="quote-banner" aria-label="Featured quote">
          <div className="container"><blockquote>“Pain may shape the story, but it does not get to own the ending.”</blockquote></div>
        </section>

        <section className="section final-cta" id="contact" aria-labelledby="contact-heading">
          <div className="container cta-panel">
            <p className="eyebrow">Contact / Booking</p>
            <h2 id="contact-heading">Read the books. Hear the story. Begin healing.</h2>
            <p>For speaking invitations, reader messages, collaborations, media inquiries, and future book updates, connect with Carine Sanadina’s platform.</p>
            <div className="cta-actions">
              <a className="button button-primary" href="#author">Explore Books</a>
              <a className="button button-secondary" href="mailto:hello@example.com">Invite Carine to Speak</a>
              <a className="button button-ghost" href="mailto:hello@example.com">Contact</a>
            </div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {miniVisible && activeTrack ? (
          <motion.aside
            className="mini-player"
            aria-label="Current track mini player"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
          >
            <div className="mini-player-shell">
              <Image src={activeTrack.cover} alt={`${activeTrack.title} cover art`} width={52} height={52} className="mini-player-cover" />
              <div className="mini-player-meta"><p>{activeTrack.title}</p><span>Carine Sanadina</span><small>{activeSource ? "Native in-browser audio" : "Ready to play"}</small></div>
              <button className={isPlaying ? "track-play-toggle is-playing" : "track-play-toggle"} type="button" onClick={toggleActive} aria-label={`${isPlaying ? "Pause" : "Play"} ${activeTrack.title}`}><span className="play-icon" aria-hidden="true" /></button>
              <div className="mini-time">
                <span>{formatTime(progress)}</span>
                <input className="player-range" type="range" min="0" max={durations[activeTrack.id] || 100} value={progress} step="0.1" onChange={(event) => seek(Number(event.target.value))} aria-label="Current track progress" />
                <span>{formatTime(durations[activeTrack.id] || 0)}</span>
              </div>
              <button className="dismiss-player" type="button" onClick={closeMiniPlayer} aria-label="Dismiss mini player">×</button>
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© 2026 Carine Sanadina. All Rights Reserved.</p>
          <p>Website concept by Omoluabi Productions.</p>
        </div>
      </footer>
    </>
  );
}

function TrackRow({
  track,
  activeTrackId,
  isPlaying,
  durations,
  onPlay,
  setAudioRef,
  setDurations,
  featured = false
}: {
  track: Track;
  activeTrackId: string | null;
  isPlaying: boolean;
  durations: Record<string, number>;
  onPlay: (track: Track) => void;
  setAudioRef: (node: HTMLAudioElement | null) => void;
  setDurations: React.Dispatch<React.SetStateAction<Record<string, number>>>;
  featured?: boolean;
}) {
  const active = activeTrackId === track.id;

  return (
    <motion.article className={`${featured ? "playlist-track featured" : "playlist-track"} ${active ? "is-active" : ""}`} data-audio-src={track.audio} {...fadeUp}>
      <audio
        ref={setAudioRef}
        aria-label={`${track.title} by Carine Sanadina`}
        preload="metadata"
        src={track.audio}
        onLoadedMetadata={(event) => {
          const duration = event.currentTarget.duration;
          if (Number.isFinite(duration)) {
            setDurations((current) => ({ ...current, [track.id]: duration }));
          }
        }}
      />
      <Image src={track.cover} alt={`${track.title} cover art`} width={featured ? 96 : 72} height={featured ? 96 : 72} className="track-cover" />
      <div className="track-meta">
        <p className="music-label">{featured ? "Featured" : "Carine Sanadina"}</p>
        <h3>{track.title}</h3>
        <p>{track.description}</p>
      </div>
      <p className="track-mood">{track.mood}</p>
      <div className="track-duration"><span className="sr-only">Duration:</span>{durations[track.id] ? formatTime(durations[track.id]) : track.duration}</div>
      <div className={active && isPlaying ? "equalizer is-playing" : "equalizer"} aria-hidden="true"><span /><span /><span /><span /></div>
      <button className={active && isPlaying ? "track-play-toggle is-playing" : "track-play-toggle"} type="button" onClick={() => onPlay(track)} aria-label={`${active && isPlaying ? "Pause" : "Play"} ${track.title}`}>
        <span className="play-icon" aria-hidden="true" />
      </button>
    </motion.article>
  );
}

function BookCard({ title, eyebrow, tone, body, href }: { title: string; eyebrow: string; tone: string; body: string; href: string }) {
  return (
    <motion.article className="book-card" {...fadeUp}>
      <div className={`book-cover cover-${tone}`} aria-label={`${title} stylized book cover`}>
        <span>{eyebrow}</span>
        <strong>{title}</strong>
        <small>Carine Sanadina</small>
      </div>
      <div className="book-body">
        <h3>{title}</h3>
        <p>{body}</p>
        <a className="button book-button" href={href} target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
      </div>
    </motion.article>
  );
}
