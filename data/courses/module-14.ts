import type { CourseContent } from "@/lib/content-types";

export const moduleFourteen: CourseContent = {
  moduleSlug: "transition-vers-l-abonnement",
  hasGames: true,
  hasQuiz: true,
  lessons: [
    // ── 14.1 ──────────────────────────────────────────────
    {
      slug: "enjeux-de-la-transition",
      index: 1,
      ref: "14.1",
      title: "Les enjeux d'une transition",
      subtitle: "L'opération la plus rentable et la plus dangereuse du répertoire : bien menée, elle change la catégorie de valorisation ; mal menée, elle cannibalise le présent sans construire l'avenir.",
      minutes: 11,
      blocks: [
        {
          type: "lead",
          text: "Ce module traite la situation la plus fréquente dans l'économie réelle : l'entreprise existante (logiciel en licence, commerce, média publicitaire) qui bascule vers le récurrent.",
        },
        { type: "h2", text: "La peur de la cannibalisation — et la réalité du J-curve" },
        {
          type: "p",
          text: "« L'abonnement va tuer nos ventes » est à moitié fondé : oui, la transition cannibalise le revenu de court terme. Le client qui payait 1 000 € de licence paiera 30 €/mois — la première année encaisse 360 € au lieu de 1 000. C'est le **J-curve** : la courbe de revenu qui plonge avant de remonter plus haut que jamais, dont la traversée dure typiquement **18 à 36 mois**.",
        },
        { type: "widget", name: "jcurve-simulator" },
        {
          type: "callout",
          tone: "fire",
          title: "Le J-curve n'est pas un risque à éviter — c'est un coût à financer",
          text: "La transition est un projet de bilan autant que de pricing (la leçon Adobe). Trois questions avant d'annoncer quoi que ce soit : combien de trimestres de creux (la modélisation appliquée à la bascule), avec quoi les traverser (trésorerie, financement, ou rythme de bascule — le progressif étale ce que le franc concentre), et qui doit tenir.",
        },
        {
          type: "pitfall",
          text: "Le J-curve est d'abord une épreuve d'alignement : les actionnaires (la communication financière du J-curve, qu'Adobe a faite explicitement, est la condition pour ne pas se faire arrêter en plein gué), les commerciaux (dont la rémunération assise sur le gros chèque doit être refondue avant la bascule — sinon la force de vente sabote la transition), et la direction (le rétropédalage à mi-creux est le pire scénario : il paie le coût sans en toucher les bénéfices).",
        },
        { type: "h2", text: "Le cas Microsoft 365 : la bascule par gravité" },
        {
          type: "p",
          text: "Si Adobe est le manuel de la **bascule franche**, Microsoft est celui de la **bascule par gravité**. Office 365 (2011-2013) n'a pas tué la licence du jour au lendemain : Microsoft a fait coexister les deux modèles pendant des années, en **inclinant méthodiquement le terrain** — la valeur exclusive au cloud d'abord (OneDrive, apps toujours à jour, multi-appareils), le pricing ensuite (l'abonnement famille calibré pour battre la licence dès le 2ᵉ appareil), la distribution enfin (jusqu'à l'IA réservée au monde abonné : la version perpétuelle existe, mais figée et de seconde classe).",
        },
        {
          type: "keynumbers",
          items: [
            { value: "400 M+", label: "Sièges enterprise migrés" },
            { value: "80 M+", label: "Abonnés grand public" },
            { value: "0", label: "Backlash frontal (vs Adobe)" },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Le critère de choix entre les deux playbooks",
          text: "Le pouvoir de marché et la dépendance des clients. Adobe pouvait imposer (les créatifs n'avaient pas d'alternative) ; Microsoft, exposé sur le grand public et les administrations, devait séduire. La plupart des entreprises n'ont ni le pouvoir d'imposer ni l'envergure de mener dix ans de coexistence : leur chemin est la roadmap progressive.",
        },
      ],
      takeaways: [
        "La transition cannibalise le court terme : le J-curve plonge 18-36 mois avant de remonter plus haut.",
        "Le J-curve est un coût à financer : un projet de bilan, pas seulement de pricing.",
        "C'est une épreuve d'alignement : actionnaires, commerciaux (rému refondue), direction (ne pas rétropédaler).",
        "Bascule franche (Adobe, pouvoir d'imposer) vs par gravité (Microsoft, doit séduire).",
      ],
    },

    // ── 14.2 ──────────────────────────────────────────────
    {
      slug: "roadmap-trois-phases",
      index: 2,
      ref: "14.2",
      title: "La roadmap en trois phases",
      subtitle: "Valider avant de basculer, construire la valeur continue, migrer la base.",
      minutes: 11,
      blocks: [
        {
          type: "lead",
          text: "L'erreur fatale des transitions est de basculer sur une conviction. La roadmap la remplace par une preuve, une valeur, puis une migration honorante.",
        },
        { type: "h2", text: "Phase 1 — Valider avant de basculer" },
        {
          type: "p",
          text: "Offrir l'abonnement **en parallèle** de l'offre existante, sans rien retirer, et mesurer. L'offre doit être un vrai produit (pas l'ancien produit divisé en mensualités — sinon le test ne valide que le crédit gratuit), le segment de lancement se choisit (les nouveaux clients d'abord), et l'instrumentation se construit dès le premier jour.",
        },
        {
          type: "callout",
          tone: "info",
          title: "Les critères de validation (à fixer AVANT le lancement)",
          text: "Le taux d'adoption de l'offre récurrente à exposition égale, la rétention à 3-6 mois des premières cohortes (le plateau naissant qui dit si la forever promise tient), et l'économie unitaire comparée (la LTV projetée contre le revenu moyen de l'ancien client). Sortie de phase : soit les chiffres valident, soit on a appris pour le prix d'un pilote ce que la bascule aveugle aurait enseigné pour le prix de l'entreprise.",
        },
        { type: "h2", text: "Phase 2 — Construire la valeur continue" },
        {
          type: "callout",
          tone: "fire",
          title: "La leçon centrale d'Adobe et Microsoft",
          text: "L'abonnement doit délivrer plus que l'ancien modèle — visiblement, dès le premier jour. L'abonnement qui ne change que le mode de paiement est une hausse de prix déguisée (le client fait le calcul pluriannuel, et il a raison). Construire, selon le métier : la mise à jour permanente, le service attaché (cloud, support continu), le contenu/flux, l'accumulation (historique, données — le lock-in légitime à câbler dès maintenant), et le lien (communauté, statut).",
        },
        {
          type: "p",
          text: "C'est aussi la phase de la **refonte interne** : le pricing complet (architecture + niveau + ratio de migration), la rémunération commerciale (du chèque de signature à la valeur du contrat récurrent — le chantier politique n°1), le support (qui passe d'un coût post-vente à une fonction de rétention), et le pilotage (l'entreprise doit apprendre à se lire en MRR avant de basculer).",
        },
        { type: "h2", text: "Phase 3 — Migrer la base" },
        {
          type: "p",
          text: "La phase la plus délicate : convertir ceux qui ont acheté l'ancien modèle et n'ont rien demandé.",
        },
        {
          type: "list",
          items: [
            "**La communication progressive** : l'annonce des mois à l'avance, le récit de valeur avant le récit de prix, et la segmentation des messages (le récent, l'ancien fidèle, l'inactif : trois histoires).",
            "**Les conditions de migration honorantes** : le crédit de l'existant (remise proportionnelle à la récence), la période de choix (coexistence bornée et datée), et le grandfathering des migrants précoces (le tarif de lancement garanti — la prime à ceux qui font confiance tôt).",
            "**La gestion du backlash** : le budgéter (le churn de migration chiffré et assumé — le scénario Adobe : la vague était dans le plan), l'écouter sans dévier (les conditions, jamais le cap), et tenir la durée (les transitions se jugent à 24-36 mois).",
          ],
        },
        {
          type: "quote",
          text: "Chaque cas — Adobe, Microsoft, le NYT — a traversé son creux et ses critiques avant ses records.",
        },
      ],
      takeaways: [
        "Phase 1 : valider en parallèle sur les nouveaux clients, avec des critères fixés d'avance.",
        "Phase 2 : l'abonnement doit délivrer plus, visiblement — sinon c'est une hausse déguisée.",
        "Refondre la rému commerciale est le chantier politique n°1 de la transition.",
        "Phase 3 : valeur avant prix, crédit de l'existant, backlash budgété, tenir 24-36 mois.",
      ],
    },
  ],
};
