import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, MapPin, Linkedin, Check, ArrowUpRight, Loader2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/lib/site-data";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Carmen Fuentes" },
      {
        name: "description",
        content:
          "Let's turn data into better decisions. Start a conversation about analytics consulting, dashboard design, and BI strategy.",
      },
      { property: "og:title", content: "Contact — Carmen Fuentes" },
      {
        property: "og:description",
        content: "Let's turn data into better decisions. Start a conversation.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please share your name").max(120),
  email: z.string().trim().email("Please enter a valid email").max(255),
  company: z.string().trim().max(160).optional(),
  message: z
    .string()
    .trim()
    .min(10, "A short note helps — at least 10 characters")
    .max(2000),
});

function Contact() {
  const [state, setState] = useState<"idle" | "submitting" | "sent">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      company: fd.get("company") || undefined,
      message: fd.get("message"),
    });
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) {
        errs[issue.path[0] as string] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setState("submitting");
    const { error } = await supabase.from("contact_submissions").insert({
      name: result.data.name,
      email: result.data.email,
      company: result.data.company ?? null,
      message: result.data.message,
    });
    if (error) {
      setState("idle");
      setSubmitError(
        "Something went wrong sending your message. Please try again or email directly.",
      );
      return;
    }
    setState("sent");
  };

  return (
    <>
      <section className="border-b border-border pt-16 pb-16 sm:pt-24">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow">Contact</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 max-w-4xl font-display text-[44px] font-medium leading-[1.02] tracking-tight text-ink sm:text-[72px]">
              Let's turn data into better decisions.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-[16.5px] leading-relaxed text-ink-soft">
              Tell me about the decision you're trying to make, the team you're
              working with, and the timeline you have in mind. I read every
              note personally and reply within two business days.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container-editorial grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="space-y-8">
              <div>
                <p className="eyebrow">Direct</p>
                <ul className="mt-5 space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-card text-ink">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
                        Email
                      </p>
                      <a
                        href={`mailto:${site.email}`}
                        className="font-display text-[17px] tracking-tight text-ink"
                      >
                        {site.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-card text-ink">
                      <Linkedin className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
                        LinkedIn
                      </p>
                      <a
                        href={site.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="font-display text-[17px] tracking-tight text-ink"
                      >
                        Connect with Carmen
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-card text-ink">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
                        Location
                      </p>
                      <p className="font-display text-[17px] tracking-tight text-ink">
                        {site.location}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="hairline" />

              <div>
                <p className="eyebrow">Best fit</p>
                <ul className="mt-4 space-y-2.5 text-[14.5px] leading-relaxed text-ink-soft">
                  <li>· Executive reporting & KPI architecture</li>
                  <li>· BI platform rollouts (Power BI, Tableau)</li>
                  <li>· Forecasting & decision support</li>
                  <li>· Dashboard design audits</li>
                  <li>· Fractional analytics leadership</li>
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-10"
              noValidate
            >
              {state === "sent" ? (
                <div className="py-10 text-center">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-success/10 text-success">
                    <Check className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-[24px] font-medium tracking-tight text-ink">
                    Message received.
                  </h3>
                  <p className="mt-3 text-[15px] text-ink-soft">
                    Thank you. I'll reply within two business days.
                  </p>
                </div>
              ) : (
                <div className="space-y-5">
                  <Field
                    label="Your name"
                    name="name"
                    placeholder="Jane Doe"
                    error={errors.name}
                    required
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="jane@company.com"
                    error={errors.email}
                    required
                  />
                  <Field
                    label="Company (optional)"
                    name="company"
                    placeholder="Acme Inc."
                    error={errors.company}
                  />
                  <div>
                    <label
                      htmlFor="message"
                      className="text-[12px] uppercase tracking-[0.14em] text-muted-foreground"
                    >
                      What are you trying to decide?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="A few lines about the decision, the team, and the timeline."
                      className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent"
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-[12px] text-destructive">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[14px] font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Send message
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                  <p className="text-center text-[11.5px] text-muted-foreground">
                    Your details are used only to reply to your message.
                  </p>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-[12px] uppercase tracking-[0.14em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent"
      />
      {error && <p className="mt-1.5 text-[12px] text-destructive">{error}</p>}
    </div>
  );
}
