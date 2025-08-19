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
  SiKotlin,
  SiSwift,
  SiDart,
  SiFlutter,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiSymfony,
  SiMysql,
  SiFirebase,
  SiOracle,
  SiExpo,
  SiFigma,
  SiAdobephotoshop,
  SiCanva,
  SiPostman,
  SiJira,
  SiTrello,
  SiNotion,
  SiNestjs,
  SiC,
  SiCplusplus,
  SiAndroid,
  SiApple,
  SiSocketdotio,
  SiUnity,
  SiTensorflow,
  SiWebrtc,
} from "react-icons/si";
import { Box } from "lucide-react";

export const technologies = [
  // Programming Languages
  { name: "C", icon: SiC, color: "#A8B9CC", progress: 75 },
  { name: "C++", icon: SiCplusplus, color: "#00599C", progress: 70 },
  { name: "Java", icon: SiAndroid, color: "#ED8B00", progress: 65 }, // Using Android icon for Java
  { name: "Kotlin", icon: SiKotlin, color: "#7F52FF", progress: 80 },
  { name: "Swift", icon: SiSwift, color: "#FA7343", progress: 75 },
  { name: "Dart", icon: SiDart, color: "#0175C2", progress: 85 },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", progress: 90 },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", progress: 95 },
  { name: "Python", icon: SiPython, color: "#3776AB", progress: 80 },

  // Web Development
  { name: "React", icon: SiReact, color: "#61DAFB", progress: 95 },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000", progress: 90 }, // Will be handled dynamically
  { name: "NestJS", icon: SiNestjs, color: "#E0234E", progress: 85 },
  { name: "NestJs", icon: SiNestjs, color: "#E0234E", progress: 85 }, // Alternative spelling
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", progress: 85 },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26", progress: 95 },
  { name: "CSS3", icon: SiCss3, color: "#1572B6", progress: 90 },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", progress: 90 },
  { name: "PHP", icon: SiPhp, color: "#777BB4", progress: 70 },
  { name: "Symfony", icon: SiSymfony, color: "#000000", progress: 75 }, // Will be handled dynamically

  // Mobile Development
  { name: "React Native", icon: SiReact, color: "#61DAFB", progress: 85 }, // Using React icon
  { name: "Flutter", icon: SiFlutter, color: "#02569B", progress: 80 },
  { name: "Expo", icon: SiExpo, color: "#000020", progress: 85 }, // Will be handled dynamically
  { name: "iOS", icon: SiApple, color: "#007AFF", progress: 75 }, // iOS blue
  { name: "Android", icon: SiAndroid, color: "#3DDC84", progress: 70 },

  // Databases
  { name: "MySQL", icon: SiMysql, color: "#4479A1", progress: 80 },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", progress: 75 },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", progress: 85 },
  { name: "MongoDb", icon: SiMongodb, color: "#47A248", progress: 85 }, // Alternative spelling
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28", progress: 80 },
  { name: "Oracle", icon: SiOracle, color: "#F80000", progress: 60 },

  // Tools & Design
  { name: "Docker", icon: SiDocker, color: "#2496ED", progress: 70 },
  { name: "Git", icon: SiGit, color: "#F05032", progress: 90 },
  { name: "Figma", icon: SiFigma, color: "#F24E1E", progress: 85 },
  { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF", progress: 75 },
  { name: "Canva", icon: SiCanva, color: "#00C4CC", progress: 80 },
  { name: "Postman", icon: SiPostman, color: "#FF6C37", progress: 85 },
  { name: "Jira", icon: SiJira, color: "#0052CC", progress: 75 },
  { name: "Trello", icon: SiTrello, color: "#0079BF", progress: 80 },
  { name: "Notion", icon: SiNotion, color: "#000000", progress: 90 }, // Will be handled dynamically
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF", progress: 85 },

  // Additional Technologies
  { name: "Unity", icon: SiUnity, color: "#000000", progress: 75 },
  { name: "Socket.io", icon: SiSocketdotio, color: "#010101", progress: 80 },
  { name: "AI/ML", icon: SiTensorflow, color: "#FF6F00", progress: 70 },
  { name: "WebRTC", icon: SiWebrtc, color: "#333333", progress: 65 },
  { name: "JavaFX", icon: SiAndroid, color: "#ED8B00", progress: 60 }, // Using Java-related icon
  { name: "Twig", icon: SiSymfony, color: "#8BC34A", progress: 70 }, // Twig is part of Symfony ecosystem
  { name: "3D modeling", icon: Box, color: "#9C27B0", progress: 65 },
];
