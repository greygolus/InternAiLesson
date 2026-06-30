import { Badge } from "@/components/ui/badge";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  badge?: string;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, description, badge, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/8">
      <div className="absolute left-1/2 top-[-18rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-primary/8 blur-[120px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-24">
        <div className="flex flex-wrap items-center gap-3">
          <p className="technical-label text-primary">{eyebrow}</p>
          {badge ? <Badge variant="outline" className="border-primary/30 bg-primary/5 font-mono text-[10px] uppercase tracking-widest text-primary">{badge}</Badge> : null}
        </div>
        <h1 className="display-section blue-text-glow mt-8 max-w-6xl text-white">{title}</h1>
        <div className="mt-8 grid gap-8 border-t border-white/12 pt-6 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">{description}</p>
          {children}
        </div>
      </div>
    </section>
  );
}
