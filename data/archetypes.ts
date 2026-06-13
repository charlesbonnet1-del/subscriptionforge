// Les 8 archétypes d'abonnement (Module 1.3 de La Bible de l'Abonnement).

export type Archetype = {
  id: number;
  name: string;
  short: string;
  examples: string;
  value: string;
  churn: string;
  lockIn: string;
  marginal: string;
  metric: string;
  pitfall: string;
};

export const ARCHETYPES: Archetype[] = [
  {
    id: 1,
    name: "L'accès à un contenu",
    short: "Contenu",
    examples: "Netflix, Spotify, le New York Times, Substack, Canal+",
    value:
      "L'abonné paie pour un catalogue ou un flux qui se renouvelle. Deux piliers : la profondeur (toujours quelque chose à consommer) et la fraîcheur (toujours du nouveau). Coût marginal quasi nul, mais coût du contenu massif et fixe.",
    churn: "3-6 % / mois",
    lockIn: "Moyen (historique, habitude)",
    marginal: "Quasi nul",
    metric: "Consommation / abonné",
    pitfall:
      "Croire que le catalogue suffit. Sans mécanique d'habitude, dix mille titres ne retiennent pas : la rétention de contenu est une affaire d'usage organisé, pas de stock.",
  },
  {
    id: 2,
    name: "L'accès à un logiciel (SaaS)",
    short: "SaaS",
    examples: "Adobe Creative Cloud, Notion, Slack, Figma, Salesforce",
    value:
      "L'abonné paie pour un outil qui résout un problème récurrent, amélioré en continu. La valeur s'approfondit avec l'usage (données, habitudes, intégrations). Le lock-in naturel le plus fort de tous.",
    churn: "0,5-7 % / mois",
    lockIn: "Fort (données, workflow)",
    marginal: "Quasi nul",
    metric: "NRR, usage hebdomadaire",
    pitfall:
      "Confondre « outil utile » et « outil dont on dépend ». Beaucoup de SaaS résolvent un problème ponctuel : on s'abonne un mois, on résout, on part. La valeur doit se régénérer à chaque cycle.",
  },
  {
    id: 3,
    name: "L'accès à un service",
    short: "Service",
    examples: "Amazon Prime, Deliveroo Plus, Uber One",
    value:
      "L'abonné prépaie un avantage sur des transactions qu'il aurait faites de toute façon. Une fois payé, chaque transaction chez un concurrent devient une « perte ». Un aimant à transactions.",
    churn: "2-4 % / mois",
    lockIn: "Fort si usage fréquent",
    marginal: "Variable (coût des avantages)",
    metric: "Fréquence de transaction",
    pitfall:
      "Un seuil de rentabilité mal calibré pour le client. S'il ne « rentabilise » pas visiblement, la résiliation est mathématique. Règle : l'abonné doit constater son gain (« vous avez économisé 47 € »).",
  },
  {
    id: 4,
    name: "Curation et livraison physique (box)",
    short: "Box physique",
    examples: "Dollar Shave Club, Birchbox, HelloFresh, Stitch Fix",
    value:
      "Double valeur : commodité du réapprovisionnement (replenishment) ou surprise de la découverte (curation). Seul archétype où chaque cycle a un coût variable réel : la marge est une bataille permanente.",
    churn: "5-15 % / mois",
    lockIn: "Faible",
    marginal: "Élevé (produit + logistique)",
    metric: "Rétention M3, marge / cycle",
    pitfall:
      "Acheter de la croissance avec des promotions qui recrutent des chasseurs de prime. Le modèle ne tient que si la cohorte survit au point mort logistique (3-4 cycles).",
  },
  {
    id: 5,
    name: "Communauté et appartenance",
    short: "Communauté",
    examples: "Patreon, Discord Nitro, OnlyFans, clubs et memberships",
    value:
      "L'abonné paie une relation : soutenir un créateur, appartenir à un groupe, afficher un statut. Valeur émotionnelle et identitaire — très résiliente, mais très volatile.",
    churn: "Bimodal",
    lockIn: "Émotionnel",
    marginal: "Quasi nul",
    metric: "Engagement communautaire",
    pitfall:
      "La dépendance à une personne. Quand la valeur EST le créateur, le burnout du créateur est le churn de tous. La parade : transition abonnement-personne → abonnement-produit.",
  },
  {
    id: 6,
    name: "L'usage mesuré (usage-based)",
    short: "Usage-based",
    examples: "Twilio, AWS, Stripe (hybride), API d'IA",
    value:
      "Le client paie ce qu'il consomme (message, requête, Go). L'alignement valeur/prix est parfait : qui réussit paie plus, sans renégociation. S'hybride avec un socle d'abonnement.",
    churn: "Contraction",
    lockIn: "Fort (intégration technique)",
    marginal: "Variable (infra)",
    metric: "NRR, consommation",
    pitfall:
      "Le bill shock. Une facture imprévisible détruit la confiance. Tout modèle usage-based doit investir dans la prévisibilité perçue : estimateurs, alertes, caps.",
  },
  {
    id: 7,
    name: "La creator economy",
    short: "Creator",
    examples: "Newsletters payantes, podcasts premium, coaching récurrent",
    value:
      "Un individu monétise directement une audience par un contenu ou un accompagnement récurrent. Cousin de la communauté, mais le centre de gravité est la production, pas la relation.",
    churn: "5-10 % / mois",
    lockIn: "Faible à émotionnel",
    marginal: "Temps du créateur",
    metric: "Régularité de production",
    pitfall:
      "Scalabilité plafonnée par le temps du créateur, et dépendance à la plateforme de distribution. La parade : posséder la relation (l'email) et diversifier la distribution.",
  },
  {
    id: 8,
    name: "La marketplace double-face",
    short: "Marketplace",
    examples: "Amazon (vendeur + Prime), Etsy, Doctolib",
    value:
      "La plateforme vend des abonnements aux deux faces du marché. La valeur de chaque face dépend de la taille de l'autre : l'effet de réseau monétisé en récurrent.",
    churn: "Très faible (pro)",
    lockIn: "Très fort (réseau)",
    marginal: "Quasi nul",
    metric: "Liquidité des deux faces",
    pitfall:
      "Monétiser trop tôt la face fragile. Tant que l'effet de réseau n'est pas établi, faire payer la face qui apporte la liquidité revient à taxer sa propre croissance.",
  },
];
