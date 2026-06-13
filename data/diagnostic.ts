// La grille de diagnostic rapide (avant-propos de « La Bible de l'Abonnement »).
// 15 questions ; chaque « non » ou « incertain » pointe vers le module qui traite le sujet.

export type DiagnosticQuestion = {
  id: number;
  question: string;
  modules: string[]; // renvois en cas de réponse négative
};

export const DIAGNOSTIC: DiagnosticQuestion[] = [
  { id: 1, question: "Savez-vous précisément pourquoi un client devrait vous payer chaque mois, et pas une seule fois ?", modules: ["M3"] },
  { id: 2, question: "Connaissez-vous votre churn mensuel, calculé sur une cohorte fixe et non sur la base totale ?", modules: ["M1", "M9"] },
  { id: 3, question: "Distinguez-vous le churn volontaire du churn involontaire (échecs de paiement) dans vos chiffres ?", modules: ["M6", "M7"] },
  { id: 4, question: "Avez-vous identifié votre aha moment — l'action précise qui sépare ceux qui restent de ceux qui partent ?", modules: ["M5"] },
  { id: 5, question: "Votre page pricing a-t-elle été testée (nombre de plans, ancrage, ordre d'affichage) ces six derniers mois ?", modules: ["M4"] },
  { id: 6, question: "Savez-vous combien vous coûte réellement l'acquisition d'un client, salaires et temps inclus ?", modules: ["M1"] },
  { id: 7, question: "Avez-vous une séquence de dunning automatisée pour récupérer les paiements échoués ?", modules: ["M7"] },
  { id: 8, question: "Un abonné qui clique sur « résilier » rencontre-t-il un save flow, ou part-il sans aucune interception ?", modules: ["M7"] },
  { id: 9, question: "Proposez-vous la pause comme alternative à la résiliation ?", modules: ["M7"] },
  { id: 10, question: "Suivez-vous vos « zombie subscribers » — ceux qui paient mais n'utilisent plus ?", modules: ["M2", "M7"] },
  { id: 11, question: "Connaissez-vous votre NRR, et est-il supérieur à 100 % ?", modules: ["M1", "M8"] },
  { id: 12, question: "Votre produit accumule-t-il de la valeur non transférable (historique, données, assets) qui rend le départ coûteux ?", modules: ["M7-bis"] },
  { id: 13, question: "Avez-vous un programme de referral structuré, ou comptez-vous sur le bouche-à-oreille spontané ?", modules: ["M5"] },
  { id: 14, question: "Vos prix sont-ils différenciés par marché géographique, ou appliquez-vous le même tarif partout ?", modules: ["M4"] },
  { id: 15, question: "Lisez-vous chaque semaine un tableau de bord avec vos sept chiffres vitaux ?", modules: ["M1", "M9"] },
];

export function diagnosticVerdict(negatives: number): { level: string; tone: string; message: string } {
  if (negatives <= 3) {
    return {
      level: "Socle solide",
      tone: "ok",
      message:
        "De zéro à trois failles : votre socle est solide. La plateforme vous servira à affiner et à verrouiller l'avantage.",
    };
  }
  if (negatives <= 8) {
    return {
      level: "Failles structurelles",
      tone: "warn",
      message:
        "De quatre à huit failles : des fragilités structurelles existent. Priorisez les modules pointés ci-dessous avant de pousser l'acquisition.",
    };
  }
  return {
    level: "Seau percé",
    tone: "danger",
    message:
      "Au-delà de huit failles : ne touchez pas à votre budget d'acquisition avant d'avoir traité les Fondations et la Rétention. Vous remplissez probablement un seau percé.",
  };
}
