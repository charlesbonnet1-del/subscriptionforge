"use client";

import { useState } from "react";
import { useProgress } from "@/components/ProgressContext";

type Pair = {
  context: string;
  a: string;
  b: string;
  winner: "a" | "b";
  mechanism: string;
};

const PAIRS: Pair[] = [
  {
    context: "Bannière d'offre annuelle",
    a: "Payez 84 € de moins par an",
    b: "Économisez 20 % — moins de 84 €/mois, facturé annuellement",
    winner: "b",
    mechanism:
      "Aversion à la perte (cadre du gain à saisir) + escompte temporel (le gros prix affiché en équivalent mensuel). On vend le petit chiffre, on encaisse le gros.",
  },
  {
    context: "Page d'annulation",
    a: "Êtes-vous sûr ? Cette action est irréversible.",
    b: "Vous perdrez votre streak de 247 jours et vos 340 articles sauvegardés.",
    winner: "b",
    mechanism:
      "Regret anticipé / aversion à la perte rendue tangible. Montrer une perte réelle est loyal ; l'inventer serait une manipulation.",
  },
  {
    context: "Notification de hausse de prix à un abonné fidèle",
    a: "Nos tarifs évoluent. Nouveau prix à partir du 1ᵉʳ du mois.",
    b: "Membre depuis 2019, votre tarif actuel vous reste acquis 12 mois de plus.",
    winner: "b",
    mechanism:
      "Protection du contrat moral + grandfathering pour l'Identitaire : honorer l'ancienneté désamorce le divorce.",
  },
  {
    context: "Email de réengagement d'un inactif",
    a: "Vous nous manquez ! Revenez vite 😢",
    b: "Le meilleur de ce que vous avez raté ce mois-ci, en 3 titres",
    winner: "b",
    mechanism:
      "Campagne d'usage qui recharge la valeur sans culpabiliser. Le pathos (« vous nous manquez ») rappelle surtout à l'inactif qu'il paie.",
  },
  {
    context: "Bouton sous le prix",
    a: "Souscrire maintenant",
    b: "Souscrire — sans engagement, résiliable en un clic",
    winner: "b",
    mechanism:
      "Réduction de l'aversion au risque : faciliter la sortie augmente les entrées. La réversibilité abaisse le coût psychologique de l'essai.",
  },
];

export default function ABCopy() {
  const { addXp } = useProgress();
  const [picks, setPicks] = useState<Record<number, "a" | "b">>({});
  const [checked, setChecked] = useState(false);
  const [awarded, setAwarded] = useState(false);

  const all = Object.keys(picks).length === PAIRS.length;
  const score = PAIRS.filter((p, i) => picks[i] === p.winner).length;

  function check() {
    setChecked(true);
    if (!awarded) {
      addXp(score * 4);
      setAwarded(true);
    }
  }
  function reset() {
    setPicks({});
    setChecked(false);
  }

  return (
    <div className="widget-card">
      <div className="widget-head">
        <span className="badge badge-fire">Mini-jeu · A/B copy</span>
        <h3>Quel message convertit le mieux ?</h3>
        <p>Pour chaque paire, choisissez la variante gagnante. Le mécanisme psychologique est révélé à la correction.</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {PAIRS.map((p, i) => {
          const picked = picks[i];
          return (
            <div key={i} className="abcopy-block">
              <span className="abcopy-context">{p.context}</span>
              <div className="abcopy-options">
                {(["a", "b"] as const).map((k) => {
                  const isWinner = checked && p.winner === k;
                  const isWrong = checked && picked === k && p.winner !== k;
                  return (
                    <button
                      key={k}
                      className={`abcopy-opt ${picked === k ? "picked" : ""} ${isWinner ? "correct" : ""} ${isWrong ? "wrong" : ""}`}
                      onClick={() => !checked && setPicks({ ...picks, [i]: k })}
                      disabled={checked}
                    >
                      <span className="abcopy-tag">{k.toUpperCase()}</span>
                      {k === "a" ? p.a : p.b}
                    </button>
                  );
                })}
              </div>
              {checked && <div className="quiz-explain">{p.mechanism}</div>}
            </div>
          );
        })}
      </div>

      <div className="diag-actions" style={{ marginTop: 20 }}>
        {!checked ? (
          <button className="cta-fire-button" onClick={check} disabled={!all}>
            {all ? "Vérifier" : `${Object.keys(picks).length}/${PAIRS.length}`}
          </button>
        ) : (
          <>
            <div className={`verdict ${score >= 4 ? "ok" : score >= 3 ? "warn" : "danger"}`} style={{ flex: 1 }}>
              <strong>
                {score} / {PAIRS.length}
              </strong>
            </div>
            <button className="btn-ghost" onClick={reset}>
              Rejouer
            </button>
          </>
        )}
      </div>
    </div>
  );
}
