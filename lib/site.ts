/** Central place for personal info — edit these fields to update your site */

export const siteConfig = {
  /** Home page */
  name: "maggie zhang",
  description: "currently working as an undergraduate researcher at mit's sensible city lab",
  bio: [
    "hi! i'm maggie, a sophomore at mit studying computer science and math",
    "and interested in all things tech! other things i enjoy are:",
    "ranking tourist traps on beli, malcolm todd's latest album, and",
    "a good cup of milk tea."
  ].join(" "),

} as const;

export const navLinks = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/contact", label: "contact" },
] as const;
