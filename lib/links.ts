/** Anchor props that open http(s) links in a new tab and leave mailto/hash links alone. */
export function linkProps(href: string) {
  return href.startsWith("http")
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href };
}
