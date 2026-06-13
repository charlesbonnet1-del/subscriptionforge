import type { CourseContent } from "@/lib/content-types";

export const moduleSeven: CourseContent = {
  moduleSlug: "strategies-de-retention",
  hasGames: true,
  hasQuiz: true,
  lessons: [
    // ── 7.1 ───────────────────────────────────────────────
    {
      slug: "engagement-fondement",
      index: 1,
      ref: "7.1",
      title: "L'engagement comme fondement",
      subtitle: "La loi première de la rétention : on ne résilie pas ce qu'on utilise. La rétention se fait dans le produit, par l'habitude.",
      minutes: 9,
      blocks: [
        {
          type: "lead",
          text: "Toutes les corrélations convergent : l'usage hebdomadaire multiplie la rétention (+85 % pour les utilisateurs hebdomadaires), la baisse d'usage est le leading indicator roi, et la subscription guilt n'est que le nom psychologique du non-usage qui dure. La rétention ne se fait pas dans les emails de rétention.",
        },
        { type: "h2", text: "Le DAU/MAU comme thermomètre" },
        {
          type: "keynumbers",
          items: [
            { value: "< 10 %", label: "Usage épisodique" },
            { value: "20-30 %", label: "Excellent (place régulière)" },
            { value: "30 %+", label: "Habitude quotidienne (Duolingo)" },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          text: "Se juger contre la fréquence naturelle de son besoin : pousser un usage quotidien artificiel sur un besoin hebdomadaire fabrique de la notification fatigue, pas de la rétention.",
        },
        { type: "h2", text: "Le Hook Model appliqué à l'abonnement" },
        {
          type: "p",
          text: "Le modèle de Nir Eyal décrit la boucle de formation d'habitude en quatre temps, chacun ayant sa traduction subscription :",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "**Le trigger** : externe d'abord (notification, email — à doser), interne ensuite (l'émotion qui fait penser au produit : l'ennui → le streaming, la question de travail → l'outil). Le but : devenir le réflexe d'une situation récurrente.",
            "**L'action** : la plus simple possible — chaque friction d'entrée tue une session (l'ouverture en un geste, la reprise là où l'on s'était arrêté).",
            "**La récompense variable** : l'ingrédient décisif. La récompense prévisible lasse ; la variable accroche (le feed qui surprend, la reco qui tombe juste). C'est la variabilité qui fait revenir « voir ».",
            "**L'investissement** : l'utilisateur dépose quelque chose qui améliore son prochain passage (données, contenu, progression) — la boucle se referme en construisant le lock-in.",
          ],
        },
        {
          type: "callout",
          tone: "fire",
          title: "Grille d'audit en quatre questions",
          text: "Quel est mon trigger interne ? Mon action est-elle en un geste ? Qu'est-ce qui varie dans ma récompense ? Que dépose l'utilisateur à chaque session ?",
        },
      ],
      takeaways: [
        "On ne résilie pas ce qu'on utilise : la rétention se construit dans le produit, par l'habitude.",
        "Le DAU/MAU se juge contre la fréquence naturelle du besoin.",
        "Hook Model : trigger → action (1 geste) → récompense variable → investissement.",
        "L'investissement referme la boucle en construisant le lock-in.",
      ],
    },

    // ── 7.2 ───────────────────────────────────────────────
    {
      slug: "gamification",
      index: 2,
      ref: "7.2",
      title: "Gamification et rétention",
      subtitle: "Le cas Duolingo : la gamification n'est pas une couche décorative, c'est le système de rétention lui-même.",
      minutes: 9,
      blocks: [
        {
          type: "lead",
          text: "Chez Duolingo, chaque mécanique de jeu est un biais du Module 2 mis en production.",
        },
        {
          type: "list",
          items: [
            "**Le streak** (la série de jours consécutifs) est la pièce maîtresse : de l'aversion à la perte pure (au jour 200, on apprend pour ne pas perdre 200 jours). C'est le sunk cost rendu visible, quotidien et quantifié.",
            "**Les badges et achievements** jalonnent la progression (effet de complétion).",
            "**Les ligues** (classement hebdomadaire) ajoutent la comparaison sociale et la peur de la relégation : une raison hebdomadaire de revenir s'ajoute à la raison quotidienne.",
            "**Duo, la mascotte** incarne le trigger externe avec un ton qui transforme le rappel en complicité.",
          ],
        },
        {
          type: "keynumbers",
          items: [
            { value: "~30 %", label: "DAU/MAU sur un produit d'éducation" },
            { value: "~3 → 9 %", label: "Conversion freemium en 5 ans" },
            { value: "300/trim.", label: "A/B tests permanents" },
          ],
        },
        { type: "h2", text: "Quand ça marche, quand ça échoue" },
        {
          type: "compare",
          left: {
            title: "Conditions de réussite",
            tone: "fire",
            points: [
              "Un usage à vocation fréquente et régulière (apprentissage, fitness, finances, lecture)",
              "Une progression réelle à scénariser (le jeu décore un vrai chemin de valeur)",
              "Un public en posture personnelle (on joue pour soi)",
            ],
          },
          right: {
            title: "Terrains d'échec",
            points: [
              "Le B2B et les outils de travail (gamifier un CRM infantilise)",
              "Les usages naturellement épisodiques (le streak fiscal est une absurdité)",
              "Les publics premium que le ludique fait fuir (signal produit-jouet)",
            ],
          },
        },
        {
          type: "pitfall",
          text: "**L'anti-pattern central : gamifier pour cacher une valeur insuffisante.** La gamification amplifie l'engagement envers une valeur qui existe ; elle ne la remplace pas. Test d'honnêteté : si l'on retirait toute la gamification demain, le produit retiendrait-il encore ? Si non, le chantier n'est pas le jeu — c'est la forever promise (Module 3.1).",
        },
      ],
      takeaways: [
        "La gamification de Duolingo EST son système de rétention : chaque mécanique est un biais en production.",
        "Le streak = aversion à la perte + sunk cost rendus quotidiens et quantifiés.",
        "Conditions : usage fréquent, progression réelle, posture personnelle. Échec en B2B/épisodique.",
        "Ne jamais gamifier pour cacher une valeur insuffisante : le test « si on retire le jeu ? ».",
      ],
    },

    // ── 7.3 ───────────────────────────────────────────────
    {
      slug: "personnalisation",
      index: 3,
      ref: "7.3",
      title: "La personnalisation comme levier",
      subtitle: "« Il me connaît » est l'une des raisons de rester les plus puissantes — parce qu'elle s'auto-renforce.",
      minutes: 10,
      blocks: [
        {
          type: "lead",
          text: "Plus j'utilise, mieux il me connaît ; mieux il me connaît, plus il me sert ; plus il me sert, plus j'utilise — et plus partir coûte (chez le concurrent, tout est à réapprendre). C'est le lock-in algorithmique vu côté valeur.",
        },
        { type: "h2", text: "Trois visages" },
        {
          type: "list",
          items: [
            "**Spotify : la personnalisation comme produit.** Discover Weekly a transformé un catalogue indifférencié en relation unique : le rendez-vous du lundi est une récompense variable de manuel, et chaque écoute améliore la suivante. Wrapped en est le pendant identitaire — un rapport de valeur devenu rituel planétaire, au moment exact des résolutions de janvier. Sur un marché où le catalogue est une commodité, l'algorithme est le moat.",
            "**Stitch Fix : la boucle de données physique.** Chaque retour est une donnée : ce qui est renvoyé enseigne autant que ce qui est gardé. La preuve que la boucle n'est pas réservée au digital — mais ses limites rappellent que la personnalisation améliore l'économie d'un modèle, elle ne corrige pas une économie unitaire fragile.",
            "**Netflix : la personnalisation invisible.** 70-80 % du visionnage provient des recommandations : l'algorithme n'est pas une suggestion, il est l'interface (jusqu'aux vignettes adaptées au profil). Sa mission : que « il n'y a rien à regarder » ne soit jamais prononcé — une réponse en moins de 90 secondes par session.",
          ],
        },
        {
          type: "callout",
          tone: "fire",
          title: "Construire sa boucle (sans être un géant)",
          text: "Collecter explicitement (l'onboarding qui demande trois goûts vaut des semaines d'inférence) ET implicitement (le comportement) ; restituer vite (« recommandé pour vous parce que… » — la personnalisation invisible ne retient pas, l'utilisateur doit voir qu'il est connu) ; rendre l'accumulation tangible (« votre profil s'affine »). Même un produit simple a sa version minimale : le tri par pertinence, l'email selon l'usage, la reprise contextuelle.",
        },
      ],
      takeaways: [
        "La personnalisation s'auto-renforce : usage → connaissance → service → usage → coût de départ.",
        "Spotify : sur un catalogue-commodité, l'algorithme est le moat (Discover Weekly, Wrapped).",
        "Netflix : la reco EST l'interface (70-80 % du visionnage) — l'anti-churn en production.",
        "Restituer la personnalisation visiblement et rendre le dépôt tangible pour verrouiller.",
      ],
    },

    // ── 7.4 ───────────────────────────────────────────────
    {
      slug: "communaute",
      index: 4,
      ref: "7.4",
      title: "La communauté comme moat",
      subtitle: "Peloton vend un vélo et un abonnement — et a découvert que son vrai produit était une appartenance.",
      minutes: 9,
      blocks: [
        {
          type: "lead",
          text: "On résilie un service ; on ne quitte pas ses pairs. La communauté transforme la résiliation en acte social coûteux.",
        },
        { type: "h2", text: "Les mécaniques Peloton" },
        {
          type: "list",
          items: [
            "**Les leaderboards en direct** : pédaler « avec » des milliers d'autres, retrouver les mêmes noms.",
            "**Les cours live comme rendez-vous** : l'horaire partagé recrée le cours collectif (engagement par le calendrier social).",
            "**Les instructeurs devenus figures** : on suit son coach (la relation parasociale comme ancre).",
            "**Les communautés tribales auto-organisées** : groupes par affinités, défis entre membres.",
            "**Les milestones célébrés** : la 100ᵉ session fêtée en direct (reconnaissance publique comme récompense).",
          ],
        },
        {
          type: "keynumbers",
          items: [
            { value: "+30 %", label: "Rétention des membres actifs en communauté" },
            { value: "~1 %", label: "Churn mensuel de l'abonnement connecté" },
          ],
        },
        { type: "h2", text: "Construire (vraiment) une communauté" },
        {
          type: "list",
          ordered: true,
          items: [
            "**Une identité partagée réelle** : la communauté naît d'un « nous » (une pratique, une passion), pas d'un forum ouvert sous un produit.",
            "**Une animation incarnée et durable** : au début, quelqu'un anime, accueille, relance — un métier et un budget, pas un plugin Discord.",
            "**Des rituels** : le rendez-vous hebdo, le défi mensuel — le rituel est à la communauté ce que le trigger est à l'habitude.",
            "**La mise en relation des membres entre eux** : la communauté en étoile (tous parlent à la marque) n'en est pas une — la valeur réseau naît des liens membre-membre.",
          ],
        },
        {
          type: "pitfall",
          text: "La communauté fantôme — le canal moribond, les questions sans réponse — est pire que pas de communauté : elle expose publiquement le désengagement. Ne lancer que si l'on peut la faire vivre ; sinon commencer plus petit (le rendez-vous éditorial) et laisser la demande précéder l'infrastructure.",
        },
      ],
      takeaways: [
        "On résilie un service, on ne quitte pas ses pairs : +30 % de rétention en communauté.",
        "Mécaniques : leaderboards, rendez-vous live, figures, tribus, milestones célébrés.",
        "Conditions : identité partagée, animation incarnée, rituels, liens membre-membre.",
        "La communauté fantôme est pire que rien : ne lancer que si on peut la faire vivre.",
      ],
    },

    // ── 7.5 ───────────────────────────────────────────────
    {
      slug: "save-flows",
      index: 5,
      ref: "7.5",
      title: "Save flows et offres de rétention",
      subtitle: "La dernière conversation de la relation : 15 à 30 % de résiliations déflectées par une save flow bien conçue, contre zéro pour le bouton qui résilie sec.",
      minutes: 12,
      blocks: [
        {
          type: "lead",
          text: "La save flow s'enclenche quand l'abonné clique « résilier ». Trois actes, dans un ordre non négociable.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "**La question d'abord** : « qu'est-ce qui motive votre départ ? » (la survey en un clic). C'est le routeur de tout ce qui suit — sans elle, on sert la même contre-offre à des départs sans rien en commun (le discount à qui part pour un bug dit « votre problème nous indiffère, voulez-vous une remise ? »).",
            "**L'arbre de décision** : chaque raison route vers sa réponse (voir tableau).",
            "**La sortie digne** : résiliation en un clic, confirmation claire (date de fin, sort des données), remerciement sans pathos, et la graine du retour (« votre historique vous attend »).",
          ],
        },
        {
          type: "table",
          head: ["Raison déclarée", "Réponse de la save flow"],
          rows: [
            ["Trop cher / budget", "Downgrade d'abord, puis pause, puis — en dernier — discount"],
            ["Je n'utilise plus assez", "Pause, ou rappel de valeur + réengagement guidé"],
            ["Besoin suspendu (voyage, saison)", "Pause — la réponse reine des causes temporelles"],
            ["Problème / bug", "Résolution immédiate (contact, geste) — jamais une remise"],
            ["Fonctionnalité manquante", "Roadmap honnête + consentement de recontact"],
            ["Je passe à un concurrent", "Laisser partir avec élégance + win-back armé"],
            ["Besoin terminé", "Sortie fluide + porte ouverte"],
          ],
        },
        { type: "h2", text: "Les quatre offres, par ordre de préférence économique" },
        {
          type: "list",
          items: [
            "**La pause** — préserve tout (voir cours suivant).",
            "**Le downgrade** — préserve la relation et une part du revenu.",
            "**Le cadeau** (mois offert, upgrade temporaire) — puissant sur les départs émotionnels et les fidèles en friction (la réciprocité).",
            "**Le discount** — dernier à dessein : le plus coûteux (baisse l'ARPU durablement), le plus addictif (la base apprend que menacer de partir paie), le plus trompeur (le sauvé par remise sans cause traitée repart en 60-90 jours).",
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "Une interception, jamais une obstruction",
          text: "Toute save flow se mesure à la rétention à 90 jours des sauvés, jamais au taux de déflection brut. Et chaque écran doit comporter l'option « continuer ma résiliation » visible (résiliation en quelques clics désormais obligatoire — click-to-cancel). La save flow qui retient par l'épuisement gagne un mois et perd un client, un avis et un peu de la marque.",
        },
      ],
      takeaways: [
        "Trois actes : la question d'abord, l'arbre de décision, la sortie digne.",
        "Quatre offres par préférence : pause > downgrade > cadeau > discount (le plus coûteux).",
        "Se mesurer à la rétention à 90 jours des sauvés, pas au taux de déflection brut.",
        "Intercepter, jamais obstruer : « continuer ma résiliation » toujours visible.",
      ],
    },

    // ── 7.5bis Pause ──────────────────────────────────────
    {
      slug: "la-pause",
      index: 6,
      ref: "7.5+",
      title: "La pause comme stratégie systématique",
      subtitle: "L'offre de rétention au meilleur rapport efficacité/coût de tout l'arsenal — et la moins pratiquée relativement à ses résultats.",
      minutes: 9,
      blocks: [
        {
          type: "lead",
          text: "« Résilier » est une décision définitive et identitaire ; « suspendre » est réversible et contextuelle. La pause préserve tout : moyen de paiement, historique, identité, relation.",
        },
        {
          type: "keynumbers",
          items: [
            { value: "40-60 %", label: "Réactivation après pause 1-3 mois (Netflix)" },
            { value: "×4", label: "Adoption de la pause en un an" },
            { value: "> 50 %", label: "Cible de réactivation à 3 mois" },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          text: "La pause domine la résiliation dans tous les cas où la raison est temporelle. Elle ne traite pas les causes structurelles (produit décevant, besoin éteint) : la proposer à un déçu est un report, pas un save.",
        },
        { type: "h2", text: "Le design d'une offre de pause" },
        {
          type: "list",
          items: [
            "**La durée** : des paliers (1 / 2 / 3 mois, jusqu'à 6 pour les saisonnalités longues) avec une borne — la pause illimitée est une résiliation qui ne dit pas son nom.",
            "**La communication pendant** : le silence radio est une erreur (l'abonné pausé s'éloigne) — un contact léger à mi-pause, puis l'annonce de reprise à J-7.",
            "**La réactivation automatique** à l'échéance — c'est elle qui fait l'économie du dispositif (la réactivation manuelle réactive deux fois moins), annoncée loyalement à la souscription et rappelée à J-7.",
            "**La reprise enrichie** : accueillir le revenant (« voici ce que vous avez manqué ») pour relancer l'usage dès le premier jour.",
          ],
        },
        {
          type: "callout",
          tone: "fire",
          title: "La pause proactive — le raffinement supérieur",
          text: "Ne pas attendre le clic « résilier ». Aux signaux (inactivité + renouvellement annuel approchant, saisonnalité connue), proposer la pause avant que l'abonné ne pense résiliation. Double effet : elle désamorce la subscription guilt avant qu'elle ne mûrisse, et c'est l'un des gestes de confiance les plus marquants — l'opérateur qui propose de moins facturer est cru pour toujours.",
        },
      ],
      takeaways: [
        "La pause préserve tout et bat la résiliation sur toute cause temporelle (40-60 % de réactivation).",
        "Designer : paliers bornés, communication pendant, réactivation automatique loyale, reprise enrichie.",
        "La réactivation automatique fait l'économie du dispositif (×2 vs manuelle).",
        "La pause proactive désamorce la guilt et installe une confiance durable.",
      ],
    },

    // ── 7.6 ───────────────────────────────────────────────
    {
      slug: "downgrade-strategique",
      index: 7,
      ref: "7.6",
      title: "Le downgrade stratégique",
      subtitle: "La meilleure alternative à la perte totale : un abonné à 9 € qui reste vaut infiniment plus qu'un abonné à 19 € qui part.",
      minutes: 8,
      blocks: [
        {
          type: "lead",
          text: "Le réflexe spontané voit le downgrade comme une défaite (de la contraction). Le regard d'opérateur le voit pour ce qu'il est dans un contexte de départ : l'abonné qui reste garde son ancienneté, son historique, son moyen de paiement, sa ré-upgradabilité — et ne grossit pas la cohorte des ex à reconquérir.",
        },
        {
          type: "callout",
          tone: "info",
          text: "Le downgrade volontaire est un thermomètre honnête : il dit exactement où la valeur perçue s'est arrêtée — une donnée que le churn sec ne livre jamais.",
        },
        { type: "h2", text: "Quand le proposer" },
        {
          type: "list",
          items: [
            "**Dans la save flow**, dès que la raison est le prix — avant le discount (downgrade → pause → discount : il préserve l'intégrité tarifaire là où le discount l'érode).",
            "**En proactif**, aux signaux d'inadéquation (l'abonné Pro qui n'utilise que le Starter) : « votre usage correspond au plan X » — contre-intuitif et redoutablement fidélisant.",
            "**Dans les moments de vie** : le downgrade est la contre-offre naturelle des difficultés financières.",
          ],
        },
        {
          type: "callout",
          tone: "fire",
          title: "Présenter sans dévaloriser",
          text: "Jamais « passez au plan inférieur » — toujours l'ajustement à l'usage : « le plan X couvre ce que vous utilisez ; vous pourrez revenir à tout moment ». Trois règles de copy : nommer ce que l'abonné garde (pas la liste des pertes), garantir la réversibilité en un clic (la peur du downgrade est celle du non-retour), et ne pas punir (effacer l'historique transforme une rétention en expulsion).",
        },
        {
          type: "p",
          text: "**La re-upgrade campaign** : le downgrade n'est pas une destination, c'est une salle d'attente. Le suivi des downgradés alimente une campagne déclenchée aux bons signaux — la limite du petit plan atteinte (la frustration productive rejoue), le retour à meilleure fortune, l'événement produit. Le ton : la porte ouverte, jamais la relance insistante (le downgradé harcelé finit le chemin qu'on lui avait évité : dehors).",
        },
      ],
      takeaways: [
        "Un abonné downgradé qui reste vaut infiniment plus qu'un abonné plein tarif qui part.",
        "Save flow : downgrade avant discount (il préserve l'intégrité tarifaire).",
        "Présenter en ajustement à l'usage, garantir la réversibilité, ne jamais punir.",
        "Le downgrade est une salle d'attente : re-upgrade campaign aux bons signaux.",
      ],
    },

    // ── 7.7 ───────────────────────────────────────────────
    {
      slug: "reengagement-zombies",
      index: 8,
      ref: "7.7",
      title: "Réengagement : réveiller les zombies",
      subtitle: "Le zombie paie mais n'utilise plus. Son churn est écrit — il ne manque que l'événement de réveil. Provoquer la décision soi-même.",
      minutes: 10,
      blocks: [
        {
          type: "lead",
          text: "Statut ambivalent : ressource (il paie, sans coût ni plainte) et risque (son churn est écrit). Le plus fréquent événement de réveil est le renouvellement annuel — le zombie qui découvre 120 € pour un service qu'il n'ouvre plus churne avec ressentiment : le pire churn qui soit, irrécupérable et bruyant.",
        },
        {
          type: "quote",
          text: "Rappeler au zombie qu'il paie peut déclencher une résiliation… ou une renaissance, et les deux valent mieux que l'explosion au renouvellement.",
        },
        { type: "h2", text: "La séquence de réengagement idéale" },
        {
          type: "list",
          ordered: true,
          items: [
            "**Email 1 — « Vous nous manquez. »** Chaleureux, court, sans pression ni culpabilisation (le zombie culpabilise déjà). La valeur rappelée en une phrase + un point d'entrée simple. Pas d'offre, pas de chiffre.",
            "**Email 2 — Le neuf depuis votre départ.** Casser l'image figée : « la suite de ce que vous aimiez » réveille plus que « ce que vous avez raté » générique.",
            "**Email 3 — L'accès guidé.** La main tendue : « venez essayer [cette fonctionnalité] en 2 minutes » — l'aha moment rejoué en cours de vie.",
            "**Email 4 (optionnel) — L'ajustement plutôt que l'abandon.** Pour les non-réveillés : pause ou downgrade avec franchise. L'email le plus important : il transforme le churn explosif programmé en décision accompagnée.",
          ],
        },
        {
          type: "callout",
          tone: "fire",
          title: "Segmenter et synchroniser",
          text: "Les inactifs récents (≈30 j) : séquence légère, ton « on reprend ? ». Les inactifs profonds (90 j+) : séquence complète, email 4 systématique, acceptation qu'une partie partira (c'est le but : avant le renouvellement). Le timing critique : J-30/J-45 du renouvellement, jamais après — après le prélèvement, la même séquence devient une provocation.",
        },
      ],
      takeaways: [
        "Le zombie est un churn écrit : provoquer la décision avant l'explosion au renouvellement.",
        "Séquence graduée de la valeur vers l'ajustement (emails 1→4), jamais l'inverse.",
        "L'email 4 (pause/downgrade) transforme le churn explosif en décision accompagnée.",
        "Synchroniser à J-30/J-45 du renouvellement, jamais après le prélèvement.",
      ],
    },

    // ── 7.8 ───────────────────────────────────────────────
    {
      slug: "win-back",
      index: 9,
      ref: "7.8",
      title: "Win-back : récupérer les perdus",
      subtitle: "Le canal le plus sous-exploité : ~1 nouvel abonnement sur 4 est une réactivation. La fenêtre chaude : 90 jours.",
      minutes: 11,
      blocks: [
        {
          type: "lead",
          text: "Le win-back cumule des avantages que l'acquisition n'aura jamais : la cible connaît le produit (zéro coût d'éducation), a déjà payé (disposition prouvée), est identifiée et joignable, et son coût de contact est marginal. Le « marché des ex » est l'un des plus grands canaux du métier — et la plupart le laissent en friche.",
        },
        {
          type: "keynumbers",
          items: [
            { value: "80 %", label: "Des win-backs réussis ont lieu sous 90 jours" },
            { value: "~1/4", label: "Des nouveaux abonnements sont des réactivations" },
            { value: "< CAC", label: "Le win-back doit coûter moins que l'acquisition" },
          ],
        },
        { type: "h2", text: "Qui est récupérable — et qui ne l'est pas" },
        {
          type: "compare",
          left: {
            title: "Win-backable",
            tone: "fire",
            points: [
              "Parti pour une raison circonstancielle (prix, besoin suspendu, moment de vie)",
              "A essayé un concurrent (la lune de miel passera)",
              "Relation à la valeur intacte ou réparable",
            ],
          },
          right: {
            title: "Perdu (ne pas solliciter)",
            points: [
              "La promesse fondamentale n'a pas été tenue",
              "Le zombie explosé au renouvellement, le piégé d'une save flow obstructive",
              "Le jamais-activé parti à M1 (acquisition ratée, pas win-back)",
            ],
          },
        },
        { type: "h2", text: "La séquence de win-back optimale" },
        {
          type: "list",
          items: [
            "**J+3** — « Nous avons remarqué votre départ. » Relationnel, sans offre : piège le remords immédiat (une part des résiliations sont impulsives et se rétractent dans la semaine).",
            "**J+14** — Ce qui a changé : périmer les raisons du départ (la roadmap honorée, les correctifs, le contenu sorti dans ses goûts).",
            "**J+30** — L'offre de réactivation : spécifique et datée (mois offert, retour au tarif d'origine pour les churns de hausse).",
            "**J+60** — La dernière tentative, ou la bascule en « gardons le contact » (newsletter) — le lien à coût nul qui laisse le retour se faire au rythme du besoin.",
          ],
        },
        {
          type: "pitfall",
          text: "Le calibrage des incentives est la tension du canal : trop généreux, on éduque au churn tactique (« résilie, tu auras -50 % ») ; trop faible, on ne franchit pas l'inertie. Rester sous la valeur d'un CAC, préférer les incentives en nature et bornées, réserver les offres fortes aux segments à forte LTV prouvée.",
        },
        {
          type: "callout",
          tone: "fire",
          title: "Le juge de paix",
          text: "Les clients récupérés se retiennent souvent mieux que les nouveaux (ils reviennent en connaissance de cause — le promise-delivery gap est nul). Le win-back n'est pas un canal de seconde zone : c'est l'un des meilleurs canaux d'acquisition du portefeuille. En B2B, c'est le commercial en reconquête (trigger events, cycles budgétaires) plutôt que la séquence automatique.",
        },
      ],
      takeaways: [
        "Le win-back travaille une fenêtre chaude de 90 jours, en séquence automatique par churn.",
        "Récupérable = raison circonstancielle ; perdu = promesse non tenue ou confiance rompue.",
        "Séquence J+3 (relationnel) → J+14 (périmer les raisons) → J+30 (offre datée) → J+60.",
        "Les récupérés se retiennent souvent mieux que les nouveaux : un canal de premier ordre.",
      ],
    },

    // ── 7.9 + 7.10 ────────────────────────────────────────
    {
      slug: "communication-proactive-dunning",
      index: 10,
      ref: "7.9-7.10",
      title: "Communication proactive & dunning",
      subtitle: "Entretenir la valeur avant tout signal, et récupérer le churn involontaire — le levier au meilleur ROI du métier.",
      minutes: 12,
      blocks: [
        {
          type: "lead",
          text: "La communication proactive intervient avant tout signal : elle entretient la valeur perçue chez les abonnés qui vont bien, pour qu'ils continuent. C'est l'assurance-vie de la base — son ROI se voit dans les cohortes qui s'aplatissent et les renouvellements qui passent sans bruit.",
        },
        { type: "h2", text: "Les rapports de valeur périodiques" },
        {
          type: "p",
          text: "Le récapitulatif qui rend tangible la valeur accumulée — « voici ce que vous avez accompli / économisé ce mois-ci ». La subscription guilt naît de la valeur **oubliée** autant que de la valeur absente : le rapport recharge la justification sans demander le moindre effort (l'arme parfaite pour le Passif Satisfait). Références : Duolingo (le récap de streak), Spotify (Wrapped), Grammarly (« vous avez corrigé Y erreurs, plus productif que Z % »).",
        },
        {
          type: "callout",
          tone: "fire",
          title: "La grammaire commune + la règle de timing",
          text: "Des chiffres personnels (les accomplissements de l'abonné, pas les nouveautés du produit), une comparaison flatteuse mais honnête, un ton de célébration. Et la discipline n°1 : rendre la valeur visible AVANT chaque renouvellement — le rapport annuel qui précède de deux semaines le prélèvement est l'anti-zombie structurel : l'abonné ne découvre pas son prélèvement, il le valide.",
        },
        {
          type: "p",
          text: "**Le reste de la panoplie** : les emails de milestones (J+30, J+90, J+365 — l'anniversaire d'abonnement célébré), les newsletters d'usage (« le meilleur de ce que vous avez raté » — l'étage doux avant la séquence zombie), et les alertes d'usage (« vous approchez de votre limite » — la frustration productive qui prévient le bill shock et ouvre la conversation d'upgrade).",
        },
        { type: "h2", text: "Le dunning : la chasse au churn involontaire" },
        {
          type: "keynumbers",
          items: [
            { value: "20-40 %", label: "Du churn est involontaire" },
            { value: "60-70 %", label: "Des échecs sont des soft declines réessayables" },
            { value: "50-70 %", label: "Récupération sur les soft declines (bons dispositifs)" },
          ],
        },
        {
          type: "p",
          text: "Le dunning est de la rétention de plomberie, sans psychologie, au ROI mécanique — le premier chantier de tout business qui n'en a pas. **La mécanique en deux étages :**",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "**Les retries intelligents** (invisibles) : réessayer au bon moment — début de mois et dates de paie (le « fonds insuffisants » est un problème de calendrier), espacement croissant (J+1, J+3, J+5, J+7), et l'account updater (mise à jour automatique des cartes expirées).",
            "**La séquence de communication** (J0 → J+21) : J0 notification dédramatisée + lien direct sans login, J+3 rappel avec accès maintenu, J+7 échéance honnête, J+14 multi-canal, J+21 suspension propre (données conservées) + bascule en win-back.",
          ],
        },
        {
          type: "pitfall",
          text: "Le ton est décisif : l'abonné n'a rien fait de mal (la majorité des échecs sont des accidents bancaires). Tout vocabulaire de recouvrement (« régularisez », « sous peine de ») insulte un client fidèle et fabrique du churn volontaire par vexation. Et la continuité de service pendant la fenêtre : couper au premier échec transforme un accident de carte en interruption vécue — l'abonné coupé règle moins volontiers.",
        },
        {
          type: "callout",
          tone: "fire",
          title: "Le cas Spotify : le dunning bienveillant",
          text: "À l'échec persistant, l'abonné Premium n'est pas suspendu — il est downgradé vers le gratuit : aucune interruption (la musique continue, avec pubs), la dégradation se fait sentir d'elle-même (la frustration productive recyclée en dunning), et la réactivation reste à un clic. La leçon transposable : concevoir la sortie de dunning comme un état dégradé réversible plutôt qu'une porte fermée (le mode lecture seule d'un SaaS) — garder la relation vivante pour que le retour soit une formalité.",
        },
      ],
      takeaways: [
        "La communication proactive entretient la valeur avant tout signal : se planifier sur les renouvellements.",
        "Le rapport de valeur pré-renouvellement est l'anti-zombie structurel (chiffres personnels, célébration).",
        "Le dunning est le levier au meilleur ROI : retries intelligents + séquence J0-J+21 au ton dédramatisé.",
        "Concevoir la sortie de dunning comme un état dégradé réversible (Spotify) pour garder la relation.",
      ],
    },
  ],
};
