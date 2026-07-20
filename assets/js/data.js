/**
 * ============================================================================
 *  CONTENU DU CV — c'est le SEUL fichier que tu dois modifier pour mettre
 *  tes vraies informations. La mise en page (HTML/CSS) n'a pas besoin de
 *  changer : elle se construit automatiquement à partir de ce fichier.
 *
 *  Tout ce qui est écrit entre crochets [COMME CECI] est un espace réservé
 *  à remplacer. Cherche "[" dans ce fichier pour retrouver tout ce qu'il
 *  reste à compléter.
 * ============================================================================
 */

const SITE_DATA = {

  // --------------------------------------------------------------------
  // 1. PROFIL — identité, accroche, bio
  // --------------------------------------------------------------------
  profile: {
    name: "Aurélien Bertheaume",
    initials: "AB",

    // Ces intitulés défilent dans le hero (bandeau d'accueil).
    roles: [
      "Systems Architect",
      "Systems Engineer",
      "Program Manager",
      "Product Development Manager"
    ],

    // Le "pivot" que tu veux mettre en avant : capacité à basculer sur un
    // rôle Product Manager côté marketing.
    pivotRole: "Product Manager (Marketing)",

    location: "[Ville, Pays]",
    email: "aurelien.bth@gmail.com",
    phone: "[+33 6 00 00 00 00]",
    linkedinUrl: "https://www.linkedin.com/in/[ton-identifiant]",
    linkedinLabel: "linkedin.com/in/[ton-identifiant]",

    tagline: "Je conçois, j'architecture et je pilote les systèmes complexes — du concept à la mise sur le marché.",

    // 2-3 paragraphes courts. Le premier sert aussi de résumé en haut de page.
    bio: [
      "[À REMPLACER] Ingénieur systèmes et chef de programme avec X années d'expérience sur des projets complexes multi-domaines (matériel, logiciel, intégration). J'interviens de la définition d'architecture jusqu'au pilotage industriel, en assurant la cohérence technique et le respect des engagements coûts/délais.",
      "[À REMPLACER] J'aime les sujets où l'ingénierie système, la gestion de programme et le développement produit se rencontrent : cadrer un besoin flou, concevoir une architecture robuste, puis piloter l'équipe et les fournisseurs jusqu'à la mise en service.",
      "[À REMPLACER] Par ailleurs, mon expérience de la voix du client, du positionnement produit et du travail cross-fonctionnel me permet d'évoluer naturellement vers un rôle de Product Manager côté marketing — faire le lien entre besoin marché, feuille de route produit et exécution technique."
    ],

    // Compétences "signature" affichées juste sous l'accroche (5-6 mots-clés max)
    highlights: [
      "Architecture systèmes",
      "Pilotage de programme",
      "Développement produit",
      "Intégration multi-domaines",
      "Product & marché"
    ]
  },

  // --------------------------------------------------------------------
  // 2. PHOTO — laisse photo: null pour garder l'avatar par défaut, ou mets
  //    le chemin vers ton fichier (place-le dans assets/img/photo/).
  // --------------------------------------------------------------------
  photo: {
    src: null, // ex: "assets/img/photo/aurelien.jpg"
    alt: "Portrait d'Aurélien Bertheaume"
  },

  // --------------------------------------------------------------------
  // 3. VIDÉO DE PRÉSENTATION — laisse url: "" tant que tu n'as pas de vidéo.
  //    Accepte un lien YouTube ou Vimeo (l'intégration se fait automatiquement).
  // --------------------------------------------------------------------
  video: {
    url: "", // ex: "https://www.youtube.com/watch?v=XXXXXXXXXXX"
    caption: "Vidéo de présentation (60-90 secondes) : qui je suis, ce que je sais faire, ce que je cherche."
  },

  // --------------------------------------------------------------------
  // 4. COMPÉTENCES — organisées par catégorie. Chaque compétence a un id
  //    unique (utilisé pour relier projets <-> compétences).
  // --------------------------------------------------------------------
  skillCategories: [
    { id: "architecture", label: "Architecture & Ingénierie Systèmes" },
    { id: "program",      label: "Pilotage de Programme" },
    { id: "product",      label: "Développement Produit" },
    { id: "marketing",    label: "Produit & Marché" }
  ],

  skills: [
    { id: "sys-architecture",   name: "Architecture systèmes",        categoryId: "architecture", blurb: "Conception d'architectures multi-domaines cohérentes avec les exigences." },
    { id: "requirements-eng",   name: "Ingénierie des exigences",     categoryId: "architecture", blurb: "Traduction du besoin client en exigences vérifiables." },
    { id: "systems-integration",name: "Intégration & vérification",   categoryId: "architecture", blurb: "Intégration de sous-systèmes hétérogènes et validation bout-en-bout." },
    { id: "technical-risk",     name: "Gestion des risques techniques", categoryId: "architecture", blurb: "Identification et mitigation des risques de conception." },

    { id: "program-management", name: "Gestion de programme",        categoryId: "program", blurb: "Pilotage global coûts / délais / performance sur des programmes multi-lots." },
    { id: "stakeholder-mgmt",   name: "Gestion des parties prenantes", categoryId: "program", blurb: "Coordination client, fournisseurs, direction et équipes techniques." },
    { id: "roadmapping",        name: "Roadmapping",                 categoryId: "program", blurb: "Construction et arbitrage de feuilles de route pluriannuelles." },
    { id: "governance",         name: "Gouvernance projet",          categoryId: "program", blurb: "Mise en place de rituels de pilotage et de reporting exécutif." },

    { id: "product-development",name: "Développement produit",       categoryId: "product", blurb: "Pilotage du cycle de vie produit, du concept à l'industrialisation." },
    { id: "cross-functional",   name: "Leadership cross-fonctionnel", categoryId: "product", blurb: "Animation d'équipes pluridisciplinaires (ingénierie, achats, qualité)." },
    { id: "vendor-management",  name: "Pilotage fournisseurs",       categoryId: "product", blurb: "Sélection, contractualisation et suivi de performance fournisseurs." },
    { id: "agile-delivery",     name: "Agilité & delivery",          categoryId: "product", blurb: "Mise en œuvre de rituels agiles adaptés à des contextes industriels." },

    { id: "product-strategy",   name: "Stratégie produit",           categoryId: "marketing", blurb: "Définition de positionnement et de proposition de valeur." },
    { id: "market-research",    name: "Étude de marché",             categoryId: "marketing", blurb: "Analyse concurrentielle et écoute du besoin client final." },
    { id: "go-to-market",       name: "Go-to-market",                categoryId: "marketing", blurb: "Construction de plans de lancement produit." },
    { id: "user-research",      name: "Recherche utilisateur",       categoryId: "marketing", blurb: "Entretiens et synthèse des besoins utilisateurs pour prioriser la roadmap." }
  ],

  // --------------------------------------------------------------------
  // 5. PROJETS PROFESSIONNELS — le cœur du CV.
  //    "category" doit être l'un des id de projectCategories ci-dessous.
  //    "skills" est une liste d'id venant de la liste "skills" au-dessus :
  //    c'est ce qui permet de cliquer une compétence et de voir tous les
  //    projets liés.
  // --------------------------------------------------------------------
  projectCategories: [
    { id: "architecture", label: "Architecture systèmes" },
    { id: "program",      label: "Pilotage de programme" },
    { id: "product",      label: "Développement produit" },
    { id: "marketing",    label: "Produit & marché" }
  ],

  projects: [
    {
      id: "projet-1",
      title: "[Nom du projet / programme]",
      org: "[Entreprise ou client]",
      period: "[2022 — 2024]",
      category: "architecture",
      summary: "[À REMPLACER] Résumé en une phrase de ce que tu as livré et pourquoi ça comptait.",
      description: [
        "[À REMPLACER] Contexte : quel était le problème, l'enjeu, la contrainte de départ.",
        "[À REMPLACER] Ton rôle précis et les décisions clés que tu as prises.",
        "[À REMPLACER] Comment le projet s'est terminé."
      ],
      impact: [
        "[À REMPLACER] Résultat chiffré ou concret n°1",
        "[À REMPLACER] Résultat chiffré ou concret n°2",
        "[À REMPLACER] Résultat chiffré ou concret n°3"
      ],
      skills: ["sys-architecture", "requirements-eng", "technical-risk"]
    },
    {
      id: "projet-2",
      title: "[Nom du projet / programme]",
      org: "[Entreprise ou client]",
      period: "[2020 — 2022]",
      category: "program",
      summary: "[À REMPLACER] Résumé en une phrase.",
      description: [
        "[À REMPLACER] Contexte.",
        "[À REMPLACER] Ton rôle et décisions clés.",
        "[À REMPLACER] Conclusion / passage de relais."
      ],
      impact: [
        "[À REMPLACER] Résultat n°1",
        "[À REMPLACER] Résultat n°2"
      ],
      skills: ["program-management", "stakeholder-mgmt", "governance"]
    },
    {
      id: "projet-3",
      title: "[Nom du projet / programme]",
      org: "[Entreprise ou client]",
      period: "[2019 — 2020]",
      category: "product",
      summary: "[À REMPLACER] Résumé en une phrase.",
      description: [
        "[À REMPLACER] Contexte.",
        "[À REMPLACER] Ton rôle et décisions clés."
      ],
      impact: [
        "[À REMPLACER] Résultat n°1",
        "[À REMPLACER] Résultat n°2"
      ],
      skills: ["product-development", "cross-functional", "vendor-management"]
    },
    {
      id: "projet-4",
      title: "[Nom du projet / programme]",
      org: "[Entreprise ou client]",
      period: "[2018 — 2019]",
      category: "architecture",
      summary: "[À REMPLACER] Résumé en une phrase.",
      description: [
        "[À REMPLACER] Contexte.",
        "[À REMPLACER] Ton rôle et décisions clés."
      ],
      impact: [
        "[À REMPLACER] Résultat n°1"
      ],
      skills: ["systems-integration", "sys-architecture"]
    },
    {
      id: "projet-5",
      title: "[Nom du projet / programme]",
      org: "[Entreprise ou client]",
      period: "[2017 — 2018]",
      category: "marketing",
      summary: "[À REMPLACER] Un exemple où tu as travaillé côté besoin marché / produit.",
      description: [
        "[À REMPLACER] Contexte.",
        "[À REMPLACER] Ton rôle et décisions clés."
      ],
      impact: [
        "[À REMPLACER] Résultat n°1"
      ],
      skills: ["product-strategy", "market-research", "user-research"]
    },
    {
      id: "projet-6",
      title: "[Nom du projet / programme]",
      org: "[Entreprise ou client]",
      period: "[2016 — 2017]",
      category: "program",
      summary: "[À REMPLACER] Résumé en une phrase.",
      description: [
        "[À REMPLACER] Contexte.",
        "[À REMPLACER] Ton rôle et décisions clés."
      ],
      impact: [
        "[À REMPLACER] Résultat n°1"
      ],
      skills: ["roadmapping", "agile-delivery", "go-to-market"]
    }
  ],

  // --------------------------------------------------------------------
  // 6. PROJETS PERSONNELS — présentés façon "articles" avec photo.
  //    "content" est une liste de paragraphes.
  //    "image" : chemin vers assets/img/personal/ (laisse null pour un
  //    visuel par défaut).
  // --------------------------------------------------------------------
  personalProjects: [
    {
      id: "perso-1",
      title: "[Titre de ton projet perso]",
      date: "[2024]",
      image: null, // ex: "assets/img/personal/projet1.jpg"
      excerpt: "[À REMPLACER] Une phrase d'accroche façon chapô d'article.",
      content: [
        "[À REMPLACER] Pourquoi tu as lancé ce projet, ce que tu voulais apprendre ou prouver.",
        "[À REMPLACER] Comment tu t'y es pris, les choix techniques ou créatifs marquants.",
        "[À REMPLACER] Ce que ça t'a apporté et ce que ça dit de ta façon de travailler."
      ],
      skills: ["sys-architecture", "product-development"]
    },
    {
      id: "perso-2",
      title: "[Titre de ton projet perso]",
      date: "[2023]",
      image: null,
      excerpt: "[À REMPLACER] Une phrase d'accroche.",
      content: [
        "[À REMPLACER] Contexte du projet.",
        "[À REMPLACER] Réalisation et résultat."
      ],
      skills: ["product-strategy", "user-research"]
    }
  ],

  // --------------------------------------------------------------------
  // 7. POSTS LINKEDIN — cartes qui renvoient vers tes vrais posts.
  //    "image" optionnelle (assets/img/personal/ ou autre dossier).
  // --------------------------------------------------------------------
  linkedinPosts: [
    {
      id: "post-1",
      title: "[Titre / accroche du post]",
      date: "[Janvier 2026]",
      excerpt: "[À REMPLACER] Les 2-3 premières lignes du post, pour donner envie de cliquer.",
      url: "https://www.linkedin.com/[lien-vers-le-post]",
      image: null
    },
    {
      id: "post-2",
      title: "[Titre / accroche du post]",
      date: "[Décembre 2025]",
      excerpt: "[À REMPLACER] Les 2-3 premières lignes du post.",
      url: "https://www.linkedin.com/[lien-vers-le-post]",
      image: null
    },
    {
      id: "post-3",
      title: "[Titre / accroche du post]",
      date: "[Novembre 2025]",
      excerpt: "[À REMPLACER] Les 2-3 premières lignes du post.",
      url: "https://www.linkedin.com/[lien-vers-le-post]",
      image: null
    }
  ]
};
