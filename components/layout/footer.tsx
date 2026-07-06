import Link from "next/link";
import { Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { LogoMark } from "@/components/layout/logo";
import { GithubIcon } from "@/components/brand/social-icons";
import { footerNav, site } from "@/lib/site";

// X / LinkedIn intentionally omitted for now (site.twitter / site.linkedin are null).
const social = [
  { label: "GitHub", href: site.github, Icon: GithubIcon },
  { label: "Email", href: `mailto:${site.email}`, Icon: Mail },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="max-w-xs">
          <div className="flex items-center gap-2.5 font-semibold tracking-tight">
            <LogoMark />
            <span className="text-lg">{site.name}</span>
          </div>
          <p className="mt-4 text-sm text-muted">
            The Supabase-compatible backend, hosted on India-sovereign
            infrastructure.
          </p>
          <div className="mt-5 flex gap-2">
            {social.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-accent/50 hover:text-foreground"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {Object.entries(footerNav).map(([heading, links]) => (
          <div key={heading}>
            <h3 className="font-mono text-xs uppercase tracking-wider text-faint">
              {heading}
            </h3>
            <ul className="mt-4 space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col gap-2 py-6 text-xs text-faint md:flex-row md:items-center md:justify-between">
          <p>Built in Bengaluru. Hosted in India. © {"2026"} {site.name}.</p>
          <p className="max-w-xl md:text-right">
            Not affiliated with or endorsed by Supabase. &ldquo;Supabase&rdquo; is
            a trademark of its respective owner. Terrabase is compatible with the
            Supabase client SDKs.
          </p>
        </Container>
      </div>
    </footer>
  );
}
