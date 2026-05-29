const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navLinks.classList.toggle('is-open');
    document.body.classList.toggle('nav-open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('is-open');
      document.body.classList.remove('nav-open');
    });
  });
}

const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}

const remoteImages = document.querySelectorAll('img[data-fallback-target]');

const setImageFallbackState = (image, isFallbackVisible) => {
  const fallback = document.getElementById(image.dataset.fallbackTarget);

  if (fallback) {
    fallback.classList.toggle('is-visible', isFallbackVisible);
  }

  image.classList.toggle('has-load-error', isFallbackVisible);
  image.toggleAttribute('aria-hidden', isFallbackVisible);
};

remoteImages.forEach((image) => {
  image.addEventListener('load', () => setImageFallbackState(image, false));
  image.addEventListener('error', () => setImageFallbackState(image, true));

  // Cached failed images can be complete before listeners attach. Defer the check so
  // lazily-loaded images are not mistaken for errors before the browser requests them.
  window.setTimeout(() => {
    if (image.complete && image.naturalWidth === 0) {
      setImageFallbackState(image, true);
    }
  }, 0);
});

const musicPlayers = Array.from(document.querySelectorAll('[data-audio-player]'));
const miniPlayer = document.querySelector('[data-mini-player]');

if (musicPlayers.length) {
  const formatTime = (seconds) => {
    if (!Number.isFinite(seconds) || seconds < 0) {
      return '0:00';
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${remainingSeconds}`;
  };

  const setRangeFill = (range, value, max) => {
    if (!range) {
      return;
    }

    const numericMax = Number(max);
    const percentage = numericMax > 0 ? (Number(value) / numericMax) * 100 : 0;
    range.style.setProperty('--range-progress', `${Math.min(Math.max(percentage, 0), 100)}%`);
  };

  const mini = miniPlayer
    ? {
        cover: miniPlayer.querySelector('[data-mini-cover]'),
        title: miniPlayer.querySelector('[data-mini-title]'),
        artist: miniPlayer.querySelector('[data-mini-artist]'),
        toggle: miniPlayer.querySelector('[data-mini-toggle]'),
        progress: miniPlayer.querySelector('[data-mini-progress]'),
        current: miniPlayer.querySelector('[data-mini-current]'),
        duration: miniPlayer.querySelector('[data-mini-duration]'),
        volume: miniPlayer.querySelector('[data-mini-volume]')
      }
    : null;

  let activePlayer = null;

  const updateToggle = (button, audio, title) => {
    if (!button) {
      return;
    }

    const isPlaying = audio && !audio.paused;
    button.setAttribute('aria-label', `${isPlaying ? 'Pause' : 'Play'} ${title}`);
  };

  const syncMiniProgress = (audio) => {
    if (!mini || !audio) {
      return;
    }

    const max = Number.isFinite(audio.duration) ? audio.duration : 100;
    mini.current.textContent = formatTime(audio.currentTime);
    mini.duration.textContent = Number.isFinite(audio.duration) ? formatTime(audio.duration) : '0:00';
    mini.progress.max = String(max);
    mini.progress.value = String(audio.currentTime);
    setRangeFill(mini.progress, mini.progress.value, mini.progress.max);
  };

  const showMiniPlayer = (player) => {
    if (!mini || !miniPlayer) {
      return;
    }

    const audio = player.querySelector('audio');
    activePlayer = player;
    miniPlayer.classList.add('is-visible');
    miniPlayer.setAttribute('aria-hidden', 'false');
    miniPlayer.classList.toggle('is-playing', audio && !audio.paused);
    mini.cover.src = player.dataset.trackCover;
    mini.cover.alt = `${player.dataset.trackTitle} cover art`;
    mini.cover.referrerPolicy = 'no-referrer';
    mini.title.textContent = player.dataset.trackTitle;
    mini.artist.textContent = player.dataset.trackArtist;
    mini.volume.value = String(audio.volume);
    setRangeFill(mini.volume, mini.volume.value, mini.volume.max);
    syncMiniProgress(audio);
    updateToggle(mini.toggle, audio, player.dataset.trackTitle);
  };

  const pauseOtherPlayers = (currentPlayer) => {
    musicPlayers.forEach((player) => {
      if (player === currentPlayer) {
        return;
      }

      const audio = player.querySelector('audio');

      if (audio && !audio.paused) {
        audio.pause();
      }
    });
  };

  const playAudio = async (player) => {
    const audio = player.querySelector('audio');
    const status = player.querySelector('[data-audio-status]');

    if (!audio) {
      return;
    }

    pauseOtherPlayers(player);
    showMiniPlayer(player);

    try {
      await audio.play();
      if (status) {
        status.textContent = '';
      }
    } catch (error) {
      if (status) {
        status.textContent = 'Audio playback could not start. Please try again.';
      }
    }
  };

  musicPlayers.forEach((musicPlayer) => {
    const audioSrc = musicPlayer.dataset.audioSrc;
    const title = musicPlayer.dataset.trackTitle;
    const audio = musicPlayer.querySelector('audio');
    const playToggle = musicPlayer.querySelector('[data-play-toggle]');
    const duration = musicPlayer.querySelector('[data-duration]');
    const status = musicPlayer.querySelector('[data-audio-status]');

    const syncDuration = () => {
      if (!Number.isFinite(audio.duration)) {
        return;
      }

      duration.textContent = formatTime(audio.duration);

      if (activePlayer === musicPlayer) {
        syncMiniProgress(audio);
      }
    };

    const setPlayerReadyState = (isReady) => {
      musicPlayer.classList.toggle('is-ready', isReady);
      playToggle.disabled = !isReady;

      if (status && isReady) {
        status.textContent = '';
      }
    };

    setPlayerReadyState(Boolean(audio && audioSrc));

    if (audio && audioSrc) {
      audio.src = audioSrc;
      audio.volume = mini && mini.volume ? Number(mini.volume.value) : 0.85;

      audio.addEventListener('loadedmetadata', syncDuration);
      audio.addEventListener('durationchange', syncDuration);

      audio.addEventListener('timeupdate', () => {
        if (activePlayer === musicPlayer) {
          syncMiniProgress(audio);
        }
      });

      audio.addEventListener('play', () => {
        musicPlayer.classList.add('is-playing');
        showMiniPlayer(musicPlayer);
        updateToggle(playToggle, audio, title);
      });

      audio.addEventListener('pause', () => {
        musicPlayer.classList.remove('is-playing');
        updateToggle(playToggle, audio, title);

        if (activePlayer === musicPlayer && miniPlayer) {
          miniPlayer.classList.remove('is-playing');
          updateToggle(mini.toggle, audio, title);
        }
      });

      audio.addEventListener('ended', () => {
        musicPlayer.classList.remove('is-playing');
        audio.currentTime = 0;
        updateToggle(playToggle, audio, title);

        if (activePlayer === musicPlayer && miniPlayer) {
          miniPlayer.classList.remove('is-playing');
          syncMiniProgress(audio);
          updateToggle(mini.toggle, audio, title);
        }
      });

      audio.addEventListener('error', () => {
        setPlayerReadyState(false);
        musicPlayer.classList.remove('is-playing');

        if (status) {
          status.textContent = 'Audio is temporarily unavailable. Please check back soon.';
        }
      });

      playToggle.addEventListener('click', () => {
        if (audio.paused) {
          playAudio(musicPlayer);
        } else {
          audio.pause();
        }
      });
    } else if (playToggle) {
      playToggle.disabled = true;
    }
  });

  if (mini) {
    setRangeFill(mini.progress, mini.progress.value, mini.progress.max);
    setRangeFill(mini.volume, mini.volume.value, mini.volume.max);

    mini.toggle.addEventListener('click', () => {
      if (!activePlayer) {
        return;
      }

      const audio = activePlayer.querySelector('audio');

      if (audio.paused) {
        playAudio(activePlayer);
      } else {
        audio.pause();
      }
    });

    mini.progress.addEventListener('input', () => {
      if (!activePlayer) {
        return;
      }

      const audio = activePlayer.querySelector('audio');
      audio.currentTime = Number(mini.progress.value);
      syncMiniProgress(audio);
    });

    mini.volume.addEventListener('input', () => {
      musicPlayers.forEach((player) => {
        const audio = player.querySelector('audio');

        if (audio) {
          audio.volume = Number(mini.volume.value);
        }
      });

      setRangeFill(mini.volume, mini.volume.value, mini.volume.max);
    });
  }
}
