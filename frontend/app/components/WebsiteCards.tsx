const websites = [
  {
    id: 1,
    name: "ASM Legal Services",
    description: "Professional legal services and legal consultation.",
    url: "https://asmlegalservices.in",
  },
  {
    id: 2,
    name: "EasyWill India",
    description: "A simple and convenient digital Will-making platform.",
    url: "https://easywillindia.com",
  },
  {
    id: 3,
    name: "Know Divorce",
    description: "Consultation, mediation and mutual consent divorce support.",
    url: "https://knowdivorce.in",
  },
];

export default function WebsiteCards() {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#006876]">
            Our Platforms
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Explore Our Websites
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {websites.map((website) => (
            <article
              key={website.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Website preview */}
              <div className="relative h-[280px] overflow-hidden bg-slate-100">
                <iframe
                  src={website.url}
                  title={`${website.name} website preview`}
                  loading="lazy"
                  className="h-full w-full border-0"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Card content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-900">
                  {website.name}
                </h3>

                <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-600">
                  {website.description}
                </p>

                <a
                  href={website.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-[#006876] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#005763] focus:outline-none focus:ring-2 focus:ring-[#006876] focus:ring-offset-2"
                >
                  Visit Website
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="ml-2 h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}