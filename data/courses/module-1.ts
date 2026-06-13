import type { CourseContent } from "@/lib/content-types";

export const moduleOne: CourseContent = {
  moduleSlug: "economie-de-l-abonnement",
  hasGames: true,
  hasQuiz: true,
  lessons: [
    // ────────────────────────────────────────────────────────────
    {
      slug: "rupture-de-paradigme",
      index: 1,
      ref: "1.1",
      title: "Une rupture de paradigme",
      subtitle: "L'abonnement n'est pas un mode de paiement — c'est un contrat de confiance dans le temps.",
      minutes: 11,
      blocks: [
        {
          type: "lead",
          text: "La première erreur — la plus répandue, la plus coûteuse — consiste à voir l'abonnement comme une simple modalité de paiement : « le même produit, mais facturé chaque mois ». Cette vision condamne presque mécaniquement à l'échec.",
        },
        {
          type: "p",
          text: "Quand un client **achète**, il évalue une fois, paie une fois, et la relation peut s'arrêter là. Quand un client **s'abonne**, il signe autre chose : « je te fais confiance pour continuer à me délivrer de la valeur, cycle après cycle, et je romps dès que tu cesses ». La vente classique est un examen qu'on passe une fois ; l'abonnement, un examen qu'on **repasse à chaque renouvellement**.",
        },
        {
          type: "callout",
          tone: "fire",
          title: "Le renversement",
          text: "Dans la vente unique, tout l'effort se concentre AVANT la transaction. Dans l'abonnement, la transaction initiale n'est que le ticket d'entrée — l'essentiel de la valeur se gagne (ou se perd) APRÈS. Consacrer 90 % de son énergie à l'acquisition, c'est optimiser le moment le moins important de la relation.",
        },
        { type: "h2", text: "Vendre une fois vs s'engager pour toujours" },
        {
          type: "compare",
          left: {
            title: "Le vendeur",
            tone: "neutral",
            points: [
              "**Revenu** : 100 € aujourd'hui, zéro demain. Chaque mois repart de zéro.",
              "**Risque** de demande : si les ventes s'effondrent, le revenu s'effondre.",
              "**Information** : sait peu de chose du client après la vente.",
              "**Incitation** à survendre : payé avant que le client découvre le produit.",
            ],
          },
          right: {
            title: "L'opérateur d'abonnement",
            tone: "fire",
            points: [
              "**Revenu** : 10 € aujourd'hui, mais une base installée qui paie déjà demain. Le revenu s'empile.",
              "**Risque** de rétention : lent, prévisible. Un mauvais mois n'ampute que marginalement.",
              "**Information** : observe l'usage en continu — un actif stratégique pour prédire le churn.",
              "**Incitation** alignée : si le produit déçoit, l'abonné part. On ne gagne qu'en délivrant vraiment.",
            ],
          },
        },
        {
          type: "p",
          text: "Au bout de **dix mois** de rétention, les revenus des deux modèles s'égalisent ; au-delà, l'abonnement gagne — et de plus en plus, car le revenu de chaque nouveau client s'empile sur celui des précédents au lieu de le remplacer.",
        },
        { type: "h2", text: "Pourquoi la bourse paie plus cher un euro d'abonnement" },
        {
          type: "p",
          text: "Une entreprise de vente classique se valorise typiquement **1× à 3×** son chiffre d'affaires. Une entreprise d'abonnement en croissance se valorise en multiple d'ARR : historiquement **5× à 15×** pour le SaaS, davantage pour les profils exceptionnels.",
        },
        {
          type: "keynumbers",
          items: [
            { value: "1–3×", label: "Multiple de CA — commerce classique" },
            { value: "5–15×", label: "Multiple d'ARR — SaaS en croissance" },
            { value: "×10+", label: "Capitalisation d'Adobe après sa bascule" },
          ],
        },
        {
          type: "p",
          text: "Pourquoi un tel écart pour le même euro ? Parce que ce n'est pas le même euro. L'euro de vente unique est un euro **passé** : il ne dit rien de l'an prochain. L'euro d'ARR est un euro **engagé** : sauf churn, il se représentera. L'argument massue tient en une ligne : **la prévisibilité du revenu abaisse le coût du capital.**",
        },
        { type: "h2", text: "De la transaction à la relation" },
        {
          type: "p",
          text: "Dans la transaction, le client est un **compteur** : il a acheté N fois. Dans l'abonnement, le client est une **relation avec un état** : actif, engagé, à risque, en pause, churné, récupéré. Cette grammaire relationnelle justifie l'existence de fonctions entières — customer success, lifecycle marketing, rétention — sans équivalent dans la vente classique.",
        },
        {
          type: "callout",
          tone: "info",
          title: "Le paradoxe de l'abonnement",
          text: "On gagne plus en donnant plus. Comme la LTV = revenu mensuel × durée de vie, chaque supplément de valeur qui allonge la durée rapporte — tant que son coût marginal reste inférieur à la rétention créée. Netflix dépense des milliards en contenu non par générosité, mais parce que chaque heure de plus est un argument de moins pour résilier.",
        },
        { type: "h2", text: "Concept clé : la « forever transaction »" },
        {
          type: "quote",
          text: "La forever transaction, c'est l'instant où un client cesse d'évaluer le service à chaque cycle et commence à lui appartenir — où la question mensuelle « est-ce que ça vaut encore le coup ? » disparaît de son esprit.",
          cite: "Robbie Kellman Baxter",
        },
        {
          type: "p",
          text: "Avant, l'abonné est un **évaluateur** : chaque prélèvement est un mini-procès du produit. Après, l'abonnement rejoint la catégorie mentale des évidences — comme l'électricité. Personne ne se demande chaque mois s'il faut « garder l'électricité ».",
        },
        {
          type: "p",
          text: "Toute la stratégie de rétention se relit alors comme une seule question : **qu'est-ce qui fait franchir la forever transaction, et qu'est-ce qui risque de réveiller l'évaluateur endormi ?** Une hausse de prix maladroite, un bug répété, un email qui rappelle à un inactif qu'il paie : autant d'événements qui rouvrent le procès. Ce fil rouge traverse tout le parcours.",
        },
      ],
      takeaways: [
        "L'abonnement est un contrat de confiance dans le temps, pas une facturation récurrente.",
        "La valeur se gagne après la transaction initiale : priorisez la rétention.",
        "La prévisibilité du revenu abaisse le coût du capital — d'où les multiples de valorisation.",
        "Objectif ultime : faire franchir à l'abonné la « forever transaction ».",
      ],
    },

    // ────────────────────────────────────────────────────────────
    {
      slug: "histoire-et-evolution",
      index: 2,
      ref: "1.2",
      title: "Histoire et évolution du modèle",
      subtitle: "Le numérique n'a pas inventé l'abonnement : il a industrialisé un modèle vieux de plusieurs siècles.",
      minutes: 10,
      blocks: [
        {
          type: "lead",
          text: "L'abonnement semble être une invention de l'ère numérique. C'est faux. Chaque époque a légué des mécaniques encore actives aujourd'hui — les connaître n'est pas un luxe culturel.",
        },
        { type: "h2", text: "L'abonnement pré-digital : fascicules, clubs et laitiers" },
        {
          type: "p",
          text: "Les journaux du XIXᵉ vivaient d'abonnés ; les encyclopédies se vendaient en **fascicules hebdomadaires** — un modèle génial qui transformait un achat impossible en micro-paiements indolores, avec un lock-in naturel : qui abandonne sa collection au fascicule 47 sur 120 ? Les **clubs de livres** ont ajouté la curation. La **livraison du lait** a installé le service récurrent par défaut : le produit arrive sans qu'on le commande, et c'est l'interruption qui demande un acte.",
        },
        {
          type: "callout",
          tone: "fire",
          title: "Trois mécaniques déjà là",
          text: "Le fractionnement du paiement (rendre l'inabordable accessible), la curation (payer quelqu'un pour choisir à sa place), et le défaut de reconduction — la plus puissante des trois, sur laquelle repose encore aujourd'hui l'essentiel de l'industrie.",
        },
        { type: "h2", text: "1999 — Le pari SaaS" },
        {
          type: "p",
          text: "L'acte fondateur de l'ère moderne : **Salesforce**, 1999, slogan provocateur « The End of Software ». Le logiciel d'entreprise ne s'achète plus en licence perpétuelle, il se loue au mois, par utilisateur, dans un navigateur. Le pari portait moins sur la technologie que sur la finance : **échanger de gros chèques immédiats contre des petits chèques perpétuels.** « SaaS » est devenu synonyme de « logiciel ».",
        },
        { type: "h2", text: "2007 — Le moment Netflix" },
        {
          type: "p",
          text: "Netflix réussit deux paris successifs. **1999** : remplacer la location de DVD à l'acte (et ses pénalités de retard détestées) par un abonnement illimité — le revenu vient de la sérénité du client, pas de ses fautes. **2007** : le streaming transforme l'abonnement logistique en abonnement d'accès pur. Une génération entière apprend que **l'accès vaut mieux que la propriété.**",
        },
        { type: "h2", text: "2010-2020 — Une discipline outillée" },
        {
          type: "p",
          text: "Le modèle cesse d'être une astuce pour devenir une discipline. **Zuora** popularise « subscription economy » ; Baxter théorise la membership economy ; les métriques se standardisent (MRR, NRR, cohortes) ; des stacks émergent (Stripe Billing, Chargebee, ChartMogul). L'abonnement colonise le rasoir (Dollar Shave Club), le repas (HelloFresh), la voiture, le vêtement.",
        },
        { type: "h2", text: "Aujourd'hui — La subscription fatigue" },
        {
          type: "keynumbers",
          items: [
            { value: "5–6", label: "Abonnements actifs par consommateur" },
            { value: "4,5", label: "Plateformes de streaming par foyer (US)" },
            { value: "~40 %", label: "Des consommateurs ressentent la subscription fatigue" },
          ],
        },
        {
          type: "p",
          text: "La décennie 2020 a apporté la gueule de bois : plus de la moitié des consommateurs ont résilié au moins un abonnement dans l'année pour sous-utilisation. La phase « je m'abonne à tout » est terminée. Pour l'opérateur, ce n'est pas une fatalité mais un **changement de règles** :",
        },
        {
          type: "list",
          items: [
            "**La flexibilité** (pause, skip, downgrade) est devenue une attente de base, plus un bonus.",
            "**La transparence tarifaire et la résiliation facile**, souvent imposées par la loi, deviennent paradoxalement des arguments de conversion.",
            "**La barre de valeur perçue monte** : chaque abonnement concurrence désormais tous les autres du foyer dans l'arbitrage budgétaire.",
          ],
        },
        { type: "h2", text: "L'abonnement à l'ère de l'IA" },
        {
          type: "p",
          text: "L'IA est devenue la catégorie d'abonnement à la croissance la plus rapide de l'histoire (ChatGPT, Claude, GitHub Copilot), avec une mécanique inédite : **la valeur croît avec les modèles, sans action de l'abonné** — un produit qui s'améliore seul. Mais le coût marginal d'une requête n'étant pas nul, le flat illimité montre ses limites et l'industrie hybride vers l'usage-based et les crédits.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "Le monde des agents",
          text: "Quand un agent IA compare, souscrit et résilie pour son utilisateur, des pans entiers de la psychologie de l'abonné (inertie, fatigue, oubli) cessent de fonctionner. Un abonnement choisi par un agent rationnel ne bénéficie plus de la rétention par défaut : seule la valeur mesurable le protège.",
        },
        { type: "h2", text: "Timeline : soixante ans d'évolution" },
        {
          type: "timeline",
          items: [
            { period: "Avant 1960", jalon: "Journaux, fascicules, clubs de livres, livraison à domicile", legacy: "Fractionnement, curation, reconduction par défaut" },
            { period: "1960-1990", jalon: "Presse de masse, clubs de disques, TV câblée", legacy: "Marketing direct, fichier d'abonnés, dunning postal" },
            { period: "1999", jalon: "Salesforce — « The End of Software »", legacy: "Louer plutôt que vendre le logiciel" },
            { period: "1999-2007", jalon: "Netflix DVD : l'illimité sans pénalités", legacy: "Le revenu par la sérénité, pas la friction" },
            { period: "2007-2013", jalon: "Streaming Netflix, lancement de Spotify", legacy: "L'accès remplace la propriété" },
            { period: "2010-2020", jalon: "Zuora, membership economy, Dollar Shave, HelloFresh", legacy: "Une discipline outillée qui colonise le physique" },
            { period: "2020-2024", jalon: "Saturation, subscription fatigue, lois sur la résiliation", legacy: "Flexibilité et transparence deviennent des standards" },
            { period: "2023-…", jalon: "Abonnements IA, usage-based, crédits, agents", legacy: "La valeur auditée en continu remplace l'inertie" },
          ],
        },
      ],
      takeaways: [
        "Trois mécaniques ancestrales tiennent encore l'industrie : fractionnement, curation, reconduction par défaut.",
        "Salesforce (SaaS) et Netflix (accès) sont les deux actes fondateurs modernes.",
        "La subscription fatigue impose flexibilité, transparence et valeur démontrée.",
        "L'IA et les agents rationnels érodent la rétention par inertie : seule la valeur mesurable protège.",
      ],
    },

    // ────────────────────────────────────────────────────────────
    {
      slug: "cartographie-des-modeles",
      index: 3,
      ref: "1.3",
      title: "Les 8 archétypes d'abonnement",
      subtitle: "« Abonnement » est un mot-valise. Confondre les archétypes, c'est appliquer les mauvais benchmarks, la mauvaise rétention, le mauvais pricing.",
      minutes: 13,
      blocks: [
        {
          type: "lead",
          text: "Avant toute chose, il faut savoir dans quel modèle on joue. Huit grands archétypes structurent le paysage. Pour chacun : la mécanique de valeur, le profil de churn, les benchmarks, et le piège principal.",
        },
        { type: "widget", name: "archetype-explorer" },
        { type: "h2", text: "Synthèse comparative" },
        {
          type: "table",
          head: ["Archétype", "Churn mensuel", "Lock-in naturel", "Coût marginal", "Métrique critique"],
          rows: [
            ["1. Contenu", "3-6 %", "Moyen", "Quasi nul", "Consommation / abonné"],
            ["2. SaaS", "0,5-7 %", "Fort", "Quasi nul", "NRR, usage hebdo"],
            ["3. Service", "2-4 %", "Fort si fréquent", "Variable", "Fréquence de transaction"],
            ["4. Box physique", "5-15 %", "Faible", "Élevé", "Rétention M3, marge/cycle"],
            ["5. Communauté", "Bimodal", "Émotionnel", "Quasi nul", "Engagement communautaire"],
            ["6. Usage-based", "Contraction", "Fort", "Variable", "NRR, consommation"],
            ["7. Creator", "5-10 %", "Faible/émotionnel", "Temps du créateur", "Régularité de production"],
            ["8. Marketplace", "Très faible (pro)", "Très fort", "Quasi nul", "Liquidité des 2 faces"],
          ],
          caption: "Un business peut combiner plusieurs archétypes — Amazon en cumule au moins trois — mais il a toujours un dominant, qui dicte ses benchmarks et ses priorités.",
        },
        {
          type: "callout",
          tone: "fire",
          title: "Le premier réflexe",
          text: "Identifier son archétype dominant est le tout premier exercice du métier. Testez-le sur 12 business dans le mini-jeu de fin de module : certains cas combinent deux archétypes — l'enjeu est d'identifier le dominant.",
        },
      ],
      takeaways: [
        "Huit archétypes, chacun avec son churn, son lock-in et son piège propres.",
        "Le coût marginal change tout : quasi nul (contenu, SaaS) vs élevé (box physique).",
        "En usage-based, le churn devient contraction : le NRR est la métrique reine.",
        "Tout business a un archétype dominant qui dicte ses benchmarks.",
      ],
    },

    // ────────────────────────────────────────────────────────────
    {
      slug: "metriques-qui-gouvernent",
      index: 4,
      ref: "1.4",
      title: "Les métriques qui gouvernent tout",
      subtitle: "Le modèle le plus mesurable jamais inventé — et le piège : mal définies, les métriques mentent avec une parfaite assurance.",
      minutes: 14,
      blocks: [
        {
          type: "lead",
          text: "Chaque relation client produit un flux continu de données. C'est une force et un piège. Voici les définitions exactes, les formules, et les erreurs qui faussent les tableaux de bord de la majorité des débutants.",
        },
        { type: "h2", text: "Le trio fondamental" },
        { type: "h3", text: "MRR — Monthly Recurring Revenue" },
        {
          type: "list",
          items: [
            "Un abonnement annuel à 120 € compte pour **10 € de MRR** — jamais 120 € le mois de l'encaissement.",
            "On inclut **uniquement le récurrent contractuel**. On exclut le one-shot (setup, services ponctuels), les taxes, et les essais non convertis.",
            "Le MRR se décompose toujours en cinq flux : **new, expansion, reactivation, contraction, churn**.",
          ],
        },
        { type: "widget", name: "mrr-movement" },
        {
          type: "callout",
          tone: "warn",
          title: "Le MRR movement, pas le MRR total",
          text: "+50 de new et −40 de churn donnent le même +10 que +12 de new et −2 de churn, pour deux business à l'avenir radicalement différent. C'est le mouvement, et non le total, qui dit la vérité.",
        },
        { type: "h3", text: "Le churn rate — trois calculs, trois vérités" },
        {
          type: "list",
          ordered: true,
          items: [
            "**Churn clients simple** : clients perdus ÷ clients en début de mois. Lisible, mais biaisé en acquisition rapide.",
            "**Churn par cohorte** : on suit un groupe arrivé le même mois. La seule méthode honnête — la référence (Module 6).",
            "**Revenue churn** : MRR perdu ÷ MRR de début. Indispensable dès que les paniers diffèrent.",
          ],
        },
        {
          type: "p",
          text: "Toujours distinguer **logo churn** (combien de clients) et **revenue churn** (combien d'euros). Un B2B peut afficher 10 % de logo churn et 2 % de revenue churn si seuls les petits comptes partent — ou l'inverse, ce qui est une alerte rouge.",
        },
        { type: "h3", text: "LTV — Lifetime Value" },
        { type: "formula", expr: "LTV = ARPU ÷ churn mensuel", note: "20 € à 4 % de churn = 500 € (durée de vie 25 mois)" },
        { type: "formula", expr: "LTV = (ARPU × marge brute %) ÷ churn mensuel", note: "La version honnête : 500 € à 30 % de marge ne valent que 150 € de LTV réelle" },
        {
          type: "callout",
          tone: "info",
          text: "Deux mises en garde : la LTV suppose un churn constant (faux — il décroît avec l'ancienneté), et ne doit JAMAIS être calculée sur un churn mesuré en période promotionnelle.",
        },
        { type: "widget", name: "ltv-calculator" },
        { type: "h2", text: "Les métriques dérivées" },
        {
          type: "list",
          items: [
            "**ARR = MRR × 12.** Domine en B2B et en communication investisseurs ; le MRR domine le pilotage B2C.",
            "**ARPU vs ARPPU.** 1 M d'utilisateurs dont 30 000 payants à 10 € → ARPU 0,30 € (monétisation de l'audience), ARPPU 10 € (pricing des abonnés). Les confondre mène à des comparaisons absurdes.",
            "**CAC** = (marketing + commercial + salaires & outils acquisition) ÷ nouveaux clients payants. Le CAC limité à la pub sous-estime de **30 à 60 %**.",
          ],
        },
        { type: "formula", expr: "Payback = CAC ÷ (ARPU mensuel × marge brute %)", note: "Cible : 3-6 mois en B2C, 12-18 mois en B2B SaaS" },
        { type: "h3", text: "NRR — Net Revenue Retention" },
        { type: "formula", expr: "NRR = (MRR cohorte + expansion − contraction − churn) ÷ MRR début × 100" },
        {
          type: "keynumbers",
          items: [
            { value: "< 90 %", label: "Problème structurel" },
            { value: "100-110 %", label: "Sain" },
            { value: "120 %+", label: "Exceptionnel — plus hauts multiples" },
          ],
        },
        {
          type: "p",
          text: "Un NRR de 110 % signifie que les clients d'il y a un an génèrent aujourd'hui 110 % de leur revenu d'alors, **sans aucun nouveau client**. C'est la différence entre un business qui court pour rester immobile et un business qui **croît en dormant**.",
        },
        { type: "h3", text: "Le ratio DAU/MAU" },
        {
          type: "p",
          text: "Actifs quotidiens ÷ actifs mensuels : le meilleur proxy simple de la place du produit dans la vie de l'utilisateur. Sous **10 %** : usage épisodique ; **20-30 %** : excellent ; **30 %+** (Duolingo, messageries) : habitude quotidienne. À juger contre la fréquence naturelle du besoin — un logiciel de déclaration fiscale n'a pas vocation à être quotidien.",
        },
        { type: "h2", text: "Le tableau de bord minimum viable" },
        {
          type: "p",
          text: "Sept chiffres, chaque semaine, sur une page. Tout le reste est du zoom.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "MRR et sa décomposition new / expansion / reactivation / contraction / churn",
            "Churn clients du mois (×12 mentalement pour sentir la gravité)",
            "Churn de revenu (ou NRR en B2B)",
            "Nouveaux abonnés payants de la semaine, par canal",
            "Taux de conversion du funnel principal (trial → payant)",
            "Engagement : la métrique d'usage la plus liée à la rétention",
            "Échecs de paiement en cours et taux de récupération",
          ],
        },
        {
          type: "callout",
          tone: "fire",
          text: "La discipline compte plus que l'outillage : un Google Sheet rempli chaque lundi vaut mieux qu'un dashboard sophistiqué que personne ne regarde.",
        },
        { type: "h2", text: "Les quatre erreurs de mesure classiques" },
        {
          type: "list",
          items: [
            "**One-shot dans le MRR.** Setup, services, ventes ponctuelles gonflent un « MRR » fictif. Règle : si ça ne se représente pas le mois prochain, ce n'est pas du MRR.",
            "**Churn sur la base totale** au lieu d'une cohorte fixe : flatte le chiffre et fait découvrir le problème deux ans trop tard.",
            "**Oublier le churn involontaire** : 20-40 % du churn vient d'échecs de paiement. Le confondre avec du volontaire, c'est chercher des causes produit à un problème de tuyauterie.",
            "**Confondre churn clients et churn revenus** : tant que les paniers diffèrent, piloter sur un seul rend aveugle à la moitié des problèmes.",
          ],
        },
      ],
      takeaways: [
        "MRR : récurrent contractuel uniquement, lu en mouvement à cinq flux.",
        "LTV = ARPU ÷ churn ; la version honnête intègre la marge brute.",
        "NRR > 100 % = croissance endogène ; payback 3-6 mois B2C, 12-18 B2B.",
        "Quatre erreurs tuent les tableaux de bord : one-shot, base totale, churn involontaire ignoré, clients vs revenus.",
      ],
    },

    // ────────────────────────────────────────────────────────────
    {
      slug: "choisir-son-modele",
      index: 5,
      ref: "1.5",
      title: "Choisir son modèle",
      subtitle: "Tous les business ne doivent pas être des abonnements, et tous les abonnements ne doivent pas être des flat rates.",
      minutes: 9,
      blocks: [
        {
          type: "lead",
          text: "Dernière fondation avant de construire : le bon outil pour le bon problème. Subscription, freemium, usage-based, membership, hybride — chacun a ses conditions de succès.",
        },
        { type: "h3", text: "Le flat rate classique" },
        {
          type: "p",
          text: "Le flat illimité fonctionne quand **trois conditions** sont réunies : besoin récurrent et régulier, coût marginal d'usage faible, et simplicité tarifaire comme argument de vente. Netflix, Spotify, la presse, la majorité des SaaS : le flat reste le standard par défaut — il maximise la prévisibilité des deux côtés.",
        },
        { type: "h3", text: "Le freemium" },
        {
          type: "p",
          text: "Pertinent quand le coût de servir un gratuit est quasi nul, le marché très large, et l'usage gratuit crée de la valeur pour le payant (réseau, viralité, données). **Une erreur** quand l'audience est étroite (1 000 gratuits × 4 % = 40 clients : pas un business), quand le free cannibalise le payant, ou quand chaque gratuit coûte cher à servir (IA, humain, logistique).",
        },
        { type: "h3", text: "L'usage-based" },
        {
          type: "p",
          text: "Supérieur quand la valeur est proportionnelle à une unité mesurable et comprise, et quand les profils d'usage sont très hétérogènes. Ses risques : le **bill shock**, un revenu cyclique, et la disparition de la rétention par défaut. L'**hybride socle + usage**, dominant en B2B et IA, capture le meilleur des deux mondes.",
        },
        { type: "h3", text: "Le membership" },
        {
          type: "p",
          text: "Dès que la valeur relationnelle (appartenance, statut, accès aux pairs) dépasse la valeur fonctionnelle, le membership l'emporte : il se paie plus cher, churne moins, et transforme les membres en recruteurs. Sa contrainte : la valeur relationnelle ne se scale pas par décret — elle exige animation, densité et temps.",
        },
        { type: "h3", text: "Les hybrides one-time + récurrent" },
        {
          type: "callout",
          tone: "info",
          text: "Peloton vend un vélo (one-time) ET un abonnement de contenu. L'hybride bien conçu utilise le one-time comme financeur du CAC et comme lock-in initial (l'achat du vélo est le plus puissant des verrous), et le récurrent comme moteur de LTV. Le piège : la confusion comptable (le one-time n'entre jamais dans le MRR) et stratégique (lequel est le produit, lequel le levier ?).",
        },
        { type: "h2", text: "L'arbre de décision : quel modèle pour mon business ?" },
        {
          type: "p",
          text: "Six questions, dans l'ordre. Répondez pour votre projet — l'arbre propose l'archétype, le modèle de monétisation et le piège à surveiller.",
        },
        { type: "widget", name: "decision-tree" },
        {
          type: "callout",
          tone: "fire",
          title: "Choisir consciemment",
          text: "Cet arbre donne un point de départ, pas un verdict définitif : les meilleurs modèles évoluent (Spotify a ajouté l'audiobook, Adobe l'IA à crédits). L'essentiel est de choisir en connaissant les benchmarks et les pièges de l'archétype retenu.",
        },
      ],
      takeaways: [
        "Le flat rate reste le défaut quand besoin régulier + coût marginal faible + simplicité.",
        "Freemium = stratégie de conversion, viable seulement à grande échelle et coût quasi nul.",
        "Usage-based pour les usages hétérogènes ; l'hybride socle + usage domine le B2B/IA.",
        "Membership quand la valeur relationnelle dépasse la valeur fonctionnelle.",
      ],
    },
  ],
};
