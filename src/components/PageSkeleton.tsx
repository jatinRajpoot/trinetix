export default function PageSkeleton() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 lg:px-8 pb-16" aria-hidden>
      {/* Hero */}
      <div className="mx-auto max-w-[720px] pt-10 text-center sm:pt-14">
        <div className="skeleton mx-auto h-4 w-28 rounded-full" />
        <div className="skeleton mx-auto mt-4 h-9 w-3/4 sm:h-11" />
        <div className="skeleton mx-auto mt-3 h-9 w-1/2 sm:h-11" />
        <div className="skeleton mx-auto mt-5 h-4 w-2/3" />
        <div className="skeleton mx-auto mt-2 h-4 w-1/2" />
      </div>

      {/* Cards */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="card p-7" style={{ animationDelay: `${i * 60}ms` }}>
            <div className="skeleton h-9 w-9 rounded-xl" />
            <div className="skeleton mt-4 h-4 w-2/3" />
            <div className="skeleton mt-3 h-3.5 w-full" />
            <div className="skeleton mt-2 h-3.5 w-5/6" />
            <div className="skeleton mt-2 h-3.5 w-1/2" />
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center gap-3">
        <div className="skeleton h-11 w-44 rounded-full" />
        <div className="skeleton h-11 w-32 rounded-full" />
      </div>
    </div>
  );
}
