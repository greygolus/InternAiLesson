import type { Metadata } from "next";

import { MemdBuilder } from "@/components/memd-builder";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Build Your Me.md",
};

export default function MemdPage() {
  return (
    <>
      <PageHero
        eyebrow="04 // Portable context"
        title="Teach AI who you are."
        description="Build one file that explains your roles, goals, routines, preferences, tools, and boundaries—so you stop reintroducing yourself in every new chat."
        badge="Never sent to our server"
      />
      <MemdBuilder />
    </>
  );
}
