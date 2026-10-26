import { ArrowUpRight, Award } from "lucide-react";

const certifications = [
  {
    name: "System X Authorized Installer",
    description: "Kevin's official System X Authorized Installer certificate.",
    href: "/certifications/system-x-authorized-installer.pdf",
  },
  {
    name: "Gtechniq Accredited",
    description: "Kevin's official Gtechniq Accredited certificate.",
    href: "/certifications/gtechniq-accredited.pdf",
  },
];

export function CertificationCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {certifications.map(({ name, description, href }) => (
        <article
          key={name}
          className="flex h-full flex-col rounded-2xl border border-border bg-white p-5 sm:p-6"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand/15 text-brand">
              <Award className="h-5 w-5" />
            </span>
            <h3 className="text-base font-extrabold text-ink">{name}</h3>
          </div>

          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-10 items-center gap-2 self-start rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground transition hover:bg-brand/90"
          >
            View Certificate <ArrowUpRight className="h-4 w-4" />
          </a>
        </article>
      ))}
    </div>
  );
}
