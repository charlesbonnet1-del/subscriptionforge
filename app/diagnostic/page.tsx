import type { Metadata } from "next";
import DiagnosticRunner from "@/components/DiagnosticRunner";

export const metadata: Metadata = {
  title: "Diagnostic rapide",
  description:
    "Quinze questions, dix minutes : identifiez les trois failles majeures de votre business d'abonnement et les modules à prioriser.",
};

export default function DiagnosticPage() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <p className="eyebrow">10 minutes, 15 questions</p>
          <h1>Diagnostic rapide</h1>
          <p>
            Chaque réponse négative ou incertaine pointe vers le module qui
            traite le sujet. À la fin, vous saurez où sont vos failles — et par
            où commencer.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 16 }}>
        <div className="container">
          <DiagnosticRunner />
        </div>
      </section>
    </>
  );
}
