/**
 * An accent line under its children that grows from the left when the nearest
 * `group` ancestor is hovered or keyboard-focused, and retracts quickly after.
 * The transition takes the duration of the state it moves to, hence the split timing.
 */
export function HoverUnderline({
  children,
  resting = false,
  className = "inline-block",
}: {
  children: React.ReactNode;
  /** Keep a faint line visible at rest, for links inside running text. */
  resting?: boolean;
  className?: string;
}) {
  return (
    <span className={`relative ${className}`}>
      {children}
      {resting && (
        <span
          aria-hidden
          className="absolute inset-x-0 -bottom-1 h-px bg-border"
        />
      )}
      <span
        aria-hidden
        className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-accent transition-transform duration-150 ease-in group-hover:scale-x-100 group-hover:duration-500 group-hover:ease-out group-focus-visible:scale-x-100 group-focus-visible:duration-500 group-focus-visible:ease-out"
      />
    </span>
  );
}
