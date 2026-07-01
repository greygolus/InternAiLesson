"use client";

import { AiCityDiagram } from "@/components/ai-city-diagram";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  Database,
  FileText,
  Fullscreen,
  Link2,
  Map,
  Minimize2,
  Network,
  Sparkles,
  Store,
  Workflow,
  Wrench,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Slide = {
  id: string;
  section: string;
  time: string;
  title: string;
  eyebrow: string;
  content: React.ReactNode;
};

const cityConcepts = [
  { icon: Building2, concept: "Models", analogy: "Buildings", detail: "The underlying intelligence" },
  { icon: Store, concept: "Harnesses", analogy: "Storefronts", detail: "Where you actually use it" },
  { icon: Database, concept: "Context", analogy: "Your office", detail: "What the AI knows about you" },
  { icon: FileText, concept: "Prompts", analogy: "Work orders", detail: "What you want done" },
  { icon: BriefcaseBusiness, concept: "Skills", analogy: "Playbooks", detail: "Instructions you can reuse" },
  { icon: Link2, concept: "Connectors", analogy: "Service lines", detail: "Access to outside data" },
  { icon: Network, concept: "MCP", analogy: "A shared adapter", detail: "A standard way to use tools" },
  { icon: CalendarClock, concept: "Automation", analogy: "Standing orders", detail: "Work that repeats for you" },
];

const golus = [
  ["G", "Goal", "What should be true when this is done?"],
  ["O", "Output", "What should the finished thing look like?"],
  ["L", "Limits", "What rules, boundaries, or constraints matter?"],
  ["U", "Understanding", "What context does the AI need?"],
  ["S", "Style", "How should the result sound or feel?"],
];

const slides: Slide[] = [
  {
    id: "orient",
    section: "Orient",
    time: "00:00–00:08",
    eyebrow: "Grey's Intro to AI",
    title: "AI is more than a chatbot.",
    content: (
      <div className="grid gap-px border border-white/12 bg-white/10 md:grid-cols-3">
        {[
          [CircleUserRound, "Your context", "Give it the information that makes the work yours."],
          [BriefcaseBusiness, "Reusable skills", "Save good instructions instead of repeating yourself."],
          [Workflow, "Workflows that run", "Turn one good result into a dependable system."],
        ].map(([Icon, label, detail], index) => {
          const ConceptIcon = Icon as typeof CircleUserRound;
          return (
            <div key={String(label)} className="bg-black/88 p-5 lg:p-7">
              <div className="flex items-center justify-between text-primary">
                <ConceptIcon className="h-5 w-5" />
                <span className="font-mono text-[10px]">0{index + 1}</span>
              </div>
              <h3 className="mt-8 text-xl text-white lg:text-2xl">{String(label)}</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">{String(detail)}</p>
            </div>
          );
        })}
      </div>
    ),
  },
  {
    id: "city",
    section: "Map",
    time: "00:08–00:13",
    eyebrow: "The AI City",
    title: "You need a map.",
    content: (
      <div className="flex min-h-0 flex-col gap-4">
        <p className="max-w-4xl text-base leading-relaxed text-muted-foreground lg:text-xl">
          Not a dictionary. You do not memorize every new tool—you learn which layer you are changing, and why.
        </p>
        <AiCityDiagram className="mx-auto max-h-[58vh] w-full max-w-[1250px] drop-shadow-[0_0_60px_rgba(83,173,255,0.14)]" />
      </div>
    ),
  },
  {
    id: "language",
    section: "Map",
    time: "00:13–00:18",
    eyebrow: "The working vocabulary",
    title: "Eight ideas unlock the whole city.",
    content: (
      <div className="grid gap-px border border-white/12 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {cityConcepts.map(({ icon: Icon, concept, analogy, detail }) => (
          <div key={concept} className="group bg-black/88 p-4 lg:p-5">
            <div className="flex items-center justify-between">
              <Icon className="h-4 w-4 text-primary" />
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-primary/70">{analogy}</span>
            </div>
            <h3 className="mt-5 text-lg text-white lg:text-xl">{concept}</h3>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground lg:text-sm">{detail}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "prompt",
    section: "Prompt",
    time: "00:18–00:30",
    eyebrow: "G-O-L-U-S Prompting",
    title: "Better output starts with a better ask.",
    content: (
      <div className="grid gap-6 lg:grid-cols-[1fr_0.48fr] lg:items-end">
        <div className="grid gap-px border border-white/12 bg-white/10 sm:grid-cols-5">
          {golus.map(([letter, name, question]) => (
            <div key={letter} className="bg-black/88 p-4 lg:p-5">
              <span className="text-4xl font-light text-primary lg:text-5xl">{letter}</span>
              <h3 className="mt-4 text-lg text-white">{name}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{question}</p>
            </div>
          ))}
        </div>
        <div className="border border-primary/30 bg-primary/[0.06] p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">Start lazy</p>
          <p className="mt-3 text-lg text-white">“Make me a daily brief.”</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Then add one useful layer at a time and watch the result become yours.</p>
          <Button asChild className="mt-5 h-10 w-full rounded-none">
            <Link href="/prompt">Open the prompt lab <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    ),
  },
  {
    id: "build",
    section: "Build",
    time: "00:30–00:45",
    eyebrow: "Cowork + Obsidian",
    title: "Turn instructions into infrastructure.",
    content: (
      <div className="grid gap-px border border-white/12 bg-white/10 md:grid-cols-4">
        {[
          [Database, "Open the vault", "Give Cowork one organized source of context."],
          [Wrench, "Read the skill", "See the reusable procedure behind the Daily Brief."],
          [CalendarClock, "Schedule it", "Weekdays at 7:59 AM, with Monday catch-up."],
          [Check, "Inspect the result", "Make sure it captured real work and clear next steps."],
        ].map(([Icon, label, detail], index) => {
          const StepIcon = Icon as typeof Database;
          return (
            <div key={String(label)} className="bg-black/88 p-5 lg:p-6">
              <div className="flex items-center justify-between">
                <StepIcon className="h-5 w-5 text-primary" />
                <span className="font-mono text-[10px] text-primary/65">0{index + 1}</span>
              </div>
              <h3 className="mt-8 text-xl text-white">{String(label)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{String(detail)}</p>
            </div>
          );
        })}
      </div>
    ),
  },
  {
    id: "plan",
    section: "Plan",
    time: "00:45–00:57",
    eyebrow: "Personal Workflow + Q&A",
    title: "Leave with something started.",
    content: (
      <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="border border-white/12 bg-black/70 p-5 lg:p-7">
          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground lg:text-2xl">
            Choose a task, scheduled routine, reusable tool, automation, or continuous project. Then map the pieces it needs before you build.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {["Context", "Harness", "Connectors", "Skills", "Output", "Verification", "First move"].map((item) => (
              <Badge key={item} variant="outline" className="rounded-none border-white/15 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-white/80">{item}</Badge>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between border border-primary/30 bg-primary/[0.06] p-5 lg:p-7">
          <Map className="h-7 w-7 text-primary" />
          <div>
            <p className="mt-8 text-xl text-white">Make the next move obvious.</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">The planner turns an idea into a Markdown plan and a Cowork-ready implementation prompt.</p>
          </div>
          <Button asChild variant="outline" className="mt-6 h-11 rounded-none border-primary/40 bg-transparent">
            <Link href="/workflow">Open the workflow planner <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    ),
  },
  {
    id: "run",
    section: "Run",
    time: "00:57–01:00",
    eyebrow: "The Final Daily Brief",
    title: "Let the system explain what happened.",
    content: (
      <div className="grid gap-px border border-white/12 bg-white/10 md:grid-cols-[1fr_1fr_1fr_auto]">
        {[
          [Sparkles, "Recap the class", "Capture what was actually completed."],
          [Workflow, "Carry work forward", "List anything unfinished as a next step."],
          [CircleUserRound, "Personalize it", "Point every learner to the Me.md builder."],
        ].map(([Icon, label, detail]) => {
          const ResultIcon = Icon as typeof Sparkles;
          return (
            <div key={String(label)} className="bg-black/88 p-5 lg:p-6">
              <ResultIcon className="h-5 w-5 text-primary" />
              <h3 className="mt-7 text-xl text-white">{String(label)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{String(detail)}</p>
            </div>
          );
        })}
        <div className="flex min-w-56 flex-col justify-end bg-primary p-5 text-primary-foreground lg:p-6">
          <Bot className="h-6 w-6" />
          <p className="mt-8 text-xl">Your system gets better as its context gets better.</p>
          <Button asChild variant="secondary" className="mt-5 rounded-none bg-black text-white hover:bg-black/85">
            <Link href="/memd">Build Me.md <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    ),
  },
];

export function LessonDeck() {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const slide = slides[current];

  const goTo = useCallback((index: number) => {
    setCurrent(Math.max(0, Math.min(index, slides.length - 1)));
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const previous = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      if (target?.matches("input, textarea, select, [contenteditable='true']")) return;

      if (["ArrowRight", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        next();
      }
      if (["ArrowLeft", "PageUp"].includes(event.key)) {
        event.preventDefault();
        previous();
      }
      if (event.key === "Home") goTo(0);
      if (event.key === "End") goTo(slides.length - 1);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goTo, next, previous]);

  useEffect(() => {
    function onFullscreenChange() {
      setIsFullscreen(Boolean(document.fullscreenElement));
    }

    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  async function toggleFullscreen() {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await document.documentElement.requestFullscreen();
    }
  }

  return (
    <main className="relative flex min-h-[calc(100svh-4.5rem)] flex-col overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_15%,rgba(74,168,255,0.12),transparent_28rem)]" />

      <div className="relative flex items-center gap-3 border-b border-white/10 px-5 py-3 sm:px-8">
        <Badge variant="outline" className="rounded-none border-primary/35 font-mono text-primary">{String(current + 1).padStart(2, "0")}</Badge>
        <span className="technical-label text-white/80">{slide.section}</span>
        <span className="hidden technical-label sm:inline">{slide.time}</span>
        <div className="ml-auto hidden items-center gap-1 md:flex" aria-label="Choose a slide">
          {slides.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goTo(index)}
              className={`h-1.5 transition-all ${index === current ? "w-10 bg-primary" : "w-5 bg-white/20 hover:bg-white/45"}`}
              aria-label={`Go to slide ${index + 1}: ${item.section}`}
              aria-current={index === current ? "step" : undefined}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={toggleFullscreen}
          className="ml-2 flex h-9 w-9 items-center justify-center border border-white/12 text-muted-foreground transition-colors hover:border-primary/50 hover:text-white"
          aria-label={isFullscreen ? "Exit full screen" : "Enter full screen"}
        >
          {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Fullscreen className="h-4 w-4" />}
        </button>
      </div>

      <section key={slide.id} className="relative flex flex-1 animate-in fade-in slide-in-from-right-3 duration-300">
        <div className="mx-auto flex w-full max-w-[1500px] flex-col justify-center px-5 py-6 sm:px-8 lg:py-8">
          <p className="technical-label text-primary">{slide.eyebrow}</p>
          <h1 aria-live="polite" className="mt-4 max-w-[1250px] text-[clamp(2.6rem,6.2vw,6.7rem)] font-[380] uppercase leading-[0.84] tracking-[-0.058em] text-white blue-text-glow">
            {slide.title}
          </h1>
          <div className="mt-7 lg:mt-9">{slide.content}</div>
        </div>
      </section>

      <div className="relative flex items-center border-t border-white/10 px-5 py-3 sm:px-8">
        <Button
          type="button"
          variant="ghost"
          onClick={previous}
          disabled={current === 0}
          className="h-10 rounded-none px-2 text-muted-foreground hover:bg-white/5 hover:text-white sm:px-4"
        >
          <ChevronLeft className="mr-1 h-4 w-4" /> Previous
        </Button>
        <p className="mx-auto hidden font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground lg:block">
          Use arrow keys or space to move through the lesson
        </p>
        <span className="mx-auto font-mono text-[10px] text-muted-foreground lg:hidden">{current + 1} / {slides.length}</span>
        <Button
          type="button"
          onClick={next}
          disabled={current === slides.length - 1}
          className="h-10 rounded-none px-3 sm:px-5"
        >
          Next <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>

      <div className="absolute bottom-[65px] left-0 h-px bg-primary transition-[width] duration-300" style={{ width: `${((current + 1) / slides.length) * 100}%` }} />
    </main>
  );
}
