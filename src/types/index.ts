export interface SocialLink {
  label: string
  url: string
  icon: "mail" | "phone"
}

export interface Profile {
  name: string
  firstName: string
  title: string
  roles: string[]
  location: string
  email: string
  phone: string
  summary: string
  intro: string
  social: SocialLink[]
  facebookName: string
  resumeFile: string
}

export interface SkillCategory {
  category: string
  skills: string[]
}

export interface ExperienceEntry {
  id: string
  organization: string
  role: string
  period: string
  location: string
  type: "internship" | "university" | "family-business"
  description: string[]
  technologies: string[]
}

export interface EducationEntry {
  id: string
  institution: string
  degree: string
  period: string
  location: string
  details?: string[]
}

export type ProjectCategory =
  | "full-stack"
  | "web"
  | "mobile"
  | "commissioned"
  | "internship"
  | "academic"
  | "research"

export interface ProjectFeature {
  title: string
  description: string
}

export interface ProjectLink {
  label: string
  url: string
  type: "github" | "live" | "demo"
}

export interface Project {
  slug: string
  title: string
  shortDescription: string
  overview: string
  role: string
  roleType: string
  period: string
  location: string
  categories: ProjectCategory[]
  technologies: string[]
  features: ProjectFeature[]
  myContribution: string[]
  developmentProcess?: string
  challenges?: { challenge: string; solution: string }[]
  links: ProjectLink[]
  featured: boolean
  mockupType: "browser" | "mobile" | "desktop"
  accentFrom: string
  accentTo: string
  gallery: { label: string; image?: string }[]
  status: string
}

export interface HobbyItem {
  id: string
  type: "photo" | "video"
  caption: string
  accentFrom: string
  accentTo: string
  src?: string
}
