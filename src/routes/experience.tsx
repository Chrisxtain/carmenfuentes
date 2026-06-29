import { createFileRoute } from "@tanstack/react-router";
import { experiences } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Carmen Fuentes" },
      {
        name: "description",
        content:
          "Selected consulting engagements: business challenge, approach, technologies, and business outcome.",
      },
      { property: "og:title", content: "Experience — Carmen Fuentes" },
      {
        property: "og:description",
        content:
          "Consulting engagements presented as business stories: challenge, approach, technologies, outcome.",
      },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <>
      <section className="border-b border-border pt-16 pb-16 sm:pt-24">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow">Experience</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 max-w-4xl font-display text-[40px] font-medium leading-[1.05] tracking-tight text-ink sm:text-[60px]">
              Each engagement is a business story — challenge, approach, and
              the outcome it created.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container-editorial">
          <div className="relative grid gap-16 md:grid-cols-[160px_1fr]">
            {/* Timeline rail */}
            <div className="hidden md:block" />
            <div className="relative">
              <div className="absolute -left-[88px] top-2 hidden h-full w-px bg-border md:block" />

              <div className="space-y-20">
                {experiences.map((exp, i) => (
                  <Reveal key={exp.company} delay={i * 0.05}>
                    <article className="relative">
                      <div className="absolute -left-[94px] top-2 hidden h-3 w-3 rounded-full bg-accent ring-4 ring-background md:block" />

                      <div className="grid gap-8 md:grid-cols-[160px_1fr] md:gap-12 md:[grid-template-columns:160px_1fr] lg:[grid-template-columns:200px_1fr]">
                        <div className="md:-ml-[200px] lg:-ml-[240px]">
                          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-accent">
                            {exp.period}
                          </p>
                          <p className="mt-2 text-[13px] text-muted-foreground">
                            {exp.location}
                          </p>
                        </div>

                        <div>
                          <h2 className="font-display text-[28px] font-medium leading-tight tracking-tight text-ink sm:text-[32px]">
                            {exp.role}
                          </h2>
                          <p className="mt-1 text-[15px] text-ink-soft">
                            {exp.company}
                          </p>

                          <div className="mt-7 grid gap-7">
                            <div>
                              <p className="eyebrow">Business challenge</p>
                              <p className="mt-2 text-[15.5px] leading-relaxed text-ink-soft">
                                {exp.challenge}
                              </p>
                            </div>
                            <div>
                              <p className="eyebrow">Approach</p>
                              <p className="mt-2 text-[15.5px] leading-relaxed text-ink-soft">
                                {exp.approach}
                              </p>
                            </div>
                            <div>
                              <p className="eyebrow">Technologies</p>
                              <div className="mt-3 flex flex-wrap gap-1.5">
                                {exp.technologies.map((t) => (
                                  <span
                                    key={t}
                                    className="rounded-full border border-border bg-card px-3 py-1 text-[12.5px] font-medium text-ink-soft"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="rounded-2xl border border-border bg-card p-5">
                              <p className="eyebrow">Business outcome</p>
                              <p className="mt-2 text-[15.5px] leading-relaxed text-ink">
                                {exp.outcome}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
