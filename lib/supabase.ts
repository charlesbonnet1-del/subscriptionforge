// Clients Supabase — initialisation paresseuse et optionnelle.
// Tant que les variables d'environnement ne sont pas définies, l'application
// fonctionne en mode « tout ouvert » sans base : aucune erreur au build/runtime.
//
//  Variables attendues (à mettre dans .env.local / Vercel) :
//    NEXT_PUBLIC_SUPABASE_URL          — URL du projet
//    NEXT_PUBLIC_SUPABASE_ANON_KEY     — clé publique (front, RLS appliqué)
//    SUPABASE_SERVICE_ROLE_KEY         — clé service (back office uniquement, SERVEUR)

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let browserClient: SupabaseClient | null = null;
let serviceClient: SupabaseClient | null = null;

export function isSupabaseConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}

/** Client public (navigateur). Renvoie null si non configuré. */
export function getSupabaseBrowser(): SupabaseClient | null {
  if (!isSupabaseConfigured()) return null;
  if (!browserClient) {
    browserClient = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
  }
  return browserClient;
}

/** Client service-role (SERVEUR uniquement — ne jamais exposer au navigateur). */
export function getSupabaseService(): SupabaseClient | null {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return null;
  }
  if (!serviceClient) {
    serviceClient = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY,
      { auth: { persistSession: false } }
    );
  }
  return serviceClient;
}
