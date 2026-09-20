import { defineSiteConfig } from "astro-theme-university/types";
import { slopBranding } from "astro-theme-slop";
import { courseMeta } from "./course-config";

// The underlying collection and URL remain `sessions`; "Set" is what
// students see, because every week's session is a hands-on production lab,
// not a seminar — the theory and history live in Screenings instead.
export const sessionLabels = {
  singular: "Set",
  plural: "Sets",
} as const;

// The underlying collection and URL remain `lectures`; "Screening" is what
// students see, because every week's lecture is a theory/history/case-study
// session, not a hands-on lab — the production work lives in Sets instead.
export const lectureLabels = {
  singular: "Screening",
  plural: "Screenings",
} as const;

export const graphCollections = ["sessions", "assessments", "lectures", "people"];

export const courseApiCollections = [
  ...graphCollections.map((key) => ({ key })),
  { key: "policies", dir: "pages/policies" },
];

export const siteConfig = defineSiteConfig({
  ...slopBranding,
  name: "Slop University",

  links: [
    { text: lectureLabels.plural, href: "/lectures/" },
    { text: sessionLabels.plural, href: "/sessions/" },
    { text: "Assessment", href: "/assessments/" },
    { text: "People", href: "/people/" },
    { text: "Specimens", href: "/specimens/" },
    { text: "Policies", href: "/policies/" },
  ],

  licence: "CC-BY-NC-SA-4.0",
  socialImage: "/src/assets/images/card.png",
  socialImageAlt: `A preview card for ${courseMeta.code}: ${courseMeta.title}`,
});
