"use client";

import { Maximize2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { AiCityDiagram } from "@/components/ai-city-diagram";

export function ExpandableAiCityDiagram({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      trigger?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        className="group relative block w-full cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-black"
        aria-label="Open AI City diagram full screen"
      >
        <AiCityDiagram className={className} />
        <span className="absolute bottom-3 right-3 flex items-center gap-2 border border-white/20 bg-black/85 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-white/75 backdrop-blur transition-colors group-hover:border-primary/60 group-hover:text-white">
          <Maximize2 className="h-3.5 w-3.5 text-primary" />
          Click to expand
        </span>
      </button>

      {isOpen &&
        createPortal(
          <div
            data-ai-city-modal="true"
            role="dialog"
            aria-modal="true"
            aria-label="AI City diagram full-screen view"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 backdrop-blur-md sm:p-6"
            onClick={(event) => {
              if (event.target === event.currentTarget) setIsOpen(false);
            }}
          >
            <div className="relative flex h-full w-full items-center justify-center">
              <AiCityDiagram className="max-h-[calc(100svh-3rem)] w-full drop-shadow-[0_0_80px_rgba(83,173,255,0.2)]" />
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                autoFocus
                className="absolute right-0 top-0 flex h-11 w-11 items-center justify-center border border-white/20 bg-black/85 text-white transition-colors hover:border-primary/70 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Close full-screen AI City diagram"
              >
                <X className="h-5 w-5" />
              </button>
              <p className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.14em] text-white/45">
                Press Escape or click outside to close
              </p>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
