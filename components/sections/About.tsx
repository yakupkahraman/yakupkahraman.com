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
      title: "Senior Flutter Developer",
      description:
        "Leading mobile development for cross-platform applications.",
    },
    {
      year: "2022",
      title: "Mobile Developer",
      description: "Building production-ready Flutter apps for startups.",
    },
    {
      year: "2020",
      title: "Started Coding Journey",
      description: "Began learning programming with Python and C.",
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
                I&apos;m a Flutter-focused mobile developer who cares about
                polish, performance, and maintainable architecture. I like
                shipping products people rely on every day.
              </p>
              <p>
                Alongside Dart and Flutter, I bring experience with C, web
                stacks, and Python—useful for tooling, backends, and bridging
                gaps across a codebase.
              </p>
              <p>
                yakupkahraman.com is open source on GitHub and deployed on
                Vercel; I enjoy sharing work and iterating in public.
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
