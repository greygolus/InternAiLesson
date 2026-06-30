import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ResourceGuidePage } from "@/components/resource-guide-page";
import { getResourceGuide, resourceGuides } from "@/lib/resource-guides";

type ResourcePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return resourceGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getResourceGuide(slug);

  if (!guide) return {};

  return {
    title: guide.title,
    description: guide.description,
  };
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  const { slug } = await params;
  const guide = getResourceGuide(slug);

  if (!guide) notFound();

  return <ResourceGuidePage guide={guide} />;
}

