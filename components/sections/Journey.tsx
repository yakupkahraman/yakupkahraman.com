import { Section } from "@/components/Section";
import { journey } from "@/content/journey";

export function Journey() {
  return (
    <Section id="journey" title="Journey" className="mt-24">
      <ol className="space-y-8">
        {journey.map((entry) => (
          <li
            key={`${entry.title}-${entry.org}`}
            className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-6"
          >
            <p className="pt-0.5 text-sm tabular-nums text-muted">
              {entry.period}
            </p>
            <div>
              <h3 className="text-lg font-medium tracking-tight text-text">
                {entry.title}
                <span className="text-muted">, {entry.org}</span>
              </h3>
              <p className="mt-1 max-w-prose text-sm leading-relaxed text-muted">
                {entry.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
