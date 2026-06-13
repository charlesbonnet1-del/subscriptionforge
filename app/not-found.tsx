import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section" style={{ padding: "120px 0" }}>
      <div className="container text-center">
        <p className="eyebrow" style={{ textAlign: "center" }}>
          Erreur 404
        </p>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", margin: "0 0 16px" }}>
          Cette page n'a pas encore été forgée.
        </h1>
        <p style={{ maxWidth: "44ch", margin: "0 auto 28px" }}>
          La page que vous cherchez est introuvable. Revenez à l'accueil ou
          explorez les modules.
        </p>
        <div className="hero-actions" style={{ justifyContent: "center" }}>
          <Link href="/" className="cta-fire-button">
            Retour à l'accueil
          </Link>
          <Link href="/modules" className="btn-ghost">
            Voir les modules
          </Link>
        </div>
      </div>
    </section>
  );
}
