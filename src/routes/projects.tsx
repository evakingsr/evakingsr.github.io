import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Eva King-Senior" },
      {
        name: "description",
        content:
          "Selected software and fintech projects by Eva King-Senior, with the problem, stack, and outcome for each build.",
      },
      { property: "og:title", content: "Projects — Eva King-Senior" },
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
    title: "Portfolio Tracker",
    summary:
      "A dashboard that pulls market data and tracks positions, returns, and allocation over time.",
    stack: ["React", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Budgeting Assistant",
    summary:
      "Categorizes transactions and forecasts monthly cash flow from a simple CSV upload.",
    stack: ["Python", "pandas", "FastAPI"],
  },
  {
    title: "Hackathon Build",
    summary: "A 36-hour team project — add the problem you solved and what you owned.",
    stack: ["Next.js", "Node.js"],
  },
  {
    title: "Course Project",
    summary: "A class assignment worth showing — describe the design decisions you made.",
    stack: ["Java", "SQL"],
  },
];

function ProjectsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Selected work"
        title="Projects"
        description="Things I've built to learn faster — each one with a real problem behind it."
      />
      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="surface-card flex flex-col p-6">
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{project.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
