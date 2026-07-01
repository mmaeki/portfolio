/** Central place for personal info — edit these fields to update your site */

export const siteConfig = {
  /** Home page */
  name: "maggie zhang",
  description: "currently working as an undergradate researcher at mit's sensible city lab",
  // Write across multiple lines for readability — .join(" ") keeps it one paragraph in the UI
  bio: [
    "hi! i'm maggie, a sophomore at mit studying computer science and math",
    "and interested in all things tech! you can find me beli'ing",
    "it up at a random matcha cafe, driving around la jolla, or by the charles river.",
  ].join(" "),

} as const;

export const navLinks = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/contact", label: "contact" },
] as const;
