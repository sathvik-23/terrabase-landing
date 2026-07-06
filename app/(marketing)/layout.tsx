import { JsonLd } from "@/components/seo/json-ld";
import { organizationSchema } from "@/lib/structured-data";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";

/** Chrome for the public marketing site: nav, footer, and Organization JSON-LD. */
export default function MarketingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
