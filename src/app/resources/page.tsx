import type { Metadata } from "next";
import { ArrowUpRight, BookOpen, Boxes, Braces, Download, GitBranch, Map, Orbit, PanelsTopLeft } from "lucide-react";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Resources",
};

const resources = [
  { icon: Orbit, href: "/resources/models", title: "AI models", description: "Compare capability, speed, cost, context, and privacy without chasing every model name.", status: "Live guide" },
  { icon: PanelsTopLeft, href: "/resources/harnesses", title: "Choosing a harness", description: "When Chat, Cowork, Code, or Codex fits - and why harness and model are separate choices.", status: "Live guide" },
  { icon: Boxes, href: "/resources/anatomy", title: "Anatomy of a harness", description: "Context, tools, connectors, plugins, MCP, APIs, skills, and automation in plain language.", status: "Live guide" },
  { icon: Braces, href: "/resources/future-proof", title: "Keep up without drowning", description: "Own your context, prefer portable formats, and update only what changes your workflow.", status: "Live guide" },
  { icon: BookOpen, href: "/resources/obsidian", title: "Obsidian basics", description: "Navigate the vault, link notes, use properties and templates, and give AI a useful workspace.", status: "Live guide" },
  { icon: GitBranch, href: "/resources/github-vercel", title: "GitHub + Vercel", description: "A safe beginner path from a local project folder to a real public website.", status: "Live guide" },
  { icon: Map, href: "/resources/ai-city", title: "AI is like a city", description: "The complete analogy for models, harnesses, context, access, skills, and automation.", status: "Live guide" },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="06 // Optional depth"
        title="Go further when it matters."
        description="The live class covers enough to start. These resources are for the people who want the deeper map, stronger setups, and more technical paths afterward."
        badge="Seven live guides"
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
              <Link key={resource.title} href={resource.href} className="group min-h-72 bg-black/85 p-6 transition-colors hover:bg-primary/[0.035]">
                <div className="flex items-start justify-between"><Icon className="h-5 w-5 text-primary" /><span className="font-mono text-[10px] text-muted-foreground">0{index + 1}</span></div>
                <div className="mt-16">
                  <Badge variant="outline" className="rounded-none border-white/15 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{resource.status}</Badge>
                  <h2 className="mt-4 flex items-center gap-2 text-3xl tracking-[-0.04em] text-white">{resource.title}<ArrowUpRight className="h-4 w-4 text-muted-foreground" /></h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{resource.description}</p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 border border-primary/25 bg-primary/[0.045] p-6 sm:p-8">
          <p className="technical-label text-primary">Resource policy</p>
          <p className="mt-3 max-w-3xl text-lg leading-relaxed text-muted-foreground">Every guide is a readable web page first. Use “Print / Save PDF” on any guide for a dated offline copy. The old PDFs remain source material, not final content.</p>
        </div>
      </div>
    </>
  );
}
