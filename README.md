# SubscriptionForge

La plateforme e-learning de la **Subscription Economy**, forgée à partir de
_La Bible de l'Abonnement_. Objectif : apprendre à **penser en opérateur
d'abonnement, pas en vendeur**.

> 🔥 Statut : **socle de plateforme livré**. Le contenu détaillé des cours
> (fiches, vidéos, mini-jeux, quiz) sera ajouté module par module.

## Ce qui est en place

- **Design system** complet (palette feu / métal, Playfair Display + Inter,
  cognitive easing) — `app/globals.css`.
- **Accueil** : hero, statistiques, grille des 16 modules par partie.
- **16 modules** structurés (10 parties) avec pages de détail — `data/modules.ts`.
- **Glossaire interactif** : 80+ termes et acronymes, recherche + filtres —
  `data/glossary.ts`, `/glossaire`.
- **Diagnostic rapide** : 15 questions qui pointent vos failles et vos modules
  prioritaires — `/diagnostic`.
- **Gamification** sans inscription : XP, niveau, série (streak) en localStorage
  — `components/ProgressContext.tsx`.
- **Back office** : upload de vidéos par cours, avec **architecture de
  protection robuste** (HLS + tokens signés) — `/admin`, `lib/video.ts`.

## Stack

- **Next.js 16** (App Router) + **TypeScript** + **React 19**
- **Supabase** (base, auth, back office) — optionnel, init paresseuse
- Fournisseur vidéo : **Mux / Cloudflare Stream / Bunny** (abstraction prête,
  choix différé)
- Déploiement cible : **Vercel** (`subscriptionforge.com`)

## Démarrer

```bash
npm install
npm run dev
# http://localhost:3000
```

La configuration (Supabase, vidéo, Stripe) est **optionnelle** : voir
`.env.example`. Sans clés, l'app tourne en mode « tout ouvert ».

## Protection des vidéos (robuste)

Un `<video src>` est indéfendable (URL partageable, fichier téléchargeable).
La protection repose sur un fournisseur de streaming :

1. Vidéo découpée en **segments HLS** — pas de MP4 unique téléchargeable.
2. Lecture conditionnée à un **token signé (JWT)** à expiration courte, lié à
   l'abonné.
3. Token émis **uniquement** si l'abonnement est actif (Supabase + Stripe).
4. Option : **DRM** (Widevine / FairPlay) + **watermark** dynamique.

Pour activer : choisir le fournisseur, définir `VIDEO_PROVIDER` et ses clés,
implémenter le provider dans `lib/video.ts` (`getProvider()`).

## Roadmap

- [x] Socle de plateforme (design, accueil, modules, glossaire, diagnostic, back office)
- [x] **Contenu des 16 modules** : ~100 cours interactifs, fiches denses fidèles au livre
- [x] **~75 mini-jeux pédagogiques** (calculatrices LTV/MRR/NRR/funnel/PPP/box/J-curve,
      classifications, remises en ordre, audits…)
- [x] **16 quiz notés sur 20** (barre à 14/20, explications détaillées)
- [x] Page de progression gamifiée (XP, niveau, série, complétion par module)
- [ ] Branchement d'un fournisseur vidéo (Mux/Cloudflare/Bunny) sur l'abstraction existante
- [ ] Paywall (Supabase Auth + Stripe) — bascule du « tout ouvert » au gated
- [ ] Comptes utilisateurs + progression persistée côté serveur

> ✅ **Parcours complet** : les 16 modules de _La Bible de l'Abonnement_ sont
> intégralement forgés en cours interactifs, mini-jeux et quiz notés.
