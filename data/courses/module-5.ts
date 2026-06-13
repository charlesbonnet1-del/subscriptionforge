import type { CourseContent } from "@/lib/content-types";

export const moduleFive: CourseContent = {
  moduleSlug: "funnel-d-abonnement",
  hasGames: true,
  hasQuiz: true,
  lessons: [
    // ── 5.1 ───────────────────────────────────────────────
    {
      slug: "funnel-specifique",
      index: 1,
      ref: "5.1",
      title: "Le funnel spécifique à l'abonnement",
      subtitle: "Là où le e-commerce s'arrête, l'abonnement commence. La transaction initiale n'est pas la ligne d'arrivée, mais la ligne de départ.",
      minutes: 10,
      blocks: [
        {
          type: "lead",
          text: "L'acquisition en abonnement n'est pas l'acquisition tout court. Parti pris constant : chaque décision d'acquisition est jugée à la rétention qu'elle produit, pas au volume qu'elle génère. Un « client acquis » qui churne à J+30 n'est pas un client — c'est un coût d'acquisition non remboursé.",
        },
        {
          type: "formula",
          expr: "Découverte → Intérêt → Trial/Free → Activation → Conversion → Rétention → Expansion",
        },
        {
          type: "list",
          items: [
            "**L'Activation** (atteindre l'aha moment) est l'étape proprement subscription : elle n'existe pas en e-commerce, et elle sépare les inscrits durables de ceux qui s'évaporent.",
            "**La Conversion** n'est pas le moment où l'on convainc : c'est où l'on encaisse une conviction construite pendant l'activation. Un funnel qui compte sur la page de paiement pour convaincre a échoué une étape plus tôt.",
            "**Rétention et Expansion font partie du funnel** : les exclure du raisonnement d'acquisition, c'est optimiser la moitié la moins importante du système.",
          ],
        },
        {
          type: "callout",
          tone: "fire",
          title: "Le volant d'inertie",
          text: "À ce funnel linéaire s'ajoute une boucle que les meilleurs câblent dès le design : l'abonné retenu produit du referral, qui réalimente la découverte. Le funnel devient un volant d'inertie, et le CAC mixte baisse à mesure que la base grandit.",
        },
        { type: "widget", name: "funnel-calculator" },
        { type: "h2", text: "B2C vs B2B : deux funnels qui n'ont presque rien en commun" },
        {
          type: "table",
          head: ["Dimension", "B2C", "B2B"],
          rows: [
            ["Cycle de décision", "Minutes à jours — impulsion possible", "Semaines à mois — processus"],
            ["Décideur", "L'utilisateur lui-même", "Utilisateur ≠ champion ≠ acheteur : 3 rôles"],
            ["Déclencheur", "Besoin ressenti, moment de vie", "Projet, budget, douleur, échéance"],
            ["Preuve attendue", "Avis, notoriété, essai immédiat", "Démo, ROI chiffré, références, conformité"],
            ["Panier", "3-50 €/mois", "100 €-100 k€+/an — la négociation existe"],
            ["Conversion", "Self-service intégral", "PLG en bas, vente assistée au-dessus"],
            ["Churn drivers", "Guilt, budget, moments de vie", "Champion qui part, projet arrêté, coupe budgétaire"],
          ],
        },
      ],
      takeaways: [
        "La transaction est la ligne de départ : juger l'acquisition à la rétention, pas au volume.",
        "L'Activation (aha moment) est l'étape proprement subscription du funnel.",
        "La conversion encaisse une conviction construite pendant l'activation.",
        "Le referral transforme le funnel en volant d'inertie qui fait baisser le CAC mixte.",
      ],
    },

    // ── 5.2 ───────────────────────────────────────────────
    {
      slug: "acquisition-et-canaux",
      index: 2,
      ref: "5.2",
      title: "Acquisition et canaux",
      subtitle: "Acquérir sans LTV est un sport de riche. Les canaux ne livrent pas le même client.",
      minutes: 10,
      blocks: [
        {
          type: "lead",
          text: "Le pilotage naïf optimise le CPA. C'est nécessaire et radicalement insuffisant : le CPA ignore combien le client vaudra (LTV) et quand on sera remboursé (payback). Un canal à CPA de 30 € qui recrute des churn-90-jours vaut moins que rien ; un canal à 120 € qui recrute des annuels fidèles est une machine à cash.",
        },
        {
          type: "formula",
          expr: "Pilotage par canal = CAC complet + LTV de la cohorte du canal + payback period",
          note: "Tant que ces trois chiffres ne sont pas connus par canal, augmenter le budget est un pari, pas une décision.",
        },
        { type: "h2", text: "La hiérarchie des canaux par LTV" },
        {
          type: "list",
          items: [
            "**Le referral** produit la LTV la plus élevée : pré-convaincu, pré-qualifié, socialement engagé — il churne 25-40 % de moins. Le canal roi.",
            "**Le SEO et le contenu** suivent : intention forte, référentiel réaliste. Coût en temps (différé), souvent la meilleure LTV/CAC à l'échelle.",
            "**Le paid** au milieu, très variable : le search capte de l'intention (LTV correcte, CAC enchéri), le social en crée (volume scalable, mais intention faible et churn précoce).",
            "**Le social organique et l'influence** ferment la marche : on a souvent acheté l'excitation plus que le besoin. Exception : l'influence de niche ultra-alignée peut rivaliser avec le referral.",
          ],
        },
        {
          type: "callout",
          tone: "fire",
          title: "La doctrine d'allocation",
          text: "Construire le socle sur les canaux à haute LTV (referral, SEO, contenu) même lents, et utiliser le paid comme amplificateur réglable une fois l'économie unitaire prouvée — jamais comme fondation. L'ordre inverse (tout sur le paid d'abord) est le schéma classique de la croissance qui s'effondre quand le budget s'arrête.",
        },
        { type: "h2", text: "Le promise-delivery gap" },
        {
          type: "pitfall",
          text: "Chaque publicité qui survend, chaque landing qui embellit fabrique des abonnés structurellement déçus : leur churn précoce n'est pas un échec de rétention, c'est une dette contractée à l'acquisition. Symptôme : un canal dont la conversion est bonne mais dont la cohorte churne anormalement à 30-60 jours — le produit n'a pas changé, la promesse si.",
        },
        {
          type: "p",
          text: "Corriger : auditer la chaîne (annonce → landing → onboarding → produit) pour qu'elle raconte la même histoire ; calibrer la promesse sur l'expérience du premier mois, pas sur le potentiel à maturité ; accepter qu'une promesse plus sobre **convertisse moins mais retienne plus** — l'arbitrage se tranche à la LTV, jamais à la conversion.",
        },
      ],
      takeaways: [
        "Piloter par canal sur le triplet CAC complet + LTV + payback, jamais sur le CPA seul.",
        "Hiérarchie LTV : referral > SEO/contenu > paid > social organique.",
        "Socle sur les canaux haute-LTV, paid en amplificateur réglable — jamais en fondation.",
        "Le promise-delivery gap fabrique du churn précoce : sur-promettre est une dette d'acquisition.",
      ],
    },

    // ── 5.3 ───────────────────────────────────────────────
    {
      slug: "referral-et-gifting",
      index: 3,
      ref: "5.3",
      title: "Referral et gifting",
      subtitle: "Deux canaux sous-estimés : le parrainage cumule CAC réduit, conversion supérieure et rétention supérieure.",
      minutes: 13,
      blocks: [
        {
          type: "lead",
          text: "Le referral cumule trois avantages qu'aucun canal payant n'égale : un CAC réduit à l'incentive, une conversion supérieure (la recommandation d'un proche est la preuve sociale la plus puissante), et surtout une rétention supérieure — le filleul churne 25-40 % de moins.",
        },
        {
          type: "callout",
          tone: "info",
          title: "L'effet symétrique oublié",
          text: "Le parrain aussi se retient mieux : recommander est un engagement de cohérence qui transforme l'abonné en avocat de sa propre fidélité.",
        },
        { type: "h2", text: "L'architecture d'un programme referral" },
        {
          type: "list",
          ordered: true,
          items: [
            "**Le trigger** : après l'aha moment, aux pics d'enthousiasme (milestone, réussite d'une action clé, NPS élevé — le promoteur qui vient de mettre 9/10 est la cible parfaite). Le referral se déclenche sur le comportement, pas sur le calendrier.",
            "**Les incentives** : la meilleure est en nature produit (du temps/des capacités en plus) — elle ne coûte que le marginal, renforce l'usage et ne recrute pas de chasseurs de prime. La double récompense bat l'unilatéral : elle lève la gêne sociale (« je fais un cadeau, je ne vends pas mon ami »).",
            "**La friction technique** : chaque étape divise le volume. Lien personnel en un clic, partage natif, attribution fiable, suivi visible (« 2 amis inscrits, 1 mois gagné »).",
          ],
        },
        { type: "widget", name: "viral-k-calculator" },
        { type: "h2", text: "Cas Dropbox : le referral qui a remplacé la publicité" },
        {
          type: "p",
          text: "Contexte (2008-2010) : le CPA payant ressortait à plusieurs centaines de dollars pour un produit à 99 $/an — l'acquisition payante détruisait de la valeur. La solution : un programme à **double récompense en nature** (500 Mo offerts au parrain ET au filleul, jusqu'à 16 Go), intégré au cœur de l'onboarding et frictionless.",
        },
        {
          type: "keynumbers",
          items: [
            { value: "+3 500 %", label: "Croissance en 15 mois (100k → 4 M)" },
            { value: "35 %", label: "Des inscriptions quotidiennes via referral" },
            { value: "−30 %", label: "CAC mixte" },
          ],
        },
        {
          type: "callout",
          tone: "fire",
          title: "La triple leçon Dropbox",
          text: "(1) L'incentive en nature alignée sur la valeur du produit (de l'espace pour un produit de stockage : la récompense approfondit l'usage). (2) La boucle intégrée au produit, pas une page cachée dans le footer. (3) L'effet réseau latent : chaque dossier partagé était déjà une invitation.",
        },
        { type: "h2", text: "Le gifting : offrir un abonnement à un tiers" },
        {
          type: "p",
          text: "Deux effets en un : un premier abonné gratuit chez le destinataire (acquisition sans CAC, pré-qualifiée) et un renforcement de l'identité du donateur (offrir son abonnement préféré est un acte d'ambassadeur). C'est un referral avec paiement intégré : l'ami ne recommande pas, il finance l'essai.",
        },
        {
          type: "pitfall",
          text: "L'expiration est le moment critique : le destinataire arrive avec une habitude installée et **zéro moyen de paiement enregistré**. Tout se joue dans la séquence de fin (J-14 bilan, J-3 offre de continuation, J0 bascule douce — jamais de facturation surprise, il n'a rien acheté, J+7 rattrapage). Le cadeau qui se termine en piège commercial salit aussi le donateur — et c'est lui le client.",
        },
        {
          type: "p",
          text: "**Le gifting B2B** est une acquisition enterprise déguisée : « Offrez 3 mois à votre équipe » installe l'usage chez plusieurs utilisateurs, fait émerger un champion, et arrive à expiration en haut d'un funnel de vente B2B. La saisonnalité (Noël surtout) est l'arme du gifting — un marketing de calendrier.",
        },
      ],
      takeaways: [
        "Le referral cumule CAC réduit, meilleure conversion et meilleure rétention (parrain ET filleul).",
        "Trigger après l'aha moment ; incentive double et en nature ; friction minimale.",
        "Dropbox : +3 500 % en 15 mois par une récompense en nature intégrée au produit.",
        "Gifting = referral préfinancé ; l'expiration (sans CB enregistrée) est le moment critique.",
      ],
    },

    // ── 5.4 ───────────────────────────────────────────────
    {
      slug: "co-marketing-partenariats",
      index: 4,
      ref: "5.4",
      title: "Co-marketing et partenariats",
      subtitle: "Vendre son abonnement via l'abonnement d'un autre : le B2B2C est devenu une voie d'acquisition majeure.",
      minutes: 8,
      blocks: [
        {
          type: "lead",
          text: "Le partenariat de distribution est devenu une voie d'acquisition majeure du B2C : les télécoms bundlent le streaming, les néobanques garnissent leurs plans premium d'abonnements tiers, les constructeurs offrent des durées d'essai à l'achat d'un appareil.",
        },
        { type: "h2", text: "La mécanique économique à négocier" },
        {
          type: "compare",
          left: {
            title: "Le distributeur achète",
            points: [
              "De la valeur perçue pour son offre (le service connu qui justifie son premium)",
              "De la rétention (le bundle est un switching cost pour son propre abonnement)",
            ],
          },
          right: {
            title: "Le service distribué achète",
            tone: "fire",
            points: [
              "Du volume à prix de gros (la marge se sacrifie contre l'échelle)",
              "De la pénétration sur des segments inaccessibles",
              "Un moyen de paiement déjà en place (la friction n°1 des émergents)",
            ],
          },
        },
        {
          type: "pitfall",
          text: "Les points durs du contrat : qui possède la relation client et la donnée (l'abonné bundle qui n'a jamais créé de compte direct n'est qu'à moitié un abonné), le tarif wholesale, la mesure de l'activation (négocier sur les **activés**, pas les éligibles — un bundle non activé ne vaut rien), et le scénario de fin. Le risque structurel : la dépendance — un acteur dont la moitié des abonnés vient d'un seul distributeur a cédé son destin.",
        },
        { type: "h2", text: "Le co-marketing sans bundle (pour les petites équipes)" },
        {
          type: "list",
          items: [
            "**Les offres croisées** entre produits complémentaires (jamais concurrents) : l'app de course et l'app de nutrition s'offrent un mois à leurs bases — chaque base est un canal qualifié à CAC nul.",
            "**Les email partnerships** : la mention croisée en newsletter, le « produit du mois » réciproque. Le canal discret de toute l'économie des newsletters.",
            "**L'affiliation récurrente** : une commission sur l'abonnement tant qu'il vit — l'alignement parfait, le prescripteur étant payé à la rétention.",
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "La grille d'évaluation en trois questions",
          text: "L'audience recoupe-t-elle le segment (le recoupement, pas la taille) ? La recommandation sera-t-elle crédible (le partenaire utilise-t-il vraiment le produit) ? L'échange est-il équilibré dans la durée (les partenariats déséquilibrés meurent en un cycle) ?",
        },
      ],
      takeaways: [
        "Le B2B2C achète du volume à prix de gros contre du switching cost pour le distributeur.",
        "Négocier sur les activés (pas les éligibles) et sur la propriété de la relation/donnée.",
        "Le risque structurel du bundle est la dépendance à un distributeur unique.",
        "Co-marketing léger : offres croisées, partenariats email, affiliation récurrente.",
      ],
    },

    // ── 5.5 ───────────────────────────────────────────────
    {
      slug: "onboarding",
      index: 5,
      ref: "5.5",
      title: "Onboarding : le moment le plus sous-estimé",
      subtitle: "90 % de complétion d'onboarding peut coexister avec 100 % de churn. La complétion mesure l'obéissance, pas l'activation.",
      minutes: 11,
      blocks: [
        {
          type: "lead",
          text: "Un parcours peut être suivi jusqu'au bout — tutoriel terminé, profil rempli — sans qu'aucune valeur n'ait été vécue. Optimiser le taux de complétion d'un parcours qui mène au mauvais endroit est l'erreur de métrique n°1 du domaine.",
        },
        { type: "h2", text: "La bonne étoile polaire : le Time-to-First-Value" },
        {
          type: "keynumbers",
          items: [
            { value: "< 5 min", label: "TTFV cible en consumer" },
            { value: "< 30 min", label: "TTFV cible en SaaS" },
            { value: "×2", label: "Rétention si activé dans les 3 premiers jours" },
          ],
        },
        {
          type: "p",
          text: "Le TTFV est le temps entre l'inscription et le premier moment de valeur **réellement vécue**. Les utilisateurs activés dans les trois premiers jours ont une probabilité de rétention près de doublée. La rétention se décide majoritairement dans la première semaine — le « cliff drop » des courbes de rétention est, pour l'essentiel, un échec d'onboarding photographié.",
        },
        { type: "h2", text: "L'aha moment : le trouver, puis tout y mener" },
        {
          type: "p",
          text: "L'aha moment est l'instant où l'utilisateur **vit** la promesse (pas où il la comprend : où il la ressent). La méthode pour l'identifier est empirique : prendre les 20 % les mieux retenus et les 20 % churners les plus rapides, et chercher l'action précoce qui les sépare le plus nettement.",
        },
        {
          type: "list",
          items: [
            "**Slack** — recevoir une réponse (pas envoyer un message : en recevoir un — la conversation prouve la promesse, d'où les « 2 000 messages d'équipe »).",
            "**Notion** — créer et utiliser une vraie page (pas visiter un template : y mettre son propre contenu et y revenir).",
            "**Spotify** — la première playlist personnalisée qui tombe juste (le moment « il me connaît »).",
          ],
        },
        {
          type: "callout",
          tone: "fire",
          title: "Reconstruire l'onboarding en ligne droite",
          text: "Tout ce qui ne mène pas à l'aha moment sort du chemin critique : le tour du produit complet, les formulaires exhaustifs, les invitations prématurées se reportent ou se suppriment. Techniques : démarrage pré-rempli (templates, import en un clic — modifier au lieu de créer face à une page blanche), première action guidée jusqu'au résultat (pas jusqu'au clic), checklist de 3-5 étapes orientées valeur, et email J+2 de rattrapage des non-activés.",
        },
      ],
      takeaways: [
        "La complétion d'onboarding ne mesure pas l'activation : viser le Time-to-First-Value.",
        "S'activer dans les 3 premiers jours double quasiment la rétention.",
        "Trouver l'aha moment empiriquement : l'action précoce qui sépare retenus et churners.",
        "Reconstruire l'onboarding en ligne droite vers l'aha moment ; tout le reste se reporte.",
      ],
    },

    // ── 5.6 ───────────────────────────────────────────────
    {
      slug: "paywall-design",
      index: 6,
      ref: "5.6",
      title: "Paywall design : où et comment bloquer",
      subtitle: "Le paywall n'est pas un mur, c'est un moment — il doit surgir quand le désir est au maximum.",
      minutes: 10,
      blocks: [
        {
          type: "lead",
          text: "Le paywall matérialise toute la stratégie de conversion. Quatre types le déclinent — mais une seule règle d'or les gouverne tous.",
        },
        {
          type: "table",
          head: ["Type", "Mécanique", "Pour qui"],
          rows: [
            ["Hard", "Rien sans payer (ou un teaser)", "Marque forte / contenu irremplaçable / niche B2B"],
            ["Metered", "N contenus gratuits, puis péage", "Presse : préserve audience/SEO, convertit la fréquence"],
            ["Freemium", "Frontière par fonctions/capacité", "Convertir par approfondissement d'usage"],
            ["Soft", "Accès contre email/inscription/pub", "Qualifier l'anonyme en prospect (1ᵉʳ étage de fusée)"],
          ],
        },
        {
          type: "callout",
          tone: "fire",
          title: "La règle d'or de l'emplacement",
          text: "Bloquer juste APRÈS l'aha moment, jamais avant. Placé avant la valeur, le paywall demande de payer une promesse ; placé juste après, une expérience — la conversion change d'ordre de grandeur. Le paywall optimal n'est pas un mur mais un moment : il surgit quand le désir est au maximum (l'article passionnant coupé en plein élan, la limite atteinte en pleine action).",
        },
        { type: "h2", text: "Cas : le Dynamic Meter du New York Times" },
        {
          type: "p",
          text: "Le NYT a fait du seuil de son metered paywall un système d'apprentissage. De 20 articles statiques (2011) resserrés à 10 puis 5, à un **Dynamic Meter** qui personnalise le seuil par lecteur selon son engagement : au lecteur occasionnel, de l'espace pour développer l'habitude (le bloquer trop tôt ne convertit rien) ; au lecteur engagé, un seuil rapproché (il est prêt). Le principe : le paywall optimal n'est pas un chiffre, c'est une fonction de la propension à payer — et l'engagement la prédit.",
        },
        { type: "h2", text: "Cas : Duolingo, le paywall-écosystème" },
        {
          type: "p",
          text: "À l'opposé du mur unique, Duolingo dissémine **sept points de contact premium** dans une session : la pub de fin de leçon, les vies/erreurs, les boosts et gels de streak, les exercices premium, les essais Super offerts, les écrans de progression. Chacun est doux — aucun ne bloque vraiment l'apprentissage (le cœur gratuit reste digne) — mais leur somme expose l'offre en permanence, chacun à un moment émotionnel différent. Le tout sous ~300 A/B tests par trimestre (conversion passée de ~3 % à ~9 % en cinq ans).",
        },
        {
          type: "quote",
          text: "Le paywall n'est pas une décision — c'est un système qui s'instrumente, se personnalise et s'optimise sans fin.",
        },
      ],
      takeaways: [
        "Quatre paywalls : hard, metered, freemium, soft — chacun arbitre volume/revenu/viralité.",
        "Règle d'or : bloquer juste après l'aha moment, jamais avant (payer une expérience, pas une promesse).",
        "Le NYT Dynamic Meter : le seuil optimal est une fonction de l'engagement, pas un chiffre fixe.",
        "Le paywall est un système qui se personnalise et s'optimise en continu (Duolingo).",
      ],
    },
  ],
};
