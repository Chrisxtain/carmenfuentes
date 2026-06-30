export const site = {
  name: "Carmen Fuentes",
  role: "Business Intelligence & Analytics Consultant",
  email: "carmen20fuentez@gmail.com",
  location: "New York, USA · Remote worldwide",
  linkedin: "https://www.linkedin.com/in/fuentes-carmenb421c",
  tagline: "Turning complex data into confident business decisions.",
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  challenge: string;
  approach: string;
  technologies: string[];
  outcome: string;
};

export const experiences: Experience[] = [
  {
    company: "Peak Value Real Estate Group",
    role: "Data Analyst",
    period: "2025 — Present",
    location: "Remote · New York, USA",
    challenge:
      "A regional real estate investment group needed clearer visibility into market trends, price shifts, and acquisition opportunities across Columbus, Cleveland, and Cincinnati to move faster than competing buyers.",
    approach:
      "Analyzed thousands of property listings monthly, built interactive Power BI dashboards for executive review, and used Python to clean and process real estate transaction records. Conducted location-based analysis to support site selection and partnered with finance to build investment performance models and rental income forecasts.",
    technologies: ["Power BI", "Python", "SQL", "Excel", "DAX"],
    outcome:
      "Improved executive decision-making speed and reduced reporting time, while location-based site selection analysis increased ROI on new residential developments.",
  },
  {
    company: "Northwind Capital",
    role: "Senior BI & Analytics Consultant",
    period: "2023 — 2025",
    location: "Remote · New York, USA",
    challenge:
      "A mid-market investment firm struggled to reconcile portfolio performance data scattered across nine systems, slowing every quarterly board cycle by weeks.",
    approach:
      "Designed a unified semantic layer in Snowflake, modeled investment KPIs with dbt, and led the rollout of an executive Power BI workspace with role-based access for partners, analysts, and LPs.",
    technologies: ["Snowflake", "dbt", "Power BI", "SQL", "Python"],
    outcome:
      "Cut monthly reporting cycles from 18 days to 36 hours, surfaced a $4.2M margin leak in legacy holdings, and gave the investment committee a single source of truth for capital allocation.",
  },
  {
    company: "Lumen Retail Group",
    role: "Analytics Lead",
    period: "2021 — 2023",
    location: "Remote · New York, USA",
    challenge:
      "Forty-six store managers were making merchandising decisions on stale weekly PDFs, producing inconsistent assortments and rising stockouts during peak season.",
    approach:
      "Built a near real-time retail intelligence platform feeding store-level dashboards, partnered with operations to redefine the KPI tree, and trained regional leads on disciplined data interpretation.",
    technologies: ["Tableau", "SQL Server", "Python", "Azure Data Factory"],
    outcome:
      "Lifted full-price sell-through by 11.4%, reduced stockouts on top SKUs by 23%, and shortened the planogram review loop from monthly to weekly across all regions.",
  },
  {
    company: "Veridian Health",
    role: "Business Intelligence Analyst",
    period: "2019 — 2021",
    location: "Remote · New York, USA",
    challenge:
      "Clinical operations leadership needed visibility into capacity, throughput, and patient experience without overwhelming the data team with ad hoc requests.",
    approach:
      "Modeled the operational data warehouse, designed a self-service Power BI layer with curated datasets, and codified a request intake process tied to measurable business questions.",
    technologies: ["Power BI", "SQL", "Azure Synapse", "Excel"],
    outcome:
      "Reduced ad hoc reporting requests by 62%, improved average length-of-stay forecasting accuracy to 94%, and helped operations close a $1.3M annualized efficiency gap.",
  },
  {
    company: "Independent Consulting",
    role: "Freelance Data Strategist",
    period: "2017 — 2019",
    location: "Remote",
    challenge:
      "Early-stage and growth-stage founders lacked the analytics discipline to make confident pricing, hiring, and product investment decisions.",
    approach:
      "Embedded with founding teams to define their first KPI frameworks, built executive dashboards, and coached operators on how to read, question, and act on the numbers.",
    technologies: ["SQL", "Python", "Tableau", "Looker Studio", "Excel"],
    outcome:
      "Helped seven founders raise downstream rounds with credible metrics narratives and reframed pricing in two SaaS portfolios, lifting ARPA by an average of 17%.",
  },
];

export const expertise = [
  { title: "Business Intelligence", body: "Designing semantic layers and KPI architectures that scale with the organization." },
  { title: "Data Storytelling", body: "Translating model output into narratives executives can act on with confidence." },
  { title: "Executive Reporting", body: "Board-ready reporting frameworks built around the decisions leaders actually make." },
  { title: "Forecasting", body: "Demand, financial, and operational forecasts grounded in disciplined statistical practice." },
  { title: "Data Visualization", body: "Editorial-quality dashboards that respect attention and reward exploration." },
  { title: "SQL & Modeling", body: "Advanced SQL, dimensional modeling, and dbt-led transformations across modern warehouses." },
  { title: "Python", body: "Analytical pipelines, automation, and statistical analysis with pandas, numpy, and scikit-learn." },
  { title: "Power BI", body: "Enterprise rollouts, semantic modeling, row-level security, and DAX performance tuning." },
  { title: "Tableau", body: "Sophisticated dashboard design with strong governance and reusable component patterns." },
  { title: "Snowflake", body: "Warehouse architecture, cost-aware modeling, and governance for analytics at scale." },
  { title: "Market Analysis", body: "Sizing, segmentation, and competitive intelligence to inform strategic positioning." },
  { title: "Interactive Dashboards", body: "Self-service products that earn trust through clarity, performance, and craft." },
];

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  overview: string;
  problem: string;
  methodology: string[];
  cleaning: string;
  tools: string[];
  insights: string[];
  impact: string[];
  lessons: string;
  kpis: { label: string; value: string; delta?: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "housing-market-intelligence",
    title: "Housing Market Intelligence Dashboard",
    subtitle: "Helping a regional brokerage price listings with confidence using open housing data.",
    category: "Market Intelligence",
    year: "2024",
    overview:
      "A portfolio project exploring how a residential brokerage could move from intuition-based pricing to evidence-driven recommendations using publicly available housing transactions.",
    problem:
      "Brokerages often price homes against shallow comparables and broad market averages. The result is mispriced inventory, longer days on market, and frustrated sellers. The question: can a richer, more disciplined model of the local market help agents make confident pricing recommendations within minutes?",
    methodology: [
      "Sourced public housing transaction data and demographic indicators across multiple metro areas.",
      "Engineered features for price-per-square-foot, seasonality, neighborhood tier, and macro indicators.",
      "Built comparable-set logic that respects geography, vintage, and property characteristics.",
      "Designed a Power BI workspace organized around the agent's decision flow, not the data structure.",
    ],
    cleaning:
      "Standardized inconsistent address formats, reconciled overlapping neighborhood definitions, removed obvious data entry outliers, and imputed missing lot sizes using a constrained k-nearest neighbors approach.",
    tools: ["Python", "pandas", "SQL", "Power BI", "DAX"],
    insights: [
      "Listings priced within 2% of the modeled comparable band sold 38% faster on average.",
      "Seasonality effects were 3x stronger in entry-level segments than in luxury segments.",
      "Neighborhood reputation explained more price variance than school ratings in 6 of 9 metros studied.",
    ],
    impact: [
      "Equipped agents with a confident, defensible pricing recommendation in under 5 minutes.",
      "Created a repeatable framework for expanding into new metros without rebuilding logic.",
      "Demonstrated how publicly available data, modeled with discipline, can rival paid market reports.",
    ],
    lessons:
      "The hardest part wasn't the model — it was designing the interface so a busy agent could trust the recommendation in seconds. Decision design is half the work of analytics.",
    kpis: [
      { label: "Pricing accuracy band", value: "±3.1%", delta: "vs ±7.4% baseline" },
      { label: "Time to recommendation", value: "4 min", delta: "from 45 min" },
      { label: "Metros covered", value: "9" },
    ],
  },
  {
    slug: "executive-kpi-dashboard",
    title: "Executive KPI Dashboard",
    subtitle: "A board-ready operating system for a fictional SaaS leadership team.",
    category: "Executive Reporting",
    year: "2024",
    overview:
      "Designed an executive KPI workspace that reframes a SaaS leadership review around the four decisions that matter most: where to invest, where to pull back, where to hire, and where to protect margin.",
    problem:
      "Leadership teams drown in metrics. The signal-to-noise ratio in most executive decks is poor, and meetings rarely close with a clear decision. The challenge: design a single workspace that forces clarity.",
    methodology: [
      "Defined the decision tree the leadership team actually runs each month.",
      "Mapped each decision to a small set of leading and lagging indicators.",
      "Modeled the underlying data with a clean star schema in Snowflake.",
      "Built the front-end in Power BI with progressive disclosure and a one-screen executive summary.",
    ],
    cleaning:
      "Reconciled product, billing, and CRM identifiers into a unified customer key, recalculated MRR with consistent contraction logic, and standardized cohort definitions across teams.",
    tools: ["Snowflake", "dbt", "Power BI", "SQL"],
    insights: [
      "Net revenue retention told a different story than gross retention in 4 of 6 segments.",
      "Sales cycle length, not pipeline volume, was the strongest predictor of next-quarter bookings.",
      "Top-quartile customers expanded 2.4x more when supported by a dedicated CS pod.",
    ],
    impact: [
      "Replaced a 47-slide monthly deck with a single live workspace.",
      "Shortened the leadership review from 90 to 35 minutes with clearer decision outcomes.",
      "Established a shared vocabulary for KPIs across product, sales, and finance.",
    ],
    lessons:
      "Executives don't need more charts. They need a smaller number of better questions, asked at the right altitude, with the data to answer them honestly.",
    kpis: [
      { label: "Review time", value: "35 min", delta: "from 90 min" },
      { label: "Source-of-truth KPIs", value: "12" },
      { label: "Slides replaced", value: "47" },
    ],
  },
  {
    slug: "sales-performance-intelligence",
    title: "Sales Performance Intelligence",
    subtitle: "Diagnosing where revenue is really created — and quietly lost.",
    category: "Revenue Analytics",
    year: "2023",
    overview:
      "A diagnostic dashboard that decomposes sales performance into the leading behaviors and structural factors that drive — or undermine — quota attainment.",
    problem:
      "Sales leaders typically see attainment and pipeline. They rarely see the underlying mix of behaviors, deal shapes, and account characteristics that explain why some reps consistently outperform.",
    methodology: [
      "Pulled deal, activity, and account data across two fiscal years.",
      "Modeled rep performance as a function of activity quality, deal mix, and account fit.",
      "Built a Tableau workspace with rep-, manager-, and executive-level views.",
      "Designed deal-shape benchmarks managers can coach against in weekly 1:1s.",
    ],
    cleaning:
      "Deduplicated overlapping CRM records, reclassified miscategorized deal stages, and aligned activity timestamps to a single timezone for honest cycle-time analysis.",
    tools: ["Tableau", "SQL", "Python", "Salesforce"],
    insights: [
      "Top reps weren't more active — they were more selective. They worked 22% fewer accounts but qualified twice as deeply.",
      "Multi-threaded deals (4+ stakeholders) closed at 2.1x the rate of single-threaded deals.",
      "Discount depth predicted churn 14 months out with surprising consistency.",
    ],
    impact: [
      "Gave managers a structured coaching tool rooted in observable behaviors.",
      "Reframed planning around deal quality, not raw activity volume.",
      "Reduced over-discounting on strategic accounts.",
    ],
    lessons:
      "The metric that matters is rarely the metric on the dashboard you started with. Sales analytics rewards patience and a willingness to ask uncomfortable questions.",
    kpis: [
      { label: "Coaching adoption", value: "92%" },
      { label: "Discount depth", value: "−18%" },
      { label: "Multi-thread rate", value: "+47%" },
    ],
  },
  {
    slug: "customer-segmentation",
    title: "Customer Segmentation Analysis",
    subtitle: "Behavioral segmentation that earns its place in the planning cycle.",
    category: "Customer Analytics",
    year: "2023",
    overview:
      "A behavioral segmentation built on public e-commerce data, designed to feed real planning conversations — pricing, lifecycle, retention — rather than sit unused in a slide deck.",
    problem:
      "Most segmentation projects end with a beautiful taxonomy that no team uses. The goal: build segments that product, marketing, and CX leaders actually want to plan against.",
    methodology: [
      "Engineered RFM features and behavioral signals from transactional data.",
      "Used k-means and hierarchical clustering, validated against business intuition.",
      "Profiled each segment with a concise narrative and recommended actions.",
      "Delivered the result as an interactive Power BI workspace, not a static deck.",
    ],
    cleaning:
      "Removed test transactions, reconciled returns against original orders, and normalized currency to a single reporting unit using daily exchange rates.",
    tools: ["Python", "scikit-learn", "Power BI", "SQL"],
    insights: [
      "Five durable segments emerged, each with a meaningfully different lifetime value curve.",
      "A small ‘champion’ segment (6%) drove 38% of contribution margin.",
      "An at-risk segment showed early warning signs 60 days before churn.",
    ],
    impact: [
      "Informed a tiered lifecycle program with segment-specific offers.",
      "Refocused acquisition spend toward look-alikes of the champion segment.",
      "Enabled an early-warning playbook for the at-risk segment.",
    ],
    lessons:
      "Good segmentation is judged by adoption, not silhouette score. The most valuable segments are the ones that change how teams plan their next quarter.",
    kpis: [
      { label: "Segments", value: "5" },
      { label: "Margin from champions", value: "38%" },
      { label: "Early-warning lead time", value: "60 days" },
    ],
  },
  {
    slug: "retail-analytics-dashboard",
    title: "Retail Analytics Dashboard",
    subtitle: "Store-level intelligence that respects the operator's attention.",
    category: "Retail Operations",
    year: "2022",
    overview:
      "A store-level analytics workspace built on publicly available retail data, designed for operators who need answers between customer interactions — not after closing.",
    problem:
      "Store managers are interrupt-driven. They need to know, at a glance, whether today is on track, what to act on now, and what to plan for this week. Most retail dashboards bury that signal under noise.",
    methodology: [
      "Mapped the operator's day into three decision moments: morning huddle, midday check, end-of-day review.",
      "Designed three connected views, each tuned to the time available at that moment.",
      "Built the data model in BigQuery and the front end in Looker Studio for cost-efficient rollout.",
      "Validated with mock interviews modeled on real retail operator workflows.",
    ],
    cleaning:
      "Aligned point-of-sale, footfall, and staffing data to a common store-day grain and back-filled missing footfall using a calibrated regression model.",
    tools: ["BigQuery", "SQL", "Looker Studio", "Python"],
    insights: [
      "Conversion rate moved more with staffing mix than with total headcount.",
      "Weather effects on footfall were category-specific and often misread.",
      "Top-performing stores ran tighter mid-shift resets, not longer ones.",
    ],
    impact: [
      "Gave operators a 30-second read on store health at any moment of the day.",
      "Reduced overstaffing on quiet days without hurting service levels.",
      "Created a coaching artifact for area managers visiting underperforming stores.",
    ],
    lessons:
      "In operational analytics, time-to-insight is the metric. A dashboard that takes 90 seconds to read is a dashboard that doesn't get read.",
    kpis: [
      { label: "Time-to-insight", value: "< 30s" },
      { label: "Labor efficiency", value: "+9%" },
      { label: "Stores modeled", value: "120" },
    ],
  },
];

export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  date: string;
  featured?: boolean;
  body: string[];
};

export const insights: Insight[] = [
  {
    slug: "turning-data-into-better-business-decisions",
    title: "Turning Data Into Better Business Decisions",
    excerpt:
      "Most analytics work fails not because the math is wrong, but because the decision it serves was never clearly named. A practical framework for closing that gap.",
    category: "Decision Design",
    readingTime: "8 min read",
    date: "May 2026",
    featured: true,
    body: [
      "Every dashboard exists to support a decision. When the decision is named clearly, the analytics work that follows almost designs itself. When it isn't, even sophisticated modeling produces beautiful artifacts that nobody acts on.",
      "Start with the decision, not the data. Ask: who decides, how often, with what alternatives, and what would change their mind? The answers shape the model, the metrics, and the interface.",
      "Treat the dashboard as a decision instrument, not a reporting artifact. Strip everything that doesn't move the decision forward. The discipline of subtraction is where analytics earns its seat at the executive table.",
      "Finally, measure analytics by the decisions it changes — not the views it accumulates. The best dashboards are quietly indispensable, and they earn that status one well-supported decision at a time.",
    ],
  },
  {
    slug: "seven-dashboard-design-mistakes",
    title: "7 Dashboard Design Mistakes That Confuse Decision-Makers",
    excerpt:
      "From decorative KPIs to charts that compete for attention — the recurring patterns that quietly erode trust in executive reporting.",
    category: "Dashboard Design",
    readingTime: "7 min read",
    date: "April 2026",
    body: [
      "The most common dashboard failures aren't technical. They're editorial. Too many KPIs, weak hierarchy, decorative visuals, and inconsistent definitions — each erodes the executive's trust a little further until the dashboard quietly stops being opened.",
      "Treat your dashboard like a magazine spread. There should be one dominant headline, a small set of supporting stories, and a clear path for the reader's eye.",
      "Discipline beats decoration. Pick the chart that answers the question with the least cognitive friction, and resist the urge to add a second chart ‘just in case.’",
    ],
  },
  {
    slug: "raw-data-to-executive-insights",
    title: "From Raw Data to Executive Insights: My Analytics Workflow",
    excerpt:
      "A behind-the-scenes look at the process I use to move from messy source data to a confident, defensible recommendation.",
    category: "Workflow",
    readingTime: "9 min read",
    date: "March 2026",
    body: [
      "Good analytics is repeatable. The pipeline I use moves through five disciplined stages: frame, model, validate, design, deliver.",
      "Frame the decision in plain language before touching a tool. Model the data with a clear grain in mind. Validate against business intuition. Design the interface for the operator's attention. Deliver with a written narrative — not just a link.",
      "Each stage forces a kind of honesty. Skipping any one of them is how analytics work ends up technically correct and operationally useless.",
    ],
  },
  {
    slug: "why-data-storytelling-matters",
    title: "Why Data Storytelling Matters More Than Charts",
    excerpt:
      "A perfectly built chart can still fail to change a decision. The story you wrap around it is the part that does the persuading.",
    category: "Storytelling",
    readingTime: "6 min read",
    date: "February 2026",
    body: [
      "Executives don't change their minds because of a chart. They change their minds because of a story that the chart happens to support.",
      "The analyst's job is to construct that story honestly: name the question, present the evidence, acknowledge the counter-arguments, and recommend a path forward.",
      "Charts are the punctuation. The narrative is the sentence.",
    ],
  },
  {
    slug: "power-bi-vs-tableau",
    title: "Power BI vs Tableau: Choosing the Right Tool",
    excerpt:
      "A practical, opinionated comparison from someone who has rolled out both at enterprise scale.",
    category: "Tooling",
    readingTime: "10 min read",
    date: "January 2026",
    body: [
      "There is no universally correct answer, but there is usually a correct answer for your organization. The honest comparison rests on four axes: data modeling, design flexibility, governance, and total cost.",
      "Power BI rewards organizations with a Microsoft footprint and strong semantic modeling discipline. Tableau rewards organizations where the dashboard is the product and design craft is a non-negotiable.",
      "Pick the one your team will adopt. The tool you can govern beats the tool with the better demo.",
    ],
  },
  {
    slug: "key-metrics-every-business-should-track",
    title: "Key Metrics Every Business Should Track",
    excerpt:
      "A short, opinionated list of the metrics that quietly separate well-run companies from the rest.",
    category: "Metrics",
    readingTime: "5 min read",
    date: "December 2025",
    body: [
      "Most businesses track too many metrics and watch too few. The short list that actually matters is shorter than most leaders expect.",
      "Track unit economics, retention quality, and cash conversion before anything else. Layer in the operational metrics that map directly to the decisions you make this quarter.",
      "If a metric doesn't change a decision, it doesn't belong on the wall.",
    ],
  },
];
