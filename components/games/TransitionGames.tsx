"use client";

import ClassifyGame from "./ClassifyGame";

// ── Le style de bascule ──
export function TransitionStyle() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Transition"
      title="Quel style de bascule ?"
      intro="Le critère : le pouvoir de marché et la dépendance des clients. Qui peut imposer, qui doit séduire ?"
      options={[
        { value: "franche", label: "Bascule franche (Adobe)" },
        { value: "gravite", label: "Bascule par gravité (Microsoft)" },
        { value: "danger", label: "Danger : transition à éviter" },
      ]}
      items={[
        { prompt: "Un éditeur dont les clients (créatifs) n'ont aucune alternative sérieuse, trésorerie solide.", answer: "franche", why: "Le pouvoir d'imposer : J-curve violent et court, backlash maximal, clarté totale (le manuel Adobe)." },
        { prompt: "Un géant exposé sur le grand public et les administrations, capable de tenir 10 ans.", answer: "gravite", why: "Doit séduire : la coexistence inclinée (valeur cloud d'abord, pricing ensuite) — pas de révolte (Microsoft 365)." },
        { prompt: "Une PME sans pouvoir de marché ET sans trésorerie pour financer le creux.", answer: "danger", why: "Le cas piège : sans pouvoir d'imposer ni envergure de coexistence, la transition est un danger — valider d'abord (phase 1)." },
        { prompt: "Un logiciel dont les concurrents basculent déjà et dont les clients sont captifs.", answer: "franche", why: "Le pouvoir de marché permet l'arrêt daté de l'ancien modèle, avec une valeur cloud exclusive." },
        { prompt: "Un éditeur grand public avec une base fidèle mais des alternatives gratuites crédibles.", answer: "gravite", why: "L'exposition impose la séduction : incliner le terrain méthodiquement, sans révolte frontale." },
      ]}
      xpPerCorrect={4}
      goodAt={4}
    />
  );
}

// ── Quelle phase de la roadmap ? ──
export function TransitionPhase() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Roadmap"
      title="Quelle phase de transition ?"
      intro="La roadmap en trois phases : valider, construire la valeur, migrer la base. À quelle phase appartient chaque action ?"
      options={[
        { value: "p1", label: "Phase 1 — Valider" },
        { value: "p2", label: "Phase 2 — Construire la valeur" },
        { value: "p3", label: "Phase 3 — Migrer la base" },
      ]}
      items={[
        { prompt: "Offrir l'abonnement en parallèle aux NOUVEAUX clients et mesurer l'adoption.", answer: "p1", why: "Remplacer la conviction par une preuve : on ne touche pas encore à la base, on instrumente dès le 1ᵉʳ jour." },
        { prompt: "Construire la mise à jour permanente, le cloud, l'accumulation de données.", answer: "p2", why: "L'abonnement doit délivrer plus que l'ancien modèle, visiblement — sinon c'est une hausse de prix déguisée." },
        { prompt: "Annoncer aux clients existants la fin datée de l'ancien modèle, avec crédit de migration.", answer: "p3", why: "La phase la plus délicate : convertir ceux qui n'ont rien demandé, valeur avant prix, conditions honorantes." },
        { prompt: "Refondre la rémunération commerciale du chèque de signature vers la valeur du contrat récurrent.", answer: "p2", why: "Le chantier politique n°1 : sinon la force de vente sabote la transition en vendant l'ancien monde." },
        { prompt: "Fixer les critères de validation (adoption, rétention à 3-6 mois, économie unitaire) avant le lancement.", answer: "p1", why: "Sous peine de les ajuster à la complaisance : la phase 1 produit les chiffres de la décision." },
      ]}
      xpPerCorrect={4}
      goodAt={4}
    />
  );
}

// ── Les principes de migration ──
export function MigrationPrinciples() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Migration"
      title="Bonne pratique de migration ?"
      intro="Migrer la base réunit tout le répertoire du livre. Bonne pratique ou erreur ?"
      options={[
        { value: "bon", label: "Bonne pratique" },
        { value: "erreur", label: "Erreur" },
      ]}
      items={[
        { prompt: "Annoncer le récit de valeur avant le récit de prix.", answer: "bon", why: "La phase 2 fournit les munitions : on annonce ce que le client gagne, la modalité de paiement vient ensuite." },
        { prompt: "Découvrir la migration sur le relevé, du jour au lendemain.", answer: "erreur", why: "Le préavis est de mois, pas de semaines : la hausse découverte est la définition de la transition ratée." },
        { prompt: "Créditer l'existant (remise proportionnelle à la récence de l'achat).", answer: "bon", why: "La fidélité créditée (leçon Adobe) : on honore ce que le client a déjà payé." },
        { prompt: "Vendre un abonnement qui n'apporte que l'étalement du paiement.", answer: "erreur", why: "Une hausse de prix déguisée : le client fait le calcul pluriannuel, et il a raison." },
        { prompt: "Budgéter le churn de migration à l'avance et tenir le cap malgré la vague.", answer: "bon", why: "Le scénario Adobe : la vague était dans le plan, elle n'a pas fait dévier. Le rétropédalage à mi-creux est le pire scénario." },
        { prompt: "Garantir le tarif de lancement aux migrants précoces.", answer: "bon", why: "Le grandfathering qui amorce la pompe et fournit les témoignages : la prime à ceux qui font confiance tôt." },
      ]}
      xpPerCorrect={4}
      goodAt={5}
    />
  );
}
