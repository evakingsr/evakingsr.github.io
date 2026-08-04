import { createFileRoute } from "@tanstack/react-router";
import { Coffee, Github, Linkedin, Mail, MapPin, MessageSquareHeart, Sparkles } from "lucide-react";
import { PageHeader, SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Eva King-Senior" },
      {
        name: "description",
        content:
          "Reach Eva King-Senior by email or LinkedIn about tech and financial technology internship opportunities.",
      },
      { property: "og:title", content: "Contact | Eva King-Senior" },
      {
        property: "og:description",
        content: "Email and LinkedIn for internship conversations.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const links = [
  {
    label: "Email",
    value: "evakingsr@gmail.com",
    href: "mailto:evakingsr@gmail.com",
    icon: Mail,
    note: "Best for anything detailed",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/evakingsenior",
    href: "https://www.linkedin.com/in/evakingsenior",
    icon: Linkedin,
    note: "Say hi, connect, or refer",
  },
  {
    label: "GitHub",
    value: "github.com/evakingsr",
    href: "https://github.com/evakingsr",
    icon: Github,
    note: "Peek at what I'm building",
  },
];

const funFacts = [
  { icon: MapPin, text: "Currently in Brunswick, Maine (and yes, it's cold)" },
  { icon: Coffee, text: "Powered by iced coffee and a very full Google Calendar" },
  { icon: Sparkles, text: "Ask me about backtracking, budgeting apps, or flag football" },
];

function ContactPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Say hello"
        title="Contact"
        description="I'd love to talk about internship openings, referrals, or anything you're building."
      />
      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-available-soft px-4 py-1.5 text-sm font-medium text-available-foreground">
            <span className="h-2 w-2 animate-pulse rounded-full bg-available" aria-hidden="true" />
            Available for summer 2027
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
            <MessageSquareHeart className="size-4" aria-hidden="true" />
            Usually replies within a day
          </span>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {links.map(({ label, value, href, icon: Icon, note }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="surface-card group relative block overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-gradient-to-r from-primary via-accent to-berry transition-transform duration-300 group-hover:scale-x-100"
              />
              <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                <Icon className="size-5" aria-hidden />
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                {label}
              </p>
              <p className="mt-2 break-words text-sm text-muted-foreground">{value}</p>
              <p className="mt-3 text-xs text-muted-foreground/80">{note}</p>
            </a>
          ))}
        </div>

        <div className="surface-card mt-8 p-7 sm:p-9">
          <h2 className="text-lg font-semibold tracking-tight">A few things about me</h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-3">
            {funFacts.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3 text-sm text-muted-foreground">
                <Icon className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}
