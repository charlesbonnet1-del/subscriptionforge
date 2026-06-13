import type { CourseContent } from "@/lib/content-types";

export const moduleFour: CourseContent = {
  moduleSlug: "pricing",
  hasGames: true,
  hasQuiz: true,
  lessons: [
    // ── 4.1 ───────────────────────────────────────────────
    {
      slug: "philosophie-du-pricing",
      index: 1,
      ref: "4.1",
      title: "Philosophie du pricing",
      subtitle: "Le prix est la décision la plus rentable du métier — et la plus négligée. On le traite ici comme un produit en soi.",
      minutes: 11,
      blocks: [
        {
          type: "lead",
          text: "À effort égal, une amélioration de la monétisation a un impact plusieurs fois supérieur à la même amélioration de l'acquisition. Pourtant l'entreprise moyenne consacre à son pricing quelques heures par an, contre des équipes entières à l'acquisition.",
        },
        { type: "h2", text: "Le piège du cost-plus" },
        {
          type: "p",
          text: "Calculer son coût de revient, ajouter une marge, afficher le résultat : ce réflexe industriel est triplement faux en abonnement. Le coût marginal est souvent quasi nul (le coût par abonné dépend surtout… du nombre d'abonnés). Le client ne connaît pas vos coûts : il compare le prix à la **valeur reçue** et aux alternatives. Et le cost-plus produit toujours l'une de deux erreurs : prix trop bas quand la valeur est grande (on offre sa marge), ou produit non viable quand les coûts sont élevés.",
        },
        {
          type: "callout",
          tone: "warn",
          text: "Le coût de revient fixe le plancher de survie du prix — jamais le prix.",
        },
        { type: "h2", text: "Le value-based pricing" },
        {
          type: "p",
          text: "Partir de l'autre bout : la valeur reçue par le client. En trois temps — **quantifier** le bénéfice créé pour un segment (le B2B en euros, le B2C en alternatives), en **capturer** une fraction raisonnable (10 à 30 % de la valeur créée en B2B, le reste étant le surplus qui motive l'achat), puis **vérifier** la viabilité contre les coûts.",
        },
        {
          type: "callout",
          tone: "fire",
          title: "La conséquence structurante",
          text: "Le prix est une propriété du segment, pas du produit : la même fonctionnalité vaut 10 € pour un particulier et 500 € pour l'entreprise dont elle débloque un processus. C'est le fondement théorique des tiers du Module 3.",
        },
        { type: "h2", text: "La règle du 3:1" },
        {
          type: "formula",
          expr: "LTV ≥ 3 × CAC",
          note: "Zone saine : 3:1 à 5:1. Sous 3:1, trop fragile. Au-dessus de 8:1, on sous-prix ou sous-investit.",
        },
        {
          type: "p",
          text: "Le pricing est l'un des deux bras de ce ratio : chaque euro d'ARPU supplémentaire améliore **simultanément** la LTV et le payback — c'est ce double effet qui fait du prix le levier le plus puissant.",
        },
        { type: "h2", text: "Pourquoi un prix trop bas est pire qu'un prix trop haut" },
        {
          type: "p",
          text: "« Commençons bas, on montera plus tard » est presque toujours la mauvaise intuition. Un prix trop haut **proteste** (la conversion chute, on ajuste en semaines). Un prix trop bas ne proteste jamais — tout semble aller, et les dégâts sont silencieux :",
        },
        {
          type: "list",
          items: [
            "**Économique** : on ampute LTV et payback, donc la capacité même d'acquérir.",
            "**Commercial** : le prix est un signal de qualité — trop bas, on sort des considérations sérieuses (surtout en B2B).",
            "**Portefeuille** : le prix bas recrute massivement le Chasseur de valeur — la base la plus churnante et hostile aux hausses.",
            "**Produit** : le revenu insuffisant prive des moyens de tenir la forever promise — le sous-pricing finit en sous-délivrance.",
            "**Stratégique** : monter un prix est l'opération la plus délicate du métier, le baisser est trivial. L'asymétrie plaide pour entrer haut.",
          ],
        },
        {
          type: "quote",
          text: "Fixer le prix qui fait légèrement mal à annoncer — si personne ne trouve jamais le prix élevé, il est trop bas.",
        },
      ],
      takeaways: [
        "Le coût fixe le plancher, jamais le prix : raisonner en valeur reçue par segment.",
        "Capturer 10-30 % de la valeur créée ; le prix est une propriété du segment.",
        "Viser LTV:CAC entre 3:1 et 5:1 ; chaque euro d'ARPU améliore LTV et payback.",
        "Un prix trop bas est silencieusement destructeur : entrer haut, le prix qui fait un peu mal.",
      ],
    },

    // ── 4.2 ───────────────────────────────────────────────
    {
      slug: "trouver-son-prix",
      index: 2,
      ref: "4.2",
      title: "Trouver son prix de lancement",
      subtitle: "Le prix de lancement n'a pas besoin d'être parfait : il doit être dans la bonne zone, et traité comme une hypothèse à raffiner.",
      minutes: 12,
      blocks: [
        {
          type: "lead",
          text: "Quatre méthodes complémentaires, par ordre de structure croissante : signaux indirects, entretien de prix, Van Westendorp, et test en shadow.",
        },
        { type: "h3", text: "Les signaux indirects" },
        {
          type: "p",
          text: "Que paient déjà les clients pour résoudre ce problème ? Les alternatives directes (concurrents), indirectes (l'outil générique, le prestataire humain, le bricolage et son coût en temps), et les **budgets existants** (la ligne comptable où ce prix ira se loger — un produit qui rentre dans un budget établi se vend sans créer de catégorie).",
        },
        { type: "h3", text: "L'entretien de prix" },
        {
          type: "p",
          text: "La question naïve (« combien paieriez-vous ? ») produit des réponses de politesse. Ce qui marche : **faire réagir à des prix précis** (« à 29 €, vous le prenez ? et à 59 ? »), questionner le référentiel (« à quoi le comparez-vous ? »), et observer les réactions non sollicitées en démo — le silence au moment du prix est une donnée. Une douzaine d'entretiens par segment suffit.",
        },
        { type: "h3", text: "La méthode Van Westendorp" },
        {
          type: "p",
          text: "La méthode structurée de référence, praticable dès ~30 réponses par segment. Quatre questions à des prospects qui ont compris le produit :",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "À quel prix serait-il **si cher** que vous ne l'achèteriez pas ?",
            "À quel prix serait-il **cher, mais envisageable** ?",
            "À quel prix serait-il une **bonne affaire** ?",
            "À quel prix serait-il **si bon marché** que vous douteriez de sa qualité ?",
          ],
        },
        {
          type: "callout",
          tone: "info",
          text: "Van Westendorp donne une zone, pas un chiffre. Précautions : interroger de vrais prospects (pas son entourage), présenter le produit avant les questions, et lire par segment séparé — agrégés, les résultats moyennent des dispositions à payer différentes et ne désignent le bon prix pour personne.",
        },
        { type: "h3", text: "Le test en shadow" },
        {
          type: "p",
          text: "La méthode la plus prédictive : publier une vraie page pricing avec de vrais prix, mesurer les clics sur « S'abonner », et accueillir le cliqueur sur un message honnête (« lancement bientôt, laissez votre email »). L'intention au clic surestime la conversion réelle (÷2 à ÷3), mais **compare fidèlement les prix entre eux** — exactement ce qu'on cherche. La liste d'emails devient la cohorte de lancement.",
        },
        { type: "h2", text: "Les benchmarks par catégorie" },
        {
          type: "table",
          head: ["Catégorie", "Fourchette mensuelle typique"],
          rows: [
            ["Consumer apps (mobile)", "3-10 €"],
            ["SaaS B2C mass market", "5-15 €"],
            ["SaaS B2C niche premium", "15-50 €"],
            ["SaaS prosumer / pro individuel", "50 € et plus"],
            ["Médias grand public", "5-15 €"],
            ["Médias premium / niche B2B", "20-50 €"],
            ["SaaS B2B SMB", "20-100 € / siège"],
            ["SaaS B2B enterprise", "sur devis (souvent 100 €+/siège)"],
          ],
        },
        {
          type: "callout",
          tone: "fire",
          title: "La ligne invisible : l'écart B2C/B2B",
          text: "À valeur perçue comparable, le B2B supporte 5 à 10× le prix du B2C — l'acheteur raisonne en ROI, le prix se dilue dans des coûts d'entreprise, et la décision est professionnelle. Le glissement prosumer → B2B est l'un des chemins de croissance les plus rentables (Notion, Figma, Slack l'ont tous parcouru).",
        },
      ],
      takeaways: [
        "Quatre méthodes : signaux indirects, entretien de prix, Van Westendorp, test en shadow.",
        "Van Westendorp donne une zone par segment — jamais agréger.",
        "Le test en shadow mesure un comportement réel et compare fidèlement les prix.",
        "Le B2B supporte 5-10× le prix du B2C : le glissement prosumer → B2B est très rentable.",
      ],
    },

    // ── 4.3 ───────────────────────────────────────────────
    {
      slug: "page-pricing",
      index: 3,
      ref: "4.3",
      title: "Une page pricing qui convertit",
      subtitle: "La page la plus rentable du site au pixel carré : tous les biais, l'architecture de tiers et la philosophie de valeur s'y matérialisent.",
      minutes: 9,
      blocks: [
        {
          type: "lead",
          text: "Les règles de construction, dans l'ordre d'importance.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "**Afficher l'annuel par défaut.** Le toggle s'ouvre sur l'annuel, prix en équivalent mensuel, économie en mois offerts. La majorité ne touche pas au toggle, et chaque annuel vaut 2-3× un mensuel : la décision à plus fort impact de la page.",
            "**Ancrage conscient.** Le plan cible visuellement dominant (couleur, taille, élévation) avec le badge « le plus populaire » (preuve sociale + compromis, autoréalisateur). Le fautif, c'est l'absence de choix : une grille où l'œil ne sait pas où aller.",
            "**Nommer les plans en profils, pas en lettres.** « Solo / Équipe / Entreprise » permet de se reconnaître ; Bronze/Argent/Or reporte le décodage sur le visiteur.",
            "**Hiérarchie de l'information.** Le prix et la promesse d'abord, 3-5 différences clés ensuite, le tableau exhaustif replié en bas. Chaque feature en valeur, pas en technique : « Historique illimité », pas « Rétention des logs étendue ».",
            "**Signaux de confiance au point de friction.** Sous le bouton : « sans engagement, annulable en un clic », garantie, moyens de paiement, preuve sociale contextualisée.",
          ],
        },
        {
          type: "pitfall",
          text: "À éviter absolument : features incompréhensibles, prix cachés (« contactez-nous » partout — réservé au seul Enterprise), plus de quatre colonnes, astérisques et conditions en petit, FAQ absente (les objections non traitées se règlent par la fermeture de l'onglet), et le toggle mensuel/annuel ambigu — la confusion tarifaire est le tueur silencieux de conversion.",
        },
      ],
      takeaways: [
        "Annuel par défaut : la décision à plus fort impact de la page.",
        "Plan cible dominant + badge « populaire » ; jamais l'absence de choix.",
        "Nommer en profils, features en valeur, signaux de confiance au point de friction.",
        "Tueurs de conversion : prix cachés, >4 colonnes, astérisques, toggle ambigu.",
      ],
    },

    // ── 4.4 ───────────────────────────────────────────────
    {
      slug: "repricing",
      index: 4,
      ref: "4.4",
      title: "L'art et la science du repricing",
      subtitle: "Augmenter le prix d'une base existante : l'opération la plus délicate du métier. Bien menée, la croissance la plus pure ; mal menée, l'événement qui solde la dette de churn.",
      minutes: 14,
      blocks: [
        {
          type: "lead",
          text: "Le repricing touche simultanément au contrat économique et au contrat moral (l'Identitaire vit la hausse brutale comme une trahison). Du revenu sans CAC, ou l'événement de réveil qui solde d'un coup toute la dette de churn accumulée.",
        },
        { type: "h2", text: "Quand reprendre — et quand s'abstenir" },
        {
          type: "compare",
          left: {
            title: "Justifications légitimes",
            tone: "fire",
            points: [
              "**La valeur a augmenté** — le produit fait plus qu'il y a deux ans (se raconte bien)",
              "**Inflation et coûts** — honnête et compris, mais à utiliser sobrement",
              "**L'erreur initiale** — lancé trop bas, à corriger par paliers sur les nouveaux",
            ],
          },
          right: {
            title: "Contre-indications absolues",
            points: [
              "Un churn déjà élevé ou en hausse (on ne teste pas un malade)",
              "Une crise de confiance en cours (incident, bad buzz)",
              "L'absence de munitions narratives (rien de neuf à montrer)",
            ],
          },
        },
        { type: "h2", text: "Grandfathering vs migration" },
        {
          type: "p",
          text: "**Le grandfathering** — laisser les existants à leur tarif, n'appliquer la hausse qu'aux nouveaux. Zéro churn de hausse, un cadeau de fidélité puissant (l'ancien tarif devient un privilège qui parle à l'Identitaire), exécution simple. Faiblesse : le revenu de la base ne bouge pas, et les strates de tarifs s'accumulent.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "La règle",
          text: "Grandfatherer, oui — sans limite de durée, jamais. Borner le privilège (« garanti 12/24 mois » ou « tant que l'abonnement reste actif ») transforme le tarif en switching cost : partir, c'est perdre son prix à vie — redoutablement efficace et parfaitement loyal puisque annoncé.",
        },
        {
          type: "p",
          text: "**La migration** — le nouveau tarif pour tous, avec préavis. Tout le levier économique immédiatement, mais le churn de hausse (concentré sur Chasseurs de valeur et zombies). Conditions : communication irréprochable, amortisseurs (délai long, palier, downgrade offert — mieux qu'un churn), et **acceptation chiffrée** d'un churn cible. La **stratégie hybride** est souvent optimale : migration générale + protection des fidèles.",
        },
        { type: "widget", name: "repricing-simulator" },
        { type: "h2", text: "Les cinq règles d'or de la communication" },
        {
          type: "list",
          ordered: true,
          items: [
            "**Prévenir tôt** — 30 à 60 jours avant. La hausse découverte sur le relevé bancaire est la définition du repricing raté.",
            "**Dire le chiffre, simplement** — l'ancien, le nouveau, la date. Enrober est perçu comme une manœuvre.",
            "**Justifier par la valeur, pas les coûts — et montrer.** La meilleure annonce de hausse ressemble à une annonce de produit.",
            "**Donner une issue à chaque profil** — passage à l'annuel au tarif actuel, downgrade digne, geste pour les cas sociaux. Personne ne doit être acculé.",
            "**Assumer humainement** — signature d'un dirigeant, ton direct, canal de réponse réel.",
          ],
        },
        { type: "h2", text: "Adobe Creative Cloud : le manuel" },
        {
          type: "p",
          text: "En 2013, Adobe arrête Creative Suite (pas de CS7) et bascule tout en Creative Cloud — une bascule franche, datée, assumée. Backlash immédiat (pétitions à 30 000+ signatures), mais Adobe tient : la direction avait **chiffré le churn et le bruit avant**, et communiqué aux investisseurs une trajectoire assumant deux ans de revenus en baisse (la J-curve). De 0 abonné (2012) à 30 M+ une décennie plus tard ; CA de ~4 Md$ à 19 Md$+ (90 %+ récurrent) ; capitalisation ×10.",
        },
        {
          type: "callout",
          tone: "fire",
          title: "Les leçons Adobe",
          text: "(1) Une transition se finance : traverser la J-curve sans paniquer. (2) Le backlash se budgète comme le churn. (3) L'abonnement doit délivrer visiblement plus dès le 1ᵉʳ jour, sinon c'est une hausse déguisée. (4) La fidélité passée s'honore dans les conditions de migration. (5) La clarté bat la douceur.",
        },
        { type: "h2", text: "Contre-cas — Netflix 2011" },
        {
          type: "pitfall",
          text: "Netflix sépare DVD + streaming = +60 % d'un coup, sans préavis digne ni amortisseur, justifié par sa stratégie (pas par la valeur reçue) — le client recevait moins (deux comptes, deux factures) pour plus cher. Résultat : 800 000 abonnés perdus en un trimestre, action −75 %, Qwikster enterré en trois semaines.",
        },
        {
          type: "quote",
          text: "On peut faire payer beaucoup plus, mais jamais beaucoup plus d'un coup — sauf à changer de produit en même temps que de prix.",
        },
      ],
      takeaways: [
        "Ne reprendre le prix que sur valeur démontrable + base saine ; jamais sur un churn en hausse.",
        "Grandfatherer borné dans le temps transforme le tarif en switching cost loyal.",
        "Chiffrer le churn acceptable AVANT d'annoncer : un +20 % à 5 % de churn est gagnant.",
        "Cinq règles d'or ; Adobe (clarté + valeur) vs Netflix 2011 (hausse sèche d'un coup).",
      ],
    },

    // ── 4.5 ───────────────────────────────────────────────
    {
      slug: "pricing-international",
      index: 5,
      ref: "4.5",
      title: "Pricing international & localisation",
      subtitle: "Vendre au même prix partout semble équitable et simple ; c'est une double erreur, économique et stratégique.",
      minutes: 10,
      blocks: [
        {
          type: "lead",
          text: "9,99 $ représentent une part radicalement différente du revenu disponible selon les pays. Le prix unique mondial revient à pratiquer, sans le décider, un prix prohibitif sur la majorité de l'humanité : on n'y perd pas de la marge, on y perd tout le marché.",
        },
        {
          type: "p",
          text: "**Erreur stratégique** aussi : les marchés émergents sont les réservoirs de croissance du siècle (Asie-Pacifique à +16-18 %/an pour l'Inde et la Chine), et les positions s'y prennent maintenant, par celui qui propose un prix accessible le premier.",
        },
        { type: "h2", text: "La parité de pouvoir d'achat (PPP)" },
        {
          type: "p",
          text: "Ajuster le prix non au taux de change, mais au **pouvoir d'achat local**, de sorte que l'effort consenti soit comparable d'un marché à l'autre. Ce n'est pas philanthropique : sur un produit à coût marginal quasi nul, tout abonné gagné à 2 $ est du revenu presque pur qui n'existerait pas à 10 $.",
        },
        {
          type: "callout",
          tone: "fire",
          title: "La règle du 1/5",
          text: "Un produit vendu 10 $ en Occident devrait se vendre autour de 2 $ en Inde pour une accessibilité perçue équivalente — un ratio qui choque l'intuition occidentale et qu'il faut pourtant oser pour exister sur ces marchés.",
        },
        { type: "widget", name: "ppp-calculator" },
        { type: "h2", text: "Les cas d'école" },
        {
          type: "list",
          items: [
            "**Spotify en Inde (2019)** : ₹119/mois (~1,40 $ contre 9,99 $ en Occident) + plans journaliers/hebdomadaires épousant la recharge prépayée. Des dizaines de millions d'utilisateurs conquis.",
            "**Netflix en Afrique/Asie** : plans mobile-only à 2-4 $ — une localisation par le produit autant que par le prix.",
            "**Duolingo** : une douzaine de niveaux de prix selon les marchés, pilotés par l'expérimentation continue — la localisation est un système d'optimisation permanent.",
          ],
        },
        {
          type: "p",
          text: "**Pour les petites équipes** : le Merchant of Record (Paddle, Lemon Squeezy) vend à votre place dans chaque pays (TVA, devises, conformité). Côté mobile, RevenueCat/Adapty industrialisent les grilles par pays au-dessus des stores.",
        },
        {
          type: "pitfall",
          text: "**Le risque d'arbitrage (VPN)** : si l'abonnement indien coûte 1/5 du prix US, des Occidentaux passeront par VPN. Mitigations proportionnées : exiger un moyen de paiement local sur les tarifs réduits (la barrière la plus efficace), borner certains avantages, surveiller les anomalies. La règle : rendre l'arbitrage inconfortable, pas impossible — les contre-mesures excessives puniraient surtout les vrais clients locaux.",
        },
      ],
      takeaways: [
        "Le prix unique mondial fait perdre le marché, pas seulement de la marge.",
        "PPP : ajuster au pouvoir d'achat ; règle du 1/5 pour les émergents.",
        "Afficher la devise locale est le minimum vital ; un MoR démocratise la localisation.",
        "Rendre l'arbitrage VPN inconfortable, pas impossible.",
      ],
    },

    // ── 4.6 ───────────────────────────────────────────────
    {
      slug: "ab-testing-prix",
      index: 6,
      ref: "4.6",
      title: "A/B testing & expérimentation prix",
      subtitle: "Le prix se teste comme le reste — mais avec une éthique stricte et une lecture qui dépasse la conversion.",
      minutes: 9,
      blocks: [
        {
          type: "lead",
          text: "Tester des prix entre nouveaux visiteurs est légitime : chaque visiteur voit un prix réel, honoré, sans tromperie — l'équivalent contrôlé de ce que fait tout commerçant qui ajuste ses prix dans le temps.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "La ligne éthique",
          text: "Interdit (moralement et de plus en plus légalement) : les prix personnalisés opaques fondés sur le profilage individuel (faire payer plus cher celui qu'on devine captif), et tout test touchant la base existante sans transparence — les abonnés actuels ne sont jamais un terrain d'expérimentation. Si un test révèle qu'un prix inférieur devient le standard, aligner les cohortes testées protège la confiance.",
        },
        { type: "h2", text: "Les variables testables" },
        {
          type: "list",
          items: [
            "**La présentation avant le montant** (annuel par défaut, framing, ordre, badge, noms) : ces tests « gratuits » produisent régulièrement des gains à deux chiffres.",
            "**Le nombre de tiers et le découpage** (2 vs 3, décoy, déplacement d'une feature de frontière).",
            "**Le montant lui-même** (29 vs 39, seuil psychologique, écart entre tiers).",
            "**Les mécaniques d'entrée** (trial avec/sans carte, durée, reverse trial).",
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Durée et taille",
          text: "La conversion est l'événement rare du funnel : il faut des centaines de conversions par branche, donc des milliers de visiteurs par variante. Les petits trafics testent moins souvent et plus franchement (écarts de 30-50 %, pas de 5 %). Couvrir des cycles complets (≥ 2 semaines), jamais à cheval sur un événement anormal.",
        },
        { type: "h2", text: "Interpréter : la conversion ment, la LTV tranche" },
        {
          type: "p",
          text: "L'erreur classique : déclarer vainqueur le prix qui convertit le mieux. Or le prix bas convertit presque toujours mieux. Les arbitres réels : le **revenu par visiteur** (conversion × panier — le prix supérieur gagne souvent malgré une conversion moindre) et surtout la **qualité de cohorte à 90 jours**. Un prix d'appel peut gagner le test de conversion et perdre le business en recrutant des Chasseurs de valeur.",
        },
        {
          type: "formula",
          expr: "Verdict = conversion + revenu/visiteur + rétention à 90 jours",
          note: "C'est plus lent ; c'est le prix de la vérité.",
        },
        { type: "h2", text: "La price discovery progressive" },
        {
          type: "p",
          text: "Pour les jeunes produits, la méthode la plus robuste n'est pas le grand test mais la **montée par paliers sur les nouveaux clients** : lancer prudent, augmenter de +10-20 % à chaque palier de traction, en grandfatherant chaque cohorte à son prix d'entrée. Chaque palier est un test grandeur nature : tant que conversion et qualité de cohorte tiennent, le prix précédent était trop bas.",
        },
        {
          type: "quote",
          text: "Les SaaS qui ne l'ont jamais monté n'ont pas un bon prix : ils ont une question jamais posée.",
        },
      ],
      takeaways: [
        "Tester entre nouveaux visiteurs est loyal ; jamais de prix personnalisé opaque ni de test sur la base.",
        "Les tests de présentation (gratuits) rapportent souvent des gains à deux chiffres.",
        "La conversion ment : arbitrer sur revenu/visiteur + rétention à 90 jours.",
        "Price discovery progressive : monter par paliers en grandfatherant chaque cohorte.",
      ],
    },
  ],
};
