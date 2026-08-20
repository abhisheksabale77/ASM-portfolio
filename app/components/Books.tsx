const BOOKS = [
  {
    title: "Life and Law",
    description:
      "An insightful exploration into the intersection of daily life and legal principles. This book breaks down complex legal jargon into understandable concepts, empowering readers with practical legal knowledge for everyday situations.",
    cta: "Coming Soon",
  },
  {
    title: "Magic Mindset",
    description:
      "A transformative guide focusing on mental resilience, strategic thinking, and emotional intelligence. Drawing from years of high-pressure legal experience, it offers actionable strategies to cultivate a mindset geared for success and peace.",
    cta: "Coming Soon",
  },
];

export default function Books() {
  return (
    <section id="books" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-20 md:py-28">
        <p className="label-caps text-muted-gold mb-4">Books</p>
        <div className="w-12 h-0.5 bg-muted-gold mb-4" />
        <h2 className="headline-lg text-slate-navy mb-12">Authored Works</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {BOOKS.map((book) => (
            <div
              key={book.title}
              className="bg-parchment border border-soft-border rounded p-8 flex flex-col hover:shadow-tinted transition-shadow"
            >
              <h3 className="headline-sm text-slate-navy mb-3">{book.title}</h3>
              <p className="body-md text-on-surface-variant mb-6 grow">
                {book.description}
              </p>
              <a
                href="#"
                className="label-caps text-muted-gold hover:text-slate-navy transition-colors inline-flex items-center gap-1"
              >
                {book.cta}
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
