import React from "react";
import type { Block } from "@/lib/content-types";
import { RichText } from "./RichText";
import LtvCalculator from "@/components/games/LtvCalculator";
import ArchetypeExplorer from "@/components/games/ArchetypeExplorer";
import MrrMovement from "@/components/games/MrrMovement";
import DecisionTree from "@/components/games/DecisionTree";
import ProfileExplorer from "@/components/games/ProfileExplorer";
import MonthlyVsAnnual from "@/components/games/MonthlyVsAnnual";
import RepricingSimulator from "@/components/games/RepricingSimulator";
import PppCalculator from "@/components/games/PppCalculator";
import FunnelCalculator from "@/components/games/FunnelCalculator";
import ViralKCalculator from "@/components/games/ViralKCalculator";

function Widget({ name }: { name: string }) {
  switch (name) {
    case "ltv-calculator":
      return <LtvCalculator />;
    case "archetype-explorer":
      return <ArchetypeExplorer />;
    case "mrr-movement":
      return <MrrMovement />;
    case "decision-tree":
      return <DecisionTree />;
    case "profile-explorer":
      return <ProfileExplorer />;
    case "monthly-vs-annual":
      return <MonthlyVsAnnual />;
    case "repricing-simulator":
      return <RepricingSimulator />;
    case "ppp-calculator":
      return <PppCalculator />;
    case "funnel-calculator":
      return <FunnelCalculator />;
    case "viral-k-calculator":
      return <ViralKCalculator />;
    default:
      return null;
  }
}

export function Fiche({ blocks }: { blocks: Block[] }) {
  return (
    <div className="fiche">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "lead":
            return (
              <p className="fiche-lead" key={i}>
                <RichText text={b.text} />
              </p>
            );
          case "h2":
            return (
              <h2 className="fiche-h2" id={b.id} key={i}>
                {b.text}
              </h2>
            );
          case "h3":
            return (
              <h3 className="fiche-h3" key={i}>
                {b.text}
              </h3>
            );
          case "p":
            return (
              <p className="fiche-p" key={i}>
                <RichText text={b.text} />
              </p>
            );
          case "list":
            return b.ordered ? (
              <ol className="fiche-list" key={i}>
                {b.items.map((it, j) => (
                  <li key={j}>
                    <RichText text={it} />
                  </li>
                ))}
              </ol>
            ) : (
              <ul className="fiche-list" key={i}>
                {b.items.map((it, j) => (
                  <li key={j}>
                    <RichText text={it} />
                  </li>
                ))}
              </ul>
            );
          case "callout":
            return (
              <div className={`fiche-callout ${b.tone ?? "fire"}`} key={i}>
                {b.title && <span className="fiche-callout-title">{b.title}</span>}
                <RichText text={b.text} />
              </div>
            );
          case "pitfall":
            return (
              <div className="fiche-pitfall" key={i}>
                <span className="fiche-pitfall-label">⚠ Piège principal</span>
                <RichText text={b.text} />
              </div>
            );
          case "keynumbers":
            return (
              <div className="keynumbers" key={i}>
                {b.items.map((it, j) => (
                  <div className="keynumber" key={j}>
                    <span className="kn-value">{it.value}</span>
                    <span className="kn-label">{it.label}</span>
                  </div>
                ))}
              </div>
            );
          case "formula":
            return (
              <div className="fiche-formula" key={i}>
                <code>{b.expr}</code>
                {b.note && <span className="formula-note">{b.note}</span>}
              </div>
            );
          case "table":
            return (
              <div className="fiche-table-wrap" key={i}>
                <table className="fiche-table">
                  <thead>
                    <tr>
                      {b.head.map((h, j) => (
                        <th key={j}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((row, j) => (
                      <tr key={j}>
                        {row.map((cell, k) => (
                          <td key={k}>
                            <RichText text={cell} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                {b.caption && <p className="fiche-caption">{b.caption}</p>}
              </div>
            );
          case "compare":
            return (
              <div className="compare" key={i}>
                {[b.left, b.right].map((pane, j) => (
                  <div className={`compare-pane ${pane.tone ?? "neutral"}`} key={j}>
                    <h4>{pane.title}</h4>
                    <ul>
                      {pane.points.map((pt, k) => (
                        <li key={k}>
                          <RichText text={pt} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            );
          case "timeline":
            return (
              <div className="timeline" key={i}>
                {b.items.map((it, j) => (
                  <div className="timeline-row" key={j}>
                    <div className="timeline-period">{it.period}</div>
                    <div className="timeline-body">
                      <strong>{it.jalon}</strong>
                      <span>{it.legacy}</span>
                    </div>
                  </div>
                ))}
              </div>
            );
          case "quote":
            return (
              <blockquote className="fiche-quote" key={i}>
                <RichText text={b.text} />
                {b.cite && <cite>— {b.cite}</cite>}
              </blockquote>
            );
          case "widget":
            return (
              <div className="fiche-widget" key={i}>
                <Widget name={b.name} />
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
