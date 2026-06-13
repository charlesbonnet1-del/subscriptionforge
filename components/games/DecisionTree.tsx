"use client";

import { useState } from "react";

type Q = {
  id: number;
  question: string;
  yes: string;
  no: string;
};

const QUESTIONS: Q[] = [
  { id: 1, question: "Le besoin se régénère-t-il naturellement (consommation continue, pas un one-shot) ?", yes: "Oui", no: "Non" },
  { id: 2, question: "La valeur par client est-elle proportionnelle à une unité d'usage mesurable et très variable d'un client à l'autre ?", yes: "Oui", no: "Non" },
  { id: 3, question: "Le coût de servir un utilisateur gratuit est-il quasi nul ET le marché se compte-t-il en centaines de milliers ?", yes: "Oui", no: "Non" },
  { id: 4, question: "La valeur relationnelle (communauté, accès, statut) domine-t-elle la valeur fonctionnelle ?", yes: "Oui", no: "Non" },
  { id: 5, question: "Y a-t-il un actif initial à vendre (matériel, setup, formation) ?", yes: "Oui", no: "Non" },
  { id: 6, question: "Le besoin est-il continu ou saisonnier ?", yes: "Saisonnier", no: "Continu" },
];

function synthesize(ans: Record<number, boolean>): string[] {
  const out: string[] = [];
  if (ans[1] === false) {
    out.push("⛔ **Vente unique ou hybride** : sans besoin récurrent, ne forcez pas l'abonnement. Relisez le Module 3 avant d'aller plus loin.");
    return out;
  }
  if (ans[2]) out.push("📊 **Usage-based ou hybride socle + usage** : facturez la consommation, mais investissez dans la prévisibilité (estimateurs, alertes, caps) pour éviter le bill shock.");
  else out.push("📦 **Flat rate** envisageable : la simplicité tarifaire devient un argument de vente.");

  if (ans[3]) out.push("🆓 **Freemium envisageable** : coût du gratuit quasi nul et marché large. Surveillez la cannibalisation du payant.");
  else out.push("⏳ **Free trial plutôt que freemium** : audience trop étroite ou gratuit trop coûteux pour un freemium rentable.");

  if (ans[4]) out.push("🤝 **Membership** : la valeur relationnelle se paie plus cher et churne moins — mais exige animation, densité et temps.");
  else out.push("🔧 **Abonnement classique** : la valeur fonctionnelle prime, pilotez par l'usage et la rétention.");

  if (ans[5]) out.push("🧲 **Hybride one-time + récurrent** : l'actif initial finance le CAC et crée le plus puissant des lock-ins (cf. Peloton).");
  else out.push("♻️ **Récurrent pur** : pas d'actif initial, tout repose sur la LTV.");

  if (ans[6]) out.push("🗓️ **Saisonnalité** : prévoyez dès le design la pause, le plan trimestriel ou l'annuel incitatif (Modules 4 et 7).");

  return out;
}

export default function DecisionTree() {
  const [step, setStep] = useState(0);
  const [ans, setAns] = useState<Record<number, boolean>>({});
  const [done, setDone] = useState(false);

  // Si Q1 = Non, on conclut immédiatement.
  function answer(yes: boolean) {
    const q = QUESTIONS[step];
    const next = { ...ans, [q.id]: yes };
    setAns(next);
    if (q.id === 1 && !yes) {
      setDone(true);
      return;
    }
    if (step + 1 >= QUESTIONS.length) setDone(true);
    else setStep(step + 1);
  }

  function reset() {
    setStep(0);
    setAns({});
    setDone(false);
  }

  if (done) {
    const reco = synthesize(ans);
    return (
      <div className="widget-card">
        <div className="widget-head">
          <span className="badge badge-fire">Votre diagnostic modèle</span>
          <h3>Le modèle conseillé</h3>
        </div>
        <ul className="reco-list">
          {reco.map((r, i) => (
            <li key={i}>
              <RichInline text={r} />
            </li>
          ))}
        </ul>
        <button className="btn-ghost" onClick={reset} style={{ marginTop: 16 }}>
          Recommencer
        </button>
      </div>
    );
  }

  const q = QUESTIONS[step];
  return (
    <div className="widget-card">
      <div className="widget-head">
        <span className="badge badge-fire">Arbre de décision interactif</span>
        <h3>Quel modèle pour mon business ?</h3>
        <p>
          Question {step + 1} / {QUESTIONS.length}
        </p>
      </div>
      <p className="diag-q" style={{ fontSize: "1.25rem" }}>
        {q.question}
      </p>
      <div className="diag-actions">
        <button className="cta-fire-button" onClick={() => answer(true)}>
          {q.yes}
        </button>
        <button className="btn-ghost" onClick={() => answer(false)}>
          {q.no}
        </button>
      </div>
    </div>
  );
}

function RichInline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("**") ? <strong key={i}>{p.slice(2, -2)}</strong> : <span key={i}>{p}</span>
      )}
    </>
  );
}
