// Quiz notés sur 20. Chaque question vaut un poids ; le score est ramené sur 20.
// Volontairement exigeants : l'apprenant doit sentir qu'il n'a pas payé pour du vide.

export type QuizQuestion = {
  id: number;
  prompt: string;
  options: string[];
  correct: number; // index
  explain: string;
};

export type Quiz = {
  moduleSlug: string;
  title: string;
  passMark: number; // /20
  questions: QuizQuestion[];
};

const module1: Quiz = {
  moduleSlug: "economie-de-l-abonnement",
  title: "Quiz — L'économie de l'abonnement",
  passMark: 14,
  questions: [
    {
      id: 1,
      prompt:
        "Un abonné paie 25 €/mois ; le churn mensuel est de 5 %. Quelle est sa LTV simple (ARPU ÷ churn) ?",
      options: ["125 €", "500 €", "750 €", "1 250 €"],
      correct: 1,
      explain: "25 ÷ 0,05 = 500 € (durée de vie moyenne 1 ÷ 0,05 = 20 mois × 25 €).",
    },
    {
      id: 2,
      prompt: "Un abonnement annuel de 240 € encaissé en janvier compte pour combien de MRR ?",
      options: [
        "240 € en janvier",
        "20 € chaque mois",
        "240 € lissés sur le trimestre",
        "0 € : l'annuel n'entre pas dans le MRR",
      ],
      correct: 1,
      explain:
        "On normalise au mois : 240 ÷ 12 = 20 € de MRR par mois, jamais 240 € le mois de l'encaissement.",
    },
    {
      id: 3,
      prompt: "Lequel de ces revenus doit être EXCLU du MRR ?",
      options: [
        "Un add-on récurrent à 5 €/mois",
        "Un plan mensuel à 19 €",
        "Des frais de setup uniques de 500 €",
        "Un abonnement annuel normalisé",
      ],
      correct: 2,
      explain:
        "Règle absolue : si le revenu ne se représente pas contractuellement le mois prochain, il n'est pas dans le MRR. Le setup est du one-shot.",
    },
    {
      id: 4,
      prompt:
        "Deux business affichent +10 de MRR net ce mois. A : +50 new / −40 churn. B : +12 new / −2 churn. Que conclure ?",
      options: [
        "Ils sont équivalents : même MRR net",
        "A est plus sain car il acquiert davantage",
        "B est bien plus sain : son churn est maîtrisé",
        "Impossible de trancher sans le CAC",
      ],
      correct: 2,
      explain:
        "C'est le MRR movement, pas le MRR net, qui dit la vérité. A est un seau percé ; B empile durablement.",
    },
    {
      id: 5,
      prompt:
        "Une app a 1 000 000 d'utilisateurs, dont 30 000 payants à 10 €/mois. Quels sont l'ARPU et l'ARPPU ?",
      options: [
        "ARPU 10 € / ARPPU 0,30 €",
        "ARPU 0,30 € / ARPPU 10 €",
        "ARPU 0,30 € / ARPPU 0,30 €",
        "ARPU 10 € / ARPPU 10 €",
      ],
      correct: 1,
      explain:
        "ARPU = 300 000 € ÷ 1 000 000 = 0,30 € (monétisation de l'audience). ARPPU = 10 € (pricing des payants). Les confondre mène à des comparaisons absurdes.",
    },
    {
      id: 6,
      prompt: "Un NRR de 92 % signifie le plus probablement :",
      options: [
        "Une croissance endogène saine",
        "Un profil exceptionnel justifiant un haut multiple",
        "Un problème structurel : la base existante se contracte",
        "Que le business n'acquiert aucun nouveau client",
      ],
      correct: 2,
      explain:
        "Sous 100 %, les clients existants rapportent moins qu'il y a un an : churn + contraction dépassent l'expansion. Sous 90 %, alerte rouge.",
    },
    {
      id: 7,
      prompt: "Quel archétype présente le churn mensuel typiquement le plus élevé ?",
      options: ["SaaS enterprise", "Box physique de curation", "Marketplace double-face (pro)", "Accès à un service"],
      correct: 1,
      explain:
        "Les box de curation tournent à 10-15 % mensuel, avec ~50 % des résiliations dans les 90 premiers jours. Le SaaS enterprise est à l'opposé (0,5-2 %).",
    },
    {
      id: 8,
      prompt: "Dans un modèle usage-based pur, le churn classique est principalement remplacé par :",
      options: ["L'expansion", "La reactivation", "La contraction", "Le logo churn"],
      correct: 2,
      explain:
        "Le client ne résilie pas : il consomme moins. Pas d'événement à intercepter, juste une courbe qui s'affaisse. Le NRR devient la métrique reine.",
    },
    {
      id: 9,
      prompt: "Calculer son CAC « honnêtement » implique d'y inclure :",
      options: [
        "Uniquement les dépenses publicitaires",
        "Les dépenses pub + commerciales + salaires et outils des équipes d'acquisition",
        "Le coût du produit livré",
        "Les remboursements et impayés",
      ],
      correct: 1,
      explain:
        "Le CAC limité à la pub sous-estime le vrai coût de 30 à 60 % dès qu'il y a une équipe. Le mot important est « complet ».",
    },
    {
      id: 10,
      prompt: "Le freemium est avant tout :",
      options: [
        "Une stratégie d'acquisition",
        "Une stratégie de conversion",
        "Une obligation légale de transparence",
        "Un synonyme de free trial",
      ],
      correct: 1,
      explain:
        "Le gratuit attire, mais c'est la conversion free → payant qui fait le business. Pertinent seulement si le coût du gratuit est quasi nul et le marché très large.",
    },
  ],
};

const module2: Quiz = {
  moduleSlug: "psychologie-de-l-abonne",
  title: "Quiz — Psychologie de l'abonné",
  passMark: 14,
  questions: [
    {
      id: 1,
      prompt: "Pourquoi un free trial donnant accès à TOUTES les fonctionnalités est-il psychologiquement puissant ?",
      options: [
        "Il réduit le coût marginal du produit",
        "Il fait posséder un niveau de service dont l'expiration sera vécue comme une perte (endowment)",
        "Il augmente le prix d'ancrage",
        "Il supprime la douleur de payer",
      ],
      correct: 1,
      explain:
        "L'effet de possession : dès qu'on possède un niveau de service, le perdre fait plus mal que ne jamais l'avoir eu. C'est la logique poussée à son terme par le reverse trial.",
    },
    {
      id: 2,
      prompt: "Dans le cas Ariely / The Economist, à quoi sert l'option « print seul » à 125 $ que personne ne choisit ?",
      options: [
        "À ancrer le prix le plus bas",
        "À tester la sensibilité au prix",
        "C'est un leurre (option dominée) qui fait basculer le choix vers le bundle",
        "À segmenter les Chasseurs de valeur",
      ],
      correct: 2,
      explain:
        "Le leurre fait passer la sélection du bundle de 32 % à 84 %. Une option dominée bien placée peut augmenter le plan cible de ~40 %.",
    },
    {
      id: 3,
      prompt: "Une perte pèse psychologiquement environ combien de fois plus qu'un gain équivalent ?",
      options: ["1,2 fois", "2 fois", "5 fois", "10 fois"],
      correct: 1,
      explain:
        "Kahneman & Tversky : ~2×. D'où « économisez 20 % » (gain à saisir, donc perte si on ne le saisit pas) plutôt que « payez X € de moins ».",
    },
    {
      id: 4,
      prompt: "Pourquoi l'inertie est-elle dangereuse plutôt que rassurante ?",
      options: [
        "Elle augmente le coût du support",
        "Ce n'est pas de la rétention mais de la dette de churn qui se paie d'un coup à un événement de réveil",
        "Elle fausse le calcul du CAC",
        "Elle réduit le NPS mécaniquement",
      ],
      correct: 1,
      explain:
        "L'abonné inerte n'a pas décidé de rester, il a différé son départ. La dette se paie en vagues brutales et presque irrécupérables (sentiment de s'être fait avoir).",
    },
    {
      id: 5,
      prompt: "Un abonné part pour cause de bug non résolu. Quelle réponse est la PIRE sur la page d'annulation ?",
      options: [
        "Lui demander ce qui motive son départ",
        "Lui proposer immédiatement un discount de 30 %",
        "Lui proposer une réparation humaine du problème",
        "Le laisser partir proprement",
      ],
      correct: 1,
      explain:
        "Un discount proposé à quelqu'un qui part pour un bug est presque insultant : comprendre AVANT d'offrir. Le déclencheur (friction) appelle une réparation, pas un rabais.",
    },
    {
      id: 6,
      prompt: "Quel profil porte principalement la « dette de churn » d'une base ?",
      options: ["Le Super-User", "Le Passif Satisfait", "L'Opportuniste", "L'Identitaire"],
      correct: 1,
      explain:
        "Le Passif Satisfait (30-50 % de la base) reste par inertie : sa rétention est réelle tant qu'elle n'est pas testée par un événement de réveil.",
    },
    {
      id: 7,
      prompt: "Quelle est la signature comportementale d'un zombie subscriber ?",
      options: [
        "Plaintes fréquentes + usage élevé",
        "Baisse d'engagement + paiement qui continue",
        "Downgrades répétés + emails de promo ouverts",
        "NPS élevé + ancienneté faible",
      ],
      correct: 1,
      explain:
        "Il paie mais n'utilise plus. Invisible au MRR (15-30 % d'une base), il churne au renouvellement annuel. Agir 30-45 j AVANT, jamais après.",
    },
    {
      id: 8,
      prompt: "Face à un signal de difficulté financière (échecs de paiement, désabonnements premium), quelle réponse est adaptée ?",
      options: [
        "Un argumentaire produit rappelant la valeur",
        "Une pause ou un tarif solidaire temporaire",
        "Une hausse de prix repoussée",
        "Un upsell vers l'annuel",
      ],
      correct: 1,
      explain:
        "La valeur perçue est intacte, seul le budget a changé : les offres de circonstance (pause, downgrade, tarif réduit) — jamais l'argumentaire produit, qui tombe à côté.",
    },
    {
      id: 9,
      prompt: "Quelle variable du support est la plus corrélée à la satisfaction ?",
      options: [
        "Le temps de résolution complète",
        "Le nombre de tickets traités",
        "Le temps de première réponse",
        "Le taux d'escalade",
      ],
      correct: 2,
      explain:
        "Le temps de première réponse — plus que la résolution complète — car c'est lui qui dit à l'abonné « vous existez pour nous ». Un ticket mal résolu = churn ×2 à ×4.",
    },
    {
      id: 10,
      prompt: "Un abonné se plaint : « c'est trop cher pour ce que c'est ». Quel est le mauvais réflexe ?",
      options: [
        "Engager une conversation de valeur",
        "Comprendre son usage réel",
        "Accorder immédiatement un discount",
        "Proposer un downgrade adapté",
      ],
      correct: 2,
      explain:
        "Le discount répond à côté : l'abonné dit que la valeur perçue est trop basse, pas que le prix est trop haut. Et il éduque la base à se plaindre pour obtenir des remises.",
    },
  ],
};

const module3: Quiz = {
  moduleSlug: "design-du-modele",
  title: "Quiz — Design du modèle",
  passMark: 14,
  questions: [
    {
      id: 1,
      prompt: "Qu'est-ce qu'une « forever promise » selon Baxter ?",
      options: [
        "La liste des fonctionnalités du produit",
        "Le résultat continu que l'abonné achète, au service duquel le produit évolue",
        "La garantie de remboursement à vie",
        "Le prix bloqué pour toujours",
      ],
      correct: 1,
      explain:
        "Ce n'est ni le produit (qui change) ni la feature (qui sera copiée) : c'est le bénéfice durable. Netflix promet « toujours quelque chose de bien à regarder ».",
    },
    {
      id: 2,
      prompt: "Un générateur de CV ponctuel passe en abonnement mensuel. Conséquence la plus probable ?",
      options: [
        "Une LTV élevée grâce au récurrent",
        "Un churn structurel de 15-25 % mensuel que rien ne réparera",
        "Une conversion freemium de 8 %",
        "Un NRR supérieur à 100 %",
      ],
      correct: 1,
      explain:
        "Confondre « utile une fois » et « indispensable en continu » est l'erreur n°1 : un problème résolu cesse de payer. Issues : à l'acte, crédits, ou étendre vers la récurrence.",
    },
    {
      id: 3,
      prompt: "Pourquoi trois plans convertissent-ils ~1,4× mieux que deux ?",
      options: [
        "Parce qu'ils coûtent moins cher à opérer",
        "Parce qu'ils activent simultanément ancrage, compromis et accessibilité",
        "Parce qu'ils réduisent le churn involontaire",
        "Parce qu'ils suppriment le paradoxe du choix",
      ],
      correct: 1,
      explain:
        "Trois prix créent un système de comparaison interne autosuffisant. Au-delà de quatre, le paradoxe du choix s'installe (l'absence de choix).",
    },
    {
      id: 4,
      prompt: "Selon quel critère découper les fonctionnalités entre les tiers ?",
      options: [
        "Selon l'effort technique qu'elles ont demandé",
        "Selon la valeur pour le client, à des frontières qui suivent ses moments de croissance",
        "Selon leur ordre de développement",
        "Selon le coût d'infrastructure de chacune",
      ],
      correct: 1,
      explain:
        "On facture ce qui rapporte au client, pas ce qui a été dur à coder. Le bon upgrade se déclenche quand l'usage franchit un seuil naturel (cas Notion : la collaboration).",
    },
    {
      id: 5,
      prompt: "Le freemium est avant tout une stratégie de…",
      options: ["acquisition", "conversion", "rétention", "fidélisation"],
      correct: 1,
      explain:
        "Le gratuit attire, mais c'est la conversion qui fait le business : le coût du free doit être inférieur au CAC économisé + valeur annexe. Sinon, c'est une fuite.",
    },
    {
      id: 6,
      prompt: "Pourquoi la limite d'historique à 90 jours de Slack est-elle un maître-déclencheur ?",
      options: [
        "Parce qu'elle est gratuite à implémenter",
        "Parce qu'elle est indolore au début, grandit avec la dépendance et frappe au besoin maximal",
        "Parce qu'elle bloque la collaboration",
        "Parce qu'elle force la migration annuelle",
      ],
      correct: 1,
      explain:
        "La limite parfaite a une douleur proportionnelle à la valeur reçue : plus l'équipe utilise Slack, plus l'archive perdue vaut cher, et elle frappe pile quand « il faut retrouver ce message ».",
    },
    {
      id: 7,
      prompt: "Quelle fonctionnalité ne faut-il JAMAIS donner gratuitement ?",
      options: [
        "Une fonction de confort secondaire",
        "Le hook de rétention principal",
        "Un modèle de mise en forme de base",
        "L'export de ses propres données",
      ],
      correct: 1,
      explain:
        "Si le hook (ce qui rend le produit indispensable) est gratuit, le payant ne vend que du confort — et le confort churne. La collaboration et la résolution profonde sont aussi à protéger.",
    },
    {
      id: 8,
      prompt: "Un trial AVEC carte bancaire, par rapport à sans carte, produit typiquement :",
      options: [
        "Plus de volume et une conversion de 15-25 %",
        "Moins de volume (−20 à −40 %) et une conversion de 40-60 %",
        "Le même volume et une meilleure rétention",
        "Plus de volume et une conversion de 40-60 %",
      ],
      correct: 1,
      explain:
        "La carte filtre l'intention à l'entrée et automatise la conversion à la sortie (l'inaction convertit). Sans carte : volume maximal mais conversion active 15-25 %.",
    },
    {
      id: 9,
      prompt: "Pourquoi le reverse trial est-il souvent supérieur au trial classique ?",
      options: [
        "Il supprime le besoin d'un plan gratuit",
        "Il mobilise l'effet de possession et ne perd personne (downgrade vers le free)",
        "Il garantit une conversion de 100 %",
        "Il évite toute séquence d'emails",
      ],
      correct: 1,
      explain:
        "On possède Premium puis on le perd (endowment) ; le non-converti reste en free et continue de se verrouiller. Condition : un plan free viable doit exister.",
    },
    {
      id: 10,
      prompt: "À produit égal, passer un abonné du mensuel à l'annuel :",
      options: [
        "Ne change pas la LTV, seulement la trésorerie",
        "Divise le churn par 2 à 4 et multiplie la LTV par 2 à 3",
        "Augmente le churn car l'engagement effraie",
        "Double systématiquement l'ARPU",
      ],
      correct: 1,
      explain:
        "Une décision par an au lieu de douze, cash d'avance, churn annualisé qui tombe à 5-10 %. L'annuel est une stratégie de rétention déguisée — framing « 2 mois offerts », cibler les engagés.",
    },
  ],
};

const module4: Quiz = {
  moduleSlug: "pricing",
  title: "Quiz — Pricing",
  passMark: 14,
  questions: [
    {
      id: 1,
      prompt: "Pourquoi le cost-plus est-il un mauvais point de départ en abonnement ?",
      options: [
        "Parce qu'il sous-estime toujours la marge",
        "Parce que le coût marginal est quasi nul et que le client valorise la valeur reçue, pas vos coûts",
        "Parce qu'il est illégal en B2B",
        "Parce qu'il ignore la TVA",
      ],
      correct: 1,
      explain:
        "Le coût de revient fixe le plancher de survie, jamais le prix. Le client compare le prix à la valeur reçue et aux alternatives — deux grandeurs sans rapport avec vos coûts.",
    },
    {
      id: 2,
      prompt: "En value-based pricing B2B, quelle fraction de la valeur créée capture-t-on classiquement ?",
      options: ["50-70 %", "10-30 %", "90-100 %", "1-5 %"],
      correct: 1,
      explain:
        "On capture 10 à 30 % de la valeur créée ; le reste est le surplus qui motive l'achat. Le prix est une propriété du segment, pas du produit.",
    },
    {
      id: 3,
      prompt: "Pourquoi un prix trop bas est-il pire qu'un prix trop haut ?",
      options: [
        "Parce qu'il est plus difficile à calculer",
        "Parce qu'il ne proteste jamais : la conversion semble bonne pendant que les dégâts sont silencieux",
        "Parce qu'il augmente le coût du support",
        "Parce qu'il viole le contrat moral",
      ],
      correct: 1,
      explain:
        "Un prix trop haut se corrige en semaines (la conversion chute). Un prix trop bas ampute LTV/payback, recrute des Chasseurs de valeur et finit en sous-délivrance — sans signal.",
    },
    {
      id: 4,
      prompt: "Que produit la méthode Van Westendorp ?",
      options: [
        "Le prix optimal exact",
        "Une fourchette de prix acceptables, à lire par segment séparé",
        "Le churn prévisionnel",
        "Le CAC par canal",
      ],
      correct: 1,
      explain:
        "Quatre questions (trop cher / cher / bonne affaire / trop bon marché) dessinent une zone, pas un chiffre. Agréger les segments ne désigne le bon prix pour personne.",
    },
    {
      id: 5,
      prompt: "Sur une page pricing, quelle est la décision à plus fort impact ?",
      options: [
        "La couleur du bouton",
        "Afficher l'annuel par défaut (en équivalent mensuel)",
        "Le nombre de témoignages",
        "La taille de la FAQ",
      ],
      correct: 1,
      explain:
        "La majorité ne touche pas au toggle, et chaque annuel vaut 2-3× un mensuel. C'est la décision à plus fort impact de la page.",
    },
    {
      id: 6,
      prompt: "Quelle est la règle d'or du grandfathering ?",
      options: [
        "Toujours sans limite de durée",
        "Le borner dans le temps, jamais indéfiniment",
        "Ne jamais l'utiliser",
        "Le réserver aux nouveaux clients",
      ],
      correct: 1,
      explain:
        "Grandfatherer oui, sans limite de durée jamais : « garanti tant que l'abonnement reste actif » transforme le tarif en switching cost loyal, sans accumuler des strates de tarifs à l'infini.",
    },
    {
      id: 7,
      prompt: "Un repricing de +20 % qui provoque 5 % de churn additionnel est :",
      options: [
        "Toujours perdant",
        "Très largement gagnant — l'arithmétique doit être posée avant",
        "Neutre",
        "Impossible à évaluer",
      ],
      correct: 1,
      explain:
        "Le seuil d'équilibre est à hike/(1+hike) ≈ 16,7 % de churn pour +20 %. À 5 %, on est largement gagnant. Chiffrer le churn acceptable avant évite la panique et le rétropédalage.",
    },
    {
      id: 8,
      prompt: "Quelle erreur centrale explique l'échec du repricing Netflix 2011 ?",
      options: [
        "Une hausse trop faible",
        "Une hausse massive d'un coup, sans amortisseur, justifiée par la stratégie et non la valeur reçue",
        "Un préavis trop long",
        "Trop de protection des fidèles",
      ],
      correct: 1,
      explain:
        "+60 % en une marche, le client recevant moins (deux comptes, deux factures) pour plus cher. On peut faire payer beaucoup plus, jamais beaucoup plus d'un coup — sauf à changer de produit en même temps.",
    },
    {
      id: 9,
      prompt: "La « règle du 1/5 » en pricing international signifie :",
      options: [
        "Réduire tous les prix de 20 %",
        "Un produit à 10 $ en Occident devrait coûter ~2 $ en Inde (parité de pouvoir d'achat)",
        "Vendre dans 5 devises maximum",
        "Capturer 1/5 de la valeur créée",
      ],
      correct: 1,
      explain:
        "Ajuster au pouvoir d'achat, pas au taux de change. Sur un produit à coût marginal quasi nul, tout abonné gagné à 2 $ est du revenu presque pur qui n'existerait pas à 10 $.",
    },
    {
      id: 10,
      prompt: "Comment juger correctement le vainqueur d'un test de prix ?",
      options: [
        "Le prix qui convertit le mieux",
        "Conversion + revenu par visiteur + rétention de cohorte à 90 jours",
        "Le prix le plus élevé",
        "Le prix avec le plus de clics",
      ],
      correct: 1,
      explain:
        "Le prix bas convertit presque toujours mieux mais peut perdre le business en recrutant des Chasseurs de valeur. La conversion ment, la LTV tranche.",
    },
  ],
};

const module5: Quiz = {
  moduleSlug: "funnel-d-abonnement",
  title: "Quiz — Le funnel d'abonnement",
  passMark: 14,
  questions: [
    {
      id: 1,
      prompt: "Quelle étape du funnel est « proprement subscription » (absente du e-commerce) ?",
      options: ["La Découverte", "L'Activation (aha moment)", "La Transaction", "L'Intérêt"],
      correct: 1,
      explain:
        "L'Activation sépare les inscrits durables de ceux qui s'évaporent. La transaction y est la ligne de départ, pas d'arrivée.",
    },
    {
      id: 2,
      prompt: "Pourquoi piloter l'acquisition au seul CPA est-il insuffisant ?",
      options: [
        "Le CPA est trop difficile à calculer",
        "Il ignore la LTV et le payback : un canal à CPA bas qui recrute des churn-90-jours détruit de la valeur",
        "Le CPA est illégal en B2C",
        "Le CPA varie trop selon les saisons",
      ],
      correct: 1,
      explain:
        "Le triplet complet par canal : CAC complet + LTV de la cohorte + payback. Un CPA de 120 € qui recrute des annuels fidèles bat un CPA de 30 € qui churne vite.",
    },
    {
      id: 3,
      prompt: "Quel canal produit typiquement la LTV la plus élevée ?",
      options: ["Le social paid", "Le referral", "Le coup de projecteur d'un influenceur généraliste", "Le display"],
      correct: 1,
      explain:
        "Le filleul arrive pré-convaincu, pré-qualifié et socialement engagé : il churne 25-40 % de moins. Le SEO/contenu suit.",
    },
    {
      id: 4,
      prompt: "Qu'est-ce que le promise-delivery gap ?",
      options: [
        "L'écart entre le prix affiché et le prix payé",
        "L'écart entre ce que la campagne promet et ce que le produit délivre, qui fabrique du churn précoce",
        "Le délai entre l'inscription et le paiement",
        "La différence entre MRR et ARR",
      ],
      correct: 1,
      explain:
        "Sur-promettre crée des abonnés structurellement déçus : leur churn précoce est une dette contractée à l'acquisition. Calibrer la promesse sur l'expérience du premier mois.",
    },
    {
      id: 5,
      prompt: "Quand faut-il déclencher une invitation de parrainage ?",
      options: [
        "À J+1, dès l'inscription",
        "Après l'aha moment, aux pics d'enthousiasme (milestone, NPS élevé)",
        "Uniquement à l'expiration de l'abonnement",
        "Au moment de la facturation",
      ],
      correct: 1,
      explain:
        "Demander à J+1 à quelqu'un qui n'a rien à recommander est l'erreur classique. Le promoteur qui vient de mettre 9/10 au NPS est la cible parfaite.",
    },
    {
      id: 6,
      prompt: "Quelle incentive de referral est généralement la meilleure ?",
      options: [
        "Du cash unilatéral pour le parrain",
        "Une récompense double, en nature produit (du temps/des capacités en plus)",
        "Une remise permanente sur le prix",
        "Un cadeau physique de marque",
      ],
      correct: 1,
      explain:
        "En nature : ne coûte que le marginal, renforce l'usage, ne recrute pas de chasseurs de prime. Double : lève la gêne sociale (« je fais un cadeau »). Cas Dropbox : 500 Mo des deux côtés.",
    },
    {
      id: 7,
      prompt: "Pourquoi « 90 % de complétion d'onboarding » peut-il coexister avec « 100 % de churn » ?",
      options: [
        "Parce que l'onboarding est trop court",
        "Parce que la complétion mesure l'obéissance au parcours, pas la valeur réellement vécue (l'activation)",
        "Parce que les utilisateurs mentent aux enquêtes",
        "Parce que le paywall arrive trop tard",
      ],
      correct: 1,
      explain:
        "La bonne étoile polaire est le Time-to-First-Value, pas le taux de complétion. S'activer dans les 3 premiers jours double quasiment la rétention.",
    },
    {
      id: 8,
      prompt: "Quel est l'aha moment de Slack ?",
      options: [
        "Envoyer son premier message",
        "Recevoir une réponse (la conversation prouve la promesse)",
        "Créer un canal",
        "Inviter dix personnes",
      ],
      correct: 1,
      explain:
        "En recevoir un, pas en envoyer un : c'est la conversation qui matérialise la promesse, d'où la version chiffrée des « 2 000 messages d'équipe ».",
    },
    {
      id: 9,
      prompt: "Où placer son paywall ?",
      options: [
        "Avant toute utilisation, pour maximiser le revenu",
        "Juste après l'aha moment, quand le désir est au maximum",
        "À une date fixe après l'inscription",
        "Seulement après 30 jours d'usage",
      ],
      correct: 1,
      explain:
        "Avant la valeur, on demande de payer une promesse ; juste après, une expérience — la conversion change d'ordre de grandeur. Le paywall est un moment, pas un mur.",
    },
    {
      id: 10,
      prompt: "Quel est le principe du Dynamic Meter du New York Times ?",
      options: [
        "Un seuil fixe de 20 articles pour tous",
        "Le seuil optimal est une fonction de l'engagement du lecteur, pas un chiffre fixe",
        "Un hard paywall total",
        "Aucun article gratuit",
      ],
      correct: 1,
      explain:
        "De l'espace pour le lecteur occasionnel (pas prêt), un seuil rapproché pour l'engagé (prêt). Le paywall optimal est une fonction de la propension à payer, que l'engagement prédit.",
    },
  ],
};

const module6: Quiz = {
  moduleSlug: "anatomie-du-churn",
  title: "Quiz — Anatomie du churn",
  passMark: 14,
  questions: [
    {
      id: 1,
      prompt: "Quelle part du churn total est typiquement involontaire (échecs de paiement) ?",
      options: ["Moins de 5 %", "20-40 %", "50-60 %", "Plus de 80 %"],
      correct: 1,
      explain:
        "20-40 % en règle générale, et davantage dans les box physiques. Dont 60-70 % de soft declines récupérables — le levier au meilleur ROI (dunning).",
    },
    {
      id: 2,
      prompt: "Un zombie subscriber, comptablement et opérationnellement, c'est :",
      options: [
        "Du churn comptable mais pas opérationnel",
        "Pas du churn comptable, mais un churn à terme opérationnel",
        "Ni l'un ni l'autre",
        "Un churn involontaire",
      ],
      correct: 1,
      explain:
        "Il paie encore (le MRR le compte comme parfait) mais la relation est morte : un churn à terme dont seule la date est inconnue. À garder visible dans « inactifs payants ».",
    },
    {
      id: 3,
      prompt: "Un churn précoce (< 90 jours) signale le plus souvent :",
      options: [
        "Un problème de produit mature",
        "Un problème d'entrée : promise-delivery gap, onboarding raté, mauvaise acquisition",
        "Un problème de pricing",
        "Un problème de dunning",
      ],
      correct: 1,
      explain:
        "Le churn précoce se traite en amont, dans le funnel. Le 1ᵉʳ mois concentre 12-30 % de churn selon les verticales.",
    },
    {
      id: 4,
      prompt: "Le logo churn est supérieur au revenue churn. Qu'est-ce que cela signifie ?",
      options: [
        "Les gros comptes partent (alerte majeure)",
        "Ce sont les petits comptes qui partent (souvent acceptable)",
        "Le churn est involontaire",
        "Il y a une erreur de calcul",
      ],
      correct: 1,
      explain:
        "Logo > revenue = les petits paniers partent. L'inverse (revenue > logo) signifie que les gros comptes partent : une alerte stratégique majeure.",
    },
    {
      id: 5,
      prompt: "Pourquoi la contraction est-elle un « prédateur silencieux » ?",
      options: [
        "Parce qu'elle est involontaire",
        "Parce qu'elle ronge le MRR sans événement de résiliation et précède la majorité des départs B2B",
        "Parce qu'elle touche seulement les zombies",
        "Parce qu'elle est toujours saisonnière",
      ],
      correct: 1,
      explain:
        "Les clients restent mais paient moins (downgrades, sièges réduits) : aucun événement à intercepter, et c'est le principal signal avancé du churn B2B. À suivre séparément.",
    },
    {
      id: 6,
      prompt: "Passer d'un churn mensuel de 7 % à 2 % multiplie la LTV par environ :",
      options: ["1,5", "3,5", "10", "Aucun effet"],
      correct: 1,
      explain:
        "Durée de vie de ~14 à ~50 mois. LTV = ARPU/churn donc ×3,5. La croissance change de nature : 200 nouveaux/mois suffisent au lieu de 700 pour une base de 10 000.",
    },
    {
      id: 7,
      prompt: "Sur une courbe de rétention, qu'indique l'absence de plateau (descente vers zéro) ?",
      options: [
        "Un excellent onboarding",
        "L'absence de forever promise : aucune optimisation d'acquisition ne sauvera le modèle",
        "Un churn involontaire élevé",
        "Une smile curve en formation",
      ],
      correct: 1,
      explain:
        "Le plateau est le test de viabilité ultime : il est le noyau d'abonnés durables. Sans lui, le modèle n'a pas de valeur continue (retour au Module 3.1).",
    },
    {
      id: 8,
      prompt: "Quel découpage de cohorte est le plus puissant pour chiffrer la valeur de l'onboarding ?",
      options: [
        "Par canal d'acquisition",
        "Par comportement d'activation (aha moment atteint vs non)",
        "Par plan tarifaire",
        "Par zone géographique",
      ],
      correct: 1,
      explain:
        "L'écart entre la cohorte « a atteint l'aha moment en 3 jours » et « ne l'a pas atteint » transforme « il faut améliorer l'activation » en business case budgété.",
    },
    {
      id: 9,
      prompt: "Lequel est un leading indicator (alerte) plutôt qu'un lagging (constat) ?",
      options: [
        "Le taux de résiliation du mois",
        "La fréquence d'usage en baisse sur 30/60/90 jours",
        "Le NRR du trimestre",
        "Les verbatims de la survey de sortie",
      ],
      correct: 1,
      explain:
        "L'usage en baisse est le signal roi : il précède le churn de semaines. Le churn, le NRR et la survey de sortie sont des constats — déjà arrivés.",
    },
    {
      id: 10,
      prompt: "Dans un Customer Health Score, quelle composante pèse le plus (≈40 %) ?",
      options: ["Billing", "L'Activité (fréquence, récence, tendance d'usage)", "Le support", "L'adoption des fonctionnalités"],
      correct: 1,
      explain:
        "L'usage est le meilleur prédicteur unique du churn. Le score ne vaut que par les actions Rouge/Orange/Vert qu'il déclenche.",
    },
  ],
};

const module7: Quiz = {
  moduleSlug: "strategies-de-retention",
  title: "Quiz — Stratégies de rétention",
  passMark: 14,
  questions: [
    {
      id: 1,
      prompt: "Quel est l'ingrédient décisif du Hook Model qui fait revenir l'utilisateur ?",
      options: ["Le trigger externe", "La récompense variable", "L'action complexe", "La notification quotidienne"],
      correct: 1,
      explain:
        "La récompense prévisible lasse ; la variable accroche (le feed qui surprend, la reco qui tombe juste). C'est la variabilité qui fait revenir « voir ».",
    },
    {
      id: 2,
      prompt: "Quel biais le « streak » de Duolingo met-il principalement en production ?",
      options: ["La preuve sociale", "L'aversion à la perte / le sunk cost", "L'effet de leurre", "L'ancrage"],
      correct: 1,
      explain:
        "Au jour 200, on apprend pour ne pas perdre 200 jours : le sunk cost rendu visible, quotidien et quantifié.",
    },
    {
      id: 3,
      prompt: "Quel est le test d'honnêteté de la gamification ?",
      options: [
        "Le nombre de badges proposés",
        "Si l'on retirait toute la gamification demain, le produit retiendrait-il encore ?",
        "Le taux d'ouverture des notifications",
        "Le nombre d'A/B tests par trimestre",
      ],
      correct: 1,
      explain:
        "La gamification amplifie une valeur qui existe, elle ne la remplace pas. Si la réponse est non, le chantier n'est pas le jeu mais la forever promise.",
    },
    {
      id: 4,
      prompt: "Pourquoi la personnalisation est-elle un levier de rétention si puissant ?",
      options: [
        "Parce qu'elle réduit les coûts",
        "Parce qu'elle s'auto-renforce : plus d'usage → meilleure connaissance → meilleur service → plus d'usage",
        "Parce qu'elle est gratuite",
        "Parce qu'elle remplace le support",
      ],
      correct: 1,
      explain:
        "Et plus partir coûte (tout est à réapprendre ailleurs). Sur un catalogue-commodité, l'algorithme est le moat (Spotify, Netflix).",
    },
    {
      id: 5,
      prompt: "Dans une save flow, quel doit être le PREMIER acte ?",
      options: [
        "Proposer un discount",
        "Poser la question « qu'est-ce qui motive votre départ ? »",
        "Afficher les fonctionnalités perdues",
        "Proposer la pause",
      ],
      correct: 1,
      explain:
        "La question est le routeur de tout ce qui suit. Un discount proposé à qui part pour un bug dit « votre problème nous indiffère ».",
    },
    {
      id: 6,
      prompt: "À quoi se mesure une save flow ?",
      options: [
        "Au taux de déflection brut",
        "À la rétention à 90 jours des sauvés",
        "Au nombre d'écrans",
        "Au montant des discounts accordés",
      ],
      correct: 1,
      explain:
        "Le sauvé par remise sans cause traitée repart en 60-90 jours (churn différé). Le taux de déflection brut ment.",
    },
    {
      id: 7,
      prompt: "Quand la pause domine-t-elle la résiliation ?",
      options: [
        "Toujours, quelle que soit la cause",
        "Quand la raison est temporelle (budget du moment, usage suspendu, saison)",
        "Quand le produit est décevant",
        "Quand le besoin est définitivement éteint",
      ],
      correct: 1,
      explain:
        "Elle ne traite pas les causes structurelles : la proposer à un déçu est un report, pas un save. La réactivation automatique fait l'économie du dispositif.",
    },
    {
      id: 8,
      prompt: "Pourquoi un abonné downgradé est-il préférable à un abonné qui part ?",
      options: [
        "Parce qu'il paie plus",
        "Parce qu'il garde ancienneté, historique, moyen de paiement et ré-upgradabilité",
        "Parce qu'il ne se plaint jamais",
        "Parce qu'il devient un Super-User",
      ],
      correct: 1,
      explain:
        "Un abonné à 9 € qui reste vaut infiniment plus qu'un à 19 € qui part. Le downgrade est aussi un thermomètre honnête de la valeur perçue.",
    },
    {
      id: 9,
      prompt: "Quand synchroniser la séquence de réengagement des zombies ?",
      options: [
        "Juste après le prélèvement annuel",
        "À J-30/J-45 du renouvellement, jamais après",
        "À une date fixe chaque trimestre",
        "Uniquement quand l'abonné se plaint",
      ],
      correct: 1,
      explain:
        "Avant le renouvellement, chaque issue est bonne (réveil, ajustement, départ propre). Après le prélèvement, la même séquence devient une provocation.",
    },
    {
      id: 10,
      prompt: "Quel ton adopter dans un email de dunning (échec de paiement) ?",
      options: [
        "Un ton de recouvrement (« régularisez sous peine de »)",
        "Un ton dédramatisé : l'abonné n'a rien fait de mal, lien direct en 30 secondes",
        "Un ton menaçant pour créer l'urgence",
        "Aucun message, couper l'accès immédiatement",
      ],
      correct: 1,
      explain:
        "La majorité des échecs sont des accidents bancaires. Le vocabulaire d'impayé insulte un client fidèle. Maintenir l'accès pendant la fenêtre : l'abonné servi règle plus volontiers.",
    },
  ],
};

const module7bis: Quiz = {
  moduleSlug: "switching-costs-lock-in",
  title: "Quiz — Switching costs & lock-in",
  passMark: 14,
  questions: [
    {
      id: 1,
      prompt: "Quel est le test de légitimité d'un lock-in ?",
      options: [
        "Le coût de sortie est-il élevé ?",
        "L'abonné, pleinement informé, referait-il le même dépôt ?",
        "Le concurrent peut-il le copier ?",
        "Est-il rentable à court terme ?",
      ],
      correct: 1,
      explain:
        "Le lock-in légitime est une dépendance à de la valeur réelle (playlists, base Notion). L'illégitime est une cage artificielle que personne, informé, ne choisirait.",
    },
    {
      id: 2,
      prompt: "Pourquoi offrir l'export RENFORCE-t-il le bon lock-in ?",
      options: [
        "Parce que c'est une obligation légale",
        "Parce que la confiance fait déposer davantage, et que l'essentiel ne se transporte pas",
        "Parce que personne n'utilise jamais l'export",
        "Parce que cela réduit les coûts de stockage",
      ],
      correct: 1,
      explain:
        "Les données brutes s'exportent, pas l'algorithme entraîné, ni les habitudes, ni la communauté. La porte ouverte sur un déménagement impossible est la forteresse parfaite et loyale.",
    },
    {
      id: 3,
      prompt: "En quoi le lock-in est-il du « pricing power en réserve » ?",
      options: [
        "Il permet de baisser les prix",
        "La hausse se compare au coût de tout redéployer ailleurs, pas à zéro",
        "Il supprime le besoin de marketing",
        "Il garantit un NRR de 100 %",
      ],
      correct: 1,
      explain:
        "Une base verrouillée par la valeur absorbe les hausses régulières (Adobe, Salesforce) : la hausse de 10 % se compare au coût du déménagement.",
    },
    {
      id: 4,
      prompt: "Quelle est la famille de lock-in « reine du B2B » ?",
      options: ["L'historique de données", "Les intégrations et le workflow", "La progression gamifiée", "Le format propriétaire"],
      correct: 1,
      explain:
        "Chaque intégration est additionnelle et multiplicative. Partir de Slack, c'est débrancher le système nerveux de l'entreprise — un projet, pas un clic.",
    },
    {
      id: 5,
      prompt: "Pourquoi la réputation (avis, notes) est-elle un lock-in si puissant ?",
      options: [
        "Parce qu'elle est facile à exporter",
        "Parce qu'elle n'a de sens que dans le système qui l'a produite et prend des années à reconstruire",
        "Parce qu'elle est gérée par l'opérateur",
        "Parce qu'elle est protégée par la loi",
      ],
      correct: 1,
      explain:
        "L'actif le moins portable de tous : le professionnel aux 400 avis 5 étoiles ne repart jamais de zéro. C'est le lock-in fondamental des marketplaces.",
    },
    {
      id: 6,
      prompt: "Pourquoi un modèle algorithmique entraîné est-il non portable ?",
      options: [
        "Parce qu'il est protégé par un brevet",
        "On exporte la donnée, pas l'intelligence : le coût de sortie est un coût de ré-entraînement",
        "Parce qu'il est chiffré",
        "Parce qu'il change tous les jours",
      ],
      correct: 1,
      explain:
        "On exporte ses écoutes, pas le Discover Weekly. Chez le concurrent : la traversée du désert algorithmique (des semaines de recos médiocres).",
    },
    {
      id: 7,
      prompt: "Pourquoi la certification est-elle un lock-in unique ?",
      options: [
        "Elle est gratuite à produire",
        "C'est le seul lock-in qui recrute en même temps qu'il retient",
        "Elle empêche techniquement de partir",
        "Elle double l'ARPU",
      ],
      correct: 1,
      explain:
        "La certification devient un actif de carrière (CV, valeur emploi). L'utilisateur certifié devient investisseur de l'écosystème : un champion fabriqué en série.",
    },
    {
      id: 8,
      prompt: "Quel est le seul lock-in dont le risque éthique marqué est l'addiction ?",
      options: ["L'historique de données", "Les intégrations", "La progression gamifiée (streak, XP)", "Les assets créés"],
      correct: 2,
      explain:
        "Le mécanisme qui retient par la peur de perdre peut capturer au-delà de l'intérêt de l'utilisateur. Garde-fou : les soupapes (gel de streak, pause qui préserve le statut).",
    },
    {
      id: 9,
      prompt: "Dans la matrice, quelle stratégie est franchement à proscrire ?",
      options: [
        "La courbe d'apprentissage",
        "Le format propriétaire sans export",
        "L'historique de données",
        "Les certifications",
      ],
      correct: 1,
      explain:
        "La seule ligne franchement rouge : le lock-in illégitime type. Tout le reste de la matrice est éthiquement sain car fondé sur de la valeur accumulée.",
    },
    {
      id: 10,
      prompt: "Par quoi un solo founder doit-il commencer (meilleur rendement effort/puissance) ?",
      options: [
        "Un effet de réseau massif",
        "L'historique visible, les assets créés, et 1-2 intégrations clés",
        "Un écosystème bundlé de plusieurs produits",
        "Un algorithme au niveau de Netflix",
      ],
      correct: 1,
      explain:
        "Les familles lourdes (réseau, écosystème, algo) viennent avec l'échelle. Les trois premières sont disponibles dès le premier mois du produit.",
    },
  ],
};

const module8: Quiz = {
  moduleSlug: "nrr-et-expansion",
  title: "Quiz — NRR & expansion",
  passMark: 14,
  questions: [
    {
      id: 1,
      prompt: "Que mesure exactement le NRR ?",
      options: [
        "Le revenu total de l'entreprise, nouveaux clients inclus",
        "Ce que devient le revenu d'une cohorte de clients existants un an plus tard, sans nouveau client",
        "Le nombre de clients perdus sur l'année",
        "Le revenu moyen par utilisateur",
      ],
      correct: 1,
      explain:
        "On prend une cohorte à T0, on mesure son MRR, et douze mois après on remesure le MRR de ces MÊMES clients. Aucun nouveau client n'entre dans le calcul.",
    },
    {
      id: 2,
      prompt: "Une cohorte démarre à 100 000 € de MRR : +22 000 d'expansion, −6 000 de contraction, −8 000 de churn. Quel NRR ?",
      options: ["92 %", "108 %", "116 %", "122 %"],
      correct: 1,
      explain:
        "(100 000 + 22 000 − 6 000 − 8 000) / 100 000 = 108 %. Le GRR (sans expansion) serait de 86 %.",
    },
    {
      id: 3,
      prompt: "À quoi sert le GRR (Gross Revenue Retention) ?",
      options: [
        "À remplacer le NRR",
        "De garde-fou : il plafonne à 100 % et révèle si un bon NRR masque une base qui fuit",
        "À mesurer l'acquisition",
        "À calculer le CAC",
      ],
      correct: 1,
      explain:
        "Le GRR est le NRR sans l'expansion : beaucoup d'expansion sur une base qui fuit peut flatter le NRR. Le GRR mesure la pure capacité à conserver.",
    },
    {
      id: 4,
      prompt: "Pourquoi un NRR > 100 % est-il « la croissance endogène » ?",
      options: [
        "Parce qu'il supprime le churn",
        "Parce que la base croît toute seule : même à zéro acquisition, le revenu monte",
        "Parce qu'il double l'ARPU",
        "Parce qu'il garantit la rentabilité",
      ],
      correct: 1,
      explain:
        "110 % = +10 % de revenu annuel sans vendre à personne, qui se compose. L'acquisition devient un accélérateur, pas une perfusion.",
    },
    {
      id: 5,
      prompt: "Quel est le levier d'upsell « roi » ?",
      options: [
        "L'email à froid",
        "L'upsell par trigger d'usage (l'abonné atteint une limite de son plan)",
        "La publicité display",
        "Le cold call",
      ],
      correct: 1,
      explain:
        "On ne vend pas un plan, on débloque une action en cours, au moment exact où la valeur du palier supérieur se démontre d'elle-même.",
    },
    {
      id: 6,
      prompt: "Pourquoi le plan familial / multi-siège est-il un levier d'expansion si puissant ?",
      options: [
        "Il réduit les coûts de support",
        "On passe d'un abonnement-personne à un abonnement-groupe : l'ARPU monte ET le churn s'effondre",
        "Il supprime le besoin d'onboarding",
        "Il augmente le CAC",
      ],
      correct: 1,
      explain:
        "Le groupe crée un switching cost collectif (résilier le plan familial, c'est le retirer à quatre personnes). Les churns de plans groupe sont systématiquement inférieurs.",
    },
    {
      id: 7,
      prompt: "Quelle est la condition trop souvent violée du cross-sell ?",
      options: [
        "Le second produit doit être moins cher",
        "Le second produit doit être bon seul",
        "Le second produit doit être gratuit",
        "Le second produit doit être lancé avant le premier",
      ],
      correct: 1,
      explain:
        "Le module médiocre vendu sur la force du premier érode la confiance qui portait l'ensemble.",
    },
    {
      id: 8,
      prompt: "Quelle est la distinction de doctrine entre fidélité et win-back ?",
      options: [
        "Aucune, ce sont des synonymes",
        "La fidélité récompense ceux qui restent ; le win-back récompense ceux qui partent",
        "La fidélité est gratuite, le win-back payant",
        "La fidélité est B2B, le win-back B2C",
      ],
      correct: 1,
      explain:
        "N'offrir des avantages qu'aux churners éduque la base entière à churner pour être bien traitée. Le programme de fidélité est l'antidote structurel.",
    },
    {
      id: 9,
      prompt: "Dans quel ordre un investisseur lit-il les métriques d'un business d'abonnement ?",
      options: [
        "Croissance → CAC → churn → NRR",
        "NRR → churn/GRR → LTV/CAC → croissance du MRR (en dernier)",
        "MRR → ARR → CAC → LTV",
        "CAC → LTV → NRR → churn",
      ],
      correct: 1,
      explain:
        "L'ordre est celui du pouvoir prédictif. La croissance se voit, mais les trois métriques précédentes disent si elle vaut quelque chose : la croissance à NRR de 80 % tourne dans le vide.",
    },
    {
      id: 10,
      prompt: "Que dit la Rule of 40 ?",
      options: [
        "Le churn doit rester sous 40 %",
        "Croissance annuelle (%) + marge (%) ≥ 40",
        "40 % de la base doit être annuelle",
        "Le NRR doit dépasser 140 %",
      ],
      correct: 1,
      explain:
        "Croissance et rentabilité s'achètent l'une avec l'autre. L'expansion et la fidélité améliorent les deux en même temps, puisqu'elles croissent sans CAC.",
    },
  ],
};

const module9: Quiz = {
  moduleSlug: "maitriser-ses-donnees",
  title: "Quiz — Maîtriser ses données",
  passMark: 14,
  questions: [
    {
      id: 1,
      prompt: "Pourquoi faut-il isoler la Reactivation MRR du New MRR ?",
      options: [
        "Pour des raisons fiscales",
        "Parce que les mélanger masque à la fois la performance du funnel et celle du win-back/pause",
        "Parce que la reactivation n'est pas du vrai revenu",
        "Parce que le New est toujours plus important",
      ],
      correct: 1,
      explain:
        "Le New mesure le funnel, la Reactivation mesure le win-back et les pauses. Confondus, les deux performances disparaissent.",
    },
    {
      id: 2,
      prompt: "Que faut-il faire si l'équation de contrôle du MRR ne boucle pas au centime ?",
      options: [
        "L'ignorer si l'écart est petit",
        "Régler la définition qui fuit (prorata, remise, essai) avant toute analyse",
        "Augmenter le MRR de départ",
        "Recalculer l'ARR",
      ],
      correct: 1,
      explain:
        "Un MRR qui ne boucle pas est un MRR qu'on ne peut pas décomposer, donc pas comprendre. La cause est toujours une définition (prorata, remise, test).",
    },
    {
      id: 3,
      prompt: "Un MRR stable composé d'un New correct annulé par une Contraction montante, c'est :",
      options: [
        "Une croissance saine",
        "Le « plateau qui n'en est pas un » — un signal d'alarme invisible sans la décomposition",
        "Un mois en trompe-l'œil positif",
        "Une smile curve",
      ],
      correct: 1,
      explain:
        "Le prédateur silencieux ronge le revenu sans événement de résiliation. Seule la décomposition du waterfall le révèle.",
    },
    {
      id: 4,
      prompt: "Qu'est-ce que l'ARR, exactement ?",
      options: [
        "Les revenus des 12 derniers mois",
        "Le MRR courant × 12 (une photographie annualisée, pas un historique)",
        "Le total des encaissements de l'année",
        "Le MRR moins le churn",
      ],
      correct: 1,
      explain:
        "L'ARR n'est pas un historique : c'est une photographie du MRR courant projetée sur l'année. Et ni le MRR ni l'ARR ne disent la trésorerie.",
    },
    {
      id: 5,
      prompt: "Pourquoi le CAC blended peut-il tromper ?",
      options: [
        "Il est trop difficile à calculer",
        "Il moyenne des canaux sans rapport et embellit quand l'organique porte le volume",
        "Il inclut trop de coûts",
        "Il ignore la LTV",
      ],
      correct: 1,
      explain:
        "Un blended de 40 € peut cacher un paid à 200 € que l'organique subventionne. Le coût marginal du client poussé est celui du canal, pas la moyenne.",
    },
    {
      id: 6,
      prompt: "Quelle version de la LTV « tranche les débats » ?",
      options: [
        "La formule simple ARPU ÷ churn",
        "La LTV par cohorte observée (le revenu cumulé réel des cohortes passées)",
        "La formule actualisée",
        "La formule à la marge",
      ],
      correct: 1,
      explain:
        "La formule projette, la cohorte constate. L'écart entre les deux (la formule surestime quand le churn précoce dépasse celui de croisière) est lui-même un diagnostic.",
    },
    {
      id: 7,
      prompt: "Dans la matrice CAC × LTV, que faire d'un segment « CAC bas, LTV faible » ?",
      options: [
        "L'arrêter immédiatement",
        "Travailler la LTV (onboarding, expansion, annuel) — pas l'acquisition",
        "Doubler le budget d'acquisition",
        "Le migrer en annuel uniquement",
      ],
      correct: 1,
      explain:
        "C'est un « volume à transformer » : acquérir coûte peu mais rapporte peu. Le chantier est la LTV, pas l'acquisition.",
    },
    {
      id: 8,
      prompt: "Vers quel plafond converge un business à acquisition constante ?",
      options: [
        "MRR de départ × 2",
        "(nouveaux abonnés × ARPU) ÷ churn",
        "Le CAC × LTV",
        "Il n'y a pas de plafond",
      ],
      correct: 1,
      explain:
        "À 7 % de churn, ce plafond est touché dès la 2ᵉ année — la croissance s'arrête sans qu'aucun chiffre mensuel ne se dégrade (New et churn constants, seul le solde s'éteint).",
    },
    {
      id: 9,
      prompt: "Une cohorte perd 40 % de ses abonnés mais conserve 90 % de son revenu. C'est :",
      options: [
        "Une alerte rouge",
        "Le profil B2B sain (les petits partent, les gros restent et s'étendent)",
        "Une erreur de mesure",
        "Un churn involontaire massif",
      ],
      correct: 1,
      explain:
        "C'est pourquoi il faut produire les deux grilles (abonnés ET revenu) côte à côte : leur divergence est le diagnostic. L'inverse serait l'alerte rouge.",
    },
    {
      id: 10,
      prompt: "Quand migrer du tableur vers un outil d'analytics payant ?",
      options: [
        "Dès le premier mois",
        "Quand la maintenance du classeur dépasse une heure par semaine",
        "Jamais",
        "Dès 100 abonnés",
      ],
      correct: 1,
      explain:
        "Pas avant. Les mois passés dans le tableur auront appris les définitions mieux qu'aucun dashboard clé en main : on ne se fait plus mentir par un chiffre qu'on a construit soi-même.",
    },
  ],
};

const module10: Quiz = {
  moduleSlug: "media-newsletters-creators",
  title: "Quiz — Média, newsletters & creators",
  passMark: 14,
  questions: [
    {
      id: 1,
      prompt: "Pourquoi le modèle publicitaire des médias numériques s'est-il effondré ?",
      options: [
        "Les lecteurs ont disparu",
        "Les plateformes (recherche, social) captent l'essentiel de la valeur, le média est payé en miettes",
        "La publicité est devenue illégale",
        "Les coûts de production ont explosé",
      ],
      correct: 1,
      explain:
        "Le média devient un fournisseur de minutes d'attention interchangeables. Le reader revenue n'est pas une option mais la stratégie de survie.",
    },
    {
      id: 2,
      prompt: "Dans l'équation du média en abonnement, dans quel ordre travaille-t-on les facteurs ?",
      options: [
        "Audience, puis conversion, puis rétention",
        "Rétention d'abord, conversion ensuite, audience en dernier",
        "ARPU d'abord, puis le reste",
        "Tous en même temps",
      ],
      correct: 1,
      explain:
        "L'ordre inverse de l'intuition : l'audience ne vaut que convertie et retenue. C'est le seau du Module 6 d'abord.",
    },
    {
      id: 3,
      prompt: "Quel paywall maximise l'ARPU mais plafonne le volume ?",
      options: ["Le metered", "Le hard paywall", "Le soft paywall", "Le freemium éditorial"],
      correct: 1,
      explain:
        "Le hard (FT, WSJ) se défend quand le contenu est professionnellement indispensable : l'ARPU est 3-5× la presse généraliste, mais l'audience est réduite.",
    },
    {
      id: 4,
      prompt: "Pourquoi une newsletter verticale pointue convertit-elle mieux (5-10 %) qu'une généraliste (1-2 %) ?",
      options: [
        "Parce qu'elle est moins chère",
        "Parce qu'on paie ce qu'on ne trouve pas ailleurs : la niche est le modèle",
        "Parce qu'elle envoie plus d'emails",
        "Parce qu'elle a plus d'abonnés gratuits",
      ],
      correct: 1,
      explain:
        "La spécificité est le déterminant n°1 de la conversion. La valeur professionnelle permet aussi des prix 3-10× le B2C (l'employeur rembourse).",
    },
    {
      id: 5,
      prompt: "Quel est l'actif central d'une newsletter, quelle que soit la plateforme ?",
      options: [
        "Le compte Substack",
        "La liste d'emails exportable",
        "Le nombre d'articles publiés",
        "Le taux de commission",
      ],
      correct: 1,
      explain:
        "L'email exportable est l'actif ; la plateforme n'est que le véhicule. The Hustle a été vendu pour son audience-email.",
    },
    {
      id: 6,
      prompt: "Que dit la règle des « 1 000 vrais fans » ?",
      options: [
        "Il faut un million d'abonnés gratuits",
        "Un millier de personnes prêtes à payer ~100 $/an suffit à fonder l'économie",
        "Il faut 1 000 articles",
        "1 000 € de budget marketing",
      ],
      correct: 1,
      explain:
        "La séquence est toujours audience gratuite → engagement → monétisation. On ouvre le payant quand l'audience demande comment soutenir.",
    },
    {
      id: 7,
      prompt: "Quel est le centre de gravité du revenu d'une grille Patreon à trois paliers ?",
      options: [
        "Le palier d'accès (3-5 $)",
        "Le palier d'appartenance (8-15 $, communauté)",
        "Le palier de proximité (25-100 $+)",
        "Aucun, ils sont équivalents",
      ],
      correct: 1,
      explain:
        "Le palier d'appartenance (Discord, Q&A) est la contrepartie relationnelle où se concentre le revenu. L'accès fait le volume, la proximité est rare et contingentée.",
    },
    {
      id: 8,
      prompt: "Quelle est la règle d'or des contreparties creator ?",
      options: [
        "Du contenu exclusif inédit à chaque palier",
        "La bonne contrepartie coûte de l'accès, pas de la production",
        "Plus il y a de paliers, mieux c'est",
        "Tout doit être en 1:1",
      ],
      correct: 1,
      explain:
        "Promettre du contenu exclusif par palier multiplie la charge et pousse au burnout. La contrepartie d'accès (coulisses, communauté) ne coûte pas de production additionnelle.",
    },
    {
      id: 9,
      prompt: "Quel est le test de réussite de la transition creator → produit ?",
      options: [
        "Le nombre d'abonnés payants",
        "Le revenu survivrait-il à trois mois de silence du créateur ?",
        "Le taux d'ouverture des emails",
        "Le nombre de plateformes utilisées",
      ],
      correct: 1,
      explain:
        "Transformer ce que le créateur fait en quelque chose qui existe sans lui (catalogue, communauté, produit dérivé). Une audience-personne ne se vend pas ; un produit-média, si.",
    },
    {
      id: 10,
      prompt: "Pourquoi le bundle de contenu du NYT réduit-il le churn ?",
      options: [
        "Parce qu'il est moins cher",
        "Parce que chaque produit porte une habitude indépendante : la résiliation doit toutes les vaincre",
        "Parce qu'il supprime la publicité",
        "Parce qu'il augmente l'ARPU uniquement",
      ],
      correct: 1,
      explain:
        "Le switching cost collectif appliqué au contenu : le jour où l'actualité lasse, le mot croisé du matin retient. Chaque brique doit porter sa propre habitude.",
    },
  ],
};

const module11: Quiz = {
  moduleSlug: "saas-b2b",
  title: "Quiz — Abonnement SaaS B2B",
  passMark: 14,
  questions: [
    {
      id: 1,
      prompt: "Qu'est-ce qui définit le Product-Led Growth ?",
      options: [
        "La vente précède l'usage",
        "L'usage précède la vente : le produit s'adopte en self-service et se diffuse",
        "L'absence totale de commerciaux",
        "Un pricing uniquement à l'usage",
      ],
      correct: 1,
      explain:
        "Le PLG renverse le go-to-market : l'individu adopte, l'équipe suit, l'entreprise enfin. La monétisation suit l'adoption.",
    },
    {
      id: 2,
      prompt: "Qu'est-ce qu'un viral loop intrinsèque (vs un programme de parrainage) ?",
      options: [
        "Une remise pour avoir invité un ami",
        "L'usage normal du produit qui expose des non-utilisateurs (document partagé, lien Calendly)",
        "Une publicité virale",
        "Un concours sur les réseaux sociaux",
      ],
      correct: 1,
      explain:
        "Chaque acte d'usage est une démonstration à un prospect — la boucle est intrinsèque au produit, pas incitée par une récompense.",
    },
    {
      id: 3,
      prompt: "« PLG ne signifie pas pas de sales » — pourquoi ?",
      options: [
        "Parce que le PLG est plus cher",
        "La vente intervient plus tard et mieux qualifiée, sur les signaux produit (product-led sales)",
        "Parce que le self-service ne convertit jamais",
        "Parce que les sales remplacent le produit",
      ],
      correct: 1,
      explain:
        "Le commercial PLG récolte des comptes que le produit a mûris (utilisateurs actifs, fonctionnalités enterprise effleurées) — il ne prospecte pas à froid.",
    },
    {
      id: 4,
      prompt: "Quelle est la force principale de l'usage-based pricing ?",
      options: [
        "Sa simplicité de facturation",
        "L'alignement : l'expansion est câblée dans le compteur, sans renégociation",
        "Sa prévisibilité pour le client",
        "L'absence de churn",
      ],
      correct: 1,
      explain:
        "Le client qui réussit consomme plus et paie plus, sans décision. C'est le moteur des NRR d'exception (130-160 %).",
    },
    {
      id: 5,
      prompt: "Pourquoi le bill shock est-il « asymétrique » ?",
      options: [
        "Il touche surtout les petits clients",
        "Dix factures conformes ne construisent pas la confiance qu'une seule facture choc détruit",
        "Il varie selon les saisons",
        "Il ne concerne que l'IA",
      ],
      correct: 1,
      explain:
        "D'où l'arsenal non négociable : estimateurs, alertes de seuil, caps optionnels, et factures lisibles qui s'expliquent seules.",
    },
    {
      id: 6,
      prompt: "Quelle est la règle de design de l'hybride socle + usage ?",
      options: [
        "Le socle doit être minimal pour pousser le dépassement",
        "Le socle couvre l'usage normal du segment ; la pente du prix à l'usage décroît avec le volume",
        "Le prix unitaire augmente avec le volume",
        "Pas de socle, uniquement de l'usage",
      ],
      correct: 1,
      explain:
        "Le client moyen ne doit pas vivre dans le dépassement (sinon plan mal calibré, ressentiment). Le coût unitaire décroissant est le contrat implicite de l'expansion.",
    },
    {
      id: 7,
      prompt: "Quelle est la distinction fondatrice entre Support et Customer Success ?",
      options: [
        "Le CS est gratuit, le support payant",
        "Le support répond aux problèmes (réactif) ; le CS poursuit des résultats (proactif)",
        "Le CS est B2C, le support B2B",
        "Aucune, ce sont des synonymes",
      ],
      correct: 1,
      explain:
        "Confondre les deux produit un CS qui éteint des feux au lieu de construire de la valeur. Le CS se déclenche sur les signaux, pas sur le client.",
    },
    {
      id: 8,
      prompt: "Quelle est la règle quantitative du multi-threading ?",
      options: [
        "Une relation par compte suffit",
        "Trois relations actives minimum par compte significatif",
        "Dix contacts par compte",
        "Uniquement le champion",
      ],
      correct: 1,
      explain:
        "La parade au single thread : la perte d'un fil n'est plus la perte du compte. Le champion qui part est le churn B2B le plus évitable.",
    },
    {
      id: 9,
      prompt: "Quand engager la conversation de renouvellement enterprise ?",
      options: [
        "À J-30 de l'échéance",
        "À J-180 : on construit pendant qu'il reste le temps d'agir ; à J-30 on subit",
        "Le jour de l'échéance",
        "Après l'échéance",
      ],
      correct: 1,
      explain:
        "Le renouvellement est un cycle de vente, pas une reconduction. À J-30, le bilan est figé et toute concession devient le prix de l'urgence.",
    },
    {
      id: 10,
      prompt: "Comment construire le dossier de renouvellement enterprise ?",
      options: [
        "Dans la langue du champion uniquement",
        "Dans la langue de l'economic buyer (ROI), avec les munitions du champion (résultats des QBR)",
        "En proposant d'abord une remise",
        "En ignorant l'economic buyer",
      ],
      correct: 1,
      explain:
        "Le champion gagne les utilisateurs, l'economic buyer signe. L'economic buyer rencontré pour la première fois à J-60 est un risque, pas un interlocuteur.",
    },
  ],
};

const module12: Quiz = {
  moduleSlug: "mobile-et-abonnements-physiques",
  title: "Quiz — Mobile & abonnements physiques",
  passMark: 14,
  questions: [
    {
      id: 1,
      prompt: "Un abonnement mobile à 9,99 € facial rapporte réellement combien (commission incluse) ?",
      options: ["9,99 €", "Environ 7 à 8,5 €", "5 €", "12 €"],
      correct: 1,
      explain:
        "ARPU mobile réel = facial × 0,70 à 0,85 (commission 15-30 %). Tout le pricing doit être pensé net de commission.",
    },
    {
      id: 2,
      prompt: "Que prive-t-on l'opérateur en encaissant in-app plutôt que sur le web ?",
      options: [
        "La distribution",
        "La relation : moyen de paiement, dunning, save flows, email sont délégués au store",
        "La confiance",
        "La conversion",
      ],
      correct: 1,
      explain:
        "L'abonné store est à moitié votre client : une partie de l'arsenal de rétention est déléguée au store. Le web possède la relation.",
    },
    {
      id: 3,
      prompt: "Quelle est la boussole de l'arbitrage in-app vs web ?",
      options: [
        "Le taux de commission seul",
        "La LTV nette par canal de paiement (conversion × ARPU net × rétention)",
        "Le nombre de téléchargements",
        "La note sur le store",
      ],
      correct: 1,
      explain:
        "In-app convertit mieux mais coûte la commission et la relation ; le web encaisse tout mais se gagne à l'exécution. La LTV nette tranche.",
    },
    {
      id: 4,
      prompt: "Pourquoi le paywall mobile précoce ne contredit-il pas « après l'aha moment, jamais avant » ?",
      options: [
        "Parce que la règle ne s'applique pas au mobile",
        "Parce qu'il vend un essai gratuit : l'aha moment est déplacé à l'intérieur du trial",
        "Parce que le mobile n'a pas d'aha moment",
        "Parce qu'il demande de payer la valeur",
      ],
      correct: 1,
      explain:
        "Le paywall ne demande pas de payer la valeur, mais d'ouvrir la période qui la démontrera. Face ID réduit la friction au minimum.",
    },
    {
      id: 5,
      prompt: "Contre quoi l'onboarding mobile se bat-il D'ABORD ?",
      options: [
        "Contre la conversion",
        "Contre l'oubli (la désinstallation à un geste dans les premiers jours)",
        "Contre la concurrence",
        "Contre la commission",
      ],
      correct: 1,
      explain:
        "La majorité des apps installées sont abandonnées dans les premiers jours. Le TTFV cible passe sous 2-3 minutes.",
    },
    {
      id: 6,
      prompt: "Quelle est la métrique du métier des boxes physiques ?",
      options: [
        "Le nombre de followers",
        "La rétention à M3 (le point mort logistique est à 3-4 cycles)",
        "Le taux d'ouverture des emails",
        "Le NPS",
      ],
      correct: 1,
      explain:
        "Un abonné qui churne avant M3 est une perte sèche (CAC + coûts variables des premières box). La promo d'appel agressive recrute des cohortes mortes à M2.",
    },
    {
      id: 7,
      prompt: "Pourquoi le skip (sauter un cycle) réduit-il le churn d'une box ?",
      options: [
        "Parce qu'il augmente le revenu du cycle",
        "Parce que l'alternative au skip n'est presque jamais le cycle payé, c'est la résiliation",
        "Parce qu'il supprime les coûts logistiques",
        "Parce qu'il améliore la personnalisation",
      ],
      correct: 1,
      explain:
        "Le skip refusé ne récupère pas le revenu du cycle — il perd l'abonné. C'est la pause en version native, à budgéter (10-25 % des cycles).",
    },
    {
      id: 8,
      prompt: "Quelle est typiquement la marge brute d'une box physique ?",
      options: ["80-90 %", "40-60 %", "95 %", "10-20 %"],
      correct: 1,
      explain:
        "Contre 80-90 % en SaaS : chaque cycle a un coût variable réel (produit + packaging + transport + retours). Chaque point compte.",
    },
    {
      id: 9,
      prompt: "Qu'est-ce que la « box fatigue » ?",
      options: [
        "La lassitude de payer",
        "La subscription guilt rendue visible : l'accumulation matérielle des produits non consommés",
        "Un problème de livraison",
        "La fatigue du créateur",
      ],
      correct: 1,
      explain:
        "L'abonné voit la pile sur l'étagère. « J'ai trop de produits » est l'une des premières raisons de résiliation, souvent devant le prix.",
    },
    {
      id: 10,
      prompt: "Exit survey « pas mes goûts » : quel levier de rétention déployer ?",
      options: [
        "Une remise",
        "La personnalisation (le profil affiné devient un lock-in algorithmique)",
        "Le dunning",
        "Une cadence plus rapide",
      ],
      correct: 1,
      explain:
        "Plus la box est personnalisée, plus la rétention est élevée (Stitch Fix). Chaque motif d'exit survey désigne un chantier de design précis.",
    },
  ],
};

const module13: Quiz = {
  moduleSlug: "stack-technique-et-outils",
  title: "Quiz — Stack technique & outils",
  passMark: 14,
  questions: [
    {
      id: 1,
      prompt: "Pourquoi le choix du billing est-il la décision d'infrastructure n°1 ?",
      options: [
        "Parce que c'est le plus cher",
        "Parce que tout s'y branche et qu'en changer plus tard est un projet lourd (lock-in d'intégration subi)",
        "Parce qu'il est obligatoire légalement",
        "Parce qu'il gère le marketing",
      ],
      correct: 1,
      explain:
        "Le billing crée les abonnements, prélève, gère échecs et upgrades : c'est la brique fondatrice sur laquelle tout le reste se branche.",
    },
    {
      id: 2,
      prompt: "Avec Stripe Billing, qui est le marchand légal ?",
      options: [
        "Stripe",
        "Vous : la TVA internationale et la conformité restent votre affaire",
        "La banque de l'abonné",
        "Le client",
      ],
      correct: 1,
      explain:
        "Stripe vous outille, mais vous êtes le marchand. C'est la différence clé avec un Merchant of Record comme Paddle.",
    },
    {
      id: 3,
      prompt: "Pour un logiciel vendu mondialement par une petite équipe, quel billing privilégier ?",
      options: [
        "Stripe Billing",
        "Paddle (Merchant of Record) : TVA et conformité mondiales externalisées",
        "Chargebee",
        "Un tableur",
      ],
      correct: 1,
      explain:
        "On échange des points de marge contre l'absence totale d'administration fiscale internationale (TVA de dizaines de juridictions, chargebacks).",
    },
    {
      id: 4,
      prompt: "Quels sont les trois critères d'arbitrage du billing au-delà des marques ?",
      options: [
        "Le prix, la couleur, la popularité",
        "Qui est le marchand, le coût total à votre échelle, les capacités de rétention natives",
        "Le pays, la langue, la devise",
        "La rapidité, le design, le support",
      ],
      correct: 1,
      explain:
        "Le moins cher à 10 k€ de MRR n'est pas le moins cher à 100 k€. Et un billing sans recovery sérieux (dunning) coûte plus cher que sa commission.",
    },
    {
      id: 5,
      prompt: "Quand passer du tableur à un outil d'analytics d'abonnement dédié ?",
      options: [
        "Dès le premier mois",
        "Quand la maintenance du tableur dépasse une heure par semaine",
        "Jamais",
        "À 100 abonnés",
      ],
      correct: 1,
      explain:
        "Le dashboard du billing suffit aux premiers mois. Les mois passés dans le tableur auront appris les définitions mieux qu'aucun dashboard clé en main.",
    },
    {
      id: 6,
      prompt: "Qu'est-ce qui fait le pilotage complet ?",
      options: [
        "L'analytics d'abonnement seule",
        "Le croisement de l'analytics d'abonnement (revenu) et de l'analytics produit (usage) — le health score",
        "L'analytics produit seule",
        "Le dashboard du billing",
      ],
      correct: 1,
      explain:
        "Le revenu dit ce qui se passe, l'usage dit pourquoi et ce qui va se passer. Le Customer Health Score est leur croisement.",
    },
    {
      id: 7,
      prompt: "Comment s'appelle le dark pattern « facile d'entrer, difficile de sortir » ?",
      options: ["Le confirmshaming", "Le roach motel", "Le prix masqué", "L'urgence perpétuelle"],
      correct: 1,
      explain:
        "Souscription en un clic, résiliation par téléphone, menus introuvables : le plus répandu et le plus légiféré (click-to-cancel).",
    },
    {
      id: 8,
      prompt: "Comment un dark pattern peut-il « débrancher l'encaissement » ?",
      options: [
        "En augmentant les impôts",
        "Via les chargebacks : au-delà des seuils de litiges, perte du compte marchand",
        "En ralentissant le site",
        "En supprimant les emails",
      ],
      correct: 1,
      explain:
        "L'abonné qui ne peut pas résilier appelle sa banque. Le chargeback coûte le montant + des frais + un point de ratio que les processeurs surveillent.",
    },
    {
      id: 9,
      prompt: "Pourquoi la rétention par obstruction stérilise-t-elle le win-back ?",
      options: [
        "Parce qu'elle coûte cher",
        "Parce qu'on ne reconquiert pas quelqu'un qui s'est senti piégé",
        "Parce qu'elle est illégale",
        "Parce qu'elle augmente le NPS",
      ],
      correct: 1,
      explain:
        "C'est de la dette de churn à intérêts composés : elle se solde en vagues, avec ressentiment — et le partant piégé est perdu pour le win-back.",
    },
    {
      id: 10,
      prompt: "Quelle est la règle de clôture du module ?",
      options: [
        "Retenir l'abonné par tous les moyens",
        "Tout ce qui retient un abonné contre sa volonté est un emprunt sur le churn futur, au taux d'usure",
        "Le billing loyal est un handicap concurrentiel",
        "La transparence réduit la conversion",
      ],
      correct: 1,
      explain:
        "La save flow intercepte, la transparence convertit, la sortie digne est le premier acte du retour. Le billing loyal est l'infrastructure de la confiance.",
    },
  ],
};

const module14: Quiz = {
  moduleSlug: "transition-vers-l-abonnement",
  title: "Quiz — Passer au modèle d'abonnement",
  passMark: 14,
  questions: [
    {
      id: 1,
      prompt: "Qu'est-ce que le J-curve d'une transition vers l'abonnement ?",
      options: [
        "Une croissance linéaire et continue",
        "La courbe de revenu qui plonge avant de remonter plus haut que jamais (18-36 mois)",
        "Une chute définitive du revenu",
        "Un pic de revenu suivi d'un déclin",
      ],
      correct: 1,
      explain:
        "Le client qui payait 1 000 € de licence paie 30 €/mois : le CA baisse pendant que la base se construit, avant de dépasser l'ancien modèle.",
    },
    {
      id: 2,
      prompt: "Le J-curve est avant tout :",
      options: [
        "Un risque à éviter",
        "Un coût à financer : un projet de bilan autant que de pricing",
        "Un problème marketing",
        "Une erreur de modélisation",
      ],
      correct: 1,
      explain:
        "La leçon Adobe : il faut pouvoir traverser le creux sans paniquer (trésorerie, financement, ou rythme de bascule).",
    },
    {
      id: 3,
      prompt: "Pourquoi refondre la rémunération commerciale AVANT la bascule ?",
      options: [
        "Pour réduire les coûts",
        "Sinon la force de vente sabote la transition en continuant de vendre l'ancien monde",
        "Pour augmenter les marges",
        "Parce que c'est une obligation légale",
      ],
      correct: 1,
      explain:
        "La rému assise sur le gros chèque de licence doit passer à la valeur du contrat récurrent — le chantier politique n°1.",
    },
    {
      id: 4,
      prompt: "Quel est le critère de choix entre bascule franche (Adobe) et par gravité (Microsoft) ?",
      options: [
        "La taille de l'entreprise",
        "Le pouvoir de marché et la dépendance des clients (imposer vs séduire)",
        "Le secteur d'activité",
        "Le pays d'origine",
      ],
      correct: 1,
      explain:
        "Adobe pouvait imposer (pas d'alternative pour les créatifs) ; Microsoft, exposé au grand public, devait séduire par la coexistence inclinée.",
    },
    {
      id: 5,
      prompt: "Quel est le pire scénario d'une transition ?",
      options: [
        "Un J-curve trop long",
        "Le rétropédalage à mi-creux : payer le coût sans en toucher les bénéfices",
        "Un backlash médiatique",
        "Une migration trop rapide",
      ],
      correct: 1,
      explain:
        "D'où la communication financière explicite du J-curve aux actionnaires (Adobe) : la condition pour ne pas se faire arrêter en plein gué.",
    },
    {
      id: 6,
      prompt: "Que fait la phase 1 (Valider avant de basculer) ?",
      options: [
        "Elle migre toute la base d'un coup",
        "Elle offre l'abonnement en parallèle aux nouveaux clients et mesure, sans rien retirer",
        "Elle supprime l'ancien modèle",
        "Elle augmente les prix",
      ],
      correct: 1,
      explain:
        "Remplacer la conviction par une preuve : si les chiffres invalident, on a appris pour le prix d'un pilote, pas de l'entreprise.",
    },
    {
      id: 7,
      prompt: "Pourquoi un abonnement qui ne change que le mode de paiement échoue-t-il ?",
      options: [
        "Parce qu'il est trop cher à opérer",
        "C'est une hausse de prix déguisée : le client fait le calcul pluriannuel, et il a raison",
        "Parce que les stores l'interdisent",
        "Parce qu'il augmente le churn involontaire",
      ],
      correct: 1,
      explain:
        "L'abonnement doit délivrer plus que l'ancien modèle, visiblement, dès le premier jour (cloud, mises à jour, accumulation).",
    },
    {
      id: 8,
      prompt: "Quel est le bon ordre de communication en phase 3 (Migrer la base) ?",
      options: [
        "Le prix avant la valeur",
        "Le récit de valeur avant le récit de prix",
        "Uniquement le prix",
        "Aucune communication",
      ],
      correct: 1,
      explain:
        "La phase 2 fournit les munitions : on annonce ce que le client gagne, la modalité de paiement vient ensuite (avec segmentation par profil).",
    },
    {
      id: 9,
      prompt: "Comment honorer les clients existants lors de la migration ?",
      options: [
        "En ignorant leur ancienneté",
        "Par le crédit de l'existant (remise selon la récence) et le grandfathering des migrants précoces",
        "En augmentant leur prix en premier",
        "En supprimant leur accès",
      ],
      correct: 1,
      explain:
        "La fidélité créditée (leçon Adobe) et le tarif de lancement garanti amorcent la pompe et fournissent les témoignages.",
    },
    {
      id: 10,
      prompt: "À quelle échéance se jugent les transitions ?",
      options: ["3 mois", "24-36 mois", "5 ans minimum", "Immédiatement"],
      correct: 1,
      explain:
        "Chaque cas (Adobe, Microsoft, NYT) a traversé son creux et ses critiques avant ses records.",
    },
  ],
};

const module15: Quiz = {
  moduleSlug: "case-studies",
  title: "Quiz — Les 20 case studies",
  passMark: 14,
  questions: [
    {
      id: 1,
      prompt: "Quelle est la leçon centrale de la transition DVD → streaming de Netflix ?",
      options: [
        "Ne jamais changer de modèle",
        "Se cannibaliser soi-même avant d'être cannibalisé",
        "Maximiser les pénalités de retard",
        "Attendre que le marché bascule",
      ],
      correct: 1,
      explain:
        "Le streaming a tué le DVD de Netflix — et c'est pour ça que Netflix a survécu. Plus l'illimité sans pénalités (le revenu par la sérénité).",
    },
    {
      id: 2,
      prompt: "Pourquoi la conversion freemium de Spotify (> 40 %) est-elle unique ?",
      options: [
        "Grâce à des campagnes marketing massives",
        "Grâce à la pression structurelle du free (mobile aléatoire, pub) — le modèle convertit, pas le marketing",
        "Parce que le premium est gratuit",
        "Parce qu'il n'y a pas de free",
      ],
      correct: 1,
      explain:
        "Le free se calibre contre l'alternative gratuite (le piratage). La conversion vient de la pression structurelle, pas des campagnes.",
    },
    {
      id: 3,
      prompt: "Que démontre Duolingo sur le taux de conversion freemium ?",
      options: [
        "Qu'il est une constante du marché",
        "Que c'est un produit du travail (de ~3 % à ~9 % par 300 tests/trimestre)",
        "Qu'il dépend uniquement du prix",
        "Qu'il faut dégrader le gratuit",
      ],
      correct: 1,
      explain:
        "Les grands résultats d'optimisation sont des sommes, pas un coup de génie — sans jamais dégrader le produit gratuit.",
    },
    {
      id: 4,
      prompt: "Quelle leçon Peloton illustre-t-il sur l'entreprise vs l'abonnement ?",
      options: [
        "Une bonne rétention garantit la santé de l'entreprise",
        "La rétention d'abonnement et la santé de l'entreprise sont deux questions distinctes",
        "Le hardware est toujours rentable",
        "La communauté ne sert à rien",
      ],
      correct: 1,
      explain:
        "La meilleure rétention du marché (~1 % de churn) n'a pas suffi à sauver une économie de hardware mal pilotée (surproduction post-Covid).",
    },
    {
      id: 5,
      prompt: "Quelle est la différence entre les transitions Adobe et Microsoft ?",
      options: [
        "Adobe a échoué, Microsoft a réussi",
        "Adobe = bascule franche (pouvoir d'imposer) ; Microsoft = bascule par gravité (devait séduire)",
        "Microsoft a tué la licence du jour au lendemain",
        "Adobe n'a pas communiqué son J-curve",
      ],
      correct: 1,
      explain:
        "Le critère de choix est le pouvoir de marché : Adobe pouvait imposer, Microsoft (exposé au grand public) devait incliner le terrain.",
    },
    {
      id: 6,
      prompt: "Quel est le chef-d'œuvre du freemium B2B de Slack ?",
      options: [
        "Le nombre d'intégrations",
        "La limite d'archives : indolore au début, sa douleur croît avec la valeur reçue",
        "Le prix bas",
        "La publicité ciblée",
      ],
      correct: 1,
      explain:
        "Elle frappe au moment de besoin maximal (« il faut retrouver ce message »), et c'est l'entreprise qui paie, pas l'utilisateur.",
    },
    {
      id: 7,
      prompt: "Que démontre Figma sur la collaboration ?",
      options: [
        "Que c'est une simple fonctionnalité",
        "Que c'est un modèle économique : chaque invité est acquisition, expansion ET lock-in",
        "Qu'elle ralentit le produit",
        "Qu'elle ne concerne que les designers",
      ],
      correct: 1,
      explain:
        "Le design system déposé est l'asset par excellence. Quand Adobe propose 20 Md$, c'est que le switching cost a changé de camp.",
    },
    {
      id: 8,
      prompt: "Quelle est la thèse comportementale d'Amazon Prime ?",
      options: [
        "La livraison rapide est rentable à l'unité",
        "Un client qui a prépayé la livraison cesse de comparer : chaque achat ailleurs devient une perte",
        "Le contenu vidéo est le produit principal",
        "Les membres dépensent moins",
      ],
      correct: 1,
      explain:
        "Prime perd de l'argent sur la livraison et en gagne sur tout le reste : le membre dépense 2 à 4× le non-membre. Le P&L se lit en vision client complète.",
    },
    {
      id: 9,
      prompt: "Quelle leçon Stitch Fix donne-t-il sur le lock-in algorithmique ?",
      options: [
        "Il sauve n'importe quel modèle",
        "Il vaut ce que vaut l'économie qu'il protège : un switching cost élevé sur une marge faible retient des clients qui rapportent peu",
        "Il est impossible en physique",
        "Il remplace la marge",
      ],
      correct: 1,
      explain:
        "La thèse ET l'antithèse du Module 7.3 en une trajectoire : la personnalisation améliore la rétention, elle ne répare pas une économie unitaire contrainte.",
    },
    {
      id: 10,
      prompt: "Que démontre LinkedIn Premium sur la disposition à payer ?",
      options: [
        "Qu'elle est fixe pour un produit donné",
        "Qu'elle est une propriété du cas d'usage : le même actif vaut 30 € au particulier et 800 € à l'entreprise",
        "Qu'il faut faire payer l'accès au réseau",
        "Qu'un seul plan suffit",
      ],
      correct: 1,
      explain:
        "On ne vend jamais le réseau, on vend des superpouvoirs segmentés par intention (Career, Sales Navigator, Recruiter). La segmentation par intention bat celle par volume.",
    },
  ],
};

const module16: Quiz = {
  moduleSlug: "40-erreurs-classiques",
  title: "Quiz — Les 40 erreurs classiques",
  passMark: 14,
  questions: [
    {
      id: 1,
      prompt: "Quelle est « l'erreur n°1 du métier » au lancement ?",
      options: [
        "Proposer trop de plans",
        "Confondre « utile une fois » et valeur continue justifiant un abonnement",
        "Oublier le pricing international",
        "Lancer en août",
      ],
      correct: 1,
      explain:
        "Le besoin qui ne se régénère pas produit un churn structurel à 15-25 % que rien ne réparera. Le test de la valeur justifiée d'abord (M3.1).",
    },
    {
      id: 2,
      prompt: "Pourquoi mesurer le taux de complétion de l'onboarding est-il une erreur ?",
      options: [
        "Parce qu'il est difficile à calculer",
        "Parce que 90 % de complétion peut coexister avec 100 % de churn : il mesure l'obéissance, pas la valeur",
        "Parce qu'il varie trop",
        "Parce qu'il n'existe pas en B2B",
      ],
      correct: 1,
      explain:
        "La bonne étoile polaire est le Time-to-First-Value (M5.5). La complétion mesure l'obéissance au parcours, pas l'activation.",
    },
    {
      id: 3,
      prompt: "Quelle est la bonne pratique de grandfathering lors d'une hausse ?",
      options: [
        "Toujours sans limite de durée",
        "Le borner (« garanti 24 mois » ou « tant que l'abonnement reste actif »)",
        "Ne jamais l'utiliser",
        "L'appliquer aux nouveaux clients",
      ],
      correct: 1,
      explain:
        "#20 : le tarif protégé à vie crée une complexité qui s'accumule indéfiniment. Grandfatherer oui, sans borne jamais (M4.4).",
    },
    {
      id: 4,
      prompt: "Quel pourcentage du churn est typiquement involontaire (et donc à ne pas traiter comme du vrai churn) ?",
      options: ["Moins de 5 %", "20-40 %", "50-60 %", "80 %"],
      correct: 1,
      explain:
        "#23 : dont 60-70 % de soft declines récupérables. Chercher des causes produit à une panne de carte, c'est négliger le dunning (M7.10).",
    },
    {
      id: 5,
      prompt: "À quoi se mesure une save flow ?",
      options: [
        "Au taux de déflection brut",
        "À la rétention à 90 jours des sauvés (sinon on confond churn différé et churn évité)",
        "Au nombre d'écrans",
        "Au montant des discounts",
      ],
      correct: 1,
      explain:
        "#27 : le « sauvé » par remise sans cause traitée repart en 60-90 jours. Le taux de déflection brut ment.",
    },
    {
      id: 6,
      prompt: "Pourquoi calculer le churn sur la base totale est-il une erreur d'analyse ?",
      options: [
        "Parce que c'est trop lent",
        "Parce qu'en croissance, les clients récents diluent le chiffre — on découvre le problème deux ans trop tard",
        "Parce que c'est illégal",
        "Parce que ça surestime le churn",
      ],
      correct: 1,
      explain:
        "#31 : le churn « global » flatteur masque la fonte des cohortes anciennes. Seule la cohorte fixe est honnête (M6.3).",
    },
    {
      id: 7,
      prompt: "Pourquoi est-ce une erreur d'inclure les revenus one-shot dans le MRR ?",
      options: [
        "Parce que c'est interdit fiscalement",
        "Parce qu'ils gonflent un MRR fictif — et la LTV, le payback et la valorisation avec lui",
        "Parce qu'ils sont trop petits",
        "Parce qu'ils sont saisonniers",
      ],
      correct: 1,
      explain:
        "#32 : si le revenu ne se représente pas contractuellement le mois prochain, il n'est pas dans le MRR (M1.4).",
    },
    {
      id: 8,
      prompt: "Quel « prédateur silencieux » ne faut-il pas ignorer en analyse ?",
      options: [
        "Le churn volontaire",
        "La contraction (les downgrades qui précèdent les churns)",
        "Le NPS",
        "Le CAC",
      ],
      correct: 1,
      explain:
        "#35 : elle ronge le MRR sans événement à intercepter. La suivre en ligne séparée est le seul moyen de la voir (M6.1).",
    },
    {
      id: 9,
      prompt: "Quelle est l'erreur de croissance fondamentale ?",
      options: [
        "Investir dans le produit",
        "Optimiser l'acquisition avant de réparer la rétention (remplir un seau percé)",
        "Embaucher trop vite",
        "Lancer trop de fonctionnalités",
      ],
      correct: 1,
      explain:
        "#36 : remplir un seau percé coûte de plus en plus cher à l'échelle. La rétention se répare d'abord car elle multiplie le rendement de tout le reste (M6.2).",
    },
    {
      id: 10,
      prompt: "Que faut-il impérativement pouvoir montrer à des investisseurs ?",
      options: [
        "La croissance brute du MRR",
        "Le NRR (sous 100 % sans explication ni plan, le reste du deck ne sera pas lu)",
        "Le nombre d'employés",
        "Le budget marketing",
      ],
      correct: 1,
      explain:
        "#40 : le NRR est la première pièce du dossier — le seul chiffre qui prouve la qualité du produit avec de l'argent (M8).",
    },
  ],
};

export const QUIZZES: Record<string, Quiz> = {
  [module1.moduleSlug]: module1,
  [module2.moduleSlug]: module2,
  [module3.moduleSlug]: module3,
  [module4.moduleSlug]: module4,
  [module5.moduleSlug]: module5,
  [module6.moduleSlug]: module6,
  [module7.moduleSlug]: module7,
  [module7bis.moduleSlug]: module7bis,
  [module8.moduleSlug]: module8,
  [module9.moduleSlug]: module9,
  [module10.moduleSlug]: module10,
  [module11.moduleSlug]: module11,
  [module12.moduleSlug]: module12,
  [module13.moduleSlug]: module13,
  [module14.moduleSlug]: module14,
  [module15.moduleSlug]: module15,
  [module16.moduleSlug]: module16,
};

export function getQuiz(slug: string): Quiz | undefined {
  return QUIZZES[slug];
}
