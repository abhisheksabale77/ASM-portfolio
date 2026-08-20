const AREAS = [
  {
    title: "Civil Litigation",
    link: "https://www.asmlegalservices.in/practice-area/civil-litigation",
    description:
      "Strategic representation in complex civil disputes, ensuring robust advocacy across trial and appellate courts.",
  },
  {
    title: "Property Law",
    link: "https://www.asmlegalservices.in/practice-area/real-estate-property-law",
    description:
      "Navigating intricate real estate transactions, title disputes, and land revenue matters with precision.",
  },
  {
    title: "Family Law",
    link: "https://www.asmlegalservices.in/practice-area/matrimonial-family-disputes",
    description:
      "Compassionate yet firm counsel in matrimonial disputes, custody, and complex family asset divisions.",
  },
  {
    title: "White-Collar Crime",
    link: "https://www.asmlegalservices.in/practice-area/criminal-law",
    description:
      "Discreet and aggressive defense strategies for corporate entities and individuals facing economic offenses.",
  },
  {
    title: "Will & Succession",
    link: "https://www.asmlegalservices.in/practice-area/will-succession",
    description:
      "Meticulous estate planning, drafting of testaments, and navigating the nuances of succession laws.",
  },
  {
    title: "Corporate Support",
    link: "https://www.asmlegalservices.in/practice-area/corporate-law",
    description:
      "Foundational legal structuring, compliance, and advisory services tailored for modern startups and enterprises.",
  },
];

export default function PracticeAreas() {
  return (
    <section id="work" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-20 md:py-28">
        <p className="label-caps text-muted-gold mb-4">Practice Areas</p>
        <div className="w-12 h-0.5 bg-muted-gold mb-4" />
        <h2 className="headline-lg text-slate-navy mb-12">Areas of Expertise</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AREAS.map((area) => (
            <a
              key={area.title}
              href={area.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-parchment border border-soft-border rounded p-8 hover:shadow-tinted transition-shadow cursor-pointer block"
            >
              <h3 className="headline-sm text-slate-navy mb-3">{area.title}</h3>
              <p className="body-md text-on-surface-variant">{area.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
