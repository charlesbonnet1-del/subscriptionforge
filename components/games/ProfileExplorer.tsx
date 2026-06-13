"use client";

import { useState } from "react";
import { PROFILES } from "@/data/profiles";

export default function ProfileExplorer() {
  const [active, setActive] = useState(PROFILES[0].id);
  const p = PROFILES.find((x) => x.id === active)!;

  return (
    <div className="widget-card">
      <div className="widget-head">
        <span className="badge badge-fire">Explorateur interactif</span>
        <h3>Les 5 profils psychologiques</h3>
        <p>Cliquez un profil pour voir son risque de churn, son levier n°1 et l'erreur à éviter.</p>
      </div>

      <div className="archetype-tabs">
        {PROFILES.map((x) => (
          <button
            key={x.id}
            className={`archetype-tab ${x.id === active ? "active" : ""}`}
            onClick={() => setActive(x.id)}
          >
            {x.name}
          </button>
        ))}
      </div>

      <div className="archetype-panel">
        <h4>{p.name}</h4>
        <p className="muted" style={{ fontSize: "0.82rem", marginTop: -4 }}>
          {p.share} de la base typiquement
        </p>
        <p className="fiche-p">{p.who}</p>
        <div className="archetype-stats">
          <div>
            <span className="as-label">Signaux</span>
            <span className="as-value" style={{ fontWeight: 400, fontSize: "0.85rem" }}>{p.signals}</span>
          </div>
          <div>
            <span className="as-label">Risque n°1</span>
            <span className="as-value" style={{ fontWeight: 400, fontSize: "0.85rem" }}>{p.risk}</span>
          </div>
          <div>
            <span className="as-label">Levier</span>
            <span className="as-value" style={{ fontWeight: 400, fontSize: "0.85rem" }}>{p.strategy}</span>
          </div>
          <div>
            <span className="as-label">Message</span>
            <span className="as-value" style={{ fontWeight: 400, fontSize: "0.85rem" }}>{p.message}</span>
          </div>
        </div>
        <div className="fiche-pitfall" style={{ marginTop: 16 }}>
          <span className="fiche-pitfall-label">⚠ Erreur à éviter</span>
          {p.mistake}
        </div>
      </div>
    </div>
  );
}
