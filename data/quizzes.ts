// Quiz notés sur 20. Chaque question vaut un poids ; le score est ramené sur 20.
// Volontairement exigeants : l'apprenant doit sentir qu'il n'a pas payé pour du vide.

export type QuizQuestion = {
  id: number;
  prompt: string;
  options: string[];
  correct: number; // index
  explain: string;
};

export type Quiz = {
  moduleSlug: string;
  title: string;
  passMark: number; // /20
  questions: QuizQuestion[];
};

const module1: Quiz = {
  moduleSlug: "economie-de-l-abonnement",
  title: "Quiz — L'économie de l'abonnement",
  passMark: 14,
  questions: [
    {
      id: 1,
      prompt:
        "Un abonné paie 25 €/mois ; le churn mensuel est de 5 %. Quelle est sa LTV simple (ARPU ÷ churn) ?",
      options: ["125 €", "500 €", "750 €", "1 250 €"],
      correct: 1,
      explain: "25 ÷ 0,05 = 500 € (durée de vie moyenne 1 ÷ 0,05 = 20 mois × 25 €).",
    },
    {
      id: 2,
      prompt: "Un abonnement annuel de 240 € encaissé en janvier compte pour combien de MRR ?",
      options: [
        "240 € en janvier",
        "20 € chaque mois",
        "240 € lissés sur le trimestre",
        "0 € : l'annuel n'entre pas dans le MRR",
      ],
      correct: 1,
      explain:
        "On normalise au mois : 240 ÷ 12 = 20 € de MRR par mois, jamais 240 € le mois de l'encaissement.",
    },
    {
      id: 3,
      prompt: "Lequel de ces revenus doit être EXCLU du MRR ?",
      options: [
        "Un add-on récurrent à 5 €/mois",
        "Un plan mensuel à 19 €",
        "Des frais de setup uniques de 500 €",
        "Un abonnement annuel normalisé",
      ],
      correct: 2,
      explain:
        "Règle absolue : si le revenu ne se représente pas contractuellement le mois prochain, il n'est pas dans le MRR. Le setup est du one-shot.",
    },
    {
      id: 4,
      prompt:
        "Deux business affichent +10 de MRR net ce mois. A : +50 new / −40 churn. B : +12 new / −2 churn. Que conclure ?",
      options: [
        "Ils sont équivalents : même MRR net",
        "A est plus sain car il acquiert davantage",
        "B est bien plus sain : son churn est maîtrisé",
        "Impossible de trancher sans le CAC",
      ],
      correct: 2,
      explain:
        "C'est le MRR movement, pas le MRR net, qui dit la vérité. A est un seau percé ; B empile durablement.",
    },
    {
      id: 5,
      prompt:
        "Une app a 1 000 000 d'utilisateurs, dont 30 000 payants à 10 €/mois. Quels sont l'ARPU et l'ARPPU ?",
      options: [
        "ARPU 10 € / ARPPU 0,30 €",
        "ARPU 0,30 € / ARPPU 10 €",
        "ARPU 0,30 € / ARPPU 0,30 €",
        "ARPU 10 € / ARPPU 10 €",
      ],
      correct: 1,
      explain:
        "ARPU = 300 000 € ÷ 1 000 000 = 0,30 € (monétisation de l'audience). ARPPU = 10 € (pricing des payants). Les confondre mène à des comparaisons absurdes.",
    },
    {
      id: 6,
      prompt: "Un NRR de 92 % signifie le plus probablement :",
      options: [
        "Une croissance endogène saine",
        "Un profil exceptionnel justifiant un haut multiple",
        "Un problème structurel : la base existante se contracte",
        "Que le business n'acquiert aucun nouveau client",
      ],
      correct: 2,
      explain:
        "Sous 100 %, les clients existants rapportent moins qu'il y a un an : churn + contraction dépassent l'expansion. Sous 90 %, alerte rouge.",
    },
    {
      id: 7,
      prompt: "Quel archétype présente le churn mensuel typiquement le plus élevé ?",
      options: ["SaaS enterprise", "Box physique de curation", "Marketplace double-face (pro)", "Accès à un service"],
      correct: 1,
      explain:
        "Les box de curation tournent à 10-15 % mensuel, avec ~50 % des résiliations dans les 90 premiers jours. Le SaaS enterprise est à l'opposé (0,5-2 %).",
    },
    {
      id: 8,
      prompt: "Dans un modèle usage-based pur, le churn classique est principalement remplacé par :",
      options: ["L'expansion", "La reactivation", "La contraction", "Le logo churn"],
      correct: 2,
      explain:
        "Le client ne résilie pas : il consomme moins. Pas d'événement à intercepter, juste une courbe qui s'affaisse. Le NRR devient la métrique reine.",
    },
    {
      id: 9,
      prompt: "Calculer son CAC « honnêtement » implique d'y inclure :",
      options: [
        "Uniquement les dépenses publicitaires",
        "Les dépenses pub + commerciales + salaires et outils des équipes d'acquisition",
        "Le coût du produit livré",
        "Les remboursements et impayés",
      ],
      correct: 1,
      explain:
        "Le CAC limité à la pub sous-estime le vrai coût de 30 à 60 % dès qu'il y a une équipe. Le mot important est « complet ».",
    },
    {
      id: 10,
      prompt: "Le freemium est avant tout :",
      options: [
        "Une stratégie d'acquisition",
        "Une stratégie de conversion",
        "Une obligation légale de transparence",
        "Un synonyme de free trial",
      ],
      correct: 1,
      explain:
        "Le gratuit attire, mais c'est la conversion free → payant qui fait le business. Pertinent seulement si le coût du gratuit est quasi nul et le marché très large.",
    },
  ],
};

const module2: Quiz = {
  moduleSlug: "psychologie-de-l-abonne",
  title: "Quiz — Psychologie de l'abonné",
  passMark: 14,
  questions: [
    {
      id: 1,
      prompt: "Pourquoi un free trial donnant accès à TOUTES les fonctionnalités est-il psychologiquement puissant ?",
      options: [
        "Il réduit le coût marginal du produit",
        "Il fait posséder un niveau de service dont l'expiration sera vécue comme une perte (endowment)",
        "Il augmente le prix d'ancrage",
        "Il supprime la douleur de payer",
      ],
      correct: 1,
      explain:
        "L'effet de possession : dès qu'on possède un niveau de service, le perdre fait plus mal que ne jamais l'avoir eu. C'est la logique poussée à son terme par le reverse trial.",
    },
    {
      id: 2,
      prompt: "Dans le cas Ariely / The Economist, à quoi sert l'option « print seul » à 125 $ que personne ne choisit ?",
      options: [
        "À ancrer le prix le plus bas",
        "À tester la sensibilité au prix",
        "C'est un leurre (option dominée) qui fait basculer le choix vers le bundle",
        "À segmenter les Chasseurs de valeur",
      ],
      correct: 2,
      explain:
        "Le leurre fait passer la sélection du bundle de 32 % à 84 %. Une option dominée bien placée peut augmenter le plan cible de ~40 %.",
    },
    {
      id: 3,
      prompt: "Une perte pèse psychologiquement environ combien de fois plus qu'un gain équivalent ?",
      options: ["1,2 fois", "2 fois", "5 fois", "10 fois"],
      correct: 1,
      explain:
        "Kahneman & Tversky : ~2×. D'où « économisez 20 % » (gain à saisir, donc perte si on ne le saisit pas) plutôt que « payez X € de moins ».",
    },
    {
      id: 4,
      prompt: "Pourquoi l'inertie est-elle dangereuse plutôt que rassurante ?",
      options: [
        "Elle augmente le coût du support",
        "Ce n'est pas de la rétention mais de la dette de churn qui se paie d'un coup à un événement de réveil",
        "Elle fausse le calcul du CAC",
        "Elle réduit le NPS mécaniquement",
      ],
      correct: 1,
      explain:
        "L'abonné inerte n'a pas décidé de rester, il a différé son départ. La dette se paie en vagues brutales et presque irrécupérables (sentiment de s'être fait avoir).",
    },
    {
      id: 5,
      prompt: "Un abonné part pour cause de bug non résolu. Quelle réponse est la PIRE sur la page d'annulation ?",
      options: [
        "Lui demander ce qui motive son départ",
        "Lui proposer immédiatement un discount de 30 %",
        "Lui proposer une réparation humaine du problème",
        "Le laisser partir proprement",
      ],
      correct: 1,
      explain:
        "Un discount proposé à quelqu'un qui part pour un bug est presque insultant : comprendre AVANT d'offrir. Le déclencheur (friction) appelle une réparation, pas un rabais.",
    },
    {
      id: 6,
      prompt: "Quel profil porte principalement la « dette de churn » d'une base ?",
      options: ["Le Super-User", "Le Passif Satisfait", "L'Opportuniste", "L'Identitaire"],
      correct: 1,
      explain:
        "Le Passif Satisfait (30-50 % de la base) reste par inertie : sa rétention est réelle tant qu'elle n'est pas testée par un événement de réveil.",
    },
    {
      id: 7,
      prompt: "Quelle est la signature comportementale d'un zombie subscriber ?",
      options: [
        "Plaintes fréquentes + usage élevé",
        "Baisse d'engagement + paiement qui continue",
        "Downgrades répétés + emails de promo ouverts",
        "NPS élevé + ancienneté faible",
      ],
      correct: 1,
      explain:
        "Il paie mais n'utilise plus. Invisible au MRR (15-30 % d'une base), il churne au renouvellement annuel. Agir 30-45 j AVANT, jamais après.",
    },
    {
      id: 8,
      prompt: "Face à un signal de difficulté financière (échecs de paiement, désabonnements premium), quelle réponse est adaptée ?",
      options: [
        "Un argumentaire produit rappelant la valeur",
        "Une pause ou un tarif solidaire temporaire",
        "Une hausse de prix repoussée",
        "Un upsell vers l'annuel",
      ],
      correct: 1,
      explain:
        "La valeur perçue est intacte, seul le budget a changé : les offres de circonstance (pause, downgrade, tarif réduit) — jamais l'argumentaire produit, qui tombe à côté.",
    },
    {
      id: 9,
      prompt: "Quelle variable du support est la plus corrélée à la satisfaction ?",
      options: [
        "Le temps de résolution complète",
        "Le nombre de tickets traités",
        "Le temps de première réponse",
        "Le taux d'escalade",
      ],
      correct: 2,
      explain:
        "Le temps de première réponse — plus que la résolution complète — car c'est lui qui dit à l'abonné « vous existez pour nous ». Un ticket mal résolu = churn ×2 à ×4.",
    },
    {
      id: 10,
      prompt: "Un abonné se plaint : « c'est trop cher pour ce que c'est ». Quel est le mauvais réflexe ?",
      options: [
        "Engager une conversation de valeur",
        "Comprendre son usage réel",
        "Accorder immédiatement un discount",
        "Proposer un downgrade adapté",
      ],
      correct: 2,
      explain:
        "Le discount répond à côté : l'abonné dit que la valeur perçue est trop basse, pas que le prix est trop haut. Et il éduque la base à se plaindre pour obtenir des remises.",
    },
  ],
};

export const QUIZZES: Record<string, Quiz> = {
  [module1.moduleSlug]: module1,
  [module2.moduleSlug]: module2,
};

export function getQuiz(slug: string): Quiz | undefined {
  return QUIZZES[slug];
}
