import type { Locale, SectionId } from "../data/types";

export const routes = {
  home: { pt: "/", en: "/en/" },
} as const;

type RouteKey = keyof typeof routes;

export function getRoute(locale: Locale, route: RouteKey): string {
  return routes[route][locale];
}

export function getSectionHref(locale: Locale, section: SectionId): string {
  return `${getRoute(locale, "home")}#${section}`;
}
