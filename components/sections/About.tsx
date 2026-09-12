"use client";

import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer } from "@/lib/motion-variants";

function TimelineEntry({
  year,
  title,
  description,
}: {
  year: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      <div className="absolute left-0 top-0 w-px h-full bg-accent/30" />
      <div className="absolute left-[-4px] top-1 w-[9px] h-[9px] rounded-full bg-accent" />
      <span className="text-sm font-mono text-accent">{year}</span>
      <h4 className="text-lg font-semibold text-text mt-1">{title}</h4>
      <p className="text-muted mt-1 text-sm">{description}</p>
    </div>
  );
}

export function About() {
  const timeline = [
    {
      year: "2024 — Now",
      title: "Computer Engineering @ YTU",
      description:
        "B.Sc. in Computer Engineering at Yıldız Technical University.",
    },
    {
      year: "Oct 2024 — Aug 2025",
      title: "MOBILAB Team Member · SKY LAB",
      description:
        "Contributed to core Flutter deliverables and helped organize the ARTLAB and YILDIZJAM summits.",
    },
    {
      year: "Aug 2025 — Now",
      title: "MOBILAB Team Leader · SKY LAB",
      description:
        "Leading the team, guiding Flutter projects, and delivering workshops at GECEKODU and PUSULAM YILDIZ.",
    },
    {
      year: "Oct 2025 — Jan 2026",
      title: "Flutter Developer Intern · WeStudio",
      description:
        "Shipped cross-platform iOS and Android apps from a single Flutter codebase, from scoping to store release.",
    },
    {
      year: "Nov 2025 — Now",
      title: "Core Team Member · GDG on Campus YTU",
      description:
        "Organizing campus-wide tech events and community initiatives for YTU students.",
    },
    {
      year: "Nov 2025 — Now",
      title: "Trainee · YTU Startup House",
      description:
        "Entrepreneurship bootcamp alongside 100 selected participants.",
    },
    {
      year: "Dec 2025 — May 2026",
      title: "Co-Founder · HeyAI Studio",
      description:
        "Led full technical development of HeyUni and HeyLex, two EdTech MVPs.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-16"
        >
          <motion.div variants={fadeUpVariants} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
              About me
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I&apos;m Yakup, a Computer Engineering student at Yıldız
                Technical University and a Flutter developer passionate about
                applied AI and developer communities. I lead the MOBILAB team at
                YTU SKY LAB, where I guide Flutter projects, run technical
                workshops, and mentor members.
              </p>
              <p>
                I co-founded HeyAI Studio and led the technical development of
                HeyUni and HeyLex — two EdTech MVPs that took 1st place at the
                StaryUp Bootcamp &apos;25 hackathon and at the YTU Startup House
                × Meta hackathon. Sesim, my Turkish Sign Language → Text
                project, placed 3rd at the 2026 StarUP Bootcamp hackathon with
                Türksat and NVIDIA, and I&apos;ve been a finalist at Boğaziçi
                Teknopark Bright Masterclass and Biruni Teknopark B&apos;IDEA
                Demo Day.
              </p>
              <p>
                I&apos;m a Core Team member at GDG on Campus YTU and a trainee at
                YTU Startup House, and previously worked as a Flutter Developer
                Intern at WeStudio. My focus is Flutter, Next.js, FastAPI,
                Supabase, and LLM integration. I&apos;m always excited to bring
                cutting-edge tech to campus, empower fellow students, and build
                cool things together.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-text mb-6">Journey</h3>
            <div className="relative">
              {timeline.map((entry) => (
                <TimelineEntry key={entry.title} {...entry} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
