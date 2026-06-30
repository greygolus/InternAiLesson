import { ArrowRight, Clock3, Database, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { RouteCard } from "@/components/route-card";
import { Button } from "@/components/ui/button";

const routeCards = [
  {
    code: "01",
    href: "/lesson",
    title: "The Lesson",
    meta: "Instructor mode // 60 minutes",
    description: "The live lecture, AI City map, class sequence, and eventually the complete recording.",
  },
  {
    code: "02",
    href: "/prompt",
    title: "G-O-L-U-S",
    meta: "Interactive lab // autosaves",
    description: "Build a useful prompt one layer at a time: Goal, Output, Limits, Understanding, and Style.",
  },
  {
    code: "03",
    href: "/workflow",
    title: "Workflow Planner",
    meta: "Project blueprint // markdown",
    description: "Turn an AI idea into a practical plan with tools, connectors, skills, verification, and a first move.",
  },
  {
    code: "04",
    href: "/memd",
    title: "Build Me.md",
    meta: "Private // browser local",
    description: "Create the personal context file that teaches your AI who you are and how to work with you.",
  },
  {
    code: "05",
    href: "/setup",
    title: "Pre-Class Setup",
    meta: "Required // Windows + macOS",
    description: "Prepare Claude Pro, Cowork, Obsidian, your starter vault, connectors, Chrome, and computer access.",
  },
  {
    code: "06",
    href: "/resources",
    title: "Go Deeper",
    meta: "Optional // after class",
    description: "AI models, harnesses, Obsidian, GitHub, Vercel, MCP, APIs, skills, and future-proofing.",
  },
];

const timeline = [
  ["00–08", "Orient"],
  ["08–18", "Map"],
  ["18–30", "Prompt"],
  ["30–45", "Build"],
  ["45–57", "Plan"],
  ["57–60", "Run"],
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-4.5rem)] overflow-hidden border-b border-white/8">
        <div className="absolute left-1/2 top-[42%] h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[110px]" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[calc(100vh-4.5rem)] max-w-[1500px] flex-col px-5 py-12 sm:px-8 sm:py-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="technical-label">Workshop · Claude Cowork · Obsidian</p>
            <p className="technical-label text-primary/80">Public build // v0.1</p>
          </div>

          <div className="my-auto py-16 text-center">
            <p className="mb-7 text-xs uppercase tracking-[0.42em] text-muted-foreground">Context · Skills · Workflows · Automation</p>
            <h1 className="display-title blue-text-glow mx-auto max-w-[1320px] text-white">
              Build Your
              <br />
              Personal AI System
            </h1>
            <p className="mx-auto mt-9 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              AI is more than a chatbot. Build a system that understands your context and handles repeatable work.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-none bg-white px-7 text-black hover:bg-primary">
                <Link href="/lesson">Enter the lesson <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-none border-white/20 bg-transparent px-7 hover:border-primary/60 hover:bg-primary/8">
                <Link href="/setup">Check your setup</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
            <div className="flex items-center gap-3 bg-black/80 p-4"><Clock3 className="h-4 w-4 text-primary" /><span className="technical-label">60 minute workshop</span></div>
            <div className="flex items-center gap-3 bg-black/80 p-4"><Database className="h-4 w-4 text-primary" /><span className="technical-label">Files stay local</span></div>
            <div className="flex items-center gap-3 bg-black/80 p-4"><ShieldCheck className="h-4 w-4 text-primary" /><span className="technical-label">No learner account</span></div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/8">
        <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="technical-label text-primary">[ 01 Course map ]</p>
              <h2 className="display-section mt-5 text-white">One system.<br />Six surfaces.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground lg:justify-self-end">
              The class is one connected build. Learn the map, improve a prompt, schedule a real workflow, then leave with a plan and durable context on your own laptop.
            </p>
          </div>

          <div className="mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
            {routeCards.map((card) => (
              <RouteCard key={card.href} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8">
          <p className="technical-label text-primary">[ 02 Run of show ]</p>
          <div className="mt-8 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3 xl:grid-cols-6">
            {timeline.map(([time, label], index) => (
              <div key={time} className="bg-black/85 p-5">
                <span className="font-mono text-[10px] text-primary/70">0{index + 1}</span>
                <p className="mt-8 font-mono text-xs text-muted-foreground">{time} MIN</p>
                <p className="mt-2 text-xl text-white">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
