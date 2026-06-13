import type { CourseContent } from "@/lib/content-types";

export const moduleSix: CourseContent = {
  moduleSlug: "anatomie-du-churn",
  hasGames: true,
  hasQuiz: true,
  lessons: [
    // ── 6.1 ───────────────────────────────────────────────
    {
      slug: "taxonomie-du-churn",
      index: 1,
      ref: "6.1",
      title: "Taxonomie complète du churn",
      subtitle: "Le churn n'est pas un phénomène mais une famille de phénomènes, aux causes, remèdes et coûts différents.",
      minutes: 11,
      blocks: [
        {
          type: "lead",
          text: "Traiter « le churn » comme un bloc, c'est soigner une fièvre sans chercher l'infection. Le diagnostic est le préalable absolu de la rétention.",
        },
        { type: "h2", text: "Les trois espèces" },
        {
          type: "list",
          items: [
            "**Volontaire actif** : l'abonné a décidé et résilié. Le churn « visible » — ni le seul ni toujours le principal. Se subdivise selon les trois déclencheurs (événement externe, friction, désengagement).",
            "**Passif (zombie)** : il paie encore, mais la relation est morte. Comptablement pas du churn ; opérationnellement un churn à terme dont seule la date est inconnue. À garder visible dans le segment « inactifs payants ».",
            "**Involontaire** : l'abonné n'a rien décidé, son paiement a échoué (carte expirée, plafond, fonds insuffisants).",
          ],
        },
        {
          type: "keynumbers",
          items: [
            { value: "20-40 %", label: "Part du churn qui est involontaire" },
            { value: "60-70 %", label: "Des échecs sont des soft declines récupérables" },
            { value: "M16 #23", label: "Confondre involontaire et volontaire" },
          ],
        },
        {
          type: "callout",
          tone: "fire",
          title: "Une panne de tuyauterie réparable",
          text: "60 à 70 % des échecs de paiement sont des soft declines (refus temporaires, fonds insuffisants en tête) qui réussiraient en réessayant au bon moment. Une part substantielle du churn de la plupart des business est réparable — le levier de rétention au meilleur ROI (le dunning, Module 7.10).",
        },
        { type: "h2", text: "Précoce vs mature : deux maladies sans rapport" },
        {
          type: "compare",
          left: {
            title: "Churn précoce (< 90 jours)",
            points: [
              "Problème d'entrée : promise-delivery gap, onboarding raté, mauvaise acquisition",
              "Le 1ᵉʳ mois concentre 12-30 % de churn selon les verticales",
              "Se traite en amont — dans le funnel, pas dans la rétention",
            ],
          },
          right: {
            title: "Churn mature (> 12 mois)",
            tone: "fire",
            points: [
              "Problème de vie commune : érosion de la valeur, lassitude, concurrent, moment de vie",
              "Se traite par l'arsenal du Module 7",
              "Réengagement, communication proactive, pause, expansion",
            ],
          },
        },
        {
          type: "p",
          text: "Mélanger les deux dans un taux unique rend le chiffre inutilisable : un churn global de 6 % composé de 20 % en M1 et 2 % au-delà n'a rien à voir avec un 6 % uniforme. D'où l'outil central : la **cohorte**.",
        },
        { type: "h2", text: "Logo, revenue, et la contraction" },
        {
          type: "p",
          text: "Le **logo churn** compte les clients, le **revenue churn** les euros. Leur divergence est un diagnostic : logo > revenue = ce sont les petits comptes qui partent (souvent acceptable) ; l'inverse — les gros comptes partent — est une alerte stratégique majeure que le logo seul ne montrerait jamais.",
        },
        {
          type: "pitfall",
          text: "**La contraction** — les clients qui restent mais paient moins (downgrades, sièges réduits, consommation en baisse) — est un prédateur silencieux : elle ronge le MRR sans événement de résiliation à intercepter, et précède la majorité des départs B2B de quelques mois. À suivre en ligne séparée du MRR movement, jamais fondue dans le churn.",
        },
      ],
      takeaways: [
        "Trois espèces : volontaire actif, passif (zombie), involontaire — chacune son remède.",
        "20-40 % du churn est involontaire, dont 60-70 % récupérable (soft declines).",
        "Précoce (< 90 j) = problème d'entrée ; mature (> 12 mois) = problème de vie commune.",
        "La contraction est le principal signal avancé du churn B2B : la suivre séparément.",
      ],
    },

    // ── 6.2 ───────────────────────────────────────────────
    {
      slug: "benchmarks-de-churn",
      index: 2,
      ref: "6.2",
      title: "Benchmarks & « the power of 5 % »",
      subtitle: "Un taux de churn n'a aucun sens dans l'absolu. Et l'arithmétique du churn est exponentielle — l'intuition la sous-estime toujours.",
      minutes: 10,
      blocks: [
        {
          type: "lead",
          text: "5 % mensuel est excellent pour une box et catastrophique pour un SaaS enterprise. Les fourchettes de référence consolidées (données 2025-2026) :",
        },
        {
          type: "table",
          head: ["Segment", "Churn mensuel médian", "Top performers"],
          rows: [
            ["B2C consumer apps", "5-8 %", "< 3 %"],
            ["B2C digital (contenu, médias)", "4-7 %", "< 3 %"],
            ["SaaS B2B SMB", "3-7 %", "< 2 %"],
            ["SaaS B2B mid-market", "1-3 %", "< 1 %"],
            ["SaaS B2B enterprise", "0,5-2 %", "< 0,5 %"],
            ["Box — replenishment", "4-8 %", "< 4 %"],
            ["Box — curation", "8-15 %", "< 6 %"],
          ],
        },
        {
          type: "list",
          items: [
            "**La loi du panier** : plus l'ARPU est élevé, plus le churn est bas (décision sérieuse, service sérieux, départ par processus).",
            "**La loi de la période** : à produit égal, l'annuel divise le churn mensuel-équivalent par 2 à 4 — comparer exige de connaître le mix des deux côtés.",
            "**La loi de la catégorie** : la nature du besoin bat l'exécution. On n'optimise pas son churn contre sa catégorie, mais dans sa catégorie.",
          ],
        },
        { type: "h2", text: "« The power of 5 % »" },
        { type: "widget", name: "cohort-decay" },
        {
          type: "callout",
          tone: "fire",
          title: "Le point de churn, unité de valeur la plus dense du métier",
          text: "À 7 % : durée de vie ≈ 14 mois, ~420 survivants sur 1 000 après un an. À 2 % : ≈ 50 mois, ~785 survivants. La LTV est multipliée par 3,5. Et la croissance change de nature : à 7 %, une base de 10 000 exige 700 nouveaux/mois pour ne pas décroître ; à 2 %, seulement 200 — les 500 de différence sont de la croissance pure, au même budget.",
        },
        {
          type: "p",
          text: "**Se benchmarker honnêtement** : comparer à sa verticale et son panier (le tableau, pas la moyenne), à mix de facturation équivalent, en séparant volontaire et involontaire, et en se méfiant des benchmarks d'éditeurs (biais de survie). Le meilleur benchmark reste interne : **sa propre cohorte d'il y a six mois**.",
        },
      ],
      takeaways: [
        "Un churn ne se juge que dans sa verticale, son panier et son mix de facturation.",
        "Trois lois : panier élevé → churn bas, annuel → churn /2-4, la catégorie prime.",
        "Power of 5 % : passer de 7 % à 2 % de churn multiplie la LTV par 3,5.",
        "Le meilleur benchmark est sa propre cohorte d'il y a six mois.",
      ],
    },

    // ── 6.3 ───────────────────────────────────────────────
    {
      slug: "courbes-de-retention",
      index: 3,
      ref: "6.3",
      title: "Lire et construire ses courbes de rétention",
      subtitle: "Une seule image montre ce que des mois de taux mensuels masquent. Le churn est un lagging indicator : tout le pilotage consiste à remonter vers les leading.",
      minutes: 13,
      blocks: [
        {
          type: "lead",
          text: "La courbe de rétention — le pourcentage d'une cohorte encore abonné à M1, M2, M3… — est l'instrument de diagnostic le plus riche du métier. Son anatomie comporte trois zones.",
        },
        {
          type: "list",
          items: [
            "**Le cliff drop** — la chute initiale : la part qui n'a jamais vraiment commencé. Sa pente mesure la qualité de l'acquisition et de l'onboarding (un cliff à −25 % en M1 dit que le funnel recrute ou accueille mal).",
            "**La pente de croisière** — la décrue régulière : l'érosion de la vie commune. Sa pente mesure la valeur continue réelle — c'est elle que l'arsenal du Module 7 attaque.",
            "**Le plateau** — l'horizontale finale : le noyau d'abonnés durables. Son existence est le test de viabilité ultime : une courbe qui plafonne à 25 % a un noyau à grossir ; une courbe qui descend vers zéro sans plateau n'a pas de forever promise.",
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Le smile curve",
          text: "La courbe qui remonte : les réactivations (revenants, intermittents, saisonniers) dépassent les départs tardifs. Longtemps une curiosité, c'est un objectif réaliste — ~1 abonnement sur 4 est aujourd'hui une réactivation. La rétention moderne se pense en cycle de vie avec retours, pas en ligne descendante.",
        },
        { type: "h2", text: "Les trois découpages qui parlent" },
        {
          type: "list",
          ordered: true,
          items: [
            "**Par canal d'acquisition** — la vérité sur le mix : referral vs paid social à 6 mois justifie ou condamne des budgets entiers.",
            "**Par plan et période** — séparer mensuels et annuels (l'annuel est en escalier, avec ses falaises aux renouvellements), et par tier.",
            "**Par comportement d'activation** — le plus puissant : « a atteint l'aha moment en 3 jours » contre « ne l'a pas atteint ». L'écart chiffre la valeur de l'onboarding.",
          ],
        },
        {
          type: "callout",
          tone: "warn",
          text: "Toujours comparer des cohortes à âge égal (M3 contre M3), jamais d'âges différents — et se rappeler que les cohortes récentes sont incomplètes.",
        },
        { type: "h2", text: "Leading vs lagging indicators" },
        {
          type: "p",
          text: "Le churn est un **lagging indicator** : quand il se mesure, il est déjà arrivé. Le pilotage moderne remonte vers les **leading indicators** — les signaux qui précèdent le churn de semaines : usage en baisse sur 30/60/90 jours (le signal roi), dernière session qui s'éloigne, abandon de la fonctionnalité cœur, DAU/MAU individuel en chute, emails plus ouverts, NPS en baisse, échec de paiement, downgrade, et — en B2B — le champion qui ne répond plus.",
        },
        { type: "h2", text: "Le Customer Health Score" },
        {
          type: "table",
          head: ["Composante", "Poids", "Ce qu'elle mesure"],
          rows: [
            ["Activité", "40 %", "Fréquence, récence, tendance 90 j — le meilleur prédicteur unique"],
            ["Adoption", "25 %", "Largeur d'usage, fonction cœur, intégrations (le lock-in)"],
            ["Support & sentiment", "15 %", "Tickets, satisfaction, NPS individuel"],
            ["Billing", "20 %", "Échecs de paiement, downgrades, renouvellement"],
          ],
        },
        {
          type: "callout",
          tone: "fire",
          title: "Rouge / Orange / Vert — la note ne vaut que par les actions",
          text: "Vert (sain) → candidat à l'expansion, au referral, à l'annuel (on ne « sauve » pas un vert, on le fait grandir). Orange (à risque) → réengagement automatisé, rappels de valeur, vérif du moyen de paiement. Rouge (critique) → intervention individuelle, priorité absolue si le renouvellement approche.",
        },
        {
          type: "pitfall",
          text: "Erreurs du health score : surpondérer les lagging (un score dominé par « a churné des options » prédit le passé), créer trop d'alertes (40 % de la base en rouge ne priorise plus rien), figer les pondérations (le score se backteste trimestriellement), et le construire sans action en face.",
        },
      ],
      takeaways: [
        "Trois zones : cliff (onboarding), pente (valeur continue), plateau (viabilité).",
        "Pas de plateau = pas de forever promise : aucune acquisition ne sauvera ce modèle.",
        "Découper par canal, par plan/période, et surtout par comportement d'activation.",
        "Le Health Score (Activité 40 %) ne vaut que par les actions Rouge/Orange/Vert qu'il déclenche.",
      ],
    },

    // ── 6.4 ───────────────────────────────────────────────
    {
      slug: "raisons-reelles-du-churn",
      index: 4,
      ref: "6.4",
      title: "Les raisons réelles du churn : écouter",
      subtitle: "Les données disent qui part et quand ; elles ne disent pas pourquoi. Trois instruments d'écoute complètent le diagnostic.",
      minutes: 9,
      blocks: [
        {
          type: "lead",
          text: "Les données comportementales disent qui part et quand ; elles ne disent pas pourquoi. La survey de résiliation, le NPS et les entretiens complètent le diagnostic.",
        },
        { type: "h2", text: "La survey de résiliation" },
        {
          type: "p",
          text: "Le questionnaire **au moment** de la résiliation, intégré au flux d'annulation (jamais envoyé après coup — le taux de réponse s'effondre une fois la page fermée). Règles : **cinq questions maximum**, la première étant la seule indispensable — la raison principale en choix fermé court (trop cher / je n'utilise plus assez / fonctionnalité manquante / problèmes / alternative / besoin terminé / autre), suivie d'un champ libre, d'une question sur l'alternative, et d'une porte de sortie relationnelle (« peut-on vous recontacter quand X sera dispo ? »). Un taux de 30-50 % est atteignable quand la survey vit dans le flux.",
        },
        {
          type: "pitfall",
          text: "Croiser systématiquement la raison déclarée avec le comportement observé : le « trop cher » d'un abonné qui n'utilisait plus est un « je n'utilise plus » poli — le prix est la raison socialement facile. Le traiter par des remises serait un contresens.",
        },
        {
          type: "callout",
          tone: "fire",
          text: "Brancher la survey sur le save flow (Module 7.5) : la raison donnée pilote l'offre de rétention en temps réel — c'est le double usage qui justifie l'investissement.",
        },
        { type: "h2", text: "Le NPS comme système d'alerte" },
        {
          type: "p",
          text: "Les détracteurs churnent ~3× plus : le NPS individuel est un leading indicator de premier rang. Ses trois usages : le **niveau** (la part de détracteurs est un stock de churn à venir), la **trajectoire individuelle** (la bascule promoteur → passif → détracteur est une alarme séquencée), et le **verbatim** (la question ouverte est la plus petite survey de churn permanente). Tout détracteur reçoit un traitement, tout promoteur une invitation (referral).",
        },
        { type: "h2", text: "Les entretiens de résiliation" },
        {
          type: "p",
          text: "Le niveau de profondeur ultime, irremplaçable par les données. **Qui appeler** : pas un échantillon aléatoire, mais les départs informatifs — gros comptes, anciens fidèles (le churn mature qui en dit le plus), churns groupés autour d'un événement, et quelques précoces.",
        },
        {
          type: "list",
          items: [
            "**La trame en cinq temps** : le contexte d'origine (la promesse perçue), le moment de bascule (presque toujours bien avant la résiliation — la mesure du délai), le déclencheur final, ce qui aurait pu retenir (avec prudence), et la destination.",
            "**Les règles d'or** : ne jamais vendre ni « sauver » pendant l'entretien (on apprend — et l'écoute pure regagne parfois le client), enregistrer les verbatims bruts (la phrase exacte vaut dix slides), et viser le rythme soutenable (cinq entretiens/mois tenus longtemps battent une grande étude annuelle).",
          ],
        },
      ],
      takeaways: [
        "Survey de résiliation : dans le flux, 5 questions max, la 1ʳᵉ obligatoire en un clic.",
        "Croiser raison déclarée et comportement : le « trop cher » est souvent un « je n'utilise plus ».",
        "Le NPS individuel est un leading indicator : niveau, trajectoire, verbatim.",
        "Cinq entretiens de churn par mois, tenus longtemps, battent une grande étude annuelle.",
      ],
    },
  ],
};
