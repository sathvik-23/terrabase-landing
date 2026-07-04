import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/brand/eyebrow";
import { FadeIn } from "@/components/motion/fade-in";

/** Eyebrow + title + optional lede, shared by every landing section. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <FadeIn
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-pretty text-base text-muted sm:text-lg">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
