/* Progressive content relationships, routing, analytics, and newsletter enhancements.
 * This module never owns or recreates audio; the existing player remains authoritative. */
(() => {
  'use strict';

  const THEMES = Object.freeze(['healing', 'faith', 'hope', 'resilience', 'restoration', 'relationships', 'red_flags', 'domestic_violence_awareness', 'encouragement', 'gratitude', 'women_empowerment', 'starting_over']);
  const books = [
    { id: 'pain-nobody-saw', type: 'book', title: 'The Pain Nobody Saw', href: 'https://www.amazon.com/Pain-Nobody-Saw-Hidden-Survival/dp/B0GPDL1BN3', themes: ['healing', 'resilience', 'domestic_violence_awareness', 'starting_over'] },
    { id: 'if-its-red-toxic', type: 'book', title: 'If It’s Red, It’s Toxic', href: 'https://www.amazon.com/If-Its-Red-Toxic/dp/B0GPDLJNH9', themes: ['relationships', 'red_flags', 'domestic_violence_awareness'] },
    { id: 'road-to-sunshine', type: 'book', title: 'The Road to Sunshine', href: 'https://www.amazon.co.uk/Road-Sunshine-journey-struggles-faith-ebook/dp/B071FSC8K6', themes: ['faith', 'hope', 'resilience', 'encouragement'] },
    { id: 'after-the-storm', type: 'book', title: 'After The Storm', href: 'https://a.co/d/02rwYihN', themes: ['healing', 'restoration', 'starting_over', 'hope'] }
  ];
  const tracks = [
    ['consolation', 'Consolation', 'Healing comfort', '', 'Consolation Cover.png', ['healing', 'hope', 'encouragement'], 'consolation-and-courage'],
    ['gentillesse', 'La Gentillesse', 'Faith-filled kindness', '', 'La Gentillesse.png', ['faith', 'encouragement', 'women_empowerment'], 'kindness-as-practice'],
    ['wonderful', 'Wonderful', 'Joyful praise and gratitude', '', 'Wonderful cover.png', ['gratitude', 'faith', 'hope'], 'road-to-sunshine-faith'],
    ['womanifesto', 'Womanifesto', 'Soukous · Rumba · Makossa Gospel', '', '4B4AE259-EC5A-46A2-BB9A-355667A3C23C.png', ['women_empowerment', 'resilience', 'restoration'], 'after-the-storm-restoration'],
    ['paranoia-persecutive', 'Paranoïa Persécutive', 'Cinematic French', 'French', '00243680-B36E-4587-8623-9AEFD1896D1A.png', ['red_flags', 'relationships', 'resilience'], 'red-flags-peace'],
    ['reason', 'Reason', 'Afropop', '', 'D60D546C-83C3-401A-8C56-3B48FD5022E0.png', ['gratitude', 'hope', 'starting_over'], 'road-to-sunshine-faith'],
    ['halleluyah', 'Halleluyah', 'Gospel Worship', 'Lingala', 'Halleluyah Cover.png', ['faith', 'hope', 'gratitude'], 'road-to-sunshine-faith'],
    ['hosanna', 'Hosanna', 'Gospel Worship', '', 'Hosanna.jpg', ['faith', 'hope', 'encouragement'], 'road-to-sunshine-faith'],
    ['matondo', 'Matondo', 'Gospel Praise', '', 'Matondo.jpeg', ['gratitude', 'faith', 'hope'], 'road-to-sunshine-faith']
  ].map(([id, title, genre, language, artwork, themes, reflection]) => ({ id, slug: id, type: 'track', title, artist: 'Carine Sanadina', genre, language, artwork, themes, relatedReflection: reflection }));
  const reflections = (window.reflectionArticles || []).map((item) => ({
    id: item.slug, type: 'reflection', title: item.slug.split('-').map((word) => word[0].toUpperCase() + word.slice(1)).join(' '), href: `#reflection-${item.slug}`,
    themes: item.slug.includes('red-flags') ? ['red_flags', 'relationships'] : item.slug.includes('sunshine') ? ['faith', 'hope'] : item.slug.includes('storm') ? ['restoration', 'starting_over'] : item.slug.includes('kindness') ? ['encouragement', 'women_empowerment'] : ['healing', 'resilience', 'encouragement']
  }));
  const connections = [
    { id: 'advocacy', type: 'connection', title: 'Explore advocacy and awareness', href: '#advocacy-speaking', themes: ['domestic_violence_awareness', 'red_flags', 'women_empowerment'] },
    { id: 'speaking', type: 'connection', title: 'Invite Carine to speak', href: '#contact', themes: THEMES }
  ];
  const catalog = Object.freeze({ books, tracks, reflections, connections });
  window.CarineContent = catalog;

  const allowedEvents = new Set(['visitor_started_song','visitor_completed_song','visitor_paused_song','visitor_shared_song','visitor_opened_track','visitor_opened_book','visitor_clicked_buy_book','visitor_opened_reflection','visitor_completed_reflection','visitor_selected_healing_topic','visitor_opened_healing_recommendation','visitor_requested_speaking','visitor_opened_contact','visitor_downloaded_press_kit','visitor_changed_language','visitor_opened_video','visitor_installed_pwa']);
  const allowedProperties = new Set(['content_id','content_type','track_id','book_id','reflection_id','language','recommendation_topic','source_section','destination_section','playback_completion_bucket']);
  const analytics = {
    provider: null,
    setProvider(provider) { this.provider = provider && typeof provider.track === 'function' ? provider : null; },
    track(name, properties = {}) {
      if (!allowedEvents.has(name)) return false;
      const safe = {};
      Object.entries(properties).forEach(([key, value]) => { if (allowedProperties.has(key) && ['string', 'number', 'boolean'].includes(typeof value)) safe[key] = value; });
      try { this.provider?.track(name, safe); } catch (_) { /* Analytics must never affect the experience. */ }
      if (/localhost|127\.0\.0\.1/.test(location.hostname)) console.debug('[Carine analytics]', name, safe);
      return true;
    }
  };
  analytics.setProvider(window.CarineAnalyticsProvider);
  window.CarineAnalytics = analytics;

  const scrollTo = (hash) => {
    const target = document.querySelector(hash);
    if (!target) return;
    target.hidden = false;
    target.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  };

  const intentThemes = {
    encouragement: ['encouragement', 'hope'], rebuilding: ['starting_over', 'restoration'], red_flags: ['red_flags', 'relationships'],
    reflection_music: ['healing', 'faith'], faith: ['faith', 'hope'], speaking: ['women_empowerment', 'encouragement']
  };
  const pick = (items, themes) => items.find((item) => themes.some((theme) => item.themes.includes(theme))) || items[0];
  const recommend = (topic) => {
    const themes = intentThemes[topic] || intentThemes.encouragement;
    return [pick(books, themes), pick(tracks, themes), pick(reflections, themes), topic === 'speaking' ? connections[1] : pick(connections, themes)].filter(Boolean);
  };
  window.CarineHealingJourney = { recommend, topics: Object.freeze(Object.keys(intentThemes)) };

  const openTrack = (slug, { historyMode = 'push' } = {}) => {
    const track = tracks.find((item) => item.slug === slug);
    if (!track) return false;
    const url = new URL(location.href);
    url.searchParams.set('track', track.slug);
    url.hash = 'music';
    if (historyMode === 'replace') history.replaceState({ ...history.state, carineTrack: slug }, '', url);
    else if (historyMode === 'push') history.pushState({ ...history.state, carineTrack: slug }, '', url);
    renderStudio(track);
    window.dispatchEvent(new CustomEvent('carine:selecttrack', { detail: { trackId: track.id, autoplay: false } }));
    analytics.track('visitor_opened_track', { track_id: track.id, content_id: track.id, content_type: 'track', source_section: 'studio' });
    scrollTo('#music');
    return true;
  };

  const studio = document.querySelector('[data-studio-view]');
  const picker = document.querySelector('[data-studio-track-picker]');
  const renderStudio = (track) => {
    if (!studio || !track) return;
    const art = studio.querySelector('[data-studio-artwork]');
    art.src = encodeURI(track.artwork); art.alt = `${track.title} artwork`;
    studio.querySelector('[data-studio-title]').textContent = track.title;
    studio.querySelector('[data-studio-meta]').textContent = [track.artist, track.genre, track.language].filter(Boolean).join(' · ');
    studio.querySelector('[data-studio-description]').textContent = `Discover ${track.title} alongside a reflection and the next song in Carine’s story, sound, reflection and connection journey.`;
    if (picker) picker.value = track.slug;
    const related = studio.querySelector('[data-studio-related]');
    const reflection = reflections.find((item) => item.id === track.relatedReflection);
    const book = pick(books, track.themes);
    const next = tracks[(tracks.indexOf(track) + 1) % tracks.length];
    related.replaceChildren();
    [[reflection, 'Related reflection'], [book, 'Related book'], [next, 'Next track']].forEach(([item, label]) => {
      if (!item) return;
      const button = document.createElement(item.type === 'book' ? 'a' : 'button');
      button.className = 'studio-related__item'; button.textContent = `${label}: ${item.title}`;
      if (item.type === 'book') { button.href = item.href; button.target = '_blank'; button.rel = 'noopener noreferrer'; }
      else { button.type = 'button'; button.addEventListener('click', () => item.type === 'track' ? openTrack(item.slug) : (analytics.track('visitor_opened_reflection', { reflection_id: item.id, content_id: item.id, content_type: 'reflection', source_section: 'studio' }), scrollTo(item.href))); }
      related.append(button);
    });
  };
  if (picker) {
    picker.replaceChildren(...tracks.map((track) => Object.assign(document.createElement('option'), { value: track.slug, textContent: track.title })));
    picker.addEventListener('change', () => openTrack(picker.value));
  }
  document.querySelector('[data-studio-share]')?.addEventListener('click', async () => {
    const track = tracks.find((item) => item.slug === picker?.value) || tracks[0];
    const shareUrl = new URL(location.href); shareUrl.searchParams.set('track', track.slug); shareUrl.hash = 'music';
    try { if (navigator.share) await navigator.share({ title: `${track.title} — Carine Sanadina`, url: shareUrl.href }); else await navigator.clipboard.writeText(shareUrl.href); analytics.track('visitor_shared_song', { track_id: track.id }); }
    catch (_) { /* Cancellation and clipboard restrictions are harmless. */ }
  });

  document.querySelector('[data-discovery-choices]')?.addEventListener('click', (event) => {
    const button = event.target.closest('[data-healing-topic]'); if (!button) return;
    const topic = button.dataset.healingTopic;
    const section = document.querySelector('#healing-journey'); const results = section?.querySelector('[data-healing-results]'); if (!section || !results) return;
    analytics.track('visitor_selected_healing_topic', { recommendation_topic: topic, source_section: 'discovery' });
    const labels = ['Read', 'Listen', 'Reflect', 'Connect'];
    results.replaceChildren(...recommend(topic).map((item, index) => {
      const card = document.createElement('article'); card.className = 'healing-result';
      const eyebrow = document.createElement('p'); eyebrow.className = 'eyebrow'; eyebrow.textContent = labels[index];
      const title = document.createElement('h3'); title.textContent = item.title;
      const action = document.createElement('button'); action.type = 'button'; action.className = 'text-link'; action.textContent = `Open ${labels[index]}`;
      action.addEventListener('click', () => {
        analytics.track('visitor_opened_healing_recommendation', { content_id: item.id, content_type: item.type, recommendation_topic: topic, source_section: 'healing-journey' });
        if (item.type === 'track') openTrack(item.slug);
        else if (item.type === 'book') window.open(item.href, '_blank', 'noopener,noreferrer');
        else scrollTo(item.href);
      });
      card.append(eyebrow, title, action); return card;
    }));
    section.hidden = false; section.querySelector('[data-healing-summary]').textContent = `Four existing places to begin, chosen for “${button.textContent.trim()}”.`;
    history.pushState({ ...history.state, healingTopic: topic }, '', `#healing-journey?topic=${encodeURIComponent(topic)}`.replace('#healing-journey?', '?').replace(/^(\?[^#]+)$/, '$1#healing-journey'));
    scrollTo('#healing-journey'); section.querySelector('h2')?.focus({ preventScroll: true });
  });

  const initialTrack = new URL(location.href).searchParams.get('track');
  const validInitial = tracks.find((track) => track.slug === initialTrack);
  if (validInitial) openTrack(validInitial.slug, { historyMode: 'replace' });
  else { renderStudio(tracks[0]); if (initialTrack) { const url = new URL(location.href); url.searchParams.delete('track'); history.replaceState(history.state, '', url); } }
  addEventListener('popstate', () => { const slug = new URL(location.href).searchParams.get('track'); const track = tracks.find((item) => item.slug === slug); if (track) openTrack(slug, { historyMode: 'none' }); else renderStudio(tracks[0]); });

  document.addEventListener('play', (event) => { const player = event.target.closest?.('[data-audio-player]'); if (player) analytics.track('visitor_started_song', { track_id: player.dataset.trackId }); }, true);
  document.addEventListener('pause', (event) => { const player = event.target.closest?.('[data-audio-player]'); if (player && !event.target.ended) analytics.track('visitor_paused_song', { track_id: player.dataset.trackId }); }, true);
  document.addEventListener('ended', (event) => { const player = event.target.closest?.('[data-audio-player]'); if (player) analytics.track('visitor_completed_song', { track_id: player.dataset.trackId, playback_completion_bucket: '100' }); }, true);
  document.addEventListener('click', (event) => {
    const book = event.target.closest('.book-button'); if (book) { const item = books.find((candidate) => candidate.href === book.href); analytics.track('visitor_clicked_buy_book', { book_id: item?.id || 'book', source_section: 'works' }); }
    if (event.target.closest('#contact a')) analytics.track('visitor_opened_contact', { destination_section: 'contact' });
    if (event.target.closest('#contact a[href^="tel:"]')) analytics.track('visitor_requested_speaking', { source_section: 'contact' });
  });
  addEventListener('carine:languagechange', () => analytics.track('visitor_changed_language', { language: document.documentElement.lang || 'en' }));
  addEventListener('appinstalled', () => analytics.track('visitor_installed_pwa'));

  const circle = document.querySelector('[data-circle]'); const circlePanel = circle?.querySelector('[data-circle-panel]'); const circleOpen = circle?.querySelector('[data-circle-open]');
  const endpoint = typeof window.CARINE_NEWSLETTER_ENDPOINT === 'string' ? window.CARINE_NEWSLETTER_ENDPOINT : '';
  const setCircleOpen = (open) => { if (!circlePanel || !circleOpen) return; circlePanel.hidden = !open; circleOpen.setAttribute('aria-expanded', String(open)); };
  circleOpen?.addEventListener('click', () => setCircleOpen(circlePanel.hidden));
  circle?.querySelector('[data-circle-dismiss]')?.addEventListener('click', () => { setCircleOpen(false); circle.hidden = true; try { sessionStorage.setItem('carine-circle-dismissed', '1'); } catch (_) {} });
  try { if (sessionStorage.getItem('carine-circle-dismissed') === '1' && circle) circle.hidden = true; } catch (_) { /* Session storage may be disabled. */ }
  const form = circle?.querySelector('[data-circle-form]'); const status = circle?.querySelector('[data-circle-status]');
  if (form && !endpoint) { form.querySelector('button[type="submit"]').disabled = true; status.textContent = 'Subscription sign-up will be available soon.'; }
  form?.addEventListener('submit', async (event) => {
    event.preventDefault(); if (!endpoint) return;
    const email = form.elements.email.value.trim(); if (!form.elements.email.checkValidity()) { status.textContent = 'Please enter a valid email address.'; form.elements.email.focus(); return; }
    const submit = form.querySelector('button[type="submit"]'); submit.disabled = true; status.textContent = 'Joining the circle…';
    try { const response = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) }); if (!response.ok) throw new Error('Subscription failed'); form.reset(); status.textContent = 'Thank you. You’re in the circle.'; }
    catch (_) { status.textContent = 'We could not subscribe you just now. Please try again later.'; }
    finally { submit.disabled = false; }
  });
})();
