const LANGUAGE_STORAGE_KEY = 'carine-sanadina-language';
const DEFAULT_LANGUAGE = 'en';

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
  'books.pain.coverLabel': 'The Pain Nobody Saw placeholder book cover',
  'books.pain.kicker': 'Memoir',
  'books.pain.coverTitle': 'The Pain Nobody Saw',
  'books.pain.title': 'The Pain Nobody Saw: A Hidden Story of Abuse and Survival',
  'books.pain.description': 'A raw memoir exposing the hidden reality of domestic abuse, cultural pressure, silent suffering, and the courageous path toward freedom, faith, and reclaimed self-worth.',
  'books.toxic.coverLabel': 'If It’s Red, It’s Toxic placeholder book cover',
  'books.toxic.kicker': 'Guide',
  'books.toxic.coverTitle': 'If It’s Red, It’s Toxic',
  'books.toxic.title': 'If It’s Red, It’s Toxic',
  'books.toxic.description': 'A bold guide to recognizing warning signs, emotional manipulation, spiritual danger, unhealthy attachments, and patterns that slowly drain peace, clarity, and purpose.',
  'books.sunshine.coverLabel': 'The Road to Sunshine placeholder book cover',
  'books.sunshine.kicker': 'Faith & Hope',
  'books.sunshine.coverTitle': 'The Road to Sunshine',
  'books.sunshine.title': 'The Road to Sunshine: A Journey of Struggles, Faith and Hope',
  'books.sunshine.description': 'A hope-filled reflection on enduring struggle, holding onto faith, and continuing the journey toward brighter days even when the road feels uncertain.',
  'books.storm.coverLabel': 'After The Storm placeholder book cover',
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
  'books.pain.coverLabel': 'Couverture provisoire du livre The Pain Nobody Saw',
  'books.pain.kicker': 'Mémoire',
  'books.pain.title': 'La douleur que personne n’a vue : une histoire cachée d’abus et de survie',
  'books.pain.description': 'Un mémoire brut qui révèle la réalité cachée des violences domestiques, des pressions culturelles, de la souffrance silencieuse et du courage nécessaire pour retrouver liberté, foi et dignité.',
  'books.toxic.coverLabel': 'Couverture provisoire du livre If It’s Red, It’s Toxic',
  'books.toxic.kicker': 'Guide',
  'books.toxic.title': 'Si c’est rouge, c’est toxique',
  'books.toxic.description': 'Un guide audacieux pour reconnaître les signaux d’alerte, la manipulation émotionnelle, les dangers spirituels, les attachements malsains et les schémas qui épuisent la paix, la clarté et le but.',
  'books.sunshine.coverLabel': 'Couverture provisoire du livre The Road to Sunshine',
  'books.sunshine.kicker': 'Foi et espoir',
  'books.sunshine.title': 'La route vers le soleil : un voyage de luttes, de foi et d’espoir',
  'books.sunshine.description': 'Une réflexion pleine d’espoir sur la persévérance dans l’épreuve, l’attachement à la foi et la marche vers des jours plus lumineux même lorsque la route semble incertaine.',
  'books.storm.coverLabel': 'Couverture provisoire du livre After The Storm',
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
  ...translations.fr,
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
  'books.pain.coverLabel': 'Portada provisional del libro The Pain Nobody Saw',
  'books.toxic.coverLabel': 'Portada provisional del libro If It’s Red, It’s Toxic',
  'books.toxic.kicker': 'Guía',
  'books.sunshine.coverLabel': 'Portada provisional del libro The Road to Sunshine',
  'books.sunshine.kicker': 'Fe y esperanza',
  'books.storm.coverLabel': 'Portada provisional del libro After The Storm',
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
  ...translations.fr,
  'html.lang': 'ln',
  'language.label': 'Lokota',
  'language.selectorLabel': 'Pona lokota ya site',
  'a11y.skip': 'Kende na makambo ya ntina',
  'a11y.primaryNav': 'Navigation ya liboso',
  'nav.about': 'Na ntina',
  'nav.works': 'Misala',
  'nav.music': 'Miziki',
  'nav.focus': 'Makambo ya ntina',
  'nav.positioning': 'Mongongo ya mosala',
  'nav.contact': 'Kontakt',
  'hero.subtitle': 'Mosali ya santé | Mokomi | Mobundeli ya ba survivantes | Mongongo ya bolamu ya motema',
  'hero.heading': 'Kobongola pasi na kobika, survie na tina, mpe masolo na restauration.',
  'hero.viewWorks': 'Tala misala',
  'hero.listenMusic': 'Yoka miziki',
  'hero.contactCarine': 'Kontakt Carine',
  'about.kicker': 'Na ntina ya Carine',
  'works.kicker': 'Misala ya ntina',
  'buttons.buyAmazon': 'Somba na Amazon',
  'music.kicker': 'Miziki',
  'music.heading': 'Miziki ya Carine Sanadina',
  'music.playlist': 'Playlist',
  'music.time': 'Ntango',
  'music.duration': 'Bolai:',
  'tracks.consolation.number': 'Loyembo 01',
  'tracks.consolation.description': 'Libondisi mpe elikya mpo na kobika',
  'tracks.gentillesse.number': 'Loyembo 02',
  'tracks.gentillesse.description': 'Loyembo ya boboto mpe kondima',
  'tracks.wonderful.number': 'Loyembo 03',
  'tracks.wonderful.description': 'Lokumu ya esengo mpe matondo',
  'mini.noTrack': 'Loyembo eponami te',
  'mini.progress': 'Bokende ya loyembo',
  'mini.volume': 'Volume ya loyembo',
  'audio.play': 'Bɛta',
  'audio.pause': 'Pema',
  'audio.playbackError': 'Miziki ekoki kobanda te. Meka lisusu.',
  'audio.unavailable': 'Miziki ezali disponible te sikoyo. Zonga lisusu kala mingi te.',
  'focus.kicker': 'Makambo ya ntina',
  'focus.heading': 'Makambo ezali na motema ya mosala ya Carine.',
  'focus.pills.domestic': 'Koyebisa bato mpo na violence na libota',
  'focus.pills.healing': 'Kobika ya motema',
  'focus.pills.toxic': 'Kobika nsima ya relations toxiques',
  'focus.pills.faith': 'Kondima mpe makasi',
  'focus.pills.women': 'Kopesa basi makasi',
  'focus.pills.selfWorth': 'Valɛrɛ ya yo moko mpe identité',
  'focus.pills.immigrant': 'Bomoi ya ba immigrés mpe ba réfugiés',
  'focus.pills.motherhood': 'Bomama mpe survie',
  'focus.pills.writing': 'Bokomi ya kopesa elikya',
  'focus.pills.care': 'Soin oyo etali moto',
  'quote.text': '“Pasi ekoki kobongisa lisolo, kasi ekoki kozwa suka na yango te.”',
  'cta.kicker': 'Banda lisolo',
  'cta.invite': 'Benga Carine aloba',
  'cta.media': 'Demande média',
  'cta.music': 'Collaboration musicale',
  'cta.books': 'Masolo ya mikanda',
  'meta.title': 'Carine Sanadina | Mosali ya santé, mokomi mpe mobateli ya ba survivantes',
  'meta.description': 'Carine Sanadina azali mosali ya santé, mokomi, artiste mpe mobateli ya ba survivantes, afandaka na Jacksonville, Florida.',
  'meta.ogTitle': 'Carine Sanadina | Mokomi ya kobikisa mpe mobateli ya ba survivantes',
  'meta.ogDescription': 'Tala mikanda, bomateli mpe mongongo ya bolamu ya motema ya Carine Sanadina, mosali ya santé mpe mokomi abotama na Congo, afandaka na Jacksonville, Florida.',
  'meta.twitterDescription': 'Kobongola pasi na kobika, survie na tina, mpe masolo na restauration.',
  'music.disclaimer': 'Miziki mpe media elakisami mpo bato bayoka na lolenge ya promotion mpe mpo artiste amonana. Makoki etikali ya bankolo na yango. Kokopa, kokabola lisusu, to kosalela yango mpo na commerce kozanga ndingisa epekisami.',
  'cta.disclaimer': 'Site oyo esali te relation ya agence, management, édition, partenariat, mosala, to representation juridique. Masolo ya collaboration to booking esengeli kozala na boyokani ya kokoma separé.',
  'legal.metaTitle': 'Legal / Conditions | Carine Sanadina',
  'legal.metaDescription': 'Ba avis ya mibeko mpe ya propriété mpo na site ya Carine Sanadina, na propriété ya plateforme, biloko ya artiste, usage ya media, mpe contact.',
  'legal.metaOgDescription': 'Ba avis ya mibeko mpe propriété mpo na plateforme ya Carine Sanadina mpe biloko ya artiste oyo endimami.',
  'legal.kicker': 'Legal / Conditions',
  'legal.heading': 'Avis ya propriété mpe usage ya site',
  'legal.intro': 'Ba avis oyo elimboli propriété, usage oyo endimami, mpe bandelo ya représentation mpo na site ya Carine Sanadina, na limemya, collaboration mpe polele.',
  'legal.ariaLabel': 'Ba conditions légales mpe ba avis ya propriété',
  'legal.ownership.title': 'Avis ya propriété mpe plateforme',
  'legal.ownership.body': 'Concept, design, structure, mise en œuvre ya code, direction visuelle, expérience digitale, layout, mpe présentation créative ya site ebimisami mpe etambwisami na Omoluabi Productions, projet créatif oyo etambolaka na se ya ETL GIS Consulting LLC. Soki elobami ndenge mosusu te, plateforme ya site mpe biloko ya présentation digitale ezali ya ETL GIS Consulting LLC to ezali na contrôle na yango.',
  'legal.ip.title': 'Propriété intellectuelle',
  'legal.ip.body': 'Ba layout ya site, style ya interface, code, présentation ya texte, mpe direction créative ya plateforme ekoki te kokopama, kosalelama lisusu, kobongisama, kokabolama lisusu, to kosalelama mpo na commerce kozanga ndingisa ya kokoma ya ETL GIS Consulting LLC to nkolo ya makoki oyo ebongi. Biloko ya bato mosusu, ya artiste, to oyo ezali crédité séparément etikali ya bankolo na yango.',
  'legal.artist.title': 'Biloko ya artiste mpe image',
  'legal.artist.body': 'Carine Sanadina abateli propriété to contrôle ya identité na ye, image oyo endimami, mikanda, miziki, lisolo ya bomoi, mpe biloko etali artiste soki esengeli. Kolakisa kombo, image, misala, miziki, to biographie ya Carine Sanadina na site oyo ezali mpo na promotion mpe information, na biloko ya collaboration oyo endimami.',
  'legal.noAgency.title': 'Agence to management ezali te',
  'legal.noAgency.body': 'Eloko moko te na site oyo esali relation ya agence, management, édition, label ya miziki, mosala, partenariat, to représentation juridique kati na Carine Sanadina, Omoluabi Productions, mpe ETL GIS Consulting LLC, longola kaka soki boyokani ya kokoma separé elobi yango polele. Omoluabi Productions elakisami te lokola société enregistrée séparée, label, manager, agent, éditeur, to représentant juridique.',
  'legal.music.title': 'Usage ya miziki mpe media',
  'legal.music.body': 'Miziki, bilili, texte, audio, artwork, video, mpe media mosusu elakisami mpo na visibilité ya promotion, contexte ya information, mpe présentation ya artiste oyo endimami. Makoki etikali ya bankolo na yango. Kokopa, ko télécharger, kosalela lisusu, kobongola, kokabola lisusu, kobimisa public, to kosalela commerce kozanga ndingisa epekisami soki ndingisa ya kokoma ya nkolo ya makoki oyo ebongi ezali te.',
  'legal.websiteUse.title': 'Usage ya site',
  'legal.websiteUse.body': 'Bapaya bakoki kotala site mpo na makambo ya bango moko, information, mpe découverte ya promotion. Usage ya site esengeli te kobebisa fonctionnement ya site, kopesa image ya lokuta ya relation ya moto moko, to kolakisa endorsement, représentation, to permission oyo epesami te séparément na kokoma.',
  'legal.liability.title': 'Limitation ya responsabilité',
  'legal.liability.body': 'Site oyo epesami lokola présentation digitale ya promotion mpe information. ETL GIS Consulting LLC ekoki kobongisa, kolongola, ko réviser, ko suspendre, to kosukisa eteni nyonso ya site to présentation ya media. Na ndenge mibeko epesi nzela, ETL GIS Consulting LLC ezali responsable te mpo na ba problèmes indirects, incidentals, to consequentials oyo ewuti na usage ya site, disponibilité, liens ya bato mosusu, to playback ya media.',
  'legal.takedown.title': 'Demandes ya kolongola to kobongisa',
  'legal.takedown.body': 'Demandes ya correction, kolongola, mituna ya makoki, mituna ya media, to clarification ya propriété esengeli kotindama na section contact ya site. Pesa ba détails ekoki mpo koyeba matériel nini mpe lolenge ya demande mpo etalelama malamu.',
  'legal.takedown.link': 'Kende na section contact',
  'legal.entity.title': 'Entité oyo etambwisaka',
  'legal.entity.body': 'ETL GIS Consulting LLC ezali entité légalement enregistrée oyo etali fonctionnement mpe contrôle ya plateforme ya site mpe présentation digitale. Omoluabi Productions esalaka lokola marque ya projet créatif/media oyo etambolaka na se ya ETL GIS Consulting LLC mpe na site oyo elakisami te lokola entité juridique enregistrée séparée.',
  'footer.rights': '© 2026 Carine Sanadina. Makoki nyonso ebatelami.',
  'footer.legal': 'Legal / Conditions',
  'footer.credit': 'Concept, design mpe présentation digitale ya site na Omoluabi Productions, projet créatif oyo etambolaka na se ya ETL GIS Consulting LLC.'
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
    const isActive = button.dataset.languageOption === nextLanguage;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  storeLanguage(nextLanguage);
  window.dispatchEvent(new CustomEvent('carine:languagechange', { detail: { language: nextLanguage } }));
};

const languageButtons = document.querySelectorAll('[data-language-option]');

languageButtons.forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.languageOption));
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

  const updateToggle = (button, audio, title) => {
    if (!button) {
      return;
    }

    const isPlaying = audio && !audio.paused;
    button.setAttribute('aria-label', `${isPlaying ? translate('audio.pause') : translate('audio.play')} ${title}`);
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
    mini.cover.alt = `${player.dataset.trackTitle} ${translate('audio.coverArt')}`;
    mini.cover.referrerPolicy = 'no-referrer';
    mini.title.dataset.hasTrack = 'true';
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
        status.textContent = translate('audio.playbackError');
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
          status.textContent = translate('audio.unavailable');
        }
      });


    window.addEventListener('carine:languagechange', () => {
      updateToggle(playToggle, audio, title);

      if (status && status.textContent) {
        status.textContent = musicPlayer.classList.contains('is-ready') ? '' : translate('audio.unavailable');
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


    window.addEventListener('carine:languagechange', () => {
      if (!activePlayer) {
        mini.title.dataset.hasTrack = 'false';
        mini.title.textContent = translate('mini.noTrack');
        return;
      }

      const audio = activePlayer.querySelector('audio');
      updateToggle(mini.toggle, audio, activePlayer.dataset.trackTitle);
      mini.cover.alt = `${activePlayer.dataset.trackTitle} ${translate('audio.coverArt')}`;
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
