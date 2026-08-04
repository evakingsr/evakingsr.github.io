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

const skillGroups = [
  {
    group: "Programming Languages",
    items: ["Java", "Python", "JavaScript", "HTML", "CSS", "SQL", "Flask", "Wireframing"],
  },
  {
    group: "Software & Tools",
    items: ["Visual Studio Code", "IntelliJ IDEA CE", "IDLE", "Wing 101", "Codio"],
  },
];

const certifications = [
  {
    title: "Intermediate Technical Interview Prep Course",
    issuer: "CodePath",
    meta: "Data structures, algorithms, and interview problem solving",
  },
  {
    title: "HTML & CSS Certification",
    issuer: "Girls Who Code",
    meta: "Issued July 2023 | Wireframing, HTML, CSS",
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
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center sm:py-32">
          <div className="mx-auto w-fit rounded-full bg-card/70 p-1.5 shadow-[var(--shadow-soft)] ring-1 ring-border backdrop-blur">
            <img
              src={headshot.url}
              alt="Portrait of Eva King-Senior"
              width={400}
              height={400}
              className="h-40 w-40 rounded-full object-cover"
            />
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-[1.05] sm:text-6xl">
            Eva King-Senior
          </h1>
          <p className="mt-4 inline-flex rounded-full border border-border bg-card/70 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur">
            Computer Science @ Bowdoin College
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/projects"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 hover:opacity-90"
            >
              See my work
            </Link>
            <Link
              to="/contact"
              className="rounded-full bg-berry px-6 py-3 text-sm font-medium text-berry-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 hover:opacity-90"
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
              className="rounded-full border border-border bg-card p-3 text-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:bg-muted hover:text-primary"
            >
              <Github size={20} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/evakingsenior"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-full border border-border bg-card p-3 text-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:bg-muted hover:text-primary"
            >
              <Linkedin size={20} aria-hidden="true" />
            </a>
            <a
              href="mailto:evakingsr@gmail.com"
              aria-label="Email Eva King-Senior"
              className="rounded-full border border-border bg-card p-3 text-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:bg-muted hover:text-primary"
            >
              <Mail size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pt-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          About
        </p>
        <h2 className="mt-2 text-3xl font-bold">About me</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              I&apos;m a junior at Bowdoin College majoring in Computer Science with a minor in
              Latin American and Caribbean Studies. I&apos;m drawn to work that pairs
              problem-solving and building with real-world impact, especially in fintech and
              data, where good engineering and clear analysis change how people make decisions.
            </p>
            <p>
              Just as much as the technical side, I care about the people I build with. Between
              leading campus organizations and collaborating on team projects, I&apos;ve learned
              that the best solutions come from groups that communicate well and share ownership.
            </p>
          </div>
          <div className="surface-card relative overflow-hidden p-6">
            <div className="gradient-soft absolute inset-x-0 top-0 h-1.5" />
            <h3 className="text-sm font-semibold uppercase tracking-wide">On campus</h3>
            <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
              {campusRoles.map((role) => (
                <li key={role.org} className="border-l-2 border-secondary pl-3">
                  <span className="block font-medium text-foreground">{role.title}</span>
                  {role.org}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Toolkit
        </p>
        <h2 className="mt-2 text-3xl font-bold">Technical skills & certifications</h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.group}
              className="surface-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide">{group.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {certifications.map((cert) => (
            <article
              key={cert.title}
              className="surface-card relative overflow-hidden p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="gradient-soft absolute inset-y-0 left-0 w-1.5" />
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <Award size={18} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-semibold leading-snug">{cert.title}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{cert.issuer}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{cert.meta}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>


      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="gradient-soft rounded-[var(--radius-3xl)] px-8 py-14 text-center shadow-[var(--shadow-soft)]">
          <h2 className="text-3xl font-bold">Recruiting for summer internships?</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
            My experience, coursework, and project write-ups are a click away.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/experience"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 hover:opacity-90"
            >
              View experience
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5 hover:bg-muted"
            >
              Contact me
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

