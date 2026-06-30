import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { PrintGuideButton } from "@/components/print-guide-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { resourceGuides, type ResourceGuide } from "@/lib/resource-guides";

type ResourceGuidePageProps = {
  guide: ResourceGuide;
};

export function ResourceGuidePage({ guide }: ResourceGuidePageProps) {
  const index = resourceGuides.findIndex((item) => item.slug === guide.slug);
  const previous = index > 0 ? resourceGuides[index - 1] : undefined;
  const next = index < resourceGuides.length - 1 ? resourceGuides[index + 1] : undefined;

  return (
    <article className="resource-print">
      <PageHero
        eyebrow={`${guide.code} // Resource guide`}
        title={guide.title}
        description={guide.description}
        badge="Updated June 2026"
      >
        <div className="print-hide flex flex-wrap gap-3">
          <Button asChild variant="ghost" className="rounded-none text-muted-foreground hover:text-white">
            <Link href="/resources"><ArrowLeft className="mr-2 h-4 w-4" /> All resources</Link>
          </Button>
          <PrintGuideButton />
        </div>
      </PageHero>

      <div className="mx-auto max-w-[1500px] px-5 py-14 sm:px-8">
        <div className="grid gap-10 xl:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="print-hide xl:sticky xl:top-24 xl:self-start">
            <p className="technical-label text-primary">On this page</p>
            <nav className="mt-4 border-y border-white/10 py-3" aria-label="Guide sections">
              {guide.sections.map((section, sectionIndex) => (
                <a key={section.title} href={`#section-${sectionIndex + 1}`} className="block border-b border-white/7 px-2 py-3 text-sm text-muted-foreground transition-colors last:border-0 hover:text-white">
                  <span className="mr-3 font-mono text-[10px] text-primary/70">{String(sectionIndex + 1).padStart(2, "0")}</span>
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="min-w-0">
            <section className="edge-frame border border-primary/30 bg-primary/[0.055] p-6 sm:p-8">
              <p className="technical-label text-primary">Bottom line</p>
              <p className="mt-4 max-w-4xl text-xl leading-relaxed text-white sm:text-2xl">{guide.takeaway}</p>
            </section>

            <div className="mt-12 space-y-16">
              {guide.sections.map((section, sectionIndex) => (
                <section key={section.title} id={`section-${sectionIndex + 1}`} className="resource-section scroll-mt-24">
                  <div className="border-b border-white/12 pb-5">
                    <p className="technical-label text-primary">{String(sectionIndex + 1).padStart(2, "0")}{" // "}{section.eyebrow}</p>
                    <h2 className="mt-3 text-4xl tracking-[-0.045em] text-white sm:text-5xl">{section.title}</h2>
                    {section.intro ? <p className="mt-4 max-w-4xl text-base leading-relaxed text-muted-foreground sm:text-lg">{section.intro}</p> : null}
                  </div>

                  {section.image ? (
                    <figure className="mt-7 border border-white/12 bg-white p-3 sm:p-6">
                      <Image src={section.image.src} alt={section.image.alt} width={1600} height={1000} className="h-auto w-full" />
                      <figcaption className="mt-4 text-center text-xs leading-relaxed text-slate-600">{section.image.caption}</figcaption>
                    </figure>
                  ) : null}

                  {section.cards ? (
                    <div className="mt-7 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
                      {section.cards.map((card, cardIndex) => (
                        <div key={card.title} className="min-h-48 bg-black/70 p-6">
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="text-2xl tracking-[-0.03em] text-white">{card.title}</h3>
                            <span className="font-mono text-[10px] text-primary/70">{String(cardIndex + 1).padStart(2, "0")}</span>
                          </div>
                          {card.tag ? <Badge variant="outline" className="mt-4 rounded-none border-primary/25 font-mono text-[10px] uppercase tracking-widest text-primary">{card.tag}</Badge> : null}
                          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {section.table ? (
                    <div className="mt-7 overflow-x-auto border border-white/12">
                      <table className="w-full min-w-[720px] border-collapse text-left">
                        <thead className="bg-primary/[0.08]">
                          <tr>
                            {section.table.headers.map((header) => <th key={header} className="border-b border-white/12 p-4 font-mono text-[10px] uppercase tracking-[0.14em] text-primary">{header}</th>)}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/8">
                          {section.table.rows.map((row) => (
                            <tr key={row.join("-")} className="bg-black/45 align-top">
                              {row.map((cell, cellIndex) => <td key={`${cell}-${cellIndex}`} className={`p-4 text-sm leading-relaxed ${cellIndex === 0 ? "text-white" : "text-muted-foreground"}`}>{cell}</td>)}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : null}

                  {section.steps ? (
                    <ol className="mt-7 divide-y divide-white/10 border-y border-white/10">
                      {section.steps.map((step, stepIndex) => (
                        <li key={step.title} className="grid gap-4 py-6 sm:grid-cols-[60px_220px_1fr] sm:items-start">
                          <span className="font-mono text-xs text-primary">{String(stepIndex + 1).padStart(2, "0")}</span>
                          <h3 className="text-xl text-white">{step.title}</h3>
                          <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                        </li>
                      ))}
                    </ol>
                  ) : null}

                  {section.bullets ? (
                    <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 border border-white/10 bg-black/40 p-4 text-sm leading-relaxed text-muted-foreground">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>

            <section className="mt-16 border-t border-white/12 pt-8">
              <p className="technical-label text-primary">Official sources</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {guide.sources.map((source) => (
                  <Button key={source.href} asChild variant="outline" className="rounded-none border-white/15 bg-transparent">
                    <a href={source.href} target={source.href.startsWith("http") ? "_blank" : undefined} rel={source.href.startsWith("http") ? "noreferrer" : undefined} download={source.href === "/ai-city.svg" ? true : undefined}>
                      {source.label} {source.href === "/ai-city.svg" ? <Download className="ml-2 h-3.5 w-3.5" /> : <ArrowUpRight className="ml-2 h-3.5 w-3.5" />}
                    </a>
                  </Button>
                ))}
              </div>
            </section>

            <nav className="print-hide mt-16 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2" aria-label="Resource guide navigation">
              {previous ? (
                <Link href={`/resources/${previous.slug}`} className="group bg-black/80 p-6 transition-colors hover:bg-primary/[0.05]">
                  <p className="technical-label"><ArrowLeft className="mr-2 inline h-3.5 w-3.5" /> Previous</p>
                  <p className="mt-3 text-xl text-white group-hover:text-primary">{previous.title}</p>
                </Link>
              ) : <div className="hidden bg-black/80 sm:block" />}
              {next ? (
                <Link href={`/resources/${next.slug}`} className="group bg-black/80 p-6 text-right transition-colors hover:bg-primary/[0.05]">
                  <p className="technical-label">Next <ArrowRight className="ml-2 inline h-3.5 w-3.5" /></p>
                  <p className="mt-3 text-xl text-white group-hover:text-primary">{next.title}</p>
                </Link>
              ) : (
                <Link href="/resources" className="group bg-black/80 p-6 text-right transition-colors hover:bg-primary/[0.05]">
                  <p className="technical-label">Finish <ArrowRight className="ml-2 inline h-3.5 w-3.5" /></p>
                  <p className="mt-3 text-xl text-white group-hover:text-primary">Back to all resources</p>
                </Link>
              )}
            </nav>
          </div>
        </div>
      </div>
    </article>
  );
}
