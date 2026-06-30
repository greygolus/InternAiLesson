"use client";

import { Check, Clipboard, Download, RotateCcw, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";

import { LocalOnlyNote } from "@/components/local-only-note";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLocalDraft } from "@/hooks/use-local-draft";
import { copyText, downloadTextFile } from "@/lib/download";

type MeDraft = {
  name: string;
  identity: string;
  work: string;
  school: string;
  personal: string;
  projects: string;
  routines: string;
  preferences: string;
  tools: string;
  aiHelp: string;
  boundaries: string;
};

const initialDraft: MeDraft = {
  name: "",
  identity: "",
  work: "",
  school: "",
  personal: "",
  projects: "",
  routines: "",
  preferences: "",
  tools: "",
  aiHelp: "",
  boundaries: "",
};

function buildMeMarkdown(draft: MeDraft) {
  return `# Me.md — My Portable AI Context\n\n> This file helps any AI understand who I am, what I care about, and how I want it to work with me. I control this file and can update or remove anything at any time.\n\n## Who I am\n\n- **Name:** ${draft.name || "Not provided"}\n- **About me:** ${draft.identity || "Not completed."}\n\n## Work\n\n${draft.work || "Not completed."}\n\n## School and learning\n\n${draft.school || "Not completed."}\n\n## Personal life and goals\n\n${draft.personal || "Not completed."}\n\n## Active projects\n\n${draft.projects || "Not completed."}\n\n## Routines and recurring responsibilities\n\n${draft.routines || "Not completed."}\n\n## How I think and communicate\n\n${draft.preferences || "Not completed."}\n\n## Tools I use\n\n${draft.tools || "Not completed."}\n\n## How I want AI to help\n\n${draft.aiHelp || "Not completed."}\n\n## Boundaries and privacy\n\n${draft.boundaries || "Not completed."}\n\n## Instructions for AI\n\n- Use this file as context, not as permission to publish or share my information.\n- Ask when a request could expose private, sensitive, or restricted information.\n- Treat project plans and working notes as provisional unless I confirm otherwise.\n- Preserve my meaning and preferences; do not invent personal facts.\n`;
}

export function MemdBuilder() {
  const { value: draft, setValue: setDraft, reset } = useLocalDraft<MeDraft>("greygolus:memd:v1", initialDraft);
  const [copied, setCopied] = useState(false);
  const markdown = useMemo(() => buildMeMarkdown(draft), [draft]);

  function update<K extends keyof MeDraft>(key: K, value: MeDraft[K]) {
    setDraft((current) => ({ ...current, [key]: value }));
  }

  function download() {
    downloadTextFile("Me.md", markdown);
  }

  async function copy() {
    await copyText(markdown);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-14 sm:px-8 xl:grid-cols-[minmax(0,1.1fr)_minmax(380px,0.9fr)]">
      <div>
        <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
          <LocalOnlyNote>Your answers never leave this browser unless you download or copy them.</LocalOnlyNote>
          <Button variant="ghost" onClick={reset} className="rounded-none text-muted-foreground hover:text-white">
            <RotateCcw className="mr-2 h-4 w-4" /> Reset builder
          </Button>
        </div>

        <section className="edge-frame border border-white/12 bg-black/35 p-6 sm:p-8">
          <div className="flex items-start gap-3 border-b border-white/10 pb-6">
            <ShieldCheck className="mt-1 h-5 w-5 text-primary" />
            <div>
              <p className="technical-label text-primary">Private by design</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Include what makes responses more useful. Leave out anything you would not want an AI service to process.
              </p>
            </div>
          </div>

          <div className="mt-7 grid gap-6 sm:grid-cols-2">
            <div className="grid gap-2 sm:col-span-2">
              <Label htmlFor="me-name">What should AI call you?</Label>
              <Input id="me-name" value={draft.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" className="form-control h-12 rounded-none" />
            </div>
            <MeField label="Who are you?" id="me-identity" value={draft.identity} onChange={(value) => update("identity", value)} placeholder="Background, roles, interests, and the direction you are building toward..." />
            <MeField label="Work" id="me-work" value={draft.work} onChange={(value) => update("work", value)} placeholder="Role, responsibilities, current focus, people or teams worth knowing..." />
            <MeField label="School and learning" id="me-school" value={draft.school} onChange={(value) => update("school", value)} placeholder="Program, courses, learning goals, subjects, and how you learn..." />
            <MeField label="Personal life and goals" id="me-personal" value={draft.personal} onChange={(value) => update("personal", value)} placeholder="Goals, interests, responsibilities, habits, or areas you want help organizing..." />
            <MeField label="Active projects" id="me-projects" value={draft.projects} onChange={(value) => update("projects", value)} placeholder="What are you actively building, planning, or trying to finish?" />
            <MeField label="Routines" id="me-routines" value={draft.routines} onChange={(value) => update("routines", value)} placeholder="Recurring meetings, study rhythms, weekly reviews, chores, reminders..." />
            <MeField label="Communication preferences" id="me-preferences" value={draft.preferences} onChange={(value) => update("preferences", value)} placeholder="Concise or detailed? Direct or exploratory? Examples first? What annoys you?" />
            <MeField label="Tools" id="me-tools" value={draft.tools} onChange={(value) => update("tools", value)} placeholder="Apps, files, services, devices, and AI tools you actually use..." />
            <MeField label="How AI should help" id="me-help" value={draft.aiHelp} onChange={(value) => update("aiHelp", value)} placeholder="Tasks to help with, decisions to support, workflows to improve, things to teach..." />
            <MeField label="Boundaries and privacy" id="me-boundaries" value={draft.boundaries} onChange={(value) => update("boundaries", value)} placeholder="What should AI never assume, publish, share, overwrite, or act on without asking?" />
          </div>
        </section>
      </div>

      <aside className="space-y-6 xl:sticky xl:top-24 xl:self-start">
        <div className="edge-frame border border-white/12 bg-black/75 p-6">
          <p className="technical-label text-primary">Generated file</p>
          <h2 className="mt-2 text-2xl tracking-[-0.04em] text-white">Your Me.md</h2>
          <pre className="mt-5 max-h-[58vh] overflow-auto whitespace-pre-wrap border border-white/10 bg-white/[0.025] p-4 font-mono text-[11px] leading-relaxed text-foreground">{markdown}</pre>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
            <Button onClick={download} className="rounded-none"><Download className="mr-2 h-4 w-4" /> Download Me.md</Button>
            <Button onClick={copy} variant="outline" className="rounded-none border-white/15 bg-transparent">
              {copied ? <Check className="mr-2 h-4 w-4" /> : <Clipboard className="mr-2 h-4 w-4" />}
              {copied ? "Copied" : "Copy Markdown"}
            </Button>
          </div>
        </div>

        <div className="border border-primary/25 bg-primary/[0.045] p-6">
          <p className="technical-label text-primary">Install it</p>
          <ol className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <li><span className="mr-2 font-mono text-primary">01</span> Download <code className="text-foreground">Me.md</code>.</li>
            <li><span className="mr-2 font-mono text-primary">02</span> Open your starter Obsidian vault.</li>
            <li><span className="mr-2 font-mono text-primary">03</span> Replace <code className="text-foreground">AIOS/StarterMe.md</code> with this file.</li>
            <li><span className="mr-2 font-mono text-primary">04</span> Rename it exactly <code className="text-foreground">Me.md</code>.</li>
            <li><span className="mr-2 font-mono text-primary">05</span> Ask Cowork to read the vault instructions again.</li>
          </ol>
        </div>
      </aside>
    </div>
  );
}

function MeField({ label, id, value, onChange, placeholder }: { label: string; id: string; value: string; onChange: (value: string) => void; placeholder: string }) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Textarea id={id} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className="form-control min-h-36 rounded-none" />
    </div>
  );
}
