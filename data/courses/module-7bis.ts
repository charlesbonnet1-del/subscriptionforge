import type { CourseContent } from "@/lib/content-types";

export const moduleSevenBis: CourseContent = {
  moduleSlug: "switching-costs-lock-in",
  hasGames: true,
  hasQuiz: true,
  lessons: [
    // ── 7-bis.1 ──────────────────────────────────────────
    {
      slug: "philosophie-du-lock-in",
      index: 1,
      ref: "7-bis.1",
      title: "Philosophie du lock-in",
      subtitle: "Le meilleur abonné n'est pas celui qui est heureux de rester — c'est celui pour qui partir coûte plus que rester. Les deux ne s'excluent pas.",
      minutes: 11,
      blocks: [
        {
          type: "lead",
          text: "« Lock-in » évoque le piège — et c'est précisément pourquoi le sujet mérite un traitement explicite : bien compris, le lock-in n'est pas le contraire de la valeur, c'en est la sédimentation. Mal compris, il est le chemin le plus court vers la destruction d'une marque.",
        },
        { type: "h2", text: "Les deux rétentions" },
        {
          type: "compare",
          left: {
            title: "Rétention par la valeur",
            points: [
              "On reste parce qu'on aime (Netflix, Spotify côté émotion)",
              "La plus noble — et la plus fragile",
              "Se rejoue à chaque cycle, exposée à la concurrence, dépend de l'humeur",
            ],
          },
          right: {
            title: "Rétention par le coût de sortie",
            tone: "fire",
            points: [
              "On reste parce que partir coûte (Salesforce, Adobe côté structure)",
              "La plus solide — et la plus dangereuse",
              "Mal fondée, elle retient des prisonniers — et les prisonniers se vengent",
            ],
          },
        },
        {
          type: "callout",
          tone: "fire",
          title: "La thèse",
          text: "Les meilleurs produits combinent délibérément les deux — la valeur crée l'attachement, le lock-in crée l'inertie. Et ce n'est pas un compromis mais une synergie : le lock-in durable est presque toujours de la valeur accumulée. Spotify est aimé ET indéplaçable ; les deux faits ont la même cause : dix ans d'écoute déposés.",
        },
        { type: "h2", text: "L'éthique du lock-in : la ligne de partage" },
        {
          type: "list",
          items: [
            "**Le lock-in légitime** est une dépendance naturelle à de la valeur réelle : l'abonné a déposé quelque chose (données, travail, apprentissage, relations) qui le sert et ne se transporte pas sans perte. Le test : l'abonné, pleinement informé, **referait-il le même dépôt** ? Pour ses playlists, sa base Notion : oui.",
            "**Le lock-in illégitime** est une dépendance artificielle sans valeur : le format propriétaire sans raison, l'export impossible, les données en otage, la pénalité de sortie. Le test échoue : personne, informé, ne choisirait la cage.",
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Le corollaire contre-intuitif",
          text: "Offrir l'export RENFORCE le bon lock-in : l'abonné qui sait pouvoir partir librement dépose davantage (la confiance augmente l'investissement), et il découvre, le jour où il regarde l'export, que l'essentiel ne se transporte pas — les données brutes s'exportent, pas l'algorithme entraîné, pas les habitudes, pas la communauté. La porte ouverte sur un déménagement impossible est la forteresse parfaite, et parfaitement loyale.",
        },
        { type: "h2", text: "Le lock-in comme stratégie de croissance" },
        {
          type: "list",
          items: [
            "**Une LTV prévisible et élevée** : le switching cost allonge la durée de vie et surtout en réduit la variance — le socle des valorisations premium.",
            "**La résistance aux offres concurrentes** : le concurrent ne doit pas être meilleur, il doit être meilleur **de plus que** le coût du déménagement — une barre qui monte à chaque mois de dépôt.",
            "**La dissonance cognitive alliée** : « j'y ai trop investi pour que ce soit mauvais » — le sunk cost travaille en continu (et amplifie le légitime comme l'illégitime).",
            "**La moindre sensibilité au prix** : la hausse se compare au coût de tout redéployer ailleurs, pas à zéro. Le switching cost est, littéralement, du pricing power en réserve.",
          ],
        },
      ],
      takeaways: [
        "Valeur (attachement) + coût de sortie (inertie) : les meilleurs produits combinent les deux.",
        "Le test de légitimité : l'abonné informé referait-il le dépôt ?",
        "Offrir l'export renforce le bon lock-in : l'essentiel ne se transporte pas.",
        "Le lock-in légitime est du pricing power et de la LTV prévisible en réserve.",
      ],
    },

    // ── 7-bis.2 ──────────────────────────────────────────
    {
      slug: "lock-in-donnees",
      index: 2,
      ref: "7-bis.2",
      title: "Le lock-in par les données et l'historique",
      subtitle: "La famille la plus universelle : tout ce que l'abonné a accumulé et qui ne le suivrait pas dehors.",
      minutes: 8,
      blocks: [
        {
          type: "lead",
          text: "Tout produit accumule quelque chose. L'historique n'a pas une valeur sentimentale : il pilote la personnalisation, la reprise contextuelle, les statistiques personnelles — partir, c'est repartir inconnu.",
        },
        {
          type: "list",
          items: [
            "**L'historique de consommation** : l'écoute (Spotify — dix ans de goûts), le visionnage (Netflix — profils, « reprendre », listes), la lecture (annotations, progression, étagères).",
            "**L'historique de travail** : la base Notion (des années de documentation), les bibliothèques Figma (le design system entier), les archives Slack (la mémoire institutionnelle). Le travail accumulé est le switching cost le plus lourd : son déménagement est un projet avec un budget.",
            "**Les données personnelles** : la progression Duolingo, le profil de style Stitch Fix, les données de fitness. Le dépôt est double — la donnée ET le modèle qu'elle a entraîné.",
          ],
        },
        {
          type: "callout",
          tone: "fire",
          title: "La règle d'activation : rendre l'historique visible",
          text: "Un dépôt invisible ne retient pas. L'abonné qui ne voit pas ses 47 livres lus, ses 1 200 heures d'écoute, ses 340 pages créées, ne sait pas ce qu'il quitterait. D'où la double fonction des rapports de valeur (Module 7.9) et des rituels type Wrapped : communication proactive ET mise en scène du switching cost. C'est aussi la légitimité de montrer l'accumulé sur la page d'annulation : informer de la perte réelle est la définition du consentement éclairé.",
        },
      ],
      takeaways: [
        "L'historique pilote la personnalisation : partir, c'est repartir inconnu.",
        "Le travail accumulé (Notion, Figma, Slack) est le switching cost le plus lourd.",
        "Le dépôt de données est double : la donnée et le modèle qu'elle entraîne.",
        "Rendre l'historique visible : un dépôt invisible ne retient pas.",
      ],
    },

    // ── 7-bis.3 ──────────────────────────────────────────
    {
      slug: "lock-in-integrations",
      index: 3,
      ref: "7-bis.3",
      title: "Le lock-in par les intégrations et le workflow",
      subtitle: "La famille reine du B2B : chaque connexion entre le produit et le reste de l'environnement est un fil qui retient.",
      minutes: 9,
      blocks: [
        {
          type: "lead",
          text: "Chaque intégration bidirectionnelle active est un switching cost additionnel et multiplicatif — additionnel car la quitter a son propre coût, multiplicatif car les intégrations se tissent entre elles (le workflow qui traverse trois outils ne se défait pas outil par outil).",
        },
        {
          type: "quote",
          text: "Partir de Slack, c'est débrancher le système nerveux de l'entreprise : la décision n'appartient plus à un utilisateur ni même à un service, elle exige un projet d'entreprise.",
        },
        {
          type: "p",
          text: "C'est pourquoi les plateformes matures investissent massivement dans leurs écosystèmes d'intégrations et leurs API : **chaque connecteur publié est de la rétention distribuée** — construite par les clients eux-mêmes.",
        },
        {
          type: "callout",
          tone: "info",
          title: "Le cas des formats : propriétaire vs export facile",
          text: "Le format fermé sans export est le lock-in illégitime type ; l'export facile et loyal est la position défendue. Le bon équilibre : l'export ouvert des données (la confiance), avec une valeur d'usage qui n'est pas portable par nature (la mise en forme, les automatisations, les liens entre objets). Notion exporte tout en Markdown ; personne ne quitte Notion pour autant — ce qui retient n'a jamais été les fichiers.",
        },
        {
          type: "callout",
          tone: "fire",
          title: "Pour les petites équipes",
          text: "L'intégration paraît un luxe de plateforme — c'est l'inverse : 2-3 points bien choisis sont accessibles dès le premier produit (calendrier, email, Zapier/Make, import-export des outils dominants de la niche). Ils changent la catégorie : de « l'outil qu'on essaie » à « l'outil branché sur le reste ». Le premier se churne en un clic, le second se débranche en réunion.",
        },
      ],
      takeaways: [
        "Chaque intégration est un switching cost additionnel ET multiplicatif.",
        "Chaque connecteur publié est de la rétention distribuée, construite par les clients.",
        "Export ouvert des données + valeur d'usage non portable = le bon équilibre.",
        "2-3 intégrations changent la catégorie du produit, dès le premier mois.",
      ],
    },

    // ── 7-bis.4 ──────────────────────────────────────────
    {
      slug: "lock-in-reseau",
      index: 4,
      ref: "7-bis.4",
      title: "Le lock-in par le réseau et la communauté",
      subtitle: "Le switching cost le plus puissant qui existe, car il n'appartient à personne : aucun membre ne peut partir seul.",
      minutes: 8,
      blocks: [
        {
          type: "lead",
          text: "Trois mécaniques de réseau retiennent, chacune avec sa logique propre.",
        },
        {
          type: "list",
          items: [
            "**Les effets de réseau directs** : la valeur croît avec le nombre de membres que je connais (WhatsApp, Slack, Discord). Le plus puissant car il n'appartient à personne : le départ exige une coordination (« on migre tous ? ») dont le coût croît avec la taille du groupe.",
            "**Les effets de réseau indirects** : la réputation déposée (les avis d'un hôte Airbnb, les notes d'un vendeur, le karma d'un forum). L'actif le moins portable de tous : elle n'a de sens que dans le système qui l'a produite, et la reconstruire ailleurs prend des années — le lock-in fondamental des marketplaces.",
            "**La communauté propriétaire** : partir, c'est quitter ses pairs (le groupe Peloton, les compagnons de ligue Duolingo).",
          ],
        },
        {
          type: "callout",
          tone: "fire",
          title: "Deux propriétés du lock-in communautaire",
          text: "Strictement légitime par construction (personne ne peut confisquer des amitiés — elles retiennent ou non selon qu'elles sont réelles), et exigeant (il ne se décrète pas : la communauté fantôme ne verrouille rien — tout le réalisme du Module 7.4 s'applique).",
        },
      ],
      takeaways: [
        "Le réseau direct est le switching cost le plus puissant : on ne part jamais seul.",
        "La réputation est l'actif le moins portable : le lock-in fondamental des marketplaces.",
        "La communauté est légitime par construction (on ne confisque pas des amitiés).",
        "Mais elle ne se décrète pas : la communauté fantôme ne verrouille rien.",
      ],
    },

    // ── 7-bis.5 ──────────────────────────────────────────
    {
      slug: "lock-in-algorithmique",
      index: 5,
      ref: "7-bis.5",
      title: "Le lock-in par la personnalisation algorithmique",
      subtitle: "La famille la plus moderne : l'algorithme qui s'améliore avec l'usage est un switching cost qui se renforce tout seul.",
      minutes: 8,
      blocks: [
        {
          type: "lead",
          text: "Chaque interaction entraîne le modèle ; le modèle entraîné est strictement non portable (on exporte ses écoutes, pas le Discover Weekly qu'elles ont produit — la donnée voyage, l'intelligence reste).",
        },
        {
          type: "callout",
          tone: "fire",
          title: "Le coût de sortie est un coût de ré-entraînement",
          text: "Chez le concurrent : des semaines ou des mois de recommandations médiocres avant de retrouver le niveau de service — la traversée du désert algorithmique que peu d'abonnés acceptent. Spotify et Netflix en sont les références, mais la famille s'étend aux wearables de fitness, aux outils de finances personnelles, et désormais aux assistants IA dont la mémoire accumulée devient l'actif le moins transportable de tous.",
        },
        { type: "h2", text: "Comment construire ce lock-in — trois disciplines" },
        {
          type: "list",
          ordered: true,
          items: [
            "**Collecter sur les deux canaux** : explicitement (les préférences déclarées — rapide, fiable, perçu comme un service) et implicitement (le comportement — massif, continu, gratuit). Le déclaré amorce, l'implicite affine.",
            "**Restituer vite et visiblement** : la personnalisation doit produire de la valeur perçue dès les premières sessions, sinon le dépôt s'interrompt avant la masse critique.",
            "**Rendre la personnalisation visible comme accumulation** : « recommandé parce que vous avez aimé X », « votre profil s'est affiné ». La personnalisation invisible sert ; la personnalisation visible sert ET retient.",
          ],
        },
      ],
      takeaways: [
        "La donnée voyage, l'intelligence reste : le modèle entraîné est non portable.",
        "Le coût de sortie est un coût de ré-entraînement (le désert algorithmique).",
        "Collecter en explicite + implicite ; restituer vite ; rendre l'accumulation visible.",
        "La mémoire des assistants IA devient l'actif le moins transportable de tous.",
      ],
    },

    // ── 7-bis.6 ──────────────────────────────────────────
    {
      slug: "lock-in-investissement",
      index: 6,
      ref: "7-bis.6",
      title: "Le lock-in par l'investissement",
      subtitle: "Le sunk cost industrialisé : tout ce que l'abonné a dépensé — temps, effort, argent — pour devenir bon avec le produit.",
      minutes: 9,
      blocks: [
        {
          type: "lead",
          text: "Cette famille capitalise sur l'effort déjà consenti par l'abonné — la forme la plus puissante de sunk cost.",
        },
        {
          type: "list",
          items: [
            "**La courbe d'apprentissage** : la maîtrise d'Adobe, d'Excel, de Figma représente des centaines d'heures — changer d'outil, c'est redevenir débutant (une régression de productivité, souvent identitaire). Lock-in naturel et gratuit. Revers : il rebute les nouveaux — d'où la stratégie des leaders : **l'entrée facile, la profondeur infinie**.",
            "**Les assets créés** : les designs Canva, les sites Webflow, les bases Notion. Cousin de l'historique, mais d'intensité supérieure : l'asset est une œuvre — on ne laisse pas son site web derrière soi. Lock-in naturel, à condition de résister à la tentation de prendre les œuvres en otage (l'export, toujours).",
            "**L'investissement financier dans l'écosystème** : la bibliothèque Steam, l'écosystème Apple. Le sunk cost monétaire pur : chaque euro dépensé plaide pour rester.",
          ],
        },
        {
          type: "callout",
          tone: "fire",
          title: "Les certifications : le seul lock-in qui recrute en retenant",
          text: "HubSpot Academy, Salesforce Trailhead : la certification transforme la maîtrise de votre produit en actif de carrière de l'utilisateur — elle figure sur son CV, a une valeur sur le marché de l'emploi. L'utilisateur certifié n'est plus un client : c'est un investisseur de votre écosystème, qui défendra le choix de l'outil dans chaque entreprise qu'il traversera (le champion fabriqué en série).",
        },
      ],
      takeaways: [
        "La courbe d'apprentissage est un lock-in naturel : entrée facile, profondeur infinie.",
        "Les assets créés sont des œuvres : un switching cost intense — mais l'export reste loyal.",
        "L'investissement dans l'écosystème est du sunk cost monétaire pur.",
        "La certification est le seul lock-in qui recrute en même temps qu'il retient.",
      ],
    },

    // ── 7-bis.7 ──────────────────────────────────────────
    {
      slug: "lock-in-progression",
      index: 7,
      ref: "7-bis.7",
      title: "Le lock-in par la progression et les milestones",
      subtitle: "La famille comportementale : le statut acquis qui serait perdu.",
      minutes: 8,
      blocks: [
        {
          type: "lead",
          text: "Le statut accumulé crée une résistance à l'annulation proportionnelle à sa hauteur : on ne re-gravit pas l'échelle ailleurs.",
        },
        {
          type: "list",
          items: [
            "**Les systèmes de progression** : le streak et les XP Duolingo (400 jours = un actif non portable par définition, le concurrent ne peut pas les créditer), l'ancienneté affichée (« membre depuis 2016 » — le seul actif que même le produit ne peut accélérer : elle ne s'achète qu'en restant).",
            "**Les statuts et paliers de fidélité** : les niveaux qui montent avec la durée (rangs communautaires, avantages d'ancienneté — dont le tarif grandfatheré : « votre prix, tant que vous restez » est un milestone tarifaire).",
          ],
        },
        {
          type: "callout",
          tone: "fire",
          title: "Trois règles pour des milestones qui retiennent",
          text: "Significatif (un accomplissement réel ou un avantage tangible — le badge creux dévalue le système) ; visible (célébré à l'atteinte ET affiché en permanence — le statut qu'on ne voit pas ne retient pas) ; et croissant sans plafond proche (le système terminé cesse de retenir ; les meilleurs ajoutent le maintien — le statut qui se conserve par l'activité retient doublement, par l'acquis et par l'entretien).",
        },
        {
          type: "pitfall",
          text: "La progression gamifiée est le seul lock-in dont le risque marqué est l'addiction — le mécanisme qui retient par la peur de perdre peut capturer au-delà de l'intérêt de l'utilisateur (le streak qui angoisse au lieu de motiver). Le garde-fou : les soupapes (le gel de streak, la pause qui préserve le statut — la flexibilité appliquée aux acquis symboliques).",
        },
      ],
      takeaways: [
        "Le statut acquis crée une résistance proportionnelle : on ne re-gravit pas ailleurs.",
        "L'ancienneté est le seul actif que même le produit ne peut accélérer.",
        "Milestones : significatifs, visibles, croissants sans plafond — avec maintien.",
        "Seul lock-in à risque d'addiction : l'équiper de soupapes (gel, pause).",
      ],
    },

    // ── 7-bis.8 ──────────────────────────────────────────
    {
      slug: "matrice-du-lock-in",
      index: 8,
      ref: "7-bis.8",
      title: "La matrice des stratégies de lock-in",
      subtitle: "Chaque famille évaluée sur l'effort, la puissance et le risque éthique — et la recommandation pour démarrer.",
      minutes: 9,
      blocks: [
        {
          type: "lead",
          text: "La synthèse du module : neuf stratégies, leur effort de construction, leur puissance de rétention, leur risque éthique.",
        },
        {
          type: "table",
          head: ["Stratégie", "Effort", "Puissance", "Risque éthique"],
          rows: [
            ["Historique de données", "Faible", "Élevée", "Faible si export"],
            ["Intégrations workflow", "Moyen", "Très élevée", "Faible"],
            ["Personnalisation algo", "Élevé", "Très élevée", "Faible"],
            ["Réseau et communauté", "Élevé", "Élevée", "Faible"],
            ["Courbe d'apprentissage", "Nul (naturel)", "Moyenne", "Nul"],
            ["Certifications / badges", "Moyen", "Moyenne-élevée", "Faible"],
            ["Assets créés", "Nul (naturel)", "Élevée", "Faible"],
            ["Progression gamifiée", "Moyen", "Moyenne", "Moyen (addiction)"],
            ["Écosystème bundlé", "Élevé", "Très élevée", "Faible"],
            ["Format propriétaire", "Faible", "Élevée", "Élevé sans export"],
          ],
        },
        {
          type: "list",
          items: [
            "**La diagonale des aubaines** : la courbe d'apprentissage et les assets créés sont des lock-ins que le produit génère naturellement (effort nul) — la seule action requise est de ne pas les gâcher (entrée facile, export loyal) et de les rendre visibles.",
            "**La colonne du risque** : une seule ligne franchement rouge — le format propriétaire sans export (à proscrire) — et une orange — la progression gamifiée (à équiper de soupapes). Tout le reste est éthiquement sain par construction, car fondé sur de la valeur accumulée.",
            "**La règle de combinaison** : les lock-ins s'additionnent — les forteresses (Apple, Amazon, Salesforce) en empilent cinq ou six, et les familles se renforcent (l'historique nourrit l'algorithme, la communauté produit des assets, l'écosystème lie le tout).",
          ],
        },
        {
          type: "callout",
          tone: "fire",
          title: "La recommandation solo founder",
          text: "Par ordre de rendement effort/puissance : commencer par l'historique visible (faible effort, rendement immédiat), les assets créés (effort nul si le produit crée), et 1-2 intégrations clés (l'effort moyen au meilleur effet de catégorie). Les familles lourdes (algorithme, réseau, écosystème) viendront avec l'échelle ; les trois premières sont disponibles dès le premier mois.",
        },
        {
          type: "quote",
          text: "À produit égal, le switching cost est la part de marché de demain.",
        },
      ],
      takeaways: [
        "Apprentissage et assets créés sont des aubaines : effort nul, il suffit de ne pas les gâcher.",
        "Une seule ligne rouge (format propriétaire sans export), une orange (gamification).",
        "Les lock-ins s'additionnent et se renforcent : les forteresses en empilent 5-6.",
        "Démarrer par : historique visible, assets créés, 1-2 intégrations clés.",
      ],
    },
  ],
};
