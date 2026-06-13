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

export const QUIZZES: Record<string, Quiz> = {
  [module1.moduleSlug]: module1,
  [module2.moduleSlug]: module2,
  [module3.moduleSlug]: module3,
  [module4.moduleSlug]: module4,
  [module5.moduleSlug]: module5,
  [module6.moduleSlug]: module6,
  [module7.moduleSlug]: module7,
};

export function getQuiz(slug: string): Quiz | undefined {
  return QUIZZES[slug];
}
