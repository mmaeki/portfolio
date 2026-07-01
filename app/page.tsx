import AnimatedText from "@/components/AnimatedText";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col justify-center px-6 py-section md:min-h-[60vh] md:py-section-lg">
      <AnimatedText
        as="h1"
        text={siteConfig.name}
        className="font-heading text-4xl font-semibold tracking-tight text-primary md:text-5xl"
      />

      <p className="mt-4 text-lg text-ink-muted">{siteConfig.description}</p>

      <p className="mt-8 leading-relaxed text-ink-muted">{siteConfig.bio}</p>
    </section>
  );
}
