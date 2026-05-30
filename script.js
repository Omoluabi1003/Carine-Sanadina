const LANGUAGE_STORAGE_KEY = 'carine-sanadina-language';
const DEFAULT_LANGUAGE = 'en';

const translations = {};

translations.en = {
  'html.lang': 'en',
  'meta.title': 'Carine Sanadina | Jacksonville Healthcare Professional, Author, Artist & Survivor Advocate',
  'meta.description': 'Carine Sanadina is a Jacksonville, Florida healthcare professional, author, artist, survivor advocate, and emotional wellness voice focused on domestic violence awareness, faith, and restoration.',
  'meta.ogTitle': 'Carine Sanadina | Author, Artist & Survivor Advocate in Jacksonville, Florida',
  'meta.ogDescription': 'Discover Carine Sanadina’s books, music, advocacy, and healing-centered voice for domestic violence awareness, emotional wellness, faith, and restoration.',
  'meta.twitterDescription': 'Jacksonville healthcare professional, author, artist, survivor advocate, and emotional wellness voice turning pain into healing and restoration.',
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
  'nav.reflections': 'Reflections',
  'nav.focus': 'Focus Areas',
  'nav.positioning': 'Professional Voice',
  'nav.contact': 'Contact',
  'hero.location': 'Jacksonville, Florida',
  'hero.subtitle': 'Healthcare Professional | Author | Survivor Advocate | Emotional Wellness Voice',
  'hero.heading': 'Turning pain into healing, survival into purpose, and stories into restoration.',
  'hero.viewWorks': 'View Featured Works',
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
    'music.visualizerFallback': 'Audio visualization is unavailable because this browser does not support the Web Audio API.',
    'music.visualizerAvailable': 'Visualizer animation appears above.',
    'music.shuffle': 'Shuffle',
    'music.shuffleOn': 'Shuffle on',
    'music.shuffleOff': 'Shuffle off',
    'music.repeatAll': 'Repeat all',
    'music.repeatOne': 'Repeat one',
    'music.repeatOff': 'Repeat off',
    'music.nextTrack': 'Next track',
    'mini.expand': 'Expand',
    'mini.close': 'Close player',
    'press.kicker': 'Press Kit',
    'press.heading': 'A refined media hub for conversations about healing, authorship, faith, and restoration.',
    'press.body': 'Carine Sanadina is available for thoughtful media conversations, community features, and healing-centered storytelling opportunities aligned with her books, music, survivor advocacy, and healthcare-rooted compassion.',
    'bio.title': 'Media Bio',
    'bio.body': 'Congolese-born and Jacksonville-based, Carine Sanadina brings together healthcare service, inspirational writing, music, and survivor advocacy to speak with tenderness about pain, courage, faith, and emotional restoration.',
    'speaking.title': 'Speaking Topics',
    'speaking.topic1': 'Domestic violence awareness and hidden survival',
    'speaking.topic2': 'Faith, resilience, and rebuilding self-worth',
    'speaking.topic3': 'Human-centered care, immigrant experience, and emotional wellness',
    'inquiry.title': 'Collaboration Inquiry',
    'inquiry.body': 'For interviews, speaking invitations, music conversations, or book-centered events, use the contact paths below so each opportunity can be reviewed with clarity and care.',
    'inquiry.cta': 'Start an inquiry',
    'reflections.kicker': 'Reflections',
    'reflections.heading': 'Healing notes inspired by Carine’s books, music, and restoration-centered themes.',
    'reflections.intro': 'A static editorial library for readers exploring survival, toxic relationship awareness, faith, kindness, and emotional restoration.',
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
    'pwa.installText': 'Install this healing-centered app for quick offline access.',
    'pwa.installButton': 'Install',
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
    'music.visualizerFallback': 'La visualisation audio est indisponible, car ce navigateur ne prend pas en charge l’API Web Audio.',
    'music.visualizerAvailable': 'L’animation de visualisation apparaît ci-dessus.',
    'music.shuffle': 'Aléatoire',
    'music.shuffleOn': 'Aléatoire activé',
    'music.shuffleOff': 'Aléatoire désactivé',
    'music.repeatAll': 'Répéter tout',
    'music.repeatOne': 'Répéter un',
    'music.repeatOff': 'Répétition désactivée',
    'music.nextTrack': 'Titre suivant',
    'mini.expand': 'Agrandir',
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
    'pwa.installText': 'Installez cette application centrée sur la guérison pour un accès hors ligne rapide.',
    'pwa.installButton': 'Installer',
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
    'reflection.consolation.prompt': 'What form of consolation would help you keep going today?'
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
    'reflection.consolation.prompt': 'Quelle forme de consolation vous aiderait à continuer aujourd’hui?'
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
    'music.visualizerFallback': 'La visualización de audio no está disponible porque este navegador no admite la API Web Audio.',
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
    'pwa.installText': 'Instala esta app centrada en la sanación para acceso rápido sin conexión.',
    'pwa.installButton': 'Instalar',
    'pwa.dismissLabel': 'Cerrar aviso de instalación',
    'music.playlist': 'Lista de reproducción'
  },
  ln: {
    'music.stageLabel': 'Esika ya lokumu ya loyembo oyo ezali koyokana',
    'music.controlsLabel': 'Bikomande ya kobeta miziki',
    'music.nowPlaying': 'Ezali koyokana sikoyo',
    'music.visualizerFallback': 'Komonisa mongongo ezali te mpo navigateur oyo esimbaka API Web Audio te.',
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
    'pwa.installText': 'Tyá app oyo ya kobika mpo na kokota noki ata ntango internet ezali te.',
    'pwa.installButton': 'Tyá',
    'pwa.dismissLabel': 'Longola etinda ya kotya'
  },
  sw: {
    'music.stageLabel': 'Uzoefu wa kiwango cha juu wa kinachochezwa sasa',
    'music.controlsLabel': 'Vidhibiti vya uchezaji wa muziki',
    'music.nowPlaying': 'Inacheza sasa',
    'music.visualizerFallback': 'Onyesho la sauti halipatikani kwa sababu kivinjari hiki hakitumii API ya Web Audio.',
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
    'pwa.installText': 'Sakinisha app hii ya uponyaji kwa ufikiaji wa haraka bila mtandao.',
    'pwa.installButton': 'Sakinisha',
    'pwa.dismissLabel': 'Funga ujumbe wa kusakinisha',
    'footer.rights': '© 2026 Carine Sanadina. Haki zote zimehifadhiwa.'
  },
  yo: {
    'music.stageLabel': 'Iriri orin tó ń dun báyìí ní ipele gíga',
    'music.controlsLabel': 'Àwọn ìṣàkóso orin',
    'music.nowPlaying': 'Ó ń dun báyìí',
    'music.visualizerFallback': 'Àfihàn ohun kò sí nítorí aṣàwákiri yìí kò ṣe atilẹyin Web Audio API.',
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
    'pwa.installText': 'Fi app ìwòsàn yìí sí ẹrọ fún ìwọlé kíákíá láì sí ayélujára.',
    'pwa.installButton': 'Fi sí ẹrọ',
    'pwa.dismissLabel': 'Pa ìkìlọ̀ fifi sí ẹrọ',
    'footer.rights': '© 2026 Carine Sanadina. Gbogbo ẹ̀tọ́ wa ni ipamọ́.'
  }
};

Object.entries(completeTranslationOverrides).forEach(([language, dictionary]) => {
  if (translations[language]) {
    Object.assign(translations[language], dictionary);
  }
});

Object.values(translations).forEach((dictionary) => {
  Object.assign(dictionary, {
    'language.name.en': 'English',
    'language.name.fr': 'French',
    'language.name.ln': 'Lingala',
    'language.name.es': 'Spanish',
    'language.name.sw': 'Swahili',
    'language.name.yo': 'Yoruba',
    'tracks.consolation.title': 'Consolation',
    'tracks.gentillesse.title': 'La Gentillesse',
    'tracks.wonderful.title': 'Wonderful'
  });
});

const supportedLanguages = Object.keys(translations);
let currentLanguage = DEFAULT_LANGUAGE;

const isDevelopmentHost = () => ['localhost', '127.0.0.1', ''].includes(window.location.hostname);

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

const normalizeLanguage = (language) => (supportedLanguages.includes(language) ? language : DEFAULT_LANGUAGE);

const applyTranslations = (language) => {
  const nextLanguage = normalizeLanguage(language);
  currentLanguage = nextLanguage;
  document.documentElement.lang = t('html.lang', nextLanguage, nextLanguage);

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

const REQUIRED_MUSIC_TRACK_IDS = ['consolation', 'gentillesse', 'wonderful'];

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
    translationKey: 'tracks.consolation'
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
    translationKey: 'tracks.gentillesse'
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
    translationKey: 'tracks.wonderful'
  }
];

const assertRequiredPlaylistTracks = () => REQUIRED_MUSIC_TRACK_IDS.every((requiredId) =>
  CARINE_MUSIC_PLAYLIST.some((track) => track.id === requiredId && track.audioUrl && track.coverUrl)
);

const renderCarinePlaylist = () => {
  const playlistMount = document.querySelector('[data-playlist-tracks]');

  if (!playlistMount) {
    return;
  }

  const safePlaylist = CARINE_MUSIC_PLAYLIST.filter((track) => track && track.id && track.title && track.audioUrl && track.coverUrl);

  if (safePlaylist.length !== REQUIRED_MUSIC_TRACK_IDS.length || !assertRequiredPlaylistTracks()) {
    playlistMount.dataset.playlistError = 'missing-required-track';
  } else {
    delete playlistMount.dataset.playlistError;
  }

  playlistMount.innerHTML = safePlaylist.map((track, index) => {
    const trackKey = escapePlaylistAttribute(track.translationKey);
    const titleId = `track-${escapePlaylistAttribute(track.id)}-title`;
    const fallbackId = `music-cover-${escapePlaylistAttribute(track.id)}-fallback`;
    const durationLabel = formatTrackDuration(Number(track.duration));
    const trackTitle = escapePlaylistText(track.title);
    const trackArtist = escapePlaylistText(track.artist);
    const trackDescription = escapePlaylistText(track.description);
    const trackMood = escapePlaylistAttribute(track.mood);
    const trackId = escapePlaylistAttribute(track.id);
    const coverUrl = escapePlaylistAttribute(track.coverUrl);
    const audioUrl = escapePlaylistAttribute(track.audioUrl);
    const durationValue = Number.isFinite(Number(track.duration)) && Number(track.duration) > 0 ? String(Number(track.duration)) : '';

    return `
      <article
        class="playlist-track is-ready"
        aria-labelledby="${titleId}"
        data-audio-player
        data-track-id="${trackId}"
        data-audio-src="${audioUrl}"
        data-track-title="${escapePlaylistAttribute(track.title)}"
        data-track-artist="${escapePlaylistAttribute(track.artist)}"
        data-track-cover="${coverUrl}"
        data-track-duration="${escapePlaylistAttribute(durationValue)}"
        data-track-mood="${trackMood}"
        data-track-description="${escapePlaylistAttribute(track.description)}"
      >
        <audio aria-label="${escapePlaylistAttribute(`${track.title} by ${track.artist}`)}" data-i18n-aria-label="${trackKey}.audioLabel" preload="metadata" crossorigin="anonymous"></audio>
        <div class="track-cover-wrap">
          <img
            src="${coverUrl}"
            alt="${escapePlaylistAttribute(`${track.title} cover art`)}"
            data-i18n-alt="${trackKey}.coverAlt"
            class="track-cover"
            width="1000"
            height="1000"
            loading="lazy"
            decoding="async"
            referrerpolicy="no-referrer"
            data-fallback-target="${fallbackId}"
          />
          <div class="image-fallback music-cover-fallback" id="${fallbackId}" role="note" aria-live="polite">
            <span data-i18n="${trackKey}.fallback">${trackTitle} cover art is temporarily unavailable.</span>
          </div>
        </div>

        <div class="track-meta">
          <p class="music-label" data-i18n="${trackKey}.number">Track ${String(index + 1).padStart(2, '0')}</p>
          <h3 id="${titleId}" data-i18n="${trackKey}.title">${trackTitle}</h3>
          <p class="artist-name">${trackArtist}</p>
          <p class="track-description" data-i18n="${trackKey}.description">${trackDescription}</p>
        </div>

        <div class="track-equalizer equalizer" aria-hidden="true">
          <span></span><span></span><span></span><span></span>
        </div>

        <div class="track-duration" aria-live="off">
          <span class="sr-only" data-i18n="music.duration">Duration:</span>
          <span data-duration>${durationLabel}</span>
        </div>

        <button class="track-play-toggle" type="button" data-play-toggle aria-label="Play ${escapePlaylistAttribute(track.title)}" data-track-key="${trackKey}.title" data-i18n-aria-label="${trackKey}.playLabel">
          <span class="play-icon" aria-hidden="true"></span>
        </button>
        <p class="audio-status" data-audio-status role="status" aria-live="polite"></p>
      </article>
    `;
  }).join('');
};

renderCarinePlaylist();

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


const reflectionArticles = [
  { id: 'hidden-pain-visible-language', key: 'reflection.hidden', categoryKey: 'reflection.category.survival', link: '#works' },
  { id: 'red-flags-peace', key: 'reflection.red', categoryKey: 'reflection.category.toxic', link: '#works' },
  { id: 'road-to-sunshine-faith', key: 'reflection.sunshine', categoryKey: 'reflection.category.faith', link: '#works' },
  { id: 'after-the-storm-restoration', key: 'reflection.storm', categoryKey: 'reflection.category.restoration', link: '#focus' },
  { id: 'kindness-as-practice', key: 'reflection.kindness', categoryKey: 'reflection.category.kindness', link: '#music' },
  { id: 'consolation-and-courage', key: 'reflection.consolation', categoryKey: 'reflection.category.healing', link: '#music' }
];

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

  const categories = [{ id: 'all', labelKey: 'reflections.all' }, ...[...new Set(reflectionArticles.map((article) => article.categoryKey))].map((categoryKey) => ({ id: categoryKey, labelKey: categoryKey }))];

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

  const getReflectionText = (article, field) => translate(`${article.key}.${field}`);

  const articleMatches = (article) => {
    const query = search.value.trim().toLowerCase();
    const searchable = [
      getReflectionText(article, 'title'),
      getReflectionText(article, 'excerpt'),
      translate(article.categoryKey),
      getReflectionText(article, 'quote'),
      getReflectionText(article, 'prompt')
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
    card.id = `reflection-${article.id}`;

    const meta = document.createElement('div');
    meta.className = 'reflection-card__meta';

    const tag = document.createElement('span');
    tag.className = 'reflection-tag';
    tag.textContent = translate(article.categoryKey);

    const readTime = document.createElement('span');
    readTime.textContent = `${getReflectionText(article, 'readTime')} ${translate('reflections.readTime')}`;
    meta.append(tag, readTime);

    const heading = document.createElement('h3');
    heading.textContent = title;

    const excerpt = document.createElement('p');
    excerpt.textContent = getReflectionText(article, 'excerpt');

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
    const matchingArticles = reflectionArticles.filter(articleMatches);
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
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const scriptUrl = document.querySelector('script[src$="script.js"]')?.src || window.location.href;
      navigator.serviceWorker.register(new URL('sw.js', scriptUrl)).catch((error) => {
        console.info('Service worker registration skipped:', error);
      });
    });
  }

  const installToast = document.querySelector('[data-install-toast]');
  const installButton = document.querySelector('[data-install-button]');
  const dismissButton = document.querySelector('[data-install-dismiss]');
  let deferredInstallPrompt = null;

  const hideInstallToast = () => {
    if (installToast) installToast.hidden = true;
  };

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    if (installToast) installToast.hidden = false;
  });

  installButton?.addEventListener('click', async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    hideInstallToast();
  });

  dismissButton?.addEventListener('click', hideInstallToast);
  window.addEventListener('appinstalled', hideInstallToast);
};

initializeReflections();
initializePwaExperience();

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
  let shuffleEnabled = false;
  let repeatMode = 'all';
  const PLAYER_STORAGE_KEY = 'carine-sanadina-player-state';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const shuffleButton = document.querySelector('[data-shuffle-toggle]');
  const repeatButton = document.querySelector('[data-repeat-toggle]');
  const nextButton = document.querySelector('[data-next-track]');
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
  const miniExpand = document.querySelector('[data-mini-expand]');
  const mobileClose = document.querySelector('[data-mobile-close]');
  const isAudioDebugEnabled = ['localhost', '127.0.0.1', ''].includes(window.location.hostname)
    || new URLSearchParams(window.location.search).has('debugAudio');

  const logAudioDiagnostics = (event, details = {}) => {
    if (!isAudioDebugEnabled || !window.console || typeof window.console.info !== 'function') {
      return;
    }

    window.console.info('[music audio]', { event, ...details });
  };

  const getVerifiedAudioSource = (player) => (player?.dataset.audioSrc || '').trim();

  const applyResolvedAudioSource = (player, audio) => {
    const verifiedSource = getVerifiedAudioSource(player);

    if (!audio || !verifiedSource) {
      return '';
    }

    audio.crossOrigin = 'anonymous';
    audio.setAttribute('crossorigin', 'anonymous');
    audio.preload = 'metadata';

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
      return JSON.parse(window.localStorage.getItem(PLAYER_STORAGE_KEY) || '{}');
    } catch (error) {
      return {};
    }
  };

  const persistPlayerState = () => {
    try {
      const activeIndex = activePlayer ? musicPlayers.indexOf(activePlayer) : 0;
      const audio = activePlayer ? getAudio(activePlayer) : null;
      window.localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify({
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

  const updateCommandButtons = () => {
    if (shuffleButton) {
      shuffleButton.setAttribute('aria-pressed', String(shuffleEnabled));
      shuffleButton.textContent = translate(shuffleEnabled ? 'music.shuffleOn' : 'music.shuffle');
      shuffleButton.classList.toggle('is-active', shuffleEnabled);
    }

    const repeatLabelKey = repeatMode === 'one' ? 'music.repeatOne' : repeatMode === 'all' ? 'music.repeatAll' : 'music.repeatOff';
    [repeatButton, mobileRepeat].forEach((button) => {
      if (!button) return;
      button.dataset.repeatMode = repeatMode;
      button.setAttribute('aria-pressed', String(repeatMode !== 'off'));
      button.textContent = translate(repeatLabelKey);
      button.classList.toggle('is-active', repeatMode !== 'off');
    });

    if (mobileShuffle) {
      mobileShuffle.setAttribute('aria-pressed', String(shuffleEnabled));
      mobileShuffle.textContent = translate(shuffleEnabled ? 'music.shuffleOn' : 'music.shuffle');
      mobileShuffle.classList.toggle('is-active', shuffleEnabled);
    }
  };

  const syncStage = (player) => {
    if (!player) return;
    const title = getTrackTitle(player);
    if (stageCover) stageCover.src = player.dataset.trackCover || '';
    if (stageTitle) stageTitle.textContent = title;
    if (stageArtist) stageArtist.textContent = player.dataset.trackArtist || 'Carine Sanadina';
    if (mobileCover) {
      mobileCover.src = player.dataset.trackCover || '';
      mobileCover.alt = `${title} ${translate('audio.coverArt')}`;
    }
    if (mobileTitle) mobileTitle.textContent = title;
    if (mobileArtist) mobileArtist.textContent = player.dataset.trackArtist || 'Carine Sanadina';
  };

  const setActiveTrack = (player) => {
    musicPlayers.forEach((track) => track.classList.toggle('is-active', track === player));
    syncStage(player);
  };

  const visualizerBars = visualizerCanvas ? Array.from(visualizerCanvas.querySelectorAll('span')) : [];
  const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
  const mediaSourceNodes = new WeakMap();
  const sourceConnectionState = new WeakMap();
  const frequencyBinCount = 128;
  const frequencyData = new Uint8Array(frequencyBinCount);
  let sharedAudioContext = null;
  let sharedAnalyser = null;
  let analyserConnectedToDestination = false;
  let visualizerFrameId = 0;
  let visualizerMode = 'idle';
  let silentAnalyzerFrames = 0;
  let corsFallbackWarned = false;

  const setVisualizerFallback = (isUnavailable = false) => {
    if (!visualizerFallback) {
      return;
    }

    visualizerFallback.hidden = !isUnavailable;
    visualizerFallback.textContent = translate(isUnavailable ? 'music.visualizerFallback' : 'music.visualizerAvailable');
  };

  const warnAnalyzerFallback = (reason) => {
    if (corsFallbackWarned || !isAudioDebugEnabled || !window.console || typeof window.console.warn !== 'function') {
      return;
    }

    corsFallbackWarned = true;
    window.console.warn('[music audio] analyser unavailable; using idle visualizer fallback', reason);
  };

  const setVisualizerBars = (heights = [], mode = visualizerMode) => {
    if (!visualizerBars.length) {
      return;
    }

    visualizerBars.forEach((bar, index) => {
      const base = mode === 'playing' ? 18 : mode === 'paused' ? 12 : 8;
      const value = Number.isFinite(heights[index]) ? heights[index] : base + ((index % 5) * 3);
      const clamped = Math.min(Math.max(value, 6), 100);
      bar.style.setProperty('--bar-height', `${clamped}%`);
      bar.style.setProperty('--bar-opacity', String(mode === 'playing' ? 0.76 + (clamped / 100) * 0.24 : 0.42));
      bar.style.setProperty('--bar-glow', `${Math.round(8 + (clamped / 100) * 24)}px`);
    });
  };

  const cancelVisualizerFrame = () => {
    if (visualizerFrameId) {
      window.cancelAnimationFrame(visualizerFrameId);
      visualizerFrameId = 0;
    }
  };

  const runIdleVisualizer = (mode = 'idle') => {
    if (!visualizerCanvas || reduceMotion) {
      return;
    }

    visualizerMode = mode;
    visualizerCanvas.classList.remove('is-playing');
    visualizerCanvas.classList.toggle('is-paused', mode === 'paused');
    visualizerCanvas.classList.toggle('is-idle', mode !== 'playing');

    const tick = (time = 0) => {
      const calmMultiplier = mode === 'paused' ? 1.2 : 1;
      const heights = visualizerBars.map((_, index) => {
        const wave = Math.sin((time / 720) + (index * 0.78));
        return (10 + (index % 4) * 2 + ((wave + 1) * 5)) * calmMultiplier;
      });
      setVisualizerBars(heights, mode);
      visualizerFrameId = window.requestAnimationFrame(tick);
    };

    cancelVisualizerFrame();
    tick();
  };

  const getAudioContextState = () => sharedAudioContext?.state || 'closed';

  const resetClosedAudioGraph = () => {
    if (sharedAudioContext && sharedAudioContext.state !== 'closed') {
      return;
    }

    sharedAudioContext = null;
    sharedAnalyser = null;
    analyserConnectedToDestination = false;
    sourceConnectionState.clear?.();
  };

  const ensureAudioContextForGesture = async ({ allowCreate = true, allowResume = true } = {}) => {
    if (!AudioContextConstructor) {
      setVisualizerFallback(true);
      warnAnalyzerFallback('Web Audio API is not supported.');
      return null;
    }

    if (!sharedAudioContext || sharedAudioContext.state === 'closed') {
      if (!allowCreate) {
        warnAnalyzerFallback('AudioContext was unavailable outside a user gesture.');
        return null;
      }

      sharedAudioContext = new AudioContextConstructor();
      sharedAnalyser = null;
      analyserConnectedToDestination = false;
      logAudioDiagnostics('audio-context-created', { state: sharedAudioContext.state });
    }

    if (['suspended', 'interrupted'].includes(sharedAudioContext.state) && typeof sharedAudioContext.resume === 'function') {
      if (!allowResume) {
        warnAnalyzerFallback(`AudioContext was ${sharedAudioContext.state} outside a user gesture.`);
        return null;
      }

      await sharedAudioContext.resume();
      logAudioDiagnostics('audio-context-resumed', { state: sharedAudioContext.state });
    }

    if (sharedAudioContext.state === 'closed') {
      resetClosedAudioGraph();
      return ensureAudioContextForGesture({ allowCreate, allowResume });
    }

    if (!sharedAnalyser) {
      sharedAnalyser = sharedAudioContext.createAnalyser();
      sharedAnalyser.fftSize = 256;
      sharedAnalyser.smoothingTimeConstant = 0.78;
      sharedAnalyser.minDecibels = -90;
      sharedAnalyser.maxDecibels = -10;
    }

    if (!analyserConnectedToDestination) {
      sharedAnalyser.connect(sharedAudioContext.destination);
      analyserConnectedToDestination = true;
    }

    return sharedAudioContext;
  };

  const connectAudioToAnalyser = (audio) => {
    if (!audio || !sharedAudioContext || !sharedAnalyser) {
      return false;
    }

    let nodeRecord = mediaSourceNodes.get(audio);

    if (!nodeRecord || nodeRecord.context !== sharedAudioContext) {
      try {
        nodeRecord = {
          context: sharedAudioContext,
          source: sharedAudioContext.createMediaElementSource(audio)
        };
        mediaSourceNodes.set(audio, nodeRecord);
        sourceConnectionState.set(audio, false);
      } catch (error) {
        warnAnalyzerFallback(error?.message || error);
        return false;
      }
    }

    if (!sourceConnectionState.get(audio)) {
      try {
        nodeRecord.source.connect(sharedAnalyser);
        sourceConnectionState.set(audio, true);
      } catch (error) {
        warnAnalyzerFallback(error?.message || error);
        return false;
      }
    }

    return true;
  };

  const startVisualizer = (audio) => {
    if (!visualizerCanvas || reduceMotion) {
      return;
    }

    cancelVisualizerFrame();
    silentAnalyzerFrames = 0;
    visualizerMode = 'playing';
    visualizerCanvas.classList.add('is-playing');
    visualizerCanvas.classList.remove('is-idle', 'is-paused');

    const tick = () => {
      if (!audio || audio.paused || audio.ended || !sharedAnalyser) {
        runIdleVisualizer(audio && !audio.ended ? 'paused' : 'idle');
        return;
      }

      sharedAnalyser.getByteFrequencyData(frequencyData);
      const maxFrequency = frequencyData.reduce((max, value) => Math.max(max, value), 0);

      if (maxFrequency === 0) {
        silentAnalyzerFrames += 1;
        if (silentAnalyzerFrames > 90) {
          warnAnalyzerFallback('Frequency data stayed silent while audio was playing.');
          runIdleVisualizer('idle');
          return;
        }
      } else {
        silentAnalyzerFrames = 0;
      }

      const bass = frequencyData.slice(2, 12);
      const mids = frequencyData.slice(12, 46);
      const highs = frequencyData.slice(46, 96);
      const average = (values) => values.reduce((sum, value) => sum + value, 0) / Math.max(values.length, 1);
      const bands = [average(bass), average(bass), average(mids), average(mids), average(highs), average(highs)];
      const heights = visualizerBars.map((_, index) => {
        const bandValue = bands[index % bands.length] || 0;
        const detailIndex = Math.min(frequencyData.length - 1, 4 + Math.floor((index / Math.max(visualizerBars.length, 1)) * 96));
        const detail = frequencyData[detailIndex] || 0;
        return 10 + ((bandValue * 0.23) + (detail * 0.16));
      });

      setVisualizerBars(heights, 'playing');
      visualizerFrameId = window.requestAnimationFrame(tick);
    };

    tick();
  };

  const stopVisualizer = (mode = 'idle') => {
    if (!visualizerCanvas) {
      return;
    }

    runIdleVisualizer(mode);
  };

  setVisualizerFallback();
  runIdleVisualizer('idle');
  window.addEventListener('carine:languagechange', setVisualizerFallback);

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

  const updateToggle = (button, audio, title) => {
    if (!button) {
      return;
    }

    const isPlaying = audio && !audio.paused && !audio.ended;
    button.setAttribute('aria-label', `${isPlaying ? translate('audio.pause') : translate('audio.play')} ${title}`);
  };

  const getSafeDuration = (audio, fallback = 0) => {
    if (audio && Number.isFinite(audio.duration) && audio.duration > 0) {
      return audio.duration;
    }

    return Number.isFinite(fallback) && fallback > 0 ? fallback : 0;
  };

  const syncMiniProgress = (audio) => {
    if (!mini || !audio) {
      return;
    }

    const fallbackDuration = activePlayer ? getFallbackDuration(activePlayer) : 0;
    const max = getSafeDuration(audio, fallbackDuration || 100);
    const safeDuration = getSafeDuration(audio, fallbackDuration);
    mini.current.textContent = formatTime(audio.currentTime);
    mini.duration.textContent = safeDuration > 0 ? formatTime(safeDuration) : '0:00';
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
    setActiveTrack(player);
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
    musicPlayers.forEach((track) => track.classList.remove('is-active'));
    stopVisualizer('idle');

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

    if (!audio || !getVerifiedAudioSource(player)) {
      setPlayerReadyState(player, false);
      return false;
    }

    const previousSource = audio.currentSrc || audio.getAttribute('src') || '';
    const verifiedSource = applyResolvedAudioSource(player, audio);
    if (previousSource !== verifiedSource) {
      audio.load();
    }

    isSwitchingTracks = true;
    pauseOtherPlayers(player);
    isSwitchingTracks = false;
    userStoppedPlayback = false;
    stopVisualizer('idle');
    showMiniPlayer(player);

    if (audio.ended || audio.currentTime >= getSafeDuration(audio, 0)) {
      audio.currentTime = 0;
    }

    try {
      const context = await ensureAudioContextForGesture({ allowCreate: !isAutoAdvance, allowResume: !isAutoAdvance });
      const analyserReady = context ? connectAudioToAnalyser(audio) : false;
      if (!analyserReady) {
        stopVisualizer('idle');
      }

      await audio.play();
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
      updateToggle(getPlayToggle(player), audio, getTrackTitle(player));

      if (miniPlayer && activePlayer === player) {
        miniPlayer.classList.remove('is-playing');
        updateToggle(mini.toggle, audio, getTrackTitle(player));
      }

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

  const playNextTrack = (currentPlayer) => {
    const nextPlayer = getNextTrack(currentPlayer);

    if (!nextPlayer) {
      resetMiniPlayer();
      persistPlayerState();
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

        startVisualizer(audio);
        persistPlayerState();

        if (miniPlayer) {
          miniPlayer.classList.add('is-playing');
          updateToggle(mini.toggle, audio, getTrackTitle(musicPlayer));
        }

        updateToggle(mobileToggle, audio, getTrackTitle(musicPlayer));
      });

      audio.addEventListener('pause', () => {
        musicPlayer.classList.remove('is-playing');
        updateToggle(playToggle, audio, getTrackTitle(musicPlayer));

        if (!audio.ended && !isSwitchingTracks) {
          userStoppedPlayback = true;
        }

        stopVisualizer(audio.ended ? 'idle' : 'paused');
        persistPlayerState();

        if (activePlayer === musicPlayer && miniPlayer) {
          miniPlayer.classList.remove('is-playing');
          updateToggle(mini.toggle, audio, getTrackTitle(musicPlayer));
        }

        updateToggle(mobileToggle, audio, getTrackTitle(musicPlayer));
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

        stopVisualizer('idle');
        persistPlayerState();

        if (shouldAdvance) {
          playNextTrack(musicPlayer);
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
        persistPlayerState();

        if (activePlayer === musicPlayer && miniPlayer) {
          miniPlayer.classList.remove('is-playing');
          updateToggle(mini.toggle, audio, getTrackTitle(musicPlayer));
        }

        updateToggle(mobileToggle, audio, getTrackTitle(musicPlayer));
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
      persistPlayerState();
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
      persistPlayerState();
    });
  }

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

  shuffleButton?.addEventListener('click', toggleShuffle);
  mobileShuffle?.addEventListener('click', toggleShuffle);
  repeatButton?.addEventListener('click', cycleRepeat);
  mobileRepeat?.addEventListener('click', cycleRepeat);
  nextButton?.addEventListener('click', () => playNextTrack(activePlayer || musicPlayers[0]));
  mobileToggle?.addEventListener('click', () => {
    if (!activePlayer) return;
    const audio = getAudio(activePlayer);
    if (audio.paused) playAudio(activePlayer);
    else {
      userStoppedPlayback = true;
      audio.pause();
    }
  });

  const setMobilePlayerOpen = (isOpen) => {
    if (!mobilePlayer) return;
    mobilePlayer.classList.toggle('is-open', isOpen);
    mobilePlayer.setAttribute('aria-hidden', String(!isOpen));
    miniExpand?.setAttribute('aria-expanded', String(isOpen));
  };

  miniExpand?.addEventListener('click', () => setMobilePlayerOpen(!mobilePlayer?.classList.contains('is-open')));
  mobileClose?.addEventListener('click', () => setMobilePlayerOpen(false));
  mobilePlayer?.addEventListener('click', (event) => {
    if (event.target === mobilePlayer) setMobilePlayerOpen(false);
  });

  window.addEventListener('carine:languagechange', () => {
    updateCommandButtons();
    if (activePlayer) {
      syncStage(activePlayer);
    } else {
      if (mobileTitle) mobileTitle.textContent = translate('mini.noTrack');
      updateToggle(mobileToggle, null, translate('mini.noTrack'));
    }
  });

  const storedState = getStoredPlayerState();
  shuffleEnabled = Boolean(storedState.shuffleEnabled);
  repeatMode = ['all', 'one', 'off'].includes(storedState.repeatMode) ? storedState.repeatMode : 'all';
  if (mini?.volume && Number.isFinite(storedState.volume)) {
    mini.volume.value = String(Math.min(Math.max(storedState.volume, 0), 1));
    setRangeFill(mini.volume, mini.volume.value, mini.volume.max);
  }
  updateCommandButtons();
  const restoredPlayer = musicPlayers[Number.isInteger(storedState.activeIndex) ? storedState.activeIndex : 0] || musicPlayers[0];
  if (restoredPlayer) {
    const restoredAudio = getAudio(restoredPlayer);
    if (restoredAudio && Number.isFinite(storedState.currentTime) && storedState.currentTime > 0) {
      restoredAudio.currentTime = storedState.currentTime;
    }
    syncStage(restoredPlayer);
    setActiveTrack(restoredPlayer);
  }
}
