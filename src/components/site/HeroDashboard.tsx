import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Activity, BarChart3 } from "lucide-react";

const sparkPath = (vals: number[], w = 120, h = 36) => {
  const min = Math.min(...vals);
  const max = Math.max(...vals);
  const range = max - min || 1;
  const step = w / (vals.length - 1);
  return vals
    .map((v, i) => {
      const x = i * step;
      const y = h - ((v - min) / range) * h;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
};

const series = [12, 18, 14, 22, 27, 24, 32, 30, 38, 41, 39, 47, 52];

export function HeroDashboard() {
  return (
    <div className="relative h-full w-full">
      {/* Main glass panel */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="glass-panel relative overflow-hidden rounded-2xl p-5"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Executive Overview
            </p>
            <p className="mt-1 font-display text-[15px] font-medium tracking-tight text-ink">
              Q3 Performance
            </p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-success/10 px-2 py-1 text-[11px] font-medium text-success">
            <TrendingUp className="h-3 w-3" /> On track
          </span>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-4">
          {[
            { label: "Revenue", value: "$4.82M", delta: "+12.4%" },
            { label: "Retention", value: "94.1%", delta: "+1.8 pp" },
            { label: "NRR", value: "118%", delta: "+6 pts" },
          ].map((k) => (
            <div key={k.label}>
              <p className="text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
                {k.label}
              </p>
              <p className="mt-1 font-display text-[20px] font-medium tracking-tight text-ink">
                {k.value}
              </p>
              <p className="text-[11px] font-medium text-success">{k.delta}</p>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <svg viewBox="0 0 480 140" className="w-full">
            <defs>
              <linearGradient id="lg" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.546 0.215 262)" stopOpacity="0.28" />
                <stop offset="100%" stopColor="oklch(0.546 0.215 262)" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* grid */}
            {[28, 56, 84, 112].map((y) => (
              <line key={y} x1="0" x2="480" y1={y} y2={y} stroke="oklch(0.92 0.01 255)" strokeDasharray="2 4" />
            ))}
            {/* area */}
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, ease: "easeOut", delay: 0.6 }}
              d={`${sparkPath(series, 480, 120)} L 480,140 L 0,140 Z`}
              fill="url(#lg)"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, ease: "easeOut", delay: 0.6 }}
              d={sparkPath(series, 480, 120)}
              fill="none"
              stroke="oklch(0.546 0.215 262)"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-[11.5px] text-muted-foreground">
          <span className="font-mono">Updated 2m ago</span>
          <span className="inline-flex items-center gap-1 text-ink">
            View report <ArrowUpRight className="h-3 w-3" />
          </span>
        </div>
      </motion.div>

      {/* Floating KPI top-right */}
      <motion.div
        initial={{ opacity: 0, y: -16, x: 16 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="glass-panel absolute -top-6 -right-4 hidden w-56 rounded-xl p-4 sm:block"
      >
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-accent/10 text-accent">
            <Activity className="h-3.5 w-3.5" />
          </span>
          <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Pipeline</p>
        </div>
        <p className="mt-3 font-display text-[22px] font-medium tracking-tight text-ink">
          $12.4M
        </p>
        <div className="mt-2 flex h-1.5 overflow-hidden rounded-full bg-secondary">
          <div className="h-full w-[68%] bg-accent" />
        </div>
        <p className="mt-2 text-[11px] text-muted-foreground">68% of quarter goal</p>
      </motion.div>

      {/* Floating KPI bottom-left */}
      <motion.div
        initial={{ opacity: 0, y: 16, x: -16 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="glass-panel absolute -bottom-6 -left-4 hidden w-60 rounded-xl p-4 sm:block"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-success/10 text-success">
              <BarChart3 className="h-3.5 w-3.5" />
            </span>
            <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Segment mix
            </p>
          </div>
        </div>
        <div className="mt-3 flex items-end gap-1.5">
          {[42, 58, 36, 71, 52, 64, 48].map((v, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: v }}
              transition={{ duration: 0.6, delay: 0.9 + i * 0.05, ease: "easeOut" }}
              className="w-4 rounded-sm bg-ink/80"
              style={{ minHeight: 6 }}
            />
          ))}
        </div>
        <p className="mt-3 text-[11px] text-muted-foreground">
          Top quartile drives 38% of margin
        </p>
      </motion.div>
    </div>
  );
}
