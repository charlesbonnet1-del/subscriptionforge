"use client";

import { useMemo, useState } from "react";

// Prix localisés par parité de pouvoir d'achat (PPP). Indices = fraction du prix US.
const MARKETS = [
  { country: "États-Unis", currency: "$", symbol: "$", ppp: 1.0, rate: 1, round: (n: number) => round99(n), localPay: false },
  { country: "Brésil", currency: "BRL", symbol: "R$", ppp: 0.4, rate: 5.2, round: (n: number) => roundTo(n, 0.9), localPay: true },
  { country: "Inde", currency: "INR", symbol: "₹", ppp: 0.22, rate: 83, round: (n: number) => roundTo(n, 9), localPay: true },
  { country: "Pologne", currency: "PLN", symbol: "zł", ppp: 0.55, rate: 4, round: (n: number) => roundTo(n, 0.99), localPay: false },
  { country: "Nigeria", currency: "NGN", symbol: "₦", ppp: 0.18, rate: 1500, round: (n: number) => roundTo(n, 99), localPay: true },
  { country: "Japon", currency: "JPY", symbol: "¥", ppp: 0.85, rate: 150, round: (n: number) => roundTo(n, 100), localPay: false },
];

function round99(n: number) {
  return Math.max(0, Math.round(n) - 0.01);
}
function roundTo(n: number, step: number) {
  return Math.max(step, Math.round(n / step) * step);
}

export default function PppCalculator() {
  const [usd, setUsd] = useState(9.99);

  const rows = useMemo(() => {
    return MARKETS.map((m) => {
      const localValue = usd * m.ppp * m.rate;
      const rounded = m.round(localValue);
      const display =
        m.symbol === "$" || m.symbol === "R$" || m.symbol === "zł"
          ? `${m.symbol}${rounded.toLocaleString("fr-FR", { minimumFractionDigits: rounded % 1 ? 2 : 0, maximumFractionDigits: 2 })}`
          : `${m.symbol}${Math.round(rounded).toLocaleString("fr-FR")}`;
      const usdEquiv = (rounded / m.rate).toFixed(2);
      return { ...m, display, usdEquiv };
    });
  }, [usd]);

  return (
    <div className="widget-card">
      <div className="widget-head">
        <span className="badge badge-fire">Calculatrice · Prix locaux</span>
        <h3>Localisation PPP</h3>
        <p>Ajuster au pouvoir d'achat, pas au taux de change. La règle du 1/5 : 10 $ en Occident ≈ 2 $ en Inde.</p>
      </div>

      <div className="widget-controls" style={{ gridTemplateColumns: "1fr" }}>
        <label className="slider">
          <span className="slider-label">Prix de référence (US)<strong>${usd.toFixed(2)}</strong></span>
          <input type="range" min={1.99} max={49.99} step={1} value={usd} onChange={(e) => setUsd(parseFloat(e.target.value))} />
        </label>
      </div>

      <div className="fiche-table-wrap" style={{ margin: "8px 0 0" }}>
        <table className="fiche-table">
          <thead>
            <tr><th>Marché</th><th>Indice PPP</th><th>Prix localisé</th><th>≈ USD</th><th>Paiement local</th></tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.country}>
                <td>{r.country}</td>
                <td>{r.ppp.toFixed(2)}</td>
                <td><strong>{r.display}</strong></td>
                <td>${r.usdEquiv}</td>
                <td>{r.localPay ? "✅ à exiger" : "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="muted" style={{ fontSize: "0.8rem", marginTop: 10 }}>
        Sur les tarifs les plus réduits, exiger un moyen de paiement local rend l'arbitrage (VPN) inconfortable sans punir les vrais clients.
      </p>
    </div>
  );
}
