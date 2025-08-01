"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/data/skills";
import { technologies } from "@/data/technologies";
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
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div variants={fadeIn} className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Full Stack Developer with over 3 years of
              experience building scalable web applications. I love turning
              complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              through technical writing and mentoring.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                Problem Solver
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                Team Player
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                Continuous Learner
              </span>
            </div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Years of Experience</span>
                  <span className="font-semibold">3+</span>
                </div>
                <div className="flex justify-between">
                  <span>Projects Completed</span>
                  <span className="font-semibold">50+</span>
                </div>
                <div className="flex justify-between">
                  <span>Technologies Mastered</span>
                  <span className="font-semibold">15+</span>
                </div>
                <div className="flex justify-between">
                  <span>Coffee Consumed</span>
                  <span className="font-semibold">∞</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div variants={fadeIn}>
          <h3 className="text-2xl font-bold text-center mb-8">
            Skills & Technologies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skills.map((skillGroup) => (
              <Card key={skillGroup.category} className="text-center">
                <CardHeader>
                  <skillGroup.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <CardTitle className="text-lg">
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {skillGroup.skills.map((skill) => (
                      <span
                        key={skill}
                        className="block text-sm text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technology Icons */}
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4">
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center p-4 rounded-lg hover:bg-accent/50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tech.icon
                  className="h-8 w-8 mb-2"
                  style={{ color: tech.color }}
                />
                <span className="text-xs text-center">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
