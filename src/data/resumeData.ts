export const resumeData = {
  name: "Alex Mercer",
  title: "Senior Software Engineer",
  location: "San Francisco, CA",
  email: "alex.mercer@dev.io",

  about: [
    "Passionate software engineer with 6+ years crafting scalable systems and elegant solutions.",
    "I thrive at the intersection of low-level performance and high-level product thinking.",
    "Open source contributor, coffee snob, and occasional CTF participant.",
    "",
    "Currently building distributed infrastructure at Scale Systems Inc.",
    "Previously shipped features used by 10M+ users at TechCorp.",
  ],

  experience: [
    {
      company: "Scale Systems Inc.",
      role: "Senior Software Engineer",
      period: "2022 — Present",
      location: "San Francisco, CA",
      bullets: [
        "Architected a distributed job queue handling 50M+ tasks/day using Go & Kafka",
        "Reduced p99 API latency by 40% through query optimization and caching layers",
        "Led a team of 4 engineers on a greenfield microservices migration",
        "Championed internal developer tooling that cut CI/CD times by 60%",
      ],
    },
    {
      company: "TechCorp",
      role: "Software Engineer",
      period: "2020 — 2022",
      location: "New York, NY",
      bullets: [
        "Built real-time analytics dashboard serving 10M+ monthly active users",
        "Designed and implemented RESTful & GraphQL APIs in Node.js / TypeScript",
        "Migrated legacy PHP monolith to React frontend + Node microservices",
        "Mentored 3 junior engineers through structured code review processes",
      ],
    },
    {
      company: "Startup.dev",
      role: "Full Stack Developer (Intern → Junior)",
      period: "2018 — 2020",
      location: "Remote",
      bullets: [
        "Sole developer for MVP SaaS platform — 0 to 1,000 paying customers",
        "Built CI/CD pipelines on GitHub Actions and deployed to AWS ECS",
        "Implemented OAuth2 authentication with JWT refresh token rotation",
      ],
    },
  ],

  education: [
    {
      institution: "University of California, Berkeley",
      degree: "B.S. Computer Science",
      period: "2014 — 2018",
      details: [
        "GPA: 3.8 / 4.0 — Dean's List all semesters",
        "Relevant coursework: Algorithms, OS, Distributed Systems, ML",
        "CS Undergraduate Teaching Assistant — Data Structures",
      ],
    },
    {
      institution: "Hack The Box & TryHackMe",
      degree: "Self-directed Cybersecurity Training",
      period: "2020 — Ongoing",
      details: [
        "Top 1% global ranking on Hack The Box",
        "CEH (Certified Ethical Hacker) — 2022",
      ],
    },
  ],

  skills: {
    languages: ["TypeScript", "Go", "Python", "Rust", "Bash", "SQL"],
    frontend: ["React", "Next.js", "Tailwind CSS", "WebAssembly"],
    backend: ["Node.js", "Go Fiber", "FastAPI", "PostgreSQL", "Redis", "Kafka"],
    devops: ["Docker", "Kubernetes", "Terraform", "AWS", "GCP", "GitHub Actions"],
    tools: ["Neovim", "tmux", "Git", "Wireshark", "Nmap", "Burp Suite"],
  },

  links: [
    { label: "GitHub", url: "https://github.com/alexmercer", icon: "gh" },
    { label: "LinkedIn", url: "https://linkedin.com/in/alexmercer", icon: "li" },
    { label: "Blog", url: "https://alexmercer.dev/blog", icon: "bl" },
    { label: "Email", url: "mailto:alex.mercer@dev.io", icon: "em" },
    { label: "Twitter / X", url: "https://x.com/alexmercer_dev", icon: "tw" },
  ],
};

export type ResumeData = typeof resumeData;
