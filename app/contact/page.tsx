import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch — email, GitHub, and LinkedIn.",
};

const socialLinks = [
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    description: siteConfig.email,
  },
  {
    label: "GitHub",
    href: siteConfig.github,
    description: "github.com/yourusername", // TODO
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    description: "linkedin.com/in/yourusername", // TODO
  },
] as const;

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-content px-6 py-section">
      <SectionHeading
        eyebrow="Contact"
        title="Let's connect"
        description="Have a question or want to collaborate? Send a message or reach out directly."
        centered
      />

      <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-2 lg:gap-16">
        <ContactForm />

        <aside className="space-y-8">
          <ScrollReveal>
            <h3 className="font-heading text-lg font-semibold text-primary">
              Elsewhere
            </h3>
            <ul className="mt-4 space-y-4">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.label === "Email" ? undefined : "_blank"}
                    rel={
                      link.label === "Email"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="group block rounded-card border border-surface-muted bg-surface-elevated p-4 transition-colors hover:border-primary/30 hover:bg-surface-muted/50"
                  >
                    <span className="text-sm font-medium text-primary group-hover:text-accent">
                      {link.label}
                    </span>
                    <span className="mt-1 block text-sm text-ink-muted">
                      {link.description}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-sm leading-relaxed text-ink-muted">
              {/* TODO: Add your availability or timezone if helpful */}
              I typically respond within a few days. Looking forward to hearing
              from you!
            </p>
          </ScrollReveal>
        </aside>
      </div>
    </section>
  );
}
