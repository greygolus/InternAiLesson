import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type RouteCardProps = {
  code: string;
  href: string;
  title: string;
  description: string;
  meta: string;
};

export function RouteCard({ code, href, title, description, meta }: RouteCardProps) {
  return (
    <Link
      href={href}
      className="group edge-frame relative flex min-h-64 flex-col overflow-hidden border border-white/12 bg-black/30 p-6 transition-colors hover:border-primary/60 hover:bg-primary/[0.035]"
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-xs text-primary/70">{code}</span>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
      </div>
      <div className="mt-auto">
        <p className="technical-label mb-3">{meta}</p>
        <h2 className="text-3xl font-normal tracking-[-0.04em] text-white">{title}</h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
}
