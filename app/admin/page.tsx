import type { Metadata } from "next";
import Link from "next/link";
import AdminConsole from "@/components/AdminConsole";
import { isVideoConfigured } from "@/lib/video";
import { isSupabaseConfigured } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Back office",
  description: "Console d'administration : upload de vidéos sécurisées dans les cours.",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  const videoOn = isVideoConfigured();
  const dbOn = isSupabaseConfigured();

  return (
    <section className="admin-shell">
      <div className="container">
        <div className="page-intro" style={{ padding: "0 0 24px" }}>
          <p className="eyebrow">Console d'administration</p>
          <h1>Back office</h1>
          <p>
            Gérez les vidéos de vos cours. Protection robuste par streaming HLS
            et tokens signés — une vidéo ne peut être ni partagée par URL ni
            téléchargée.
          </p>
        </div>

        <div className="admin-grid">
          <aside className="admin-side">
            <Link href="/admin" className="side-link active">
              📹 Vidéos
            </Link>
            <Link href="/modules" className="side-link">
              📚 Modules
            </Link>
            <Link href="/glossaire" className="side-link">
              📖 Glossaire
            </Link>
            <div className="panel" style={{ marginTop: 20, padding: 18 }}>
              <h4 style={{ margin: "0 0 12px", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                État des services
              </h4>
              <p style={{ fontSize: "0.85rem", margin: "0 0 8px" }}>
                <span className={`badge ${dbOn ? "badge-fire" : "badge-soon"}`}>
                  {dbOn ? "Connecté" : "Non configuré"}
                </span>{" "}
                Base Supabase
              </p>
              <p style={{ fontSize: "0.85rem", margin: 0 }}>
                <span className={`badge ${videoOn ? "badge-fire" : "badge-soon"}`}>
                  {videoOn ? "Connecté" : "Non configuré"}
                </span>{" "}
                Fournisseur vidéo
              </p>
            </div>
          </aside>

          <div>
            <AdminConsole />

            <div className="panel">
              <h3>Comment fonctionne la protection</h3>
              <ol style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.7, paddingLeft: 20 }}>
                <li>
                  La vidéo est découpée en segments HLS — il n'existe aucun
                  fichier MP4 unique à télécharger.
                </li>
                <li>
                  Chaque lecture exige un <strong>token signé</strong> (JWT)
                  émis par le serveur, lié à l'abonné et expirant en quelques
                  minutes : une URL partagée est morte avant d'arriver.
                </li>
                <li>
                  Le token n'est délivré que si l'abonnement est actif
                  (vérification Supabase + Stripe). Au lancement, l'accès est
                  ouvert ; le gating s'activera sans changer ce flux.
                </li>
                <li>
                  Option : DRM (Widevine / FairPlay) et watermark dynamique au
                  pseudo de l'abonné pour dissuader la capture.
                </li>
              </ol>
              <div className="callout">
                <strong>Pour activer l'upload réel :</strong> choisissez un
                fournisseur (Mux recommandé), puis définissez{" "}
                <code>VIDEO_PROVIDER</code> et ses clés dans les variables
                d'environnement. L'abstraction <code>lib/video.ts</code> est déjà
                en place — aucune autre modification nécessaire.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
