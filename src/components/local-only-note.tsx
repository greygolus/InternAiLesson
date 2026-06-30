import { LockKeyhole } from "lucide-react";

export function LocalOnlyNote({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 border border-primary/25 bg-primary/[0.045] p-4 text-sm text-muted-foreground">
      <LockKeyhole className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
      <p>{children ?? "Your answers autosave in this browser and are never sent to this site."}</p>
    </div>
  );
}
