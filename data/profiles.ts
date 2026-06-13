// Les 5 profils psychologiques d'abonnés (Module 2.4 de La Bible de l'Abonnement).

export type SubscriberProfile = {
  id: string;
  name: string;
  share: string;
  who: string;
  signals: string;
  risk: string;
  strategy: string;
  message: string;
  mistake: string;
};

export const PROFILES: SubscriberProfile[] = [
  {
    id: "super-user",
    name: "Le Super-User",
    share: "5-15 %",
    who: "Le sur-engagé. Il utilise le produit bien au-delà de la moyenne, connaît les fonctionnalités obscures, répond aux enquêtes, recommande spontanément. Petite fraction de la base, part disproportionnée de la valeur.",
    signals: "Usage dans le dernier décile, adoption rapide des nouveautés, participation (avis, communauté), NPS promoteur, parrainages effectués.",
    risk: "Pas le prix — la déception qualitative : régression du produit, fonctionnalité supprimée, sentiment de trahison. Quand il part, c'est bruyamment.",
    strategy: "Le nourrir et le reconnaître : accès anticipé, canal direct avec l'équipe, statut visible, programme ambassadeur.",
    message: "Le traiter en initié — coulisses, roadmap, exclusivités.",
    mistake: "Le traiter en cible marketing générique.",
  },
  {
    id: "passif-satisfait",
    name: "Le Passif Satisfait",
    share: "30-50 %",
    who: "Il paie régulièrement, utilise modérément, ne se plaint jamais, ne répond à rien. Le cœur silencieux de la base — souvent la majorité — et le plus mal connu.",
    signals: "Usage stable mais moyen/faible, zéro interaction, ancienneté qui s'allonge sans événement.",
    risk: "L'inertie inverse : la force qui le fait rester peut le faire partir d'un bloc le jour d'un événement de réveil. Principal porteur de la dette de churn.",
    strategy: "Entretenir la valeur perçue sans exiger d'effort. Les rapports de valeur périodiques (« voici ce que vous avez économisé ») sont l'outil parfait.",
    message: "Court, concret, centré sur la valeur reçue — jamais culpabilisant.",
    mistake: "Le culpabiliser sur son faible usage ou le sur-solliciter.",
  },
  {
    id: "opportuniste",
    name: "L'Opportuniste",
    share: "10-25 %",
    who: "Il a souscrit pour une raison précise et datée — un projet, un contenu — et partira quand ce sera fait. Le serial churner du streaming, l'inscrit à l'app de sport en janvier.",
    signals: "Usage intense et étroit dès le 1ᵉʳ jour, souscription corrélée à un événement, désengagement net une fois l'objectif atteint.",
    risk: "Structurel et assumé : il partira. La question n'est pas « si » mais « quand » et « comment » — en bons termes ou en s'étant senti piégé.",
    strategy: "Élargir l'usage pendant la fenêtre de présence (une 2ᵉ raison de rester) ; à défaut, optimiser le cycle de retour (win-back « la saison 3 arrive »).",
    message: "Factuel, événementiel, sans pathos — il répond au « quoi de neuf », pas au « vous nous manquez ».",
    mistake: "Le piéger à la sortie.",
  },
  {
    id: "chasseur-de-valeur",
    name: "Le Chasseur de valeur",
    share: "15-30 %",
    who: "Sensible au prix avant tout. Souvent acquis via promo, compare en permanence, connaît les prix des concurrents, churn aux hausses comme aux fins de remise.",
    signals: "Acquisition par offre promo, plan d'entrée de gamme, réactivité maximale aux emails de promo, historique de downgrades.",
    risk: "Tout événement tarifaire — fin de promo, repricing, comparaison défavorable. Il peuple les vagues de churn post-augmentation.",
    strategy: "Assumer une relation à la valeur : lui réserver l'entrée de gamme et les downgrades, le cibler dans les migrations vers l'annuel remisé.",
    message: "Chiffré — économies réalisées, comparaison de valeur, offre claire avec échéance vraie.",
    mistake: "L'éduquer aux promos permanentes (ce qui dégrade l'ARPU de toute la base).",
  },
  {
    id: "identitaire",
    name: "L'Abonné Identitaire",
    share: "5-20 %",
    who: "L'abonnement fait partie de qui il est. Le lecteur « du » journal depuis quinze ans, le supporter du créateur. La transaction a disparu derrière l'appartenance.",
    signals: "Ancienneté élevée, marqueurs d'appartenance activés, défense spontanée de la marque, vocabulaire du « nous ».",
    risk: "Presque uniquement la rupture du contrat moral : scandale, trahison des valeurs, ou découvrir que les nouveaux paient moins cher que lui. Son churn est un divorce — définitif et vocal.",
    strategy: "Honorer l'ancienneté (statut, avantages de fidélité), protéger le contrat moral (grandfathering lors des repricing), l'enrôler comme pilier de communauté.",
    message: "Relationnel et reconnaissant — « vous faites partie de l'histoire ».",
    mistake: "Le traiter moins bien que les nouveaux abonnés.",
  },
];
