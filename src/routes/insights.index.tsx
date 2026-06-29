import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { insights } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: "Insights — Carmen Fuentes" },
      {
        name: "description",
        content:
          "Editorial essays on business intelligence, dashboard design, data storytelling, forecasting, and decision design.",
      },
      { property: "og:title", content: "Insights — Carmen Fuentes" },
      {
        property: "og:description",
        content:
          "Essays on BI, dashboard design, data storytelling, and decision design.",
      },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: InsightsIndex,
});

function InsightsIndex() {
  const featured = insights.find((i) => i.featured) ?? insights[0];
  const rest = insights.filter((i) => i.slug !== featured.slug);

  return (
    <>
      <section className="border-b border-border pt-16 pb-16 sm:pt-24">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow">Insights</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 max-w-3xl font-display text-[40px] font-medium leading-[1.05] tracking-tight text-ink sm:text-[60px]">
              Essays on analytics, dashboards, and the craft of helping
              executives decide.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Featured */}
      <section className="py-16">
        <div className="container-editorial">
          <Reveal>
            <Link
              to="/insights/$slug"
              params={{ slug: featured.slug }}
              className="group grid items-stretch overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-soft md:grid-cols-2"
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary to-accent md:h-auto">
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 grid place-items-center p-10">
                  <p className="font-display text-[44px] font-medium leading-[1.05] tracking-tight text-primary-foreground">
                    {featured.title}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between p-8 sm:p-12">
                <div>
                  <div className="flex items-center gap-2 text-[11.5px]">
                    <span className="rounded-full bg-accent/10 px-2.5 py-0.5 font-medium text-accent">
                      Featured
                    </span>
                    <span className="font-mono uppercase tracking-[0.14em] text-muted-foreground">
                      {featured.category}
                    </span>
                  </div>
                  <h2 className="mt-5 font-display text-[28px] font-medium leading-snug tracking-tight text-ink sm:text-[34px]">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-[15.5px] leading-relaxed text-ink-soft">
                    {featured.excerpt}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-border pt-4 text-[12.5px] text-muted-foreground">
                  <span>
                    {featured.date} · {featured.readingTime}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-medium text-ink">
                    Read essay
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24">
        <div className="container-editorial">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.04}>
                <Link
                  to="/insights/$slug"
                  params={{ slug: p.slug }}
                  className="group block h-full bg-card p-7 transition-colors hover:bg-secondary/40"
                >
                  <div className="flex items-center justify-between text-[11.5px]">
                    <span className="font-mono uppercase tracking-[0.14em] text-muted-foreground">
                      {p.category}
                    </span>
                    <span className="text-muted-foreground">{p.readingTime}</span>
                  </div>
                  <h3 className="mt-5 min-h-[3.6em] font-display text-[20px] font-medium leading-snug tracking-tight text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
                    {p.excerpt}
                  </p>
                  <div className="mt-8 flex items-center justify-between border-t border-border pt-4 text-[12.5px] text-muted-foreground">
                    <span>{p.date}</span>
                    <ArrowUpRight className="h-4 w-4 text-ink transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
