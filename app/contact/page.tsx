import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import SocialIcons from "@/components/SocialIcons";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch via email, GitHub, or LinkedIn.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col justify-center px-6 py-section md:min-h-[60vh]">
      <ScrollReveal className="space-y-10 text-center">
        <p className="text-lg text-ink-muted">
          reach me at <b> magg1ezhang [at] mit [dot] edu </b>
        </p>

        <div className="space-y-4">
          <p className="text-lg text-ink-muted">you can also find me on:</p>
          <SocialIcons />
        </div>
      </ScrollReveal>
    </section>
  );
}
