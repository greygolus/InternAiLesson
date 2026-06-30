import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { SetupChecklist } from "@/components/setup-checklist";

export const metadata: Metadata = {
  title: "Pre-Class Setup",
};

export default function SetupPage() {
  return (
    <>
      <PageHero
        eyebrow="05 // Required before class"
        title="Show up ready to build."
        description="Install the tools, connect the services, open the starter vault, and use the checklist to catch problems before the workshop begins."
        badge="Windows + macOS"
      />
      <SetupChecklist />
    </>
  );
}
