import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { label: "Email", href: "mailto:evakingsr@gmail.com", icon: Mail },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/evakingsenior/", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/evakingsr", icon: Github },
] as const;

const nav = [
  { to: "/", label: "Home" },
  { to: "/experience", label: "Experience" },
  { to: "/experience", label: "Education", hash: "education" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const satisfies ReadonlyArray<{ to: string; label: string; hash?: string }>;

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
          <Link to="/" className="font-display text-base font-bold tracking-tight">
            Eva King-Senior
          </Link>
          <nav className="flex flex-wrap items-center gap-1 text-sm">
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                hash={item.hash}
                activeOptions={{ exact: item.to === "/", includeHash: true }}
                className="rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                activeProps={{ className: "bg-secondary text-secondary-foreground" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="mt-24 border-t border-border/60">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Eva King-Senior</p>
          <div className="flex items-center gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="inline-flex size-10 items-center justify-center rounded-full border border-border/70 bg-muted/50 text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
              >
                <Icon className="size-4.5" aria-hidden />
              </a>
            ))}
          </div>
          <p className="text-center sm:text-right">
            Junior at Bowdoin College
            <br />
            Seeking Summer 2027 internships
          </p>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-base text-muted-foreground">{description}</p>
    </div>
  );
}
