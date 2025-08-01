"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
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

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with user authentication, payment processing, and admin dashboard.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    github: "https://github.com/yourusername/ecommerce-platform",
    demo: "https://ecommerce-demo.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team collaboration features.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    github: "https://github.com/yourusername/task-manager",
    demo: "https://task-manager-demo.com",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard with location-based forecasts and interactive charts.",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
    github: "https://github.com/yourusername/weather-dashboard",
    demo: "https://weather-dashboard-demo.com",
    featured: false,
  },
  {
    title: "Blog Platform",
    description:
      "A modern blog platform with markdown support, comments system, and SEO optimization.",
    technologies: ["Gatsby", "GraphQL", "Contentful", "Netlify"],
    github: "https://github.com/yourusername/blog-platform",
    demo: "https://blog-platform-demo.com",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing projects and skills with dark mode support.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://your-portfolio.com",
    featured: false,
  },
  {
    title: "Chat Application",
    description:
      "Real-time chat application with private messaging, group chats, and file sharing.",
    technologies: ["React", "Firebase", "WebRTC", "Styled Components"],
    github: "https://github.com/yourusername/chat-app",
    demo: "https://chat-app-demo.com",
    featured: false,
  },
];

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial="initial"
        animate="animate"
        className="max-w-6xl mx-auto"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          variants={fadeIn}
        >
          My Projects
        </motion.h1>

        <motion.p
          className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto"
          variants={fadeIn}
        >
          Here's a collection of projects I've worked on, showcasing my skills
          in full-stack development, UI/UX design, and problem-solving.
        </motion.p>

        {/* Featured Projects */}
        <motion.section className="mb-16" variants={fadeIn}>
          <h2 className="text-2xl font-semibold mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                      <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                        Featured
                      </span>
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Code2 className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Other Projects */}
        <motion.section variants={fadeIn}>
          <h2 className="text-2xl font-semibold mb-8">Other Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Code2 className="mr-1 h-3 w-3" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-1 h-3 w-3" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
