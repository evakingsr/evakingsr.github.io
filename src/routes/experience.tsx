import { createFileRoute } from "@tanstack/react-router";
import { Award, Calendar, MapPin } from "lucide-react";
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
    title: "Full-Stack Developer Intern",
    org: "SEO Tech Developer",
    period: "May 2026 to August 2026",
    location: "Remote, New York City, NY",
    summary:
      "Intensive full-stack training program building production-style web apps in cross-functional SCRUM teams.",
    points: [
      "Completed intensive training in data structures, algorithms, technical interviewing, and full-stack development",
      "Designed, built, and tested three full-stack web apps in cross-functional SCRUM teams using React, Flask, and Supabase, integrating OpenAI, Gemini, Plaid, and MediaPipe APIs",
      "Architected the backend for Cura-Motus, an AI powered physical therapy adherence app using real-time pose estimation, awarded Best Architecture and Integration for the program's capstone project",
    ],
  },
  {
    title: "Admissions Operations Assistant",
    org: "Bowdoin College",
    period: "Sept 2025 to Present",
    location: "Brunswick, ME",
    summary:
      "Support daily admissions operations and serve as a first point of contact for prospective students and families.",
    points: [
      "Manage application materials and records to support daily admissions operations",
      "Serve as first point of contact for prospective students and families, providing accurate admissions information",
    ],
  },
  {
    title: "Winter Intern",
    org: "Hunters Point Parks Conservancy",
    period: "Dec 2025 to Jan 2026",
    location: "Long Island City, NY",
    summary:
      "Handled web content migration and prepared environmental datasets for public-facing use.",
    points: [
      "Migrated and restructured blog content across Squarespace sites, preserving data integrity and reducing platform costs",
      "Prepared environmental and water-quality datasets for public-facing web integration",
    ],
  },
  {
    title: "Admissions Intern & Operations Liaison",
    org: "Bowdoin College",
    period: "May 2025 to Aug 2025",
    location: "Brunswick, ME",
    summary:
      "Researched admissions policy questions and led front-desk and campus tour operations.",
    points: [
      "Researched the use of AI in college applications and produced a briefing to inform ethical admissions strategy",
      "Led 100+ campus tours and trained six interns, improving front desk workflows and consistency",
    ],
  },

  {
    title: "Summer Intern",
    org: "Hunters Point Parks Conservancy",
    period: "May 2024 to Aug 2024",
    location: "Long Island City, NY",
    summary:
      "Improved website accessibility and navigation while managing public program content.",
    points: [
      "Updated and wireframed websites, improving accessibility, navigation, and content visibility",
      "Managed content updates and page structure for public-facing programs and events",
    ],
  },
];


const education = [
  {
    school: "Bowdoin College",
    degree: "Bachelor of Arts in Computer Science, Minor in Latin American & Caribbean Studies",
    period: "Expected May 2028",
    location: "Brunswick, ME",
    courses: [
      "Introduction to Digital and Computational Studies",
      "Data Structures I",
      "Data Structures II",
      "Human-Computer Interaction",
      "Algorithms (Fall 2026)",
      "Math Foundations of Computer Science (Fall 2026)",
    ],
  },
  {
    school: "DIS Copenhagen",
    degree: "Study Abroad, Spring 2027",
    period: "Spring 2027",
    location: "Copenhagen, Denmark",
    courses: ["Complex Networks (core course)", "Artificial Intelligence"],
  },
  {
    school: "Bard College, via Bard High School Early College",
    degree: "Associate of Arts in Liberal Arts and Science",
    period: "June 2024",
    location: "Queens, NY",
    courses: [
      "Calculus-Based Physics I & II",
      "Physics: Sound & Music",
      "Physics: Spacetime & Lightspeed",
      "Calculus I & II",
    ],
  },
];

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
    detail: "Data structures, algorithms, and interview problem solving",
  },
  {
    title: "HTML & CSS Certification",
    issuer: "Girls Who Code",
    detail: "Issued July 2023 | Wireframing, HTML, CSS",
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
        <h2 className="text-2xl font-bold">Work experience</h2>
        <div className="mt-8 space-y-6">
          {roles.map((role) => (
            <article
              key={`${role.org}-${role.title}`}
              className="surface-card group relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 sm:p-8"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 z-10 h-1 scale-x-0 bg-gradient-to-r from-primary via-accent to-berry transition-transform duration-300 group-hover:scale-x-100"
              />
              <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_1.6fr] md:gap-10">
                <div className="min-w-0">
                  <h3 className="text-xl font-bold leading-snug text-primary">{role.title}</h3>
                  <p className="mt-1 text-base font-semibold">{role.org}</p>
                  <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={15} className="shrink-0" aria-hidden="true" />
                    {role.period}
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={15} className="shrink-0" aria-hidden="true" />
                    {role.location}
                  </p>
                </div>
                <div className="min-w-0">
                  <p className="text-sm leading-relaxed text-muted-foreground">{role.summary}</p>
                  <p className="mt-5 text-sm font-semibold">Key achievements:</p>
                  <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                    {role.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

      </section>

      <section id="education" className="mx-auto max-w-5xl scroll-mt-24 px-6 pb-14">
        <h2 className="text-2xl font-bold">Education</h2>
        <div className="mt-6 space-y-5">
          {education.map((school) => (
            <article
              key={school.school}
              className="surface-card group relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 z-10 h-1 scale-x-0 bg-gradient-to-r from-primary via-accent to-berry transition-transform duration-300 group-hover:scale-x-100"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">{school.school}</h3>
                <p className="text-sm text-muted-foreground">{school.period}</p>
              </div>
              <p className="mt-1 text-sm font-medium text-primary">{school.degree}</p>
              <p className="mt-1 text-sm text-muted-foreground">{school.location}</p>
              <p className="mt-4 text-sm font-semibold">Relevant coursework:</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {school.courses.map((course) => (
                  <li
                    key={course}
                    className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                  >
                    {course}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold">Skills</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.group}
              className="surface-card group relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 z-10 h-1 scale-x-0 bg-gradient-to-r from-primary via-accent to-berry transition-transform duration-300 group-hover:scale-x-100"
              />
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

      <section className="mx-auto max-w-5xl px-6 py-14">
        <h2 className="text-2xl font-bold">Certifications</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="surface-card group relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 z-10 h-1 scale-x-0 bg-gradient-to-r from-primary via-accent to-berry transition-transform duration-300 group-hover:scale-x-100"
              />
              <span className="gradient-soft absolute inset-y-0 left-0 w-1.5" aria-hidden="true" />
              <div className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent/60 text-accent-foreground">
                  <Award size={20} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-bold leading-snug">{cert.title}</h3>
                  <p className="mt-0.5 text-sm font-semibold text-primary">{cert.issuer}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{cert.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </SiteLayout>
  );
}
