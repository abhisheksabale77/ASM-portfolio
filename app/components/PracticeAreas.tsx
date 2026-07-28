const AREAS = [
  {
    title: "Civil Litigation",
    description:
      "Strategic representation in complex civil disputes, ensuring robust advocacy across trial and appellate courts.",
  },
  {
    title: "Property Law",
    description:
      "Navigating intricate real estate transactions, title disputes, and land revenue matters with precision.",
  },
  {
    title: "Family Law",
    description:
      "Compassionate yet firm counsel in matrimonial disputes, custody, and complex family asset divisions.",
  },
  {
    title: "White-Collar Crime",
    description:
      "Discreet and aggressive defense strategies for corporate entities and individuals facing economic offenses.",
  },
  {
    title: "Will & Succession",
    description:
      "Meticulous estate planning, drafting of testaments, and navigating the nuances of succession laws.",
  },
  {
    title: "Corporate Support",
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
            <div
              key={area.title}
              className="bg-parchment border border-soft-border rounded p-8 hover:shadow-tinted transition-shadow"
            >
              <h3 className="headline-sm text-slate-navy mb-3">{area.title}</h3>
              <p className="body-md text-on-surface-variant">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
