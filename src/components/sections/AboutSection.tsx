"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedText, GradientText } from "@/components/ui/animated-text";
import { skills } from "@/data/skills";
import { fadeIn, stagger } from "@/data/animations";

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 py-20 bg-muted/50">
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
            text="About Me"
            className="text-3xl md:text-4xl font-bold"
          />
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div variants={fadeIn}>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 border border-primary/20 shadow-lg backdrop-blur-sm space-y-6">
              <motion.h3
                className="text-2xl font-bold mb-6 text-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <GradientText
                  className="text-2xl font-bold"
                  gradient="from-primary via-purple-500 to-secondary"
                >
                  My Journey
                </GradientText>
              </motion.h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Full Stack Mobile Developer currently
                completing my final year of engineering studies at ESPRIT. With
                hands-on experience in building scalable web and mobile
                applications, I thrive on transforming complex challenges into
                elegant, user-friendly solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond coding, I'm deeply curious about emerging technologies
                and enjoy contributing to open-source projects. I also love
                sharing knowledge—whether through technical writing, mentoring
                peers, or collaborating on innovative ideas. When I'm not
                immersed in code, you'll find me exploring new frameworks or
                brainstorming ways to make tech more intuitive and impactful.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <motion.span
                  className="px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/30 shadow-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  Problem Solver
                </motion.span>
                <motion.span
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium border border-blue-500/30 shadow-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  Team Player
                </motion.span>
                <motion.span
                  className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium border border-purple-500/30 shadow-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  Continuous Learner
                </motion.span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 border border-primary/20 shadow-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-6 text-center">
                <span className="text-primary hover:bg-gradient-to-r hover:from-primary hover:via-purple-500 hover:to-secondary hover:bg-clip-text hover:text-transparent transition-all duration-300">
                  Professional Metrics
                </span>
              </h3>
              <div className="space-y-6">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-muted-foreground">
                      Years of Experience
                    </span>
                    <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                      1+
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "25%" }}
                      transition={{ duration: 1.5, delay: 0.2 }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-muted-foreground">
                      Projects Completed
                    </span>
                    <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                      10+
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "70%" }}
                      transition={{ duration: 1.5, delay: 0.4 }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-muted-foreground">
                      Technologies Mastered
                    </span>
                    <span className="text-lg font-bold text-purple-600 dark:text-purple-400">
                      15+
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 1.5, delay: 0.6 }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="relative border-t pt-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-muted-foreground">
                      Coffee Consumed
                    </span>
                    <motion.span
                      className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    >
                      ∞
                    </motion.span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden mt-2">
                    <motion.div
                      className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, delay: 0.8 }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div variants={fadeIn}>
          <motion.h3
            className="text-2xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GradientText
              className="text-2xl font-bold"
              gradient="from-primary via-blue-500 to-purple-500"
            >
              Skills & Technologies
            </GradientText>
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {skills.map((skillGroup, index) => {
              // Define colors for different skill category icons
              const iconColors: { [key: string]: string } = {
                Languages: "#FF6B6B",
                "Web Development": "#4ECDC4",
                "Cross-Platform": "#45B7D1",
                "Native Development": "#96CEB4",
                Databases: "#FECA57",
                DevOps: "#FF9FF3",
                "Design Tools": "#54A0FF",
                "API Tools": "#5F27CD",
                "Project Management": "#00D2D3",
              };

              const iconColor =
                iconColors[skillGroup.category] || "hsl(var(--primary))";

              // Function to get theme-aware color for tech icons
              const getTechIconColor = (color: string, name: string) => {
                const darkIcons = ["#000000", "#000020", "#FFFFFF"];
                const isDarkIcon = darkIcons.includes(color);

                if (
                  name === "Next.js" ||
                  name === "Symfony" ||
                  name === "Notion" ||
                  name === "iOS"
                ) {
                  return "hsl(var(--foreground))";
                } else if (name === "Expo") {
                  return "#4630EB";
                } else if (isDarkIcon) {
                  return "hsl(var(--foreground))";
                }
                return color;
              };

              return (
                <motion.div
                  key={skillGroup.category}
                  variants={fadeIn}
                  whileHover={{
                    scale: 1.02,
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                  className="group"
                >
                  <Card className="text-center h-full bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 hover:bg-gradient-to-br hover:from-card/80 hover:to-card/40 overflow-hidden">
                    <CardHeader className="pb-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto mb-3"
                      >
                        <skillGroup.icon
                          className="h-10 w-10"
                          style={{ color: iconColor }}
                        />
                      </motion.div>
                      <CardTitle className="text-lg font-bold text-card-foreground group-hover:text-primary transition-colors mb-4">
                        {skillGroup.category}
                      </CardTitle>

                      {/* Technology Icons for this category */}
                      {skillGroup.techIcons &&
                        skillGroup.techIcons.length > 0 && (
                          <motion.div
                            className="flex flex-wrap justify-center gap-3 mb-4 p-3 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-lg border border-primary/10"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                          >
                            {skillGroup.techIcons.map((tech, techIndex) => (
                              <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{
                                  delay: index * 0.1 + techIndex * 0.05 + 0.3,
                                  duration: 0.4,
                                  type: "spring",
                                  stiffness: 200,
                                }}
                                whileHover={{
                                  scale: 1.3,
                                  y: -5,
                                  rotate: [0, -5, 5, 0],
                                  transition: { duration: 0.3 },
                                }}
                                className="relative group/tech"
                              >
                                <tech.icon
                                  className="h-6 w-6 drop-shadow-sm transition-all duration-300 group-hover/tech:drop-shadow-lg"
                                  style={{
                                    color: getTechIconColor(
                                      tech.color,
                                      tech.name
                                    ),
                                  }}
                                />
                                {/* Tooltip with progress */}
                                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-black/90 text-white text-xs rounded-lg opacity-0 group-hover/tech:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10 min-w-[100px]">
                                  <div className="text-center mb-1">
                                    {tech.name}
                                  </div>
                                  <div className="flex justify-between items-center mb-1 text-[10px]">
                                    <span>Progress</span>
                                    <span className="font-bold">
                                      {tech.progress}%
                                    </span>
                                  </div>
                                  <div className="w-full bg-gray-600 rounded-full h-1">
                                    <div
                                      className="h-1 rounded-full transition-all duration-300"
                                      style={{
                                        width: `${tech.progress}%`,
                                        background: `linear-gradient(90deg, ${getTechIconColor(tech.color, tech.name)}aa, ${getTechIconColor(tech.color, tech.name)})`,
                                      }}
                                    />
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
