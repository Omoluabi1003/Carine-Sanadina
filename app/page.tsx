"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Track = {
  id: string;
  title: string;
  artist: string;
  mood: string;
  description: string;
  cover: string;
  audio: string;
  durationHint: string;
};

const portraitSrc =
  "https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/Carine%20Sanadina.png";

const tracks: Track[] = [
  {
    id: "la-gentillesse",
    title: "La Gentillesse",
    artist: "Carine Sanadina",
    mood: "Faith-filled kindness anthem",
    description:
      "A warm musical expression celebrating kindness, compassion, healing, and the beauty of human connection.",
    cover:
      "https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/La%20Gentillesse.png",
    audio:
      "https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/La%20Gentillesse.mp3",
    durationHint: "Load"
  },
  {
    id: "wonderful",
    title: "Wonderful",
    artist: "Carine Sanadina",
    mood: "Joyful praise and gratitude",
    description:
      "A joyful expression of gratitude and praise, celebrating the beauty of giving glory to God and recognizing His goodness through every season.",
    cover:
      "https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/Wonderful%20cover.png",
    audio: "https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/Wonderful.mp3",
    durationHint: "Load"
  }
];

const books = [
  {
    title: "The Pain Nobody Saw",
    label: "Memoir voice",
    note: "A compassionate witness to wounds often carried in silence, inviting readers toward language, dignity, and healing."
  },
  {
    title: "If It’s Red, It’s Toxic",
    label: "Discernment guide",
    note: "A bold restoration-centered guide for recognizing toxic patterns, honoring peace, and choosing emotional safety."
  },
  {
    title: "The Road to Sunshine",
    label: "Faith journey",
    note: "A hope-filled path through struggle, resilience, prayer, and the courage to keep walking toward light."
  },
  {
    title: "After The Storm",
    label: "Restoration work",
    note: "A tender reflection on rebuilding after hardship and discovering purpose on the other side of survival."
  }
];

const pillars = [
  "Faith",
  "Emotional wellness",
  "Music",
  "Storytelling",
  "Survivor advocacy",
  "Healthcare compassion",
  "Restoration"
];

function formatTime(value: number) {
  if (!Number.isFinite(value) || value < 0) return "0:00";
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function PlayGlyph({ isPlaying }: { isPlaying: boolean }) {
  return <span aria-hidden="true" className={isPlaying ? "cs-pause-glyph" : "cs-play-glyph"} />;
}

function Equalizer({ active }: { active: boolean }) {
  return (
    <span className={active ? "cs-eq is-active" : "cs-eq"} aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}

function TrackRow({
  track,
  active,
  playing,
  duration,
  onPlay,
  featured = false
}: {
  track: Track;
  active: boolean;
  playing: boolean;
  duration?: number;
  onPlay: (track: Track) => void;
  featured?: boolean;
}) {
  const isPlaying = active && playing;

  return (
    <article
      className={featured ? "cs-track-row cs-track-row-featured" : "cs-track-row"}
      data-audio-src={track.audio}
      aria-label={`${track.title} by ${track.artist}`}
    >
      <button
        type="button"
        className="cs-track-play"
        onClick={() => onPlay(track)}
        aria-label={isPlaying ? `Pause ${track.title}` : `Play ${track.title}`}
      >
        <PlayGlyph isPlaying={isPlaying} />
      </button>
      <div className="cs-track-art-wrap">
        <Image
          src={track.cover}
          alt={`${track.title} cover artwork`}
          width={92}
          height={92}
          className="cs-track-art"
          sizes="92px"
        />
      </div>
      <div className="cs-track-main">
        <h3>{track.title}</h3>
        <p>{track.artist}</p>
        {featured ? <span>{track.description}</span> : null}
      </div>
      <div className="cs-track-mood">
        <span>{track.mood}</span>
      </div>
      <Equalizer active={isPlaying} />
      <time className="cs-track-time" dateTime={duration ? `PT${Math.round(duration)}S` : undefined}>
        {duration ? formatTime(duration) : track.durationHint}
      </time>
    </article>
  );
}

export default function Home() {
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});
  const [activeTrackId, setActiveTrackId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [miniVisible, setMiniVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [durations, setDurations] = useState<Record<string, number>>({});
  const [volume, setVolume] = useState(0.82);

  const activeTrack = useMemo(
    () => tracks.find((track) => track.id === activeTrackId) ?? null,
    [activeTrackId]
  );

  const activeDuration = activeTrackId ? durations[activeTrackId] ?? 0 : 0;
  const audioStatus = activeTrack ? (isPlaying ? "Playing in browser" : "Paused in browser") : "Ready";

  useEffect(() => {
    Object.values(audioRefs.current).forEach((audio) => {
      if (audio) audio.volume = volume;
    });
  }, [volume]);

  useEffect(() => {
    if (!activeTrackId) return;
    const audio = audioRefs.current[activeTrackId];
    if (!audio) return;

    const syncProgress = () => setProgress(audio.currentTime);
    const syncDuration = () => {
      if (Number.isFinite(audio.duration)) {
        setDurations((current) => ({ ...current, [activeTrackId]: audio.duration }));
      }
    };
    const markEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      audio.currentTime = 0;
    };

    audio.addEventListener("timeupdate", syncProgress);
    audio.addEventListener("loadedmetadata", syncDuration);
    audio.addEventListener("durationchange", syncDuration);
    audio.addEventListener("ended", markEnded);

    syncDuration();
    syncProgress();

    return () => {
      audio.removeEventListener("timeupdate", syncProgress);
      audio.removeEventListener("loadedmetadata", syncDuration);
      audio.removeEventListener("durationchange", syncDuration);
      audio.removeEventListener("ended", markEnded);
    };
  }, [activeTrackId]);

  const playTrack = async (track: Track) => {
    const requestedAudio = audioRefs.current[track.id];
    if (!requestedAudio) return;

    Object.entries(audioRefs.current).forEach(([id, audio]) => {
      if (id !== track.id && audio) audio.pause();
    });

    setMiniVisible(true);
    setActiveTrackId(track.id);
    setProgress(requestedAudio.currentTime);

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

  const toggleActive = () => {
    if (activeTrack) void playTrack(activeTrack);
  };

  const seek = (value: number) => {
    if (!activeTrackId) return;
    const audio = audioRefs.current[activeTrackId];
    if (!audio) return;
    audio.currentTime = value;
    setProgress(value);
  };

  const dismissMiniPlayer = () => {
    if (activeTrackId) audioRefs.current[activeTrackId]?.pause();
    setIsPlaying(false);
    setMiniVisible(false);
  };

  return (
    <>
      <a className="cs-skip-link" href="#main">
        Skip to main content
      </a>

      <main id="main" className="cs-page-shell">
        <section className="cs-hero" id="hero" aria-labelledby="hero-heading">
          <div className="cs-grain" aria-hidden="true" />
          <div className="cs-orb cs-orb-one" aria-hidden="true" />
          <div className="cs-orb cs-orb-two" aria-hidden="true" />

          <div className="cs-shell cs-hero-grid">
            <div className="cs-hero-copy">
              <p className="cs-kicker">Carine Sanadina</p>
              <p className="cs-role">
                Healthcare Professional | Author | Artist | Survivor Advocate | Emotional Wellness Voice
              </p>
              <p className="cs-location">Jacksonville, Florida</p>
              <h1 id="hero-heading">
                Turning pain into healing, survival into purpose, and stories into restoration.
              </h1>
              <p className="cs-hero-lede">
                A faith-centered creative world where restoration becomes music, authorship becomes witness,
                healthcare compassion becomes human care, and resilience becomes a path back to wholeness.
              </p>
              <div className="cs-hero-actions" aria-label="Homepage calls to action">
                <a className="cs-button cs-button-primary" href="#music">
                  Explore Music
                </a>
                <a className="cs-button cs-button-secondary" href="#about">
                  Discover Her Story
                </a>
              </div>
            </div>

            <figure className="cs-portrait-card">
              <div className="cs-portrait-glow" aria-hidden="true" />
              <Image
                src={portraitSrc}
                alt="Official portrait of Carine Sanadina"
                width={760}
                height={900}
                priority
                className="cs-portrait"
                sizes="(max-width: 860px) 88vw, 42vw"
              />
              <figcaption>
                Faith-filled restoration, lived resilience, and a voice shaped by compassion.
              </figcaption>
            </figure>
          </div>

          <a className="cs-scroll-indicator" href="#featured" aria-label="Scroll to featured track">
            <span />
            Scroll
          </a>
        </section>

        <section className="cs-section cs-featured" id="featured" aria-labelledby="featured-heading">
          <div className="cs-shell cs-featured-grid">
            <div>
              <p className="cs-kicker">Featured Track</p>
              <h2 id="featured-heading">La Gentillesse opens the room with kindness.</h2>
              <p className="cs-section-copy">
                A compact, refined first listen into Carine’s sonic atmosphere: warm, prayerful,
                restorative, and deeply human.
              </p>
            </div>
            <TrackRow
              track={tracks[0]}
              active={activeTrackId === tracks[0].id}
              playing={isPlaying}
              duration={durations[tracks[0].id]}
              onPlay={playTrack}
              featured
            />
          </div>
        </section>

        <section className="cs-section" id="music" aria-labelledby="music-heading">
          <div className="cs-shell">
            <div className="cs-section-heading">
              <p className="cs-kicker">Music Showcase</p>
              <h2 id="music-heading">Apple Music-inspired worship, gratitude, and emotional restoration.</h2>
              <p className="cs-section-copy">
                Native in-browser playback keeps every song inside the experience: no source names,
                no external redirects, only the music and its message.
              </p>
            </div>

            <div className="cs-playlist" aria-label="Carine Sanadina music playlist">
              <div className="cs-playlist-top" aria-hidden="true">
                <span>Track</span>
                <span>Mood</span>
                <span>Status</span>
                <span>Time</span>
              </div>
              {tracks.map((track) => (
                <TrackRow
                  key={track.id}
                  track={track}
                  active={activeTrackId === track.id}
                  playing={isPlaying}
                  duration={durations[track.id]}
                  onPlay={playTrack}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="cs-section" id="author" aria-labelledby="author-heading">
          <div className="cs-shell">
            <div className="cs-section-heading cs-section-heading-wide">
              <p className="cs-kicker">Author Spotlight</p>
              <h2 id="author-heading">Books shaped for survivors, seekers, and souls rebuilding after storms.</h2>
              <p className="cs-section-copy">
                Carine’s author platform honors the invisible parts of healing with premium, elegant
                placeholder cards in place of unprovided book artwork.
              </p>
            </div>

            <div className="cs-book-grid">
              {books.map((book, index) => (
                <article className="cs-book-card" key={book.title}>
                  <div className="cs-book-cover" aria-hidden="true">
                    <span>{book.label}</span>
                    <strong>{book.title}</strong>
                    <small>Carine Sanadina</small>
                  </div>
                  <div className="cs-book-body">
                    <span>0{index + 1}</span>
                    <h3>{book.title}</h3>
                    <p>{book.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cs-section cs-about" id="about" aria-labelledby="about-heading">
          <div className="cs-shell cs-about-grid">
            <div className="cs-glass-card">
              <p className="cs-kicker">About Carine</p>
              <h2 id="about-heading">A life of care, courage, authorship, advocacy, and song.</h2>
            </div>
            <div className="cs-about-copy">
              <p>
                Carine Sanadina is a Congolese-born, Jacksonville-based healthcare professional,
                author, artist, and survivor advocate whose work transforms lived pain into
                healing-centered literature and inspiration.
              </p>
              <p>
                Her work explores domestic violence survival, toxic relationships, emotional wounds,
                faith, resilience, motherhood, immigrant experience, and the journey from brokenness
                to restoration.
              </p>
            </div>
          </div>
        </section>

        <section className="cs-section" id="healing" aria-labelledby="healing-heading">
          <div className="cs-shell cs-healing-panel">
            <div className="cs-section-heading">
              <p className="cs-kicker">Faith, Healing, and Creativity</p>
              <h2 id="healing-heading">A cinematic constellation of compassion and restored purpose.</h2>
              <p className="cs-section-copy">
                Carine’s creative voice connects personal testimony with the tenderness of healthcare,
                the honesty of survivor advocacy, and the hope of faith-filled restoration.
              </p>
            </div>
            <div className="cs-pillar-grid" aria-label="Creative and healing themes">
              {pillars.map((pillar) => (
                <span className="cs-pillar" key={pillar}>
                  {pillar}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="cs-section" id="contact" aria-labelledby="contact-heading">
          <div className="cs-shell cs-contact-card">
            <p className="cs-kicker">Contact / Booking</p>
            <h2 id="contact-heading">Invite Carine into conversations where healing needs a human voice.</h2>
            <p>
              For speaking invitations, music collaborations, author/media inquiries, and survivor
              advocacy conversations, please use the official contact channel when available. Until a
              direct address is published, booking requests may be prepared with your organization,
              event date, audience, and desired conversation focus.
            </p>
            <div className="cs-contact-list" aria-label="Booking categories">
              <span>Speaking invitations</span>
              <span>Music collaborations</span>
              <span>Author/media inquiries</span>
              <span>Survivor advocacy conversations</span>
            </div>
          </div>
        </section>

        <footer className="cs-footer">
          <div className="cs-shell cs-footer-inner">
            <p>© 2026 Carine Sanadina. All Rights Reserved.</p>
            <p>Website concept by Omoluabi Productions.</p>
          </div>
        </footer>
      </main>

      <div className="cs-audio-bank" aria-hidden="true">
        {tracks.map((track) => (
          <audio
            key={track.id}
            ref={(node) => {
              audioRefs.current[track.id] = node;
            }}
            preload="metadata"
            data-track-id={track.id}
            data-audio-src={track.audio}
            src={track.audio}
            onLoadedMetadata={(event) => {
              const duration = event.currentTarget.duration;
              if (Number.isFinite(duration)) {
                setDurations((current) => ({ ...current, [track.id]: duration }));
              }
            }}
          />
        ))}
      </div>

      {activeTrack && miniVisible ? (
        <aside className="cs-mini-player" aria-label="Native in-browser audio player">
          <Image
            src={activeTrack.cover}
            alt={`${activeTrack.title} cover artwork`}
            width={64}
            height={64}
            className="cs-mini-art"
            sizes="64px"
          />
          <div className="cs-mini-meta">
            <strong>{activeTrack.title}</strong>
            <span>{activeTrack.artist}</span>
            <small>{audioStatus}</small>
          </div>
          <button
            type="button"
            className="cs-mini-button"
            onClick={toggleActive}
            aria-label={isPlaying ? `Pause ${activeTrack.title}` : `Play ${activeTrack.title}`}
          >
            <PlayGlyph isPlaying={isPlaying} />
          </button>
          <div className="cs-mini-progress">
            <span>{formatTime(progress)}</span>
            <input
              aria-label={`Seek ${activeTrack.title}`}
              type="range"
              min="0"
              max={activeDuration || 0}
              step="0.1"
              value={Math.min(progress, activeDuration || progress)}
              onChange={(event) => seek(Number(event.target.value))}
            />
            <span>{activeDuration ? formatTime(activeDuration) : "0:00"}</span>
          </div>
          <label className="cs-mini-volume">
            <span>Volume</span>
            <input
              aria-label="Volume"
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(event) => setVolume(Number(event.target.value))}
            />
          </label>
          <button
            type="button"
            className="cs-mini-dismiss"
            onClick={dismissMiniPlayer}
            aria-label="Dismiss audio player"
          >
            ×
          </button>
        </aside>
      ) : null}

      <style jsx global>{`
        :root {
          --cs-navy: #050b18;
          --cs-navy-2: #07152d;
          --cs-royal: #1d5cff;
          --cs-blue: #67b7ff;
          --cs-ice: #c8ecff;
          --cs-ivory: #fff8ec;
          --cs-muted: rgba(255, 248, 236, 0.72);
          --cs-gold: #d7b37b;
          --cs-line: rgba(200, 236, 255, 0.2);
          --cs-glass: rgba(255, 255, 255, 0.08);
          --cs-glass-strong: rgba(255, 255, 255, 0.14);
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background: var(--cs-navy);
        }

        .cs-page-shell {
          min-height: 100vh;
          overflow: hidden;
          color: var(--cs-ivory);
          background:
            radial-gradient(circle at 12% 8%, rgba(29, 92, 255, 0.34), transparent 28rem),
            radial-gradient(circle at 86% 18%, rgba(103, 183, 255, 0.22), transparent 30rem),
            radial-gradient(circle at 52% 78%, rgba(215, 179, 123, 0.12), transparent 28rem),
            linear-gradient(145deg, #030712 0%, var(--cs-navy-2) 52%, #061225 100%);
        }

        .cs-shell {
          width: min(1160px, calc(100% - 32px));
          margin: 0 auto;
        }

        .cs-skip-link {
          position: fixed;
          left: 1rem;
          top: 1rem;
          z-index: 100;
          transform: translateY(-150%);
          border-radius: 999px;
          padding: 0.8rem 1rem;
          background: var(--cs-ivory);
          color: var(--cs-navy);
          font-weight: 900;
        }

        .cs-skip-link:focus {
          transform: translateY(0);
        }

        .cs-hero {
          position: relative;
          display: grid;
          min-height: 100svh;
          place-items: center;
          padding: clamp(6rem, 12vh, 9rem) 0 5.5rem;
          isolation: isolate;
        }

        .cs-grain,
        .cs-grain::before {
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          content: "";
        }

        .cs-grain {
          opacity: 0.22;
          background-image: linear-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
          background-size: 38px 38px;
          mask-image: linear-gradient(to bottom, black 0%, transparent 88%);
        }

        .cs-grain::before {
          opacity: 0.16;
          background-image: radial-gradient(rgba(255, 255, 255, 0.8) 0.7px, transparent 0.7px);
          background-size: 5px 5px;
        }

        .cs-orb {
          position: absolute;
          z-index: -1;
          border-radius: 999px;
          filter: blur(16px);
          opacity: 0.82;
        }

        .cs-orb-one {
          left: -16rem;
          top: 6rem;
          width: 42rem;
          height: 42rem;
          background: radial-gradient(circle, rgba(29, 92, 255, 0.54), transparent 62%);
        }

        .cs-orb-two {
          right: -18rem;
          bottom: 1rem;
          width: 46rem;
          height: 46rem;
          background: radial-gradient(circle, rgba(200, 236, 255, 0.28), transparent 64%);
        }

        .cs-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(300px, 0.82fr);
          gap: clamp(2rem, 6vw, 5.5rem);
          align-items: center;
        }

        .cs-kicker,
        .cs-role,
        .cs-location {
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-size: 0.78rem;
          font-weight: 900;
        }

        .cs-kicker {
          color: var(--cs-gold);
        }

        .cs-role {
          margin-top: 1rem;
          color: var(--cs-ice);
        }

        .cs-location {
          margin-top: 0.6rem;
          color: rgba(255, 248, 236, 0.62);
        }

        .cs-hero h1,
        .cs-section h2,
        .cs-contact-card h2,
        .cs-book-card h3 {
          font-family: Georgia, "Times New Roman", serif;
          letter-spacing: -0.055em;
          text-wrap: balance;
        }

        .cs-hero h1 {
          max-width: 860px;
          margin: 1.35rem 0 0;
          font-size: clamp(3.45rem, 9vw, 7.7rem);
          line-height: 0.92;
        }

        .cs-hero-lede {
          max-width: 720px;
          margin: 1.45rem 0 0;
          color: var(--cs-muted);
          font-size: clamp(1.08rem, 2vw, 1.35rem);
          line-height: 1.7;
        }

        .cs-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.9rem;
          margin-top: 2rem;
        }

        .cs-button,
        .cs-track-play,
        .cs-mini-button,
        .cs-mini-dismiss {
          border: 0;
          cursor: pointer;
        }

        .cs-button {
          display: inline-flex;
          min-height: 3.25rem;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 0.9rem 1.25rem;
          font-weight: 900;
          transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
        }

        .cs-button:hover,
        .cs-button:focus-visible,
        .cs-track-play:hover,
        .cs-track-play:focus-visible,
        .cs-mini-button:hover,
        .cs-mini-button:focus-visible,
        .cs-mini-dismiss:hover,
        .cs-mini-dismiss:focus-visible,
        input:focus-visible {
          outline: 2px solid var(--cs-ice);
          outline-offset: 4px;
        }

        .cs-button:hover,
        .cs-button:focus-visible {
          transform: translateY(-2px);
        }

        .cs-button-primary {
          background: linear-gradient(135deg, var(--cs-royal), var(--cs-blue));
          color: white;
          box-shadow: 0 1rem 3rem rgba(29, 92, 255, 0.36);
        }

        .cs-button-secondary {
          border: 1px solid var(--cs-line);
          background: rgba(255, 255, 255, 0.08);
          color: var(--cs-ivory);
          backdrop-filter: blur(18px);
        }

        .cs-portrait-card {
          position: relative;
          overflow: hidden;
          margin: 0;
          border: 1px solid rgba(200, 236, 255, 0.24);
          border-radius: 2.4rem;
          padding: 0.72rem;
          background: linear-gradient(160deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.04));
          box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.42);
        }

        .cs-portrait-glow {
          position: absolute;
          inset: 12% -20% auto;
          height: 42%;
          background: radial-gradient(circle, rgba(103, 183, 255, 0.42), transparent 68%);
          filter: blur(24px);
        }

        .cs-portrait {
          position: relative;
          aspect-ratio: 4 / 5;
          width: 100%;
          height: auto;
          border-radius: 1.8rem;
          object-fit: cover;
          object-position: center top;
        }

        .cs-portrait-card figcaption {
          padding: 1rem 0.75rem 0.4rem;
          color: rgba(255, 248, 236, 0.68);
          font-size: 0.92rem;
          line-height: 1.55;
        }

        .cs-scroll-indicator {
          position: absolute;
          left: 50%;
          bottom: 1.75rem;
          display: inline-flex;
          transform: translateX(-50%);
          align-items: center;
          gap: 0.55rem;
          color: rgba(255, 248, 236, 0.72);
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .cs-scroll-indicator span {
          width: 0.65rem;
          height: 1.65rem;
          border: 1px solid rgba(255, 248, 236, 0.58);
          border-radius: 999px;
        }

        .cs-section {
          position: relative;
          padding: clamp(4.5rem, 9vw, 7.5rem) 0;
        }

        .cs-section h2,
        .cs-contact-card h2 {
          margin: 0.6rem 0 0;
          font-size: clamp(2.35rem, 6vw, 5.2rem);
          line-height: 0.98;
        }

        .cs-section-copy,
        .cs-contact-card p,
        .cs-about-copy p,
        .cs-book-body p {
          color: var(--cs-muted);
          font-size: 1.03rem;
          line-height: 1.8;
        }

        .cs-section-copy {
          max-width: 760px;
          margin: 1rem 0 0;
        }

        .cs-section-heading {
          max-width: 890px;
          margin-bottom: 2rem;
        }

        .cs-section-heading-wide {
          max-width: 960px;
        }

        .cs-featured-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(360px, 1.1fr);
          gap: 1.5rem;
          align-items: end;
        }

        .cs-playlist,
        .cs-track-row,
        .cs-glass-card,
        .cs-book-card,
        .cs-healing-panel,
        .cs-contact-card,
        .cs-mini-player {
          border: 1px solid var(--cs-line);
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.045));
          box-shadow: 0 1.5rem 5rem rgba(0, 0, 0, 0.28);
          backdrop-filter: blur(24px);
        }

        .cs-playlist {
          overflow: hidden;
          border-radius: 1.75rem;
          padding: 0.55rem;
        }

        .cs-playlist-top {
          display: grid;
          grid-template-columns: 1fr 0.75fr 72px 72px;
          gap: 1rem;
          padding: 0.7rem 1rem;
          color: rgba(255, 248, 236, 0.45);
          font-size: 0.76rem;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .cs-track-row {
          display: grid;
          grid-template-columns: 3rem 4.4rem minmax(0, 1fr) minmax(130px, 0.55fr) 3.25rem 4.5rem;
          gap: 0.85rem;
          align-items: center;
          margin-top: 0.45rem;
          border-radius: 1.25rem;
          padding: 0.65rem;
        }

        .cs-track-row-featured {
          grid-template-columns: 3.4rem 5.75rem minmax(0, 1fr) minmax(125px, 0.45fr) 3.25rem 4.5rem;
          padding: 0.8rem;
          background: linear-gradient(145deg, rgba(29, 92, 255, 0.24), rgba(255, 255, 255, 0.07));
        }

        .cs-track-play,
        .cs-mini-button {
          display: grid;
          place-items: center;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          color: var(--cs-ivory);
        }

        .cs-track-play {
          width: 3rem;
          height: 3rem;
        }

        .cs-track-art-wrap {
          overflow: hidden;
          border-radius: 1rem;
          background: rgba(255, 255, 255, 0.08);
        }

        .cs-track-art {
          aspect-ratio: 1;
          width: 100%;
          height: auto;
          object-fit: cover;
        }

        .cs-track-main h3 {
          margin: 0;
          font-family: inherit;
          font-size: 1rem;
          letter-spacing: 0;
        }

        .cs-track-main p,
        .cs-track-main span,
        .cs-track-mood span,
        .cs-track-time {
          color: rgba(255, 248, 236, 0.68);
          font-size: 0.88rem;
          line-height: 1.45;
        }

        .cs-track-main p,
        .cs-track-main span {
          display: block;
          margin: 0.16rem 0 0;
        }

        .cs-track-time {
          justify-self: end;
          font-variant-numeric: tabular-nums;
        }

        .cs-play-glyph {
          width: 0;
          height: 0;
          margin-left: 0.18rem;
          border-top: 0.48rem solid transparent;
          border-bottom: 0.48rem solid transparent;
          border-left: 0.72rem solid currentColor;
        }

        .cs-pause-glyph {
          width: 0.75rem;
          height: 1rem;
          background: linear-gradient(90deg, currentColor 0 34%, transparent 34% 66%, currentColor 66% 100%);
        }

        .cs-eq {
          display: inline-flex;
          height: 1.5rem;
          align-items: end;
          justify-content: center;
          gap: 0.2rem;
          opacity: 0.34;
        }

        .cs-eq span {
          width: 0.2rem;
          height: 0.45rem;
          border-radius: 999px;
          background: var(--cs-ice);
        }

        .cs-eq.is-active {
          opacity: 1;
        }

        .cs-eq.is-active span {
          animation: csEqualize 900ms ease-in-out infinite;
        }

        .cs-eq.is-active span:nth-child(2) {
          animation-delay: 120ms;
        }

        .cs-eq.is-active span:nth-child(3) {
          animation-delay: 240ms;
        }

        .cs-eq.is-active span:nth-child(4) {
          animation-delay: 360ms;
        }

        .cs-book-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1rem;
        }

        .cs-book-card {
          overflow: hidden;
          border-radius: 1.6rem;
        }

        .cs-book-cover {
          display: flex;
          min-height: 17.5rem;
          flex-direction: column;
          justify-content: space-between;
          padding: 1.25rem;
          background:
            radial-gradient(circle at 20% 10%, rgba(200, 236, 255, 0.22), transparent 45%),
            linear-gradient(145deg, rgba(29, 92, 255, 0.4), rgba(5, 11, 24, 0.94));
        }

        .cs-book-cover span,
        .cs-book-cover small,
        .cs-book-body span {
          color: var(--cs-gold);
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .cs-book-cover strong {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          line-height: 0.95;
        }

        .cs-book-body {
          padding: 1.25rem;
        }

        .cs-book-body h3 {
          margin: 0.8rem 0 0;
          font-size: 1.6rem;
          line-height: 1;
        }

        .cs-book-body p {
          margin-bottom: 0;
          font-size: 0.95rem;
        }

        .cs-about-grid {
          display: grid;
          grid-template-columns: minmax(280px, 0.85fr) minmax(0, 1.15fr);
          gap: 1.25rem;
          align-items: stretch;
        }

        .cs-glass-card,
        .cs-contact-card,
        .cs-healing-panel {
          border-radius: 2rem;
          padding: clamp(1.5rem, 5vw, 3.5rem);
        }

        .cs-about-copy {
          border-left: 1px solid var(--cs-line);
          padding-left: clamp(1.25rem, 4vw, 3rem);
        }

        .cs-pillar-grid,
        .cs-contact-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 2rem;
        }

        .cs-pillar,
        .cs-contact-list span {
          border: 1px solid rgba(200, 236, 255, 0.24);
          border-radius: 999px;
          padding: 0.82rem 1rem;
          background: rgba(255, 255, 255, 0.075);
          color: rgba(255, 248, 236, 0.86);
          font-weight: 850;
        }

        .cs-contact-card {
          text-align: center;
        }

        .cs-contact-card p {
          max-width: 820px;
          margin: 1rem auto 0;
        }

        .cs-contact-list {
          justify-content: center;
        }

        .cs-footer {
          padding: 1rem 0 8.25rem;
          color: rgba(255, 248, 236, 0.62);
        }

        .cs-footer-inner {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          border-top: 1px solid var(--cs-line);
          padding-top: 1.35rem;
        }

        .cs-footer p {
          margin: 0;
        }

        .cs-audio-bank {
          display: none;
        }

        .cs-mini-player {
          position: fixed;
          right: 50%;
          bottom: 1rem;
          z-index: 90;
          display: grid;
          width: min(980px, calc(100% - 28px));
          grid-template-columns: 4rem minmax(130px, 1fr) 3rem minmax(180px, 1.15fr) minmax(120px, 0.55fr) 2.5rem;
          gap: 0.85rem;
          align-items: center;
          transform: translateX(50%);
          border-radius: 1.45rem;
          padding: 0.7rem;
        }

        .cs-mini-art {
          border-radius: 1rem;
          object-fit: cover;
        }

        .cs-mini-meta {
          min-width: 0;
        }

        .cs-mini-meta strong,
        .cs-mini-meta span,
        .cs-mini-meta small {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .cs-mini-meta span,
        .cs-mini-meta small,
        .cs-mini-progress span,
        .cs-mini-volume span {
          color: rgba(255, 248, 236, 0.66);
          font-size: 0.78rem;
        }

        .cs-mini-button {
          width: 3rem;
          height: 3rem;
        }

        .cs-mini-progress {
          display: grid;
          grid-template-columns: 2.75rem minmax(80px, 1fr) 2.75rem;
          gap: 0.5rem;
          align-items: center;
        }

        .cs-mini-volume {
          display: grid;
          gap: 0.25rem;
        }

        input[type="range"] {
          width: 100%;
          accent-color: var(--cs-blue);
        }

        .cs-mini-dismiss {
          width: 2.3rem;
          height: 2.3rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.1);
          color: var(--cs-ivory);
          font-size: 1.4rem;
          line-height: 1;
        }

        @keyframes csEqualize {
          0%,
          100% {
            height: 0.42rem;
          }
          50% {
            height: 1.35rem;
          }
        }

        @media (max-width: 980px) {
          .cs-hero-grid,
          .cs-featured-grid,
          .cs-about-grid {
            grid-template-columns: 1fr;
          }

          .cs-book-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .cs-about-copy {
            border-left: 0;
            padding-left: 0;
          }

          .cs-mini-player {
            grid-template-columns: 4rem minmax(0, 1fr) 3rem 2.5rem;
          }

          .cs-mini-progress,
          .cs-mini-volume {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 720px) {
          .cs-hero {
            padding-top: 4.25rem;
          }

          .cs-role,
          .cs-location,
          .cs-kicker {
            letter-spacing: 0.11em;
          }

          .cs-hero-actions,
          .cs-button {
            width: 100%;
          }

          .cs-track-row,
          .cs-track-row-featured {
            grid-template-columns: 3rem 4rem minmax(0, 1fr) 3.5rem;
          }

          .cs-track-mood,
          .cs-eq {
            grid-column: 3 / 4;
          }

          .cs-track-mood {
            grid-row: 2;
          }

          .cs-eq {
            justify-self: start;
            grid-row: 3;
          }

          .cs-track-time {
            grid-column: 4;
            grid-row: 1;
          }

          .cs-playlist-top {
            display: none;
          }

          .cs-book-grid {
            grid-template-columns: 1fr;
          }

          .cs-footer-inner {
            flex-direction: column;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
}
