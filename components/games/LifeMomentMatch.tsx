"use client";

import ClassifyGame from "./ClassifyGame";

const OPTIONS = [
  { value: "pause", label: "Pause / tarif solidaire" },
  { value: "transfert", label: "Transfert / portabilité" },
  { value: "famille", label: "Bascule offre famille" },
  { value: "individuel", label: "Tarif individuel de transition" },
  { value: "retour", label: "Cycle de retour / win-back" },
];

const ITEMS = [
  {
    prompt: "Série d'échecs de paiement + désabonnement d'autres services premium détectés.",
    answer: "pause",
    why: "Signature d'une difficulté financière : la valeur est intacte, le budget a disparu. Pause ou tarif solidaire temporaire — jamais l'argumentaire produit.",
  },
  {
    prompt: "Changement d'adresse postale sur un abonnement de box physique.",
    answer: "transfert",
    why: "Churn logistique de déménagement : transfert facilité, pause de déménagement. Proposer sans nommer l'événement.",
  },
  {
    prompt: "Bascule des horaires de connexion vers la nuit, usage qui s'effondre (post-naissance probable).",
    answer: "famille",
    why: "Réallocation du temps et du budget : pause longue, formats courts (« 10 min/jour »), ou bascule vers l'offre famille.",
  },
  {
    prompt: "Perte de l'email professionnel + chute d'usage sur un outil SaaS payé jusque-là par l'employeur.",
    answer: "individuel",
    why: "Changement d'emploi : le champion part. Tarif individuel de transition + portabilité du compte et de l'historique.",
  },
  {
    prompt: "Inactivité totale depuis la fin d'un projet de 3 mois pour lequel l'abonnement avait été pris.",
    answer: "retour",
    why: "Opportuniste en fin de projet : churn structurel. Départ fluide + cycle de retour organisé (« à la carte », tarif de veille).",
  },
];

export default function LifeMomentMatch() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Moments de vie"
      title="La bonne offre au bon moment"
      intro="Cinq signaux comportementaux. Choisissez l'offre de rétention adaptée — en respectant la ligne « attention, pas surveillance »."
      options={OPTIONS}
      items={ITEMS}
      xpPerCorrect={5}
      goodAt={4}
    />
  );
}
