export default function LegalLayout({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[720px] px-6 lg:px-8 pb-16">
      <div className="pt-10 sm:pt-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">TriNetix — Legal</p>
        <h1 className="mt-2 text-[28px] font-semibold tracking-[-0.025em] text-[var(--foreground)] sm:text-[32px]">{title}</h1>
        <p className="mt-1 text-[12px] text-[var(--foreground-quaternary)]">Last updated: {updated}</p>
      </div>
      <article className="prose prose-neutral mt-6 max-w-none prose-headings:tracking-[-0.015em] prose-headings:font-semibold prose-p:text-[14px] prose-p:leading-7 prose-p:text-[var(--foreground-secondary)] prose-li:text-[14px] prose-li:leading-7 prose-a:underline prose-a:underline-offset-4 prose-h2:mt-8 prose-h2:text-[16px] prose-a:text-[var(--accent)]">
        {children}
      </article>
    </div>
  );
}
