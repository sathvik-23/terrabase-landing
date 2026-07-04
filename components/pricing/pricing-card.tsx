import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type Plan = {
  name: string;
  price: string;
  cadence?: string;
  description: string;
  features: string[];
  cta: string;
  href?: string;
  featured?: boolean;
};

export function PricingCard({ plan }: { plan: Plan }) {
  const { featured, href } = plan;
  return (
    <div
      className={cn(
        "flex flex-col rounded-2xl border p-7",
        featured
          ? "border-accent/40 bg-surface/70 shadow-glow"
          : "border-border bg-surface/30",
      )}
    >
      <h3 className="text-lg font-medium tracking-tight">{plan.name}</h3>
      <div className="mt-4 flex items-baseline gap-1.5">
        <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
        {plan.cadence && <span className="text-sm text-faint">{plan.cadence}</span>}
      </div>
      <p className="mt-3 text-sm text-muted">{plan.description}</p>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <Check className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={2.5} />
            <span className={featured ? "text-foreground" : "text-muted"}>{feature}</span>
          </li>
        ))}
      </ul>

      {href ? (
        <Link
          href={href}
          className={buttonVariants({
            variant: featured ? "primary" : "outline",
            className: "mt-7 w-full",
          })}
        >
          {plan.cta}
        </Link>
      ) : (
        <span className="mt-7 inline-flex h-11 w-full items-center justify-center rounded-full border border-border text-sm text-faint">
          {plan.cta}
        </span>
      )}
    </div>
  );
}
