import { Section } from "@/components/Section";

export function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-prose space-y-4 leading-relaxed text-muted">
        <p>
          I&apos;m a Computer Engineering student at Yıldız Technical University
          who can&apos;t stop learning new things. My favorite way to learn is to
          pick something that looks a little too hard, read everything I can
          find about it, and build until it finally clicks. I keep ending up
          somewhere between mobile apps, the web, and how AI actually works
          under the hood.
        </p>
        <p>
          I like sharing what I learn just as much. Running workshops and
          helping other students ship their first apps teaches me as much as it
          teaches them. Most of the time I&apos;m exploring a new tool, a new
          idea, or a side project that started as &quot;let me just try
          something.&quot;
        </p>
      </div>
    </Section>
  );
}
