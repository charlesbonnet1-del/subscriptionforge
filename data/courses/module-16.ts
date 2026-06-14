import type { CourseContent } from "@/lib/content-types";

export const moduleSixteen: CourseContent = {
  moduleSlug: "40-erreurs-classiques",
  hasGames: true,
  hasQuiz: true,
  lessons: [
    // ── Lancement ──────────────────────────────────────────
    {
      slug: "erreurs-au-lancement",
      index: 1,
      ref: "16.1",
      title: "Les erreurs au lancement",
      subtitle: "La table des matières inversée du livre : celle qui part des symptômes. Dix erreurs qui prennent racine avant la première ligne de code.",
      minutes: 9,
      blocks: [
        { type: "lead", text: "Ce module se lit en dernier — ou se consulte en urgence. Chaque erreur est énoncée, expliquée, et renvoyée au module qui la traite." },
        {
          type: "list",
          ordered: true,
          items: [
            "**Fixer son prix sur le coût de revient** plutôt que sur la valeur client : le cost-plus produit soit un prix trop bas, soit un produit non viable. *(M4.1)*",
            "**Lancer un freemium sans avoir défini l'aha moment** : sans savoir quelle action sépare ceux qui restent, le free ne mène nulle part. *(M5.5, M3.3)*",
            "**Proposer trop de plans dès le départ (> 4)** : le paradoxe du choix produit l'absence de choix. Trois plans, le sweet spot. *(M3.2)*",
            "**Oublier le marché international dans le pricing** : le prix unique mondial est prohibitif sur la majorité de l'humanité. *(M4.5)*",
            "**Partir mensuel par défaut sans calculer la LTV cible** : la périodicité est une décision de LTV — l'annuel divise le churn par 2 à 4. *(M3.5)*",
            "**Confondre « utile une fois » et « valeur continue »** : l'erreur n°1 du métier — un churn structurel à 15-25 % que rien ne réparera. *(M3.1)*",
            "**Ne pas construire de lock-in dès le design** : l'historique, les assets, les intégrations se câblent au début — les ajouter plus tard coûte dix fois plus. *(M7-bis)*",
            "**Ignorer la saisonnalité** : lancer un produit fitness en juin, c'est rater la marée. *(M3.5)*",
            "**Mettre le paywall avant l'aha moment** : placé avant la valeur, il fait payer une promesse. *(M5.6)*",
            "**Promettre dans les campagnes plus que le produit ne délivre** : le promise-delivery gap fabrique du churn précoce. *(M5.2)*",
          ],
        },
      ],
      takeaways: [
        "Le prix se fixe sur la valeur, jamais sur le coût ; trois plans maximum.",
        "L'erreur n°1 : confondre « utile une fois » et valeur continue — le test de la forever promise d'abord.",
        "Le lock-in et l'international se pensent au design, pas après.",
        "Paywall après l'aha moment ; ne jamais sur-promettre en campagne.",
      ],
    },

    // ── Onboarding & conversion ────────────────────────────
    {
      slug: "erreurs-onboarding-conversion",
      index: 2,
      ref: "16.2",
      title: "Les erreurs d'onboarding & conversion",
      subtitle: "Sept erreurs entre l'inscription et le paiement — là où se décide la majorité de la rétention.",
      minutes: 8,
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "**Mesurer le taux de complétion de l'onboarding** plutôt que le Time-to-First-Value : 90 % de complétion peut coexister avec 100 % de churn. *(M5.5)*",
            "**Proposer un tour complet du produit** au lieu de mener à l'aha moment : dix fonctions présentées valent moins qu'une fonction vécue. *(M5.5)*",
            "**Ne pas avoir de séquence d'emails de trial** : le trial sans accompagnement est un trial au hasard. *(M3.4)*",
            "**Un trial sans carte… sans séquence de conversion** : sans carte, l'inaction n'évapore au lieu de convertir. *(M3.4)*",
            "**Ne pas tester la page pricing dans les 3 premiers mois** : les tests de présentation sont gratuits et produisent des gains à deux chiffres. *(M4.3, M4.6)*",
            "**Ignorer le reverse trial** : démarrer en premium puis downgrader mobilise l'effet de possession et ne perd personne. *(M3.4)*",
            "**Sur-onboarder en B2B sans identifier le champion** : l'activation y est collective, sans champion il n'y a pas de moteur interne. *(M5.5, M11.3)*",
          ],
        },
      ],
      takeaways: [
        "Viser le Time-to-First-Value, pas le taux de complétion.",
        "Reconstruire l'onboarding en ligne droite vers l'aha moment.",
        "Tout trial a besoin d'une séquence ; tester la page pricing tôt.",
        "En B2B, pas d'activation sans champion identifié.",
      ],
    },

    // ── Pricing ────────────────────────────────────────────
    {
      slug: "erreurs-de-pricing",
      index: 3,
      ref: "16.3",
      title: "Les erreurs de pricing",
      subtitle: "Cinq erreurs sur le levier le plus rentable — et le plus négligé — du métier.",
      minutes: 7,
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "**Reprendre le prix sans mesurer la sensibilité des segments** : la hausse uniforme frappe des profils sans rien en commun — le Chasseur churne, l'Identitaire se sent trahi. *(M4.4, M2.4)*",
            "**Reprendre le prix en silence** : la hausse découverte sur le relevé est la définition du repricing raté. 30-60 jours de préavis, le chiffre dit simplement. *(M4.4)*",
            "**Grandfatherer sans limite de durée** : le tarif protégé à vie accumule une complexité infinie. Borner (« garanti 24 mois »). *(M4.4)*",
            "**Vendre 12× le prix mensuel pour un plan annuel** : sans incentive, l'annuel ne migre personne — la remise de 15-20 % (« 2 mois offerts ») est le prix d'un churn divisé. *(M3.5)*",
            "**Ne pas proposer de trimestriel quand le marché est saisonnier** : le palier intermédiaire épouse les usages cycliques — l'excellent compromis sous-utilisé. *(M3.5)*",
          ],
        },
      ],
      takeaways: [
        "Segmenter et préavertir toute hausse de prix (30-60 jours, valeur avant chiffre).",
        "Grandfatherer toujours, sans limite de durée jamais.",
        "L'annuel exige un incentive cadré en « mois offerts ».",
        "Le trimestriel est l'excellent compromis sous-utilisé en saisonnalité.",
      ],
    },

    // ── Rétention ──────────────────────────────────────────
    {
      slug: "erreurs-de-retention",
      index: 4,
      ref: "16.4",
      title: "Les erreurs de rétention",
      subtitle: "Huit erreurs sur le cœur du métier — là où se gagne ou se perd la valeur.",
      minutes: 9,
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "**Traiter le churn involontaire comme du vrai churn** : 20-40 % du churn est un problème de carte (60-70 % de soft declines récupérables) — le levier au meilleur ROI. *(M6.1, M7.10)*",
            "**Ne pas avoir de save flow** : le bouton qui résilie sec laisse partir 15-30 % d'abonnés qu'une interception aurait gardés. *(M7.5)*",
            "**Proposer un discount immédiat sans comprendre le départ** : le discount répond à côté, érode l'ARPU et éduque la base à menacer. *(M7.5, M2.6)*",
            "**Ne pas surveiller les zombies avant leur renouvellement** : le zombie qui découvre 120 € churne avec ressentiment. Réveil à J-30/J-45. *(M2.5, M7.7)*",
            "**Confondre churn différé et churn évité** : le « sauvé » par remise sans cause traitée repart en 60-90 jours — mesurer à 90 jours, pas au taux de déflection. *(M7.5)*",
            "**Ne pas proposer la pause** : sur toute cause temporelle, elle domine la résiliation (40-60 % de réactivation). *(M7.5)*",
            "**Ignorer les moments de vie** : une part du churn vient de la vie des abonnés — prévisible et adressable. *(M2.5)*",
            "**Ne pas avoir de campagne win-back sur 90 jours** : 1 réabonnement sur 4 est une réactivation, 80 % réussis sous 90 jours. *(M7.8)*",
          ],
        },
      ],
      takeaways: [
        "Le churn involontaire (dunning) est le premier chantier de rétention.",
        "Une save flow qui comprend avant d'offrir ; le discount en dernier.",
        "Provoquer la décision des zombies avant le renouvellement ; proposer la pause.",
        "Le win-back travaille une fenêtre chaude de 90 jours.",
      ],
    },

    // ── Analyse ────────────────────────────────────────────
    {
      slug: "erreurs-d-analyse",
      index: 5,
      ref: "16.5",
      title: "Les erreurs d'analyse",
      subtitle: "Cinq erreurs de mesure — celles qui font mentir les chiffres avec une parfaite assurance.",
      minutes: 7,
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "**Calculer le churn sur la base totale** au lieu d'une cohorte fixe : en croissance, les clients récents diluent le chiffre — on découvre le problème deux ans trop tard. *(M1.4, M6.3)*",
            "**Inclure les revenus one-shot dans le MRR** : setup, services, ventes ponctuelles gonflent un MRR fictif — et la LTV, le payback, la valorisation avec lui. *(M1.4)*",
            "**Regarder la conversion globale sans la décomposer par canal** : la moyenne masque le canal mine d'or et le canal gouffre. *(M5.2, M9.2)*",
            "**Ne pas construire de courbes de rétention par cohorte** : sans cohortes, on est aveugle au cliff, à la pente, au plateau (le test de viabilité ultime). *(M6.3)*",
            "**Ignorer la contraction** : les downgrades précèdent les churns — le prédateur silencieux ronge le MRR sans événement à intercepter. *(M6.1)*",
          ],
        },
      ],
      takeaways: [
        "Le churn se mesure par cohorte fixe, jamais sur la base totale.",
        "Le MRR n'inclut que le récurrent contractuel — jamais de one-shot.",
        "Décomposer la conversion par canal ; construire des cohortes.",
        "Suivre la contraction en ligne séparée du churn.",
      ],
    },

    // ── Croissance ─────────────────────────────────────────
    {
      slug: "erreurs-de-croissance",
      index: 6,
      ref: "16.6",
      title: "Les erreurs de croissance",
      subtitle: "Cinq erreurs qui plafonnent le scaling — et l'outil de clôture du parcours.",
      minutes: 8,
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "**Optimiser l'acquisition avant de réparer la rétention** : remplir un seau percé coûte de plus en plus cher — la rétention multiplie le rendement de tout le reste. *(M6.2, M9.3)*",
            "**Ne pas avoir de referral quand le NPS dépasse 40** : une base de promoteurs sans canal de recommandation est de l'enthousiasme qui s'évapore. *(M5.3)*",
            "**Ignorer le pricing international** : la règle du 1/5 et le Merchant of Record sont accessibles aux petites équipes — l'argent laissé sur la table se compte en multiples. *(M4.5)*",
            "**Ne pas proposer de gifting quand le produit s'y prête** : une acquisition sans CAC, pré-qualifiée, avec sa saisonnalité en or (décembre). *(M5.3)*",
            "**Chercher des investisseurs sans pouvoir montrer un NRR** : le NRR est la première pièce du dossier — sous 100 % sans explication, le reste du deck ne sera pas lu. *(M8)*",
          ],
        },
        {
          type: "callout",
          tone: "fire",
          title: "L'outil de clôture : « Où en suis-je ? »",
          text: "Le parcours se referme là où il a commencé — sur le diagnostic. Refaites les quinze questions depuis votre propre situation : elles produisent la carte de vos trois failles majeures et des modules à relire en priorité. Le livre relu depuis soi.",
        },
        {
          type: "widget",
          name: "decision-tree",
        },
      ],
      takeaways: [
        "Réparer la rétention avant d'optimiser l'acquisition : elle multiplie tout le reste.",
        "Activer le referral et le gifting quand le produit et le NPS s'y prêtent.",
        "Le pricing international est accessible et se compte en multiples de revenu.",
        "Sans NRR présentable, pas de conversation investisseurs.",
      ],
    },
  ],
};
