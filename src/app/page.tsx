"use client";

import { motion } from "framer-motion";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import {
  Mail,
  Download,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiTailwindcss,
  SiFramer,
} from "react-icons/si";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Footer } from "@/components/layout/Footer";

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

const technologies = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
];

const skills = [
  {
    category: "Frontend",
    icon: Globe,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    icon: Database,
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Docker"],
  },
  {
    category: "Mobile",
    icon: Smartphone,
    skills: ["React Native", "Expo", "Mobile-First Design"],
  },
  {
    category: "Tools",
    icon: Code,
    skills: ["Git", "VS Code", "Figma", "Postman", "Linux"],
  },
];

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce-demo.com",
    image: "/api/placeholder/400/300",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration, and progress tracking.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/yourusername/taskmanager",
    demo: "https://taskmanager-demo.com",
    image: "/api/placeholder/400/300",
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard with location-based forecasts, interactive maps, and data visualizations.",
    technologies: ["React", "TypeScript", "Chart.js", "Weather API"],
    github: "https://github.com/yourusername/weather",
    demo: "https://weather-demo.com",
    image: "/api/placeholder/400/300",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
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

      {/* About Section */}
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
                complex problems into simple, beautiful, and intuitive
                solutions.
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
              {skills.map((skillGroup, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <skillGroup.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <CardTitle className="text-lg">
                      {skillGroup.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
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
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
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

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20">
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
            {projects.map((project, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-lg"></div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => window.open(project.github, "_blank")}
                          aria-label="View source code"
                        >
                          <GitHubLogoIcon className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => window.open(project.demo, "_blank")}
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
              onClick={() =>
                window.open("https://github.com/yourusername", "_blank")
              }
            >
              View All Projects
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="container mx-auto px-4 py-20 bg-muted/50"
      >
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            variants={fadeIn}
          >
            Let's Work Together
          </motion.h2>

          <motion.p
            className="text-xl text-muted-foreground mb-8"
            variants={fadeIn}
          >
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can bring your ideas to life!
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            variants={fadeIn}
          >
            <Button
              size="lg"
              onClick={() =>
                (window.location.href = "mailto:your.email@example.com")
              }
            >
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                window.open("https://linkedin.com/in/yourusername", "_blank")
              }
            >
              <LinkedInLogoIcon className="mr-2 h-4 w-4" />
              Connect on LinkedIn
            </Button>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card className="max-w-md mx-auto">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Get in Touch</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-sm">your.email@example.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <GitHubLogoIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm">github.com/yourusername</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <LinkedInLogoIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm">
                      linkedin.com/in/yourusername
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
