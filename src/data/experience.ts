import type { ExperienceEntry } from "@/types"

export const experience: ExperienceEntry[] = [
  {
    id: "ess-internship",
    organization: "Emergence Systems and Solutions",
    role: "Software Developer Intern",
    period: "June 2025 – July 2025",
    location: "Zamboanga City, Philippines",
    type: "internship",
    description: [
      "Developed core modules for the ESS Error Registry System using Laravel, implementing authentication, user management, and database integration to support system functionality.",
      "Improved team collaboration and code management by using Git-based version control to track changes, manage code updates, and coordinate development tasks.",
      "Supported system development and testing by implementing application features, preparing technical documentation, and participating in system testing to identify and resolve issues.",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "Git"],
  },
  {
    id: "azu-project",
    organization: "Ateneo de Zamboanga University",
    role: "Software Developer — Social Awareness and Community Service Involvement Office",
    period: "August 2024 – December 2024",
    location: "Zamboanga City, Philippines",
    type: "university",
    description: [
      "Contributed to the development of the Lantaka Room and Event Reservation System using React and Tailwind CSS, focusing on frontend interfaces and Human-Computer Interaction (HCI).",
      "Assisted in designing Entity Relationship Diagrams (ERDs) and data flows to support MySQL database integration.",
    ],
    technologies: ["React.js", "Tailwind CSS", "MySQL"],
  },
  {
    id: "rgc-trading",
    organization: "RGC Trading (Family-Owned Business)",
    role: "Finance & Inventory Assistant",
    period: "2013 – Present",
    location: "Zamboanga City, Philippines",
    type: "family-business",
    description: [
      "Managed daily financial transactions by handling cash disbursements, processing customer payments, and recording revenue from stock sales.",
      "Maintained inventory accuracy by monitoring stock purchases, sales, and remaining quantities to support daily business operations.",
      "Tracked business finances and gross sales by maintaining transaction records, monitoring expenses, and preparing financial summaries.",
    ],
    technologies: [],
  },
]
