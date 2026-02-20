import { resumeData } from "@/data/resumeData";

export type OutputLine = {
  id: string;
  text: string;
  type: "normal" | "success" | "error" | "accent" | "dim" | "amber" | "cyan" | "header" | "blank";
};

let idCounter = 0;
const mkId = () => `line-${++idCounter}`;

const line = (text: string, type: OutputLine["type"] = "normal"): OutputLine => ({
  id: mkId(),
  text,
  type,
});

const blank = (): OutputLine => line("", "blank");

export const AVAILABLE_COMMANDS = [
  "help",
  "whoami",
  "about",
  "experience",
  "education",
  "skills",
  "links",
  "contact",
  "ls",
  "clear",
  "banner",
  "echo",
  "date",
  "uname",
];

export function getBanner(): OutputLine[] {
  return [
    line("╔══════════════════════════════════════════════════════════════╗", "success"),
    line("║                                                              ║", "success"),
    line("║   ██████╗ ███████╗███████╗██╗   ██╗███╗   ███╗███████╗     ║", "success"),
    line("║   ██╔══██╗██╔════╝██╔════╝██║   ██║████╗ ████║██╔════╝     ║", "success"),
    line("║   ██████╔╝█████╗  ███████╗██║   ██║██╔████╔██║█████╗       ║", "success"),
    line("║   ██╔══██╗██╔══╝  ╚════██║██║   ██║██║╚██╔╝██║██╔══╝       ║", "success"),
    line("║   ██║  ██║███████╗███████║╚██████╔╝██║ ╚═╝ ██║███████╗     ║", "success"),
    line("║   ╚═╝  ╚═╝╚══════╝╚══════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝     ║", "success"),
    line("║                                                              ║", "success"),
    line(`║   ${resumeData.name.padEnd(60)}║`, "cyan"),
    line(`║   ${resumeData.title.padEnd(60)}║`, "amber"),
    line(`║   ${resumeData.location.padEnd(60)}║`, "dim"),
    line("║                                                              ║", "success"),
    line("╚══════════════════════════════════════════════════════════════╝", "success"),
    blank(),
    line("Type 'help' to see available commands.", "dim"),
    blank(),
  ];
}

export function processCommand(input: string): OutputLine[] | "clear" {
  const trimmed = input.trim();
  const [cmd, ...args] = trimmed.toLowerCase().split(" ");

  switch (cmd) {
    case "clear":
      return "clear";

    case "help":
      return [
        blank(),
        line("┌─ AVAILABLE COMMANDS ──────────────────────────────────────┐", "success"),
        line("│                                                             │", "dim"),
        line("│  whoami / about   →  Personal introduction                 │", "normal"),
        line("│  experience       →  Work history & roles                  │", "normal"),
        line("│  education        →  Academic background                   │", "normal"),
        line("│  skills           →  Technical skill set                   │", "normal"),
        line("│  links            →  Social profiles & websites            │", "normal"),
        line("│  contact          →  How to reach me                       │", "normal"),
        line("│  ls               →  List all resume sections              │", "normal"),
        line("│  banner           →  Show ASCII banner                     │", "normal"),
        line("│  date             →  Current timestamp                     │", "normal"),
        line("│  uname            →  System info                           │", "normal"),
        line("│  clear            →  Clear the terminal                    │", "normal"),
        line("│  echo <text>      →  Echo text back                        │", "normal"),
        line("│                                                             │", "dim"),
        line("└─────────────────────────────────────────────────────────────┘", "success"),
        blank(),
        line("TIP: Use ↑ / ↓ arrow keys to navigate command history.", "dim"),
        blank(),
      ];

    case "whoami":
    case "about":
      return [
        blank(),
        line(`[ ABOUT: ${resumeData.name} ]`, "header"),
        blank(),
        ...resumeData.about.map((l) => (l === "" ? blank() : line(l))),
        blank(),
      ];

    case "experience":
    case "work": {
      const out: OutputLine[] = [blank(), line("[ WORK EXPERIENCE ]", "header"), blank()];
      resumeData.experience.forEach((job, i) => {
        out.push(line(`${job.company}`, "cyan"));
        out.push(line(`${job.role}  ·  ${job.period}  ·  ${job.location}`, "amber"));
        job.bullets.forEach((b) => out.push(line(`  › ${b}`)));
        if (i < resumeData.experience.length - 1) out.push(blank());
      });
      out.push(blank());
      return out;
    }

    case "education":
    case "edu": {
      const out: OutputLine[] = [blank(), line("[ EDUCATION ]", "header"), blank()];
      resumeData.education.forEach((edu, i) => {
        out.push(line(edu.institution, "cyan"));
        out.push(line(`${edu.degree}  ·  ${edu.period}`, "amber"));
        edu.details.forEach((d) => out.push(line(`  › ${d}`)));
        if (i < resumeData.education.length - 1) out.push(blank());
      });
      out.push(blank());
      return out;
    }

    case "skills": {
      const { skills } = resumeData;
      return [
        blank(),
        line("[ TECHNICAL SKILLS ]", "header"),
        blank(),
        line("  LANGUAGES", "cyan"),
        line(`    ${skills.languages.join("  ·  ")}`),
        blank(),
        line("  FRONTEND", "cyan"),
        line(`    ${skills.frontend.join("  ·  ")}`),
        blank(),
        line("  BACKEND & DATA", "cyan"),
        line(`    ${skills.backend.join("  ·  ")}`),
        blank(),
        line("  DEVOPS & CLOUD", "cyan"),
        line(`    ${skills.devops.join("  ·  ")}`),
        blank(),
        line("  TOOLS", "cyan"),
        line(`    ${skills.tools.join("  ·  ")}`),
        blank(),
      ];
    }

    case "links":
    case "social": {
      return [
        blank(),
        line("[ LINKS & PROFILES ]", "header"),
        blank(),
        ...resumeData.links.map((l) =>
          line(`  [${l.icon.toUpperCase()}]  ${l.label.padEnd(16)} →  ${l.url}`, "cyan")
        ),
        blank(),
        line("  Click any URL to open it in a new tab.", "dim"),
        blank(),
      ];
    }

    case "contact": {
      return [
        blank(),
        line("[ CONTACT ]", "header"),
        blank(),
        line(`  Email      →  ${resumeData.email}`, "cyan"),
        ...resumeData.links.map((l) =>
          line(`  ${l.label.padEnd(10)} →  ${l.url}`, "cyan")
        ),
        blank(),
        line("  I respond within 24h — let's build something great.", "dim"),
        blank(),
      ];
    }

    case "ls": {
      return [
        blank(),
        line("drwxr-xr-x   about/", "success"),
        line("drwxr-xr-x   experience/", "success"),
        line("drwxr-xr-x   education/", "success"),
        line("drwxr-xr-x   skills/", "success"),
        line("drwxr-xr-x   links/", "success"),
        line("drwxr-xr-x   contact/", "success"),
        blank(),
        line("  Run any directory name as a command to view contents.", "dim"),
        blank(),
      ];
    }

    case "banner":
      return getBanner();

    case "date":
      return [
        blank(),
        line(new Date().toUTCString(), "amber"),
        blank(),
      ];

    case "uname":
      return [
        blank(),
        line(`ResumeOS 2.0.26 ${resumeData.name.replace(" ", "")} GNU/Linux x86_64`, "amber"),
        blank(),
      ];

    case "echo":
      return [
        blank(),
        line(args.join(" ") || "", "normal"),
        blank(),
      ];

    case "":
      return [];

    default:
      return [
        blank(),
        line(`bash: ${cmd}: command not found`, "error"),
        line("Type 'help' for available commands.", "dim"),
        blank(),
      ];
  }
}
