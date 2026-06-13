"use client";

import ClassifyGame from "./ClassifyGame";

const OPTIONS = [
  { value: "zombie", label: "Zombie (réengager)" },
  { value: "sain", label: "Sain épisodique (rien)" },
  { value: "ambigu", label: "Ambigu (surveiller)" },
];

const ITEMS = [
  {
    prompt: "Usage à zéro depuis 4 mois, emails non ouverts, mais prélèvements honorés ; renouvellement annuel dans 40 jours.",
    answer: "zombie",
    why: "Baisse d'engagement + paiement qui continue = zombie. Agir 30-45 j avant le renouvellement (réengagement, puis pause/downgrade).",
  },
  {
    prompt: "Logiciel de déclaration fiscale : 2 connexions par an, toujours payé, satisfait quand interrogé.",
    answer: "sain",
    why: "L'usage épisodique correspond à la fréquence naturelle du besoin. Pas de guilt : ne rien faire.",
  },
  {
    prompt: "Usage en baisse régulière sur 90 jours, ouvre encore quelques emails, dernière session il y a 3 semaines.",
    answer: "ambigu",
    why: "Désengagement progressif mais pas terminal : surveiller via le Customer Health Score, préparer un réengagement doux.",
  },
  {
    prompt: "Box mensuelle reçue mais jamais ouverte selon les retours ; paiement OK ; aucune plainte.",
    answer: "zombie",
    why: "Box fatigue silencieuse = subscription guilt visible. Zombie à réveiller (skip, downgrade de fréquence) avant la résiliation rageuse.",
  },
  {
    prompt: "App de météo consultée 2 fois par semaine, court mais régulier, depuis deux ans.",
    answer: "sain",
    why: "Usage faible mais stable et cohérent avec le besoin : abonné sain, pas un zombie.",
  },
];

export default function GuiltDetector() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Subscription guilt"
      title="Détectez la subscription guilt"
      intro="Pour chaque profil chiffré : zombie subscriber, abonné sain à usage épisodique, ou cas ambigu ? Et l'action à mener."
      options={OPTIONS}
      items={ITEMS}
      xpPerCorrect={5}
      goodAt={4}
    />
  );
}
