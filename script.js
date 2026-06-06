const CARINE_STORAGE_PREFIX = 'carine-sanadina';
const getCarineStorageKey = (suffix) => `${CARINE_STORAGE_PREFIX}-${suffix}`;
const LANGUAGE_STORAGE_KEY = getCarineStorageKey('language');
const PLAYER_STATE_STORAGE_KEY = getCarineStorageKey('player-state');
const DEFAULT_LANGUAGE = 'en';
const APP_VERSION = 'carine-site-2026-06-06-halleluyah-catalog';
const APP_VERSION_STORAGE_KEY = getCarineStorageKey('app-version');
const PLAYLIST_VERSION = APP_VERSION;

const translations = {};

translations.en = {
  'html.lang': 'en',
  'meta.title': 'Carine Sanadina | Author, Survivor Advocate & Healing Voice | Jacksonville, FL',
  'meta.description': 'Carine Sanadina is a Jacksonville-based author, healing voice, survivor advocate, and artist whose work centers on faith, emotional restoration, resilience, women’s empowerment, and healing after adversity.',
  'meta.ogTitle': 'Carine Sanadina | Author, Survivor Advocate & Healing Voice | Jacksonville, FL',
  'meta.ogDescription': 'Discover Carine Sanadina’s healing-centered books, music, reflections, advocacy, and media voice rooted in faith, resilience, and emotional restoration.',
  'meta.twitterDescription': 'Jacksonville-based author, healing voice, survivor advocate, and artist creating books, music, and reflections for faith, restoration, and resilience.',
  'language.label': 'Language',
  'language.selectorLabel': 'Choose website language',
  'a11y.skip': 'Skip to main content',
  'splash.enterApp': 'Enter App',
  'a11y.primaryNav': 'Primary navigation',
  'a11y.home': 'Carine Sanadina home',
  'a11y.toggleNav': 'Toggle navigation',
  'a11y.primaryCta': 'Primary calls to action',
  'nav.about': 'About',
  'nav.works': 'Books',
  'nav.home': 'Home',
  'nav.books': 'Books',
  'nav.press': 'Press Kit',
  'nav.music': 'Music',
  'nav.reflections': 'Reflections',
  'nav.focus': 'Focus Areas',
  'nav.positioning': 'Professional Voice',
  'nav.contact': 'Contact',
  'hero.location': 'Jacksonville, Florida',
  'hero.subtitle': 'Healthcare Professional | Author | Survivor Advocate | Emotional Wellness Voice',
  'hero.heading': 'Turning pain into healing, survival into purpose, and stories into restoration.',
  'hero.viewWorks': 'View Books',
  'hero.listenMusic': 'Listen to Music',
  'hero.readReflections': 'Read Reflections',
  'hero.contactCarine': 'Contact Carine',
  'portrait.figureLabel': 'Carine Sanadina official portrait feature',
  'portrait.alt': 'Carine Sanadina official portrait',
  'portrait.fallback': 'Carine Sanadina official portrait is temporarily unavailable.',
  'portrait.caption': 'Official portrait of Carine Sanadina — healing-centered stories with courage, faith, and restoration.',
  'about.kicker': 'About Carine',
  'about.heading': 'A voice of resilience, restoration, and human-centered healing.',
  'about.body1': 'Carine Sanadina is a Congolese-born, Jacksonville-based healthcare professional, author, artist, and survivor advocate whose work transforms lived pain into healing-centered literature and inspiration.',
  'about.body2': 'Her work explores domestic violence survival, toxic relationships, emotional wounds, faith, resilience, motherhood, immigrant experience, and the journey from brokenness to restoration.',
  'about.keyFacts': 'Key facts: Carine Sanadina serves from Jacksonville, Florida as a healthcare professional, author, artist, survivor advocate, and emotional wellness voice for domestic violence awareness, faith and restoration.',
  'works.kicker': 'Books',
  'works.heading': 'Books that turn testimony into light.',
  'works.intro': 'Elegant, intimate, and brave reflections for readers seeking language for survival, recovery, faith, and renewed self-worth.',
  'buttons.buyAmazon': 'Buy on Amazon',
  'books.pain.coverLabel': 'The Pain Nobody Saw book cover by Carine Sanadina',
  'books.pain.kicker': 'Memoir',
  'books.pain.coverTitle': 'The Pain Nobody Saw',
  'books.pain.title': 'The Pain Nobody Saw: A Hidden Story of Abuse and Survival',
  'books.pain.description': 'A raw memoir exposing the hidden reality of domestic abuse, cultural pressure, silent suffering, and the courageous path toward freedom, faith, and reclaimed self-worth.',
  'books.toxic.coverLabel': 'If It’s Red, It’s Toxic book cover by Carine Sanadina',
  'books.toxic.kicker': 'Guide',
  'books.toxic.coverTitle': 'If It’s Red, It’s Toxic',
  'books.toxic.title': 'If It’s Red, It’s Toxic',
  'books.toxic.description': 'A bold guide to recognizing warning signs, emotional manipulation, spiritual danger, unhealthy attachments, and patterns that slowly drain peace, clarity, and purpose.',
  'books.sunshine.coverLabel': 'The Road to Sunshine book cover by Carine Sanadina',
  'books.sunshine.kicker': 'Faith & Hope',
  'books.sunshine.coverTitle': 'The Road to Sunshine',
  'books.sunshine.title': 'The Road to Sunshine: A Journey of Struggles, Faith and Hope',
  'books.sunshine.description': 'A hope-filled reflection on enduring struggle, holding onto faith, and continuing the journey toward brighter days even when the road feels uncertain.',
  'books.storm.coverLabel': 'After The Storm book cover by Carine Sanadina',
  'books.storm.kicker': 'Restoration',
  'books.storm.coverTitle': 'After The Storm',
  'books.storm.title': 'After The Storm',
  'books.storm.description': 'A restoration-centered work honoring the quiet strength that follows hardship, helping readers look beyond survival toward healing, peace, and renewed possibility.',
  'music.kicker': 'Music Showcase',
  'music.heading': 'Music by Carine Sanadina',
  'music.intro': 'A compact premium playlist of songs shaped by faith, tenderness, restoration, and praise.',
  'music.disclaimer': 'Music and media are presented for promotional listening and artist visibility. Rights remain with their respective owners. Unauthorized copying, redistribution, or commercial use is prohibited.',
  'music.playlistLabel': 'Carine Sanadina music playlist',
  'music.playlist': 'Playlist',
  'music.time': 'Time',
  'music.duration': 'Duration:',
  'tracks.consolation.title': 'Consolation',
  'tracks.consolation.audioLabel': 'Consolation by Carine Sanadina',
  'tracks.consolation.coverAlt': 'Consolation cover art',
  'tracks.consolation.fallback': 'Consolation cover art is temporarily unavailable.',
  'tracks.consolation.number': 'Track 01',
  'tracks.consolation.description': 'Healing-centered comfort and hope',
  'consolationSynopsis': 'A worship anthem declaring Christ as comfort, refuge, and King.',
  'tracks.consolation.playLabel': 'Play Consolation',
  'tracks.gentillesse.title': 'La Gentillesse',
  'tracks.gentillesse.audioLabel': 'La Gentillesse by Carine Sanadina',
  'tracks.gentillesse.coverAlt': 'La Gentillesse cover art',
  'tracks.gentillesse.fallback': 'La Gentillesse cover art is temporarily unavailable.',
  'tracks.gentillesse.number': 'Track 02',
  'tracks.gentillesse.description': 'Faith-filled kindness anthem',
  'laGentillesseSynopsis': 'A celebration of kindness, compassion, and the power of grace.',
  'tracks.gentillesse.playLabel': 'Play La Gentillesse',
  'tracks.wonderful.title': 'Wonderful',
  'tracks.wonderful.audioLabel': 'Wonderful by Carine Sanadina',
  'tracks.wonderful.coverAlt': 'Wonderful cover art',
  'tracks.wonderful.fallback': 'Wonderful cover art is temporarily unavailable.',
  'tracks.wonderful.number': 'Track 03',
  'tracks.wonderful.description': 'Joyful praise and gratitude',
  'wonderfulSynopsis': 'A joyful testimony of God’s goodness, faithfulness, and love.',
  'tracks.wonderful.playLabel': 'Play Wonderful',
  'tracks.womanifesto.title': 'Womanifesto',
  'tracks.womanifesto.audioLabel': 'Womanifesto by Carine Sanadina',
  'tracks.womanifesto.coverAlt': 'Womanifesto cover art',
  'tracks.womanifesto.fallback': 'Womanifesto cover art is temporarily unavailable.',
  'tracks.womanifesto.number': 'Track 04',
  'tracks.womanifesto.shortDescription': 'A soulful African gospel anthem celebrating feminine resilience, healing, grace, and victory through faith.',
  'tracks.womanifesto.description': 'A soulful African gospel anthem celebrating feminine resilience, healing, grace, and victory through faith.',
  'womanifestoSynopsis': 'A declaration of healing, resilience, and grace for women rising stronger.',
  'tracks.womanifesto.playLabel': 'Play Womanifesto',
  'tracks.paranoia.title': 'Paranoïa Persécutive',
  'tracks.paranoia.audioLabel': 'Paranoïa Persécutive by Carine Sanadina',
  'tracks.paranoia.coverAlt': 'Paranoïa Persécutive cover art',
  'tracks.paranoia.fallback': 'Paranoïa Persécutive cover art is temporarily unavailable.',
  'tracks.paranoia.number': 'Track 05',
  'tracks.paranoia.shortDescription': 'A cinematic French track exploring intuition, protection, and survival-minded awareness, where vigilance becomes both warning and wisdom.',
  'tracks.paranoia.description': 'A cinematic French track exploring intuition, protection, and survival-minded awareness, where vigilance becomes both warning and wisdom.',
  'paranoiaPersecutiveSynopsis': 'A cinematic reflection on intuition, vigilance, and spiritual discernment.',
  'tracks.paranoia.playLabel': 'Play Paranoïa Persécutive',
  'tracks.reason.title': 'Reason',
  'tracks.reason.audioLabel': 'Reason by Carine Sanadina',
  'tracks.reason.coverAlt': 'Reason cover art',
  'tracks.reason.fallback': 'Reason cover art is temporarily unavailable.',
  'tracks.reason.number': 'Track 06',
  'tracks.reason.description': 'A joyful Afropop celebration of purpose, hustle, and the reason behind every season of growth.',
  'tracks.reason.about': 'Reason captures Carine Sanadina’s vibrant message of purpose, movement, and gratitude. It blends everyday hustle with celebratory energy, reminding listeners that every step, every dance, and every season of growth carries meaning.',
  'reasonSynopsis': 'A joyful Afropop celebration of purpose, hustle, and the reason behind every season of growth.',
  'tracks.reason.credits': 'Artist: Carine Sanadina\nProduced by Omoluabi Productions\nPresented by Omoluabi Productions',
  'tracks.reason.playLabel': 'Play Reason',
  'mini.label': 'Current track mini player',
  'mini.noTrack': 'No track selected',
  'mini.toggleLabel': 'Play or pause current track',
  'mini.progress': 'Current track progress',
  'mini.volumeShort': 'Vol',
  'mini.volume': 'Current track volume',
  'audio.play': 'Play',
  'audio.pause': 'Pause',
  'audio.coverArt': 'cover art',
  'audio.playbackError': 'Audio playback could not start. Please try again.',
  'audio.unavailable': 'Audio is temporarily unavailable. Please check back soon.',
  'focus.kicker': 'Core Focus Areas',
  'focus.heading': 'The themes at the heart of Carine’s work.',
  'focus.gridLabel': 'Core focus areas',
  'focus.pills.domestic': 'Domestic Violence Awareness',
  'focus.pills.healing': 'Emotional Healing',
  'focus.pills.toxic': 'Toxic Relationship Recovery',
  'focus.pills.faith': 'Faith and Resilience',
  'focus.pills.women': 'Women’s Empowerment',
  'focus.pills.selfWorth': 'Self-Worth and Identity',
  'focus.pills.immigrant': 'Immigrant and Refugee Experience',
  'focus.pills.motherhood': 'Motherhood and Survival',
  'focus.pills.writing': 'Inspirational Writing',
  'focus.pills.care': 'Human-Centered Care',
  'positioning.kicker': 'Professional Positioning',
  'positioning.heading': 'Compassionate care and inspirational authorship.',
  'positioning.healthcare.title': 'Healthcare Professional',
  'positioning.healthcare.body': 'Provides compassionate, patient-centered support in a healthcare environment, bringing empathy, professionalism, and human understanding to daily service.',
  'positioning.author.title': 'Author and Inspirational Voice',
  'positioning.author.body': 'Writes books and reflective content centered on survival, healing, faith, toxic relationship awareness, emotional restoration, and personal transformation.',
  'quote.label': 'Featured quote',
  'quote.text': '“Pain may shape the story, but it does not get to own the ending.”',
  'cta.kicker': 'Begin the conversation',
  'cta.heading': 'Invite the voice. Share the story. Build a healing-centered moment.',
  'cta.body': 'Choose the gentlest path for your invitation—speaking, advocacy collaboration, media conversation, music partnership, or a book-centered gathering shaped by resilience, faith, and restoration.',
  'cta.pathsLabel': 'Inquiry types',
  'cta.path.speaking': 'Speaking inquiries',
  'cta.path.advocacy': 'Advocacy collaborations',
  'cta.path.media': 'Media & interview requests',
  'cta.path.music': 'Music collaborations',
  'cta.disclaimer': 'This website does not establish agency, management, publishing, partnership, employment, or legal representation. Collaboration or booking discussions require separate written agreement.',
  'cta.optionsLabel': 'Contact options',
  'cta.invite': 'Invite Carine to Speak',
  'cta.media': 'Request Media Interview',
  'cta.music': 'Discuss Music Collaboration',
  'cta.books': 'Book Conversation',
  'legal.metaTitle': 'Legal / Terms | Carine Sanadina',
  'legal.metaDescription': 'Legal and ownership notices for the Carine Sanadina website, including platform ownership, artist materials, media use, and contact guidance.',
  'legal.metaOgDescription': 'Legal and ownership notices for the Carine Sanadina website platform and approved artist materials.',
  'legal.kicker': 'Legal / Terms',
  'legal.heading': 'Website Ownership and Use Notice',
  'legal.intro': 'These notices clarify ownership, authorized use, and representation boundaries for the Carine Sanadina website while keeping the experience respectful, collaborative, and transparent.',
  'legal.ariaLabel': 'Legal terms and ownership notices',
  'legal.ownership.title': 'Ownership and Platform Notice',
  'legal.ownership.body': 'The digital presentation and website platform are operated under ETL GIS Consulting LLC. Omoluabi Productions serves as the creative production identity for the website concept, design, structure, code implementation, visual direction, digital experience, layout, and creative presentation. Unless otherwise stated, the website platform and related digital presentation elements are owned or controlled by ETL GIS Consulting LLC.',
  'legal.ip.title': 'Intellectual Property',
  'legal.ip.body': 'All website layouts, interface styling, code, copy presentation, and platform-level creative direction may not be copied, reused, modified, redistributed, or commercially exploited without written permission from ETL GIS Consulting LLC or the appropriate rights holder. Third-party, artist-owned, or separately credited materials remain with their respective owners.',
  'legal.artist.title': 'Artist Materials and Likeness',
  'legal.artist.body': 'Carine Sanadina retains ownership or control of her personal identity, approved likeness, books, music, biographical story, and artist-related materials where applicable. Display of Carine Sanadina’s name, image, works, music, or biography on this website is for promotional and informational purposes based on approved collaboration materials.',
  'legal.noAgency.title': 'No Agency or Management Representation',
  'legal.noAgency.body': 'Nothing on this website creates an agency, management, publishing, record-label, employment, partnership, or legal representation relationship between Carine Sanadina, Omoluabi Productions, and ETL GIS Consulting LLC unless a separate written agreement expressly states otherwise. Omoluabi Productions is not presented as a separate registered company, record label, manager, agent, publisher, or legal representative.',
  'legal.music.title': 'Music and Media Use',
  'legal.music.body': 'Music, images, text, audio, artwork, video, and other media are presented for promotional visibility, informational context, and approved artist presentation. Rights remain with their respective owners. Unauthorized copying, downloading, reuse, modification, redistribution, public posting, or commercial exploitation is prohibited without written permission from the appropriate rights holder.',
  'legal.websiteUse.title': 'Website Use',
  'legal.websiteUse.body': 'Visitors may view the website for personal, informational, and promotional discovery purposes. Use of the website must not interfere with site operation, misrepresent the relationship of any party, or imply endorsement, representation, or permission that has not been separately granted in writing.',
  'legal.liability.title': 'Limitation of Liability',
  'legal.liability.body': 'The website is provided as a promotional and informational digital presentation. ETL GIS Consulting LLC reserves the right to update, remove, revise, suspend, or discontinue any part of the website or media presentation. To the extent permitted by law, ETL GIS Consulting LLC is not responsible for indirect, incidental, or consequential issues arising from website use, availability, third-party links, or media playback.',
  'legal.takedown.title': 'Takedown or Correction Requests',
  'legal.takedown.body': 'Requests for correction, removal, rights concerns, media questions, or ownership clarification should be sent through the website contact section. Please include enough detail to identify the specific material and the nature of the request so it can be reviewed appropriately.',
  'legal.takedown.link': 'Go to contact section',
  'legal.entity.title': 'Governing Entity',
  'legal.entity.body': 'ETL GIS Consulting LLC is the legally registered entity associated with operation and control of the website platform and digital presentation. Omoluabi Productions functions as a creative/media project brand operated under ETL GIS Consulting LLC and is not currently represented on this website as a separate registered legal entity.',
  'footer.rights': '© 2026 Carine Sanadina. All Rights Reserved.',
  'footer.navLabel': 'Footer navigation',
  'footer.legal': 'Legal / Terms',
  'footer.credit': 'Website concept, design, and digital presentation by Omoluabi Productions, a creative project operated under ETL GIS Consulting LLC.'
};

translations.fr = {
  ...translations.en,
  'html.lang': 'fr',
  'meta.title': 'Carine Sanadina | Professionnelle de santé, autrice et voix des survivantes',
  'meta.description': 'Carine Sanadina est une professionnelle de santé, autrice, défenseure des survivantes et voix du bien-être émotionnel basée à Jacksonville, en Floride.',
  'meta.ogTitle': 'Carine Sanadina | Autrice centrée sur la guérison et défenseure des survivantes',
  'meta.ogDescription': 'Découvrez les livres, le plaidoyer et la voix de bien-être émotionnel de Carine Sanadina, professionnelle de santé et autrice d’origine congolaise basée à Jacksonville, en Floride.',
  'meta.twitterDescription': 'Transformer la douleur en guérison, la survie en mission, et les histoires en restauration.',
  'language.label': 'Langue',
  'language.selectorLabel': 'Choisir la langue du site',
  'a11y.skip': 'Aller au contenu principal',
  'splash.enterApp': 'Entrer dans l’application',
  'a11y.primaryNav': 'Navigation principale',
  'a11y.home': 'Accueil Carine Sanadina',
  'a11y.toggleNav': 'Ouvrir ou fermer la navigation',
  'a11y.primaryCta': 'Appels à l’action principaux',
  'nav.about': 'À propos',
  'nav.works': 'Œuvres',
  'nav.music': 'Musique',
  'nav.focus': 'Axes clés',
  'nav.positioning': 'Voix professionnelle',
  'nav.contact': 'Contact',
  'hero.subtitle': 'Professionnelle de santé | Autrice | Défenseure des survivantes | Voix du bien-être émotionnel',
  'hero.heading': 'Transformer la douleur en guérison, la survie en mission, et les histoires en restauration.',
  'hero.viewWorks': 'Voir les œuvres',
  'hero.listenMusic': 'Écouter la musique',
  'hero.contactCarine': 'Contacter Carine',
  'portrait.figureLabel': 'Portrait officiel de Carine Sanadina',
  'portrait.alt': 'Portrait officiel de Carine Sanadina',
  'portrait.fallback': 'Le portrait officiel de Carine Sanadina est temporairement indisponible.',
  'portrait.caption': 'Portrait officiel de Carine Sanadina — des récits de guérison portés par le courage, la foi et la restauration.',
  'about.kicker': 'À propos de Carine',
  'about.heading': 'Une voix de résilience, de restauration et de guérison centrée sur l’humain.',
  'about.body1': 'Née au Congo et basée à Jacksonville, Carine Sanadina est professionnelle de santé, autrice, artiste et défenseure des survivantes; son travail transforme la douleur vécue en littérature et inspiration centrées sur la guérison.',
  'about.body2': 'Son œuvre explore la survie après les violences domestiques, les relations toxiques, les blessures émotionnelles, la foi, la résilience, la maternité, l’expérience immigrée et le chemin de la brisure vers la restauration.',
  'about.keyFacts': 'Repères clés : Carine Sanadina sert depuis Jacksonville, en Floride, comme professionnelle de santé, autrice, artiste, défenseure des survivantes et voix du bien-être émotionnel pour la sensibilisation aux violences domestiques, la foi et la restauration.',
  'works.kicker': 'Œuvres en vedette',
  'works.heading': 'Des livres qui transforment le témoignage en lumière.',
  'works.intro': 'Des réflexions élégantes, intimes et courageuses pour les lecteurs qui cherchent des mots pour la survie, la reconstruction, la foi et une estime de soi renouvelée.',
  'buttons.buyAmazon': 'Acheter sur Amazon',
  'books.pain.coverLabel': 'The Pain Nobody Saw book cover by Carine Sanadina',
  'books.pain.kicker': 'Mémoire',
  'books.pain.title': 'La douleur que personne n’a vue : une histoire cachée d’abus et de survie',
  'books.pain.description': 'Un mémoire brut qui révèle la réalité cachée des violences domestiques, des pressions culturelles, de la souffrance silencieuse et du courage nécessaire pour retrouver liberté, foi et dignité.',
  'books.toxic.coverLabel': 'If It’s Red, It’s Toxic book cover by Carine Sanadina',
  'books.toxic.kicker': 'Guide',
  'books.toxic.title': 'Si c’est rouge, c’est toxique',
  'books.toxic.description': 'Un guide audacieux pour reconnaître les signaux d’alerte, la manipulation émotionnelle, les dangers spirituels, les attachements malsains et les schémas qui épuisent la paix, la clarté et le but.',
  'books.sunshine.coverLabel': 'The Road to Sunshine book cover by Carine Sanadina',
  'books.sunshine.kicker': 'Foi et espoir',
  'books.sunshine.title': 'La route vers le soleil : un voyage de luttes, de foi et d’espoir',
  'books.sunshine.description': 'Une réflexion pleine d’espoir sur la persévérance dans l’épreuve, l’attachement à la foi et la marche vers des jours plus lumineux même lorsque la route semble incertaine.',
  'books.storm.coverLabel': 'After The Storm book cover by Carine Sanadina',
  'books.storm.kicker': 'Restauration',
  'books.storm.title': 'Après la tempête',
  'books.storm.description': 'Une œuvre centrée sur la restauration qui honore la force silencieuse après l’épreuve et aide les lecteurs à regarder au-delà de la survie vers la guérison, la paix et de nouvelles possibilités.',
  'music.kicker': 'Vitrine musicale',
  'music.heading': 'Musique de Carine Sanadina',
  'music.intro': 'Une playlist premium compacte de chansons façonnées par la foi, la tendresse, la restauration et la louange.',
  'music.disclaimer': 'La musique et les médias sont présentés pour une écoute promotionnelle et la visibilité de l’artiste. Les droits restent à leurs propriétaires respectifs. Toute copie, redistribution ou utilisation commerciale non autorisée est interdite.',
  'music.playlistLabel': 'Playlist musicale de Carine Sanadina',
  'music.playlist': 'Playlist',
  'music.time': 'Durée',
  'music.duration': 'Durée :',
  'tracks.consolation.coverAlt': 'Pochette de Consolation',
  'tracks.consolation.fallback': 'La pochette de Consolation est temporairement indisponible.',
  'tracks.consolation.number': 'Titre 01',
  'tracks.consolation.description': 'Réconfort et espoir centrés sur la guérison',
  'consolationSynopsis': 'Un chant d’adoration proclamant le Christ comme consolation, refuge et Roi.',
  'tracks.consolation.playLabel': 'Lire Consolation',
  'tracks.gentillesse.coverAlt': 'Pochette de La Gentillesse',
  'tracks.gentillesse.fallback': 'La pochette de La Gentillesse est temporairement indisponible.',
  'tracks.gentillesse.number': 'Titre 02',
  'tracks.gentillesse.description': 'Hymne de bonté porté par la foi',
  'laGentillesseSynopsis': 'Une célébration de la gentillesse, de la compassion et de la puissance de la grâce.',
  'tracks.gentillesse.playLabel': 'Lire La Gentillesse',
  'tracks.wonderful.coverAlt': 'Pochette de Wonderful',
  'tracks.wonderful.fallback': 'La pochette de Wonderful est temporairement indisponible.',
  'tracks.wonderful.number': 'Titre 03',
  'tracks.wonderful.description': 'Louange joyeuse et gratitude',
  'wonderfulSynopsis': 'Un témoignage joyeux de la bonté, de la fidélité et de l’amour de Dieu.',
  'tracks.wonderful.playLabel': 'Lire Wonderful',
  'tracks.womanifesto.audioLabel': 'Womanifesto de Carine Sanadina',
  'tracks.womanifesto.coverAlt': 'Pochette de Womanifesto',
  'tracks.womanifesto.fallback': 'La pochette de Womanifesto est temporairement indisponible.',
  'tracks.womanifesto.number': 'Titre 04',
  'tracks.womanifesto.shortDescription': 'Un hymne gospel africain plein d’âme qui célèbre la résilience féminine, la guérison, la grâce et la victoire par la foi.',
  'tracks.womanifesto.description': 'Un hymne gospel africain plein d’âme qui célèbre la résilience féminine, la guérison, la grâce et la victoire par la foi.',
  'womanifestoSynopsis': 'Une déclaration de guérison, de résilience et de grâce pour les femmes qui se relèvent.',
  'tracks.womanifesto.playLabel': 'Lire Womanifesto',
  'tracks.paranoia.title': 'Paranoïa Persécutive',
  'tracks.paranoia.audioLabel': 'Paranoïa Persécutive de Carine Sanadina',
  'tracks.paranoia.coverAlt': 'Pochette de Paranoïa Persécutive',
  'tracks.paranoia.fallback': 'La pochette de Paranoïa Persécutive est temporairement indisponible.',
  'tracks.paranoia.number': 'Titre 05',
  'tracks.paranoia.shortDescription': 'Un morceau français cinématographique sur l’intuition, la protection et la conscience de survie, où la vigilance devient à la fois avertissement et sagesse.',
  'tracks.paranoia.description': 'Un morceau français cinématographique sur l’intuition, la protection et la conscience de survie, où la vigilance devient à la fois avertissement et sagesse.',
  'paranoiaPersecutiveSynopsis': 'Une réflexion cinématographique sur l’intuition, la vigilance et le discernement spirituel.',
  'tracks.paranoia.playLabel': 'Lire Paranoïa Persécutive',
  'mini.label': 'Mini lecteur du titre en cours',
  'mini.noTrack': 'Aucun titre sélectionné',
  'mini.toggleLabel': 'Lire ou mettre en pause le titre en cours',
  'mini.progress': 'Progression du titre en cours',
  'mini.volumeShort': 'Vol',
  'mini.volume': 'Volume du titre en cours',
  'audio.play': 'Lire',
  'audio.pause': 'Pause',
  'audio.coverArt': 'pochette',
  'audio.playbackError': 'La lecture audio n’a pas pu démarrer. Veuillez réessayer.',
  'audio.unavailable': 'L’audio est temporairement indisponible. Veuillez revenir bientôt.',
  'focus.kicker': 'Axes clés',
  'focus.heading': 'Les thèmes au cœur du travail de Carine.',
  'focus.gridLabel': 'Axes clés',
  'focus.pills.domestic': 'Sensibilisation aux violences domestiques',
  'focus.pills.healing': 'Guérison émotionnelle',
  'focus.pills.toxic': 'Reconstruction après les relations toxiques',
  'focus.pills.faith': 'Foi et résilience',
  'focus.pills.women': 'Autonomisation des femmes',
  'focus.pills.selfWorth': 'Estime de soi et identité',
  'focus.pills.immigrant': 'Expérience immigrée et réfugiée',
  'focus.pills.motherhood': 'Maternité et survie',
  'focus.pills.writing': 'Écriture inspirante',
  'focus.pills.care': 'Soin centré sur l’humain',
  'positioning.kicker': 'Positionnement professionnel',
  'positioning.heading': 'Soins compatissants et écriture inspirante.',
  'positioning.healthcare.title': 'Professionnelle de santé',
  'positioning.healthcare.body': 'Elle offre un accompagnement compatissant et centré sur le patient dans un environnement de santé, avec empathie, professionnalisme et compréhension humaine au quotidien.',
  'positioning.author.title': 'Autrice et voix inspirante',
  'positioning.author.body': 'Elle écrit des livres et des réflexions centrés sur la survie, la guérison, la foi, la sensibilisation aux relations toxiques, la restauration émotionnelle et la transformation personnelle.',
  'quote.label': 'Citation en vedette',
  'quote.text': '« La douleur peut façonner l’histoire, mais elle n’a pas le droit d’en posséder la fin. »',
  'cta.kicker': 'Commencer la conversation',
  'cta.heading': 'Inviter la voix. Partager l’histoire. Créer un moment centré sur la guérison.',
  'cta.body': 'Choisissez un parcours de demande premium pour des invitations à parler, des interviews, des collaborations créatives ou des conversations intimes façonnées par la résilience, la foi et la restauration.',
  'cta.disclaimer': 'Ce site Web n’établit aucune relation d’agence, de gestion, d’édition, de partenariat, d’emploi ou de représentation juridique. Les discussions de collaboration ou de réservation nécessitent un accord écrit distinct.',
  'cta.optionsLabel': 'Options de contact',
  'cta.invite': 'Inviter Carine à parler',
  'cta.media': 'Demander une interview média',
  'cta.music': 'Discuter d’une collaboration musicale',
  'cta.books': 'Réserver une conversation',
  'legal.metaTitle': 'Mentions légales / Conditions | Carine Sanadina',
  'legal.metaDescription': 'Mentions légales et avis de propriété pour le site Web de Carine Sanadina, incluant la propriété de la plateforme, les éléments artistiques, l’utilisation des médias et les indications de contact.',
  'legal.metaOgDescription': 'Mentions légales et avis de propriété pour la plateforme Web de Carine Sanadina et les éléments artistiques approuvés.',
  'legal.kicker': 'Mentions légales / Conditions',
  'legal.heading': 'Avis sur la propriété et l’utilisation du site Web',
  'legal.intro': 'Ces avis précisent la propriété, l’usage autorisé et les limites de représentation du site Web de Carine Sanadina, dans un esprit respectueux, collaboratif et transparent.',
  'legal.ariaLabel': 'Mentions légales et avis de propriété',
  'legal.ownership.title': 'Avis de propriété et de plateforme',
  'legal.ownership.body': 'Le concept, le design, la structure, la mise en œuvre du code, la direction visuelle, l’expérience numérique, la mise en page et la présentation créative du site Web sont produits et gérés par Omoluabi Productions, un projet créatif exploité sous ETL GIS Consulting LLC. Sauf indication contraire, la plateforme du site Web et les éléments de présentation numérique associés sont détenus ou contrôlés par ETL GIS Consulting LLC.',
  'legal.ip.title': 'Propriété intellectuelle',
  'legal.ip.body': 'Les mises en page du site Web, le style de l’interface, le code, la présentation des textes et la direction créative au niveau de la plateforme ne peuvent pas être copiés, réutilisés, modifiés, redistribués ou exploités commercialement sans autorisation écrite d’ETL GIS Consulting LLC ou du titulaire des droits approprié. Les éléments de tiers, appartenant à l’artiste ou crédités séparément restent la propriété de leurs détenteurs respectifs.',
  'legal.artist.title': 'Éléments artistiques et image',
  'legal.artist.body': 'Carine Sanadina conserve la propriété ou le contrôle de son identité personnelle, de son image approuvée, de ses livres, de sa musique, de son récit biographique et de ses éléments liés à l’artiste, le cas échéant. L’affichage du nom, de l’image, des œuvres, de la musique ou de la biographie de Carine Sanadina sur ce site Web est destiné à des fins promotionnelles et informatives, sur la base d’éléments de collaboration approuvés.',
  'legal.noAgency.title': 'Aucune représentation d’agence ou de gestion',
  'legal.noAgency.body': 'Rien sur ce site Web ne crée une relation d’agence, de gestion, d’édition, de label musical, d’emploi, de partenariat ou de représentation juridique entre Carine Sanadina, Omoluabi Productions et ETL GIS Consulting LLC, sauf si un accord écrit séparé l’indique expressément. Omoluabi Productions n’est pas présenté comme une société enregistrée distincte, un label, un gestionnaire, un agent, un éditeur ou un représentant juridique.',
  'legal.music.title': 'Utilisation de la musique et des médias',
  'legal.music.body': 'La musique, les images, les textes, l’audio, les œuvres graphiques, les vidéos et autres médias sont présentés pour la visibilité promotionnelle, le contexte informatif et la présentation artistique approuvée. Les droits restent à leurs propriétaires respectifs. Toute copie, téléchargement, réutilisation, modification, redistribution, publication publique ou exploitation commerciale non autorisée est interdite sans autorisation écrite du titulaire des droits approprié.',
  'legal.websiteUse.title': 'Utilisation du site Web',
  'legal.websiteUse.body': 'Les visiteurs peuvent consulter le site Web à des fins personnelles, informatives et de découverte promotionnelle. L’utilisation du site Web ne doit pas perturber son fonctionnement, dénaturer la relation entre les parties, ni laisser entendre une approbation, une représentation ou une autorisation qui n’a pas été accordée séparément par écrit.',
  'legal.liability.title': 'Limitation de responsabilité',
  'legal.liability.body': 'Le site Web est fourni comme une présentation numérique promotionnelle et informative. ETL GIS Consulting LLC se réserve le droit de mettre à jour, retirer, réviser, suspendre ou interrompre toute partie du site Web ou de la présentation des médias. Dans la mesure permise par la loi, ETL GIS Consulting LLC n’est pas responsable des problèmes indirects, accessoires ou consécutifs découlant de l’utilisation du site Web, de sa disponibilité, des liens de tiers ou de la lecture des médias.',
  'legal.takedown.title': 'Demandes de retrait ou de correction',
  'legal.takedown.body': 'Les demandes de correction, de retrait, les préoccupations relatives aux droits, les questions sur les médias ou les clarifications de propriété doivent être envoyées via la section contact du site Web. Veuillez inclure suffisamment de détails pour identifier l’élément concerné et la nature de la demande afin qu’elle puisse être examinée correctement.',
  'legal.takedown.link': 'Aller à la section contact',
  'legal.entity.title': 'Entité responsable',
  'legal.entity.body': 'ETL GIS Consulting LLC est l’entité légalement enregistrée associée à l’exploitation et au contrôle de la plateforme du site Web et de la présentation numérique. Omoluabi Productions fonctionne comme une marque de projet créatif/média exploitée sous ETL GIS Consulting LLC et n’est pas actuellement présenté sur ce site Web comme une entité juridique enregistrée distincte.',
  'footer.rights': '© 2026 Carine Sanadina. Tous droits réservés.',
  'footer.navLabel': 'Navigation du pied de page',
  'footer.legal': 'Mentions légales / Conditions',
  'footer.credit': 'Concept, design et présentation numérique du site par Omoluabi Productions, un projet créatif exploité sous ETL GIS Consulting LLC.'
};

translations.es = {
  ...translations.en,
  'html.lang': 'es',
  'meta.title': 'Carine Sanadina | Profesional de salud, autora y defensora de sobrevivientes',
  'language.label': 'Idioma',
  'language.selectorLabel': 'Elegir idioma del sitio',
  'a11y.skip': 'Saltar al contenido principal',
  'splash.enterApp': 'Entrar a la aplicación',
  'a11y.primaryNav': 'Navegación principal',
  'a11y.home': 'Inicio de Carine Sanadina',
  'a11y.toggleNav': 'Alternar navegación',
  'nav.about': 'Acerca de',
  'nav.works': 'Obras destacadas',
  'nav.music': 'Música',
  'nav.focus': 'Áreas de enfoque',
  'nav.positioning': 'Voz profesional',
  'nav.contact': 'Contacto',
  'a11y.primaryCta': 'Llamadas principales a la acción',
  'portrait.figureLabel': 'Retrato oficial de Carine Sanadina',
  'portrait.alt': 'Retrato oficial de Carine Sanadina',
  'hero.subtitle': 'Profesional de salud | Autora | Defensora de sobrevivientes | Voz de bienestar emocional',
  'hero.heading': 'Transformar el dolor en sanación, la supervivencia en propósito y las historias en restauración.',
  'hero.viewWorks': 'Ver obras destacadas',
  'hero.listenMusic': 'Escuchar música',
  'hero.contactCarine': 'Contactar a Carine',
  'portrait.fallback': 'El retrato oficial de Carine Sanadina no está disponible temporalmente.',
  'portrait.caption': 'Retrato oficial de Carine Sanadina — historias centradas en la sanación con valentía, fe y restauración.',
  'about.kicker': 'Acerca de Carine',
  'about.heading': 'Una voz de resiliencia, restauración y sanación centrada en la humanidad.',
  'about.body1': 'Carine Sanadina, nacida en el Congo y radicada en Jacksonville, es profesional de salud, autora, artista y defensora de sobrevivientes cuyo trabajo transforma el dolor vivido en literatura e inspiración centradas en la sanación.',
  'about.body2': 'Su obra explora la supervivencia a la violencia doméstica, las relaciones tóxicas, las heridas emocionales, la fe, la resiliencia, la maternidad, la experiencia inmigrante y el camino de la ruptura hacia la restauración.',
  'about.keyFacts': 'Datos clave: Carine Sanadina sirve desde Jacksonville, Florida, como profesional de salud, autora, artista, defensora de sobrevivientes y voz de bienestar emocional para la conciencia sobre la violencia doméstica, la fe y la restauración.',
  'works.kicker': 'Obras destacadas',
  'works.heading': 'Libros que convierten el testimonio en luz.',
  'works.intro': 'Reflexiones elegantes, íntimas y valientes para lectores que buscan lenguaje para la supervivencia, la recuperación, la fe y una autoestima renovada.',
  'buttons.buyAmazon': 'Comprar en Amazon',
  'books.pain.coverLabel': 'The Pain Nobody Saw book cover by Carine Sanadina',
  'books.toxic.coverLabel': 'If It’s Red, It’s Toxic book cover by Carine Sanadina',
  'books.toxic.kicker': 'Guía',
  'books.sunshine.coverLabel': 'The Road to Sunshine book cover by Carine Sanadina',
  'books.sunshine.kicker': 'Fe y esperanza',
  'books.storm.coverLabel': 'After The Storm book cover by Carine Sanadina',
  'books.storm.kicker': 'Restauración',
  'books.pain.kicker': 'Memorias',
  'books.pain.title': 'El dolor que nadie vio: una historia oculta de abuso y supervivencia',
  'books.pain.description': 'Unas memorias crudas que revelan la realidad oculta del abuso doméstico, la presión cultural, el sufrimiento silencioso y el camino valiente hacia la libertad, la fe y la autoestima recuperada.',
  'books.toxic.title': 'Si es rojo, es tóxico',
  'books.toxic.description': 'Una guía audaz para reconocer señales de alerta, manipulación emocional, peligro espiritual, vínculos malsanos y patrones que agotan lentamente la paz, la claridad y el propósito.',
  'books.sunshine.kicker': 'Fe y esperanza',
  'books.sunshine.title': 'El camino hacia el sol: un viaje de luchas, fe y esperanza',
  'books.sunshine.description': 'Una reflexión llena de esperanza sobre resistir la lucha, aferrarse a la fe y continuar hacia días más luminosos aun cuando el camino parezca incierto.',
  'books.storm.title': 'Después de la tormenta',
  'books.storm.description': 'Una obra centrada en la restauración que honra la fuerza silenciosa que sigue a la dificultad y ayuda a mirar más allá de sobrevivir hacia la sanación, la paz y nuevas posibilidades.',
  'music.kicker': 'Muestra musical',
  'music.heading': 'Música de Carine Sanadina',
  'music.intro': 'Una playlist premium compacta de canciones marcadas por la fe, la ternura, la restauración y la alabanza.',
  'music.disclaimer': 'La música y los medios se presentan para escucha promocional y visibilidad artística. Los derechos permanecen con sus respectivos propietarios. Se prohíbe la copia, redistribución o uso comercial no autorizado.',
  'music.time': 'Tiempo',
  'music.duration': 'Duración:',
  'music.playlistLabel': 'Playlist musical de Carine Sanadina',
  'tracks.consolation.audioLabel': 'Consolation de Carine Sanadina',
  'tracks.consolation.coverAlt': 'Portada de Consolation',
  'tracks.consolation.fallback': 'La portada de Consolation no está disponible temporalmente.',
  'tracks.consolation.number': 'Pista 01',
  'tracks.consolation.description': 'Consuelo y esperanza centrados en la sanación',
  'consolationSynopsis': 'Un himno de adoración que proclama a Cristo como consuelo, refugio y Rey.',
  'tracks.consolation.playLabel': 'Reproducir Consolation',
  'tracks.gentillesse.audioLabel': 'La Gentillesse de Carine Sanadina',
  'tracks.gentillesse.coverAlt': 'Portada de La Gentillesse',
  'tracks.gentillesse.fallback': 'La portada de La Gentillesse no está disponible temporalmente.',
  'tracks.gentillesse.number': 'Pista 02',
  'tracks.gentillesse.description': 'Himno de bondad lleno de fe',
  'laGentillesseSynopsis': 'Una celebración de la bondad, la compasión y el poder de la gracia.',
  'tracks.gentillesse.playLabel': 'Reproducir La Gentillesse',
  'tracks.wonderful.audioLabel': 'Wonderful de Carine Sanadina',
  'tracks.wonderful.coverAlt': 'Portada de Wonderful',
  'tracks.wonderful.fallback': 'La portada de Wonderful no está disponible temporalmente.',
  'tracks.wonderful.number': 'Pista 03',
  'tracks.wonderful.description': 'Alabanza alegre y gratitud',
  'wonderfulSynopsis': 'Un alegre testimonio de la bondad, fidelidad y amor de Dios.',
  'tracks.wonderful.playLabel': 'Reproducir Wonderful',
  'tracks.womanifesto.audioLabel': 'Womanifesto de Carine Sanadina',
  'tracks.womanifesto.coverAlt': 'Portada de Womanifesto',
  'tracks.womanifesto.fallback': 'La portada de Womanifesto no está disponible temporalmente.',
  'tracks.womanifesto.number': 'Pista 04',
  'tracks.womanifesto.shortDescription': 'Un himno gospel africano con alma que celebra la resiliencia femenina, la sanación, la gracia y la victoria por la fe.',
  'tracks.womanifesto.description': 'Un himno gospel africano con alma que celebra la resiliencia femenina, la sanación, la gracia y la victoria por la fe.',
  'womanifestoSynopsis': 'Una declaración de sanación, resiliencia y gracia para mujeres que se levantan más fuertes.',
  'tracks.womanifesto.playLabel': 'Reproducir Womanifesto',
  'tracks.paranoia.title': 'Paranoïa Persécutive',
  'tracks.paranoia.audioLabel': 'Paranoïa Persécutive de Carine Sanadina',
  'tracks.paranoia.coverAlt': 'Portada de Paranoïa Persécutive',
  'tracks.paranoia.fallback': 'La portada de Paranoïa Persécutive no está disponible temporalmente.',
  'tracks.paranoia.number': 'Pista 05',
  'tracks.paranoia.shortDescription': 'Una pista francesa cinematográfica sobre intuición, protección y conciencia de supervivencia, donde la vigilancia se vuelve advertencia y sabiduría.',
  'tracks.paranoia.description': 'Una pista francesa cinematográfica sobre intuición, protección y conciencia de supervivencia, donde la vigilancia se vuelve advertencia y sabiduría.',
  'paranoiaPersecutiveSynopsis': 'Una reflexión cinematográfica sobre la intuición, la vigilancia y el discernimiento espiritual.',
  'tracks.paranoia.playLabel': 'Reproducir Paranoïa Persécutive',
  'mini.label': 'Minirreproductor de la pista actual',
  'mini.noTrack': 'No hay pista seleccionada',
  'mini.toggleLabel': 'Reproducir o pausar la pista actual',
  'mini.progress': 'Progreso de la pista actual',
  'mini.volume': 'Volumen de la pista actual',
  'audio.play': 'Reproducir',
  'audio.pause': 'Pausar',
  'audio.coverArt': 'portada',
  'audio.playbackError': 'No se pudo iniciar la reproducción de audio. Inténtalo de nuevo.',
  'audio.unavailable': 'El audio no está disponible temporalmente. Vuelve pronto.',
  'focus.kicker': 'Áreas de enfoque',
  'focus.gridLabel': 'Áreas de enfoque principales',
  'focus.heading': 'Los temas en el corazón del trabajo de Carine.',
  'focus.pills.domestic': 'Conciencia sobre la violencia doméstica',
  'focus.pills.healing': 'Sanación emocional',
  'focus.pills.toxic': 'Recuperación de relaciones tóxicas',
  'focus.pills.faith': 'Fe y resiliencia',
  'focus.pills.women': 'Empoderamiento de las mujeres',
  'focus.pills.selfWorth': 'Autoestima e identidad',
  'focus.pills.immigrant': 'Experiencia inmigrante y refugiada',
  'focus.pills.motherhood': 'Maternidad y supervivencia',
  'focus.pills.writing': 'Escritura inspiradora',
  'focus.pills.care': 'Cuidado centrado en la persona',
  'positioning.kicker': 'Posicionamiento profesional',
  'positioning.heading': 'Cuidado compasivo y autoría inspiradora.',
  'positioning.healthcare.title': 'Profesional de salud',
  'positioning.healthcare.body': 'Brinda apoyo compasivo y centrado en el paciente en un entorno de salud, aportando empatía, profesionalismo y comprensión humana al servicio diario.',
  'positioning.author.title': 'Autora y voz inspiradora',
  'positioning.author.body': 'Escribe libros y contenido reflexivo centrado en la supervivencia, la sanación, la fe, la conciencia sobre relaciones tóxicas, la restauración emocional y la transformación personal.',
  'quote.label': 'Cita destacada',
  'quote.text': '“El dolor puede dar forma a la historia, pero no tiene derecho a poseer el final.”',
  'cta.kicker': 'Comenzar la conversación',
  'cta.heading': 'Invitar la voz. Compartir la historia. Crear un momento centrado en la sanación.',
  'cta.body': 'Elige una vía de consulta premium para invitaciones a hablar, entrevistas, colaboraciones creativas o conversaciones íntimas marcadas por la resiliencia, la fe y la restauración.',
  'cta.disclaimer': 'Este sitio web no establece una relación de agencia, gestión, publicación, asociación, empleo ni representación legal. Las conversaciones de colaboración o reservas requieren un acuerdo escrito separado.',
  'cta.optionsLabel': 'Opciones de contacto',
  'cta.invite': 'Invitar a Carine a hablar',
  'cta.media': 'Solicitar entrevista de medios',
  'cta.music': 'Hablar sobre colaboración musical',
  'cta.books': 'Reservar conversación',
  'legal.metaTitle': 'Legal / Términos | Carine Sanadina',
  'legal.metaDescription': 'Avisos legales y de propiedad del sitio web de Carine Sanadina, incluida la propiedad de la plataforma, los materiales artísticos, el uso de medios y la orientación de contacto.',
  'legal.metaOgDescription': 'Avisos legales y de propiedad de la plataforma web de Carine Sanadina y los materiales artísticos aprobados.',
  'legal.kicker': 'Legal / Términos',
  'legal.heading': 'Aviso de propiedad y uso del sitio web',
  'legal.intro': 'Estos avisos aclaran la propiedad, el uso autorizado y los límites de representación del sitio web de Carine Sanadina, manteniendo una experiencia respetuosa, colaborativa y transparente.',
  'legal.ariaLabel': 'Términos legales y avisos de propiedad',
  'legal.ownership.title': 'Aviso de propiedad y plataforma',
  'legal.ownership.body': 'El concepto, diseño, estructura, implementación del código, dirección visual, experiencia digital, composición y presentación creativa del sitio web son producidos y gestionados por Omoluabi Productions, un proyecto creativo operado bajo ETL GIS Consulting LLC. Salvo que se indique lo contrario, la plataforma del sitio web y los elementos relacionados de presentación digital son propiedad o están bajo el control de ETL GIS Consulting LLC.',
  'legal.ip.title': 'Propiedad intelectual',
  'legal.ip.body': 'Los diseños del sitio web, el estilo de la interfaz, el código, la presentación del texto y la dirección creativa a nivel de plataforma no pueden copiarse, reutilizarse, modificarse, redistribuirse ni explotarse comercialmente sin autorización escrita de ETL GIS Consulting LLC o del titular de derechos correspondiente. Los materiales de terceros, propiedad de la artista o acreditados por separado permanecen con sus respectivos propietarios.',
  'legal.artist.title': 'Materiales artísticos e imagen',
  'legal.artist.body': 'Carine Sanadina conserva la propiedad o el control de su identidad personal, imagen aprobada, libros, música, historia biográfica y materiales relacionados con la artista, cuando corresponda. La presentación del nombre, imagen, obras, música o biografía de Carine Sanadina en este sitio web tiene fines promocionales e informativos basados en materiales de colaboración aprobados.',
  'legal.noAgency.title': 'Sin representación de agencia o gestión',
  'legal.noAgency.body': 'Nada en este sitio web crea una relación de agencia, gestión, publicación, sello discográfico, empleo, asociación o representación legal entre Carine Sanadina, Omoluabi Productions y ETL GIS Consulting LLC, salvo que un acuerdo escrito separado lo indique expresamente. Omoluabi Productions no se presenta como una empresa registrada independiente, sello discográfico, representante, agente, editor ni representante legal.',
  'legal.music.title': 'Uso de música y medios',
  'legal.music.body': 'La música, imágenes, textos, audio, obras gráficas, video y otros medios se presentan para visibilidad promocional, contexto informativo y presentación artística aprobada. Los derechos permanecen con sus respectivos propietarios. Se prohíbe la copia, descarga, reutilización, modificación, redistribución, publicación pública o explotación comercial no autorizada sin permiso escrito del titular de derechos correspondiente.',
  'legal.websiteUse.title': 'Uso del sitio web',
  'legal.websiteUse.body': 'Los visitantes pueden ver el sitio web con fines personales, informativos y de descubrimiento promocional. El uso del sitio web no debe interferir con su funcionamiento, tergiversar la relación de ninguna parte ni implicar respaldo, representación o permiso que no haya sido otorgado por separado por escrito.',
  'legal.liability.title': 'Limitación de responsabilidad',
  'legal.liability.body': 'El sitio web se ofrece como una presentación digital promocional e informativa. ETL GIS Consulting LLC se reserva el derecho de actualizar, eliminar, revisar, suspender o discontinuar cualquier parte del sitio web o de la presentación de medios. En la medida permitida por la ley, ETL GIS Consulting LLC no es responsable de problemas indirectos, incidentales o consecuentes derivados del uso del sitio web, su disponibilidad, enlaces de terceros o reproducción de medios.',
  'legal.takedown.title': 'Solicitudes de retiro o corrección',
  'legal.takedown.body': 'Las solicitudes de corrección, retiro, inquietudes sobre derechos, preguntas sobre medios o aclaraciones de propiedad deben enviarse a través de la sección de contacto del sitio web. Incluya detalles suficientes para identificar el material específico y la naturaleza de la solicitud, de modo que pueda revisarse adecuadamente.',
  'legal.takedown.link': 'Ir a la sección de contacto',
  'legal.entity.title': 'Entidad gobernante',
  'legal.entity.body': 'ETL GIS Consulting LLC es la entidad legalmente registrada asociada con la operación y el control de la plataforma del sitio web y la presentación digital. Omoluabi Productions funciona como una marca de proyecto creativo/medios operada bajo ETL GIS Consulting LLC y actualmente no se presenta en este sitio web como una entidad legal registrada separada.',
  'footer.rights': '© 2026 Carine Sanadina. Todos los derechos reservados.',
  'footer.navLabel': 'Navegación del pie de página',
  'footer.legal': 'Legal / Términos',
  'footer.credit': 'Concepto, diseño y presentación digital del sitio por Omoluabi Productions, un proyecto creativo operado bajo ETL GIS Consulting LLC.'
};

translations.ln = {
  'html.lang': 'ln',
  'meta.title': 'Carine Sanadina | Mosali ya bokolongono, mokomi mpe mongongo ya elikya',
  'meta.description': 'Carine Sanadina, mwasi ya Congo oyo afandaka na Jacksonville, Florida, azali mosali ya bokolongono, mokomi, moyembi mpe motomboli ya bato oyo balekaki pasi; abongolaka mpasi na nzela ya kobika, kondima mpe elikya.',
  'meta.ogTitle': 'Carine Sanadina | Mokomi ya kobika mpe mongongo ya elikya',
  'meta.ogDescription': 'Yeba mikanda, miziki, mosala ya kobondisa mpe mongongo ya Carine Sanadina, mwasi ya Congo na Jacksonville, Florida, oyo akabolaka kobika, kondima mpe bozongisi ya motema.',
  'meta.twitterDescription': 'Kolongola mpasi na nzela ya kobika, kopesa bomoi ntina, mpe kozongisa masolo na pole.',
  'language.label': 'Lokota',
  'language.selectorLabel': 'Pona lokota ya lokasa oyo',
  'a11y.skip': 'Kende mbala moko na makambo ya ntina',
  'splash.enterApp': 'Kota na appli',
  'a11y.primaryNav': 'Nzela monene ya kotambola na lokasa',
  'a11y.home': 'Ebandeli ya Carine Sanadina',
  'a11y.toggleNav': 'Fungola to kanga nzela ya kotambola',
  'a11y.primaryCta': 'Banzela ya liboso ya kobenga kosala elongo',
  'nav.about': 'Maye matali Carine',
  'nav.works': 'Misala minene',
  'nav.music': 'Miziki',
  'nav.focus': 'Makambo ya motema',
  'nav.positioning': 'Mongongo ya mosala',
  'nav.contact': 'Kokutana',
  'hero.location': 'Jacksonville, Florida',
  'hero.subtitle': 'Mosali ya bokolongono | Mokomi | Molobeli ya bato balekaki pasi | Mongongo ya kimia ya motema',
  'hero.heading': 'Kolongola mpasi na nzela ya kobika, kopesa bomoi ntina, mpe kozongisa masolo na pole.',
  'hero.viewWorks': 'Tala misala minene',
  'hero.listenMusic': 'Yoka Miziki',
  'hero.contactCarine': 'Koma epai ya Carine',
  'portrait.figureLabel': 'Elilingi ya lokumu ya Carine Sanadina',
  'portrait.alt': 'Elilingi ya lokumu ya Carine Sanadina',
  'portrait.fallback': 'Elilingi ya lokumu ya Carine Sanadina ezali komonana te mpo na mwa ntango.',
  'portrait.caption': 'Elilingi ya lokumu ya Carine Sanadina — masolo ya kobika, na mpiko, kondima mpe bozongisi ya motema.',
  'about.kicker': 'Maye matali Carine',
  'about.heading': 'Mongongo ya mpiko, bozongisi ya motema mpe kobika oyo etalaka moto na bomoto.',
  'about.body1': 'Carine Sanadina azali mwasi ya Congo oyo afandaka na Jacksonville; azali mosali ya bokolongono, mokomi, moyembi mpe molobeli ya bato balekaki pasi. Mosala na ye ebongolaka mpasi oyo moto amonaki na maloba ya kobondisa, mikanda ya kobika mpe elikya.',
  'about.body2': 'Misala na ye elobaka na boboto makambo ya kobika nsima ya bitumba ya ndako, boyokani oyo ebebisaka motema, bapota ya kati, kondima, mpiko, bomama, bomoi ya moto oyo alongwá mboka, mpe nzela oyo ekendaka longwa na kobukana kino na kotongama lisusu.',
  'about.keyFacts': 'Makambo ya ntina : Carine Sanadina asalaka uta Jacksonville, Florida lokola mosali ya bokolongono, mokomi, moyembi, molobeli ya bato babikaki mpe mongongo ya kobika ya motema mpo na koyebisa bitumba ya ndako, kondima mpe bozongisi.',
  'works.kicker': 'Misala minene',
  'works.heading': 'Mikanda oyo ebongolaka litatoli na pole.',
  'works.intro': 'Maloba ya kitoko, ya penepene mpe ya mpiko mpo na batangi oyo bazali koluka mongongo mpo na kobika, kokoma lisusu makasi, kondima mpe komimona na motuya ya sika.',
  'buttons.buyAmazon': 'Somba na Amazon',
  'books.pain.coverLabel': 'Ezipeli ya buku The Pain Nobody Saw ya Carine Sanadina',
  'books.pain.kicker': 'Lisolo ya bomoi',
  'books.pain.coverTitle': 'Mpasi oyo moto amonaki te',
  'books.pain.title': 'Mpasi oyo moto amonaki te: lisolo ebombamá ya minyoko mpe kobika',
  'books.pain.description': 'Lisolo ya bomoi oyo elakisaka solo ya minyoko ya ndako oyo ebombamaka, bozito ya mimeseno, mpasi ya kimya, mpe mpiko ya kotambola kino na bonsomi, kondima mpe kozwa lisusu motuya ya yo moko.',
  'books.toxic.coverLabel': 'Ezipeli ya buku If It’s Red, It’s Toxic ya Carine Sanadina',
  'books.toxic.kicker': 'Mokanda ya litambwisi',
  'books.toxic.coverTitle': 'Soki ezali elembo ya likama, tika yango',
  'books.toxic.title': 'Soki ezali elembo ya likama, tika yango',
  'books.toxic.description': 'Mokanda ya mpiko mpo na koyeba bilembo ya likama, kotambwisama ya mayoki, likama ya molimo, bokangami oyo ebebisaka, mpe ndenge mosusu elongolaka kimia, polele mpe ntina ya bomoi mokemoke.',
  'books.sunshine.coverLabel': 'Ezipeli ya buku The Road to Sunshine ya Carine Sanadina',
  'books.sunshine.kicker': 'Kondima mpe elikya',
  'books.sunshine.coverTitle': 'Nzela ya moi',
  'books.sunshine.title': 'Nzela ya moi: mobembo ya bitumba, kondima mpe elikya',
  'books.sunshine.description': 'Makanisi etonda na elikya mpo na kotelema na kati ya komekama, kokangama na kondima, mpe kokoba kotambola epai ya mikolo ya pole ata soki nzela ezali komonana lokola ezali na molili.',
  'books.storm.coverLabel': 'Ezipeli ya buku After The Storm ya Carine Sanadina',
  'books.storm.kicker': 'Kotongama lisusu',
  'books.storm.coverTitle': 'Nsima ya mopɛpɛ makasi',
  'books.storm.title': 'Nsima ya mopɛpɛ makasi',
  'books.storm.description': 'Mokanda oyo epesaka lokumu na makasi ya kimya oyo etikalaka nsima ya komekama, mpe esalisaka motangi atala koleka kobika mpamba, epai ya kobikisama, kimia mpe mabaku ya sika.',
  'music.kicker': 'Esika ya miziki',
  'music.heading': 'Miziki ya Carine Sanadina',
  'music.intro': 'Molongo mokuse ya banzembo ya lokumu, oyo etongami na kondima, boboto, kotongama lisusu mpe masanzoli.',
  'music.disclaimer': 'Miziki mpe biloko ya koyoka to komona elakisami mpo bato bayoka, bayeba mpe bapesa lokumu na mosala ya moyembi. Makoki etikali epai ya bankolo na yango. Kokopa, kokabola lisusu, to kosalela yango mpo na mombongo kozanga ndingisa epekisami.',
  'music.playlistLabel': 'Molongo ya miziki ya Carine Sanadina',
  'music.playlist': 'Molongo ya banzembo',
  'music.time': 'Ntango',
  'music.duration': 'Bolai:',
  'tracks.consolation.title': 'Libondisi',
  'tracks.consolation.audioLabel': 'Libondisi ya Carine Sanadina',
  'tracks.consolation.coverAlt': 'Ezipeli ya loyembo Libondisi',
  'tracks.consolation.fallback': 'Ezipeli ya loyembo Libondisi ezali komonana te mpo na mwa ntango.',
  'tracks.consolation.number': 'Loyembo 01',
  'tracks.consolation.description': 'Libondisi ya motema mpe elikya ya kobika',
  'consolationSynopsis': 'Nzembo ya losambo oyo ezali kotombola Klisto lokola kobondisama, ekimelo mpe Mokonzi.',
  'tracks.consolation.playLabel': 'Beta Loyembo Libondisi',
  'tracks.gentillesse.title': 'Boboto',
  'tracks.gentillesse.audioLabel': 'Boboto ya Carine Sanadina',
  'tracks.gentillesse.coverAlt': 'Ezipeli ya loyembo Boboto',
  'tracks.gentillesse.fallback': 'Ezipeli ya loyembo Boboto ezali komonana te mpo na mwa ntango.',
  'tracks.gentillesse.number': 'Loyembo 02',
  'tracks.gentillesse.description': 'Loyembo ya boboto oyo etondi na kondima',
  'laGentillesseSynopsis': 'Botomboli ya boboto, mawa mpe nguya ya ngolu.',
  'tracks.gentillesse.playLabel': 'Beta Loyembo Boboto',
  'tracks.wonderful.title': 'Kitoko mingi',
  'tracks.wonderful.audioLabel': 'Kitoko mingi ya Carine Sanadina',
  'tracks.wonderful.coverAlt': 'Ezipeli ya loyembo Kitoko mingi',
  'tracks.wonderful.fallback': 'Ezipeli ya loyembo Kitoko mingi ezali komonana te mpo na mwa ntango.',
  'tracks.wonderful.number': 'Loyembo 03',
  'tracks.wonderful.description': 'Masanzoli ya esengo mpe matondi',
  'wonderfulSynopsis': 'Litatoli ya esengo ya bolamu, bosembo mpe bolingo ya Nzambe.',
  'tracks.wonderful.playLabel': 'Beta Loyembo Kitoko mingi',
  'tracks.womanifesto.audioLabel': 'Womanifesto ya Carine Sanadina',
  'tracks.womanifesto.coverAlt': 'Elilingi ya ezipeli ya Womanifesto',
  'tracks.womanifesto.fallback': 'Elilingi ya ezipeli ya Womanifesto ezali te mpo na mwa ntango.',
  'tracks.womanifesto.number': 'Loyembo 04',
  'tracks.womanifesto.shortDescription': 'Loyembo ya gospel ya Afrika ya mozindo oyo ekumisaka mpiko ya basi, kobika, ngolu, mpe elonga na nzela ya kondima.',
  'tracks.womanifesto.description': 'Loyembo ya gospel ya Afrika ya mozindo oyo ekumisaka mpiko ya basi, kobika, ngolu, mpe elonga na nzela ya kondima.',
  'womanifestoSynopsis': 'Litatoli ya kobika, makasi mpe ngolu mpo na basi bazali kotelema lisusu.',
  'tracks.womanifesto.playLabel': 'Beta Womanifesto',
  'tracks.paranoia.title': 'Paranoïa Persécutive',
  'tracks.paranoia.audioLabel': 'Paranoïa Persécutive ya Carine Sanadina',
  'tracks.paranoia.coverAlt': 'Elilingi ya ezipeli ya Paranoïa Persécutive',
  'tracks.paranoia.fallback': 'Elilingi ya ezipeli ya Paranoïa Persécutive ezali te mpo na mwa ntango.',
  'tracks.paranoia.number': 'Loyembo 05',
  'tracks.paranoia.shortDescription': 'Loyembo ya Lifalanse ya sinema oyo etaleli intuition, bobateli, mpe ekɛngɛ mpo na kobika, epai vigilance ekómaka likebisi mpe bwanya.',
  'tracks.paranoia.description': 'Loyembo ya Lifalanse ya sinema oyo etaleli intuition, bobateli, mpe ekɛngɛ mpo na kobika, epai vigilance ekómaka likebisi mpe bwanya.',
  'paranoiaPersecutiveSynopsis': 'Likambo ya mozindo na ntina ya mayele ya motema, bokebi mpe bososoli ya molimo.',
  'tracks.paranoia.playLabel': 'Beta Paranoïa Persécutive',
  'mini.label': 'Mwa ebɛtelo ya loyembo oyo ezali koyokana',
  'mini.noTrack': 'Loyembo eponami naino te',
  'mini.toggleLabel': 'Beta to pemisa loyembo oyo ezali koyokana',
  'mini.progress': 'Nzela loyembo ezali kotambola',
  'mini.volumeShort': 'Makasi',
  'mini.volume': 'Makasi ya mongongo ya loyembo oyo ezali koyokana',
  'audio.play': 'Beta',
  'audio.pause': 'Pemisa',
  'audio.coverArt': 'elilingi ya ezipeli',
  'audio.playbackError': 'Loyembo ekoki kobanda te. Meka lisusu.',
  'audio.unavailable': 'Loyembo ezali koyokana te sikoyo. Zonga lisusu mwa sima.',
  'focus.kicker': 'Makambo ya motema',
  'focus.heading': 'Makambo oyo ezali na motema ya mosala ya Carine.',
  'focus.gridLabel': 'Makambo ya motema ya mosala',
  'focus.pills.domestic': 'Koyebisa likama ya bitumba ya ndako',
  'focus.pills.healing': 'Kobika ya motema',
  'focus.pills.toxic': 'Kobika nsima ya boyokani ebebisaka',
  'focus.pills.faith': 'Kondima mpe mpiko',
  'focus.pills.women': 'Kotombola basi',
  'focus.pills.selfWorth': 'Motuya ya yo moko mpe koyeba yo nani',
  'focus.pills.immigrant': 'Bomoi ya moto alongwá mboka mpe ya moto alukaka kobatelama',
  'focus.pills.motherhood': 'Bomama mpe kobika',
  'focus.pills.writing': 'Bokomi oyo epesaka elikya',
  'focus.pills.care': 'Kosalisa moto na bomoto',
  'positioning.kicker': 'Esika ya mongongo na mosala',
  'positioning.heading': 'Kobatela bato na boboto mpe kokoma mpo na kopesa elikya.',
  'positioning.healthcare.title': 'Mosali ya bokolongono',
  'positioning.healthcare.body': 'Apesaka lisungi ya boboto na esika ya bokolongono, na kotia moto na katikati ya mosala, na mawa, botosi ya mosala mpe koyeba motema ya moto na mosala ya mokolo na mokolo.',
  'positioning.author.title': 'Mokomi mpe mongongo ya elikya',
  'positioning.author.body': 'Akomaka mikanda mpe makanisi oyo etalaka kobika, kobikisama, kondima, koyeba boyokani oyo ebebisaka, bozongisi ya motema mpe kobongwana ya bomoi.',
  'quote.label': 'Liloba ya kopona',
  'quote.text': '“Mpasi ekoki kopesa lisolo lolenge, kasi ekoki te kozala nkolo ya suka na yango.”',
  'cta.kicker': 'Banda lisolo',
  'cta.heading': 'Benga mongongo. Kabola lisolo. Tonga ntango ya kobika.',
  'cta.body': 'Pona nzela ya lokumu mpo na kobenga Carine aloba, masolo ya koyebisa bato, kosala elongo na makambo ya bokeli, to masolo ya penepene oyo etongami na mpiko, kondima mpe bozongisi ya motema.',
  'cta.disclaimer': 'Lokasa oyo esali boyokani te ya botambwisi, boyangeli, kobimisa mikanda, kosala elongo na mibeko, mosala to bolobeli ya mibeko. Masolo ya kosala elongo to ya kobengisa esengeli kozala na boyokani mosusu oyo ekomami.',
  'cta.optionsLabel': 'Banzela ya kokoma',
  'cta.invite': 'Benga Carine aloba',
  'cta.media': 'Senga lisolo na bapanzi sango',
  'cta.music': 'Solola mpo na kosala elongo na miziki',
  'cta.books': 'Bongisa lisolo',
  'legal.metaTitle': 'Mibeko / Maloba ya kosalela | Carine Sanadina',
  'legal.metaDescription': 'Mayebisi ya mibeko mpe ya makoki mpo na lokasa ya Carine Sanadina: nkolo ya lokasa, biloko ya mosali, kosalela miziki mpe biloko mosusu, mpe kokoma.',
  'legal.metaOgDescription': 'Mayebisi ya mibeko mpe makoki mpo na lokasa ya Carine Sanadina mpe biloko ya mosali oyo endimami.',
  'legal.kicker': 'Mibeko / Maloba ya kosalela',
  'legal.heading': 'Mayebisi ya makoki mpe kosalela lokasa',
  'legal.intro': 'Mayebisi oyo elimboli nkolo ya biloko, ndenge ya kosalela oyo endimami, mpe bandelo ya bolobeli mpo na lokasa ya Carine Sanadina, na limemya, boyokani mpe polele.',
  'legal.ariaLabel': 'Maloba ya mibeko mpe mayebisi ya makoki',
  'legal.ownership.title': 'Mayebisi ya nkolo ya lokasa',
  'legal.ownership.body': 'Likanisi, kitoko, ndenge lokasa etongami, kokoma makomi ya mosala, nzela ya komonisa biloko mpe lolenge ya bokeli ya lokasa ebimisami mpe etambwisami na Omoluabi Productions, mosala ya bokeli oyo etambolaka na se ya ETL GIS Consulting LLC. Soki elobami ndenge mosusu te, lokasa mpe biloko nyonso ya komonisa yango ezali ya ETL GIS Consulting LLC to ezali na bokonzi na yango.',
  'legal.ip.title': 'Makoki ya makanisi mpe ya bokeli',
  'legal.ip.body': 'Ndenge lokasa ebongisami, lolenge ya komonana, makomi ya mosala, maloba mpe nzela ya bokeli ekoki te kokopama, kosalelama lisusu, kobongisama, kokabolama lisusu to kosalelama mpo na mombongo kozanga ndingisa ekomami ya ETL GIS Consulting LLC to ya nkolo ya makoki oyo ebongi. Biloko ya bato mosusu, ya mosali, to oyo epesami lokumu pembeni, etikali ya bankolo na yango.',
  'legal.artist.title': 'Biloko ya mosali mpe elilingi',
  'legal.artist.body': 'Carine Sanadina abateli makoki to bokonzi likolo ya bomoto na ye, elilingi oyo endimami, mikanda, miziki, lisolo ya bomoi mpe biloko mosusu oyo etali mosali. Komonisa kombo, elilingi, misala, miziki to lisolo ya Carine Sanadina na lokasa oyo ezali mpo na koyebisa bato mpe kopesa sango, na biloko ya kosala elongo oyo endimami.',
  'legal.noAgency.title': 'Botambwisi to boyangeli ezali te',
  'legal.noAgency.body': 'Eloko moko te na lokasa oyo esali boyokani ya botambwisi, boyangeli, kobimisa mikanda, etuluku ya miziki, mosala, boyokani ya mombongo to bolobeli ya mibeko kati na Carine Sanadina, Omoluabi Productions mpe ETL GIS Consulting LLC, longola kaka soki boyokani mosusu oyo ekomami elobi yango polele. Omoluabi Productions elakisami te lokola kompanyi oyo ekomami pembeni, etuluku ya miziki, moyangeli, motindami, mobimisi ya mikanda to molobeli ya mibeko.',
  'legal.music.title': 'Kosalela miziki mpe biloko ya koyoka to komona',
  'legal.music.body': 'Miziki, bililingi, maloba, mongongo, misala ya bililingi, video mpe biloko mosusu elakisami mpo na koyebisa bato, kopesa sango mpe komonisa mosala ya mosali oyo endimami. Makoki etikali epai ya bankolo na yango. Kokopa, kozwa, kosalela lisusu, kobongola, kokabola lisusu, kobimisa na bato nyonso to kosalela mpo na mombongo kozanga ndingisa ekomami ya nkolo ya makoki epekisami.',
  'legal.websiteUse.title': 'Kosalela lokasa',
  'legal.websiteUse.body': 'Bapaya bakoki kotala lokasa mpo na makambo na bango moko, koyeba sango mpe komona misala. Kosalela lokasa esengeli te kobebisa ndenge etambolaka, kolakisa boyokani ya lokuta, to kopesa makanisi ete ndingisa, botomboli to bolobeli epesami soki ekomami pembeni te.',
  'legal.liability.title': 'Ndelo ya mokumba',
  'legal.liability.body': 'Lokasa oyo epesami lokola komonisa mosala mpe kopesa sango. ETL GIS Consulting LLC ekoki kobongisa, kolongola, kotalela lisusu, kotika mpo na ntango, to kosukisa eteni nyonso ya lokasa to biloko oyo emonisami. Na ndenge mibeko epesi nzela, ETL GIS Consulting LLC ezali na mokumba te mpo na mikakatano ya zele te, oyo elandi pembeni, to oyo ewuti na kosalela lokasa, kozala na yango, banzela ya bato mosusu, to koyoka miziki.',
  'legal.takedown.title': 'Kosenga kolongola to kobongisa',
  'legal.takedown.body': 'Masengi ya kobongisa, kolongola, mituna ya makoki, mituna ya miziki to biloko mosusu, to kosenga polele na makoki esengeli kotindama na eteni ya kokoma ya lokasa. Pesa makambo ekoki mpo toyeba eloko nini etali mpe lolenge ya bosengi mpo etalelama malamu.',
  'legal.takedown.link': 'Kende na eteni ya kokoma',
  'legal.entity.title': 'Eteni oyo etambwisaka',
  'legal.entity.body': 'ETL GIS Consulting LLC ezali eteni ekomami na mibeko oyo etali botambwisi mpe bokonzi ya lokasa mpe komonisa yango. Omoluabi Productions esalaka lokola elembo ya mosala ya bokeli mpe ya koyebisa bato oyo etambolaka na se ya ETL GIS Consulting LLC, mpe na lokasa oyo elakisami te lokola eteni ya mibeko ekomami pembeni.',
  'footer.rights': '© 2026 Carine Sanadina. Makoki nyonso ebatelami.',
  'footer.navLabel': 'Nzela ya kotambola na nse ya lokasa',
  'footer.legal': 'Mibeko / Maloba ya kosalela',
  'footer.credit': 'Likanisi, kitoko mpe komonisa lokasa na nzela ya tekiniki esalemi na Omoluabi Productions, mosala ya bokeli oyo etambolaka na se ya ETL GIS Consulting LLC.'
};

translations.sw = {
  "html.lang": "sw",
  "meta.title": "Carine Sanadina | Mtaalamu wa Huduma ya Afya, Mwandishi na Wakili wa Aliyenusurika",
  "meta.description": "Carine Sanadina ni mtaalam wa afya aliye Jacksonville, Florida, mwandishi, mtetezi wa manusura, na sauti ya ustawi wa kihisia inayobadilisha maumivu kuwa msukumo unaolenga uponyaji.",
  "meta.ogTitle": "Carine Sanadina | Mwandishi Anayezingatia Uponyaji & Wakili wa Aliyenusurika",
  "meta.ogDescription": "Gundua vitabu, utetezi, na sauti ya ustawi wa kihisia ya Carine Sanadina, mtaalamu wa afya aliyezaliwa Kongo na mwandishi anayeishi Jacksonville, Florida.",
  "meta.twitterDescription": "Kugeuza maumivu kuwa uponyaji, kuishi kuwa kusudi, na hadithi kuwa urejesho.",
  "language.label": "Lugha",
  "language.selectorLabel": "Chagua lugha ya tovuti",
  "a11y.skip": "Ruka hadi kwa yaliyomo kuu",
  "splash.enterApp": "Ingia kwenye programu",
  "a11y.primaryNav": "Urambazaji msingi",
  "a11y.home": "Carine Sanadina nyumbani",
  "a11y.toggleNav": "Geuza urambazaji",
  "a11y.primaryCta": "Wito wa kimsingi wa kuchukua hatua",
  "nav.about": "Kuhusu",
  "nav.works": "Kazi Zilizoangaziwa",
  "nav.music": "Muziki",
  "nav.focus": "Maeneo Makini",
  "nav.positioning": "Sauti ya Kitaalamu",
  "nav.contact": "Wasiliana",
  "hero.location": "Jacksonville, Florida",
  "hero.subtitle": "Mtaalamu wa Afya | Mwandishi | Wakili Aliyenusurika | Sauti ya Ustawi wa Kihisia",
  "hero.heading": "Kugeuza maumivu kuwa uponyaji, kuishi kuwa kusudi, na hadithi kuwa urejesho.",
  "hero.viewWorks": "Tazama Kazi Zilizoangaziwa",
  "hero.listenMusic": "Sikiliza Muziki",
  "hero.contactCarine": "Wasiliana na Carine",
  "portrait.figureLabel": "Kipengele rasmi cha picha ya Carine Sanadina",
  "portrait.alt": "Carine Sanadina picha rasmi",
  "portrait.fallback": "Picha rasmi ya Carine Sanadina haipatikani kwa sasa.",
  "portrait.caption": "Picha rasmi ya Carine Sanadina - hadithi zinazozingatia uponyaji kwa ujasiri, imani na urejesho.",
  "about.kicker": "Kuhusu Carine",
  "about.heading": "Sauti ya uthabiti, urejesho, na uponyaji unaozingatia mwanadamu.",
  "about.body1": "Carine Sanadina ni mzaliwa wa Kongo, mtaalamu wa afya anayeishi Jacksonville, mwandishi, msanii, na wakili aliyenusurika ambaye kazi yake hubadilisha maumivu ya maisha kuwa fasihi inayolenga uponyaji na msukumo.",
  "about.body2": "Kazi yake inachunguza maisha ya unyanyasaji wa nyumbani, mahusiano yenye sumu, majeraha ya kihisia, imani, uthabiti, uzazi, uzoefu wa wahamiaji, na safari kutoka kwa kuvunjika hadi urejesho.",
  "about.keyFacts": "Mambo muhimu: Carine Sanadina anahudumu kutoka Jacksonville, Florida kama mtaalamu wa huduma ya afya, mwandishi, msanii, wakili wa walionusurika, na sauti ya ustawi wa kihisia kwa uhamasishaji wa ukatili wa majumbani, imani na urejesho.",
  "works.kicker": "Kazi Zilizoangaziwa",
  "works.heading": "Vitabu vinavyogeuza ushuhuda kuwa nuru.",
  "works.intro": "Tafakari maridadi, za karibu, na za kijasiri kwa wasomaji wanaotafuta lugha kwa ajili ya kuishi, kupona, imani, na kujithamini upya.",
  "buttons.buyAmazon": "Nunua kwenye Amazon",
  "books.pain.coverLabel": "Jalada la kitabu cha Pain Nobody Saw na Carine Sanadina",
  "books.pain.kicker": "Kumbukumbu",
  "books.pain.coverTitle": "The Pain Nobody Saw",
  "books.pain.title": "Maumivu Ambayo Hakuna Aliyeyaona: Hadithi Iliyofichwa ya Unyanyasaji na Kuishi",
  "books.pain.description": "Kumbukumbu mbichi inayofichua ukweli uliofichwa wa unyanyasaji wa nyumbani, shinikizo la kitamaduni, mateso ya kimya kimya, na njia ya ujasiri kuelekea uhuru, imani, na kujithamini tena.",
  "books.toxic.coverLabel": "Ikiwa ni Nyekundu, ni jalada la kitabu chenye sumu na Carine Sanadina",
  "books.toxic.kicker": "Mwongozo",
  "books.toxic.coverTitle": "If It’s Red, It’s Toxic",
  "books.toxic.title": "Ikiwa ni Nyekundu, ni sumu",
  "books.toxic.description": "Mwongozo shupavu wa kutambua ishara za onyo, ghiliba ya kihisia, hatari ya kiroho, viambatisho visivyofaa, na mifumo ambayo polepole huondoa amani, uwazi na kusudi.",
  "books.sunshine.coverLabel": "Jalada la kitabu cha Road to Sunshine na Carine Sanadina",
  "books.sunshine.kicker": "Imani na Matumaini",
  "books.sunshine.coverTitle": "The Road to Sunshine",
  "books.sunshine.title": "Barabara ya Mwangaza wa Jua: Safari ya Mapambano, Imani na Matumaini",
  "books.sunshine.description": "Tafakari iliyojaa tumaini juu ya mapambano ya kustahimili, kushikilia imani, na kuendelea na safari kuelekea siku angavu hata wakati barabara inahisi kutokuwa na uhakika.",
  "books.storm.coverLabel": "Jalada la kitabu cha After The Storm na Carine Sanadina",
  "books.storm.kicker": "Urejesho",
  "books.storm.coverTitle": "After The Storm",
  "books.storm.title": "Baada ya Dhoruba",
  "books.storm.description": "Kazi inayozingatia urejesho inayoheshimu nguvu tulivu inayofuata ugumu, kusaidia wasomaji kutazama zaidi ya kunusurika kuelekea uponyaji, amani na uwezekano mpya.",
  "music.kicker": "Onyesho la Muziki",
  "music.heading": "Muziki wa Carine Sanadina",
  "music.intro": "Orodha ndogo ya kucheza ya nyimbo bora zaidi inayoundwa na imani, huruma, urejeshaji na sifa.",
  "music.disclaimer": "Muziki na midia huwasilishwa kwa ajili ya usikilizaji wa matangazo na mwonekano wa msanii. Haki zinabaki kwa wamiliki wao. Kunakili bila ruhusa, ugawaji upya au matumizi ya kibiashara ni marufuku.",
  "music.playlistLabel": "Orodha ya kucheza ya muziki ya Carine Sanadina",
  "music.playlist": "Orodha ya kucheza",
  "music.time": "Muda",
  "music.duration": "Muda:",
  "tracks.consolation.title": "Consolation",
  "tracks.consolation.audioLabel": "Faraja na Carine Sanadina",
  "tracks.consolation.coverAlt": "Sanaa ya kifuniko cha faraja",
  "tracks.consolation.fallback": "Sanaa ya jalada la Consolation haipatikani kwa sasa.",
  "tracks.consolation.number": "Wimbo wa 01",
  "tracks.consolation.description": "Uponyaji unaozingatia faraja na matumaini",
  "consolationSynopsis": "Wimbo wa ibada unaomtangaza Kristo kama faraja, kimbilio na Mfalme.",
  "tracks.consolation.playLabel": "Cheza Faraja",
  "tracks.gentillesse.title": "La Gentillesse",
  "tracks.gentillesse.audioLabel": "La Gentillesse na Carine Sanadina",
  "tracks.gentillesse.coverAlt": "Sanaa ya jalada la La Gentillesse",
  "tracks.gentillesse.fallback": "Sanaa ya jalada ya La Gentillesse haipatikani kwa sasa.",
  "tracks.gentillesse.number": "Wimbo wa 02",
  "tracks.gentillesse.description": "Wimbo wa fadhili uliojaa imani",
  "laGentillesseSynopsis": "Sherehe ya wema, huruma na nguvu ya neema.",
  "tracks.gentillesse.playLabel": "Cheza La Gentillesse",
  "tracks.wonderful.title": "Ajabu",
  "tracks.wonderful.audioLabel": "Ajabu na Carine Sanadina",
  "tracks.wonderful.coverAlt": "Sanaa ya kifuniko cha ajabu",
  "tracks.wonderful.fallback": "Sanaa nzuri ya jalada haipatikani kwa sasa.",
  "tracks.wonderful.number": "Wimbo wa 03",
  "tracks.wonderful.description": "Sifa za furaha na shukrani",
  "wonderfulSynopsis": "Ushuhuda wa furaha wa wema, uaminifu na upendo wa Mungu.",
  "tracks.wonderful.playLabel": "Cheza Ajabu",
  "tracks.womanifesto.audioLabel": "Womanifesto na Carine Sanadina",
  "tracks.womanifesto.coverAlt": "Sanaa ya jalada la Womanifesto",
  "tracks.womanifesto.fallback": "Sanaa ya jalada la Womanifesto haipatikani kwa muda.",
  "tracks.womanifesto.number": "Wimbo 04",
  "tracks.womanifesto.shortDescription": "Wimbo wa injili ya Kiafrika wenye hisia unaosherehekea uthabiti wa wanawake, uponyaji, neema, na ushindi kupitia imani.",
  "tracks.womanifesto.description": "Wimbo wa injili ya Kiafrika wenye hisia unaosherehekea uthabiti wa wanawake, uponyaji, neema, na ushindi kupitia imani.",
  "womanifestoSynopsis": "Tamko la uponyaji, ustahimilivu na neema kwa wanawake wanaoinuka kwa nguvu zaidi.",
  "tracks.womanifesto.playLabel": "Cheza Womanifesto",
  "tracks.paranoia.title": "Paranoïa Persécutive",
  "tracks.paranoia.audioLabel": "Paranoïa Persécutive na Carine Sanadina",
  "tracks.paranoia.coverAlt": "Sanaa ya jalada la Paranoïa Persécutive",
  "tracks.paranoia.fallback": "Sanaa ya jalada la Paranoïa Persécutive haipatikani kwa muda.",
  "tracks.paranoia.number": "Wimbo 05",
  "tracks.paranoia.shortDescription": "Wimbo wa Kifaransa wa sinema kuhusu hisia za ndani, ulinzi, na umakini wa kuishi, ambapo uangalifu huwa onyo na hekima.",
  "tracks.paranoia.description": "Wimbo wa Kifaransa wa sinema kuhusu hisia za ndani, ulinzi, na umakini wa kuishi, ambapo uangalifu huwa onyo na hekima.",
  "paranoiaPersecutiveSynopsis": "Tafakari ya kisinema kuhusu angavu, umakini na utambuzi wa kiroho.",
  "tracks.paranoia.playLabel": "Cheza Paranoïa Persécutive",
  "mini.label": "Mchezaji mdogo wa wimbo wa sasa",
  "mini.noTrack": "Hakuna wimbo uliochaguliwa",
  "mini.toggleLabel": "Cheza au sitisha wimbo wa sasa",
  "mini.progress": "Maendeleo ya wimbo wa sasa",
  "mini.volumeShort": "Vol",
  "mini.volume": "Kiasi cha wimbo wa sasa",
  "audio.play": "Cheza",
  "audio.pause": "Sitisha",
  "audio.coverArt": "sanaa ya jalada",
  "audio.playbackError": "Uchezaji wa sauti haukuweza kuanza. Tafadhali jaribu tena.",
  "audio.unavailable": "Sauti haipatikani kwa sasa. Tafadhali angalia tena hivi karibuni.",
  "focus.kicker": "Maeneo ya Msingi ya Kuzingatia",
  "focus.heading": "Mandhari katika moyo wa kazi ya Carine.",
  "focus.gridLabel": "Maeneo ya kuzingatia msingi",
  "focus.pills.domestic": "Uhamasishaji wa Ukatili wa Majumbani",
  "focus.pills.healing": "Uponyaji wa Kihisia",
  "focus.pills.toxic": "Ahueni ya Uhusiano wa Sumu",
  "focus.pills.faith": "Imani na Ustahimilivu",
  "focus.pills.women": "Uwezeshaji wa Wanawake",
  "focus.pills.selfWorth": "Kujithamini na Utambulisho",
  "focus.pills.immigrant": "Uzoefu wa Wahamiaji na Wakimbizi",
  "focus.pills.motherhood": "Uzazi na Kuishi",
  "focus.pills.writing": "Uandishi wa Uhamasishaji",
  "focus.pills.care": "Utunzaji Unaozingatia Binadamu",
  "positioning.kicker": "Nafasi ya Kitaalamu",
  "positioning.heading": "Utunzaji wa huruma na uandishi wa kutia moyo.",
  "positioning.healthcare.title": "Mtaalamu wa matibabu",
  "positioning.healthcare.body": "Hutoa msaada wa huruma, unaozingatia mgonjwa katika mazingira ya huduma ya afya, kuleta huruma, taaluma, na uelewa wa kibinadamu kwa huduma ya kila siku.",
  "positioning.author.title": "Mwandishi na Sauti ya Uhamasishaji",
  "positioning.author.body": "Huandika vitabu na maudhui ya kiakisi yanayozingatia kuendelea kuishi, uponyaji, imani, ufahamu wa uhusiano wenye sumu, urejesho wa kihisia na mabadiliko ya kibinafsi.",
  "quote.label": "Nukuu iliyoangaziwa",
  "quote.text": "\"Uchungu unaweza kuunda hadithi, lakini haipati mwisho wake.\"",
  "cta.kicker": "Anza mazungumzo",
  "cta.heading": "Alika sauti. Shiriki hadithi. Jenga wakati unaozingatia uponyaji.",
  "cta.body": "Chagua njia ya kuuliza swali bora zaidi ya mialiko ya kuzungumza, mahojiano, ushirikiano wa kibunifu, au mazungumzo ya karibu yanayoundwa na uthabiti, imani na urejesho.",
  "cta.disclaimer": "Tovuti hii haianzishi wakala, usimamizi, uchapishaji, ushirikiano, ajira, au uwakilishi wa kisheria. Majadiliano ya ushirikiano au kuweka nafasi yanahitaji makubaliano tofauti ya maandishi.",
  "cta.optionsLabel": "Chaguo za mawasiliano",
  "cta.invite": "Alika Carine Aongee",
  "cta.media": "Omba Mahojiano ya Vyombo vya Habari",
  "cta.music": "Jadili Ushirikiano wa Muziki",
  "cta.books": "Weka Mazungumzo",
  "legal.metaTitle": "Kisheria / Masharti | Carine Sanadina",
  "legal.metaDescription": "Notisi za kisheria na umiliki za tovuti ya Carine Sanadina, ikijumuisha umiliki wa jukwaa, nyenzo za wasanii, matumizi ya midia na mwongozo wa mawasiliano.",
  "legal.metaOgDescription": "Notisi za kisheria na umiliki za jukwaa la tovuti ya Carine Sanadina na nyenzo za msanii zilizoidhinishwa.",
  "legal.kicker": "Sheria / Masharti",
  "legal.heading": "Ilani ya Umiliki wa Tovuti na Matumizi",
  "legal.intro": "Notisi hizi hufafanua umiliki, matumizi yaliyoidhinishwa, na mipaka ya uwakilishi kwa tovuti ya Carine Sanadina huku zikiweka matumizi kwa heshima, ushirikiano na uwazi.",
  "legal.ariaLabel": "Masharti ya kisheria na notisi za umiliki",
  "legal.ownership.title": "Notisi ya Umiliki na Mfumo",
  "legal.ownership.body": "Dhana ya tovuti, muundo, muundo, utekelezaji wa msimbo, mwelekeo wa kuona, uzoefu wa kidijitali, mpangilio, na uwasilishaji wa ubunifu huzalishwa na kusimamiwa na Omoluabi Productions, mradi wa ubunifu unaoendeshwa chini ya ETL GIS Consulting LLC. Isipokuwa ikiwa imeelezwa vinginevyo, jukwaa la tovuti na vipengele vinavyohusiana vya uwasilishaji wa kidijitali vinamilikiwa au kudhibitiwa na ETL GIS Consulting LLC.",
  "legal.ip.title": "Mali Miliki",
  "legal.ip.body": "Mipangilio yote ya tovuti, muundo wa kiolesura, msimbo, uwasilishaji wa nakala, na mwelekeo wa ubunifu wa kiwango cha jukwaa haziwezi kunakiliwa, kutumiwa tena, kurekebishwa, kusambazwa upya au kunyonywa kibiashara bila kibali cha maandishi kutoka kwa ETL GIS Consulting LLC au mwenye hakimiliki anayefaa. Nyenzo za wahusika wengine, zinazomilikiwa na msanii, au zilizowekwa kando husalia na wamiliki husika.",
  "legal.artist.title": "Vifaa vya Msanii na Mfano",
  "legal.artist.body": "Carine Sanadina anaendelea kuwa na umiliki au udhibiti wa utambulisho wake wa kibinafsi, mfano ulioidhinishwa, vitabu, muziki, hadithi ya wasifu na nyenzo zinazohusiana na msanii inapohitajika. Onyesho la jina, picha, kazi, muziki au wasifu wa Carine Sanadina kwenye tovuti hii ni kwa madhumuni ya utangazaji na taarifa kulingana na nyenzo za ushirikiano zilizoidhinishwa.",
  "legal.noAgency.title": "Hakuna Wakala au Uwakilishi wa Usimamizi",
  "legal.noAgency.body": "Hakuna chochote kwenye tovuti hii kinachounda wakala, usimamizi, uchapishaji, lebo ya rekodi, ajira, ushirikiano, au uhusiano wa uwakilishi wa kisheria kati ya Carine Sanadina, Omoluabi Productions, na ETL GIS Consulting LLC isipokuwa makubaliano tofauti yaliyoandikwa yanaeleza vinginevyo. Omoluabi Productions haijawasilishwa kama kampuni tofauti iliyosajiliwa, lebo ya rekodi, meneja, wakala, mchapishaji, au mwakilishi wa kisheria.",
  "legal.music.title": "Matumizi ya Muziki na Vyombo vya Habari",
  "legal.music.body": "Muziki, picha, maandishi, sauti, kazi ya sanaa, video na maudhui mengine huwasilishwa kwa ajili ya kuonekana kwa matangazo, muktadha wa taarifa na uwasilishaji wa msanii ulioidhinishwa. Haki zinabaki kwa wamiliki wao. Kunakili bila ruhusa, kupakua, kutumia tena, kurekebisha, kusambaza upya, kuchapisha hadharani, au unyonyaji wa kibiashara ni marufuku bila kibali cha maandishi kutoka kwa mwenye haki husika.",
  "legal.websiteUse.title": "Matumizi ya Tovuti",
  "legal.websiteUse.body": "Wageni wanaweza kutazama tovuti kwa madhumuni ya ugunduzi wa kibinafsi, wa habari na utangazaji. Matumizi ya tovuti lazima yasiingiliane na utendakazi wa tovuti, kuwasilisha vibaya uhusiano wa mhusika yeyote, au kuashiria uidhinishaji, uwakilishi, au ruhusa ambayo haijatolewa tofauti kwa maandishi.",
  "legal.liability.title": "Ukomo wa Dhima",
  "legal.liability.body": "Tovuti hutolewa kama wasilisho la kidijitali la utangazaji na taarifa. ETL GIS Consulting LLC inahifadhi haki ya kusasisha, kuondoa, kusahihisha, kusimamisha au kusitisha sehemu yoyote ya tovuti au uwasilishaji wa media. Kwa kiwango kinachoruhusiwa na sheria, ETL GIS Consulting LLC haiwajibikii kwa njia zisizo za moja kwa moja, za dharula au maswala muhimu yanayotokana na matumizi ya tovuti, upatikanaji, viungo vya watu wengine au uchezaji wa maudhui.",
  "legal.takedown.title": "Maombi ya Kuondoa au Marekebisho",
  "legal.takedown.body": "Maombi ya marekebisho, kuondolewa, masuala ya haki, maswali ya vyombo vya habari au ufafanuzi wa umiliki yanapaswa kutumwa kupitia sehemu ya mawasiliano ya tovuti. Tafadhali jumuisha maelezo ya kutosha ili kutambua nyenzo mahususi na asili ya ombi ili liweze kukaguliwa ipasavyo.",
  "legal.takedown.link": "Nenda kwenye sehemu ya mawasiliano",
  "legal.entity.title": "Taasisi inayoongoza",
  "legal.entity.body": "ETL GIS Consulting LLC ni huluki iliyosajiliwa kisheria inayohusishwa na uendeshaji na udhibiti wa jukwaa la tovuti na uwasilishaji dijitali. Omoluabi Productions hufanya kazi kama chapa ya mradi wa ubunifu/midia inayoendeshwa chini ya ETL GIS Consulting LLC na haijawakilishwa kwa sasa kwenye tovuti hii kama huluki tofauti ya kisheria iliyosajiliwa.",
  "footer.rights": "© 2026 Carine Sanadina. All Rights Reserved.",
  "footer.navLabel": "Urambazaji wa kijachini",
  "footer.legal": "Sheria / Masharti",
  "footer.credit": "Dhana ya tovuti, muundo na uwasilishaji dijitali na Omoluabi Productions, mradi wa ubunifu unaoendeshwa chini ya ETL GIS Consulting LLC."
};

translations.yo = {
  "html.lang": "yo",
  "meta.title": "Carine Sanadina | Ọjọgbọn Itọju Ilera, Onkọwe & Alagbawi Olugbala",
  "meta.description": "Carine Sanadina jẹ Jacksonville kan, alamọdaju ilera ti o da lori Florida, onkọwe, agbawi olugbala, ati ohun alafia ẹdun ti n yi irora pada sinu awokose ti aarin-iwosan.",
  "meta.ogTitle": "Carine Sanadina | Onkọwe ti o dojukọ Iwosan & Alagbawi Olugbala",
  "meta.ogDescription": "Ṣawakiri awọn iwe naa, agbawi, ati ohun alafia ẹdun ti Carine Sanadina, alamọja ilera ti ara ilu Congo ati onkọwe ti o da ni Jacksonville, Florida.",
  "meta.twitterDescription": "Yipada irora sinu iwosan, iwalaaye sinu idi, ati awọn itan sinu imupadabọ.",
  "language.label": "Èdè",
  "language.selectorLabel": "Yan èdè oju opo wẹẹbu",
  "a11y.skip": "Rekọja si akoonu akọkọ",
  "splash.enterApp": "Wọle si app",
  "a11y.primaryNav": "Lilọ kiri akọkọ",
  "a11y.home": "Carine Sanadina ile",
  "a11y.toggleNav": "Yipada lilọ kiri",
  "a11y.primaryCta": "Awọn ipe akọkọ si iṣe",
  "nav.about": "Nipa",
  "nav.works": "Awọn iṣẹ ifihan",
  "nav.music": "Orin",
  "nav.focus": "Awọn agbegbe Idojukọ",
  "nav.positioning": "Ọjọgbọn Voice",
  "nav.contact": "Olubasọrọ",
  "hero.location": "Jacksonville, Florida",
  "hero.subtitle": "Ilera Ọjọgbọn | Onkọwe | Alagbawi iyokù | Imolara Nini alafia Voice",
  "hero.heading": "Yipada irora sinu iwosan, iwalaaye sinu idi, ati awọn itan sinu imupadabọ.",
  "hero.viewWorks": "Wo Awọn iṣẹ Ifihan",
  "hero.listenMusic": "Gbọ Orin",
  "hero.contactCarine": "Olubasọrọ Carine",
  "portrait.figureLabel": "Carine Sanadina ẹya aworan osise",
  "portrait.alt": "Carine Sanadina aworan osise",
  "portrait.fallback": "Carine Sanadina aworan osise ko si fun igba diẹ.",
  "portrait.caption": "Aworan osise ti Carine Sanadina - awọn itan ti o dojukọ iwosan pẹlu igboya, igbagbọ, ati imupadabọsipo.",
  "about.kicker": "Nipa Carine",
  "about.heading": "Ohùn ifarabalẹ, imupadabọsipo, ati iwosan ti o dojukọ eniyan.",
  "about.body1": "Carine Sanadina jẹ ọmọ ilu Kongo kan, alamọdaju ilera ti orisun Jacksonville, onkọwe, oṣere, ati agbawi olugbala ti iṣẹ rẹ yi irora igbesi aye pada si awọn iwe ti o dojukọ iwosan ati awokose.",
  "about.body2": "Iṣẹ rẹ ṣawari iwalaaye iwa-ipa abele, awọn ibatan majele, awọn ọgbẹ ẹdun, igbagbọ, resilience, iya iya, iriri aṣikiri, ati irin-ajo lati ibajẹ si imupadabọ.",
  "about.keyFacts": "Àwọn òtítọ́ pàtàkì: Carine Sanadina n ṣiṣẹ lati Jacksonville, Florida gẹgẹ bi ọjọgbọn itọju ilera, onkọwe, oṣere, alagbawi olugbala, ati ohun alafia ẹdun fun imọ iwa-ipa abele, igbagbọ ati atunṣe.",
  "works.kicker": "Awọn iṣẹ ifihan",
  "works.heading": "Awọn iwe ti o yi ẹri pada si imọlẹ.",
  "works.intro": "Lẹwa, timọtimọ, ati awọn iṣaro akọni fun awọn oluka ti n wa ede fun iwalaaye, imularada, igbagbọ, ati isọdọtun ara ẹni.",
  "buttons.buyAmazon": "Ra lori Amazon",
  "books.pain.coverLabel": "Awọn irora Nobody Ri iwe ideri nipa Carine Sanadina",
  "books.pain.kicker": "Memoir",
  "books.pain.coverTitle": "The Pain Nobody Saw",
  "books.pain.title": "Irora naa Ko si Ẹnikan ti o rii: Itan Farasin ti ilokulo ati Iwalaaye",
  "books.pain.description": "Iwe-iranti aise ti n ṣafihan otitọ ti o farapamọ ti ilokulo ile, titẹ aṣa, ijiya ipalọlọ, ati ọna igboya si ọna ominira, igbagbọ, ati imudara iye-ẹni.",
  "books.toxic.coverLabel": "Ti o ba jẹ Pupa, o jẹ ideri iwe majele nipasẹ Carine Sanadina",
  "books.toxic.kicker": "Itọsọna",
  "books.toxic.coverTitle": "If It’s Red, It’s Toxic",
  "books.toxic.title": "Ti O ba Pupa, O jẹ Majele",
  "books.toxic.description": "Itọsọna igboya lati ṣe idanimọ awọn ami ikilọ, ifọwọyi ẹdun, eewu ti ẹmi, awọn asomọ ti ko ni ilera, ati awọn ilana ti o fa alaafia kuro laiyara, mimọ, ati idi.",
  "books.sunshine.coverLabel": "Ideri iwe opopona si Sunshine nipasẹ Carine Sanadina",
  "books.sunshine.kicker": "Igbagbo & Ireti",
  "books.sunshine.coverTitle": "The Road to Sunshine",
  "books.sunshine.title": "Opopona si Oorun: Irin-ajo Awọn Ijakadi, Igbagbọ ati Ireti",
  "books.sunshine.description": "Iṣiro-ireti ti o kun lori ijakadi ti o le duro, di igbagbọ mu, ati lilọsiwaju irin-ajo lọ si awọn ọjọ didan paapaa nigbati ọna naa ko ni idaniloju.",
  "books.storm.coverLabel": "Lẹhin ideri iwe iji nipasẹ Carine Sanadina",
  "books.storm.kicker": "Imupadabọsipo",
  "books.storm.coverTitle": "After The Storm",
  "books.storm.title": "Lẹhin The Storm",
  "books.storm.description": "Iṣẹ ti o dojukọ imupadabọsipo ti o bọla fun agbara idakẹjẹ ti o tẹle inira, ṣe iranlọwọ fun awọn oluka lati wo ju iwalaaye lọ si ọna iwosan, alaafia, ati iṣeeṣe isọdọtun.",
  "music.kicker": "Ifihan Orin",
  "music.heading": "Orin nipasẹ Carine Sanadina",
  "music.intro": "Akojọ orin Ere iwapọ ti awọn orin ti a ṣe nipasẹ igbagbọ, irẹlẹ, imupadabọ, ati iyin.",
  "music.disclaimer": "Orin ati media ni a gbekalẹ fun gbigbọ igbega ati hihan olorin. Awọn ẹtọ wa pẹlu awọn oniwun wọn. Daakọ laigba aṣẹ, atunpinpin, tabi lilo iṣowo jẹ eewọ.",
  "music.playlistLabel": "Carine Sanadina akojọ orin",
  "music.playlist": "Akojọ orin kikọ",
  "music.time": "Akoko",
  "music.duration": "Iye akoko:",
  "tracks.consolation.title": "Consolation",
  "tracks.consolation.audioLabel": "Itunu nipasẹ Carine Sanadina",
  "tracks.consolation.coverAlt": "Aworan ideri itunu",
  "tracks.consolation.fallback": "Iṣẹ ọna ideri itunu ko si fun igba diẹ.",
  "tracks.consolation.number": "Orin 01",
  "tracks.consolation.description": "Itunu ati ireti ti o dojukọ iwosan",
  "consolationSynopsis": "Orin ìjọsìn tó ń kéde Kristi gẹ́gẹ́ bí ìtùnú, ààbò àti Ọba.",
  "tracks.consolation.playLabel": "Play Itunu",
  "tracks.gentillesse.title": "La Gentillesse",
  "tracks.gentillesse.audioLabel": "La Gentillesse nipasẹ Carine Sanadina",
  "tracks.gentillesse.coverAlt": "La Gentillesse ideri aworan",
  "tracks.gentillesse.fallback": "La Gentillesse aworan ideri ko si fun igba diẹ.",
  "tracks.gentillesse.number": "Orin 02",
  "tracks.gentillesse.description": "Orin iyin ti o kun igbagbo",
  "laGentillesseSynopsis": "Ayẹyẹ inú-rere, àánú àti agbára oore-ọfẹ.",
  "tracks.gentillesse.playLabel": "Play La Gentillesse",
  "tracks.wonderful.title": "Iyanu",
  "tracks.wonderful.audioLabel": "Iyanu nipasẹ Carine Sanadina",
  "tracks.wonderful.coverAlt": "Iyanu ideri aworan",
  "tracks.wonderful.fallback": "Iṣẹ ọna ideri iyalẹnu ko si fun igba diẹ.",
  "tracks.wonderful.number": "Orin 03",
  "tracks.wonderful.description": "Iyin ati idupe",
  "wonderfulSynopsis": "Ẹrí ayọ̀ nípa rere, ìṣòtítọ́ àti ìfẹ́ Ọlọ́run.",
  "tracks.wonderful.playLabel": "Play Iyanu",
  "tracks.womanifesto.audioLabel": "Womanifesto nipasẹ Carine Sanadina",
  "tracks.womanifesto.coverAlt": "Aworan ideri Womanifesto",
  "tracks.womanifesto.fallback": "Iṣẹ ọna ideri Womanifesto ko si fun igba diẹ.",
  "tracks.womanifesto.number": "Orin 04",
  "tracks.womanifesto.shortDescription": "Orin gospel Áfíríkà alárinrin tí ń ṣe ayẹyẹ ìfaradà obìnrin, ìwòsàn, oore-ọfẹ́, àti ìṣẹ́gun nípasẹ̀ ìgbàgbọ́.",
  "tracks.womanifesto.description": "Orin gospel Áfíríkà alárinrin tí ń ṣe ayẹyẹ ìfaradà obìnrin, ìwòsàn, oore-ọfẹ́, àti ìṣẹ́gun nípasẹ̀ ìgbàgbọ́.",
  "womanifestoSynopsis": "Ìkéde ìwòsàn, ìfaradà àti oore-ọfẹ fún àwọn obìnrin tí ń dìde ní agbára.",
  "tracks.womanifesto.playLabel": "Play Womanifesto",
  "tracks.paranoia.title": "Paranoïa Persécutive",
  "tracks.paranoia.audioLabel": "Paranoïa Persécutive nipasẹ Carine Sanadina",
  "tracks.paranoia.coverAlt": "Aworan ideri Paranoïa Persécutive",
  "tracks.paranoia.fallback": "Iṣẹ ọna ideri Paranoïa Persécutive ko si fun igba diẹ.",
  "tracks.paranoia.number": "Orin 05",
  "tracks.paranoia.shortDescription": "Orin Faransé sinimátíkì nipa ìmọ̀lára inú, aabo, ati ìṣọ́ra ìwalaaye, nibiti ìṣọ́ra di ìkìlọ̀ ati ọgbọn.",
  "tracks.paranoia.description": "Orin Faransé sinimátíkì nipa ìmọ̀lára inú, aabo, ati ìṣọ́ra ìwalaaye, nibiti ìṣọ́ra di ìkìlọ̀ ati ọgbọn.",
  "paranoiaPersecutiveSynopsis": "Ìrònú alárinká nípa ìmọ̀ inú, ìṣọ́ra àti ìmòye ẹ̀mí.",
  "tracks.paranoia.playLabel": "Play Paranoïa Persécutive",
  "mini.label": "Ẹrọ orin mini lọwọlọwọ",
  "mini.noTrack": "Ko si orin ti o yan",
  "mini.toggleLabel": "Ṣiṣẹ tabi da duro orin lọwọlọwọ",
  "mini.progress": "Ilọsiwaju orin lọwọlọwọ",
  "mini.volumeShort": "Vol",
  "mini.volume": "Iwọn didun orin lọwọlọwọ",
  "audio.play": "Ṣiṣẹ",
  "audio.pause": "Sinmi",
  "audio.coverArt": "aworan ideri",
  "audio.playbackError": "Sisisẹsẹhin ohun ko le bẹrẹ. Jọwọ gbiyanju lẹẹkansi.",
  "audio.unavailable": "Audio ko si fun igba diẹ. Jọwọ ṣayẹwo pada laipe.",
  "focus.kicker": "Awọn agbegbe Idojukọ Mojuto",
  "focus.heading": "Awọn akori ni okan ti Carine ká iṣẹ.",
  "focus.gridLabel": "Awọn agbegbe idojukọ mojuto",
  "focus.pills.domestic": "Imoye Iwa-ipa Abele",
  "focus.pills.healing": "Iwosan ẹdun",
  "focus.pills.toxic": "Majele ti Relationship Recovery",
  "focus.pills.faith": "Igbagbo ati Resilience",
  "focus.pills.women": "Agbara Awọn Obirin",
  "focus.pills.selfWorth": "Ara-Worth ati Identity",
  "focus.pills.immigrant": "Immigrant ati asasala Iriri",
  "focus.pills.motherhood": "Iya ati Iwalaaye",
  "focus.pills.writing": "Awokose kikọ",
  "focus.pills.care": "Abojuto Idojukọ Eniyan",
  "positioning.kicker": "Ipo Ọjọgbọn",
  "positioning.heading": "Abojuto aanu ati onkọwe iwuri.",
  "positioning.healthcare.title": "Ọjọgbọn Itọju Ilera",
  "positioning.healthcare.body": "Pese aanu, atilẹyin ti o dojukọ alaisan ni agbegbe ilera kan, mimu itarara, iṣẹ ṣiṣe, ati oye eniyan si iṣẹ ojoojumọ.",
  "positioning.author.title": "Onkọwe ati ohun iwuri",
  "positioning.author.body": "Kọ awọn iwe ati akoonu afihan ti o da lori iwalaaye, iwosan, igbagbọ, imọ ibatan ibatan majele, imupadabọ ẹdun, ati iyipada ti ara ẹni.",
  "quote.label": "Ere ifihan",
  "quote.text": "\"Irora le ṣe apẹrẹ itan naa, ṣugbọn ko ni lati ni opin.”",
  "cta.kicker": "Bẹrẹ ibaraẹnisọrọ naa",
  "cta.heading": "Pe ohùn naa. Pin itan naa. Kọ akoko ti o dojukọ iwosan.",
  "cta.body": "Yan ọna ibeere Ere kan fun awọn ifiwepe sisọ, awọn ifọrọwanilẹnuwo, awọn ifowosowopo iṣẹda, tabi awọn ibaraẹnisọrọ timotimo ti a ṣe apẹrẹ nipasẹ resilience, igbagbọ, ati imupadabọ.",
  "cta.disclaimer": "Oju opo wẹẹbu yii ko ṣe agbekalẹ ile-ibẹwẹ, iṣakoso, titẹjade, ajọṣepọ, iṣẹ, tabi aṣoju ofin. Ifowosowopo tabi awọn ijiroro ifiṣura nilo adehun kikọ lọtọ.",
  "cta.optionsLabel": "Awọn aṣayan olubasọrọ",
  "cta.invite": "Pe Carine lati Sọ",
  "cta.media": "Beere Ifọrọwanilẹnuwo Media",
  "cta.music": "Jiroro Ifowosowopo Orin",
  "cta.books": "Ṣeto Ibaraẹnisọrọ",
  "legal.metaTitle": "Ofin / Awọn ofin | Carine Sanadina",
  "legal.metaDescription": "Awọn akiyesi ofin ati nini fun oju opo wẹẹbu Carine Sanadina, pẹlu ohun-ini Syeed, awọn ohun elo olorin, lilo media, ati itọsọna olubasọrọ.",
  "legal.metaOgDescription": "Awọn akiyesi ofin ati nini fun aaye ayelujara Carine Sanadina ati awọn ohun elo olorin ti a fọwọsi.",
  "legal.kicker": "Ofin / Awọn ofin",
  "legal.heading": "Oju opo wẹẹbu Nini ati Akiyesi Lilo",
  "legal.intro": "Awọn akiyesi wọnyi ṣe alaye nini nini, lilo aṣẹ, ati awọn aala aṣoju fun oju opo wẹẹbu Carine Sanadina lakoko mimu iriri naa bọwọ, ifowosowopo, ati gbangba.",
  "legal.ariaLabel": "Awọn ofin ofin ati awọn akiyesi nini",
  "legal.ownership.title": "Ohun ini ati Platform Akiyesi",
  "legal.ownership.body": "Agbekale oju opo wẹẹbu, apẹrẹ, eto, imuse koodu, itọsọna wiwo, iriri oni-nọmba, ipilẹ, ati igbejade ẹda ni iṣelọpọ ati iṣakoso nipasẹ Awọn iṣelọpọ Omoluabi, iṣẹ akanṣe ẹda ti o ṣiṣẹ labẹ ETL GIS Consulting LLC. Ayafi ti bibẹẹkọ ti sọ, Syeed oju opo wẹẹbu ati awọn eroja igbejade oni nọmba ti o ni ibatan jẹ ohun-ini tabi iṣakoso nipasẹ ETL GIS Consulting LLC.",
  "legal.ip.title": "Ohun ini ọlọgbọn",
  "legal.ip.body": "Gbogbo awọn ipalemo oju opo wẹẹbu, iselo wiwo, koodu, igbejade ẹda, ati itọsọna iṣẹda ipele ipele le ma ṣe daakọ, tunlo, tunṣe, tun pin kaakiri, tabi lo nilokulo iṣowo laisi igbanilaaye kikọ lati ọdọ ETL GIS Consulting LLC tabi dimu ẹtọ to yẹ. Ẹnikẹta, ohun-ini olorin, tabi awọn ohun elo ti o ni ẹtọ lọtọ wa pẹlu awọn oniwun wọn.",
  "legal.artist.title": "Awọn ohun elo olorin ati Irisi",
  "legal.artist.body": "Carine Sanadina ṣe idaduro nini tabi iṣakoso ti idanimọ ti ara ẹni, irisi ti a fọwọsi, awọn iwe, orin, itan igbesi aye, ati awọn ohun elo ti o jọmọ olorin nibiti o wulo. Ifihan ti Carine Sanadina orukọ, aworan, awọn iṣẹ, orin, tabi igbasilẹ igbesi aye lori oju opo wẹẹbu yii jẹ fun igbega ati awọn idi alaye ti o da lori awọn ohun elo ifowosowopo ti a fọwọsi.",
  "legal.noAgency.title": "Ko si Ile-iṣẹ tabi Aṣoju Iṣakoso",
  "legal.noAgency.body": "Ko si ohunkan lori oju opo wẹẹbu yii ti o ṣẹda ile-ibẹwẹ kan, iṣakoso, titẹjade, aami-igbasilẹ, oojọ, ajọṣepọ, tabi ibatan oniduro labẹ ofin laarin Carine Sanadina, Awọn iṣelọpọ Omoluabi, ati ETL GIS Consulting LLC ayafi ti adehun kikọ ti o lọtọ sọ bibẹẹkọ. Awọn iṣelọpọ Omoluabi ko ṣe afihan bi ile-iṣẹ ti o forukọsilẹ lọtọ, aami igbasilẹ, oluṣakoso, aṣoju, akede, tabi aṣoju ofin.",
  "legal.music.title": "Orin ati Media Lo",
  "legal.music.body": "Orin, awọn aworan, ọrọ, ohun, iṣẹ ọna, fidio, ati awọn media miiran ni a gbekalẹ fun hihan ipolowo, ipo alaye, ati igbejade olorin ti a fọwọsi. Awọn ẹtọ wa pẹlu awọn oniwun wọn. Didaakọ laigba aṣẹ, igbasilẹ, atunlo, iyipada, atunpinpin, ipolowo gbangba, tabi ilokulo iṣowo jẹ eewọ laisi igbanilaaye kikọ lati ọdọ onimu ẹtọ to yẹ.",
  "legal.websiteUse.title": "Oju opo wẹẹbu Lilo",
  "legal.websiteUse.body": "Awọn alejo le wo oju opo wẹẹbu fun ti ara ẹni, alaye, ati awọn idi iṣawari ipolowo. Lilo oju opo wẹẹbu ko gbọdọ dabaru pẹlu iṣiṣẹ aaye, ṣe afihan ibatan ti ẹgbẹ eyikeyi, tabi ṣe afihan ifọwọsi, aṣoju, tabi igbanilaaye ti ko gba ni lọtọ ni kikọ.",
  "legal.liability.title": "Idiwọn ti Layabiliti",
  "legal.liability.body": "Oju opo wẹẹbu ti pese bi igbega ati igbejade oni nọmba alaye. ETL GIS Consulting LLC ni ẹtọ lati ṣe imudojuiwọn, yọkuro, tunwo, daduro, tabi dawọ eyikeyi apakan ti oju opo wẹẹbu tabi igbejade media. Si iye ti ofin gba laaye, ETL GIS Consulting LLC ko ṣe iduro fun aiṣe-taara, lairotẹlẹ, tabi awọn ọran ti o waye lati lilo oju opo wẹẹbu, wiwa, awọn ọna asopọ ẹnikẹta, tabi ṣiṣiṣẹsẹhin media.",
  "legal.takedown.title": "Gbigbasilẹ tabi Awọn ibeere Atunse",
  "legal.takedown.body": "Awọn ibeere fun atunṣe, yiyọ kuro, awọn ifiyesi ẹtọ, awọn ibeere media, tabi alaye nini yẹ ki o firanṣẹ nipasẹ apakan olubasọrọ oju opo wẹẹbu. Jọwọ ṣafikun alaye ti o to lati ṣe idanimọ ohun elo kan pato ati iru ibeere naa ki o le ṣe atunyẹwo daradara.",
  "legal.takedown.link": "Lọ si apakan olubasọrọ",
  "legal.entity.title": "Egbe Alakoso",
  "legal.entity.body": "ETL GIS Consulting LLC jẹ nkan ti o forukọsilẹ labẹ ofin ti o ni nkan ṣe pẹlu iṣẹ ati iṣakoso ti pẹpẹ oju opo wẹẹbu ati igbejade oni nọmba. Awọn iṣelọpọ Omoluabi n ṣiṣẹ bi ami iyasọtọ iṣẹda/media ti n ṣiṣẹ labẹ ETL GIS Consulting LLC ati pe ko ṣe aṣoju lọwọlọwọ lori oju opo wẹẹbu yii bi nkan ti o forukọsilẹ ti o yatọ.",
  "footer.rights": "© 2026 Carine Sanadina. All Rights Reserved.",
  "footer.navLabel": "Lilọ kiri ẹlẹsẹ",
  "footer.legal": "Ofin / Awọn ofin",
  "footer.credit": "Agbekale oju opo wẹẹbu, apẹrẹ, ati igbejade oni-nọmba nipasẹ Awọn iṣelọpọ Omoluabi, iṣẹ akanṣe ẹda ti o ṣiṣẹ labẹ ETL GIS Consulting LLC."
};

const premiumExperienceTranslations = {
  en: {
    'music.stageLabel': 'Premium now playing experience',
    'music.controlsLabel': 'Music playback controls',
    'music.nowPlaying': 'Now playing',
    'music.visualizerFallback': 'Visualizer is resting. Audio playback will continue normally.',
    'music.visualizerAvailable': 'Visualizer animation appears above.',
    'music.shuffle': 'Shuffle',
    'music.shuffleOn': 'Shuffle on',
    'music.shuffleOff': 'Shuffle off',
    'music.repeatAll': 'Repeat All',
    'music.repeatOne': 'Repeat One',
    'music.repeatOff': 'Repeat Off',
    'music.nextTrack': 'Next track',
    'mini.expand': 'Expand',
    'mini.close': 'Close player',
    'lyrics.expand': 'Expand Lyrics',
    'lyrics.collapse': 'Collapse Lyrics',
    'lyrics.return': 'Back to Player',
    'lyrics.focusKicker': 'Lyrics Focus Mode',
    'lyrics.moreMenu': '⋯ More',
    'lyrics.moreMenuLabel': 'Lyrics focus menu',
    'lyrics.moreClose': 'Close lyrics menu',
    'press.kicker': 'Press Kit',
    'press.heading': 'A refined media hub for conversations about healing, authorship, faith, and restoration.',
    'press.body': 'Carine Sanadina is available for thoughtful media conversations, community features, and healing-centered storytelling opportunities aligned with her books, music, survivor advocacy, and healthcare-rooted compassion.',
    'bio.title': 'Media Bio',
    'bio.body': 'Congolese-born and Jacksonville-based, Carine Sanadina brings together healthcare service, inspirational writing, music, and survivor advocacy to speak with tenderness about pain, courage, faith, and emotional restoration.',
    'press.headshots.title': 'Headshots & Portraits',
    'press.headshots.body': 'Approved portraits and downloadable media assets can be attached here when final files are available. No binary assets are bundled automatically.',
    'press.assetsPlaceholder': 'Downloadable assets placeholder',
    'press.books.title': 'Book List',
    'press.books.body': 'The Pain Nobody Saw, If It’s Red, It’s Toxic, The Road to Sunshine, and After The Storm.',
    'press.music.title': 'Music List',
    'press.music.body': 'Consolation, La Gentillesse, Wonderful, Womanifesto, Paranoïa Persécutive, and Reason are presented as a tender listening window into Carine’s healing-centered artistry.',
    'speaking.title': 'Speaking Topics',
    'speaking.topic1': 'Domestic violence awareness and hidden survival',
    'speaking.topic2': 'Faith, resilience, and rebuilding self-worth',
    'speaking.topic3': 'Human-centered care, immigrant experience, and emotional wellness',
    'inquiry.title': 'Collaboration Inquiry',
    'inquiry.body': 'For interviews, speaking invitations, music conversations, or book-centered events, use the contact paths below so each opportunity can be reviewed with clarity and care.',
    'inquiry.cta': 'Start an inquiry',
    'reflections.kicker': 'Reflections',
    'reflections.heading': 'Healing notes inspired by Carine’s books, music, and restoration-centered themes.',
    'reflections.intro': 'A quiet, CMS-ready reflection library for readers exploring healing, faith, restoration, advocacy, resilience, womanhood, and emotional growth.',
    'reflections.architectureNote': 'Each reflection is modeled with a title, excerpt, date, category, cover image, slug, and rich-content path so new writing can be added without changing the visual rhythm of this page.',
    'reflections.allLoaded': 'All reflections are visible',
    'reflections.toolbarLabel': 'Filter reflections',
    'reflections.searchLabel': 'Search reflections',
    'reflections.searchPlaceholder': 'Search by theme or title',
    'reflections.categoryLabel': 'Reflection categories',
    'reflections.empty': 'No reflections match that search yet.',
    'reflections.loadMore': 'Load more reflections',
    'reflections.readTime': 'read',
    'reflections.featuredLabel': 'Featured reflection',
    'reflections.promptLabel': 'Reflection prompt',
    'reflections.all': 'All',
    'pwa.installText': 'Enjoy Carine’s music, books, and healing-centered message anytime. Install the app for a smoother experience.',
    'pwa.iosInstructions': 'To install this app on iPhone: tap the Share button, then choose Add to Home Screen.',
    'pwa.installButton': 'Install App',
    'pwa.maybeLater': 'Maybe Later',
    'pwa.dismissLabel': 'Dismiss install prompt',
    'quote.wallLabel': 'Featured quote wall',
    'quote.wall.one': 'Survival is not the end of the story.',
    'quote.wall.two': 'Healing can become a language.',
    'quote.wall.three': 'Faith gives the broken places a future.'
  },
  fr: {
    'music.stageLabel': 'Expérience premium du titre en cours',
    'music.controlsLabel': 'Commandes de lecture musicale',
    'music.nowPlaying': 'En lecture',
    'music.visualizerFallback': 'Le visualiseur se repose. La lecture audio continue normalement.',
    'music.visualizerAvailable': 'L’animation de visualisation apparaît ci-dessus.',
    'music.shuffle': 'Aléatoire',
    'music.shuffleOn': 'Aléatoire activé',
    'music.shuffleOff': 'Aléatoire désactivé',
    'music.repeatAll': 'Répéter tout',
    'music.repeatOne': 'Répéter un',
    'music.repeatOff': 'Répétition désactivée',
    'music.nextTrack': 'Titre suivant',
    'mini.expand': 'Agrandir',
    'lyrics.expand': 'Agrandir les paroles',
    'lyrics.collapse': 'Réduire les paroles',
    'lyrics.return': 'Retour au lecteur',
    'lyrics.focusKicker': 'Mode Focus Paroles',
    'lyrics.moreMenu': '⋯ Plus',
    'lyrics.moreMenuLabel': 'Menu focus des paroles',
    'lyrics.moreClose': 'Fermer le menu des paroles',
    'mini.close': 'Fermer le lecteur',
    'press.kicker': 'Dossier de presse',
    'press.heading': 'Un espace média raffiné pour parler de guérison, d’écriture, de foi et de restauration.',
    'press.body': 'Carine Sanadina est disponible pour des échanges médias réfléchis, des portraits communautaires et des récits centrés sur la guérison liés à ses livres, sa musique, son plaidoyer et sa compassion issue du soin.',
    'bio.title': 'Bio média',
    'bio.body': 'Née au Congo et basée à Jacksonville, Carine Sanadina unit le service en santé, l’écriture inspirante, la musique et le plaidoyer des survivantes pour parler avec tendresse de douleur, de courage, de foi et de restauration émotionnelle.',
    'speaking.title': 'Sujets de conférence',
    'speaking.topic1': 'Sensibilisation aux violences domestiques et survie cachée',
    'speaking.topic2': 'Foi, résilience et reconstruction de l’estime de soi',
    'speaking.topic3': 'Soin centré sur l’humain, expérience immigrée et bien-être émotionnel',
    'inquiry.title': 'Demande de collaboration',
    'inquiry.body': 'Pour les interviews, invitations, conversations musicales ou événements autour des livres, utilisez les chemins de contact ci-dessous afin que chaque opportunité soit examinée avec clarté et soin.',
    'inquiry.cta': 'Commencer une demande',
    'nav.reflections': 'Réflexions',
    'hero.readReflections': 'Lire les réflexions',
    'reflections.kicker': 'Réflexions',
    'reflections.heading': 'Notes de guérison inspirées par les livres, la musique et les thèmes de restauration de Carine.',
    'reflections.intro': 'Une bibliothèque éditoriale statique pour explorer la survie, les relations toxiques, la foi, la bonté et la restauration émotionnelle.',
    'reflections.toolbarLabel': 'Filtrer les réflexions',
    'reflections.searchLabel': 'Rechercher des réflexions',
    'reflections.searchPlaceholder': 'Rechercher par thème ou titre',
    'reflections.categoryLabel': 'Catégories de réflexions',
    'reflections.empty': 'Aucune réflexion ne correspond à cette recherche pour le moment.',
    'reflections.loadMore': 'Charger plus de réflexions',
    'reflections.readTime': 'lecture',
    'reflections.featuredLabel': 'Réflexion en vedette',
    'reflections.promptLabel': 'Question de réflexion',
    'reflections.all': 'Tout',
    'pwa.installText': 'Profitez de la musique, des livres et du message centré sur la guérison de Carine à tout moment. Installez l’application pour une expérience plus fluide.',
    'pwa.iosInstructions': 'Touchez Partager, puis Ajouter à l’écran d’accueil.',
    'pwa.installButton': 'Installer',
    'pwa.maybeLater': 'Peut-être plus tard',
    'pwa.dismissLabel': 'Fermer l’invite d’installation',
    'quote.wallLabel': 'Mur de citations',
    'quote.wall.one': 'La survie n’est pas la fin de l’histoire.',
    'quote.wall.two': 'La guérison peut devenir une langue.',
    'quote.wall.three': 'La foi donne un avenir aux lieux brisés.'
  },
  ln: {}, es: {}, sw: {}, yo: {}
};

premiumExperienceTranslations.es = {
  ...premiumExperienceTranslations.en,
  'music.nowPlaying': 'Reproduciendo ahora', 'music.shuffle': 'Aleatorio', 'music.repeatAll': 'Repetir todo', 'music.repeatOne': 'Repetir una', 'music.repeatOff': 'Repetición desactivada', 'music.nextTrack': 'Siguiente canción', 'nav.reflections': 'Reflexiones', 'hero.readReflections': 'Leer reflexiones', 'mini.expand': 'Expandir', 'mini.close': 'Cerrar reproductor',
  'press.kicker': 'Kit de prensa', 'bio.title': 'Biografía para medios', 'speaking.title': 'Temas para charlas', 'inquiry.title': 'Consulta de colaboración', 'inquiry.cta': 'Iniciar consulta'
};
premiumExperienceTranslations.sw = {
  ...premiumExperienceTranslations.en,
  'music.nowPlaying': 'Inacheza sasa', 'music.shuffle': 'Changanya', 'music.repeatAll': 'Rudia zote', 'music.repeatOne': 'Rudia moja', 'music.repeatOff': 'Rudia imezimwa', 'music.nextTrack': 'Wimbo unaofuata', 'mini.expand': 'Panua', 'mini.close': 'Funga kicheza muziki',
  'press.kicker': 'Seti ya Vyombo vya Habari', 'bio.title': 'Wasifu wa Vyombo vya Habari', 'speaking.title': 'Mada za Kuzungumza', 'inquiry.title': 'Ombi la Ushirikiano', 'inquiry.cta': 'Anza ombi'
};
premiumExperienceTranslations.ln = {
  ...premiumExperienceTranslations.en,
  'music.nowPlaying': 'Ezali kobeta sikoyo', 'music.shuffle': 'Sangisa', 'music.repeatAll': 'Zongela nyonso', 'music.repeatOne': 'Zongela moko', 'music.repeatOff': 'Kozongela ekangami', 'music.nextTrack': 'Loyembo elandi', 'mini.expand': 'Monisa mobimba', 'mini.close': 'Kanga lecteur',
  'press.kicker': 'Dossier ya presse', 'bio.title': 'Bio ya média', 'speaking.title': 'Masolo ya koloba', 'inquiry.title': 'Bosengi ya kosala elongo', 'inquiry.cta': 'Banda bosengi'
};
premiumExperienceTranslations.yo = {
  ...premiumExperienceTranslations.en,
  'music.nowPlaying': 'Ó ń dun báyìí', 'music.shuffle': 'Darapọ̀', 'music.repeatAll': 'Tun gbogbo rẹ ṣe', 'music.repeatOne': 'Tun ẹyọ kan ṣe', 'music.repeatOff': 'Ìtúnṣe pa', 'music.nextTrack': 'Orin tó kàn', 'mini.expand': 'Faagun', 'mini.close': 'Pa ẹrọ orin',
  'press.kicker': 'Ohun elo atẹjade', 'bio.title': 'Ìtàn kukuru fún mídia', 'speaking.title': 'Àwọn koko ọrọ sisọ', 'inquiry.title': 'Ìbéèrè ìfọwọ́sowọ́pọ̀', 'inquiry.cta': 'Bẹrẹ ìbéèrè'
};

Object.entries(premiumExperienceTranslations).forEach(([language, dictionary]) => {
  if (translations[language]) {
    Object.assign(translations[language], dictionary);
  }
});


const fullSiteTranslationAdditions = {
  en: {
    'cta.call': 'Call Carine',
    'offline.metaTitle': 'Offline | Carine Sanadina',
    'offline.kicker': 'Offline',
    'offline.heading': 'You’re offline, but the healing journey can continue.',
    'offline.body': 'Reconnect to stream music, open external book links, and receive the latest live site assets. Core pages cached for this static GitHub Pages app will reopen when available.',
    'offline.returnHome': 'Return to the home page',
    'reflections.explore': 'Explore related work',
    'reflections.exploreAria': 'Explore related section for {title}',
    'reflection.category.survival': 'Survival',
    'reflection.category.advocacy': 'Advocacy',
    'reflection.category.resilience': 'Resilience',
    'reflection.category.womanhood': 'Womanhood',
    'reflection.category.emotionalGrowth': 'Emotional Growth',
    'reflection.category.toxic': 'Toxic Relationship Awareness',
    'reflection.category.faith': 'Faith & Hope',
    'reflection.category.restoration': 'Restoration',
    'reflection.category.kindness': 'Kindness',
    'reflection.category.healing': 'Emotional Healing',
    'reflection.hidden.title': 'When hidden pain finally receives language',
    'reflection.hidden.excerpt': 'Inspired by The Pain Nobody Saw, this reflection centers the dignity of naming abuse, cultural pressure, and silent suffering without asking survivors to turn their pain into performance.',
    'reflection.hidden.readTime': '4 min',
    'reflection.hidden.quote': 'Pain may shape the story, but it does not get to own the ending.',
    'reflection.hidden.prompt': 'Where do you need gentler language for something you survived?',
    'reflection.red.title': 'Red flags are invitations to protect your peace',
    'reflection.red.excerpt': 'A book-inspired note on recognizing emotional manipulation, spiritual danger, unhealthy attachments, and patterns that quietly drain clarity, confidence, and purpose.',
    'reflection.red.readTime': '5 min',
    'reflection.red.quote': 'What costs your peace is asking for discernment.',
    'reflection.red.prompt': 'What pattern has been asking you to choose clarity sooner?',
    'reflection.sunshine.title': 'The road to sunshine can begin while the road is still hard',
    'reflection.sunshine.excerpt': 'Drawn from the hope-forward themes of The Road to Sunshine, this reflection honors struggle, faith, and the patient courage required to keep walking toward brighter days.',
    'reflection.sunshine.readTime': '3 min',
    'reflection.sunshine.quote': 'Hope does not deny the storm; it keeps a lamp lit through it.',
    'reflection.sunshine.prompt': 'What small light can you carry into this week?',
    'reflection.storm.title': 'After the storm, restoration can be quiet before it is visible',
    'reflection.storm.excerpt': 'A restoration-centered meditation for readers rebuilding peace after hardship, honoring the unseen strength that comes after survival.',
    'reflection.storm.readTime': '4 min',
    'reflection.storm.quote': 'Healing often starts as a private decision to breathe again.',
    'reflection.storm.prompt': 'What would restoration look like if it did not need to be rushed?',
    'reflection.kindness.title': 'Kindness can become a healing practice',
    'reflection.kindness.excerpt': 'Inspired by La Gentillesse, this note treats kindness as more than softness: a daily discipline that protects dignity, repairs atmosphere, and opens room for grace.',
    'reflection.kindness.readTime': '3 min',
    'reflection.kindness.quote': 'Gentleness can still be strong enough to change a room.',
    'reflection.kindness.prompt': 'Where can kindness become a boundary, not a burden?',
    'reflection.consolation.title': 'Consolation is not weakness; it is oxygen for courage',
    'reflection.consolation.excerpt': 'A music-inspired reflection on receiving comfort without shame, especially when healing feels slow, private, or unfinished.',
    'reflection.consolation.readTime': '3 min',
    'reflection.consolation.quote': 'Comfort gives courage somewhere safe to begin again.',
    'reflection.consolation.prompt': 'What form of consolation would help you keep going today?',
    'reflection.advocacy.title': 'Advocacy can be tender and still tell the truth',
    'reflection.advocacy.excerpt': 'A quiet note on speaking for survivors without turning pain into spectacle, choosing dignity, safety, faith, and restoration as the center of every conversation.',
    'reflection.advocacy.readTime': '4 min',
    'reflection.advocacy.quote': 'Truth can be firm without losing tenderness.',
    'reflection.advocacy.prompt': 'Where can your voice protect dignity this week?'
  },
  fr: {
    'cta.call': 'Appeler Carine',
    'offline.metaTitle': 'Hors ligne | Carine Sanadina',
    'offline.kicker': 'Hors ligne',
    'offline.heading': 'Vous êtes hors ligne, mais le chemin de guérison peut continuer.',
    'offline.body': 'Reconnectez-vous pour écouter la musique, ouvrir les liens externes des livres et recevoir les derniers éléments du site. Les pages principales mises en cache pour cette application statique GitHub Pages se rouvriront lorsqu’elles seront disponibles.',
    'offline.returnHome': 'Retourner à la page d’accueil',
    'reflections.explore': 'Explorer l’œuvre liée',
    'reflections.exploreAria': 'Explorer la section liée à {title}',
    'reflection.category.survival': 'Survie',
    'reflection.category.advocacy': 'Plaidoyer',
    'reflection.category.resilience': 'Résilience',
    'reflection.category.womanhood': 'Féminité',
    'reflection.category.emotionalGrowth': 'Croissance émotionnelle',
    'reflection.category.toxic': 'Sensibilisation aux relations toxiques',
    'reflection.category.faith': 'Foi et espoir',
    'reflection.category.restoration': 'Restauration',
    'reflection.category.kindness': 'Bonté',
    'reflection.category.healing': 'Guérison émotionnelle',
    'reflection.hidden.title': 'Quand la douleur cachée reçoit enfin des mots',
    'reflection.hidden.excerpt': 'Inspirée de The Pain Nobody Saw, cette réflexion honore la dignité de nommer l’abus, la pression culturelle et la souffrance silencieuse sans demander aux survivantes de transformer leur douleur en spectacle.',
    'reflection.hidden.readTime': '4 min',
    'reflection.hidden.quote': 'La douleur peut façonner l’histoire, mais elle ne possède pas la fin.',
    'reflection.hidden.prompt': 'Où avez-vous besoin de mots plus doux pour ce que vous avez survécu?',
    'reflection.red.title': 'Les signaux rouges invitent à protéger votre paix',
    'reflection.red.excerpt': 'Une note inspirée du livre sur la manipulation émotionnelle, le danger spirituel, les attachements malsains et les schémas qui épuisent la clarté, la confiance et le but.',
    'reflection.red.readTime': '5 min',
    'reflection.red.quote': 'Ce qui coûte votre paix demande du discernement.',
    'reflection.red.prompt': 'Quel schéma vous invite à choisir la clarté plus tôt?',
    'reflection.sunshine.title': 'La route vers le soleil peut commencer même quand la route reste dure',
    'reflection.sunshine.excerpt': 'Inspirée par les thèmes d’espoir de The Road to Sunshine, cette réflexion honore la lutte, la foi et le courage patient de continuer vers des jours plus lumineux.',
    'reflection.sunshine.readTime': '3 min',
    'reflection.sunshine.quote': 'L’espoir ne nie pas la tempête; il garde une lampe allumée.',
    'reflection.sunshine.prompt': 'Quelle petite lumière pouvez-vous porter cette semaine?',
    'reflection.storm.title': 'Après la tempête, la restauration peut être discrète avant d’être visible',
    'reflection.storm.excerpt': 'Une méditation sur la reconstruction de la paix après l’épreuve, honorant la force invisible qui vient après la survie.',
    'reflection.storm.readTime': '4 min',
    'reflection.storm.quote': 'La guérison commence souvent par une décision privée de respirer encore.',
    'reflection.storm.prompt': 'À quoi ressemblerait la restauration si elle n’avait pas besoin d’être pressée?',
    'reflection.kindness.title': 'La bonté peut devenir une pratique de guérison',
    'reflection.kindness.excerpt': 'Inspirée de La Gentillesse, cette note voit la bonté comme une discipline quotidienne qui protège la dignité, répare l’atmosphère et ouvre un espace de grâce.',
    'reflection.kindness.readTime': '3 min',
    'reflection.kindness.quote': 'La douceur peut rester assez forte pour changer une pièce.',
    'reflection.kindness.prompt': 'Où la bonté peut-elle devenir une limite, et non un fardeau?',
    'reflection.consolation.title': 'La consolation n’est pas une faiblesse; c’est l’oxygène du courage',
    'reflection.consolation.excerpt': 'Une réflexion inspirée par la musique sur l’accueil du réconfort sans honte, surtout lorsque la guérison semble lente, privée ou inachevée.',
    'reflection.consolation.readTime': '3 min',
    'reflection.consolation.quote': 'Le réconfort donne au courage un lieu sûr pour recommencer.',
    'reflection.consolation.prompt': 'Quelle forme de consolation vous aiderait à continuer aujourd’hui?',
    'reflection.advocacy.title': 'Le plaidoyer peut rester tendre tout en disant la vérité',
    'reflection.advocacy.excerpt': 'Une note calme sur la manière de parler pour les survivantes sans transformer la douleur en spectacle, en gardant dignité, sécurité, foi et restauration au centre.',
    'reflection.advocacy.readTime': '4 min',
    'reflection.advocacy.quote': 'La vérité peut être ferme sans perdre sa tendresse.',
    'reflection.advocacy.prompt': 'Où votre voix peut-elle protéger la dignité cette semaine?'
  },
  es: {
    'cta.call': 'Llamar a Carine',
    'offline.metaTitle': 'Sin conexión | Carine Sanadina',
    'offline.kicker': 'Sin conexión',
    'offline.heading': 'Estás sin conexión, pero el camino de sanación puede continuar.',
    'offline.body': 'Vuelve a conectarte para reproducir música, abrir enlaces externos de libros y recibir los recursos más recientes del sitio. Las páginas principales guardadas para esta aplicación estática de GitHub Pages se abrirán cuando estén disponibles.',
    'offline.returnHome': 'Volver a la página principal',
    'reflections.explore': 'Explorar obra relacionada',
    'reflections.exploreAria': 'Explorar la sección relacionada con {title}',
    'reflection.category.survival': 'Supervivencia',
    'reflection.category.toxic': 'Conciencia sobre relaciones tóxicas',
    'reflection.category.faith': 'Fe y esperanza',
    'reflection.category.restoration': 'Restauración',
    'reflection.category.kindness': 'Bondad',
    'reflection.category.healing': 'Sanación emocional',
    'reflection.hidden.title': 'Cuando el dolor oculto por fin recibe lenguaje',
    'reflection.hidden.excerpt': 'Inspirada en The Pain Nobody Saw, esta reflexión centra la dignidad de nombrar el abuso, la presión cultural y el sufrimiento silencioso sin convertir el dolor en espectáculo.',
    'reflection.hidden.readTime': '4 min',
    'reflection.hidden.quote': 'El dolor puede dar forma a la historia, pero no posee el final.',
    'reflection.hidden.prompt': '¿Dónde necesitas palabras más suaves para algo que sobreviviste?',
    'reflection.red.title': 'Las señales rojas invitan a proteger tu paz',
    'reflection.red.excerpt': 'Una nota inspirada en el libro sobre reconocer manipulación emocional, peligro espiritual, apegos dañinos y patrones que agotan la claridad, la confianza y el propósito.',
    'reflection.red.readTime': '5 min',
    'reflection.red.quote': 'Lo que cuesta tu paz pide discernimiento.',
    'reflection.red.prompt': '¿Qué patrón te pide elegir claridad antes?',
    'reflection.sunshine.title': 'El camino hacia el sol puede empezar aunque la ruta siga difícil',
    'reflection.sunshine.excerpt': 'Tomada de los temas esperanzadores de The Road to Sunshine, esta reflexión honra la lucha, la fe y el valor paciente de seguir hacia días más luminosos.',
    'reflection.sunshine.readTime': '3 min',
    'reflection.sunshine.quote': 'La esperanza no niega la tormenta; mantiene una lámpara encendida.',
    'reflection.sunshine.prompt': '¿Qué pequeña luz puedes llevar esta semana?',
    'reflection.storm.title': 'Después de la tormenta, la restauración puede ser silenciosa antes de verse',
    'reflection.storm.excerpt': 'Una meditación para reconstruir la paz después de la dificultad, honrando la fuerza invisible que llega después de sobrevivir.',
    'reflection.storm.readTime': '4 min',
    'reflection.storm.quote': 'La sanación a menudo empieza como una decisión privada de volver a respirar.',
    'reflection.storm.prompt': '¿Cómo sería la restauración si no tuviera que apresurarse?',
    'reflection.kindness.title': 'La bondad puede convertirse en una práctica sanadora',
    'reflection.kindness.excerpt': 'Inspirada en La Gentillesse, esta nota trata la bondad como una disciplina diaria que protege la dignidad, repara el ambiente y abre espacio para la gracia.',
    'reflection.kindness.readTime': '3 min',
    'reflection.kindness.quote': 'La ternura puede ser lo bastante fuerte para cambiar una habitación.',
    'reflection.kindness.prompt': '¿Dónde puede la bondad ser un límite y no una carga?',
    'reflection.consolation.title': 'La consolación no es debilidad; es oxígeno para el valor',
    'reflection.consolation.excerpt': 'Una reflexión inspirada en la música sobre recibir consuelo sin vergüenza, especialmente cuando sanar se siente lento, privado o incompleto.',
    'reflection.consolation.readTime': '3 min',
    'reflection.consolation.quote': 'El consuelo da al valor un lugar seguro para empezar de nuevo.',
    'reflection.consolation.prompt': '¿Qué forma de consuelo te ayudaría a seguir hoy?'
  },
  ln: {
    'nav.reflections': 'Makanisi', 'hero.readReflections': 'Tanga makanisi', 'cta.call': 'Benga Carine',
    'offline.metaTitle': 'Ozali na internet te | Carine Sanadina', 'offline.kicker': 'Internet ezali te', 'offline.heading': 'Ozali na internet te, kasi mobembo ya kobika ekoki kokoba.', 'offline.body': 'Zongela kokangama na internet mpo na koyoka miziki, kofungola ba liens ya mikanda, mpe kozwa biloko ya sika ya site. Nkasa ya ntina oyo ebombami ekofungwama lisusu soki ekoki.', 'offline.returnHome': 'Zonga na lokasa ya ebandeli',
    'reflections.explore': 'Tala mosala oyo ekokani', 'reflections.exploreAria': 'Tala eteni oyo etali {title}',
    'reflection.category.survival': 'Kobika', 'reflection.category.toxic': 'Kososola boyokani ya mabe', 'reflection.category.faith': 'Kondima mpe elikya', 'reflection.category.restoration': 'Kozongisama', 'reflection.category.kindness': 'Boboto', 'reflection.category.healing': 'Kobika ya motema',
    'reflection.hidden.title': 'Ntango pasi oyo ebombamaki ezwi maloba', 'reflection.hidden.excerpt': 'Euti na The Pain Nobody Saw, makanisi oyo epesi lokumu na kotya nkombo na mobulu, pression ya mimeseno, mpe pasi ya kimia kozanga kosenga na babiki komonisa pasi na bango lokola lisano.', 'reflection.hidden.readTime': '4 min', 'reflection.hidden.quote': 'Pasi ekoki kobongisa lisolo, kasi ezali nkolo ya nsuka te.', 'reflection.hidden.prompt': 'Wapi ozali na mposa ya maloba ya boboto mpo na likambo oyo obikaki?',
    'reflection.red.title': 'Bilembo ya motane ebengaka kobatela kimia na yo', 'reflection.red.excerpt': 'Likanisi ya buku mpo na koyeba manipulation ya motema, likama ya molimo, kokangama ya mabe, mpe banzela oyo ekitisaka polele, confiance, mpe ntina.', 'reflection.red.readTime': '5 min', 'reflection.red.quote': 'Likambo oyo elongolaka kimia na yo esengaka bososoli.', 'reflection.red.prompt': 'Ndenge nini ozali kobengama kopona polele noki?',
    'reflection.sunshine.title': 'Nzela ya moi ekoki kobanda ata nzela ezali makasi', 'reflection.sunshine.excerpt': 'Euti na makanisi ya elikya ya The Road to Sunshine, likanisi oyo epesi lokumu na etumba, kondima, mpe mpiko ya kokoba kotambola na mikolo ya pole.', 'reflection.sunshine.readTime': '3 min', 'reflection.sunshine.quote': 'Elikya eboyi mopɛpɛ makasi te; ebatelaka mwinda kati na yango.', 'reflection.sunshine.prompt': 'Mwinda nini ya moke okoki komema poso oyo?',
    'reflection.storm.title': 'Sima ya mopɛpɛ makasi, kozongisama ekoki kozala kimia liboso emonana', 'reflection.storm.excerpt': 'Likanisi ya kozongisa kimia sima ya mpasi, kopesa lokumu na makasi oyo emonanaka te sima ya kobika.', 'reflection.storm.readTime': '4 min', 'reflection.storm.quote': 'Kobika ebandaka mingi lokola mokano ya sekele ya kopema lisusu.', 'reflection.storm.prompt': 'Kozongisama elingaki kozala ndenge nini soki esengelaki kopotama te?',
    'reflection.kindness.title': 'Boboto ekoki kokoma momeseno ya kobikisa', 'reflection.kindness.excerpt': 'Euti na La Gentillesse, likanisi oyo emoni boboto lokola momeseno ya mokolo na mokolo oyo ebatelaka lokumu, ebongisaka esika, mpe efungolaka nzela ya ngolu.', 'reflection.kindness.readTime': '3 min', 'reflection.kindness.quote': 'Boboto ekoki kozala makasi mpo na kobongola ndako.', 'reflection.kindness.prompt': 'Wapi boboto ekoki kozala ndelo, kasi mokumba te?',
    'reflection.consolation.title': 'Libondisi ezali bolembu te; ezali mopepe ya mpiko', 'reflection.consolation.excerpt': 'Likanisi euti na miziki mpo na koyamba libondisi kozanga soni, mingimingi ntango kobika ezali komonana malɛmbɛ, ya sekele, to esili naino te.', 'reflection.consolation.readTime': '3 min', 'reflection.consolation.quote': 'Libondisi epesaka mpiko esika ya kimia mpo na kobanda lisusu.', 'reflection.consolation.prompt': 'Libondisi nini ekosalisa yo kokoba lelo?'
  },
  sw: {
    'nav.reflections': 'Tafakari', 'hero.readReflections': 'Soma tafakari', 'cta.call': 'Mpigie Carine',
    'offline.metaTitle': 'Nje ya mtandao | Carine Sanadina', 'offline.kicker': 'Nje ya mtandao', 'offline.heading': 'Uko nje ya mtandao, lakini safari ya uponyaji inaweza kuendelea.', 'offline.body': 'Unganisha tena ili kusikiliza muziki, kufungua viungo vya vitabu vya nje, na kupata rasilimali mpya za tovuti. Kurasa kuu zilizohifadhiwa kwa programu hii tuli ya GitHub Pages zitafunguka zinapopatikana.', 'offline.returnHome': 'Rudi ukurasa wa nyumbani',
    'reflections.explore': 'Chunguza kazi inayohusiana', 'reflections.exploreAria': 'Chunguza sehemu inayohusiana na {title}',
    'reflection.category.survival': 'Kunusurika', 'reflection.category.toxic': 'Ufahamu wa mahusiano yenye sumu', 'reflection.category.faith': 'Imani na matumaini', 'reflection.category.restoration': 'Urejesho', 'reflection.category.kindness': 'Fadhili', 'reflection.category.healing': 'Uponyaji wa kihisia',
    'reflection.hidden.title': 'Maumivu yaliyofichwa yanapopata lugha hatimaye', 'reflection.hidden.excerpt': 'Ikiongozwa na The Pain Nobody Saw, tafakari hii inaheshimu hadhi ya kutaja unyanyasaji, shinikizo la kitamaduni, na mateso ya kimya bila kuwataka walionusurika wageuze maumivu yao kuwa maonyesho.', 'reflection.hidden.readTime': '4 min', 'reflection.hidden.quote': 'Maumivu yanaweza kuunda hadithi, lakini hayamiliki mwisho.', 'reflection.hidden.prompt': 'Ni wapi unahitaji lugha laini kwa kitu ulichonusurika?',
    'reflection.red.title': 'Alama nyekundu ni mwaliko wa kulinda amani yako', 'reflection.red.excerpt': 'Dokezo lililoongozwa na kitabu kuhusu kutambua udanganyifu wa kihisia, hatari ya kiroho, kushikamana kusikofaa, na mifumo inayomaliza uwazi, ujasiri, na kusudi.', 'reflection.red.readTime': '5 min', 'reflection.red.quote': 'Kinachokugharimu amani yako kinaomba utambuzi.', 'reflection.red.prompt': 'Ni mtindo gani umekuwa ukikuomba uchague uwazi mapema?',
    'reflection.sunshine.title': 'Barabara ya mwanga inaweza kuanza hata wakati njia bado ni ngumu', 'reflection.sunshine.excerpt': 'Ikichotwa kutoka mada za matumaini za The Road to Sunshine, tafakari hii huheshimu mapambano, imani, na ujasiri wa kuendelea kutembea kuelekea siku nyepesi.', 'reflection.sunshine.readTime': '3 min', 'reflection.sunshine.quote': 'Matumaini hayakani dhoruba; huweka taa ikiwaka ndani yake.', 'reflection.sunshine.prompt': 'Ni mwanga gani mdogo unaweza kubeba wiki hii?',
    'reflection.storm.title': 'Baada ya dhoruba, urejesho unaweza kuwa kimya kabla haujaonekana', 'reflection.storm.excerpt': 'Tafakari ya kujenga tena amani baada ya ugumu, ikiheshimu nguvu isiyoonekana inayokuja baada ya kunusurika.', 'reflection.storm.readTime': '4 min', 'reflection.storm.quote': 'Uponyaji mara nyingi huanza kama uamuzi wa faragha wa kupumua tena.', 'reflection.storm.prompt': 'Urejesho ungeonekanaje kama usingehitaji kuharakishwa?',
    'reflection.kindness.title': 'Fadhili zinaweza kuwa mazoezi ya uponyaji', 'reflection.kindness.excerpt': 'Ikiongozwa na La Gentillesse, dokezo hili linaona fadhili kama nidhamu ya kila siku inayolinda hadhi, kurekebisha mazingira, na kufungua nafasi ya neema.', 'reflection.kindness.readTime': '3 min', 'reflection.kindness.quote': 'Upole bado unaweza kuwa na nguvu ya kubadilisha chumba.', 'reflection.kindness.prompt': 'Ni wapi fadhili zinaweza kuwa mpaka, si mzigo?',
    'reflection.consolation.title': 'Faraja si udhaifu; ni hewa ya ujasiri', 'reflection.consolation.excerpt': 'Tafakari iliyoongozwa na muziki kuhusu kupokea faraja bila aibu, hasa uponyaji unapohisi kuwa wa polepole, wa faragha, au haujakamilika.', 'reflection.consolation.readTime': '3 min', 'reflection.consolation.quote': 'Faraja huipa ujasiri mahali salama pa kuanza tena.', 'reflection.consolation.prompt': 'Ni aina gani ya faraja ingekusaidia kuendelea leo?'
  },
  yo: {
    'nav.reflections': 'Àwọn ìrònú', 'hero.readReflections': 'Ka àwọn ìrònú', 'cta.call': 'Pe Carine',
    'offline.metaTitle': 'Kò sí lórí ayélujára | Carine Sanadina', 'offline.kicker': 'Kò sí lórí ayélujára', 'offline.heading': 'O kò sí lórí ayélujára, ṣùgbọ́n irin-ajo ìwòsàn lè tẹ̀síwájú.', 'offline.body': 'So pọ̀ mọ́ ayélujára lẹ́ẹ̀kansi láti gbọ́ orin, ṣí àwọn ọna asopọ iwe ita, kí o sì gba ohun tuntun lórí aaye. Àwọn oju-iwe pataki tí a fi pamọ́ fún app GitHub Pages yìí yóò tún ṣí nígbà tí wọ́n bá wà.', 'offline.returnHome': 'Padà sí oju-iwe àkọ́kọ́',
    'reflections.explore': 'Ṣawari iṣẹ́ tó ní ìbáṣepọ̀', 'reflections.exploreAria': 'Ṣawari apá tó ní ìbáṣepọ̀ pẹ̀lú {title}',
    'reflection.category.survival': 'Ìyè-lẹ́yìn ewu', 'reflection.category.toxic': 'Ìmọ̀ nípa ibáṣepọ̀ tó léwu', 'reflection.category.faith': 'Ìgbàgbọ́ àti ìrètí', 'reflection.category.restoration': 'Ìmúpadàbọ̀', 'reflection.category.kindness': 'Inú rere', 'reflection.category.healing': 'Ìwòsàn ẹ̀dá ọkàn',
    'reflection.hidden.title': 'Nígbà tí ìrora tí a fi pamọ́ gba ede nikẹyìn', 'reflection.hidden.excerpt': 'Ní ìmísí The Pain Nobody Saw, ìrònú yìí bọwọ́ fún ọlá ti sisọ orúkọ ìpalára, titẹ̀ aṣa, àti ìjìyà ìdákẹ́jẹ láì bẹ̀rẹ̀ pé kí àwọn tó yè bọ́ fi ìrora wọn ṣe eré.', 'reflection.hidden.readTime': '4 min', 'reflection.hidden.quote': 'Ìrora lè ṣe apẹrẹ ìtàn, ṣùgbọ́n kò ní opin rẹ.', 'reflection.hidden.prompt': 'Níbo ni o nílò ede onírẹlẹ̀ fún ohun tí o yè kọjá?',
    'reflection.red.title': 'Àwọn àmì pupa jẹ́ ìpè láti dáàbò bo àlàáfíà rẹ', 'reflection.red.excerpt': 'Àkọsílẹ̀ tó ní ìmísí iwe lori mímọ ìtan ẹ̀dá ọkàn, ewu ẹ̀mí, ìfarapa tí kò dára, àti àṣà tí ń mú kedere, igboya, àti ète rẹ dínkù.', 'reflection.red.readTime': '5 min', 'reflection.red.quote': 'Ohun tó ń jẹ àlàáfíà rẹ ń béèrè ìmòye.', 'reflection.red.prompt': 'Àṣà wo ló ń pe ọ láti yan kedere kíákíá?',
    'reflection.sunshine.title': 'Ọ̀nà sí ìmọ́lẹ̀ lè bẹ̀rẹ̀ nígbà tí ọ̀nà ṣì nira', 'reflection.sunshine.excerpt': 'Láti inú àwọn akori ìrètí The Road to Sunshine, ìrònú yìí bọwọ́ fún ìjàkadì, ìgbàgbọ́, àti ìgboyà sùúrù láti tẹ̀síwájú sí ọjọ́ tó mọ́.', 'reflection.sunshine.readTime': '3 min', 'reflection.sunshine.quote': 'Ìrètí kò sẹ́ ìjì; ó ń jẹ́ kí fitila tan láàrin rẹ.', 'reflection.sunshine.prompt': 'Ìmọ́lẹ̀ kékeré wo ni o lè gbé lọ sí ọ̀sẹ̀ yìí?',
    'reflection.storm.title': 'Lẹ́yìn ìjì, ìmúpadàbọ̀ lè dakẹ́ kí ó tó hàn', 'reflection.storm.excerpt': 'Ìṣàrò fún àwọn tó ń tún àlàáfíà kọ́ lẹ́yìn ìṣòro, bíbọwọ́ fún agbára tí kò hàn lẹ́yìn ìyè-lẹ́yìn ewu.', 'reflection.storm.readTime': '4 min', 'reflection.storm.quote': 'Ìwòsàn máa ń bẹ̀rẹ̀ gẹ́gẹ́ bí ìpinnu ikọkọ láti mí lẹ́ẹ̀kansi.', 'reflection.storm.prompt': 'Báwo ni ìmúpadàbọ̀ yóò rí tí kò bá nílò ìyára?',
    'reflection.kindness.title': 'Inú rere lè di ìṣe ìwòsàn', 'reflection.kindness.excerpt': 'Ní ìmísí La Gentillesse, àkọsílẹ̀ yìí wo inú rere gẹ́gẹ́ bí ìbáwí ojoojúmọ́ tó dáàbò bo ọlá, tún afẹ́fẹ́ ṣe, tí ó sì ṣí ààyè fún oore-ọfẹ́.', 'reflection.kindness.readTime': '3 min', 'reflection.kindness.quote': 'Ìrẹlẹ̀ lè ní agbára tó láti yí yara kan padà.', 'reflection.kindness.prompt': 'Níbo ni inú rere lè di ààlà, kì í ṣe ẹrù?',
    'reflection.consolation.title': 'Ìtùnú kì í ṣe ailera; ó jẹ́ afẹ́fẹ́ fún ìgboyà', 'reflection.consolation.excerpt': 'Ìrònú orin lori gbigba ìtùnú láì ní ìtìjú, pàápàá nígbà tí ìwòsàn bá dà bí ohun lọ́ra, ikọkọ, tàbí tí kò tíì pé.', 'reflection.consolation.readTime': '3 min', 'reflection.consolation.quote': 'Ìtùnú fún ìgboyà ní ibi ailewu láti bẹ̀rẹ̀ lẹ́ẹ̀kansi.', 'reflection.consolation.prompt': 'Irú ìtùnú wo ló máa ràn ọ́ lọ́wọ́ láti tẹ̀síwájú lónìí?'
  }
};

Object.entries(fullSiteTranslationAdditions).forEach(([language, dictionary]) => {
  if (translations[language]) {
    Object.assign(translations[language], dictionary);
  }
});



const completeTranslationOverrides = {
  fr: {
    'books.pain.coverLabel': 'Couverture du livre The Pain Nobody Saw de Carine Sanadina',
    'books.toxic.coverLabel': 'Couverture du livre If It’s Red, It’s Toxic de Carine Sanadina',
    'books.sunshine.coverLabel': 'Couverture du livre The Road to Sunshine de Carine Sanadina',
    'books.storm.coverLabel': 'Couverture du livre After The Storm de Carine Sanadina',
    'tracks.consolation.audioLabel': 'Consolation de Carine Sanadina',
    'tracks.gentillesse.audioLabel': 'La Gentillesse de Carine Sanadina',
    'tracks.wonderful.audioLabel': 'Wonderful de Carine Sanadina',
    'music.playlist': 'Liste de lecture',
    'mini.volumeShort': 'Volume'
  },
  es: {
    'meta.description': 'Carine Sanadina es una profesional de salud, autora, artista, defensora de sobrevivientes y voz de bienestar emocional en Jacksonville, Florida, enfocada en la conciencia sobre la violencia doméstica, la fe y la restauración.',
    'meta.ogTitle': 'Carine Sanadina | Autora, artista y defensora de sobrevivientes en Jacksonville, Florida',
    'meta.ogDescription': 'Descubre los libros, la música, la defensa y la voz centrada en la sanación de Carine Sanadina para la conciencia sobre la violencia doméstica, el bienestar emocional, la fe y la restauración.',
    'meta.twitterDescription': 'Profesional de salud, autora, artista, defensora de sobrevivientes y voz de bienestar emocional en Jacksonville que transforma el dolor en sanación y restauración.',
    'books.pain.coverLabel': 'Portada del libro The Pain Nobody Saw de Carine Sanadina',
    'books.toxic.coverLabel': 'Portada del libro If It’s Red, It’s Toxic de Carine Sanadina',
    'books.sunshine.coverLabel': 'Portada del libro The Road to Sunshine de Carine Sanadina',
    'books.storm.coverLabel': 'Portada del libro After The Storm de Carine Sanadina',
    'music.stageLabel': 'Experiencia premium de reproducción actual',
    'music.controlsLabel': 'Controles de reproducción musical',
    'music.nowPlaying': 'Reproduciendo ahora',
    'music.visualizerFallback': 'El visualizador está en reposo. El audio continuará normalmente.',
    'music.visualizerAvailable': 'La animación del visualizador aparece arriba.',
    'music.shuffle': 'Aleatorio',
    'music.shuffleOn': 'Aleatorio activado',
    'music.shuffleOff': 'Aleatorio desactivado',
    'music.repeatAll': 'Repetir todo',
    'music.repeatOne': 'Repetir una',
    'music.repeatOff': 'Repetición desactivada',
    'music.nextTrack': 'Siguiente pista',
    'mini.expand': 'Expandir',
    'mini.close': 'Cerrar reproductor',
    'lyrics.expand': 'Expandir letra',
    'lyrics.collapse': 'Contraer letra',
    'mini.volumeShort': 'Vol.',
    'reflections.kicker': 'Reflexiones',
    'reflections.heading': 'Notas de sanación inspiradas en los libros, la música y los temas de restauración de Carine.',
    'reflections.intro': 'Una biblioteca editorial estática para lectores que exploran supervivencia, conciencia sobre relaciones tóxicas, fe, bondad y restauración emocional.',
    'reflections.toolbarLabel': 'Filtrar reflexiones',
    'reflections.searchLabel': 'Buscar reflexiones',
    'reflections.searchPlaceholder': 'Buscar por tema o título',
    'reflections.categoryLabel': 'Categorías de reflexión',
    'reflections.empty': 'Todavía no hay reflexiones que coincidan con esa búsqueda.',
    'reflections.loadMore': 'Cargar más reflexiones',
    'reflections.readTime': 'de lectura',
    'reflections.featuredLabel': 'Reflexión destacada',
    'reflections.promptLabel': 'Pregunta de reflexión',
    'reflections.all': 'Todas',
    'press.heading': 'Un centro de medios refinado para conversaciones sobre sanación, autoría, fe y restauración.',
    'press.body': 'Carine Sanadina está disponible para conversaciones mediáticas cuidadosas, historias comunitarias y oportunidades narrativas centradas en la sanación y alineadas con sus libros, música, defensa de sobrevivientes y compasión arraigada en la salud.',
    'bio.body': 'Nacida en el Congo y radicada en Jacksonville, Carine Sanadina une servicio de salud, escritura inspiradora, música y defensa de sobrevivientes para hablar con ternura sobre dolor, valentía, fe y restauración emocional.',
    'speaking.topic1': 'Conciencia sobre la violencia doméstica y supervivencia oculta',
    'speaking.topic2': 'Fe, resiliencia y reconstrucción de la autoestima',
    'speaking.topic3': 'Cuidado centrado en la humanidad, experiencia inmigrante y bienestar emocional',
    'inquiry.body': 'Para entrevistas, invitaciones a hablar, conversaciones musicales o eventos centrados en libros, usa las rutas de contacto de abajo para que cada oportunidad pueda revisarse con claridad y cuidado.',
    'quote.wallLabel': 'Muro de citas destacadas',
    'quote.wall.one': 'La supervivencia no es el final de la historia.',
    'quote.wall.two': 'La sanación puede convertirse en un lenguaje.',
    'quote.wall.three': 'La fe da futuro a los lugares rotos.',
    'pwa.installText': 'Disfruta la música, los libros y el mensaje de sanación de Carine en cualquier momento. Instala la app para una experiencia más fluida.',
    'pwa.iosInstructions': 'Toca Compartir y luego Agregar a pantalla de inicio.',
    'pwa.installButton': 'Instalar',
    'pwa.maybeLater': 'Quizás después',
    'pwa.dismissLabel': 'Cerrar aviso de instalación',
    'music.playlist': 'Lista de reproducción'
  },
  ln: {
    'music.stageLabel': 'Esika ya lokumu ya loyembo oyo ezali koyokana',
    'music.controlsLabel': 'Bikomande ya kobeta miziki',
    'music.nowPlaying': 'Ezali koyokana sikoyo',
    'music.visualizerFallback': 'Visualizer ezali kopema. Loyembo ekokoba koyokana malamu.',
    'music.visualizerAvailable': 'Bilinoko ya visualizer ezali komonana likolo.',
    'music.shuffle': 'Sangisa',
    'music.shuffleOn': 'Kosangisa efungwami',
    'music.shuffleOff': 'Kosangisa ekangami',
    'music.repeatAll': 'Zongela nyonso',
    'music.repeatOne': 'Zongela moko',
    'music.repeatOff': 'Kozongela ekangami',
    'music.nextTrack': 'Loyembo elandi',
    'mini.expand': 'Fungola monene',
    'mini.close': 'Kanga ebɛtelo',
    'reflections.kicker': 'Makanisi',
    'reflections.heading': 'Makanisi ya kobikisa oyo euti na mikanda, miziki, mpe makambo ya bozongisi ya Carine.',
    'reflections.intro': 'Biblioteke ya makanisi mpo na batangi oyo bazali koluka kobika, koyeba boyokani ya mabe, kondima, boboto mpe bozongisi ya motema.',
    'reflections.toolbarLabel': 'Kopona makanisi',
    'reflections.searchLabel': 'Luka makanisi',
    'reflections.searchPlaceholder': 'Luka na motó ya likambo to titre',
    'reflections.categoryLabel': 'Biteni ya makanisi',
    'reflections.empty': 'Makanisi oyo ekokani na boluki wana ezali naino te.',
    'reflections.loadMore': 'Monisa makanisi mosusu',
    'reflections.readTime': 'ya kotanga',
    'reflections.featuredLabel': 'Likanisi ya kopona',
    'reflections.promptLabel': 'Motuna ya kokanisa',
    'reflections.all': 'Nyonso',
    'press.heading': 'Esika ya bapanzi sango mpo na masolo ya kobika, bokomi, kondima mpe bozongisi.',
    'press.body': 'Carine Sanadina azali pene mpo na masolo ya bapanzi sango, masolo ya lisanga, mpe mabaku ya koyebisa masolo ya kobika oyo ekokani na mikanda na ye, miziki, lisungi ya babiki mpe boboto ya bokolongono.',
    'bio.body': 'Abotami na Congo mpe afandaka na Jacksonville, Carine Sanadina asangisaka mosala ya bokolongono, bokomi ya elikya, miziki mpe lisungi ya babiki mpo na koloba na boboto mpo na mpasi, mpiko, kondima mpe bozongisi ya motema.',
    'speaking.topic1': 'Koyebisa likama ya bitumba ya ndako mpe kobika oyo ebombami',
    'speaking.topic2': 'Kondima, mpiko mpe kotonga lisusu motuya ya yo moko',
    'speaking.topic3': 'Kosalisa moto na bomoto, bomoi ya mopaya mpe bolamu ya motema',
    'inquiry.body': 'Mpo na masolo na bapanzi sango, kobenga mpo na koloba, masolo ya miziki, to makambo ya mikanda, salelá banzela ya kokoma awa na nse mpo libaku nyonso etalelama na polele mpe boboto.',
    'quote.wallLabel': 'Lopango ya maloba ya kopona',
    'quote.wall.one': 'Kobika ezali suka ya lisolo te.',
    'quote.wall.two': 'Kobikisama ekoki kokoma lokota.',
    'quote.wall.three': 'Kondima epesaka mikili ebukani mikolo ezali koya.',
    'pwa.installText': 'Sepelá na miziki, mikanda, mpe nsango ya kobikisama ya Carine ntango nyonso. Tyá app mpo na expérience ya malamu.',
    'pwa.iosInstructions': 'Finá Share, na nsima Add to Home Screen.',
    'pwa.installButton': 'Tyá',
    'pwa.maybeLater': 'Mbala mosusu sima',
    'pwa.dismissLabel': 'Longola etinda ya kotya'
  },
  sw: {
    'music.stageLabel': 'Uzoefu wa kiwango cha juu wa kinachochezwa sasa',
    'music.controlsLabel': 'Vidhibiti vya uchezaji wa muziki',
    'music.nowPlaying': 'Inacheza sasa',
    'music.visualizerFallback': 'Visualizer imetulia. Sauti itaendelea kucheza kawaida.',
    'music.visualizerAvailable': 'Mwendo wa onyesho la sauti unaonekana hapo juu.',
    'music.shuffle': 'Changanya',
    'music.shuffleOn': 'Changanya imewashwa',
    'music.shuffleOff': 'Changanya imezimwa',
    'music.repeatAll': 'Rudia zote',
    'music.repeatOne': 'Rudia moja',
    'music.repeatOff': 'Kurudia kumezimwa',
    'music.nextTrack': 'Wimbo unaofuata',
    'mini.expand': 'Panua',
    'mini.close': 'Funga kichezaji',
    'mini.volumeShort': 'Sauti',
    'reflections.kicker': 'Tafakari',
    'reflections.heading': 'Maandishi ya uponyaji yaliyoongozwa na vitabu, muziki, na mada za urejesho za Carine.',
    'reflections.intro': 'Maktaba tuli ya wahariri kwa wasomaji wanaochunguza kupona, ufahamu wa mahusiano yenye sumu, imani, fadhili, na urejesho wa kihisia.',
    'reflections.toolbarLabel': 'Chuja tafakari',
    'reflections.searchLabel': 'Tafuta tafakari',
    'reflections.searchPlaceholder': 'Tafuta kwa mada au kichwa',
    'reflections.categoryLabel': 'Kategoria za tafakari',
    'reflections.empty': 'Hakuna tafakari zinazolingana na utafutaji huo bado.',
    'reflections.loadMore': 'Pakia tafakari zaidi',
    'reflections.readTime': 'kusoma',
    'reflections.featuredLabel': 'Tafakari iliyoangaziwa',
    'reflections.promptLabel': 'Swali la kutafakari',
    'reflections.all': 'Zote',
    'press.heading': 'Kituo cha vyombo vya habari kilichoboreshwa kwa mazungumzo kuhusu uponyaji, uandishi, imani na urejesho.',
    'press.body': 'Carine Sanadina anapatikana kwa mazungumzo makini ya vyombo vya habari, vipengele vya jamii, na fursa za kusimulia hadithi za uponyaji zinazoendana na vitabu vyake, muziki, utetezi wa walionusurika, na huruma yake yenye mizizi katika huduma ya afya.',
    'bio.body': 'Mzaliwa wa Congo na mwenye makazi Jacksonville, Carine Sanadina huunganisha huduma ya afya, uandishi wa kutia moyo, muziki na utetezi wa walionusurika ili kuzungumza kwa upole kuhusu maumivu, ujasiri, imani na urejesho wa kihisia.',
    'speaking.topic1': 'Ufahamu wa ukatili wa nyumbani na kupona kulikofichwa',
    'speaking.topic2': 'Imani, uthabiti, na kujenga upya thamani binafsi',
    'speaking.topic3': 'Huduma inayomweka binadamu katikati, uzoefu wa wahamiaji, na ustawi wa kihisia',
    'inquiry.body': 'Kwa mahojiano, mialiko ya kuzungumza, mazungumzo ya muziki, au matukio yanayohusu vitabu, tumia njia za mawasiliano hapa chini ili kila fursa ipitiwe kwa uwazi na uangalifu.',
    'quote.wallLabel': 'Ukuta wa nukuu zilizoangaziwa',
    'quote.wall.one': 'Kupona si mwisho wa hadithi.',
    'quote.wall.two': 'Uponyaji unaweza kuwa lugha.',
    'quote.wall.three': 'Imani huyapa maeneo yaliyovunjika wakati ujao.',
    'pwa.installText': 'Furahia muziki, vitabu na ujumbe wa uponyaji wa Carine wakati wowote. Sakinisha app kwa matumizi laini zaidi.',
    'pwa.iosInstructions': 'Gusa Share, kisha Add to Home Screen.',
    'pwa.installButton': 'Sakinisha',
    'pwa.maybeLater': 'Labda baadaye',
    'pwa.dismissLabel': 'Funga ujumbe wa kusakinisha',
    'footer.rights': '© 2026 Carine Sanadina. Haki zote zimehifadhiwa.'
  },
  yo: {
    'music.stageLabel': 'Iriri orin tó ń dun báyìí ní ipele gíga',
    'music.controlsLabel': 'Àwọn ìṣàkóso orin',
    'music.nowPlaying': 'Ó ń dun báyìí',
    'music.visualizerFallback': 'Visualizer ń sinmi. Ohùn yóò tẹ̀síwájú láìsí ìṣòro.',
    'music.visualizerAvailable': 'Àwòrán ìrìn ohun hàn lókè.',
    'music.shuffle': 'Dapọ̀',
    'music.shuffleOn': 'Dapọ̀ wà ní titan',
    'music.shuffleOff': 'Dapọ̀ ti wa ní pipa',
    'music.repeatAll': 'Tun gbogbo rẹ̀ ṣe',
    'music.repeatOne': 'Tun ọkan ṣe',
    'music.repeatOff': 'Ìtúnṣe ti wa ní pipa',
    'music.nextTrack': 'Orin tó tẹ̀lé',
    'tracks.gentillesse.playLabel': 'Mu La Gentillesse ṣiṣẹ́',
    'mini.expand': 'Faagun',
    'mini.close': 'Pa ẹrọ orin',
    'mini.volumeShort': 'Ohùn',
    'reflections.kicker': 'Àwọn ìrònú',
    'reflections.heading': 'Àwọn akọsilẹ̀ ìwòsàn tí a mú láti inú àwọn iwe, orin, àti àwọn akori ìmúpadàbọ̀ ti Carine.',
    'reflections.intro': 'Ibi ìkàwé olootu tí kò yí padà fún àwọn òǹkàwé tó ń ṣàwárí ìyè-lẹ́yìn ewu, ìmọ̀ ibáṣepọ̀ tó léwu, ìgbàgbọ́, inú rere, àti ìmúpadàbọ̀ ẹ̀dá ọkàn.',
    'reflections.toolbarLabel': 'Ṣe àlẹmọ àwọn ìrònú',
    'reflections.searchLabel': 'Wa àwọn ìrònú',
    'reflections.searchPlaceholder': 'Wa nípa akori tàbí akọlé',
    'reflections.categoryLabel': 'Àwọn ẹ̀ka ìrònú',
    'reflections.empty': 'Kò sí ìrònú tó bá ìwádìí yẹn mu síbẹ̀.',
    'reflections.loadMore': 'Gbe àwọn ìrònú míì wá',
    'reflections.readTime': 'kíkà',
    'reflections.featuredLabel': 'Ìrònú àfihàn',
    'reflections.promptLabel': 'Ìbéèrè ìrònú',
    'reflections.all': 'Gbogbo',
    'press.heading': 'Ile-iṣẹ media tó dára fún ìjíròrò nípa ìwòsàn, òǹkọ̀wé, ìgbàgbọ́ àti ìmúpadàbọ̀.',
    'press.body': 'Carine Sanadina wà fún àwọn ìjíròrò media tó ní ìtẹ́lọ́run, àwọn ẹya agbegbe, àti àwọn anfaani ìtàn ìwòsàn tó bá àwọn iwe rẹ, orin rẹ, ìdáàbò bo àwọn tó yè bọ́, àti àánú tó ní gbongbo nínú ilera mu.',
    'bio.body': 'Ti a bí ní Congo tí ó sì ń gbé ní Jacksonville, Carine Sanadina darapọ̀ iṣẹ́ ilera, kikọ ìmísí, orin, àti ìdáàbò bo àwọn tó yè bọ́ láti sọ̀rọ̀ pẹ̀lú ìtẹ́lọ́run nípa ìrora, ìgboyà, ìgbàgbọ́ àti ìmúpadàbọ̀ ẹ̀dá ọkàn.',
    'speaking.topic1': 'Ìmọ̀ nípa ìwa-ipa abẹ́lé àti ìyè-lẹ́yìn ewu tí a fi pamọ́',
    'speaking.topic2': 'Ìgbàgbọ́, ìfaradà, àti títún iye ara ẹni kọ́',
    'speaking.topic3': 'Itọju tó fi ènìyàn sí àárín, iriri aṣíwájú-ìbílẹ̀, àti àlàáfíà ẹ̀dá ọkàn',
    'inquiry.body': 'Fún ìfọ̀rọ̀wánilẹ́nuwò, ìpè láti sọ̀rọ̀, ìjíròrò orin, tàbí ìṣẹ̀lẹ̀ tó dá lórí iwe, lo àwọn ọna olubasọrọ ní isalẹ kí a lè ṣe àyẹ̀wò gbogbo anfaani pẹ̀lú kedere àti ìtọju.',
    'quote.wallLabel': 'Odi àwọn ọ̀rọ̀ àfihàn',
    'quote.wall.one': 'Ìyè-lẹ́yìn ewu kì í ṣe opin ìtàn.',
    'quote.wall.two': 'Ìwòsàn lè di ede.',
    'quote.wall.three': 'Ìgbàgbọ́ fún àwọn ibi tí ó fọ́ ní ọjọ́ iwájú.',
    'pwa.installText': 'Gbadun orin, iwe, ati ifiranṣẹ iwosan Carine nigbakugba. Fi app sí ẹrọ fún iriri tó rọrùn.',
    'pwa.iosInstructions': 'Tẹ Share, lẹ́yìn náà Add to Home Screen.',
    'pwa.installButton': 'Fi sí ẹrọ',
    'pwa.maybeLater': 'Bóyá nigbamii',
    'pwa.dismissLabel': 'Pa ìkìlọ̀ fifi sí ẹrọ',
    'footer.rights': '© 2026 Carine Sanadina. Gbogbo ẹ̀tọ́ wa ni ipamọ́.'
  }
};

Object.entries(completeTranslationOverrides).forEach(([language, dictionary]) => {
  if (translations[language]) {
    Object.assign(translations[language], dictionary);
  }
});

Object.entries(translations).forEach(([language, dictionary]) => {
  const sharedDefaults = {
    'language.name.en': 'English',
    'language.name.fr': 'Français',
    'language.name.ln': 'Lingala',
    'language.name.es': 'Español',
    'language.name.sw': 'Swahili',
    'language.name.yo': 'Yorùbá',
    'language.name.de': 'Deutsch',
    'language.name.ar': 'العربية',
    'language.name.zh': '中文',
    'music.visualizerFallback': 'Visualizer is resting. Audio playback will continue normally.',
    'tracks.consolation.title': 'Consolation',
    'tracks.gentillesse.title': 'La Gentillesse',
    'tracks.wonderful.title': 'Wonderful',
    'tracks.womanifesto.title': 'Womanifesto',
    'tracks.paranoia.title': 'Paranoïa Persécutive',
    'guide.welcome': 'Welcome. I’m Carine’s Guide — a compact guide to her story, books, music, advocacy, and healing-centered mission. How may I help you explore?'
  };

  Object.entries(sharedDefaults).forEach(([key, value]) => {
    if (!dictionary[key]) dictionary[key] = value;
  });
});


const localizedGuideLabels = {
  fr: {
    'guide.widgetLabel': 'Guide conversationnel de Carine',
    'guide.launcher': 'Demander au guide de Carine',
    'guide.eyebrow': 'Guide centré sur la guérison',
    'guide.title': 'Demander au guide de Carine',
    'guide.close': 'Fermer',
    'guide.startersLabel': 'Questions suggérées',
    'guide.startersTitle': 'Questions suggérées',
    'guide.starter.story': 'Quelle est l’histoire de Carine ?',
    'guide.starter.book': 'Par quel livre commencer ?',
    'guide.starter.womanifesto': 'De quoi parle Womanifesto ?',
    'guide.starter.advocacy': 'Que défend Carine ?',
    'guide.starter.speak': 'Comment inviter Carine à parler ?',
    'guide.starter.music': 'Montrez-moi sa musique.',
    'guide.inputLabel': 'Posez une question sur les livres, la musique ou le plaidoyer de Carine',
    'guide.placeholder': 'Tapez votre question',
    'guide.send': 'Envoyer',
    'guide.notice': 'Ce guide partage des informations générales sur le travail de Carine et ne remplace pas une aide professionnelle, juridique, médicale ou de crise.'
  },
  es: {
    'guide.widgetLabel': 'Guía conversacional de Carine',
    'guide.launcher': 'Preguntar a la guía de Carine',
    'guide.eyebrow': 'Guía centrada en sanación',
    'guide.title': 'Preguntar a la guía de Carine',
    'guide.close': 'Cerrar',
    'guide.startersLabel': 'Preguntas sugeridas',
    'guide.startersTitle': 'Preguntas sugeridas',
    'guide.starter.story': '¿Cuál es la historia de Carine?',
    'guide.starter.book': '¿Con qué libro empiezo?',
    'guide.starter.womanifesto': '¿De qué trata Womanifesto?',
    'guide.starter.advocacy': '¿Qué causas defiende Carine?',
    'guide.starter.speak': '¿Cómo puedo invitar a Carine a hablar?',
    'guide.starter.music': 'Muéstrame su música.',
    'guide.inputLabel': 'Pregunta sobre los libros, la música o la defensa de Carine',
    'guide.placeholder': 'Escribe tu pregunta',
    'guide.send': 'Enviar',
    'guide.notice': 'Esta guía comparte información general sobre el trabajo de Carine y no reemplaza apoyo profesional, legal, médico o de crisis.'
  },
  ln: {
    'guide.launcher': 'Tuna guide ya Carine',
    'guide.title': 'Tuna guide ya Carine',
    'guide.close': 'Kanga',
    'guide.startersLabel': 'Mituna epesami',
    'guide.startersTitle': 'Mituna epesami',
    'guide.placeholder': 'Koma motuna na yo',
    'guide.send': 'Tinda'
  },
  sw: {
    'guide.launcher': 'Uliza Mwongozo wa Carine',
    'guide.title': 'Uliza Mwongozo wa Carine',
    'guide.close': 'Funga',
    'guide.startersLabel': 'Maswali yaliyopendekezwa',
    'guide.startersTitle': 'Maswali yaliyopendekezwa',
    'guide.placeholder': 'Andika swali lako',
    'guide.send': 'Tuma'
  },
  yo: {
    'guide.launcher': 'Béèrè lọwọ Guide Carine',
    'guide.title': 'Béèrè lọwọ Guide Carine',
    'guide.close': 'Pa dé',
    'guide.startersLabel': 'Àwọn ìbéèrè àbá',
    'guide.startersTitle': 'Àwọn ìbéèrè àbá',
    'guide.placeholder': 'Tẹ ìbéèrè rẹ',
    'guide.send': 'Firanṣẹ'
  }
};

Object.entries(localizedGuideLabels).forEach(([language, labels]) => {
  if (translations[language]) Object.assign(translations[language], labels);
});


const finalTranslationAuditOverrides = {
  en: {
    'splash.kicker': 'Healing • Grace • Restoration',
    'splash.affirmation': 'Healing lives here.',
    'splash.opening': 'Opening the Carine Sanadina experience.',
    'splash.status': 'Preparing music experience...',
    'splash.ariaLabel': 'Carine Sanadina app is opening',
    'splash.phrase.grace': 'Grace still speaks.',
    'splash.phrase.story': 'Your story is not over.',
    'splash.phrase.music': 'Preparing music experience...',
    'splash.phrase.healing': 'Loading stories of healing...',
    'splash.phrase.sound': 'Tuning the sound of restoration...',
    'splash.phrase.ready': 'Almost ready...',
    'lyrics.tabsLabel': 'Track details',
    'lyrics.scrollLabel': 'Synchronized lyrics',
    'lyrics.tab.lyrics': 'Lyrics',
    'lyrics.tab.about': 'About',
    'lyrics.tab.credits': 'Credits',
    'lyrics.selectTrack': 'Select a track to view lyrics.',
    'lyrics.unavailable': 'Lyrics unavailable for this track.',
    'lyrics.moreDetails': 'More details coming soon.',
    'lyrics.aboutSong': 'About this song',
    'lyrics.credits': 'Credits',
    'music.visualizerToggleLabel': 'Visualizer',
    'music.visualizerToggleAria': 'Toggle audio visualizer',
    'music.visualizerOn': 'Visualizer on',
    'music.visualizerOff': 'Visualizer off',
    'music.visualizerStyleLabel': 'Visualization Style',
    'music.visualizerStyleAria': 'Choose visualization style',
    'music.visualizerDiagnostics': 'Visualizer diagnostics',
    'music.visualizerHelperTap': 'Tap Visualizer, then press Play.',
    'music.visualizerHelperIphone': 'Tap Play to activate visuals on iPhone.',
    'guide.widgetLabel': 'Carine’s conversational guide',
    'guide.launcher': 'Ask Carine’s Guide',
    'guide.eyebrow': 'Healing-centered guide',
    'guide.title': 'Ask Carine’s Guide',
    'guide.close': 'Close',
    'guide.startersLabel': 'Suggested questions',
    'guide.startersTitle': 'Suggested questions',
    'guide.starter.story': 'What is Carine’s story?',
    'guide.starter.book': 'Which book should I start with?',
    'guide.starter.womanifesto': 'What is Womanifesto about?',
    'guide.starter.advocacy': 'What does Carine advocate for?',
    'guide.starter.speak': 'How can I invite Carine to speak?',
    'guide.starter.music': 'Show me her music.',
    'guide.inputLabel': 'Ask a question about Carine’s books, music, or advocacy',
    'guide.placeholder': 'Type your question',
    'guide.send': 'Send',
    'guide.notice': 'This guide shares general information about Carine’s work and cannot replace professional, legal, medical, or crisis support.',
    'pwa.fallbackHint': 'Installation steps are available for this browser.',
    'pwa.instructionsEyebrow': 'Install Carine Sanadina',
    'pwa.instructionsTitle': 'Add the app to your device',
    'pwa.safariInstructions': 'To install this app in Safari: open the Share menu, then choose Add to Dock or Add to Home Screen when available.',
    'pwa.closeInstructions': 'Close install instructions',
    'tracks.genericCredits': 'Performed by Carine Sanadina. Music and lyrics rights remain with their respective owners.'
  },
  fr: {
    'language.name.fr': 'Français',
    'language.name.es': 'Español',
    'language.name.yo': 'Yorùbá',
    'nav.home': 'Accueil',
    'nav.books': 'Livres',
    'nav.press': 'Dossier de presse',
    'nav.contact': 'Contact',
    'hero.location': 'Jacksonville, Floride',
    'books.toxic.kicker': 'Guide',
    'audio.pause': 'Pause',
    'cta.pathsLabel': 'Types de demandes',
    'cta.path.speaking': 'Demandes de prise de parole',
    'cta.path.advocacy': 'Collaborations de plaidoyer',
    'cta.path.media': 'Demandes médias et interviews',
    'cta.path.music': 'Collaborations musicales',
    'lyrics.expand': 'Développer les paroles',
    'lyrics.collapse': 'Réduire les paroles',
    'lyrics.return': 'Retour au lecteur',
    'lyrics.focusKicker': 'Mode Focus Paroles',
    'lyrics.moreMenu': '⋯ Plus',
    'lyrics.moreMenuLabel': 'Menu focus des paroles',
    'lyrics.moreClose': 'Fermer le menu des paroles',
    'lyrics.tabsLabel': 'Détails du morceau',
    'lyrics.scrollLabel': 'Paroles synchronisées',
    'lyrics.tab.lyrics': 'Paroles',
    'lyrics.tab.about': 'À propos',
    'lyrics.tab.credits': 'Crédits',
    'lyrics.selectTrack': 'Sélectionnez un morceau pour voir les paroles.',
    'lyrics.unavailable': 'Les paroles ne sont pas disponibles pour ce morceau.',
    'lyrics.moreDetails': 'Plus de détails bientôt disponibles.',
    'lyrics.aboutSong': 'À propos de ce chant',
    'lyrics.credits': 'Crédits',
    'music.visualizerToggleLabel': 'Visualiseur',
    'music.visualizerToggleAria': 'Activer ou désactiver le visualiseur audio',
    'music.visualizerOn': 'Visualiseur activé',
    'music.visualizerOff': 'Visualiseur désactivé',
    'music.visualizerStyleLabel': 'Style de visualisation',
    'music.visualizerStyleAria': 'Choisir le style de visualisation',
    'music.visualizerDiagnostics': 'Diagnostics du visualiseur',
    'music.visualizerHelperTap': 'Touchez Visualiseur, puis appuyez sur Lecture.',
    'music.visualizerHelperIphone': 'Appuyez sur Lecture pour activer les visuels sur iPhone.',
    'pwa.fallbackHint': 'Les étapes d’installation sont disponibles pour ce navigateur.',
    'pwa.instructionsEyebrow': 'Installer Carine Sanadina',
    'pwa.instructionsTitle': 'Ajouter l’application à votre appareil',
    'pwa.safariInstructions': 'Dans Safari, ouvrez le menu Partager, puis choisissez Ajouter au Dock ou Ajouter à l’écran d’accueil si disponible.',
    'pwa.closeInstructions': 'Fermer les instructions d’installation',
    'press.headshots.title': 'Portraits et photos presse',
    'press.headshots.body': 'Les portraits approuvés et les ressources média téléchargeables pourront être ajoutés ici lorsque les fichiers finaux seront disponibles. Aucun fichier binaire n’est ajouté automatiquement.',
    'press.assetsPlaceholder': 'Emplacement pour ressources téléchargeables',
    'press.books.title': 'Liste des livres',
    'press.books.body': 'The Pain Nobody Saw, If It’s Red, It’s Toxic, The Road to Sunshine et After The Storm.',
    'press.music.title': 'Liste musicale',
    'press.music.body': 'Consolation, La Gentillesse, Wonderful, Womanifesto et Paranoïa Persécutive sont présentés comme une écoute tendre de l’art de Carine centré sur la guérison.',
    'reflections.architectureNote': 'Chaque réflexion est structurée avec un titre, un extrait, une date, une catégorie, une image, un identifiant et un chemin de contenu riche afin d’ajouter de nouveaux textes sans modifier le rythme visuel de cette page.',
    'reflections.allLoaded': 'Toutes les réflexions sont visibles',
    'splash.kicker': 'Guérison • Grâce • Restauration',
    'splash.affirmation': 'La guérison habite ici.',
    'splash.opening': 'Ouverture de l’expérience Carine Sanadina.',
    'splash.status': 'Préparation de l’expérience musicale...',
    'splash.ariaLabel': 'L’application Carine Sanadina s’ouvre',
    'splash.phrase.grace': 'La grâce parle encore.',
    'splash.phrase.story': 'Votre histoire n’est pas terminée.',
    'splash.phrase.music': 'Préparation de l’expérience musicale...',
    'splash.phrase.healing': 'Chargement des récits de guérison...',
    'splash.phrase.sound': 'Réglage du son de la restauration...',
    'splash.phrase.ready': 'Presque prêt...',
    'tracks.genericCredits': 'Interprété par Carine Sanadina. Les droits musicaux et les paroles restent à leurs détenteurs respectifs.'
  },
  es: {
    'language.name.fr': 'Français',
    'language.name.es': 'Español',
    'language.name.yo': 'Yorùbá',
    'nav.home': 'Inicio',
    'nav.books': 'Libros',
    'nav.press': 'Kit de prensa',
    'hero.location': 'Jacksonville, Florida',
    'cta.pathsLabel': 'Tipos de consulta',
    'cta.path.speaking': 'Consultas para conferencias',
    'cta.path.advocacy': 'Colaboraciones de defensa',
    'cta.path.media': 'Solicitudes de medios y entrevistas',
    'cta.path.music': 'Colaboraciones musicales',
    'lyrics.expand': 'Expandir letras',
    'lyrics.collapse': 'Contraer letras',
    'lyrics.tabsLabel': 'Detalles de la canción',
    'lyrics.scrollLabel': 'Letras sincronizadas',
    'lyrics.tab.lyrics': 'Letras',
    'lyrics.tab.about': 'Acerca de',
    'lyrics.tab.credits': 'Créditos',
    'lyrics.selectTrack': 'Selecciona una canción para ver la letra.',
    'lyrics.unavailable': 'La letra no está disponible para esta canción.',
    'lyrics.moreDetails': 'Pronto habrá más detalles.',
    'lyrics.aboutSong': 'Acerca de esta canción',
    'lyrics.credits': 'Créditos',
    'music.visualizerToggleLabel': 'Visualizador',
    'music.visualizerToggleAria': 'Activar o desactivar el visualizador de audio',
    'music.visualizerOn': 'Visualizador activado',
    'music.visualizerOff': 'Visualizador desactivado',
    'music.visualizerStyleLabel': 'Estilo de visualización',
    'music.visualizerStyleAria': 'Elegir estilo de visualización',
    'music.visualizerDiagnostics': 'Diagnóstico del visualizador',
    'music.visualizerHelperTap': 'Toca Visualizador y luego Reproducir.',
    'music.visualizerHelperIphone': 'Toca Reproducir para activar los visuales en iPhone.',
    'press.headshots.title': 'Retratos y fotos de prensa',
    'press.headshots.body': 'Los retratos aprobados y recursos multimedia descargables podrán adjuntarse aquí cuando estén disponibles los archivos finales. No se incluyen archivos binarios automáticamente.',
    'press.assetsPlaceholder': 'Espacio para recursos descargables',
    'press.books.title': 'Lista de libros',
    'press.books.body': 'The Pain Nobody Saw, If It’s Red, It’s Toxic, The Road to Sunshine y After The Storm.',
    'press.music.title': 'Lista musical',
    'press.music.body': 'Consolation, La Gentillesse, Wonderful, Womanifesto y Paranoïa Persécutive se presentan como una ventana sensible al arte sanador de Carine.',
    'reflections.architectureNote': 'Cada reflexión se modela con título, extracto, fecha, categoría, imagen, slug y ruta de contenido enriquecido para añadir nuevos textos sin cambiar el ritmo visual de esta página.',
    'reflections.allLoaded': 'Todas las reflexiones están visibles',
    'pwa.fallbackHint': 'Los pasos de instalación están disponibles para este navegador.',
    'pwa.instructionsEyebrow': 'Instalar Carine Sanadina',
    'pwa.instructionsTitle': 'Añade la app a tu dispositivo',
    'pwa.safariInstructions': 'En Safari, abre el menú Compartir y elige Añadir al Dock o Añadir a pantalla de inicio cuando esté disponible.',
    'pwa.closeInstructions': 'Cerrar instrucciones de instalación',
    'splash.kicker': 'Sanación • Gracia • Restauración',
    'splash.affirmation': 'La sanación vive aquí.',
    'splash.opening': 'Abriendo la experiencia de Carine Sanadina.',
    'splash.status': 'Preparando la experiencia musical...',
    'splash.ariaLabel': 'La app de Carine Sanadina se está abriendo',
    'splash.phrase.grace': 'La gracia sigue hablando.',
    'splash.phrase.story': 'Tu historia no ha terminado.',
    'splash.phrase.music': 'Preparando la experiencia musical...',
    'splash.phrase.healing': 'Cargando historias de sanación...',
    'splash.phrase.sound': 'Afinando el sonido de la restauración...',
    'splash.phrase.ready': 'Casi listo...',
    'tracks.genericCredits': 'Interpretado por Carine Sanadina. Los derechos de música y letra pertenecen a sus respectivos titulares.'
  },
  ln: {
    'language.name.fr': 'Français',
    'language.name.es': 'Español',
    'language.name.yo': 'Yorùbá',
    'nav.home': 'Ebandeli',
    'nav.books': 'Mikanda',
    'nav.press': 'Kit ya presse',
    'cta.pathsLabel': 'Lolenge ya mituna',
    'cta.path.speaking': 'Mituna mpo na koloba',
    'cta.path.advocacy': 'Misala ya kosunga bato',
    'cta.path.media': 'Mituna ya media mpe interview',
    'cta.path.music': 'Misala ya miziki elongo',
    'lyrics.expand': 'Fungola maloba ya loyembo',
    'lyrics.collapse': 'Kanga maloba ya loyembo',
    'lyrics.tabsLabel': 'Makambo ya loyembo',
    'lyrics.scrollLabel': 'Maloba ya loyembo oyo elandi audio',
    'lyrics.tab.lyrics': 'Maloba',
    'lyrics.tab.about': 'Maye etali yango',
    'lyrics.tab.credits': 'Ba crédits',
    'lyrics.selectTrack': 'Pona loyembo mpo na komona maloba.',
    'lyrics.unavailable': 'Maloba ya loyembo oyo ezali te.',
    'lyrics.moreDetails': 'Makambo mosusu ekoya kala mingi te.',
    'lyrics.aboutSong': 'Maye etali loyembo oyo',
    'lyrics.credits': 'Ba crédits',
    'music.visualizerToggleLabel': 'Visualiseur',
    'music.visualizerToggleAria': 'Fungola to kanga visualiseur ya audio',
    'music.visualizerOn': 'Visualiseur efungwami',
    'music.visualizerOff': 'Visualiseur ekangami',
    'music.visualizerStyleLabel': 'Lolenge ya komonisa',
    'music.visualizerStyleAria': 'Pona lolenge ya komonisa',
    'music.visualizerDiagnostics': 'Diagnostic ya visualiseur',
    'music.visualizerHelperTap': 'Finá Visualiseur, sima finá Kobeta.',
    'music.visualizerHelperIphone': 'Finá Kobeta mpo bililingi ebanda na iPhone.',
    'guide.widgetLabel': 'Guide ya lisolo ya Carine',
    'guide.eyebrow': 'Guide oyo etali kobika',
    'guide.starter.story': 'Lisolo ya Carine ezali nini?',
    'guide.starter.book': 'Nabanda na buku nini?',
    'guide.starter.womanifesto': 'Womanifesto elobeli nini?',
    'guide.starter.advocacy': 'Carine asungaka makambo nini?',
    'guide.starter.speak': 'Ndenge nini nakoki kobengisa Carine aloba?',
    'guide.starter.music': 'Lakisa ngai miziki na ye.',
    'guide.inputLabel': 'Tuna motuna na ntina ya mikanda, miziki to mosala ya kosunga ya Carine',
    'guide.notice': 'Guide oyo epesaka sango ya monene na ntina ya mosala ya Carine mpe ekoki te kozwa esika ya lisungi ya professionnel, mibeko, monganga to crise.',
    'press.headshots.title': 'Bililingi mpe ba portraits',
    'press.headshots.body': 'Ba portraits endimami mpe biloko ya media ya ko télécharger ekoki kobakisama awa tango ba fichiers ya suka ekozala. Ba fichiers binaires ebakisami yango moko te.',
    'press.assetsPlaceholder': 'Esika ya biloko ya ko télécharger',
    'press.books.title': 'Liste ya mikanda',
    'press.books.body': 'The Pain Nobody Saw, If It’s Red, It’s Toxic, The Road to Sunshine, mpe After The Storm.',
    'press.music.title': 'Liste ya miziki',
    'press.music.body': 'Consolation, La Gentillesse, Wonderful, Womanifesto, mpe Paranoïa Persécutive emonisami lokola esika ya koyoka na boboto mayele ya Carine oyo etali kobika.',
    'reflections.architectureNote': 'Réflexion mokomoko ezali na titre, extrait, date, catégorie, elilingi, slug, mpe nzela ya contenu mpo makomi ya sika ebakisama kozanga kobongola kitoko ya lokasa oyo.',
    'reflections.allLoaded': 'Ba réflexions nyonso emonani',
    'pwa.fallbackHint': 'Matambe ya installation ezali mpo na navigateur oyo.',
    'pwa.instructionsEyebrow': 'Installer Carine Sanadina',
    'pwa.instructionsTitle': 'Bakisa app na appareil na yo',
    'pwa.safariInstructions': 'Na Safari, fungola menu Partager, sima pona Ajouter au Dock to Ajouter à l’écran d’accueil soki ezali.',
    'pwa.closeInstructions': 'Kanga malako ya installation',
    'splash.kicker': 'Kobika • Ngolu • Kozongisama',
    'splash.affirmation': 'Kobika ezali awa.',
    'splash.opening': 'Kofungola expérience ya Carine Sanadina.',
    'splash.status': 'Kobongisa expérience ya miziki...',
    'splash.ariaLabel': 'App ya Carine Sanadina ezali kofungwama',
    'splash.phrase.grace': 'Ngolu elobaka kaka.',
    'splash.phrase.story': 'Lisolo na yo esili te.',
    'splash.phrase.music': 'Kobongisa expérience ya miziki...',
    'splash.phrase.healing': 'Kokɔtisa masolo ya kobika...',
    'splash.phrase.sound': 'Kobongisa mongongo ya kozongisama...',
    'splash.phrase.ready': 'Etikali moke...',
    'tracks.genericCredits': 'Eyembami na Carine Sanadina. Makoki ya miziki mpe maloba etikali ya bankolo na yango.'
  },
  sw: {
    'language.name.fr': 'Français',
    'language.name.es': 'Español',
    'language.name.yo': 'Yorùbá',
    'nav.home': 'Mwanzo',
    'nav.books': 'Vitabu',
    'nav.press': 'Kifurushi cha Habari',
    'cta.pathsLabel': 'Aina za maombi',
    'cta.path.speaking': 'Maombi ya kuzungumza',
    'cta.path.advocacy': 'Ushirikiano wa utetezi',
    'cta.path.media': 'Maombi ya vyombo vya habari na mahojiano',
    'cta.path.music': 'Ushirikiano wa muziki',
    'lyrics.expand': 'Panua Mashairi',
    'lyrics.collapse': 'Funga Mashairi',
    'lyrics.tabsLabel': 'Maelezo ya wimbo',
    'lyrics.scrollLabel': 'Mashairi yanayosawazishwa',
    'lyrics.tab.lyrics': 'Mashairi',
    'lyrics.tab.about': 'Kuhusu',
    'lyrics.tab.credits': 'Sifa',
    'lyrics.selectTrack': 'Chagua wimbo ili kuona mashairi.',
    'lyrics.unavailable': 'Mashairi hayapatikani kwa wimbo huu.',
    'lyrics.moreDetails': 'Maelezo zaidi yanakuja hivi karibuni.',
    'lyrics.aboutSong': 'Kuhusu wimbo huu',
    'lyrics.credits': 'Sifa',
    'music.visualizerToggleLabel': 'Kionyeshi',
    'music.visualizerToggleAria': 'Washa au zima kionyeshi cha sauti',
    'music.visualizerOn': 'Kionyeshi kimewashwa',
    'music.visualizerOff': 'Kionyeshi kimezimwa',
    'music.visualizerStyleLabel': 'Mtindo wa uonyeshaji',
    'music.visualizerStyleAria': 'Chagua mtindo wa uonyeshaji',
    'music.visualizerDiagnostics': 'Uchunguzi wa kionyeshi',
    'music.visualizerHelperTap': 'Gusa Kionyeshi, kisha bonyeza Cheza.',
    'music.visualizerHelperIphone': 'Bonyeza Cheza ili kuanzisha mionekano kwenye iPhone.',
    'guide.widgetLabel': 'Mwongozo wa mazungumzo wa Carine',
    'guide.eyebrow': 'Mwongozo unaolenga uponyaji',
    'guide.starter.story': 'Hadithi ya Carine ni ipi?',
    'guide.starter.book': 'Nianze na kitabu gani?',
    'guide.starter.womanifesto': 'Womanifesto inahusu nini?',
    'guide.starter.advocacy': 'Carine anatetea nini?',
    'guide.starter.speak': 'Ninawezaje kumwalika Carine azungumze?',
    'guide.starter.music': 'Nionyeshe muziki wake.',
    'guide.inputLabel': 'Uliza swali kuhusu vitabu, muziki au utetezi wa Carine',
    'guide.notice': 'Mwongozo huu unashiriki taarifa za jumla kuhusu kazi ya Carine na hauchukui nafasi ya msaada wa kitaalamu, kisheria, kitabibu au wa dharura.',
    'press.headshots.title': 'Picha rasmi na portreti',
    'press.headshots.body': 'Portreti zilizoidhinishwa na mali za media zinazopakuliwa zinaweza kuambatishwa hapa faili za mwisho zitakapopatikana. Hakuna faili za binary zinazojumuishwa moja kwa moja.',
    'press.assetsPlaceholder': 'Mahali pa mali zinazopakuliwa',
    'press.books.title': 'Orodha ya vitabu',
    'press.books.body': 'The Pain Nobody Saw, If It’s Red, It’s Toxic, The Road to Sunshine, na After The Storm.',
    'press.music.title': 'Orodha ya muziki',
    'press.music.body': 'Consolation, La Gentillesse, Wonderful, Womanifesto, na Paranoïa Persécutive vinawasilishwa kama dirisha la kusikiliza kwa upole sanaa ya Carine inayolenga uponyaji.',
    'reflections.architectureNote': 'Kila tafakari imeundwa kwa kichwa, dondoo, tarehe, kategoria, picha, slug na njia ya maudhui tajiri ili maandishi mapya yaongezwe bila kubadilisha mpangilio wa ukurasa huu.',
    'reflections.allLoaded': 'Tafakari zote zinaonekana',
    'pwa.fallbackHint': 'Hatua za usakinishaji zinapatikana kwa kivinjari hiki.',
    'pwa.instructionsEyebrow': 'Sakinisha Carine Sanadina',
    'pwa.instructionsTitle': 'Ongeza programu kwenye kifaa chako',
    'pwa.safariInstructions': 'Katika Safari, fungua menyu ya Kushiriki, kisha chagua Add to Dock au Add to Home Screen inapopatikana.',
    'pwa.closeInstructions': 'Funga maelekezo ya usakinishaji',
    'splash.kicker': 'Uponyaji • Neema • Urejesho',
    'splash.affirmation': 'Uponyaji unaishi hapa.',
    'splash.opening': 'Kufungua uzoefu wa Carine Sanadina.',
    'splash.status': 'Kuandaa uzoefu wa muziki...',
    'splash.ariaLabel': 'Programu ya Carine Sanadina inafunguka',
    'splash.phrase.grace': 'Neema bado inazungumza.',
    'splash.phrase.story': 'Hadithi yako haijaisha.',
    'splash.phrase.music': 'Kuandaa uzoefu wa muziki...',
    'splash.phrase.healing': 'Kupakia hadithi za uponyaji...',
    'splash.phrase.sound': 'Kuweka sauti ya urejesho...',
    'splash.phrase.ready': 'Karibu tayari...',
    'tracks.genericCredits': 'Imeimbwa na Carine Sanadina. Haki za muziki na mashairi zinabaki kwa wamiliki wake husika.'
  },
  yo: {
    'language.name.fr': 'Français',
    'language.name.es': 'Español',
    'language.name.yo': 'Yorùbá',
    'books.pain.kicker': 'Ìrántí',
    'tracks.womanifesto.playLabel': 'Mu Womanifesto ṣiṣẹ́',
    'lyrics.expand': 'Fa àwọn orin ọrọ̀ síi',
    'lyrics.collapse': 'Dín àwọn orin ọrọ̀ kù',
    'lyrics.tabsLabel': 'Àlàyé orin',
    'lyrics.scrollLabel': 'Ọ̀rọ̀ orin tó ń bá ohun lọ',
    'lyrics.tab.lyrics': 'Ọ̀rọ̀ orin',
    'lyrics.tab.about': 'Nípa rẹ̀',
    'lyrics.tab.credits': 'Kírẹ́dítì',
    'lyrics.selectTrack': 'Yan orin kan láti wo ọ̀rọ̀ orin.',
    'lyrics.unavailable': 'Ọ̀rọ̀ orin kò sí fún orin yìí.',
    'lyrics.moreDetails': 'Àlàyé míì ń bọ̀ láìpẹ́.',
    'lyrics.aboutSong': 'Nípa orin yìí',
    'lyrics.credits': 'Kírẹ́dítì',
    'music.visualizerToggleLabel': 'Olùfihàn',
    'music.visualizerToggleAria': 'Tan tàbí pa olùfihàn ohun',
    'music.visualizerOn': 'Olùfihàn ti tan',
    'music.visualizerOff': 'Olùfihàn ti pa',
    'music.visualizerStyleLabel': 'Àra ìfihàn',
    'music.visualizerStyleAria': 'Yan àra ìfihàn',
    'music.visualizerDiagnostics': 'Ìtọ́pinpin olùfihàn',
    'music.visualizerHelperTap': 'Tẹ Olùfihàn, lẹ́yìn náà tẹ Mu ṣiṣẹ́.',
    'music.visualizerHelperIphone': 'Tẹ Mu ṣiṣẹ́ láti jẹ́ kí ìfihàn ṣiṣẹ́ lori iPhone.',
    'guide.widgetLabel': 'Olùtọ́nisọ́nà ìjíròrò Carine',
    'guide.eyebrow': 'Olùtọ́nisọ́nà tó dá lórí ìwòsàn',
    'guide.starter.story': 'Kí ni ìtàn Carine?',
    'guide.starter.book': 'Ìwé wo ni kí n bẹ̀rẹ̀ pẹ̀lú?',
    'guide.starter.womanifesto': 'Kí ni Womanifesto sọ nípa rẹ̀?',
    'guide.starter.advocacy': 'Kí ni Carine ń dáàbò bò?',
    'guide.starter.speak': 'Báwo ni mo ṣe lè pè Carine láti sọ̀rọ̀?',
    'guide.starter.music': 'Fi orin rẹ̀ hàn mí.',
    'guide.inputLabel': 'Béèrè ìbéèrè nípa àwọn ìwé, orin, tàbí ìdáàbò bo ti Carine',
    'guide.notice': 'Olùtọ́nisọ́nà yìí ń pín ìwífún gbogbogbò nípa iṣẹ́ Carine, kò sì rọ́pò ìrànlọ́wọ́ amọ̀ja, òfin, ìlera tàbí pajawiri.',
    'press.headshots.title': 'Àwọn fọ́tò orí àti aworan',
    'press.headshots.body': 'Àwọn aworan tí a fọwọ́ sí àti ohun èlò media tó ṣeé gbasilẹ lè wa níbí nígbà tí àwọn fáìlì ikẹhin bá wà. Kò sí fáìlì binary tí a fi kun laifọwọyi.',
    'press.assetsPlaceholder': 'Ààyè fún ohun èlò tó ṣeé gbasilẹ',
    'press.books.title': 'Àtòkọ ìwé',
    'press.books.body': 'The Pain Nobody Saw, If It’s Red, It’s Toxic, The Road to Sunshine, àti After The Storm.',
    'press.music.title': 'Àtòkọ orin',
    'press.music.body': 'Consolation, La Gentillesse, Wonderful, Womanifesto, àti Paranoïa Persécutive ni a fi hàn gẹ́gẹ́ bí ferese ìgbọ́ràn pẹ̀lẹ́ sí iṣẹ́ ọnà ìwòsàn Carine.',
    'reflections.architectureNote': 'Ìrònú kọọkan ni akọlé, àyọkà, ọjọ́, ẹ̀ka, aworan, slug, àti ọ̀nà akoonu ọlọ́rọ̀ kí a lè ṣàfikún kikọ tuntun láì yí ìtòlẹ́sẹẹsẹ ojúewé yìí padà.',
    'reflections.allLoaded': 'Gbogbo ìrònú ti han',
    'pwa.fallbackHint': 'Àwọn ìgbésẹ̀ fifi sori ẹrọ wà fún aṣàwákiri yìí.',
    'pwa.instructionsEyebrow': 'Fi Carine Sanadina sori ẹrọ',
    'pwa.instructionsTitle': 'Fi app kun ẹrọ rẹ',
    'pwa.safariInstructions': 'Nínú Safari, ṣí akojọ Share, lẹ́yìn náà yan Add to Dock tàbí Add to Home Screen tí ó bá wà.',
    'pwa.closeInstructions': 'Pa ìtọ́nisọ́nà fifi sori ẹrọ',
    'splash.kicker': 'Ìwòsàn • Oore-ọfẹ́ • Ìmúpadàbọ̀',
    'splash.affirmation': 'Ìwòsàn ń gbé níbí.',
    'splash.opening': 'Ṣí iriri Carine Sanadina.',
    'splash.status': 'Ń pèsè iriri orin...',
    'splash.ariaLabel': 'App Carine Sanadina ń ṣí',
    'splash.phrase.grace': 'Oore-ọfẹ́ ṣì ń sọ̀rọ̀.',
    'splash.phrase.story': 'Ìtàn rẹ kò tíì parí.',
    'splash.phrase.music': 'Ń pèsè iriri orin...',
    'splash.phrase.healing': 'Ń kojọpọ̀ àwọn ìtàn ìwòsàn...',
    'splash.phrase.sound': 'Ń tún ohun ìmúpadàbọ̀ ṣe...',
    'splash.phrase.ready': 'Ó fẹ́ ṣetán...',
    'tracks.genericCredits': 'Carine Sanadina ló kọrin rẹ. Ẹ̀tọ́ orin àti ọ̀rọ̀ orin wà lọ́wọ́ àwọn oní rẹ̀.'
  }
};

Object.entries(finalTranslationAuditOverrides).forEach(([language, dictionary]) => {
  if (translations[language]) Object.assign(translations[language], dictionary);
});


const reflectionAdvocacyAuditTranslations = {
  es: {
    'reflection.category.advocacy': 'Defensa',
    'reflection.category.resilience': 'Resiliencia',
    'reflection.category.womanhood': 'Mujer y dignidad',
    'reflection.category.emotionalGrowth': 'Crecimiento emocional',
    'reflection.advocacy.title': 'Defender la sanación también es una forma de cuidado',
    'reflection.advocacy.excerpt': 'Una reflexión sobre hablar con ternura, proteger la dignidad de las sobrevivientes y crear espacios donde la restauración pueda respirar.',
    'reflection.advocacy.readTime': '4 min',
    'reflection.advocacy.quote': 'La defensa comienza cuando la dignidad de alguien vuelve a ser escuchada.',
    'reflection.advocacy.prompt': '¿Dónde puede tu voz crear más seguridad esta semana?'
  },
  ln: {
    'reflection.category.advocacy': 'Kosunga mpe kolobela bato',
    'reflection.category.resilience': 'Mpiko ya kotelema lisusu',
    'reflection.category.womanhood': 'Bomwasi',
    'reflection.category.emotionalGrowth': 'Bokoli ya motema',
    'reflection.advocacy.title': 'Kolobela kobika ezali mpe lolenge ya kobatela',
    'reflection.advocacy.excerpt': 'Réflexion moko na ntina ya koloba na boboto, kobatela lokumu ya ba survivantes, mpe kosala bisika oyo kozongisama ekoki kopema.',
    'reflection.advocacy.readTime': '4 min',
    'reflection.advocacy.quote': 'Advocacy ebandaka tango lokumu ya moto eyokami lisusu.',
    'reflection.advocacy.prompt': 'Wapi mongongo na yo ekoki kopesa kimia mingi na poso oyo?'
  },
  sw: {
    'reflection.category.advocacy': 'Utetezi',
    'reflection.category.resilience': 'Ustahimilivu',
    'reflection.category.womanhood': 'Uanawake',
    'reflection.category.emotionalGrowth': 'Ukuaji wa kihisia',
    'reflection.advocacy.title': 'Kutetea uponyaji pia ni aina ya utunzaji',
    'reflection.advocacy.excerpt': 'Tafakari kuhusu kuzungumza kwa upole, kulinda heshima ya walionusurika, na kuunda nafasi ambapo urejesho unaweza kupumua.',
    'reflection.advocacy.readTime': 'dakika 4',
    'reflection.advocacy.quote': 'Utetezi huanza wakati heshima ya mtu inasikilizwa tena.',
    'reflection.advocacy.prompt': 'Sauti yako inaweza kuleta usalama zaidi wapi wiki hii?'
  },
  yo: {
    'nav.home': 'Ilé',
    'nav.books': 'Àwọn ìwé',
    'nav.press': 'Ohun elo atẹjade',
    'cta.pathsLabel': 'Àwọn irú ìbéèrè',
    'cta.path.speaking': 'Ìbéèrè fún sisọ̀rọ̀',
    'cta.path.advocacy': 'Ìfọwọ́sowọ́pọ̀ ìdáàbò bo',
    'cta.path.media': 'Ìbéèrè media àti ìfọ̀rọ̀wánilẹ́nuwò',
    'cta.path.music': 'Ìfọwọ́sowọ́pọ̀ orin',
    'reflection.category.advocacy': 'Ìdáàbò bo',
    'reflection.category.resilience': 'Ìfaradà',
    'reflection.category.womanhood': 'Ìyì obìnrin',
    'reflection.category.emotionalGrowth': 'Ìdàgbàsókè ẹ̀dá ọkàn',
    'reflection.advocacy.title': 'Ìdáàbò bo ìwòsàn tún jẹ́ ìtọju',
    'reflection.advocacy.excerpt': 'Ìrònú nípa sísọ̀rọ̀ pẹ̀lẹ́, dídáàbò bo ìyì àwọn tó yè bọ́, àti ṣíṣe ààyè tí ìmúpadàbọ̀ lè mí.',
    'reflection.advocacy.readTime': 'ìṣẹ́jú 4',
    'reflection.advocacy.quote': 'Ìdáàbò bo bẹ̀rẹ̀ nígbà tí a tún gbọ́ ìyì ẹnìkan.',
    'reflection.advocacy.prompt': 'Níbo ni ohùn rẹ lè dá ààbò síi lọ́sẹ̀ yìí?'
  }
};

Object.entries(reflectionAdvocacyAuditTranslations).forEach(([language, dictionary]) => {
  if (translations[language]) Object.assign(translations[language], dictionary);
});

const extendedLanguageTranslations = {
  de: {
    'html.lang': 'de',
    'meta.title': 'Carine Sanadina | Autorin, Anwältin für Überlebende & heilende Stimme | Jacksonville, FL',
    'meta.description': 'Carine Sanadina ist eine in Jacksonville lebende Autorin, Künstlerin, Gesundheitsfachkraft und Anwältin für Überlebende, deren Arbeit Glauben, emotionale Wiederherstellung, Resilienz und Heilung nach Widrigkeiten in den Mittelpunkt stellt.',
    'meta.ogTitle': 'Carine Sanadina | Heilungsorientierte Autorin und Stimme für Überlebende',
    'meta.ogDescription': 'Entdecken Sie Carine Sanadinas Bücher, Musik, Reflexionen, Advocacy und Medienarbeit, verwurzelt in Glauben, Resilienz und emotionaler Wiederherstellung.',
    'meta.twitterDescription': 'Autorin, heilende Stimme, Anwältin für Überlebende und Künstlerin aus Jacksonville mit Büchern, Musik und Reflexionen über Glauben, Wiederherstellung und Resilienz.',
    'language.label': 'Sprache',
    'language.selectorLabel': 'Website-Sprache auswählen',
    'a11y.skip': 'Zum Hauptinhalt springen',
    'splash.enterApp': 'App öffnen',
    'a11y.primaryNav': 'Hauptnavigation',
    'a11y.home': 'Startseite von Carine Sanadina',
    'a11y.toggleNav': 'Navigation umschalten',
    'a11y.primaryCta': 'Wichtigste Handlungsaufrufe',
    'nav.about': 'Über Carine',
    'nav.works': 'Bücher',
    'nav.home': 'Startseite',
    'nav.books': 'Bücher',
    'nav.press': 'Pressemappe',
    'nav.music': 'Musik',
    'nav.reflections': 'Reflexionen',
    'nav.focus': 'Schwerpunkte',
    'nav.positioning': 'Professionelle Stimme',
    'nav.contact': 'Kontakt',
    'hero.location': 'Jacksonville, Florida',
    'hero.subtitle': 'Gesundheitsfachkraft | Autorin | Anwältin für Überlebende | Stimme für emotionales Wohlbefinden',
    'hero.heading': 'Schmerz in Heilung verwandeln, Überleben in Bestimmung und Geschichten in Wiederherstellung.',
    'hero.viewWorks': 'Bücher ansehen',
    'hero.listenMusic': 'Musik hören',
    'hero.readReflections': 'Reflexionen lesen',
    'hero.contactCarine': 'Carine kontaktieren',
    'portrait.figureLabel': 'Offizielles Porträt von Carine Sanadina',
    'portrait.alt': 'Offizielles Porträt von Carine Sanadina',
    'portrait.fallback': 'Das offizielle Porträt von Carine Sanadina ist vorübergehend nicht verfügbar.',
    'portrait.caption': 'Offizielles Porträt von Carine Sanadina — heilungsorientierte Geschichten mit Mut, Glauben und Wiederherstellung.',
    'about.kicker': 'Über Carine',
    'about.heading': 'Eine Stimme der Resilienz, Wiederherstellung und menschenzentrierten Heilung.',
    'about.body1': 'Carine Sanadina ist eine im Kongo geborene, in Jacksonville lebende Gesundheitsfachkraft, Autorin, Künstlerin und Anwältin für Überlebende, deren Arbeit gelebten Schmerz in heilungsorientierte Literatur und Inspiration verwandelt.',
    'about.body2': 'Ihre Arbeit erkundet das Überleben häuslicher Gewalt, toxische Beziehungen, emotionale Wunden, Glauben, Resilienz, Mutterschaft, Migrationserfahrung und den Weg von Zerbrochenheit zu Wiederherstellung.',
    'about.keyFacts': 'Wichtige Fakten: Carine Sanadina wirkt von Jacksonville, Florida aus als Gesundheitsfachkraft, Autorin, Künstlerin, Anwältin für Überlebende und Stimme für emotionales Wohlbefinden rund um häusliche Gewalt, Glauben und Wiederherstellung.',
    'works.kicker': 'Bücher',
    'works.heading': 'Bücher, die Zeugnis in Licht verwandeln.',
    'works.intro': 'Elegante, intime und mutige Reflexionen für Leserinnen und Leser, die Worte für Überleben, Genesung, Glauben und erneuerten Selbstwert suchen.',
    'buttons.buyAmazon': 'Bei Amazon kaufen',
    'books.pain.kicker': 'Memoir',
    'books.pain.title': 'The Pain Nobody Saw: Eine verborgene Geschichte von Missbrauch und Überleben',
    'books.pain.description': 'Ein schonungsloses Memoir über die verborgene Realität häuslicher Gewalt, kulturellen Druck, stilles Leiden und den mutigen Weg zu Freiheit, Glauben und wiedergewonnenem Selbstwert.',
    'books.toxic.kicker': 'Ratgeber',
    'books.toxic.title': 'If It’s Red, It’s Toxic',
    'books.toxic.description': 'Ein kraftvoller Ratgeber zum Erkennen von Warnsignalen, emotionaler Manipulation, geistlicher Gefahr, ungesunden Bindungen und Mustern, die Frieden, Klarheit und Bestimmung langsam entziehen.',
    'books.sunshine.kicker': 'Glaube & Hoffnung',
    'books.sunshine.title': 'The Road to Sunshine: Eine Reise durch Kämpfe, Glauben und Hoffnung',
    'books.sunshine.description': 'Eine hoffnungsvolle Reflexion über das Durchhalten in Schwierigkeiten, das Festhalten am Glauben und den Weg zu helleren Tagen, auch wenn die Straße ungewiss wirkt.',
    'books.storm.kicker': 'Wiederherstellung',
    'books.storm.title': 'After The Storm',
    'books.storm.description': 'Ein Werk der Wiederherstellung, das die stille Stärke nach Not ehrt und Leserinnen und Leser über das reine Überleben hinaus zu Heilung, Frieden und neuer Möglichkeit führt.',
    'music.kicker': 'Musik-Showcase',
    'music.heading': 'Musik von Carine Sanadina',
    'music.intro': 'Eine kompakte Premium-Playlist mit Liedern, geprägt von Glauben, Zärtlichkeit, Wiederherstellung und Lobpreis.',
    'music.disclaimer': 'Musik und Medien werden zum werblichen Anhören und zur Sichtbarkeit der Künstlerin bereitgestellt. Die Rechte verbleiben bei den jeweiligen Eigentümern. Unbefugtes Kopieren, Weiterverbreiten oder kommerzielle Nutzung ist untersagt.',
    'music.playlistLabel': 'Ausgewählte Musik-Playlist',
    'music.playlist': 'Playlist',
    'music.time': 'Zeit',
    'music.duration': 'Dauer:',
    'tracks.consolation.description': 'Ein sanftes Lied des Trostes, der Ermutigung und der emotionalen Wiederherstellung.',
    'consolationSynopsis': 'Consolation schenkt Trost, Glauben und Zuspruch für Herzen, die Beruhigung und Kraft brauchen.',
    'tracks.gentillesse.description': 'Eine zarte Feier von Güte, Mitgefühl und menschlicher Verbundenheit.',
    'laGentillesseSynopsis': 'La Gentillesse erinnert daran, dass Güte ein heilender Klang sein kann.',
    'tracks.wonderful.description': 'Ein lobpreisendes Lied der Dankbarkeit und der Güte Gottes.',
    'wonderfulSynopsis': 'Wonderful trägt Dankbarkeit, Lobpreis und Staunen über Gottes Güte.',
    'tracks.womanifesto.shortDescription': 'Eine Gospel-Hymne für weibliche Resilienz, Gnade und Sieg.',
    'tracks.womanifesto.description': 'Ein Soukous-, Rumba- und Makossa-Gospel-Manifest über weibliche Identität, Heilung, Glauben und Wiederherstellung.',
    'womanifestoSynopsis': 'Womanifesto feiert Würde, Identität, Glauben und Sieg der Frau nach Schmerz.',
    'tracks.paranoia.shortDescription': 'Ein eindringliches Lied über innere Unruhe und das Suchen nach Frieden.',
    'tracks.paranoia.description': 'Eine ausdrucksstarke musikalische Reflexion über Angst, Wahrnehmung und den Wunsch nach Befreiung.',
    'paranoiaPersecutiveSynopsis': 'Paranoïa Persécutive benennt Bedrängnis und sucht Frieden, Klarheit und Befreiung.',
    'mini.label': 'Kompakter Musikplayer',
    'mini.noTrack': 'Kein Titel ausgewählt',
    'mini.toggleLabel': 'Wiedergabe umschalten',
    'mini.progress': 'Fortschritt',
    'mini.volumeShort': 'Lautstärke',
    'mini.volume': 'Lautstärke',
    'audio.play': 'Abspielen',
    'audio.pause': 'Pause',
    'audio.coverArt': 'Coverbild',
    'audio.playbackError': 'Audio konnte nicht abgespielt werden. Bitte versuchen Sie es erneut.',
    'audio.unavailable': 'Audio ist derzeit nicht verfügbar.',
    'focus.kicker': 'Schwerpunkte',
    'focus.heading': 'Themen, die Carines heilungsorientierte Arbeit prägen.',
    'focus.gridLabel': 'Schwerpunkte von Carine Sanadina',
    'focus.pills.domestic': 'Bewusstsein für häusliche Gewalt',
    'focus.pills.healing': 'Emotionale Heilung',
    'focus.pills.toxic': 'Toxische Beziehungen',
    'focus.pills.faith': 'Glaube & Wiederherstellung',
    'focus.pills.women': 'Stärkung von Frauen',
    'focus.pills.selfWorth': 'Selbstwert',
    'focus.pills.immigrant': 'Migrationserfahrung',
    'focus.pills.motherhood': 'Mutterschaft',
    'focus.pills.writing': 'Schreiben & Zeugnis',
    'focus.pills.care': 'Menschenzentrierte Pflege',
    'positioning.kicker': 'Professionelle Stimme',
    'positioning.heading': 'Glaubwürdigkeit, Mitgefühl und gelebte Erfahrung.',
    'positioning.healthcare.title': 'Gesundheitsfachkraft',
    'positioning.healthcare.body': 'Carines Hintergrund im Gesundheitswesen stärkt ihren menschenzentrierten Blick auf Fürsorge, Würde, Genesung und emotionales Wohlbefinden.',
    'positioning.author.title': 'Autorin & Künstlerin',
    'positioning.author.body': 'Durch Bücher, Musik und Reflexionen formt sie Sprache für Überleben, Glauben, Selbstwert und Wiederherstellung.',
    'quote.label': 'Zitat von Carine Sanadina',
    'quote.text': 'Heilung beginnt, wenn Schmerz endlich eine sichere Sprache findet.',
    'cta.kicker': 'Kontakt',
    'cta.heading': 'Einladungen, Medienanfragen und heilungsorientierte Zusammenarbeit.',
    'cta.body': 'Nutzen Sie die Kontaktwege für Vorträge, Interviews, Musikgespräche, Advocacy-Partnerschaften oder buchbezogene Möglichkeiten.',
    'cta.pathsLabel': 'Anfragearten',
    'cta.path.speaking': 'Vortragsanfragen',
    'cta.path.advocacy': 'Advocacy-Zusammenarbeit',
    'cta.path.media': 'Medien- und Interviewanfragen',
    'cta.path.music': 'Musik-Zusammenarbeit',
    'cta.disclaimer': 'Bitte teilen Sie genug Kontext mit, damit jede Anfrage sorgfältig geprüft werden kann.',
    'cta.optionsLabel': 'Kontaktoptionen',
    'cta.invite': 'Einladung senden',
    'cta.media': 'Medienanfrage',
    'cta.music': 'Musikgespräch',
    'cta.books': 'Buchanfrage',
    'footer.navLabel': 'Fußnavigation',
    'footer.legal': 'Rechtliches / Bedingungen',
    'footer.rights': '© 2026 Carine Sanadina. Alle Rechte vorbehalten.',
    'footer.credit': 'Website-Konzept, Design und digitale Präsentation von Omoluabi Productions, einem Kreativprojekt unter ETL GIS Consulting LLC.',
    'music.stageLabel': 'Musikplayer-Bühne',
    'music.controlsLabel': 'Musiksteuerung',
    'music.nowPlaying': 'Aktueller Titel',
    'music.visualizerFallback': 'Der Visualizer ruht. Die Audiowiedergabe läuft normal weiter.',
    'music.visualizerAvailable': 'Visualizer verfügbar',
    'music.shuffle': 'Zufällig',
    'music.shuffleOn': 'Zufallsmodus ein',
    'music.shuffleOff': 'Zufallsmodus aus',
    'music.repeatAll': 'Alle wiederholen',
    'music.repeatOne': 'Einen wiederholen',
    'music.repeatOff': 'Wiederholung aus',
    'music.nextTrack': 'Nächster Titel',
    'mini.expand': 'Erweitern',
    'mini.close': 'Player schließen',
    'lyrics.expand': 'Lyrics öffnen',
    'lyrics.collapse': 'Lyrics schließen',
    'lyrics.return': 'Zum Player zurückkehren',
    'lyrics.focusKicker': 'Lyrics-Fokus',
    'lyrics.moreMenu': 'Mehr',
    'lyrics.moreMenuLabel': 'Weitere Lyrics-Optionen',
    'lyrics.moreClose': 'Schließen',
    'lyrics.tabsLabel': 'Songdetails',
    'lyrics.scrollLabel': 'Synchronisierte Lyrics',
    'lyrics.tab.lyrics': 'Lyrics',
    'lyrics.tab.about': 'Über den Song',
    'lyrics.tab.credits': 'Credits',
    'lyrics.selectTrack': 'Wählen Sie einen Titel, um Lyrics zu sehen.',
    'lyrics.unavailable': 'Für diesen Titel sind keine Lyrics verfügbar.',
    'lyrics.moreDetails': 'Weitere Details folgen bald.',
    'lyrics.aboutSong': 'Über diesen Song',
    'lyrics.credits': 'Credits',
    'press.kicker': 'Pressemappe',
    'press.heading': 'Ein medienfreundlicher Raum für Gespräche über Heilung, Autorschaft, Glauben und Wiederherstellung.',
    'press.body': 'Carine Sanadina steht für respektvolle Mediengespräche, lokale Features und heilungsorientierte Geschichten rund um ihre Bücher, Musik, Advocacy und gesundheitsnahe Empathie zur Verfügung.',
    'bio.title': 'Kurzbiografie',
    'bio.body': 'Im Kongo geboren und in Jacksonville zuhause, verbindet Carine Sanadina Gesundheitsarbeit, inspirierendes Schreiben, Musik und Advocacy für Überlebende, um mit Mitgefühl über Schmerz, Mut, Glauben und emotionale Wiederherstellung zu sprechen.',
    'press.headshots.title': 'Porträts & Bilder',
    'press.headshots.body': 'Genehmigte Bilder und herunterladbare Medienressourcen können hier bereitgestellt werden, sobald finale Dateien verfügbar sind.',
    'press.assetsPlaceholder': 'Platzhalter für herunterladbare Ressourcen',
    'press.books.title': 'Buchliste',
    'press.books.body': 'The Pain Nobody Saw, If It’s Red, It’s Toxic, The Road to Sunshine und After The Storm.',
    'press.music.title': 'Musikliste',
    'press.music.body': 'Consolation, La Gentillesse, Wonderful, Womanifesto und Paranoïa Persécutive werden als sanftes Hörfenster in Carines heilungsorientierte Kunst präsentiert.',
    'speaking.title': 'Vortragsthemen',
    'speaking.topic1': 'Häusliche Gewalt und verborgenes Überleben sichtbar machen',
    'speaking.topic2': 'Glaube, Resilienz und der Wiederaufbau von Selbstwert',
    'speaking.topic3': 'Menschenzentrierte Pflege, Migrationserfahrung und emotionales Wohlbefinden',
    'inquiry.title': 'Anfragen',
    'inquiry.body': 'Für Interviews, Vorträge, Musikgespräche oder buchbezogene Veranstaltungen nutzen Sie bitte die untenstehenden Kontaktwege.',
    'inquiry.cta': 'Kontakt aufnehmen',
    'reflections.kicker': 'Reflexionen',
    'reflections.heading': 'Heilungsnotizen aus Carines Büchern, Musik und Wiederherstellungsthemen.',
    'reflections.intro': 'Eine kuratierte Bibliothek für Leserinnen und Leser, die Überleben, toxische Beziehungsmuster, Glauben, Güte und emotionale Wiederherstellung erkunden.',
    'reflections.architectureNote': 'Jede Reflexion enthält Titel, Auszug, Datum, Kategorie, Bild, Slug und reichhaltigen Inhalt, damit neues Schreiben ohne Änderung des Layouts ergänzt werden kann.',
    'reflections.allLoaded': 'Alle Reflexionen werden angezeigt',
    'reflections.toolbarLabel': 'Reflexionen filtern',
    'reflections.searchLabel': 'Reflexionen suchen',
    'reflections.searchPlaceholder': 'Nach Thema oder Titel suchen',
    'reflections.categoryLabel': 'Reflexionskategorien',
    'reflections.empty': 'Noch keine Reflexion passt zu dieser Suche.',
    'reflections.loadMore': 'Weitere Reflexionen laden',
    'reflections.readTime': 'Lesezeit',
    'reflections.featuredLabel': 'Empfohlene Reflexion',
    'reflections.promptLabel': 'Reflexionsfrage',
    'reflections.all': 'Alle',
    'pwa.installText': 'Genießen Sie Carines Musik, Bücher und heilende Botschaft jederzeit. Installieren Sie die App für ein bequemes Erlebnis.',
    'pwa.iosInstructions': 'Tippen Sie auf Teilen und dann auf Zum Home-Bildschirm hinzufügen.',
    'pwa.installButton': 'Installieren',
    'pwa.maybeLater': 'Vielleicht später',
    'pwa.dismissLabel': 'Installationshinweis schließen',
    'pwa.fallbackHint': 'Installationsschritte sind für diesen Browser verfügbar.',
    'pwa.instructionsEyebrow': 'Carine Sanadina installieren',
    'pwa.instructionsTitle': 'App zu Ihrem Gerät hinzufügen',
    'pwa.safariInstructions': 'Öffnen Sie in Safari das Teilen-Menü und wählen Sie Zum Dock hinzufügen oder Zum Home-Bildschirm hinzufügen, falls verfügbar.',
    'pwa.closeInstructions': 'Installationsanleitung schließen',
    'quote.wallLabel': 'Zitatwand',
    'quote.wall.one': 'Überleben ist nicht das Ende der Geschichte.',
    'quote.wall.two': 'Heilung kann Sprache werden.',
    'quote.wall.three': 'Glaube kann zerbrochene Orte in Zukunft verwandeln.',
    'cta.call': 'Kontakt aufnehmen',
    'offline.metaTitle': 'Offline | Carine Sanadina',
    'offline.kicker': 'Offline',
    'offline.heading': 'Sie sind offline.',
    'offline.body': 'Einige Inhalte sind möglicherweise nicht verfügbar, bis die Verbindung wiederhergestellt ist.',
    'offline.returnHome': 'Zur Startseite zurückkehren',
    'reflections.explore': 'Reflexionen erkunden',
    'reflections.exploreAria': 'Carines Reflexionen erkunden',
    'reflection.category.survival': 'Überleben',
    'reflection.category.advocacy': 'Advocacy',
    'reflection.category.resilience': 'Resilienz',
    'reflection.category.womanhood': 'Frausein',
    'reflection.category.emotionalGrowth': 'Emotionales Wachstum',
    'reflection.category.toxic': 'Toxische Muster',
    'reflection.category.faith': 'Glaube',
    'reflection.category.restoration': 'Wiederherstellung',
    'reflection.category.kindness': 'Güte',
    'reflection.category.healing': 'Heilung',
    'reflection.hidden.title': 'Wenn verborgener Schmerz endlich Sprache findet',
    'reflection.hidden.excerpt': 'Eine Reflexion über den Moment, in dem stilles Leiden benannt werden darf.',
    'reflection.hidden.readTime': '4 Min.',
    'reflection.hidden.quote': 'Was verborgen war, verdient nicht, für immer unsichtbar zu bleiben.',
    'reflection.hidden.prompt': 'Welcher Schmerz in Ihnen braucht heute eine sichere Sprache?',
    'reflection.red.title': 'Rote Signale, die Frieden schützen',
    'reflection.red.excerpt': 'Eine sanfte Erinnerung daran, dass Klarheit, Grenzen und Selbstwert Formen der Heilung sind.',
    'reflection.red.readTime': '3 Min.',
    'reflection.red.quote': 'Nicht jedes rote Signal ist laut; manche flüstern, bevor sie schreien.',
    'reflection.red.prompt': 'Welche Grenze könnte diese Woche Ihren Frieden schützen?',
    'reflection.sunshine.title': 'Hoffnung auf der Straße zur Sonne',
    'reflection.sunshine.excerpt': 'Über Glauben, Ausdauer und die Entscheidung weiterzugehen, wenn die Straße ungewiss ist.',
    'reflection.sunshine.readTime': '4 Min.',
    'reflection.sunshine.quote': 'Hoffnung leugnet den Sturm nicht; sie geht trotzdem weiter.',
    'reflection.sunshine.prompt': 'Wo lädt Hoffnung Sie ein, einen weiteren Schritt zu gehen?',
    'reflection.storm.title': 'Nach dem Sturm wieder atmen',
    'reflection.storm.excerpt': 'Eine Reflexion über die stille Stärke, die nach schweren Zeiten wächst.',
    'reflection.storm.readTime': '3 Min.',
    'reflection.storm.quote': 'Frieden nach dem Sturm ist kein Zufall; er ist Wiederherstellung.',
    'reflection.storm.prompt': 'Welche kleine Form von Frieden kehrt zu Ihnen zurück?',
    'reflection.kindness.title': 'Güte als heilende Praxis',
    'reflection.kindness.excerpt': 'Über Mitgefühl, Würde und die leise Kraft, einander mit Zärtlichkeit zu begegnen.',
    'reflection.kindness.readTime': '3 Min.',
    'reflection.kindness.quote': 'Güte ist weich, aber sie ist nicht schwach.',
    'reflection.kindness.prompt': 'Wo kann Ihre Güte heute Sicherheit schaffen?',
    'reflection.consolation.title': 'Trost für das müde Herz',
    'reflection.consolation.excerpt': 'Eine kurze Meditation über Zuspruch, Glauben und emotionale Wiederherstellung.',
    'reflection.consolation.readTime': '2 Min.',
    'reflection.consolation.quote': 'Trost erinnert das Herz daran, dass es nicht verlassen ist.',
    'reflection.consolation.prompt': 'Welche Worte des Trostes brauchen Sie heute?',
    'reflection.advocacy.title': 'Für Heilung einzutreten ist auch Fürsorge',
    'reflection.advocacy.excerpt': 'Eine Reflexion über sanftes Sprechen, den Schutz der Würde von Überlebenden und Räume, in denen Wiederherstellung atmen kann.',
    'reflection.advocacy.readTime': '4 Min.',
    'reflection.advocacy.quote': 'Advocacy beginnt, wenn die Würde eines Menschen wieder gehört wird.',
    'reflection.advocacy.prompt': 'Wo kann Ihre Stimme diese Woche mehr Sicherheit schaffen?',
    'splash.kicker': 'Heilung • Gnade • Wiederherstellung',
    'splash.affirmation': 'Heilung wohnt hier.',
    'splash.opening': 'Das Carine-Sanadina-Erlebnis wird geöffnet.',
    'splash.status': 'Musikerlebnis wird vorbereitet...',
    'splash.ariaLabel': 'Die Carine-Sanadina-App wird geöffnet',
    'splash.phrase.grace': 'Gnade spricht noch.',
    'splash.phrase.story': 'Ihre Geschichte ist nicht vorbei.',
    'splash.phrase.music': 'Musikerlebnis wird vorbereitet...',
    'splash.phrase.healing': 'Heilungsgeschichten werden geladen...',
    'splash.phrase.sound': 'Klänge der Wiederherstellung werden gestimmt...',
    'splash.phrase.ready': 'Fast bereit...',
    'music.visualizerToggleLabel': 'Visualizer',
    'music.visualizerToggleAria': 'Audiovisualizer ein- oder ausschalten',
    'music.visualizerOn': 'Visualizer ein',
    'music.visualizerOff': 'Visualizer aus',
    'music.visualizerStyleLabel': 'Visualizer-Stil',
    'music.visualizerStyleAria': 'Visualizer-Stil auswählen',
    'music.visualizerDiagnostics': 'Visualizer-Diagnose',
    'music.visualizerHelperTap': 'Tippen Sie auf Visualizer und dann auf Abspielen.',
    'music.visualizerHelperIphone': 'Tippen Sie auf Abspielen, um den Visualizer auf dem iPhone zu aktivieren.',
    'guide.widgetLabel': 'Carines Gesprächsleitfaden',
    'guide.launcher': 'Carines Guide fragen',
    'guide.eyebrow': 'Heilungsorientierter Guide',
    'guide.title': 'Carines Guide fragen',
    'guide.close': 'Schließen',
    'guide.startersLabel': 'Vorgeschlagene Fragen',
    'guide.startersTitle': 'Vorgeschlagene Fragen',
    'guide.starter.story': 'Was ist Carines Geschichte?',
    'guide.starter.book': 'Mit welchem Buch soll ich beginnen?',
    'guide.starter.womanifesto': 'Worum geht es in Womanifesto?',
    'guide.starter.advocacy': 'Wofür setzt sich Carine ein?',
    'guide.starter.speak': 'Wie kann ich Carine zum Sprechen einladen?',
    'guide.starter.music': 'Zeigen Sie mir ihre Musik.',
    'guide.inputLabel': 'Stellen Sie eine Frage zu Carines Büchern, Musik oder Advocacy',
    'guide.placeholder': 'Geben Sie Ihre Frage ein',
    'guide.send': 'Senden',
    'guide.notice': 'Dieser Guide teilt allgemeine Informationen über Carines Arbeit und ersetzt keine professionelle, rechtliche, medizinische oder Krisenhilfe.',
    'guide.welcome': 'Willkommen. Ich bin Carines Guide — ein kompakter Wegweiser zu ihrer Geschichte, ihren Büchern, ihrer Musik, ihrem Engagement und ihrer heilungsorientierten Mission. Wie kann ich Ihnen beim Entdecken helfen?',
    'tracks.genericCredits': 'Vorgetragen von Carine Sanadina. Musik- und Textrechte verbleiben bei den jeweiligen Eigentümern.'
  },
  ar: {
    'html.lang': 'ar',
    'meta.title': 'كارين سانادينا | كاتبة ومناصرة للناجيات وصوت للشفاء | جاكسونفيل، فلوريدا',
    'meta.description': 'كارين سانادينا كاتبة وفنانة ومختصة في الرعاية الصحية ومناصرة للناجيات تقيم في جاكسونفيل، ويتمحور عملها حول الإيمان والترميم العاطفي والصمود والشفاء بعد الشدائد.',
    'language.label': 'اللغة',
    'language.selectorLabel': 'اختيار لغة الموقع',
    'a11y.skip': 'تخطي إلى المحتوى الرئيسي',
    'splash.enterApp': 'الدخول إلى التطبيق',
    'a11y.primaryNav': 'التنقل الرئيسي',
    'a11y.home': 'الصفحة الرئيسية لكارين سانادينا',
    'a11y.toggleNav': 'تبديل التنقل',
    'a11y.primaryCta': 'دعوات الإجراء الرئيسية',
    'nav.about': 'عن كارين',
    'nav.works': 'الكتب',
    'nav.home': 'الرئيسية',
    'nav.books': 'الكتب',
    'nav.press': 'الملف الصحفي',
    'nav.music': 'الموسيقى',
    'nav.reflections': 'تأملات',
    'nav.focus': 'مجالات التركيز',
    'nav.positioning': 'الصوت المهني',
    'nav.contact': 'تواصل',
    'hero.location': 'جاكسونفيل، فلوريدا',
    'hero.subtitle': 'مختصة رعاية صحية | كاتبة | مناصرة للناجيات | صوت للعافية العاطفية',
    'hero.heading': 'تحويل الألم إلى شفاء، والنجاة إلى رسالة، والقصص إلى ترميم.',
    'hero.viewWorks': 'عرض الكتب',
    'hero.listenMusic': 'الاستماع إلى الموسيقى',
    'hero.readReflections': 'قراءة التأملات',
    'hero.contactCarine': 'التواصل مع كارين',
    'about.kicker': 'عن كارين',
    'about.heading': 'صوت للصمود والترميم والشفاء المتمحور حول الإنسان.',
    'about.body1': 'كارين سانادينا، المولودة في الكونغو والمقيمة في جاكسونفيل، مختصة في الرعاية الصحية وكاتبة وفنانة ومناصرة للناجيات، يحوّل عملها الألم المعاش إلى أدب وإلهام متمحورين حول الشفاء.',
    'about.body2': 'يتناول عملها النجاة من العنف المنزلي، والعلاقات السامة، والجراح العاطفية، والإيمان، والصمود، والأمومة، وتجربة الهجرة، والرحلة من الانكسار إلى الترميم.',
    'works.kicker': 'الكتب',
    'works.heading': 'كتب تحوّل الشهادة إلى نور.',
    'works.intro': 'تأملات أنيقة وحميمة وشجاعة للقراء الباحثين عن لغة للنجاة والتعافي والإيمان واستعادة قيمة الذات.',
    'buttons.buyAmazon': 'الشراء من أمازون',
    'books.pain.kicker': 'مذكرات',
    'books.pain.title': 'الألم الذي لم يره أحد: قصة خفية عن الإساءة والنجاة',
    'books.pain.description': 'مذكرات صادقة تكشف الواقع الخفي للإساءة المنزلية والضغط الثقافي والمعاناة الصامتة والطريق الشجاع نحو الحرية والإيمان واستعادة قيمة الذات.',
    'books.toxic.kicker': 'دليل',
    'books.toxic.description': 'دليل جريء للتعرّف إلى إشارات الخطر والتلاعب العاطفي والخطر الروحي والتعلقات غير الصحية والأنماط التي تستنزف السلام والوضوح والغاية.',
    'books.sunshine.kicker': 'إيمان وأمل',
    'books.sunshine.description': 'تأمل مفعم بالأمل في احتمال الصراع والتمسك بالإيمان ومواصلة الطريق نحو أيام أكثر إشراقاً حتى عندما يبدو الطريق غير مؤكد.',
    'books.storm.kicker': 'ترميم',
    'books.storm.description': 'عمل متمحور حول الترميم يكرّم القوة الهادئة التي تأتي بعد الشدة، ويساعد القراء على النظر إلى ما بعد النجاة نحو الشفاء والسلام والإمكانات المتجددة.',
    'music.kicker': 'عرض موسيقي',
    'music.heading': 'موسيقى كارين سانادينا',
    'music.intro': 'قائمة تشغيل مختصرة وراقية لأغانٍ تشكّلت بالإيمان والحنان والترميم والتسبيح.',
    'music.disclaimer': 'تُعرض الموسيقى والوسائط للاستماع الترويجي وإبراز الفنانة. تبقى الحقوق لأصحابها. يُحظر النسخ أو إعادة التوزيع أو الاستخدام التجاري غير المصرح به.',
    'music.playlistLabel': 'قائمة موسيقى مختارة',
    'music.playlist': 'قائمة التشغيل',
    'music.time': 'الوقت',
    'music.duration': 'المدة:',
    'mini.label': 'مشغل موسيقى مصغر',
    'mini.noTrack': 'لم يتم اختيار أي مقطع',
    'mini.toggleLabel': 'تبديل التشغيل',
    'mini.progress': 'التقدم',
    'mini.volumeShort': 'الصوت',
    'mini.volume': 'مستوى الصوت',
    'audio.play': 'تشغيل',
    'audio.pause': 'إيقاف مؤقت',
    'audio.coverArt': 'غلاف فني',
    'audio.playbackError': 'تعذر تشغيل الصوت. يرجى المحاولة مرة أخرى.',
    'audio.unavailable': 'الصوت غير متاح حالياً.',
    'focus.kicker': 'مجالات التركيز',
    'focus.heading': 'الموضوعات التي تشكّل عمل كارين المتمحور حول الشفاء.',
    'focus.pills.domestic': 'التوعية بالعنف المنزلي',
    'focus.pills.healing': 'الشفاء العاطفي',
    'focus.pills.toxic': 'العلاقات السامة',
    'focus.pills.faith': 'الإيمان والترميم',
    'focus.pills.women': 'تمكين النساء',
    'focus.pills.selfWorth': 'قيمة الذات',
    'focus.pills.immigrant': 'تجربة الهجرة',
    'focus.pills.motherhood': 'الأمومة',
    'focus.pills.writing': 'الكتابة والشهادة',
    'focus.pills.care': 'رعاية تتمحور حول الإنسان',
    'positioning.kicker': 'الصوت المهني',
    'positioning.heading': 'مصداقية وتعاطف وخبرة معاشة.',
    'positioning.healthcare.title': 'مختصة في الرعاية الصحية',
    'positioning.healthcare.body': 'تعزز خلفية كارين في الرعاية الصحية نظرتها الإنسانية إلى الرعاية والكرامة والتعافي والعافية العاطفية.',
    'positioning.author.title': 'كاتبة وفنانة',
    'positioning.author.body': 'من خلال الكتب والموسيقى والتأملات، تصوغ لغة للنجاة والإيمان وقيمة الذات والترميم.',
    'quote.label': 'اقتباس من كارين سانادينا',
    'quote.text': 'يبدأ الشفاء عندما يجد الألم أخيراً لغة آمنة.',
    'cta.kicker': 'تواصل',
    'cta.heading': 'دعوات ومقابلات وتعاون متمحور حول الشفاء.',
    'cta.body': 'استخدم طرق التواصل لطلبات الحديث أو المقابلات أو النقاشات الموسيقية أو شراكات المناصرة أو فرص الكتب.',
    'cta.pathsLabel': 'أنواع الطلبات',
    'cta.path.speaking': 'طلبات الحديث',
    'cta.path.advocacy': 'تعاون في المناصرة',
    'cta.path.media': 'طلبات إعلامية ومقابلات',
    'cta.path.music': 'تعاون موسيقي',
    'footer.navLabel': 'تنقل التذييل',
    'footer.legal': 'قانوني / الشروط',
    'footer.rights': '© 2026 كارين سانادينا. جميع الحقوق محفوظة.',
    'music.stageLabel': 'منصة مشغل الموسيقى',
    'music.controlsLabel': 'عناصر التحكم بالموسيقى',
    'music.nowPlaying': 'يتم التشغيل الآن',
    'music.visualizerFallback': 'المؤثر البصري في وضع الراحة. سيستمر تشغيل الصوت بشكل طبيعي.',
    'music.shuffle': 'عشوائي',
    'music.shuffleOn': 'التشغيل العشوائي مفعّل',
    'music.shuffleOff': 'التشغيل العشوائي متوقف',
    'music.repeatAll': 'تكرار الكل',
    'music.repeatOne': 'تكرار واحد',
    'music.repeatOff': 'التكرار متوقف',
    'music.nextTrack': 'المقطع التالي',
    'mini.expand': 'توسيع',
    'mini.close': 'إغلاق المشغل',
    'lyrics.expand': 'فتح الكلمات',
    'lyrics.collapse': 'طي الكلمات',
    'lyrics.return': 'العودة إلى المشغل',
    'lyrics.focusKicker': 'تركيز الكلمات',
    'lyrics.moreMenu': 'المزيد',
    'lyrics.moreMenuLabel': 'خيارات إضافية للكلمات',
    'lyrics.moreClose': 'إغلاق',
    'lyrics.tabsLabel': 'تفاصيل الأغنية',
    'lyrics.scrollLabel': 'كلمات متزامنة',
    'lyrics.tab.lyrics': 'الكلمات',
    'lyrics.tab.about': 'عن الأغنية',
    'lyrics.tab.credits': 'الاعتمادات',
    'lyrics.selectTrack': 'اختر مقطعاً لعرض الكلمات.',
    'lyrics.unavailable': 'الكلمات غير متاحة لهذا المقطع.',
    'lyrics.moreDetails': 'ستتوفر تفاصيل إضافية قريباً.',
    'lyrics.aboutSong': 'عن هذه الأغنية',
    'lyrics.credits': 'الاعتمادات',
    'press.kicker': 'الملف الصحفي',
    'press.heading': 'مساحة مناسبة للإعلام للحوار حول الشفاء والتأليف والإيمان والترميم.',
    'press.body': 'كارين سانادينا متاحة لحوارات إعلامية واعية وملفات محلية وفرص قصصية متمحورة حول الشفاء ترتبط بكتبها وموسيقاها ومناصرتها وتعاطفها المتجذر في الرعاية الصحية.',
    'bio.title': 'سيرة قصيرة',
    'bio.body': 'وُلدت كارين سانادينا في الكونغو وتقيم في جاكسونفيل، وتجمع بين الرعاية الصحية والكتابة الملهمة والموسيقى ومناصرة الناجيات للتحدث بتعاطف عن الألم والشجاعة والإيمان والترميم العاطفي.',
    'speaking.title': 'موضوعات الحديث',
    'speaking.topic1': 'التوعية بالعنف المنزلي والنجاة الخفية',
    'speaking.topic2': 'الإيمان والصمود وإعادة بناء قيمة الذات',
    'speaking.topic3': 'الرعاية المتمحورة حول الإنسان وتجربة الهجرة والعافية العاطفية',
    'inquiry.title': 'الطلبات',
    'inquiry.body': 'للمقابلات أو الدعوات للحديث أو الحوارات الموسيقية أو الفعاليات المرتبطة بالكتب، استخدم طرق التواصل أدناه.',
    'inquiry.cta': 'ابدأ التواصل',
    'reflections.kicker': 'تأملات',
    'reflections.heading': 'ملاحظات شفاء مستمدة من كتب كارين وموسيقاها وموضوعات الترميم.',
    'reflections.intro': 'مكتبة منسقة للقراء الذين يستكشفون النجاة وأنماط العلاقات السامة والإيمان واللطف والترميم العاطفي.',
    'reflections.allLoaded': 'تم عرض جميع التأملات',
    'reflections.toolbarLabel': 'تصفية التأملات',
    'reflections.searchLabel': 'البحث في التأملات',
    'reflections.searchPlaceholder': 'ابحث حسب الموضوع أو العنوان',
    'reflections.categoryLabel': 'فئات التأملات',
    'reflections.empty': 'لا يوجد تأمل يطابق هذا البحث بعد.',
    'reflections.loadMore': 'تحميل المزيد من التأملات',
    'reflections.readTime': 'قراءة',
    'reflections.featuredLabel': 'تأمل مميز',
    'reflections.promptLabel': 'سؤال للتأمل',
    'reflections.all': 'الكل',
    'pwa.installText': 'استمتع بموسيقى كارين وكتبها ورسالتها الشافية في أي وقت. ثبّت التطبيق لتجربة مريحة.',
    'pwa.iosInstructions': 'اضغط مشاركة، ثم إضافة إلى الشاشة الرئيسية.',
    'pwa.installButton': 'تثبيت',
    'pwa.maybeLater': 'ربما لاحقاً',
    'pwa.dismissLabel': 'إغلاق تنبيه التثبيت',
    'pwa.fallbackHint': 'خطوات التثبيت متاحة لهذا المتصفح.',
    'pwa.instructionsEyebrow': 'تثبيت كارين سانادينا',
    'pwa.instructionsTitle': 'أضف التطبيق إلى جهازك',
    'pwa.safariInstructions': 'في Safari، افتح قائمة المشاركة ثم اختر إضافة إلى Dock أو إضافة إلى الشاشة الرئيسية إن توفرت.',
    'pwa.closeInstructions': 'إغلاق تعليمات التثبيت',
    'quote.wallLabel': 'جدار الاقتباسات',
    'quote.wall.one': 'النجاة ليست نهاية القصة.',
    'quote.wall.two': 'يمكن للشفاء أن يصبح لغة.',
    'quote.wall.three': 'الإيمان يحوّل الأماكن المكسورة إلى مستقبل.',
    'cta.call': 'تواصل',
    'offline.metaTitle': 'غير متصل | كارين سانادينا',
    'offline.kicker': 'غير متصل',
    'offline.heading': 'أنت غير متصل.',
    'offline.body': 'قد لا تتوفر بعض المحتويات حتى يعود الاتصال.',
    'offline.returnHome': 'العودة إلى الصفحة الرئيسية',
    'reflection.category.survival': 'النجاة',
    'reflection.category.advocacy': 'المناصرة',
    'reflection.category.resilience': 'الصمود',
    'reflection.category.womanhood': 'المرأة والكرامة',
    'reflection.category.emotionalGrowth': 'النمو العاطفي',
    'reflection.category.toxic': 'أنماط سامة',
    'reflection.category.faith': 'الإيمان',
    'reflection.category.restoration': 'الترميم',
    'reflection.category.kindness': 'اللطف',
    'reflection.category.healing': 'الشفاء',
    'reflection.hidden.title': 'حين يجد الألم المخفي لغة أخيراً',
    'reflection.hidden.excerpt': 'تأمل في اللحظة التي يصبح فيها للألم الصامت اسم ومساحة آمنة.',
    'reflection.hidden.readTime': '4 دقائق',
    'reflection.red.title': 'إشارات حمراء تحمي السلام',
    'reflection.red.readTime': '3 دقائق',
    'reflection.sunshine.title': 'أمل على الطريق إلى الشمس',
    'reflection.sunshine.readTime': '4 دقائق',
    'reflection.storm.title': 'التنفس من جديد بعد العاصفة',
    'reflection.storm.readTime': '3 دقائق',
    'reflection.kindness.title': 'اللطف كممارسة شفاء',
    'reflection.kindness.readTime': '3 دقائق',
    'reflection.consolation.title': 'تعزية للقلب المتعب',
    'reflection.consolation.readTime': 'دقيقتان',
    'reflection.advocacy.title': 'مناصرة الشفاء هي أيضاً رعاية',
    'reflection.advocacy.readTime': '4 دقائق',
    'splash.kicker': 'شفاء • نعمة • ترميم',
    'splash.affirmation': 'الشفاء يسكن هنا.',
    'splash.opening': 'يتم فتح تجربة كارين سانادينا.',
    'splash.status': 'جارٍ تحضير تجربة الموسيقى...',
    'splash.ariaLabel': 'يتم فتح تطبيق كارين سانادينا',
    'splash.phrase.grace': 'النعمة ما زالت تتكلم.',
    'splash.phrase.story': 'قصتك لم تنتهِ.',
    'splash.phrase.music': 'جارٍ تحضير تجربة الموسيقى...',
    'splash.phrase.healing': 'جارٍ تحميل قصص الشفاء...',
    'splash.phrase.sound': 'جارٍ ضبط أصوات الترميم...',
    'splash.phrase.ready': 'قاربنا على الجاهزية...',
    'music.visualizerToggleLabel': 'المؤثر البصري',
    'music.visualizerToggleAria': 'تشغيل أو إيقاف المؤثر البصري للصوت',
    'music.visualizerOn': 'المؤثر البصري يعمل',
    'music.visualizerOff': 'المؤثر البصري متوقف',
    'music.visualizerStyleLabel': 'نمط المؤثر',
    'music.visualizerStyleAria': 'اختيار نمط المؤثر البصري',
    'music.visualizerDiagnostics': 'تشخيص المؤثر البصري',
    'music.visualizerHelperTap': 'اضغط على المؤثر البصري، ثم اضغط تشغيل.',
    'music.visualizerHelperIphone': 'اضغط تشغيل لتمكين المؤثر على iPhone.',
    'guide.widgetLabel': 'دليل كارين الحواري',
    'guide.launcher': 'اسأل دليل كارين',
    'guide.eyebrow': 'دليل متمحور حول الشفاء',
    'guide.title': 'اسأل دليل كارين',
    'guide.close': 'إغلاق',
    'guide.startersLabel': 'أسئلة مقترحة',
    'guide.startersTitle': 'أسئلة مقترحة',
    'guide.starter.story': 'ما قصة كارين؟',
    'guide.starter.book': 'بأي كتاب أبدأ؟',
    'guide.starter.womanifesto': 'ما موضوع Womanifesto؟',
    'guide.starter.advocacy': 'ما الذي تناصره كارين؟',
    'guide.starter.speak': 'كيف أدعو كارين للتحدث؟',
    'guide.starter.music': 'أرني موسيقاها.',
    'guide.inputLabel': 'اطرح سؤالاً عن كتب كارين أو موسيقاها أو مناصرتها',
    'guide.placeholder': 'اكتب سؤالك',
    'guide.send': 'إرسال',
    'guide.notice': 'يشارك هذا الدليل معلومات عامة عن عمل كارين ولا يغني عن المساعدة المهنية أو القانونية أو الطبية أو دعم الأزمات.',
    'guide.welcome': 'مرحباً. أنا دليل كارين — دليل مختصر إلى قصتها وكتبها وموسيقاها ومناصرتها ورسالتها المتمحورة حول الشفاء. كيف أساعدك على الاستكشاف؟',
    'tracks.genericCredits': 'أداء كارين سانادينا. تبقى حقوق الموسيقى والكلمات لأصحابها.'
  },
  zh: {
    'html.lang': 'zh-CN',
    'meta.title': 'Carine Sanadina | 作家、幸存者倡导者与疗愈之声 | 佛罗里达州杰克逊维尔',
    'meta.description': 'Carine Sanadina 是居住在杰克逊维尔的医疗专业人士、作家、艺术家和幸存者倡导者，她的作品聚焦信仰、情感修复、韧性、女性赋权以及逆境后的疗愈。',
    'language.label': '语言',
    'language.selectorLabel': '选择网站语言',
    'a11y.skip': '跳到主要内容',
    'splash.enterApp': '进入应用',
    'a11y.primaryNav': '主导航',
    'a11y.home': 'Carine Sanadina 首页',
    'a11y.toggleNav': '切换导航',
    'a11y.primaryCta': '主要行动按钮',
    'nav.about': '关于',
    'nav.works': '书籍',
    'nav.home': '首页',
    'nav.books': '书籍',
    'nav.press': '媒体资料',
    'nav.music': '音乐',
    'nav.reflections': '札记',
    'nav.focus': '关注领域',
    'nav.positioning': '专业声音',
    'nav.contact': '联系',
    'hero.location': '佛罗里达州杰克逊维尔',
    'hero.subtitle': '医疗专业人士 | 作家 | 幸存者倡导者 | 情感健康之声',
    'hero.heading': '把痛苦化为疗愈，把幸存化为使命，把故事化为修复。',
    'hero.viewWorks': '查看书籍',
    'hero.listenMusic': '聆听音乐',
    'hero.readReflections': '阅读札记',
    'hero.contactCarine': '联系 Carine',
    'about.kicker': '关于 Carine',
    'about.heading': '一个关于韧性、修复与以人为本疗愈的声音。',
    'about.body1': 'Carine Sanadina 出生于刚果，现居杰克逊维尔，是医疗专业人士、作家、艺术家和幸存者倡导者。她将亲历的痛苦转化为以疗愈为中心的文学与灵感。',
    'about.body2': '她的作品探讨家暴幸存、毒性关系、情感创伤、信仰、韧性、母职、移民经历，以及从破碎走向修复的旅程。',
    'works.kicker': '书籍',
    'works.heading': '把见证化为光的书。',
    'works.intro': '优雅、亲密而勇敢的札记，献给寻找幸存、康复、信仰和重建自我价值语言的读者。',
    'buttons.buyAmazon': '在 Amazon 购买',
    'books.pain.kicker': '回忆录',
    'books.pain.title': '无人看见的痛：一段关于虐待与幸存的隐秘故事',
    'books.pain.description': '一部真诚的回忆录，揭示家庭虐待、文化压力、沉默受苦，以及通往自由、信仰和重获自我价值的勇敢道路。',
    'books.toxic.kicker': '指南',
    'books.toxic.description': '一本有力的指南，帮助识别危险信号、情感操控、灵性风险、不健康依附，以及慢慢耗尽平安、清晰与使命感的模式。',
    'books.sunshine.kicker': '信仰与希望',
    'books.sunshine.description': '一篇充满希望的札记，关于在挣扎中坚持、抓住信仰，并在道路不确定时继续走向更明亮的日子。',
    'books.storm.kicker': '修复',
    'books.storm.description': '一部以修复为中心的作品，致敬苦难之后安静的力量，帮助读者从幸存走向疗愈、平安与新的可能。',
    'music.kicker': '音乐展示',
    'music.heading': 'Carine Sanadina 的音乐',
    'music.intro': '一份精致紧凑的精选歌单，承载信仰、温柔、修复与赞美。',
    'music.disclaimer': '音乐和媒体仅用于推广试听与艺术家展示。权利归各自所有者所有。未经授权不得复制、再分发或商业使用。',
    'music.playlistLabel': '精选音乐歌单',
    'music.playlist': '歌单',
    'music.time': '时间',
    'music.duration': '时长：',
    'tracks.consolation.description': '一首关于安慰、鼓励与情感修复的温柔歌曲。',
    'consolationSynopsis': 'Consolation 为需要安定与力量的心带来安慰、信仰和鼓励。',
    'tracks.gentillesse.description': '一首温柔赞颂善意、怜悯与人与人连接的歌曲。',
    'laGentillesseSynopsis': 'La Gentillesse 提醒我们，善意也可以成为疗愈的声音。',
    'tracks.wonderful.description': '一首充满赞美、感恩与上帝美善的歌曲。',
    'wonderfulSynopsis': 'Wonderful 承载感恩、赞美，以及对上帝美善的惊叹。',
    'tracks.womanifesto.shortDescription': '一首关于女性韧性、恩典与得胜的福音赞歌。',
    'tracks.womanifesto.description': '一首融合 Soukous、Rumba 与 Makossa 的福音宣言，关于女性身份、疗愈、信仰与修复。',
    'womanifestoSynopsis': 'Womanifesto 赞美女性在痛苦之后的尊严、身份、信仰与胜利。',
    'mini.label': '迷你音乐播放器',
    'mini.noTrack': '未选择歌曲',
    'mini.toggleLabel': '切换播放',
    'mini.progress': '进度',
    'mini.volumeShort': '音量',
    'mini.volume': '音量',
    'audio.play': '播放',
    'audio.pause': '暂停',
    'audio.coverArt': '封面图',
    'audio.playbackError': '无法播放音频。请重试。',
    'audio.unavailable': '音频暂不可用。',
    'focus.kicker': '关注领域',
    'focus.heading': '塑造 Carine 疗愈工作的主题。',
    'focus.pills.domestic': '家暴意识',
    'focus.pills.healing': '情感疗愈',
    'focus.pills.toxic': '毒性关系',
    'focus.pills.faith': '信仰与修复',
    'focus.pills.women': '女性赋权',
    'focus.pills.selfWorth': '自我价值',
    'focus.pills.immigrant': '移民经历',
    'focus.pills.motherhood': '母职',
    'focus.pills.writing': '写作与见证',
    'focus.pills.care': '以人为本的照护',
    'positioning.kicker': '专业声音',
    'positioning.heading': '可信度、同理心与亲历经验。',
    'positioning.healthcare.title': '医疗专业人士',
    'positioning.healthcare.body': 'Carine 的医疗背景强化了她对照护、尊严、康复与情感健康的以人为本视角。',
    'positioning.author.title': '作家与艺术家',
    'positioning.author.body': '通过书籍、音乐和札记，她为幸存、信仰、自我价值和修复塑造语言。',
    'quote.label': 'Carine Sanadina 语录',
    'quote.text': '当痛苦终于找到安全的语言时，疗愈便开始了。',
    'cta.kicker': '联系',
    'cta.heading': '邀约、媒体咨询与以疗愈为中心的合作。',
    'cta.body': '可通过联系方式提交演讲、采访、音乐对话、倡导合作或书籍相关机会。',
    'cta.pathsLabel': '咨询类型',
    'cta.path.speaking': '演讲邀请',
    'cta.path.advocacy': '倡导合作',
    'cta.path.media': '媒体与采访咨询',
    'cta.path.music': '音乐合作',
    'footer.navLabel': '页脚导航',
    'footer.legal': '法律 / 条款',
    'footer.rights': '© 2026 Carine Sanadina。保留所有权利。',
    'music.stageLabel': '音乐播放器舞台',
    'music.controlsLabel': '音乐控制',
    'music.nowPlaying': '正在播放',
    'music.visualizerFallback': '可视化器正在休息。音频将继续正常播放。',
    'music.shuffle': '随机播放',
    'music.shuffleOn': '随机播放已开启',
    'music.shuffleOff': '随机播放已关闭',
    'music.repeatAll': '全部循环',
    'music.repeatOne': '单曲循环',
    'music.repeatOff': '循环已关闭',
    'music.nextTrack': '下一首',
    'mini.expand': '展开',
    'mini.close': '关闭播放器',
    'lyrics.expand': '打开歌词',
    'lyrics.collapse': '收起歌词',
    'lyrics.return': '返回播放器',
    'lyrics.focusKicker': '歌词焦点',
    'lyrics.moreMenu': '更多',
    'lyrics.moreMenuLabel': '更多歌词选项',
    'lyrics.moreClose': '关闭',
    'lyrics.tabsLabel': '歌曲详情',
    'lyrics.scrollLabel': '同步歌词',
    'lyrics.tab.lyrics': '歌词',
    'lyrics.tab.about': '关于歌曲',
    'lyrics.tab.credits': '制作信息',
    'lyrics.selectTrack': '选择一首歌曲以查看歌词。',
    'lyrics.unavailable': '此歌曲暂无歌词。',
    'lyrics.moreDetails': '更多详情即将推出。',
    'lyrics.aboutSong': '关于这首歌',
    'lyrics.credits': '制作信息',
    'press.kicker': '媒体资料',
    'press.heading': '一个适合媒体对话的空间，聚焦疗愈、写作、信仰与修复。',
    'press.body': 'Carine Sanadina 可参与有温度的媒体访谈、本地专题，以及围绕她的书籍、音乐、倡导和医疗同理心展开的疗愈故事机会。',
    'bio.title': '简短介绍',
    'bio.body': 'Carine Sanadina 出生于刚果，现居杰克逊维尔。她结合医疗工作、励志写作、音乐与幸存者倡导，以同理心谈论痛苦、勇气、信仰和情感修复。',
    'speaking.title': '演讲主题',
    'speaking.topic1': '家庭暴力意识与隐秘幸存',
    'speaking.topic2': '信仰、韧性与重建自我价值',
    'speaking.topic3': '以人为本的照护、移民经历与情感健康',
    'inquiry.title': '咨询',
    'inquiry.body': '如需采访、演讲邀请、音乐对话或书籍相关活动，请使用下方联系方式。',
    'inquiry.cta': '开始联系',
    'reflections.kicker': '札记',
    'reflections.heading': '来自 Carine 书籍、音乐和修复主题的疗愈笔记。',
    'reflections.intro': '一座策划式资料库，供读者探索幸存、毒性关系模式、信仰、善意和情感修复。',
    'reflections.allLoaded': '所有札记已显示',
    'reflections.toolbarLabel': '筛选札记',
    'reflections.searchLabel': '搜索札记',
    'reflections.searchPlaceholder': '按主题或标题搜索',
    'reflections.categoryLabel': '札记分类',
    'reflections.empty': '还没有与此搜索匹配的札记。',
    'reflections.loadMore': '加载更多札记',
    'reflections.readTime': '阅读',
    'reflections.featuredLabel': '精选札记',
    'reflections.promptLabel': '思考问题',
    'reflections.all': '全部',
    'pwa.installText': '随时欣赏 Carine 的音乐、书籍和疗愈信息。安装应用以获得更便捷体验。',
    'pwa.iosInstructions': '点击“分享”，然后选择“添加到主屏幕”。',
    'pwa.installButton': '安装',
    'pwa.maybeLater': '稍后再说',
    'pwa.dismissLabel': '关闭安装提示',
    'pwa.fallbackHint': '此浏览器可查看安装步骤。',
    'pwa.instructionsEyebrow': '安装 Carine Sanadina',
    'pwa.instructionsTitle': '将应用添加到您的设备',
    'pwa.safariInstructions': '在 Safari 中打开分享菜单，然后选择“添加到 Dock”或“添加到主屏幕”（如可用）。',
    'pwa.closeInstructions': '关闭安装说明',
    'quote.wallLabel': '语录墙',
    'quote.wall.one': '幸存不是故事的结尾。',
    'quote.wall.two': '疗愈可以成为语言。',
    'quote.wall.three': '信仰把破碎之处带向未来。',
    'cta.call': '联系',
    'offline.metaTitle': '离线 | Carine Sanadina',
    'offline.kicker': '离线',
    'offline.heading': '您当前处于离线状态。',
    'offline.body': '在连接恢复之前，部分内容可能无法使用。',
    'offline.returnHome': '返回首页',
    'reflection.category.survival': '幸存',
    'reflection.category.advocacy': '倡导',
    'reflection.category.resilience': '韧性',
    'reflection.category.womanhood': '女性与尊严',
    'reflection.category.emotionalGrowth': '情感成长',
    'reflection.category.toxic': '毒性模式',
    'reflection.category.faith': '信仰',
    'reflection.category.restoration': '修复',
    'reflection.category.kindness': '善意',
    'reflection.category.healing': '疗愈',
    'reflection.hidden.title': '当隐秘的痛终于获得语言',
    'reflection.hidden.excerpt': '关于沉默的痛苦被命名并获得安全空间的时刻。',
    'reflection.hidden.readTime': '4 分钟',
    'reflection.red.title': '保护平安的红色信号',
    'reflection.red.readTime': '3 分钟',
    'reflection.sunshine.title': '通往阳光之路上的希望',
    'reflection.sunshine.readTime': '4 分钟',
    'reflection.storm.title': '风暴之后重新呼吸',
    'reflection.storm.readTime': '3 分钟',
    'reflection.kindness.title': '把善意作为疗愈练习',
    'reflection.kindness.readTime': '3 分钟',
    'reflection.consolation.title': '给疲惫之心的安慰',
    'reflection.consolation.readTime': '2 分钟',
    'reflection.advocacy.title': '倡导疗愈也是一种照护',
    'reflection.advocacy.readTime': '4 分钟',
    'splash.kicker': '疗愈 • 恩典 • 修复',
    'splash.affirmation': '疗愈在这里。',
    'splash.opening': '正在打开 Carine Sanadina 体验。',
    'splash.status': '正在准备音乐体验...',
    'splash.ariaLabel': 'Carine Sanadina 应用正在打开',
    'splash.phrase.grace': '恩典仍在说话。',
    'splash.phrase.story': '你的故事还没有结束。',
    'splash.phrase.music': '正在准备音乐体验...',
    'splash.phrase.healing': '正在加载疗愈故事...',
    'splash.phrase.sound': '正在调试修复之声...',
    'splash.phrase.ready': '即将准备好...',
    'music.visualizerToggleLabel': '可视化器',
    'music.visualizerToggleAria': '开启或关闭音频可视化器',
    'music.visualizerOn': '可视化器开启',
    'music.visualizerOff': '可视化器关闭',
    'music.visualizerStyleLabel': '可视化风格',
    'music.visualizerStyleAria': '选择可视化风格',
    'music.visualizerDiagnostics': '可视化器诊断',
    'music.visualizerHelperTap': '点击可视化器，然后点击播放。',
    'music.visualizerHelperIphone': '点击播放以在 iPhone 上启用可视化器。',
    'guide.widgetLabel': 'Carine 对话指南',
    'guide.launcher': '询问 Carine 指南',
    'guide.eyebrow': '疗愈导向指南',
    'guide.title': '询问 Carine 指南',
    'guide.close': '关闭',
    'guide.startersLabel': '建议问题',
    'guide.startersTitle': '建议问题',
    'guide.starter.story': 'Carine 的故事是什么？',
    'guide.starter.book': '我应该从哪本书开始？',
    'guide.starter.womanifesto': 'Womanifesto 是关于什么的？',
    'guide.starter.advocacy': 'Carine 倡导什么？',
    'guide.starter.speak': '如何邀请 Carine 演讲？',
    'guide.starter.music': '给我看看她的音乐。',
    'guide.inputLabel': '询问有关 Carine 书籍、音乐或倡导的问题',
    'guide.placeholder': '输入您的问题',
    'guide.send': '发送',
    'guide.notice': '本指南分享有关 Carine 工作的一般信息，不能替代专业、法律、医疗或危机支持。',
    'guide.welcome': '欢迎。我是 Carine 指南——一个关于她的故事、书籍、音乐、倡导和疗愈使命的简明向导。我可以怎样帮助您探索？',
    'tracks.genericCredits': '由 Carine Sanadina 演唱。音乐和歌词权利归各自所有者所有。'
  }
};

Object.entries(extendedLanguageTranslations).forEach(([language, dictionary]) => {
  translations[language] = { ...translations[DEFAULT_LANGUAGE], ...dictionary };
});


const i18nHardeningTranslations = {
  en: {
    'music.visualizerStyle.orb': 'Orb',
    'music.visualizerStyle.waveform': 'Wave Bars',
    'music.visualizerStyle.particle-field': 'Particle Field',
    'music.visualizerStyle.wireframe-lattice': 'Wireframe Lattice',
    'music.visualizerStyle.waveform-tunnel': 'Wave Tunnel',
    'music.visualizerStyle.holographic-rings': 'Holographic Rings',
    'lyrics.debug.ariaLabel': 'Lyrics calibration diagnostics',
    'lyrics.debug.title': 'Lyrics calibration',
    'lyrics.debug.close': 'Close lyrics diagnostics',
    'vinyl.debug.ariaLabel': 'Vinyl diagnostics',
    'vinyl.debug.title': 'Vinyl diagnostics'
  },
  fr: {
    'music.visualizerStyle.orb': 'Orbe',
    'music.visualizerStyle.waveform': 'Barres d’onde',
    'music.visualizerStyle.particle-field': 'Champ de particules',
    'music.visualizerStyle.wireframe-lattice': 'Treillis filaire',
    'music.visualizerStyle.waveform-tunnel': 'Tunnel d’onde',
    'music.visualizerStyle.holographic-rings': 'Anneaux holographiques',
    'lyrics.debug.ariaLabel': 'Diagnostics de calibration des paroles',
    'lyrics.debug.title': 'Calibration des paroles',
    'lyrics.debug.close': 'Fermer les diagnostics des paroles',
    'vinyl.debug.ariaLabel': 'Diagnostics vinyle',
    'vinyl.debug.title': 'Diagnostics vinyle',
    'guide.welcome': 'Bonjour, je suis le guide de Carine — un espace doux pour découvrir ses livres, sa musique et son message de guérison. Comment puis-je vous aider ?',
    'audio.pause': 'Pause'
  },
  es: {
    'music.visualizerStyle.orb': 'Orbe',
    'music.visualizerStyle.waveform': 'Barras de onda',
    'music.visualizerStyle.particle-field': 'Campo de partículas',
    'music.visualizerStyle.wireframe-lattice': 'Retícula alámbrica',
    'music.visualizerStyle.waveform-tunnel': 'Túnel de onda',
    'music.visualizerStyle.holographic-rings': 'Anillos holográficos',
    'lyrics.debug.ariaLabel': 'Diagnóstico de calibración de letras',
    'lyrics.debug.title': 'Calibración de letras',
    'lyrics.debug.close': 'Cerrar diagnóstico de letras',
    'vinyl.debug.ariaLabel': 'Diagnóstico de vinilo',
    'vinyl.debug.title': 'Diagnóstico de vinilo',
    'guide.welcome': 'Hola, soy la guía de Carine: un espacio amable para descubrir sus libros, su música y su mensaje de sanación. ¿Cómo puedo ayudarte?',
    'lyrics.return': 'Volver al reproductor',
    'lyrics.focusKicker': 'Modo de letras enfocadas',
    'lyrics.moreMenu': '⋯ Más',
    'lyrics.moreMenuLabel': 'Menú de letras enfocadas',
    'lyrics.moreClose': 'Cerrar menú de letras'
  },
  ln: {
    'music.visualizerStyle.orb': 'Libungutulu',
    'music.visualizerStyle.waveform': 'Banzete ya mbonge',
    'music.visualizerStyle.particle-field': 'Esika ya biloko mikemike',
    'music.visualizerStyle.wireframe-lattice': 'Réseau ya bansinga',
    'music.visualizerStyle.waveform-tunnel': 'Tunnel ya mbonge',
    'music.visualizerStyle.holographic-rings': 'Bapete ya hologramme',
    'lyrics.debug.ariaLabel': 'Botali ya kobongisa maloba ya loyembo',
    'lyrics.debug.title': 'Kobongisa maloba ya loyembo',
    'lyrics.debug.close': 'Kanga botali ya maloba ya loyembo',
    'vinyl.debug.ariaLabel': 'Botali ya vinyle',
    'vinyl.debug.title': 'Botali ya vinyle',
    'guide.welcome': 'Mbote, ngai nazali motambwisi ya Carine — esika ya boboto mpo na koyeba mikanda, miziki mpe nsango na ye ya kobika. Nakoki kosalisa yo ndenge nini?',
    'lyrics.return': 'Zonga na ebɛtelo',
    'lyrics.focusKicker': 'Mode ya kotala maloba',
    'lyrics.moreMenu': '⋯ Mosusu',
    'lyrics.moreMenuLabel': 'Menu ya maloba ya loyembo',
    'lyrics.moreClose': 'Kanga menu ya maloba'
  },
  sw: {
    'music.visualizerStyle.orb': 'Duara',
    'music.visualizerStyle.waveform': 'Mihimili ya mawimbi',
    'music.visualizerStyle.particle-field': 'Uwanja wa chembe',
    'music.visualizerStyle.wireframe-lattice': 'Wavu wa waya',
    'music.visualizerStyle.waveform-tunnel': 'Handaki la mawimbi',
    'music.visualizerStyle.holographic-rings': 'Pete za hologramu',
    'lyrics.debug.ariaLabel': 'Uchunguzi wa kusawazisha maneno',
    'lyrics.debug.title': 'Usawazishaji wa maneno',
    'lyrics.debug.close': 'Funga uchunguzi wa maneno',
    'vinyl.debug.ariaLabel': 'Uchunguzi wa vinyl',
    'vinyl.debug.title': 'Uchunguzi wa vinyl',
    'guide.welcome': 'Habari, mimi ni mwongozo wa Carine — nafasi tulivu ya kuchunguza vitabu, muziki na ujumbe wake wa uponyaji. Ninawezaje kukusaidia?',
    'lyrics.return': 'Rudi kwa kichezaji',
    'lyrics.focusKicker': 'Hali ya maneno yaliyoangaziwa',
    'lyrics.moreMenu': '⋯ Zaidi',
    'lyrics.moreMenuLabel': 'Menyu ya maneno yaliyoangaziwa',
    'lyrics.moreClose': 'Funga menyu ya maneno'
  },
  yo: {
    'music.visualizerStyle.orb': 'Òrbù',
    'music.visualizerStyle.waveform': 'Àwọn ọ̀pá ìgbì',
    'music.visualizerStyle.particle-field': 'Pápá patikulu',
    'music.visualizerStyle.wireframe-lattice': 'Àwọ̀n waya',
    'music.visualizerStyle.waveform-tunnel': 'Ọ̀nà ìgbì',
    'music.visualizerStyle.holographic-rings': 'Àwọn oruka hologramu',
    'lyrics.debug.ariaLabel': 'Ìtọ́pinpin ìtọ́nisọ́nà àwọn ọ̀rọ̀ orin',
    'lyrics.debug.title': 'Ìtọ́nisọ́nà àwọn ọ̀rọ̀ orin',
    'lyrics.debug.close': 'Pa ìtọ́pinpin ọ̀rọ̀ orin',
    'vinyl.debug.ariaLabel': 'Ìtọ́pinpin vinyl',
    'vinyl.debug.title': 'Ìtọ́pinpin vinyl',
    'guide.welcome': 'Báwo, èmi ni amọ̀nà Carine — ibi pẹ̀lẹ́ fún ṣíṣàwárí àwọn ìwé rẹ̀, orin rẹ̀ àti ìránṣẹ́ ìwòsàn rẹ̀. Báwo ni mo ṣe lè ràn ọ́ lọ́wọ́?',
    'lyrics.return': 'Padà sí ẹrọ orin',
    'lyrics.focusKicker': 'Ipo ọ̀rọ̀ orin àfiyèsí',
    'lyrics.moreMenu': '⋯ Síi',
    'lyrics.moreMenuLabel': 'Àkojọ ọ̀rọ̀ orin àfiyèsí',
    'lyrics.moreClose': 'Pa àkojọ ọ̀rọ̀ orin'
  },
  de: {
    'music.visualizerStyle.orb': 'Kugel',
    'music.visualizerStyle.waveform': 'Wellenbalken',
    'music.visualizerStyle.particle-field': 'Partikelfeld',
    'music.visualizerStyle.wireframe-lattice': 'Drahtgitter',
    'music.visualizerStyle.waveform-tunnel': 'Wellentunnel',
    'music.visualizerStyle.holographic-rings': 'Holografische Ringe',
    'lyrics.debug.ariaLabel': 'Diagnose zur Liedtext-Kalibrierung',
    'lyrics.debug.title': 'Liedtext-Kalibrierung',
    'lyrics.debug.close': 'Liedtext-Diagnose schließen',
    'vinyl.debug.ariaLabel': 'Vinyl-Diagnose',
    'vinyl.debug.title': 'Vinyl-Diagnose',
    'books.pain.kicker': 'Memoir',
    'music.playlist': 'Wiedergabeliste',
    'audio.pause': 'Pause',
    'legal.kicker': 'Rechtliches / Bedingungen',
    'legal.heading': 'Hinweis zu Website-Eigentum und Nutzung',
    'legal.ariaLabel': 'Rechtliche Hinweise und Eigentumshinweise',
    'legal.ownership.title': 'Hinweis zu Eigentum und Plattform',
    'legal.ip.title': 'Geistiges Eigentum',
    'legal.artist.title': 'Künstlermaterialien und Bildnis',
    'legal.noAgency.title': 'Keine Agentur- oder Managementvertretung',
    'legal.music.title': 'Nutzung von Musik und Medien',
    'legal.websiteUse.title': 'Website-Nutzung',
    'legal.liability.title': 'Haftungsbeschränkung',
    'legal.takedown.title': 'Anfragen zur Entfernung oder Korrektur',
    'legal.takedown.link': 'Zum Kontaktbereich',
    'legal.entity.title': 'Verantwortliche Rechtseinheit',
    'offline.kicker': 'Offline',
    'reflection.category.advocacy': 'Fürsprache',
    'lyrics.tab.lyrics': 'Liedtexte',
    'lyrics.tab.credits': 'Mitwirkende',
    'lyrics.credits': 'Mitwirkende',
    'music.visualizerToggleLabel': 'Visualizer'
  },
  ar: {
    'music.visualizerStyle.orb': 'كرة مضيئة',
    'music.visualizerStyle.waveform': 'أشرطة الموجة',
    'music.visualizerStyle.particle-field': 'حقل الجسيمات',
    'music.visualizerStyle.wireframe-lattice': 'شبكة سلكية',
    'music.visualizerStyle.waveform-tunnel': 'نفق الموجة',
    'music.visualizerStyle.holographic-rings': 'حلقات هولوغرافية',
    'lyrics.debug.ariaLabel': 'تشخيص معايرة كلمات الأغاني',
    'lyrics.debug.title': 'معايرة كلمات الأغاني',
    'lyrics.debug.close': 'إغلاق تشخيص الكلمات',
    'vinyl.debug.ariaLabel': 'تشخيص الأسطوانة',
    'vinyl.debug.title': 'تشخيص الأسطوانة',
    'tracks.consolation.number': 'المقطع 01',
    'tracks.consolation.description': 'تعزية صادقة ورجاء للشفاء',
    'consolationSynopsis': 'أغنية عبادة ترفع المسيح باعتباره التعزية والملجأ والملك.',
    'tracks.gentillesse.number': 'المقطع 02',
    'tracks.gentillesse.description': 'أغنية لطف ممتلئة بالإيمان',
    'laGentillesseSynopsis': 'احتفاء باللطف والرحمة وقوة النعمة.',
    'tracks.wonderful.number': 'المقطع 03',
    'tracks.wonderful.description': 'تسبيح مبهج وامتنان',
    'wonderfulSynopsis': 'شهادة فرِحة عن صلاح الله وأمانته ومحبته.',
    'tracks.womanifesto.number': 'المقطع 04',
    'tracks.womanifesto.shortDescription': 'أغنية غوسبل أفريقية عاطفية تحتفي بقوة النساء والشفاء والنعمة والانتصار بالإيمان.',
    'tracks.womanifesto.description': 'أغنية غوسبل أفريقية عاطفية تحتفي بقوة النساء والشفاء والنعمة والانتصار بالإيمان.',
    'womanifestoSynopsis': 'نشيد مفعم بالتمكين يكرّم صمود المرأة والنعمة والانتصار.',
    'tracks.paranoia.number': 'المقطع 05',
    'tracks.paranoia.shortDescription': 'أغنية فرنسية سينمائية عن الحدس والحماية والوعي عند النجاة.',
    'tracks.paranoia.description': 'أغنية فرنسية سينمائية تستكشف الحدس والحماية والوعي المرتبط بالنجاة، حيث تصبح اليقظة إنذاراً وحكمة.',
    'paranoiaPersecutiveSynopsis': 'تأمل درامي في التمييز والحذر الواقي وحكمة البقاء.',
    'focus.gridLabel': 'مجالات التركيز',
    'cta.disclaimer': 'لا ينشئ هذا الموقع وكالة أو إدارة أو نشرًا أو شراكة أو توظيفًا أو تمثيلًا قانونيًا. تتطلب مناقشات التعاون أو الحجز اتفاقًا كتابيًا منفصلًا.',
    'cta.optionsLabel': 'خيارات التواصل',
    'cta.invite': 'ادعُ كارين للتحدث',
    'cta.media': 'اطلب مقابلة إعلامية',
    'cta.music': 'ناقش تعاونًا موسيقيًا',
    'cta.books': 'محادثة حول الكتب',
    'legal.kicker': 'الشؤون القانونية / الشروط',
    'legal.heading': 'إشعار ملكية الموقع واستخدامه',
    'legal.ariaLabel': 'الشروط القانونية وإشعارات الملكية',
    'legal.ownership.title': 'إشعار الملكية والمنصة',
    'legal.ip.title': 'الملكية الفكرية',
    'legal.artist.title': 'مواد الفنانة وصورتها',
    'legal.noAgency.title': 'لا توجد وكالة أو تمثيل إداري',
    'legal.music.title': 'استخدام الموسيقى والوسائط',
    'legal.websiteUse.title': 'استخدام الموقع',
    'legal.liability.title': 'تحديد المسؤولية',
    'legal.takedown.title': 'طلبات الإزالة أو التصحيح',
    'legal.takedown.link': 'الانتقال إلى قسم التواصل',
    'legal.entity.title': 'الكيان القانوني الحاكم',
    'music.visualizerAvailable': 'تظهر حركة المؤثر البصري أعلاه.',
    'press.headshots.title': 'صور شخصية وبورتريهات',
    'press.headshots.body': 'يمكن إرفاق الصور المعتمدة والمواد الإعلامية القابلة للتنزيل هنا عند توفر الملفات النهائية. لا تُضمَّن أي ملفات ثنائية تلقائيًا.',
    'press.assetsPlaceholder': 'عنصر نائب للأصول القابلة للتنزيل',
    'press.books.title': 'قائمة الكتب',
    'press.music.title': 'قائمة الموسيقى',
    'reflections.architectureNote': 'تُنمذج كل خاطرة بعنوان ومقتطف وتاريخ وفئة وصورة وغلاف ومسار محتوى غني لإضافة كتابات جديدة من دون تغيير الإيقاع البصري للصفحة.',
    'reflections.explore': 'استكشف العمل المرتبط',
    'reflections.exploreAria': 'استكشف القسم المرتبط بـ {title}'
  },
  'zh-CN': {
    'music.visualizerStyle.orb': '光球',
    'music.visualizerStyle.waveform': '波形条',
    'music.visualizerStyle.particle-field': '粒子场',
    'music.visualizerStyle.wireframe-lattice': '线框网格',
    'music.visualizerStyle.waveform-tunnel': '波形隧道',
    'music.visualizerStyle.holographic-rings': '全息环',
    'lyrics.debug.ariaLabel': '歌词校准诊断',
    'lyrics.debug.title': '歌词校准',
    'lyrics.debug.close': '关闭歌词诊断',
    'vinyl.debug.ariaLabel': '黑胶诊断',
    'vinyl.debug.title': '黑胶诊断',
    'tracks.consolation.number': '曲目 01',
    'tracks.gentillesse.number': '曲目 02',
    'tracks.wonderful.number': '曲目 03',
    'tracks.womanifesto.number': '曲目 04',
    'tracks.paranoia.number': '曲目 05',
    'tracks.paranoia.shortDescription': '一首电影感法语歌曲，探索直觉、保护与幸存者的警觉。',
    'tracks.paranoia.description': '一首电影感法语歌曲，探索直觉、保护与幸存意识；警觉既是提醒，也成为智慧。',
    'paranoiaPersecutiveSynopsis': '关于辨别、保护性的警觉与幸存智慧的戏剧性沉思。',
    'focus.gridLabel': '重点领域',
    'cta.disclaimer': '本网站不建立代理、管理、出版、合作、雇佣或法律代表关系。合作或预约讨论需另行签署书面协议。',
    'cta.optionsLabel': '联系选项',
    'cta.invite': '邀请 Carine 演讲',
    'cta.media': '申请媒体采访',
    'cta.music': '讨论音乐合作',
    'cta.books': '图书交流',
    'legal.kicker': '法律 / 条款',
    'legal.heading': '网站所有权与使用说明',
    'legal.ariaLabel': '法律条款和所有权说明',
    'legal.ownership.title': '所有权与平台说明',
    'legal.ip.title': '知识产权',
    'legal.artist.title': '艺术家资料与肖像',
    'legal.noAgency.title': '无代理或管理代表关系',
    'legal.music.title': '音乐与媒体使用',
    'legal.websiteUse.title': '网站使用',
    'legal.liability.title': '责任限制',
    'legal.takedown.title': '删除或更正请求',
    'legal.takedown.link': '前往联系部分',
    'legal.entity.title': '主管实体',
    'music.visualizerAvailable': '可视化动画显示在上方。',
    'press.headshots.title': '头像与肖像',
    'press.headshots.body': '最终文件可用后，可在此附上已批准的肖像和可下载媒体资料。不会自动捆绑任何二进制资源。',
    'press.assetsPlaceholder': '可下载资源占位',
    'press.books.title': '图书列表',
    'press.music.title': '音乐列表',
    'reflections.architectureNote': '每篇反思都以标题、摘要、日期、分类、封面图、路径和富内容入口建模，因此可以添加新文章而不改变页面的视觉节奏。',
    'reflections.explore': '探索相关作品',
    'reflections.exploreAria': '探索与 {title} 相关的部分'
  }
};

if (translations.zh && !translations['zh-CN']) {
  translations['zh-CN'] = translations.zh;
}
if (translations.zh) {
  delete translations.zh;
}
Object.values(translations).forEach((dictionary) => {
  dictionary['language.name.zh-CN'] = '中文';
  delete dictionary['language.name.zh'];
});
Object.entries(i18nHardeningTranslations).forEach(([language, dictionary]) => {
  if (translations[language]) Object.assign(translations[language], dictionary);
});


const finalTranslationCoverageOverrides = {
  fr: {
    'nav.contact': 'Contact',
    'books.toxic.kicker': 'Guide',
    'reflection.hidden.readTime': '4 min',
    'reflection.red.readTime': '5 min',
    'reflection.sunshine.readTime': '3 min',
    'reflection.storm.readTime': '4 min',
    'reflection.kindness.readTime': '3 min',
    'reflection.consolation.readTime': '3 min',
    'reflection.advocacy.readTime': '4 min'
  },
  es: {
    'reflection.hidden.readTime': '4 min',
    'reflection.red.readTime': '5 min',
    'reflection.sunshine.readTime': '3 min',
    'reflection.storm.readTime': '4 min',
    'reflection.kindness.readTime': '3 min',
    'reflection.consolation.readTime': '3 min',
    'reflection.advocacy.readTime': '4 min'
  },
  ln: {
    'reflection.hidden.readTime': 'min 4',
    'reflection.red.readTime': 'min 5',
    'reflection.sunshine.readTime': 'min 3',
    'reflection.storm.readTime': 'min 4',
    'reflection.kindness.readTime': 'min 3',
    'reflection.consolation.readTime': 'min 3',
    'reflection.advocacy.readTime': 'min 4'
  },
  sw: {
    'reflection.hidden.readTime': 'dak 4',
    'reflection.red.readTime': 'dak 5',
    'reflection.sunshine.readTime': 'dak 3',
    'reflection.storm.readTime': 'dak 4',
    'reflection.kindness.readTime': 'dak 3',
    'reflection.consolation.readTime': 'dak 3',
    'reflection.advocacy.readTime': 'dak 4'
  },
  yo: {
    'reflection.hidden.readTime': 'ìṣẹ́jú 4',
    'reflection.red.readTime': 'ìṣẹ́jú 5',
    'reflection.sunshine.readTime': 'ìṣẹ́jú 3',
    'reflection.storm.readTime': 'ìṣẹ́jú 4',
    'reflection.kindness.readTime': 'ìṣẹ́jú 3',
    'reflection.consolation.readTime': 'ìṣẹ́jú 3',
    'reflection.advocacy.readTime': 'ìṣẹ́jú 4'
  },
  de: {
    'tracks.consolation.number': 'Titel 01',
    'tracks.gentillesse.number': 'Titel 02',
    'tracks.wonderful.number': 'Titel 03',
    'tracks.womanifesto.number': 'Titel 04',
    'tracks.paranoia.number': 'Titel 05',
    'legal.music.body': 'Musik, Bilder, Texte, Audio, Artwork, Video und andere Medien werden zur werblichen Sichtbarkeit, Information und genehmigten Künstlerpräsentation gezeigt. Die Rechte verbleiben bei den jeweiligen Eigentümern. Unerlaubtes Kopieren, Herunterladen, Wiederverwenden, Ändern, Weiterverbreiten, öffentliches Posten oder kommerzielles Verwerten ist ohne schriftliche Erlaubnis des zuständigen Rechteinhabers untersagt.',
    'legal.websiteUse.body': 'Besucher dürfen die Website für persönliche, informative und werbliche Entdeckungszwecke ansehen. Die Nutzung der Website darf den Betrieb nicht stören, die Beziehung einer Partei nicht falsch darstellen und keine Unterstützung, Vertretung oder Erlaubnis suggerieren, die nicht separat schriftlich erteilt wurde.',
    'legal.takedown.body': 'Anfragen zu Korrektur, Entfernung, Rechtefragen, Medienfragen oder Eigentumsklärung sollten über den Kontaktbereich der Website gesendet werden. Bitte geben Sie genügend Details an, um das konkrete Material und die Art der Anfrage prüfen zu können.',
    'offline.kicker': 'Ohne Verbindung'
  },
  ar: {
    'legal.music.body': 'تُعرض الموسيقى والصور والنصوص والصوت والأعمال الفنية والفيديو والوسائط الأخرى لأغراض الظهور الترويجي والسياق المعلوماتي والعرض المعتمد للفنانة. تبقى الحقوق لأصحابها المعنيين. يُحظر النسخ أو التنزيل أو إعادة الاستخدام أو التعديل أو إعادة التوزيع أو النشر العام أو الاستغلال التجاري من دون إذن مكتوب من صاحب الحق المناسب.',
    'legal.websiteUse.body': 'يجوز للزوار مشاهدة الموقع لأغراض شخصية ومعلوماتية وترويجية. يجب ألا يعرقل استخدام الموقع تشغيله، أو يسيء تمثيل علاقة أي طرف، أو يوحي بتأييد أو تمثيل أو إذن لم يُمنح بشكل كتابي منفصل.',
    'legal.takedown.body': 'تُرسل طلبات التصحيح أو الإزالة أو مسائل الحقوق أو الأسئلة الإعلامية أو توضيح الملكية عبر قسم التواصل في الموقع. يُرجى تضمين تفاصيل كافية لتحديد المادة المعنية وطبيعة الطلب حتى يمكن مراجعته بشكل مناسب.',
    'reflection.hidden.quote': 'قد يشكّل الألم القصة، لكنه لا يملك نهايتها.',
    'reflection.hidden.prompt': 'أين تحتاج إلى لغة ألطف لشيء نجوت منه؟',
    'reflection.red.excerpt': 'ملاحظة مستوحاة من الكتاب حول تمييز التلاعب العاطفي والخطر الروحي والتعلقات غير الصحية والأنماط التي تستنزف الصفاء والثقة والغاية بهدوء.',
    'reflection.red.quote': 'ما يكلّفك سلامك يطلب منك تمييزًا.',
    'reflection.red.prompt': 'أي نمط يطلب منك اختيار الوضوح مبكرًا؟',
    'reflection.sunshine.quote': 'الرجاء لا ينكر العاصفة؛ بل يبقي مصباحًا مضاءً خلالها.',
    'reflection.sunshine.prompt': 'أي نور صغير يمكنك حمله إلى هذا الأسبوع؟',
    'reflection.storm.excerpt': 'تأمل يركّز على الاستعادة للقراء الذين يعيدون بناء السلام بعد المشقة، ويكرّم القوة غير المرئية التي تأتي بعد النجاة.',
    'reflection.storm.quote': 'غالبًا ما يبدأ الشفاء كقرار خاص بأن نتنفس من جديد.',
    'reflection.storm.prompt': 'كيف ستبدو الاستعادة إذا لم تكن بحاجة إلى استعجال؟',
    'reflection.kindness.quote': 'يمكن للّطف أن يبقى قويًا بما يكفي ليغيّر جوّ المكان.',
    'reflection.kindness.prompt': 'أين يمكن أن يصبح اللطف حدًا صحيًا لا عبئًا؟',
    'reflection.consolation.excerpt': 'تأمل مستوحى من الموسيقى حول تلقي التعزية بلا خجل، خاصة عندما يبدو الشفاء بطيئًا أو خاصًا أو غير مكتمل.',
    'reflection.consolation.quote': 'تمنح التعزية الشجاعة مكانًا آمنًا لتبدأ من جديد.',
    'reflection.consolation.prompt': 'أي شكل من التعزية يساعدك على الاستمرار اليوم؟',
    'reflection.advocacy.excerpt': 'ملاحظة هادئة حول التحدث من أجل الناجين من دون تحويل الألم إلى مشهد، واختيار الكرامة والأمان والإيمان والاستعادة مركزًا لكل حديث.',
    'reflection.advocacy.quote': 'يمكن للحقيقة أن تكون ثابتة من دون أن تفقد رقتها.',
    'reflection.advocacy.prompt': 'أين يمكن لصوتك أن يحمي الكرامة هذا الأسبوع؟'
  },
  'zh-CN': {
    'legal.music.body': '音乐、图片、文字、音频、艺术作品、视频和其他媒体用于推广展示、信息说明和经批准的艺术家呈现。权利归各自所有者所有。未经相应权利人书面许可，禁止复制、下载、再使用、修改、再分发、公开发布或商业利用。',
    'legal.websiteUse.body': '访问者可以出于个人、信息了解和推广发现目的浏览本网站。网站使用不得干扰网站运行、误述任何一方关系，或暗示未经另行书面授予的背书、代表关系或许可。',
    'legal.takedown.body': '更正、删除、权利问题、媒体问题或所有权澄清请求应通过网站联系部分发送。请提供足够细节，以便识别具体材料和请求性质并进行适当审核。',
    'reflection.hidden.quote': '痛苦也许会塑造故事，但它不能拥有结局。',
    'reflection.hidden.prompt': '关于你曾经熬过的事，哪里需要更温柔的语言？',
    'reflection.red.excerpt': '一篇受书籍启发的短文，关于识别情感操控、属灵危险、不健康依附，以及悄悄耗尽清晰、自信和目标感的模式。',
    'reflection.red.quote': '凡是夺走你平安的，都在提醒你需要分辨。',
    'reflection.red.prompt': '哪一种模式一直在提醒你更早选择清晰？',
    'reflection.sunshine.quote': '盼望并不否认风暴；它是在风暴中点亮一盏灯。',
    'reflection.sunshine.prompt': '这一周你可以带着哪一点小光前行？',
    'reflection.storm.excerpt': '一篇以恢复为中心的默想，献给在艰难之后重建平安的读者，尊重幸存之后那份未被看见的力量。',
    'reflection.storm.quote': '疗愈常常始于一个私密的决定：重新呼吸。',
    'reflection.storm.prompt': '如果恢复不必被催促，它会是什么样子？',
    'reflection.kindness.quote': '温柔依然可以强大到改变一个空间。',
    'reflection.kindness.prompt': '哪里可以让善意成为边界，而不是负担？',
    'reflection.consolation.excerpt': '一篇受音乐启发的反思，关于不带羞耻地接受安慰，尤其当疗愈缓慢、私密或尚未完成时。',
    'reflection.consolation.quote': '安慰给勇气一个安全的地方重新开始。',
    'reflection.consolation.prompt': '今天哪一种安慰能帮助你继续前行？',
    'reflection.advocacy.excerpt': '一篇安静的短文，关于为幸存者发声而不把痛苦变成表演，并把尊严、安全、信仰和恢复置于每一次对话中心。',
    'reflection.advocacy.quote': '真相可以坚定，同时不失温柔。',
    'reflection.advocacy.prompt': '这一周，你的声音可以在哪里守护尊严？'
  }
};

Object.entries(finalTranslationCoverageOverrides).forEach(([language, dictionary]) => {
  if (translations[language]) Object.assign(translations[language], dictionary);
});

const audioConsoleTranslations = {
  en: { 'console.label': 'Carine Sanadina luxury audio console', 'console.ready': 'Ready', 'console.playing': 'Playing', 'console.paused': 'Paused', 'console.previous': 'Previous track', 'console.closePlaylist': 'Close playlist', 'console.collection': 'Listening collection', 'console.selectSynopsis': 'Select a song to begin a healing-centered listening experience.' },
  fr: { 'console.label': 'Console audio de luxe Carine Sanadina', 'console.ready': 'Prêt', 'console.playing': 'Lecture', 'console.paused': 'En pause', 'console.previous': 'Titre précédent', 'console.closePlaylist': 'Fermer la playlist', 'console.collection': 'Collection d’écoute', 'console.selectSynopsis': 'Choisissez une chanson pour commencer une écoute centrée sur la guérison.' },
  es: { 'console.label': 'Consola de audio de lujo Carine Sanadina', 'console.ready': 'Lista', 'console.playing': 'Reproduciendo', 'console.paused': 'En pausa', 'console.previous': 'Canción anterior', 'console.closePlaylist': 'Cerrar lista', 'console.collection': 'Colección para escuchar', 'console.selectSynopsis': 'Elige una canción para comenzar una experiencia de escucha centrada en la sanación.' },
  ln: { 'console.label': 'Console audio ya kitoko ya Carine Sanadina', 'console.ready': 'Ebongami', 'console.playing': 'Ezali kobeta', 'console.paused': 'Epemi', 'console.previous': 'Loyembo eleki', 'console.closePlaylist': 'Kanga playlist', 'console.collection': 'Lisanga ya koyoka', 'console.selectSynopsis': 'Pona loyembo mpo na kobanda koyoka na motema ya kobika.' },
  sw: { 'console.label': 'Dashibodi ya sauti ya kifahari ya Carine Sanadina', 'console.ready': 'Tayari', 'console.playing': 'Inacheza', 'console.paused': 'Imesitishwa', 'console.previous': 'Wimbo uliopita', 'console.closePlaylist': 'Funga orodha', 'console.collection': 'Mkusanyiko wa kusikiliza', 'console.selectSynopsis': 'Chagua wimbo kuanza uzoefu wa kusikiliza unaolenga uponyaji.' },
  yo: { 'console.label': 'Ẹrọ orin adùn Carine Sanadina', 'console.ready': 'Ṣetán', 'console.playing': 'Ó ń dun', 'console.paused': 'Ó dúró', 'console.previous': 'Orin tó ṣáájú', 'console.closePlaylist': 'Pa àkójọ orin', 'console.collection': 'Àkójọ ìgbọ́ran', 'console.selectSynopsis': 'Yan orin kan láti bẹ̀rẹ̀ ìrírí ìgbọ́ran tó dojú kọ ìwòsàn.' },
  de: { 'console.label': 'Luxus-Audiokonsole von Carine Sanadina', 'console.ready': 'Bereit', 'console.playing': 'Wiedergabe', 'console.paused': 'Pausiert', 'console.previous': 'Vorheriger Titel', 'console.closePlaylist': 'Wiedergabeliste schließen', 'console.collection': 'Hörsammlung', 'console.selectSynopsis': 'Wählen Sie einen Song für ein heilsames Hörerlebnis.' },
  ar: { 'console.label': 'وحدة الصوت الفاخرة لكارين سانادينا', 'console.ready': 'جاهز', 'console.playing': 'قيد التشغيل', 'console.paused': 'متوقف مؤقتًا', 'console.previous': 'المقطع السابق', 'console.closePlaylist': 'إغلاق قائمة التشغيل', 'console.collection': 'مجموعة الاستماع', 'console.selectSynopsis': 'اختر أغنية لبدء تجربة استماع تتمحور حول التعافي.' },
  'zh-CN': { 'console.label': 'Carine Sanadina 豪华音频控制台', 'console.ready': '就绪', 'console.playing': '播放中', 'console.paused': '已暂停', 'console.previous': '上一首', 'console.closePlaylist': '关闭播放列表', 'console.collection': '聆听精选', 'console.selectSynopsis': '选择一首歌曲，开启以疗愈为中心的聆听体验。' }
};

Object.entries(audioConsoleTranslations).forEach(([language, dictionary]) => {
  if (translations[language]) Object.assign(translations[language], dictionary);
});

const halleluyahTranslations = {
  en: {
    'tracks.halleluyah.title': 'Halleluyah',
    'tracks.halleluyah.audioLabel': 'Halleluyah by Carine Sanadina',
    'tracks.halleluyah.coverAlt': 'Halleluyah cover art',
    'tracks.halleluyah.fallback': 'Halleluyah cover art is temporarily unavailable.',
    'tracks.halleluyah.number': 'Track 07',
    'tracks.halleluyah.description': 'A Lingala worship anthem celebrating God’s glory, majesty, and eternal praise through heartfelt adoration.',
    'tracks.halleluyah.about': 'Halleluyah is a faith-filled Lingala worship song that exalts God through praise, gratitude, and reverence. Drawing inspiration from heavenly worship and the language of adoration, the song invites listeners into an atmosphere of spiritual reflection, joy, and devotion.',
    'halleluyahSynopsis': 'A Lingala worship anthem celebrating God’s glory, majesty, and eternal praise through heartfelt adoration.',
    'tracks.halleluyah.credits': 'Artist: Carine Sanadina\nLanguage: Lingala\nProduced by Omoluabi Productions\nPresented by Omoluabi Productions',
    'tracks.halleluyah.playLabel': 'Play Halleluyah',
    'tracks.halleluyah.lyricsFallback': 'Synced lyrics coming soon.'
  },
  fr: {
    'tracks.halleluyah.description': 'Un hymne d’adoration en lingala célébrant la gloire, la majesté et la louange éternelle de Dieu avec une adoration sincère.',
    'tracks.halleluyah.about': 'Halleluyah est un chant d’adoration en lingala, rempli de foi, qui exalte Dieu par la louange, la gratitude et la révérence. Inspiré par l’adoration céleste et le langage de l’adoration, ce chant invite à une atmosphère de réflexion spirituelle, de joie et de dévotion.',
    'halleluyahSynopsis': 'Un hymne d’adoration en lingala célébrant la gloire, la majesté et la louange éternelle de Dieu avec une adoration sincère.',
    'tracks.halleluyah.credits': 'Artiste : Carine Sanadina\nLangue : lingala\nProduit par Omoluabi Productions\nPrésenté par Omoluabi Productions',
    'tracks.halleluyah.lyricsFallback': 'Paroles synchronisées bientôt disponibles.'
  },
  es: {
    'tracks.halleluyah.description': 'Un himno de adoración en lingala que celebra la gloria, la majestad y la alabanza eterna de Dios con sincera devoción.',
    'tracks.halleluyah.about': 'Halleluyah es una canción de adoración en lingala llena de fe que exalta a Dios mediante la alabanza, la gratitud y la reverencia. Inspirada en la adoración celestial, invita a una atmósfera de reflexión espiritual, alegría y devoción.',
    'halleluyahSynopsis': 'Un himno de adoración en lingala que celebra la gloria, la majestad y la alabanza eterna de Dios con sincera devoción.',
    'tracks.halleluyah.credits': 'Artista: Carine Sanadina\nIdioma: lingala\nProducido por Omoluabi Productions\nPresentado por Omoluabi Productions'
  },
  ln: {
    'tracks.halleluyah.description': 'Loyembo ya losambo na Lingala oyo ekumisaka nkembo, bonene mpe masanzoli ya seko ya Nzambe na motema mobimba.',
    'tracks.halleluyah.about': 'Halleluyah ezali loyembo ya losambo na Lingala, etondi na kondima, oyo ekumisaka Nzambe na masanzoli, botondi mpe limemya. Ezwaka molimo na losambo ya lola mpe ebengisaka bayoki na esika ya kokanisa makambo ya molimo, esengo mpe komipesa.',
    'halleluyahSynopsis': 'Loyembo ya losambo na Lingala oyo ekumisaka nkembo, bonene mpe masanzoli ya seko ya Nzambe na motema mobimba.',
    'tracks.halleluyah.credits': 'Moyembi: Carine Sanadina\nMonɔkɔ: Lingala\nEbisami na Omoluabi Productions\nElakisami na Omoluabi Productions',
    'tracks.halleluyah.lyricsFallback': 'Maloba ya loyembo ekoya kala mingi te.'
  },
  sw: {
    'tracks.halleluyah.description': 'Wimbo wa ibada wa Lingala unaosherehekea utukufu, ukuu na sifa za milele za Mungu kwa kuabudu kwa moyo wote.',
    'tracks.halleluyah.about': 'Halleluyah ni wimbo wa ibada wa Lingala uliojaa imani unaomtukuza Mungu kwa sifa, shukrani na heshima. Ukivutiwa na ibada ya mbinguni, unawaalika wasikilizaji katika mazingira ya tafakari ya kiroho, furaha na kujitoa.',
    'halleluyahSynopsis': 'Wimbo wa ibada wa Lingala unaosherehekea utukufu, ukuu na sifa za milele za Mungu kwa kuabudu kwa moyo wote.',
    'tracks.halleluyah.credits': 'Msanii: Carine Sanadina\nLugha: Lingala\nImetayarishwa na Omoluabi Productions\nImewasilishwa na Omoluabi Productions'
  },
  yo: {
    'tracks.halleluyah.description': 'Orin ìjọsìn Lingala tó ń ṣe ayẹyẹ ògo, ọlá ńlá àti ìyìn ayérayé Ọlọ́run pẹ̀lú ìfẹ́kúfẹ̀ẹ́ ọkàn.',
    'tracks.halleluyah.about': 'Halleluyah jẹ́ orin ìjọsìn Lingala tó kún fún ìgbàgbọ́, tó ń gbé Ọlọ́run ga nípasẹ̀ ìyìn, ọpẹ́ àti ọ̀wọ̀. Ó ń pe àwọn olùgbọ́ sínú àyíká ìrònú ẹ̀mí, ayọ̀ àti ìfọkànsìn.',
    'halleluyahSynopsis': 'Orin ìjọsìn Lingala tó ń ṣe ayẹyẹ ògo, ọlá ńlá àti ìyìn ayérayé Ọlọ́run pẹ̀lú ìfẹ́kúfẹ̀ẹ́ ọkàn.',
    'tracks.halleluyah.credits': 'Olórin: Carine Sanadina\nÈdè: Lingala\nOmoluabi Productions ló ṣe é\nOmoluabi Productions ló gbé e kalẹ̀'
  },
  de: {
    'tracks.halleluyah.description': 'Eine Lingala-Hymne, die Gottes Herrlichkeit, Majestät und ewigen Lobpreis in inniger Anbetung feiert.',
    'tracks.halleluyah.about': 'Halleluyah ist ein glaubensvoller Lingala-Worshipsong, der Gott durch Lobpreis, Dankbarkeit und Ehrfurcht erhöht. Inspiriert von himmlischer Anbetung lädt das Lied zu geistlicher Besinnung, Freude und Hingabe ein.',
    'halleluyahSynopsis': 'Eine Lingala-Hymne, die Gottes Herrlichkeit, Majestät und ewigen Lobpreis in inniger Anbetung feiert.',
    'tracks.halleluyah.credits': 'Künstlerin: Carine Sanadina\nSprache: Lingala\nProduziert von Omoluabi Productions\nPräsentiert von Omoluabi Productions'
  },
  ar: {
    'tracks.halleluyah.description': 'ترنيمة عبادة بلغة اللينغالا تحتفي بمجد الله وجلاله وتسبيحه الأبدي من خلال تعبد صادق.',
    'tracks.halleluyah.about': 'Halleluyah ترنيمة عبادة بلغة اللينغالا مفعمة بالإيمان، تمجد الله بالتسبيح والامتنان والتوقير. تستلهم العبادة السماوية وتدعو المستمعين إلى أجواء من التأمل الروحي والفرح والتكريس.',
    'halleluyahSynopsis': 'ترنيمة عبادة بلغة اللينغالا تحتفي بمجد الله وجلاله وتسبيحه الأبدي من خلال تعبد صادق.',
    'tracks.halleluyah.credits': 'الفنانة: Carine Sanadina\nاللغة: Lingala\nإنتاج Omoluabi Productions\nتقديم Omoluabi Productions'
  },
  'zh-CN': {
    'tracks.halleluyah.description': '一首林加拉语敬拜赞歌，以真挚敬拜颂扬上帝的荣耀、威严与永恒赞美。',
    'tracks.halleluyah.about': 'Halleluyah 是一首充满信心的林加拉语敬拜歌曲，以赞美、感恩和敬畏尊崇上帝。歌曲从天上的敬拜汲取灵感，邀请听众进入属灵反思、喜乐与委身的氛围。',
    'halleluyahSynopsis': '一首林加拉语敬拜赞歌，以真挚敬拜颂扬上帝的荣耀、威严与永恒赞美。',
    'tracks.halleluyah.credits': '艺人：Carine Sanadina\n语言：Lingala\n制作：Omoluabi Productions\n呈现：Omoluabi Productions'
  }
};

Object.entries(halleluyahTranslations).forEach(([language, dictionary]) => {
  if (translations[language]) Object.assign(translations[language], dictionary);
});

const supportedLanguages = Object.keys(translations);
let currentLanguage = DEFAULT_LANGUAGE;

const isDevelopmentHost = () => ['localhost', '127.0.0.1', ''].includes(window.location.hostname);

window.__CARINE_PLAYLIST_VERSION__ = PLAYLIST_VERSION;

if (isDevelopmentHost() && window.console && typeof window.console.info === 'function') {
  window.console.info(`Playlist version loaded: ${PLAYLIST_VERSION}`);
}

const t = (key, fallback = '', language = currentLanguage) => {
  const languageDictionary = translations[language] || translations[DEFAULT_LANGUAGE] || {};
  const defaultDictionary = translations[DEFAULT_LANGUAGE] || {};
  const translatedValue = languageDictionary[key] ?? defaultDictionary[key] ?? fallback;

  if (translatedValue !== undefined && translatedValue !== null && translatedValue !== '') {
    return String(translatedValue);
  }

  if (isDevelopmentHost() && window.console && typeof window.console.warn === 'function') {
    window.console.warn(`[i18n] Missing translation key: ${key}`);
  }

  return String(fallback || key);
};

const translate = (key, language = currentLanguage) => t(key, key, language);

const translateTemplate = (key, replacements = {}, language = currentLanguage) => (
  translate(key, language).replace(/\{(\w+)\}/g, (match, token) => replacements[token] || match)
);

const getLanguageLabel = (language) => t(`language.name.${language}`, t(`language.name.${DEFAULT_LANGUAGE}`, 'English', DEFAULT_LANGUAGE), DEFAULT_LANGUAGE);

const getStoredLanguage = () => {
  try {
    return window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  } catch (error) {
    return null;
  }
};

const storeLanguage = (language) => {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch (error) {
    // localStorage can be unavailable in private or restricted browsing contexts.
  }
};

const normalizeLanguage = (language) => {
  const normalizedLanguage = language === 'zh' ? 'zh-CN' : language;
  return supportedLanguages.includes(normalizedLanguage) ? normalizedLanguage : DEFAULT_LANGUAGE;
};

const TRANSLATION_AUDIT_ALLOWED_TEXT = [
  'Carine Sanadina',
  'Omoluabi Productions',
  'ETL GIS Consulting LLC',
  'The Pain Nobody Saw',
  'If It’s Red, It’s Toxic',
  'The Road to Sunshine',
  'After The Storm',
  'Consolation',
  'La Gentillesse',
  'Wonderful',
  'Womanifesto',
  'Paranoïa Persécutive',
  'Halleluyah'
];

const isAllowedTranslationAuditText = (value = '') => TRANSLATION_AUDIT_ALLOWED_TEXT.some((allowedText) => value.includes(allowedText));

const listMissingTranslations = () => {
  const englishKeys = Object.keys(translations[DEFAULT_LANGUAGE] || {}).sort();
  const report = supportedLanguages.reduce((summary, language) => {
    if (language === DEFAULT_LANGUAGE) return summary;
    const dictionary = translations[language] || {};
    const missing = englishKeys.filter((key) => !(key in dictionary));
    const englishFallbacks = englishKeys.filter((key) => (
      dictionary[key] === translations[DEFAULT_LANGUAGE][key]
      && !isAllowedTranslationAuditText(String(dictionary[key] || ''))
      && key !== 'html.lang'
      && !key.startsWith('language.name.')
    ));

    summary[language] = { missing, englishFallbacks };
    return summary;
  }, {});

  window.console?.groupCollapsed?.('[i18n] Missing translation audit');
  window.console?.table?.(Object.entries(report).map(([language, result]) => ({
    language,
    missing: result.missing.length,
    englishFallbacks: result.englishFallbacks.length
  })));
  window.console?.info?.(report);
  window.console?.groupEnd?.();
  return report;
};

const auditTranslations = () => {
  const missing = listMissingTranslations();
  const visibleText = Array.from(document.body?.querySelectorAll('*') || [])
    .filter((element) => {
      const tagName = element.tagName?.toLowerCase();
      if (['script', 'style', 'template', 'svg', 'path'].includes(tagName)) return false;
      if (element.closest('[hidden], [aria-hidden="true"]')) return false;
      return Boolean(element.childNodes?.length);
    })
    .flatMap((element) => Array.from(element.childNodes)
      .filter((node) => node.nodeType === Node.TEXT_NODE)
      .map((node) => ({ element, text: node.textContent.trim().replace(/\s+/g, ' ') }))
      .filter(({ text }) => text && !isAllowedTranslationAuditText(text))
      .filter(({ element }) => !element.closest('[data-i18n], [data-i18n-html]'))
    );

  const untranslatedEnglish = currentLanguage === DEFAULT_LANGUAGE ? [] : Array.from(document.querySelectorAll('[data-i18n], [data-i18n-placeholder], [data-i18n-aria-label], [data-i18n-title], [data-i18n-alt]'))
    .map((element) => {
      const keys = [element.dataset.i18n, element.dataset.i18nPlaceholder, element.dataset.i18nAriaLabel, element.dataset.i18nTitle, element.dataset.i18nAlt].filter(Boolean);
      return keys.map((key) => ({ key, value: translations[currentLanguage]?.[key], english: translations[DEFAULT_LANGUAGE]?.[key] }));
    })
    .flat()
    .filter(({ value, english }) => value && english && value === english && !isAllowedTranslationAuditText(String(value)));

  const report = {
    language: currentLanguage,
    missing,
    hardcodedVisibleText: visibleText.map(({ element, text }) => ({
      text,
      selector: element.id ? `#${element.id}` : element.className ? `${element.tagName.toLowerCase()}.${String(element.className).trim().replace(/\s+/g, '.')}` : element.tagName.toLowerCase()
    })),
    untranslatedEnglish
  };

  window.console?.groupCollapsed?.('[i18n] Translation coverage audit');
  window.console?.info?.(report);
  window.console?.groupEnd?.();
  return report;
};

window.listMissingTranslations = listMissingTranslations;
window.auditTranslations = auditTranslations;

const applyTranslations = (language) => {
  const nextLanguage = normalizeLanguage(language);
  currentLanguage = nextLanguage;
  document.documentElement.lang = t('html.lang', nextLanguage, nextLanguage);
  document.documentElement.dir = nextLanguage === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.classList.toggle('is-rtl', nextLanguage === 'ar');

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    if (element.matches('[data-mini-title][data-has-track="true"], [data-mobile-title][data-has-track="true"]')) {
      return;
    }

    element.textContent = t(element.dataset.i18n, element.textContent, nextLanguage);
  });

  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    element.innerHTML = t(element.dataset.i18nHtml, element.innerHTML, nextLanguage);
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((element) => {
    element.dataset.i18nAttr.split(';').forEach((pair) => {
      const [attribute, key] = pair.split(':');

      if (attribute && key) {
        element.setAttribute(attribute.trim(), t(key.trim(), element.getAttribute(attribute.trim()) || '', nextLanguage));
      }
    });
  });

  [
    ['i18nPlaceholder', 'placeholder'],
    ['i18nAriaLabel', 'aria-label'],
    ['i18nTitle', 'title'],
    ['i18nAlt', 'alt']
  ].forEach(([datasetKey, attribute]) => {
    document.querySelectorAll(`[data-${datasetKey.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}]`).forEach((element) => {
      element.setAttribute(attribute, t(element.dataset[datasetKey], element.getAttribute(attribute) || '', nextLanguage));
    });
  });

  document.querySelectorAll('[data-language-option]').forEach((button) => {
    const optionLanguage = button.dataset.languageOption;
    const isActive = optionLanguage === nextLanguage;
    const optionLabel = getLanguageLabel(optionLanguage) || getLanguageLabel(DEFAULT_LANGUAGE);

    button.textContent = optionLabel;
    button.setAttribute('aria-label', optionLabel);
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-checked', String(isActive));
    button.setAttribute('aria-pressed', String(isActive));
  });

  document.querySelectorAll('[data-language-current]').forEach((element) => {
    element.textContent = getLanguageLabel(nextLanguage) || getLanguageLabel(DEFAULT_LANGUAGE);
  });

  document.querySelectorAll('[data-language-trigger]').forEach((trigger) => {
    const activeLabel = getLanguageLabel(nextLanguage) || getLanguageLabel(DEFAULT_LANGUAGE);
    trigger.setAttribute('aria-label', `${t('language.selectorLabel', 'Choose website language', nextLanguage)}: ${activeLabel}`);
  });

  return nextLanguage;
};

const renderLocalizedContent = (language) => {
  const nextLanguage = normalizeLanguage(language);
  currentLanguage = nextLanguage;
  window.dispatchEvent(new CustomEvent('carine:languagechange', { detail: { language: nextLanguage } }));
};

const applyLanguage = (language) => {
  const nextLanguage = normalizeLanguage(language);
  storeLanguage(nextLanguage);
  applyTranslations(nextLanguage);
  renderLocalizedContent(nextLanguage);
};

const languageSwitchers = document.querySelectorAll('.language-switcher');
const languageButtons = document.querySelectorAll('[data-language-option]');

const setLanguageMenuOpen = (switcher, isOpen) => {
  const trigger = switcher.querySelector('[data-language-trigger]');
  const menu = switcher.querySelector('[data-language-menu]');

  if (!trigger || !menu) {
    return;
  }

  window.clearTimeout(Number(menu.dataset.closeTimer || 0));
  trigger.setAttribute('aria-expanded', String(isOpen));

  if (isOpen) {
    menu.hidden = false;
    window.requestAnimationFrame(() => switcher.classList.add('is-open'));
    return;
  }

  switcher.classList.remove('is-open');
  menu.dataset.closeTimer = String(window.setTimeout(() => {
    if (!switcher.classList.contains('is-open')) {
      menu.hidden = true;
    }
  }, 180));
};

const closeLanguageMenus = () => {
  languageSwitchers.forEach((switcher) => setLanguageMenuOpen(switcher, false));
};

const focusLanguageOption = (currentButton, direction) => {
  const menu = currentButton.closest('[data-language-menu]');
  const options = [...(menu?.querySelectorAll('[data-language-option]') || [])];
  const currentIndex = options.indexOf(currentButton);

  if (currentIndex === -1) {
    return;
  }

  const nextIndex = (currentIndex + direction + options.length) % options.length;
  options[nextIndex].focus();
};

languageSwitchers.forEach((switcher) => {
  const trigger = switcher.querySelector('[data-language-trigger]');
  const menu = switcher.querySelector('[data-language-menu]');

  if (!trigger || !menu) {
    return;
  }

  trigger.addEventListener('click', () => {
    const isOpen = trigger.getAttribute('aria-expanded') === 'true';
    setLanguageMenuOpen(switcher, !isOpen);
  });

  trigger.addEventListener('keydown', (event) => {
    if (!['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(event.key)) {
      return;
    }

    event.preventDefault();
    setLanguageMenuOpen(switcher, true);
    const activeOption = menu.querySelector('.language-option.is-active') || menu.querySelector('[data-language-option]');
    activeOption?.focus();
  });
});

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    applyLanguage(button.dataset.languageOption);
    closeLanguageMenus();
    button.closest('.language-switcher')?.querySelector('[data-language-trigger]')?.focus();
  });

  button.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault();
      focusLanguageOption(button, 1);
    }

    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault();
      focusLanguageOption(button, -1);
    }

    if (event.key === 'Home') {
      event.preventDefault();
      button.closest('[data-language-menu]')?.querySelector('[data-language-option]')?.focus();
    }

    if (event.key === 'End') {
      event.preventDefault();
      const options = button.closest('[data-language-menu]')?.querySelectorAll('[data-language-option]');
      options?.[options.length - 1]?.focus();
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      closeLanguageMenus();
      button.closest('.language-switcher')?.querySelector('[data-language-trigger]')?.focus();
    }
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.language-switcher')) {
    closeLanguageMenus();
  }
});

const UNKNOWN_DURATION_LABEL = '–:–';

const formatTrackDuration = (seconds, fallbackLabel = UNKNOWN_DURATION_LABEL) => {
  if (!Number.isFinite(seconds) || seconds <= 0) {
    return fallbackLabel;
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${remainingSeconds}`;
};

const escapePlaylistText = (value = '') => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;');

const escapePlaylistAttribute = (value = '') => escapePlaylistText(value)
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');

const REQUIRED_MUSIC_TRACK_IDS = ['consolation', 'gentillesse', 'wonderful', 'womanifesto', 'paranoia-persecutive', 'reason', 'halleluyah'];
const PLAYLIST_STORAGE_KEYS = [PLAYER_STATE_STORAGE_KEY];
const CACHE_SENSITIVE_STORAGE_KEYS = [
  ...PLAYLIST_STORAGE_KEYS,
  'carine-sanadina-app-shell-cache',
  'carine-sanadina-playlist-cache',
  'carine-sanadina-guide-state'
];

const clearVersionedPlaylistState = () => {
  try {
    PLAYLIST_STORAGE_KEYS.forEach((key) => window.localStorage.removeItem(key));
  } catch (error) {
    // Storage can be unavailable in restricted browsing contexts.
  }
};

const refreshCacheSensitiveStateForAppVersion = () => {
  try {
    const storedVersion = window.localStorage.getItem(APP_VERSION_STORAGE_KEY);

    if (storedVersion === APP_VERSION) {
      return;
    }

    CACHE_SENSITIVE_STORAGE_KEYS.forEach((key) => window.localStorage.removeItem(key));
    window.localStorage.setItem(APP_VERSION_STORAGE_KEY, APP_VERSION);
  } catch (error) {
    // Storage can be unavailable in restricted browsing contexts.
  }
};

refreshCacheSensitiveStateForAppVersion();

const CARINE_MUSIC_PLAYLIST = [
  {
    id: 'consolation',
    title: 'Consolation',
    artist: 'Carine Sanadina',
    coverUrl: 'https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/Consolation%20Cover.png',
    audioUrl: 'https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/Consolation.mp3',
    mood: 'Healing comfort',
    description: 'Healing-centered comfort and hope',
    duration: 242.712,
    lyrics: '/lyrics/consolation.txt',
    lyricsLrc: '/lyrics/consolation.lrc',
    sunoSource: 'https://suno.com/s/BaimWhdIhaQBX547',
    about: 'A tender song of comfort, reassurance, faith, and emotional restoration for hearts that need courage after hardship.',
    credits: 'Performed by Carine Sanadina. Music and lyrics rights remain with their respective owners.',
    lyricsTimed: [],
    translationKey: 'tracks.consolation',
    synopsisKey: 'consolationSynopsis'
  },
  {
    id: 'gentillesse',
    title: 'La Gentillesse',
    artist: 'Carine Sanadina',
    coverUrl: 'https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/La%20Gentillesse.png',
    audioUrl: 'https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/La%20Gentillesse.mp3',
    mood: 'Faith-filled kindness',
    description: 'Faith-filled kindness anthem',
    duration: 218.064,
    lyrics: '/lyrics/la-gentillesse.txt',
    lyricsLrc: '/lyrics/la-gentillesse.lrc',
    sunoSource: 'https://suno.com/s/ujHS0FT3b8BGh3u1',
    about: 'A faith-filled meditation on kindness as strength: compassion that protects dignity, restores atmosphere, and makes room for grace.',
    credits: 'Written by Paul Iyogun (Omoluabi).\nProduced by Paul Iyogun (Omoluabi).\nMastered by Paul Iyogun (Omoluabi).\nPerformed by Carine Sanadina.\nPresented by Omoluabi Productions.',
    lyricsTimed: [],
    translationKey: 'tracks.gentillesse',
    synopsisKey: 'laGentillesseSynopsis'
  },
  {
    id: 'wonderful',
    title: 'Wonderful',
    artist: 'Carine Sanadina',
    coverUrl: 'https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/Wonderful%20cover.png',
    audioUrl: 'https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/Wonderful.mp3',
    mood: 'Joyful gratitude',
    description: 'Joyful praise and gratitude',
    duration: 230.28,
    lyrics: '/lyrics/wonderful.txt',
    lyricsLrc: '/lyrics/wonderful.lrc',
    sunoSource: 'https://suno.com/s/edxhIW1RKBDaVy5X',
    about: 'A praise-filled expression of gratitude, joy, and wonder at God’s goodness through every season.',
    credits: 'Performed by Carine Sanadina. Music and lyrics rights remain with their respective owners.',
    lyricsTimed: [],
    translationKey: 'tracks.wonderful',
    synopsisKey: 'wonderfulSynopsis'
  },
  {
    id: 'womanifesto',
    title: 'Womanifesto',
    artist: 'Carine Sanadina',
    genre: 'Soukous • Rumba • Makossa Gospel',
    mood: 'Restoration • Feminine Strength • Grace • Healing',
    shortDescription: 'A soulful African gospel anthem celebrating feminine resilience, healing, grace, and victory through faith.',
    description: 'A soulful African gospel anthem celebrating feminine resilience, healing, grace, and victory through faith.',
    coverUrl: 'https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/4B4AE259-EC5A-46A2-BB9A-355667A3C23C.png',
    audioUrl: 'https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/Womanifesto%20(1).mp3',
    artworkFit: 'contain',
    lyrics: '/lyrics/womanifesto.txt',
    lyricsLrc: '/lyrics/womanifesto.lrc',
    sunoSource: 'https://suno.com/s/xitTjO4yEApxiSv5',
    about: 'A soulful African gospel anthem celebrating feminine resilience, healing, grace, victory, identity, and restoration through faith.',
    credits: 'Written by Paul Iyogun (Omoluabi).\nProduced by Paul Iyogun (Omoluabi).\nMastered by Paul Iyogun (Omoluabi).\nPerformed by Carine Sanadina.\nPresented by Omoluabi Productions.',
    lyricsTimed: [],
    translationKey: 'tracks.womanifesto',
    synopsisKey: 'womanifestoSynopsis'
  },
  {
    id: 'paranoia-persecutive',
    title: 'Paranoïa Persécutive',
    artist: 'Carine Sanadina',
    mood: 'Dark intuition • Protection • Street vigilance • Spiritual discernment',
    shortDescription: 'A cinematic French track exploring intuition, protection, and survival-minded awareness, where vigilance becomes both warning and wisdom.',
    description: 'A cinematic French track exploring intuition, protection, and survival-minded awareness, where vigilance becomes both warning and wisdom.',
    coverUrl: 'https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/00243680-B36E-4587-8623-9AEFD1896D1A.png',
    audioUrl: 'https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/Paranoi%CC%88a%20Perse%CC%81cutive.mp3',
    artworkFit: 'contain',
    lyrics: '/lyrics/paranoia-persecutive.txt',
    // TODO: Convert Paranoïa Persécutive lyrics to timed LRC for sing-along sync.
    // Future timed lyrics path: /lyrics/paranoia-persecutive.lrc
    lyricsLrc: '',
    about: 'A cinematic French track exploring intuition, protection, and survival-minded awareness, where vigilance becomes both warning and wisdom.',
    credits: 'Performed by Carine Sanadina. Music and lyrics rights remain with their respective owners.',
    lyricsTimed: [],
    translationKey: 'tracks.paranoia',
    synopsisKey: 'paranoiaPersecutiveSynopsis'
  },
  {
    id: 'reason',
    title: 'Reason',
    artist: 'Carine Sanadina',
    mood: 'Purpose • Hustle • Gratitude • Celebration',
    shortDescription: 'A joyful Afropop celebration of purpose, hustle, and the reason behind every season of growth.',
    description: 'A joyful Afropop celebration of purpose, hustle, and the reason behind every season of growth.',
    coverUrl: 'https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/D60D546C-83C3-401A-8C56-3B48FD5022E0.png',
    audioUrl: 'https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/Reason.mp3',
    lyrics: '',
    // TODO: Create /lyrics/reason.lrc when timed lyrics are available.
    lyricsLrc: '',
    about: 'Reason captures Carine Sanadina’s vibrant message of purpose, movement, and gratitude. It blends everyday hustle with celebratory energy, reminding listeners that every step, every dance, and every season of growth carries meaning.',
    credits: 'Artist: Carine Sanadina\nProduced by Omoluabi Productions\nPresented by Omoluabi Productions',
    lyricsTimed: [],
    translationKey: 'tracks.reason',
    synopsisKey: 'reasonSynopsis'
  },
  {
    id: 'halleluyah',
    title: 'Halleluyah',
    artist: 'Carine Sanadina',
    language: 'Lingala',
    genre: 'Gospel Worship',
    mood: 'Worship • Praise • Faith • Reverence • Spiritual Upliftment',
    shortDescription: 'A Lingala worship anthem celebrating God’s glory, majesty, and eternal praise through heartfelt adoration.',
    description: 'A Lingala worship anthem celebrating God’s glory, majesty, and eternal praise through heartfelt adoration.',
    coverUrl: 'https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/Halleluyah%20Cover.png',
    audioUrl: 'https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/Hallelujah.mp3',
    lyrics: '',
    // TODO: Add /lyrics/halleluyah.lrc when synchronized lyrics are available.
    lyricsLrc: '',
    lyricsFallbackKey: 'tracks.halleluyah.lyricsFallback',
    about: 'Halleluyah is a faith-filled Lingala worship song that exalts God through praise, gratitude, and reverence. Drawing inspiration from heavenly worship and the language of adoration, the song invites listeners into an atmosphere of spiritual reflection, joy, and devotion.',
    credits: 'Artist: Carine Sanadina\nLanguage: Lingala\nProduced by Omoluabi Productions\nPresented by Omoluabi Productions',
    lyricsTimed: [],
    translationKey: 'tracks.halleluyah',
    synopsisKey: 'halleluyahSynopsis'
  }
];

// Normalize the playlist once so every player surface resolves the same track shape.
CARINE_MUSIC_PLAYLIST.forEach((track) => {
  track.audioSrc = track.audioUrl;
  track.cover = track.coverUrl;
  track.lyricsPath = track.lyricsLrc || '';
  track.staticLyricsPath = track.lyrics || '';
  track.synopsis = track.shortDescription || track.description || track.about || '';
});

const MUSIC_TRACKS_BY_ID = new Map(CARINE_MUSIC_PLAYLIST.map((track) => [track.id, track]));

const assertRequiredPlaylistTracks = () => {
  const playlistIds = CARINE_MUSIC_PLAYLIST.map((track) => track?.id).filter(Boolean);
  const uniquePlaylistIds = new Set(playlistIds);

  return uniquePlaylistIds.size === REQUIRED_MUSIC_TRACK_IDS.length
    && playlistIds.length === REQUIRED_MUSIC_TRACK_IDS.length
    && REQUIRED_MUSIC_TRACK_IDS.every((requiredId) => {
      const track = CARINE_MUSIC_PLAYLIST.find((candidate) => candidate?.id === requiredId);
      return Boolean(track?.title && track?.audioUrl && track?.coverUrl);
    });
};

const getSafePlaylistTracks = () => {
  const tracksById = new Map(CARINE_MUSIC_PLAYLIST
    .filter((track) => track?.id && track?.title && track?.audioUrl && track?.coverUrl)
    .map((track) => [track.id, track]));

  return REQUIRED_MUSIC_TRACK_IDS.map((trackId) => tracksById.get(trackId)).filter(Boolean);
};

const createPlaylistTrackViewModel = (track) => {
  const translationKey = track.translationKey || '';
  const synopsisKey = track.synopsisKey || `${translationKey}.synopsis`;
  const durationValue = Number(track.duration);
  const artworkFit = track.artworkFit === 'contain' ? 'contain' : 'cover';

  return {
    ...track,
    artworkFit,
    durationLabel: formatTrackDuration(durationValue),
    durationValue: Number.isFinite(durationValue) && durationValue > 0 ? String(durationValue) : '',
    synopsisKey,
    synopsis: t(synopsisKey, ''),
    titleId: `track-${track.id}-title`,
    fallbackId: `music-cover-${track.id}-fallback`,
    creditsKey: `${translationKey}.credits`,
    credits: t(`${translationKey}.credits`, translate('tracks.genericCredits')),
    lyricsLrc: track.lyricsLrc || track.lyricsPath || '',
    lyricsTimed: JSON.stringify(Array.isArray(track.lyricsTimed) ? track.lyricsTimed : [])
  };
};

const renderExpandedTrackOption = (track) => {
  const model = createPlaylistTrackViewModel(track);
  const trackKey = escapePlaylistAttribute(model.translationKey);

  return `
        <button
          class="expanded-track-option"
          type="button"
          data-expanded-track-option
          data-track-id="${escapePlaylistAttribute(model.id)}"
          aria-label="Play ${escapePlaylistAttribute(model.title)}"
          data-i18n-aria-label="${trackKey}.playLabel"
        >
          <span class="expanded-track-option__thumb">
            <img
              src="${escapePlaylistAttribute(model.coverUrl)}"
              alt=""
              width="96"
              height="96"
              loading="lazy"
              decoding="async"
              referrerpolicy="no-referrer"
              data-artwork-fit="${model.artworkFit}"
            />
          </span>
          <span class="expanded-track-option__meta">
            <strong data-i18n="${trackKey}.title">${escapePlaylistText(model.title)}</strong>
            <span>${escapePlaylistText(model.artist)}</span>
          </span>
          <span class="expanded-track-option__duration">${model.durationLabel}</span>
          <span class="expanded-track-option__indicator equalizer" aria-hidden="true"><span></span><span></span><span></span><span></span></span>
        </button>
      `;
};

const renderCarinePlaylist = () => {
  const playlistMount = document.querySelector('[data-playlist-tracks]');
  const expandedPlaylistMount = document.querySelector('[data-expanded-playlist-tracks]');
  const expandedFocusPlaylistMount = document.querySelector('[data-expanded-focus-playlist-tracks]');

  if (!playlistMount) {
    return;
  }

  playlistMount.dataset.playlistVersion = PLAYLIST_VERSION;
  if (expandedPlaylistMount) expandedPlaylistMount.dataset.playlistVersion = PLAYLIST_VERSION;
  if (expandedFocusPlaylistMount) expandedFocusPlaylistMount.dataset.playlistVersion = PLAYLIST_VERSION;
  document.documentElement.dataset.playlistVersion = PLAYLIST_VERSION;

  const safePlaylist = getSafePlaylistTracks();

  if (safePlaylist.length !== REQUIRED_MUSIC_TRACK_IDS.length || !assertRequiredPlaylistTracks()) {
    playlistMount.dataset.playlistError = 'missing-required-track';
  } else {
    delete playlistMount.dataset.playlistError;
  }

  playlistMount.innerHTML = safePlaylist.map((track) => {
    const model = createPlaylistTrackViewModel(track);
    const trackKey = escapePlaylistAttribute(model.translationKey);
    const titleId = escapePlaylistAttribute(model.titleId);
    const fallbackId = escapePlaylistAttribute(model.fallbackId);
    const trackTitle = escapePlaylistText(model.title);
    const trackArtist = escapePlaylistText(model.artist);
    const trackDescription = escapePlaylistText(model.description);
    const synopsisKey = escapePlaylistAttribute(model.synopsisKey);
    const trackSynopsis = escapePlaylistText(model.synopsis);
    const trackMood = escapePlaylistAttribute(model.mood);
    const trackId = escapePlaylistAttribute(model.id);
    const coverUrl = escapePlaylistAttribute(model.coverUrl);
    const audioUrl = escapePlaylistAttribute(model.audioUrl);
    const durationValue = escapePlaylistAttribute(model.durationValue);
    const lyricsPath = escapePlaylistAttribute(model.lyrics || '');
    const lyricsLrcPath = escapePlaylistAttribute(model.lyricsLrc || '');
    const sunoSource = escapePlaylistAttribute(model.sunoSource || '');
    const about = escapePlaylistAttribute(model.about || model.description || '');
    const credits = escapePlaylistAttribute(model.credits);
    const creditsKey = escapePlaylistAttribute(model.creditsKey);
    const lyricsTimed = escapePlaylistAttribute(model.lyricsTimed);

    return `
      <article
        class="playlist-track is-ready"
        aria-labelledby="${titleId}"
        data-audio-player
        data-track-id="${trackId}"
        data-track-translation-key="${trackKey}"
        data-audio-src="${audioUrl}"
        data-track-title="${escapePlaylistAttribute(model.title)}"
        data-track-artist="${escapePlaylistAttribute(model.artist)}"
        data-track-cover="${coverUrl}"
        data-track-duration="${durationValue}"
        data-track-mood="${trackMood}"
        data-track-description="${escapePlaylistAttribute(model.description)}"
        data-track-artwork-fit="${model.artworkFit}"
        data-track-lyrics="${lyricsPath}"
        data-track-lyrics-lrc="${lyricsLrcPath}"
        data-track-suno-source="${sunoSource}"
        data-track-about="${about}"
        data-track-credits="${credits}"
        data-track-credits-key="${creditsKey}"
        data-track-lyrics-timed="${lyricsTimed}"
      >
        <audio aria-label="${escapePlaylistAttribute(`${model.title} by ${model.artist}`)}" data-i18n-aria-label="${trackKey}.audioLabel" preload="metadata" crossorigin="anonymous"></audio>
        <div class="track-cover-wrap">
          <img
            src="${coverUrl}"
            alt="${escapePlaylistAttribute(`${model.title} cover art`)}"
            data-i18n-alt="${trackKey}.coverAlt"
            class="track-cover"
            width="1000"
            height="1000"
            loading="lazy"
            decoding="async"
            referrerpolicy="no-referrer"
            data-fallback-target="${fallbackId}"
            data-artwork-fit="${model.artworkFit}"
          />
          <div class="image-fallback music-cover-fallback" id="${fallbackId}" role="note" aria-live="polite">
            <span data-i18n="${trackKey}.fallback">${trackTitle} cover art is temporarily unavailable.</span>
          </div>
        </div>

        <div class="track-meta">
          <h3 id="${titleId}" data-i18n="${trackKey}.title">${trackTitle}</h3>
          <p class="artist-name">${trackArtist}</p>
          <p class="track-synopsis" data-i18n="${synopsisKey}">${trackSynopsis}</p>
          <p class="track-description" data-i18n="${trackKey}.description">${trackDescription}</p>
        </div>

        <div class="track-equalizer equalizer" aria-hidden="true">
          <span></span><span></span><span></span><span></span>
        </div>

        <div class="track-duration" aria-live="off">
          <span class="sr-only" data-i18n="music.duration">Duration:</span>
          <span data-duration>${model.durationLabel}</span>
        </div>

        <button class="track-play-toggle" type="button" data-play-toggle aria-label="Play ${escapePlaylistAttribute(model.title)}" data-track-key="${trackKey}.title" data-i18n-aria-label="${trackKey}.playLabel">
          <span class="play-icon" aria-hidden="true">▶</span>
        </button>
        <p class="audio-status" data-audio-status role="status" aria-live="polite"></p>
      </article>
    `;
  }).join('');

  const expandedPlaylistMarkup = safePlaylist.map(renderExpandedTrackOption).join('');

  if (expandedPlaylistMount) expandedPlaylistMount.innerHTML = expandedPlaylistMarkup;
  if (expandedFocusPlaylistMount) expandedFocusPlaylistMount.innerHTML = expandedPlaylistMarkup;
};

renderCarinePlaylist();

applyLanguage(getStoredLanguage() || DEFAULT_LANGUAGE);

const CARINE_SPLASH_SEEN_KEY = getCarineStorageKey('splash-seen');
const CARINE_SPLASH_SUCCESS_KEY = getCarineStorageKey('splash-successful-load');
const LEGACY_SPLASH_SEEN_KEY = 'carineSplashSeen';
const LEGACY_SPLASH_SUCCESS_KEY = 'carineSplashSuccessfulLoad';
const CARINE_SPLASH_STARTED_AT = window.__carineSplashBootAt || performance.now();
const CARINE_SPLASH_MIN_VISIBLE_MS = 8000;
const CARINE_SPLASH_FIRST_VISIT_MS = 12000;
const CARINE_SPLASH_RETURN_VISIT_MS = 8000;
const CARINE_SPLASH_MAX_VISIBLE_MS = 30000;
const CARINE_SPLASH_REDUCED_MOTION_MAX_VISIBLE_MS = 8000;
const CARINE_SPLASH_SKIP_REVEAL_MS = 5000;
const CARINE_SPLASH_ROTATOR_INTERVAL_MS = 2400;
const CARINE_SPLASH_ROTATOR_FADE_MS = 260;
const CARINE_SPLASH_AFFIRMATION_KEYS = [
  'splash.affirmation',
  'splash.phrase.grace',
  'splash.phrase.story',
  'splash.phrase.music',
  'splash.phrase.healing',
  'splash.phrase.sound',
  'splash.phrase.ready'
];

const readSplashStorage = (key) => {
  try {
    return window.localStorage.getItem(key) || window.sessionStorage.getItem(key);
  } catch (error) {
    return null;
  }
};

const writeSplashStorage = (key, value) => {
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    // localStorage can be unavailable in private or restricted browsing contexts.
  }

  try {
    window.sessionStorage.setItem(key, value);
  } catch (error) {
    // sessionStorage can be unavailable in private or restricted browsing contexts.
  }
};

const hasSuccessfulSplashLoad = () => readSplashStorage(CARINE_SPLASH_SUCCESS_KEY) === 'true'
  || readSplashStorage(CARINE_SPLASH_SEEN_KEY) === 'true'
  || readSplashStorage(LEGACY_SPLASH_SUCCESS_KEY) === 'true'
  || readSplashStorage(LEGACY_SPLASH_SEEN_KEY) === 'true';

const waitForSplashDelay = (milliseconds) => new Promise((resolve) => {
  window.setTimeout(resolve, Math.max(0, milliseconds));
});

const waitForSplashDOMReady = () => {
  if (document.readyState !== 'loading') {
    return Promise.resolve('dom-ready');
  }

  return new Promise((resolve) => {
    document.addEventListener('DOMContentLoaded', () => resolve('dom-ready'), { once: true });
  });
};


const stopSplashTextRotator = (splash) => {
  const timerId = Number(splash?.dataset.splashTextTimer || 0);
  const fadeTimerId = Number(splash?.dataset.splashTextFadeTimer || 0);

  if (timerId) {
    window.clearInterval(timerId);
  }

  if (fadeTimerId) {
    window.clearTimeout(fadeTimerId);
  }

  if (splash) {
    delete splash.dataset.splashTextTimer;
    delete splash.dataset.splashTextFadeTimer;
  }
};

const startSplashTextRotator = (splash, reducedMotion = false) => {
  if (!splash || splash.dataset.completed === 'true' || splash.dataset.splashTextStarted === 'true') {
    return;
  }

  const affirmation = splash.querySelector('[data-splash-affirmation]');
  const status = splash.querySelector('[data-splash-status]');
  const rotatorTarget = affirmation || status;

  splash.dataset.splashTextStarted = 'true';
  splash.classList.add('splash-text-ready');

  if (!rotatorTarget || reducedMotion) {
    return;
  }

  let phraseIndex = 0;
  const rotatePhrase = () => {
    if (splash.dataset.completed === 'true') {
      stopSplashTextRotator(splash);
      return;
    }

    phraseIndex = (phraseIndex + 1) % CARINE_SPLASH_AFFIRMATION_KEYS.length;
    rotatorTarget.classList.add('is-changing');

    const fadeTimerId = window.setTimeout(() => {
      rotatorTarget.textContent = translate(CARINE_SPLASH_AFFIRMATION_KEYS[phraseIndex]);
      rotatorTarget.classList.remove('is-changing');
    }, CARINE_SPLASH_ROTATOR_FADE_MS);

    splash.dataset.splashTextFadeTimer = String(fadeTimerId);
  };

  const timerId = window.setInterval(rotatePhrase, CARINE_SPLASH_ROTATOR_INTERVAL_MS);
  splash.dataset.splashTextTimer = String(timerId);
};

const waitForSplashPaint = (splash) => new Promise((resolve) => {
  if (!splash || splash.dataset.completed === 'true') {
    resolve('splash-unavailable');
    return;
  }

  let settled = false;
  const finish = () => {
    if (settled) return;
    settled = true;
    splash.classList.add('splash-ready');
    startSplashTextRotator(splash, window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    resolve('splash-painted');
  };

  const raf = window.requestAnimationFrame || ((callback) => window.setTimeout(callback, 16));
  raf(() => raf(finish));
  window.setTimeout(finish, 180);
});

const waitForDocumentFonts = () => {
  if (!document.fonts?.ready) {
    return Promise.resolve('fonts-unsupported');
  }

  return document.fonts.ready.then(() => 'fonts-ready').catch(() => 'fonts-fallback');
};

const waitForImageElement = (image, timeout = 1050) => new Promise((resolve) => {
  if (!image || image.complete) {
    resolve(true);
    return;
  }

  let settled = false;
  const finish = (isReady) => {
    if (settled) return;
    settled = true;
    image.removeEventListener('load', onLoad);
    image.removeEventListener('error', onError);
    resolve(isReady);
  };
  const onLoad = () => finish(true);
  const onError = () => finish(false);

  image.addEventListener('load', onLoad, { once: true });
  image.addEventListener('error', onError, { once: true });
  window.setTimeout(() => finish(false), timeout);
});

const waitForHeroAndLogoImages = () => Promise.all([
  ...document.querySelectorAll('.portrait-image[fetchpriority="high"], .brand-mark img, .splash-logo')
].map((image) => waitForImageElement(image))).then(() => 'hero-and-logo-ready');

const getCriticalShellReadiness = () => {
  const playlistMount = document.querySelector('[data-playlist-tracks]');
  const hasPlaylistMetadata = Boolean(playlistMount?.dataset.playlistVersion)
    && document.querySelectorAll('[data-audio-player]').length >= REQUIRED_MUSIC_TRACK_IDS.length;

  return {
    translations: Boolean(currentLanguage && translations[currentLanguage]),
    playlistMetadata: hasPlaylistMetadata,
    chatbotShell: Boolean(document.querySelector('[data-guide-widget] [data-guide-panel]')),
    stickyMiniPlayerShell: Boolean(document.querySelector('[data-mini-player] [data-mini-title]'))
  };
};

const waitForCriticalShells = () => new Promise((resolve) => {
  const tick = () => {
    const readiness = getCriticalShellReadiness();

    if (Object.values(readiness).every(Boolean)) {
      resolve(readiness);
      return;
    }

    window.requestAnimationFrame(tick);
  };

  tick();
});

const completeCinematicSplash = () => {
  const splash = document.querySelector('[data-cinematic-splash]');

  if (!splash || splash.dataset.completed === 'true') {
    return;
  }

  splash.dataset.completed = 'true';
  stopSplashTextRotator(splash);
  document.documentElement.classList.add('splash-ready');
  document.documentElement.classList.remove('splash-booting');
  splash.classList.add('is-hiding');
  splash.setAttribute('aria-hidden', 'true');
  writeSplashStorage(CARINE_SPLASH_SEEN_KEY, 'true');
  writeSplashStorage(CARINE_SPLASH_SUCCESS_KEY, 'true');

  window.setTimeout(() => {
    splash.remove();
    document.documentElement.classList.remove('splash-ready');
  }, 920);
};

const initializeCinematicSplash = () => {
  const splash = document.querySelector('[data-cinematic-splash]');

  if (!splash) {
    document.documentElement.classList.remove('splash-booting');
    return;
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const animationReady = waitForSplashPaint(splash);
  const returningVisitor = hasSuccessfulSplashLoad();
  const maximumVisibleMs = reducedMotion ? CARINE_SPLASH_REDUCED_MOTION_MAX_VISIBLE_MS : CARINE_SPLASH_MAX_VISIBLE_MS;
  const cinematicVisibleMs = returningVisitor ? CARINE_SPLASH_RETURN_VISIT_MS : CARINE_SPLASH_FIRST_VISIT_MS;
  const minimumVisibleMs = reducedMotion
    ? CARINE_SPLASH_REDUCED_MOTION_MAX_VISIBLE_MS
    : Math.max(CARINE_SPLASH_MIN_VISIBLE_MS, cinematicVisibleMs);
  const elapsed = performance.now() - CARINE_SPLASH_STARTED_AT;
  const minimumDelay = waitForSplashDelay(minimumVisibleMs - elapsed);
  const criticalResources = Promise.all([
    animationReady,
    waitForSplashDOMReady(),
    waitForDocumentFonts(),
    waitForHeroAndLogoImages(),
    waitForCriticalShells()
  ]);
  const hardStop = waitForSplashDelay(maximumVisibleMs - elapsed);
  const skipButton = splash.querySelector('[data-splash-skip]');

  if (skipButton) {
    skipButton.addEventListener('click', completeCinematicSplash, { once: true });
    window.setTimeout(() => {
      if (splash.dataset.completed === 'true') return;
      skipButton.disabled = false;
      skipButton.setAttribute('aria-disabled', 'false');
      skipButton.setAttribute('aria-hidden', 'false');
      skipButton.classList.add('is-visible');
      skipButton.setAttribute('aria-label', skipButton.textContent.trim() || 'Enter App');
    }, Math.max(0, CARINE_SPLASH_SKIP_REVEAL_MS - elapsed));
  }

  Promise.race([
    Promise.all([minimumDelay, criticalResources]),
    hardStop
  ]).then(() => completeCinematicSplash());
};


const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const siteHeader = document.querySelector('.site-header');
const navAnchorLinks = [...document.querySelectorAll('[data-nav-link]')];

const closeMobileNavigation = () => {
  navToggle?.setAttribute('aria-expanded', 'false');
  navLinks?.classList.remove('is-open');
  document.body.classList.remove('nav-open');
};

const getHeaderOffset = () => Math.ceil((siteHeader?.getBoundingClientRect().height || 76) + 26);

const scrollToSection = (hash) => {
  const target = document.querySelector(hash);
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  history.pushState(null, '', hash);
};

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navLinks.classList.toggle('is-open', !isOpen);
    document.body.classList.toggle('nav-open', !isOpen);
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', (event) => {
      const hash = link.getAttribute('href');
      closeMobileNavigation();
      if (hash?.startsWith('#')) {
        event.preventDefault();
        scrollToSection(hash);
      }
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMobileNavigation();
  });
}

const setActiveNavLink = (sectionId) => {
  navAnchorLinks.forEach((link) => {
    const isActive = link.dataset.section === sectionId;
    link.classList.toggle('is-active', isActive);
    if (isActive) {
      link.setAttribute('aria-current', 'true');
    } else {
      link.removeAttribute('aria-current');
    }
  });
};

const observedSections = navAnchorLinks
  .map((link) => document.getElementById(link.dataset.section))
  .filter(Boolean);

if ('IntersectionObserver' in window && observedSections.length) {
  const navObserver = new IntersectionObserver((entries) => {
    const visibleEntry = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visibleEntry?.target?.id) setActiveNavLink(visibleEntry.target.id);
  }, { rootMargin: `-${getHeaderOffset()}px 0px -58% 0px`, threshold: [0.12, 0.28, 0.5] });
  observedSections.forEach((section) => navObserver.observe(section));
} else if (observedSections.length) {
  const updateActiveSection = () => {
    const offset = getHeaderOffset() + 20;
    const active = observedSections.findLast((section) => section.offsetTop <= window.scrollY + offset) || observedSections[0];
    setActiveNavLink(active.id);
  };
  window.addEventListener('scroll', updateActiveSection, { passive: true });
  updateActiveSection();
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

const portraitImages = [...document.querySelectorAll('[data-portrait-image]')];
const PORTRAIT_ROTATION_INTERVAL_MS = 2 * 60 * 1000;
let activePortraitIndex = Math.max(0, portraitImages.findIndex((image) => image.classList.contains('is-active')));
let portraitRotationTimer = 0;

const setPortraitFallbackVisibility = () => {
  const fallbackId = portraitImages[0]?.dataset.fallbackTarget;
  const fallback = fallbackId ? document.getElementById(fallbackId) : null;
  const allPortraitsFailed = portraitImages.length > 0 && portraitImages.every((image) => image.dataset.loadState === 'error');

  fallback?.classList.toggle('is-visible', allPortraitsFailed);
};

const getAvailablePortraitIndexes = () =>
  portraitImages
    .map((image, index) => ({ image, index }))
    .filter(({ image }) => image.dataset.loadState !== 'error')
    .map(({ index }) => index);

const showPortraitAtIndex = (nextIndex) => {
  if (!portraitImages[nextIndex] || portraitImages[nextIndex].dataset.loadState === 'error') {
    return;
  }

  activePortraitIndex = nextIndex;
  portraitImages.forEach((image, index) => {
    const isActive = index === activePortraitIndex;
    image.classList.toggle('is-active', isActive);
    image.toggleAttribute('aria-hidden', !isActive);
  });
  setPortraitFallbackVisibility();
};

const showNextAvailablePortrait = () => {
  const availablePortraitIndexes = getAvailablePortraitIndexes();

  if (availablePortraitIndexes.length === 0) {
    setPortraitFallbackVisibility();
    return;
  }

  const currentAvailablePosition = availablePortraitIndexes.indexOf(activePortraitIndex);
  const nextAvailablePosition = currentAvailablePosition === -1
    ? 0
    : (currentAvailablePosition + 1) % availablePortraitIndexes.length;

  showPortraitAtIndex(availablePortraitIndexes[nextAvailablePosition]);
};

const startPortraitRotation = () => {
  window.clearInterval(portraitRotationTimer);

  if (getAvailablePortraitIndexes().length < 2) {
    return;
  }

  portraitRotationTimer = window.setInterval(showNextAvailablePortrait, PORTRAIT_ROTATION_INTERVAL_MS);
};

portraitImages.forEach((image, index) => {
  image.addEventListener('load', () => {
    image.dataset.loadState = 'loaded';
    image.classList.remove('has-load-error');

    if (!portraitImages[activePortraitIndex] || portraitImages[activePortraitIndex].dataset.loadState === 'error') {
      showPortraitAtIndex(index);
    } else {
      setPortraitFallbackVisibility();
    }

    startPortraitRotation();
  });

  image.addEventListener('error', () => {
    image.dataset.loadState = 'error';
    image.classList.add('has-load-error');

    if (index === activePortraitIndex) {
      showNextAvailablePortrait();
    } else {
      setPortraitFallbackVisibility();
    }

    startPortraitRotation();
  });

  window.setTimeout(() => {
    if (image.complete) {
      if (image.naturalWidth > 0) {
        image.dataset.loadState = 'loaded';
        image.classList.remove('has-load-error');
      } else {
        image.dataset.loadState = 'error';
        image.classList.add('has-load-error');
      }

      if (index === activePortraitIndex && image.dataset.loadState === 'error') {
        showNextAvailablePortrait();
      }

      setPortraitFallbackVisibility();
      startPortraitRotation();
    }
  }, 0);
});

showPortraitAtIndex(activePortraitIndex);
startPortraitRotation();

const remoteImages = document.querySelectorAll('img[data-fallback-target]:not([data-portrait-image])');

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


const fallbackReflectionArticles = window.reflectionArticles || [];

const initializeReflections = () => {
  const section = document.querySelector('[data-reflection-grid]');
  const featured = document.querySelector('[data-featured-reflection]');
  const filters = document.querySelector('[data-reflection-filters]');
  const search = document.querySelector('[data-reflection-search]');
  const empty = document.querySelector('[data-reflection-empty]');
  const loadMore = document.querySelector('[data-reflection-load-more]');

  if (!section || !featured || !filters || !search || !loadMore) {
    return;
  }

  const pageSize = 3;
  let activeCategory = 'all';
  let visibleCount = pageSize;

  const categories = [{ id: 'all', labelKey: 'reflections.all' }, ...[...new Set(fallbackReflectionArticles.map((article) => article.categoryKey))].map((categoryKey) => ({ id: categoryKey, labelKey: categoryKey }))];

  const createTagButton = (category) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'reflection-filter';
    button.dataset.category = category.id;
    button.textContent = translate(category.labelKey);
    button.setAttribute('aria-pressed', String(category.id === activeCategory));
    button.addEventListener('click', () => {
      activeCategory = category.id;
      visibleCount = pageSize;
      renderReflections();
    });
    return button;
  };

  const getReflectionText = (article, field) => {
    const explicitKey = article[`${field}Key`];
    const legacyKey = article.key ? `${article.key}.${field}` : '';
    return translate(explicitKey || legacyKey);
  };

  const formatReflectionDate = (dateValue) => {
    if (!dateValue) return '';
    const parsedDate = new Date(`${dateValue}T12:00:00Z`);
    if (Number.isNaN(parsedDate.getTime())) return dateValue;
    return new Intl.DateTimeFormat(currentLanguage === 'en' ? 'en-US' : currentLanguage, { month: 'short', day: 'numeric', year: 'numeric' }).format(parsedDate);
  };

  const articleMatches = (article) => {
    const query = search.value.trim().toLowerCase();
    const searchable = [
      getReflectionText(article, 'title'),
      getReflectionText(article, 'excerpt'),
      translate(article.categoryKey),
      getReflectionText(article, 'quote'),
      getReflectionText(article, 'prompt'),
      article.slug,
      article.date
    ].join(' ').toLowerCase();
    const matchesCategory = activeCategory === 'all' || article.categoryKey === activeCategory;
    return matchesCategory && (!query || searchable.includes(query));
  };

  const createArticleCard = (article, isFeatured = false) => {
    const card = document.createElement('article');
    const title = getReflectionText(article, 'title');
    const quote = getReflectionText(article, 'quote');
    const prompt = getReflectionText(article, 'prompt');
    card.className = isFeatured ? 'reflection-card reflection-card-featured' : 'reflection-card reveal is-visible';
    card.id = `reflection-${article.slug || article.id}`;
    card.dataset.slug = article.slug || article.id;
    card.dataset.contentPath = article.contentPath || '';

    const meta = document.createElement('div');
    meta.className = 'reflection-card__meta';

    const tag = document.createElement('span');
    tag.className = 'reflection-tag';
    tag.textContent = translate(article.categoryKey);

    const readTime = document.createElement('span');
    readTime.textContent = `${getReflectionText(article, 'readTime')} ${translate('reflections.readTime')}`;
    const date = document.createElement('time');
    date.dateTime = article.date || '';
    date.textContent = formatReflectionDate(article.date);
    meta.append(tag, date, readTime);

    const heading = document.createElement('h3');
    heading.textContent = title;

    const excerpt = document.createElement('p');
    excerpt.textContent = getReflectionText(article, 'excerpt');

    if (article.coverImage) {
      const cover = document.createElement('img');
      cover.className = 'reflection-card__cover';
      cover.src = article.coverImage;
      cover.alt = '';
      cover.loading = 'lazy';
      cover.decoding = 'async';
      cover.referrerPolicy = 'no-referrer';
      card.append(cover);
    }

    card.append(meta, heading, excerpt);

    if (quote) {
      const quoteElement = document.createElement('blockquote');
      quoteElement.textContent = quote;
      card.append(quoteElement);
    }

    if (prompt) {
      const promptElement = document.createElement('p');
      promptElement.className = 'reflection-prompt';
      const strong = document.createElement('strong');
      strong.textContent = `${translate('reflections.promptLabel')}:`;
      promptElement.append(strong, ` ${prompt}`);
      card.append(promptElement);
    }

    const link = document.createElement('a');
    link.className = 'text-link reflection-link';
    link.href = article.link;
    link.textContent = translate('reflections.explore');
    link.setAttribute('aria-label', translateTemplate('reflections.exploreAria', { title }));
    card.append(link);

    return card;
  };

  const renderFilters = () => {
    filters.replaceChildren(...categories.map(createTagButton));
  };

  const renderReflections = () => {
    const matchingArticles = fallbackReflectionArticles.filter(articleMatches);
    const [featuredArticle, ...restArticles] = matchingArticles;
    featured.innerHTML = '';

    if (featuredArticle) {
      const label = document.createElement('p');
      label.className = 'eyebrow reflection-featured-label';
      label.textContent = translate('reflections.featuredLabel');
      featured.append(label, createArticleCard(featuredArticle, true));
    }

    const visibleArticles = restArticles.slice(0, visibleCount);
    section.replaceChildren(...visibleArticles.map((article) => createArticleCard(article)));
    empty.hidden = matchingArticles.length > 0;
    loadMore.hidden = visibleCount >= restArticles.length;
    loadMore.textContent = visibleCount >= restArticles.length ? translate('reflections.allLoaded') : translate('reflections.loadMore');
    renderFilters();
  };

  search.addEventListener('input', () => {
    visibleCount = pageSize;
    renderReflections();
  });

  loadMore.addEventListener('click', () => {
    visibleCount += pageSize;
    renderReflections();
  });

  window.addEventListener('carine:languagechange', renderReflections);
  renderReflections();
};

const initializePwaExperience = () => {
  const INSTALL_DISMISSED_AT_KEY = getCarineStorageKey('install-dismissed-at');
  const INSTALL_SHOWN_AT_KEY = getCarineStorageKey('install-shown-at');
  const INSTALL_INSTALLED_KEY = getCarineStorageKey('install-installed');
  const LEGACY_DISMISSED_AT_KEY = 'carineInstallDismissedAt';
  const LEGACY_INSTALLED_KEY = 'carineAppInstalled';
  const LEGACY_DISMISSED_KEY = 'carineAppInstallPromptDismissed';
  const LEGACY_SHOWN_AT_KEY = 'carineAppInstallPromptShownAt';
  const INSTALL_DISMISSAL_WINDOW = 7 * 24 * 60 * 60 * 1000;

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const scriptUrl = document.currentScript?.src || document.querySelector('script[src*="script"]')?.src || window.location.href;
      const serviceWorkerUrl = new URL('sw.js', scriptUrl);
      serviceWorkerUrl.searchParams.set('v', APP_VERSION);

      navigator.serviceWorker.register(serviceWorkerUrl).then((registration) => {
        registration.update();

        if (registration.waiting) {
          registration.waiting.postMessage({ type: 'SKIP_WAITING' });
        }

        navigator.serviceWorker.addEventListener('controllerchange', () => {
          document.body.classList.add('app-update-ready');
        });

        registration.addEventListener('updatefound', () => {
          const installingWorker = registration.installing;
          installingWorker?.addEventListener('statechange', () => {
            if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
              installingWorker.postMessage({ type: 'SKIP_WAITING' });
            }
          });
        });
      }).catch((error) => {
        console.info('Service worker registration skipped:', error);
      });
    });
  }

  const installToast = document.querySelector('[data-install-toast]');
  const installButton = document.querySelector('[data-install-button]');
  const dismissButton = document.querySelector('[data-install-dismiss]');
  const installInstructions = document.querySelector('[data-install-instructions]');
  const installPanel = document.querySelector('[data-install-panel]');
  const installPanelClose = document.querySelector('[data-install-panel-close]');
  const installPanelCopy = document.querySelector('[data-install-panel-copy]');
  let deferredInstallPrompt = null;

  const readStorage = (key) => {
    try { return window.localStorage.getItem(key); } catch (error) { return null; }
  };
  const writeStorage = (key, value) => {
    try { window.localStorage.setItem(key, value); } catch (error) { /* localStorage can be unavailable. */ }
  };
  const removeStorage = (key) => {
    try { window.localStorage.removeItem(key); } catch (error) { /* localStorage can be unavailable. */ }
  };

  const isStandaloneDisplay = () => Boolean(
    window.matchMedia?.('(display-mode: standalone)').matches
    || window.navigator.standalone === true
  );
  const getUserAgent = () => window.navigator.userAgent || '';
  const isIosDevice = () => /iphone|ipad|ipod/i.test(getUserAgent()) || (window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);
  const isSafari = () => /^((?!chrome|android|crios|fxios|edg|opr).)*safari/i.test(getUserAgent());
  const supportsDirectInstallPrompt = () => Boolean(deferredInstallPrompt);
  const canShowManualInstructions = () => isSafari();
  const getDismissedAt = () => {
    const currentDismissedAt = Number(readStorage(INSTALL_DISMISSED_AT_KEY));
    if (Number.isFinite(currentDismissedAt) && currentDismissedAt > 0) return currentDismissedAt;

    const legacyDismissedAt = Number(readStorage(LEGACY_DISMISSED_AT_KEY));
    if (Number.isFinite(legacyDismissedAt) && legacyDismissedAt > 0) {
      writeStorage(INSTALL_DISMISSED_AT_KEY, String(legacyDismissedAt));
      removeStorage(LEGACY_DISMISSED_AT_KEY);
      return legacyDismissedAt;
    }

    const legacyShownAt = Number(readStorage(LEGACY_SHOWN_AT_KEY));
    if (readStorage(LEGACY_DISMISSED_KEY) === 'true' && Number.isFinite(legacyShownAt) && legacyShownAt > 0) {
      writeStorage(INSTALL_DISMISSED_AT_KEY, String(legacyShownAt));
      removeStorage(LEGACY_DISMISSED_KEY);
      return legacyShownAt;
    }
    return 0;
  };
  const wasRecentlyDismissed = () => {
    const dismissedAt = getDismissedAt();
    return dismissedAt > 0 && Date.now() - dismissedAt < INSTALL_DISMISSAL_WINDOW;
  };
  const isInstallMarkedComplete = () => readStorage(INSTALL_INSTALLED_KEY) === 'true' || readStorage(LEGACY_INSTALLED_KEY) === 'true';
  const shouldShowInstallToast = () => !isStandaloneDisplay() && !isInstallMarkedComplete() && !wasRecentlyDismissed();
  const setFallbackInstructionCopy = () => {
    if (!installPanelCopy) return;
    const key = isIosDevice() ? 'pwa.iosInstructions' : 'pwa.safariInstructions';
    installPanelCopy.dataset.i18n = key;
    installPanelCopy.textContent = translate(key);
  };

  const hideInstallPanel = () => {
    if (installPanel) installPanel.hidden = true;
  };
  const showInstallPanel = () => {
    if (!installPanel) return;
    setFallbackInstructionCopy();
    installPanel.hidden = false;
    installPanelClose?.focus({ preventScroll: true });
  };
  const hideInstallToast = () => {
    if (installToast) installToast.hidden = true;
    hideInstallPanel();
  };
  const showInstallToast = ({ manualInstructions = false } = {}) => {
    if (!installToast || !shouldShowInstallToast()) return;
    if (installInstructions) installInstructions.hidden = !manualInstructions;
    if (installButton) installButton.hidden = false;
    installToast.hidden = false;
    writeStorage(INSTALL_SHOWN_AT_KEY, String(Date.now()));
    removeStorage(LEGACY_SHOWN_AT_KEY);
  };
  const dismissInstallToast = () => {
    writeStorage(INSTALL_DISMISSED_AT_KEY, String(Date.now()));
    hideInstallToast();
  };

  if (isStandaloneDisplay()) {
    writeStorage(INSTALL_INSTALLED_KEY, 'true');
    hideInstallToast();
  }

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    showInstallToast();
  });

  window.addEventListener('load', () => {
    if (!supportsDirectInstallPrompt() && canShowManualInstructions()) {
      window.setTimeout(() => showInstallToast({ manualInstructions: true }), 1400);
    }
  });

  installButton?.addEventListener('click', async (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!supportsDirectInstallPrompt()) {
      showInstallPanel();
      return;
    }

    try {
      await deferredInstallPrompt.prompt();
      const choice = await deferredInstallPrompt.userChoice;
      if (choice?.outcome === 'accepted') {
        writeStorage(INSTALL_INSTALLED_KEY, 'true');
        removeStorage(LEGACY_INSTALLED_KEY);
        hideInstallToast();
      } else {
        dismissInstallToast();
      }
    } catch (error) {
      console.info('PWA install prompt could not be opened:', error);
      showInstallPanel();
    } finally {
      deferredInstallPrompt = null;
    }
  });

  dismissButton?.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    dismissInstallToast();
  });

  installPanelClose?.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    hideInstallPanel();
    installButton?.focus({ preventScroll: true });
  });

  installPanel?.addEventListener('click', (event) => {
    if (event.target === installPanel) hideInstallPanel();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && installPanel && !installPanel.hidden) hideInstallPanel();
  });

  window.addEventListener('appinstalled', () => {
    writeStorage(INSTALL_INSTALLED_KEY, 'true');
    removeStorage(LEGACY_INSTALLED_KEY);
    hideInstallToast();
  });
};

const initializeGuideAssistant = () => {
  // TODO: Connect this guide to a secure server-side AI endpoint for deeper conversational intelligence.
  const widget = document.querySelector('[data-guide-widget]');
  if (!widget) return;

  const toggle = widget.querySelector('[data-guide-toggle]');
  const panel = widget.querySelector('[data-guide-panel]');
  const close = widget.querySelector('[data-guide-close]');
  const messages = widget.querySelector('[data-guide-messages]');
  const form = widget.querySelector('[data-guide-form]');
  const input = widget.querySelector('[data-guide-input]');
  const starters = Array.from(widget.querySelectorAll('[data-guide-starter]'));

  const knowledgeBase = {
    biography: 'Carine Sanadina is Congolese-born and Jacksonville-based. She is a healthcare professional, author, artist, survivor advocate, and emotional wellness voice whose work transforms lived pain into healing-centered literature, music, and inspiration. Her message often carries faith, resilience, motherhood, immigrant experience, survival, and restoration.',
    books: {
      pain: {
        title: 'The Pain Nobody Saw: A Hidden Story of Abuse and Survival',
        themes: ['hidden abuse', 'survival', 'healing', 'silent pain', 'domestic violence'],
        response: 'Start with The Pain Nobody Saw: A Hidden Story of Abuse and Survival if you want Carine’s hidden-abuse, survival, and healing-centered testimony. It gives language to pain that was often unseen.'
      },
      toxic: {
        title: 'If It’s Red, It’s Toxic',
        themes: ['toxic relationships', 'red flags', 'emotional clarity', 'self-worth'],
        response: 'For toxic relationships, start with If It’s Red, It’s Toxic. It centers red flags, emotional clarity, self-worth, and the courage to protect your peace.'
      },
      sunshine: {
        title: 'The Road to Sunshine: A Journey of Struggles, Faith and Hope',
        themes: ['struggle', 'faith', 'hope', 'restoration', 'resilience'],
        response: 'For faith, hope, and restoration, The Road to Sunshine: A Journey of Struggles, Faith and Hope is the best starting point. It speaks to resilience while walking through difficulty.'
      },
      storm: {
        title: 'After The Storm',
        themes: ['recovery', 'survival after hardship', 'healing beyond the storm'],
        response: 'Choose After The Storm if your question is about recovery after hardship — healing beyond the storm, peace after survival, and renewed possibility.'
      }
    },
    music: {
      consolation: 'Consolation is about comfort, encouragement, faith, and emotional restoration — a gentle song for the heart that needs reassurance.',
      gentillesse: 'La Gentillesse centers kindness, compassion, healing, and human connection.',
      wonderful: 'Wonderful is a praise-filled song of gratitude and God’s goodness.',
      womanifesto: 'Womanifesto is a Soukous • Rumba • Makossa Gospel anthem about feminine resilience, healing, grace, victory, faith, identity, and restoration.'
    },
    advocacy: 'Carine advocates for domestic violence awareness, emotional healing, survivor empowerment, women’s self-worth, faith-centered restoration, toxic relationship recovery, and human-centered care.',
    booking: 'You may use the contact or booking section to request speaking, media, music collaboration, or advocacy-related conversations.',
    navigation: 'Use the site navigation to explore Music, Books/Author Spotlight, About, Advocacy/Focus Areas, Reflections, or Contact. For invitations or media, the Contact section is the best next step.',
    unsure: 'I can speak from the information available on Carine’s website, but this detail may need confirmation through the contact section.'
  };

  const containsAny = (text, words) => words.some((word) => text.includes(word));
  const isImmediateSafetyConcern = (text) => {
    const emergencySignals = [
      'immediate danger', 'right now', 'currently unsafe', 'emergency', 'call 911', 'threatening me', 'being threatened',
      'hurt myself', 'harm myself', 'suicide', 'kill myself', 'want to die', 'self harm', 'self-harm', 'in danger', 'not safe'
    ];
    return containsAny(text, emergencySignals);
  };

  const addMessage = (text, sender = 'bot') => {
    const bubble = document.createElement('div');
    bubble.className = `guide-message guide-message--${sender}`;
    bubble.textContent = text;
    messages.appendChild(bubble);
    messages.scrollTop = messages.scrollHeight;
  };

  const recommendBook = (normalized) => {
    if (containsAny(normalized, ['toxic', 'red flag', 'red flags', 'relationship', 'manipulation', 'self-worth', 'worth'])) return knowledgeBase.books.toxic.response;
    if (containsAny(normalized, ['hope', 'faith', 'restoration', 'sunshine', 'resilience', 'struggle'])) return knowledgeBase.books.sunshine.response;
    if (containsAny(normalized, ['storm', 'after hardship', 'hardship', 'recovery', 'recover', 'beyond survival'])) return knowledgeBase.books.storm.response;
    if (containsAny(normalized, ['abuse', 'survival', 'survivor', 'domestic violence', 'hidden pain', 'pain nobody saw'])) return knowledgeBase.books.pain.response;
    return `${knowledgeBase.books.pain.response} If your focus is red flags, choose ${knowledgeBase.books.toxic.title}; for faith and hope, choose ${knowledgeBase.books.sunshine.title}; for recovery after hardship, choose ${knowledgeBase.books.storm.title}.`;
  };

  const recommendSong = (normalized) => {
    if (containsAny(normalized, ['womanifesto', 'women', 'woman', 'female', 'feminine', 'identity', 'victory'])) return knowledgeBase.music.womanifesto;
    if (containsAny(normalized, ['kindness', 'gentillesse', 'compassion'])) return knowledgeBase.music.gentillesse;
    if (containsAny(normalized, ['gratitude', 'praise', 'wonderful', 'goodness'])) return knowledgeBase.music.wonderful;
    if (containsAny(normalized, ['comfort', 'consolation', 'encouragement', 'restoration'])) return knowledgeBase.music.consolation;
    return `Carine’s featured music includes Consolation, La Gentillesse, Wonderful, and Womanifesto. ${knowledgeBase.music.womanifesto}`;
  };

  const answerQuestion = (question) => {
    const normalized = question.toLowerCase();
    if (isImmediateSafetyConcern(normalized)) {
      return 'I’m sorry you may be facing something urgent. If you or someone else is in immediate danger, please contact local emergency services now or reach a trusted professional immediately. This guide can share information about Carine’s work, but it cannot replace professional, legal, medical, or crisis support.';
    }
    if (containsAny(normalized, ['book', 'read', 'start with', 'recommend', 'which one'])) return recommendBook(normalized);
    if (containsAny(normalized, ['womanifesto'])) return knowledgeBase.music.womanifesto;
    if (containsAny(normalized, ['music', 'song', 'track', 'listen', 'consolation', 'gentillesse', 'wonderful', 'kindness', 'praise', 'gratitude', 'comfort'])) return recommendSong(normalized);
    if (containsAny(normalized, ['advocacy', 'advocate', 'mission', 'domestic violence', 'empowerment', 'self-worth', 'healing', 'toxic relationship', 'human-centered care'])) return knowledgeBase.advocacy;
    if (containsAny(normalized, ['invite', 'speak', 'speaking', 'booking', 'media', 'interview', 'collaboration', 'contact'])) return knowledgeBase.booking;
    if (containsAny(normalized, ['where', 'navigate', 'navigation', 'find', 'section', 'page', 'website'])) return knowledgeBase.navigation;
    if (containsAny(normalized, ['story', 'bio', 'biography', 'background', 'healthcare', 'jacksonville', 'congolese', 'immigrant', 'refugee', 'motherhood', 'survivor', 'author', 'artist', 'carine'])) return knowledgeBase.biography;
    if (containsAny(normalized, ['faith', 'resilience', 'restoration', 'emotional wellness', 'women'])) {
      return 'Carine’s voice is warm, faith-centered, and restoration-oriented. Across her books, music, and advocacy, she speaks about emotional healing, resilient self-worth, survivor dignity, women’s empowerment, motherhood, and hope after pain.';
    }
    return knowledgeBase.unsure;
  };

  const submitQuestion = (question) => {
    const cleanQuestion = String(question || '').trim();
    if (!cleanQuestion) return;
    addMessage(cleanQuestion, 'user');
    addMessage(answerQuestion(cleanQuestion), 'bot');
    input.value = '';
  };

  const setOpen = (isOpen) => {
    panel.hidden = !isOpen;
    document.body.classList.toggle('chat-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    panel.setAttribute('aria-modal', String(isOpen));
    if (isOpen) {
      if (!messages.dataset.initialized) {
        addMessage(t('guide.welcome', 'Welcome. I’m Carine’s Guide — a compact guide to her story, books, music, advocacy, and healing-centered mission. How may I help you explore?'));
        messages.dataset.initialized = 'true';
      }
      window.setTimeout(() => input.focus({ preventScroll: true }), 50);
      return;
    }
    toggle.focus({ preventScroll: true });
  };

  toggle?.addEventListener('click', () => setOpen(panel.hidden));
  close?.addEventListener('click', () => setOpen(false));
  starters.forEach((button) => button.addEventListener('click', () => submitQuestion(button.dataset.guideStarter || button.textContent)));
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    submitQuestion(input.value);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !panel.hidden) setOpen(false);
  });
  document.addEventListener('pointerdown', (event) => {
    if (panel.hidden || widget.contains(event.target)) return;
    setOpen(false);
  });
};
initializeReflections();
initializeCinematicSplash();
initializePwaExperience();
initializeGuideAssistant();

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

  const updateMiniPlayerBodyState = () => {
    const isActive = Boolean(miniPlayer?.classList.contains('is-visible'));
    document.body.classList.toggle('mini-player-active', isActive);

    if (miniPlayer) {
      const height = Math.ceil(miniPlayer.getBoundingClientRect().height || 120);
      document.documentElement.style.setProperty('--mini-player-height', `${height}px`);
    }
  };

  updateMiniPlayerBodyState();
  window.addEventListener('resize', updateMiniPlayerBodyState);
  window.addEventListener('orientationchange', updateMiniPlayerBodyState);

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
  let lastAudioEvent = 'none';
  let userStoppedManually = false;
  let wasPlayingBeforeBackground = false;
  let shuffleEnabled = false;
  let repeatMode = 'all';
  const PLAYER_STORAGE_KEY = PLAYER_STATE_STORAGE_KEY;
  const VISUALIZER_STORAGE_KEY = getCarineStorageKey('visualizer-enabled');
  const VISUALIZER_STYLE_STORAGE_KEY = getCarineStorageKey('visualizer-style');
  const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const reduceMotion = reduceMotionQuery.matches;
  const coarsePointerQuery = window.matchMedia('(pointer: coarse)');
  const userAgent = window.navigator.userAgent || '';
  const platform = window.navigator.platform || '';
  const isIOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && "ontouchend" in document);
  if (isIOS) {
    document.documentElement.classList.add('is-ios');
  }
  const isAppleTouchDevice = isIOS;
  const isWebKitEngine = /AppleWebKit/i.test(userAgent) && !/Android/i.test(userAgent);
  const isIosWebKit = isAppleTouchDevice && isWebKitEngine;
  const isIosSafari = isIosWebKit;
  const browserName = (() => {
    if (/CriOS/i.test(userAgent)) return 'Chrome iOS';
    if (/FxiOS/i.test(userAgent)) return 'Firefox iOS';
    if (/EdgiOS/i.test(userAgent)) return 'Edge iOS';
    if (/Safari/i.test(userAgent) && !/Chrome|Chromium|Android/i.test(userAgent)) return 'Safari';
    if (/Chrome|Chromium/i.test(userAgent)) return 'Chrome';
    if (/Firefox/i.test(userAgent)) return 'Firefox';
    return 'Unknown';
  })();
  const safariVersion = (() => {
    const match = userAgent.match(/Version\/([\d.]+).*Safari/i);
    return match ? match[1] : 'unavailable';
  })();
  const iosVersion = (() => {
    const match = userAgent.match(/OS ([\d_]+) like Mac OS X/i);
    return match ? match[1].replace(/_/g, '.') : 'unavailable';
  })();
  const shuffleButton = document.querySelector('[data-shuffle-toggle]');
  const repeatButton = document.querySelector('[data-repeat-toggle]');
  const nextButton = document.querySelector('[data-next-track]');
  const visualizerToggle = document.querySelector('[data-visualizer-toggle]');
  const visualizerStyleSelect = document.querySelector('[data-visualizer-style]');
  const visualizerHelper = document.querySelector('[data-visualizer-helper]');
  const visualizerCanvas = document.querySelector('[data-audio-visualizer]');
  const visualizerFallback = document.querySelector('[data-visualizer-fallback]');
  const stageCover = document.querySelector('[data-stage-cover]');
  const stageTitle = document.querySelector('[data-stage-title]');
  const stageArtist = document.querySelector('[data-stage-artist]');
  const mobilePlayer = document.querySelector('[data-mobile-player]');
  const mobileCover = document.querySelector('[data-mobile-cover]');
  const mobileTitle = document.querySelector('[data-mobile-title]');
  const mobileArtist = document.querySelector('[data-mobile-artist]');
  const mobileToggle = document.querySelector('[data-mobile-toggle]');
  const mobileShuffle = document.querySelector('[data-mobile-shuffle]');
  const mobileRepeat = document.querySelector('[data-mobile-repeat]');
  const mobilePrevious = document.querySelector('[data-mobile-previous]');
  const mobileNext = document.querySelector('[data-mobile-next]');
  const consoleSynopsis = document.querySelector('[data-console-synopsis]');
  const consoleStatus = document.querySelector('[data-console-status]');
  const consolePlaylistToggle = document.querySelector('[data-console-playlist-toggle]');
  const consolePlaylistDrawer = document.querySelector('[data-console-playlist-drawer]');
  const consolePlaylistCloseButtons = Array.from(document.querySelectorAll('[data-console-playlist-close]'));
  const miniShuffle = document.querySelector('[data-mini-shuffle]');
  const miniRepeat = document.querySelector('[data-mini-repeat]');
  const miniExpand = document.querySelector('[data-mini-expand]');
  const playerExpand = document.querySelector('[data-player-expand]');
  const mobileClose = document.querySelector('[data-mobile-close]');
  const expandedProgress = document.querySelector('[data-expanded-progress]');
  const expandedCurrent = document.querySelector('[data-expanded-current]');
  const expandedDuration = document.querySelector('[data-expanded-duration]');
  const expandedVisualizer = document.querySelector('[data-expanded-visualizer]');
  const vinylStages = Array.from(document.querySelectorAll('[data-vinyl-stage], [data-mini-vinyl-stage]'));
  const vinylDiscs = Array.from(document.querySelectorAll('[data-vinyl-disc]'));
  const expandedVinylStage = document.querySelector('[data-vinyl-stage]');
  const expandedVinylDisc = document.querySelector('[data-vinyl-disc]');
  let expandedTrackOptions = Array.from(document.querySelectorAll('[data-expanded-track-option]'));
  const expandedPlayerCard = document.querySelector('.expanded-player-card');
  const lyricsPanel = document.querySelector('[data-lyrics-panel]');
  const lyricsScroll = document.querySelector('[data-lyrics-scroll]');
  const lyricsInfoPanel = document.querySelector('[data-track-info-panel]');
  const lyricsFocusBar = document.querySelector('[data-lyrics-focus-bar]');
  const lyricsFocusTitle = document.querySelector('[data-lyrics-focus-title]');
  const lyricsReturnButton = document.querySelector('[data-lyrics-return]');
  const lyricsMoreToggle = document.querySelector('[data-lyrics-more-toggle]');
  const lyricsMoreDrawer = document.querySelector('[data-lyrics-more-drawer]');
  const lyricsMoreClose = document.querySelector('[data-lyrics-more-close]');
  const lyricsMoreAbout = document.querySelector('[data-lyrics-more-about]');
  const lyricsMoreCredits = document.querySelector('[data-lyrics-more-credits]');
  const lyricsTabs = Array.from(document.querySelectorAll('[data-lyrics-tab]'));
  const lyricsExpandToggle = document.querySelector('[data-lyrics-expand]');
  let activeLyricsTab = 'lyrics';
  let activeTrackId = '';
  let activeTrack = null;
  let lyricsLoadToken = 0;
  let loadedLyricsPath = '';
  const buttonListenerStatus = {};
  let isLyricsExpanded = false;
  let isLyricsMoreOpen = false;
  let lyricEntries = [];
  let lyricTiming = [];
  let activeLyricIndex = -1;
  let currentLyricsPlayer = null;
  let currentLyricsLrcPath = '';
  let isExpandedSeekingWithPointer = false;
  let isVinylPlaying = false;
  const lyricsCache = new Map();
  const lyricsOffsets = {
    consolation: 0,
    laGentillesse: 0,
    wonderful: 0,
    womanifesto: 0,
    paranoiaPersecutive: 0
  };
  const lyricsTrackIds = {
    consolation: 'consolation',
    gentillesse: 'laGentillesse',
    wonderful: 'wonderful',
    womanifesto: 'womanifesto',
    'paranoia-persecutive': 'paranoiaPersecutive'
  };
  const lyricsSourceMap = {
    consolation: '/lyrics/consolation.lrc',
    gentillesse: '/lyrics/la-gentillesse.lrc',
    wonderful: '/lyrics/wonderful.lrc',
    womanifesto: '/lyrics/womanifesto.lrc'
  };
  let lyricsAnimationFrame = 0;
  let lastLyricsDiagnosticsTime = 0;
  let lyricsDebugPanel = null;
  let lyricsDebugPanelTimer = 0;
  let lastLyricsScrollRequest = { triggered: false, scrolled: false, targetTop: 0 };
  let lastLyricsScrollTime = 0;
  const LYRICS_DEBUG_STORAGE_KEY = 'carineLyricsDebug';
  const LYRICS_DEBUG_QUERY_KEY = 'lyricsDebug';
  const isAudioDebugEnabled = ['localhost', '127.0.0.1', ''].includes(window.location.hostname)
    || new URLSearchParams(window.location.search).has('debugAudio');
  const VINYL_DEBUG_STORAGE_KEY = 'carineVinylDebug';
  const VINYL_DEBUG_QUERY_KEY = 'vinylDebug';
  const isVinylDebugEnabled = () => {
    try {
      if (new URLSearchParams(window.location.search).get(VINYL_DEBUG_QUERY_KEY) === 'true') return true;
      return window.localStorage.getItem(VINYL_DEBUG_STORAGE_KEY) === 'true';
    } catch (error) {
      return false;
    }
  };


  const collectAudioDiagnostics = (audio = activePlayer ? getAudio(activePlayer) : null) => ({
    platform,
    userAgent,
    maxTouchPoints: window.navigator.maxTouchPoints || 0,
    isAppleTouchDevice,
    isIosWebKit,
    visibilityState: document.visibilityState,
    audioContextState: getAudioContextState(),
    audioReadyState: audio?.readyState ?? 'none',
    audioPaused: audio?.paused ?? true,
    audioEnded: audio?.ended ?? false,
    audioCurrentTime: Number.isFinite(audio?.currentTime) ? Math.round(audio.currentTime * 1000) / 1000 : 0,
    analyserFlatFrames: visualizerController?.flatFrames ?? 0,
    visualizerWidth: visualizerController?.cssWidth ?? 0,
    visualizerHeight: visualizerController?.cssHeight ?? 0,
    activeVisualizationMode: selectedVisualizationStyle,
    renderedVisualizationMode: selectedVisualizationStyle,
    analyserFlat: visualizerController?.analyserFlat ?? true,
    fallbackActive: visualizerController?.fallbackActive ?? false
  });

  const logAudioDiagnostics = (event, details = {}) => {
    if (!isAudioDebugEnabled || !window.console || typeof window.console.info !== 'function') {
      return;
    }

    window.console.info('[music audio]', { event, ...collectAudioDiagnostics(details.audio), ...details });
  };

  const getVerifiedAudioSource = (player) => (player?.dataset.audioSrc || '').trim();
  const getTrackArtworkFit = (player) => (player?.dataset.trackArtworkFit === 'contain' ? 'contain' : 'cover');

  const syncArtworkFit = (image, player) => {
    if (!image) return;
    image.dataset.artworkFit = getTrackArtworkFit(player);
  };

  const applyResolvedAudioSource = (player, audio) => {
    const verifiedSource = getVerifiedAudioSource(player);

    if (!audio || !verifiedSource) {
      return '';
    }

    audio.crossOrigin = 'anonymous';
    audio.setAttribute('crossorigin', 'anonymous');
    audio.preload = 'metadata';
    audio.playsInline = true;
    audio.setAttribute('playsinline', '');
    audio.setAttribute('webkit-playsinline', '');

    if (audio.getAttribute('src') !== verifiedSource) {
      audio.src = verifiedSource;
    }

    logAudioDiagnostics('selected-source', {
      track: getTrackTitle(player),
      selectedSrc: verifiedSource
    });

    return verifiedSource;
  };

  const getStoredPlayerState = () => {
    try {
      const storedState = JSON.parse(window.localStorage.getItem(PLAYER_STORAGE_KEY) || '{}');

      if (storedState.playlistVersion && storedState.playlistVersion !== PLAYLIST_VERSION) {
        clearVersionedPlaylistState();
        return {};
      }

      if (!storedState.playlistVersion && Object.keys(storedState).length > 0) {
        clearVersionedPlaylistState();
        return {};
      }

      return storedState;
    } catch (error) {
      clearVersionedPlaylistState();
      return {};
    }
  };

  const persistPlayerState = () => {
    try {
      const activeIndex = activePlayer ? musicPlayers.indexOf(activePlayer) : 0;
      const audio = activePlayer ? getAudio(activePlayer) : null;
      window.localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify({
        playlistVersion: PLAYLIST_VERSION,
        activeTrackId: activePlayer?.dataset.trackId || CARINE_MUSIC_PLAYLIST[0]?.id || '',
        activeIndex: Math.max(activeIndex, 0),
        currentTime: audio ? Math.floor(audio.currentTime) : 0,
        volume: mini?.volume ? Number(mini.volume.value) : 0.85,
        shuffleEnabled,
        repeatMode
      }));
    } catch (error) {
      // Storage can be unavailable in restricted browsing contexts.
    }
  };

  const setAccessibleControlLabel = (button, label) => {
    if (!button) return;
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
  };

  const updateCommandButtons = () => {
    const shuffleLabel = translate(shuffleEnabled ? 'music.shuffleOn' : 'music.shuffle');
    [shuffleButton, mobileShuffle, miniShuffle].forEach((button) => {
      if (!button) return;
      button.setAttribute('aria-pressed', String(shuffleEnabled));
      setAccessibleControlLabel(button, shuffleLabel);
      if (!button.querySelector('.control-icon, svg')) button.textContent = shuffleLabel;
      button.classList.toggle('is-active', shuffleEnabled);
    });

    const repeatLabelKey = repeatMode === 'one' ? 'music.repeatOne' : repeatMode === 'all' ? 'music.repeatAll' : 'music.repeatOff';
    const repeatLabel = translate(repeatLabelKey);
    [repeatButton, mobileRepeat, miniRepeat].forEach((button) => {
      if (!button) return;
      button.dataset.repeatMode = repeatMode;
      button.setAttribute('aria-pressed', String(repeatMode !== 'off'));
      setAccessibleControlLabel(button, repeatLabel);
      if (!button.querySelector('.control-icon, svg')) button.textContent = repeatLabel;
      button.classList.toggle('is-active', repeatMode !== 'off');
      button.classList.toggle('is-repeat-one', repeatMode === 'one');
    });
  };

  const resolveSiteAssetPath = (assetPath) => {
    const normalizedPath = String(assetPath || '').trim();
    if (!normalizedPath) return '';
    if (/^(https?:)?\/\//i.test(normalizedPath) || normalizedPath.startsWith('data:')) return normalizedPath;

    const withoutLeadingSlash = normalizedPath.replace(/^\/+/, '');
    if (normalizedPath.startsWith('/lyrics/') && window.location.pathname.includes('/Carine-Sanadina/')) {
      return `/Carine-Sanadina/${withoutLeadingSlash}`;
    }

    return normalizedPath;
  };

  const parseLyricText = (text) => String(text || '')
    .replace(/\r\n?/g, '\n')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const sectionMatch = line.match(/^\[(.+)]$/);
      return sectionMatch
        ? { type: 'section', text: sectionMatch[1].trim(), raw: line }
        : { type: 'line', text: line, raw: line };
    });

  const getLyricsTrackKey = (player = activePlayer) => {
    const trackId = player?.dataset.trackId || '';
    return lyricsTrackIds[trackId] || trackId;
  };

  const getLyricsOffset = (player = activePlayer) => {
    const trackId = player?.dataset.trackId || '';
    const offsetKey = getLyricsTrackKey(player);
    const offset = lyricsOffsets[offsetKey] ?? lyricsOffsets[trackId] ?? 0;
    return Number.isFinite(Number(offset)) ? Number(offset) : 0;
  };

  const isLyricsDebugEnabled = () => {
    try {
      if (new URLSearchParams(window.location.search).get(LYRICS_DEBUG_QUERY_KEY) === 'true') return true;
      return window.localStorage.getItem(LYRICS_DEBUG_STORAGE_KEY) === 'true';
    } catch (error) {
      return false;
    }
  };

  const roundLyricsTime = (value, precision = 1000) => (Number.isFinite(Number(value))
    ? Math.round(Number(value) * precision) / precision
    : 0);

  const formatLyricsOffset = (offset) => `${offset >= 0 ? '+' : ''}${roundLyricsTime(offset, 100).toFixed(2)}s`;

  const logLyricsDiagnostics = (event, details = {}, { force = false } = {}) => {
    if (!isLyricsDebugEnabled() || !window.console || typeof window.console.info !== 'function') return;
    const now = window.performance?.now?.() || Date.now();
    if (!force && now - lastLyricsDiagnosticsTime < 500) return;
    lastLyricsDiagnosticsTime = now;

    const payload = { event, timestamp: new Date().toISOString(), ...details };
    if (typeof window.console.groupCollapsed === 'function') {
      window.console.groupCollapsed(`[lyrics sync] ${event} · ${payload.activeTrackId || 'no-track'} · ${payload.audioCurrentTime ?? '0'}s`);
      window.console.info(payload);
      window.console.groupEnd();
      return;
    }

    window.console.info('[lyrics sync]', payload);
  };

  /**
   * Precision lyrics calibration workflow (developer-only):
   * 1. Play the song in expanded lyrics mode.
   * 2. Watch the highlighted lyric line against the performed vocal onset.
   * 3. If one line feels early or late, adjust that individual .lrc timestamp by ear.
   * 4. Use lyricsOffsets only for tiny whole-track drift correction.
   * 5. Re-check emotional phrasing, breaths, pickups, and rhythmic emphasis, not just math.
   * 6. Validate tuned .lrc files on iPhone Safari, Android Chrome, and desktop Chrome.
   * 7. Never auto-rewrite or guess corrected timestamps from this debug tooling.
   */

  const parseLrcTimestamp = (minutes, seconds, fraction = '') => {
    const parsedMinutes = Number(minutes);
    const parsedSeconds = Number(seconds);
    if (!Number.isFinite(parsedMinutes) || !Number.isFinite(parsedSeconds)) return null;
    if (parsedMinutes < 0 || parsedSeconds < 0 || parsedSeconds >= 60) return null;
    const normalizedFraction = String(fraction || '').slice(0, 3);
    const fractionSeconds = normalizedFraction ? Number(`0.${normalizedFraction}`) : 0;
    return (parsedMinutes * 60) + parsedSeconds + (Number.isFinite(fractionSeconds) ? fractionSeconds : 0);
  };

  const parseLrcText = (text) => {
    const timedEntries = [];
    const timestampPattern = /\[(\d{1,3}):(\d{2})(?:[.:](\d{1,3}))?]/g;

    String(text || '')
      .replace(/\r\n?/g, '\n')
      .split('\n')
      .forEach((rawLine) => {
        const line = rawLine.trim();
        if (!line) return;

        const timestamps = [...line.matchAll(timestampPattern)];
        if (!timestamps.length) return;

        const textValue = line.replace(timestampPattern, '').trim();
        if (!textValue || /^\[(?:ti|ar|al|au|by|offset|length|re|ve|source):/i.test(textValue)) return;

        const sectionMatch = textValue.match(/^\[(.+)]$/);
        const entryType = sectionMatch ? 'section' : 'line';
        const entryText = sectionMatch ? sectionMatch[1].trim() : textValue;

        timestamps.forEach((timestamp) => {
          const time = parseLrcTimestamp(timestamp[1], timestamp[2], timestamp[3]);
          if (time !== null && entryText) {
            timedEntries.push({ time, endTime: null, text: entryText, raw: textValue, type: entryType });
          }
        });
      });

    const sortedEntries = timedEntries
      .filter((entry) => Number.isFinite(entry.time) && entry.text)
      .sort((a, b) => a.time - b.time || a.text.localeCompare(b.text));

    return sortedEntries.map((entry, index) => ({
      ...entry,
      endTime: Number.isFinite(entry.endTime) ? entry.endTime : (sortedEntries[index + 1]?.time ?? Infinity)
    }));
  };

  const setLyricsMessage = (message) => {
    if (!lyricsScroll) return;
    lyricsScroll.dataset.lyricsMode = 'plain';
    lyricsScroll.innerHTML = `<p class="lyrics-empty">${escapePlaylistText(message)}</p>`;
    lyricsScroll.scrollTop = 0;
  };

  const renderLyrics = () => {
    if (!lyricsScroll) return;
    if (!lyricEntries.length) {
      setLyricsMessage(translate('lyrics.unavailable'));
      return;
    }

    lyricsScroll.innerHTML = lyricEntries.map((entry, index) => {
      if (entry.type === 'section') {
        return `<p class="lyric-section" data-lyric-index="${index}">${escapePlaylistText(entry.text)}</p>`;
      }
      return `<p class="lyric-line" data-lyric-index="${index}">${escapePlaylistText(entry.text)}</p>`;
    }).join('');
    lyricsScroll.scrollTop = 0;
    activeLyricIndex = -1;
  };

  const getTrackForPlayer = (player = activePlayer) => MUSIC_TRACKS_BY_ID.get(player?.dataset.trackId || activeTrackId) || null;
  const getOptionalTranslation = (key) => String(translations[currentLanguage]?.[key] ?? translations[DEFAULT_LANGUAGE]?.[key] ?? '');

  const getTrackAboutContent = (player = activePlayer) => {
    const track = getTrackForPlayer(player);
    if (!track) return translate('lyrics.moreDetails');
    const localizedAbout = track.translationKey
      ? getOptionalTranslation(`${track.translationKey}.about`) || getOptionalTranslation(`${track.translationKey}.description`)
      : '';
    return localizedAbout || track.about || track.synopsis || translate('lyrics.moreDetails');
  };

  const getTrackCreditsContent = (player = activePlayer) => {
    const track = getTrackForPlayer(player);
    if (!track) return translate('tracks.genericCredits');
    const localizedCredits = track.translationKey ? getOptionalTranslation(`${track.translationKey}.credits`) : '';
    return localizedCredits || track.credits || translate('tracks.genericCredits');
  };

  const renderLyricsMoreDetails = (player = activePlayer) => {
    if (!player) return;
    const about = escapePlaylistText(getTrackAboutContent(player)).replace(/\n/g, '<br>');
    const credits = escapePlaylistText(getTrackCreditsContent(player)).replace(/\n/g, '<br>');
    if (lyricsMoreAbout) {
      lyricsMoreAbout.innerHTML = `
        <p class="track-info-kicker">${escapePlaylistText(translate('lyrics.aboutSong'))}</p>
        <p>${about}</p>
      `;
    }
    if (lyricsMoreCredits) {
      lyricsMoreCredits.innerHTML = `
        <p class="track-info-kicker">${escapePlaylistText(translate('lyrics.credits'))}</p>
        <p>${credits}</p>
      `;
    }
  };

  const renderTrackInfo = (player) => {
    if (!lyricsInfoPanel || !player) return;
    const content = activeLyricsTab === 'credits' ? getTrackCreditsContent(player) : getTrackAboutContent(player);
    const formattedContent = escapePlaylistText(content || translate('lyrics.moreDetails')).replace(/\n/g, '<br>');
    lyricsInfoPanel.innerHTML = `
      <p class="track-info-kicker">${escapePlaylistText(translate(activeLyricsTab === 'credits' ? 'lyrics.credits' : 'lyrics.aboutSong'))}</p>
      <p>${formattedContent}</p>
    `;
    renderLyricsMoreDetails(player);
  };

  const setLyricsMoreOpen = (isOpen) => {
    isLyricsMoreOpen = Boolean(isOpen) && Boolean(isLyricsExpanded);
    lyricsMoreDrawer?.toggleAttribute('hidden', !isLyricsMoreOpen);
    lyricsMoreDrawer?.classList.toggle('is-open', isLyricsMoreOpen);
    lyricsPanel?.classList.toggle('is-more-open', isLyricsMoreOpen);
    lyricsMoreToggle?.setAttribute('aria-expanded', String(isLyricsMoreOpen));
    if (isLyricsMoreOpen && activePlayer) renderLyricsMoreDetails(activePlayer);
  };

  const syncLyricsExpandMode = () => {
    const canExpandLyrics = activeLyricsTab === 'lyrics';
    const isInlinePlayer = mobilePlayer?.classList.contains('inline-listening-experience');
    const isPlayerOpen = isInlinePlayer || (mobilePlayer?.classList.contains('is-open') ?? true);
    const isExpanded = canExpandLyrics && isLyricsExpanded && isPlayerOpen;
    if (!isExpanded && isLyricsMoreOpen) setLyricsMoreOpen(false);
    mobilePlayer?.classList.toggle('is-lyrics-expanded', isExpanded);
    expandedPlayerCard?.classList.toggle('is-lyrics-expanded', isExpanded);
    lyricsPanel?.classList.toggle('is-lyrics-expanded', isExpanded);
    document.body.classList.toggle('lyrics-expanded-open', isExpanded);
    document.body.classList.toggle('lyrics-expanded', isExpanded);

    if (lyricsFocusBar) lyricsFocusBar.hidden = !isExpanded;
    if (lyricsFocusTitle && activePlayer) lyricsFocusTitle.textContent = getTrackTitle(activePlayer);
    if (lyricsExpandToggle) {
      lyricsExpandToggle.hidden = !canExpandLyrics || isExpanded;
      lyricsExpandToggle.setAttribute('aria-expanded', String(isExpanded));
      lyricsExpandToggle.textContent = translate(isExpanded ? 'lyrics.return' : 'lyrics.expand');
    }
    lyricsMoreToggle?.setAttribute('aria-expanded', String(isLyricsMoreOpen && isExpanded));
  };

  const setLyricsExpanded = (expanded) => {
    isLyricsExpanded = Boolean(expanded);
    syncLyricsExpandMode();
    if (!isLyricsExpanded) setLyricsMoreOpen(false);
    if (isLyricsExpanded && activeLyricsTab === 'lyrics') {
      requestAnimationFrame(() => lyricsScroll?.scrollTo({ top: lyricsScroll.scrollTop, behavior: reduceMotion ? 'auto' : 'smooth' }));
    }
  };

  const setLyricsTab = (tabName) => {
    activeLyricsTab = ['lyrics', 'about', 'credits'].includes(tabName) ? tabName : 'lyrics';
    lyricsTabs.forEach((tab) => {
      const isActive = tab.dataset.lyricsTab === activeLyricsTab;
      tab.classList.toggle('is-active', isActive);
      tab.setAttribute('aria-selected', String(isActive));
    });
    if (lyricsScroll) lyricsScroll.hidden = activeLyricsTab !== 'lyrics';
    if (lyricsInfoPanel) lyricsInfoPanel.hidden = activeLyricsTab === 'lyrics';
    syncLyricsExpandMode();
    if (activePlayer && activeLyricsTab !== 'lyrics') renderTrackInfo(activePlayer);
    if (activePlayer && activeLyricsTab === 'lyrics') updateActiveLyric(getAudio(activePlayer));
  };

  const fetchCachedText = async (path) => {
    if (!path) return '';
    const resolvedPath = resolveSiteAssetPath(path);

    if (!lyricsCache.has(resolvedPath)) {
      const promise = (async () => {
        try {
          const versionedPath = new URL(resolvedPath, window.location.href);
          versionedPath.searchParams.set('v', APP_VERSION);

          const response = await fetch(versionedPath, { cache: 'no-cache' });
          if (!response.ok) throw new Error(`Lyrics request failed: ${response.status}`);

          return await response.text();
        } catch (error) {
          lyricsCache.delete(resolvedPath);
          throw error;
        }
      })();

      lyricsCache.set(resolvedPath, promise);
    }

    return lyricsCache.get(resolvedPath);
  };

  const applyTimedLyrics = (timedLyrics, player = activePlayer, lrcPath = '') => {
    lyricEntries = timedLyrics.map((entry) => ({ type: entry.type || 'line', text: entry.text, time: entry.time, endTime: entry.endTime }));
    lyricTiming = timedLyrics
      .map((entry, index) => ({ index, time: entry.time, endTime: entry.endTime, type: entry.type || 'line', text: entry.text }))
      .filter((entry) => entry.type === 'line');
    if (lyricsScroll) lyricsScroll.dataset.lyricsMode = 'timed';
    renderLyrics();
    logLyricsDiagnostics('loaded', {
      activeTrackId: player?.dataset.trackId || '',
      activeTrackTitle: player ? getTrackTitle(player) : '',
      loadedLrcFile: lrcPath,
      offsetValue: getLyricsOffset(player),
      totalParsedLines: lyricTiming.length
    });
  };

  const applyFallbackLyrics = (lyricsText) => {
    stopLyricsAnimationLoop();
    lyricEntries = parseLyricText(lyricsText);
    lyricTiming = [];
    if (lyricsScroll) lyricsScroll.dataset.lyricsMode = 'plain';
    renderLyrics();
  };

  const getActiveLyricEntry = () => lyricEntries[activeLyricIndex] || null;
  const getTimingForLyricIndex = (index) => lyricTiming.find((entry) => entry.index === index) || null;
  const getAdjacentLyricText = (index, direction) => {
    const currentTimingIndex = lyricTiming.findIndex((entry) => entry.index === index);
    const adjacentTiming = lyricTiming[currentTimingIndex + direction];
    return adjacentTiming ? lyricEntries[adjacentTiming.index]?.text || adjacentTiming.text || '' : '';
  };

  const collectLyricsDiagnostics = (audio = activePlayer ? getAudio(activePlayer) : null, details = {}) => {
    const player = currentLyricsPlayer || activePlayer;
    const currentTime = Number(audio?.currentTime) || 0;
    const offsetValue = getLyricsOffset(player);
    const effectiveTime = currentTime + offsetValue;
    const activeEntry = getActiveLyricEntry();
    const activeTiming = getTimingForLyricIndex(activeLyricIndex);
    const nextTimingIndex = lyricTiming.findIndex((entry) => entry.index === activeLyricIndex) + 1;
    const nextTiming = nextTimingIndex > 0 ? lyricTiming[nextTimingIndex] : null;

    return {
      activeTrackId: player?.dataset.trackId || '',
      activeTrackTitle: player ? getTrackTitle(player) : '',
      audioCurrentTime: roundLyricsTime(currentTime),
      effectiveTime: roundLyricsTime(effectiveTime),
      activeLyricIndex,
      activeLyricText: activeEntry?.text || '',
      previousLyricText: getAdjacentLyricText(activeLyricIndex, -1),
      nextLyricText: getAdjacentLyricText(activeLyricIndex, 1),
      loadedLrcFile: currentLyricsLrcPath || player?.dataset.trackLyricsLrc || '',
      offsetValue: roundLyricsTime(offsetValue),
      totalParsedLines: lyricTiming.length,
      lineStartTime: activeTiming ? roundLyricsTime(activeTiming.time) : null,
      nextLineStartTime: nextTiming ? roundLyricsTime(nextTiming.time) : null,
      activeAudioExists: Boolean(audio),
      activeAudioMatchesTrack: Boolean(audio && player && audio === getAudio(player)),
      lyricsMode: lyricTiming.length ? 'timed' : 'static',
      playbackState: !audio ? 'no-audio' : audio.ended ? 'ended' : audio.paused ? 'paused' : 'playing',
      syncEngineRunning: Boolean(lyricsAnimationFrame),
      lastScrollTime: lastLyricsScrollTime || null,
      autoScrollTriggered: Boolean(details.autoScrollTriggered),
      activeLineChanged: Boolean(details.activeLineChanged),
      lyricsContainerScrolled: Boolean(details.lyricsContainerScrolled),
      ...details
    };
  };

  const renderLyricsDebugPanel = () => {
    if (!lyricsDebugPanel || !isLyricsDebugEnabled()) return;
    const diagnostics = collectLyricsDiagnostics(activePlayer ? getAudio(activePlayer) : null);
    const rows = [
      ['currentTime', `${diagnostics.audioCurrentTime}s`],
      ['effectiveTime', `${diagnostics.effectiveTime}s`],
      ['active index', diagnostics.activeLyricIndex],
      ['active lyric', diagnostics.activeLyricText || '—'],
      ['global offset', formatLyricsOffset(diagnostics.offsetValue)],
      ['line start', diagnostics.lineStartTime ?? '—'],
      ['next start', diagnostics.nextLineStartTime ?? '—'],
      ['playback', diagnostics.playbackState]
    ];

    lyricsDebugPanel.querySelector('[data-lyrics-debug-body]').innerHTML = rows.map(([label, value]) => `
      <div><span>${escapePlaylistText(label)}</span><b>${escapePlaylistText(value)}</b></div>
    `).join('');
  };

  const setupLyricsDebugPanel = () => {
    if (!isLyricsDebugEnabled() || lyricsDebugPanel) return;
    lyricsDebugPanel = document.createElement('aside');
    lyricsDebugPanel.className = 'lyrics-debug-panel';
    lyricsDebugPanel.setAttribute('aria-live', 'polite');
    lyricsDebugPanel.setAttribute('aria-label', translate('lyrics.debug.ariaLabel'));
    lyricsDebugPanel.innerHTML = `
      <header>
        <strong>${escapePlaylistText(translate('lyrics.debug.title'))}</strong>
        <button type="button" data-lyrics-debug-close aria-label="${escapePlaylistText(translate('lyrics.debug.close'))}">×</button>
      </header>
      <div data-lyrics-debug-body></div>
    `;
    document.body.appendChild(lyricsDebugPanel);
    lyricsDebugPanel.querySelector('[data-lyrics-debug-close]')?.addEventListener('click', () => {
      window.clearInterval(lyricsDebugPanelTimer);
      lyricsDebugPanelTimer = 0;
      lyricsDebugPanel.remove();
      lyricsDebugPanel = null;
    });
    renderLyricsDebugPanel();
    lyricsDebugPanelTimer = window.setInterval(renderLyricsDebugPanel, 250);
  };

  const logActiveLyricChangeDiagnostics = ({ previousIndex, nextIndex, audio, currentTime, effectiveTime }) => {
    if (!isLyricsDebugEnabled()) return;
    const previousTiming = getTimingForLyricIndex(previousIndex);
    const currentTiming = getTimingForLyricIndex(nextIndex);
    const deltaFromPlaybackTime = currentTiming ? currentTime - currentTiming.time : 0;
    const activationTiming = Math.abs(deltaFromPlaybackTime) <= 0.05
      ? 'on-time'
      : deltaFromPlaybackTime < 0 ? 'early' : 'late';

    logLyricsDiagnostics('active-line-changed', collectLyricsDiagnostics(audio, {
      previousLineTimestamp: previousTiming ? roundLyricsTime(previousTiming.time) : null,
      currentLineTimestamp: currentTiming ? roundLyricsTime(currentTiming.time) : null,
      deltaFromActualPlaybackTime: roundLyricsTime(deltaFromPlaybackTime),
      activationTiming,
      audioCurrentTime: roundLyricsTime(currentTime),
      effectiveTime: roundLyricsTime(effectiveTime),
      activeLineChanged: true
    }), { force: true });
  };

  const loadLyricsForPlayer = async (player) => {
    if (!player || !lyricsScroll) return;
    const requestedTrackId = player.dataset.trackId || '';
    const requestToken = lyricsLoadToken;
    const track = MUSIC_TRACKS_BY_ID.get(requestedTrackId);
    currentLyricsPlayer = player;
    currentLyricsLrcPath = '';
    loadedLyricsPath = '';
    stopLyricsAnimationLoop();
    activeLyricIndex = -1;
    lyricEntries = [];
    lyricTiming = [];
    setLyricsMessage(t('lyrics.loading', 'Loading lyrics…'));

    const mappedLrcPath = lyricsSourceMap[requestedTrackId] || '';
    const lrcPath = mappedLrcPath || track?.lyricsPath || player.dataset.trackLyricsLrc || '';
    if (lrcPath) {
      try {
        const lrcLyrics = parseLrcText(await fetchCachedText(lrcPath));
        if (requestToken !== lyricsLoadToken || activeTrackId !== requestedTrackId || currentLyricsPlayer !== player) return;
        if (lrcLyrics.length) {
          currentLyricsLrcPath = lrcPath;
          loadedLyricsPath = lrcPath;
          applyTimedLyrics(lrcLyrics, player, lrcPath);
          updateActiveLyric(getAudio(player), { forceScroll: true, event: 'load' });
          startLyricsAnimationLoop(getAudio(player));
          return;
        }
      } catch (error) {
        logLyricsDiagnostics('load-failed', {
          activeTrackId: player.dataset.trackId || '',
          activeTrackTitle: getTrackTitle(player),
          loadedLrcFile: lrcPath,
          message: error?.message || String(error)
        });
      }
    }

    const lyricsPath = track?.staticLyricsPath || player.dataset.trackLyrics || '';
    if (!resolveSiteAssetPath(lyricsPath)) {
      lyricEntries = [];
      lyricTiming = [];
      setLyricsMessage(t(track?.lyricsFallbackKey || 'lyrics.unavailable', translate('lyrics.unavailable')));
      return;
    }

    try {
      const fallbackLyrics = await fetchCachedText(lyricsPath);
      if (requestToken !== lyricsLoadToken || activeTrackId !== requestedTrackId || currentLyricsPlayer !== player) return;
      loadedLyricsPath = lyricsPath;
      applyFallbackLyrics(fallbackLyrics);
    } catch (error) {
      if (requestToken !== lyricsLoadToken || activeTrackId !== requestedTrackId || currentLyricsPlayer !== player) return;
      lyricEntries = [];
      lyricTiming = [];
      setLyricsMessage(t(track?.lyricsFallbackKey || 'lyrics.unavailable', translate('lyrics.unavailable')));
    }
  };

  const scrollActiveLyricIntoFocus = (line, { forceScroll = false } = {}) => {
    lastLyricsScrollRequest = { triggered: false, scrolled: false, targetTop: lyricsScroll?.scrollTop || 0 };
    if (!lyricsScroll || !line) return false;

    const scrollRect = lyricsScroll.getBoundingClientRect();
    const lineRect = line.getBoundingClientRect();
    const comfortableTop = scrollRect.top + (scrollRect.height * 0.34);
    const comfortableBottom = scrollRect.top + (scrollRect.height * 0.66);
    const isComfortable = lineRect.top >= comfortableTop && lineRect.bottom <= comfortableBottom;

    if (!forceScroll && isComfortable) return false;

    const targetTop = lyricsScroll.scrollTop
      + (lineRect.top - scrollRect.top)
      - ((scrollRect.height - lineRect.height) * 0.48);
    const maxTop = Math.max(0, lyricsScroll.scrollHeight - lyricsScroll.clientHeight);
    const boundedTop = Math.min(Math.max(targetTop, 0), maxTop);
    const shouldMove = Math.abs(boundedTop - lyricsScroll.scrollTop) > 2;

    lastLyricsScrollRequest = {
      triggered: true,
      scrolled: shouldMove,
      targetTop: roundLyricsTime(boundedTop)
    };

    if (!shouldMove) return false;

    lastLyricsScrollTime = Date.now();
    lyricsScroll.scrollTo({
      top: boundedTop,
      behavior: reduceMotion ? 'auto' : 'smooth'
    });
    return true;
  };

  const updateActiveLyric = (audio, { forceScroll = false, event = 'sync' } = {}) => {
    if (!lyricsScroll || activeLyricsTab !== 'lyrics' || !lyricTiming.length || !audio) return;
    setupLyricsDebugPanel();

    const currentTime = Number(audio.currentTime) || 0;
    const offsetValue = getLyricsOffset(currentLyricsPlayer || activePlayer);
    const effectiveTime = currentTime + offsetValue;
    let nextIndex = -1;

    let low = 0;
    let high = lyricTiming.length - 1;
    while (low <= high) {
      const middle = Math.floor((low + high) / 2);
      if (lyricTiming[middle].time <= effectiveTime) {
        nextIndex = lyricTiming[middle].index;
        low = middle + 1;
      } else {
        high = middle - 1;
      }
    }

    const previousIndex = activeLyricIndex;
    const shouldUpdateClasses = nextIndex !== activeLyricIndex;
    let autoScrollFired = false;
    lastLyricsScrollRequest = { triggered: false, scrolled: false, targetTop: lyricsScroll.scrollTop };

    if (shouldUpdateClasses) {
      activeLyricIndex = nextIndex;
      lyricsScroll.querySelectorAll('[data-lyric-index]').forEach((line) => {
        const lineIndex = Number(line.dataset.lyricIndex);
        const isActive = lineIndex === activeLyricIndex;
        line.classList.toggle('is-active', isActive);
        line.classList.toggle('is-past', lineIndex < activeLyricIndex);
        line.classList.toggle('is-upcoming', lineIndex > activeLyricIndex);
        if (isActive) {
          autoScrollFired = scrollActiveLyricIntoFocus(line, { forceScroll });
        }
      });
      logActiveLyricChangeDiagnostics({ previousIndex, nextIndex, audio, currentTime, effectiveTime });
    } else if (forceScroll && activeLyricIndex >= 0) {
      const activeLine = lyricsScroll.querySelector(`[data-lyric-index="${activeLyricIndex}"]`);
      autoScrollFired = scrollActiveLyricIntoFocus(activeLine, { forceScroll });
    }

    logLyricsDiagnostics(event, collectLyricsDiagnostics(audio, {
      audioCurrentTime: roundLyricsTime(currentTime),
      effectiveTime: roundLyricsTime(effectiveTime),
      offsetValue: roundLyricsTime(offsetValue),
      autoScrollTriggered: autoScrollFired || lastLyricsScrollRequest.triggered,
      activeLineChanged: shouldUpdateClasses,
      lyricsContainerScrolled: autoScrollFired || lastLyricsScrollRequest.scrolled
    }));
    renderLyricsDebugPanel();
  };

  function stopLyricsAnimationLoop() {
    if (lyricsAnimationFrame) {
      cancelAnimationFrame(lyricsAnimationFrame);
      lyricsAnimationFrame = 0;
    }
  }

  function startLyricsAnimationLoop(audio = activePlayer ? getAudio(activePlayer) : null) {
    stopLyricsAnimationLoop();
    if (!audio || audio.paused || audio.ended || !lyricTiming.length) return;

    const tick = () => {
      updateActiveLyric(audio, { event: 'raf' });
      lyricsAnimationFrame = (!audio.paused && !audio.ended) ? requestAnimationFrame(tick) : 0;
    };

    lyricsAnimationFrame = requestAnimationFrame(tick);
  }

  const updateLyricsOffset = (delta) => {
    if (!isLyricsDebugEnabled()) return;
    const player = currentLyricsPlayer || activePlayer;
    const offsetKey = getLyricsTrackKey(player);
    if (!offsetKey) return;
    lyricsOffsets[offsetKey] = roundLyricsTime((lyricsOffsets[offsetKey] || 0) + delta, 100);
    const audio = player ? getAudio(player) : null;
    if (audio) updateActiveLyric(audio, { forceScroll: true, event: 'offset-adjusted' });
    window.console?.info?.(`Updated offset for ${player?.dataset.trackId || offsetKey}: ${formatLyricsOffset(lyricsOffsets[offsetKey])}`);
    renderLyricsDebugPanel();
  };

  const handleLyricsCalibrationKeys = (event) => {
    if (!isLyricsDebugEnabled() || event.defaultPrevented) return;
    if (!['ArrowUp', 'ArrowDown'].includes(event.key)) return;
    const target = event.target;
    if (target?.closest?.('input, textarea, select, [contenteditable="true"]')) return;

    event.preventDefault();
    const step = event.shiftKey ? 0.10 : 0.05;
    updateLyricsOffset(event.key === 'ArrowUp' ? step : -step);
  };

  window.debugLyricsSync = () => {
    const diagnostics = collectLyricsDiagnostics(activePlayer ? getAudio(activePlayer) : null);
    const report = { ...diagnostics };
    window.console?.groupCollapsed?.('[lyrics sync] manual debugLyricsSync()');
    window.console?.info?.(report);
    window.console?.groupEnd?.();
    return report;
  };

  document.addEventListener('keydown', handleLyricsCalibrationKeys);
  setupLyricsDebugPanel();

  const syncExpandedProgress = (audio) => {
    if (!expandedProgress || !audio) return;
    const fallbackDuration = activePlayer ? getFallbackDuration(activePlayer) : 0;
    const safeDuration = getSafeDuration(audio, fallbackDuration);
    const seekDuration = getSafeDuration(audio, 0);
    const max = safeDuration > 0 ? safeDuration : 100;
    if (expandedCurrent) expandedCurrent.textContent = formatTime(audio.currentTime);
    if (expandedDuration) expandedDuration.textContent = safeDuration > 0 ? formatTime(safeDuration) : '0:00';
    expandedProgress.max = String(max);
    expandedProgress.value = String(Math.min(audio.currentTime, max));
    expandedProgress.disabled = seekDuration <= 0;
    expandedProgress.setAttribute('aria-disabled', String(seekDuration <= 0));
    setRangeFill(expandedProgress, expandedProgress.value, expandedProgress.max);
  };

  const syncStage = (player) => {
    if (!player) return;
    const title = getTrackTitle(player);
    if (stageCover) {
      stageCover.src = player.dataset.trackCover || '';
      syncArtworkFit(stageCover, player);
    }
    if (stageTitle) stageTitle.textContent = title;
    if (stageArtist) stageArtist.textContent = player.dataset.trackArtist || 'Carine Sanadina';
    if (mobileCover) {
      mobileCover.src = player.dataset.trackCover || '';
      mobileCover.alt = `${title} ${translate('audio.coverArt')}`;
      syncArtworkFit(mobileCover, player);
    }
    if (mobileTitle) mobileTitle.textContent = title;
    if (lyricsFocusTitle) lyricsFocusTitle.textContent = title;
    if (mobileArtist) mobileArtist.textContent = player.dataset.trackArtist || 'Carine Sanadina';
    if (consoleSynopsis) consoleSynopsis.textContent = getTrackAboutContent(player) || translate('console.selectSynopsis');
    if (activeLyricsTab !== 'lyrics') renderTrackInfo(player);
    renderLyricsMoreDetails(player);
    if (currentLyricsPlayer !== player) loadLyricsForPlayer(player);
    syncTransportButtons(getAudio(player));
    resizeVisualizerSurface();
  };

  const setActiveTrack = (player) => {
    const nextTrackId = player?.dataset.trackId || '';
    const trackChanged = nextTrackId !== activeTrackId;
    activePlayer = player || null;
    activeTrackId = nextTrackId;
    activeTrack = MUSIC_TRACKS_BY_ID.get(activeTrackId) || null;
    if (trackChanged) {
      lyricsLoadToken += 1;
      currentLyricsPlayer = null;
      loadedLyricsPath = '';
      lyricEntries = [];
      lyricTiming = [];
      setLyricsMessage(activeTrack ? t('lyrics.loading', 'Loading lyrics…') : translate('lyrics.selectTrack'));
    }
    musicPlayers.forEach((track) => track.classList.toggle('is-active', track === player));
    expandedTrackOptions.forEach((option) => {
      const isActive = Boolean(player && option.dataset.trackId === player.dataset.trackId);
      option.classList.toggle('is-active', isActive);
      option.setAttribute('aria-current', isActive ? 'true' : 'false');
    });
    syncStage(player);
    window.dispatchEvent(new CustomEvent('carine:trackchange', { detail: { trackId: player?.dataset.trackId || '' } }));
  };

  const readVisualizerPreference = () => {
    try {
      const stored = window.localStorage.getItem(VISUALIZER_STORAGE_KEY);
      if (stored === 'true') return true;
      if (stored === 'false') return false;
    } catch (error) {
      // Storage can be unavailable in restricted browsing contexts.
    }

    return !reduceMotion;
  };

  const writeVisualizerPreference = (isEnabled) => {
    try {
      window.localStorage.setItem(VISUALIZER_STORAGE_KEY, isEnabled ? 'true' : 'false');
    } catch (error) {
      // Storage can be unavailable in restricted browsing contexts.
    }
  };

  const isCoarsePointerDevice = () => Boolean(coarsePointerQuery && coarsePointerQuery.matches);

  const VISUALIZATION_STYLES = [
    { id: 'orb', labelKey: 'music.visualizerStyle.orb' },
    { id: 'waveform', labelKey: 'music.visualizerStyle.waveform' },
    { id: 'particle-field', labelKey: 'music.visualizerStyle.particle-field' },
    { id: 'wireframe-lattice', labelKey: 'music.visualizerStyle.wireframe-lattice' },
    { id: 'waveform-tunnel', labelKey: 'music.visualizerStyle.waveform-tunnel' },
    { id: 'holographic-rings', labelKey: 'music.visualizerStyle.holographic-rings' }
  ];
  const DEFAULT_VISUALIZATION_STYLE = 'waveform';
  const normalizeVisualizationStyle = (styleId) => {
    const normalizedStyleId = String(styleId || '');
    const compactStyleId = normalizedStyleId.replace(/[\s-]/g, '').toLowerCase();

    if (compactStyleId === 'neonbars') {
      return 'waveform';
    }

    return VISUALIZATION_STYLES.some((style) => style.id === normalizedStyleId)
      ? normalizedStyleId
      : DEFAULT_VISUALIZATION_STYLE;
  };

  const readVisualizerStylePreference = () => {
    try {
      const stored = window.localStorage.getItem(VISUALIZER_STYLE_STORAGE_KEY);
      const normalized = normalizeVisualizationStyle(stored);
      if (stored && normalized !== stored) {
        window.localStorage.setItem(VISUALIZER_STYLE_STORAGE_KEY, normalized);
      }
      return normalized;
    } catch (error) {
      // Storage can be unavailable in restricted browsing contexts.
    }

    return DEFAULT_VISUALIZATION_STYLE;
  };

  const writeVisualizerStylePreference = (styleId) => {
    try {
      window.localStorage.setItem(VISUALIZER_STYLE_STORAGE_KEY, styleId);
    } catch (error) {
      // Storage can be unavailable in restricted browsing contexts.
    }
  };

  let visualizerEnabled = Boolean(visualizerCanvas && readVisualizerPreference());
  let selectedVisualizationStyle = readVisualizerStylePreference();

  const WAVEFORM_UNIT_COUNT = 64;
  const WAVEFORM_SAMPLE_COUNT = 128;
  const frequencyBinCount = 128;
  const VISUALIZER_DEBUG_STORAGE_KEY = 'carineVisualizerDebug';
  const VISUALIZER_FORCE_MODE_STORAGE_KEY = 'carineVisualizerForceMode';
  const VISUALIZER_DEBUG_QUERY_KEY = 'visualizerDebug';
  const isVisualizerDebugEnabled = () => {
    try {
      if (new URLSearchParams(window.location.search).get(VISUALIZER_DEBUG_QUERY_KEY) === 'true') return true;
      return window.localStorage.getItem(VISUALIZER_DEBUG_STORAGE_KEY) === 'true';
    } catch (error) {
      return false;
    }
  };

  const setVisualizerHelper = (message = '') => {
    if (!visualizerHelper) return;
    visualizerHelper.textContent = message;
  };

  const parseCssScaleY = (transformValue = '') => {
    if (!transformValue || transformValue === 'none') return null;
    const matrix3d = transformValue.match(/^matrix3d\(([^)]+)\)$/);
    if (matrix3d) {
      const values = matrix3d[1].split(',').map((value) => Number(value.trim()));
      return Number.isFinite(values[5]) ? values[5] : null;
    }
    const matrix = transformValue.match(/^matrix\(([^)]+)\)$/);
    if (matrix) {
      const values = matrix[1].split(',').map((value) => Number(value.trim()));
      return Number.isFinite(values[3]) ? values[3] : null;
    }
    return null;
  };

  const getBlockingRenderStyles = (element) => {
    if (!element) return ['missing-element'];
    const computed = window.getComputedStyle(element);
    const blockers = [];
    if (computed.display === 'none') blockers.push('display:none');
    if (computed.visibility === 'hidden' || computed.visibility === 'collapse') blockers.push(`visibility:${computed.visibility}`);
    if (Number(computed.opacity) <= 0.01) blockers.push(`opacity:${computed.opacity}`);
    if (computed.clipPath && computed.clipPath !== 'none') blockers.push(`clip-path:${computed.clipPath}`);
    if ((computed.overflow === 'hidden' || computed.overflowX === 'hidden' || computed.overflowY === 'hidden') && element.getBoundingClientRect().height < 2) blockers.push('overflow-hidden-zero-height');
    return blockers;
  };

  const getRenderSnapshot = (element) => {
    if (!element) return { found: false };
    const styles = window.getComputedStyle(element);
    const rect = element.getBoundingClientRect?.() || { width: 0, height: 0 };
    return {
      found: true,
      tag: element.tagName.toLowerCase(),
      className: element.className || '',
      display: styles.display,
      visibility: styles.visibility,
      opacity: styles.opacity,
      overflow: `${styles.overflow}/${styles.overflowX}/${styles.overflowY}`,
      clipPath: styles.clipPath || styles.webkitClipPath || 'none',
      size: `${Math.round(rect.width)} × ${Math.round(rect.height)}`
    };
  };

  const getAncestorRenderSnapshots = (element, maxDepth = 4) => {
    const snapshots = [];
    let current = element?.parentElement || null;
    while (current && snapshots.length < maxDepth) {
      snapshots.push(getRenderSnapshot(current));
      current = current.parentElement;
    }
    return snapshots;
  };

  const setupVisualizationStyleSelector = () => {
    if (!visualizerStyleSelect) return;
    visualizerStyleSelect.innerHTML = VISUALIZATION_STYLES.map((style) => (
      `<option value="${style.id}">${escapePlaylistText(translate(style.labelKey))}</option>`
    )).join('');
    visualizerStyleSelect.value = selectedVisualizationStyle;
  };

  const updateVisualizerToggleUI = () => {
    if (visualizerToggle) {
      visualizerToggle.checked = visualizerEnabled;
      visualizerToggle.setAttribute('aria-checked', String(visualizerEnabled));
      visualizerToggle.setAttribute('aria-label', translate('music.visualizerToggleAria'));
    }

    if (visualizerStyleSelect) {
      visualizerStyleSelect.disabled = !visualizerEnabled;
      visualizerStyleSelect.value = selectedVisualizationStyle;
      visualizerStyleSelect.setAttribute('aria-disabled', String(!visualizerEnabled));
      visualizerStyleSelect.setAttribute('aria-label', translate('music.visualizerStyleAria'));
    }

    if (!visualizerEnabled) {
      setVisualizerHelper(isCoarsePointerDevice() ? translate('music.visualizerHelperTap') : translate('music.visualizerOff'));
    } else if (isIosSafari && (!activePlayer || getAudio(activePlayer)?.paused)) {
      setVisualizerHelper(translate('music.visualizerHelperIphone'));
    } else if (isCoarsePointerDevice() && (!activePlayer || getAudio(activePlayer)?.paused)) {
      setVisualizerHelper(translate('music.visualizerHelperTap'));
    } else {
      setVisualizerHelper('');
    }
  };

  class VisualizerController {
    constructor({ container, note }) {
      this.container = container;
      this.note = note;
      this.units = [];
      this.surface = null;
      this.surfaceContext = null;
      this.cssWidth = 360;
      this.cssHeight = 210;
      this.frameId = 0;
      this.frameCount = 0;
      this.mode = 'idle';
      this.activeAudio = null;
      this.activeTrackTitle = '';
      this.enabled = false;
      this.fallbackActive = false;
      this.analyserFlat = true;
      this.analyserActive = false;
      this.sourceConnected = false;
      this.sourceReused = false;
      this.lastThemeKey = '';
      this.lastDrawTime = 0;
      this.lastDiagnosticsTime = 0;
      this.lastReportedFrameCount = 0;
      this.lastDiagnosticTransform = '';
      this.lastDiagnosticTransformTime = 0;
      this.lastAnalyserAudioTime = 0;
      this.flatFrames = 0;
      this.activeFrames = 0;
      this.canvasSizeWarned = false;
      this.fallbackWarned = false;
      this.frequencyData = new Uint8Array(frequencyBinCount);
      this.timeData = new Uint8Array(frequencyBinCount);
      this.probeFrequencyData = new Uint8Array(frequencyBinCount);
      this.probeTimeData = new Uint8Array(frequencyBinCount);
      this.previousProbeData = new Uint8Array(frequencyBinCount);
      this.spectrumBands = new Float32Array(WAVEFORM_UNIT_COUNT);
      this.waveformData = new Uint8Array(WAVEFORM_SAMPLE_COUNT);
      this.waveformPoints = new Float32Array(WAVEFORM_UNIT_COUNT);
      this.audioContextConstructor = window.AudioContext || window.webkitAudioContext;
      this.audioContext = null;
      this.analyser = null;
      this.analyserConnectedToDestination = false;
      this.mediaSourceNodes = new WeakMap();
      this.sourceConnectionState = new WeakMap();
    }

    init() {
      if (!this.container) return;
      this.container.replaceChildren();
      const unitLayer = document.createElement('div');
      unitLayer.className = 'visualizer-units';
      unitLayer.setAttribute('aria-hidden', 'true');

      for (let index = 0; index < WAVEFORM_UNIT_COUNT; index += 1) {
        const unit = document.createElement('span');
        unit.className = 'visualizer-unit';
        unit.style.setProperty('--unit-index', String(index));
        unit.style.setProperty('--unit-delay', `${-(index % 12) * 0.08}s`);
        unit.style.setProperty('--unit-seed', String(((index * 37) % 101) / 100));
        unitLayer.appendChild(unit);
        this.units.push(unit);
      }

      this.surface = document.createElement('canvas');
      this.surface.className = 'visualizer-surface';
      this.surface.setAttribute('aria-hidden', 'true');
      this.surfaceContext = this.surface.getContext('2d', { alpha: true });
      this.container.append(unitLayer, this.surface);
      this.resize();
      this.setFallbackNote(false);
      this.idle('idle');
      this.logDiagnostics('init');
    }

    getForceMode() {
      try {
        const mode = window.localStorage.getItem(VISUALIZER_FORCE_MODE_STORAGE_KEY);
        return ['fallback', 'analyser', 'idle'].includes(mode) ? mode : '';
      } catch (error) {
        return '';
      }
    }

    isDebugEnabled() {
      try {
        return isVisualizerDebugEnabled();
      } catch (error) {
        return false;
      }
    }

    getAudioContextState() {
      return this.audioContext?.state || 'closed';
    }

    setEnabled(isEnabled) {
      this.enabled = Boolean(isEnabled);
      this.applyTheme(this.mode);
    }

    setFallbackNote(isUnavailable = false) {
      if (!this.note) return;
      this.note.hidden = !isUnavailable;
      this.note.textContent = translate(isUnavailable ? 'music.visualizerFallback' : 'music.visualizerAvailable');
    }

    warnFallback(reason) {
      if (this.fallbackWarned || (!this.isDebugEnabled() && !isAudioDebugEnabled) || !window.console?.warn) return;
      this.fallbackWarned = true;
      window.console.warn('[music visualizer] analyser unavailable; fallback animation remains active', reason);
    }

    resize() {
      if (!this.container || !this.surface) return;
      const rect = this.container.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      const cssWidth = Math.max(1, Math.round(rect.width || this.container.clientWidth || 360));
      const cssHeight = Math.max(1, Math.round(rect.height || this.container.clientHeight || 210));
      this.cssWidth = Math.max(260, cssWidth);
      this.cssHeight = Math.max(160, cssHeight);
      const width = Math.max(1, Math.round(cssWidth * pixelRatio));
      const height = Math.max(1, Math.round(cssHeight * pixelRatio));
      if (this.surface.width !== width || this.surface.height !== height) {
        this.surface.width = width;
        this.surface.height = height;
      }
      this.surface.style.width = `${cssWidth}px`;
      this.surface.style.height = `${cssHeight}px`;
      this.surfaceContext?.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      if ((cssWidth < 2 || cssHeight < 2) && !document.hidden && !this.canvasSizeWarned && (this.isDebugEnabled() || isAudioDebugEnabled)) {
        this.canvasSizeWarned = true;
        window.console?.warn?.('[music visualizer] unsafe visualizer size', { width: cssWidth, height: cssHeight, pixelRatio });
      }
    }

    async ensureAnalyser({ allowCreate = true, allowResume = true } = {}) {
      if (!this.audioContextConstructor) {
        this.warnFallback('Web Audio API is not supported.');
        return null;
      }

      if (!this.audioContext || this.audioContext.state === 'closed') {
        if (!allowCreate) {
          this.warnFallback('AudioContext unavailable outside a user gesture.');
          return null;
        }
        this.audioContext = new this.audioContextConstructor();
        this.analyser = null;
        this.analyserConnectedToDestination = false;
        this.sourceConnectionState = new WeakMap();
        this.logDiagnostics('audio-context-created', true);
      }

      if (['suspended', 'interrupted'].includes(this.audioContext.state) && typeof this.audioContext.resume === 'function') {
        if (!allowResume) {
          this.warnFallback(`AudioContext was ${this.audioContext.state} outside a user gesture.`);
          return null;
        }
        await this.audioContext.resume();
        this.logDiagnostics('audio-context-resumed', true);
      }

      if (!this.analyser) {
        this.analyser = this.audioContext.createAnalyser();
        this.analyser.fftSize = 256;
        this.analyser.smoothingTimeConstant = 0.84;
        this.analyser.minDecibels = -90;
        this.analyser.maxDecibels = -10;
      }

      if (!this.analyserConnectedToDestination) {
        this.analyser.connect(this.audioContext.destination);
        this.analyserConnectedToDestination = true;
      }

      return this.audioContext;
    }

    connectAnalyser(audio) {
      if (!audio || !this.audioContext || !this.analyser) {
        this.sourceConnected = false;
        this.sourceReused = false;
        return false;
      }

      let nodeRecord = this.mediaSourceNodes.get(audio);
      this.sourceReused = Boolean(nodeRecord);
      if (nodeRecord && nodeRecord.context !== this.audioContext) {
        this.warnFallback('MediaElementAudioSourceNode belongs to another AudioContext.');
        this.sourceConnected = false;
        return false;
      }

      if (!nodeRecord) {
        try {
          nodeRecord = { context: this.audioContext, source: this.audioContext.createMediaElementSource(audio) };
          this.mediaSourceNodes.set(audio, nodeRecord);
          this.sourceConnectionState.set(audio, false);
        } catch (error) {
          this.warnFallback(error?.message || error);
          this.sourceConnected = false;
          return false;
        }
      }

      if (!this.sourceConnectionState.get(audio)) {
        try {
          nodeRecord.source.connect(this.analyser);
          this.sourceConnectionState.set(audio, true);
        } catch (error) {
          this.warnFallback(error?.message || error);
          this.sourceConnected = false;
          return false;
        }
      }

      this.sourceConnected = true;
      return true;
    }

    switchTrack(audio, title = '') {
      this.activeAudio = audio || null;
      this.activeTrackTitle = title || (activePlayer ? getTrackTitle(activePlayer) : '');
      this.flatFrames = 0;
      this.activeFrames = 0;
      this.previousProbeData.fill(0);
      if (this.enabled && audio && !audio.paused && !audio.ended) this.start(audio);
      else this.idle(audio && !audio.ended ? 'paused' : 'idle');
    }

    switchMode(styleId) {
      selectedVisualizationStyle = normalizeVisualizationStyle(styleId);
      this.resize();
      this.applyTheme(this.mode);
      if (this.enabled && this.activeAudio && !this.activeAudio.paused && !this.activeAudio.ended) this.start(this.activeAudio);
      else this.idle(this.activeAudio && !this.activeAudio.ended ? 'paused' : 'idle');
    }

    start(audio) {
      if (!this.container) return;
      this.activeAudio = audio || this.activeAudio;
      this.activeTrackTitle = activePlayer ? getTrackTitle(activePlayer) : this.activeTrackTitle;
      this.cancelFrame();

      if (!this.enabled || reduceMotion || this.getForceMode() === 'idle') {
        this.renderStatic(audio && !audio.paused && !audio.ended ? 'paused' : 'idle');
        return;
      }

      this.mode = 'playing';
      this.fallbackActive = true;
      this.analyserFlat = true;
      this.lastDrawTime = 0;
      this.lastAnalyserAudioTime = Math.max(0, this.activeAudio?.currentTime || 0);
      this.flatFrames = 0;
      this.activeFrames = 0;
      this.previousProbeData.fill(0);
      this.resize();
      this.applyTheme('playing');
      setVisualizerHelper('');
      this.setFallbackNote(false);
      this.logDiagnostics(isIosSafari ? 'start-ios-fallback-first' : 'start', true);

      const tick = (time = window.performance.now()) => {
        const currentAudio = this.activeAudio;
        if (!currentAudio || currentAudio.paused || currentAudio.ended) {
          this.idle(currentAudio && !currentAudio.ended ? 'paused' : 'idle');
          return;
        }

        const mobileFrameInterval = (isCoarsePointerDevice() || isIosWebKit) ? 33 : 0;
        if (!document.hidden && (!mobileFrameInterval || !this.lastDrawTime || time - this.lastDrawTime >= mobileFrameInterval)) {
          this.lastDrawTime = time;
          this.inspectAnalyser(currentAudio);
          const forceMode = this.getForceMode();
          const useAnalyser = forceMode === 'analyser' ? true : forceMode === 'fallback' ? false : (!isIosWebKit && this.analyser && !this.analyserFlat);
          const fallbackTime = Math.max(0, currentAudio.currentTime || 0) * 1000;
          const drawTime = useAnalyser ? time : fallbackTime;
          const bands = this.sampleBands(drawTime, false, !useAnalyser);
          this.fallbackActive = !useAnalyser;
          this.applyTheme('playing');
          this.renderFrame(bands, drawTime, 'playing');
          this.frameCount += 1;
          this.logDiagnostics('tick');
        }
        this.frameId = window.requestAnimationFrame(tick);
      };

      tick();
    }

    stop(mode = 'idle') {
      this.idle(mode);
    }

    idle(mode = 'idle') {
      if (!this.container) return;
      if (!this.enabled || reduceMotion || this.getForceMode() === 'idle') {
        this.renderStatic(mode);
        return;
      }
      this.cancelFrame();
      this.mode = mode;
      this.fallbackActive = false;
      this.resize();
      this.applyTheme(mode);
      const tick = (time = window.performance.now()) => {
        const mobileFrameInterval = (isCoarsePointerDevice() || isIosWebKit) ? 33 : 0;
        if (!mobileFrameInterval || !this.lastDrawTime || time - this.lastDrawTime >= mobileFrameInterval) {
          this.lastDrawTime = time;
          this.renderFrame(this.sampleBands(time, true, true), time, mode);
          this.frameCount += 1;
        }
        this.frameId = window.requestAnimationFrame(tick);
      };
      tick();
    }

    renderStatic(mode = 'idle') {
      this.cancelFrame();
      this.mode = mode;
      this.fallbackActive = false;
      this.resize();
      this.applyTheme(mode);
      this.renderFrame(this.sampleBands(window.performance.now(), true, true), window.performance.now(), mode);
    }

    destroy() {
      this.cancelFrame();
      this.units = [];
      this.surfaceContext = null;
      this.surface = null;
      this.container?.replaceChildren();
      if (this.audioContext && this.audioContext.state !== 'closed') this.audioContext.close().catch(() => {});
      this.audioContext = null;
      this.analyser = null;
    }

    cancelFrame() {
      if (this.frameId) {
        window.cancelAnimationFrame(this.frameId);
        this.frameId = 0;
      }
    }

    averageRange(array, start, end) {
      let total = 0;
      for (let index = start; index < end; index += 1) total += array[index] || 0;
      return total / Math.max(1, end - start);
    }

    seededNoise(index, salt = 0) {
      const value = Math.sin((index + 1) * 12.9898 + salt * 78.233) * 43758.5453;
      return value - Math.floor(value);
    }

    sampleBands(time = 0, useIdle = false, forceFallback = false) {
      if (this.analyser && !useIdle && !forceFallback) {
        try {
          this.analyser.getByteFrequencyData(this.frequencyData);
          if (typeof this.analyser.getByteTimeDomainData === 'function') this.analyser.getByteTimeDomainData(this.waveformData);
        } catch (error) {
          this.analyserFlat = true;
          this.warnFallback(error?.message || error);
          return this.sampleBands(time, useIdle, true);
        }
      } else {
        const seconds = time / 1000;
        const trackIndex = Math.max(0, activePlayer ? musicPlayers.indexOf(activePlayer) : 0);
        const styleSeed = Math.max(1, VISUALIZATION_STYLES.findIndex((style) => style.id === selectedVisualizationStyle) + 1);
        const beat = forceFallback ? Math.pow((Math.sin((seconds * (2.05 + trackIndex * 0.06)) + styleSeed) + 1) / 2, 2.35) : 0;
        const pulse = forceFallback ? Math.pow((Math.sin((seconds * 4.15) + trackIndex * 0.7) + 1) / 2, 3.2) : 0;
        const breath = forceFallback ? 34 + beat * 112 + pulse * 46 : 18;
        const movement = forceFallback ? 0.18 + styleSeed * 0.01 : 0.42;
        for (let index = 0; index < this.frequencyData.length; index += 1) {
          const seed = this.seededNoise(index, trackIndex + styleSeed * 0.13);
          const wave = Math.sin((time / (forceFallback ? 210 : 680)) + index * movement + seed * 0.6);
          const harmonic = Math.sin((time / (340 + trackIndex * 23)) + index * (0.11 + styleSeed * 0.005)) * (forceFallback ? 24 : 10);
          const stagger = Math.sin(seconds * (1.3 + seed * 1.7) + index * 0.17) * 18;
          const taper = 1 - (index / this.frequencyData.length) * 0.54;
          this.frequencyData[index] = Math.round(Math.min(255, Math.max(0, (breath + ((wave + 1) * 26) + harmonic + stagger) * taper)));
          this.waveformData[index] = Math.round(128 + Math.sin((time / (forceFallback ? 145 : 520)) + index * 0.24 + seed) * (forceFallback ? 46 : 18));
        }
      }

      const step = Math.max(1, Math.floor(this.frequencyData.length / this.spectrumBands.length));
      for (let index = 0; index < this.spectrumBands.length; index += 1) {
        const value = (this.frequencyData[index * step] || 0) / 255;
        this.spectrumBands[index] += (value - this.spectrumBands[index]) * (useIdle ? 0.08 : 0.42);
      }
      const bass = this.averageRange(this.spectrumBands, 0, Math.round(WAVEFORM_UNIT_COUNT * 0.16));
      const mid = this.averageRange(this.spectrumBands, Math.round(WAVEFORM_UNIT_COUNT * 0.16), Math.round(WAVEFORM_UNIT_COUNT * 0.5));
      const high = this.averageRange(this.spectrumBands, Math.round(WAVEFORM_UNIT_COUNT * 0.5), WAVEFORM_UNIT_COUNT);
      return { bass, mid, high, energy: Math.min(Math.max((bass + mid + high) / 3, 0), 1), spectrum: this.spectrumBands, waveform: this.waveformData };
    }

    inspectAnalyser(audio) {
      if (!this.analyser || !audio || audio.paused || audio.ended || this.getForceMode() === 'fallback') {
        this.analyserFlat = true;
        this.analyserActive = false;
        return false;
      }
      try {
        this.analyser.getByteFrequencyData(this.probeFrequencyData);
        if (typeof this.analyser.getByteTimeDomainData === 'function') this.analyser.getByteTimeDomainData(this.probeTimeData);
      } catch (error) {
        this.analyserFlat = true;
        this.analyserActive = false;
        this.warnFallback(error?.message || error);
        return false;
      }
      let totalDelta = 0;
      let waveformDeviation = 0;
      let minFrequency = 255;
      let maxFrequency = 0;
      for (let index = 0; index < this.probeFrequencyData.length; index += 1) {
        const value = this.probeFrequencyData[index];
        totalDelta += Math.abs(value - (this.previousProbeData[index] || 0));
        waveformDeviation += Math.abs((this.probeTimeData[index] || 128) - 128);
        minFrequency = Math.min(minFrequency, value);
        maxFrequency = Math.max(maxFrequency, value);
        this.previousProbeData[index] = value;
      }
      const averageDelta = totalDelta / this.probeFrequencyData.length;
      const averageWaveformDeviation = waveformDeviation / this.probeFrequencyData.length;
      const audioAdvanced = Math.abs((audio.currentTime || 0) - this.lastAnalyserAudioTime) > 0.01;
      this.lastAnalyserAudioTime = audio.currentTime || 0;
      const variance = maxFrequency - minFrequency;
      const analyserLooksActive = maxFrequency > 4 && (variance > 3 || averageDelta > 0.65 || averageWaveformDeviation > 0.8);
      if (audioAdvanced && !analyserLooksActive) {
        this.flatFrames = Math.min(40, this.flatFrames + 1);
        this.activeFrames = 0;
      } else if (analyserLooksActive) {
        this.activeFrames = Math.min(40, this.activeFrames + 1);
        this.flatFrames = 0;
      }
      if (this.flatFrames >= 20) this.analyserFlat = true;
      if (this.activeFrames >= 6) this.analyserFlat = false;
      this.analyserActive = !this.analyserFlat && analyserLooksActive;
      return this.analyserActive;
    }

    applyTheme(state = this.mode) {
      if (!this.container) return;
      this.mode = state;
      selectedVisualizationStyle = normalizeVisualizationStyle(selectedVisualizationStyle);
      const themeKey = [selectedVisualizationStyle, this.fallbackActive, this.analyserFlat, state, this.enabled, reduceMotion].join('|');
      if (themeKey === this.lastThemeKey) return;
      this.lastThemeKey = themeKey;
      this.container.dataset.visualizationStyle = selectedVisualizationStyle;
      this.container.classList.toggle('is-analyser-fallback', this.fallbackActive);
      this.container.classList.toggle('visualizer-ready', this.enabled && !reduceMotion);
      this.container.classList.toggle('visualizer-playing', state === 'playing' && this.enabled && !reduceMotion);
      this.container.classList.toggle('visualizer-fallback', this.fallbackActive && state === 'playing');
      this.container.classList.toggle('visualizer-idle', state !== 'playing' || !this.enabled || reduceMotion);
      this.container.classList.toggle('is-playing', state === 'playing');
      this.container.classList.toggle('is-paused', state === 'paused');
      this.container.classList.toggle('is-idle', state !== 'playing');
      this.container.classList.toggle('is-off', !this.enabled || reduceMotion);
    }

    updateUnits(bands, time = 0, state = 'playing') {
      if (!this.units.length) return;
      const isQuiet = state !== 'playing' || !this.enabled || reduceMotion;
      const seconds = time / 1000;
      const styleIndex = Math.max(0, VISUALIZATION_STYLES.findIndex((style) => style.id === selectedVisualizationStyle));
      const trackIndex = Math.max(0, activePlayer ? musicPlayers.indexOf(activePlayer) : 0);
      const energy = Math.max(0.08, bands.energy || 0);
      const center = (WAVEFORM_UNIT_COUNT - 1) / 2;
      this.units.forEach((unit, index) => {
        const normalized = index / Math.max(WAVEFORM_UNIT_COUNT - 1, 1);
        const seed = this.seededNoise(index, styleIndex + trackIndex * 0.37);
        const beat = Math.pow((Math.sin(seconds * (2.1 + seed * 0.8) + seed * 6.28) + 1) / 2, 2.1);
        const shimmer = (Math.sin(seconds * (4.2 + seed * 2.4) + index * 0.31) + 1) / 2;
        const wave = Math.sin(seconds * (1.5 + styleIndex * 0.07) + index * 0.22 + trackIndex * 0.6);
        const scale = isQuiet ? 0.16 + seed * 0.2 : Math.min(1.2, 0.18 + energy * 0.5 + beat * 0.42 + shimmer * 0.18);
        const opacity = isQuiet ? 0.26 + seed * 0.18 : Math.min(0.96, 0.38 + energy * 0.24 + beat * 0.22 + shimmer * 0.12);
        const hue = 208 + normalized * 30 + bands.high * 24;
        let unitX = 0;
        let unitY = 0;
        let rotate = 0;
        let scaleX = 1;
        let scaleY = scale;
        switch (selectedVisualizationStyle) {
          case 'waveform':
            unitX = (normalized - 0.5) * this.cssWidth * 0.84;
            unitY = (wave * this.cssHeight * 0.18) + (Math.sin(seconds * 2.8 + index * 0.41) * 10);
            rotate = Math.atan2(Math.cos(seconds * 1.8 + index * 0.22), 5) * 36;
            scaleX = 0.72 + beat * 0.45;
            scaleY = 0.8 + Math.abs(wave) * 2.1 + energy * 1.3;
            break;
          case 'orb':
          case 'particle-field': {
            const angle = normalized * Math.PI * 2 + seconds * (0.5 + seed * 0.14);
            const radius = Math.min(this.cssWidth, this.cssHeight) * (0.13 + seed * 0.23 + beat * 0.08);
            unitX = Math.cos(angle) * radius;
            unitY = Math.sin(angle) * radius * 0.74;
            scaleX = scaleY = 0.7 + beat * 1.8 + energy * 0.8;
            break;
          }
          case 'wireframe-lattice':
            unitX = (index - center) * Math.min(7, this.cssWidth / 82);
            unitY = Math.sin(index * 0.52 + seconds * 1.4) * this.cssHeight * 0.14;
            rotate = (index % 2 ? 58 : -58) + wave * 12;
            scaleY = 0.5 + beat * 1.5 + energy;
            break;
          case 'waveform-tunnel':
          case 'holographic-rings': {
            const angle = normalized * Math.PI * 2 + seconds * 0.34;
            const radius = Math.min(this.cssWidth, this.cssHeight) * (0.12 + (index % 16) / 75 + beat * 0.08);
            unitX = Math.cos(angle) * radius;
            unitY = Math.sin(angle) * radius * 0.46;
            rotate = angle * (180 / Math.PI) + 90;
            scaleX = 0.7 + beat * 1.2;
            scaleY = 0.62 + energy * 1.4;
            break;
          }
          default:
            unitX = (normalized - 0.5) * this.cssWidth * 0.82;
            scaleY = scale;
            break;
        }
        unit.style.setProperty('--unit-x', `${unitX.toFixed(2)}px`);
        unit.style.setProperty('--unit-y', `${unitY.toFixed(2)}px`);
        unit.style.setProperty('--unit-rotate', `${rotate.toFixed(2)}deg`);
        unit.style.setProperty('--unit-scale-x', scaleX.toFixed(3));
        unit.style.setProperty('--unit-scale-y', Math.max(0.04, scaleY).toFixed(3));
        unit.style.setProperty('--bar-height', Math.max(0.04, scaleY).toFixed(3));
        unit.style.setProperty('--bar-opacity', opacity.toFixed(3));
        unit.style.setProperty('--unit-hue', `${hue.toFixed(1)}deg`);
      });
    }

    roundedRect(context, x, y, width, height, radius) {
      const safeRadius = Math.min(radius, width / 2, height / 2);
      context.beginPath();
      context.moveTo(x + safeRadius, y);
      context.lineTo(x + width - safeRadius, y);
      context.quadraticCurveTo(x + width, y, x + width, y + safeRadius);
      context.lineTo(x + width, y + height - safeRadius);
      context.quadraticCurveTo(x + width, y + height, x + width - safeRadius, y + height);
      context.lineTo(x + safeRadius, y + height);
      context.quadraticCurveTo(x, y + height, x, y + height - safeRadius);
      context.lineTo(x, y + safeRadius);
      context.quadraticCurveTo(x, y, x + safeRadius, y);
      context.closePath();
    }

    renderFrame(bands, time = 0, state = 'playing') {
      this.updateUnits(bands, time, state);
      if (!this.surfaceContext || !this.surface) return;
      const context = this.surfaceContext;
      const isQuiet = state !== 'playing' || !this.enabled || reduceMotion;
      const quietScale = isQuiet ? 0.38 : 1;
      const width = this.cssWidth;
      const height = this.cssHeight;
      const centerX = width / 2;
      const centerY = height / 2;
      const timeSeconds = time / 1000;
      context.clearRect(0, 0, width, height);
      context.save();
      const glowGradient = context.createRadialGradient(centerX, centerY, 4, centerX, centerY, Math.max(width, height) * 0.55);
      glowGradient.addColorStop(0, `rgba(96, 165, 250, ${0.06 + bands.energy * 0.12 * quietScale})`);
      glowGradient.addColorStop(1, 'rgba(96, 165, 250, 0)');
      context.fillStyle = glowGradient;
      context.fillRect(0, 0, width, height);
      const barCount = WAVEFORM_UNIT_COUNT;
      const gap = Math.max(3, width / 190);
      const barWidth = Math.max(3, Math.min(12, (width * 0.86) / barCount - gap));
      const startX = (width - (barCount * barWidth + (barCount - 1) * gap)) / 2;
      const waveformAmplitude = height * (isQuiet ? 0.16 : 0.34);
      for (let index = 0; index < barCount; index += 1) {
        const normalized = index / Math.max(barCount - 1, 1);
        const value = bands.spectrum[index] || 0;
        const sampleIndex = Math.min(bands.waveform.length - 1, Math.round(normalized * (bands.waveform.length - 1)));
        const rawWave = ((bands.waveform[sampleIndex] || 128) - 128) / 128;
        const fallbackWave = Math.sin((time / 360) + sampleIndex * 0.41) * (isQuiet ? 0.035 : 0.12);
        const shapedWave = Math.min(0.9, Math.max(-0.9, rawWave || fallbackWave));
        this.waveformPoints[index] += (shapedWave - this.waveformPoints[index]) * (isQuiet ? 0.12 : 0.34);
        const pulse = Math.max(0.06, value * quietScale);
        const hue = 205 + normalized * 36 + (bands.high * 24);
        const alpha = Math.min(0.82, isQuiet ? 0.24 + pulse * 0.28 : 0.38 + pulse * 0.36);
        let x = startX + index * (barWidth + gap);
        let y = centerY + this.waveformPoints[index] * waveformAmplitude * quietScale;
        let drawWidth = barWidth;
        let drawHeight = 10 + Math.abs(this.waveformPoints[index]) * height * 0.24 + bands.energy * height * 0.1 * quietScale;
        let rotation = Math.atan2(this.waveformPoints[Math.min(this.waveformPoints.length - 1, index + 1)] - this.waveformPoints[index], 0.08);
        if (selectedVisualizationStyle !== 'waveform') {
          const angle = normalized * Math.PI * 2 + timeSeconds * 0.24;
          const radius = Math.min(width, height) * (0.1 + (index % 16) / 90 + bands.mid * 0.1 * quietScale);
          x = centerX + Math.cos(angle) * radius;
          y = centerY + Math.sin(angle) * radius * 0.5;
          rotation = angle + Math.PI / 2;
          drawHeight = 5 + pulse * height * 0.14;
          drawWidth = Math.max(5, barWidth * 0.9);
        }
        context.save();
        context.translate(x + drawWidth / 2, y);
        context.rotate(rotation);
        const gradient = context.createLinearGradient(0, -drawHeight / 2, 0, drawHeight / 2);
        gradient.addColorStop(0, 'rgba(248, 250, 252, 0.88)');
        gradient.addColorStop(0.55, `hsla(${hue}, 90%, 68%, ${alpha})`);
        gradient.addColorStop(1, `hsla(${hue + 18}, 88%, 56%, ${alpha})`);
        context.fillStyle = gradient;
        context.shadowColor = `hsla(${hue}, 90%, 66%, ${isQuiet ? 0.08 : 0.16})`;
        context.shadowBlur = isQuiet ? 5 : 8;
        this.roundedRect(context, -drawWidth / 2, -drawHeight / 2, drawWidth, drawHeight, Math.max(3, drawWidth));
        context.fill();
        context.restore();
      }
      context.restore();
    }

    getAnalyserSnapshot() {
      if (!this.analyser) return { connected: false, variance: 0, average: 0 };
      try {
        this.analyser.getByteFrequencyData(this.probeFrequencyData);
      } catch (error) {
        return { connected: this.sourceConnected, variance: 0, average: 0, error: error?.message || String(error) };
      }
      let min = 255;
      let max = 0;
      let total = 0;
      for (let index = 0; index < this.probeFrequencyData.length; index += 1) {
        const value = this.probeFrequencyData[index];
        min = Math.min(min, value);
        max = Math.max(max, value);
        total += value;
      }
      return {
        connected: this.sourceConnected,
        variance: max - min,
        average: Math.round((total / Math.max(1, this.probeFrequencyData.length)) * 100) / 100
      };
    }

    collectDiagnostics(audio = this.activeAudio) {
      const firstBar = this.units[0] || null;
      const barStyles = firstBar ? window.getComputedStyle(firstBar) : null;
      const containerRect = this.container?.getBoundingClientRect?.() || { width: 0, height: 0 };
      const containerStyles = this.container ? window.getComputedStyle(this.container) : null;
      const analyserSnapshot = this.getAnalyserSnapshot();
      const transformValue = barStyles?.transform || barStyles?.webkitTransform || 'unavailable';
      const gpuHints = {
        transform: Boolean(containerStyles?.transform && containerStyles.transform !== 'none'),
        translate3d: /translate3d|matrix3d/.test(transformValue) || /translate3d/i.test(firstBar?.style?.transform || ''),
        willChange: Boolean((barStyles?.willChange && barStyles.willChange !== 'auto') || (containerStyles?.willChange && containerStyles.willChange !== 'auto'))
      };
      return {
        timestamp: new Date().toISOString(),
        browserPlatform: `${browserName} / ${platform || 'unknown platform'}`,
        safariVersion,
        iosVersion,
        iosDetected: isAppleTouchDevice,
        userAgent,
        visualizerEnabled: this.enabled,
        selectedVisualizationStyle,
        activeTrackTitle: this.activeTrackTitle || (activePlayer ? getTrackTitle(activePlayer) : ''),
        audioPlaying: Boolean(audio && !audio.paused && !audio.ended),
        audioCurrentTime: Number.isFinite(audio?.currentTime) ? Math.round(audio.currentTime * 1000) / 1000 : 0,
        audioDuration: Number.isFinite(audio?.duration) ? Math.round(audio.duration * 1000) / 1000 : 0,
        lastAudioEvent,
        visualizerRootExists: Boolean(this.container),
        barElementsExist: this.units.length > 0,
        visualizerToggleChecked: Boolean(visualizerToggle?.checked),
        activeAudioElementFound: Boolean(audio),
        visualizerPlayingClassPresent: Boolean(this.container?.classList.contains('visualizer-playing')),
        correctElementHasPlayingClass: Boolean(this.container?.matches?.('.music-visualizer.visualizer-playing')),
        animatedBarContainerHasPlayingClass: Boolean(this.container?.querySelector?.('.visualizer-units')?.classList.contains('visualizer-playing')),
        animationFrameLoopRunning: Boolean(this.frameId),
        frameCount: this.frameCount,
        frameCountIncreasing: this.frameCount > (this.lastReportedFrameCount || 0),
        containerSize: `${Math.round(containerRect.width)} × ${Math.round(containerRect.height)}`,
        barCountInDom: this.units.length,
        firstBarAnimationName: barStyles?.animationName || 'unavailable',
        firstBarAnimationDuration: barStyles?.animationDuration || 'unavailable',
        firstBarAnimationPlayState: barStyles?.animationPlayState || 'unavailable',
        firstBarTransform: transformValue,
        firstBarScaleY: parseCssScaleY(transformValue),
        transformChangedSinceLastDiagnosticWhilePlaying: Boolean(audio && !audio.paused && !audio.ended && this.lastDiagnosticTransform && this.lastDiagnosticTransform !== transformValue && window.performance.now() - this.lastDiagnosticTransformTime >= 900),
        prefersReducedMotion: reduceMotionQuery.matches,
        audioContextState: this.getAudioContextState(),
        analyserConnected: analyserSnapshot.connected,
        analyserVariance: analyserSnapshot.variance,
        analyserAverage: analyserSnapshot.average,
        analyserActive: this.analyserActive,
        analyserFlat: this.analyserFlat,
        flatFrames: this.flatFrames,
        activeFrames: this.activeFrames,
        fallbackModeActive: this.fallbackActive,
        documentVisibilityState: document.visibilityState,
        gpuHints,
        parentRenderSnapshots: getAncestorRenderSnapshots(this.container),
        renderBlockers: getBlockingRenderStyles(this.container).concat(getBlockingRenderStyles(this.container?.parentElement)),
        serviceWorkerCache: {
          controller: navigator.serviceWorker?.controller?.scriptURL || 'none',
          expectedAppVersion: APP_VERSION,
          storedAppVersion: (() => {
            try { return window.localStorage.getItem(APP_VERSION_STORAGE_KEY) || 'missing'; } catch (error) { return 'unavailable'; }
          })(),
          possibleStaleCache: (() => {
            try { return Boolean(window.localStorage.getItem(APP_VERSION_STORAGE_KEY) && window.localStorage.getItem(APP_VERSION_STORAGE_KEY) !== APP_VERSION); } catch (error) { return false; }
          })()
        },
        mode: this.mode,
        forceMode: this.getForceMode() || 'none'
      };
    }

    categorizeFailure(diagnostics) {
      const containerSize = this.container?.getBoundingClientRect?.() || { width: 0, height: 0 };
      const rootHasPlayingClass = Boolean(this.container?.classList.contains('visualizer-playing'));
      const firstBarAnimationDisabled = diagnostics.firstBarAnimationName === 'none' || diagnostics.firstBarAnimationDuration === '0s' || diagnostics.firstBarAnimationDuration === '0ms';
      if (!diagnostics.visualizerRootExists) return 'visualizer root missing';
      if (!diagnostics.barElementsExist) return 'bars missing';
      if (diagnostics.prefersReducedMotion && diagnostics.audioPlaying) return 'prefers-reduced-motion blocking animation';
      if (diagnostics.audioPlaying && diagnostics.visualizerEnabled && !rootHasPlayingClass) return 'playing class not applied';
      if (diagnostics.audioPlaying && diagnostics.visualizerEnabled && rootHasPlayingClass && !diagnostics.correctElementHasPlayingClass) return 'wrong element receiving class';
      if (diagnostics.audioPlaying && firstBarAnimationDisabled && !diagnostics.animationFrameLoopRunning) return 'CSS animation disabled';
      if (diagnostics.audioPlaying && diagnostics.firstBarAnimationName !== 'none' && diagnostics.firstBarAnimationPlayState === 'paused') return 'animation-play-state paused';
      if (containerSize.width <= 0 || containerSize.height <= 0) return 'zero-height container';
      if (diagnostics.renderBlockers.some((blocker) => /display:none|visibility:hidden|visibility:collapse|opacity:0/.test(blocker))) return 'hidden parent';
      if (diagnostics.audioPlaying && diagnostics.lastAudioEvent === 'none') return 'event listener not firing';
      if (diagnostics.serviceWorkerCache?.possibleStaleCache) return 'stale service worker cache';
      if (diagnostics.audioPlaying && !diagnostics.transformChangedSinceLastDiagnosticWhilePlaying && diagnostics.frameCountIncreasing === false) return 'transform not changing';
      return 'unknown';
    }

    logDiagnostics(event = 'state', immediate = false) {
      if (!this.isDebugEnabled() || !window.console?.groupCollapsed) return;
      const now = window.performance.now();
      if (!immediate && now - this.lastDiagnosticsTime < 2400) return;
      this.lastDiagnosticsTime = now;
      const diagnostics = this.collectDiagnostics();
      diagnostics.failureCategory = this.categorizeFailure(diagnostics);
      this.lastReportedFrameCount = this.frameCount;
      this.lastDiagnosticTransform = diagnostics.firstBarTransform;
      this.lastDiagnosticTransformTime = now;
      window.console.groupCollapsed(`[music visualizer] ${event} ${diagnostics.failureCategory} ${diagnostics.timestamp}`);
      window.console.info(diagnostics);
      window.console.groupEnd();
    }
  }

  let visualizerController = null;
  const getAudioContextState = () => visualizerController?.getAudioContextState() || 'closed';
  const resizeVisualizerSurface = () => visualizerController?.resize();
  const ensureAudioContextForGesture = (options) => visualizerController?.ensureAnalyser(options) || Promise.resolve(null);
  const connectAudioToAnalyser = (audio) => visualizerController?.connectAnalyser(audio) || false;
  const warnAnalyzerFallback = (reason) => visualizerController?.warnFallback(reason);
  const setVisualizerFallback = (isUnavailable = false) => visualizerController?.setFallbackNote(isUnavailable);
  const startVisualizer = (audio) => visualizerController?.start(audio);
  const stopVisualizer = (mode = 'idle') => visualizerController?.stop(mode);
  const runIdleVisualizer = (mode = 'idle') => visualizerController?.idle(mode);
  const setVisualizerStatic = (mode = 'idle') => visualizerController?.renderStatic(mode);

  visualizerController = new VisualizerController({ container: visualizerCanvas, note: visualizerFallback });
  visualizerController.setEnabled(visualizerEnabled);
  visualizerController.init();

  const formatDiagnosticValue = (value) => {
    if (value && typeof value === 'object') return JSON.stringify(value);
    return String(value ?? 'unavailable');
  };

  const escapeDiagnosticHtml = (value) => formatDiagnosticValue(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

  const setupVisualizerDebugPanel = () => {
    if (!isVisualizerDebugEnabled() || !visualizerController) return;
    const panel = document.createElement('aside');
    panel.className = 'visualizer-debug-panel';
    panel.setAttribute('aria-live', 'polite');
    panel.setAttribute('aria-label', translate('music.visualizerDiagnostics'));
    document.body.appendChild(panel);

    const render = () => {
      const diagnostics = visualizerController.collectDiagnostics(activePlayer ? getAudio(activePlayer) : null);
      diagnostics.failureCategory = visualizerController.categorizeFailure(diagnostics);
      const rows = [
        ['Browser/platform detected', diagnostics.browserPlatform],
        ['Safari version', diagnostics.safariVersion],
        ['iOS version', diagnostics.iosVersion],
        ['iOS detected', diagnostics.iosDetected],
        ['Failure category', diagnostics.failureCategory],
        ['Visualizer enabled', diagnostics.visualizerEnabled],
        ['Selected visualization style', diagnostics.selectedVisualizationStyle],
        ['Active track title', diagnostics.activeTrackTitle],
        ['Audio playing', diagnostics.audioPlaying],
        ['Audio currentTime / duration', `${diagnostics.audioCurrentTime} / ${diagnostics.audioDuration}`],
        ['Last audio event', diagnostics.lastAudioEvent],
        ['visualizer-playing class present', diagnostics.visualizerPlayingClassPresent],
        ['Animation frame loop running', diagnostics.animationFrameLoopRunning],
        ['Frame count increasing', diagnostics.frameCountIncreasing],
        ['Visualizer container width × height', diagnostics.containerSize],
        ['Bar count in DOM', diagnostics.barCountInDom],
        ['First bar computed animation-name', diagnostics.firstBarAnimationName],
        ['First bar computed animation-play-state', diagnostics.firstBarAnimationPlayState],
        ['First bar computed transform', diagnostics.firstBarTransform],
        ['prefers-reduced-motion detected', diagnostics.prefersReducedMotion],
        ['AudioContext state if used', diagnostics.audioContextState],
        ['Analyser connected', diagnostics.analyserConnected],
        ['Analyser variance / average value if used', `${diagnostics.analyserVariance} / ${diagnostics.analyserAverage}`],
        ['Fallback mode active', diagnostics.fallbackModeActive],
        ['document.visibilityState', diagnostics.documentVisibilityState],
        ['GPU hints detected', diagnostics.gpuHints]
      ];
      panel.innerHTML = `<strong>${escapeDiagnosticHtml(translate('music.visualizerDiagnostics'))}</strong>${rows.map(([label, value]) => `<div><span>${escapeDiagnosticHtml(label)}</span><b>${escapeDiagnosticHtml(value)}</b></div>`).join('')}`;
    };

    render();
    visualizerController.logDiagnostics('debug-panel', true);
    window.setInterval(() => {
      render();
      visualizerController.logDiagnostics('debug-panel');
    }, 2500);
  };

  const categorizeVisualizerSelfCheckFailure = (checks, diagnostics, blockers) => {
    if (!diagnostics.visualizerRootExists) return 'visualizer root missing';
    if (!checks.barsPresentInDom) return 'bars missing';
    if (checks.audioPlaying && diagnostics.visualizerEnabled && !checks.visualizerPlayingClass) return 'playing class not applied';
    if (checks.audioPlaying && diagnostics.visualizerEnabled && checks.visualizerPlayingClass && !diagnostics.correctElementHasPlayingClass) return 'wrong element receiving class';
    if (checks.audioPlaying && !checks.firstBarHasActiveCssAnimation && !checks.requestAnimationFrameRunning) return 'CSS animation disabled';
    if (checks.audioPlaying && checks.firstBarHasActiveCssAnimation && !checks.animationPlayStateRunning) return 'animation-play-state paused';
    if (!checks.containerHasSize) return 'zero-height container';
    if (blockers.some((blocker) => /display:none|visibility:hidden|visibility:collapse|opacity:0/.test(blocker))) return 'hidden parent';
    if (!checks.reducedMotionNotDisabling) return 'prefers-reduced-motion blocking animation';
    if (!checks.eventListenersFiring) return 'event listener not firing';
    if (diagnostics.serviceWorkerCache?.possibleStaleCache) return 'stale service worker cache';
    if (checks.audioPlaying && !checks.transformOrHeightChangingAcross1000ms && !checks.requestAnimationFrameRunning) return 'transform not changing';
    if (checks.audioPlaying && !checks.transformOrHeightChangingAcross1000ms && diagnostics.iosDetected) return 'transform not changing';
    return 'unknown';
  };

  const collectVisualizerSelfCheck = async (audio, startedAtTime, startedAtFrame, startedAtEvent) => {
    const firstBar = visualizerController?.units?.[0] || null;
    const beforeStyles = firstBar ? window.getComputedStyle(firstBar) : null;
    const beforeTransform = beforeStyles?.transform || beforeStyles?.webkitTransform || '';
    const beforeHeight = beforeStyles?.height || '';
    const beforeFrame = visualizerController?.frameCount || 0;
    if (audio && !audio.paused && !audio.ended) {
      await new Promise((resolve) => window.setTimeout(resolve, 1000));
    } else {
      await new Promise((resolve) => window.requestAnimationFrame(() => window.requestAnimationFrame(resolve)));
    }
    const afterStyles = firstBar ? window.getComputedStyle(firstBar) : null;
    const afterTransform = afterStyles?.transform || afterStyles?.webkitTransform || '';
    const afterHeight = afterStyles?.height || '';
    const afterFrame = visualizerController?.frameCount || 0;
    const rect = visualizerCanvas?.getBoundingClientRect?.() || { width: 0, height: 0 };
    const diagnostics = visualizerController?.collectDiagnostics(audio) || {};
    const blockers = getBlockingRenderStyles(visualizerCanvas);
    const checks = {
      audioPlaying: Boolean(audio && !audio.paused && !audio.ended),
      currentTimeIncreasing: Boolean(audio && audio.currentTime > startedAtTime + 0.05),
      requestAnimationFrameRunning: afterFrame > Math.max(startedAtFrame, beforeFrame),
      visualizerPlayingClass: Boolean(visualizerCanvas?.classList.contains('visualizer-playing')),
      barsPresentInDom: Boolean(visualizerController?.units?.length),
      firstBarHasActiveCssAnimation: Boolean(afterStyles && afterStyles.animationName !== 'none'),
      animationPlayStateRunning: Boolean(afterStyles && afterStyles.animationPlayState === 'running'),
      transformOrHeightChanging: beforeTransform !== afterTransform || beforeHeight !== afterHeight,
      transformOrHeightChangingAcross1000ms: Boolean(audio && !audio.paused && !audio.ended && (beforeTransform !== afterTransform || beforeHeight !== afterHeight)),
      containerHasSize: rect.width > 0 && rect.height > 0,
      renderingNotBlocked: blockers.length === 0,
      reducedMotionNotDisabling: !reduceMotionQuery.matches,
      audioContextUsable: !['suspended', 'interrupted', 'closed'].includes(visualizerController?.getAudioContextState?.() || 'closed') || diagnostics.fallbackModeActive,
      analyserNotFlatWhenUsed: !diagnostics.analyserConnected || diagnostics.fallbackModeActive || diagnostics.analyserVariance > 0 || diagnostics.analyserAverage > 0,
      eventListenersFiring: lastAudioEvent !== startedAtEvent || ['play', 'playing', 'timeupdate'].includes(lastAudioEvent)
    };
    const failures = Object.entries(checks).filter(([, passed]) => !passed).map(([name]) => name);
    const likelyFailureCategory = categorizeVisualizerSelfCheckFailure(checks, diagnostics, blockers);
    return { timestamp: new Date().toISOString(), checks, failures, likelyFailureCategory, diagnostics, blockers, beforeTransform, afterTransform, beforeHeight, afterHeight };
  };

  const runVisualizerSelfChecksAfterPlay = (audio) => {
    if (!isVisualizerDebugEnabled() || !audio || !visualizerController) return;
    const startedAtTime = audio.currentTime || 0;
    const startedAtFrame = visualizerController.frameCount || 0;
    const startedAtEvent = lastAudioEvent;
    [800, 1600, 3000].forEach((delay) => {
      window.setTimeout(async () => {
        const report = await collectVisualizerSelfCheck(audio, startedAtTime, startedAtFrame, startedAtEvent);
        if (report.failures.length) {
          window.console?.groupCollapsed?.(`[music visualizer self-check] ${delay}ms failure ${report.timestamp}`);
          window.console?.error?.('Failing conditions:', report.failures);
          window.console?.error?.('Likely failure category:', report.likelyFailureCategory);
          window.console?.info?.(report);
          window.console?.groupEnd?.();
        } else {
          window.console?.groupCollapsed?.(`[music visualizer self-check] ${delay}ms passed ${report.timestamp}`);
          window.console?.info?.(report);
          window.console?.groupEnd?.();
        }
      }, delay);
    });
  };

  setupVisualizerDebugPanel();
  setupVisualizationStyleSelector();
  let visualizerResizeTimer = 0;
  const scheduleVisualizerResize = (delay = 80) => {
    window.clearTimeout(visualizerResizeTimer);
    visualizerResizeTimer = window.setTimeout(resizeVisualizerSurface, delay);
  };
  window.addEventListener('resize', () => scheduleVisualizerResize(80), { passive: true });
  window.addEventListener('orientationchange', () => scheduleVisualizerResize(180), { passive: true });
  window.addEventListener('pageshow', () => {
    scheduleVisualizerResize(40);
    const audio = activePlayer ? getAudio(activePlayer) : null;
    if (visualizerEnabled && audio && !audio.paused && !audio.ended) {
      startVisualizer(audio);
    }
  });
  document.addEventListener('visibilitychange', async () => {
    resizeVisualizerSurface();
    const audio = activePlayer ? getAudio(activePlayer) : null;

    if (document.hidden) {
      wasPlayingBeforeBackground = Boolean(audio && !audio.paused && !audio.ended);
      logAudioDiagnostics('visibility-hidden', { audio, wasPlayingBeforeBackground, userStoppedManually });
      return;
    }

    logAudioDiagnostics('visibility-visible', { audio, wasPlayingBeforeBackground, userStoppedManually });
    if (!audio) return;

    if (wasPlayingBeforeBackground && audio.paused && !audio.ended && !userStoppedManually) {
      try {
        await playAudio(activePlayer, { isAutoAdvance: true });
      } catch (error) {
        logAudioDiagnostics('visibility-resume-blocked', { audio, message: error?.message || String(error) });
      }
    } else {
      syncMiniProgress(audio);
      syncTransportButtons(audio);
      updateActiveLyric(audio, { forceScroll: true, event: 'visibility-visible' });
    }

    wasPlayingBeforeBackground = false;
    if (visualizerEnabled && !audio.paused && !audio.ended) {
      try {
        const context = await ensureAudioContextForGesture({ allowCreate: false, allowResume: true });
        if (context) connectAudioToAnalyser(audio);
      } catch (error) {
        warnAnalyzerFallback(error?.message || error);
      }
      startVisualizer(audio);
    }
  });
  window.addEventListener('carine:languagechange', () => {
    setupVisualizationStyleSelector();
    setVisualizerFallback(false);
    updateVisualizerToggleUI();
  });

  const getAudio = (player) => player.querySelector('audio');
  const getDurationLabel = (player) => player.querySelector('[data-duration]');
  const getFallbackDuration = (player) => Number.parseFloat(player.dataset.trackDuration || '0');
  const getPlayToggle = (player) => player.querySelector('[data-play-toggle]');
  const getTrackTitle = (player) => {
    const playToggle = getPlayToggle(player);
    return playToggle && playToggle.dataset.trackKey
      ? translate(playToggle.dataset.trackKey)
      : player.dataset.trackTitle;
  };

  const updateMediaSessionPosition = (audio = activePlayer ? getAudio(activePlayer) : null) => {
    if (!('mediaSession' in navigator) || typeof navigator.mediaSession.setPositionState !== 'function' || !audio) {
      return;
    }

    const duration = getSafeDuration(audio, activePlayer ? getFallbackDuration(activePlayer) : 0);
    if (!Number.isFinite(duration) || duration <= 0 || !Number.isFinite(audio.currentTime)) {
      return;
    }

    try {
      navigator.mediaSession.setPositionState({
        duration,
        playbackRate: Number.isFinite(audio.playbackRate) && audio.playbackRate > 0 ? audio.playbackRate : 1,
        position: Math.min(Math.max(audio.currentTime, 0), duration)
      });
    } catch (error) {
      // Some browsers reject position updates until metadata is visible.
    }
  };

  const updateMediaSessionMetadata = (player = activePlayer) => {
    if (!player || !('mediaSession' in navigator) || typeof window.MediaMetadata !== 'function') {
      return;
    }

    const audio = getAudio(player);
    const artworkSrc = player.dataset.trackCover || '';

    try {
      navigator.mediaSession.metadata = new window.MediaMetadata({
        title: getTrackTitle(player),
        artist: player.dataset.trackArtist || 'Carine Sanadina',
        album: 'Carine Sanadina',
        artwork: artworkSrc ? [{ src: artworkSrc, sizes: '512x512', type: 'image/png' }] : []
      });
      navigator.mediaSession.playbackState = audio && !audio.paused && !audio.ended ? 'playing' : 'paused';
      updateMediaSessionPosition(audio);
    } catch (error) {
      logAudioDiagnostics('media-session-metadata-failed', { message: error?.message || String(error) });
    }
  };


  const getVinylPrimaryStage = () => vinylStages.find((stage) => stage.offsetParent !== null) || expandedVinylStage || vinylStages[0] || null;
  const getVinylPrimaryDisc = () => {
    const stage = getVinylPrimaryStage();
    return stage?.querySelector('[data-vinyl-disc]') || expandedVinylDisc || vinylDiscs[0] || null;
  };

  const getParentRenderSnapshot = (element) => {
    const parent = element?.parentElement || null;
    if (!parent) return { found: false };
    const styles = window.getComputedStyle(parent);
    return {
      found: true,
      tag: parent.tagName.toLowerCase(),
      className: parent.className || '',
      display: styles.display,
      visibility: styles.visibility,
      opacity: styles.opacity,
      overflow: `${styles.overflow}/${styles.overflowX}/${styles.overflowY}`,
      clipPath: styles.clipPath || styles.webkitClipPath || 'none'
    };
  };

  const getVinylBlockers = (element) => getBlockingRenderStyles(element).concat(getBlockingRenderStyles(element?.parentElement));

  const getLoadedAssetVersions = async () => {
    const scripts = Array.from(document.scripts).map((item) => item.src || '').filter(Boolean);
    const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map((item) => item.href || '').filter(Boolean);
    const resourceNames = performance?.getEntriesByType?.('resource')?.map((entry) => entry.name) || [];
    let cacheKeys = [];
    try {
      if ('caches' in window) cacheKeys = await window.caches.keys();
    } catch (error) {
      cacheKeys = [`cache-inspection-error: ${error?.message || error}`];
    }
    return {
      expectedAppVersion: APP_VERSION,
      serviceWorkerController: navigator.serviceWorker?.controller?.scriptURL || 'none',
      scriptAssets: scripts,
      cssAssets: stylesheets,
      matchingResourceAssets: resourceNames.filter((name) => /script\.js|styles\.css|sw\.js/i.test(name)),
      cacheKeys,
      possibleStaleCache: cacheKeys.some((key) => /carine-static/i.test(key) && !key.includes(APP_VERSION))
    };
  };

  const collectVinylDiagnostics = async (audio = activePlayer ? getAudio(activePlayer) : null, { sampleTransform = false } = {}) => {
    const root = getVinylPrimaryStage();
    const disc = getVinylPrimaryDisc();
    const rootStyles = root ? window.getComputedStyle(root) : null;
    const discStyles = disc ? window.getComputedStyle(disc) : null;
    const rect = disc?.getBoundingClientRect?.() || { width: 0, height: 0 };
    const transformA = discStyles?.transform || discStyles?.webkitTransform || 'unavailable';
    let transformB = transformA;
    if (sampleTransform && disc) {
      await new Promise((resolve) => window.setTimeout(resolve, 1000));
      const nextStyles = window.getComputedStyle(disc);
      transformB = nextStyles.transform || nextStyles.webkitTransform || 'unavailable';
    }
    const isPlaying = Boolean(audio && !audio.paused && !audio.ended);
    const playingClassApplied = Boolean(root?.classList.contains('is-playing') || disc?.classList.contains('is-playing') || miniPlayer?.classList.contains('is-playing') || expandedPlayerCard?.classList.contains('is-playing'));
    const animationName = discStyles?.animationName || 'unavailable';
    const animationDuration = discStyles?.animationDuration || 'unavailable';
    const animationPlayState = discStyles?.animationPlayState || 'unavailable';
    const transformChanges = transformA !== transformB;
    const blockers = getVinylBlockers(disc || root);
    const assetVersions = await getLoadedAssetVersions();
    const cssAnimationDisabled = animationName === 'none' || animationDuration === '0s' || animationDuration === '0ms' || animationPlayState !== 'running';
    const wrongElementTargeted = Boolean(root && disc && root.classList.contains('is-playing') && !playingClassApplied);
    return {
      timestamp: new Date().toISOString(),
      browserPlatform: `${browserName} / ${platform || 'unknown platform'}`,
      userAgent,
      iosDetected: /iP(hone|od|ad)/i.test(userAgent) || (platform === 'MacIntel' && window.navigator.maxTouchPoints > 1),
      ipadOsDetected: platform === 'MacIntel' && window.navigator.maxTouchPoints > 1,
      safariDetected: /Safari/i.test(userAgent) && !/CriOS|FxiOS|EdgiOS|Chrome|Chromium|Android/i.test(userAgent),
      safariVersion,
      iosVersion,
      prefersReducedMotion: reduceMotionQuery.matches,
      activeTrackTitle: activePlayer ? getTrackTitle(activePlayer) : '',
      audioPaused: audio?.paused ?? true,
      audioEnded: audio?.ended ?? false,
      audioCurrentTime: Number.isFinite(audio?.currentTime) ? Math.round(audio.currentTime * 1000) / 1000 : 0,
      audioActuallyPlaying: isPlaying,
      lastAudioEvent,
      vinylRootFound: Boolean(root),
      vinylDiscFound: Boolean(disc),
      vinylPlayingClassApplied: playingClassApplied,
      computedAnimationName: animationName,
      computedAnimationDuration: animationDuration,
      computedAnimationPlayState: animationPlayState,
      computedTransformAtTimeA: transformA,
      computedTransformAtTimeB: transformB,
      transformChangesAcrossOneSecondWhileAudioPlays: Boolean(isPlaying && transformChanges),
      vinylElementSize: `${Math.round(rect.width)} × ${Math.round(rect.height)}`,
      parentContainer: getParentRenderSnapshot(disc || root),
      renderBlockers: blockers,
      overflowOrClippingIssue: blockers.some((blocker) => /overflow|clip-path/i.test(blocker)),
      cssMediaQueryDisablesAnimationOnIos: Boolean((/iP(hone|od|ad)/i.test(userAgent) || (platform === 'MacIntel' && window.navigator.maxTouchPoints > 1)) && cssAnimationDisabled && !reduceMotionQuery.matches),
      reducedMotionLogicDisablesAppleDevices: Boolean(isAppleTouchDevice && cssAnimationDisabled && !reduceMotionQuery.matches),
      javascriptTogglingWrongClassOrElement: wrongElementTargeted,
      serviceWorkerCacheStatus: assetVersions,
      correctCssFileVersionLoaded: !assetVersions.possibleStaleCache,
      checks: {
        audioActuallyPlaying: isPlaying,
        vinylElementVisible: Boolean(rect.width > 0 && rect.height > 0 && rootStyles?.display !== 'none' && rootStyles?.visibility !== 'hidden' && Number(rootStyles?.opacity ?? 1) > 0),
        playingClassApplied,
        cssAnimationRunning: Boolean(animationName !== 'none' && animationPlayState === 'running' && !reduceMotionQuery.matches),
        transformChanging: Boolean(isPlaying && transformChanges),
        reducedMotionNotDisabling: !reduceMotionQuery.matches,
        correctCssFileVersionLoaded: !assetVersions.possibleStaleCache
      }
    };
  };

  const categorizeVinylFailure = (diagnostics) => {
    const checks = diagnostics.checks || {};
    if (!checks.playingClassApplied) return 'Playing class not applied';
    if (diagnostics.javascriptTogglingWrongClassOrElement) return 'Wrong element targeted';
    if (!checks.vinylElementVisible || diagnostics.vinylElementSize === '0 × 0') return 'Element hidden or zero-sized';
    if (diagnostics.overflowOrClippingIssue) return 'Parent overflow/clipping';
    if (diagnostics.serviceWorkerCacheStatus?.possibleStaleCache) return 'Stale service worker cache';
    if (!checks.reducedMotionNotDisabling) return 'Reduced motion logic issue';
    if (!checks.cssAnimationRunning) return 'CSS animation disabled';
    if (diagnostics.iosDetected && checks.cssAnimationRunning && !checks.transformChanging) return 'iOS Safari transform/animation issue';
    if (!checks.correctCssFileVersionLoaded) return 'Wrong deployed file';
    return 'Other';
  };

  const logVinylDiagnostics = async (event = 'state', audio = activePlayer ? getAudio(activePlayer) : null, options = {}) => {
    if (!isVinylDebugEnabled()) return null;
    const diagnostics = await collectVinylDiagnostics(audio, options);
    const failures = Object.entries(diagnostics.checks || {}).filter(([, passed]) => !passed).map(([name]) => name);
    const category = failures.length ? categorizeVinylFailure(diagnostics) : 'none';
    const report = { event, failures, category, ...diagnostics };
    window.console?.groupCollapsed?.(`[vinyl diagnostics] ${event} ${diagnostics.timestamp}`);
    if (failures.length) {
      window.console?.error?.('Failing conditions:', failures);
      window.console?.error?.('Failure category:', category);
    }
    window.console?.info?.(report);
    window.console?.groupEnd?.();
    return report;
  };

  const runVinylSelfChecksAfterPlay = (audio) => {
    if (!isVinylDebugEnabled() || !audio) return;
    [800, 1600, 3000].forEach((delay) => {
      window.setTimeout(() => {
        logVinylDiagnostics(`${delay}ms self-check after play`, audio, { sampleTransform: true });
      }, delay);
    });
  };

  const setupVinylDebugPanel = () => {
    if (!isVinylDebugEnabled()) return;
    const panel = document.createElement('aside');
    panel.className = 'vinyl-debug-panel';
    panel.setAttribute('aria-live', 'polite');
    panel.setAttribute('aria-label', translate('vinyl.debug.ariaLabel'));
    document.body.appendChild(panel);
    const render = async () => {
      const diagnostics = await collectVinylDiagnostics(activePlayer ? getAudio(activePlayer) : null, { sampleTransform: false });
      const rows = [
        ['Browser/platform detected', diagnostics.browserPlatform],
        ['iOS detected', diagnostics.iosDetected],
        ['iPadOS detected', diagnostics.ipadOsDetected],
        ['Safari detected', diagnostics.safariDetected],
        ['prefers-reduced-motion detected', diagnostics.prefersReducedMotion],
        ['Active track title', diagnostics.activeTrackTitle],
        ['audio.paused / audio.ended', `${diagnostics.audioPaused} / ${diagnostics.audioEnded}`],
        ['audio currentTime', diagnostics.audioCurrentTime],
        ['Last audio event', diagnostics.lastAudioEvent],
        ['Vinyl root / disc found', `${diagnostics.vinylRootFound} / ${diagnostics.vinylDiscFound}`],
        ['Playing class applied', diagnostics.vinylPlayingClassApplied],
        ['animation name / duration', `${diagnostics.computedAnimationName} / ${diagnostics.computedAnimationDuration}`],
        ['animation play state', diagnostics.computedAnimationPlayState],
        ['transform', diagnostics.computedTransformAtTimeA],
        ['vinyl width × height', diagnostics.vinylElementSize],
        ['parent display/visibility/opacity', `${diagnostics.parentContainer.display} / ${diagnostics.parentContainer.visibility} / ${diagnostics.parentContainer.opacity}`],
        ['overflow/clipping issue', diagnostics.overflowOrClippingIssue],
        ['iOS media disables animation', diagnostics.cssMediaQueryDisablesAnimationOnIos],
        ['reduced-motion Apple issue', diagnostics.reducedMotionLogicDisablesAppleDevices],
        ['wrong class/element', diagnostics.javascriptTogglingWrongClassOrElement],
        ['stale cache', diagnostics.serviceWorkerCacheStatus.possibleStaleCache],
        ['APP_VERSION', APP_VERSION]
      ];
      panel.innerHTML = `<strong>${escapeDiagnosticHtml(translate('vinyl.debug.title'))}</strong>${rows.map(([label, value]) => `<div><span>${escapeDiagnosticHtml(label)}</span><b>${escapeDiagnosticHtml(value)}</b></div>`).join('')}`;
    };
    render();
    window.setInterval(render, 1000);
  };

  const syncVinylExperience = (isPlaying) => {
    const shouldRotate = Boolean(isPlaying);
    isVinylPlaying = shouldRotate;

    vinylStages.forEach((stage) => {
      stage.classList.toggle('is-playing', shouldRotate);
      stage.classList.toggle('vinyl-playing', shouldRotate);
      stage.classList.toggle('turntable-playing', shouldRotate);
    });

    vinylDiscs.forEach((disc) => {
      disc.classList.toggle('is-playing', shouldRotate);
      disc.classList.toggle('vinyl-playing', shouldRotate);
      disc.style.animationPlayState = shouldRotate ? 'running' : 'paused';
      disc.style.webkitAnimationPlayState = shouldRotate ? 'running' : 'paused';
    });

    expandedPlayerCard?.classList.toggle('is-playing', shouldRotate);
    expandedPlayerCard?.classList.toggle('turntable-playing', shouldRotate);
  };

  setupVinylDebugPanel();
  updateVisualizerToggleUI();

  const setTransportButtonState = (button, isPlaying) => {
    if (!button) return;

    const label = translate(isPlaying ? 'audio.pause' : 'audio.play');
    const iconElement = button.querySelector('.play-icon');

    if (iconElement) {
      iconElement.innerHTML = isPlaying
        ? '<svg viewBox="0 0 24 24"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>'
        : '<svg viewBox="0 0 24 24"><path d="M8 5l11 7-11 7V5z"/></svg>';
    }
    button.classList.toggle('is-playing', isPlaying);
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
    button.setAttribute('aria-pressed', String(isPlaying));
  };

  const updateToggle = (button, audio, title, { forceIdle = false } = {}) => {
    if (!button) return;

    const isPlaying = Boolean(audio && !audio.paused && !audio.ended && !forceIdle);
    setTransportButtonState(button, isPlaying);
  };

  const syncTransportButtons = (activeAudio = activePlayer ? getAudio(activePlayer) : null, { forceIdle = false } = {}) => {
    const activeIsPlaying = Boolean(activeAudio && !activeAudio.paused && !activeAudio.ended && !forceIdle);

    musicPlayers.forEach((player) => {
      const audio = getAudio(player);
      const isPlaying = Boolean(audio && !audio.paused && !audio.ended && !forceIdle);
      player.classList.toggle('is-playing', isPlaying);
      setTransportButtonState(getPlayToggle(player), isPlaying);
    });

    expandedTrackOptions.forEach((option) => {
      const matchingPlayer = musicPlayers.find((player) => player.dataset.trackId === option.dataset.trackId);
      const matchingAudio = matchingPlayer ? getAudio(matchingPlayer) : null;
      const isPlaying = Boolean(matchingAudio && !matchingAudio.paused && !matchingAudio.ended && !forceIdle);
      option.classList.toggle('is-playing', isPlaying);
    });

    if (miniPlayer) miniPlayer.classList.toggle('is-playing', activeIsPlaying);
    expandedVisualizer?.classList.toggle('is-playing', activeIsPlaying);
    if (consoleStatus) {
      const statusKey = activeIsPlaying ? 'console.playing' : activePlayer ? 'console.paused' : 'console.ready';
      consoleStatus.textContent = translate(statusKey);
      consoleStatus.dataset.state = activeIsPlaying ? 'playing' : activePlayer ? 'paused' : 'ready';
    }
    syncVinylExperience(activeIsPlaying);
    setTransportButtonState(mini?.toggle, activeIsPlaying);
    setTransportButtonState(mobileToggle, activeIsPlaying);
  };

  const getSafeDuration = (audio, fallback = 0) => {
    if (audio && Number.isFinite(audio.duration) && audio.duration > 0) {
      return audio.duration;
    }

    return Number.isFinite(fallback) && fallback > 0 ? fallback : 0;
  };

  const enableVisualizerFromGesture = async () => {
    visualizerEnabled = true;
    visualizerController?.setEnabled(true);
    writeVisualizerPreference(true);
    updateVisualizerToggleUI();

    const audio = activePlayer ? getAudio(activePlayer) : null;

    if (!audio || audio.paused || audio.ended || reduceMotion) {
      runIdleVisualizer(audio && !audio?.ended ? 'paused' : 'idle');
      return;
    }

    try {
      const context = await ensureAudioContextForGesture({ allowCreate: true, allowResume: true });
      const analyserReady = context ? connectAudioToAnalyser(audio) : false;

      if (!analyserReady) {
        setVisualizerFallback(false);
      }
      setVisualizerHelper('');
      startVisualizer(audio);
    } catch (error) {
      warnAnalyzerFallback(error?.message || error);
      setVisualizerFallback(false);
      setVisualizerHelper('');
      startVisualizer(audio);
    }
  };

  const disableVisualizer = () => {
    visualizerEnabled = false;
    visualizerController?.setEnabled(false);
    writeVisualizerPreference(false);
    setVisualizerFallback(false);
    setVisualizerStatic('idle');
    updateVisualizerToggleUI();
  };

  const syncMiniProgress = (audio) => {
    if (!mini || !audio) {
      return;
    }

    const fallbackDuration = activePlayer ? getFallbackDuration(activePlayer) : 0;
    const safeDuration = getSafeDuration(audio, fallbackDuration);
    const seekDuration = getSafeDuration(audio, 0);
    const max = safeDuration > 0 ? safeDuration : 100;
    mini.current.textContent = formatTime(audio.currentTime);
    mini.duration.textContent = safeDuration > 0 ? formatTime(safeDuration) : '0:00';
    mini.progress.max = String(max);
    mini.progress.value = String(Math.min(audio.currentTime, max));
    mini.progress.disabled = seekDuration <= 0;
    mini.progress.setAttribute('aria-disabled', String(seekDuration <= 0));
    setRangeFill(mini.progress, mini.progress.value, mini.progress.max);
    syncExpandedProgress(audio);
    updateActiveLyric(audio);
  };

  const showMiniPlayer = (player) => {
    const audio = getAudio(player);
    setActiveTrack(player);

    if (!mini || !miniPlayer) {
      syncTransportButtons(audio);
      updateMediaSessionMetadata(player);
      return;
    }
    miniPlayer.classList.add('is-visible');
    miniPlayer.setAttribute('aria-hidden', 'false');
    updateMiniPlayerBodyState();
    miniPlayer.classList.toggle('is-playing', audio && !audio.paused && !audio.ended);
    mini.cover.src = player.dataset.trackCover;
    syncArtworkFit(mini.cover, player);
    const trackTitle = getTrackTitle(player);
    mini.cover.alt = `${trackTitle} ${translate('audio.coverArt')}`;
    mini.cover.referrerPolicy = 'no-referrer';
    mini.title.dataset.hasTrack = 'true';
    mini.title.textContent = trackTitle;
    mini.artist.textContent = player.dataset.trackArtist;
    mini.volume.value = String(audio ? audio.volume : mini.volume.value);
    setRangeFill(mini.volume, mini.volume.value, mini.volume.max);
    syncMiniProgress(audio);
    updateToggle(mini.toggle, audio, getTrackTitle(player));
    syncTransportButtons(audio);
    updateMediaSessionMetadata(player);
  };

  const resetMiniPlayer = () => {
    stopLyricsAnimationLoop();
    activePlayer = null;
    musicPlayers.forEach((track) => track.classList.remove('is-active'));
    stopVisualizer('idle');

    if (!mini || !miniPlayer) {
      return;
    }

    miniPlayer.classList.remove('is-playing', 'is-visible');
    syncVinylExperience(false);
    miniPlayer.setAttribute('aria-hidden', 'true');
    updateMiniPlayerBodyState();
    mini.cover.removeAttribute('src');
    if (mobilePlayer) setMobilePlayerOpen(false);
    mini.cover.alt = '';
    mini.title.dataset.hasTrack = 'false';
    mini.title.textContent = translate('mini.noTrack');
    mini.artist.textContent = 'Carine Sanadina';
    mini.current.textContent = '0:00';
    mini.duration.textContent = '0:00';
    mini.progress.max = '100';
    mini.progress.value = '0';
    mini.progress.disabled = true;
    mini.progress.setAttribute('aria-disabled', 'true');
    setRangeFill(mini.progress, 0, 100);
    updateToggle(mini.toggle, null, translate('mini.noTrack'));
    syncTransportButtons(null, { forceIdle: true });
    if ('mediaSession' in navigator) {
      navigator.mediaSession.playbackState = 'none';
    }
  };

  const setPlayerReadyState = (player, isReady) => {
    const playToggle = getPlayToggle(player);
    const status = player.querySelector('[data-audio-status]');
    const hasSource = Boolean(getVerifiedAudioSource(player));

    player.classList.toggle('is-ready', isReady || hasSource);

    if (playToggle) {
      playToggle.disabled = !hasSource;
    }

    if (status && (isReady || hasSource) && status.textContent === translate('audio.unavailable')) {
      status.textContent = '';
    }
  };

  const syncDuration = (player) => {
    const audio = getAudio(player);
    const duration = getDurationLabel(player);
    const safeDuration = getSafeDuration(audio, getFallbackDuration(player));

    if (!duration || safeDuration <= 0) {
      return false;
    }

    duration.textContent = formatTime(safeDuration);

    if (activePlayer === player) {
      syncMiniProgress(audio);
    }

    return true;
  };

  const prepareAudio = (player) => {
    const audio = getAudio(player);
    const audioSrc = applyResolvedAudioSource(player, audio);

    if (!audio || !audioSrc) {
      setPlayerReadyState(player, false);
      return;
    }

    audio.volume = mini && mini.volume ? Number(mini.volume.value) : 0.85;
    syncDuration(player);
    setPlayerReadyState(player, true);
  };

  const pauseOtherPlayers = (currentPlayer) => {
    musicPlayers.forEach((player) => {
      if (player === currentPlayer) {
        return;
      }

      const audio = getAudio(player);

      if (audio && !audio.paused) {
        audio.pause();
      }

      player.classList.remove('is-playing');
      updateToggle(getPlayToggle(player), audio, getTrackTitle(player));
    });
  };

  const playAudio = async (player, { isAutoAdvance = false } = {}) => {
    const audio = getAudio(player);
    const status = player.querySelector('[data-audio-status]');

    if (!audio || !getVerifiedAudioSource(player)) {
      setPlayerReadyState(player, false);
      return false;
    }

    const previousSource = audio.getAttribute('src') || '';
    const verifiedSource = applyResolvedAudioSource(player, audio);
    if (previousSource !== verifiedSource) {
      audio.load();
    }

    pauseOtherPlayers(player);
    userStoppedManually = false;
    stopVisualizer('idle');
    showMiniPlayer(player);

    if (audio.ended || audio.currentTime >= getSafeDuration(audio, 0)) {
      audio.currentTime = 0;
    }

    try {
      let analyserReady = false;

      if (visualizerEnabled && !reduceMotion) {
        const context = await ensureAudioContextForGesture({ allowCreate: !isAutoAdvance, allowResume: !isAutoAdvance });
        analyserReady = context ? connectAudioToAnalyser(audio) : false;
        if (!analyserReady) {
          setVisualizerFallback(false);
        }
      } else {
        stopVisualizer('idle');
      }

      await audio.play();
      syncTransportButtons(audio);
      updateMediaSessionMetadata(player);
      logAudioDiagnostics('play-succeeded', {
        track: getTrackTitle(player),
        currentSrc: audio.currentSrc || audio.src,
        audioContextState: getAudioContextState(),
        analyserReady
      });
      startVisualizer(audio);
      persistPlayerState();
      if (status) {
        status.textContent = '';
      }
      return true;
    } catch (error) {
      logAudioDiagnostics('play-failed', {
        track: getTrackTitle(player),
        currentSrc: audio.currentSrc || audio.src,
        message: error?.message || String(error)
      });
      player.classList.remove('is-playing');
      updateToggle(getPlayToggle(player), audio, getTrackTitle(player), { forceIdle: true });

      if (miniPlayer && activePlayer === player) {
        miniPlayer.classList.remove('is-playing');
        updateToggle(mini.toggle, audio, getTrackTitle(player), { forceIdle: true });
      }
      updateToggle(mobileToggle, audio, getTrackTitle(player), { forceIdle: true });
      syncTransportButtons(audio, { forceIdle: true });

      if (status) {
        status.textContent = isAutoAdvance ? translate('audio.unavailable') : translate('audio.playbackError');
      }

      return false;
    }
  };

  const getNextTrack = (currentPlayer) => {
    if (repeatMode === 'one') {
      return currentPlayer;
    }

    if (shuffleEnabled && musicPlayers.length > 1) {
      const available = musicPlayers.filter((player) => player !== currentPlayer);
      return available[Math.floor(Math.random() * available.length)];
    }

    const currentIndex = musicPlayers.indexOf(currentPlayer);
    const nextPlayer = musicPlayers[currentIndex + 1];

    if (nextPlayer) {
      return nextPlayer;
    }

    return repeatMode === 'all' ? musicPlayers[0] : null;
  };

  const playPreviousTrack = (currentPlayer) => {
    const currentIndex = musicPlayers.indexOf(currentPlayer);
    const previousPlayer = musicPlayers[currentIndex > 0 ? currentIndex - 1 : musicPlayers.length - 1] || musicPlayers[0];
    if (previousPlayer) playAudio(previousPlayer);
  };

  const playNextTrack = (currentPlayer) => {
    const nextPlayer = getNextTrack(currentPlayer);

    if (!nextPlayer) {
      const audio = currentPlayer ? getAudio(currentPlayer) : null;
      userStoppedManually = true;
      if (audio && !audio.paused) audio.pause();
      resetMiniPlayer();
      persistPlayerState();
      return;
    }

    playAudio(nextPlayer, { isAutoAdvance: true });
  };

  const setMediaSessionActionHandler = (action, handler) => {
    if (!('mediaSession' in navigator) || typeof navigator.mediaSession.setActionHandler !== 'function') {
      return;
    }

    try {
      navigator.mediaSession.setActionHandler(action, handler);
    } catch (error) {
      logAudioDiagnostics('media-session-action-unsupported', { action, message: error?.message || String(error) });
    }
  };

  setMediaSessionActionHandler('play', () => {
    if (activePlayer) playAudio(activePlayer);
  });
  setMediaSessionActionHandler('pause', () => {
    const audio = activePlayer ? getAudio(activePlayer) : null;
    if (audio) {
      userStoppedManually = true;
      audio.pause();
    }
  });
  setMediaSessionActionHandler('previoustrack', () => {
    if (!activePlayer) return;
    const currentIndex = musicPlayers.indexOf(activePlayer);
    const previousPlayer = musicPlayers[Math.max(0, currentIndex - 1)] || musicPlayers[0];
    if (previousPlayer) playAudio(previousPlayer);
  });
  setMediaSessionActionHandler('nexttrack', () => playNextTrack(activePlayer || musicPlayers[0]));
  setMediaSessionActionHandler('seekto', (details) => {
    const audio = activePlayer ? getAudio(activePlayer) : null;
    if (!audio || !Number.isFinite(details.seekTime)) return;
    const duration = getSafeDuration(audio, getFallbackDuration(activePlayer));
    audio.currentTime = duration > 0 ? Math.min(Math.max(details.seekTime, 0), duration) : Math.max(details.seekTime, 0);
    syncMiniProgress(audio);
    updateMediaSessionPosition(audio);
  });
  const seekActiveAudioBy = (delta) => {
    const audio = activePlayer ? getAudio(activePlayer) : null;
    if (!audio) return;
    const duration = getSafeDuration(audio, getFallbackDuration(activePlayer));
    const nextTime = Math.max(0, audio.currentTime + delta);
    audio.currentTime = duration > 0 ? Math.min(nextTime, duration) : nextTime;
    syncMiniProgress(audio);
    updateActiveLyric(audio, { forceScroll: true, event: 'media-session-seek' });
    updateMediaSessionPosition(audio);
  };
  setMediaSessionActionHandler('seekbackward', (details) => seekActiveAudioBy(-(details?.seekOffset || 10)));
  setMediaSessionActionHandler('seekforward', (details) => seekActiveAudioBy(details?.seekOffset || 10));

  musicPlayers.forEach((musicPlayer) => {
    const audio = getAudio(musicPlayer);
    const playToggle = getPlayToggle(musicPlayer);
    const status = musicPlayer.querySelector('[data-audio-status]');

    if (audio && musicPlayer.dataset.audioSrc) {
      ['loadstart', 'loadedmetadata', 'durationchange', 'canplay', 'loadeddata', 'waiting', 'stalled', 'timeupdate', 'seeking', 'seeked', 'play', 'playing', 'pause', 'ended', 'error'].forEach((eventName) => {
        audio.addEventListener(eventName, () => {
          lastAudioEvent = eventName;
        }, { passive: true });
      });

      audio.addEventListener('loadstart', () => {
        if (status) {
          status.textContent = '';
        }
      });

      audio.addEventListener('loadedmetadata', () => {
        logAudioDiagnostics('loadedmetadata', {
          track: getTrackTitle(musicPlayer),
          currentSrc: audio.currentSrc || audio.src,
          duration: Number.isFinite(audio.duration) ? Math.round(audio.duration * 100) / 100 : 'unknown'
        });
        syncDuration(musicPlayer);
        setPlayerReadyState(musicPlayer, true);
        if (activePlayer === musicPlayer) updateActiveLyric(audio, { forceScroll: true, event: 'loadedmetadata' });
      });

      audio.addEventListener('durationchange', () => {
        syncDuration(musicPlayer);
      });

      audio.addEventListener('canplay', () => {
        syncDuration(musicPlayer);
        setPlayerReadyState(musicPlayer, true);
      });

      audio.addEventListener('loadeddata', () => {
        syncDuration(musicPlayer);
      });

      const syncActiveTransportFromEvent = () => {
        if (activePlayer === musicPlayer) syncTransportButtons(audio);
      };

      ['waiting', 'stalled', 'playing'].forEach((eventName) => {
        audio.addEventListener(eventName, () => {
          if (activePlayer === musicPlayer && status && eventName === 'waiting') {
            status.textContent = '';
          }
          syncActiveTransportFromEvent();
        });
      });

      audio.addEventListener('timeupdate', () => {
        if (activePlayer === musicPlayer) {
          syncMiniProgress(audio);
          syncExpandedProgress(audio);
          updateActiveLyric(audio);
          updateMediaSessionPosition(audio);
        }
      });

      ['seeking', 'seeked'].forEach((eventName) => {
        audio.addEventListener(eventName, () => {
          if (activePlayer === musicPlayer) {
            syncMiniProgress(audio);
            syncExpandedProgress(audio);
            updateActiveLyric(audio, { forceScroll: eventName === 'seeked', event: eventName });
          }
        });
      });

      audio.addEventListener('play', () => {
        musicPlayer.classList.add('is-playing');
        showMiniPlayer(musicPlayer);
        updateToggle(playToggle, audio, getTrackTitle(musicPlayer));
        syncTransportButtons(audio);

        updateActiveLyric(audio, { event: 'play' });
        startLyricsAnimationLoop(audio);
        updateVisualizerToggleUI();
        if (visualizerEnabled) {
          startVisualizer(audio);
        }
        runVisualizerSelfChecksAfterPlay(audio);
        runVinylSelfChecksAfterPlay(audio);
        updateMediaSessionMetadata(musicPlayer);
        persistPlayerState();

        if (miniPlayer) {
          miniPlayer.classList.add('is-playing');
          expandedVisualizer?.classList.add('is-playing');
          updateToggle(mini.toggle, audio, getTrackTitle(musicPlayer));
        }

        updateToggle(mobileToggle, audio, getTrackTitle(musicPlayer));
        syncTransportButtons(audio);
      });

      audio.addEventListener('pause', () => {
        musicPlayer.classList.remove('is-playing');
        if (activePlayer === musicPlayer) {
          stopLyricsAnimationLoop();
          updateActiveLyric(audio, { event: 'pause' });
        }
        updateToggle(playToggle, audio, getTrackTitle(musicPlayer));

        stopVisualizer(audio.ended ? 'idle' : 'paused');
        updateVisualizerToggleUI();
        if ('mediaSession' in navigator && activePlayer === musicPlayer) {
          navigator.mediaSession.playbackState = 'paused';
          updateMediaSessionPosition(audio);
        }
        persistPlayerState();

        if (activePlayer === musicPlayer && miniPlayer) {
          miniPlayer.classList.remove('is-playing');
          expandedVisualizer?.classList.remove('is-playing');
          updateToggle(mini.toggle, audio, getTrackTitle(musicPlayer));
        }

        updateToggle(mobileToggle, audio, getTrackTitle(musicPlayer));
        syncTransportButtons(audio);
      });

      audio.addEventListener('ended', () => {
        const shouldAdvance = activePlayer === musicPlayer && !userStoppedManually;
        stopLyricsAnimationLoop();
        updateActiveLyric(audio, { forceScroll: true, event: 'ended' });
        const nextPlayer = shouldAdvance ? getNextTrack(musicPlayer) : null;
        const willAutoContinue = Boolean(nextPlayer);

        musicPlayer.classList.toggle('is-playing', willAutoContinue && nextPlayer === musicPlayer);
        audio.currentTime = 0;
        if (!willAutoContinue) {
          updateToggle(playToggle, audio, getTrackTitle(musicPlayer));
        }

        if (activePlayer === musicPlayer && miniPlayer) {
          miniPlayer.classList.toggle('is-playing', willAutoContinue);
          expandedVisualizer?.classList.toggle('is-playing', willAutoContinue);
          syncMiniProgress(audio);
          if (!willAutoContinue) {
            updateToggle(mini.toggle, audio, getTrackTitle(musicPlayer));
          }
        }

        stopVisualizer(willAutoContinue ? 'paused' : 'idle');
        updateVisualizerToggleUI();
        if ('mediaSession' in navigator && activePlayer === musicPlayer) {
          navigator.mediaSession.playbackState = willAutoContinue ? 'paused' : 'none';
        }
        persistPlayerState();

        if (willAutoContinue) {
          playAudio(nextPlayer, { isAutoAdvance: true });
          return;
        }

        syncTransportButtons(audio);

        if (shouldAdvance) {
          resetMiniPlayer();
          persistPlayerState();
        }
      });

      audio.addEventListener('error', () => {
        logAudioDiagnostics('audio-error', {
          track: getTrackTitle(musicPlayer),
          selectedSrc: getVerifiedAudioSource(musicPlayer),
          currentSrc: audio.currentSrc || audio.src,
          code: audio.error ? audio.error.code : 'unknown'
        });
        setPlayerReadyState(musicPlayer, false);
        musicPlayer.classList.remove('is-playing');

        if (status) {
          status.textContent = translate('audio.unavailable');
        }

        stopVisualizer('idle');
        updateVisualizerToggleUI();
        if ('mediaSession' in navigator && activePlayer === musicPlayer) {
          navigator.mediaSession.playbackState = 'paused';
          updateMediaSessionPosition(audio);
        }
        persistPlayerState();

        if (activePlayer === musicPlayer && miniPlayer) {
          miniPlayer.classList.remove('is-playing');
          expandedVisualizer?.classList.remove('is-playing');
          updateToggle(mini.toggle, audio, getTrackTitle(musicPlayer));
        }

        updateToggle(mobileToggle, audio, getTrackTitle(musicPlayer), { forceIdle: true });
        syncTransportButtons(audio, { forceIdle: true });
      });

      window.addEventListener('carine:languagechange', () => {
        updateToggle(playToggle, audio, getTrackTitle(musicPlayer));
        if (activePlayer === musicPlayer) syncTransportButtons(audio);

        if (status && status.textContent) {
          status.textContent = musicPlayer.classList.contains('is-ready') ? '' : translate('audio.unavailable');
        }
      });

      playToggle.addEventListener('click', () => {
        if (audio.paused) {
          playAudio(musicPlayer);
        } else {
          userStoppedManually = true;
          audio.pause();
        }
      });

      prepareAudio(musicPlayer);
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

      const audio = getAudio(activePlayer);

      if (audio.paused) {
        playAudio(activePlayer);
      } else {
        userStoppedManually = true;
        audio.pause();
      }
    });

    let isSeekingWithPointer = false;

    const canSeekActiveAudio = () => {
      const audio = activePlayer ? getAudio(activePlayer) : null;
      return Boolean(audio && getSafeDuration(audio, 0) > 0);
    };

    const seekMiniProgress = ({ commit = false } = {}) => {
      if (!activePlayer || !canSeekActiveAudio()) {
        if (mini.progress) {
          mini.progress.disabled = true;
          mini.progress.setAttribute('aria-disabled', 'true');
        }
        return;
      }

      const audio = getAudio(activePlayer);
      const safeDuration = getSafeDuration(audio, 0);
      const nextTime = Math.min(Math.max(Number(mini.progress.value) || 0, 0), safeDuration);
      mini.progress.disabled = false;
      mini.progress.setAttribute('aria-disabled', 'false');
      mini.current.textContent = formatTime(nextTime);
      setRangeFill(mini.progress, nextTime, safeDuration);

      if (commit || !isSeekingWithPointer) {
        audio.currentTime = nextTime;
        syncMiniProgress(audio);
        updateActiveLyric(audio);
        persistPlayerState();
      }
    };

    const beginMiniSeek = (event) => {
      if (!canSeekActiveAudio()) {
        return;
      }
      isSeekingWithPointer = true;
      mini.progress.classList.add('is-seeking');
      if (event.pointerId !== undefined && typeof mini.progress.setPointerCapture === 'function') {
        mini.progress.setPointerCapture(event.pointerId);
      }
    };

    const endMiniSeek = (event) => {
      if (!isSeekingWithPointer) {
        return;
      }
      isSeekingWithPointer = false;
      mini.progress.classList.remove('is-seeking');
      if (event?.pointerId !== undefined && typeof mini.progress.releasePointerCapture === 'function') {
        try { mini.progress.releasePointerCapture(event.pointerId); } catch (error) { /* Pointer capture may already be released. */ }
      }
      seekMiniProgress({ commit: true });
    };

    mini.progress.addEventListener('pointerdown', beginMiniSeek);
    mini.progress.addEventListener('pointermove', () => {
      if (isSeekingWithPointer) seekMiniProgress();
    });
    mini.progress.addEventListener('pointerup', endMiniSeek);
    mini.progress.addEventListener('pointercancel', endMiniSeek);
    mini.progress.addEventListener('touchstart', beginMiniSeek, { passive: true });
    mini.progress.addEventListener('touchmove', () => seekMiniProgress(), { passive: true });
    mini.progress.addEventListener('touchend', endMiniSeek);
    mini.progress.addEventListener('input', () => seekMiniProgress());
    mini.progress.addEventListener('change', () => seekMiniProgress({ commit: true }));

    window.addEventListener('carine:languagechange', () => {
      syncLyricsExpandMode();
      if (!activePlayer) {
        mini.title.dataset.hasTrack = 'false';
        mini.title.textContent = translate('mini.noTrack');
        return;
      }

      const audio = getAudio(activePlayer);
      const trackTitle = getTrackTitle(activePlayer);
      mini.title.textContent = trackTitle;
      updateToggle(mini.toggle, audio, trackTitle);
      mini.cover.alt = `${trackTitle} ${translate('audio.coverArt')}`;
    });

    mini.volume.addEventListener('input', () => {
      musicPlayers.forEach((player) => {
        const audio = getAudio(player);

        if (audio) {
          audio.volume = Number(mini.volume.value);
        }
      });

      setRangeFill(mini.volume, mini.volume.value, mini.volume.max);
      persistPlayerState();
    });
  }

  if (expandedProgress) {
    const canSeekExpandedAudio = () => {
      const audio = activePlayer ? getAudio(activePlayer) : null;
      return Boolean(audio && getSafeDuration(audio, 0) > 0);
    };

    const seekExpandedProgress = ({ commit = false } = {}) => {
      if (!activePlayer || !canSeekExpandedAudio()) return;
      const audio = getAudio(activePlayer);
      const safeDuration = getSafeDuration(audio, 0);
      const nextTime = Math.min(Math.max(Number(expandedProgress.value) || 0, 0), safeDuration);
      expandedProgress.disabled = false;
      expandedProgress.setAttribute('aria-disabled', 'false');
      if (expandedCurrent) expandedCurrent.textContent = formatTime(nextTime);
      setRangeFill(expandedProgress, nextTime, safeDuration);

      if (commit || !isExpandedSeekingWithPointer) {
        audio.currentTime = nextTime;
        syncMiniProgress(audio);
        updateActiveLyric(audio);
        persistPlayerState();
      }
    };

    const beginExpandedSeek = (event) => {
      if (!canSeekExpandedAudio()) return;
      isExpandedSeekingWithPointer = true;
      expandedProgress.classList.add('is-seeking');
      if (event.pointerId !== undefined && typeof expandedProgress.setPointerCapture === 'function') {
        expandedProgress.setPointerCapture(event.pointerId);
      }
    };

    const endExpandedSeek = (event) => {
      if (!isExpandedSeekingWithPointer) return;
      isExpandedSeekingWithPointer = false;
      expandedProgress.classList.remove('is-seeking');
      if (event?.pointerId !== undefined && typeof expandedProgress.releasePointerCapture === 'function') {
        try { expandedProgress.releasePointerCapture(event.pointerId); } catch (error) { /* Pointer capture may already be released. */ }
      }
      seekExpandedProgress({ commit: true });
    };

    expandedProgress.addEventListener('pointerdown', beginExpandedSeek);
    expandedProgress.addEventListener('pointermove', () => {
      if (isExpandedSeekingWithPointer) seekExpandedProgress();
    });
    expandedProgress.addEventListener('pointerup', endExpandedSeek);
    expandedProgress.addEventListener('pointercancel', endExpandedSeek);
    expandedProgress.addEventListener('touchstart', beginExpandedSeek, { passive: true });
    expandedProgress.addEventListener('touchmove', () => seekExpandedProgress(), { passive: true });
    expandedProgress.addEventListener('touchend', endExpandedSeek);
    expandedProgress.addEventListener('input', () => seekExpandedProgress());
    expandedProgress.addEventListener('change', () => seekExpandedProgress({ commit: true }));
  }

  lyricsTabs.forEach((tab) => {
    tab.addEventListener('click', () => setLyricsTab(tab.dataset.lyricsTab));
  });
  lyricsExpandToggle?.addEventListener('click', () => setLyricsExpanded(!isLyricsExpanded));
  lyricsReturnButton?.addEventListener('click', () => setLyricsExpanded(false));
  lyricsMoreToggle?.addEventListener('click', () => setLyricsMoreOpen(!isLyricsMoreOpen));
  lyricsMoreClose?.addEventListener('click', () => setLyricsMoreOpen(false));
  lyricsMoreDrawer?.addEventListener('click', (event) => {
    if (event.target === lyricsMoreDrawer) setLyricsMoreOpen(false);
  });
  setLyricsTab('lyrics');

  window.addEventListener('carine:trackchange', (event) => {
    const trackId = event?.detail?.trackId || activePlayer?.dataset.trackId || '';
    const trackPlayer = musicPlayers.find((player) => player.dataset.trackId === trackId) || activePlayer;
    if (!trackPlayer) return;
    if (currentLyricsPlayer !== trackPlayer) {
      loadLyricsForPlayer(trackPlayer);
      return;
    }
    updateActiveLyric(getAudio(trackPlayer), { forceScroll: true, event: 'trackchange' });
  });

  const toggleShuffle = () => {
    shuffleEnabled = !shuffleEnabled;
    updateCommandButtons();
    persistPlayerState();
  };

  const cycleRepeat = () => {
    repeatMode = repeatMode === 'all' ? 'one' : repeatMode === 'one' ? 'off' : 'all';
    updateCommandButtons();
    persistPlayerState();
  };

  visualizerToggle?.addEventListener('change', () => {
    if (visualizerToggle.checked) {
      enableVisualizerFromGesture();
    } else {
      disableVisualizer();
    }
  });

  visualizerStyleSelect?.addEventListener('change', async () => {
    const nextStyle = normalizeVisualizationStyle(visualizerStyleSelect.value);
    selectedVisualizationStyle = nextStyle;
    writeVisualizerStylePreference(nextStyle);
    visualizerController?.switchMode(nextStyle);
    updateVisualizerToggleUI();

    const audio = activePlayer ? getAudio(activePlayer) : null;
    if (visualizerEnabled && audio && !audio.paused && !audio.ended) {
      try {
        const context = await ensureAudioContextForGesture({ allowCreate: true, allowResume: true });
        if (context) connectAudioToAnalyser(audio);
      } catch (error) {
        warnAnalyzerFallback(error?.message || error);
      }
      startVisualizer(audio);
    } else {
      runIdleVisualizer(audio && !audio.ended ? 'paused' : 'idle');
    }
  });

  shuffleButton?.addEventListener('click', toggleShuffle);
  mobileShuffle?.addEventListener('click', toggleShuffle);
  miniShuffle?.addEventListener('click', toggleShuffle);
  repeatButton?.addEventListener('click', cycleRepeat);
  mobileRepeat?.addEventListener('click', cycleRepeat);
  miniRepeat?.addEventListener('click', cycleRepeat);
  nextButton?.addEventListener('click', () => playNextTrack(activePlayer || musicPlayers[0]));
  mobilePrevious?.addEventListener('click', () => playPreviousTrack(activePlayer || musicPlayers[0]));
  mobileNext?.addEventListener('click', () => playNextTrack(activePlayer || musicPlayers[0]));

  // Keep the drawer outside the inline player's clipping/transform context so it is
  // always positioned against the visual viewport, including mobile Safari.
  if (consolePlaylistDrawer && consolePlaylistDrawer.parentElement !== document.body) {
    document.body.append(consolePlaylistDrawer);
  }

  let playlistFocusRequest = 0;
  const getPlaylistFocusableElements = () => Array.from(consolePlaylistDrawer?.querySelectorAll(
    'button:not([disabled]):not([tabindex="-1"]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  ) || []).filter((element) => element.getClientRects().length > 0);

  const setConsolePlaylistOpen = (isOpen, { returnFocus = true } = {}) => {
    const open = Boolean(isOpen);
    const wasOpen = Boolean(consolePlaylistDrawer?.classList.contains('is-open'));
    playlistFocusRequest += 1;
    const focusRequest = playlistFocusRequest;

    consolePlaylistDrawer?.classList.toggle('is-open', open);
    consolePlaylistDrawer?.setAttribute('aria-hidden', String(!open));
    consolePlaylistToggle?.setAttribute('aria-expanded', String(open));
    expandedPlayerCard?.classList.toggle('is-playlist-open', open);

    if (open && !wasOpen) {
      window.requestAnimationFrame(() => {
        if (focusRequest !== playlistFocusRequest || !consolePlaylistDrawer?.classList.contains('is-open')) return;
        const firstTrack = consolePlaylistDrawer.querySelector('[data-expanded-track-option]');
        (firstTrack || getPlaylistFocusableElements()[0])?.focus({ preventScroll: true });
      });
    } else if (!open && wasOpen && returnFocus) {
      consolePlaylistToggle?.focus({ preventScroll: true });
    }
  };

  consolePlaylistToggle?.addEventListener('click', () => {
    setConsolePlaylistOpen(!consolePlaylistDrawer?.classList.contains('is-open'));
  });
  consolePlaylistCloseButtons.forEach((button) => button.addEventListener('click', () => setConsolePlaylistOpen(false)));

  consolePlaylistDrawer?.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      setConsolePlaylistOpen(false);
      return;
    }

    if (event.key !== 'Tab') return;
    const focusable = getPlaylistFocusableElements();
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  expandedTrackOptions.forEach((option) => {
    option.addEventListener('click', () => {
      const selectedPlayer = musicPlayers.find((player) => player.dataset.trackId === option.dataset.trackId);
      if (selectedPlayer) {
        playAudio(selectedPlayer);
        setConsolePlaylistOpen(false);
        if (isLyricsExpanded) setLyricsMoreOpen(false);
      }
    });
  });
  mobileToggle?.addEventListener('click', () => {
    if (!activePlayer) return;
    const audio = getAudio(activePlayer);
    if (audio.paused) playAudio(activePlayer);
    else {
      userStoppedManually = true;
      audio.pause();
    }
  });

  const setMobilePlayerOpen = (isOpen) => {
    if (!mobilePlayer) return;
    const isInlinePlayer = mobilePlayer.classList.contains('inline-listening-experience');
    mobilePlayer.classList.toggle(isInlinePlayer ? 'is-expanded-player' : 'is-open', isOpen);
    if (isOpen) {
      setLyricsExpanded(false);
      setLyricsTab('lyrics');
    } else {
      setConsolePlaylistOpen(false);
    }
    document.body.classList.toggle('expanded-player-open', isOpen);
    mobilePlayer.setAttribute('aria-hidden', isInlinePlayer ? 'false' : String(!isOpen));
    [miniExpand, playerExpand].forEach((button) => button?.setAttribute('aria-expanded', String(isOpen)));
    if (playerExpand) {
      const label = isOpen ? translate('mini.close') : translate('mini.expand');
      playerExpand.setAttribute('aria-label', label);
      playerExpand.setAttribute('title', label);
      playerExpand.classList.toggle('is-active', isOpen);
    }
    syncLyricsExpandMode();
    if (isOpen && activePlayer) {
      const audio = getAudio(activePlayer);
      syncExpandedProgress(audio);
      updateActiveLyric(audio);
      if (activeLyricsTab !== 'lyrics') renderTrackInfo(activePlayer);
    }
  };

  let expandedSheetTouchStartY = 0;
  let expandedSheetTouchDeltaY = 0;
  let expandedSheetTouchStartedInLyrics = false;
  let expandedSheetLyricsStartTop = 0;
  mobilePlayer?.addEventListener('touchstart', (event) => {
    expandedSheetTouchStartY = event.touches[0]?.clientY || 0;
    expandedSheetTouchDeltaY = 0;
    const target = event.target instanceof Element ? event.target : null;
    const touchedScrollablePanel = target?.closest('[data-lyrics-scroll], [data-track-info-panel]');
    expandedSheetTouchStartedInLyrics = Boolean(touchedScrollablePanel);
    expandedSheetLyricsStartTop = touchedScrollablePanel ? touchedScrollablePanel.scrollTop : 0;
  }, { passive: true });
  mobilePlayer?.addEventListener('touchmove', (event) => {
    const currentY = event.touches[0]?.clientY || expandedSheetTouchStartY;
    expandedSheetTouchDeltaY = Math.max(0, currentY - expandedSheetTouchStartY);
    const shouldReserveGestureForLyrics = expandedSheetTouchStartedInLyrics && expandedSheetLyricsStartTop > 2;
    const card = mobilePlayer.querySelector('.mobile-player-card');
    if (card && expandedSheetTouchDeltaY > 8 && window.innerWidth <= 760 && !shouldReserveGestureForLyrics) {
      card.style.transform = `translate3d(0, ${Math.min(expandedSheetTouchDeltaY, 120)}px, 0)`;
    }
  }, { passive: true });
  mobilePlayer?.addEventListener('touchend', () => {
    const card = mobilePlayer.querySelector('.mobile-player-card');
    if (card) card.style.transform = '';
    const shouldReserveGestureForLyrics = expandedSheetTouchStartedInLyrics && expandedSheetLyricsStartTop > 2;
    if (expandedSheetTouchDeltaY > 96 && window.innerWidth <= 760 && !shouldReserveGestureForLyrics) {
      setMobilePlayerOpen(false);
    }
    expandedSheetTouchStartedInLyrics = false;
    expandedSheetLyricsStartTop = 0;
  });

  miniExpand?.addEventListener('click', () => setMobilePlayerOpen(!mobilePlayer?.classList.contains('is-open')));
  playerExpand?.addEventListener('click', () => setMobilePlayerOpen(!mobilePlayer?.classList.contains('is-expanded-player')));
  buttonListenerStatus.expandCollapse = Boolean(miniExpand || playerExpand);
  mobileClose?.addEventListener('click', () => setMobilePlayerOpen(false));
  mobilePlayer?.addEventListener('click', (event) => {
    if (event.target === mobilePlayer) setMobilePlayerOpen(false);
  });

  window.addEventListener('carine:languagechange', () => {
    updateCommandButtons();
    if (activePlayer) {
      syncStage(activePlayer);
      renderTrackInfo(activePlayer);
    } else {
      if (mobileTitle) mobileTitle.textContent = translate('mini.noTrack');
      updateToggle(mobileToggle, null, translate('mini.noTrack'));
    }
  });

  window.addEventListener('carine:trackchange', () => {
    const audio = activePlayer ? getAudio(activePlayer) : null;
    syncTransportButtons(audio);
  });

  window.debugMusicState = () => {
    const audio = activePlayer ? getAudio(activePlayer) : null;
    const report = {
      activeTrackId,
      activeTrackTitle: activeTrack?.title || '',
      activeAudioSrc: audio?.currentSrc || audio?.src || activeTrack?.audioSrc || '',
      audioPaused: audio?.paused ?? true,
      audioCurrentTime: Number.isFinite(audio?.currentTime) ? Math.round(audio.currentTime * 1000) / 1000 : 0,
      loadedLyricsPath,
      activeLyricsTrackId: currentLyricsPlayer?.dataset.trackId || '',
      currentTab: activeLyricsTab,
      buttonListenerStatus: {
        playPause: Boolean(mobileToggle && musicPlayers.every((player) => getPlayToggle(player))),
        previous: Boolean(mobilePrevious),
        next: Boolean(nextButton || mobileNext),
        shuffle: Boolean(shuffleButton || mobileShuffle || miniShuffle),
        repeat: Boolean(repeatButton || mobileRepeat || miniRepeat),
        playlist: Boolean(consolePlaylistToggle),
        expandCollapse: Boolean(miniExpand || playerExpand),
        tabs: lyricsTabs.length === 3
      },
      playlistTrackCount: musicPlayers.length
    };
    window.console?.info?.('[music state]', report);
    return report;
  };

  const storedState = getStoredPlayerState();
  shuffleEnabled = Boolean(storedState.shuffleEnabled);
  repeatMode = ['all', 'one', 'off'].includes(storedState.repeatMode) ? storedState.repeatMode : 'all';
  if (mini?.volume && Number.isFinite(storedState.volume)) {
    mini.volume.value = String(Math.min(Math.max(storedState.volume, 0), 1));
    setRangeFill(mini.volume, mini.volume.value, mini.volume.max);
  }
  updateCommandButtons();
  const restoredPlayer = musicPlayers.find((player) => player.dataset.trackId === storedState.activeTrackId)
    || musicPlayers[Number.isInteger(storedState.activeIndex) ? storedState.activeIndex : 0]
    || musicPlayers[0];
  if (restoredPlayer) {
    const restoredAudio = getAudio(restoredPlayer);
    if (restoredAudio && Number.isFinite(storedState.currentTime) && storedState.currentTime > 0) {
      restoredAudio.currentTime = storedState.currentTime;
    }
    setActiveTrack(restoredPlayer);
  }
}

// Decorative atmospheres are activated only near the viewport so the background
// remains inexpensive on mobile while preserving the page's cinematic depth.
const sectionAtmospheres = [...document.querySelectorAll('[data-section-atmosphere], .section')];

if ('IntersectionObserver' in window && sectionAtmospheres.length) {
  const atmosphereObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('is-atmosphere-visible', entry.isIntersecting);
    });
  }, { rootMargin: '35% 0px', threshold: 0.01 });

  sectionAtmospheres.forEach((atmosphere) => atmosphereObserver.observe(atmosphere));
} else {
  sectionAtmospheres.forEach((atmosphere) => atmosphere.classList.add('is-atmosphere-visible'));
}

// Keep pointer depth deliberately subtle and disable it when reduced motion is
// requested. CSS consumes these values without changing the established palette.
const premiumDepthQuery = window.matchMedia('(prefers-reduced-motion: no-preference) and (pointer: fine)');
let premiumDepthFrame = 0;

const resetPremiumDepth = () => {
  document.documentElement.style.setProperty('--premium-depth-rotate-x', '0deg');
  document.documentElement.style.setProperty('--premium-depth-rotate-y', '0deg');
  document.documentElement.style.setProperty('--premium-depth-offset-x', '0px');
  document.documentElement.style.setProperty('--premium-depth-offset-y', '0px');
  document.documentElement.style.setProperty('--premium-depth-origin-x', '50%');
  document.documentElement.style.setProperty('--premium-depth-origin-y', '50%');
};

const updatePremiumDepth = (event) => {
  if (!premiumDepthQuery.matches || premiumDepthFrame) return;

  premiumDepthFrame = window.requestAnimationFrame(() => {
    const depthX = ((event.clientX / window.innerWidth) - 0.5).toFixed(3);
    const depthY = ((event.clientY / window.innerHeight) - 0.5).toFixed(3);
    document.documentElement.style.setProperty('--premium-depth-rotate-x', `${depthY * -0.7}deg`);
    document.documentElement.style.setProperty('--premium-depth-rotate-y', `${depthX * 0.7}deg`);
    document.documentElement.style.setProperty('--premium-depth-offset-x', `${depthX * 12}px`);
    document.documentElement.style.setProperty('--premium-depth-offset-y', `${depthY * 12}px`);
    document.documentElement.style.setProperty('--premium-depth-origin-x', `${50 + (depthX * 3)}%`);
    document.documentElement.style.setProperty('--premium-depth-origin-y', `${50 + (depthY * 3)}%`);
    premiumDepthFrame = 0;
  });
};

window.addEventListener('pointermove', updatePremiumDepth, { passive: true });
window.addEventListener('blur', resetPremiumDepth);
premiumDepthQuery.addEventListener?.('change', resetPremiumDepth);
