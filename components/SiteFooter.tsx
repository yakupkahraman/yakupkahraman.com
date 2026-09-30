import { HoverUnderline } from "@/components/HoverUnderline";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 max-w-prose text-sm text-muted">
      <p>
        Open to freelance, collaboration, and full-time roles. Write to me at{" "}
        <a href={`mailto:${site.email}`} className="group text-text">
          <HoverUnderline resting>{site.email}</HoverUnderline>
        </a>
        .
      </p>
      <p className="mt-4">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}
