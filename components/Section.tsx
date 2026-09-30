/** A content section with its heading, which sticks to the top on small screens. */
export function Section({
  id,
  title,
  className = "",
  children,
}: {
  id: string;
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-label={title} className={className}>
      <h2 className="sticky top-0 z-10 -mx-6 mb-2 bg-bg/85 px-6 py-4 font-display text-2xl font-semibold tracking-tight text-text backdrop-blur md:-mx-12 md:px-12 lg:static lg:mx-0 lg:mb-6 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
        {title}
      </h2>
      {children}
    </section>
  );
}
