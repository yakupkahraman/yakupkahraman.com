export type SocialPlatform = "github" | "linkedin" | "x" | "reddit" | "email";

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  href: string;
};

export const site = {
  name: "Yakup Kahraman",
  role: "Software Engineer",
  tagline: "Building some cool stuffs",
  email: "me@yakupkahraman.com",
  url: "https://yakupkahraman.com",
  logo: "/avatar.png",
  logoAlt: "Yakup Kahraman logo: a bird with spread wings over the letters YK",
};

export const socials: SocialLink[] = [
  {
    platform: "github",
    label: "GitHub",
    href: "https://github.com/yakupkahraman",
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/yakup-kahraman",
  },
  { platform: "x", label: "X", href: "https://x.com/yakup_kahraman1" },
  {
    platform: "reddit",
    label: "Reddit",
    href: "https://www.reddit.com/user/yakupkahraman",
  },
  { platform: "email", label: "Email", href: `mailto:${site.email}` },
];
