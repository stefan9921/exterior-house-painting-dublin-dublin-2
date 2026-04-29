"use client";

import { useEffect } from "react";

/**
 * Loads the Material Symbols Outlined icon font asynchronously after first paint
 * so it never blocks the critical render path. The link is inserted only once
 * even if the component remounts.
 */
const ICON_FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap";

export default function IconFontLoader() {
  useEffect(() => {
    if (typeof document === "undefined") return;
    const existing = document.querySelector(
      `link[data-icon-font="material-symbols"]`
    );
    if (existing) return;

    // Pre-connect for faster TLS/DNS to Google Fonts.
    const preconnect1 = document.createElement("link");
    preconnect1.rel = "preconnect";
    preconnect1.href = "https://fonts.googleapis.com";
    document.head.appendChild(preconnect1);

    const preconnect2 = document.createElement("link");
    preconnect2.rel = "preconnect";
    preconnect2.href = "https://fonts.gstatic.com";
    preconnect2.crossOrigin = "anonymous";
    document.head.appendChild(preconnect2);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = ICON_FONT_HREF;
    link.setAttribute("data-icon-font", "material-symbols");
    document.head.appendChild(link);
  }, []);

  return null;
}
