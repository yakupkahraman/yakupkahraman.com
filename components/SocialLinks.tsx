import type { Icon } from "@phosphor-icons/react";
import {
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  RedditLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react/ssr";
import { HoverUnderline } from "@/components/HoverUnderline";
import { socials, type SocialPlatform } from "@/content/site";
import { linkProps } from "@/lib/links";

const ICONS: Record<SocialPlatform, Icon> = {
  github: GithubLogoIcon,
  linkedin: LinkedinLogoIcon,
  x: XLogoIcon,
  reddit: RedditLogoIcon,
  email: EnvelopeSimpleIcon,
};

export function SocialLinks() {
  return (
    <>
      {socials.map(({ platform, label, href }) => {
        const PlatformIcon = ICONS[platform];
        return (
          <a
            key={platform}
            {...linkProps(href)}
            aria-label={label}
            title={label}
            className="group rounded-md p-2 text-muted transition-colors hover:text-text"
          >
            <HoverUnderline className="block">
              <PlatformIcon size={20} weight="light" className="block" />
            </HoverUnderline>
          </a>
        );
      })}
    </>
  );
}
