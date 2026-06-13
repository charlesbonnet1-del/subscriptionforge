"use client";

import { useState } from "react";
import { useProgress } from "@/components/ProgressContext";

type Line = { label: string; value: string; error: boolean; explain: string };

const LINES: Line[] = [
  {
    label: "MRR du mois",
    value: "52 000 € (dont 8 000 € de frais de setup encaissés ce mois)",
    error: true,
    explain:
      "Les frais de setup sont du one-shot : ils n'ont rien à faire dans le MRR. Vrai MRR récurrent = 44 000 €. La LTV et la valorisation calculées dessus sont fictives.",
  },
  {
    label: "Churn mensuel",
    value: "3,0 % — clients perdus ce mois ÷ base totale de fin de mois",
    error: true,
    explain:
      "Calculé sur la base totale (dominée par les clients récents) au lieu d'une cohorte fixe : flatte le churn et fait découvrir le problème deux ans trop tard.",
  },
  {
    label: "Churn involontaire",
    value: "Non suivi",
    error: true,
    explain:
      "20 à 40 % du churn vient d'échecs de paiement. L'ignorer, c'est chercher des causes produit à un problème de tuyauterie et négliger le dunning, le levier au meilleur ROI.",
  },
  {
    label: "ARR",
    value: "MRR récurrent × 12",
    error: false,
    explain: "Formule correcte.",
  },
  {
    label: "Revenue churn",
    value: "Suivi séparément du logo churn",
    error: false,
    explain: "Bonne pratique : distinguer euros perdus et clients perdus.",
  },
  {
    label: "NRR",
    value: "108 % sur la cohorte d'il y a 12 mois",
    error: false,
    explain: "Correctement mesuré sur cohorte.",
  },
];

export default function FindTheError() {
  const { addXp } = useProgress();
  const [sel, setSel] = useState<Set<number>>(new Set());
  const [checked, setChecked] = useState(false);
  const [awarded, setAwarded] = useState(false);

  function toggle(i: number) {
    if (checked) return;
    const next = new Set(sel);
    next.has(i) ? next.delete(i) : next.add(i);
    setSel(next);
  }

  const errors = LINES.map((l, i) => (l.error ? i : -1)).filter((i) => i >= 0);
  const found = errors.filter((i) => sel.has(i)).length;
  const falsePos = [...sel].filter((i) => !LINES[i].error).length;

  function check() {
    setChecked(true);
    if (!awarded) {
      addXp(Math.max(0, found * 5 - falsePos * 2));
      setAwarded(true);
    }
  }

  return (
    <div className="widget-card">
      <div className="widget-head">
        <span className="badge badge-fire">Mini-jeu · Audit</span>
        <h3>Trouvez l'erreur</h3>
        <p>Ce tableau de bord contient <strong>trois erreurs de mesure</strong> classiques. Cliquez les lignes fautives.</p>
      </div>

      <div className="audit-board">
        {LINES.map((l, i) => {
          const picked = sel.has(i);
          const reveal = checked;
          const cls = reveal ? (l.error ? "is-error" : picked ? "false-pos" : "is-ok") : picked ? "picked" : "";
          return (
            <button className={`audit-line ${cls}`} key={i} onClick={() => toggle(i)}>
              <span className="audit-top">
                <span className="audit-label">{l.label}</span>
                {reveal && (
                  <span className="audit-tag">
                    {l.error ? "✗ Erreur" : picked ? "Faux positif" : "✓ Correct"}
                  </span>
                )}
              </span>
              <span className="audit-value">{l.value}</span>
              {reveal && <span className="audit-explain">{l.explain}</span>}
            </button>
          );
        })}
      </div>

      <div className="diag-actions" style={{ marginTop: 18 }}>
        {!checked ? (
          <button className="cta-fire-button" onClick={check} disabled={sel.size === 0}>
            Vérifier mon audit
          </button>
        ) : (
          <div className={`verdict ${found === 3 && falsePos === 0 ? "ok" : found >= 2 ? "warn" : "danger"}`} style={{ flex: 1 }}>
            <strong>
              {found} / 3 erreurs trouvées{falsePos > 0 ? ` · ${falsePos} faux positif(s)` : ""}
            </strong>
            <p style={{ margin: "4px 0 0" }}>
              {found === 3 && falsePos === 0
                ? "Réflexe d'audit acquis. Vous ne vous ferez plus avoir."
                : "Relisez les « erreurs de mesure classiques » du cours 1.4."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
