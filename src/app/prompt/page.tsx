import type { Metadata } from "next";

import { GolusLab } from "@/components/golus-lab";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "G-O-L-U-S Prompting Lab",
};

export default function PromptPage() {
  return (
    <>
      <PageHero
        eyebrow="02 // Prompting lab"
        title="Talk to AI well."
        description="Start with the lazy prompt. Then add one useful layer at a time until the result is specific enough to run as a real workflow."
        badge="Autosaves locally"
      />
      <GolusLab />
    </>
  );
}
