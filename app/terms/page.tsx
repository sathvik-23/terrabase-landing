import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/pages/page-header";
import { Prose } from "@/components/pages/prose";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: `Terms for using the ${site.name} pre-launch website.`,
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms"
        description="Terms for the pre-launch website and waitlist. Full product terms will follow at launch."
      />
      <Container className="max-w-3xl py-16 md:py-20">
        <Prose>
          <p>
            By using this website and joining the {site.name} waitlist, you agree to the
            terms below. They apply to the marketing site only — not to any hosted
            product, which is not yet available.
          </p>

          <h2>The waitlist</h2>
          <p>
            Joining the waitlist expresses interest in {site.name}. It is not a contract,
            a guarantee of access, or a promise of any specific launch date, pricing, or
            feature set. All product details described here are indicative and may change.
          </p>

          <h2>Acceptable use</h2>
          <p>
            Don&apos;t abuse the site or its endpoints — including the waitlist API —
            through automated scraping, spam, or attempts to disrupt the service.
          </p>

          <h2>Trademarks</h2>
          <p>
            {site.name} is not affiliated with or endorsed by Supabase. &ldquo;Supabase&rdquo;
            is a trademark of its respective owner. {site.name} is compatible with the
            Supabase client SDKs and is an independent product.
          </p>

          <h2>Contact</h2>
          <p>
            Questions? Reach us at <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </Prose>
      </Container>
    </>
  );
}
