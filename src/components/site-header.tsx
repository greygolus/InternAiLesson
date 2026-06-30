import Image from "next/image";
import Link from "next/link";

import { navigation } from "@/lib/navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-black/85 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-[1500px] items-center gap-5 px-5 sm:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-3" aria-label="Grey's Intro to AI home">
          <Image
            src="/greygolus-logo.png"
            alt="Grey Golus logo"
            width={34}
            height={34}
            className="h-8.5 w-8.5 object-contain drop-shadow-[0_0_10px_rgba(86,177,255,0.55)]"
            priority
          />
          <span className="text-sm font-semibold tracking-[0.18em] text-white">GREYGOLUS</span>
          <span className="hidden font-mono text-[10px] tracking-[0.18em] text-primary/80 lg:inline">{"// AI SYSTEMS"}</span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 xl:flex" aria-label="Course navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group px-3 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-white"
            >
              <span className="mr-1.5 text-primary/50 group-hover:text-primary">{item.code}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/setup"
          className="edge-frame ml-auto border border-white/15 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white transition-colors hover:border-primary/60 hover:bg-primary/8 xl:ml-3"
        >
          Start here
        </Link>
      </div>
    </header>
  );
}
