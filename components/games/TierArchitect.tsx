"use client";

import ClassifyGame from "./ClassifyGame";

const OPTIONS = [
  { value: "starter", label: "Starter" },
  { value: "core", label: "Core (cible)" },
  { value: "pro", label: "Pro / Team" },
  { value: "enterprise", label: "Enterprise" },
];

const ITEMS = [
  { prompt: "L'expérience complète de la valeur centrale, avec des limites de volume qui se sentent quand l'usage devient sérieux.", answer: "starter", why: "Mission du Starter : convertir le curieux en démontrant la valeur, sans devenir une destination finale." },
  { prompt: "Tout ce qui fait la forever promise sans réserve, au centre de la page, badge « populaire ».", answer: "core", why: "Le Core est le produit que tout le pricing est construit pour vendre." },
  { prompt: "Collaboration, volumes étendus, fonctions d'administration, support prioritaire.", answer: "pro", why: "Le Pro/Team est le levier d'ARPU : il transforme la croissance d'usage en croissance de revenu (NRR)." },
  { prompt: "Pricing sur devis, SLA, conformité et sécurité, support dédié.", answer: "enterprise", why: "L'Enterprise capture les grands comptes et sert d'ancre infinie qui rend le Pro raisonnable." },
  { prompt: "Intégrations avancées et accès API pour les power users.", answer: "pro", why: "Fonctions de puissance : elles justifient de payer 2-4× le Core." },
  { prompt: "Un seul projet actif et un historique limité, pour goûter sans tout débloquer.", answer: "starter", why: "Limites de confort calibrées : « pas trop peu, pas trop »." },
];

export default function TierArchitect() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Architecte d'offre"
      title="Placez chaque brique dans le bon tier"
      intro="Construisez la grille à quatre étages : la ligne de fracture doit suivre la valeur, pas l'effort technique."
      options={OPTIONS}
      items={ITEMS}
      xpPerCorrect={4}
      goodAt={5}
    />
  );
}
