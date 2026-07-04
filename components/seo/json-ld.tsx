/** Renders a JSON-LD structured-data script. Server component. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Structured data is trusted, static, and generated server-side.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
