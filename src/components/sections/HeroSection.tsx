"use client";

import { motion } from "framer-motion";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeIn, stagger } from "@/data/animations";

export function HeroSection() {
  return (
    <section id="home" className="container mx-auto px-4 py-20 md:py-32">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          variants={fadeIn}
        >
          Hi, I'm <span className="text-primary">Amine Ben Jebli</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          variants={fadeIn}
        >
          Full Stack Developer passionate about creating digital experiences
          that make a difference.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={fadeIn}
        >
          <Button
            size="lg"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            <Download className="mr-2 h-4 w-4" />
            Resume
          </Button>
        </motion.div>

        <motion.div className="flex justify-center space-x-6" variants={fadeIn}>
          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              window.open("https://github.com/yourusername", "_blank")
            }
            aria-label="GitHub"
          >
            <GitHubLogoIcon className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              window.open("https://linkedin.com/in/yourusername", "_blank")
            }
            aria-label="LinkedIn"
          >
            <LinkedInLogoIcon className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              (window.location.href = "mailto:your.email@example.com")
            }
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
