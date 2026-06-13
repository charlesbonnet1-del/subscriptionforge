import type { CourseContent } from "@/lib/content-types";

export const moduleEleven: CourseContent = {
  moduleSlug: "saas-b2b",
  hasGames: true,
  hasQuiz: true,
  lessons: [
    // ── 11.1 ──────────────────────────────────────────────
    {
      slug: "product-led-growth",
      index: 1,
      ref: "11.1",
      title: "Product-Led Growth",
      subtitle: "Quand le produit est le commercial : l'usage précède la vente. Mais PLG ne signifie pas « pas de sales ».",
      minutes: 10,
      blocks: [
        {
          type: "lead",
          text: "Le PLG renverse le go-to-market B2B classique : au lieu que la vente précède l'usage (démo, contrat, déploiement), l'usage précède la vente — le produit s'adopte en self-service, se diffuse de l'intérieur, et la monétisation suit l'adoption. Slack, Notion, Figma, Dropbox, Calendly ont conquis leurs marchés par le bas : l'individu d'abord, l'équipe ensuite, l'entreprise enfin.",
        },
        { type: "h2", text: "Les trois moteurs" },
        {
          type: "list",
          items: [
            "**Les viral loops** : l'usage normal expose des non-utilisateurs (le document Figma partagé, l'invitation Slack, le lien Calendly) — la boucle d'invitation, mais intrinsèque au produit plutôt qu'incitée.",
            "**Le CAC réduit** : l'acquisition se fait par le produit, et la vente (quand elle intervient) travaille des comptes déjà convaincus par l'usage — le coût commercial par euro d'ARR des PLG matures est une fraction de celui des sales-led.",
            "**L'expansion bottom-up** : l'individu → l'équipe → le département → l'entreprise, chaque étage un upgrade naturel si l'architecture de plans a posé ses frontières sur ces seuils (la leçon Notion du Module 3.2).",
          ],
        },
        {
          type: "callout",
          tone: "fire",
          title: "PLG ne signifie pas « pas de sales »",
          text: "Le contresens classique. La vente intervient plus tard et mieux qualifiée — quand l'adoption atteint la masse où la décision devient organisationnelle (sécurité, déploiement global, contrat cadre). Le dispositif s'appelle product-led sales : les signaux produit (utilisateurs actifs d'un domaine, vitesse d'adoption, fonctionnalités enterprise effleurées) génèrent les comptes à travailler. Le commercial PLG ne prospecte pas à froid, il récolte des comptes que le produit a mûris.",
        },
        {
          type: "pitfall",
          text: "Le critère d'éligibilité au PLG : un produit adoptable par un individu seul, à valeur démontrable avant tout achat, et dont l'usage se propage. Le produit qui exige trois mois de déploiement et l'accord de la DSI avant la première valeur n'est pas mauvais — c'est un produit sales-led : le forcer en PLG produit un free désert et un funnel vide.",
        },
      ],
      takeaways: [
        "PLG : l'usage précède la vente, le produit s'adopte en self-service et se diffuse.",
        "Trois moteurs : viral loops intrinsèques, CAC réduit, expansion bottom-up.",
        "PLG ≠ pas de sales : la vente intervient plus tard, qualifiée par les signaux produit.",
        "Éligibilité : adoptable par un individu, valeur avant achat, usage qui se propage.",
      ],
    },

    // ── 11.2 ──────────────────────────────────────────────
    {
      slug: "usage-based-pricing",
      index: 2,
      ref: "11.2",
      title: "Usage-based pricing",
      subtitle: "L'alignement parfait : le client qui réussit paie plus, sans renégociation. Au prix du bill shock à prévenir.",
      minutes: 11,
      blocks: [
        {
          type: "lead",
          text: "Le pricing à l'usage facture une unité de consommation (requête, message, Go, crédit). Sa force tient en un mot : l'alignement — l'expansion est câblée dans le compteur. C'est le moteur des NRR d'exception (130-160 %), et sa progression s'accélère avec l'IA, dont les coûts d'inférence rendent le flat illimité intenable.",
        },
        { type: "h2", text: "Conditions de viabilité" },
        {
          type: "list",
          items: [
            "**Une unité de valeur lisible** : le client doit comprendre ce qu'il paie et le relier à sa valeur (la conversation envoyée : oui ; le « compute unit » opaque : non — l'unité illisible transforme chaque facture en litige).",
            "**Des profils d'usage hétérogènes** : si tous consomment pareil, le flat fait le même travail en plus simple.",
            "**Une mesure irréprochable** : le compteur contesté est un churn en cours.",
          ],
        },
        { type: "h2", text: "Le bill shock et ses cousins" },
        {
          type: "pitfall",
          text: "Le bill shock est le risque cardinal, et il est asymétrique : dix factures conformes ne construisent pas la confiance qu'une seule facture choc détruit. Dégâts en chaîne : litige, plafonnement défensif (le client bride sa propre adoption), remontée au décideur budgétaire qui découvre l'outil par sa dérive, résiliation de précaution.",
        },
        {
          type: "callout",
          tone: "fire",
          title: "L'arsenal anti-bill-shock (non négociable)",
          text: "Les estimateurs (simulateur de facture avant l'achat, projection en cours de mois), les alertes de seuil (50/80/100 % d'un budget), les caps (le plafond dur optionnel : le client qui peut se protéger ose consommer), et la facture lisible (le détail par usage/équipe/projet : la facture qui s'explique seule ne remonte pas en litige).",
        },
        {
          type: "p",
          text: "**Risques de second ordre** : la cyclicité (le revenu suit l'activité des clients — le NRR usage-based respire avec la macro-économie) et la disparition de la rétention par défaut (chaque facture est une réévaluation — le modèle ne tient que par la valeur mesurable continue).",
        },
        { type: "h2", text: "L'hybride : le standard du B2B moderne" },
        {
          type: "p",
          text: "Le socle d'abonnement + la consommation : un engagement de base (qui achète la prévisibilité des deux côtés) surmonté d'une composante d'usage (qui capture la croissance sans renégociation). Variantes : les crédits inclus puis dépassement (la limite atteinte = trigger d'upsell), les paliers d'engagement avec remise de volume, et le commit-and-burn enterprise (l'engagement annuel prépayé consommable — le standard du cloud et de l'IA).",
        },
        {
          type: "callout",
          tone: "info",
          title: "La règle de design de l'hybride",
          text: "Le socle couvre l'usage normal du segment (le client moyen ne doit pas vivre dans le dépassement — le dépassement permanent est un plan mal calibré qui fabrique du ressentiment), et la pente du prix à l'usage décroît avec le volume (le client qui grandit doit voir son coût unitaire baisser — c'est le contrat implicite de l'expansion).",
        },
      ],
      takeaways: [
        "L'usage-based aligne prix et valeur : l'expansion est câblée dans le compteur (NRR 130-160 %).",
        "Conditions : unité lisible, profils hétérogènes, mesure irréprochable.",
        "Le bill shock est asymétrique : estimateurs, alertes, caps et factures lisibles sont obligatoires.",
        "L'hybride socle + usage est le standard : socle calibré sur l'usage normal, pente décroissante.",
      ],
    },

    // ── 11.3 ──────────────────────────────────────────────
    {
      slug: "customer-success",
      index: 3,
      ref: "11.3",
      title: "Le Customer Success",
      subtitle: "La fonction anti-churn du B2B : son mandat est que le client réussisse, parce que sa réussite est la seule rétention durable.",
      minutes: 10,
      blocks: [
        {
          type: "lead",
          text: "En B2C, la rétention est un système ; en B2B, dès que le panier le justifie, elle devient aussi un métier. La distinction fondatrice : le support répond aux problèmes (réactif, déclenché par le client), le CS poursuit des résultats (proactif, déclenché par les signaux). Confondre les deux produit un « CS » qui éteint des feux au lieu de construire de la valeur.",
        },
        {
          type: "callout",
          tone: "info",
          title: "Le seuil économique",
          text: "Le CS humain se justifie autour de 500 $ de MRR par client pour un CS manager dédié. En dessous : tech-touch (séquences automatisées du Module 7), éventuellement un CS « pooled » sur les moments critiques. Au-dessus : le portefeuille nommé. Tout en haut : le CS dédié par compte. Un portefeuille mature superpose les trois étages, piloté par le health score (l'instrument de travail central du métier).",
        },
        { type: "h2", text: "Les trois pratiques structurantes" },
        {
          type: "list",
          items: [
            "**Le QBR** (Quarterly Business Review) : non pas une revue du produit, mais une revue de la **valeur** (les chiffres du client, pas les features livrées). Ses fonctions cachées : il fabrique la preuve de ROI du renouvellement (le renouvellement se gagne aux QBR, pas à l'échéance), maintient le lien avec les décideurs, et fait émerger les signaux d'expansion.",
            "**Le champion management** : le champion est l'utilisateur interne qui porte le produit — l'actif relationnel n°1. L'identifier (usage intensif + influence), l'équiper (arguments, ROI, accès), le faire briller (son ascension est la vôtre), le suivre individuellement.",
            "**Le multi-threading** : tisser plusieurs fils (champion, manager, economic buyer, utilisateurs clés, sponsor) — **trois relations actives minimum** par compte significatif.",
          ],
        },
        {
          type: "pitfall",
          text: "Le risque du single thread — le champion qui part : toute la relation passe par une personne ; elle change de poste ; le successeur arrive sans attachement (souvent avec ses propres outils) ; le renouvellement devient une revente à un prospect froid qui possède déjà le budget. Parades : multi-threading préventif, veille sur les mouvements, playbook de transition (on revend le produit au successeur avant qu'il ne questionne).",
        },
        {
          type: "callout",
          tone: "fire",
          title: "Le réflexe symétrique oublié",
          text: "Le champion qui part arrive quelque part : c'est un lead chaud chez son nouvel employeur. Le pipeline des anciens champions est l'un des canaux d'acquisition B2B au meilleur taux de conversion qui soit.",
        },
      ],
      takeaways: [
        "Le CS poursuit des résultats (proactif) ; le support répond aux problèmes (réactif).",
        "Seuil ~500 $ MRR/client ; trois étages tech/low/high-touch pilotés par le health score.",
        "Trois pratiques : QBR (revue de valeur), champion management, multi-threading (3 fils min).",
        "Le single thread est le churn B2B le plus évitable ; l'ancien champion est un lead chaud.",
      ],
    },

    // ── 11.4 ──────────────────────────────────────────────
    {
      slug: "enterprise",
      index: 4,
      ref: "11.4",
      title: "L'abonnement B2B enterprise",
      subtitle: "Au sommet du marché, l'abonnement change de physique : le churn n'est plus un événement individuel mais une décision d'organisation, annoncée par des mois de signaux.",
      minutes: 11,
      blocks: [
        {
          type: "lead",
          text: "Les contrats sont annuels ou pluriannuels, négociés, juridiques ; le churn est rare, lent, et presque toujours annoncé.",
        },
        { type: "h2", text: "Le cycle de renouvellement : 3 à 6 mois avant l'échéance" },
        {
          type: "p",
          text: "Le renouvellement enterprise n'est pas une reconduction — c'est un cycle de vente. **La conversation s'engage à 180 jours, pas à 30** : à J-180, on construit (le bilan de valeur, les objectifs, le traitement des irritants — il reste le temps d'agir et de réparer) ; à J-30, on subit (le bilan est figé, les achats ont la main, toute concession devient le prix de l'urgence). Le health score rouge à J-180 déclenche un plan de sauvetage, pas une relance commerciale.",
        },
        { type: "h2", text: "Les leviers de l'enterprise" },
        {
          type: "list",
          items: [
            "**Les contrats multi-années** : à proposer systématiquement aux comptes sains — prévisibilité pour les deux parties, discount justifié par la durée (autofinancé par le churn évité), switching cost institutionnel. Condition : l'indexation et les clauses d'évolution (le multi-année sans clause de revalorisation est un grandfathering subi).",
            "**Les SLA comme lock-in institutionnel** : les engagements de niveau de service semblent une contrainte du vendeur — ils sont aussi sa douve. Le SLA négocié, audité et intégré aux processus du client fait du produit une infrastructure contractualisée : chaque exigence enterprise satisfaite devient une barrière pour les concurrents qui ne la satisfont pas.",
          ],
        },
        {
          type: "callout",
          tone: "fire",
          title: "Champion vs Economic Buyer",
          text: "Le champion veut que le produit réussisse (critère : la valeur d'usage — on le nourrit de produit, d'accès, de réussite) ; l'economic buyer veut que la dépense se justifie (critère : le ROI contre les alternatives, y compris « rien » — on le nourrit de chiffres, de benchmarks, de risques évités). Le champion gagne les utilisateurs, l'economic buyer signe le renouvellement — et le dossier se construit dans la langue du second avec les munitions du premier.",
        },
        { type: "h2", text: "Les métriques du segment" },
        {
          type: "list",
          items: [
            "**Le GRR** devient central : il mesure la solidité pure du socle — l'enterprise saine vit à 90-97 % de GRR annuel (le NRR au-dessus disant la croissance).",
            "**Le churn par taille de client** : le logo churn concentré sur les petits comptes est un focus acceptable ; un grand compte perdu est toujours une autopsie, remontée à la direction.",
            "**La couverture du pipeline de renouvellement** : la part de l'ARR des 12 prochains mois dont le renouvellement est engagé, sécurisé ou à risque — l'ARR de l'an prochain est un portefeuille de décisions déjà en cours, piloté compte par compte.",
          ],
        },
      ],
      takeaways: [
        "Le renouvellement enterprise est un cycle de vente qui s'engage à J-180, pas à J-30.",
        "Multi-années (avec clause d'indexation) et SLA sont des lock-ins institutionnels.",
        "Champion (valeur d'usage) et economic buyer (ROI) : ne jamais les confondre ni négliger.",
        "GRR central (90-97 %), churn par taille, couverture du pipeline de renouvellement.",
      ],
    },
  ],
};
