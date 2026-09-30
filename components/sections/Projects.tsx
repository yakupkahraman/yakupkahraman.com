import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import { HoverUnderline } from "@/components/HoverUnderline";
import { Section } from "@/components/Section";
import { projects } from "@/content/projects";
import { linkProps } from "@/lib/links";

export function Projects() {
  return (
    <Section id="projects" title="Projects" className="mt-24">
      <ul className="space-y-10">
        {projects.map((project) => (
          <li key={project.title}>
            <a {...linkProps(project.url)} className="group block outline-none">
              <h3 className="flex items-center gap-1 font-display text-lg font-medium tracking-tight text-text">
                <HoverUnderline>{project.title}</HoverUnderline>
                <ArrowUpRightIcon
                  size={16}
                  weight="light"
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </h3>
              <p className="mt-1 max-w-prose text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
