import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience & Skills | Eva King-Senior" },
      {
        name: "description",
        content:
          "Work experience, education, coursework, leadership, and technical skills of Eva King-Senior, tech and fintech internship candidate.",
      },
      { property: "og:title", content: "Experience & Skills | Eva King-Senior" },
      {
        property: "og:description",
        content: "Roles, education, and the technical toolkit behind my work.",
      },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: ExperiencePage,
});

const roles = [
  {
    period: "Summer 2026",
    title: "Software Engineering Intern",
    org: "Company name",
    points: [
      "Add a one-line summary of what the team built and your role in it.",
      "Quantify impact where you can: users served, latency cut, hours saved.",
    ],
  },
  {
    period: "2025 to Present",
    title: "Undergraduate Research / Campus Role",
    org: "Organization name",
    points: [
      "Describe the technical problem you worked on.",
      "Note the tools and languages you used day to day.",
    ],
  },
];

const education = {
  school: "University name",
  degree: "B.S. in Computer Science, expected 2028",
  detail: "Relevant coursework: Data Structures, Algorithms, Databases, Financial Markets.",
};

const skills = [
  { group: "Languages", items: ["Java", "Python", "JavaScript", "HTML", "CSS", "SQL"] },
  { group: "Frameworks & Methods", items: ["Flask", "Wireframing"] },
  {
    group: "Software",
    items: ["Visual Studio Code", "IntelliJ IDEA CE", "IDLE", "Wing 101", "Codio"],
  },
];

const certifications = [
  {
    title: "Intermediate Technical Interview Prep Course",
    issuer: "CodePath",
  },
  {
    title: "HTML & CSS Certification",
    issuer: "Girls Who Code, issued July 2023",
  },
];


function ExperiencePage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Background"
        title="Experience & skills"
        description="A resume-style view of where I've worked, what I've studied, and the tools I reach for."
      />

      <section className="mx-auto max-w-5xl px-6 py-14">
        <h2 className="text-2xl font-bold">Experience</h2>
        <div className="mt-8 space-y-5">
          {roles.map((role) => (
            <article key={role.title} className="surface-card p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                {role.period}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{role.title}</h3>
              <p className="text-sm text-muted-foreground">{role.org}</p>
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-14">
        <h2 className="text-2xl font-bold">Education</h2>
        <article className="surface-card mt-6 p-6">
          <h3 className="text-lg font-semibold">{education.school}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{education.degree}</p>
          <p className="mt-3 text-sm text-muted-foreground">{education.detail}</p>
        </article>
      </section>

      <section className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold">Skills</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill.group} className="surface-card p-6">
              <h3 className="text-sm font-semibold">{skill.group}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
