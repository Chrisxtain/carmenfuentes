import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Carmen Fuentes" },
      {
        name: "description",
        content:
          "Portfolio case studies inspired by public data: housing intelligence, executive KPI dashboards, sales performance, customer segmentation, and retail analytics.",
      },
      { property: "og:title", content: "Case Studies — Carmen Fuentes" },
      {
        property: "og:description",
        content:
          "Portfolio case studies in BI, analytics, and dashboard design, inspired by public datasets.",
      },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudiesIndex,
});

function CaseStudiesIndex() {
  return (
    <>
      <section className="border-b border-border pt-16 pb-16 sm:pt-24">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow">Case Studies</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 max-w-4xl font-display text-[40px] font-medium leading-[1.05] tracking-tight text-ink sm:text-[60px]">
              Five portfolio projects, built on public data, designed for real
              business decisions.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-[15px] text-muted-foreground">
              The case studies below are portfolio projects inspired by
              publicly available datasets. They demonstrate the methodology,
              design discipline, and decision orientation I bring to client
              engagements.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container-editorial space-y-8">
          {caseStudies.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.05}>
              <Link
                to="/case-studies/$slug"
                params={{ slug: c.slug }}
                className="group grid items-stretch gap-0 overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-soft md:grid-cols-[1fr_1.2fr]"
              >
                <div className="relative h-56 overflow-hidden bg-secondary md:h-auto">
                  <MockDashboard variant={i % 3} />
                </div>
                <div className="flex flex-col justify-between p-7 sm:p-10">
                  <div>
                    <div className="flex items-center justify-between text-[11.5px]">
                      <span className="font-mono uppercase tracking-[0.16em] text-muted-foreground">
                        {c.category}
                      </span>
                      <span className="text-muted-foreground">{c.year}</span>
                    </div>
                    <h2 className="mt-6 font-display text-[28px] font-medium leading-snug tracking-tight text-ink sm:text-[32px]">
                      {c.title}
                    </h2>
                    <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-ink-soft">
                      {c.subtitle}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap items-end justify-between gap-4 border-t border-border pt-6">
                    <div className="flex flex-wrap gap-4">
                      {c.kpis.slice(0, 2).map((k) => (
                        <div key={k.label}>
                          <p className="font-display text-[20px] font-medium tracking-tight text-ink">
                            {k.value}
                          </p>
                          <p className="text-[11.5px] text-muted-foreground">
                            {k.label}
                          </p>
                        </div>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-ink">
                      Read case study
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

function MockDashboard({ variant }: { variant: number }) {
  if (variant === 0) {
    return (
      <div className="relative h-full w-full bg-gradient-to-br from-background to-secondary p-6">
        <div className="grid gap-3">
          <div className="rounded-lg border border-border bg-card p-3">
            <p className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              Median price
            </p>
            <p className="mt-1 font-display text-[18px] font-medium text-ink">$482K</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-3">
            <svg viewBox="0 0 200 60" className="w-full">
              {[10, 18, 14, 22, 17, 28, 32, 26, 38, 44, 40, 52].map((v, i) => (
                <rect key={i} x={i * 16 + 4} y={60 - v} width="10" height={v} fill="oklch(0.546 0.215 262)" opacity="0.85" />
              ))}
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (variant === 1) {
    return (
      <div className="relative h-full w-full bg-gradient-to-br from-background to-secondary p-6">
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            Net revenue retention
          </p>
          <svg viewBox="0 0 240 80" className="mt-2 w-full">
            <defs>
              <linearGradient id="ar" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.696 0.17 162)" stopOpacity="0.35" />
                <stop offset="100%" stopColor="oklch(0.696 0.17 162)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,60 L20,52 L40,55 L60,42 L80,46 L100,32 L120,36 L140,24 L160,28 L180,18 L200,22 L220,12 L240,16 L240,80 L0,80 Z"
              fill="url(#ar)"
            />
            <path
              d="M0,60 L20,52 L40,55 L60,42 L80,46 L100,32 L120,36 L140,24 L160,28 L180,18 L200,22 L220,12 L240,16"
              fill="none"
              stroke="oklch(0.696 0.17 162)"
              strokeWidth="1.6"
            />
          </svg>
        </div>
      </div>
    );
  }
  return (
    <div className="relative h-full w-full bg-gradient-to-br from-background to-secondary p-6">
      <div className="grid grid-cols-2 gap-3">
        {["Q1", "Q2", "Q3", "Q4"].map((q, i) => (
          <div key={q} className="rounded-lg border border-border bg-card p-3">
            <p className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              {q}
            </p>
            <p className="mt-1 font-display text-[16px] font-medium text-ink">
              {[1.2, 1.7, 2.1, 2.6][i]}M
            </p>
            <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full bg-accent"
                style={{ width: `${[40, 58, 72, 88][i]}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
