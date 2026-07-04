/** Shared long-form text styling for legal and content pages. */
export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-4 text-muted [&_a]:text-accent [&_a]:underline-offset-4 hover:[&_a]:underline [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground [&_p]:leading-relaxed [&_strong]:text-foreground">
      {children}
    </div>
  );
}
