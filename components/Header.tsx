"use client";

import Link from "next/link";
import Flame from "./Flame";
import { useProgress, levelFromXp } from "./ProgressContext";

export default function Header() {
  const { xp, streak, ready } = useProgress();
  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="brand">
          <Flame />
          <span>
            Subscription<strong style={{ fontWeight: 600 }}>Forge</strong>
          </span>
        </Link>
        <nav className="nav-links">
          <Link href="/modules">Modules</Link>
          <Link href="/glossaire">Glossaire</Link>
          <Link href="/diagnostic" className="hide-mobile">
            Diagnostic
          </Link>
          {ready && (
            <span className="nav-progress hide-mobile">
              <span className="muted">Niv. {levelFromXp(xp)}</span>
              <span className="nav-streak">🔥 {streak}</span>
            </span>
          )}
        </nav>
      </div>
    </header>
  );
}
