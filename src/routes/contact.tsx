import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Eva King-Senior" },
      {
        name: "description",
        content:
          "Reach Eva King-Senior by email or LinkedIn about tech and financial technology internship opportunities.",
      },
      { property: "og:title", content: "Contact — Eva King-Senior" },
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
  { label: "Email", value: "evakingsr@gmail.com", href: "mailto:evakingsr@gmail.com" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/evakingsenior",
    href: "https://www.linkedin.com/in/evakingsenior",
  },
  { label: "GitHub", value: "github.com/evakingsr", href: "https://github.com/evakingsr" },

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
        <div className="grid gap-5 sm:grid-cols-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="surface-card block p-6 transition-transform hover:-translate-y-0.5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                {link.label}
              </p>
              <p className="mt-2 break-words text-sm text-muted-foreground">{link.value}</p>
            </a>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
