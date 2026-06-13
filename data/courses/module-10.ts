import type { CourseContent } from "@/lib/content-types";

export const moduleTen: CourseContent = {
  moduleSlug: "media-newsletters-creators",
  hasGames: true,
  hasQuiz: true,
  lessons: [
    // ── 10.1 ──────────────────────────────────────────────
    {
      slug: "equation-du-media",
      index: 1,
      ref: "10.1",
      title: "L'équation spécifique du média",
      subtitle: "Du modèle publicitaire au reader revenue : pour la majorité des médias d'information, ce n'est pas une option, c'est la stratégie de survie.",
      minutes: 9,
      blocks: [
        {
          type: "lead",
          text: "Le modèle publicitaire vendait l'audience aux annonceurs : la métrique reine était la page vue. Son effondrement a une cause structurelle — sur le marché publicitaire numérique, les plateformes captent l'essentiel de la valeur, le média y est un fournisseur de minutes d'attention payé en miettes décroissantes.",
        },
        {
          type: "callout",
          tone: "fire",
          title: "La bascule est une transformation, pas un ajout de paywall",
          text: "La métrique reine devient l'abonné, et chaque arbitrage s'inverse : l'article qui fait dix mille pages vues de passage vaut moins que celui qui convertit cent abonnés ou en retient mille ; le titre racoleur qui dope le clic dégrade la confiance qui fait payer ; le volume cède à la valeur distinctive. Les rédactions qui réussissent réécrivent leur « article score » pour pondérer la conversion et l'engagement abonné, plus le trafic brut.",
        },
        {
          type: "formula",
          expr: "Média en abonnement = audience qualifiée × conversion × ARPU × rétention",
          note: "Les quatre facteurs se travaillent dans l'ordre inverse de l'intuition.",
        },
        {
          type: "p",
          text: "**La rétention d'abord** (le seau du Module 6), la conversion ensuite (le paywall), l'audience en dernier — elle ne vaut que convertie et retenue. C'est le Module 1.1 appliqué à une industrie entière : on cesse de vendre des transactions d'attention, on s'engage sur une relation de valeur continue, avec le churn pour juge de paix.",
        },
      ],
      takeaways: [
        "Le reader revenue est la stratégie de survie des médias, pas une option.",
        "La métrique reine bascule de la page vue à l'abonné (conversion, rétention, engagement).",
        "L'équation : audience × conversion × ARPU × rétention.",
        "On la travaille à l'envers : rétention d'abord, conversion ensuite, audience en dernier.",
      ],
    },

    // ── 10.2 ──────────────────────────────────────────────
    {
      slug: "paywalls-de-presse",
      index: 2,
      ref: "10.2",
      title: "Les paywalls de presse comparés",
      subtitle: "Une seule question décide du mur : à quel point votre contenu est-il irremplaçable, et pour qui ?",
      minutes: 10,
      blocks: [
        {
          type: "lead",
          text: "Les quatre types du Module 5.6, relus à travers les choix des grands médias.",
        },
        {
          type: "table",
          head: ["Type", "Référence", "Logique"],
          rows: [
            ["Hard", "WSJ, Financial Times", "Contenu professionnellement indispensable ; ARPU 3-5× la presse généraliste, mais audience plafonnée (avec des « portes » choisies)"],
            ["Metered", "NYT, Le Monde", "Le compromis dominant : audience/SEO préservés, conversion concentrée sur les lecteurs réguliers (qualifiés par la fréquence)"],
            ["Freemium éditorial", "Spécialisés, presse régionale", "La frontière passe par la nature du contenu : actu chaude gratuite, analyse/enquête payantes"],
            ["Soft (inscription)", "Presque tous, en combinaison", "L'étage de qualification : l'email récolté nourrit les newsletters, qui construisent l'habitude"],
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "L'entonnoir complet",
          text: "La presse moderne combine les étages : anonyme → inscrit → habitué → abonné, où chaque paywall joue son rôle. Le metered a une leçon qui dépasse la presse : le paywall optimal est une fonction de l'engagement, pas une constante (le Dynamic Meter du NYT).",
        },
        {
          type: "p",
          text: "**En synthèse** : le hard maximise l'ARPU et la conversion des convaincus mais plafonne le volume ; le metered maximise le volume convertible au prix d'une exécution exigeante (le seuil, la porosité, la techno) ; le freemium maximise la lisibilité au prix d'une discipline éditoriale permanente. Plus le contenu est irremplaçable et pour une audience étroite, plus le mur peut être haut.",
        },
      ],
      takeaways: [
        "Quatre paywalls : hard (FT/WSJ), metered (NYT), freemium éditorial, soft (inscription).",
        "Le metered est le compromis dominant : audience préservée, conversion des réguliers.",
        "Le freemium éditorial exige une ligne de fracture lisible et tenue dans la durée.",
        "La question décisive : irremplaçable pour qui ? Plus c'est fort et étroit, plus le mur est haut.",
      ],
    },

    // ── 10.3 ──────────────────────────────────────────────
    {
      slug: "newsletter-payante",
      index: 3,
      ref: "10.3",
      title: "La newsletter payante",
      subtitle: "1 000 abonnés payants à 10 $/mois = 10 000 $ de MRR. Le modèle émergent devenu industrie.",
      minutes: 11,
      blocks: [
        {
          type: "lead",
          text: "L'arithmétique fondatrice est célèbre pour sa simplicité : un revenu confortable, atteignable par une personne seule, sans capital, avec un coût de production qui est essentiellement du temps et un coût de distribution quasi nul.",
        },
        { type: "widget", name: "newsletter-calculator" },
        {
          type: "p",
          text: "À 3-8 % de conversion gratuit → payant, les 1 000 payants exigent 12 000 à 35 000 abonnés gratuits engagés : **l'audience gratuite reste le vrai chantier, et la monétisation sa récolte.**",
        },
        { type: "h2", text: "Les déterminants du taux de conversion" },
        {
          type: "list",
          ordered: true,
          items: [
            "**La spécificité** : la généraliste convertit à 1-2 %, la verticale pointue à 5-10 % — on paie ce qu'on ne trouve pas ailleurs. La niche est le modèle.",
            "**La valeur professionnelle** : le lecteur dont la newsletter sert la carrière paie sans friction (et se fait rembourser par l'employeur) — le B2B éditorial supporte des prix 3-10× le B2C.",
            "**La régularité** : le churn suit la perception de rythme.",
            "**La part réservée** : le tout-gratuit-avec-pourboire convertit moins que le freemium éditorial à ligne de fracture nette (un ou deux contenus premium, les archives, la communauté).",
          ],
        },
        { type: "h2", text: "Le choix de plateforme" },
        {
          type: "table",
          head: ["Plateforme", "Force", "Prix / limite"],
          rows: [
            ["Substack", "Simplicité + réseau de recommandations croisées", "10 % du revenu (considérable à l'échelle) ; dépendance"],
            ["Ghost", "Propriété (open source), zéro commission", "La technique à sa charge, aucun réseau"],
            ["beehiiv", "Machine de croissance (referral, boosts, ads)", "Tarif par taille de liste ; média à scaler"],
          ],
          caption: "Dans tous les cas, posséder la liste : l'email exportable est l'actif ; la plateforme n'est que le véhicule.",
        },
        {
          type: "callout",
          tone: "fire",
          title: "La leçon des références",
          text: "Lenny's Newsletter (le B2B individuel à 7 chiffres par l'empilement des mécaniques : spécificité, valeur carrière, bundle, communauté-douve), The Hustle (l'actif-audience vendu à HubSpot), Morning Brew (l'industrialisation par referral à paliers, vendue à neuf chiffres). Une leçon commune : l'audience email engagée est l'actif central — la monétisation (abonnement, publicité, cession) est un choix de sortie, pas une fatalité de départ.",
        },
      ],
      takeaways: [
        "1 000 payants à 10 $ = 10 000 $/mois ; l'audience gratuite est le vrai chantier.",
        "La spécificité fait tout : verticale pointue 5-10 %, généraliste 1-2 %.",
        "Substack (réseau), Ghost (propriété), beehiiv (croissance) — mais toujours posséder la liste.",
        "L'audience email engagée est l'actif ; la monétisation est un choix de sortie.",
      ],
    },

    // ── 10.4 ──────────────────────────────────────────────
    {
      slug: "creator-economy",
      index: 4,
      ref: "10.4",
      title: "Creator economy : l'abonnement à la personne",
      subtitle: "La valeur est indissociable de la personne — simultanément sa force (un lock-in émotionnel parfait) et sa faiblesse (un point de défaillance unique).",
      minutes: 11,
      blocks: [
        {
          type: "lead",
          text: "Le creator subscription n'est ni du SaaS ni du média : on ne « switch » pas de créateur comme d'outil. Quatre plateformes structurent le paysage — Patreon (le mécénat agnostique au format), Substack (l'écrit), Twitch (le live, le sub comme acte public), OnlyFans (le contenu exclusif).",
        },
        { type: "h2", text: "L'audience d'abord, la monétisation ensuite" },
        {
          type: "callout",
          tone: "fire",
          title: "Les 1 000 vrais fans",
          text: "Il ne faut pas un million d'audience : il faut un millier de personnes prêtes à payer ~100 $/an. La séquence est toujours audience gratuite → engagement → monétisation. Monétiser une audience trop petite ou trop tiède tue les deux. Le seuil pratique : on ouvre le payant quand l'audience demande comment soutenir, pas quand le créateur a besoin d'argent.",
        },
        {
          type: "formula",
          expr: "Audience engagée à construire = objectif de revenu ÷ (ARPU × taux de conversion 1-5 %)",
          note: "Le chiffre qui remet la création de contenu gratuit au centre du business plan.",
        },
        { type: "h2", text: "Les tiers Patreon : trois étages" },
        {
          type: "list",
          items: [
            "**Le palier d'accès** (3-5 $) : le soutien symbolique avec la contrepartie de base (contenu en avance, coulisses) — le palier du volume.",
            "**Le palier d'appartenance** (8-15 $) : la communauté, le Discord, les Q&A — la contrepartie relationnelle, le centre de gravité du revenu.",
            "**Le palier de proximité** (25-100 $+) : l'accès direct, le 1:1, la mention — la contrepartie rare, par nature contingentée (c'est ici que le temps du créateur se vend, donc se limite).",
          ],
        },
        {
          type: "pitfall",
          text: "Deux erreurs de grille : trop de paliers (la paralysie du choix), et des contreparties en travail additionnel à tous les étages — **la bonne contrepartie coûte de l'accès, pas de la production.**",
        },
        { type: "h2", text: "Les risques structurels" },
        {
          type: "list",
          items: [
            "**La dépendance à la plateforme** : un changement de règles/commission/algorithme frappe le revenu sans préavis. Parades : posséder la relation (l'email), diversifier la distribution, traiter la plateforme comme un processeur de paiement avec audience.",
            "**Le burnout comme churn systémique** : quand la valeur EST le créateur, l'épuisement est le churn de tous. Parades de design : les contreparties d'accès plutôt que de production, les pauses annoncées et ritualisées (l'audience pardonne le repos annoncé, pas le silence), le plafonnement des paliers de proximité.",
            "**La scalabilité plafonnée** : le temps du créateur est une contrainte absolue.",
          ],
        },
        {
          type: "callout",
          tone: "fire",
          title: "La transition creator → produit",
          text: "Le seul chemin de scalabilité : transformer ce que le créateur fait en quelque chose qui existe sans lui. Par découplage croissant : le catalogue (l'archive devient la valeur d'entrée), la communauté (le créateur passe d'artiste à hôte), l'équipe et les formats (le chemin Morning Brew), le produit dérivé (le cours qui se vend pendant que le créateur dort). Le test : le revenu survivrait-il à trois mois de silence du créateur ? Une audience-personne ne se vend pas ; un produit-média, si.",
        },
      ],
      takeaways: [
        "1 000 vrais fans à ~100 $/an : l'audience gratuite d'abord, la monétisation ensuite.",
        "Trois paliers : accès (volume), appartenance (le revenu), proximité (rare, contingenté).",
        "La bonne contrepartie coûte de l'accès, pas de la production.",
        "La transition vers l'abonnement-produit (survit à 3 mois de silence) crée la valeur d'entreprise.",
      ],
    },

    // ── 10.5 ──────────────────────────────────────────────
    {
      slug: "bundle-de-contenu",
      index: 5,
      ref: "10.5",
      title: "Le bundle de contenu",
      subtitle: "Diversifier les raisons de rester : le cas NYT (News + Games + Cooking + Wirecutter + The Athletic).",
      minutes: 8,
      blocks: [
        {
          type: "lead",
          text: "Autour du produit News, le NYT a acquis ou développé des produits quotidiens et utilitaires — les jeux (dont Wordle, acquis pour son habitude quotidienne), la cuisine, Wirecutter, The Athletic — fondus dans une offre All Access dont le prix rend le bundle évident face à l'empilement d'abonnements séparés.",
        },
        {
          type: "callout",
          tone: "fire",
          title: "La mécanique de rétention est le cœur du cas",
          text: "Chaque produit ajouté réduit le churn de l'ensemble : l'abonné News seul peut se lasser de l'actualité (la fatigue informationnelle est un motif de churn majeur) ; l'abonné News + Games + Cooking a trois habitudes indépendantes, dont chacune suffit à justifier le renouvellement — le jour où l'actualité lasse, le mot croisé du matin retient. C'est le switching cost collectif appliqué au contenu : la résiliation doit vaincre toutes les raisons de rester.",
        },
        {
          type: "p",
          text: "La rétention des abonnés bundle est substantiellement supérieure à celle des mono-produit, et la stratégie d'entreprise (les 10 M d'abonnés dépassés) repose sur la conversion de la base mono-produit vers le bundle.",
        },
        {
          type: "callout",
          tone: "info",
          title: "La discipline du bundle de contenu",
          text: "Se transpose à toute échelle (le média régional qui ajoute avis de décès et archives, la newsletter qui empile archive + podcast + communauté, l'app de fitness qui ajoute nutrition et sommeil). Mais : chaque brique doit porter sa propre habitude (la fréquence d'usage indépendante fait la redondance de rétention — la brique décorative n'ajoute que du coût), et le prix du bundle doit rester sous le seuil de l'addition mentale (l'abonné doit sentir l'affaire sans calculer).",
        },
      ],
      takeaways: [
        "Le bundle de contenu diversifie les raisons de rester : chaque produit réduit le churn de l'ensemble.",
        "Le switching cost collectif appliqué au contenu : la résiliation doit toutes les vaincre.",
        "Chaque brique doit porter sa propre habitude (fréquence indépendante), sinon c'est du coût.",
        "Le prix du bundle reste sous le seuil de l'addition mentale : l'affaire se sent sans calcul.",
      ],
    },
  ],
};
