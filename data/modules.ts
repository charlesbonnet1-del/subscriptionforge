// Structure pédagogique de SubscriptionForge, dérivée de « La Bible de l'Abonnement »
// (16 modules, 10 parties). Le contenu détaillé des cours sera ajouté module par module.

export type Part = {
  id: string;
  roman: string;
  title: string;
  theme: string;
};

export type ModuleMeta = {
  slug: string;
  number: string; // "1", "7-bis", "16"
  partId: string;
  title: string;
  tagline: string; // accroche courte (cognitive easing)
  description: string; // 2-3 phrases, ton engageant
  lessons: number; // nombre de cours prévus
  minutes: number; // durée estimée
  accent: string; // couleur d'accent de la carte
  outcomes: string[]; // ce que l'apprenant saura faire
};

export const PARTS: Part[] = [
  { id: "I", roman: "Partie I", title: "Fondations", theme: "Comprendre l'abonnement avant de le pratiquer" },
  { id: "II", roman: "Partie II", title: "Design", theme: "Construire un modèle d'abonnement qui tient" },
  { id: "III", roman: "Partie III", title: "Acquisition & conversion", theme: "Remplir le funnel et le convertir" },
  { id: "IV", roman: "Partie IV", title: "Rétention", theme: "Garder ce qu'on a construit" },
  { id: "IV-bis", roman: "Partie IV-bis", title: "Lock-in", theme: "Rendre le départ structurellement difficile" },
  { id: "V", roman: "Partie V", title: "Expansion & revenus", theme: "Faire grandir ce qu'on a" },
  { id: "VI", roman: "Partie VI", title: "Analytics & pilotage", theme: "Voir clair pour décider juste" },
  { id: "VII", roman: "Partie VII", title: "Contextes spécifiques", theme: "Le même métier, des règles différentes" },
  { id: "VIII", roman: "Partie VIII", title: "Opérations & stack", theme: "L'outillage sans développement" },
  { id: "IX", roman: "Partie IX", title: "Transitions & cas d'école", theme: "Basculer vers l'abonnement, apprendre des meilleurs" },
  { id: "X", roman: "Partie X", title: "Erreurs & diagnostic", theme: "Éviter les pièges, naviguer juste" },
];

export const MODULES: ModuleMeta[] = [
  {
    slug: "economie-de-l-abonnement",
    number: "1",
    partId: "I",
    title: "L'économie de l'abonnement",
    tagline: "Pourquoi tout change",
    description:
      "Une rupture de paradigme, pas un mode de paiement. Du « vendre une fois » au « s'engager pour toujours », et les métriques qui gouvernent tout : MRR, churn, LTV.",
    lessons: 5,
    minutes: 55,
    accent: "#FF4500",
    outcomes: [
      "Distinguer transaction et relation récurrente",
      "Lire le trio MRR / churn / LTV",
      "Classer un business dans les 8 archétypes",
      "Choisir son modèle avec l'arbre de décision",
    ],
  },
  {
    slug: "psychologie-de-l-abonne",
    number: "2",
    partId: "I",
    title: "Psychologie de l'abonné",
    tagline: "Décider, rester, partir",
    description:
      "Comment les gens s'abonnent, pourquoi ils restent par inertie, et ce qui déclenche le départ. Biais cognitifs, subscription guilt, segmentation et moments de vie.",
    lessons: 6,
    minutes: 60,
    accent: "#FF6A00",
    outcomes: [
      "Activer les bons biais de conversion",
      "Neutraliser les freins à l'abonnement",
      "Reconnaître les 5 profils d'abonnés",
      "Anticiper les churns liés aux moments de vie",
    ],
  },
  {
    slug: "design-du-modele",
    number: "3",
    partId: "II",
    title: "Design du modèle",
    tagline: "De la valeur continue à l'offre irrésistible",
    description:
      "Trouver sa « forever promise », architecturer ses tiers, manier le freemium et le free trial sans se saborder. La saisonnalité, cet angle qu'on oublie toujours.",
    lessons: 5,
    minutes: 55,
    accent: "#FF8C00",
    outcomes: [
      "Formuler une forever promise testable",
      "Structurer 3 à 4 plans cohérents",
      "Choisir entre freemium et free trial",
      "Concevoir un reverse trial",
    ],
  },
  {
    slug: "pricing",
    number: "4",
    partId: "II",
    title: "Pricing",
    tagline: "Fixer, défendre, faire évoluer son prix",
    description:
      "Le value-based pricing contre le piège du cost-plus. Van Westendorp, page pricing qui convertit, repricing maîtrisé (le manuel Adobe, le contre-cas Netflix 2011) et localisation PPP.",
    lessons: 6,
    minutes: 65,
    accent: "#FF4500",
    outcomes: [
      "Appliquer le value-based pricing et la règle du 3:1",
      "Trouver son prix avec Van Westendorp",
      "Construire une page pricing à fort taux de conversion",
      "Réussir une hausse de prix",
    ],
  },
  {
    slug: "funnel-d-abonnement",
    number: "5",
    partId: "III",
    title: "Le funnel d'abonnement",
    tagline: "De l'inconnu à l'abonné payant",
    description:
      "Là où le e-commerce s'arrête, l'abonnement commence. Canaux par LTV, referral et gifting, l'aha moment, et le paywall design : où bloquer, et où surtout ne pas bloquer.",
    lessons: 6,
    minutes: 60,
    accent: "#FF6A00",
    outcomes: [
      "Hiérarchiser ses canaux par LTV",
      "Construire un programme de referral",
      "Identifier et viser l'aha moment",
      "Placer son paywall au bon endroit",
    ],
  },
  {
    slug: "anatomie-du-churn",
    number: "6",
    partId: "IV",
    title: "Anatomie du churn",
    tagline: "Comprendre avant de traiter",
    description:
      "La taxonomie complète : volontaire, involontaire, logo, revenue, contraction. Benchmarks par industrie, courbes de rétention et cohortes, Customer Health Score.",
    lessons: 4,
    minutes: 50,
    accent: "#FF8C00",
    outcomes: [
      "Distinguer les espèces de churn",
      "Construire et lire des cohortes",
      "Repérer la contraction, prédateur silencieux",
      "Écouter les vraies raisons du départ",
    ],
  },
  {
    slug: "strategies-de-retention",
    number: "7",
    partId: "IV",
    title: "Stratégies de rétention",
    tagline: "L'arsenal complet",
    description:
      "Engagement, gamification (le système Duolingo), communauté (Peloton), save flows, pause, downgrade, réengagement, win-back et dunning : le levier au meilleur ROI du métier.",
    lessons: 10,
    minutes: 95,
    accent: "#FF4500",
    outcomes: [
      "Concevoir une save flow efficace",
      "Déployer pause et downgrade stratégiques",
      "Bâtir des séquences win-back et dunning",
      "Réveiller les zombie subscribers",
    ],
  },
  {
    slug: "switching-costs-lock-in",
    number: "7-bis",
    partId: "IV-bis",
    title: "Switching costs & lock-in",
    tagline: "L'architecture de la dépendance",
    description:
      "La rétention structurelle, éthique. Lock-in par les données, les intégrations, le réseau, la personnalisation, l'investissement et la progression. La matrice complète des stratégies.",
    lessons: 8,
    minutes: 70,
    accent: "#FF6A00",
    outcomes: [
      "Tracer la ligne éthique du lock-in",
      "Accumuler de la valeur non transférable",
      "Créer de la dépendance par le workflow",
      "Cartographier ses switching costs",
    ],
  },
  {
    slug: "nrr-et-expansion",
    number: "8",
    partId: "V",
    title: "NRR & expansion",
    tagline: "Croître sans nouveau client",
    description:
      "Le Net Revenue Retention, métrique reine des investisseurs. Upsell, cross-sell, plan familial, annual upsell, fidélité native, et l'abonnement comme levier de valorisation.",
    lessons: 4,
    minutes: 45,
    accent: "#FF8C00",
    outcomes: [
      "Calculer et piloter son NRR",
      "Déclencher l'upsell au bon moment",
      "Étendre par les sièges et la durée",
      "Présenter son business à des investisseurs",
    ],
  },
  {
    slug: "maitriser-ses-donnees",
    number: "9",
    partId: "VI",
    title: "Maîtriser ses données",
    tagline: "Piloter par les chiffres",
    description:
      "Le dashboard MRR complet et son waterfall, les unit economics honnêtes (CAC blended vs canal, LTV), le forecasting, les cohortes avancées — et tout reconstruire à 0 € dans un tableur.",
    lessons: 5,
    minutes: 60,
    accent: "#FF4500",
    outcomes: [
      "Lire un MRR waterfall en une image",
      "Calculer un CAC honnête",
      "Modéliser un forecast à 24 mois",
      "Construire son dashboard à 0 €",
    ],
  },
  {
    slug: "media-newsletters-creators",
    number: "10",
    partId: "VII",
    title: "Média, newsletters & creators",
    tagline: "L'abonnement au contenu",
    description:
      "Du modèle publicitaire au reader revenue. Paywalls de presse comparés, newsletter payante (Substack, Ghost, beehiiv), creator economy et bundle de contenu (le cas NYT).",
    lessons: 5,
    minutes: 55,
    accent: "#FF6A00",
    outcomes: [
      "Choisir son type de paywall presse",
      "Lancer une newsletter payante",
      "Comprendre l'abonnement à la personne",
      "Diversifier les raisons de rester",
    ],
  },
  {
    slug: "saas-b2b",
    number: "11",
    partId: "VII",
    title: "Abonnement SaaS B2B",
    tagline: "Les particularités du B2B",
    description:
      "Product-Led Growth, usage-based pricing et son bill shock, le Customer Success comme fonction anti-churn, et la mécanique des grands comptes enterprise.",
    lessons: 4,
    minutes: 55,
    accent: "#FF8C00",
    outcomes: [
      "Mettre en place un mouvement PLG",
      "Concevoir un pricing hybride socle + usage",
      "Structurer un Customer Success",
      "Vendre et étendre en enterprise",
    ],
  },
  {
    slug: "mobile-et-abonnements-physiques",
    number: "12",
    partId: "VII",
    title: "Mobile & abonnements physiques",
    tagline: "App stores et boxes",
    description:
      "Les spécificités des app stores (la commission, in-app vs web), la conversion mobile-first, et le métier des boxes : design, box fatigue et rétentions spécifiques.",
    lessons: 3,
    minutes: 45,
    accent: "#FF4500",
    outcomes: [
      "Naviguer les règles des app stores",
      "Optimiser un paywall mobile",
      "Concevoir une box rentable",
      "Combattre la box fatigue",
    ],
  },
  {
    slug: "stack-technique-et-outils",
    number: "13",
    partId: "VIII",
    title: "Stack technique & outils",
    tagline: "S'outiller sans coder",
    description:
      "Choisir son outil de billing parmi les cinq acteurs, brancher son analytics d'abonnement, et reconnaître les dark patterns de billing pour s'en tenir à distance.",
    lessons: 3,
    minutes: 40,
    accent: "#FF6A00",
    outcomes: [
      "Choisir son billing par profil",
      "Mettre en place son analytics",
      "Identifier les dark patterns",
      "Construire une stack éthique",
    ],
  },
  {
    slug: "transition-vers-l-abonnement",
    number: "14",
    partId: "IX",
    title: "Passer au modèle d'abonnement",
    tagline: "Le guide de transition",
    description:
      "La peur de la cannibalisation et la réalité du J-curve. Le playbook Adobe et Microsoft 365, puis la roadmap en trois phases : valider, construire la valeur, migrer la base.",
    lessons: 2,
    minutes: 40,
    accent: "#FF8C00",
    outcomes: [
      "Anticiper la J-curve d'une transition",
      "Valider avant de basculer",
      "Construire de la valeur continue",
      "Migrer une base existante",
    ],
  },
  {
    slug: "case-studies",
    number: "15",
    partId: "IX",
    title: "Les 20 case studies",
    tagline: "Apprendre des meilleurs",
    description:
      "Netflix, Spotify, Duolingo, Adobe, Microsoft, NYT, Substack, Slack, Notion, Figma, Salesforce, GitHub Copilot, Amazon Prime, Apple One… leurs décisions, leurs chiffres, leurs erreurs.",
    lessons: 20,
    minutes: 120,
    accent: "#FF4500",
    outcomes: [
      "Disséquer 20 transitions emblématiques",
      "Repérer les décisions qui ont tout changé",
      "Transposer les playbooks à son contexte",
      "Éviter les erreurs déjà commises",
    ],
  },
  {
    slug: "40-erreurs-classiques",
    number: "16",
    partId: "X",
    title: "Les 40 erreurs classiques",
    tagline: "Le diagnostic complet",
    description:
      "Quarante erreurs par étape — lancement, onboarding, pricing, rétention, analyse, croissance — et l'outil de diagnostic pour repérer les vôtres avant qu'elles ne coûtent.",
    lessons: 6,
    minutes: 55,
    accent: "#FF6A00",
    outcomes: [
      "Auditer son lancement",
      "Corriger ses erreurs de pricing",
      "Colmater son seau percé",
      "Diagnostiquer sa croissance",
    ],
  },
];

export function getModule(slug: string): ModuleMeta | undefined {
  return MODULES.find((m) => m.slug === slug);
}

export function getPart(id: string): Part | undefined {
  return PARTS.find((p) => p.id === id);
}

export function modulesByPart(): { part: Part; modules: ModuleMeta[] }[] {
  return PARTS.map((part) => ({
    part,
    modules: MODULES.filter((m) => m.partId === part.id),
  })).filter((g) => g.modules.length > 0);
}
