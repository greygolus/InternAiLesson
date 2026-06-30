"use client";

import { Check, Clipboard, Download, Lightbulb, RotateCcw, WandSparkles } from "lucide-react";
import { useMemo, useState } from "react";

import { LocalOnlyNote } from "@/components/local-only-note";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLocalDraft } from "@/hooks/use-local-draft";
import { copyText, downloadTextFile, safeFilename } from "@/lib/download";
import { cn } from "@/lib/utils";

type WorkflowType = "one-time" | "reusable" | "automated" | "scheduled" | "continuous";

type WorkflowDraft = {
  title: string;
  problem: string;
  outcome: string;
  workflowType: WorkflowType;
  context: string;
  harness: string;
  connectors: string;
  skills: string;
  steps: string;
  output: string;
  verification: string;
  maintenance: string;
  firstAction: string;
};

const initialDraft: WorkflowDraft = {
  title: "",
  problem: "",
  outcome: "",
  workflowType: "reusable",
  context: "",
  harness: "Claude Cowork",
  connectors: "",
  skills: "",
  steps: "",
  output: "",
  verification: "",
  maintenance: "",
  firstAction: "",
};

const workflowTypes: Array<{ value: WorkflowType; label: string; description: string }> = [
  { value: "one-time", label: "One time", description: "Solve this once, well." },
  { value: "reusable", label: "Reusable", description: "Run it again with new inputs." },
  { value: "automated", label: "Automated", description: "Trigger it with little manual work." },
  { value: "scheduled", label: "Scheduled", description: "Run it on a recurring cadence." },
  { value: "continuous", label: "Continuous", description: "Build and improve it over time." },
];

function inferSuggestions(draft: WorkflowDraft) {
  const haystack = `${draft.title} ${draft.problem} ${draft.outcome}`.toLowerCase();
  const connectors = new Set<string>();
  const skills = new Set<string>(["Project planning", "Verification checklist"]);

  if (/email|inbox|message|newsletter/.test(haystack)) connectors.add("Gmail");
  if (/calendar|meeting|schedule|daily|weekly|brief/.test(haystack) || draft.workflowType === "scheduled") connectors.add("Google Calendar");
  if (/document|resume|pdf|drive|file/.test(haystack)) connectors.add("Google Drive");
  if (/website|app|code|repo|deploy/.test(haystack) || draft.workflowType === "continuous") {
    connectors.add("GitHub");
    connectors.add("Vercel");
    skills.add("Build-and-verify loop");
  }
  if (/research|compare|news|market|current/.test(haystack)) {
    connectors.add("Web search");
    skills.add("Dated research");
  }
  if (/note|knowledge|personal|school|project/.test(haystack)) connectors.add("Obsidian / local files");
  if (/resume|application|job/.test(haystack)) skills.add("Resume tailoring");
  if (/brief|summary|report/.test(haystack)) skills.add("Structured brief");
  if (draft.workflowType === "automated" || draft.workflowType === "scheduled") skills.add("Failure and retry rules");

  if (connectors.size === 0) connectors.add("Local files / no connector yet");
  return { connectors: [...connectors], skills: [...skills] };
}

function buildImplementationPrompt(draft: WorkflowDraft) {
  return `Help me implement "${draft.title || "this AI workflow"}".\n\nOUTCOME\n${draft.outcome || "[Define the intended result]"}\n\nWORKFLOW TYPE\n${draft.workflowType}\n\nCONTEXT AND INPUTS\n${draft.context || "[List what the workflow should know or receive]"}\n\nHARNESS\n${draft.harness || "[Choose a harness]"}\n\nCONNECTORS AND TOOLS\n${draft.connectors || "[List required access]"}\n\nSKILLS\n${draft.skills || "[List reusable instructions]"}\n\nPLANNED STEPS\n${draft.steps || "[Break the workflow into steps]"}\n\nOUTPUT\n${draft.output || "[Define what should be created]"}\n\nVERIFICATION\n${draft.verification || "[Define how to check the result]"}\n\nMAINTENANCE\n${draft.maintenance || "[Define how this stays useful]"}\n\nStart with this first action: ${draft.firstAction || "propose the smallest useful first step"}. Ask before publishing, sharing, deleting, or transmitting private information.`;
}

export function WorkflowPlanner() {
  const { value: draft, setValue: setDraft, reset } = useLocalDraft<WorkflowDraft>("greygolus:workflow:v1", initialDraft);
  const [copied, setCopied] = useState(false);
  const suggestions = useMemo(() => inferSuggestions(draft), [draft]);
  const implementationPrompt = useMemo(() => buildImplementationPrompt(draft), [draft]);

  function update<K extends keyof WorkflowDraft>(key: K, value: WorkflowDraft[K]) {
    setDraft((current) => ({ ...current, [key]: value }));
  }

  function applySuggestions() {
    update("connectors", suggestions.connectors.join(", "));
    update("skills", suggestions.skills.join(", "));
  }

  function buildMarkdown() {
    return `---\ntype: ai-workflow-plan\nproject: ${draft.title || "Untitled AI Workflow"}\nstatus: planned\nworkflow_type: ${draft.workflowType}\n---\n\n# ${draft.title || "Untitled AI Workflow"}\n\n## Problem or opportunity\n\n${draft.problem || "Not completed."}\n\n## Outcome / definition of done\n\n${draft.outcome || "Not completed."}\n\n## Workflow type\n\n${draft.workflowType}\n\n## Context and inputs\n\n${draft.context || "Not completed."}\n\n## Harness\n\n${draft.harness || "Not completed."}\n\n## Connectors and tools\n\n${draft.connectors || "Not completed."}\n\n## Skills\n\n${draft.skills || "Not completed."}\n\n## Major steps\n\n${draft.steps || "Not completed."}\n\n## Output\n\n${draft.output || "Not completed."}\n\n## Verification and safety\n\n${draft.verification || "Not completed."}\n\n## Maintenance / improvement\n\n${draft.maintenance || "Not completed."}\n\n## First action\n\n- [ ] ${draft.firstAction || "Choose the smallest useful first step."}\n\n## Cowork implementation prompt\n\n\`\`\`text\n${implementationPrompt}\n\`\`\`\n\n## Course next step\n\nSave this note under \`Efforts/Grey's Intro to AI/\` in your starter vault.\n`;
  }

  function downloadMarkdown() {
    downloadTextFile(`${safeFilename(draft.title, "My AI Workflow")} - Workflow Plan.md`, buildMarkdown());
  }

  async function copyPrompt() {
    await copyText(implementationPrompt);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="mx-auto max-w-[1500px] px-5 py-14 sm:px-8">
      <div className="grid gap-10 xl:grid-cols-[minmax(0,1.15fr)_minmax(380px,0.85fr)]">
        <div>
          <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
            <LocalOnlyNote>Autosaved locally. The public site never receives your project idea.</LocalOnlyNote>
            <Button variant="ghost" onClick={reset} className="rounded-none text-muted-foreground hover:text-white">
              <RotateCcw className="mr-2 h-4 w-4" /> Reset planner
            </Button>
          </div>

          <div className="space-y-6">
            <section className="edge-frame border border-white/12 bg-black/35 p-6">
              <p className="technical-label text-primary">01 // Name the move</p>
              <div className="mt-6 grid gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="workflow-title">Project or workflow name</Label>
                  <Input id="workflow-title" value={draft.title} onChange={(e) => update("title", e.target.value)} placeholder="Resume optimizer" className="form-control h-12 rounded-none" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="workflow-problem">What are you trying to improve, automate, or build?</Label>
                  <Textarea id="workflow-problem" value={draft.problem} onChange={(e) => update("problem", e.target.value)} placeholder="I rewrite my resume by hand for every role and lose track of the strongest version." className="form-control min-h-28 rounded-none" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="workflow-outcome">What does done look like?</Label>
                  <Textarea id="workflow-outcome" value={draft.outcome} onChange={(e) => update("outcome", e.target.value)} placeholder="A reusable workflow that compares a job description to my master resume and produces a truthful tailored draft." className="form-control min-h-28 rounded-none" />
                </div>
              </div>
            </section>

            <section className="edge-frame border border-white/12 bg-black/35 p-6">
              <p className="technical-label text-primary">02 // Classify it</p>
              <div className="mt-6 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
                {workflowTypes.map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => update("workflowType", type.value)}
                    className={cn(
                      "min-h-28 bg-black p-4 text-left transition-colors hover:bg-primary/[0.06]",
                      draft.workflowType === type.value && "bg-primary/[0.10] ring-1 ring-inset ring-primary/60",
                    )}
                  >
                    <span className="text-base text-white">{type.label}</span>
                    <span className="mt-2 block text-xs leading-relaxed text-muted-foreground">{type.description}</span>
                  </button>
                ))}
              </div>
            </section>

            <section className="edge-frame border border-white/12 bg-black/35 p-6">
              <p className="technical-label text-primary">03 // Design the system</p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <Field label="Context and inputs" id="workflow-context" value={draft.context} onChange={(value) => update("context", value)} placeholder="Files, examples, preferences, data, and facts the AI needs..." />
                <Field label="Harness" id="workflow-harness" value={draft.harness} onChange={(value) => update("harness", value)} placeholder="Chat, Cowork, Code, Codex..." />
                <Field label="Connectors and tools" id="workflow-connectors" value={draft.connectors} onChange={(value) => update("connectors", value)} placeholder="Google Drive, Gmail, GitHub, web search, local files..." />
                <Field label="Skills" id="workflow-skills" value={draft.skills} onChange={(value) => update("skills", value)} placeholder="Saved instructions, review checklists, role-specific procedures..." />
                <Field label="Major steps" id="workflow-steps" value={draft.steps} onChange={(value) => update("steps", value)} placeholder="1. Gather inputs  2. Compare  3. Draft  4. Verify..." />
                <Field label="Output or deliverable" id="workflow-output" value={draft.output} onChange={(value) => update("output", value)} placeholder="The exact file, page, report, plan, or action produced..." />
                <Field label="Verification and safety" id="workflow-verification" value={draft.verification} onChange={(value) => update("verification", value)} placeholder="What must be checked before you trust, share, or publish it?" />
                <Field label="Maintenance and improvement" id="workflow-maintenance" value={draft.maintenance} onChange={(value) => update("maintenance", value)} placeholder="How will this stay useful as your needs and tools change?" />
              </div>
              <div className="mt-5 grid gap-2">
                <Label htmlFor="workflow-first">First concrete action</Label>
                <Input id="workflow-first" value={draft.firstAction} onChange={(e) => update("firstAction", e.target.value)} placeholder="Create the project folder and add my source files." className="form-control h-12 rounded-none" />
              </div>
            </section>
          </div>
        </div>

        <aside className="space-y-6 xl:sticky xl:top-24 xl:self-start">
          <div className="edge-frame border border-primary/25 bg-primary/[0.045] p-6">
            <div className="flex items-start gap-3">
              <Lightbulb className="mt-1 h-4 w-4 shrink-0 text-primary" />
              <div>
                <p className="technical-label text-primary">Preset suggestions</p>
                <h2 className="mt-2 text-2xl tracking-[-0.04em] text-white">Likely building blocks</h2>
              </div>
            </div>
            <div className="mt-6">
              <p className="technical-label">Connectors + tools</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {suggestions.connectors.map((item) => <Badge key={item} variant="outline" className="border-white/15 bg-black/30 text-foreground">{item}</Badge>)}
              </div>
            </div>
            <div className="mt-5">
              <p className="technical-label">Skills</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {suggestions.skills.map((item) => <Badge key={item} variant="outline" className="border-white/15 bg-black/30 text-foreground">{item}</Badge>)}
              </div>
            </div>
            <Button onClick={applySuggestions} variant="outline" className="mt-6 w-full rounded-none border-primary/35 bg-black/20 hover:bg-primary/10">
              <WandSparkles className="mr-2 h-4 w-4 text-primary" /> Add suggestions to my plan
            </Button>
          </div>

          <div className="edge-frame border border-white/12 bg-black/70 p-6">
            <p className="technical-label text-primary">Implementation handoff</p>
            <h2 className="mt-2 text-2xl tracking-[-0.04em] text-white">Your Cowork starting prompt</h2>
            <pre className="mt-5 max-h-72 overflow-auto whitespace-pre-wrap border border-white/10 bg-white/[0.025] p-4 font-mono text-[11px] leading-relaxed text-foreground">{implementationPrompt}</pre>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
              <Button onClick={copyPrompt} className="rounded-none">
                {copied ? <Check className="mr-2 h-4 w-4" /> : <Clipboard className="mr-2 h-4 w-4" />}
                {copied ? "Copied" : "Copy prompt"}
              </Button>
              <Button onClick={downloadMarkdown} variant="outline" className="rounded-none border-white/15 bg-transparent">
                <Download className="mr-2 h-4 w-4" /> Download .md
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Field({ label, id, value, onChange, placeholder }: { label: string; id: string; value: string; onChange: (value: string) => void; placeholder: string }) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Textarea id={id} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className="form-control min-h-32 rounded-none" />
    </div>
  );
}
