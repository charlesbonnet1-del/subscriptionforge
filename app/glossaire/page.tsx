import type { Metadata } from "next";
import GlossaryExplorer from "@/components/GlossaryExplorer";
import { GLOSSARY } from "@/data/glossary";

export const metadata: Metadata = {
  title: "Glossaire de la Subscription Economy",
  description:
    "Plus de 80 termes et acronymes de l'économie de l'abonnement, définis avec précision : MRR, churn, NRR, LTV, CAC, paywall, dunning, lock-in, NRR, PLG, PPP, GRR…",
};

export default function GlossairePage() {
  const acronyms = GLOSSARY.filter((e) => e.acronym).length;
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <p className="eyebrow">Le vocabulaire du métier</p>
          <h1>Glossaire de la Subscription Economy</h1>
          <p>
            {GLOSSARY.length} termes, dont {acronyms} acronymes, définis avec
            précision et renvoyés au module qui les développe. Aucun mot n'est
            employé sur la plateforme avant d'avoir été défini ici.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 16 }}>
        <div className="container">
          <GlossaryExplorer />
        </div>
      </section>
    </>
  );
}
