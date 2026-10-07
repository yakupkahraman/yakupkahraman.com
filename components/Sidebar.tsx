import { LogoParticles } from "@/components/LogoParticles";
import { SocialLinks } from "@/components/SocialLinks";
import { ThemeToggle } from "@/components/ThemeToggle";
import { site } from "@/content/site";

export function Sidebar() {
  return (
    <header className="flex flex-col justify-between py-16 lg:sticky lg:top-0 lg:h-screen lg:w-80 lg:shrink-0 lg:py-24 xl:w-96">
      <div>
        <h1 className="text-5xl font-bold leading-[0.95] tracking-tighter">
          {site.name}
        </h1>
        <p className="mt-4 text-xl font-medium tracking-tight text-text">
          {site.role}
        </p>
        <p className="mt-2 text-muted">{site.tagline}</p>
      </div>

      <LogoParticles
        src={site.logo}
        label={site.logoAlt}
        className="my-10 h-64 w-full sm:h-80 lg:my-12 lg:h-auto lg:min-h-0 lg:flex-1"
      />

      <div className="-ml-2 flex items-center gap-1">
        <SocialLinks />
        <span className="mx-2 h-5 w-px bg-border" aria-hidden />
        <ThemeToggle />
      </div>
    </header>
  );
}
