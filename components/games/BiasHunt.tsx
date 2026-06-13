"use client";

import ClassifyGame from "./ClassifyGame";

const OPTIONS = [
  { value: "ancrage", label: "Ancrage" },
  { value: "leurre", label: "Effet de leurre" },
  { value: "compromis", label: "Effet de compromis" },
  { value: "perte", label: "Aversion à la perte" },
  { value: "preuve", label: "Preuve sociale" },
  { value: "fomo", label: "FOMO / rareté" },
];

const ITEMS = [
  {
    prompt: "Le plan « All Apps » à 59,99 $ est affiché en premier, avant les apps individuelles à 22,99 $.",
    answer: "ancrage",
    why: "Le premier prix vu devient la référence : l'app seule paraît une affaire (alors qu'elle est chère à l'usage).",
  },
  {
    prompt: "Web seul 59 $ · Print seul 125 $ · Print + Web 125 $. Personne ne choisit « print seul ».",
    answer: "leurre",
    why: "L'option dominée (print seul) fait basculer le choix vers le bundle (84 % vs 32 % sans le leurre). Cas Ariely / The Economist.",
  },
  {
    prompt: "Trois plans ; celui du milieu porte un badge « le plus populaire ».",
    answer: "compromis",
    why: "L'humain fuit les extrêmes : la position centrale capte la majorité, renforcée par la preuve sociale du badge.",
  },
  {
    prompt: "« Économisez 20 % en passant à l'annuel » plutôt que « payez X € de moins ».",
    answer: "perte",
    why: "Cadrer en gain à saisir active l'aversion à la perte (une perte pèse ~2× un gain) : ne pas saisir = perdre.",
  },
  {
    prompt: "« Rejoignez 50 000 abonnés qui re-choisissent le service chaque mois. »",
    answer: "preuve",
    why: "Preuve sociale spécifique à l'abonnement : le re-choix continu vaut plus qu'un succès de vente passé.",
  },
  {
    prompt: "« Offre early bird — 48 h restantes », avec une date de fin réellement tenue.",
    answer: "fomo",
    why: "Rareté légitime (le compte à rebours ne se réinitialise pas). Si la rareté était fausse, ce serait un dark pattern.",
  },
];

export default function BiasHunt() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Le biais caché"
      title="Repérez le biais exploité"
      intro="Six éléments de pages pricing réelles. Identifiez le biais cognitif à l'œuvre dans chacun."
      options={OPTIONS}
      items={ITEMS}
      xpPerCorrect={5}
      goodAt={5}
    />
  );
}
