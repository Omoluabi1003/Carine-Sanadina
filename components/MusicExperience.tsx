"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

export type Track = {
  id: string;
  title: string;
  description: string;
  duration: string;
  cover: string;
  audio: string;
};

type PlaybackState = "idle" | "loading" | "playing" | "paused" | "error";

const formatTime = (value: number) => {
  if (!Number.isFinite(value) || value < 0) return "0:00";
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};

function PlayGlyph({ isPlaying }: { isPlaying: boolean }) {
  return isPlaying ? (
    <span className="pause-glyph" aria-hidden="true">
      <span />
      <span />
    </span>
  ) : (
    <span className="play-glyph" aria-hidden="true" />
  );
}

export default function MusicExperience({ tracks }: { tracks: Track[] }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [activeId, setActiveId] = useState(tracks[0]?.id ?? "");
  const [playback, setPlayback] = useState<PlaybackState>("idle");
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  const activeTrack = useMemo(
    () => tracks.find((track) => track.id === activeId) ?? tracks[0],
    [activeId, tracks],
  );

  const isPlaying = playback === "playing";
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !activeTrack) return;

    const onLoadedMetadata = () => setDuration(audio.duration || 0);
    const onTimeUpdate = () => setCurrentTime(audio.currentTime || 0);
    const onWaiting = () => setPlayback("loading");
    const onPlaying = () => setPlayback("playing");
    const onPause = () => setPlayback(audio.currentTime > 0 ? "paused" : "idle");
    const onEnded = () => setPlayback("paused");
    const onError = () => setPlayback("error");

    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("waiting", onWaiting);
    audio.addEventListener("playing", onPlaying);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("error", onError);

    return () => {
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("waiting", onWaiting);
      audio.removeEventListener("playing", onPlaying);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("error", onError);
    };
  }, [activeTrack]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !activeTrack) return;

    audio.src = activeTrack.audio;
    audio.load();
    setCurrentTime(0);
    setDuration(0);
  }, [activeTrack]);

  const toggleTrack = async (track: Track) => {
    const audio = audioRef.current;
    if (!audio) return;

    setDismissed(false);

    if (track.id !== activeId) {
      setActiveId(track.id);
      setPlayback("loading");
      window.setTimeout(() => {
        audioRef.current
          ?.play()
          .then(() => setPlayback("playing"))
          .catch(() => setPlayback("error"));
      }, 0);
      return;
    }

    if (isPlaying) {
      audio.pause();
      setPlayback("paused");
      return;
    }

    setPlayback("loading");
    try {
      await audio.play();
      setPlayback("playing");
    } catch {
      setPlayback("error");
    }
  };

  const onSeek = (value: string) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const nextTime = (Number(value) / 100) * duration;
    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  if (!activeTrack) return null;

  return (
    <>
      <audio ref={audioRef} preload="metadata" aria-label={`${activeTrack.title} by Carine Sanadina`}>
        <source src={activeTrack.audio} type="audio/mpeg" />
      </audio>

      <section className="section featured-track" id="featured" aria-labelledby="featured-heading">
        <div className="container featured-grid">
          <motion.div
            className="featured-cover glass-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <Image
              src={tracks[0].cover}
              alt="La Gentillesse cover art"
              width={620}
              height={620}
              sizes="(max-width: 768px) 86vw, 42vw"
              className="featured-cover-image"
            />
          </motion.div>
          <motion.div
            className="featured-copy"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.08 }}
          >
            <p className="eyebrow">Featured Track</p>
            <h2 id="featured-heading">A gentle anthem for hearts learning to breathe again.</h2>
            <p>
              “La Gentillesse” opens the music experience with softness, gratitude, and a faith-filled invitation to choose kindness as strength.
            </p>
            <button className="button button-primary" type="button" onClick={() => toggleTrack(tracks[0])}>
              <PlayGlyph isPlaying={activeId === tracks[0].id && isPlaying} />
              {activeId === tracks[0].id && isPlaying ? "Pause La Gentillesse" : "Listen Now"}
            </button>
          </motion.div>
        </div>
      </section>

      <section className="section music-showcase" id="music" aria-labelledby="music-heading">
        <div className="container">
          <div className="section-heading center">
            <p className="eyebrow">Music Showcase</p>
            <h2 id="music-heading">Apple Music-inspired moments of praise, healing, and restoration.</h2>
            <p>Compact cinematic rows keep the focus on the song, the emotion, and a smooth in-browser listening experience.</p>
          </div>

          <div className="playlist-panel glass-card" aria-label="Carine Sanadina music playlist">
            <div className="playlist-header" aria-hidden="true">
              <span>Song</span>
              <span>Mood</span>
              <span>Time</span>
            </div>

            {tracks.map((track, index) => {
              const rowActive = track.id === activeId;
              return (
                <motion.article
                  className={`playlist-track ${rowActive ? "is-active" : ""}`}
                  key={track.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.05 }}
                >
                  <div className="track-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>
                  <Image
                    src={track.cover}
                    alt={`${track.title} cover art`}
                    width={76}
                    height={76}
                    sizes="76px"
                    className="track-cover"
                  />
                  <div className="track-meta">
                    <h3>{track.title}</h3>
                    <p>Carine Sanadina</p>
                  </div>
                  <p className="track-description">{track.description}</p>
                  <div className="track-duration">{track.duration}</div>
                  <button
                    className="track-play-toggle"
                    type="button"
                    aria-label={rowActive && isPlaying ? `Pause ${track.title}` : `Play ${track.title}`}
                    aria-pressed={rowActive && isPlaying}
                    onClick={() => toggleTrack(track)}
                  >
                    <PlayGlyph isPlaying={rowActive && isPlaying} />
                  </button>
                </motion.article>
              );
            })}
            <p className="audio-status" role="status" aria-live="polite">
              {playback === "error" ? "Audio could not start. Please try again." : playback === "loading" ? "Loading audio…" : ""}
            </p>
          </div>
        </div>
      </section>

      {!dismissed && activeTrack && playback !== "idle" ? (
        <aside className="mini-player" aria-label="Current track mini player">
          <div className="mini-player-shell glass-card">
            <Image
              src={activeTrack.cover}
              alt={`${activeTrack.title} cover art`}
              width={54}
              height={54}
              sizes="54px"
              className="mini-player-cover"
            />
            <div className="mini-player-meta">
              <p>{activeTrack.title}</p>
              <span>Carine Sanadina</span>
            </div>
            <button
              className="track-play-toggle mini-toggle"
              type="button"
              onClick={() => toggleTrack(activeTrack)}
              aria-label={isPlaying ? `Pause ${activeTrack.title}` : `Play ${activeTrack.title}`}
            >
              <PlayGlyph isPlaying={isPlaying} />
            </button>
            <div className="mini-time">
              <span>{formatTime(currentTime)}</span>
              <label className="sr-only" htmlFor="mini-player-progress">Current track progress</label>
              <input
                id="mini-player-progress"
                className="player-range progress-range"
                type="range"
                min="0"
                max="100"
                value={Number.isFinite(progress) ? progress : 0}
                step="0.1"
                onChange={(event) => onSeek(event.target.value)}
                aria-label="Current track progress"
              />
              <span>{duration ? formatTime(duration) : activeTrack.duration}</span>
            </div>
            <button className="mini-dismiss" type="button" onClick={() => setDismissed(true)} aria-label="Dismiss mini player">
              ×
            </button>
          </div>
        </aside>
      ) : null}
    </>
  );
}
