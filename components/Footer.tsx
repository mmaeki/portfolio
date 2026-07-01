import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-surface-muted bg-surface-muted/50">
      <div className="mx-auto flex max-w-content flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-heading text-sm font-semibold text-primary">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-sm text-ink-muted">
            © {year} — Built with Next.js & Tailwind CSS
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ink-muted transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex gap-4">
          <li>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-ink-muted transition-colors hover:text-accent"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink-muted transition-colors hover:text-accent"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink-muted transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
