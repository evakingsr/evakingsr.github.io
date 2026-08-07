import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, FileText, Github } from "lucide-react";
import { PageHeader, SiteLayout } from "@/components/site-layout";
import stockPitchAsset from "@/assets/stock-pitch.pdf.asset.json";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Eva King-Senior" },
      {
        name: "description",
        content:
          "Selected software and fintech projects by Eva King-Senior, with the problem, stack, and outcome for each build.",
      },
      { property: "og:title", content: "Projects | Eva King-Senior" },
      {
        property: "og:description",
        content: "Selected builds spanning full-stack engineering, data, and financial technology.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    title: "Cura-Motus",
    tagline: "Care in Motion",
    summary:
      "A web app that uses real-time, camera-based pose estimation to help at-home physical therapy patients stay consistent with their prescribed exercises. It counts each rep out loud, links a YouTube tutorial for proper form, and generates a personalized AI exercise plan from a short onboarding flow. Built as a supplement to professional care, not a replacement.",
    highlights: [
      "Real-time pose estimation that counts reps automatically and calls them out loud",
      "AI-generated plans built from each user's sport, injury, and current issue",
      "Progress tracking with streaks and per-exercise rep breakdowns over time",
      "Secure accounts, light and dark mode, and five core PT exercises",
    ],
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Supabase",
      "MediaPipe",
      "Web Speech API",
      "YouTube Data API",
      "Python",
      "Flask",
      "OpenAI API",
    ],
    repo: "https://github.com/thy-dye/Cura-Motus",
    demo: "https://cura-motus.vercel.app",
    doc: null as string | null,
  },
  {
    title: "PennyPlan",
    tagline: "AI-powered personal budgeting",
    summary:
      "A budgeting app that combines manual expense tracking, automated bank imports through Plaid, and AI-generated financial reports so users can see where their money goes and stay on track toward their goals.",
    highlights: [
      "Monthly budgets by category with budgeted vs. actual spending comparisons",
      "Automatic bank transaction imports through the Plaid API",
      "AI-generated spending reports and personalized budgeting tips",
      "Interactive dashboard for visualizing spending trends over time",
    ],
    stack: [
      "Python",
      "Flask",
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Supabase",
      "Plaid API",
      "Google Gemini API",
    ],
    repo: "https://github.com/evakingsr/PennyPlan",
    demo: null as string | null,
    doc: null as string | null,
  },
  {
    title: "TagAlong",
    tagline: "Personalized travel planning",
    summary:
      "A travel planning application that generates day-by-day itineraries tailored to a user's destination, travel dates, and preferences. It blends weather forecasts, local attractions, and AI recommendations so travelers spend less time planning and more time exploring.",
    highlights: [
      "Personalized day-by-day itineraries built from destination, dates, and preferences",
      "Attractions, restaurants, events, and activities pulled from external APIs",
      "Real-time weather forecasts folded into each day's recommendations",
      "Trip data stored and managed in a SQLite database",
    ],
    stack: ["Python", "SQLite", "Google Gemini API", "Geoapify API", "WeatherAPI"],
    repo: "https://github.com/aloulou-dev/tagalong",
    demo: null as string | null,
    doc: null as string | null,
  },
  {
    title: "Sudoku Solver",
    tagline: "Iterative backtracking in Java",
    summary:
      "A Java program that reads a Sudoku puzzle from a text file and solves it using an iterative backtracking algorithm backed by an explicit stack of moves, rather than recursion. Built as a deep dive into backtracking and clean object-oriented design.",
    highlights: [
      "Iterative backtracking with an explicit move stack instead of recursion",
      "Object-oriented design split across puzzle, move, and solver classes",
      "Puzzles loaded from text files and validated against known solution files",
      "Dedicated test class covering solvable and unsolvable boards",
    ],
    stack: ["Java", "Data structures", "Backtracking algorithms", "IntelliJ IDEA"],
    repo: "https://github.com/evakingsr/Sudoku-Solver",
    demo: null as string | null,
    doc: null as string | null,
  },
  {
    title: "Airbnb (ABNB) Stock Pitch",
    tagline: "Smart Woman Securities | Spring 2025",
    summary:
      "A team equity research pitch on Airbnb prepared for Smart Woman Securities at Bowdoin. We valued the company with a discounted cash flow model, benchmarked it against Booking Holdings and Expedia, and issued a buy recommendation with an implied share price of $153.29 against a $114.91 market price, roughly 33% upside.",
    highlights: [
      "DCF valuation using an 8% WACC and a 2% perpetuity growth rate on free cash flow",
      "Comparable company analysis across Airbnb, Booking.com, and Expedia on EV and P/E multiples",
      "Porter's Five Forces breakdown of the short-term rental and hospitality market",
      "Risk assessment covering travel demand, stock-based dilution, and new business spend",
    ],
    stack: [
      "Equity research",
      "DCF modeling",
      "Comparable company analysis",
      "Porter's Five Forces",
      "Excel",
    ],
    repo: null as string | null,
    demo: null as string | null,
    doc: stockPitchAsset.url as string | null,
  },
];




function ProjectsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Selected work"
        title="Projects"
        description="Things I've built to learn faster, each one with a real problem behind it."
      />
      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="grid gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="surface-card group relative flex flex-col overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 sm:p-9"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 z-10 h-1 scale-x-0 bg-gradient-to-r from-primary via-accent to-berry transition-transform duration-300 group-hover:scale-x-100"
              />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2 className="text-2xl font-semibold tracking-tight">{project.title}</h2>
                {project.tagline ? (
                  <span className="text-sm text-muted-foreground">{project.tagline}</span>
                ) : null}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.summary}
              </p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                    <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                  >
                    <ExternalLink className="size-4" aria-hidden />
                    Live demo
                  </a>
                ) : null}
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm font-medium transition hover:bg-muted"
                >
                  <Github className="size-4" aria-hidden />
                  View code
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

