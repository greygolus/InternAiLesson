import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-5 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="technical-label text-primary/80">Grey&apos;s Intro to AI</p>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Local-first learning. Your worksheet data stays in your browser until you choose to download it.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
          <Link href="/lesson" className="hover:text-white">Lesson</Link>
          <Link href="/resources" className="hover:text-white">Resources</Link>
          <a href="https://greygolus.com" target="_blank" rel="noreferrer" className="hover:text-white">greygolus.com ↗</a>
          <span>© 2026 Grey Golus</span>
        </div>
      </div>
    </footer>
  );
}
