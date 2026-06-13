import type { Metadata } from "next";
import "./globals.css";
import { ProgressProvider } from "@/components/ProgressContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://subscriptionforge.com"),
  title: {
    default: "SubscriptionForge — Maîtrisez l'économie de l'abonnement",
    template: "%s · SubscriptionForge",
  },
  description:
    "La plateforme e-learning de la Subscription Economy. 16 modules, 20 case studies, mini-jeux et quiz. Apprenez à penser en opérateur d'abonnement, pas en vendeur.",
  keywords: [
    "abonnement",
    "subscription economy",
    "SaaS",
    "churn",
    "rétention",
    "MRR",
    "pricing",
    "e-learning",
  ],
  openGraph: {
    title: "SubscriptionForge",
    description:
      "La plateforme qui vous apprend à penser en opérateur d'abonnement.",
    url: "https://subscriptionforge.com",
    siteName: "SubscriptionForge",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ProgressProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ProgressProvider>
      </body>
    </html>
  );
}
