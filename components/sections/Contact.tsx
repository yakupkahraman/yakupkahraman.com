"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { AnimatedButton } from "@/components/AnimatedButton";
import { AnimatedIconLink } from "@/components/AnimatedIconLink";
import { fadeUpVariants, staggerContainer } from "@/lib/motion-variants";

export function Contact() {
  const socials = [
    { name: "GitHub", icon: Github, url: "https://github.com/yakupkahraman" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/yakupkahraman",
    },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/yakupkahraman" },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-surface/50">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeUpVariants}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-text mb-4"
          >
            Let&apos;s build something.
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted mb-10"
          >
            Open to freelance, collaboration, and full-time roles.
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatedButton
              href="mailto:kahraman.yakup@outlook.com"
              variant="primary"
            >
              <Mail className="w-5 h-5" />
              kahraman.yakup@outlook.com
            </AnimatedButton>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-6 mt-8"
          >
            {socials.map((social, index) => (
              <AnimatedIconLink
                key={social.name}
                href={social.url}
                label={social.name}
                rotateOnHover={index % 2 === 0 ? 10 : -10}
                className="p-3 hover:bg-surface border border-transparent hover:border-border rounded-lg inline-flex"
              >
                <social.icon className="w-6 h-6" />
              </AnimatedIconLink>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
