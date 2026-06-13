import type { CourseContent } from "@/lib/content-types";

export const moduleTwo: CourseContent = {
  moduleSlug: "psychologie-de-l-abonne",
  hasGames: true,
  hasQuiz: true,
  lessons: [
    // ── 2.1 ───────────────────────────────────────────────
    {
      slug: "engagement-recurrent",
      index: 1,
      ref: "2.1",
      title: "La psychologie de l'engagement récurrent",
      subtitle: "L'abonnement est un objet psychologique singulier : il active des mécanismes absents de l'achat unique.",
      minutes: 11,
      blocks: [
        {
          type: "lead",
          text: "Le Module 1 a posé l'économie ; celui-ci en pose la matière première : le cerveau de l'abonné. L'opérateur qui ignore ces mécanismes optimise à l'aveugle ; celui qui les maîtrise agit sur les causes plutôt que sur les symptômes.",
        },
        { type: "h2", text: "Pourquoi l'abonnement n'est pas un achat comme les autres" },
        {
          type: "p",
          text: "Un achat unique mobilise une évaluation ponctuelle : ce produit vaut-il ce prix, maintenant ? L'abonnement mobilise une **projection de soi dans le temps** : parier que son futur soi continuera de vouloir, d'utiliser, de valoir la dépense. D'où une double asymétrie : plus de résistance à l'entrée qu'un achat du même montant — mais, une fois franchie, une décision qui s'auto-entretient bien davantage.",
        },
        { type: "h2", text: "L'effet de possession (endowment effect)" },
        {
          type: "p",
          text: "L'expérience de Kahneman, Knetsch et Thaler : les possesseurs d'un mug exigent environ **deux fois plus** pour le vendre que les non-possesseurs n'acceptent de payer pour l'obtenir. Posséder une chose en augmente la valeur perçue, par le seul fait de la posséder.",
        },
        {
          type: "callout",
          tone: "fire",
          title: "La règle de design",
          text: "Dès le premier mois, l'accès appartient à l'abonné : résilier n'est plus « ne pas acheter », c'est perdre quelque chose qu'on a. Tout ce qui matérialise la possession la renforce — bibliothèque, playlists, historique, profil configuré, téléchargements. C'est la logique profonde du free trial complet : on ne fait pas essayer un produit, on fait posséder un niveau de service dont l'expiration sera vécue comme une perte.",
        },
        { type: "h2", text: "Le sunk cost psychologique" },
        {
          type: "p",
          text: "« J'ai déjà payé six mois, autant continuer. » Économiquement, c'est un sophisme. Psychologiquement, c'est une force majeure. Le sunk cost prend deux formes : **financière** (mois déjà payés, annuel prépayé) et, plus puissante, **non financière** (temps de configuration, données entrées, progression, maîtrise acquise).",
        },
        {
          type: "quote",
          text: "Un utilisateur Duolingo à 400 jours de streak ne protège pas 400 jours de langue apprise — il protège 400 jours de lui-même.",
        },
        { type: "h2", text: "L'identité abonné : le glissement qui fidélise" },
        {
          type: "p",
          text: "Il y a une différence profonde entre « j'utilise Netflix » et « je suis abonné », et plus encore « je suis un lecteur du Monde ». Le premier décrit un comportement ; les autres une **identité**. Or on change facilement de comportement, très difficilement d'identité.",
        },
        {
          type: "p",
          text: "Le glissement s'opère par accumulation de signaux : le badge, l'ancienneté affichée (« membre depuis 2019 »), le vocabulaire communautaire, les rituels (le Wrapped de Spotify est une cérémonie identitaire). La résiliation cesse alors d'être une décision budgétaire pour devenir une **micro-crise identitaire** — « suis-je encore le genre de personne qui… ? » — et ces micro-crises sont reportées indéfiniment.",
        },
        { type: "h2", text: "La cohérence comportementale et la réciprocité" },
        {
          type: "p",
          text: "**Cohérence** (Cialdini) : une fois qu'on s'est défini publiquement d'une certaine façon, on agit pour rester cohérent. L'abonné qui a recommandé, laissé un avis, affiché son streak a pris des engagements de cohérence — résilier le mettrait en contradiction avec lui-même. Les programmes de referral sont donc aussi des **machines à engagement de cohérence**.",
        },
        {
          type: "callout",
          tone: "info",
          title: "L'arme secrète des petits opérateurs",
          text: "La réciprocité : l'humain rend ce qu'il reçoit. Le mois offert après un incident, la fonctionnalité débloquée, l'attention humaine du support créent une dette psychologique douce qui se rembourse en fidélité — à condition d'être perçus comme gratuits. Ce qu'on ne peut offrir en catalogue ou en technologie, on peut l'offrir en générosité relationnelle : ça ne coûte presque rien et ne se copie pas.",
        },
      ],
      takeaways: [
        "L'abonnement engage une projection de soi dans le temps, d'où sa double asymétrie.",
        "Effet de possession + sunk cost non financier : chaque heure investie travaille pour la rétention.",
        "Faire glisser l'abonné du comportement vers l'identité rend la résiliation très coûteuse psychologiquement.",
        "Cohérence et réciprocité transforment les abonnés en leurs propres arguments de rétention.",
      ],
    },

    // ── 2.2 ───────────────────────────────────────────────
    {
      slug: "biais-cognitifs",
      index: 2,
      ref: "2.2",
      title: "Les biais cognitifs dans la décision",
      subtitle: "La page de pricing est le lieu d'une bataille cognitive. L'humain n'évalue jamais un prix dans l'absolu.",
      minutes: 13,
      blocks: [
        {
          type: "lead",
          text: "L'humain évalue un prix par comparaison, dans un contexte que l'opérateur contrôle entièrement. Ligne éthique constante : utiliser ces biais pour aider à choisir ce qui servira le client, jamais pour lui faire acheter ce qu'il regrettera — le churn différé et les chargebacks puniraient de toute façon la seconde option.",
        },
        { type: "h2", text: "Les biais qui favorisent la conversion" },
        {
          type: "p",
          text: "**L'ancrage.** Le premier prix vu devient la référence. Adobe présente « All Apps » à 59,99 $ avant les apps individuelles à 22,99 $ : l'app seule semble une affaire. Les pages à **trois tiers convertissent ~1,4× mieux** que les pages à deux tiers — trois prix créent un système de comparaison complet.",
        },
        {
          type: "p",
          text: "**L'effet de leurre** (Ariely, The Economist) : web seul 59 $, print seul 125 $, print + web 125 $. L'option « print seul » est un leurre — personne ne la choisit, mais sa présence fait basculer les choix vers le bundle : **84 % avec le leurre contre 32 % sans**. Bien placé, +40 % de sélection du plan cible.",
        },
        {
          type: "p",
          text: "**L'effet de compromis.** L'humain fuit les extrêmes : l'option du milieu paraît raisonnable. Combinée à l'ancrage et au leurre, la position centrale est l'emplacement le plus précieux — c'est là qu'on place le plan cible, décoré du badge « le plus populaire » (preuve sociale + prophétie autoréalisatrice).",
        },
        {
          type: "p",
          text: "**L'aversion à la perte appliquée à l'annuel.** Une perte pèse ~2× un gain équivalent. « Économisez 20 % » (gain à saisir) surpasse « payez X € de moins ». Et présenter 1 000 $/an comme « moins de 84 $/mois » augmente la disposition à payer d'~20 %. Règle : afficher le prix dans l'unité de temps qui le minimise, l'économie dans le cadre qui la maximise.",
        },
        {
          type: "p",
          text: "**La preuve sociale spécifique à l'abonnement.** « Rejoignez 50 000 abonnés » est plus puissant que « achetez » : le nombre d'abonnés actifs prouve que des milliers de personnes **re-choisissent** le service chaque mois — une validation continue, pas un succès passé.",
        },
        {
          type: "pitfall",
          text: "**Le FOMO et la rareté** sont réels mais les plus dangereux : la rareté doit être vraie. Le compte à rebours qui se réinitialise à chaque visite est un dark pattern (Module 13) qui détruit la confiance — or la confiance est la matière première du récurrent.",
        },
        { type: "h2", text: "Les biais qui freinent la conversion" },
        {
          type: "list",
          items: [
            "**La douleur de payer** : payer active les zones de la douleur, et l'abonnement la programme en rendez-vous mensuel (12 micro-douleurs vs 1). On l'anesthésie : prélèvement passif, carte enregistrée, annuel, découplage plaisir/paiement.",
            "**L'escompte temporel** : 10 €/mois « se sent » moins cher que 120 €/an. Travaille pour le mensuel, contre l'annuel — d'où l'annuel affiché en équivalent mensuel.",
            "**La subscription fatigue** : chaque nouvel abonnement est évalué contre le portefeuille existant (« lequel remplacer ? »). La barre n'est plus « valoir son prix » mais « valoir sa place ».",
            "**L'aversion au risque** : le prospect surestime le risque (« et si je n'utilise pas ? et si résilier est compliqué ? ») — dette de confiance héritée des pires acteurs.",
          ],
        },
        { type: "h2", text: "Neutraliser les freins : la boîte à outils" },
        {
          type: "keynumbers",
          items: [
            { value: "+34 %", label: "Conversion annuelle avec garantie money-back" },
            { value: "1 clic", label: "Résiliation : faciliter la sortie augmente les entrées" },
            { value: "2 min", label: "Le trial transforme « ça vaut 15 € ? » en « ça vaut 2 min ? »" },
          ],
        },
        {
          type: "p",
          text: "**Les garanties** transfèrent le risque vers l'opérateur (jusqu'à +34 % sur l'annuel) ; les demandes restent marginales quand le produit délivre. **« Sans engagement, résiliable en un clic »** : la réversibilité abaisse le coût de l'essai. **La période d'essai** déplace la conversion de la persuasion vers l'expérience. **Le design de la page** anesthésie la douleur : prix ramené à l'unité parlante, bénéfices avant le chiffre, un seul choix, signaux de confiance au point exact de friction.",
        },
        { type: "h2", text: "Tableau récapitulatif" },
        {
          type: "table",
          head: ["Biais", "Effet", "Application canonique"],
          rows: [
            ["Ancrage", "Favorise", "Premium affiché en premier ; 3 tiers (≈1,4×)"],
            ["Leurre", "Favorise", "Option dominée vers le plan cible (jusqu'à +40 %)"],
            ["Compromis", "Favorise", "Plan cible au centre, badge « populaire »"],
            ["Aversion à la perte", "Favorise", "« Économisez 20 % » ; reframing annuel→mensuel"],
            ["Preuve sociale", "Favorise", "« Rejoignez N abonnés » ; re-choix continu"],
            ["FOMO / rareté", "Favorise (si vraie)", "Lancements et cohortes réellement limités"],
            ["Douleur de payer", "Freine", "Prélèvement passif, annuel, découplage"],
            ["Escompte temporel", "Ambivalent", "Annuel affiché en équivalent mensuel"],
            ["Subscription fatigue", "Freine", "Positionnement de remplacement, valeur vite"],
            ["Aversion au risque", "Freine", "Garantie, sans engagement, trial"],
          ],
        },
      ],
      takeaways: [
        "Trois tiers + ancrage haut + leurre + compromis : l'architecture canonique d'une page qui convertit.",
        "Aversion à la perte : vendre le petit chiffre (mensuel), cadrer l'économie comme gain à saisir.",
        "Anesthésier la douleur de payer : prélèvement passif, annuel, découplage plaisir/paiement.",
        "Garantie, réversibilité et trial neutralisent l'aversion au risque — la rareté, elle, doit être vraie.",
      ],
    },

    // ── 2.3 ───────────────────────────────────────────────
    {
      slug: "psychologie-du-depart",
      index: 3,
      ref: "2.3",
      title: "La psychologie du départ",
      subtitle: "Les gens ne partent pas au moment où ils cessent de trouver de la valeur. Comprendre ce délai est la clé de la rétention.",
      minutes: 12,
      blocks: [
        {
          type: "lead",
          text: "Le fait central, contre-intuitif : il s'écoule presque toujours un délai — des semaines, des mois — entre la mort de la valeur perçue et l'acte de résiliation. Comprendre ce délai, ce qui le remplit et ce qui y met fin, gouverne toute la stratégie de rétention.",
        },
        { type: "h2", text: "L'inertie : la rétention passive, et son danger" },
        {
          type: "p",
          text: "Résilier demande un acte ; ne rien faire ne demande rien. Tant que le prélèvement reste indolore, le statu quo gagne. Beaucoup d'opérateurs s'en réjouissent — c'est une grave erreur de jugement.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "L'inertie n'est pas de la rétention",
          text: "C'est de la dette de churn. L'abonné inerte n'a pas décidé de rester ; il a différé sa décision de partir. Cette dette se paie d'un coup à un événement de réveil (hausse de prix, renouvellement annuel, relevé bancaire épluché) — et ces résiliations-là sont presque irrécupérables, car accompagnées du sentiment de s'être « fait avoir ».",
        },
        {
          type: "quote",
          text: "Mieux vaut provoquer la décision soi-même, au moment et dans les termes qu'on choisit, que la subir au pire moment.",
        },
        { type: "h2", text: "Les trois déclencheurs de résiliation" },
        {
          type: "list",
          ordered: true,
          items: [
            "**L'événement externe** (difficultés financières, déménagement) : la cause est dans la vie de l'abonné, pas le produit. Le churn le plus récupérable — la valeur perçue est intacte. Réponse : offres de circonstance (pause, downgrade), jamais l'argumentaire produit.",
            "**La friction accumulée** (bugs, support raté, hausse mal annoncée) : une série de déceptions silencieuses. La plupart ne se plaignent jamais avant de partir. Réponse en amont (qualité, support proactif) ; au moment du départ, seule une réparation humaine exceptionnelle inverse encore le cours.",
            "**Le désengagement progressif** : aucun événement, juste une valeur qui s'érode. Le plus fréquent et le plus sournois. Réponse : détection précoce (leading indicators) et réengagement — car quand ce churn devient visible, il est généralement trop tard.",
          ],
        },
        { type: "h2", text: "Le moment de vérité : la page d'annulation" },
        {
          type: "p",
          text: "L'endroit le plus mal investi de la plupart des produits — alors que c'est la dernière conversation avec un client qui part. Trois principes :",
        },
        {
          type: "list",
          items: [
            "**Comprendre avant d'offrir** : la première étape est une question (« qu'est-ce qui motive votre départ ? »), pas une contre-offre. Un discount proposé à quelqu'un qui part pour un bug est presque insultant.",
            "**Proposer l'alternative adaptée** : pause pour les causes temporelles, downgrade pour le prix, aide pour la friction — et parfois laisser partir avec élégance (le win-back ne marche que sur les partants bien traités).",
            "**Ne jamais piéger** : chaque obstacle artificiel gagne quelques semaines de revenu et perd définitivement la confiance — en plus d'être désormais illégal dans un nombre croissant de juridictions.",
          ],
        },
        { type: "h2", text: "Pause vs annulation : pourquoi tout change" },
        {
          type: "p",
          text: "« Résilier » est une décision définitive et identitaire ; « suspendre » est réversible et contextuelle. La seconde est infiniment plus facile à prendre, et elle préserve tout : moyen de paiement, historique, identité, relation.",
        },
        {
          type: "keynumbers",
          items: [
            { value: "40-60 %", label: "Réactivation après une pause de 1-3 mois (Netflix)" },
            { value: "×3", label: "Usage des options de pause en un an" },
            { value: "≈2×", label: "Poids d'une perte vs un gain (regret anticipé)" },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Le regret anticipé, loyalement",
          text: "« Et si je perds mon streak, mes playlists, mon ancienneté ? » La page d'annulation est l'endroit légitime pour montrer ce qui sera perdu (« votre streak de 247 jours », « votre tarif actuel »). La ligne éthique est nette : montrer une perte réelle est une information loyale ; inventer ou dramatiser est une manipulation qui se paiera.",
        },
      ],
      takeaways: [
        "L'inertie est de la dette de churn, pas de la rétention : provoquez la décision plutôt que la subir.",
        "Trois déclencheurs (externe, friction, désengagement) appellent trois réponses différentes.",
        "Page d'annulation : comprendre avant d'offrir, proposer l'alternative adaptée, ne jamais piéger.",
        "La pause bat la résiliation dès que la cause est temporelle (40-60 % de réactivation).",
      ],
    },

    // ── 2.4 ───────────────────────────────────────────────
    {
      slug: "segmentation-psychologique",
      index: 4,
      ref: "2.4",
      title: "Segmentation psychologique des abonnés",
      subtitle: "Les segmentations classiques décrivent qui sont les abonnés. La psychologique décrit pourquoi ils restent.",
      minutes: 11,
      blocks: [
        {
          type: "lead",
          text: "C'est le « pourquoi ils restent » qui dicte les bonnes stratégies de rétention. Cinq profils couvrent l'essentiel des bases. Tout abonné réel est un mélange, mais avec une dominante identifiable par le comportement.",
        },
        { type: "widget", name: "profile-explorer" },
        { type: "h2", text: "Synthèse opérationnelle" },
        {
          type: "table",
          head: ["Profil", "Part typique", "Risque principal", "Levier n°1", "Erreur à éviter"],
          rows: [
            ["Super-User", "5-15 %", "Déception qualitative", "Reconnaissance, accès initié", "Le traiter en cible générique"],
            ["Passif Satisfait", "30-50 %", "Événement de réveil (dette)", "Rapports de valeur sans effort", "Le culpabiliser / sur-solliciter"],
            ["Opportuniste", "10-25 %", "Départ structurel", "Élargir l'usage, cycle de retour", "Le piéger à la sortie"],
            ["Chasseur de valeur", "15-30 %", "Tout événement tarifaire", "Annuel remisé, downgrade, win-back", "L'éduquer aux promos permanentes"],
            ["Identitaire", "5-20 %", "Rupture du contrat moral", "Ancienneté honorée, communauté", "Le traiter moins bien que les nouveaux"],
          ],
        },
        {
          type: "callout",
          tone: "fire",
          title: "Deux usages concrets",
          text: "En rétention : les campagnes uniformes échouent car elles parlent à un abonné moyen qui n'existe pas. La même hausse de prix appelle un message de valeur pour le Super-User, un downgrade pour le Chasseur, une protection de tarif pour l'Identitaire. En acquisition : chaque canal recrute un profil (la promo agressive recrute des Chasseurs, le contenu de marque de futurs Identitaires) — analyser la LTV par canal, c'est analyser le mix psychologique qu'il produit.",
        },
      ],
      takeaways: [
        "Cinq profils, chacun avec son risque dominant, son levier n°1 et son erreur fatale.",
        "Le Passif Satisfait (30-50 %) est le principal porteur de la dette de churn.",
        "Une campagne uniforme parle à un abonné moyen qui n'existe pas.",
        "La LTV par canal révèle le mix psychologique recruté.",
      ],
    },

    // ── 2.5 ───────────────────────────────────────────────
    {
      slug: "subscription-guilt-moments-de-vie",
      index: 5,
      ref: "2.5",
      title: "Subscription guilt & moments de vie",
      subtitle: "La culpabilité qui précède le churn, et les huit événements de vie qui le rendent massif mais prévisible.",
      minutes: 12,
      blocks: [
        {
          type: "lead",
          text: "La subscription guilt est le sentiment de culpabilité à payer pour un service qu'on n'utilise plus assez pour le justifier à ses propres yeux. Ni mécontentement, ni fatigue : un malaise moral dirigé contre soi (« je gaspille »), que l'abonné résout par la seule chose qui le soulage durablement — la résiliation.",
        },
        { type: "h2", text: "Comment elle s'accumule" },
        {
          type: "p",
          text: "Silencieuse et progressive. Premier mois sans usage : « le mois prochain je m'y remets ». Troisième mois : le prélèvement pique au passage du relevé. Sixième mois : chaque notification est un petit reproche. L'abonné ne se plaint jamais — il n'a rien à reprocher au produit — mais la dette morale grossit jusqu'à l'événement de réveil où la résiliation devient **libératrice**.",
        },
        { type: "h2", text: "Les zombie subscribers" },
        {
          type: "keynumbers",
          items: [
            { value: "15-30 %", label: "Part de zombies invisible dans une base" },
            { value: "30-45 j", label: "Agir AVANT le renouvellement, jamais après" },
            { value: "0 signal", label: "Le MRR les compte comme des abonnés parfaits" },
          ],
        },
        {
          type: "p",
          text: "Le stade terminal de la guilt : il paie, mais n'utilise plus. Aucune plainte, un MRR apparemment sain… et un churn quasi certain, déclenché au renouvellement annuel. La signature comportementale est précise : **baisse d'engagement + paiement qui continue = signal d'alarme.** Tout produit devrait maintenir un segment « inactifs payants » (usage en chute sur 30/60/90 j, dernière session ancienne, emails ignorés, prélèvements honorés).",
        },
        { type: "h2", text: "La règle contre-intuitive" },
        {
          type: "callout",
          tone: "fire",
          title: "Rappeler à un inactif qu'il paie",
          text: "Cela semble suicidaire — c'est pourtant la bonne stratégie. Ce churn aura lieu de toute façon ; la seule question est de savoir s'il aura lieu à votre initiative, dans un cadre positif, ou contre vous, dans le ressentiment. En provoquant la décision : soit l'abonné se réengage, soit il ajuste (pause/downgrade), soit il part proprement — la porte du win-back grande ouverte.",
        },
        {
          type: "quote",
          text: "Un business d'abonnement sain ne veut pas du revenu des gens qui ne veulent plus de lui.",
        },
        { type: "h2", text: "Les huit moments de vie" },
        {
          type: "p",
          text: "Une part importante du churn vient de la vie des abonnés, pas du produit. Huit événements concentrent l'essentiel — prévisibles (ils laissent des traces) et adressables (chacun a sa contre-offre).",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "**Difficultés financières** → churn de prix pur. Traces : downgrade, échecs de paiement. Contre-offres : downgrade, tarif solidaire, pause.",
            "**Déménagement** → churn logistique/contextuel. Contre-offres : transfert facilité, pause de déménagement.",
            "**Naissance** → réallocation du budget/temps. Contre-offres : pause longue, formats courts, offres famille.",
            "**Divorce / séparation** → division des abonnements partagés. Contre-offres : duplication de compte avec historique.",
            "**Retraite** → changement de profil d'usage. Contre-offres : tarif senior, repositionnement.",
            "**Rentrée scolaire** → réorientation saisonnière. Contre-offres : plan étudiant, pause estivale.",
            "**Fin d'un projet** → churn structurel (l'Opportuniste). Contre-offres : élargissement d'usage, cycle de retour.",
            "**Changement d'emploi** → perte de l'usage pro. Contre-offres : tarif individuel de transition, portabilité — en B2B, c'est le champion qui part.",
          ],
        },
        {
          type: "pitfall",
          text: "La limite est éthique : l'offre de circonstance doit être perçue comme une **attention** (« on a pensé à vous »), jamais comme une **surveillance** (« on sait ce qui vous arrive »). La frontière passe par la sobriété du message et le fait de proposer sans nommer l'événement.",
        },
      ],
      takeaways: [
        "Subscription guilt = culpabilité silencieuse qui se résout par la résiliation libératrice.",
        "Zombie = baisse d'engagement + paiement continu ; 15-30 % d'une base, invisibles au MRR.",
        "Provoquer la décision 30-45 jours avant le renouvellement bat le statu quo.",
        "Huit moments de vie, prévisibles et adressables — attention, jamais surveillance.",
      ],
    },

    // ── 2.6 ───────────────────────────────────────────────
    {
      slug: "plaintes-et-detracteurs",
      index: 6,
      ref: "2.6",
      title: "Gérer les plaintes & transformer les détracteurs",
      subtitle: "L'abonné qui se plaint est statistiquement plus fidèle que l'abonné silencieux : la plainte est un investissement.",
      minutes: 11,
      blocks: [
        {
          type: "lead",
          text: "Le réflexe défensif est une erreur. L'abonné qui se plaint a pris le temps de s'adresser à l'opérateur au lieu de partir sans bruit : il veut être convaincu de rester. Le vrai danger, ce sont les dizaines de silencieux qui ont le même problème et dont la friction s'accumule.",
        },
        {
          type: "callout",
          tone: "info",
          title: "Le paradoxe de la récupération de service",
          text: "Un client dont le problème a été bien résolu devient souvent plus fidèle qu'un client qui n'a jamais eu de problème : la résolution est une preuve de la relation que le fonctionnement normal ne fournit jamais. Chaque plainte se lit deux fois : une relation individuelle à sauver, et l'échantillon d'un problème systémique à mesurer.",
        },
        { type: "h2", text: "Support et churn : le lien chiffré" },
        {
          type: "p",
          text: "Un ticket résolu rapidement est neutre ou positif ; un ticket sans réponse ou mal résolu multiplie la probabilité de churn par **2× à 4×** dans les semaines qui suivent. Et le **temps de première réponse** est la variable la plus corrélée à la satisfaction — plus que le temps de résolution — car c'est lui qui dit « vous existez pour nous ». Le support n'est pas un centre de coût : c'est une fonction de rétention dont le ROI se calcule en churn évité.",
        },
        { type: "h2", text: "Les trois types de plainte" },
        {
          type: "list",
          ordered: true,
          items: [
            "**Fonctionnelle** (« ça ne marche pas ») : la plus rentable à traiter. Vitesse de première réponse, transparence sur le délai, et le suivi à J+7 (« tout fonctionne ? ») qui transforme un incident en preuve d'attention.",
            "**De valeur** (« trop cher pour ce que c'est ») : la plus mal traitée, car elle déclenche le discount immédiat. Or l'abonné ne dit pas que le prix est trop haut, mais que la valeur perçue est trop basse. Bon protocole : la conversation de valeur (comprendre l'usage réel, reconfigurer l'offre, downgrade compris). Le discount en dernier recours, et structuré.",
            "**Émotionnelle** (« je ne me sens pas respecté ») : porte sur la relation. La traiter par des arguments factuels aggrave le cas. Protocole : écoute réelle, reconnaissance explicite, puis un geste humain — un message non templatisé, signé d'un prénom. Produit la fidélité la plus durcie de toutes.",
          ],
        },
        { type: "h2", text: "Le « wow moment » de support" },
        {
          type: "p",
          text: "La résolution si inattendue qu'elle devient une histoire que l'abonné raconte : remboursement spontané, remplacement envoyé avant le retour du défectueux, réponse du fondateur. Coût unitaire faible, portée démultipliée (une histoire de support se partage). **Doctrine** : donner au support une enveloppe de générosité discrétionnaire — un budget par agent, utilisable sans validation, pour transformer les pires expériences en meilleures histoires.",
        },
        { type: "h2", text: "NPS : le système d'alerte avancé" },
        {
          type: "p",
          text: "Le NPS classe en détracteurs (0-6), passifs (7-8), promoteurs (9-10). Les détracteurs churnent **~3× plus**. Mais l'usage le plus puissant n'est pas la moyenne trimestrielle : c'est la **dynamique individuelle** couplée au support. La chaîne ticket mal résolu → NPS en baisse → désengagement → résiliation peut s'étaler sur des mois : chaque maillon est une fenêtre d'intervention.",
        },
        {
          type: "callout",
          tone: "fire",
          title: "Opérationnellement",
          text: "Tout détracteur identifié déclenche un traitement individuel (contact humain, pas campagne automatique). Toute bascule promoteur → détracteur est une alerte rouge prioritaire. Le NPS est le canal par lequel les abonnés silencieux acceptent, une fois par trimestre, de ne plus l'être.",
        },
      ],
      takeaways: [
        "La plainte est un investissement : le plaignant est plus fidèle que le silencieux.",
        "Le temps de première réponse pilote la satisfaction ; un ticket mal résolu = churn ×2 à ×4.",
        "Trois plaintes (fonctionnelle, valeur, émotionnelle) = trois registres de réponse distincts.",
        "Le NPS est un système d'alerte : la dynamique individuelle prime sur la moyenne.",
      ],
    },
  ],
};
