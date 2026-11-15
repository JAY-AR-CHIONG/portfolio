import type { Project } from "@/types"

export const projects: Project[] = [
  {
    slug: "rgc-debt-management",
    title: "RGC Debt Management System",
    shortDescription:
      "A web-based debt management platform with debtor tracking, payment monitoring, receipts, approvals, and financial reporting.",
    overview:
      "RGC Trading needed to replace a paper-and-spreadsheet process for tracking customer debt with something searchable, auditable, and accessible to multiple branch staff at once. The system centralizes debtor profiles, debt records, and payments, and enforces an approval workflow so no single user can create and approve their own transaction.",
    role: "Full-Stack Developer",
    roleType: "Commissioned Project",
    period: "Aug 2026 – Nov 2026",
    location: "Zamboanga City, Philippines",
    categories: ["full-stack", "web", "commissioned"],
    technologies: [
      "Laravel 12",
      "PHP 8.2",
      "Blade",
      "Tailwind CSS",
      "Laravel Breeze",
      "spatie/laravel-permission",
      "Supabase (Postgres)",
      "SQLite",
      "dompdf",
      "Intervention Image",
    ],
    features: [
      {
        title: "Debtor & debt records",
        description:
          "Searchable, filterable, sortable debtor profiles with duplicate-debtor detection and optimistic-concurrency editing.",
      },
      {
        title: "Payment tracking & receipts",
        description:
          "Idempotent payment submission with receipt image uploads — content-validated, EXIF-corrected, resized into archival, preview, and thumbnail variants, de-duplicated per owner.",
      },
      {
        title: "Approval workflow",
        description:
          "Separate debt and payment approval queues with separation-of-duties (no self-approval) and deletion-request handling.",
      },
      {
        title: "Roles & branch management",
        description:
          "Administrator and branch-scoped User roles enforced server-side, with branch-restricted data access on every query.",
      },
      {
        title: "Reports & PDF export",
        description:
          "Print-friendly report preview and PDF export (dompdf, A4 landscape) sharing one filter source of truth with the live list, so totals always match what's on screen.",
      },
      {
        title: "Notifications, retention & audit log",
        description:
          "In-app notifications on submit/approve/reject events, a scheduled receipt-retention job with a safe deletion workflow, and a read-only audit log viewer.",
      },
    ],
    myContribution: [
      "Designed and built the full database schema, models, and Supabase-ready configuration from scratch.",
      "Implemented debt and payment CRUD with search, filtering, sorting, and the approval/rejection workflow.",
      "Built the image service for receipt and profile picture uploads, including resizing, deduplication, and authorized private delivery.",
      "Implemented the reporting module, PDF generation, notifications, retention jobs, and admin tooling for users and branches.",
      "Wrote the automated test suite covering the financial and access-control rules.",
    ],
    developmentProcess:
      "Delivered in five phases: foundation and auth, debt/payment CRUD with approvals, image and receipt storage, reporting and PDF export, then notifications, retention, and admin tooling — with a growing automated test suite (53 tests) validating the financial rules at every phase.",
    challenges: [
      {
        challenge:
          "Preventing a user from approving their own submitted debt or payment while keeping the workflow fast for legitimate approvers.",
        solution:
          "Enforced separation-of-duties at the query and controller layer, with dedicated approval queues scoped by branch and role.",
      },
      {
        challenge: "Keeping report totals accurate when the underlying list is paginated.",
        solution:
          "Built a shared filter object used identically by the list view, the print preview, and the PDF export, with totals always computed over the complete filtered set rather than the current page.",
      },
    ],
    links: [],
    featured: true,
    mockupType: "browser",
    accentFrom: "#2f6fed",
    accentTo: "#22d3ee",
    gallery: [
      { label: "Dashboard" },
      { label: "Debtor profile" },
      { label: "Payment approval queue" },
      { label: "Report & PDF export" },
    ],
    status: "Feature-complete — 53 automated tests passing",
  },
  {
    slug: "vehicle-maintenance-system",
    title: "Vehicle Maintenance Management System",
    shortDescription:
      "A Windows desktop application for a Philippine Army unit to track vehicle records, maintenance scheduling, and service history.",
    overview:
      "Built for a Philippine Army unit that needed a straightforward way to track a vehicle fleet's maintenance without relying on a live server, this system packages a Laravel API and React frontend inside an Electron desktop shell, bundling a portable PHP runtime so it installs and runs on any Windows PC with a single .exe — no Node, PHP, or MySQL setup required on the user's machine.",
    role: "Full-Stack Developer",
    roleType: "Commissioned Project",
    period: "May 2026 – June 2026",
    location: "Zamboanga City, Philippines",
    categories: ["full-stack", "web", "commissioned"],
    technologies: ["Laravel 12", "React 19", "Electron", "SQLite", "REST API"],
    features: [
      {
        title: "Vehicle records",
        description: "Centralized vehicle profiles covering identification, status, and assigned unit details.",
      },
      {
        title: "Maintenance scheduling",
        description: "Scheduling and tracking of upcoming and completed maintenance work per vehicle.",
      },
      {
        title: "Service history",
        description: "A running service history per vehicle for accountability and planning.",
      },
      {
        title: "Offline desktop packaging",
        description:
          "Ships as a single Windows installer bundling a portable PHP runtime and SQLite database, with a splash screen while the local backend starts in the background — no external dependencies on the end user's machine.",
      },
      {
        title: "Role-based accounts",
        description: "Separate Admin and User accounts for day-to-day operation versus administration.",
      },
    ],
    myContribution: [
      "Built the Laravel REST API covering vehicle, maintenance, and service-history records.",
      "Built the React frontend consuming that API.",
      "Set up the Electron packaging pipeline: bundling a portable PHP runtime, wiring the splash screen and background server startup, and producing a one-click Windows installer.",
    ],
    developmentProcess:
      "Developed the Laravel API and React frontend as a normal local web app first, then packaged both inside Electron with a bundled PHP runtime so the finished app runs as a native-feeling Windows installer with zero external dependencies — the install folder stays read-only while a writable app-data copy holds the live SQLite database.",
    links: [],
    featured: true,
    mockupType: "desktop",
    accentFrom: "#15803d",
    accentTo: "#4f8dff",
    gallery: [
      { label: "Vehicle list" },
      { label: "Maintenance scheduling" },
      { label: "Service history" },
      { label: "Windows installer & splash screen" },
    ],
    status: "Delivered as a packaged Windows installer",
  },
  {
    slug: "rgc-inventory-pos",
    title: "RGC Inventory and Point-of-Sale System",
    shortDescription:
      "A mobile inventory and POS system for a retail business, built with Flutter for product management, sales, and stock monitoring.",
    overview:
      "Built for RGC Trading to move day-to-day stock counting and sales recording off paper and onto a phone or tablet, this Flutter application handles product records, point-of-sale transactions, and stock-level monitoring in one mobile workflow.",
    role: "Full-Stack Developer",
    roleType: "Commissioned Project",
    period: "Nov 2025 – Aug 2026",
    location: "Zamboanga City, Philippines",
    categories: ["mobile", "commissioned"],
    technologies: ["Flutter", "Dart"],
    features: [
      { title: "Product management", description: "Create and maintain product records with stock quantities." },
      { title: "Point-of-sale interface", description: "A mobile-first interface for recording sales transactions." },
      { title: "Stock monitoring", description: "Tracks inventory levels as products are sold or restocked." },
      { title: "Sales processing", description: "Processes sales and keeps records tied to stock movement." },
    ],
    myContribution: [
      "Built the Flutter application end to end: product management, sales processing, and stock-monitoring screens.",
      "Designed the mobile UI/UX for a retail-counter workflow used by non-technical staff.",
    ],
    links: [],
    featured: true,
    mockupType: "mobile",
    accentFrom: "#7c3aed",
    accentTo: "#2f6fed",
    gallery: [
      { label: "Product list" },
      { label: "Point-of-sale screen" },
      { label: "Stock monitoring" },
    ],
    status: "In active use",
  },
  {
    slug: "ess-error-registry",
    title: "ESS Error Registry System",
    shortDescription:
      "An internal Laravel system for logging, resolving, and auditing system errors, built during a software development internship.",
    overview:
      "Built during a Software Developer internship at Emergence Systems and Solutions, the Error Registry System gives staff a structured way to log system errors, route them through admin review and resolution, and keep an auditable trail — replacing ad-hoc error reporting with a proper workflow.",
    role: "Software Developer Intern",
    roleType: "Internship / Team Project",
    period: "June 2025 – July 2025",
    location: "Zamboanga City, Philippines",
    categories: ["full-stack", "web", "internship"],
    technologies: ["Laravel", "PHP", "MySQL", "Laravel Fortify"],
    features: [
      {
        title: "Error log submission",
        description: "Users submit error logs with attachments; admins can also log errors directly.",
      },
      {
        title: "Review & resolution workflow",
        description: "Admins approve error logs, edit resolutions, and archive resolved entries.",
      },
      {
        title: "User & account management",
        description: "Admin-only account creation, deactivation/restoration, password resets, and role gating.",
      },
      {
        title: "Activity logs & notifications",
        description: "A dedicated activity log view and in-app notifications for admin review actions.",
      },
      {
        title: "Attachment handling",
        description: "Bulk download of all attachments on an error log entry.",
      },
    ],
    myContribution: [
      "Implemented authentication and the active/inactive user-access middleware.",
      "Built user management features: account creation, deactivation, restoration, and password resets.",
      "Developed the error-log submission, update, and admin approval/resolution/archive flow.",
      "Integrated database schema and migrations supporting the above, and contributed to system testing and technical documentation.",
    ],
    links: [],
    featured: false,
    mockupType: "browser",
    accentFrom: "#dc2626",
    accentTo: "#f59e0b",
    gallery: [
      { label: "Error log list" },
      { label: "Admin approval view" },
      { label: "Activity log" },
    ],
    status: "Delivered as part of internship team",
  },
  {
    slug: "lantaka-reservation",
    title: "Lantaka Room and Event Reservation System",
    shortDescription:
      "A React and Tailwind CSS frontend for reserving university rooms and events, built for the university's Community Service Involvement Office.",
    overview:
      "Project Lantaka gives university staff and students a modern interface for booking rooms and events, replacing a manual request process. I focused on the frontend — building the reservation interface and interaction design — while contributing to the MySQL data model behind it.",
    role: "Software Developer",
    roleType: "Academic / University Project",
    period: "Aug 2024 – Dec 2024",
    location: "Ateneo de Zamboanga University",
    categories: ["web", "academic"],
    technologies: ["React.js", "Vite", "Tailwind CSS", "shadcn/ui", "MySQL"],
    features: [
      { title: "Room reservation interface", description: "A responsive, intuitive flow for booking rooms and events." },
      { title: "Real-time availability", description: "Reflects room availability as bookings are made." },
      { title: "Modern component system", description: "Built on shadcn/ui components for a consistent, accessible interface." },
      { title: "ERD-backed data model", description: "Backed by Entity Relationship Diagrams designed for the MySQL schema." },
    ],
    myContribution: [
      "Built the React + Tailwind CSS frontend, focusing on the reservation interface and Human-Computer Interaction.",
      "Assisted in designing the Entity Relationship Diagrams and data flows behind the MySQL integration.",
    ],
    links: [],
    featured: false,
    mockupType: "browser",
    accentFrom: "#0891b2",
    accentTo: "#2f6fed",
    gallery: [{ label: "Reservation interface" }, { label: "Room availability view" }],
    status: "Delivered for university office use",
  },
  {
    slug: "ai-landscape-classification",
    title: "AI vs. Human-Created Landscape Classification",
    shortDescription:
      "A multi-model voting system research project distinguishing AI-generated from human-painted landscape art.",
    overview:
      "An undergraduate research project exploring whether an ensemble of classical and deep-learning models can reliably tell AI-generated landscape paintings apart from human-created ones — built as a multi-model voting system with a web interface for running predictions.",
    role: "Researcher / Developer",
    roleType: "Academic / Research Project",
    period: "2025 – 2026",
    location: "Ateneo de Zamboanga University",
    categories: ["research", "academic"],
    technologies: ["Python", "Random Forest", "ResNet50", "Vision Transformer", "Next.js", "FastAPI"],
    features: [
      { title: "Multi-model ensemble", description: "Combines Random Forest, ResNet50, and a Vision Transformer." },
      { title: "Soft voting ensemble", description: "Aggregates model confidence scores into a final soft-voted prediction." },
      { title: "Prediction web interface", description: "A Next.js frontend for submitting an image and viewing per-model and ensemble results." },
      { title: "Python inference backend", description: "A Python backend serving the trained models for inference." },
    ],
    myContribution: [
      "Contributed to building and evaluating the ensemble of classification models.",
      "Built the Next.js prediction interface and the Python backend serving model inference.",
    ],
    links: [],
    featured: false,
    mockupType: "browser",
    accentFrom: "#f59e0b",
    accentTo: "#7c3aed",
    gallery: [{ label: "Prediction interface" }, { label: "Model comparison view" }],
    status: "Research project",
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export const projectCategoryLabels: Record<string, string> = {
  all: "All Projects",
  "full-stack": "Full-Stack",
  web: "Web Applications",
  mobile: "Mobile Applications",
  commissioned: "Commissioned Projects",
  internship: "Internship / Team Projects",
  academic: "Academic / AI Projects",
}
