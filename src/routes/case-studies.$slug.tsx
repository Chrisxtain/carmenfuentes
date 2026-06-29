import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const study = caseStudies.find((c) => c.slug === params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.study;
    return {
      meta: [
        { title: s ? `${s.title} — Carmen Fuentes` : "Case Study" },
        { name: "description", content: s?.subtitle ?? "" },
        { property: "og:title", content: s?.title ?? "Case Study" },
        { property: "og:description", content: s?.subtitle ?? "" },
        { property: "og:url", content: `/case-studies/${s?.slug ?? ""}` },
        { property: "og:type", content: "article" },
      ],
      links: s ? [{ rel: "canonical", href: `/case-studies/${s.slug}` }] : [],
    };
  },
  notFoundComponent: () => (
    <div className="container-editorial py-32 text-center">
      <p className="eyebrow">Not found</p>
      <h1 className="mt-3 font-display text-4xl font-medium text-ink">Case study not found</h1>
      <Link to="/case-studies" className="mt-6 inline-block text-accent">
        ← Back to case studies
      </Link>
    </div>
  ),
  component: CaseStudyDetail,
});

function CaseStudyDetail() {
  const { study } = Route.useLoaderData();
  const all = caseStudies;
  const idx = all.findIndex((c) => c.slug === study.slug);
  const next = all[(idx + 1) % all.length];

  return (
    <>
      <section className="border-b border-border pt-12 pb-14 sm:pt-20">
        <div className="container-editorial">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1.5 text-[13px] text-muted-foreground transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All case studies
          </Link>

          <Reveal>
            <div className="mt-10 flex flex-wrap items-center gap-3 text-[11.5px]">
              <span className="font-mono uppercase tracking-[0.16em] text-accent">
                {study.category}
              </span>
              <span className="text-muted-foreground">·</span>
              <span className="text-muted-foreground">{study.year}</span>
              <span className="text-muted-foreground">·</span>
              <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] text-ink-soft">
                Portfolio project — public data
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-5 max-w-4xl font-display text-[40px] font-medium leading-[1.05] tracking-tight text-ink sm:text-[60px]">
              {study.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-soft">
              {study.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {study.kpis.map((k) => (
                <div key={k.label} className="rounded-2xl border border-border bg-card p-5">
                  <p className="font-display text-[28px] font-medium tracking-tight text-ink">
                    {k.value}
                  </p>
                  <p className="mt-1 text-[12.5px] text-muted-foreground">{k.label}</p>
                  {k.delta && (
                    <p className="mt-2 text-[12px] text-success">{k.delta}</p>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mock dashboard preview */}
      <section className="py-16">
        <div className="container-editorial">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
              <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-5 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="ml-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  {study.title} · v1.0
                </span>
              </div>
              <div className="grid gap-4 p-6 sm:grid-cols-3">
                {study.kpis.map((k) => (
                  <div key={k.label} className="rounded-xl border border-border p-4">
                    <p className="text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
                      {k.label}
                    </p>
                    <p className="mt-1.5 font-display text-[22px] font-medium text-ink">
                      {k.value}
                    </p>
                  </div>
                ))}
                <div className="rounded-xl border border-border p-4 sm:col-span-2">
                  <p className="text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
                    Trend
                  </p>
                  <svg viewBox="0 0 480 140" className="mt-3 w-full">
                    <defs>
                      <linearGradient id="cs" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="oklch(0.546 0.215 262)" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="oklch(0.546 0.215 262)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,110 L40,98 L80,104 L120,82 L160,90 L200,66 L240,74 L280,52 L320,60 L360,40 L400,48 L440,28 L480,34 L480,140 L0,140 Z"
                      fill="url(#cs)"
                    />
                    <path
                      d="M0,110 L40,98 L80,104 L120,82 L160,90 L200,66 L240,74 L280,52 L320,60 L360,40 L400,48 L440,28 L480,34"
                      fill="none"
                      stroke="oklch(0.546 0.215 262)"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="rounded-xl border border-border p-4">
                  <p className="text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
                    Mix
                  </p>
                  <div className="mt-3 flex h-20 items-end gap-1.5">
                    {[34, 58, 28, 72, 46, 62, 38, 52].map((v, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-ink/80"
                        style={{ height: `${v}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container-editorial grid gap-16 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <p className="eyebrow lg:sticky lg:top-24">Overview</p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="font-display text-[22px] font-medium leading-snug tracking-tight text-ink sm:text-[26px]">
              {study.overview}
            </p>
          </Reveal>
        </div>
      </section>

      <Section title="Business Problem">
        <p>{study.problem}</p>
      </Section>

      <Section title="Methodology">
        <ol className="space-y-3">
          {study.methodology.map((m, i) => (
            <li key={i} className="flex gap-4">
              <span className="font-mono text-[12px] text-accent">0{i + 1}</span>
              <span>{m}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Data cleaning">
        <p>{study.cleaning}</p>
      </Section>

      <Section title="Tools">
        <div className="flex flex-wrap gap-1.5">
          {study.tools.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-card px-3 py-1 text-[12.5px] font-medium text-ink-soft"
            >
              {t}
            </span>
          ))}
        </div>
      </Section>

      <Section title="Key insights">
        <ul className="space-y-3">
          {study.insights.map((s, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Business impact">
        <ul className="space-y-3">
          {study.impact.map((s, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Lessons learned">
        <p className="font-display text-[20px] font-medium leading-snug tracking-tight text-ink sm:text-[24px]">
          “{study.lessons}”
        </p>
      </Section>

      <section className="py-20">
        <div className="container-editorial">
          <Link
            to="/case-studies/$slug"
            params={{ slug: next.slug }}
            className="group block rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-soft sm:p-12"
          >
            <p className="eyebrow">Next case study</p>
            <div className="mt-3 flex items-center justify-between gap-6">
              <h3 className="font-display text-[28px] font-medium leading-tight tracking-tight text-ink sm:text-[36px]">
                {next.title}
              </h3>
              <ArrowUpRight className="h-6 w-6 text-ink transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border py-16">
      <div className="container-editorial grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow lg:sticky lg:top-24">{title}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="text-[16px] leading-relaxed text-ink-soft">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}
