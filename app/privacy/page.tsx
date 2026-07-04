import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/pages/page-header";
import { Prose } from "@/components/pages/prose";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${site.name} handles the information you share before launch.`,
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy"
        description="Plain-language summary of how we handle your information during the pre-launch waitlist period."
      />
      <Container className="max-w-3xl py-16 md:py-20">
        <Prose>
          <p>
            This policy covers the {site.name} pre-launch website and waitlist. It will
            be replaced by a full policy when the product launches.
          </p>

          <h2>What we collect</h2>
          <p>
            If you join the waitlist, we collect the email address you submit. We also
            process limited technical data (such as your IP address) transiently to
            rate-limit the signup endpoint and prevent abuse.
          </p>

          <h2>How we use it</h2>
          <p>
            We use your email solely to send you a signup confirmation and to notify you
            once when your invite is ready. We do not sell your data or share it with
            third parties for advertising.
          </p>

          <h2>Where it lives</h2>
          <p>
            Waitlist emails are stored with our email provider (Resend). Consistent with
            our mission, the {site.name} product itself is hosted on India-sovereign
            infrastructure.
          </p>

          <h2>Your choices</h2>
          <p>
            You can ask us to remove your email from the waitlist at any time by writing
            to <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </Prose>
      </Container>
    </>
  );
}
