export type Project = {
  title: string;
  description: string;
  tags: string[];
  url: string;
};

export const projects: Project[] = [
  {
    title: "Bird",
    description:
      "An IDE for Flutter development, written in Flutter itself. Zero webviews, zero Monaco, zero Electron.",
    tags: ["Flutter", "Dart", "Desktop"],
    url: "https://github.com/yakupkahraman/bird",
  },
  {
    title: "AEP: AI Emotion Protocol",
    description:
      "Open-source protocol that decodes an LLM's internal emotional state from residual-stream activations.",
    tags: ["TypeScript", "LLM", "Research"],
    url: "https://github.com/yakupkahraman/aep",
  },
  {
    title: "SkyWeb",
    description:
      "Experimental web ecosystem exploring how the web works under the hood: a custom sky:// protocol, a Flutter browser, and edge DNS.",
    tags: ["Flutter", "Dart", "Networking"],
    url: "https://github.com/yakupkahraman/skyweb",
  },
  {
    title: "Flutter Mini Projects",
    description:
      "A collection of beginner-friendly Flutter mini projects to help others learn by building.",
    tags: ["Flutter", "Dart", "Open Source"],
    url: "https://github.com/yakupkahraman/flutter-mini-projects",
  },
  {
    title: "HeyLex",
    description:
      "HeyAI's EdTech MVP, built at the hackathon run with YTU Startup House and Meta. Won 1st place.",
    tags: ["Flutter", "Dart", "AI"],
    url: "https://github.com/yakupkahraman/heylex-hackathon",
  },
  {
    title: "HeyUni",
    description:
      "HeyAI's EdTech MVP from the YTU Startup House StaryUp Bootcamp '25 hackathon. Won 1st place.",
    tags: ["Flutter", "AI", "EdTech"],
    url: "https://github.com/yakupkahraman/heyuni-hackathon",
  },
  {
    title: "yakupkahraman.com",
    description:
      "This site. Next.js App Router, Tailwind, and Lenis smooth scroll.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    url: "https://github.com/yakupkahraman/yakupkahraman.com",
  },
];
