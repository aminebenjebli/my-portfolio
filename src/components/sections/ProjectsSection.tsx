"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Star,
  Zap,
  Target,
  Sparkles,
} from "lucide-react";
import { projects } from "@/data/projects";
import { technologies } from "@/data/technologies";
import { fadeIn, stagger } from "@/data/animations";
import { GradientText } from "@/components/ui/animated-text";

export function ProjectsSection() {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (projectId: number) => {
    setExpandedCards((prev) =>
      prev.includes(projectId)
        ? prev.filter((id) => id !== projectId)
        : [...prev, projectId]
    );
  };

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

    if (!tech) return "#64748b";

    // Handle dark icons that need special treatment in dark mode
    const darkIcons = ["#000000", "#000020", "#FFFFFF"];
    const isDarkIcon = darkIcons.includes(tech.color);

    let iconColor = tech.color;

    // Special handling for specific technologies
    if (
      tech.name === "Next.js" ||
      tech.name === "Symfony" ||
      tech.name === "Notion"
    ) {
      iconColor = "hsl(var(--foreground))"; // Theme-aware foreground
    } else if (tech.name === "Expo") {
      iconColor = "#4630EB"; // Expo brand purple
    } else if (isDarkIcon) {
      iconColor = "hsl(var(--foreground))";
    }

    return iconColor;
  };

  const getFeatureIcon = (index: number) => {
    const icons = [Star, Zap, Target, Sparkles];
    return icons[index % icons.length];
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
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          variants={fadeIn}
        >
          <GradientText
            className="text-4xl md:text-5xl font-bold"
            gradient="from-primary via-purple-500 to-blue-500"
          >
            Featured Projects
          </GradientText>
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isExpanded = expandedCards.includes(project.id);
            return (
              <motion.div
                key={project.id}
                variants={fadeIn}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-card/50 to-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                          {project.title}
                        </CardTitle>
                        <motion.div
                          className="w-12 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full mb-4"
                          initial={{ width: 0 }}
                          whileInView={{ width: 48 }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                        />
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            size="sm"
                            variant="outline"
                            className="hover:bg-primary/10"
                            asChild
                          >
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <GitHubLogoIcon className="h-4 w-4" />
                            </a>
                          </Button>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/80 hover:to-purple-600/80"
                            asChild
                          >
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <motion.p
                      className="text-muted-foreground leading-relaxed text-base"
                      initial={{ opacity: 0.8 }}
                      whileInView={{ opacity: 1 }}
                    >
                      {isExpanded
                        ? project.description
                        : `${project.description.slice(0, 150)}...`}
                    </motion.p>

                    {/* Technology Stack */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-primary uppercase tracking-wider">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((techName, techIndex) => {
                          const TechIcon = getTechIcon(techName);
                          return (
                            <motion.div
                              key={techName}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.3,
                                delay: index * 0.1 + techIndex * 0.05,
                              }}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-primary/10 to-purple-500/10 hover:from-primary/20 hover:to-purple-500/20 rounded-full text-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-sm"
                            >
                              {TechIcon && (
                                <TechIcon
                                  className="h-4 w-4"
                                  style={{ color: getTechColor(techName) }}
                                />
                              )}
                              <span className="font-medium">{techName}</span>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-sm text-primary uppercase tracking-wider flex items-center">
                        <Sparkles className="h-4 w-4 mr-2" />
                        Key Features
                      </h4>

                      <AnimatePresence mode="wait">
                        <motion.div className="space-y-3" initial={false}>
                          {(isExpanded
                            ? project.features
                            : project.features.slice(0, 2)
                          ).map((feature, featureIndex) => {
                            const FeatureIcon = getFeatureIcon(featureIndex);
                            const [title, description] = feature.split(" – ");

                            return (
                              <motion.div
                                key={`${project.id}-feature-${featureIndex}`}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.4,
                                  delay: featureIndex * 0.1,
                                }}
                                className="flex items-start space-x-3 p-3 rounded-lg bg-gradient-to-r from-muted/30 to-muted/10 hover:from-muted/50 hover:to-muted/20 transition-all duration-300 border border-border/30 hover:border-primary/20"
                              >
                                <div className="flex-shrink-0 mt-0.5">
                                  <FeatureIcon className="h-4 w-4 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h5 className="font-semibold text-sm text-foreground mb-1 leading-tight">
                                    {title}
                                  </h5>
                                  {description && (
                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                      {description}
                                    </p>
                                  )}
                                </div>
                              </motion.div>
                            );
                          })}
                        </motion.div>
                      </AnimatePresence>

                      {/* Expand/Collapse Button */}
                      {project.features.length > 2 && (
                        <motion.button
                          onClick={() => toggleCard(project.id)}
                          className="flex items-center justify-center w-full py-2 mt-4 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200 rounded-lg hover:bg-primary/5"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {isExpanded ? (
                            <>
                              <ChevronUp className="h-4 w-4 mr-1" />
                              Show Less
                            </>
                          ) : (
                            <>
                              <ChevronDown className="h-4 w-4 mr-1" />
                              Show More ({project.features.length - 2} more
                              features)
                            </>
                          )}
                        </motion.button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
        <motion.div className="text-center mt-16" variants={fadeIn}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary via-purple-600 to-blue-600 hover:from-primary/90 hover:via-purple-600/90 hover:to-blue-600/90 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a
                href="https://github.com/aminebenjebli"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3"
              >
                <GitHubLogoIcon className="h-5 w-5" />
                <span>Explore More Projects</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
          <motion.p
            className="text-muted-foreground mt-4 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Discover more innovative projects and contributions on GitHub
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
