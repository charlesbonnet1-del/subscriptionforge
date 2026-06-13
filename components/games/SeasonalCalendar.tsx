"use client";

import ClassifyGame from "./ClassifyGame";

const OPTIONS = [
  { value: "acquisition", label: "Pic d'acquisition" },
  { value: "churn", label: "Risque de churn" },
  { value: "croisiere", label: "Régime de croisière" },
];

const ITEMS = [
  { prompt: "Janvier — résolutions de nouvelle année (fitness, apprentissage, finances).", answer: "acquisition", why: "Pic d'acquisition par excellence — mais aussi pic de churn budgétaire. Onboarding renforcé des cohortes." },
  { prompt: "Mars — la cohorte de janvier se décourage.", answer: "churn", why: "Le churn des résolutions mortes : save flows et offres de pause calibrées." },
  { prompt: "Août — les vacances suspendent les usages.", answer: "churn", why: "Un mois sans usage = un mois de subscription guilt. Rapports de valeur différés, réengagement doux." },
  { prompt: "Septembre — la rentrée, nouveaux projets et budgets.", answer: "acquisition", why: "Le « deuxième janvier » : offres de rentrée, réactivation des pausés de l'été." },
  { prompt: "Avril — base stabilisée après le T1.", answer: "croisiere", why: "Moment idéal pour la migration mensuel → annuel sur les engagés du T1." },
  { prompt: "Décembre — coupes de budget avant les fêtes + renouvellements annuels.", answer: "churn", why: "Pire moment psychologique pour un gros renouvellement : protéger les renouvellements, campagne gifting." },
  { prompt: "Octobre — pas d'événement saisonnier majeur.", answer: "croisiere", why: "Régime de croisière : campagne annuelle n°2, préparation du Q4." },
];

export default function SeasonalCalendar() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Calendrier saisonnier"
      title="Lisez la saison"
      intro="Pour un business à saisonnalité marquée (fitness, éducation) : chaque mois est-il un pic d'acquisition, un risque de churn, ou un régime de croisière ?"
      options={OPTIONS}
      items={ITEMS}
      xpPerCorrect={4}
      goodAt={6}
    />
  );
}
