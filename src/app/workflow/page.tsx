import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { WorkflowPlanner } from "@/components/workflow-planner";

export const metadata: Metadata = {
  title: "AI Workflow Planner",
};

export default function WorkflowPage() {
  return (
    <>
      <PageHero
        eyebrow="03 // Project blueprint"
        title="Move from idea to system."
        description="Plan a task, automation, reusable tool, scheduled routine, or continuous build—then leave with a Markdown blueprint and a Cowork prompt that can start the work."
        badge="Preset suggestions"
      />
      <WorkflowPlanner />
    </>
  );
}
