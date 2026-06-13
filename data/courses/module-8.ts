import type { CourseContent } from "@/lib/content-types";

export const moduleEight: CourseContent = {
  moduleSlug: "nrr-et-expansion",
  hasGames: true,
  hasQuiz: true,
  lessons: [
    // ── 8.1 ───────────────────────────────────────────────
    {
      slug: "comprendre-le-nrr",
      index: 1,
      ref: "8.1",
      title: "Comprendre le NRR",
      subtitle: "La base d'abonnés n'est pas un stock à conserver, c'est un actif à faire fructifier. Le NRR est la métrique qui gouverne ce versant.",
      minutes: 11,
      blocks: [
        {
          type: "lead",
          text: "Le Net Revenue Retention répond à une question d'une simplicité redoutable : que devient, un an plus tard, le revenu des clients que j'avais déjà ? On prend une cohorte à T0, on mesure son MRR ; douze mois plus tard, on remesure le MRR de ces mêmes clients. Aucun nouveau client n'entre dans le calcul.",
        },
        {
          type: "formula",
          expr: "NRR = (MRR de départ + expansion − contraction − churn) ÷ MRR de départ × 100",
          note: "Le GRR (Gross Revenue Retention) calcule la même chose sans l'expansion : il plafonne à 100 % et sert de garde-fou.",
        },
        { type: "widget", name: "nrr-calculator" },
        { type: "h2", text: "Les trois états d'un business d'abonnement" },
        {
          type: "list",
          items: [
            "**NRR < 100 % — le tapis roulant descendant** : la base perd de la valeur chaque année. À 85 %, il faut acquérir 15 % du revenu juste pour faire du surplace — le modèle qui devient plus dur à mesure qu'il réussit. La plupart des B2C purs vivent là (peu de leviers d'expansion individuelle).",
            "**NRR = 100 % — l'équilibre** : l'expansion compense exactement churn et contraction. Le seuil de respectabilité — et le seuil psychologique des investisseurs.",
            "**NRR > 100 % — la croissance endogène** : la base croît toute seule. 110 % = +10 % de revenu annuel sans vendre à personne, qui se cumule. L'acquisition devient un accélérateur, et chaque cohorte vaut plus que son prix d'entrée — autorisant des CAC que les concurrents sous 100 % ne peuvent suivre.",
          ],
        },
        {
          type: "keynumbers",
          items: [
            { value: "< 90 %", label: "Problème structurel" },
            { value: "100-110 %", label: "Sain" },
            { value: "> 120 %", label: "Profil d'élite (double en < 4 ans)" },
          ],
        },
        {
          type: "callout",
          tone: "fire",
          title: "Pourquoi les investisseurs regardent le NRR avant tout",
          text: "C'est le seul chiffre qui prouve la qualité du produit avec de l'argent. La croissance brute s'achète ; le NRR ne ment pas — il mesure ce que des clients qui connaissent le produit décident d'en faire. Un NRR de 115 % dit en un chiffre : la promesse est tenue (sinon ils partiraient), la valeur grandit avec l'usage (sinon ils ne s'étendraient pas), et le pricing capture cette valeur.",
        },
      ],
      takeaways: [
        "Le NRR mesure le revenu d'une cohorte existante un an après, sans aucun nouveau client.",
        "Trois régimes : < 100 % (tapis roulant), 100 % (équilibre), > 100 % (croissance endogène).",
        "Le GRR (sans expansion) est le garde-fou contre un NRR flatteur sur une base qui fuit.",
        "Le NRR est le seul chiffre qui prouve la qualité du produit avec de l'argent.",
      ],
    },

    // ── 8.2 ───────────────────────────────────────────────
    {
      slug: "strategies-d-expansion",
      index: 2,
      ref: "8.2",
      title: "Les stratégies d'expansion revenue",
      subtitle: "Le bon upsell se déclenche tout seul quand l'usage franchit un seuil naturel. Le travail n'est pas de pousser, mais d'instrumenter le franchissement.",
      minutes: 12,
      blocks: [
        {
          type: "lead",
          text: "Quatre leviers font croître le revenu de la base existante : l'upsell, le cross-sell, le multi-utilisateurs et l'annuel.",
        },
        { type: "h2", text: "L'upsell : faire monter en gamme" },
        {
          type: "list",
          items: [
            "**L'upsell par trigger d'usage — le roi** : l'abonné approche une limite, et le système le lui montre au moment exact où la valeur du palier supérieur se démontre. On ne vend pas un plan, on débloque une action en cours — une conversion sans commune mesure avec les campagnes à froid.",
            "**L'in-app bump — la présence douce** : les points de contact premium disséminés (l'école Duolingo : sept touchpoints, aucun bloquant). Chaque bump à un moment pertinent, jamais en interruption.",
            "**L'upsell par email — les moments calculés** : la campagne déclenchée par le comportement. Efficace en complément, faible seul (l'email à froid vend mal un upgrade que le produit n'a pas préparé).",
            "**L'upsell consultatif — le mode B2B** : au-delà d'un certain panier, l'upsell est une conversation (le QBR qui met les données d'usage sur la table). On n'étend que les comptes verts (health score).",
          ],
        },
        { type: "h2", text: "Le cross-sell : élargir le panier" },
        {
          type: "p",
          text: "Vendre autre chose au même abonné : les **add-ons** (monétiser les besoins minoritaires sans charger les plans de tous), les **modules** (le second produit), et le **bundle progressif** — chaque produit ajouté réduit le churn global (les raisons de rester s'additionnent, le switching cost devient collectif). C'est de l'expansion ET du lock-in d'écosystème.",
        },
        {
          type: "pitfall",
          text: "La condition trop souvent violée : le second produit doit être **bon seul**. Le module médiocre vendu sur la force du premier érode la confiance qui portait l'ensemble.",
        },
        { type: "h2", text: "Le plan familial et le multi-siège" },
        {
          type: "callout",
          tone: "fire",
          title: "L'expansion par les autres",
          text: "On passe d'un abonnement-personne à un abonnement-groupe : l'ARPU monte et le churn s'effondre simultanément. Le groupe crée un switching cost collectif (résilier le plan familial, c'est le retirer à quatre personnes — une négociation de foyer). Duolingo Family cumule trois effets : ARPU supérieur, rétention dopée (six streaks à protéger), et acquisition intégrée (chaque place libre est une invitation à CAC nul).",
        },
        {
          type: "p",
          text: "**La grille de design d'un plan groupe** : un prix par groupe nettement inférieur à la somme des individuels (le déclencheur) mais supérieur à 1,5-2× l'individuel (la capture), la gestion simple des membres (l'ajout en un lien), et la mise en visibilité du collectif (le tableau de famille — le ciment).",
        },
        { type: "h2", text: "L'annual upsell : l'expansion par la durée" },
        {
          type: "p",
          text: "La migration mensuel → annuel est de **l'expansion de NRR par la rétention** : l'annuel ne monte pas l'ARPU mensuel (il le baisse légèrement) mais transforme le profil de churn — l'abonné annuel est présent à la mesure. Timing optimal autour du **mois 3** (assez tard pour la confiance, assez tôt pour capturer la durée), déclencheur comportemental (pic d'usage, milestone J+90), message « économisez 2 mois ».",
        },
      ],
      takeaways: [
        "L'upsell par trigger d'usage est le roi : débloquer une action en cours, pas vendre un plan.",
        "Le cross-sell est de l'expansion + du lock-in — à condition que le second produit soit bon seul.",
        "Le plan groupe monte l'ARPU ET effondre le churn (switching cost collectif).",
        "L'annuel est de l'expansion de NRR par la rétention : timing au mois 3, sur les engagés.",
      ],
    },

    // ── 8.3 ───────────────────────────────────────────────
    {
      slug: "programmes-de-fidelite",
      index: 3,
      ref: "8.3",
      title: "Les programmes de fidélité natifs",
      subtitle: "La fidélité est l'angle mort de l'expansion : tout le marketing célèbre les nouveaux pendant que les fidèles paient plein tarif sans un merci.",
      minutes: 9,
      blocks: [
        {
          type: "lead",
          text: "Le programme de fidélité natif corrige l'asymétrie : récompenser l'ancienneté avec des avantages concrets. Distinction préalable : la gamification récompense le comportement avec du symbolique ; le programme de fidélité récompense la durée avec du tangible. On ne fidélise pas un client de trois ans avec un badge.",
        },
        { type: "h2", text: "Les trois types d'avantages" },
        {
          type: "list",
          ordered: true,
          items: [
            "**L'accès anticipé** : les anciens voient les nouveautés en premier (beta réservée, avant-première). Coût quasi nul, valeur perçue forte (le statut d'initié), et les fidèles sont les meilleurs testeurs.",
            "**Les tarifs préférentiels** : « abonné depuis 3 ans → prix garanti à vie », protection renforcée lors des repricing. Le plus puissant (l'ancienneté devient un actif financier) et le plus coûteux — à réserver aux paliers hauts et à borner.",
            "**Le contenu et le service exclusifs** : webinaires réservés, support prioritaire des anciens, événement des membres historiques. La famille la plus flexible, et celle qui nourrit le mieux l'identité (l'appartenance au cercle des anciens).",
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "La logique économique",
          text: "Un abonné de trois ans vaut trois à cinq fois un abonné de trois mois — par sa LTV résiduelle (churn de fond bas), son expansion (les anciens portent les upsells), son referral (les ambassadeurs sont des anciens), et sa résistance au prix. Investir 5 % de son ARPU annuel en avantages de fidélité est rationnel dès que cela retient ou étend une fraction du segment.",
        },
        {
          type: "pitfall",
          text: "Le piège est le miroir des promos d'acquisition : le fidèle qui découvre que le nouveau paie moins (ou le nouveau qui découvre un club fermé). Règles : des paliers atteignables et affichés (« dans 12 mois, vous débloquerez X » — l'avantage devient une promesse, pas une exclusion), des avantages d'ancienneté (que chacun peut remplir en restant), et jamais de dégradation des nouveaux (le programme ajoute, il ne retranche pas).",
        },
        {
          type: "callout",
          tone: "fire",
          title: "La distinction de doctrine à marteler",
          text: "Le programme de fidélité récompense ceux qui restent ; l'offre de win-back récompense ceux qui partent. Un système qui n'offre des avantages qu'aux churners éduque la base entière à churner pour être bien traitée. La plupart des opérateurs découvrent, en posant l'équilibre des deux budgets, qu'ils dépensent tout en reconquête et rien en reconnaissance.",
        },
      ],
      takeaways: [
        "La fidélité récompense la durée avec du tangible (vs la gamification, symbolique).",
        "Trois types : accès anticipé, tarifs préférentiels, contenu/service exclusifs.",
        "Un abonné de 3 ans vaut 3-5× un de 3 mois : investir ~5 % de l'ARPU est rationnel.",
        "Fidélité (récompense rester) vs win-back (récompense partir) : équilibrer les budgets.",
      ],
    },

    // ── 8.4 ───────────────────────────────────────────────
    {
      slug: "abonnement-et-valorisation",
      index: 4,
      ref: "8.4",
      title: "L'abonnement comme levier de valorisation",
      subtitle: "Tout ce qui précède traduit en langage d'investisseur — pour qui lève, pour qui vend, et pour qui veut piloter avec les bons réflexes.",
      minutes: 9,
      blocks: [
        {
          type: "lead",
          text: "Le MRR se présente décomposé (le movement — la trajectoire brute sans sa décomposition est invérifiable, donc suspecte), l'ARR se présente propre (tout one-shot glissé dedans sera trouvé en due diligence), et les cohortes se présentent en courbes (le plateau du Module 6.3 est l'argument central, son absence la question centrale).",
        },
        { type: "h2", text: "L'ordre de lecture des investisseurs" },
        {
          type: "list",
          ordered: true,
          items: [
            "**Le NRR** — la qualité prouvée du produit : c'est lui qui ouvre ou ferme la conversation.",
            "**Le churn (et le GRR)** — la solidité du socle : par cohorte, par segment, volontaire/involontaire séparés (maîtriser sa taxonomie est en soi un signal de qualité d'équipe).",
            "**Le LTV/CAC (et le payback)** — l'efficacité de la machine : la règle du 3:1, le payback dans les bornes, et le CAC complet (l'investisseur refera le calcul avec les salaires).",
            "**La croissance du MRR** — en dernier, délibérément : la croissance se voit, mais les trois métriques précédentes disent si elle vaut quelque chose. La croissance à NRR de 80 % est un compteur qui tourne dans le vide.",
          ],
        },
        {
          type: "callout",
          tone: "fire",
          title: "Le multiple d'ARR — le levier qui boucle tout le livre",
          text: "Le revenu récurrent se valorise en multiple d'ARR (de 3-5× pour les profils moyens à 10-15×+ pour l'élite), et le multiple est une fonction du NRR, du churn et de l'efficacité de croissance. Conséquence : un point de churn en moins ou cinq points de NRR en plus ne valent pas seulement leur effet sur le revenu — ils changent le multiple appliqué à TOUT le revenu. Le levier de valorisation le plus dense qui existe, entre les mains de l'opérateur, pas du marché.",
        },
        { type: "h2", text: "La Rule of 40" },
        {
          type: "formula",
          expr: "Croissance annuelle (%) + marge (%) ≥ 40",
          note: "+60 % de croissance à −20 % de marge passe (40) ; +10 % à +10 % échoue (20).",
        },
        {
          type: "p",
          text: "Le test synthétique de qualité d'un SaaS : la croissance et la rentabilité s'achètent l'une avec l'autre, la règle borne l'échange. Et tout ce module a montré où chercher : **l'expansion et la fidélité améliorent la croissance ET la marge en même temps, puisqu'elles croissent sans CAC.**",
        },
        {
          type: "p",
          text: "**Se positionner contre les benchmarks** : présenter ses chiffres situés (le churn contre sa verticale, le NRR contre son modèle). Un chiffre moyen bien situé (« 4 % de churn — la médiane de notre catégorie est 6 ») vaut mieux qu'un bon chiffre flottant : la maîtrise du référentiel prouve qu'on sait où l'on joue.",
        },
      ],
      takeaways: [
        "Présenter : MRR décomposé, ARR propre, cohortes en courbes (le plateau est l'argument).",
        "Ordre de lecture investisseur : NRR → churn/GRR → LTV/CAC → croissance (en dernier).",
        "Le multiple d'ARR est fonction du NRR/churn : un point de churn change le multiple de TOUT le revenu.",
        "Rule of 40 : expansion et fidélité améliorent croissance ET marge, car sans CAC.",
      ],
    },
  ],
};
