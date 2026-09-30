import { Sidebar } from "@/components/Sidebar";
import { SiteFooter } from "@/components/SiteFooter";
import { About } from "@/components/sections/About";
import { Journey } from "@/components/sections/Journey";
import { Projects } from "@/components/sections/Projects";

export default function Page() {
  return (
    <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:flex lg:gap-20 lg:px-16 xl:gap-32">
      <Sidebar />
      <main className="pb-16 lg:max-w-3xl lg:flex-1 lg:py-24">
        <About />
        <Journey />
        <Projects />
        <SiteFooter />
      </main>
    </div>
  );
}
