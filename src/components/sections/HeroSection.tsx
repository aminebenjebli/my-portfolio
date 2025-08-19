"use client";

import { motion } from "framer-motion";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedText, GradientText } from "@/components/ui/animated-text";
import { fadeIn, stagger } from "@/data/animations";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="home" className="container mx-auto px-4 py-20 md:py-32">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start lg:items-start">
          {/* Text Content */}
          <motion.div
            className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
            variants={fadeIn}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6"
              variants={fadeIn}
            >
              <AnimatedText
                text="Hi, I'm "
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
              />
              <GradientText
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
                gradient="from-primary via-blue-500 to-purple-600"
              >
                Amine Ben Jebli
              </GradientText>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
              variants={fadeIn}
            >
              <AnimatedText
                text="Full Stack Mobile Engineer passionate about creating innovative mobile experiences that make a difference."
                className="text-lg md:text-xl lg:text-2xl"
                delay={0.5}
              />
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
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
                onClick={() => {
                  // Create a temporary link element for download
                  const link = document.createElement("a");
                  link.href = "/documents/Amine-benjebli-resume-internship.pdf";
                  link.download = "Amine-benjebli-resume-internship.pdf"; // Custom filename for download
                  link.target = "_blank";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </motion.div>

            <motion.div
              className="flex justify-center lg:justify-start space-x-6"
              variants={fadeIn}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  window.open("https://github.com/aminebenjebli", "_blank")
                }
                aria-label="GitHub"
              >
                <GitHubLogoIcon className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/ben-jebli-amine/",
                    "_blank"
                  )
                }
                aria-label="LinkedIn"
              >
                <LinkedInLogoIcon className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "mailto:aminebenjebli@gmail.com";
                  link.click();
                }}
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="lg:col-span-5 flex justify-center order-1 lg:order-2 mb-8 lg:mb-0"
            variants={fadeIn}
          >
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient Ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-purple-600 rounded-full p-1">
                <div className="bg-background rounded-full p-2">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden">
                    <Image
                      src="/images/personal/bj-picture.jpg"
                      alt="Amine Ben Jebli"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover object-center"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Floating Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-500/20 rounded-full"
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute top-1/4 -left-8 w-4 h-4 bg-primary/20 rounded-full"
                animate={{
                  x: [-5, 5, -5],
                  opacity: [0.4, 0.9, 0.4],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
