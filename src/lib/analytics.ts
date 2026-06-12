// Lightweight GA4 helper. Loaded via <script> in the root shell.
export const GA_MEASUREMENT_ID = "G-24VYN8CDZ1";

type GtagArgs = unknown[];
declare global {
  interface Window {
    dataLayer?: GtagArgs[];
    gtag?: (...args: GtagArgs) => void;
  }
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  try {
    window.gtag?.("event", name, params);
  } catch {
    /* no-op */
  }
}

export function trackPageView(path: string, title?: string) {
  if (typeof window === "undefined") return;
  try {
    window.gtag?.("config", GA_MEASUREMENT_ID, {
      page_path: path,
      page_title: title ?? document.title,
      page_location: window.location.href,
    });
  } catch {
    /* no-op */
  }
}
