"use client";

import { motion } from "framer-motion";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Mail, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
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

          <motion.div
            className="flex justify-center space-x-6"
            variants={fadeIn}
          >
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

      {/* Featured Projects Section */}
      <section
        id="projects"
        className="container mx-auto px-4 py-20 bg-muted/50"
      >
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            variants={fadeIn}
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <motion.div key={i} variants={fadeIn}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>Project {i}</CardTitle>
                    <CardDescription>
                      A brief description of what this project does and the
                      technologies used.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                          React
                        </span>
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                          Next.js
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() =>
                            window.open(
                              "https://github.com/yourusername/project",
                              "_blank"
                            )
                          }
                          aria-label="View source code"
                        >
                          <GitHubLogoIcon className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() =>
                            window.open("https://project-demo.com", "_blank")
                          }
                          aria-label="View live demo"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div className="text-center mt-12" variants={fadeIn}>
            <Button
              variant="outline"
              size="lg"
              onClick={() => (window.location.href = "/projects")}
            >
              View All Projects
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
