import type { CourseContent } from "@/lib/content-types";

export const moduleNine: CourseContent = {
  moduleSlug: "maitriser-ses-donnees",
  hasGames: true,
  hasQuiz: true,
  lessons: [
    // ── 9.1 ───────────────────────────────────────────────
    {
      slug: "dashboard-mrr",
      index: 1,
      ref: "9.1",
      title: "Le dashboard MRR complet",
      subtitle: "Le MRR total est un solde — seul son mouvement dit la vérité. La rigueur sans la sophistication : un Google Sheet juste bat un dashboard faux.",
      minutes: 10,
      blocks: [
        {
          type: "lead",
          text: "Ce module assemble les métriques en système de pilotage. Toutes ses analyses sont praticables sans data team.",
        },
        { type: "h2", text: "Les cinq composantes du MRR movement" },
        {
          type: "list",
          items: [
            "**New MRR** : le revenu des clients acquis dans le mois — la performance du funnel.",
            "**Expansion MRR** : upgrades, add-ons, sièges ajoutés — la performance de l'architecture d'offre.",
            "**Reactivation MRR** : le revenu des revenants — à isoler absolument du New (le mélanger masque les deux performances).",
            "**Contraction MRR** : downgrades et réductions — le prédateur silencieux, en ligne visible.",
            "**Churned MRR** : le revenu des partis — volontaire et involontaire séparés dès que possible.",
          ],
        },
        {
          type: "formula",
          expr: "MRR fin = MRR début + New + Expansion + Reactivation − Contraction − Churned",
          note: "Si l'équation ne boucle pas au centime, une définition fuit (prorata, remise, essai) — à régler avant toute analyse.",
        },
        { type: "h2", text: "Le MRR Waterfall : lire un mois en une image" },
        { type: "widget", name: "mrr-waterfall" },
        {
          type: "list",
          items: [
            "**Croissance saine** : New solide, Expansion qui grossit avec la maturité, Churn contenu — la cascade monte par ses deux moteurs.",
            "**Croissance fragile** : New massif, Churn massif — la cascade monte en brûlant du CAC pour compenser la fuite (le seau percé en image).",
            "**Le plateau qui n'en est pas un** : MRR stable, New correct annulé par une Contraction montante — le signal d'alarme invisible sans la décomposition.",
            "**Le mois en trompe-l'œil** : un pic de New dû à une promo (qui churnera dans 60 jours) ou un Churned gonflé par un repricing assumé (l'exécution du plan, pas une alarme).",
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "ARR vs MRR : la convention selon l'usage",
          text: "Le MRR pilote (l'opérationnel vit au mois) ; l'ARR communique (investisseurs, B2B annuel). Piège : l'ARR n'est pas « les revenus des 12 derniers mois » (c'est MRR courant × 12 — une photographie, pas un historique). Et ni l'un ni l'autre ne dit la trésorerie : le cash encaissé d'avance est un troisième tableau.",
        },
      ],
      takeaways: [
        "Le MRR se décompose en cinq flux ; le total est un solde qui peut tromper.",
        "La Reactivation s'isole du New, la Contraction du Churn — sinon le diagnostic est aveugle.",
        "L'équation de contrôle doit boucler au centime, sinon une définition fuit.",
        "Le MRR pilote au mois, l'ARR communique à l'année — la trésorerie est un 3ᵉ tableau.",
      ],
    },

    // ── 9.2 ───────────────────────────────────────────────
    {
      slug: "unit-economics",
      index: 2,
      ref: "9.2",
      title: "Unit economics approfondies",
      subtitle: "Le CAC honnête, la LTV sous toutes ses formes, et la matrice qui croise les deux pour prioriser.",
      minutes: 11,
      blocks: [
        {
          type: "lead",
          text: "La définition complète du CAC (dépenses + salaires + outils) se déploie en deux versions complémentaires.",
        },
        {
          type: "compare",
          left: {
            title: "CAC blended",
            points: [
              "Tous les coûts ÷ tous les nouveaux clients",
              "La vue d'ensemble (unit economics globales, investisseurs)",
              "Embellit quand l'organique porte le volume : 40 € peut cacher un paid à 200 €",
              "Piège : pousser le paid sur la foi du blended",
            ],
          },
          right: {
            title: "CAC par canal",
            tone: "fire",
            points: [
              "Chaque canal avec ses coûts complets ÷ ses clients",
              "La version qui décide",
              "Difficultés assumées : attribution, allocation des coûts partagés",
              "Croisé avec la LTV de la cohorte du canal = le verdict",
            ],
          },
        },
        { type: "h2", text: "La LTV sous toutes ses formes" },
        {
          type: "list",
          items: [
            "**La formule simple** : ARPU ÷ churn — l'ordre de grandeur en dix secondes (churn constant, marge ignorée).",
            "**La formule à la marge** : (ARPU × marge brute) ÷ churn — la version honnête dès que le coût de servir existe.",
            "**La formule actualisée** : un euro dans trois ans vaut moins qu'un euro demain (10-15 %/an suffit à corriger l'illusion).",
            "**La LTV par cohorte observée** — la version reine : non plus une formule mais une mesure (le revenu cumulé réel des cohortes passées). La formule projette, la cohorte constate — et leur écart est lui-même un diagnostic.",
          ],
        },
        { type: "h2", text: "La matrice CAC × LTV : quatre quadrants" },
        {
          type: "table",
          head: ["", "LTV élevée", "LTV faible"],
          rows: [
            ["**CAC faible**", "Mines d'or — doubler la mise", "Volumes à transformer — chantier LTV"],
            ["**CAC élevé**", "Conquêtes sélectives — tant que 3:1 tient", "Gouffres — arrêter"],
          ],
        },
        {
          type: "callout",
          tone: "fire",
          title: "La discipline d'usage",
          text: "Reconstruire la matrice trimestriellement (les quadrants bougent — la mine d'or qui sature glisse en conquête sélective), et y placer des segments autant que des canaux : le paid social est peut-être un gouffre en B2C et une conquête sélective sur le segment prosumer. Le croisement canal × persona × plan révèle des poches que les moyennes cachent.",
        },
      ],
      takeaways: [
        "CAC blended pour la vue d'ensemble, CAC par canal pour décider (le coût marginal est celui du canal poussé).",
        "Quatre formules de LTV ; la LTV-cohorte observée tranche les débats.",
        "La matrice CAC × LTV : mines d'or, volumes à transformer, conquêtes sélectives, gouffres.",
        "La reconstruire trimestriellement, par segment autant que par canal.",
      ],
    },

    // ── 9.3 ───────────────────────────────────────────────
    {
      slug: "forecasting",
      index: 3,
      ref: "9.3",
      title: "Forecasting et modélisation",
      subtitle: "L'avantage structurel du récurrent : l'avenir est largement écrit dans le présent. Le forecast tient en quatre lignes par mois.",
      minutes: 10,
      blocks: [
        {
          type: "formula",
          expr: "MRR(mois+1) = MRR(mois) × (1 − churn) + (nouveaux × ARPU) + expansion nette",
        },
        {
          type: "p",
          text: "Les entrées : le churn (par cohorte, idéalement deux taux — précoce et croisière), le rythme d'acquisition, l'ARPU (par plan si le mix bouge), et l'expansion nette (le NRR mensualisé). Projeté à 12-24 mois dans un tableur, ce modèle répond aux questions essentielles : où serons-nous à churn constant ? que faut-il d'acquisition pour atteindre X ? quand l'expansion dépassera-t-elle le churn ?",
        },
        { type: "h2", text: "« The power of 5 % » en chiffres réels" },
        {
          type: "table",
          head: ["", "Churn 7 %/mois", "Churn 2 %/mois"],
          rows: [
            ["MRR au départ", "20 000 €", "20 000 €"],
            ["MRR à 12 mois", "≈ 26 600 €", "≈ 39 700 €"],
            ["MRR à 24 mois", "≈ 28 200 €", "≈ 55 200 €"],
            ["Plafond (acquisition constante)", "≈ 28 600 €", "100 000 €"],
            ["LTV par abonné", "286 €", "1 000 €"],
          ],
          caption: "Deux business identiques (1 000 abonnés, 20 € d'ARPU, 100 nouveaux/mois), seul le churn diffère.",
        },
        {
          type: "callout",
          tone: "fire",
          title: "Les deux leçons",
          text: "Le plafond : à acquisition constante, tout business converge vers (nouveaux × ARPU) ÷ churn — à 7 %, atteint dès la 2ᵉ année (la croissance s'arrête sans qu'aucun chiffre mensuel ne se dégrade). La divergence : les deux courbes se ressemblent six mois, divergent dès la 1ʳᵉ année, n'ont plus rien de commun à la 2ᵉ — la rétention est invisible au lancement et déterminante à l'échelle. D'où : elle se travaille AVANT d'accélérer l'acquisition.",
        },
        { type: "h2", text: "L'analyse de sensibilité" },
        {
          type: "p",
          text: "Faire varier une hypothèse à la fois et observer l'effet à 12-24 mois. Une table de sensibilité (churn en lignes, acquisition en colonnes → MRR à 18 mois) sert à : **hiérarchiser les chantiers** (de combien bouge le MRR pour −1 point de churn vs +20 % d'acquisition vs +2 € d'ARPU ? — presque toujours le churn puis le prix avant l'acquisition), **encadrer l'incertitude** (trois scénarios, pas trente — le forecast qui couvre tout ne décide de rien), et **détecter les hypothèses fragiles** (celle dont une petite variation renverse le plan est à instrumenter en priorité).",
        },
      ],
      takeaways: [
        "Le forecast récurrent tient en quatre lignes : churn, acquisition, ARPU, expansion nette.",
        "Tout business plafonne à (nouveaux × ARPU) ÷ churn à acquisition constante.",
        "La rétention est invisible au lancement, déterminante à l'échelle : la travailler avant d'accélérer.",
        "La sensibilité hiérarchise les chantiers : churn puis prix avant acquisition.",
      ],
    },

    // ── 9.4 ───────────────────────────────────────────────
    {
      slug: "cohortes-avancees",
      index: 4,
      ref: "9.4",
      title: "Cohortes analytics avancées",
      subtitle: "Boucler la boucle : l'acquisition recrute, la rétention révèle, l'analytique mesure, et la mesure redirige l'acquisition. Le système apprend.",
      minutes: 9,
      blocks: [
        {
          type: "lead",
          text: "Le Module 6.3 a construit les cohortes en abonnés (combien restent) ; la version avancée les construit en revenu (combien rapportent encore).",
        },
        {
          type: "p",
          text: "La différence est tout sauf cosmétique : une cohorte peut perdre **40 % de ses abonnés et conserver 90 % de son revenu** (les petits partent, les gros restent et s'étendent — le profil B2B sain), ou l'inverse (l'alerte rouge). La revenue cohort intègre l'expansion : c'est le NRR décomposé dans le temps — une courbe qui remonte au-dessus de 100 % après le creux initial est la version revenue du smile curve. La pratique : produire les deux grilles côte à côte — leur divergence est le diagnostic.",
        },
        { type: "h2", text: "L'ARPPU par cohorte" },
        {
          type: "p",
          text: "Le revenu moyen par abonné payant de chaque cohorte, à chaque âge. Ses révélations : les cohortes anciennes ont-elles un ARPPU croissant (l'expansion au travail) ou figé (le plateau existe mais ne fructifie pas) ? Les récentes entrent-elles plus haut (l'effet des changements de pricing) ? La question de synthèse : **que vaut réellement une cohorte de 100 abonnés acquis aujourd'hui, à 24 mois ?** — la réponse (rétention × ARPPU cumulés) est la LTV-cohorte, comparable directement au CAC : l'unit economics en version observée, la plus solide qui soit.",
        },
        { type: "h2", text: "Boucler la boucle vers l'acquisition" },
        {
          type: "list",
          items: [
            "**Réallouer les budgets** par LTV-cohorte de canal (le canal dont les cohortes valent 3× mérite 3× l'enchère).",
            "**Fixer le CAC maximal** par canal et segment (le tiers de la LTV-cohorte observée — la règle 3:1 appliquée localement).",
            "**Recalibrer les promotions** (la cohorte « promo -50 % » comparée à la cohorte plein tarif à 6 mois : le vrai coût de la promo est là).",
            "**Nourrir le ciblage** (les caractéristiques des cohortes à haute LTV deviennent les critères de lookalike).",
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Les outils du pilotage, par étage",
          text: "Le socle billing (Stripe — gratuit, les premiers mois) ; l'analytics d'abonnement (ChartMogul, Baremetrics, ProfitWell — le movement et les cohortes sans rien construire) ; l'analytics produit (Mixpanel, Amplitude — l'usage et les leading indicators) ; et le tableur (le forecast, la sensibilité, la vérité des définitions). Les outils calculent, mais c'est la discipline hebdomadaire de lecture qui pilote.",
        },
      ],
      takeaways: [
        "Revenue cohort vs subscription cohort : leur divergence est le diagnostic.",
        "La LTV-cohorte observée (rétention × ARPPU cumulés) est l'unit economics la plus solide.",
        "Les insights cohortes redirigent l'acquisition : budgets, CAC max, promos, ciblage.",
        "Quatre étages d'outils — mais la discipline de lecture prime sur l'outillage.",
      ],
    },

    // ── 9.5 ───────────────────────────────────────────────
    {
      slug: "dashboard-a-zero-euro",
      index: 5,
      ref: "9.5",
      title: "Le dashboard à 0 €",
      subtitle: "Tout ce module se construit dans un tableur en une demi-journée. La routine — pas le classeur — constitue le pilotage.",
      minutes: 11,
      blocks: [
        {
          type: "lead",
          text: "Les outils dédiés coûtent de quelques dizaines à plusieurs centaines d'euros/mois — un budget dont le lanceur n'a pas besoin avant des milliers d'abonnés. Voici le plan de construction complet.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "**La table source** : un onglet, une ligne par abonnement, sept colonnes (ID, date de début, date de fin, plan, montant mensuel normalisé, canal, statut). Deux disciplines : normaliser en mensuel dès la saisie, et **ne jamais supprimer une ligne** (un churn est une date de fin remplie — l'historique est la matière des cohortes).",
            "**Le MRR et son movement** : une colonne par mois, le MRR = somme des actifs (SOMME.SI.ENS sur les dates), puis New / Churned / Expansion / Contraction / Reactivation, et la **ligne de contrôle** qui doit boucler. Le waterfall en graphique « Cascade » natif (Excel et Sheets).",
            "**Le churn et le triangle de cohortes** : mois d'acquisition en lignes, âge en colonnes, part encore active dans chaque cellule. Une mise en forme conditionnelle (dégradé) transforme la grille en heatmap — le cliff, la pente et le plateau apparaissent littéralement.",
            "**Les unit economics et le forecast** : un onglet Coûts (dépenses par canal), le CAC par division, la LTV-cohorte lue dans le triangle revenue, et l'onglet Forecast (quatre hypothèses + projection + table de sensibilité).",
          ],
        },
        {
          type: "callout",
          tone: "fire",
          title: "La routine hebdomadaire — 15 minutes, le lundi",
          text: "Exporter ou saisir les nouveaux abonnements et les fins de la semaine, vérifier la ligne de contrôle, lire les sept chiffres vitaux. C'est cette routine — pas le classeur — qui constitue le pilotage : le tableur n'est que son support.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "Quand migrer vers un outil dédié",
          text: "Quand la maintenance du classeur dépasse une heure par semaine — pas avant. Les limites du tableur : au-delà de quelques milliers de lignes les SOMME.SI.ENS ralentissent, les cas tordus (prorata, multi-devises) demandent des conventions manuelles, et la donnée comportementale ne vit pas dans le billing. Le jour venu, les mois passés dans le tableur auront appris les définitions mieux qu'aucun dashboard clé en main : on ne se fait plus mentir par un chiffre qu'on a construit soi-même.",
        },
      ],
      takeaways: [
        "Une table source propre (montant mensuel normalisé, jamais de ligne supprimée) est le socle de tout.",
        "MRR movement + ligne de contrôle + triangle de cohortes en heatmap : tout tient dans un tableur.",
        "La routine de lecture hebdomadaire constitue le pilotage, pas le classeur.",
        "Migrer vers un outil payant quand la maintenance dépasse une heure/semaine — pas avant.",
      ],
    },
  ],
};
