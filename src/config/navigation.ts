// ============================================================
// NAVIGATION CONFIGURATION
// ============================================================

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export const navLinks: NavLink[] = [
  { label: "About",         href: "#about" },
  { label: "Highlights",    href: "#highlights" },
  { label: "Timeline",      href: "#timeline" },
  { label: "Announcements", href: "#announcements" },
  { label: "FAQ",           href: "#faq" },
];

export const navCTA = {
  label: "Register",
  href: "#register",
};
