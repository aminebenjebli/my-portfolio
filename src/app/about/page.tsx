"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "Tools & Others",
    items: ["Git", "Docker", "AWS", "Vercel", "Figma"],
  },
];

export default function About() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial="initial"
        animate="animate"
        className="max-w-4xl mx-auto"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          variants={fadeIn}
        >
          About Me
        </motion.h1>

        <motion.div
          className="grid md:grid-cols-2 gap-12 mb-16"
          variants={fadeIn}
        >
          <div>
            <h2 className="text-2xl font-semibold mb-6">Who I Am</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate Full Stack Developer with a love for creating
                beautiful, functional, and user-centered digital experiences.
                With a background in computer science and years of experience in
                web development, I enjoy the challenge of turning complex
                problems into simple, elegant solutions.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                with the developer community through blog posts and mentoring.
              </p>
              <p>
                I believe in writing clean, maintainable code and staying
                up-to-date with the latest industry trends and best practices.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">What I Do</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I specialize in modern web development, with expertise in React,
                Next.js, and TypeScript. I'm passionate about creating
                performant, accessible, and SEO-friendly applications.
              </p>
              <p>
                My experience spans across the full development lifecycle, from
                initial concept and design to deployment and maintenance. I
                enjoy working with cross-functional teams and have experience in
                both startup and enterprise environments.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeIn}>
          <h2 className="text-2xl font-semibold text-center mb-8">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{skill.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
