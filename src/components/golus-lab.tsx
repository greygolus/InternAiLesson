"use client";

import { Check, Clipboard, Download, RotateCcw, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

import { LocalOnlyNote } from "@/components/local-only-note";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { useLocalDraft } from "@/hooks/use-local-draft";
import { copyText, downloadTextFile } from "@/lib/download";

type AnswerKey = "lazy" | "goal" | "output" | "limits" | "understanding" | "style";
type Answers = Record<AnswerKey, string>;

const initialAnswers: Answers = {
  lazy: "",
  goal: "",
  output: "",
  limits: "",
  understanding: "",
  style: "",
};

const steps: Array<{
  key: AnswerKey;
  code: string;
  title: string;
  subtitle: string;
  prompt: string;
  placeholder: string;
  example: string;
}> = [
  {
    key: "lazy",
    code: "0",
    title: "The lazy prompt",
    subtitle: "Write the vague version first",
    prompt: "What would you normally type if you were in a hurry? Keep it to one sentence.",
    placeholder: "Make me a daily brief from my notes.",
    example: "Read my vault and make me a daily brief.",
  },
  {
    key: "goal",
    code: "G",
    title: "Goal",
    subtitle: "What you are making—and why",
    prompt: "Name the thing you want created and the outcome it should help you achieve.",
    placeholder: "Create a morning brief that helps me start the day knowing...",
    example: "Create a concise morning brief that tells me what I worked on recently and what deserves attention next.",
  },
  {
    key: "output",
    code: "O",
    title: "Output",
    subtitle: "The shape of a useful answer",
    prompt: "Define the sections, structure, format, and level of detail you want.",
    placeholder: "Use sections for recent work, open tasks, questions, and...",
    example: "Group activity by project, then list unchecked tasks, open questions, and the three most useful next actions. Use short bullets.",
  },
  {
    key: "limits",
    code: "L",
    title: "Limits",
    subtitle: "The guardrails",
    prompt: "Set length, accuracy, privacy, and do-not-invent rules.",
    placeholder: "Keep it under one page. Do not invent activity or...",
    example: "Keep it under one page. Do not invent activity, facts, owners, or deadlines. If nothing changed, say so plainly.",
  },
  {
    key: "understanding",
    code: "U",
    title: "Understanding",
    subtitle: "What the AI should know and use",
    prompt: "Point to the context, files, date window, tools, and rules the AI should use.",
    placeholder: "Work inside my Obsidian vault. Read the root instructions...",
    example: "Work inside my Obsidian vault. Read its root instructions, AIOS maps, recent Efforts and Calendar changes, and the Daily Brief skill. Review 72 hours on Monday and 24 hours on other weekdays.",
  },
  {
    key: "style",
    code: "S",
    title: "Style",
    subtitle: "Voice and presentation",
    prompt: "Choose the voice, tone, formatting rules, and destination.",
    placeholder: "Write like a calm chief of staff. Be direct, concise, and...",
    example: "Write like a calm chief of staff: direct, specific, and free of filler. Save the result as Calendar/YYYY-MM-DD - Morning Brief.md.",
  },
];

function buildPrompt(answers: Answers) {
  return steps
    .filter((step) => step.key !== "lazy" && answers[step.key].trim())
    .map((step) => `${step.title.toUpperCase()}: ${answers[step.key].trim()}`)
    .join("\n\n");
}

export function GolusLab() {
  const { value: answers, setValue: setAnswers, reset } = useLocalDraft<Answers>("greygolus:golus:v1", initialAnswers);
  const [revealed, setRevealed] = useState<AnswerKey[]>([]);
  const [copied, setCopied] = useState(false);

  const completeCount = Object.values(answers).filter((answer) => answer.trim()).length;
  const fullPrompt = useMemo(() => buildPrompt(answers), [answers]);
  const progress = Math.round((completeCount / steps.length) * 100);

  function updateAnswer(key: AnswerKey, value: string) {
    setAnswers((current) => ({ ...current, [key]: value }));
  }

  function toggleReveal(key: AnswerKey) {
    setRevealed((current) =>
      current.includes(key) ? current.filter((item) => item !== key) : [...current, key],
    );
  }

  async function handleCopy() {
    await copyText(fullPrompt);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  function downloadMarkdown() {
    const markdown = `---\ntype: prompting-activity\ncourse: Grey's Intro to AI\nframework: G-O-L-U-S\nstatus: completed\n---\n\n# My G-O-L-U-S Daily Brief Prompt\n\n## Lazy prompt\n\n${answers.lazy || "Not completed."}\n\n## Full prompt\n\n\`\`\`text\n${fullPrompt || "Complete the G-O-L-U-S fields to build your prompt."}\n\`\`\`\n\n## Save with Cowork\n\nAsk Cowork to save this note inside \`Efforts/Grey's Intro to AI/\` in your starter Obsidian vault.\n`;
    downloadTextFile("GOLUS - Daily Brief Prompt.md", markdown);
  }

  return (
    <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-14 sm:px-8 xl:grid-cols-[minmax(0,1.25fr)_minmax(360px,0.75fr)]">
      <div>
        <div className="mb-8 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <p className="technical-label">Progress // {completeCount} of {steps.length} layers</p>
            <Progress value={progress} className="mt-3 h-1 bg-white/10" />
          </div>
          <Button variant="ghost" onClick={reset} className="justify-self-start rounded-none text-muted-foreground hover:text-white sm:justify-self-end">
            <RotateCcw className="mr-2 h-4 w-4" /> Reset lab
          </Button>
        </div>

        <LocalOnlyNote />

        <div className="mt-8 space-y-5">
          {steps.map((step) => {
            const isRevealed = revealed.includes(step.key);
            return (
              <section key={step.key} className="edge-frame border border-white/12 bg-black/35 p-5 sm:p-7">
                <div className="grid gap-5 sm:grid-cols-[56px_1fr]">
                  <div className="flex h-12 w-12 items-center justify-center border border-primary/40 font-mono text-xl text-primary">{step.code}</div>
                  <div>
                    <p className="technical-label">{step.subtitle}</p>
                    <h2 className="mt-2 text-3xl tracking-[-0.04em] text-white">{step.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.prompt}</p>
                    <Textarea
                      aria-label={`${step.title} answer`}
                      value={answers[step.key]}
                      onChange={(event) => updateAnswer(step.key, event.target.value)}
                      placeholder={step.placeholder}
                      className="form-control mt-5 min-h-30 resize-y rounded-none text-base leading-relaxed"
                    />
                    <div className="mt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => toggleReveal(step.key)}
                        className="rounded-none border-white/15 bg-transparent font-mono text-[10px] uppercase tracking-[0.14em] hover:border-primary/50 hover:bg-primary/8"
                      >
                        <Sparkles className="mr-2 h-3.5 w-3.5 text-primary" />
                        {isRevealed ? "Hide example" : "What great looks like"}
                      </Button>
                    </div>
                    {isRevealed ? (
                      <div className="mt-4 border-l border-primary/60 bg-primary/[0.045] p-4 text-sm leading-relaxed text-foreground">
                        {step.example}
                      </div>
                    ) : null}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <aside className="xl:sticky xl:top-24 xl:self-start">
        <div className="edge-frame border border-white/12 bg-black/75 p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="technical-label text-primary">Live assembly</p>
              <h2 className="mt-2 text-2xl tracking-[-0.04em] text-white">Your full prompt</h2>
            </div>
            <span className="font-mono text-[10px] text-muted-foreground">{fullPrompt.length} chars</span>
          </div>
          <pre className="mt-6 max-h-[58vh] min-h-72 overflow-auto whitespace-pre-wrap border border-white/10 bg-white/[0.025] p-4 font-mono text-xs leading-relaxed text-foreground">
            {fullPrompt || "Your G-O-L-U-S prompt will assemble here as you write."}
          </pre>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
            <Button onClick={handleCopy} disabled={!fullPrompt} className="rounded-none">
              {copied ? <Check className="mr-2 h-4 w-4" /> : <Clipboard className="mr-2 h-4 w-4" />}
              {copied ? "Copied" : "Copy prompt"}
            </Button>
            <Button onClick={downloadMarkdown} variant="outline" className="rounded-none border-white/15 bg-transparent">
              <Download className="mr-2 h-4 w-4" /> Download .md
            </Button>
          </div>
          <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
            Next in class: paste the finished prompt into Cowork, review the premade Daily Brief skill, and schedule the workflow.
          </p>
        </div>
      </aside>
    </div>
  );
}
