"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { technologies } from "@/data/technologies";
import { fadeIn, stagger } from "@/data/animations";
import { AnimatedText } from "@/components/ui/animated-text";

export function ProjectsSection() {
  const getTechIcon = (techName: string) => {
    const tech = technologies.find(
      (t) => t.name.toLowerCase() === techName.toLowerCase()
    );
    return tech?.icon;
  };

  const getTechColor = (techName: string) => {
    const tech = technologies.find(
      (t) => t.name.toLowerCase() === techName.toLowerCase()
    );
    return tech?.color || "#64748b";
  };

  return (
    <section id="projects" className="container mx-auto px-4 py-20">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          variants={fadeIn}
        >
          <AnimatedText
            text="Featured Projects"
            className="text-3xl md:text-4xl font-bold"
            delay={0.2}
          />
        </motion.h2>{" "}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div key={project.id} variants={fadeIn}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GitHubLogoIcon className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((techName) => {
                      const TechIcon = getTechIcon(techName);
                      return (
                        <div
                          key={techName}
                          className="flex items-center space-x-1 px-2 py-1 bg-accent/50 rounded-md text-sm"
                        >
                          {TechIcon && (
                            <TechIcon
                              className="h-4 w-4"
                              style={{ color: getTechColor(techName) }}
                            />
                          )}
                          <span>{techName}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div className="text-center mt-12" variants={fadeIn}>
          <Button size="lg" variant="outline" asChild>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubLogoIcon className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
