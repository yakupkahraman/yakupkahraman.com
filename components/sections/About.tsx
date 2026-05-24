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
      year: "2024",
      title: "Computer Engineering @ YTU",
      description:
        "Started B.Sc. in Computer Engineering at Yıldız Technical University.",
    },
    {
      year: "2024–2025",
      title: "MOBILAB Team Member · SKY LAB",
      description:
        "Joined the MOBILAB mobile apps development team at YTU SKY LAB, contributing to community-driven mobile projects.",
    },
    {
      year: "2025–Now",
      title: "MOBILAB Team Leader · SKY LAB",
      description:
        "Leading the MOBILAB team — project planning, team coordination, and shipping cross-platform apps.",
    },
    {
      year: "2025–2026",
      title: "Flutter Developer · WeStudio",
      description:
        "Built production Flutter applications as an intern and developer at WeStudio.",
    },
  ];

  return (
    <section id="about" className="pt-24 pb-12 px-6">
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
                I&apos;m Yakup, a first-year Computer Engineering student at
                Yıldız Technical University and a mobile app developer who
                loves learning and building new things. I lead the MOBILAB team
                at YTU SKY LAB, where I&apos;ve grown my skills and learned to
                collaborate effectively on real projects.
              </p>
              <p>
                I&apos;m Co-Founder at HeyAI Studio, a Core Team member at GDG
                on Campus YTU, and previously worked as a Flutter Developer at
                WeStudio. My focus is Flutter, C, Python, and cross-platform
                mobile development.
              </p>
              <p>
                I enjoy every part of the mobile app development process and
                always look for ways to learn new technologies. I&apos;m open
                to meeting new people, sharing ideas, and collaborating on
                exciting projects.
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
                <TimelineEntry key={entry.year} {...entry} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
