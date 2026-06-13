import Link from "next/link";
import Flame from "./Flame";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand" style={{ marginBottom: 14 }}>
              <Flame />
              <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem" }}>
                SubscriptionForge
              </span>
            </div>
            <p style={{ maxWidth: "38ch", fontSize: "0.92rem" }}>
              La plateforme qui vous apprend à penser en{" "}
              <em>opérateur d'abonnement</em>, pas en vendeur. Forgée à partir de
              La Bible de l'Abonnement.
            </p>
          </div>
          <div>
            <h4>Apprendre</h4>
            <Link href="/modules">Les 16 modules</Link>
            <Link href="/progression">Ma progression</Link>
            <Link href="/diagnostic">Diagnostic rapide</Link>
            <Link href="/glossaire">Glossaire</Link>
          </div>
          <div>
            <h4>Plateforme</h4>
            <Link href="/admin">Back office</Link>
            <Link href="/modules">Parcours</Link>
            <Link href="/">Accueil</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} SubscriptionForge · subscriptionforge.com</span>
          <span>Penser en opérateur, pas en vendeur.</span>
        </div>
      </div>
    </footer>
  );
}
