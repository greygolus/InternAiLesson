import type { Metadata } from "next";

import { LessonDeck } from "@/components/lesson-deck";

export const metadata: Metadata = {
  title: "The Lesson",
  description: "The full-screen presentation for Grey's one-hour introduction to AI.",
};

export default function LessonPage() {
  return <LessonDeck />;
}
