import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";

import { sendContactMessage } from "@/lib/contact.functions";

const inputClasses =
  "mt-2 w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

const details = [
  { icon: Mail, label: "Email", value: "evakingsr@gmail.com", href: "mailto:evakingsr@gmail.com" },
  { icon: Phone, label: "Phone", value: "646-460-3161", href: "tel:+16464603161" },
  { icon: MapPin, label: "Location", value: "Brunswick, Maine", href: null },
];

export function GetInTouch() {
  const submit = useServerFn(sendContactMessage);
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setPending(true);
    try {
      const result = await submit({
        data: {
          name: String(formData.get("name") ?? ""),
          email: String(formData.get("email") ?? ""),
          subject: String(formData.get("subject") ?? ""),
          message: String(formData.get("message") ?? ""),
        },
      });
      if (result.ok) {
        toast.success("Message sent. Thanks for reaching out!");
        form.reset();
      } else {
        toast.error(result.error);
      }
    } catch {
      toast.error("Please check the form and try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
        <h2 className="mt-2 text-3xl font-bold">Get in touch</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
          I am seeking summer 2027 software and fintech internships, and I would love to talk about
          how I can contribute to your team.
        </p>
        <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
          <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
          Available for summer 2027
        </span>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="surface-card p-8">
          <h3 className="text-xl font-semibold">Reach me directly</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Questions, opportunities, or just want to say hello? I will get back to you as soon as I
            can.
          </p>

          <ul className="mt-7 space-y-5">
            {details.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="surface-card p-8">
          <h3 className="text-xl font-semibold">Send a message</h3>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium">
              Name
              <input name="name" required maxLength={100} placeholder="Your name" className={inputClasses} />
            </label>
            <label className="block text-sm font-medium">
              Email
              <input
                name="email"
                type="email"
                required
                maxLength={255}
                placeholder="your.email@example.com"
                className={inputClasses}
              />
            </label>
          </div>

          <label className="mt-4 block text-sm font-medium">
            Subject
            <input name="subject" maxLength={150} placeholder="What's this about?" className={inputClasses} />
          </label>

          <label className="mt-4 block text-sm font-medium">
            Message
            <textarea
              name="message"
              required
              rows={5}
              maxLength={2000}
              placeholder="Your message here..."
              className={`${inputClasses} resize-y`}
            />
          </label>

          <button
            type="submit"
            disabled={pending}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--berry)] px-6 py-3 text-sm font-medium text-[var(--berry-foreground)] shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send size={16} aria-hidden="true" />
            {pending ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}
