"use client";

import ClassifyGame from "./ClassifyGame";
import SequenceOrderGame from "./SequenceOrderGame";

// ── PLG, sales-led ou hybride ? ──
export function PlgEligibility() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Go-to-market"
      title="PLG, sales-led ou hybride ?"
      intro="Le PLG exige : adoptable par un individu seul, valeur démontrable avant achat, usage qui se propage."
      options={[
        { value: "plg", label: "PLG pur (self-service)" },
        { value: "hybride", label: "Hybride (product-led sales)" },
        { value: "sales", label: "Sales-led" },
      ]}
      items={[
        { prompt: "Un outil de planning : un individu l'adopte, envoie un lien, valeur immédiate.", answer: "plg", why: "Time-to-value court, boucle virale intrinsèque, free viable : le PLG pur (type Calendly)." },
        { prompt: "Une plateforme qui exige 3 mois de déploiement et l'accord de la DSI avant la 1ʳᵉ valeur.", answer: "sales", why: "Pas un mauvais produit, un produit sales-led : le forcer en PLG produit un free désert et un funnel vide." },
        { prompt: "Un produit adopté en self-service par les équipes, mais dont les grands comptes exigent sécurité et déploiement global.", answer: "hybride", why: "Product-led sales : self-service jusqu'au Team, vente assistée sur les signaux d'échelle (Slack, Notion, Figma)." },
        { prompt: "Un logiciel métier très complexe, panier à 200 k€/an, achat par comité.", answer: "sales", why: "La décision est organisationnelle d'emblée : vente complète, pas de self-service." },
        { prompt: "Un éditeur de documents collaboratif : l'usage normal (partage) expose des non-utilisateurs.", answer: "plg", why: "La viralité est intrinsèque au produit : chaque acte d'usage est une démonstration à un prospect." },
      ]}
      xpPerCorrect={4}
      goodAt={4}
    />
  );
}

// ── Usage-based : viable ou risqué ? ──
export function UsageBasedViability() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Usage-based"
      title="Ce pricing à l'usage tient-il ?"
      intro="Conditions : unité de valeur lisible, profils hétérogènes, mesure irréprochable. Sinon, danger."
      options={[
        { value: "ok", label: "Condition de viabilité réunie" },
        { value: "risque", label: "Risque / mauvaise pratique" },
      ]}
      items={[
        { prompt: "Facturer « la conversation envoyée » ou « le document traité ».", answer: "ok", why: "Unité de valeur lisible : le client comprend ce qu'il paie et le relie à sa propre valeur." },
        { prompt: "Facturer un « compute unit » opaque que personne ne sait relier à un résultat.", answer: "risque", why: "L'unité illisible transforme chaque facture en litige." },
        { prompt: "Un estimateur de facture + alertes à 50/80/100 % + cap optionnel.", answer: "ok", why: "L'arsenal anti-bill-shock : le client qui peut se protéger ose consommer." },
        { prompt: "Tous les clients consomment exactement pareil.", answer: "risque", why: "Si l'usage est homogène, le flat fait le même travail en plus simple : l'usage-based n'apporte rien." },
        { prompt: "Un socle d'abonnement + dépassement à l'usage, socle calibré sur l'usage normal du segment.", answer: "ok", why: "L'hybride standard du B2B : le client moyen ne vit pas dans le dépassement (sinon plan mal calibré)." },
        { prompt: "Aucun outil de prévisibilité : le client découvre sa facture en fin de mois.", answer: "risque", why: "Le bill shock est asymétrique : une facture choc détruit la confiance que dix conformes n'avaient pas construite." },
      ]}
      xpPerCorrect={4}
      goodAt={5}
    />
  );
}

// ── Support vs Customer Success ──
export function SupportVsCs() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Customer Success"
      title="Support ou Customer Success ?"
      intro="Le support répond aux problèmes (réactif) ; le CS poursuit des résultats (proactif). Distinguez."
      options={[
        { value: "support", label: "Support (réactif)" },
        { value: "cs", label: "Customer Success (proactif)" },
      ]}
      items={[
        { prompt: "Répondre à un ticket « ça ne marche pas » envoyé par le client.", answer: "support", why: "Réactif, déclenché par le client : c'est le rôle du support." },
        { prompt: "Organiser un QBR pour montrer les résultats obtenus et fixer les objectifs du trimestre.", answer: "cs", why: "Proactif, orienté résultats : le rituel central du Customer Success." },
        { prompt: "Détecter un compte au health score orange et lancer un plan d'adoption.", answer: "cs", why: "Déclenché par les signaux, pas par le client : la rétention proactive." },
        { prompt: "Aider un utilisateur à réinitialiser son mot de passe.", answer: "support", why: "Résolution d'un problème ponctuel : support." },
        { prompt: "Repérer un nouveau cas d'usage chez le client et préparer un upsell consultatif.", answer: "cs", why: "L'expansion naît au QBR : faire émerger les signaux d'expansion est une mission CS." },
      ]}
      xpPerCorrect={4}
      goodAt={4}
    />
  );
}

// ── Champion vs Economic Buyer ──
export function ChampionVsBuyer() {
  return (
    <ClassifyGame
      badge="Mini-jeu · Grands comptes"
      title="Champion ou Economic Buyer ?"
      intro="Le champion veut que le produit réussisse ; l'economic buyer veut que la dépense se justifie. À qui s'adresse chaque action ?"
      options={[
        { value: "champion", label: "Champion" },
        { value: "buyer", label: "Economic Buyer" },
      ]}
      items={[
        { prompt: "Lui donner un accès anticipé, des arguments et la reconnaissance de sa réussite.", answer: "champion", why: "On le nourrit de produit, d'accès et de réussite visible — son ascension est la vôtre." },
        { prompt: "Lui présenter le ROI chiffré contre les alternatives, y compris « ne rien faire ».", answer: "buyer", why: "Son critère est la justification de la dépense : chiffres, benchmarks, risques évités." },
        { prompt: "Le former pour qu'il défende le produit en réunion budgétaire.", answer: "champion", why: "Il porte le produit en interne : l'actif relationnel n°1 du compte." },
        { prompt: "Construire le dossier de renouvellement dans sa langue, avec les munitions des QBR.", answer: "buyer", why: "Il signe le renouvellement : le dossier se construit dans la langue du second avec les résultats fournis par le champion." },
        { prompt: "Le rencontrer dès le début de la relation, pas à J-60 du renouvellement.", answer: "buyer", why: "L'economic buyer rencontré pour la première fois à J-60 est un risque, pas un interlocuteur." },
      ]}
      xpPerCorrect={4}
      goodAt={4}
    />
  );
}

// ── La séquence de renouvellement enterprise ──
export function RenewalTimeline() {
  return (
    <SequenceOrderGame
      badge="Mini-jeu · Renouvellement"
      title="Le renouvellement enterprise en 180 jours"
      intro="Le renouvellement n'est pas une reconduction, c'est un cycle de vente. Remettez les jalons dans l'ordre (du plus tôt au plus tard)."
      correct={[
        { id: "j180", when: "J-180", title: "QBR de lancement officieux + bilan de valeur", role: "On construit : bilan, objectifs, traitement des irritants — il reste le temps d'agir sur l'usage et de réparer." },
        { id: "j120", when: "J-120", title: "Point de validation", role: "On confirme les résultats et l'engagement des parties prenantes (champion ET economic buyer)." },
        { id: "j90", when: "J-90", title: "Proposition de renouvellement", role: "Le dossier dans la langue de l'economic buyer, avec les munitions ROI des QBR." },
        { id: "j60", when: "J-60", title: "Négociation des conditions", role: "Multi-année proposé aux comptes sains, traitement du single thread, position de négociation tenue." },
        { id: "j30", when: "J-30", title: "Circuits de signature", role: "À J-30 on subit : le bilan est figé, les achats ont la main, toute concession devient le prix de l'urgence." },
      ]}
    />
  );
}
