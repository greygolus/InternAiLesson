"use client";

import { CheckCircle2, Download, ExternalLink, Laptop2, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLocalDraft } from "@/hooks/use-local-draft";

type SetupState = Record<string, boolean>;

const checklist = [
  { id: "pro", label: "Claude Pro is active", detail: "Cowork and scheduled tasks require a paid plan." },
  { id: "desktop", label: "Latest Claude Desktop installed", detail: "Open the app and confirm you can sign in." },
  { id: "cowork", label: "Cowork opens successfully", detail: "Switch from Chat to Cowork and start a blank task." },
  { id: "obsidian", label: "Obsidian installed", detail: "Open it once so your operating system finishes setup." },
  { id: "vault", label: "Starter vault downloaded and opened", detail: "Extract the ZIP, then choose “Open folder as vault” in Obsidian." },
  { id: "gmail", label: "Gmail connected to Claude", detail: "Authorize the Google account you actually want Claude to use." },
  { id: "calendar", label: "Google Calendar connected", detail: "Confirm Claude can see the correct calendars." },
  { id: "drive", label: "Google Drive connected", detail: "Confirm the connector appears under Customize → Connectors." },
  { id: "chrome", label: "Chrome and Claude in Chrome ready", detail: "Sign in and confirm Claude can access the browser when asked." },
  { id: "computer", label: "Computer use is available", detail: "Open Cowork and confirm the computer-access option appears." },
  { id: "site", label: "ai.greygolus.com opens", detail: "Keep the site bookmarked for class." },
] as const;

const initialState = Object.fromEntries(checklist.map((item) => [item.id, false])) as SetupState;

export function SetupChecklist() {
  const { value: checked, setValue: setChecked, reset } = useLocalDraft<SetupState>("greygolus:setup:v1", initialState);
  const complete = checklist.filter((item) => checked[item.id]).length;
  const progress = Math.round((complete / checklist.length) * 100);

  return (
    <div className="mx-auto max-w-[1500px] px-5 py-14 sm:px-8">
      <div className="grid gap-10 xl:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)]">
        <div>
          <section className="edge-frame border border-white/12 bg-black/35 p-6 sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-5 border-b border-white/10 pb-6">
              <div>
                <p className="technical-label text-primary">Readiness // {complete} of {checklist.length}</p>
                <h2 className="mt-2 text-3xl tracking-[-0.04em] text-white">Bring a working system—not installation problems.</h2>
              </div>
              <Button variant="ghost" onClick={reset} className="rounded-none text-muted-foreground hover:text-white"><RotateCcw className="mr-2 h-4 w-4" /> Reset</Button>
            </div>
            <Progress value={progress} className="mt-6 h-1 bg-white/10" />

            <div className="mt-6 divide-y divide-white/8 border-y border-white/8">
              {checklist.map((item, index) => (
                <label key={item.id} htmlFor={item.id} className="grid cursor-pointer grid-cols-[auto_1fr_auto] gap-4 py-5">
                  <Checkbox
                    id={item.id}
                    checked={checked[item.id] ?? false}
                    onCheckedChange={(value) => setChecked((current) => ({ ...current, [item.id]: value === true }))}
                    className="mt-0.5 rounded-none border-white/25 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-black"
                  />
                  <span>
                    <span className="block text-base text-white">{item.label}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{item.detail}</span>
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                </label>
              ))}
            </div>

            {complete === checklist.length ? (
              <div className="mt-6 flex items-center gap-3 border border-primary/30 bg-primary/[0.06] p-4 text-sm text-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary" /> You are ready for class.
              </div>
            ) : null}
          </section>
        </div>

        <aside className="space-y-6 xl:sticky xl:top-24 xl:self-start">
          <div className="edge-frame border border-white/12 bg-black/70 p-6">
            <p className="technical-label text-primary">Downloads</p>
            <div className="mt-5 grid gap-3">
              <Button asChild className="h-12 justify-between rounded-none"><a href="https://claude.com/download" target="_blank" rel="noreferrer">Claude Desktop <ExternalLink className="h-4 w-4" /></a></Button>
              <Button asChild variant="outline" className="h-12 justify-between rounded-none border-white/15 bg-transparent"><a href="https://obsidian.md/download" target="_blank" rel="noreferrer">Obsidian <ExternalLink className="h-4 w-4" /></a></Button>
              <Button disabled variant="outline" className="h-12 justify-between rounded-none border-white/10 bg-transparent text-muted-foreground"><span>Starter vault ZIP</span><Download className="h-4 w-4" /></Button>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">The vault download button is wired visually; the sanitized ZIP arrives in the next build pass.</p>
          </div>

          <div className="border border-white/12 bg-black/50 p-6">
            <div className="flex items-start gap-3"><Laptop2 className="mt-1 h-4 w-4 text-primary" /><div><p className="technical-label text-primary">Operating system notes</p><p className="mt-2 text-sm text-muted-foreground">Choose your path. The course itself is identical.</p></div></div>
            <Tabs defaultValue="windows" className="mt-5">
              <TabsList className="grid w-full grid-cols-2 rounded-none bg-white/5">
                <TabsTrigger value="windows" className="rounded-none">Windows</TabsTrigger>
                <TabsTrigger value="mac" className="rounded-none">macOS</TabsTrigger>
              </TabsList>
              <TabsContent value="windows" className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>Use Windows 10 or later. Install Claude Desktop, then run the Cowork readiness check if the app offers it.</p>
                <p>Extract the starter vault ZIP before opening the folder in Obsidian.</p>
              </TabsContent>
              <TabsContent value="mac" className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>Install Claude Desktop and Obsidian into Applications, then launch each once before class.</p>
                <p>Move the extracted starter vault somewhere permanent before opening it in Obsidian.</p>
              </TabsContent>
            </Tabs>
          </div>

          <div className="border border-primary/25 bg-primary/[0.045] p-6 text-sm leading-relaxed text-muted-foreground">
            <p className="technical-label text-primary">Class rule</p>
            <p className="mt-3">Do not wait until class to create accounts or authorize connectors. The first eight minutes are a check—not an installation workshop.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
