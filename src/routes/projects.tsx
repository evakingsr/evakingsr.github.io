import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Github } from "lucide-react";
import { PageHeader, SiteLayout } from "@/components/site-layout";

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
            <article key={project.title} className="surface-card flex flex-col p-7 sm:p-9">
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
                    className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                >
                  <ExternalLink className="size-4" aria-hidden />
                  Live demo
                </a>
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

