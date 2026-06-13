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

export const QUIZZES: Record<string, Quiz> = {
  [module1.moduleSlug]: module1,
};

export function getQuiz(slug: string): Quiz | undefined {
  return QUIZZES[slug];
}
