export default function LegalLayout({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <div className="legal-page">
      <div className="legal-heading">
        <p>A little clarity, in writing.</p>
        <h1>{title}</h1>
        <p>Last updated: {updated}</p>
      </div>
      <article className="legal-copy">
        {children}
      </article>
    </div>
  );
}
