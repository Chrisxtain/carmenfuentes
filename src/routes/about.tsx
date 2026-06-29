import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import portrait from "@/assets/carmen-portrait.jpg";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Carmen Fuentes" },
      {
        name: "description",
        content:
          "Carmen Fuentes is a Business Intelligence consultant who treats analytics as a craft of decision design. Read about her approach, philosophy, and how she creates business value.",
      },
      { property: "og:title", content: "About Carmen Fuentes" },
      {
        property: "og:description",
        content:
          "Analytics as a craft of decision design. The philosophy behind Carmen Fuentes' consulting practice.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="border-b border-border pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow">About</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 max-w-4xl font-display text-[40px] font-medium leading-[1.05] tracking-tight text-ink sm:text-[64px]">
              I help leadership teams stop drowning in data and start making
              cleaner, more confident decisions.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container-editorial grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="sticky top-24">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-secondary shadow-soft">
                <img
                  src={portrait}
                  alt="Carmen Fuentes"
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-6 border-t border-border pt-5">
                <p className="eyebrow">Currently</p>
                <p className="mt-2 text-[14.5px] text-ink-soft">
                  Based in Madrid. Working remotely with organizations across
                  Europe and North America.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="space-y-10">
            <Reveal>
              <div>
                <p className="eyebrow">Approach</p>
                <p className="mt-4 font-display text-[24px] font-medium leading-snug tracking-tight text-ink sm:text-[28px]">
                  I treat analytics as a craft of decision design — not a
                  pipeline of charts.
                </p>
                <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">
                  Most analytics work fails not because the math is wrong, but
                  because the decision it was supposed to serve was never
                  clearly named. The work I'm proudest of starts with a
                  conversation about the decision a leader is trying to make,
                  the alternatives in front of them, and what would actually
                  change their mind.
                </p>
              </div>
            </Reveal>

            <div className="hairline" />

            <Reveal>
              <div>
                <p className="eyebrow">How I think</p>
                <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
                  Three habits guide most of what I do. First, I write the
                  question down before I touch the data — if I can't write it
                  in one sentence, the analysis isn't ready. Second, I model
                  with a clean grain and named assumptions, because the work
                  behind the dashboard is what makes the dashboard
                  trustworthy. Third, I design for the operator's attention.
                  Executive attention is the scarcest resource in any
                  organization, and a great dashboard respects that.
                </p>
              </div>
            </Reveal>

            <div className="hairline" />

            <Reveal>
              <div>
                <p className="eyebrow">How I create value</p>
                <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
                  My engagements tend to look like one of three shapes:
                  unifying a fragmented reporting landscape into a single
                  source of truth, building executive workspaces that compress
                  the time between question and decision, or coaching internal
                  teams to raise the standard of their own analytics practice.
                  In every case, the deliverable I care about is the decisions
                  the work changes — not the dashboards it produces.
                </p>
              </div>
            </Reveal>

            <div className="hairline" />

            <Reveal>
              <div>
                <p className="eyebrow">Philosophy</p>
                <blockquote className="mt-4 font-display text-[22px] font-medium leading-snug tracking-tight text-ink sm:text-[26px]">
                  “The metric that matters is rarely the metric on the
                  dashboard you started with. Good analytics rewards patience
                  and a willingness to ask uncomfortable questions.”
                </blockquote>
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-12 flex flex-wrap gap-3">
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-3 text-[14px] font-medium text-primary-foreground"
                >
                  See case studies
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-5 py-3 text-[14px] font-medium text-ink"
                >
                  Start a conversation
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
