import { createFileRoute, Link } from "@tanstack/react-router";
import heroGradient from "@/assets/hero-gradient.jpg";
import headshot from "@/assets/headshot.jpg.asset.json";
import { Github, Linkedin, Mail } from "lucide-react";


import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eva King-Senior | Tech & Fintech Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Eva King-Senior: software and fintech projects, experience, skills, and contact details for internship recruiters.",
      },
      { property: "og:title", content: "Eva King-Senior | Tech & Fintech Portfolio" },
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
    body: "Python, TypeScript, and React for building full-stack apps from data model to interface.",
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

const campusRoles = [
  { title: "Co-President", org: "Smart Woman Securities" },
  { title: "Treasurer", org: "Bowdoin Women in Computer Science" },
  { title: "Co-Founder & Captain", org: "Bowdoin Women's Club Flag Football" },
  { title: "Operations Assistant", org: "Bowdoin Office of Admissions" },
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

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/projects"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-opacity hover:opacity-90"
            >
              See my work
            </Link>
            <Link
              to="/contact"
              className="rounded-full bg-berry px-5 py-2.5 text-sm font-medium text-berry-foreground shadow-[var(--shadow-soft)] transition-opacity hover:opacity-90"
            >
              Get in touch
            </Link>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://github.com/evakingsr"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="rounded-full border border-border bg-card p-3 text-foreground shadow-[var(--shadow-soft)] transition-colors hover:bg-muted hover:text-primary"
            >
              <Github size={20} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/evakingsenior"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-full border border-border bg-card p-3 text-foreground shadow-[var(--shadow-soft)] transition-colors hover:bg-muted hover:text-primary"
            >
              <Linkedin size={20} aria-hidden="true" />
            </a>
            <a
              href="mailto:evakingsr@gmail.com"
              aria-label="Email Eva King-Senior"
              className="rounded-full border border-border bg-card p-3 text-foreground shadow-[var(--shadow-soft)] transition-colors hover:bg-muted hover:text-primary"
            >
              <Mail size={20} aria-hidden="true" />
            </a>
          </div>


        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pt-20">
        <h2 className="text-2xl font-bold">About me</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 text-muted-foreground">
            <p>
              I&apos;m a junior at Bowdoin College majoring in Computer Science with a minor in
              Latin American and Caribbean Studies. I&apos;m drawn to work that pairs
              problem-solving and building with real-world impact — especially in fintech and
              data, where good engineering and clear analysis change how people make decisions.
            </p>
            <p>
              Just as much as the technical side, I care about the people I build with. Between
              leading campus organizations and collaborating on team projects, I&apos;ve learned
              that the best solutions come from groups that communicate well and share ownership.
            </p>
          </div>
          <div className="surface-card p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide">On campus</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {campusRoles.map((role) => (
                <li key={role.org}>
                  <span className="font-medium text-foreground">{role.title}</span>
                  <br />
                  {role.org}
                </li>
              ))}
            </ul>
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
