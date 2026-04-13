import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Page() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-sm text-muted">
          <span>© 2026 Yakup Kahraman</span>
          <span className="hidden sm:inline">·</span>
          <a
            href="https://github.com/yakupkahraman"
            className="underline-offset-4 hover:text-text hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open source on GitHub
          </a>
          <span className="hidden sm:inline">·</span>
          <span>Deployed on Vercel</span>
        </div>
      </footer>
    </main>
  );
}
