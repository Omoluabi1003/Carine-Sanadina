const LANGUAGE_STORAGE_KEY = 'carine-sanadina-language';
const DEFAULT_LANGUAGE = 'en';

const languageLabels = {
  en: 'English',
  fr: 'Français',
  ln: 'Lingala',
  es: 'Español',
  sw: 'Kiswahili',
  yo: 'Yorùbá'
};

const translations = {};

translations.en = {
  'html.lang': 'en',
  'meta.title': 'Carine Sanadina | Healthcare Professional, Author & Survivor Advocate',
  'meta.description': 'Carine Sanadina is a Jacksonville, Florida-based healthcare professional, author, survivor advocate, and emotional wellness voice transforming pain into healing-centered inspiration.',
  'meta.ogTitle': 'Carine Sanadina | Healing-Centered Author & Survivor Advocate',
  'meta.ogDescription': 'Explore the books, advocacy, and emotional wellness voice of Carine Sanadina, a Congolese-born healthcare professional and author based in Jacksonville, Florida.',
  'meta.twitterDescription': 'Turning pain into healing, survival into purpose, and stories into restoration.',
  'language.label': 'Language',
  'language.selectorLabel': 'Choose website language',
  'a11y.skip': 'Skip to main content',
  'a11y.primaryNav': 'Primary navigation',
  'a11y.home': 'Carine Sanadina home',
  'a11y.toggleNav': 'Toggle navigation',
  'a11y.primaryCta': 'Primary calls to action',
  'nav.about': 'About',
  'nav.works': 'Featured Works',
  'nav.music': 'Music',
  'nav.focus': 'Focus Areas',
  'nav.positioning': 'Professional Voice',
  'nav.contact': 'Contact',
  'hero.location': 'Jacksonville, Florida',
  'hero.subtitle': 'Healthcare Professional | Author | Survivor Advocate | Emotional Wellness Voice',
  'hero.heading': 'Turning pain into healing, survival into purpose, and stories into restoration.',
  'hero.viewWorks': 'View Featured Works',
  'hero.listenMusic': 'Listen to Music',
  'hero.contactCarine': 'Contact Carine',
  'portrait.figureLabel': 'Carine Sanadina official portrait feature',
  'portrait.alt': 'Carine Sanadina official portrait',
  'portrait.fallback': 'Carine Sanadina official portrait is temporarily unavailable.',
  'portrait.caption': 'Official portrait of Carine Sanadina — healing-centered stories with courage, faith, and restoration.',
  'about.kicker': 'About Carine',
  'about.heading': 'A voice of resilience, restoration, and human-centered healing.',
  'about.body1': 'Carine Sanadina is a Congolese-born, Jacksonville-based healthcare professional, author, artist, and survivor advocate whose work transforms lived pain into healing-centered literature and inspiration.',
  'about.body2': 'Her work explores domestic violence survival, toxic relationships, emotional wounds, faith, resilience, motherhood, immigrant experience, and the journey from brokenness to restoration.',
  'works.kicker': 'Featured Works',
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
  'tracks.consolation.playLabel': 'Play Consolation',
  'tracks.gentillesse.title': 'La Gentillesse',
  'tracks.gentillesse.audioLabel': 'La Gentillesse by Carine Sanadina',
  'tracks.gentillesse.coverAlt': 'La Gentillesse cover art',
  'tracks.gentillesse.fallback': 'La Gentillesse cover art is temporarily unavailable.',
  'tracks.gentillesse.number': 'Track 02',
  'tracks.gentillesse.description': 'Faith-filled kindness anthem',
  'tracks.gentillesse.playLabel': 'Play La Gentillesse',
  'tracks.wonderful.title': 'Wonderful',
  'tracks.wonderful.audioLabel': 'Wonderful by Carine Sanadina',
  'tracks.wonderful.coverAlt': 'Wonderful cover art',
  'tracks.wonderful.fallback': 'Wonderful cover art is temporarily unavailable.',
  'tracks.wonderful.number': 'Track 03',
  'tracks.wonderful.description': 'Joyful praise and gratitude',
  'tracks.wonderful.playLabel': 'Play Wonderful',
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
  'cta.body': 'Choose a premium inquiry path for speaking invitations, interviews, creative collaborations, or intimate conversations shaped by resilience, faith, and restoration.',
  'cta.disclaimer': 'This website does not establish agency, management, publishing, partnership, employment, or legal representation. Collaboration or booking discussions require separate written agreement.',
  'cta.optionsLabel': 'Contact options',
  'cta.invite': 'Invite Carine to Speak',
  'cta.media': 'Media Inquiry',
  'cta.music': 'Music Collaboration',
  'cta.books': 'Book Conversations',
  'legal.metaTitle': 'Legal / Terms | Carine Sanadina',
  'legal.metaDescription': 'Legal and ownership notices for the Carine Sanadina website, including platform ownership, artist materials, media use, and contact guidance.',
  'legal.metaOgDescription': 'Legal and ownership notices for the Carine Sanadina website platform and approved artist materials.',
  'legal.kicker': 'Legal / Terms',
  'legal.heading': 'Website Ownership and Use Notice',
  'legal.intro': 'These notices clarify ownership, authorized use, and representation boundaries for the Carine Sanadina website while keeping the experience respectful, collaborative, and transparent.',
  'legal.ariaLabel': 'Legal terms and ownership notices',
  'legal.ownership.title': 'Ownership and Platform Notice',
  'legal.ownership.body': 'The website concept, design, structure, code implementation, visual direction, digital experience, layout, and creative presentation are produced and managed by Omoluabi Productions, a creative project operated under ETL GIS Consulting LLC. Unless otherwise stated, the website platform and related digital presentation elements are owned or controlled by ETL GIS Consulting LLC.',
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
  'tracks.consolation.playLabel': 'Lire Consolation',
  'tracks.gentillesse.coverAlt': 'Pochette de La Gentillesse',
  'tracks.gentillesse.fallback': 'La pochette de La Gentillesse est temporairement indisponible.',
  'tracks.gentillesse.number': 'Titre 02',
  'tracks.gentillesse.description': 'Hymne de bonté porté par la foi',
  'tracks.gentillesse.playLabel': 'Lire La Gentillesse',
  'tracks.wonderful.coverAlt': 'Pochette de Wonderful',
  'tracks.wonderful.fallback': 'La pochette de Wonderful est temporairement indisponible.',
  'tracks.wonderful.number': 'Titre 03',
  'tracks.wonderful.description': 'Louange joyeuse et gratitude',
  'tracks.wonderful.playLabel': 'Lire Wonderful',
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
  'cta.media': 'Demande média',
  'cta.music': 'Collaboration musicale',
  'cta.books': 'Conversations autour des livres',
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
  'tracks.consolation.playLabel': 'Reproducir Consolation',
  'tracks.gentillesse.audioLabel': 'La Gentillesse de Carine Sanadina',
  'tracks.gentillesse.coverAlt': 'Portada de La Gentillesse',
  'tracks.gentillesse.fallback': 'La portada de La Gentillesse no está disponible temporalmente.',
  'tracks.gentillesse.number': 'Pista 02',
  'tracks.gentillesse.description': 'Himno de bondad lleno de fe',
  'tracks.gentillesse.playLabel': 'Reproducir La Gentillesse',
  'tracks.wonderful.audioLabel': 'Wonderful de Carine Sanadina',
  'tracks.wonderful.coverAlt': 'Portada de Wonderful',
  'tracks.wonderful.fallback': 'La portada de Wonderful no está disponible temporalmente.',
  'tracks.wonderful.number': 'Pista 03',
  'tracks.wonderful.description': 'Alabanza alegre y gratitud',
  'tracks.wonderful.playLabel': 'Reproducir Wonderful',
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
  'cta.media': 'Consulta de medios',
  'cta.music': 'Colaboración musical',
  'cta.books': 'Conversaciones sobre libros',
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
  'tracks.consolation.playLabel': 'Beta Loyembo Libondisi',
  'tracks.gentillesse.title': 'Boboto',
  'tracks.gentillesse.audioLabel': 'Boboto ya Carine Sanadina',
  'tracks.gentillesse.coverAlt': 'Ezipeli ya loyembo Boboto',
  'tracks.gentillesse.fallback': 'Ezipeli ya loyembo Boboto ezali komonana te mpo na mwa ntango.',
  'tracks.gentillesse.number': 'Loyembo 02',
  'tracks.gentillesse.description': 'Loyembo ya boboto oyo etondi na kondima',
  'tracks.gentillesse.playLabel': 'Beta Loyembo Boboto',
  'tracks.wonderful.title': 'Kitoko mingi',
  'tracks.wonderful.audioLabel': 'Kitoko mingi ya Carine Sanadina',
  'tracks.wonderful.coverAlt': 'Ezipeli ya loyembo Kitoko mingi',
  'tracks.wonderful.fallback': 'Ezipeli ya loyembo Kitoko mingi ezali komonana te mpo na mwa ntango.',
  'tracks.wonderful.number': 'Loyembo 03',
  'tracks.wonderful.description': 'Masanzoli ya esengo mpe matondi',
  'tracks.wonderful.playLabel': 'Beta Loyembo Kitoko mingi',
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
  'cta.media': 'Mituna ya koyebisa bato',
  'cta.music': 'Kosala elongo na miziki',
  'cta.books': 'Masolo ya mikanda',
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
  "tracks.consolation.playLabel": "Cheza Faraja",
  "tracks.gentillesse.title": "La Gentillesse",
  "tracks.gentillesse.audioLabel": "La Gentillesse na Carine Sanadina",
  "tracks.gentillesse.coverAlt": "Sanaa ya jalada la La Gentillesse",
  "tracks.gentillesse.fallback": "Sanaa ya jalada ya La Gentillesse haipatikani kwa sasa.",
  "tracks.gentillesse.number": "Wimbo wa 02",
  "tracks.gentillesse.description": "Wimbo wa fadhili uliojaa imani",
  "tracks.gentillesse.playLabel": "Cheza La Gentillesse",
  "tracks.wonderful.title": "Ajabu",
  "tracks.wonderful.audioLabel": "Ajabu na Carine Sanadina",
  "tracks.wonderful.coverAlt": "Sanaa ya kifuniko cha ajabu",
  "tracks.wonderful.fallback": "Sanaa nzuri ya jalada haipatikani kwa sasa.",
  "tracks.wonderful.number": "Wimbo wa 03",
  "tracks.wonderful.description": "Sifa za furaha na shukrani",
  "tracks.wonderful.playLabel": "Cheza Ajabu",
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
  "cta.media": "Uchunguzi wa Vyombo vya Habari",
  "cta.music": "Ushirikiano wa Muziki",
  "cta.books": "Mazungumzo ya Kitabu",
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
  "tracks.consolation.playLabel": "Play Itunu",
  "tracks.gentillesse.title": "La Gentillesse",
  "tracks.gentillesse.audioLabel": "La Gentillesse nipasẹ Carine Sanadina",
  "tracks.gentillesse.coverAlt": "La Gentillesse ideri aworan",
  "tracks.gentillesse.fallback": "La Gentillesse aworan ideri ko si fun igba diẹ.",
  "tracks.gentillesse.number": "Orin 02",
  "tracks.gentillesse.description": "Orin iyin ti o kun igbagbo",
  "tracks.gentillesse.playLabel": "Play La Gentillesse",
  "tracks.wonderful.title": "Iyanu",
  "tracks.wonderful.audioLabel": "Iyanu nipasẹ Carine Sanadina",
  "tracks.wonderful.coverAlt": "Iyanu ideri aworan",
  "tracks.wonderful.fallback": "Iṣẹ ọna ideri iyalẹnu ko si fun igba diẹ.",
  "tracks.wonderful.number": "Orin 03",
  "tracks.wonderful.description": "Iyin ati idupe",
  "tracks.wonderful.playLabel": "Play Iyanu",
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
  "cta.media": "Iwadii Media",
  "cta.music": "Ifowosowopo Orin",
  "cta.books": "Awọn ibaraẹnisọrọ Iwe",
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

const supportedLanguages = Object.keys(translations);
let currentLanguage = DEFAULT_LANGUAGE;

const translate = (key, language = currentLanguage) => {
  const languageDictionary = translations[language] || translations[DEFAULT_LANGUAGE];
  return languageDictionary[key] || translations[DEFAULT_LANGUAGE][key] || key;
};

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

const applyLanguage = (language) => {
  const nextLanguage = supportedLanguages.includes(language) ? language : DEFAULT_LANGUAGE;
  currentLanguage = nextLanguage;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    if (element.matches('[data-mini-title][data-has-track="true"]')) {
      return;
    }

    element.textContent = translate(element.dataset.i18n, nextLanguage);
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((element) => {
    element.dataset.i18nAttr.split(';').forEach((pair) => {
      const [attribute, key] = pair.split(':');

      if (attribute && key) {
        element.setAttribute(attribute.trim(), translate(key.trim(), nextLanguage));
      }
    });
  });

  document.querySelectorAll('[data-language-option]').forEach((button) => {
    const optionLanguage = button.dataset.languageOption;
    const isActive = optionLanguage === nextLanguage;
    const optionLabel = languageLabels[optionLanguage] || languageLabels[DEFAULT_LANGUAGE];

    button.textContent = optionLabel;
    button.setAttribute('aria-label', optionLabel);
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-checked', String(isActive));
    button.setAttribute('aria-pressed', String(isActive));
  });

  document.querySelectorAll('[data-language-current]').forEach((element) => {
    element.textContent = languageLabels[nextLanguage] || languageLabels[DEFAULT_LANGUAGE];
  });

  document.querySelectorAll('[data-language-trigger]').forEach((trigger) => {
    const activeLabel = languageLabels[nextLanguage] || languageLabels[DEFAULT_LANGUAGE];
    trigger.setAttribute('aria-label', `${translate('language.selectorLabel', nextLanguage)}: ${activeLabel}`);
  });

  storeLanguage(nextLanguage);
  window.dispatchEvent(new CustomEvent('carine:languagechange', { detail: { language: nextLanguage } }));
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

applyLanguage(getStoredLanguage() || DEFAULT_LANGUAGE);

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
  let userStoppedPlayback = false;
  let isSwitchingTracks = false;

  const getAudio = (player) => player.querySelector('audio');
  const getDurationLabel = (player) => player.querySelector('[data-duration]');
  const getPlayToggle = (player) => player.querySelector('[data-play-toggle]');
  const getTrackTitle = (player) => {
    const playToggle = getPlayToggle(player);
    return playToggle && playToggle.dataset.trackKey
      ? translate(playToggle.dataset.trackKey)
      : player.dataset.trackTitle;
  };

  const updateToggle = (button, audio, title) => {
    if (!button) {
      return;
    }

    const isPlaying = audio && !audio.paused && !audio.ended;
    button.setAttribute('aria-label', `${isPlaying ? translate('audio.pause') : translate('audio.play')} ${title}`);
  };

  const getSafeDuration = (audio, fallbackDuration = 100) => (
    audio && Number.isFinite(audio.duration) && audio.duration > 0 ? audio.duration : fallbackDuration
  );

  const syncMiniProgress = (audio) => {
    if (!mini || !audio) {
      return;
    }

    const max = getSafeDuration(audio);
    mini.current.textContent = formatTime(audio.currentTime);
    mini.duration.textContent = Number.isFinite(audio.duration) && audio.duration > 0 ? formatTime(audio.duration) : '0:00';
    mini.progress.max = String(max);
    mini.progress.value = String(Math.min(audio.currentTime, max));
    setRangeFill(mini.progress, mini.progress.value, mini.progress.max);
  };

  const showMiniPlayer = (player) => {
    if (!mini || !miniPlayer) {
      return;
    }

    const audio = getAudio(player);
    activePlayer = player;
    miniPlayer.classList.add('is-visible');
    miniPlayer.setAttribute('aria-hidden', 'false');
    miniPlayer.classList.toggle('is-playing', audio && !audio.paused && !audio.ended);
    mini.cover.src = player.dataset.trackCover;
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
  };

  const resetMiniPlayer = () => {
    activePlayer = null;

    if (!mini || !miniPlayer) {
      return;
    }

    miniPlayer.classList.remove('is-playing', 'is-visible');
    miniPlayer.setAttribute('aria-hidden', 'true');
    mini.cover.removeAttribute('src');
    mini.cover.alt = '';
    mini.title.dataset.hasTrack = 'false';
    mini.title.textContent = translate('mini.noTrack');
    mini.artist.textContent = 'Carine Sanadina';
    mini.current.textContent = '0:00';
    mini.duration.textContent = '0:00';
    mini.progress.max = '100';
    mini.progress.value = '0';
    setRangeFill(mini.progress, 0, 100);
    updateToggle(mini.toggle, null, translate('mini.noTrack'));
  };

  const setPlayerReadyState = (player, isReady) => {
    const playToggle = getPlayToggle(player);
    const status = player.querySelector('[data-audio-status]');

    player.classList.toggle('is-ready', isReady);

    if (playToggle) {
      playToggle.disabled = !isReady;
    }

    if (status && isReady) {
      status.textContent = '';
    }
  };

  const syncDuration = (player) => {
    const audio = getAudio(player);
    const duration = getDurationLabel(player);

    if (!audio || !duration || !Number.isFinite(audio.duration) || audio.duration <= 0) {
      return false;
    }

    duration.textContent = formatTime(audio.duration);

    if (activePlayer === player) {
      syncMiniProgress(audio);
    }

    return true;
  };

  const prepareAudio = (player) => {
    const audio = getAudio(player);
    const audioSrc = player.dataset.audioSrc;

    if (!audio || !audioSrc) {
      setPlayerReadyState(player, false);
      return;
    }

    audio.preload = 'metadata';
    audio.src = audioSrc;
    audio.volume = mini && mini.volume ? Number(mini.volume.value) : 0.85;
    setPlayerReadyState(player, true);
    audio.load();
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

    if (!audio || !player.dataset.audioSrc) {
      setPlayerReadyState(player, false);
      return false;
    }

    isSwitchingTracks = true;
    pauseOtherPlayers(player);
    isSwitchingTracks = false;
    userStoppedPlayback = false;
    showMiniPlayer(player);

    if (audio.ended || audio.currentTime >= getSafeDuration(audio, 0)) {
      audio.currentTime = 0;
    }

    try {
      await audio.play();
      if (status) {
        status.textContent = '';
      }
      return true;
    } catch (error) {
      player.classList.remove('is-playing');
      updateToggle(getPlayToggle(player), audio, getTrackTitle(player));

      if (miniPlayer && activePlayer === player) {
        miniPlayer.classList.remove('is-playing');
        updateToggle(mini.toggle, audio, trackTitle);
      }

      if (status) {
        status.textContent = isAutoAdvance ? translate('audio.unavailable') : translate('audio.playbackError');
      }

      return false;
    }
  };

  const playNextTrack = (currentPlayer) => {
    const currentIndex = musicPlayers.indexOf(currentPlayer);
    const nextPlayer = musicPlayers[currentIndex + 1];

    if (!nextPlayer) {
      resetMiniPlayer();
      return;
    }

    playAudio(nextPlayer, { isAutoAdvance: true });
  };

  musicPlayers.forEach((musicPlayer) => {
    const audio = getAudio(musicPlayer);
    const playToggle = getPlayToggle(musicPlayer);
    const status = musicPlayer.querySelector('[data-audio-status]');

    if (audio && musicPlayer.dataset.audioSrc) {
      audio.addEventListener('loadstart', () => {
        setPlayerReadyState(musicPlayer, false);
        if (status) {
          status.textContent = '';
        }
      });

      audio.addEventListener('loadedmetadata', () => {
        syncDuration(musicPlayer);
        setPlayerReadyState(musicPlayer, true);
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

      audio.addEventListener('waiting', () => {
        if (activePlayer === musicPlayer && status) {
          status.textContent = '';
        }
      });

      audio.addEventListener('timeupdate', () => {
        if (activePlayer === musicPlayer) {
          syncMiniProgress(audio);
        }
      });

      audio.addEventListener('play', () => {
        musicPlayer.classList.add('is-playing');
        showMiniPlayer(musicPlayer);
        updateToggle(playToggle, audio, getTrackTitle(musicPlayer));

        if (miniPlayer) {
          miniPlayer.classList.add('is-playing');
          updateToggle(mini.toggle, audio, getTrackTitle(musicPlayer));
        }
      });

      audio.addEventListener('pause', () => {
        musicPlayer.classList.remove('is-playing');
        updateToggle(playToggle, audio, getTrackTitle(musicPlayer));

        if (!audio.ended && !isSwitchingTracks) {
          userStoppedPlayback = true;
        }

        if (activePlayer === musicPlayer && miniPlayer) {
          miniPlayer.classList.remove('is-playing');
          updateToggle(mini.toggle, audio, getTrackTitle(musicPlayer));
        }
      });

      audio.addEventListener('ended', () => {
        const shouldAdvance = activePlayer === musicPlayer && !userStoppedPlayback;

        musicPlayer.classList.remove('is-playing');
        audio.currentTime = 0;
        updateToggle(playToggle, audio, getTrackTitle(musicPlayer));

        if (activePlayer === musicPlayer && miniPlayer) {
          miniPlayer.classList.remove('is-playing');
          syncMiniProgress(audio);
          updateToggle(mini.toggle, audio, getTrackTitle(musicPlayer));
        }

        if (shouldAdvance) {
          playNextTrack(musicPlayer);
        }
      });

      audio.addEventListener('error', () => {
        setPlayerReadyState(musicPlayer, false);
        musicPlayer.classList.remove('is-playing');

        if (status) {
          status.textContent = translate('audio.unavailable');
        }

        if (activePlayer === musicPlayer && miniPlayer) {
          miniPlayer.classList.remove('is-playing');
          updateToggle(mini.toggle, audio, getTrackTitle(musicPlayer));
        }
      });

      window.addEventListener('carine:languagechange', () => {
        updateToggle(playToggle, audio, getTrackTitle(musicPlayer));

        if (status && status.textContent) {
          status.textContent = musicPlayer.classList.contains('is-ready') ? '' : translate('audio.unavailable');
        }
      });

      playToggle.addEventListener('click', () => {
        if (audio.paused) {
          playAudio(musicPlayer);
        } else {
          userStoppedPlayback = true;
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
        userStoppedPlayback = true;
        audio.pause();
      }
    });

    mini.progress.addEventListener('input', () => {
      if (!activePlayer) {
        return;
      }

      const audio = getAudio(activePlayer);
      audio.currentTime = Number(mini.progress.value);
      syncMiniProgress(audio);
    });

    window.addEventListener('carine:languagechange', () => {
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
    });
  }
}
