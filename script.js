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

const showImageFallback = (image) => {
  const fallback = document.getElementById(image.dataset.fallbackTarget);

  if (fallback) {
    fallback.classList.add('is-visible');
  }

  image.hidden = true;
};

remoteImages.forEach((image) => {
  image.addEventListener('error', () => showImageFallback(image));

  if (image.complete && image.naturalWidth === 0) {
    showImageFallback(image);
  }
});

const musicPlayer = document.querySelector('[data-audio-player]');

if (musicPlayer) {
  // TODO: Replace AUDIO_SRC with the hosted MP3 URL for “La Gentillesse”.
  const AUDIO_SRC = '';
  const audio = musicPlayer.querySelector('audio');
  const playToggle = musicPlayer.querySelector('[data-play-toggle]');
  const progress = musicPlayer.querySelector('[data-progress]');
  const volume = musicPlayer.querySelector('[data-volume]');
  const currentTime = musicPlayer.querySelector('[data-current-time]');
  const duration = musicPlayer.querySelector('[data-duration]');
  const status = musicPlayer.querySelector('[data-audio-status]');

  const formatTime = (seconds) => {
    if (!Number.isFinite(seconds) || seconds < 0) {
      return '0:00';
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${remainingSeconds}`;
  };

  const setRangeFill = (range, value, max) => {
    const percentage = max > 0 ? (Number(value) / Number(max)) * 100 : 0;
    range.style.setProperty('--range-progress', `${Math.min(Math.max(percentage, 0), 100)}%`);
  };

  const setPlayerReadyState = (isReady) => {
    musicPlayer.classList.toggle('is-ready', isReady);
    playToggle.disabled = !isReady;
    progress.disabled = !isReady;

    if (status && isReady) {
      status.textContent = '';
    }
  };

  setRangeFill(progress, progress.value, progress.max);
  setRangeFill(volume, volume.value, volume.max);
  setPlayerReadyState(Boolean(AUDIO_SRC));

  if (audio && AUDIO_SRC) {
    audio.src = AUDIO_SRC;
    audio.volume = Number(volume.value);

    audio.addEventListener('loadedmetadata', () => {
      duration.textContent = formatTime(audio.duration);
      progress.max = Number.isFinite(audio.duration) ? String(audio.duration) : '100';
      setRangeFill(progress, progress.value, progress.max);
    });

    audio.addEventListener('timeupdate', () => {
      currentTime.textContent = formatTime(audio.currentTime);
      progress.value = String(audio.currentTime);
      setRangeFill(progress, progress.value, progress.max);
    });

    audio.addEventListener('play', () => {
      playToggle.textContent = 'Pause';
      musicPlayer.classList.add('is-playing');
    });

    audio.addEventListener('pause', () => {
      playToggle.textContent = 'Play Track';
      musicPlayer.classList.remove('is-playing');
    });

    audio.addEventListener('ended', () => {
      playToggle.textContent = 'Play Track';
      musicPlayer.classList.remove('is-playing');
      progress.value = '0';
      setRangeFill(progress, progress.value, progress.max);
    });

    audio.addEventListener('error', () => {
      setPlayerReadyState(false);
      playToggle.textContent = 'Play Track';
      musicPlayer.classList.remove('is-playing');

      if (status) {
        status.textContent = 'Audio is temporarily unavailable. Please check back soon.';
      }
    });

    playToggle.addEventListener('click', async () => {
      if (audio.paused) {
        try {
          await audio.play();
        } catch (error) {
          if (status) {
            status.textContent = 'Audio playback could not start. Please try again.';
          }
        }
      } else {
        audio.pause();
      }
    });

    progress.addEventListener('input', () => {
      audio.currentTime = Number(progress.value);
      currentTime.textContent = formatTime(audio.currentTime);
      setRangeFill(progress, progress.value, progress.max);
    });

    volume.addEventListener('input', () => {
      audio.volume = Number(volume.value);
      setRangeFill(volume, volume.value, volume.max);
    });
  } else {
    playToggle.textContent = 'Play Track';
    volume.disabled = true;
  }
}
