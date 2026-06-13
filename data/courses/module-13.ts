import type { CourseContent } from "@/lib/content-types";

export const moduleThirteen: CourseContent = {
  moduleSlug: "stack-technique-et-outils",
  hasGames: true,
  hasQuiz: true,
  lessons: [
    // ── 13.1 ──────────────────────────────────────────────
    {
      slug: "choisir-son-billing",
      index: 1,
      ref: "13.1",
      title: "Choisir son outil de billing",
      subtitle: "La décision d'infrastructure n°1 : tout s'y branche, et en changer plus tard est un projet lourd (le lock-in d'intégration subi).",
      minutes: 9,
      blocks: [
        {
          type: "lead",
          text: "Tout ce livre est exécutable sans écrire de code : le marché a industrialisé chaque brique. Le billing — la machine qui crée les abonnements, prélève, gère échecs, upgrades et remboursements — est la brique fondatrice.",
        },
        { type: "h2", text: "Les cinq acteurs" },
        {
          type: "list",
          items: [
            "**Stripe Billing — le standard de facto** : la couverture fonctionnelle la plus large (plans, usage-based, prorata, coupons, dunning et retries natifs), l'écosystème maximal. Mais **vous êtes le marchand** : la TVA internationale et la conformité restent votre affaire. Le choix par défaut de quiconque a (ou aura) une équipe produit.",
            "**Chargebee et Recurly** : la couche de gestion d'abonnements au-dessus des PSP — la sophistication B2B (cycles complexes, devis, catalogues multi-produits, dunning avancé) et l'agnosticisme de paiement. Leur coût ne se justifie qu'à partir d'une vraie complexité.",
            "**Paddle — le Merchant of Record** : Paddle est le vendeur légal (TVA, conformité fiscale mondiale, paiements locaux, chargebacks deviennent son problème), contre une commission supérieure. Le choix du logiciel vendu mondialement par une petite équipe.",
            "**Lemon Squeezy** — le MoR version créateurs/indie, racheté par Stripe (absorption progressive).",
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Le paysage bouge, les critères demeurent",
          text: "C'est pourquoi il faut enseigner la grille plus que le palmarès.",
        },
        { type: "h2", text: "La grille de choix par profil" },
        {
          type: "table",
          head: ["Profil", "Choix recommandé", "Pourquoi"],
          rows: [
            ["Démarrage simple (marché domestique)", "Stripe Billing", "Couverture, écosystème, coût d'entrée nul — on ne le quittera jamais"],
            ["Logiciel vendu mondialement, petite équipe", "Paddle (MoR)", "TVA et conformité mondiales externalisées"],
            ["B2B à facturation complexe", "Chargebee / Recurly sur PSP", "La sophistication de facturation que les autres n'ont pas"],
            ["No-code / créateur / digital léger", "Billing intégré (Substack, Gumroad) puis MoR", "La vitesse d'abord ; la migration si l'échelle vient"],
            ["App mobile", "Store + RevenueCat/Adapty, web en parallèle", "Le standard du segment"],
          ],
        },
        {
          type: "callout",
          tone: "fire",
          title: "Les trois critères au-delà des marques",
          text: "Qui est le marchand (vous ou un MoR — la question fiscale et de responsabilité), le coût total à votre échelle (le moins cher à 10 k€ de MRR n'est pas le moins cher à 100 k€), et les capacités de rétention natives (dunning, retries, pauses, flows d'annulation — c'est là que vit le ROI : un billing sans recovery sérieux coûte plus cher que sa commission).",
        },
      ],
      takeaways: [
        "Le billing est la décision d'infrastructure n°1 : en changer plus tard est un projet lourd.",
        "Stripe (standard, vous êtes marchand), Paddle (MoR mondial), Chargebee (B2B complexe).",
        "Choisir par profil, mais arbitrer sur trois critères : marchand, coût à l'échelle, rétention native.",
        "Un billing sans recovery sérieux coûte plus cher que sa commission.",
      ],
    },

    // ── 13.2 ──────────────────────────────────────────────
    {
      slug: "analytics-abonnement",
      index: 2,
      ref: "13.2",
      title: "L'analytics d'abonnement",
      subtitle: "Deux étages distincts — le revenu et l'usage — et c'est leur croisement qui fait le pilotage complet.",
      minutes: 6,
      blocks: [
        {
          type: "lead",
          text: "L'étage de mesure a été traité en profondeur au Module 9. La doctrine d'équipement tient en deux règles déjà posées.",
        },
        {
          type: "list",
          items: [
            "**Le dashboard du billing suffit aux premiers mois** (Stripe et ses équivalents donnent gratuitement MRR, churn brut, encaissements).",
            "**On ne paie un outil dédié** (ChartMogul, Baremetrics, ProfitWell Metrics) **que quand la maintenance du tableur dépasse une heure par semaine.**",
          ],
        },
        {
          type: "callout",
          tone: "fire",
          title: "Le rappel d'architecture",
          text: "L'analytics d'abonnement (le revenu) et l'analytics produit (l'usage — Mixpanel, Amplitude) sont deux étages distincts. C'est leur croisement — le Customer Health Score du Module 6.3 — qui fait le pilotage complet : le revenu dit ce qui se passe, l'usage dit pourquoi et ce qui va se passer.",
        },
      ],
      takeaways: [
        "Le dashboard du billing suffit aux premiers mois ; l'outil dédié vient avec la complexité.",
        "Deux étages : analytics d'abonnement (revenu) et analytics produit (usage).",
        "Leur croisement (le health score) fait le pilotage complet.",
      ],
    },

    // ── 13.3 ──────────────────────────────────────────────
    {
      slug: "dark-patterns-billing",
      index: 3,
      ref: "13.3",
      title: "Les dark patterns de billing : la frontière",
      subtitle: "Tout ce qui retient un abonné contre sa volonté est un emprunt sur le churn futur, au taux d'usure.",
      minutes: 9,
      blocks: [
        {
          type: "lead",
          text: "Les pratiques à ne jamais déployer — nommées pour être reconnues, chez soi comme chez les autres.",
        },
        { type: "h2", text: "Le bestiaire" },
        {
          type: "list",
          items: [
            "**Le roach motel** — facile d'entrer, difficile de sortir : souscription en un clic, résiliation par téléphone, menus introuvables, « êtes-vous sûr ? » en série. Le plus répandu et le plus légiféré.",
            "**Le prix masqué** — l'équivalent mensuel en gros, l'annuel réel en petit ; le tarif de renouvellement non mentionné ; les frais au dernier écran.",
            "**L'urgence perpétuelle** — le compte à rebours qui se réinitialise, le « plus que 2 places » permanent (le FOMO frauduleux).",
            "**La case pré-cochée / l'opt-out déguisé** — l'add-on glissé dans le panier, le trial qui se convertit sans rappel.",
            "**Le confirmshaming** — « Non merci, je préfère payer plus cher » : la honte comme outil de conversion.",
          ],
        },
        { type: "h2", text: "Pourquoi s'en abstenir — l'argument comptable" },
        {
          type: "p",
          text: "La position de ce livre n'est pas que vertueuse, elle est comptable — les dark patterns détruisent de la valeur sur quatre lignes :",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "**Les chargebacks** : l'abonné qui ne trouve pas comment résilier appelle sa banque — le chargeback coûte le montant + des frais + un point de ratio (au-delà des seuils, perte du compte marchand : le dark pattern peut débrancher l'encaissement).",
            "**Le churn différé violent** : la rétention par obstruction est de la dette de churn à intérêts composés — elle se solde en vagues, avec ressentiment, et stérilise le win-back.",
            "**Le NPS et la réputation** : les détracteurs fabriqués par le billing parlent (avis, forums, presse). La confiance se perd à l'échelle du marché.",
            "**La loi** : chaque pattern du bestiaire est, quelque part, déjà illégal (résiliation en trois clics, click-to-cancel, amendes à neuf chiffres récentes) — et la direction du droit est univoque.",
          ],
        },
        {
          type: "callout",
          tone: "fire",
          title: "La règle de clôture",
          text: "Tout ce qui retient un abonné contre sa volonté est un emprunt sur le churn futur, au taux d'usure. La save flow intercepte, la transparence convertit (« résiliable en un clic » est un argument de vente), et la sortie digne est le premier acte du retour. Le billing loyal n'est pas un handicap concurrentiel : c'est l'infrastructure de la confiance qui fait tout le reste.",
        },
      ],
      takeaways: [
        "Cinq dark patterns à reconnaître : roach motel, prix masqué, urgence perpétuelle, opt-out déguisé, confirmshaming.",
        "S'en abstenir est comptable, pas que moral : chargebacks, churn différé, réputation, loi.",
        "Un dark pattern peut littéralement débrancher l'encaissement (taux de litiges).",
        "Le billing loyal est l'infrastructure de la confiance qui fait tout le reste.",
      ],
    },
  ],
};
