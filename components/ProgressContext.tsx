"use client";

// Gamification légère, sans inscription : XP, série (streak) et progression
// stockées dans le localStorage. Migrable vers un compte Supabase quand le
// paywall arrivera (le même shape sera persisté côté serveur).

import { createContext, useContext, useEffect, useState, useCallback } from "react";

export type ProgressState = {
  xp: number;
  streak: number;
  lastActive: string | null; // ISO date (jour)
  completedLessons: string[]; // ids "slug:lessonIndex"
  diagnosticDone: boolean;
};

const DEFAULT_STATE: ProgressState = {
  xp: 0,
  streak: 0,
  lastActive: null,
  completedLessons: [],
  diagnosticDone: false,
};

const STORAGE_KEY = "sf_progress_v1";

type Ctx = ProgressState & {
  addXp: (amount: number) => void;
  completeLesson: (id: string, xp?: number) => void;
  markDiagnosticDone: () => void;
  ready: boolean;
};

const ProgressContext = createContext<Ctx | null>(null);

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function daysBetween(a: string, b: string) {
  return Math.round((new Date(b).getTime() - new Date(a).getTime()) / 86400000);
}

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ProgressState>(DEFAULT_STATE);
  const [ready, setReady] = useState(false);

  // Hydratation + mise à jour de la série au chargement.
  useEffect(() => {
    let loaded = DEFAULT_STATE;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) loaded = { ...DEFAULT_STATE, ...JSON.parse(raw) };
    } catch {
      /* ignore */
    }
    const today = todayStr();
    if (loaded.lastActive) {
      const gap = daysBetween(loaded.lastActive, today);
      if (gap === 1) loaded.streak += 1;
      else if (gap > 1) loaded.streak = 1;
      else if (loaded.streak === 0) loaded.streak = 1;
    } else {
      loaded.streak = 1;
    }
    loaded.lastActive = today;
    setState(loaded);
    setReady(true);
  }, []);

  // Persistance.
  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignore */
    }
  }, [state, ready]);

  const addXp = useCallback((amount: number) => {
    setState((s) => ({ ...s, xp: s.xp + amount }));
  }, []);

  const completeLesson = useCallback((id: string, xp = 20) => {
    setState((s) =>
      s.completedLessons.includes(id)
        ? s
        : { ...s, completedLessons: [...s.completedLessons, id], xp: s.xp + xp }
    );
  }, []);

  const markDiagnosticDone = useCallback(() => {
    setState((s) => (s.diagnosticDone ? s : { ...s, diagnosticDone: true, xp: s.xp + 30 }));
  }, []);

  return (
    <ProgressContext.Provider
      value={{ ...state, addXp, completeLesson, markDiagnosticDone, ready }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within ProgressProvider");
  return ctx;
}

export function levelFromXp(xp: number) {
  // Paliers doux : niveau = floor(sqrt(xp / 50)) + 1
  return Math.floor(Math.sqrt(xp / 50)) + 1;
}
