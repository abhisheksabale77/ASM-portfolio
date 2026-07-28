export default function Writing() {
  return (
    <section id="writing" className="bg-parchment scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-20 md:py-28">
        <p className="label-caps text-muted-gold mb-4">Writing</p>
        <div className="w-12 h-0.5 bg-muted-gold mb-4" />
        <h2 className="headline-lg text-slate-navy mb-6">Life &amp; Law Blog</h2>

        <div className="bg-white border border-soft-border rounded p-8 md:p-10 max-w-3xl">
          <p className="body-lg text-on-surface-variant mb-6">
            A dedicated blogging platform where I share regular insights, legal
            updates, and thoughtful commentary on current affairs. The blog
            serves as a bridge between complex legal developments and the common
            citizen, promoting widespread legal literacy.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-navy text-white text-sm font-semibold rounded hover:bg-slate-navy-light transition-colors"
          >
            Visit Platform
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
