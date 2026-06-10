export interface ResumeRole {
  client: string;
  title: string;
  period: string;
  location: string;
  summary?: string;
  stack?: string[];
  highlights: string[];
}

export interface ResumeExperience {
  company: string;
  title: string;
  context: string;
  period: string;
  location: string;
  current?: boolean;
  roles: ResumeRole[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  availability: string;
  yearsExperience: string;
  email: string;
  links: { label: string; href: string; handle: string }[];
}

export const profile: Profile = {
  name: "Nikša Volarević",
  title: "Senior Frontend Engineer",
  tagline: "React · Next.js · TypeScript",
  location: "Belgrade, Serbia",
  availability: "Open to remote — EU / US",
  yearsExperience: "12+ years",
  email: "nikssa@gmail.com",
  links: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nikssa",
      handle: "in/nikssa",
    },
    {
      label: "GitHub",
      href: "https://github.com/nikssa",
      handle: "github.com/nikssa",
    },
    { label: "Email", href: "mailto:nikssa@gmail.com", handle: "nikssa@gmail.com" },
  ],
};

export const summary =
  "Senior Frontend Engineer with 12+ years building React applications at scale, plus a deep history in UI engineering. Lead-level experience driving pods, owning epics end-to-end, mentoring engineers, and shipping fullstack features across React, Next.js, GraphQL, REST, and AWS data tooling. Currently delivering customer-facing marketing tooling at Ticketmaster, with Anthropic Claude embedded in the daily delivery workflow.";

export const experience: ResumeExperience[] = [
  {
    company: "Bakson Ltd.",
    title: "Senior Frontend (FullStack) Developer",
    context: "Contractor at Ticketmaster / Live Nation Entertainment",
    period: "Mar 2025 — Present",
    location: "Remote / Belgrade",
    current: true,
    roles: [
      {
        client: "Ticketmaster — Marketing Team",
        title: "Senior Frontend (FullStack) Developer",
        period: "Feb 2026 — Present",
        location: "Remote",
        summary: "Customer-facing marketing surfaces.",
        stack: [
          "React",
          "TypeScript",
          "MUI",
          "TanStack Query",
          "GraphQL",
          "REST",
          "Databricks",
          "AWS QuickSight",
          "Anthropic Claude",
        ],
        highlights: [
          "Build campaign-management UI — audience targeting and a permissions admin UI for role-based access across marketing tooling.",
          "Deliver Performance Media Dashboards (PMD) — React + MUI + TanStack Query frontend over GraphQL/REST, sourcing data from Databricks and rendering AWS QuickSight datasets, analyses, and embedded dashboards.",
          "Apply Anthropic Claude and LLM coding agents in daily delivery — codebase navigation, refactors, test scaffolding, accelerated PR review.",
          "Work fullstack beyond the frontend title — pull tickets across API, BFF, and frontend boundaries to unblock the pod.",
        ],
      },
      {
        client: "Ticketmaster — Reports Team",
        title: "Senior Frontend Developer",
        period: "Mar 2025 — Feb 2026",
        location: "Hybrid Belgrade",
        summary: "TM1 Reports product line — Reports Catalog and Host & Architectures.",
        stack: ["React", "AWS S3", "AWS QuickSight", "SQL", "Jest", "Playwright"],
        highlights: [
          "Drove daily standups and the team dashboard for a pod-based delivery model; owned epic-level delivery and coordinated with adjacent product and data teams.",
          "Built React features backed by AWS S3 and AWS QuickSight; ran SQL queries against the data warehouse to power custom report views.",
          "Wrote unit and integration tests (Jest, React Testing Library) and Playwright E2E suites; contributed to CI/CD pipeline reliability and PR-review throughput.",
        ],
      },
    ],
  },
  {
    company: "Epicentrum d.o.o.",
    title: "Senior / Lead Frontend Developer",
    context: "Stacc Quesnay engagement — Construo product line (fintech / contract-lifecycle)",
    period: "Feb 2021 — Feb 2025",
    location: "Belgrade (Remote)",
    roles: [
      {
        client: "Construo Customer Portal + CLM Portal",
        title: "Senior / Lead Frontend Developer",
        period: "Feb 2021 — Feb 2025",
        location: "Belgrade (Remote)",
        stack: ["React", "Next.js", "React Query", "TypeScript"],
        highlights: [
          "Lead Frontend on Customer Portal — owned frontend architecture decisions, reviewed all frontend PRs, mentored mid-level engineers.",
          "Introduced Next.js and React Query into the CLM Portal stack — improved page performance, SEO, and developer experience.",
          "Maintained a multi-product TypeScript codebase; ran FrontendShare, DevShare, and ReactShare knowledge-sharing sessions inside the engineering org.",
          "Collaborated cross-team with backend, design, and product to ship UI/UX from Figma drafts to production.",
        ],
      },
    ],
  },
  {
    company: "AddNode Balkan",
    title: "Senior Frontend Developer",
    context: "Client: Kompanion",
    period: "May 2018 — Feb 2021",
    location: "Belgrade",
    roles: [
      {
        client: "Kompanion",
        title: "Senior / Lead Frontend Developer",
        period: "May 2018 — Feb 2021",
        location: "Belgrade",
        stack: ["React", "Redux"],
        highlights: [
          "Senior / Lead Frontend role across React + Redux client projects.",
          "Owned UI/UX-to-implementation delivery from design files through release; partnered closely with designers on responsiveness, interactivity, and accessibility.",
          "Worked in cross-functional teams of 3–12 across the engagement.",
        ],
      },
    ],
  },
  {
    company: "Mogul",
    title: "UI Developer / EpiServer Frontend Specialist",
    context: "Long-tenure UI engineering",
    period: "Oct 2007 — May 2018",
    location: "Belgrade",
    roles: [
      {
        client: "Mogul",
        title: "UI Developer / EpiServer Frontend Specialist",
        period: "Oct 2007 — May 2018",
        location: "Belgrade",
        highlights: [
          "Long-tenure UI development across HTML, CSS, JavaScript, jQuery, and successive JS libraries and frameworks.",
          "EpiServer Frontend Specialist from June 2016 — spearheaded the frontend on EpiServer projects and contributed to scalability and performance of the resulting web applications.",
        ],
      },
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript (ES2024)", "HTML", "SCSS", "SQL"],
  },
  {
    label: "Frontend",
    items: [
      "React 19",
      "Next.js 16",
      "Redux Toolkit",
      "TanStack Query",
      "MUI",
      "React Hook Form",
      "Storybook",
      "Chromatic",
    ],
  },
  { label: "API", items: ["GraphQL", "REST"] },
  {
    label: "Backend",
    items: ["Node.js", "Next.js Route Handlers", "Prisma", "PostgreSQL"],
  },
  {
    label: "Testing",
    items: ["Jest", "React Testing Library", "Vitest", "Playwright (E2E)", "MSW"],
  },
  {
    label: "Cloud / Data",
    items: ["AWS S3", "AWS QuickSight", "Databricks", "SQL analytics"],
  },
  { label: "Auth & Security", items: ["JWT (jose)", "Session auth", "OWASP basics"] },
  {
    label: "CI/CD & Tooling",
    items: ["GitHub Actions", "GitLab CI", "Docker", "Vite", "Webpack", "ESLint", "Prettier"],
  },
  {
    label: "AI-assisted dev",
    items: ["Anthropic Claude", "Claude Code", "MCP servers", "Custom agents & skills"],
  },
  {
    label: "Practices",
    items: [
      "Agile (Scrum, Kanban)",
      "Pod leadership",
      "Code review",
      "Accessibility (WCAG)",
      "Responsive design",
      "i18n",
    ],
  },
];

export const about = {
  paragraphs: [
    "I build React applications at scale and lead the frontend craft around them — architecture, reviews, mentoring, and the unglamorous fullstack work it takes to ship. My background in architecture (the building kind) shows up in how I think about structure, hierarchy, and the experience of moving through a system.",
    "Today I work on customer-facing marketing tooling at Ticketmaster: campaign management, permissions, and data-heavy dashboards built on React, MUI, TanStack Query, GraphQL, Databricks, and AWS QuickSight — with Claude embedded in my daily delivery workflow.",
    "Over 12+ years I've gone from hand-writing HTML/CSS to leading pods across fintech, enterprise, and live-entertainment products. I care about typography, motion, accessibility, and frontends that feel deliberate.",
  ],
  certifications: [
    "DESIGN RULES: Principles + Practices for Great UI Design — Udemy, 2021",
  ],
  education: "University of Belgrade — Architecture (1993–1998)",
};
