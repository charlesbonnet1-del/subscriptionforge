"use client";

import { useState } from "react";
import { ARCHETYPES } from "@/data/archetypes";

export default function ArchetypeExplorer() {
  const [active, setActive] = useState(1);
  const a = ARCHETYPES.find((x) => x.id === active)!;

  return (
    <div className="widget-card">
      <div className="widget-head">
        <span className="badge badge-fire">Explorateur interactif</span>
        <h3>Les 8 archétypes</h3>
        <p>Cliquez un archétype pour révéler sa mécanique, son churn et son piège.</p>
      </div>

      <div className="archetype-tabs">
        {ARCHETYPES.map((x) => (
          <button
            key={x.id}
            className={`archetype-tab ${x.id === active ? "active" : ""}`}
            onClick={() => setActive(x.id)}
          >
            <span className="at-num">{x.id}</span>
            {x.short}
          </button>
        ))}
      </div>

      <div className="archetype-panel">
        <h4>{a.name}</h4>
        <p className="muted" style={{ fontSize: "0.85rem", marginTop: -4 }}>
          {a.examples}
        </p>
        <p className="fiche-p">{a.value}</p>
        <div className="archetype-stats">
          <div>
            <span className="as-label">Churn</span>
            <span className="as-value">{a.churn}</span>
          </div>
          <div>
            <span className="as-label">Lock-in</span>
            <span className="as-value">{a.lockIn}</span>
          </div>
          <div>
            <span className="as-label">Coût marginal</span>
            <span className="as-value">{a.marginal}</span>
          </div>
          <div>
            <span className="as-label">Métrique clé</span>
            <span className="as-value">{a.metric}</span>
          </div>
        </div>
        <div className="fiche-pitfall" style={{ marginTop: 16 }}>
          <span className="fiche-pitfall-label">⚠ Piège</span>
          {a.pitfall}
        </div>
      </div>
    </div>
  );
}
