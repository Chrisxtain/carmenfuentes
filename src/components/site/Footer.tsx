import { Link } from "@tanstack/react-router";
import { site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-background">
      <div className="container-editorial py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-md bg-primary font-display text-sm font-semibold text-primary-foreground">
                CF
              </span>
              <span className="font-display text-[15px] font-medium tracking-tight text-ink">
                {site.name}
              </span>
            </div>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
              {site.tagline}
            </p>
          </div>

          <div>
            <p className="eyebrow">Navigate</p>
            <ul className="mt-4 space-y-2.5 text-[14px] text-ink-soft">
              {[
                ["/about", "About"],
                ["/experience", "Experience"],
                ["/case-studies", "Case Studies"],
                ["/insights", "Insights"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="transition-colors hover:text-ink">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Connect</p>
            <ul className="mt-4 space-y-2.5 text-[14px] text-ink-soft">
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-ink">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-ink">
                  LinkedIn
                </a>
              </li>
              <li className="text-muted-foreground">{site.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-[12.5px] text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Carmen Fuentes. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.2em]">
            Analytics · Business Intelligence · Decision Support
          </p>
        </div>
      </div>
    </footer>
  );
}
