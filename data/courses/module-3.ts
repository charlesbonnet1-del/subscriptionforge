import type { CourseContent } from "@/lib/content-types";

export const moduleThree: CourseContent = {
  moduleSlug: "design-du-modele",
  hasGames: true,
  hasQuiz: true,
  lessons: [
    // ── 3.1 ───────────────────────────────────────────────
    {
      slug: "forever-promise",
      index: 1,
      ref: "3.1",
      title: "Trouver sa « forever promise »",
      subtitle: "La décision la plus structurante de toutes : qu'est-ce qui justifie qu'on me paie chaque mois ?",
      minutes: 11,
      blocks: [
        {
          type: "lead",
          text: "Avant tout pricing, tout funnel, tout produit : pourquoi quelqu'un paierait-il chaque mois pour ça ? Pas une fois — chaque mois. La question paraît triviale ; honnêtement posée, elle élimine une majorité des projets d'abonnement. Car la plupart des produits utiles résolvent un problème, et un problème résolu cesse de payer.",
        },
        {
          type: "quote",
          text: "La forever promise n'est pas le produit (qui peut changer) ni la feature (qui sera copiée) : c'est le résultat continu que l'abonné achète.",
          cite: "Robbie Kellman Baxter",
        },
        {
          type: "p",
          text: "Netflix ne vend pas un catalogue, il promet « vous aurez toujours quelque chose de bien à regarder » ; Spotify promet « toute la musique, partout, qui vous connaît » ; un logiciel de comptabilité promet « votre gestion est en règle, en permanence, sans y penser ».",
        },
        { type: "h2", text: "Les quatre sources de valeur continue" },
        {
          type: "list",
          ordered: true,
          items: [
            "**Le contenu évolutif** — la valeur se renouvelle (Netflix, médias, newsletters). Condition : le rythme de renouvellement doit dépasser le rythme de consommation perçu (un catalogue fini est un abonnement fini).",
            "**L'outil dont on dépend** — la valeur s'approfondit (Notion, Figma, le CRM). Condition : un usage réellement récurrent (hebdo minimum en B2B) et une accumulation (données, habitudes).",
            "**Le service récurrent** — le besoin revient (livraison, maintenance, réappro). Condition : une fréquence de besoin stable et une économie unitaire positive.",
            "**L'appartenance et la communauté** — la valeur est relationnelle (Patreon, clubs). Condition : une densité relationnelle entretenue — la communauté fantôme est le churn le plus rapide de cette catégorie.",
          ],
        },
        {
          type: "callout",
          tone: "fire",
          title: "Empiler les sources",
          text: "Les produits les plus solides cumulent : Peloton vend du contenu évolutif (les cours) + de la communauté (les leaderboards) + un outil dont on dépend (le matériel et l'historique). Chaque source additionnelle est une raison de rester de plus — et une raison de partir en moins.",
        },
        { type: "h2", text: "Le test de la valeur justifiée" },
        {
          type: "formula",
          expr: "À chaque cycle : valeur délivrée > prix payé — ET l'abonné peut s'en rendre compte",
          note: "La première moitié est économique, la seconde psychologique. Les deux comptent.",
        },
        {
          type: "p",
          text: "**Exercice** : prendre un mois moyen d'un abonné moyen, lister ce qu'il a effectivement **consommé** (pas ce que le produit offre), le valoriser honnêtement, comparer au prix. Si c'est défavorable : augmenter la valeur consommée (engagement), baisser le prix (ou créer un palier inférieur), ou admettre que le modèle est un achat ponctuel déguisé.",
        },
        { type: "h2", text: "Les trois erreurs mortelles" },
        {
          type: "pitfall",
          text: "**Confondre « utile une fois » avec « indispensable en continu ».** Un générateur de CV, un convertisseur de fichiers : utilisés une fois. En faire un abonnement produit un churn structurel à 15-25 % mensuel. Issues honnêtes : vendre à l'acte/lifetime, passer en crédits, ou étendre vers la récurrence (le générateur de CV qui devient coach de carrière continu).",
        },
        {
          type: "pitfall",
          text: "**Promettre une valeur qu'on ne peut pas tenir dans le temps.** Le créateur solo qui promet du quotidien, le SaaS qui promet des nouveautés au rythme d'une levée de fonds : ça tient six mois, puis se paie en churn de déception — le plus brutal, car il combine perte du client et de la confiance. Calibrer la promesse sur le rythme soutenable en croisière.",
        },
        {
          type: "pitfall",
          text: "**Copier le modèle d'un concurrent sans valider sa propre valeur continue.** « Netflix le fait » n'est pas un argument : sa viabilité tient à des conditions structurelles (sources de valeur, coûts marginaux, fréquence) qui ne se copient pas avec le pricing.",
        },
      ],
      takeaways: [
        "La forever promise est le résultat continu que l'abonné achète, pas le produit ni la feature.",
        "Quatre sources de valeur continue : contenu, outil, service, appartenance — les meilleurs les empilent.",
        "Test : à chaque cycle, la valeur consommée doit dépasser le prix — et être visible.",
        "Erreur n°1 du métier : transformer un « utile une fois » en abonnement.",
      ],
    },

    // ── 3.2 ───────────────────────────────────────────────
    {
      slug: "architecture-de-l-offre",
      index: 2,
      ref: "3.2",
      title: "Architecture de l'offre : tiers, plans, bundles",
      subtitle: "Un équilibre entre trois forces : la simplicité qui convertit, la segmentation qui capture la valeur, la progression qui crée l'expansion.",
      minutes: 12,
      blocks: [
        {
          type: "lead",
          text: "La forever promise définit pourquoi on paie ; l'architecture de l'offre définit comment — combien de plans, à quels niveaux, selon quelle ligne de fracture.",
        },
        { type: "h2", text: "Combien de plans proposer ?" },
        {
          type: "list",
          items: [
            "**Plan unique** : simplicité maximale, mais aucun chemin de progression et un seul point de capture — le mono-plan plafonne le revenu par construction.",
            "**Deux plans** : un pas vers la segmentation, mais pas de système de comparaison complet (ni ancre haute ni compromis central).",
            "**Trois plans — le sweet spot** : ~1,4× de conversion vs deux plans. Trois options activent simultanément l'ancrage (haut), le compromis (centre) et l'accessibilité (bas).",
            "**Quatre et plus — la zone rouge** : le paradoxe du choix s'installe ; la réponse du cerveau à la surcharge n'est pas un mauvais choix, c'est l'absence de choix (l'onglet fermé).",
          ],
        },
        {
          type: "callout",
          tone: "info",
          text: "Règle pratique : commencer à deux (le temps de comprendre ses segments), passer à trois dès que les données le permettent, ne franchir quatre que sur preuve — et le 4ᵉ est généralement l'Enterprise « sur devis », qui n'est pas un plan mais une porte.",
        },
        { type: "h2", text: "La logique des quatre étages" },
        {
          type: "table",
          head: ["Tier", "Mission", "Calibrage"],
          rows: [
            ["Starter", "Convertir le curieux, pas être rentable", "Valeur centrale complète, mais limites de volume/confort"],
            ["Core", "Là où la majorité doit aller — le produit", "Toute la forever promise, badge « populaire », centre visuel"],
            ["Pro / Team", "Le levier d'ARPU (2-4× le Core)", "Collaboration, volumes, admin, intégrations, support prioritaire"],
            ["Enterprise", "Capturer les grands comptes + ancrer", "Sur devis, SLA, sécurité, support dédié"],
          ],
        },
        {
          type: "callout",
          tone: "fire",
          title: "Deux principes de découpage",
          text: "La ligne de partage suit la valeur, pas l'effort technique (on facture ce qui rapporte au client, pas ce qui a été dur à coder). Et chaque frontière de tier doit coïncider avec un moment de croissance du client : le bon upgrade se déclenche tout seul quand l'usage franchit un seuil naturel, jamais par privation arbitraire.",
        },
        { type: "h2", text: "Le bundling stratégique" },
        {
          type: "p",
          text: "Le bundle crée de la valeur quand les dispositions à payer sont **hétérogènes et complémentaires**. Si A valorise X à 10 et Y à 4, et B l'inverse, les vendre séparément à 10 capture 20 ; le bundle à 13 capture 26. C'est la force d'Apple One, d'Amazon Prime, du bundle NYT : personne n'utilise tout, chacun valorise un cœur différent, la somme perçue dépasse le prix.",
        },
        {
          type: "compare",
          left: {
            title: "Quand bundler (arme de leader)",
            points: [
              "Usages complémentaires, valorisations croisées",
              "Créer du switching cost : chaque produit est une raison de rester",
              "Le churn d'un bundle est inférieur au churn de ses composants",
              "Apple One : le bundle-forteresse qui verrouille l'écosystème",
            ],
          },
          right: {
            title: "Quand unbundler (arme d'attaquant)",
            tone: "fire",
            points: [
              "Des segments ne veulent qu'une partie et refusent de payer le tout",
              "Capturer la disposition à payer fine de chaque segment",
              "Le câble TV détricoté par le streaming",
              "Quand le bundle masque la valeur (guilt sur les 80 % non utilisés)",
            ],
          },
        },
        { type: "h2", text: "Cas Notion : l'architecture au service du PLG" },
        {
          type: "p",
          text: "Notion ne limite pas la valeur **individuelle** (le free personnel est presque complet — c'est lui qui recrute), il limite la **collaboration**. L'individu adopte gratuitement, construit sa base de connaissance (lock-in par les assets), puis l'amène au travail ; dès que l'usage devient collectif, la limite se fait sentir au moment exact où la valeur explose — et où ce n'est plus l'individu qui paie, mais l'entreprise.",
        },
        {
          type: "callout",
          tone: "fire",
          title: "La leçon d'architecture",
          text: "Le meilleur découpage de tiers est celui où la frontière entre deux plans coïncide avec un moment de croissance naturelle du client. La conversion individuel → team n'est pas un funnel marketing : elle est câblée dans l'architecture des plans.",
        },
      ],
      takeaways: [
        "Trois plans = le sweet spot (~1,4× vs deux) : ancrage + compromis + accessibilité.",
        "Quatre étages : Starter convertit, Core est le produit, Pro est le levier d'ARPU, Enterprise ancre.",
        "Découper selon la valeur, jamais l'effort technique ; chaque frontière = un moment de croissance.",
        "Bundle = arme de leader (switching cost) ; unbundle = arme d'attaquant.",
      ],
    },

    // ── 3.3 ───────────────────────────────────────────────
    {
      slug: "freemium",
      index: 3,
      ref: "3.3",
      title: "Le freemium : l'arme à double tranchant",
      subtitle: "Le freemium n'est pas une stratégie d'acquisition, c'est une stratégie de conversion. Si l'équation est défavorable, ce n'est pas un modèle — c'est une fuite.",
      minutes: 12,
      blocks: [
        {
          type: "lead",
          text: "Le malentendu fondateur : croire que « le gratuit attire du monde » suffit. Des inscrits gratuits ne sont ni du revenu, ni nécessairement des prospects. Toute l'économie du freemium tient dans une équation : le coût total du free doit être inférieur au CAC économisé sur les conversions générées, plus la valeur annexe (viralité, réseau, données).",
        },
        {
          type: "callout",
          tone: "info",
          title: "Produit ou teaser ?",
          text: "Le free-produit (Notion personnel, Spotify gratuit) est complet et utilisable indéfiniment : il maximise adoption, viralité et lock-in, et convertit par franchissement de seuils. Le free-teaser est une démo limitée : convertit plus vite, recrute moins. Conquête de marché et réseau → free-produit ; cycle court et marché étroit → teaser, voire pas de freemium.",
        },
        { type: "h2", text: "Les deux modèles qui fonctionnent" },
        {
          type: "list",
          items: [
            "**Freemium par fonctionnalités** : base gratuite, avancé payant (Notion, Figma, Canva). Force : une frontière claire et argumentable. Risque : mal la placer.",
            "**Freemium par capacité** : toutes les fonctions, mais limitées en volume (Slack l'historique, Dropbox les Go). Force : la conversion est organique — c'est le succès de l'utilisateur qui le fait franchir la limite, quand sa dépendance est maximale. Risque : limite atteinte trop tôt (frustration) ou jamais (free éternel).",
          ],
        },
        { type: "h2", text: "Ce qu'il ne faut JAMAIS donner gratuitement" },
        {
          type: "list",
          ordered: true,
          items: [
            "**La fonctionnalité de rétention principale** (le hook). Si ce qui rend le produit indispensable est gratuit, le payant ne vend que du confort — et le confort churne. Spotify met la découverte en gratuit, mais le contrôle (choisir son titre, hors-ligne, sans pub) en payant.",
            "**La feature qui résout le problème en profondeur.** Le free fait toucher la solution, pas la livrer entière. L'outil qui exporte gratuitement en pleine qualité a offert son produit et vend un pourboire.",
            "**La collaboration et le partage.** Le déclencheur de conversion le plus puissant du SaaS : il convertit quand le budget change de poche (individu → entreprise) et que le lock-in devient collectif. La brader, c'est renoncer au meilleur moment de monétisation.",
          ],
        },
        { type: "h2", text: "La frustration idéale" },
        {
          type: "p",
          text: "Tout freemium repose sur une frustration. L'art : une frustration **productive** (qui donne envie d'upgrader) jamais **négative** (qui fait partir). Trois critères : elle survient **après** la démonstration de valeur, elle porte sur l'**extension** de l'usage et non son cœur, et elle est **prévisible et légitime**.",
        },
        {
          type: "callout",
          tone: "fire",
          title: "Deux cas d'école",
          text: "Duolingo a calibré sa pression publicitaire au point près : une pub par leçon maintient le gratuit digne ; deux pubs dégradaient la rétention du free lui-même. Slack a construit le maître-déclencheur : la limite d'historique (90 jours) — indolore au début, elle grandit avec la dépendance et frappe au moment de besoin maximal. La limite parfaite est celle dont la douleur est proportionnelle à la valeur reçue.",
        },
        { type: "h2", text: "Benchmarks freemium" },
        {
          type: "table",
          head: ["Contexte", "Conversion free → payant"],
          rows: [
            ["B2C grand public (médiane)", "≈ 2 %"],
            ["B2C — bon score", "4-5 %"],
            ["B2C — exceptionnel (Duolingo, niches fortes)", "8 % et plus"],
            ["B2B SaaS en PLG", "3-8 %"],
            ["Hors norme (Spotify, pression max du free)", "> 40 %"],
          ],
          caption: "À 2-4 %, il faut des dizaines de milliers de gratuits pour bâtir un revenu : un freemium de niche est une erreur de design. Duolingo est passé de ~3 % à 9 % en cinq ans et des centaines d'A/B tests — le taux est un produit du travail, pas une constante.",
        },
      ],
      takeaways: [
        "Freemium = stratégie de conversion : son coût doit être inférieur au CAC économisé + valeur annexe.",
        "Par fonctionnalités (frontière claire) ou par capacité (conversion organique).",
        "Ne jamais donner : le hook de rétention, la résolution profonde, la collaboration.",
        "La frustration idéale est productive : après la valeur, sur l'extension, prévisible.",
      ],
    },

    // ── 3.4 ───────────────────────────────────────────────
    {
      slug: "free-trial",
      index: 4,
      ref: "3.4",
      title: "Free trial : l'art de faire goûter",
      subtitle: "Non plus un produit gratuit permanent, mais un accès complet temporaire. Trois variables, chacune avec ses arbitrages chiffrés.",
      minutes: 12,
      blocks: [
        {
          type: "lead",
          text: "Le trial transforme la décision « est-ce que ça vaut 15 €/mois ? » en « est-ce que ça vaut 2 minutes d'inscription ? ». Il déplace la conversion de la persuasion vers l'expérience produit.",
        },
        { type: "h2", text: "La durée : 7, 14 ou 30 jours" },
        {
          type: "p",
          text: "Règle directrice : la durée doit couvrir le temps d'atteindre l'aha moment et d'installer un début d'habitude — pas plus. **7 jours** pour les produits simples à valeur immédiate ; **14 jours**, le standard, bon défaut pour la plupart des SaaS ; **30 jours** pour les produits complexes à déploiement réel. Tendance documentée : à produit égal, les trials courts convertissent souvent mieux — l'urgence concentre l'attention.",
        },
        { type: "h2", text: "La carte bancaire : l'arbitrage volume / qualité" },
        {
          type: "compare",
          left: {
            title: "Avec carte",
            points: [
              "Volume d'inscriptions : −20 à −40 %",
              "Conversion trial → payant : 40-60 %",
              "La carte filtre l'intention et automatise la conversion (l'inaction convertit)",
            ],
          },
          right: {
            title: "Sans carte",
            tone: "fire",
            points: [
              "Volume maximal d'inscrits, d'activation, de viralité, de données",
              "Conversion trial → payant : 15-25 %",
              "Repose sur une démonstration active : l'inaction évapore, elle ne convertit pas",
            ],
          },
        },
        {
          type: "callout",
          tone: "info",
          text: "Le critère synthétique n'est ni le volume ni le taux de conversion isolés, mais le nombre absolu de clients payants par mois et leur rétention à 90 jours.",
        },
        {
          type: "pitfall",
          text: "**Opt-out déloyal.** Le trial opt-out (facturation automatique sauf annulation) maximise la conversion — y compris involontaire, de gens qui ont oublié. Or ces conversions churnent au premier prélèvement remarqué, génèrent chargebacks et avis furieux, et détruisent la confiance. La position défendue (et la plus rentable) : l'opt-out loyal, avec rappel explicite à J-2.",
        },
        { type: "h2", text: "Le reverse trial : le meilleur des deux mondes" },
        {
          type: "p",
          text: "L'utilisateur démarre directement sur le **Premium complet** pendant quelques jours, puis — s'il ne convertit pas — est **downgradé vers le gratuit** au lieu d'être exclu.",
        },
        {
          type: "list",
          items: [
            "Il mobilise l'effet de possession à plein : on ne découvre pas Premium, on le **possède**, et le downgrade est vécu comme une perte concrète.",
            "Il ne perd personne : le non-converti reste en free, continue de s'investir et reçoit des occasions de convertir (contre un trial expiré qui éjecte).",
            "Il fait du free un argumentaire permanent : chaque limite rencontrée rappelle ce qu'on a eu. Duolingo en a fait un pilier, avec des conversions différées des semaines après le downgrade.",
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "Contre-indications",
          text: "Le reverse trial est un pont entre Premium et Free : sans plan Free viable, pas de pont. À éviter aussi pour les produits sans freemium, ceux dont le free coûte cher à servir, et ceux dont la valeur Premium est invisible en quelques jours.",
        },
        { type: "h2", text: "La séquence d'emails de trial" },
        {
          type: "p",
          text: "Le trial sans séquence est un trial au hasard — surtout sans carte, où la conversion est entièrement active. La séquence se déclenche sur le **comportement** autant que le calendrier ; le meilleur trigger reste l'événement produit (limite approchée, fonction premium effleurée). Reconstituez-la dans le mini-jeu de fin de module.",
        },
        { type: "widget", name: "monthly-vs-annual" },
      ],
      takeaways: [
        "Durée = juste assez pour atteindre l'aha moment ; les trials courts convertissent souvent mieux.",
        "Avec carte : moins de volume, 40-60 % de conversion. Sans carte : plus de volume, 15-25 %.",
        "Opt-out loyal (rappel à J-2) : les conversions d'oubli sont précisément celles qu'on ne veut pas.",
        "Le reverse trial mobilise l'effet de possession et ne perd personne — s'il existe un free viable.",
      ],
    },

    // ── 3.5 ───────────────────────────────────────────────
    {
      slug: "periodicite-et-saisonnalite",
      index: 5,
      ref: "3.5",
      title: "Périodicité et saisonnalité",
      subtitle: "La périodicité est l'un des déterminants les plus puissants de la LTV ; la saisonnalité, l'un des angles morts les plus répandus.",
      minutes: 10,
      blocks: [
        {
          type: "lead",
          text: "Dernière brique du design : le rythme. À quel intervalle facture-t-on, et comment le modèle traverse-t-il les saisons ? Deux questions faussement secondaires.",
        },
        { type: "h2", text: "Mensuel, trimestriel, annuel, multi-année" },
        {
          type: "list",
          items: [
            "**Mensuel** : friction d'entrée minimale, mais douze décisions de rester, douze échecs de paiement possibles, douze rendez-vous avec la douleur de payer. Churn annualisé typique de 30-50 % en B2C. La porte d'entrée, rarement la destination.",
            "**Annuel** : une décision par an, cash encaissé d'avance, churn annualisé qui tombe à 5-10 %. À produit égal, l'annuel divise le churn par 2 à 4 et multiplie la LTV par 2 à 3. Contrepartie : churn concentré au renouvellement, et risque de zombies prolongés.",
            "**Trimestriel** : l'excellent compromis sous-utilisé. Quatre décisions/an, panier d'entrée 3× plus petit que l'annuel, aligné avec les usages cycliques. À tester systématiquement comme palier intermédiaire.",
            "**Multi-année** : standard en B2B enterprise (2-3 ans contre remise = switching cost institutionnel) ; rare mais puissant en B2C sur santé et éducation.",
          ],
        },
        {
          type: "callout",
          tone: "fire",
          title: "L'annuel est une stratégie de rétention déguisée",
          text: "La migration mensuel → annuel est l'une des campagnes au meilleur ROI : remise de 15-20 % (en deçà, insuffisant ; au-delà, on brade la LTV), framing en mois offerts (« 2 mois offerts » bat « 17 % de réduction »), et timing comportemental — proposer aux abonnés engagés (après un pic d'usage, un milestone), jamais aux désengagés à qui l'annuel apparaîtrait comme un piège.",
        },
        { type: "h2", text: "La saisonnalité : l'angle ignoré" },
        {
          type: "p",
          text: "Tout business d'abonnement a une saisonnalité — d'acquisition, de churn, ou les deux — et la plupart la découvrent en la subissant. La cartographier est un exercice d'une demi-journée qui change le pilotage de l'année.",
        },
        {
          type: "list",
          items: [
            "**Pics de churn** : janvier (révision budgétaire, grand ménage des abonnements), août (vacances = usages suspendus = guilt), décembre (coupes pré-fêtes + renouvellements au pire moment).",
            "**Pics d'acquisition** : janvier (résolutions), septembre (le « deuxième janvier »), temps commerciaux (Black Friday — avec le piège : ce que la promo recrute, la promo le définit).",
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Le cas d'école : le fitness en janvier",
          text: "Les inscriptions explosent, la cohorte churne en mars quand la résolution meurt. La réponse n'est pas de renoncer à janvier, mais de préparer la rétention avant le churn : onboarding renforcé (objectifs réalistes — la résolution modeste survit à février), engagement sur-investi sur les 21 premiers jours, et offre calibrée (trimestriel ou engagement 90 jours plutôt que mensuel résiliable au premier découragement).",
        },
        {
          type: "p",
          text: "**Lisser un business saisonnier** : l'annuel ciblé sur les saisonniers (encaisser la basse saison d'avance), la pause saisonnière organisée plutôt que subie, et le contre-programme de basse saison (l'usage alternatif qui maintient le fil).",
        },
        {
          type: "callout",
          tone: "fire",
          text: "Le design du modèle est complet : forever promise (le pourquoi), architecture des plans (le quoi), freemium et trial (la porte d'entrée), périodicité et saisons (le rythme). Le module suivant traite la variable laissée de côté : le prix lui-même.",
        },
      ],
      takeaways: [
        "L'annuel divise le churn par 2-4 et multiplie la LTV par 2-3 : c'est une stratégie de rétention.",
        "Migration mensuel → annuel : remise 15-20 %, framing « 2 mois offerts », cibler les engagés.",
        "Le trimestriel est l'excellent compromis sous-utilisé, surtout en saisonnalité forte.",
        "Cartographier sa saisonnalité change le pilotage : préparer la rétention avant le churn.",
      ],
    },
  ],
};
