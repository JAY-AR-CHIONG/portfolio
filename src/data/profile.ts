import type { Profile, SkillCategory, EducationEntry } from "@/types"

export const profile: Profile = {
  name: "Josh Rafael B. Chiong",
  firstName: "Josh",
  title: "Full-Stack Developer",
  roles: [
    "Full-Stack Development",
    "Web Application Development",
    "Mobile Application Development",
    "Database-Driven Systems",
    "UI/UX Implementation",
  ],
  location: "Zamboanga City, Philippines",
  email: "joshjoshrafael@gmail.com",
  phone: "0955 005 6055",
  summary:
    "Detail-oriented Computer Science graduate with experience in software development, system development, and database integration. Proficient in Laravel, React, MySQL, PHP, Python, and Flutter, with experience developing inventory, reservation, and vehicle maintenance systems. Skilled in technical documentation, user management, UI/UX design, and collaborative development workflows.",
  intro:
    "I'm a Computer Science graduate from Ateneo de Zamboanga University who builds practical, database-driven software for real businesses and organizations. Over the past two years I've shipped a debt management platform, an inventory and POS system, a vehicle maintenance tracker, and an internal error-registry tool — working across Laravel, React, and Flutter, from database schema to finished interface. I like turning a messy manual process into something a non-technical team can actually use.",
  social: [
    { label: "Email", url: "mailto:joshjoshrafael@gmail.com", icon: "mail" },
    { label: "Phone", url: "tel:+639550056055", icon: "phone" },
  ],
  facebookName: "Josh Rafael Chiong",
  resumeFile: "/resume/Josh_Rafael_Chiong_Resume.pdf",
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    skills: ["React.js", "JavaScript", "TypeScript", "HTML", "Tailwind CSS"],
  },
  {
    category: "Backend Development",
    skills: ["Laravel", "PHP", "REST APIs", "User Authentication"],
  },
  {
    category: "Mobile Development",
    skills: ["Flutter", "Dart"],
  },
  {
    category: "Databases & Backend Services",
    skills: ["MySQL", "Supabase", "SQLite"],
  },
  {
    category: "Development Tools",
    skills: ["Git", "GitHub", "VS Code", "Android Studio", "Figma"],
  },
  {
    category: "Concepts & Practice",
    skills: [
      "System Development",
      "User Management",
      "UI/UX Design",
      "Human-Computer Interaction",
      "Technical Documentation",
    ],
  },
]

export const highlightCards = [
  { label: "BS Computer Science", sub: "Ateneo de Zamboanga University, 2026" },
  { label: "Full-Stack Development", sub: "Laravel, React, MySQL" },
  { label: "Web & Mobile Apps", sub: "React, Flutter & Dart" },
  { label: "Commissioned Projects", sub: "Real clients, real systems" },
]

export const education: EducationEntry[] = [
  {
    id: "azu",
    institution: "Ateneo de Zamboanga University",
    degree: "Bachelor of Science in Computer Science",
    period: "Class of 2026",
    location: "Zamboanga City, Philippines",
  },
]
