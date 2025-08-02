"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  readonly text: string;
  readonly className?: string;
  readonly delay?: number;
  readonly duration?: number;
}

export function AnimatedText({
  text,
  className = "",
  delay = 0,
  duration = 0.05,
}: AnimatedTextProps) {
  const letters = text.split("");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: duration,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <>
      <style>{`
        @keyframes colorWalk {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 400% 400%;
          animation: gradientShift 3s ease infinite;
        }
      `}</style>
      <motion.span
        className={className}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={`${letter}-${index}`}
            variants={child}
            className="inline-block"
            style={{
              background: `linear-gradient(90deg, 
                hsl(var(--muted-foreground)) 0%, 
                hsl(var(--primary)) 50%, 
                hsl(var(--muted-foreground)) 100%)`,
              backgroundSize: "200% 100%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: `colorWalk 2s ease-in-out ${index * 0.1}s infinite`,
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.span>
    </>
  );
}

interface GradientTextProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly gradient?: string;
}

export function GradientText({
  children,
  className = "",
  gradient = "from-primary via-purple-500 to-primary",
}: GradientTextProps) {
  return (
    <motion.span
      className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent animate-gradient-x ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.span>
  );
}
