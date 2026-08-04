import { createFileRoute, Link } from "@tanstack/react-router";
import heroGradient from "@/assets/hero-gradient.jpg";
import headshot from "@/assets/headshot.jpg.asset.json";

import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eva King-Senior — Tech & Fintech Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Eva King-Senior: software and fintech projects, experience, skills, and contact details for internship recruiters.",
      },
      { property: "og:title", content: "Eva King-Senior — Tech & Fintech Portfolio" },
      {
        property: "og:description",
        content: "Projects, experience, and skills from an aspiring tech and fintech intern.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const highlights = [
  {
    title: "Software Engineering",
    body: "Python, TypeScript, and React — building full-stack apps from data model to interface.",
  },
  {
    title: "Financial Technology",
    body: "Market data analysis, payments flows, and quantitative problem solving.",
  },
  {
    title: "Data & Analytics",
    body: "SQL, pandas, and visualization to turn messy datasets into clear decisions.",
  },
  {
    title: "Collaboration",
    body: "Hackathons, team projects, and campus organizations shipping under deadline.",
  },
];

function Index() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <img
          src={heroGradient}
          alt=""
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
            <img
              src={headshot.url}
              alt="Portrait of Eva King-Senior"
              width={400}
              height={400}
              className="h-36 w-36 shrink-0 rounded-full border border-border object-cover shadow-[var(--shadow-soft)]"
            />
            <div>
              <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] sm:text-6xl">
                Eva King-Senior
              </h1>

              <p className="mt-4 text-lg text-muted-foreground">
                Computer Science @ Bowdoin College
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-opacity hover:opacity-90"
            >
              See my work
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-bold">What I bring</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {highlights.map((item) => (
            <article key={item.title} className="surface-card p-6">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6">
        <div className="gradient-soft rounded-[var(--radius-3xl)] px-8 py-12 text-center">
          <h2 className="text-2xl font-bold">Recruiting for summer internships?</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
            My experience, coursework, and project write-ups are a click away.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/experience"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View experience
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              Contact me
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
