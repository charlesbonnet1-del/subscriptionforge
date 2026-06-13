import type { CourseContent } from "@/lib/content-types";

export const moduleTwelve: CourseContent = {
  moduleSlug: "mobile-et-abonnements-physiques",
  hasGames: true,
  hasQuiz: true,
  lessons: [
    // ── 12.1 ──────────────────────────────────────────────
    {
      slug: "specificites-app-stores",
      index: 1,
      ref: "12.1",
      title: "Les spécificités des app stores",
      subtitle: "La commission est le coût de la distribution — mais le monopole du paiement in-app a cessé d'être imposé.",
      minutes: 9,
      blocks: [
        {
          type: "lead",
          text: "Apple et Google prélèvent 15 à 30 % des revenus d'abonnement in-app : 30 % la première année, 15 % au-delà d'un an de rétention (la « subscription rate reduction »), et 15 % dès le premier euro pour les petits éditeurs (sous ~1 M$/an).",
        },
        {
          type: "formula",
          expr: "ARPU mobile réel = ARPU facial × 0,70 à 0,85",
          note: "Un plan à 9,99 € rapporte 7 à 8,5 €. Tout le pricing doit être pensé net de commission.",
        },
        {
          type: "pitfall",
          text: "L'erreur classique : copier le prix web d'un concurrent sans intégrer que lui encaisse 100 %.",
        },
        {
          type: "callout",
          tone: "info",
          title: "Ce que les stores apportent en échange",
          text: "La distribution (découverte organique, référencement store), la friction de paiement minimale au monde (le moyen de paiement déjà enregistré, la confirmation biométrique), la gestion complète du billing (renouvellements, remboursements, TVA mondiale — un Merchant of Record de fait), et la confiance (l'abonnement « via Apple/Google » rassure et se résilie au même endroit que les autres).",
        },
        { type: "h2", text: "In-app vs web : la fin du monopole" },
        {
          type: "p",
          text: "La règle anti-steering d'Apple s'est fissurée sous les coups réglementaires : en Europe le DMA a imposé l'ouverture (liens externes, boutiques alternatives) ; aux États-Unis, l'issue du contentieux Epic a contraint Apple à autoriser les liens vers des achats web. **Le paiement web est devenu une option stratégique réelle**, avec des règles qui varient encore par marché.",
        },
        {
          type: "compare",
          left: {
            title: "In-app",
            points: [
              "Convertit mieux (friction minimale)",
              "Coûte la commission (15-30 %)",
              "Prive de la relation : l'abonné store est à moitié votre client",
              "Une partie de l'arsenal de rétention est déléguée au store",
            ],
          },
          right: {
            title: "Web",
            tone: "fire",
            points: [
              "Encaisse tout et possède la relation",
              "Tout l'arsenal redevient disponible (dunning, save flows, email)",
              "Convertit moins : se gagne par l'exécution",
              "Le parcours de souscription doit être irréprochable",
            ],
          },
        },
        {
          type: "callout",
          tone: "fire",
          title: "La boussole de l'arbitrage",
          text: "La LTV nette par canal de paiement (conversion × ARPU net × rétention) appliquée au choix du tuyau d'encaissement. Stratégies : tout-in-app (petit panier, fort volume), tout-web (gros paniers, B2B), et l'hybride dominant — in-app par défaut, web pour les offres que le store ne permet pas. Les plateformes RevenueCat, Adapty, Superwall sont le standard de facto (abstraction des stores, paywalls testables sans mise à jour de l'app).",
        },
      ],
      takeaways: [
        "Commission 15-30 % : l'ARPU mobile réel est l'ARPU facial × 0,70-0,85.",
        "En échange : distribution, friction de paiement minimale, billing géré, confiance.",
        "Le paiement web est désormais une option stratégique réelle (DMA, Epic).",
        "In-app convertit mais coûte la relation ; web possède la relation mais se gagne à l'exécution.",
      ],
    },

    // ── 12.2 ──────────────────────────────────────────────
    {
      slug: "mobile-first-conversion",
      index: 2,
      ref: "12.2",
      title: "Mobile-first : onboarding & conversion",
      subtitle: "Trois contraintes réécrivent l'onboarding : attention courte, écran petit, désinstallation à un geste.",
      minutes: 9,
      blocks: [
        {
          type: "lead",
          text: "Le churn mobile commence avant l'abonnement : la majorité des apps installées sont abandonnées dans les premiers jours. L'onboarding mobile se bat d'abord contre l'oubli, ensuite seulement pour la conversion. Le TTFV cible passe sous 2-3 minutes : l'aha moment de la première session ou la désinstallation.",
        },
        { type: "h2", text: "La grammaire de l'onboarding mobile" },
        {
          type: "list",
          items: [
            "**La promesse avant le compte** : les écrans de valeur avant toute inscription (chaque champ prématuré perd des utilisateurs).",
            "**La personnalisation déclarative courte** : 3-5 questions qui adaptent l'expérience ET font investir l'utilisateur (le micro-engagement dès la première minute).",
            "**La démonstration interactive plutôt que le tutoriel** : faire faire, pas faire lire.",
            "**La demande de notification contextualisée** : au moment où sa valeur est évidente, jamais à l'ouverture (la permission refusée est un canal de rétention mort).",
          ],
        },
        { type: "h2", text: "Le paywall mobile précoce" },
        {
          type: "callout",
          tone: "fire",
          title: "Pourquoi le paywall précoce fonctionne (en apparence contre la règle d'or)",
          text: "Une part dominante des apps à succès affiche le paywall pendant l'onboarding, dès la fin du questionnaire. Ce qui semble contredire « après l'aha moment, jamais avant » s'explique par le trial : le paywall mobile précoce vend un essai gratuit, pas un abonnement — l'aha moment est déplacé À L'INTÉRIEUR du trial, et le paywall ne demande pas de payer la valeur mais d'ouvrir la période qui la démontrera.",
        },
        {
          type: "list",
          items: [
            "**Un seul écran**, la promesse en bénéfices (3-4 puces max).",
            "**L'annuel pré-sélectionné**, affiché en équivalent mensuel.",
            "**La mention claire du trial et de sa fin** (l'opt-out loyal — et les stores l'imposent : rappel pré-facturation natif).",
            "**La confirmation biométrique comme conversion** : Face ID a transformé l'achat en un regard — la friction de paiement la plus basse de l'histoire, qui explique une part de la sur-performance in-app.",
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "La discipline du segment",
          text: "Le paywall mobile se teste en continu (moment d'affichage, ordre des plans, durée du trial, visuel, wording) — sans mise à jour de l'app, avec des écarts entre variantes qui se comptent en dizaines de pourcents. Le paywall n'est pas un écran : c'est le produit le plus rentable de l'app, et il se traite comme tel.",
        },
      ],
      takeaways: [
        "TTFV mobile sous 2-3 min : l'aha moment de la première session ou la désinstallation.",
        "Grammaire : promesse avant compte, perso déclarative courte, démo interactive, notif contextualisée.",
        "Le paywall mobile précoce vend un trial (pas un abonnement) : l'aha moment est déplacé dans l'essai.",
        "Le paywall est le produit le plus rentable de l'app : à tester en continu.",
      ],
    },

    // ── 12.3 ──────────────────────────────────────────────
    {
      slug: "abonnements-physiques-boxes",
      index: 3,
      ref: "12.3",
      title: "Les abonnements physiques : les boxes",
      subtitle: "Un métier à part : chaque cycle a un coût variable réel. Toutes les décisions se lisent d'abord en marge contributive.",
      minutes: 11,
      blocks: [
        {
          type: "lead",
          text: "Là où le SaaS et le contenu jouent leur rentabilité sur des coûts fixes amortis par le volume, la box la joue à chaque envoi : le produit, le conditionnement, la livraison. La marge par cycle est une préoccupation permanente.",
        },
        {
          type: "callout",
          tone: "fire",
          title: "Le point mort logistique : la métrique du métier",
          text: "Il se situe typiquement à 3-4 cycles : un abonné qui churne avant M3 est une perte sèche (le CAC + les coûts variables des premières box dépassent le revenu). La rétention à M3 est donc LA métrique — et la promo d'appel agressive, qui recrute des cohortes mortes à M2, est son poison classique. Le churn : 3-6 % pour le replenishment, 8-15 % pour la curation, avec ~50 % des résiliations dans les 90 premiers jours et un churn involontaire massif (le dunning y est vital).",
        },
        { type: "widget", name: "box-economics" },
        { type: "h2", text: "Les quatre variables de design" },
        {
          type: "list",
          items: [
            "**Le skip** — passer un cycle sans résilier : la pause native du physique. Chaque skip est un cycle de marge perdu, mais l'alternative au skip n'est presque jamais le cycle payé — c'est la résiliation. Doctrine : libre et sans friction, instrumenté comme signal, et budgété (10-25 % des cycles).",
            "**La cadence** — la variable la plus sous-estimée : la bonne cadence est celle du rythme de consommation réel. Choisie et modifiable (mensuel ↔ bimestriel en un clic est une rétention pure — le downgrade physique), pilotée par les données (le skip récurrent est une demande de cadence).",
            "**La personnalisation** — plus la box est personnalisée, plus la rétention est élevée (Stitch Fix). Elle augmente la valeur de chaque box (moins de box fatigue) ET construit le lock-in algorithmique. Sa limite : chaque degré complexifie la logistique.",
            "**Le coût logistique** — la marge brute des boxes vit à 40-60 % (vs 80-90 % en SaaS). Leviers : négociation fournisseurs (le carnet de commandes certain), packaging au gramme, marque propre, densité géographique.",
          ],
        },
        { type: "h2", text: "La box fatigue et les rétentions spécifiques" },
        {
          type: "p",
          text: "**La box fatigue** est la subscription guilt rendue visible : l'abonné numérique oublie qu'il n'utilise pas ; l'abonné box voit la pile sur l'étagère, et chaque livraison l'agrandit. « J'ai trop de produits » est l'une des premières raisons de résiliation déclarées, souvent devant le prix.",
        },
        {
          type: "callout",
          tone: "info",
          title: "Des raisons de churn actionnables",
          text: "Le secteur a la chance d'avoir un exit survey qui désigne le chantier : « trop de produits » → cadence/skip proactifs, « pas mes goûts » → personnalisation, « trop cher » → format réduit. Autres mécaniques propres : la variété garantie (« jamais deux fois le même produit »), la « best of » box des anciens (la fidélité tangible), et l'exit survey exploitée à fond — chaque motif majoritaire est un chantier de design, pas une fatalité.",
        },
      ],
      takeaways: [
        "Chaque cycle a un coût variable réel : tout se lit en marge contributive (40-60 % brut).",
        "Le point mort logistique (3-4 cycles) fait de la rétention à M3 la métrique du métier.",
        "Quatre variables : skip (budgété), cadence (rythme réel), personnalisation, coût logistique.",
        "La box fatigue est la guilt rendue visible ; l'exit survey désigne le chantier de design.",
      ],
    },
  ],
};
