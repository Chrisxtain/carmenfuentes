import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { insights } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const article = insights.find((i) => i.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    return {
      meta: [
        { title: a ? `${a.title} — Carmen Fuentes` : "Insight" },
        { name: "description", content: a?.excerpt ?? "" },
        { property: "og:title", content: a?.title ?? "" },
        { property: "og:description", content: a?.excerpt ?? "" },
        { property: "og:url", content: `/insights/${a?.slug ?? ""}` },
        { property: "og:type", content: "article" },
      ],
      links: a ? [{ rel: "canonical", href: `/insights/${a.slug}` }] : [],
    };
  },
  notFoundComponent: () => (
    <div className="container-editorial py-32 text-center">
      <p className="eyebrow">Not found</p>
      <h1 className="mt-3 font-display text-4xl font-medium text-ink">Insight not found</h1>
      <Link to="/insights" className="mt-6 inline-block text-accent">← Back to insights</Link>
    </div>
  ),
  component: InsightDetail,
});

function InsightDetail() {
  const { article } = Route.useLoaderData();
  const idx = insights.findIndex((i) => i.slug === article.slug);
  const next = insights[(idx + 1) % insights.length];

  return (
    <>
      <article className="pt-12 pb-16 sm:pt-20">
        <div className="container-editorial max-w-3xl">
          <Link
            to="/insights"
            className="inline-flex items-center gap-1.5 text-[13px] text-muted-foreground transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All insights
          </Link>

          <Reveal>
            <div className="mt-10 flex items-center gap-3 text-[11.5px]">
              <span className="font-mono uppercase tracking-[0.16em] text-accent">
                {article.category}
              </span>
              <span className="text-muted-foreground">·</span>
              <span className="text-muted-foreground">{article.date}</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-muted-foreground">{article.readingTime}</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-5 font-display text-[40px] font-medium leading-[1.05] tracking-tight text-ink sm:text-[56px]">
              {article.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-[19px] leading-relaxed text-ink-soft">
              {article.excerpt}
            </p>
          </Reveal>
        </div>

        <div className="container-editorial mt-14 max-w-3xl">
          <div className="hairline" />
          <div className="mt-10 space-y-7 text-[17px] leading-[1.75] text-ink-soft">
            {article.body.map((p, i) => (
              <Reveal key={i} delay={i * 0.03}>
                <p
                  className={
                    i === 0
                      ? "first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-[64px] first-letter:font-medium first-letter:leading-[0.85] first-letter:text-ink"
                      : ""
                  }
                >
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </article>

      <section className="py-16">
        <div className="container-editorial max-w-3xl">
          <Link
            to="/insights/$slug"
            params={{ slug: next.slug }}
            className="group block rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-soft"
          >
            <p className="eyebrow">Next essay</p>
            <h3 className="mt-3 font-display text-[24px] font-medium leading-snug tracking-tight text-ink sm:text-[28px]">
              {next.title}
            </h3>
          </Link>
        </div>
      </section>
    </>
  );
}
