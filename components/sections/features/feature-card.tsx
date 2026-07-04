import type { Feature } from "@/components/sections/features/features-data";

/** Single feature tile: icon, title, one-line benefit. */
export function FeatureCard({ icon: Icon, title, description }: Feature) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 transition-colors duration-300 hover:border-border-strong hover:bg-surface/70">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="inline-flex size-11 items-center justify-center rounded-xl border border-border-strong bg-surface-2 text-accent">
        <Icon className="size-5" strokeWidth={1.75} />
      </div>
      <h3 className="mt-5 text-lg font-medium tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}
