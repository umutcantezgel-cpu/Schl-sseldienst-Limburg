"use client";

import { Cookie } from "lucide-react";
import * as CookieConsent from "vanilla-cookieconsent";

/**
 * Tiny client-side button that opens the CookieConsent preferences modal.
 * Extracted from Footer so the Footer itself can be a Server Component.
 */
export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => CookieConsent.showPreferences()}
      className="group flex items-center gap-2 hover:text-[var(--color-blue-primary)] transition-colors font-medium w-full text-left cursor-pointer"
      aria-label="Cookie-Einstellungen öffnen"
    >
      <Cookie
        className="h-4 w-4 text-[var(--color-text-main)] group-hover:text-[var(--color-blue-primary)] transition-colors"
        aria-hidden="true"
      />
      Cookie-Einstellungen
    </button>
  );
}
