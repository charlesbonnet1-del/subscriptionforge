"use client";

import ClassifyGame from "./ClassifyGame";

const OPTIONS = [
  { value: "super-user", label: "Super-User" },
  { value: "passif-satisfait", label: "Passif Satisfait" },
  { value: "opportuniste", label: "Opportuniste" },
  { value: "chasseur-de-valeur", label: "Chasseur de valeur" },
  { value: "identitaire", label: "Identitaire" },
];

const ITEMS = [
  {
    prompt: "Ouvre l'app tous les jours, teste chaque nouveauté, a parrainé 6 amis et répond à toutes les enquêtes.",
    answer: "super-user",
    why: "Sur-engagement et participation : le Super-User. Risque = déception qualitative, pas le prix.",
  },
  {
    prompt: "Paie depuis 3 ans, usage modéré et stable, n'a jamais contacté le support ni ouvert un email.",
    answer: "passif-satisfait",
    why: "Cœur silencieux : le Passif Satisfait. Porteur de la dette de churn, à entretenir par des rapports de valeur.",
  },
  {
    prompt: "S'est abonné le jour de la sortie d'une série, l'a binge-watchée en deux semaines, plus aucune activité depuis.",
    answer: "opportuniste",
    why: "Usage intense, étroit, daté : l'Opportuniste. Élargir l'usage ou organiser le cycle de retour.",
  },
  {
    prompt: "Acquis via un code promo -50 %, sur le plan le moins cher, n'ouvre que les emails d'offres.",
    answer: "chasseur-de-valeur",
    why: "Sensibilité au prix : le Chasseur de valeur. Lui réserver l'annuel remisé et les downgrades.",
  },
  {
    prompt: "Lecteur depuis 12 ans, profil complété, défend la marque en ligne, parle de « nous ».",
    answer: "identitaire",
    why: "Appartenance : l'Identitaire. Honorer l'ancienneté et protéger le contrat moral.",
  },
  {
    prompt: "A résilié à la dernière hausse de prix, puis est revenu trois mois plus tard sur une offre de réabonnement.",
    answer: "chasseur-de-valeur",
    why: "Churn tarifaire + retour sur offre : signature du Chasseur de valeur.",
  },
  {
    prompt: "Usage très élevé, mais se dit prêt à partir « si le prix augmente encore » et compare avec un concurrent.",
    answer: "chasseur-de-valeur",
    why: "Cas hybride : usage de Super-User mais dominante prix. La dominante comportementale est le Chasseur de valeur.",
  },
  {
    prompt: "Ancienneté de 8 ans, mais usage en chute et indifférence totale aux nouveautés ; reste « par habitude ».",
    answer: "passif-satisfait",
    why: "Cas hybride : l'ancienneté évoque l'Identitaire, mais l'absence de marqueurs d'appartenance et l'usage qui s'érode en font un Passif Satisfait à risque.",
  },
];

export default function ProfileClassifier() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Profilage"
      title="Profil d'abonné"
      intro="Classez 8 comportements dans les 5 profils. Deux cas sont volontairement hybrides — visez la dominante."
      options={OPTIONS}
      items={ITEMS}
      goodAt={7}
    />
  );
}
