import { resumeData } from "@/data/resumeData";

export type OutputLine = {
	id: string;
	text: string;
	type:
		| "normal"
		| "success"
		| "error"
		| "accent"
		| "dim"
		| "amber"
		| "cyan"
		| "header"
		| "blank";
};

let idCounter = 0;
const mkId = () => `line-${++idCounter}`;

const line = (
	text: string,
	type: OutputLine["type"] = "normal",
): OutputLine => ({
	id: mkId(),
	text,
	type,
});

const blank = (): OutputLine => line("", "blank");

export const AVAILABLE_COMMANDS = [
	"help",
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

// Stats interface
export interface SiteStats {
	sessionStartTime: number;
	commandCount: number;
}

// Admin command processor
export function processAdminCommand(
	input: string,
	isAuthenticated: boolean,
	stats: SiteStats,
	logoutCallback: () => void,
): OutputLine[] | "clear" {
	const trimmed = input.trim();
	const [cmd] = trimmed.toLowerCase().split(" ");

	if (!isAuthenticated && cmd !== "login") {
		return [
			blank(),
			line("Access denied. Authentication required.", "error"),
			blank(),
		];
	}

	switch (cmd) {
		case "admin": {
			const sessionDuration = Date.now() - stats.sessionStartTime;
			const minutes = Math.floor(sessionDuration / 60000);
			const seconds = Math.floor((sessionDuration % 60000) / 1000);
			const timeStr = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
			const startTime = new Date(stats.sessionStartTime).toLocaleTimeString();

			// prettier-ignore
			return [
				blank(),
				line("╔══════════════════════════════════════════════════════════╗", "success"),
				line("║                     ADMIN PANEL                          ║", "success"),
				line("╠══════════════════════════════════════════════════════════╣", "success"),
				line("║                                                          ║", "dim"),
				line("║  SESSION STATISTICS                                      ║", "header"),
				line("║                                                          ║", "dim"),
				line(`║  Session Duration:  ${timeStr.padEnd(37)}║`, "normal"),
				line(`║  Commands Run:      ${String(stats.commandCount).padEnd(37)}║`, "normal"),
				line(`║  Auth Status:       ${"AUTHENTICATED".padEnd(37)}║`, "cyan"),
				line(`║  Session Start:     ${startTime.padEnd(37)}║`, "normal"),
				line("║                                                          ║", "dim"),
				line("║  AVAILABLE ADMIN COMMANDS                                ║", "header"),
				line("║                                                          ║", "dim"),
				line("║  stats    →  View detailed session statistics            ║", "normal"),
				line("║  logout   →  Exit admin mode                             ║", "normal"),
				line("║                                                          ║", "dim"),
				line("╚══════════════════════════════════════════════════════════╝", "success"),
				blank(),
			];
		}

		case "stats": {
			const sessionDuration = Date.now() - stats.sessionStartTime;
			const hours = Math.floor(sessionDuration / 3600000);
			const minutes = Math.floor((sessionDuration % 3600000) / 60000);
			const seconds = Math.floor((sessionDuration % 60000) / 1000);
			const avgCommandTime =
				stats.commandCount > 0
					? Math.round(sessionDuration / stats.commandCount / 1000)
					: 0;

			return [
				blank(),
				line("[ SESSION STATISTICS ]", "header"),
				blank(),
				line(
					`  Session Start Time:  ${new Date(stats.sessionStartTime).toLocaleString()}`,
					"cyan",
				),
				line(`  Current Time:        ${new Date().toLocaleString()}`, "cyan"),
				line(
					`  Session Duration:    ${hours}h ${minutes}m ${seconds}s`,
					"cyan",
				),
				blank(),
				line(`  Total Commands:      ${stats.commandCount}`, "amber"),
				line(`  Avg Time/Command:    ${avgCommandTime}s`, "amber"),
				blank(),
				line("  Browser Info:", "header"),
				line(`    User Agent: ${navigator.userAgent.substring(0, 80)}`, "dim"),
				line(`    Platform:   ${navigator.platform}`, "dim"),
				line(`    Language:   ${navigator.language}`, "dim"),
				blank(),
			];
		}

		case "logout": {
			logoutCallback();
			return [
				blank(),
				line("✓ Logged out successfully", "success"),
				line("Admin mode deactivated.", "dim"),
				blank(),
			];
		}

		default:
			return [
				blank(),
				line(`Admin command not found: ${cmd}`, "error"),
				blank(),
			];
	}
}

export function getBanner(): OutputLine[] {
	// prettier-ignore
	return [
    blank(),
    line(" █████╗ ██╗  ██╗███████╗██╗         ███████╗ █████╗ ███╗   ██╗████████╗ █████╗ ███╗   ██╗ █████╗ ", "header"),
    line("██╔══██╗╚██╗██╔╝██╔════╝██║         ██╔════╝██╔══██╗████╗  ██║╚═ ██╔══╝██╔══██╗████╗  ██║██╔══██╗", "header"),
    line("███████║ ╚███╔╝ █████╗  ██║         ███████╗███████║██╔██╗ ██║   ██║   ███████║██╔██╗ ██║███████║", "header"),
    line("██╔══██║ ██╔██╗ ██╔══╝  ██║         ╚════██║██╔══██║██║╚██╗██║   ██║   ██╔══██║██║╚██╗██║██╔══██║", "header"),
    line("██║  ██║██╔╝ ██╗███████╗███████╗    ███████║██║  ██║██║ ╚████║   ██║   ██║  ██║██║ ╚████║██║  ██║", "header"),
    line("╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝    ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝", "header"),
    blank(),
    line(`${resumeData.title}`, "cyan"),
    line(`${resumeData.location}`, "dim"),
    blank(),
    line("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", "success"),
    blank(),
    line("Welcome to my interactive resume terminal!", "normal"),
    line("", "blank"),
    line("Feel free to explore and learn more about my experience, skills, and projects.", "normal"),
    line("This terminal interface lets you navigate through my professional background", "normal"),
    line("using simple commands.", "normal"),
    blank(),
    line("  Quick Start:", "cyan"),
    line("  • Type 'help' to see all available commands", "normal"),
    line("  • Type 'about' to learn more about me", "normal"),
    line("  • Use ↑/↓ arrows to navigate command history", "normal"),
    line("  • Press Tab for command autocomplete", "normal"),
    blank(),
    line("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", "success"),
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
			// prettier-ignore
			return [
        blank(),
        line("┌─ AVAILABLE COMMANDS ───────────────────────────────────────────┐", "success"),
        line("│                                                                │", "dim"),
        line("│  about            →  Personal introduction                     │", "normal"),
        line("│  experience       →  Work history & roles                      │", "normal"),
        line("│  education        →  Academic background                       │", "normal"),
        line("│  skills           →  Technical skill set                       │", "normal"),
        line("│  links            →  Social profiles & websites                │", "normal"),
        line("│  contact          →  How to reach me                           │", "normal"),
        line("│  ls               →  List all resume sections                  │", "normal"),
        line("│  banner           →  Show ASCII banner                         │", "normal"),
        line("│  date             →  Current timestamp                         │", "normal"),
        line("│  uname            →  System info                               │", "normal"),
        line("│  clear            →  Clear the terminal                        │", "normal"),
        line("│  echo <text>      →  Echo text back                            │", "normal"),
        line("│                                                                │", "dim"),
        line("└────────────────────────────────────────────────────────────────┘", "success"),
        blank(),
        line("TIP: Use ↑ / ↓ arrow keys to navigate command history.", "dim"),
        blank(),
      ];

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
			const out: OutputLine[] = [
				blank(),
				line("[ WORK EXPERIENCE ]", "header"),
				blank(),
			];
			resumeData.experience.forEach((job, i) => {
				out.push(line(`${job.company}`, "cyan"));
				out.push(
					line(`${job.role}  ·  ${job.period}  ·  ${job.location}`, "amber"),
				);
				job.bullets.forEach((b) => out.push(line(`  › ${b}`)));
				if (i < resumeData.experience.length - 1) out.push(blank());
			});
			out.push(blank());
			return out;
		}

		case "education":
		case "edu": {
			const out: OutputLine[] = [
				blank(),
				line("[ EDUCATION ]", "header"),
				blank(),
			];
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
					line(
						`  [${l.icon.toUpperCase()}]  ${l.label.padEnd(16)} →  ${l.url}`,
						"cyan",
					),
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
					line(`  ${l.label.padEnd(10)} →  ${l.url}`, "cyan"),
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
			return [blank(), line(new Date().toUTCString(), "amber"), blank()];

		case "uname":
			return [
				blank(),
				line(
					`ResumeOS 2.0.26 ${resumeData.name.replace(" ", "")} GNU/Linux x86_64`,
					"amber",
				),
				blank(),
			];

		case "echo":
			return [blank(), line(args.join(" ") || "", "normal"), blank()];

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
