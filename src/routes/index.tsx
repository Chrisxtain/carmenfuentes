import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import portrait from "@/assets/carmen-portrait.jpg";
import { HeroDashboard } from "@/components/site/HeroDashboard";
import { Reveal } from "@/components/site/Reveal";
import { caseStudies, expertise, insights, site } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Carmen Fuentes — Business Intelligence & Analytics Consultant" },
      {
        name: "description",
        content:
          "Helping organizations uncover actionable insights through analytics, business intelligence, forecasting, and modern data visualization.",
      },
      { property: "og:title", content: "Carmen Fuentes — Business Intelligence & Analytics" },
      {
        property: "og:description",
        content:
          "Turning complex data into confident business decisions. Analytics, BI, forecasting, and executive reporting.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const featured = caseStudies.slice(0, 3);
  const editorial = insights.find((i) => i.featured) ?? insights[0];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-10 pb-24 sm:pt-16 sm:pb-32">
        <div className="absolute inset-0 -z-10 grid-bg" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(60%_60%_at_50%_0%,oklch(0.546_0.215_262/0.10),transparent_70%)]" />

        <div className="container-editorial">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-[12px] text-ink-soft backdrop-blur"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-success" />
                Available for selected consulting engagements
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                className="mt-6 font-display text-[44px] font-medium leading-[1.02] tracking-tight text-ink sm:text-[60px] lg:text-[72px]"
              >
                Turning complex data into{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">confident</span>
                  <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-accent/15 sm:h-4" />
                </span>{" "}
                business decisions.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-7 max-w-xl text-[17px] leading-relaxed text-ink-soft"
              >
                Helping organizations uncover actionable insights through
                analytics, business intelligence, forecasting, and modern data
                visualization.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-9 flex flex-wrap items-center gap-3"
              >
                <Link
                  to="/case-studies"
                  className="group inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-3 text-[14px] font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Explore case studies
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:bg-secondary"
                >
                  <Download className="h-4 w-4" />
                  Download resume
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6"
              >
                {[
                  { v: "8+", l: "Years driving analytics outcomes" },
                  { v: "$24M+", l: "Documented business impact" },
                  { v: "40+", l: "Dashboards in executive use" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="font-display text-[26px] font-medium tracking-tight text-ink">
                      {s.v}
                    </p>
                    <p className="mt-1 text-[12.5px] leading-snug text-muted-foreground">
                      {s.l}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl bg-secondary shadow-elevated"
              >
                <img
                  src={portrait}
                  alt="Portrait of Carmen Fuentes, Business Intelligence consultant"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/40 to-transparent p-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/80">
                    Carmen Fuentes · New York
                  </p>
                </div>
              </motion.div>

              <div className="pointer-events-none absolute -bottom-10 -left-6 right-2 hidden lg:block">
                <HeroDashboard />
              </div>
            </div>
          </div>

          <div className="mt-20 lg:hidden">
            <HeroDashboard />
          </div>
        </div>
      </section>

      {/* TRUST BAND */}
      <section className="border-y border-border bg-card/60">
        <div className="container-editorial grid items-center gap-6 py-6 sm:grid-cols-[auto_1fr]">
          <p className="eyebrow whitespace-nowrap">Trusted across</p>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3 font-display text-[15px] font-medium tracking-tight text-ink-soft">
            <span>Financial Services</span>
            <span className="text-border">/</span>
            <span>Retail & Commerce</span>
            <span className="text-border">/</span>
            <span>Healthcare</span>
            <span className="text-border">/</span>
            <span>SaaS & Technology</span>
            <span className="text-border">/</span>
            <span>Early-stage Founders</span>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-28 sm:py-36">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow">Philosophy</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 max-w-3xl font-display text-[34px] font-medium leading-[1.1] tracking-tight text-ink sm:text-[48px]">
              Analytics is a craft of{" "}
              <span className="text-muted-foreground">decision design</span>.
              Charts are punctuation. The decision is the sentence.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-10 border-t border-border pt-10 md:grid-cols-3">
            {[
              {
                k: "01",
                t: "Frame the decision",
                b: "Every engagement begins with naming the decision, the decision-maker, and the alternatives. Without that clarity, even sophisticated modeling produces beautiful artifacts that no one acts on.",
              },
              {
                k: "02",
                t: "Model with discipline",
                b: "Clean grain, honest joins, named assumptions. The work behind the dashboard is invisible — and it is precisely what makes the dashboard trustworthy.",
              },
              {
                k: "03",
                t: "Design for the operator",
                b: "Executive attention is the scarcest resource. A great dashboard respects that, surfaces the signal, and rewards exploration without demanding it.",
              },
            ].map((b) => (
              <Reveal key={b.k} delay={0.1}>
                <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-accent">
                  {b.k}
                </p>
                <h3 className="mt-3 font-display text-[22px] font-medium tracking-tight text-ink">
                  {b.t}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {b.b}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES PREVIEW */}
      <section className="border-t border-border bg-card/50 py-28">
        <div className="container-editorial">
          <div className="flex items-end justify-between gap-8">
            <div>
              <Reveal>
                <p className="eyebrow">Selected Case Studies</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-4 max-w-2xl font-display text-[34px] font-medium leading-tight tracking-tight text-ink sm:text-[44px]">
                  Built on public data. Built for real decisions.
                </h2>
              </Reveal>
            </div>
            <Link
              to="/case-studies"
              className="group hidden items-center gap-1.5 text-[14px] font-medium text-ink sm:inline-flex"
            >
              All case studies
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {featured.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.08}>
                <Link
                  to="/case-studies/$slug"
                  params={{ slug: c.slug }}
                  className="group block h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="flex items-center justify-between text-[11.5px]">
                    <span className="font-mono uppercase tracking-[0.16em] text-muted-foreground">
                      {c.category}
                    </span>
                    <span className="text-muted-foreground">{c.year}</span>
                  </div>
                  <h3 className="mt-6 font-display text-[22px] font-medium leading-snug tracking-tight text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
                    {c.subtitle}
                  </p>
                  <div className="mt-8 flex items-center justify-between border-t border-border pt-4">
                    <span className="text-[13px] text-muted-foreground">
                      Read case study
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-ink transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="py-28">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow">Core Expertise</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 max-w-2xl font-display text-[34px] font-medium leading-tight tracking-tight text-ink sm:text-[44px]">
              A practiced set of capabilities, applied with restraint.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.03}>
                <div className="h-full bg-card p-6 transition-colors hover:bg-secondary/60">
                  <h3 className="font-display text-[17px] font-medium tracking-tight text-ink">
                    {e.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">
                    {e.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED INSIGHT */}
      <section className="border-t border-border bg-card/50 py-28">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow">From the Insights desk</p>
          </Reveal>
          <Reveal delay={0.05}>
            <Link
              to="/insights/$slug"
              params={{ slug: editorial.slug }}
              className="mt-6 grid items-end gap-10 md:grid-cols-[2fr_1fr]"
            >
              <h2 className="font-display text-[34px] font-medium leading-[1.05] tracking-tight text-ink sm:text-[56px]">
                {editorial.title}
              </h2>
              <div>
                <p className="text-[15px] leading-relaxed text-ink-soft">
                  {editorial.excerpt}
                </p>
                <p className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink">
                  Read the essay <ArrowUpRight className="h-4 w-4" />
                </p>
              </div>
            </Link>
          </Reveal>
          <div className="mt-10">
            <Link
              to="/insights"
              className="text-[13.5px] text-muted-foreground transition-colors hover:text-ink"
            >
              Browse all insights →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="container-editorial">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-primary p-10 text-primary-foreground sm:p-16">
              <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_top_right,oklch(0.546_0.215_262/0.55),transparent_60%)]" />
              <div className="relative grid items-end gap-10 md:grid-cols-[2fr_1fr]">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary-foreground/70">
                    Let's work together
                  </p>
                  <h2 className="mt-4 font-display text-[34px] font-medium leading-[1.1] tracking-tight text-primary-foreground sm:text-[48px]">
                    Let's turn data into better decisions.
                  </h2>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3.5 text-[14px] font-medium text-ink transition-transform hover:-translate-y-0.5"
                >
                  Start a conversation
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

void site;
