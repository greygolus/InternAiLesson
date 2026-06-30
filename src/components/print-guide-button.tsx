"use client";

import { Printer } from "lucide-react";

import { Button } from "@/components/ui/button";

export function PrintGuideButton() {
  return (
    <Button type="button" onClick={() => window.print()} variant="outline" className="print-hide rounded-none border-white/15 bg-transparent">
      <Printer className="mr-2 h-4 w-4" /> Print / Save PDF
    </Button>
  );
}

