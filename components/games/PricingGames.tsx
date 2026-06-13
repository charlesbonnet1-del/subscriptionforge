"use client";

import ClassifyGame from "./ClassifyGame";

// ── Audit d'une page pricing : bonne pratique ou défaut ? ──
export function PricingPageAudit() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Audit pricing"
      title="Analysez cette page pricing"
      intro="Pour chaque élément d'une page pricing, est-ce une bonne pratique ou un défaut à corriger ?"
      options={[
        { value: "bon", label: "Bonne pratique" },
        { value: "defaut", label: "Défaut à corriger" },
      ]}
      items={[
        { prompt: "Le toggle s'ouvre sur l'annuel, prix en équivalent mensuel, économie en « 2 mois offerts ».", answer: "bon", why: "La décision à plus fort impact : la majorité ne touche pas au toggle, et l'annuel vaut 2-3× un mensuel." },
        { prompt: "Plan central en relief, couleur dominante, badge « le plus populaire ».", answer: "bon", why: "Cumule preuve sociale et effet de compromis : la position cible devient autoréalisatrice." },
        { prompt: "Six colonnes de plans pour couvrir tous les cas.", answer: "defaut", why: "Au-delà de quatre, le paradoxe du choix s'installe : la réponse à la surcharge est l'onglet fermé." },
        { prompt: "Plans nommés Bronze / Argent / Or.", answer: "defaut", why: "Les noms abstraits reportent l'effort de décodage sur le visiteur. Préférer des noms-miroirs (Solo / Équipe / Entreprise)." },
        { prompt: "« Sans engagement, annulable en un clic » + garantie, juste sous le bouton.", answer: "bon", why: "Les signaux de confiance au point exact de friction, là où l'hésitation se joue." },
        { prompt: "Lignes de features comme « Rétention des logs étendue » avec astérisques.", answer: "defaut", why: "Chaque ligne obscure ajoute du doute ; chaque astérisque est une alerte. Parler valeur, pas technique." },
        { prompt: "« Contactez-nous » sur tous les plans au lieu d'afficher les prix.", answer: "defaut", why: "Les prix cachés tuent la conversion : le « sur devis » est réservé au seul Enterprise." },
      ]}
      xpPerCorrect={4}
      goodAt={6}
    />
  );
}

// ── Reprendre le prix : légitime ou contre-indiqué ? ──
export function RepricingJudgment() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Repricing"
      title="Faut-il reprendre le prix ?"
      intro="Pour chaque situation : une hausse de prix est-elle légitime maintenant, ou contre-indiquée ?"
      options={[
        { value: "ok", label: "Hausse légitime" },
        { value: "non", label: "Contre-indiquée" },
      ]}
      items={[
        { prompt: "Le produit fait aujourd'hui substantiellement plus qu'il y a deux ans, avec des nouveautés visibles.", answer: "ok", why: "La valeur a augmenté : la hausse réaligne le prix sur la valeur et se raconte bien (comme une annonce produit)." },
        { prompt: "Le churn est déjà élevé et en hausse ce trimestre.", answer: "non", why: "La hausse est un test de la valeur perçue : on ne fait pas passer un test à un malade. Réparer la rétention d'abord." },
        { prompt: "On a lancé trop bas il y a un an ; conversion et rétention sont excellentes.", answer: "ok", why: "L'erreur initiale se corrige — idéalement par paliers sur les nouveaux clients (price discovery progressive)." },
        { prompt: "Un incident majeur et un bad buzz viennent de toucher le service.", answer: "non", why: "Une crise de confiance en cours : la hausse y serait vécue comme une provocation." },
        { prompt: "Rien de neuf à montrer, mais on veut plus de revenu ce trimestre.", answer: "non", why: "Sans munitions narratives, une hausse « sèche » solde d'un coup la dette de churn. Grouper avec une vague de valeur." },
        { prompt: "Lancement d'une vague de fonctionnalités majeures, churn faible et stable.", answer: "ok", why: "Conditions réunies : valeur démontrable + base saine. La meilleure annonce de hausse ressemble à une annonce produit." },
      ]}
      xpPerCorrect={4}
      goodAt={5}
    />
  );
}

// ── Benchmarks : à quelle fourchette appartient ce produit ? ──
export function BenchmarkMatch() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Benchmarks"
      title="Dans quelle fourchette ?"
      intro="Situez chaque produit dans sa fourchette de prix mensuelle typique. L'écart B2C/B2B est le plus instructif."
      options={[
        { value: "bas", label: "3-15 € (consumer / mass)" },
        { value: "moyen", label: "15-50 € (niche premium)" },
        { value: "siege", label: "20-100 €/siège (B2B SMB)" },
        { value: "devis", label: "Sur devis (enterprise)" },
      ]}
      items={[
        { prompt: "Application mobile de méditation grand public.", answer: "bas", why: "Consumer apps : 3-10 €. L'acheteur raisonne en budget personnel." },
        { prompt: "Outil de design collaboratif vendu aux équipes.", answer: "siege", why: "SaaS B2B SMB : 20-100 €/siège. L'acheteur raisonne en ROI, pas en budget perso." },
        { prompt: "Newsletter financière premium pour professionnels.", answer: "moyen", why: "Médias premium / niche B2B : 20-50 €." },
        { prompt: "CRM déployé sur 5 000 postes d'un grand groupe.", answer: "devis", why: "Enterprise : sur devis, souvent 100 €+/siège équivalent, avec SLA et sécurité." },
        { prompt: "Logiciel prosumer de montage vidéo pour indépendants.", answer: "moyen", why: "SaaS B2C niche premium / prosumer : 15-50 € et plus." },
        { prompt: "Service de stockage cloud grand public.", answer: "bas", why: "SaaS B2C mass market : 5-15 €." },
      ]}
      xpPerCorrect={3}
      goodAt={5}
    />
  );
}
