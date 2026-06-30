import type { Metadata } from "next";
import { ArrowUpRight, BookOpen, Boxes, Braces, Download, GitBranch, Orbit, PanelsTopLeft } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Resources",
};

const resources = [
  { icon: Orbit, title: "AI models", description: "Durable ways to compare capability, speed, cost, context, and privacy without chasing every model name.", status: "Remake planned" },
  { icon: PanelsTopLeft, title: "Choosing a harness", description: "When Chat, Cowork, Code, or Codex fits—and why the harness and model are separate choices.", status: "Remake planned" },
  { icon: Boxes, title: "Anatomy of a harness", description: "Context, tools, connectors, MCP, APIs, and skills in plain language.", status: "Remake planned" },
  { icon: BookOpen, title: "Obsidian basics", description: "Navigate the vault, use links and tags, capture rough notes, and keep AI-generated context organized.", status: "Coming next" },
  { icon: GitBranch, title: "GitHub + Vercel", description: "Optional starter path for publishing projects after the workshop—not required before class.", status: "Coming next" },
  { icon: Braces, title: "Keep up without drowning", description: "Own your context, prefer portable formats, and update only what changes your actual workflow.", status: "Remake planned" },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="06 // Optional depth"
        title="Go further when it matters."
        description="The live class covers enough to start. These resources are for the people who want the deeper map, stronger setups, and more technical paths afterward."
        badge="Web first + PDF later"
      />

      <div className="mx-auto max-w-[1500px] px-5 py-14 sm:px-8">
        <section className="edge-frame mb-12 grid gap-8 border border-primary/30 bg-primary/[0.055] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="technical-label text-primary">Class download // Ready</p>
            <h2 className="mt-3 text-3xl tracking-[-0.04em] text-white">Grey&apos;s Intro to AI starter vault</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              A sanitized Obsidian workspace with the ACE + AIOS structure, class checklist, lesson context, Daily Brief skill, and activity destinations. It contains no learner account or personal data.
            </p>
          </div>
          <Button asChild className="h-12 rounded-none px-6">
            <a href="/downloads/greys-intro-to-ai-starter-vault.zip" download>
              <Download className="mr-2 h-4 w-4" /> Download starter vault
            </a>
          </Button>
        </section>

        <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <article key={resource.title} className="group min-h-72 bg-black/85 p-6 transition-colors hover:bg-primary/[0.035]">
                <div className="flex items-start justify-between"><Icon className="h-5 w-5 text-primary" /><span className="font-mono text-[10px] text-muted-foreground">0{index + 1}</span></div>
                <div className="mt-16">
                  <Badge variant="outline" className="rounded-none border-white/15 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{resource.status}</Badge>
                  <h2 className="mt-4 flex items-center gap-2 text-3xl tracking-[-0.04em] text-white">{resource.title}<ArrowUpRight className="h-4 w-4 text-muted-foreground" /></h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{resource.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 border border-primary/25 bg-primary/[0.045] p-6 sm:p-8">
          <p className="technical-label text-primary">Resource policy</p>
          <p className="mt-3 max-w-3xl text-lg leading-relaxed text-muted-foreground">Every guide will be rebuilt as a readable web page first, then offered as a dated PDF download. The old PDFs are source material—not final content.</p>
        </div>
      </div>
    </>
  );
}
